import { localeInfo, dateFormatNames, localeFirstDay } from './cldr';
import { pad, formatString } from './utils';
import datePattern from './date-pattern';

const dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;
const DAYS = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

function formatDayOfWeekIndex(day, formatLength, localeInfo) {
    const firstDay = localeFirstDay(localeInfo);
    const firstDayIndex = DAYS.indexOf(firstDay);
    let dayIndex;
    if (day < firstDayIndex) {
        dayIndex = 7 - firstDayIndex + day;
    } else {
        dayIndex = day - firstDayIndex;
    }

    return dayIndex + 1;
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


function formatTimeZone(date, info, options) {
    const { shortHours, optionalMinutes, separator, localizedName, zZeroOffset } = options;
    const offset = date.getTimezoneOffset() / 60;
    if (offset === 0 && zZeroOffset) {
        return "Z";
    }
    const sign = offset <= 0 ? "+" : "-";
    const hoursMinutes = Math.abs(offset).toString().split(".");
    const minutes = hoursMinutes[1] || 0;
    let result = sign + (shortHours ? hoursMinutes[0] : pad(hoursMinutes[0], 2));
    if (minutes || !optionalMinutes) {
        result += (separator ? ":" : "") + pad(minutes, 2);
    }

    if (localizedName) {
        const localizedFormat = offset === 0 ? info.calendar.gmtZeroFormat : info.calendar.gmtFormat;
        result = formatString(localizedFormat, result);
    }

    return result;
}
function formatDayOfWeek(date, formatLength, info, standAlone) {
    let result;
    if (formatLength < 3) {
        result = formatDayOfWeekIndex(date.getDay(), formatLength, info);
    } else {
        result = dateFormatNames(info, "days", formatLength, standAlone)[date.getDay()];
    }
    return result;
}


const formatters = {};

formatters.d = function(date, formatLength) {
    return pad(date.getDate(), formatLength);
};

formatters.E = function(date, formatLength, info) {
    return dateFormatNames(info, "days", formatLength)[date.getDay()];
};

formatters.M = function(date, formatLength, info) {
    return formatMonth(date.getMonth(), formatLength, info, false);
};

formatters.L = function(date, formatLength, info) {
    return formatMonth(date.getMonth(), formatLength, info, true);
};

formatters.y = function(date, formatLength) {
    let year = date.getFullYear();
    if (formatLength === 2) {
        year = year % 100;
    }
    return pad(year, formatLength);
};

formatters.h = function(date, formatLength) {
    const hours = date.getHours() % 12 || 12;
    return pad(hours, formatLength);
};

formatters.H = function(date, formatLength) {
    return pad(date.getHours(), formatLength);
};

formatters.m = function(date, formatLength) {
    return pad(date.getMinutes(), formatLength);
};

formatters.s = function(date, formatLength) {
    return pad(date.getSeconds(), formatLength);
};

formatters.S = function(date, formatLength) {
    const milliseconds = date.getMilliseconds();
    let result;
    if (milliseconds !== 0) {
        result = String(date.getMilliseconds() / 1000).split(".")[1].substr(0, formatLength);
    } else {
        result = pad("", formatLength);
    }
    return result;
};

formatters.a = function(date, formatLength, info) {
    return dateFormatNames(info, "dayPeriods", formatLength)[date.getHours() < 12 ? "am" : "pm"];
};

formatters.z = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        shortHours: formatLength < 4,
        optionalMinutes: formatLength < 4,
        separator: true,
        localizedName: true
    });
};

formatters.Z = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        separator: formatLength > 3,
        localizedName: formatLength === 4,
        zZeroOffset: formatLength === 5
    });
};

formatters.x = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        optionalMinutes: formatLength === 1,
        separator: formatLength === 3 || formatLength === 5
    });
};

formatters.X = function(date, formatLength, info) {
    return formatTimeZone(date, info, {
        optionalMinutes: formatLength === 1,
        separator: formatLength === 3 || formatLength === 5,
        zZeroOffset: true
    });
};

formatters.G = function(date, formatLength, info) {
    let era = date.getFullYear() >= 0 ? 1 : 0;
    return dateFormatNames(info, "eras", formatLength)[era];
};

formatters.e = formatDayOfWeek;

formatters.c = function(date, formatLength, info) {
    return formatDayOfWeek(date, formatLength, info, true);
};

formatters.q = function(date, formatLength, info) {
    return formatQuarter(date, formatLength, info, true);
};

formatters.Q = formatQuarter;

export default function formatDate(date, format, locale = "en") {
    const info = localeInfo(locale);
    const pattern = datePattern(format, info);

    return pattern.replace(dateFormatRegExp, function(match) {
        let formatLength = match.length;
        let result;

        if (match.includes("'") || match.includes("\"")) {
            result = match.slice(1, formatLength - 1);
        } else {
            result = formatters[match[0]](date, formatLength, info);
        }

        return result;
    });
}