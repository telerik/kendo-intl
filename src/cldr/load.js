import { cldr } from './info';
import loadNumbersInfo from './load-numbers';
import loadCalendarInfo from './load-dates';
import localeTerritory from './territory';

const DEFAULT_CURRENCY = "USD";

loadDefaultLocale();

function loadDefaultLocale() {
    cldr.supplemental = {};

    const numbers = require("cldr-data/main/en/numbers.json");
    const currencies = require("cldr-data/main/en/currencies.json");
    const timeZoneNames = require("cldr-data/main/en/timeZoneNames.json");
    const calendar = require("cldr-data/main/en/ca-gregorian.json");

    load(numbers, currencies, timeZoneNames, calendar);

    cldr.en.numbers.localeCurrency = DEFAULT_CURRENCY;
}

function loadLocale(locale, info) {
    for (let field in info) {
        if (field === "numbers") {
            loadNumbersInfo(locale, info[field]);
        } else if (field === "dates") {
            loadCalendarInfo(locale, info[field]);
        }
    }
}

export default function load() {
    const length = arguments.length;
    for (let idx = 0; idx < length; idx++) {
        let entry = arguments[idx];
        if (entry.main) {
            let locale = Object.keys(entry.main)[0];
            let info = entry.main[locale];
            let localeInfo = cldr[locale] = cldr[locale] || {};

            localeInfo.name = localeInfo.name || locale;
            localeInfo.identity = localeInfo.identity || info.identity;

            localeTerritory(localeInfo);
            loadLocale(locale, info);
        } else if (entry.supplemental) {
            Object.assign(cldr.supplemental, entry.supplemental);
        }
    }
}