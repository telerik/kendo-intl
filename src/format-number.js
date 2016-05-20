import { localeInfo, localeCurrency, currencyFractionOptions } from './cldr';
import { getCurrencySymbol, getFormatOptions } from './number-utils';
import { round, pad } from './utils';

const CURRENCY = "currency";
const DECIMAL_PLACEHOLDER = "n";
const DECIMAL = "decimal";
const DEFAULT_LOCALE = "en";
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

const zeroRegex = /0/g;
const commaRegExp = /\,/g;
const literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g;

function groupInteger(number, start, end, options, symbols) {
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
        if (style === DECIMAL) {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_DECIMAL_ROUNDING);
        } else if (isCurrency) {
            maximumFractionDigits = Math.max(minimumFractionDigits, currencyFractions.maximumFractionDigits);
        } else {
            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_PERCENT_ROUNDING);
        }
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

function standardNumberFormat(number, options, info) {
    const { style } = options;

    //return number in exponential format
    if (style === "scientific") {
        return number.toExponential();
    }

    const symbols = info.numbers.symbols;
    const negative = number < 0;
    const patterns = options.patterns;
    const pattern = negative ? patterns[1] || ("-" + patterns[0]) : patterns[0];
    let result = number;
    let symbol;

    if (style === CURRENCY) {
        options.currency = options.currency || localeCurrency(info);
        symbol = getCurrencySymbol(info, options);
    }

  // multiply if format is percent
    if (style === "percent") {
        result *= 100;
        symbol = symbols.percentSign;
    }

    const { minimumFractionDigits, maximumFractionDigits } = fractionOptions(options);
    let integer, fraction;
    if (result % 1 !== 0 || minimumFractionDigits > 0) {
        result = round(result, maximumFractionDigits);
        result = result.split(POINT);
        integer = result[0];
        fraction = pad(result[1].replace(zeroRegex, EMPTY), minimumFractionDigits, true);
    } else {
        integer = String(result);
    }

  //exclude "-" if number is negative.
    if (negative) {
        integer = integer.substring(1);
    }

    if (options.minimumIntegerDigits) {
        integer = pad(integer, options.minimumIntegerDigits);
    }

    let value = options.useGrouping !== false ? groupInteger(integer, 0, integer.length, options, symbols) : integer;

    if (fraction) {
        value += symbols.decimal + fraction;
    }

    if (pattern === DECIMAL_PLACEHOLDER && !negative) {
        return value;
    }

    result = EMPTY;

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

function formatLiterals(format, literals) {
    let result = format;
    if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
        result = format.replace(literalRegExp, function(match) {
            const quoteChar = match.charAt(0).replace("\\", "");
            const literal = match.slice(1).replace(quoteChar, "");

            literals.push(literal);

            return PLACEHOLDER;
        });
    }
    return result;
}

function roundNumber(number, format, decimalIndex) {
    let result = number;
    if (decimalIndex !== -1) {
        const zeroIndex = format.lastIndexOf(ZERO) - decimalIndex;
        const sharpIndex = format.lastIndexOf(SHARP) - decimalIndex;
        const hasZero = zeroIndex > -1;
        const hasSharp = sharpIndex > -1;
        let fraction = result.toString().split("e");
        if (fraction[1]) {
            fraction = round(result, Math.abs(fraction[1]));
        } else {
            fraction = fraction[0];
        }
        fraction = fraction.split(POINT)[1] || EMPTY;
        let idx = fraction.length;

        if (hasZero && zeroIndex > sharpIndex) {
            idx = zeroIndex;
        } else if (sharpIndex > zeroIndex) {
            if (hasSharp && idx > sharpIndex) {
                idx = sharpIndex;
            } else if (hasZero && idx < zeroIndex) {
                idx = zeroIndex;
            }
        }

        if (idx > -1) {
            result = round(result, idx);
        }
    } else {
        result = round(result);
    }
    return result;
}

