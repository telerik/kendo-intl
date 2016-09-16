import { cldr, getLocaleInfo } from './info';
import localeTerritory from './territory';

import { errors } from '../errors';

const DAYS = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

export default function firstDay(locale) {
    const weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw new Error(errors.NoWeekDataError.formatMessage());
    }

    const info = getLocaleInfo(locale);
    const firstDay = weekData.firstDay[localeTerritory(info)];

    if (!firstDay) {
        throw new Error(errors.NoFirstDayError.formatMessage());
    }

    return DAYS.indexOf(firstDay);
}
