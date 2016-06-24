import { cldr, getLocaleInfo } from './info';
import localeTerritory from './territory';

const DAYS = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];

export default function firstDay(locale) {
    const weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw new Error("Cannot determine locale first day of week. Please load the supplemental weekData.");
    }

    const info = getLocaleInfo(locale);
    const firstDay = weekData.firstDay[localeTerritory(info)];

    return DAYS.indexOf(firstDay);
}