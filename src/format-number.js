import { localeInfo, localeCurrency, currencyFractionOptions } from './cldr';
import { getCurrencySymbol, getFormatOptions } from './number-utils';
import { round, pad } from './utils';

const CURRENCY = "currency";
const DECIMAL_PLACEHOLDER = "n";
const DECIMAL = "decimal";
const DEFAULT_LOCALE = "en";
const PERCENT = "percent";
const POINT = ".";
const COMMA = ",";
const SHARP = "#";
const ZERO = "0";
const EMPTY = "";
const PLACEHOLDER = "??";
const PERCENT_SYMBOL = "%";
const CURRENCY_SYMBOL = "$";

const DEFAULT_DECIMAL_ROUNDING = 3;
const DEFAULT_PERCENT_ROUNDING = 0;

const trailingZeroRegex = /0+$/;
const commaRegExp = /\,/g;
const literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g;

function groupInteger(number, start, end, options, info) {
    const symbols = info.numbers.symbols;
    const decimalIndex = number.indexOf(symbols.decimal);
    const groupSizes = options.groupSize.slice();
    let groupSize = groupSizes.shift();

    let integerEnd = decimalIndex !== -1 ? decimalIndex : end + 1;

    let integer = number.substring(start, integerEnd);
    let result = number;
    const integerLength = integer.length;

    if (integerLength >= groupSize) {
        let idx = integerLength;
        let parts = [];

        while (idx > -1) {
            let value = integer.substring(idx - groupSize, idx);
            if (value) {
                parts.push(value);
            }
            idx -= groupSize;
            let newGroupSize = groupSizes.shift();
            groupSize = newGroupSize !== undefined ? newGroupSize : groupSize;

            if (groupSize === 0) {
                parts.push(integer.substring(0, idx));
                break;
            }
        }

        integer = parts.reverse().join(symbols.group);
        result = number.substring(0, start) + integer + number.substring(integerEnd);
    }

    return result;
}

function fractionOptions(options) {
    let { minimumFractionDigits, maximumFractionDigits, style } = options;
    const isCurrency = style === CURRENCY;
    let currencyFractions;
    if (isCurrency) {
        currencyFractions = currencyFractionOptions(options.currency);
    }

    if (minimumFractionDigits === undefined) {
        minimumFractionDigits = isCurrency ? currencyFractions.minimumFractionDigits : 0;
    }

    if (maximumFractionDigits === undefined) {
        if (style === PERCENT) {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_PERCENT_ROUNDING);
        } else if (isCurrency) {
            maximumFractionDigits = Math.max(minimumFractionDigits, currencyFractions.maximumFractionDigits);
        } else {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_DECIMAL_ROUNDING);
        }
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

function applyPattern(value, pattern, symbol) {
    let result = EMPTY;
    for (let idx = 0, length = pattern.length; idx < length; idx++) {
        let ch = pattern.charAt(idx);

        if (ch === DECIMAL_PLACEHOLDER) {
            result += value;
        } else if (ch === CURRENCY_SYMBOL || ch === PERCENT_SYMBOL) {
            result += symbol;
        } else {
            result += ch;
        }
    }
    return result;
}

function standardNumberFormat(number, options, info) {
    const { style } = options;

    //return number in exponential format
    if (style === "scientific") {
        return options.minimumFractionDigits ? number.toExponential(options.minimumFractionDigits) : number.toExponential();
    }

    const symbols = info.numbers.symbols;
    let value = number;
    let symbol;

    if (style === CURRENCY) {
        options.currency = options.currency || localeCurrency(info);
        symbol = getCurrencySymbol(info, options);
    }

    if (style === PERCENT) {
        value *= 100;
        symbol = symbols.percentSign;
    }

    const { minimumFractionDigits, maximumFractionDigits } = fractionOptions(options);

    value = round(value, maximumFractionDigits);

    const negative = value < 0;

    const parts = value.split(POINT);

    let integer = parts[0];
    let fraction = pad(parts[1] ? parts[1].replace(trailingZeroRegex, EMPTY) : EMPTY, minimumFractionDigits, true);

    //exclude "-" if number is negative.
    if (negative) {
        integer = integer.substring(1);
    }

    if (options.minimumIntegerDigits) {
        integer = pad(integer, options.minimumIntegerDigits);
    }

    let formattedValue = options.useGrouping !== false ? groupInteger(integer, 0, integer.length, options, info) : integer;

    if (fraction) {
        formattedValue += symbols.decimal + fraction;
    }

    if (pattern === DECIMAL_PLACEHOLDER && !negative) {
        return formattedValue;
    }

    const patterns = options.patterns;
    const pattern = negative ? patterns[1] || ("-" + patterns[0]) : patterns[0];

    const result = applyPattern(formattedValue, pattern, symbol);

    return result;
}

