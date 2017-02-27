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

    dayPeriod: {
        nameType: 'dayPeriods',
        minLength: 0
    },

    era: {
        nameType: 'eras',
        minLength: 0
    }

};

export default function splitDateFormat(format, locale = 'en') {
    const info = localeInfo(locale);
    const pattern = datePattern(format, info);
    const parts = [];
    let lastIndex = dateFormatRegExp.lastIndex = 0;
    let match = dateFormatRegExp.exec(pattern);

    while (match) {
        let value = match[0];

        if (lastIndex < match.index) {
            parts.push({
                type: 'literal',
                pattern: pattern.substring(lastIndex, match.index)
            });
        }

        if (value.startsWith('"') || value.startsWith("'")) {
            parts.push({
                type: 'literal' ,
                pattern: value
            });
        } else {
            const type = DATE_FIELD_MAP[value[0]];
            let names;

            if (NAME_TYPES[type] && value.length >= NAME_TYPES[type].minLength) {
                names = {
                    type: NAME_TYPES[type].nameType,
                    nameType: dateNameType(value.length)
                };
            }

            parts.push({
                type: type,
                names: names,
                pattern: value
            });
        }

        lastIndex = dateFormatRegExp.lastIndex;
        match = dateFormatRegExp.exec(pattern);
    }

    return parts;
}