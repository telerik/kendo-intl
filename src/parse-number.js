import { localeInfo, localeCurrency, currencyDisplays } from './cldr';

const exponentRegExp = /[eE][\-+]?[0-9]+/;
const nonBreakingSpaceRegExp = /\u00A0/g;

function cleanCurrencyNumber(value, info, format) {
    const currency = format.currency || localeCurrency(info);
    const displays = currencyDisplays(info, currency);
    let isCurrency = format.style === "currency";
    let number = value;
    let negative;


    for (let idx = 0; idx < displays.length; idx++) {
        let display = displays[idx];
        if (number.includes(display)) {
            number = number.replace(display, "");
            isCurrency = true;
            break;
        }
    }

    if (isCurrency) {
        const patterns = info.numbers.currency.patterns;
        if (patterns.length > 1) {
            const parts = (patterns[1] || "").replace("$", "").split("n");
            if (number.indexOf(parts[0]) > -1 && number.indexOf(parts[1]) > -1) {
                number = number.replace(parts[0], "").replace(parts[1], "");
                negative = true;
            }
        }
    }

    return {
        number: number,
        negative: negative
    };
}

export function parseNumber(value, locale = "en", format = {}) {
    if (!value && value !== 0) {
        return null;
    }

    if (typeof value === "number") {
        return value;
    }

    const info = localeInfo(locale);
    const symbols = info.numbers.symbols;

    let number = value.toString();
    let negative = number.indexOf("-");
    let isPercent;

    if (exponentRegExp.test(number)) {
        number = parseFloat(number.replace(symbols.decimal, "."));
        if (isNaN(number)) {
            number = null;
        }
        return number;
    }

    if (negative > 0) {
        return null;
    }

    negative = negative > -1;

    ({ negative = negative, number } = cleanCurrencyNumber(number, info, format));

    if (format.style === "percent" || number.indexOf(symbols.percentSign) > -1) {
        number = number.replace(symbols.percentSign, "");
        isPercent = true;
    }

    number = number.replace("-", "")
          .replace(nonBreakingSpaceRegExp, " ")
          .split(symbols.group.replace(nonBreakingSpaceRegExp, " ")).join("")
          .replace(symbols.decimal, ".");

    number = parseFloat(number);

    if (isNaN(number)) {
        number = null;
    } else if (negative) {
        number *= -1;
    }

    if (number && isPercent) {
        number /= 100;
    }

    return number;
}