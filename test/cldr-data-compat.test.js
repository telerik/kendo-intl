import { afterEach, describe, it, expect } from 'vitest';

import {
    cldr,
    currencyDisplay,
    currencyDisplays,
    currencyFractionOptions,
    dateFieldName,
    dateFormatNames,
    firstDay,
    load,
    localeCurrency,
    localeInfo,
    numberSymbols,
    setData,
    weekendRange
} from '../src/cldr';
import { errors } from '../src/errors';

const likelySubtags = require("cldr-data/supplemental/likelySubtags.json");
const numbers = require("cldr-data/main/bg/numbers.json");
const timeZoneNames = require("cldr-data/main/bg/timeZoneNames.json");
const calendar = require("cldr-data/main/bg/ca-gregorian.json");
const currencies = require("cldr-data/main/bg/currencies.json");
const dateFields = require("cldr-data/main/bg/dateFields.json");
const weekData = require("cldr-data/supplemental/weekData.json");
const currencyData = require("cldr-data/supplemental/currencyData.json");
const arCalendar = require("cldr-data/main/ar-EG/ca-gregorian.json");
load(likelySubtags, weekData, currencyData, numbers, currencies, calendar, dateFields, timeZoneNames, arCalendar);

describe('loads legacy cldr-data', () => {
    it('should set territory', () => {
        expect(cldr.bg.territory).toBe("BG");
    });

    it('should set name', () => {
        expect(cldr.bg.name).toBe("bg");
    });

    it('should set supplemental data', () => {
        expect(cldr.supplemental.likelySubtags).toBeDefined();
        expect(cldr.supplemental.currencyData).toBeDefined();
        expect(cldr.supplemental.weekData.firstDay).toBeDefined();
        expect(cldr.supplemental.weekData.weekendStart).toBeDefined();
        expect(cldr.supplemental.weekData.weekendEnd).toBeDefined();
        expect(cldr.supplemental.weekData.minDays).toBeUndefined();
    });
});

describe('load numbers', () => {

    it('should set symbols', () => {
        const symbols = cldr.bg.numbers.symbols;
        expect(symbols.decimal).toBe(",");
        expect(symbols.percentSign).toBe("%");
    });

    it('should set decimal pattern', () => {
        const decimal = cldr.bg.numbers.decimal;
        expect(decimal.patterns[0]).toBe("n");
        expect(decimal.groupSize).toHaveLength(1);
        expect(decimal.groupSize[0]).toBe(3);
    });

    it('should set currency pattern', () => {
        const currency = cldr.bg.numbers.currency;
        expect(currency.patterns[0]).toBe("n $");
        expect(currency.groupSize).toHaveLength(1);
        expect(currency.groupSize[0]).toBe(3);
    });

    it('should set currency unit patterns', () => {
        const currency = cldr.bg.numbers.currency;
        expect(currency["unitPattern-count-one"]).toBe("n $");
        expect(currency["unitPattern-count-other"]).toBe("n $");
    });

    it('should set percent pattern', () => {
        const percent = cldr.bg.numbers.percent;
        expect(percent.patterns[0]).toBe("n%");
        expect(percent.groupSize).toHaveLength(1);
        expect(percent.groupSize[0]).toBe(3);
    });

    it('preserve pattern spaces', () => {
        load({
            main: {
                patternSpaces: {
                    numbers: {
                        "decimalFormats-numberSystem-latn": {
                            standard: "foo #,##0.### bar;bar #,##0.### foo "
                        },
                        "currencyFormats-numberSystem-latn":{
                            standard: "¤ #,##0.00 bar",
                            accounting: "foo #,##0.00 ¤"
                        },
                        "percentFormats-numberSystem-latn": {
                            standard: "% #,##0.00 bar"
                        }
                    }
                }
            }
        });
        const info = cldr.patternSpaces.numbers;

        expect(info.decimal.patterns[0]).toBe("foo n bar");
        expect(info.decimal.patterns[1]).toBe("bar n foo ");
        expect(info.currency.patterns[0]).toBe("$ n bar");
        expect(info.accounting.patterns[0]).toBe("foo n $");
        expect(info.percent.patterns[0]).toBe("% n bar");
    });

    describe('load currencies', () => {

        it('should set currencies', () => {
            const currencies = cldr.bg.numbers.currencies;
            expect(currencies).toBeDefined();
        });

        it('should not throw error if territory currency is missing in currencyData', () => {
            expect(() => {
                const bgCurrencies = cldr.supplemental.currencyData.region.BG;
                try {
                    delete cldr.supplemental.currencyData.region.BG;
                    load(currencies);
                } finally {
                    cldr.supplemental.currencyData.region.BG = bgCurrencies;
                }
            }).not.toThrow();
        });
    });

});

