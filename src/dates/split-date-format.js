import datePattern from './date-pattern';
import dateNameType from './date-name-type';
import { dateFormatRegExp, DATE_FIELD_MAP } from './constants';
import { localeInfo } from '../cldr';

const NAME_TYPES = {
    month: {
        nameType: 'months',
        minLength: 3
    },

    quarter: {
        nameType: 'quarters',
        minLength: 3
    },

    weekday: {
        nameType: 'days',
        minLength: 0
    },

    dayperiod: {
        nameType: 'dayPeriods',
        minLength: 0
    },

    era: {
        nameType: 'eras',
        minLength: 0
    }
};
const LITERAL = 'literal';

function addLiteral(parts, value) {
    const lastPart = parts[parts.length - 1];
    if (lastPart && lastPart.type === LITERAL) {
        lastPart.pattern += value;
    } else {
        parts.push({
            type: LITERAL,
            pattern: value
        });
    }
}

export default function splitDateFormat(format, locale = 'en') {
    const info = localeInfo(locale);
    const pattern = datePattern(format, info);
    const parts = [];
    let lastIndex = dateFormatRegExp.lastIndex = 0;
    let match = dateFormatRegExp.exec(pattern);

    while (match) {
        let value = match[0];

        if (lastIndex < match.index) {
            addLiteral(parts, pattern.substring(lastIndex, match.index));
        }

        if (value.startsWith('"') || value.startsWith("'")) {
            addLiteral(parts, value);
        } else {
            const type = DATE_FIELD_MAP[value[0]];
            const part = {
                type: type,
                pattern: value
            };

            if (NAME_TYPES[type] && value.length >= NAME_TYPES[type].minLength) {
                part.names = {
                    type: NAME_TYPES[type].nameType,
                    nameType: dateNameType(value.length)
                };
            }

            parts.push(part);
        }

        lastIndex = dateFormatRegExp.lastIndex;
        match = dateFormatRegExp.exec(pattern);
    }

    return parts;
}