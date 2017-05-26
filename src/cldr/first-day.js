import { cldr, getLocaleInfo } from './info';
import localeTerritory from './territory';

import { errors } from '../errors';

const { NoWeekData, NoFirstDay } = errors;

const DAYS = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];
const DEFAULT = '001';

export default function firstDay(locale) {
    const info = getLocaleInfo(locale);

    if (!isNaN(info.firstDay)) {
        return info.firstDay;
    }

    const weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw NoWeekData.error();
    }

    const firstDay = weekData.firstDay[localeTerritory(info)] || weekData.firstDay[DEFAULT];

    if (!firstDay) {
        throw NoFirstDay.error();
    }

    info.firstDay = DAYS.indexOf(firstDay);

    return info.firstDay;
}