describe('load calendar', () => {
    it('should set gmt formats', () => {
        const calendar = cldr.bg.calendar;
        expect(calendar.gmtFormat).toBe("Гринуич{0}");
        expect(calendar.gmtZeroFormat).toBe("Гринуич");
    });

    it('should set predefined patterns', () => {
        const patterns = cldr.bg.calendar.patterns;

        expect(patterns.d).toBe("d.MM.y 'г'.");
        expect(patterns.D).toBe("EEEE, d MMMM y 'г'.");
        expect(patterns.F).toBe("EEEE, d MMMM y 'г'. H:mm:ss");
        expect(patterns.g).toBe("d.MM.y 'г'. H:mm");
        expect(patterns.G).toBe("d.MM.y 'г'. H:mm:ss");
        expect(patterns.t).toBe("H:mm");
        expect(patterns.T).toBe("H:mm:ss");
    });

    it('should set standard patterns', () => {
        const patterns = cldr.bg.calendar.patterns;
        expect(patterns.s).toBe("yyyy'-'MM'-'dd'T'HH':'mm':'ss");
        expect(patterns.u).toBe("yyyy'-'MM'-'dd HH':'mm':'ss'Z'");
    });

    it('should set dateTimeFormats', () => {
        const dateTimeFormats = cldr.bg.calendar.dateTimeFormats;
        expect(dateTimeFormats).toBeDefined();
        expect(dateTimeFormats.availableFormats).toBeDefined();
    });

    it('should set days formats', () => {
        const formats = cldr.bg.calendar.days.format;
        expect(formats.abbreviated).toBeDefined();
        expect(formats.narrow).toBeDefined();
        expect(formats.short).toBeDefined();
        expect(formats.wide).toBeDefined();
    });

    it('should set days stand-alone formats', () => {
        const formats = cldr.bg.calendar.days['stand-alone'];
        expect(formats.abbreviated).toBeDefined();
        expect(formats.narrow).toBeDefined();
        expect(formats.short).toBeDefined();
        expect(formats.wide).toBeDefined();
    });

    it('should set months formats', () => {
        const formats = cldr.bg.calendar.months.format;
        expect(formats.abbreviated).toBeDefined();
        expect(formats.narrow).toBeDefined();
        expect(formats.wide).toBeDefined();
    });

    it('should set months stand-alone formats', () => {
        const formats = cldr.bg.calendar.months['stand-alone'];
        expect(formats.abbreviated).toBeDefined();
        expect(formats.narrow).toBeDefined();
        expect(formats.wide).toBeDefined();
    });

    it('should set quarters formats', () => {
        const formats = cldr.bg.calendar.quarters.format;
        expect(formats.abbreviated).toBeDefined();
        expect(formats.narrow).toBeDefined();
        expect(formats.wide).toBeDefined();
    });

    it('should set quarters stand-alone formats', () => {
        const formats = cldr.bg.calendar.quarters['stand-alone'];
        expect(formats.abbreviated).toBeDefined();
        expect(formats.narrow).toBeDefined();
        expect(formats.wide).toBeDefined();
    });

    it('should set dayPeriods formats', () => {
        const formats = cldr.bg.calendar.dayPeriods.format;
        expect(formats.abbreviated.am).toBeDefined();
        expect(formats.abbreviated.pm).toBeDefined();

        expect(formats.narrow.am).toBeDefined();
        expect(formats.narrow.pm).toBeDefined();

        expect(formats.wide.am).toBeDefined();
        expect(formats.wide.pm).toBeDefined();
    });

    it('should set dayPeriods stand-alone formats', () => {
        const formats = cldr.bg.calendar.dayPeriods['stand-alone'];
        expect(formats.abbreviated.am).toBeDefined();
        expect(formats.abbreviated.pm).toBeDefined();

        expect(formats.narrow.am).toBeDefined();
        expect(formats.narrow.pm).toBeDefined();

        expect(formats.wide.am).toBeDefined();
        expect(formats.wide.pm).toBeDefined();
    });

    it('should set eras formats', () => {
        const formats = cldr.bg.calendar.eras.format;
        expect(formats.abbreviated).toBeDefined();
        expect(formats.narrow).toBeDefined();
        expect(formats.wide).toBeDefined();
    });

    it('should set era display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.era;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.wide).toBe('ера');
        expect(dateFields.short).toBe('ера');
        expect(dateFields.narrow).toBe('ера');
    });

    it('should set year display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.year;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.short).toBeDefined();
        expect(dateFields.narrow).toBeDefined();
    });

    it('should set quarter display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.quarter;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.short).toBeDefined();
        expect(dateFields.narrow).toBeDefined();
    });

    it('should set month display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.month;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.short).toBeDefined();
        expect(dateFields.narrow).toBeDefined();
    });

    it('should set week display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.week;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.short).toBeDefined();
        expect(dateFields.narrow).toBeDefined();
    });

    it('should set day display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.day;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.short).toBeDefined();
        expect(dateFields.narrow).toBeDefined();
    });

    it('should set weekday display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.weekday;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.short).toBeDefined();
        expect(dateFields.narrow).toBeDefined();
    });

    it('should set dayperiod display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.dayperiod;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.short).toBeDefined();
        expect(dateFields.narrow).toBeDefined();
    });

    it('should set hour display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.hour;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.short).toBeDefined();
        expect(dateFields.narrow).toBeDefined();
    });

    it('should set minute display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.minute;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.short).toBeDefined();
        expect(dateFields.narrow).toBeDefined();
    });

    it('should set second display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.second;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.short).toBeDefined();
        expect(dateFields.narrow).toBeDefined();
    });

    it('should set zone display name', () => {
        const dateFields = cldr.bg.calendar.dateFields.zone;

        expect(dateFields.wide).toBeDefined();
        expect(dateFields.short).toBeDefined();
        expect(dateFields.narrow).toBeDefined();
    });
});

