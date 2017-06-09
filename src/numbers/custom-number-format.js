import { CURRENCY, PERCENT, LIST_SEPARATOR, GROUP_SEPARATOR, CURRENCY_PLACEHOLDER, PERCENT_PLACEHOLDER, POINT, EMPTY } from '../common/constants';
import formatCurrencySymbol from './format-currency-symbol';
import groupInteger from './group-integer';
import round from '../common/round';

const PLACEHOLDER = "__??__";

const SHARP = "#";
const ZERO = "0";

const literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g;
const trailingZerosRegExp = /(\.(?:[0-9]*[1-9])?)0+$/g;
const trailingPointRegExp = /\.$/;
const commaRegExp = /\,/g;

function setFormatLiterals(formatOptions) {
    let format = formatOptions.format;
    if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
        const literals = formatOptions.literals = [];
        formatOptions.format = format.replace(literalRegExp, function(match) {
            const quoteChar = match.charAt(0).replace("\\", EMPTY);
            const literal = match.slice(1).replace(quoteChar, EMPTY);

            literals.push(literal);

            return PLACEHOLDER;
        });
    }
}

function trimTrailingZeros(value, lastZero) {
    let trimRegex;

    if (lastZero === 0) {
        trimRegex = trailingZerosRegExp;
    } else {
        trimRegex = new RegExp(`(\\.[0-9]{${ lastZero }}[1-9]*)0+$`, 'g');
    }

    return value.replace(trimRegex, '$1').replace(trailingPointRegExp, EMPTY);
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

        let precision = fraction.length;
        let trailingZeros = -1;

        if (!hasZero && !hasSharp) {
            formatOptions.format = format.substring(0, decimalIndex) + format.substring(decimalIndex + 1);
            decimalIndex = -1;
            precision = 0;
        } else if (hasZero && zeroIndex > sharpIndex) {
            precision = zeroIndex;
        } else if (sharpIndex > zeroIndex) {
            if (hasSharp && precision > sharpIndex) {
                precision = sharpIndex;
            } else if (hasZero && precision < zeroIndex) {
                precision = zeroIndex;
            }

            trailingZeros = hasZero ? zeroIndex : 0;
        }

        if (precision > -1) {
            number = round(number, precision);
            if (trailingZeros > -1) {
                number = trimTrailingZeros(number, trailingZeros);
            }
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

function isConstantFormat(format) {
    return format.indexOf(SHARP) === -1 && format.indexOf(ZERO) === -1;
}

function setValueSpecificFormat(formatOptions) {
    let { number, format } = formatOptions;
    format = format.split(LIST_SEPARATOR);
    if (formatOptions.negative && format[1]) {
        format = format[1];
        formatOptions.hasNegativeFormat = true;
    } else if (number === 0) {
        const zeroFormat = format[2];
        format = zeroFormat || format[0];
        if (zeroFormat && isConstantFormat(zeroFormat)) {
            formatOptions.constant = zeroFormat;
        }
    } else {
        format = format[0];
    }

    formatOptions.format = format;
}

function setStyleOptions(formatOptions, info) {
    const format = formatOptions.format;

    //multiply number if the format has percent
    if (format.indexOf(PERCENT_PLACEHOLDER) !== -1) {
        formatOptions.style = PERCENT;
        formatOptions.symbol = info.numbers.symbols.percentSign;
        formatOptions.number *= 100;
    }

    if (format.indexOf(CURRENCY_PLACEHOLDER) !== -1) {
        formatOptions.style = CURRENCY;
        formatOptions.symbol = formatCurrencySymbol(info);
    }
}

function setGroupOptions(formatOptions) {
    formatOptions.hasGroup = formatOptions.format.indexOf(GROUP_SEPARATOR) > -1;
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
            result += (ch === CURRENCY_PLACEHOLDER || ch === PERCENT_PLACEHOLDER) ? symbol : ch;
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
        number = groupInteger(number, start + (negative && !hasNegativeFormat ? 1 : 0), Math.max(end, (integerLength + start)), info.numbers.decimal, info);
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

export default function customNumberFormat(number, format, info) {
    const formatOptions = {
        negative: number < 0,
        number: Math.abs(number),
        format: format
    };

    setValueSpecificFormat(formatOptions);

    if (formatOptions.constant) {
        return formatOptions.constant;
    }

    setFormatLiterals(formatOptions);
    setStyleOptions(formatOptions, info);
    setGroupOptions(formatOptions);
    roundNumber(formatOptions);
    setPlaceholderIndices(formatOptions);

    return applyCustomFormat(formatOptions, info);
}