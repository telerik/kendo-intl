import dateGenericFormat from './date-generic-format';

export default function formatDate(date, format, locale = "en") {
    return dateGenericFormat(date, format, locale, false);
}