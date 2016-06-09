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
const numberRegex = /\d+/;
const PLACEHOLDER = "{0}";

//seems like x, X cldr formats are closer to what we have. should consider adding support for them.
const standardDateFormats = [
    "yyyy/MM/dd HH:mm:ss",
    "yyyy/MM/dd HH:mm",
    "yyyy/MM/dd",
    "E MMM dd yyyy HH:mm:ss",
    "yyyy-MM-ddTHH:mm:ss.SSSSSSSZZZZZ",
    "yyyy-MM-ddTHH:mm:ss.SSSZZZZZ",
    "yyyy-MM-ddTHH:mm:ssZZZZZ",
    "yyyy-MM-ddTHH:mm:ss.SSSSSSS",
    "yyyy-MM-ddTHH:mm:ss.SSS",
    "yyyy-MM-ddTHH:mmZZZZZ",
    "yyyy-MM-ddTHH:mmZ",
    "yyyy-MM-ddTHH:mm:ss",
    "yyyy-MM-ddTHH:mm",
    "yyyy-MM-dd HH:mm:ss",
    "yyyy-MM-dd HH:mm",
    "yyyy-MM-dd",
    "HH:mm:ss",
    "HH:mm"
];
const FORMATS_SEQUENCE = [ "G", "g", "d", "F", "D", "T", "t" ];
const TWO_DIGIT_YEAR_MAX = 2029;

function outOfRange(value, start, end) {
    return !(value >= start && value <= end);
}

function lookAhead(match, state) {
    let { format, idx } = state;
    let i = 0;
    while (format[idx] === match) {
        i++;
        idx++;
    }
    if (i > 0) {
        idx -= 1;
    }
    state.idx = idx;
    return i;
}

function getNumber(size, state) {
    let regex = size ? (numberRegExp[size] || new RegExp('^\\d{1,' + size + '}')) : numberRegex,
        match = state.value.substr(state.valueIdx, size).match(regex);

    if (match) {
        match = match[0];
        state.valueIdx += match.length;
        return parseInt(match, 10);
    }
    return null;
}

function getIndexByName(names, state, lower) {
    let i = 0,
        length = names.length,
        name, nameLength,
        matchLength = 0,
        matchIdx = 0,
        subValue;

    for (; i < length; i++) {
        name = names[i];
        nameLength = name.length;
        subValue = state.value.substr(state.valueIdx, nameLength);

        if (lower) {
            subValue = subValue.toLowerCase();
        }

        if (subValue === name && nameLength > matchLength) {
            matchLength = nameLength;
            matchIdx = i;
        }
    }

    if (matchLength) {
        state.valueIdx += matchLength;
        return matchIdx + 1;
    }

    return null;
}

function checkLiteral(state) {
    let result = false;
    if (state.value.charAt(state.valueIdx) === state.format[state.idx]) {
        state.valueIdx++;
        result = true;
    }
    return result;
}

