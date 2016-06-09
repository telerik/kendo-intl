import { localeInfo } from './cldr';
import { getCurrencySymbol, getFormatOptions } from './number-utils';

const DECIMAL_PLACEHOLDER = "n";
const DEFAULT_LOCALE = "en";

const exponentRegExp = /[eE][\-+]?[0-9]+/;
const nonBreakingSpaceRegExp = /\u00A0/g;


export function parseNumber(value, locale = DEFAULT_LOCALE, format = DECIMAL_PLACEHOLDER) {
    if (!value && value !== 0) {
        return null;
    }

    if (typeof value === "number") {
        return value;
    }

    const formatOptions = getFormatOptions(format);
    const info = localeInfo(locale);
    const numbers = info.numbers;
    const symbols = numbers.symbols;
    const currencySymbol = getCurrencySymbol(info, formatOptions);
    const percentSymbol = symbols.percentSign;
    let symbol = currencySymbol;
    let result = value.toString();
    let negative = result.indexOf("-");
    let isPercent;

    if (exponentRegExp.test(result)) {
        result = parseFloat(result.replace(symbols.decimal, "."));
        if (isNaN(result)) {
            result = null;
        }
        return result;
    }

    if (negative > 0) {
        return null;
    }
    negative = negative > -1;

    if (result.indexOf(currencySymbol) > -1 || (formatOptions && formatOptions.style === "currency")) {
        const patterns = numbers.currency.patterns;
        if (patterns.length > 1) {
            const parts = (patterns[1] || "").replace(currencySymbol, symbol).split(DECIMAL_PLACEHOLDER);
            if (result.indexOf(parts[0]) > -1 && result.indexOf(parts[1]) > -1) {
                result = result.replace(parts[0], "").replace(parts[1], "");
                negative = true;
            }
        }
    } else if (result.indexOf(percentSymbol) > -1) {
        isPercent = true;
        symbol = percentSymbol;
    }

    result = result.replace("-", "")
          .replace(symbol, "")
          .replace(nonBreakingSpaceRegExp, " ")
          .split(symbols.group.replace(nonBreakingSpaceRegExp, " ")).join("")
          .replace(symbols.decimal, ".");

    result = parseFloat(result);

    if (isNaN(result)) {
        result = null;
    } else if (negative) {
        result *= -1;
    }

    if (result && isPercent) {
        result /= 100;
    }

    return result;
}