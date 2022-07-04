const MILLISECOND = 'duration-millisecond';
const UNIT_PATTERN = 'unitPattern-count-other';
const placeholderPattern = /\{0\}\s?/;

function extractUnit(value) {
    return value.replace(placeholderPattern, '');
}

export default function loadUnits(localeInfo, units) {
    localeInfo.calendar.dateFields.millisecond = {
        narrow: extractUnit(units.narrow[MILLISECOND][UNIT_PATTERN]),
        short: extractUnit(units.short[MILLISECOND][UNIT_PATTERN]),
        wide: extractUnit(units.long[MILLISECOND][UNIT_PATTERN])
    };
}
