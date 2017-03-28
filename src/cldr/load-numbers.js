import { cldr } from './info';

const LATIN_NUMBER_FORMATS = "Formats-numberSystem-latn";
const LATIN_NUMBER_SYMBOLS = "symbols-numberSystem-latn";
const GROUP_SEPARATOR = ",";
const LIST_SEPARATOR = ";";
const DECIMAL_SEPARATOR = ".";

const patternRegExp = /([ #,0. ]+)/g;
const cldrCurrencyRegExp = /¤/g;

function getPatterns(pattern) {
    patternRegExp.lastIndex = 0;

    return pattern.replace(cldrCurrencyRegExp, "$").replace(patternRegExp, "n").split(";");
}

function getGroupSize(pattern) {
    patternRegExp.lastIndex = 0;

    const numberPatterns = patternRegExp.exec(pattern.split(LIST_SEPARATOR)[0])[0].split(DECIMAL_SEPARATOR);
    const integer = numberPatterns[0];

    const groupSize = integer.split(GROUP_SEPARATOR).slice(1).map(function(group) {
        return group.length;
    }).reverse();

    return groupSize;
}

function loadCurrencyUnitPatterns(currencyInfo, currencyFormats) {
    for (let field in currencyFormats) {
        if (field.startsWith("unitPattern")) {
            currencyInfo[field] = currencyFormats[field].replace("{0}", "n").replace("{1}", "$");
        }
    }
}

export default function loadNumbersInfo(locale, info) {
    const localeInfo = cldr[locale];
    const numbers = localeInfo.numbers = localeInfo.numbers || {};
    numbers.symbols = numbers.symbols || {};
    for (let field in info) {
        if (field === LATIN_NUMBER_SYMBOLS) {
            Object.assign(numbers.symbols, info[field]);
        } else if (field.includes(LATIN_NUMBER_FORMATS)) {
            const style = field.substr(0, field.indexOf(LATIN_NUMBER_FORMATS));
            const pattern = info[field].standard;
            numbers[style] = {
                patterns: getPatterns(pattern)
            };
            if (style === "currency") {
                numbers[style].groupSize = getGroupSize((info["decimal" + LATIN_NUMBER_FORMATS] || info[field]).standard);
                loadCurrencyUnitPatterns(numbers[style], info[field]);
            } else {
                numbers[style].groupSize = getGroupSize(pattern);
            }
        } else if (field === "currencies") {
            numbers.currencies = info[field];
        }
    }
}