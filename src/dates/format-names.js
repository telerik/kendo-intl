import dateFormatNames from '../cldr/date-format-names';

function dateNameType(formatLength) {
    let nameType;
    if (formatLength <= 3) {
        nameType = "abbreviated";
    } else if (formatLength === 4) {
        nameType = "wide";
    } else if (formatLength === 5) {
        nameType = "narrow";
    } else if (formatLength === 6) {
        nameType = "short";
    }

    return nameType;
}

export default function formatNames(locale, type, formatLength, standAlone, lower) {
    return dateFormatNames(locale, type, dateNameType(formatLength), standAlone, lower);
}