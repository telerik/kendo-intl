import { localeInfo, localeCurrency, currencyDisplays } from '../cldr';
import { PERCENT, NUMBER_PLACEHOLDER, CURRENCY_PLACEHOLDER, DEFAULT_LOCALE, EMPTY, POINT } from '../common/constants';
import isCurrencyStyle from './is-currency-style';

const exponentRegExp = /[eE][\-+]?[0-9]+/;
const nonBreakingSpaceRegExp = /\u00A0/g;

function cleanCurrencyNumber(value, info, format) {
    let isCurrency = isCurrencyStyle(format.style);
    let number = value;
    let negative;

    const currency = format.currency || localeCurrency(info, isCurrency);

    if (currency) {
        const displays = currencyDisplays(info, currency, isCurrency);
        if (displays) {
            for (let idx = 0; idx < displays.length; idx++) {
                let display = displays[idx];
                if (number.includes(display)) {
                    number = number.replace(display, EMPTY);
                    isCurrency = true;
                    break;
                }
            }
        }

        if (isCurrency) {
            const patterns = info.numbers.currency.patterns;
            if (patterns.length > 1) {
                const parts = (patterns[1] || EMPTY).replace(CURRENCY_PLACEHOLDER, EMPTY).split(NUMBER_PLACEHOLDER);
                if (number.indexOf(parts[0]) > -1 && number.indexOf(parts[1]) > -1) {
                    number = number.replace(parts[0], EMPTY).replace(parts[1], EMPTY);
                    negative = true;
                }
            }
        }
    }

    return {
        number: number,
        negative: negative
    };
}

export default function parseNumber(value, locale = DEFAULT_LOCALE, format = {}) {
    if (!value && value !== 0) {
        return null;
    }

    if (typeof value === "number") {
        return value;
    }

    const info = localeInfo(locale);
    const symbols = info.numbers.symbols;

    let number = value.toString();
    let isPercent;

    if (exponentRegExp.test(number)) {
        number = parseFloat(number.replace(symbols.decimal, POINT));
        return isNaN(number) ? null : number;
    }

    const negativeSignIndex = number.indexOf("-");
    if (negativeSignIndex > 0) {
        return null;
    }

    let isNegative = negativeSignIndex > -1;
    const { negative: negativeCurrency, number: newNumber } = cleanCurrencyNumber(number, info, format);

    number = newNumber;
    isNegative = negativeCurrency !== undefined ? negativeCurrency : isNegative;

    if (format.style === PERCENT || number.indexOf(symbols.percentSign) > -1) {
        number = number.replace(symbols.percentSign, EMPTY);
        isPercent = true;
    }

    number = number.replace("-", EMPTY)
          .replace(nonBreakingSpaceRegExp, " ")
          .split(symbols.group.replace(nonBreakingSpaceRegExp, " ")).join(EMPTY)
          .replace(symbols.decimal, POINT);

    number = parseFloat(number);

    if (isNaN(number)) {
        number = null;
    } else if (isNegative) {
        number *= -1;
    }

    if (number && isPercent) {
        number /= 100;
    }

    return number;
}
