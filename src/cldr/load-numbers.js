import { cldr } from './info';
import { territoryCurrencyCode } from './currency';
import localeTerritory from './territory';

const LATIN_NUMBER_FORMATS = "Formats-numberSystem-latn";
const LATIN_NUMBER_SYMBOLS = "symbols-numberSystem-latn";
const GROUP_SEPARATOR = ",";
const LIST_SEPARATOR = ";";
const DECIMAL_SEPARATOR = ".";

const patternRegExp = /([ #,0. ]+)/g;
const cldrCurrencyRegExp = /¤/g;

function patternOptions(pattern) {
    const patterns = pattern
      .replace(cldrCurrencyRegExp, "$")
      .replace(patternRegExp, "n")
      .split(";");

    const numberPatterns = patternRegExp.exec(pattern.split(LIST_SEPARATOR)[0])[0].split(DECIMAL_SEPARATOR);
    const integer = numberPatterns[0];

    const groupSize = integer.split(GROUP_SEPARATOR).slice(1).map(function(group) {
        return group.length;
    }).reverse();

    return {
        groupSize: groupSize,
        patterns: patterns
    };
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
            numbers[style] = patternOptions(pattern);
            if (style === "currency") {
                loadCurrencyUnitPatterns(numbers[style], info[field]);
            }
        } else if (field === "currencies") {
            numbers.currencies = info[field];
            const territory = localeTerritory(localeInfo);
            if (territory && cldr.supplemental.currencyData) {
                numbers.localeCurrency = territoryCurrencyCode(territory);
            }
        }
    }
}