describe('localeInfo', () => {
    it('should return info by language', () => {
        const info = localeInfo('bg');
        expect(info.name).toBe('bg');
    });

    it('should return info by language and script', () => {
        const info = localeInfo('bg-Cyrl');
        expect(info.name).toBe('bg');
    });

    it('should return info by language and territory', () => {
        const info = localeInfo('bg-BG');
        expect(info.name).toBe('bg');
    });

    it('should return info by language, script and territory', () => {
        const info = localeInfo('bg-Cyrl-BG');
        expect(info.name).toBe('bg');
    });

    it('should throw an error if matching locale is no available', () => {
        expect(() => {
            localeInfo('fr');
        }).toThrowError(new RegExp(errors.NoLocale.name));
    });
});

describe('dateFormatNames', () => {
    it('should return names for locale name', () => {
        const names = dateFormatNames('en', { type: 'months', nameType: "abbreviated" });
        expect(names).toBeDefined();
    });

    it('should return names for locale info', () => {
        const names = dateFormatNames(localeInfo('en'), { type: 'months', nameType: "abbreviated" });
        expect(names).toBeDefined();
    });

    it('should return month names', () => {
        const names = dateFormatNames('bg', { type: 'months', nameType: "abbreviated" });
        expect(names).toBeDefined();
    });

    it('should return days names', () => {
        const names = dateFormatNames('bg', { type: 'days', nameType: "abbreviated" });
        expect(names).toBeDefined();
    });

    it('should return quarters names', () => {
        const names = dateFormatNames('bg', { type: 'quarters', nameType: "abbreviated" });
        expect(names).toBeDefined();
    });

    it('should return dayPeriods names', () => {
        const names = dateFormatNames('bg', { type: 'dayPeriods', nameType: "abbreviated" });
        expect(names).toBeDefined();
    });

    it('should return eras names', () => {
        const names = dateFormatNames('bg', { type: 'eras', nameType: "abbreviated" });
        expect(names).toBeDefined();
    });

    it('should return abbreviated names', () => {
        const names = dateFormatNames('bg', { type: 'days', nameType: "abbreviated" });
        expect(names).toEqual(['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']);
    });

    it('should return wide names', () => {
        const names = dateFormatNames('bg', { type: 'days', nameType: "wide" });
        expect(names).toEqual(['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота']);
    });

    it('should return narrow names', () => {
        const names = dateFormatNames('bg', { type: 'days', nameType: "narrow" });
        expect(names).toEqual(['н', 'п', 'в', 'с', 'ч', 'п', 'с']);
    });

    it('should return stand-alone names', () => {
        const names = dateFormatNames('en', { type: 'dayPeriods', nameType: "narrow", standAlone: true });
        expect(names.pm).toBe('PM');
    });

    it('should return lower names', () => {
        const names = dateFormatNames('en', { type: 'dayPeriods', nameType: "narrow", standAlone: true, lower: true });
        expect(names.pm).toBe('pm');
    });
});

