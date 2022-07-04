import { load, cldr, localeInfo, dateFieldName, dateFormatNames, firstDay, weekendRange,
    localeCurrency, currencyDisplay, currencyFractionOptions, currencyDisplays, numberSymbols, setData } from '../src/cldr';
import { errors } from '../src/errors';

const likelySubtags = require("cldr-core/supplemental/likelySubtags.json");
const numbers = require("cldr-numbers-full/main/bg/numbers.json");
const timeZoneNames = require("cldr-dates-full/main/bg/timeZoneNames.json");
const calendar = require("cldr-dates-full/main/bg/ca-gregorian.json");
const currencies = require("cldr-numbers-full/main/bg/currencies.json");
const dateFields = require("cldr-dates-full/main/bg/dateFields.json");
const weekData = require("cldr-core/supplemental/weekData.json");
const currencyData = require("cldr-core/supplemental/currencyData.json");
const arCalendar = require("cldr-dates-full/main/ar-AE/ca-gregorian.json");
load(likelySubtags, weekData, currencyData, numbers, currencies, calendar, dateFields, timeZoneNames, arCalendar);

describe('load', () => {
    it('should set territory', () => {
        expect(cldr.bg.territory).toEqual("BG");
    });

    it('should set name', () => {
        expect(cldr.bg.name).toEqual("bg");
    });

    it('should set supplemental data', () => {
        expect(cldr.supplemental.likelySubtags).toBeDefined();
        expect(cldr.supplemental.currencyData).toBeDefined();
        expect(cldr.supplemental.weekData.firstDay).toBeDefined();
        expect(cldr.supplemental.weekData.weekendStart).toBeDefined();
        expect(cldr.supplemental.weekData.weekendEnd).toBeDefined();
        expect(cldr.supplemental.weekData.minDays).not.toBeDefined();
    });
});

describe('setData', () => {
    it('sets locale data', () => {
        setData({
            name: "foo",
            numbers: {
                bar: 'baz'
            }
        });
        expect(cldr.foo.numbers.bar).toBe('baz');
    });

    it('extends numbers', () => {
        setData({
            name: "foo",
            numbers: {
                bar: 'qux'
            }
        });
        expect(cldr.foo.numbers.bar).toBe('qux');
    });

    it('sets likelySubtags', () => {
        setData({
            name: "foo",
            likelySubtags: {
                foo: 'foo-bar-baz'
            }
        });
        expect(cldr.supplemental.likelySubtags.bg).toBeDefined();
        expect(cldr.supplemental.likelySubtags.foo).toBe('foo-bar-baz');
    });

    it('sets currencyData', () => {
        setData({
            name: "foo",
            currencyData: {
                FOO: {
                    _digits: 0
                }
            }
        });
        expect(cldr.supplemental.currencyData.region).toBeDefined();
        expect(cldr.supplemental.currencyData.fractions.JPY).toBeDefined();
        expect(cldr.supplemental.currencyData.fractions.FOO._digits).toBe(0);
    });
});

