import { localeInfo } from '../cldr';
import { CURRENCY, ACCOUNTING, DECIMAL, PERCENT, SCIENTIFIC, DEFAULT_LOCALE, NUMBER_PLACEHOLDER, EMPTY } from '../common/constants';
import standardNumberFormat from './standard-number-format';
import customNumberFormat from './custom-number-format';

const standardFormatRegExp = /^(n|c|p|e|a)(\d*)$/i;

function standardFormatOptions(format) {
    const formatAndPrecision = standardFormatRegExp.exec(format);

    if (formatAndPrecision) {
        const options = {
            style: DECIMAL
        };

        let style = formatAndPrecision[1].toLowerCase();

        if (style === "c") {
            options.style = CURRENCY;
        } else if (style === "a") {
            options.style = ACCOUNTING;
        } else if (style === "p") {
            options.style = PERCENT;
        } else if (style === "e") {
            options.style = SCIENTIFIC;
        }

        if (formatAndPrecision[2]) {
            options.minimumFractionDigits = options.maximumFractionDigits = parseInt(formatAndPrecision[2], 10);
        }

        return options;
    }
}

function getFormatOptions(format) {
    let formatOptions;
    if (typeof format === "string") {
        formatOptions = standardFormatOptions(format);
    } else {
        formatOptions = format;
    }

    return formatOptions;
}

export default function formatNumber(number, format = NUMBER_PLACEHOLDER, locale = DEFAULT_LOCALE) {
    if (number === undefined || number === null) {
        return EMPTY;
    }

    if (!isFinite(number)) {
        return number;
    }

    const info = localeInfo(locale);
    const formatOptions = getFormatOptions(format);

    let result;
    if (formatOptions) {
        const style = (formatOptions || {}).style || DECIMAL;
        result = standardNumberFormat(number, Object.assign({}, info.numbers[style], formatOptions), info);
    } else {
        result = customNumberFormat(number, format, info);
    }

    return result;
}
