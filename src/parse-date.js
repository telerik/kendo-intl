import { localeInfo, dateFormatNames } from './cldr';
import { adjustDST, convertTimeZone } from './date-utils';
import { round } from './utils';

const timeZoneOffsetRegExp = /([+|\-]\d{1,2})(:?)(\d{1,2})?/;
const dateRegExp = /^\/Date\((.*?)\)\/$/;
const offsetRegExp = /[+-]\d*/;
const numberRegExp = {
    2: /^\d{1,2}/,
    3: /^\d{1,3}/,
    4: /^\d{4}/
};
const PLACEHOLDER = "{0}";

const standardDateFormats = [
    "yyyy/MM/dd HH:mm:ss",
    "yyyy/MM/dd HH:mm",
    "yyyy/MM/dd",
    "ddd MMM dd yyyy HH:mm:ss",
    "yyyy-MM-ddTHH:mm:ss.fffffffzzz",
    "yyyy-MM-ddTHH:mm:ss.fffzzz",
    "yyyy-MM-ddTHH:mm:sszzz",
    "yyyy-MM-ddTHH:mm:ss.fffffff",
    "yyyy-MM-ddTHH:mm:ss.fff",
    "yyyy-MM-ddTHH:mmzzz",
    "yyyy-MM-ddTHH:mmzz",
    "yyyy-MM-ddTHH:mm:ss",
    "yyyy-MM-ddTHH:mm",
    "yyyy-MM-dd HH:mm:ss",
    "yyyy-MM-dd HH:mm",
    "yyyy-MM-dd",
    "HH:mm:ss",
    "HH:mm"
];

function calendarGmtFormats(calendar) {
    const { gmtFormat, gmtZeroFormat } = calendar;
    if (!gmtFormat) {
        throw new Error("Cannot determine locale GMT format. Please load ");
    }

    return [ gmtFormat.replace(PLACEHOLDER, "").toLowerCase(), gmtZeroFormat.replace(PLACEHOLDER, "").toLowerCase() ];
}

function parseTimeZoneOffset(value, shortFormat, hasSeparator) {
    const matches = timeZoneOffsetRegExp.exec(value);
    if (!matches) {
        return null;
    }

    const hoursMatch = matches[1];
    const minutesMatch = matches[3];
    const hoursOffset = parseInt(hoursMatch, 10);
    const separator = matches[2];
    let minutesOffset = parseInt(minutesMatch, 10);

    if (isNaN(hoursOffset) || (!shortFormat && (isNaN(minutesOffset) || hoursMatch.length !== 3 || minutesMatch.length !== 2)) || (!hasSeparator && separator)) {
        return null;
    }

    if (isNaN(minutesOffset)) {
        minutesOffset = null;
    }

    if (outOfRange(hoursOffset, -12, 13) || (minutesOffset && outOfRange(minutesOffset, 0, 59))) {
        return null;
    }

    return {
        hoursOffset: hoursOffset,
        minutesOffset: minutesOffset,
        matchLength: matches[0].length
    };
}

function outOfRange(value, start, end) {
    return !(value >= start && value <= end);
}