function setFormatLiterals(formatOptions) {
    let format = formatOptions.format;
    if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
        const literals = formatOptions.literals = [];
        formatOptions.format = format.replace(literalRegExp, function(match) {
            const quoteChar = match.charAt(0).replace("\\", "");
            const literal = match.slice(1).replace(quoteChar, "");

            literals.push(literal);

            return PLACEHOLDER;
        });
    }
}

function roundNumber(formatOptions) {
    let { number, format } = formatOptions;
    let decimalIndex = format.indexOf(POINT);

    if (decimalIndex !== -1) {
        const zeroIndex = format.lastIndexOf(ZERO) - decimalIndex;
        const sharpIndex = format.lastIndexOf(SHARP) - decimalIndex;
        const hasZero = zeroIndex > -1;
        const hasSharp = sharpIndex > -1;
        let fraction = number.toString().split("e");

        if (fraction[1]) {
            fraction = round(number, Math.abs(fraction[1]));
        } else {
            fraction = fraction[0];
        }
        fraction = fraction.split(POINT)[1] || EMPTY;

        let idx = fraction.length;

        if (!hasZero && !hasSharp) {
            formatOptions.format = format.substring(0, decimalIndex) + format.substring(decimalIndex + 1);
            decimalIndex = -1;
            idx = 0;
        } else if (hasZero && zeroIndex > sharpIndex) {
            idx = zeroIndex;
        } else if (sharpIndex > zeroIndex) {
            if (hasSharp && idx > sharpIndex) {
                idx = sharpIndex;
            } else if (hasZero && idx < zeroIndex) {
                idx = zeroIndex;
            }
        }

        if (idx > -1) {
            number = round(number, idx);
        }
    } else {
        number = round(number);
    }

    if (formatOptions.negative && (number * -1) >= 0) {
        formatOptions.negative = false;
    }

    formatOptions.number = number;
    formatOptions.decimalIndex = decimalIndex;
}

function setValueSpecificFormat(formatOptions) {
    let { number, format } = formatOptions;
    format = format.split(";");
    if (formatOptions.negative && format[1]) {
        format = format[1];
        formatOptions.hasNegativeFormat = true;
    } else if (number === 0) {
        format = format[2] || format[0];
    } else {
        format = format[0];
    }

    formatOptions.format = format;
}

function setStyleOptions(formatOptions, info) {
    const format = formatOptions.format;

    //multiply number if the format has percent
    if (format.indexOf(PERCENT_SYMBOL) !== -1) {
        formatOptions.style = PERCENT;
        formatOptions.symbol = info.numbers.symbols.percentSign;
        formatOptions.number *= 100;
    }

    if (format.indexOf(CURRENCY_SYMBOL) !== -1) {
        formatOptions.style = CURRENCY;
        formatOptions.symbol = getCurrencySymbol(info);
    }
}

function setGroupOptions(formatOptions) {
    formatOptions.hasGroup = formatOptions.format.indexOf(COMMA) > -1;
    if (formatOptions.hasGroup) {
        formatOptions.format = formatOptions.format.replace(commaRegExp, EMPTY);
    }
}

function placeholderIndex(index1, index2, start) {
    let index;
    if (index1 === -1 && index2 !== -1) {
        index = index2;
    } else if (index1 !== -1 && index2 === -1) {
        index = index1;
    } else {
        index = start ? Math.min(index1, index2) : Math.max(index1, index2);
    }
    return index;
}