describe('load numbers', () => {

    it('should set symbols', () => {
        const symbols = cldr.bg.numbers.symbols;
        expect(symbols.decimal).toEqual(",");
        expect(symbols.percentSign).toEqual("%");
    });

    it('should set decimal pattern', () => {
        const decimal = cldr.bg.numbers.decimal;
        expect(decimal.patterns[0]).toEqual("n");
        expect(decimal.groupSize.length).toEqual(1);
        expect(decimal.groupSize[0]).toEqual(3);
    });

    it('should set currency pattern', () => {
        const currency = cldr.bg.numbers.currency;
        expect(currency.patterns[0]).toEqual("n $");
        expect(currency.groupSize.length).toEqual(1);
        expect(currency.groupSize[0]).toEqual(3);
    });

    it('should set currency unit patterns', () => {
        const currency = cldr.bg.numbers.currency;
        expect(currency["unitPattern-count-one"]).toEqual("n $");
        expect(currency["unitPattern-count-other"]).toEqual("n $");
    });

    it('should set percent pattern', () => {
        const percent = cldr.bg.numbers.percent;
        expect(percent.patterns[0]).toEqual("n%");
        expect(percent.groupSize.length).toEqual(1);
        expect(percent.groupSize[0]).toEqual(3);
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
                            accounting: "foo #,##0.00 ¤",
                        },
                        "percentFormats-numberSystem-latn": {
                            standard: "% #,##0.00 bar",
                        }
                    }
                }
            }
        });
        const info = cldr.patternSpaces.numbers;

        expect(info.decimal.patterns[0]).toEqual("foo n bar");
        expect(info.decimal.patterns[1]).toEqual("bar n foo ");
        expect(info.currency.patterns[0]).toEqual("$ n bar");
        expect(info.accounting.patterns[0]).toEqual("foo n $");
        expect(info.percent.patterns[0]).toEqual("% n bar");
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
        expect(calendar.gmtFormat).toEqual("Гринуич{0}");
        expect(calendar.gmtZeroFormat).toEqual("Гринуич");
    });

    it('should set predefined patterns', () => {
        const patterns = cldr.bg.calendar.patterns;

        expect(patterns.d).toEqual("d.MM.y 'г'.");
        expect(patterns.D).toEqual("EEEE, d MMMM y 'г'.");
        expect(patterns.F).toEqual("EEEE, d MMMM y 'г'. H:mm:ss");
        expect(patterns.g).toEqual("d.MM.y 'г'. H:mm");
        expect(patterns.G).toEqual("d.MM.y 'г'. H:mm:ss");
        expect(patterns.t).toEqual("H:mm");
        expect(patterns.T).toEqual("H:mm:ss");
    });

    it('should set standard patterns', () => {
        const patterns = cldr.bg.calendar.patterns;
        expect(patterns.s).toEqual("yyyy'-'MM'-'dd'T'HH':'mm':'ss");
        expect(patterns.u).toEqual("yyyy'-'MM'-'dd HH':'mm':'ss'Z'");
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
        expect(dateFields.wide).toEqual('ера');
        expect(dateFields.short).toEqual('ера');
        expect(dateFields.narrow).toEqual('ера');
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
        expect(info.name).toEqual('bg');
    });

    it('should return info by language and script', () => {
        const info = localeInfo('bg-Cyrl');
        expect(info.name).toEqual('bg');
    });

    it('should return info by language and territory', () => {
        const info = localeInfo('bg-BG');
        expect(info.name).toEqual('bg');
    });

    it('should return info by language, script and territory', () => {
        const info = localeInfo('bg-Cyrl-BG');
        expect(info.name).toEqual('bg');
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
        expect(names.pm).toEqual('PM');
    });

    it('should return lower names', () => {
        const names = dateFormatNames('en', { type: 'dayPeriods', nameType: "narrow", standAlone: true, lower: true });
        expect(names.pm).toEqual('pm');
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
        expect(dateFieldName({ type: 'era', nameType: 'wide' })).toEqual("era");
        expect(dateFieldName({ type: 'era', nameType: 'narrow' })).toEqual("era");
        expect(dateFieldName({ type: 'era', nameType: 'short' })).toEqual("era");
    });

    it('should return placeholder for the year type', () => {
        expect(dateFieldName({ type: 'year', nameType: 'wide' })).toEqual("year");
        expect(dateFieldName({ type: 'year', nameType: 'narrow' })).toEqual("yr.");
        expect(dateFieldName({ type: 'year', nameType: 'short' })).toEqual("yr.");
    });

    it('should return placeholder for the quarter type', () => {
        expect(dateFieldName({ type: 'quarter', nameType: 'wide' })).toEqual("quarter");
        expect(dateFieldName({ type: 'quarter', nameType: 'narrow' })).toEqual("qtr.");
        expect(dateFieldName({ type: 'quarter', nameType: 'short' })).toEqual("qtr.");
    });

    it('should return placeholder for the month type', () => {
        expect(dateFieldName({ type: 'month', nameType: 'wide' })).toEqual("month");
        expect(dateFieldName({ type: 'month', nameType: 'narrow' })).toEqual("mo.");
        expect(dateFieldName({ type: 'month', nameType: 'short' })).toEqual("mo.");
    });

    it('should return placeholder for the month type', () => {
        expect(dateFieldName({ type: 'month', nameType: 'wide' })).toEqual("month");
        expect(dateFieldName({ type: 'month', nameType: 'narrow' })).toEqual("mo.");
        expect(dateFieldName({ type: 'month', nameType: 'short' })).toEqual("mo.");
    });

    it('should return placeholder for the week type', () => {
        expect(dateFieldName({ type: 'week', nameType: 'wide' })).toEqual("week");
        expect(dateFieldName({ type: 'week', nameType: 'narrow' })).toEqual("wk.");
        expect(dateFieldName({ type: 'week', nameType: 'short' })).toEqual("wk.");
    });

    it('should return placeholder for the day type', () => {
        expect(dateFieldName({ type: 'day', nameType: 'wide' })).toEqual("day");
        expect(dateFieldName({ type: 'day', nameType: 'narrow' })).toEqual("day");
        expect(dateFieldName({ type: 'day', nameType: 'short' })).toEqual("day");
    });

    it('should return localized placeholder for the day type', () => {
        expect(dateFieldName({ type: 'day', nameType: 'wide' }, 'bg')).toEqual("ден");
        expect(dateFieldName({ type: 'day', nameType: 'narrow' }, 'bg')).toEqual("д");
        expect(dateFieldName({ type: 'day', nameType: 'short' }, 'bg')).toEqual("д");
    });

    it('should return placeholder for the weekday type', () => {
        expect(dateFieldName({ type: 'weekday', nameType: 'wide' })).toEqual("day of the week");
        expect(dateFieldName({ type: 'weekday', nameType: 'narrow' })).toEqual("day of the week");
        expect(dateFieldName({ type: 'weekday', nameType: 'short' })).toEqual("day of the week");
    });

    it('should return localized placeholder for the weekday type', () => {
        expect(dateFieldName({ type: 'weekday', nameType: 'wide' }, 'bg')).toEqual("ден от седмицата");
        expect(dateFieldName({ type: 'weekday', nameType: 'narrow' }, 'bg')).toEqual("ден от седм.");
        expect(dateFieldName({ type: 'weekday', nameType: 'short' }, 'bg')).toEqual("ден от седм.");
    });

    it('should return placeholder for the dayperiod type', () => {
        expect(dateFieldName({ type: 'dayperiod', nameType: 'wide' })).toEqual("AM/PM");
        expect(dateFieldName({ type: 'dayperiod', nameType: 'narrow' })).toEqual("AM/PM");
        expect(dateFieldName({ type: 'dayperiod', nameType: 'short' })).toEqual("AM/PM");
    });

    it('should return localized placeholder for the dayperiod type', () => {
        expect(dateFieldName({ type: 'dayperiod', nameType: 'wide' }, 'bg')).toEqual("пр.об./сл.об.");
        expect(dateFieldName({ type: 'dayperiod', nameType: 'narrow' }, 'bg')).toEqual("пр.об./сл.об.");
        expect(dateFieldName({ type: 'dayperiod', nameType: 'short' }, 'bg')).toEqual("пр.об./сл.об.");
    });

    it('should return placeholder for hour type', () => {
        expect(dateFieldName({ type: 'hour', nameType: 'wide' })).toEqual("hour");
        expect(dateFieldName({ type: 'hour', nameType: 'narrow' })).toEqual("hr.");
        expect(dateFieldName({ type: 'hour', nameType: 'short' })).toEqual("hr.");
    });

    it('should return localized placeholder for hour type', () => {
        expect(dateFieldName({ type: 'hour', nameType: 'wide' }, 'bg')).toEqual("час");
        expect(dateFieldName({ type: 'hour', nameType: 'narrow' }, 'bg')).toEqual("ч");
        expect(dateFieldName({ type: 'hour', nameType: 'short' }, 'bg')).toEqual("ч");
    });

    it('should return placeholder for minute type', () => {
        expect(dateFieldName({ type: 'minute', nameType: 'wide' })).toEqual("minute");
        expect(dateFieldName({ type: 'minute', nameType: 'narrow' })).toEqual("min.");
        expect(dateFieldName({ type: 'minute', nameType: 'short' })).toEqual("min.");
    });

    it('should return placeholder for second type', () => {
        expect(dateFieldName({ type: 'second', nameType: 'wide' })).toEqual("second");
        expect(dateFieldName({ type: 'second', nameType: 'narrow' })).toEqual("sec.");
        expect(dateFieldName({ type: 'second', nameType: 'short' })).toEqual("sec.");
    });

    it('should return placeholder for millisecond type', () => {
        expect(dateFieldName({ type: 'millisecond', nameType: 'wide' })).toEqual("millisecond");
        expect(dateFieldName({ type: 'millisecond', nameType: 'narrow' })).toEqual("ms");
        expect(dateFieldName({ type: 'millisecond', nameType: 'short' })).toEqual("ms");
    });
    
    it('should return placeholder for zone type', () => {
        expect(dateFieldName({ type: 'zone', nameType: 'wide' })).toEqual("time zone");
        expect(dateFieldName({ type: 'zone', nameType: 'narrow' })).toEqual("time zone");
        expect(dateFieldName({ type: 'zone', nameType: 'short' })).toEqual("time zone");
    });

    it('should not support non-existent units of time as fieldName type', () => {
        expect(dateFieldName({ type: 'turbosecond', nameType: 'wide' })).toEqual(undefined);
        expect(dateFieldName({ type: 'turbosecond', nameType: 'narrow' })).toEqual(undefined);
        expect(dateFieldName({ type: 'turbosecond', nameType: 'short' })).toEqual(undefined);
    });

    it('should return wide placeholder by default', () => {
        expect(dateFieldName({ type: 'year' })).toEqual('year');
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
        expect(weekendRange('ar-AE')).toEqual({ start: 5, end: 6 });
    });

    it('stores weekend on locale info', () => {
        weekendRange('en');
        weekendRange('ar-AE');

        expect(cldr.en.weekendRange).toEqual({ start: 6, end: 0 });
        expect(cldr['ar-AE'].weekendRange).toEqual({ start: 5, end: 6 });
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
        expect(localeCurrency('en')).toEqual('USD');
        expect(localeCurrency('bg')).toEqual('BGN');
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

        expect(localeCurrency('currencyTest')).toEqual('Foo');
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

        expect(localeCurrency('currencyTest')).toEqual('Foo');
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

        expect(localeCurrency('currencyTest')).toEqual('Bar');
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

        expect(localeCurrency('currencyTest')).toEqual('Bar');
    });

});