function parseExact(value, parseFormat, info) {
    if (!value) {
        return null;
    }

    let format = parseFormat,
        lookAhead = function(match) {
            let i = 0;
            while (format[idx] === match) {
                i++;
                idx++;
            }
            if (i > 0) {
                idx -= 1;
            }
            return i;
        },
        getNumber = function(size) {
            let rg = numberRegExp[size] || new RegExp('^\\d{1,' + size + '}'),
                match = value.substr(valueIdx, size).match(rg);

            if (match) {
                match = match[0];
                valueIdx += match.length;
                return parseInt(match, 10);
            }
            return null;
        },
        getIndexByName = function(names, lower) {
            let i = 0,
                length = names.length,
                name, nameLength,
                matchLength = 0,
                matchIdx = 0,
                subValue;

            for (; i < length; i++) {
                name = names[i];
                nameLength = name.length;
                subValue = value.substr(valueIdx, nameLength);

                if (lower) {
                    subValue = subValue.toLowerCase();
                }

                if (subValue === name && nameLength > matchLength) {
                    matchLength = nameLength;
                    matchIdx = i;
                }
            }

            if (matchLength) {
                valueIdx += matchLength;
                return matchIdx + 1;
            }

            return null;
        },
        checkLiteral = function() {
            let result = false;
            if (value.charAt(valueIdx) === format[idx]) {
                valueIdx++;
                result = true;
            }
            return result;
        },
        year = null,
        month = null,
        day = null,
        hours = null,
        minutes = null,
        seconds = null,
        milliseconds = null,
        idx = 0,
        valueIdx = 0,
        literal = false,
        date = new Date(),
        calendar = info.calendar,
        twoDigitYearMax = calendar.twoDigitYearMax || 2029,
        defaultYear = date.getFullYear(),
        ch, count, length, pattern,
        pmHour, UTC,
        hoursOffset, minutesOffset,
        hasTime, match,
        result;

    if (!format) {
        format = "d"; //shord date format
    }

  //if format is part of the patterns get real format
    pattern = calendar.patterns[format];
    if (pattern) {
        format = pattern;
    }

    format = format.split("");
    length = format.length;

    for (; idx < length; idx++) {
        ch = format[idx];

        if (literal) {
            if (ch === "'") {
                literal = false;
            } else {
                checkLiteral();
            }
        } else {
            if (ch === "E") {
                count = lookAhead("E");
                //validate if it matches the day?
                let dayOfWeek = getIndexByName(dateFormatNames(info, "days", count, false, true), true);
                if (dayOfWeek === null) {
                    return null;
                }
            } else if (ch === "d") {
                count = lookAhead("d");

                if (day !== null) {
                    continue;
                }

                day = getNumber(2);

                if (day === null || outOfRange(day, 1, 31)) {
                    return null;
                }
            } else if (ch === "M" || ch === "L") {
                count = lookAhead(ch);

                month = count < 3 ? getNumber(2) : getIndexByName(dateFormatNames(info, "months", count, ch === "L", true), true);

                if (month === null || outOfRange(month, 1, 12)) {
                    return null;
                }
                month -= 1; //because month is zero based
            } else if (ch === "y") {
                count = lookAhead("y");
                year = getNumber(count);

                if (year === null) {
                    return null;
                }

                if (count === 2) {
                    if (typeof twoDigitYearMax === "string") {
                        twoDigitYearMax = defaultYear + parseInt(twoDigitYearMax, 10);
                    }

                    year = (defaultYear - defaultYear % 100) + year;
                    if (year > twoDigitYearMax) {
                        year -= 100;
                    }
                }
            } else if (ch === "h" ) {
                lookAhead("h");
                hours = getNumber(2);
                if (hours === 12) {
                    hours = 0;
                }
                if (hours === null || outOfRange(hours, 0, 11)) {
                    return null;
                }
            } else if (ch === "H") {
                lookAhead("H");
                hours = getNumber(2);
                if (hours === null || outOfRange(hours, 0, 23)) {
                    return null;
                }
            } else if (ch === "m") {
                lookAhead("m");
                minutes = getNumber(2);
                if (minutes === null || outOfRange(minutes, 0, 59)) {
                    return null;
                }
            } else if (ch === "s") {
                lookAhead("s");
                seconds = getNumber(2);
                if (seconds === null || outOfRange(seconds, 0, 59)) {
                    return null;
                }
            } else if (ch === "S") {
                count = lookAhead("S");
                match = value.substr(valueIdx, count);

                if (!isNaN(parseInt(match, 10))) {
                    milliseconds = parseFloat("0." + match, 10);
                    milliseconds = round(milliseconds, 3);
                    milliseconds *= 1000;
                    valueIdx += count;
                }

                if (milliseconds === null || outOfRange(milliseconds, 0, 999)) {
                    return null;
                }
            } else if (ch === "a") {
                count = lookAhead("a");
                let periodFormats = dateFormatNames(info, "dayPeriods", count);

                pmHour = getIndexByName([ periodFormats.pm ]);
                if (!pmHour && !getIndexByName([ periodFormats.am ])) {
                    return null;
                }
            } else if (ch === "z") {
                UTC = true;
                count = lookAhead("z");

                if (!getIndexByName(calendarGmtFormats(calendar), true)) {
                    return null;
                }

                result = parseTimeZoneOffset(value.substr(valueIdx, 6), count < 4, true);
                if (result === null) {
                    return result;
                }
                let matchLength;
                ({ minutesOffset, hoursOffset, matchLength } = result);
                valueIdx += matchLength;
            } else if (ch === "Z") {
                UTC = true;
                count = lookAhead("Z");

                if (count !== 4 && value.substr(valueIdx, 1) === "Z") {
                    checkLiteral();
                    continue;
                }

                if (count === 4 && !getIndexByName(calendarGmtFormats(calendar), true)) {
                    return null;
                }
                result = parseTimeZoneOffset(value.substr(valueIdx, 6), false, count > 3);
                if (result === null) {
                    return result;
                }

                let matchLength;
                ({ minutesOffset, hoursOffset, matchLength } = result);
                valueIdx += matchLength;
            } else if (ch === "G") {
                count = lookAhead("G");

                const eras = dateFormatNames(info, "eras", count, false, true);
                const era = getIndexByName([ eras[0], eras[1] ], true);

                if (era === null) {
                    return null;
                }
            } else if (ch === "e" || ch === "c") {
                count = lookAhead(ch);
                result = count < 3 ? getNumber(2) : getIndexByName(dateFormatNames(info, "days", count, ch === "c", true), true);
                if (!result && result !== 0) {
                    return null;
                }
            } else if (ch === "'") {
                literal = true;
                checkLiteral();
            } else if (!checkLiteral()) {
                return null;
            }
        }
    }

    hasTime = hours !== null || minutes !== null || seconds || null;

    if (year === null && month === null && day === null && hasTime) {
        year = defaultYear;
        month = date.getMonth();
        day = date.getDate();
    } else {
        if (year === null) {
            year = defaultYear;
        }

        if (day === null) {
            day = 1;
        }
    }

    if (pmHour && hours < 12) {
        hours += 12;
    }

    if (UTC) {
        if (hoursOffset) {
            hours += -hoursOffset;
        }

        if (minutesOffset) {
            minutes += -minutesOffset * (hoursOffset < 0 ? -1 : 1);
        }

        result = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
    } else {
        result = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        adjustDST(result, hours);
    }

    if (year < 100) {
        result.setFullYear(year);
    }

    if (result.getDate() !== day && UTC === undefined) {
        return null;
    }

    return result;
}

