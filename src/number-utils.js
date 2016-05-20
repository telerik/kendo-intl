import { currencyDisplay, localeCurrency } from './cldr';

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

export function getCurrencySymbol(info, format = {}) {
    let currency = format.currency || localeCurrency(info);
    const symbol = currencyDisplay(currency, info, format.currencyDisplay);

    return symbol;
}

export function getFormatOptions(format) {
    let formatOptions;
    if (typeof format === "string") {
        formatOptions = standardFormatOptions(format);
    } else {
        formatOptions = format;
    }

    return formatOptions;
}