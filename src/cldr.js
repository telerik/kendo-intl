const patternRegExp = /([ #,0. ]+)/g;
const cldrCurrencyRegExp = /¤/g;
const LATIN_NUMBER_FORMATS = "Formats-numberSystem-latn";
const LATIN_NUMBER_SYMBOLS = "symbols-numberSystem-latn";
const SYMBOL = "symbol";
const DEFAULT_CURRENCY_FRACTIONS = 2;

const predefinedDatePatterns = {
    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
};
const datePatterns = {
    d: [ [ "dateTimeFormats", "availableFormats", "yMd" ] ],
    D: [ [ "dateFormats", "full" ] ],
    F: [ [ "dateFormats", "full" ], [ "timeFormats", "medium" ] ],
    g: [ [ "dateTimeFormats", "availableFormats", "yMd" ], [ "timeFormats", "short" ] ],
    G: [ [ "dateTimeFormats", "availableFormats", "yMd" ], [ "timeFormats", "medium" ] ],
    t: [ [ "timeFormats", "short" ] ],
    T: [ [ "timeFormats", "medium" ] ]
};
const GROUP_SEPARATOR = ",";
const LIST_SEPARATOR = ";";
const DECIMAL_SEPARATOR = ".";
const SPACE = " ";

export const cldr = {};

loadDefaultCulture();

function loadDefaultCulture() {
    const numbers = require("cldr-data/main/en/numbers.json");
    const currencies = require("cldr-data/main/en/currencies.json");
    const timeZoneNames = require("cldr-data/main/en/timeZoneNames.json");
    const calendar = require("cldr-data/main/en/ca-gregorian.json");
    const likelySubtags = require("cldr-data/supplemental/likelySubtags.json");

    load(likelySubtags, numbers, currencies, timeZoneNames, calendar);
}

function patternOptions(pattern) {
    const patterns = pattern
      .replace(cldrCurrencyRegExp, "$")
      .replace(patternRegExp, "n")
      .split(";");

    const numberPatterns = patternRegExp.exec(pattern.split(LIST_SEPARATOR)[ 0 ])[ 0 ].split(DECIMAL_SEPARATOR);
    const integer = numberPatterns[ 0 ];

    const groupSize = integer.split(GROUP_SEPARATOR).slice(1).map(function(group) {
        return group.length;
    }).reverse();

    return {
        groupSize: groupSize,
        patterns: patterns
    };
}

function loadNumbersInfo(locale, info) {
    const localeInfo = cldr[locale];
    const numbers = localeInfo.numbers = localeInfo.numbers || {};
    numbers.symbols = numbers.symbols || {};
    for (let field in info) {
        if (field === LATIN_NUMBER_SYMBOLS) {
            Object.assign(numbers.symbols, info[ field ]);
        } else if (field.includes(LATIN_NUMBER_FORMATS)) {
            const style = field.substr(0, field.indexOf(LATIN_NUMBER_FORMATS));
            const pattern = info[ style + LATIN_NUMBER_FORMATS ].standard;
            numbers[ style ] = patternOptions(pattern);
        } else if (field === "currencies") {
            numbers.currencies = info[ field ];
            if (localeInfo.territory && cldr.supplemental.currencyData) {
                numbers.localeCurrency = territoryCurrencyCode(localeInfo.territory);
            }
        }
    }
}

function getPredefinedFormat(paths, calendar) {
    const result = [];

    for (let pathIdx = 0; pathIdx < paths.length; pathIdx++) {
        let fields = paths[ pathIdx ];
        let pattern = calendar;
        for (let idx = 0; idx < fields.length; idx++) {
            pattern = pattern[fields[idx]];
        }
        result.push(pattern);
    }

    return result.join(SPACE);
}

function loadCalendarPatterns(locale, calendar) {
    const patterns = cldr[locale].calendar.patterns = {};
    for (let pattern in datePatterns) {
        patterns[pattern] = getPredefinedFormat(datePatterns[pattern], calendar);
    }

    for (let pattern in predefinedDatePatterns) {
        patterns[pattern] = predefinedDatePatterns[pattern];
    }

    cldr[locale].calendar.availableFormats = calendar.dateTimeFormats.availableFormats;
}

function toArray(obj) {
    let result = [];
    let names = Object.getOwnPropertyNames(obj);
    for (let idx = 0; idx < names.length; idx++) {
        let value = obj[names[idx]];
        result.push(value);
    }
    return result;
}

function lowerArray(arr) {
    const result = [];
    for (let idx = 0; idx < arr.length; idx++) {
        result.push(arr[idx].toLowerCase());
    }
    return result;
}

function lowerObject(obj) {
    const result = {};
    for (let field in obj) {
        result[field] = obj[field].toLowerCase();
    }
    return result;
}

function cloneLower(obj) {
    let result = Array.isArray(obj) ? lowerArray(obj) : lowerObject(obj);
    return result;
}

function getCalendarNames(info, isObj) {
    const result = {};
    for (let formatType in info) {
        let names = result[formatType] = {};
        for (let format in info[formatType]) {
            let formats = info[formatType][format];
            names[format] = isObj ? formats : toArray(formats);
        }
    }
    return result;
}

function getEraNames(eras) {
    const result = {};
    const format = result.format = {};
    const eraNameMap = {
        eraAbbr: "abbreviated",
        eraNames: "wide",
        eraNarrow: "narrow"
    };

    for (let eraFormatName in eras) {
        let formatName = eraNameMap[eraFormatName];
        format[formatName] = eras[eraFormatName];
    }

    return result;
}

function loadCalendarNames(locale, calendar) {
    const localeCalendar = cldr[locale].calendar;
    localeCalendar.days = getCalendarNames(calendar.days);
    localeCalendar.months = getCalendarNames(calendar.months);
    localeCalendar.quarters = getCalendarNames(calendar.quarters);
    localeCalendar.dayPeriods = getCalendarNames(calendar.dayPeriods, true);

    localeCalendar.eras = getEraNames(calendar.eras);
}

function loadCalendarInfo(locale, info) {
    const calendar = cldr[locale].calendar = cldr[locale].calendar || {};
    for (let field in info) {
        if (field === "timeZoneNames") {
            calendar.gmtFormat = info[field].gmtFormat;
            calendar.gmtZeroFormat = info[field].gmtZeroFormat;
        } else if (field === "calendars" && info[field].gregorian) {
            loadCalendarPatterns(locale, info[field].gregorian);
            loadCalendarNames(locale, info[field].gregorian);
        }
    }
}

function loadLocale(locale, info) {
    for (let field in info) {
        if (field === "numbers") {
            loadNumbersInfo(locale, info[field]);
        } else if (field === "dates") {
            loadCalendarInfo(locale, info[field]);
        }
    }
}

function getLocaleInfo(locale) {
    let info;
    if (typeof locale === "string") {
        info = localeInfo(locale);
    } else {
        info = locale;
    }
    return info;
}

function territoryCurrencyCode(territory) {
    const currencyData = cldr.supplemental.currencyData;
    if (!currencyData) {
        throw new Error("Cannot determine currency. Please load the supplemental currencyData.");
    }
    const regionCurrencies = currencyData.region[territory];
    const currencyCode = Object.keys(regionCurrencies[regionCurrencies.length - 1])[0];

    return currencyCode;
}

function localeTerritory(name, info) {
    if (info.identity && info.identity.territory) {
        return info.identity.territory;
    }

    const likelySubtags = cldr.supplemental.likelySubtags;
    if (likelySubtags) {
        return territoryFromName(likelySubtags[name] || name);
    }
}

function territoryFromName(name) {
    const parts = name.split("-");
    const length = parts.length;

    if (length > 1) {
        const territory = parts[ length - 1 ];
        return territory.toUpperCase();
    }
}

function localeFullName(language, suffixes) {
    const likelySubtags = cldr.supplemental.likelySubtags;

    for (let idx = 0; idx < suffixes.length; idx++) {
        let name = likelySubtags[language + "-" + suffixes[idx ]];
        if (name) {
            return name;
        }
    }

    if (likelySubtags[language]) {
        return likelySubtags[language];
    }
}

function availableLocaleInfo(fullName, suffixes) {
    const parts = fullName.split("-");
    const language = parts[0];
    const script = parts[1];
    const territory = parts[2];

    return cldr[fullName] || (suffixes.indexOf(territory) !== -1 && cldr[language + "-" + territory]) || (suffixes.indexOf(script) !== -1 && cldr[language + "-" + script]) || cldr[language];
}

function dateNameType(formatLength) {
    let nameType;
    if (formatLength <= 3) {
        nameType = "abbreviated";
    } else if (formatLength === 4) {
        nameType = "wide";
    } else if (formatLength === 5) {
        nameType = "narrow";
    } else if (formatLength === 6) {
        nameType = "short";
    }

    return nameType;
}

export function dateFormatNames(locale, type, formatLength, standAlone, lower) {
    const info = getLocaleInfo(locale);
    const formatType = standAlone ? "stand-alone" : "format";
    const nameType = dateNameType(formatLength);
    const lowerNameType = (lower ? "lower-" : "") + nameType;
    const formatNames = info.calendar[type][formatType];
    let result = formatNames[lowerNameType];
    if (!result && lower) {
        result = formatNames[lowerNameType] = cloneLower(formatNames[nameType]);
    }
    return result;
}

export function localeFirstDay(locale) {
    const weekData = cldr.supplemental.weekData;
    if (!weekData) {
        throw new Error("Cannot determine locale first day of week. Please load the supplemental weekData.");
    }

    const info = getLocaleInfo(locale);
    const firstDay = weekData.firstDay[info.territory];

    return firstDay;
}

export function localeCurrency(locale) {
    const info = getLocaleInfo(locale);
    const numbers = info.numbers;
    if (!numbers.localeCurrency) {
        numbers.localeCurrency = territoryCurrencyCode(info.territory);
    }
    return numbers.localeCurrency;
}

export function currencyDisplay(code, locale, currencyDisplay = SYMBOL) {
    if (currencyDisplay === "code") {
        return code;
    }

    const info = getLocaleInfo(locale);
    const currencies = info.numbers.currencies;

    if (!currencies) {
        throw new Error("Cannot determine currency information. Please load the locale currencies data.");
    }

    const currencyInfo = currencies[ code ];
    return currencyDisplay === SYMBOL ? (currencyInfo["symbol-alt-narrow"] || currencyInfo[SYMBOL]) : currencyInfo.displayName;
}

export function currencyFractionOptions(code) {
    let minimumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
    let maximumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;

    const fractions = ((cldr.supplemental.currencyData || {}).fractions || {})[code];

    if (fractions && fractions._digits) {
        maximumFractionDigits = minimumFractionDigits = parseInt(fractions._digits, 10);
    }

    return {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits
    };
}

//en, en-US, en-Latn-US, en-Latn -> en;
//"sr", "sr-Cyrl", "sr-Cyrl-BA", "sr-Cyrl-ME", "sr-Cyrl-XK" -> "sr", "sr-Cyrl", "sr-Cyrl-BA", ...;
//"sr-Latn", "sr-BA", "sr-ME", "sr-XK" -> "sr-Latn", "sr-Latn-BA",..;
export function localeInfo(locale) {
    if (cldr[locale]) {
        return cldr[locale];
    }

    const likelySubtags = cldr.supplemental.likelySubtags;
    if (likelySubtags) {
        const parts = locale.split("-");
        const language = parts[0];
        const suffixes = parts.slice(1);
        const fullName = localeFullName(language, suffixes);
        const info = fullName ? availableLocaleInfo(fullName, suffixes) : null;
        if (info) {
            return info;
        }
    }

    throw new Error("Missing locale info for: " + locale);
}

export function load() {
    const length = arguments.length;
    for (let idx = 0; idx < length; idx++) {
        let entry = arguments[idx];
        if (entry.main) {
            let locale = Object.keys(entry.main)[0];
            let info = entry.main[locale];
            let localeInfo = cldr[locale] = cldr[locale] || {};
            localeInfo.territory = localeInfo.territory || localeTerritory(locale, info);
            localeInfo.name = locale;
            loadLocale(locale, info);
        } else if (entry.supplemental) {
            cldr.supplemental = cldr.supplemental || {};
            Object.assign(cldr.supplemental, entry.supplemental);
        }
    }
}