describe('dateFieldName', () => {
    it('should throw error if locale dateFields are not available', () => {
        const calendar = cldr.en.calendar;
        const dateFields = calendar.dateFields;
        delete calendar.dateFields;
        try {
            expect(() => {
                dateFieldName({ type: 'day', nameType: 'wide' });
            }).toThrowError(/Cannot determine the locale date field names/);
        } finally {
            calendar.dateFields = dateFields;
        }

    });

    it('should return placeholder for the era type', () => {
        expect(dateFieldName({ type: 'era', nameType: 'wide' })).toBe("era");
        expect(dateFieldName({ type: 'era', nameType: 'narrow' })).toBe("era");
        expect(dateFieldName({ type: 'era', nameType: 'short' })).toBe("era");
    });

    it('should return placeholder for the year type', () => {
        expect(dateFieldName({ type: 'year', nameType: 'wide' })).toBe("year");
        expect(dateFieldName({ type: 'year', nameType: 'narrow' })).toBe("yr.");
        expect(dateFieldName({ type: 'year', nameType: 'short' })).toBe("yr.");
    });

    it('should return placeholder for the quarter type', () => {
        expect(dateFieldName({ type: 'quarter', nameType: 'wide' })).toBe("quarter");
        expect(dateFieldName({ type: 'quarter', nameType: 'narrow' })).toBe("qtr.");
        expect(dateFieldName({ type: 'quarter', nameType: 'short' })).toBe("qtr.");
    });

    it('should return placeholder for the month type', () => {
        expect(dateFieldName({ type: 'month', nameType: 'wide' })).toBe("month");
        expect(dateFieldName({ type: 'month', nameType: 'narrow' })).toBe("mo.");
        expect(dateFieldName({ type: 'month', nameType: 'short' })).toBe("mo.");
    });

    it('should return placeholder for the week type', () => {
        expect(dateFieldName({ type: 'week', nameType: 'wide' })).toBe("week");
        expect(dateFieldName({ type: 'week', nameType: 'narrow' })).toBe("wk.");
        expect(dateFieldName({ type: 'week', nameType: 'short' })).toBe("wk.");
    });

    it('should return placeholder for the day type', () => {
        expect(dateFieldName({ type: 'day', nameType: 'wide' })).toBe("day");
        expect(dateFieldName({ type: 'day', nameType: 'narrow' })).toBe("day");
        expect(dateFieldName({ type: 'day', nameType: 'short' })).toBe("day");
    });

    it('should return localized placeholder for the day type', () => {
        expect(dateFieldName({ type: 'day', nameType: 'wide' }, 'bg')).toBe("ден");
        expect(dateFieldName({ type: 'day', nameType: 'narrow' }, 'bg')).toBe("д");
        expect(dateFieldName({ type: 'day', nameType: 'short' }, 'bg')).toBe("д");
    });

    it('should return placeholder for the weekday type', () => {
        expect(dateFieldName({ type: 'weekday', nameType: 'wide' })).toBe("day of the week");
        expect(dateFieldName({ type: 'weekday', nameType: 'narrow' })).toBe("day of wk.");
        expect(dateFieldName({ type: 'weekday', nameType: 'short' })).toBe("day of wk.");
    });

    it('should return localized placeholder for the weekday type', () => {
        expect(dateFieldName({ type: 'weekday', nameType: 'wide' }, 'bg')).toBe("ден от седмицата");
        expect(dateFieldName({ type: 'weekday', nameType: 'narrow' }, 'bg')).toBe("ден от седм.");
        expect(dateFieldName({ type: 'weekday', nameType: 'short' }, 'bg')).toBe("ден от седм.");
    });

    it('should return placeholder for the dayperiod type', () => {
        expect(dateFieldName({ type: 'dayperiod', nameType: 'wide' })).toBe("AM/PM");
        expect(dateFieldName({ type: 'dayperiod', nameType: 'narrow' })).toBe("AM/PM");
        expect(dateFieldName({ type: 'dayperiod', nameType: 'short' })).toBe("AM/PM");
    });

    it('should return localized placeholder for the dayperiod type', () => {
        expect(dateFieldName({ type: 'dayperiod', nameType: 'wide' }, 'bg')).toBe("пр.об./сл.об.");
        expect(dateFieldName({ type: 'dayperiod', nameType: 'narrow' }, 'bg')).toBe("пр.об./сл.об.");
        expect(dateFieldName({ type: 'dayperiod', nameType: 'short' }, 'bg')).toBe("пр.об./сл.об.");
    });

    it('should return placeholder for hour type', () => {
        expect(dateFieldName({ type: 'hour', nameType: 'wide' })).toBe("hour");
        expect(dateFieldName({ type: 'hour', nameType: 'narrow' })).toBe("hr.");
        expect(dateFieldName({ type: 'hour', nameType: 'short' })).toBe("hr.");
    });

    it('should return localized placeholder for hour type', () => {
        expect(dateFieldName({ type: 'hour', nameType: 'wide' }, 'bg')).toBe("час");
        expect(dateFieldName({ type: 'hour', nameType: 'narrow' }, 'bg')).toBe("ч");
        expect(dateFieldName({ type: 'hour', nameType: 'short' }, 'bg')).toBe("ч");
    });

    it('should return placeholder for minute type', () => {
        expect(dateFieldName({ type: 'minute', nameType: 'wide' })).toBe("minute");
        expect(dateFieldName({ type: 'minute', nameType: 'narrow' })).toBe("min.");
        expect(dateFieldName({ type: 'minute', nameType: 'short' })).toBe("min.");
    });

    it('should return placeholder for second type', () => {
        expect(dateFieldName({ type: 'second', nameType: 'wide' })).toBe("second");
        expect(dateFieldName({ type: 'second', nameType: 'narrow' })).toBe("sec.");
        expect(dateFieldName({ type: 'second', nameType: 'short' })).toBe("sec.");
    });

    it('should return placeholder for millisecond type', () => {
        expect(dateFieldName({ type: 'millisecond', nameType: 'wide' })).toBe("millisecond");
        expect(dateFieldName({ type: 'millisecond', nameType: 'narrow' })).toBe("ms");
        expect(dateFieldName({ type: 'millisecond', nameType: 'short' })).toBe("ms");
    });
    
    it('should return placeholder for zone type', () => {
        expect(dateFieldName({ type: 'zone', nameType: 'wide' })).toBe("time zone");
        expect(dateFieldName({ type: 'zone', nameType: 'narrow' })).toBe("zone");
        expect(dateFieldName({ type: 'zone', nameType: 'short' })).toBe("zone");
    });

    it('should not support non-existent units of time as fieldName type', () => {
        expect(dateFieldName({ type: 'turbosecond', nameType: 'wide' })).toBeUndefined();
        expect(dateFieldName({ type: 'turbosecond', nameType: 'narrow' })).toBeUndefined();
        expect(dateFieldName({ type: 'turbosecond', nameType: 'short' })).toBeUndefined();
    });

    it('should return wide placeholder by default', () => {
        expect(dateFieldName({ type: 'year' })).toBe('year');
    });
});

