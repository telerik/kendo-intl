import { cldr, getLocaleInfo } from './info';
import localeTerritory from './territory';

import { errors, formatError } from '../errors';

const DAYS = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

export default function firstDay(locale) {
    const weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw new Error(formatError(errors.NoWeekDataError));
    }

    const info = getLocaleInfo(locale);
    const firstDay = weekData.firstDay[localeTerritory(info)];

    if (!firstDay) {
        throw new Error(formatError(errors.NoFirstDayError));
    }

    return DAYS.indexOf(firstDay);
}
