import { localeInfo } from './info';

export default function dateFieldName(options, locale = "en") {
    const info = localeInfo(locale);
    const dateFields = info.calendar.dateFields || {};
    const fieldNameInfo = dateFields[options.type] || {};

    return fieldNameInfo[options.nameType] || fieldNameInfo['wide'];
}
