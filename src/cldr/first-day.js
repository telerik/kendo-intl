import { cldr, getLocaleInfo } from './info';
import localeTerritory from './territory';

export default function localeFirstDay(locale) {
    const weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw new Error("Cannot determine locale first day of week. Please load the supplemental weekData.");
    }

    const info = getLocaleInfo(locale);
    const firstDay = weekData.firstDay[localeTerritory(info)];

    return firstDay;
}