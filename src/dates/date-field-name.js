import { localeInfo } from '../cldr';

const MONTH = 'month';
const HOUR = 'hour';
const ZONE = 'zone';
const WEEKDAY = 'weekday';
const QUARTER = 'quarter';

const dateFieldMap = {
    'y': 'year',
    'M': MONTH,
    'L': MONTH,
    'd': 'day',
    'E': 'weekday',
    'h': HOUR,
    'H': HOUR,
    'm': 'minute',
    's': 'second',
    'a': 'dayperiod',
    'x': ZONE,
    'X': ZONE,
    'z': ZONE,
    'Z': ZONE,
    'G': 'era',
    'c': WEEKDAY,
    'e': WEEKDAY,
    'q': QUARTER,
    'Q': QUARTER
};

const dateNameType = function(formatLength) {
    let nameType;
    if (formatLength <= 3) {
        nameType = "short";
    } else if (formatLength === 4) {
        nameType = "wide";
    } else {
        nameType = "narrow";
    }

    return nameType;
};

const dateFieldDisplayName = function(info, match, matchLength) {
    const fieldName = dateFieldMap[match] || '';
    const fieldNameInfo = info.calendar.dateFields[fieldName];

    return fieldNameInfo[dateNameType(matchLength)] || fieldNameInfo['wide'];
};


export default function(specifier = "", locale = "en") {
    const info = localeInfo(locale);
    return dateFieldDisplayName(info, specifier[0], specifier.length);
}

/*
//TODO: export in common file
import datePattern from './date-pattern';

const dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;

export default function(format, locale = "en") {
    const info = localeInfo(locale);
    const pattern = datePattern(format, info);
    const formatLength = format.length;

    console.log(pattern);

    return pattern.replace(dateFormatRegExp, function(match) {
        if (match.includes("'") || match.includes("\"")) {
            return match.slice(1, formatLength - 1);
        }

        return dateFieldDisplayName(info, match[0], match.length);
    });
}*/
