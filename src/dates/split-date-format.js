import datePattern from './date-pattern';
import dateNameType from './date-name-type';
import { dateFormatRegExp, DATE_FIELD_MAP } from './constants';
import { localeInfo } from '../cldr';

const NAME_TYPES = {
    month: {
        type: 'months',
        minLength: 3,
        standAlone: 'L'
    },

    quarter: {
        type: 'quarters',
        minLength: 3,
        standAlone: 'q'
    },

    weekday: {
        type: 'days',
        minLength: {
            E: 0,
            c: 3,
            e: 3
        },
        standAlone: 'c'
    },

    dayperiod: {
        type: 'dayPeriods',
        minLength: 0
    },

    era: {
        type: 'eras',
        minLength: 0
    }
};

const LITERAL = 'literal';
const NUMBER = 'number';

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
            const specifier = value[0];
            const type = DATE_FIELD_MAP[specifier];
            const part = {
                type: type,
                pattern: value
            };

            const names = NAME_TYPES[type];

            if (names) {
                const minLength = typeof names.minLength === NUMBER ? names.minLength : names.minLength[specifier];
                const patternLength = value.length;

                if (patternLength >= minLength) {
                    part.names = {
                        type: names.type,
                        nameType: dateNameType(patternLength),
                        standAlone: names.standAlone === specifier
                    };
                }
            }

            parts.push(part);
        }

        lastIndex = dateFormatRegExp.lastIndex;
        match = dateFormatRegExp.exec(pattern);
    }

    if (lastIndex < pattern.length) {
        addLiteral(parts, pattern.substring(lastIndex));
    }

    return parts;
}