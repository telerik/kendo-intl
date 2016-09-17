import { cldr, getLocaleInfo } from './info';
import localeTerritory from './territory';

import { errors } from '../errors';

const { NoWeekData, NoFirstDay } = errors;

const DAYS = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

export default function firstDay(locale) {
    const weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw NoWeekData.error();
    }

    const info = getLocaleInfo(locale);
    const firstDay = weekData.firstDay[localeTerritory(info)];

    if (!firstDay) {
        throw NoFirstDay.error();
    }

    return DAYS.indexOf(firstDay);
}