function valueSpecificFormat(number, numberFormat) {
    let hasNegativeFormat;
    let format = numberFormat.split(";");
    if (number < 0 && format[1]) {
        format = format[1];
        hasNegativeFormat = true;
    } else if (number === 0) {
        format = format[2] || format[0];
    } else {
        format = format[0];
    }

    return {
        format: format,
        hasNegativeFormat: hasNegativeFormat
    };
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

function customNumberFormat(number, numberFormat, options, info) {
    const literals = [];
    const symbols = info.numbers.symbols;
    let result = number;
    let negative = result < 0;
    let hasNegativeFormat, styleSymbol;
    let format = numberFormat;

    format = formatLiterals(format, literals);

    ({ format, hasNegativeFormat } = valueSpecificFormat(result, format));

    //return format if it is string constant.
    if (format.indexOf(SHARP) === -1 && format.indexOf(ZERO) === -1) {
        return format;
    }

    if (negative) {
        result = -result;
    }

    const isPercent = format.indexOf(PERCENT_SYMBOL) !== -1;
    const isCurrency = format.indexOf(CURRENCY_SYMBOL) !== -1;

  //multiply number if the format has percent
    if (isPercent) {
        result *= 100;
        styleSymbol = symbols.percentSign;
    }

    if (isCurrency) {
        styleSymbol = getCurrencySymbol(info, options);
    }

    const hasGroup = format.indexOf(COMMA) > -1;
    if (hasGroup) {
        format = format.replace(commaRegExp, EMPTY);
    }

    let decimalIndex = format.indexOf(POINT);
    let length = format.length;

    result = roundNumber(result, format, decimalIndex);

    let sharpIndex = format.indexOf(SHARP);
    let zeroIndex = format.indexOf(ZERO);

    let start = placeholderIndex(sharpIndex, zeroIndex, true);

    sharpIndex = format.lastIndexOf(SHARP);
    zeroIndex = format.lastIndexOf(ZERO);

    let end = placeholderIndex(sharpIndex, zeroIndex);

    if (start === length) {
        end = start;
    }

    if (start !== -1) {
        let value = result.toString().split(POINT);
        const integer = value[0];
        const fraction = value[1] || EMPTY;
        const integerLength = integer.length;
        let replacement;

        if (negative && (result * -1) >= 0) {
            negative = false;
        }

        result = format.substring(0, start);

        if (negative && !hasNegativeFormat) {
            result += "-";
        }

        for (let idx = start; idx < length; idx++) {
            let ch = format.charAt(idx);

            if (decimalIndex === -1) {
                if (end - idx < integerLength) {
                    result += integer;
                    break;
                }
            } else {
                if (zeroIndex !== -1 && zeroIndex < idx) {
                    replacement = EMPTY;
                }

                if ((decimalIndex - idx) <= integerLength && decimalIndex - idx > -1) {
                    result += integer;
                    idx = decimalIndex;
                }

                if (decimalIndex === idx) {
                    result += (fraction ? symbols.decimal : EMPTY) + fraction;
                    idx += end - decimalIndex + 1;
                    continue;
                }
            }

            if (ch === ZERO) {
                result += ch;
                replacement = ch;
            } else if (ch === SHARP) {
                result += replacement;
            }
        }

        if (hasGroup) {
            result = groupInteger(result, start, Math.max(end, (integerLength + start - 1)), options, symbols);
        }

        if (end >= start) {
            result += format.substring(end + 1);
        }

      //replace symbol placeholders
        if (isCurrency || isPercent) {
            value = EMPTY;
            for (let idx = 0, length = result.length; idx < length; idx++) {
                let ch = result.charAt(idx);
                value += (ch === CURRENCY_SYMBOL || ch === PERCENT_SYMBOL) ? styleSymbol : ch;
            }
            result = value;
        }

        length = literals.length;

        if (length) {
            for (let idx = 0; idx < length; idx++) {
                result = result.replace(PLACEHOLDER, literals[idx]);
            }
        }
    }

    return result;
}

export function formatNumber(number, format, locale = DEFAULT_LOCALE) {
    const info = localeInfo(locale);
    const numbers = info.numbers;

    const formatOptions = getFormatOptions(format);
    const style = (formatOptions || {}).style || DECIMAL;
    const options = numbers[style];

    let result;
    if (formatOptions) {
        result = standardNumberFormat(number, Object.assign({}, options, formatOptions), info);
    } else {
        result = customNumberFormat(number, format, options, info);
    }
    return result;
}
