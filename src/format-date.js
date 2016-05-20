import { localeInfo, dateFormatNames, cldr } from './cldr';
import { pad, formatString } from './utils';

const dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;
const DAYS = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

function formatDayOfWeekIndex(day, formatLength, localeInfo) {
    const weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw new Error("Day of week index requires loading supplemental weekData");
    }

    const firstDay = weekData.firstDay[localeInfo.territory];
    const firstDayIndex = DAYS.indexOf(firstDay);
    let dayIndex;
    if (day < firstDayIndex) {
        dayIndex = 7 - firstDayIndex + day;
    } else {
        dayIndex = day - firstDayIndex;
    }

    return pad(dayIndex + 1, formatLength);
}

function formatMonth(month, formatLength, info, standAlone) {
    if (formatLength <= 2) {
        return pad(month + 1, formatLength);
    }
    return dateFormatNames(info, "months", formatLength, standAlone)[month];
}

function formatQuarter(date, formatLength, info, standAlone) {
    const quarter = Math.floor(date.getMonth() / 3);
    if (formatLength < 3) {
        return quarter + 1;
    }

    return dateFormatNames(info, "quarters", formatLength, standAlone)[quarter];
}

function formatTimeZone(date, shortFormat, separator, localizedName, calendar) {
    const offset = date.getTimezoneOffset() / 60;
    const sign = offset < 0 ? "+" : "-";
    const hoursMinutes = Math.abs(offset).toString().split(".");
    const minutes = hoursMinutes[1] || 0;
    let result = sign + (shortFormat ? hoursMinutes[0] : pad(hoursMinutes[0], 2));
    if (minutes || !shortFormat) {
        result += (separator ? ":" : "") + pad(minutes, 2);
    }

    if (localizedName) {
        const localizedFormat = offset === 0 ? calendar.gmtZeroFormat : calendar.gmtFormat;
        result = formatString(localizedFormat, result);
    }

    return result;
}

function getDatePattern(format, calendar) {
    let result = format;
    if (calendar.patterns[format]) {
        result = calendar.patterns[format];
    } else if (calendar.availableFormats[format]) {
        result = calendar.availableFormats[format];
    }
    return result;
}

export default function formatDate(date, numberFormat, locale) {
    const info = localeInfo(locale);
    const calendar = info.calendar;

    let format = getDatePattern(numberFormat, calendar);

    return format.replace(dateFormatRegExp, function(match) {
        let matchLength = match.length;
        let result;

        if (match.includes("d")) {
            result = pad(date.getDate(), matchLength);
        } else if (match.includes("E")) {
            result = dateFormatNames(info, "days", matchLength)[date.getDay()];
        } else if (match.includes("M") || match.includes("L")) {
            result = formatMonth(date.getMonth(), matchLength, info, match.includes("L"));
        } else if (match.includes("y")) {
            let year = date.getFullYear();
            result = pad(matchLength === 2 ? year % 100 : year, matchLength);
        } else if (match.includes("h")) {
            result = pad(date.getHours() % 12 || 12, matchLength);
        } else if (match.includes("H")) {
            result = pad(date.getHours(), matchLength);
        } else if (match.includes("m")) {
            result = pad(date.getMinutes(), matchLength);
        } else if (match.includes("s")) {
            result = pad(date.getSeconds(), matchLength);
        } else if (match.includes("S")) {
            result = pad(String(date.getMilliseconds()).substr(0, matchLength), matchLength);
        } else if (match.includes("a")) {
            result = dateFormatNames(info, "dayPeriods", matchLength)[date.getHours() < 12 ? "am" : "pm"];
        } else if (match.includes("z")) {
            result = formatTimeZone(date, matchLength < 4, true, true, calendar);
        } else if (match.includes("Z")) {
            result = formatTimeZone(date, false, matchLength > 3, matchLength === 4, calendar);
        } else if (match.includes("G")) {
            let era = date.getFullYear() >= 0 ? 1 : 0;
            result = dateFormatNames(info, "eras", matchLength)[era];
        } else if (match.includes("e") || match.includes("c")) {
            if (matchLength < 3) {
                result = formatDayOfWeekIndex(date.getDay(), matchLength, info);
            } else {
                result = dateFormatNames(info, "days", matchLength, match.includes("c"))[date.getDay()];
            }
        } else if (match.includes("q") || match.includes("Q")) {
            result = formatQuarter(date, matchLength, info, match.includes("q"));
        }

        return result !== undefined ? result : match.slice(1, matchLength - 1);
    });
}