import dateGenericFormat from './date-generic-format';

export default function dateFormatString(date, format, locale = "en") {
    return dateGenericFormat(date, format, locale, true);
}