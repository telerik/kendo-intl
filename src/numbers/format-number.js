import { localeInfo } from '../cldr';
import standardNumberFormat from './standard-number-format';
import customNumberFormat from './custom-number-format';

const standardFormatRegExp = /^(n|c|p|e)(\d*)$/i;

function standardFormatOptions(format) {
    const formatAndPrecision = standardFormatRegExp.exec(format);

    if (formatAndPrecision) {
        const options = {
            style: "decimal"
        };

        let style = formatAndPrecision[1].toLowerCase();

        if (style === "c") {
            options.style = "currency";
        }

        if (style === "p") {
            options.style = "percent";
        }

        if (style === "e") {
            options.style = "scientific";
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

export default function formatNumber(number, format = "n", locale = "en") {
    if (number === undefined) {
        return "";
    }

    if (!isFinite(number)) {
        return number;
    }

    const info = localeInfo(locale);
    const formatOptions = getFormatOptions(format);

    let result;
    if (formatOptions) {
        const style = (formatOptions || {}).style || "decimal";
        result = standardNumberFormat(number, Object.assign({}, info.numbers[style], formatOptions), info);
    } else {
        result = customNumberFormat(number, format, info);
    }

    return result;
}