function parseMicrosoftFormatOffset(offset) {
    const sign = offset.substr(0, 1) === "-" ? -1 : 1;

    let result = offset.substring(1);
    result = (parseInt(result.substr(0, 2), 10) * 60) + parseInt(result.substring(2), 10);

    return sign * result;
}

export default function parseDate(value, formats, locale = "en") {
    if (value instanceof Date) {
        return value;
    }

    let date;
    if (value && value.indexOf("/D") === 0) {
        date = dateRegExp.exec(value);
        if (date) {
            date = date[1];
            let tzoffset = offsetRegExp.exec(date.substring(1));

            date = new Date(parseInt(date, 10));

            if (tzoffset) {
                tzoffset = parseMicrosoftFormatOffset(tzoffset[0]);
                date = convertTimeZone(date, date.getTimezoneOffset(), 0);
                date = convertTimeZone(date, 0, -1 * tzoffset);
            }

            return date;
        }
    }

    const info = localeInfo(locale);
    let parseFormats = formats;
    if (!parseFormats) {
        parseFormats = standardDateFormats.concat(info.calendar.patterns);
    }

    parseFormats = Array.isArray(parseFormats) ? parseFormats : [ parseFormats ];
    let length = parseFormats.length;

    for (let idx = 0; idx < length; idx++) {
        date = parseExact(value, parseFormats[idx], info);
        if (date) {
            return date;
        }
    }

    return date;
}