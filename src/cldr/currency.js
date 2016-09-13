import { cldr, getLocaleInfo } from './info';
import localeTerritory from './territory';
import { errors, formatError } from '../errors';

const DEFAULT_CURRENCY_FRACTIONS = 2;
const SYMBOL = "symbol";

function getCurrencyInfo(locale, currency) {
    const info = getLocaleInfo(locale);
    const currencies = info.numbers.currencies;
    if (!currencies) {
        throw new Error(formatError(errors.NoCurrencyError));
    }

    return currencies[currency];
}

function lengthComparer(a, b) {
    return b.length - a.length;
}

export function currencyDisplays(locale, currency) {
    const currencyInfo = getCurrencyInfo(locale, currency);
    if (!currencyInfo.displays) {
        const displays = [ currency ];
        for (let field in currencyInfo) {
            displays.push(currencyInfo[field]);
        }
        displays.sort(lengthComparer);
        currencyInfo.displays = displays;
    }

    return currencyInfo.displays;
}

export function currencyDisplay(locale, options) {
    const { value, currency, currencyDisplay = SYMBOL } = options;

    if (currencyDisplay === "code") {
        return currency;
    }

    const currencyInfo = getCurrencyInfo(locale, currency);
    let result;

    if (currencyDisplay === SYMBOL) {
        result = currencyInfo["symbol-alt-narrow"] || currencyInfo[SYMBOL];
    } else {
        if (typeof value === undefined || value !== 1) {
            result = currencyInfo["displayName-count-other"];
        } else {
            result = currencyInfo["displayName-count-one"];
        }
    }

    return result;
}

export function currencyFractionOptions(code) {
    let minimumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
    let maximumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;

    const fractions = ((cldr.supplemental.currencyData || {}).fractions || {})[code];

    if (fractions && fractions._digits) {
        maximumFractionDigits = minimumFractionDigits = parseInt(fractions._digits, 10);
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

export function territoryCurrencyCode(territory) {
    const currencyData = cldr.supplemental.currencyData;
    if (!currencyData) {
        throw new Error(formatError(errors.NoSupplementalCurrencyError));
    }

    const regionCurrencies = currencyData.region[territory];
    if (!regionCurrencies) {
        throw new Error(formatError(errors.NoCurrencyRegionError, territory));
    }
    const currencyCode = Object.keys(regionCurrencies[regionCurrencies.length - 1])[0];

    return currencyCode;
}

export function localeCurrency(locale) {
    const info = getLocaleInfo(locale);
    const numbers = info.numbers;
    if (!numbers.localeCurrency) {
        numbers.localeCurrency = territoryCurrencyCode(localeTerritory(info));
    }
    return numbers.localeCurrency;
}