describe('firstDay', () => {
    it('should return first day index based on locale', () => {
        expect(firstDay('en')).toBe(0);
        expect(firstDay('bg')).toBe(1);
    });

    it('stores first day on locale info', () => {
        firstDay('en');
        firstDay('bg');

        expect(cldr.en.firstDay).toBe(0);
        expect(cldr.bg.firstDay).toBe(1);
    });
});

describe('weekendRange', () => {
    it('should return weekend range index based on locale', () => {
        expect(weekendRange('en')).toEqual({ start: 6, end: 0 });
        expect(weekendRange('ar-EG')).toEqual({ start: 5, end: 6 });
    });

    it('stores weekend on locale info', () => {
        weekendRange('en');
        weekendRange('ar-EG');

        expect(cldr.en.weekendRange).toEqual({ start: 6, end: 0 });
        expect(cldr['ar-EG'].weekendRange).toEqual({ start: 5, end: 6 });
    });
});

describe('localeCurrency', () => {

    cldr.currencyTest = {
        identity: {
            territory: "currencyTest"
        },
        numbers: {}
    };

    afterEach(() => {
        delete cldr.currencyTest.numbers.localeCurrency;
    });

    it('should return default currency code for locale', () => {
        expect(localeCurrency('en')).toBe('USD');
        expect(localeCurrency('bg')).toBe('BGN');
    });

    it('throws error if second parameter is true and there is no valid currency for the locale', () => {
        cldr.supplemental.currencyData.region.currencyTest = [{ XXX: {} }];

        expect(() => {
            localeCurrency('currencyTest', true);
        }).toThrowError(/NoValidCurrency/);
    });

    it('returns still valid currency', () => {
        cldr.supplemental.currencyData.region.currencyTest = [
            {
                "Foo": {
                    "_from": "1915-01-01"
                }
            }, {
                "Bar": {
                    "_from": "1872-08-26",
                    "_to": "2002-05-15"
                }
            }
        ];

        expect(localeCurrency('currencyTest')).toBe('Foo');
    });

    it('returns latest still valid currency', () => {
        cldr.supplemental.currencyData.region.currencyTest = [
            {
                "Foo": {
                    "_from": "1915-01-01"
                }
            }, {
                "Bar": {
                    "_from": "1872-08-26"
                }
            }
        ];

        expect(localeCurrency('currencyTest')).toBe('Foo');
    });

    it('returns latest valid until currency', () => {
        cldr.supplemental.currencyData.region.currencyTest = [
            {
                "Foo": {
                    "_from": "1994-01-24",
                    "_to": "2002-05-15"
                }
            }, {
                "Bar": {
                    "_from": "2003-02-04",
                    "_to": "2006-06-03"
                }
            }, {
                "Baz": {
                    "_from": "2002-05-15",
                    "_to": "2006-06-03"
                }
            }
        ];

        expect(localeCurrency('currencyTest')).toBe('Bar');
    });

    it('ignores currencies with _tender equal to false', () => {
        cldr.supplemental.currencyData.region.currencyTest = [
            {
                "Foo": {
                    "_from": "1915-01-01",
                    "_tender": "false"
                }
            }, {
                "Bar": {
                    "_from": "1872-08-26"
                }
            }
        ];

        expect(localeCurrency('currencyTest')).toBe('Bar');
    });

});