describe('currencyDisplay', () => {
    it('should return symbol by default', () => {
        expect(currencyDisplay('bg', {
            currency: 'BGN'
        })).toEqual('лв.');
    });

    it('should return code', () => {
        expect(currencyDisplay("bg", {
            currency: 'BGN',
            currencyDisplay: "code"
        })).toEqual('BGN');
    });

    it('should return displayName', () => {
        expect(currencyDisplay('bg', {
            currency: 'USD',
            currencyDisplay: 'displayName'
        })).toEqual('щатски долара');
    });

    it('should return displayName based on value if passed', () => {
        expect(currencyDisplay('bg', {
            currency: 'USD',
            currencyDisplay: 'displayName',
            value: 1
        })).toEqual('щатски долар');

         expect(currencyDisplay('bg', {
            currency: 'USD',
            currencyDisplay: 'displayName',
            value: 2
        })).toEqual('щатски долара');
    });

    it('should return narrow-symbol if available', () => {
        expect(currencyDisplay('bg', {
            currency: 'USD',
            currencyDisplay: 'symbol'
        })).toEqual('$');
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
        expect(options.minimumFractionDigits).toEqual(3);
        expect(options.maximumFractionDigits).toEqual(3);
    });

    it('should return default fraction options if no info is available', () => {
        const options = currencyFractionOptions('USD');
        expect(options.minimumFractionDigits).toEqual(2);
        expect(options.maximumFractionDigits).toEqual(2);
    });
});

describe('numberSymbols', () => {
    it('should return locale number symbols', () => {
        expect(numberSymbols('en')).toEqual(localeInfo('en').numbers.symbols);
    });
});