function setPlaceholderIndices(formatOptions) {
    const format = formatOptions.format;
    let sharpIndex = format.indexOf(SHARP);
    let zeroIndex = format.indexOf(ZERO);

    let start = placeholderIndex(sharpIndex, zeroIndex, true);

    sharpIndex = format.lastIndexOf(SHARP);
    zeroIndex = format.lastIndexOf(ZERO);

    let end = placeholderIndex(sharpIndex, zeroIndex);

    if (start === format.length) {
        end = start;
    }

    formatOptions.start = start;
    formatOptions.end = end;
    formatOptions.lastZeroIndex = zeroIndex;
}

function replaceStyleSymbols(number, style, symbol) {
    let result = number;
    if (style === CURRENCY || style === PERCENT) {
        result = EMPTY;
        for (let idx = 0, length = number.length; idx < length; idx++) {
            let ch = number.charAt(idx);
            result += (ch === CURRENCY_SYMBOL || ch === PERCENT_SYMBOL) ? symbol : ch;
        }
    }
    return result;
}

function replaceLiterals(number, literals) {
    let result = number;
    if (literals) {
        const length = literals.length;
        for (let idx = 0; idx < length; idx++) {
            result = result.replace(PLACEHOLDER, literals[idx]);
        }
    }
    return result;
}

function replacePlaceHolders(formatOptions, info) {
    const { start, end, negative, format, decimalIndex, lastZeroIndex, hasNegativeFormat, hasGroup } = formatOptions;
    let number = formatOptions.number;
    const value = number.toString().split(POINT);
    const length = format.length;
    const integer = value[0];
    const fraction = value[1] || EMPTY;
    const integerLength = integer.length;
    let replacement = EMPTY;

    number = format.substring(0, start);

    if (negative && !hasNegativeFormat) {
        number += "-";
    }

    for (let idx = start; idx < length; idx++) {
        let ch = format.charAt(idx);

        if (decimalIndex === -1) {
            if (end - idx < integerLength) {

                number += integer;
                break;
            }
        } else {
            if (lastZeroIndex !== -1 && lastZeroIndex < idx) {
                replacement = EMPTY;
            }

            if ((decimalIndex - idx) <= integerLength && decimalIndex - idx > -1) {
                number += integer;
                idx = decimalIndex;
            }

            if (decimalIndex === idx) {
                number += (fraction ? info.numbers.symbols.decimal : EMPTY) + fraction;
                idx += end - decimalIndex + 1;
                continue;
            }
        }

        if (ch === ZERO) {
            number += ch;
            replacement = ch;
        } else if (ch === SHARP) {
            number += replacement;
        }
    }

    if (hasGroup) {
        number = groupInteger(number, start + (negative ? 1 : 0), Math.max(end, (integerLength + start)), info.numbers.decimal, info);
    }

    if (end >= start) {
        number += format.substring(end + 1);
    }

    return number;
}

function applyCustomFormat(formatOptions, info) {
    let number = formatOptions.number;
    if (formatOptions.start !== -1) {
        number = replacePlaceHolders(formatOptions, info);
        number = replaceStyleSymbols(number, formatOptions.style, formatOptions.symbol);
        number = replaceLiterals(number, formatOptions.literals);
    }

    return number;
}

function isConstantFormat(format) {
    return format.indexOf(SHARP) === -1 && format.indexOf(ZERO) === -1;
}

function customNumberFormat(number, format, info) {
    const formatOptions = {
        negative: number < 0,
        number: Math.abs(number),
        format: format
    };

    setValueSpecificFormat(formatOptions);

    if (isConstantFormat(formatOptions.format)) {
        return formatOptions.format;
    }

    setFormatLiterals(formatOptions);
    setStyleOptions(formatOptions, info);
    setGroupOptions(formatOptions);
    roundNumber(formatOptions);
    setPlaceholderIndices(formatOptions);

    return applyCustomFormat(formatOptions, info);
}

export function formatNumber(number, format, locale = DEFAULT_LOCALE) {
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