describe('currencyDisplay', () => {
    it('should return symbol by default', () => {
        expect(currencyDisplay('bg', {
            currency: 'BGN'
        })).toBe('лв.');
    });

    it('should return code', () => {
        expect(currencyDisplay("bg", {
            currency: 'BGN',
            currencyDisplay: "code"
        })).toBe('BGN');
    });

    it('should return displayName', () => {
        expect(currencyDisplay('bg', {
            currency: 'USD',
            currencyDisplay: 'displayName'
        })).toBe('щатски долара');
    });

    it('should return displayName based on value if passed', () => {
        expect(currencyDisplay('bg', {
            currency: 'USD',
            currencyDisplay: 'displayName',
            value: 1
        })).toBe('щатски долар');

        expect(currencyDisplay('bg', {
            currency: 'USD',
            currencyDisplay: 'displayName',
            value: 2
        })).toBe('щатски долара');
    });

    it('should return narrow-symbol if available', () => {
        expect(currencyDisplay('bg', {
            currency: 'USD',
            currencyDisplay: 'symbol'
        })).toBe('$');
    });
});

describe('currencyDisplays', () => {
    it('should return all displays sorted by the length in descending order', () => {
        expect(currencyDisplays('bg', 'USD')).toEqual(["щатски долара", "Щатски долар", "щатски долар", "щ.д.", "USD", "$"]);
    });
});

describe('currencyFractionOptions', () => {
    it('should return fraction options based on currencyData', () => {
        const options = currencyFractionOptions('TND');
        expect(options.minimumFractionDigits).toBe(3);
        expect(options.maximumFractionDigits).toBe(3);
    });

    it('should return default fraction options if no info is available', () => {
        const options = currencyFractionOptions('USD');
        expect(options.minimumFractionDigits).toBe(2);
        expect(options.maximumFractionDigits).toBe(2);
    });
});

describe('numberSymbols', () => {
    it('should return locale number symbols', () => {
        expect(numberSymbols('en')).toEqual(localeInfo('en').numbers.symbols);
    });
});
