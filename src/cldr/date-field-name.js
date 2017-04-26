import { localeInfo } from './info';
import { errors } from '../errors';

export default function dateFieldName(options, locale = "en") {
    const info = localeInfo(locale);
    const dateFields = info.calendar.dateFields;
    if (!dateFields) {
        throw errors.NoDateFieldNames.error();
    }

    const fieldNameInfo = dateFields[options.type] || {};

    return fieldNameInfo[options.nameType] || fieldNameInfo['wide'];
}