function calendarGmtFormats(calendar) {
    const { gmtFormat, gmtZeroFormat } = calendar;
    if (!gmtFormat) {
        throw new Error("Cannot determine locale GMT format. Please load the locale timeZoneNames data.");
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

function parseMonth(ch, state, info) {
    const count = lookAhead(ch, state);
    const names = dateFormatNames(info, "months", count, ch === "L", true);

    const month = count < 3 ? getNumber(2, state) : getIndexByName(names, state, true);

    if (month === null || outOfRange(month, 1, 12)) {
        return true;
    }
    state.month = month - 1;
}

function parseDayOfWeek(ch, state, info) {
    const count = lookAhead(ch, state);
    const names = dateFormatNames(info, "days", count, ch === "c", true);
    let dayOfWeek = count < 3 ? getNumber(1, state) : getIndexByName(names, state, true);
    if ((!dayOfWeek && dayOfWeek !== 0) || outOfRange(dayOfWeek, 1, 7)) {
        return true;
    }
}

const parsers = {};

parsers.d = function(state) {
    lookAhead("d", state);
    const day = getNumber(2, state);

    if (day === null || outOfRange(day, 1, 31)) {
        return true;
    }

    if (state.day === null) {
        state.day = day;
    }
};

parsers.E = function(state, info) {
    const count = lookAhead("E", state);
    //validate if it matches the day?
    let dayOfWeek = getIndexByName(dateFormatNames(info, "days", count, false, true), state, true);
    if (dayOfWeek === null) {
        return true;
    }
};

parsers.M = function(state, info) {
    return parseMonth("M", state, info);
};

parsers.L = function(state, info) {
    return parseMonth("L", state, info);
};

parsers.y = function(state) {
    const count = lookAhead("y", state);
    let year = getNumber(count === 1 ? undefined : count, state);

    if (year === null) {
        return true;
    }

    if (count === 2) {
        const currentYear = new Date().getFullYear();
        year = (currentYear - currentYear % 100) + year;
        if (year > TWO_DIGIT_YEAR_MAX) {
            year -= 100;
        }
    }

    state.year = year;
};

parsers.h = function(state) {
    lookAhead("h", state);

    let hours = getNumber(2, state);
    if (hours === 12) {
        hours = 0;
    }

    if (hours === null || outOfRange(hours, 0, 11)) {
        return true;
    }

    state.hours = hours;
};

parsers.a = function(state, info) {
    const count = lookAhead("a", state);
    let periodFormats = dateFormatNames(info, "dayPeriods", count, false, true);

    const pmHour = getIndexByName([ periodFormats.pm ], state,true);
    if (!pmHour && !getIndexByName([ periodFormats.am ], state, true)) {
        return true;
    }

    state.pmHour = pmHour;
};

parsers.H = function(state) {
    lookAhead("H", state);
    const hours = getNumber(2, state);
    if (hours === null || outOfRange(hours, 0, 23)) {
        return true;
    }
    state.hours = hours;
};

parsers.m = function(state) {
    lookAhead("m", state);
    const minutes = getNumber(2, state);

    if (minutes === null || outOfRange(minutes, 0, 59)) {
        return true;
    }

    state.minutes = minutes;
};

parsers.s = function(state) {
    lookAhead("s", state);
    const seconds = getNumber(2, state);
    if (seconds === null || outOfRange(seconds, 0, 59)) {
        return true;
    }
    state.seconds = seconds;
};

parsers.S = function(state) {
    const count = lookAhead("S", state);
    const match = state.value.substr(state.valueIdx, count);
    let milliseconds = null;

    if (!isNaN(parseInt(match, 10))) {
        milliseconds = parseFloat("0." + match, 10);
        milliseconds = round(milliseconds, 3);
        milliseconds *= 1000;
        state.valueIdx += count;
    }

    if (milliseconds === null || outOfRange(milliseconds, 0, 999)) {
        return true;
    }

    state.milliseconds = milliseconds;
};

parsers.z = function(state, info) {
    const count = lookAhead("z", state);

    if (!getIndexByName(calendarGmtFormats(info.calendar), state, true)) {
        return true;
    }

    const result = parseTimeZoneOffset(state.value.substr(state.valueIdx, 6), count < 4, true);
    if (result === null) {
        return true;
    }

    state.valueIdx += result.matchLength;
    state.hoursOffset = result.hoursOffset;
    state.minutesOffset = result.minutesOffset;
    state.UTC = true;
};

parsers.Z = function(state, info) {
    const count = lookAhead("Z", state);
    const { value, valueIdx } = state;

    state.UTC = true;

    if (count !== 4 && value.substr(valueIdx, 1) === "Z") {
        checkLiteral(state);
    } else {
        if (count === 4 && !getIndexByName(calendarGmtFormats(info.calendar), state, true)) {
            return true;
        }
        const result = parseTimeZoneOffset(value.substr(valueIdx, 6), false, count > 3);
        if (result === null) {
            return true;
        }

        state.valueIdx += result.matchLength;
        state.hoursOffset = result.hoursOffset;
        state.minutesOffset = result.minutesOffset;
    }
};

parsers.G = function(state, info) {
    const count = lookAhead("G", state);
    const eras = dateFormatNames(info, "eras", count, false, true);
    const era = getIndexByName([ eras[0], eras[1] ], state, true);

    if (era === null) {
        return true;
    }
};

parsers.e = function(state, info) {
    return parseDayOfWeek("e", state, info);
};

parsers.c = function(state, info) {
    return parseDayOfWeek("c", state, info);
};

function createDate(state) {
    let { year, month, day, hours, minutes, seconds, milliseconds, pmHour, UTC, hoursOffset, minutesOffset } = state;
    const hasTime = hours !== null || minutes !== null || seconds || null;
    const date = new Date();
    let result;

    if (year === null && month === null && day === null && hasTime) {
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate();
    } else {
        if (year === null) {
            year = date.getFullYear();
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

function parseExact(value, format, info) {
    if (!value) {
        return null;
    }

    let parseFormat = format;

    if (!parseFormat) {
        parseFormat = "d"; //shord date format
    }

    //if format is part of the patterns get real format
    if (info.calendar.patterns[parseFormat]) {
        parseFormat = info.calendar.patterns[format];
    }

    parseFormat = parseFormat.split("");
    const state = {
        format: parseFormat,
        idx: 0,
        value: value,
        valueIdx: 0,
        year: null,
        month: null,
        day: null,
        hours: null,
        minutes: null,
        seconds: null,
        milliseconds: null
    };
    const length = parseFormat.length;
    let literal = false;

    for (; state.idx < length; state.idx++) {
        let ch = parseFormat[state.idx];

        if (literal) {
            if (ch === "'") {
                literal = false;
            } else {
                checkLiteral(state);
            }
        } else {
            if (parsers[ch]) {
                let invalid = parsers[ch](state, info);
                if (invalid) {
                    return null;
                }
            } else if (ch === "'") {
                literal = true;
                checkLiteral(state);
            } else if (!checkLiteral(state)) {
                return null;
            }
        }
    }

    return createDate(state) || null;
}

function parseMicrosoftDateOffset(offset) {
    const sign = offset.substr(0, 1) === "-" ? -1 : 1;

    let result = offset.substring(1);
    result = (parseInt(result.substr(0, 2), 10) * 60) + parseInt(result.substring(2), 10);

    return sign * result;
}

function parseMicrosoftDateFormat(value) {
    if (value && value.indexOf("/D") === 0) {
        let date = dateRegExp.exec(value);
        if (date) {
            date = date[1];
            let tzoffset = offsetRegExp.exec(date.substring(1));

            date = new Date(parseInt(date, 10));

            if (tzoffset) {
                tzoffset = parseMicrosoftDateOffset(tzoffset[0]);
                date = convertTimeZone(date, date.getTimezoneOffset(), 0);
                date = convertTimeZone(date, 0, -1 * tzoffset);
            }

            return date;
        }
    }
}

function defaultFormats(calendar) {
    const formats = [];
    const patterns = calendar.patterns;
    const length = FORMATS_SEQUENCE.length;

    for (let idx = 0; idx < length; idx++) {
        formats.push(patterns[FORMATS_SEQUENCE[idx]]);
    }

    return formats.concat(standardDateFormats);
}

export default function parseDate(value, formats, locale = "en") {
    if (value instanceof Date) {
        return value;
    }

    let date = parseMicrosoftDateFormat(value);
    if (date) {
        return date;
    }

    const info = localeInfo(locale);
    let parseFormats = formats || defaultFormats(info.calendar);
    parseFormats = Array.isArray(parseFormats) ? parseFormats : [ parseFormats ];

    const length = parseFormats.length;

    for (let idx = 0; idx < length; idx++) {
        date = parseExact(value, parseFormats[idx], info);
        if (date) {
            return date;
        }
    }

    return date;
}