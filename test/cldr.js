import { load, cldr, localeInfo, dateFormatNames, localeFirstDay, localeCurrency, currencyDisplay, currencyFractionOptions} from '../src/cldr';

const numbers = require("cldr-data/main/bg/numbers.json");
const timeZoneNames = require("cldr-data/main/bg/timeZoneNames.json");
const calendar = require("cldr-data/main/bg/ca-gregorian.json");
const currencies = require("cldr-data/main/bg/currencies.json");
const weekData = require("cldr-data/supplemental/weekData.json");
const currencyData = require("cldr-data/supplemental/currencyData.json");
load(weekData, currencyData, numbers, currencies, calendar, timeZoneNames);

describe('load', () => {
  it('should set territory', () => {
    expect(cldr.bg.territory).toEqual("BG");
  });

  it('should set name', () => {
    expect(cldr.bg.name).toEqual("bg");
  });

  it('should set supplemental data', () => {
    expect(cldr.supplemental.currencyData).toBeDefined();
    expect(cldr.supplemental.weekData).toBeDefined();
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

  it('should set percent pattern', () => {
    const percent = cldr.bg.numbers.percent;
    expect(percent.patterns[0]).toEqual("n%");
    expect(percent.groupSize.length).toEqual(1);
    expect(percent.groupSize[0]).toEqual(3);
  });

  it('should set currencies', () => {
    const currencies = cldr.bg.numbers.currencies;
    expect(currencies).toBeDefined();
  });

  it('should set localeCurrency', () => {
    const localeCurrency = cldr.bg.numbers.localeCurrency;
    expect(localeCurrency).toEqual("BGN");
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

  it('should set availableFormats', () => {
    const availableFormats = cldr.bg.calendar.availableFormats;
    expect(availableFormats).toBeDefined();
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
        }).toThrowError();
    });
});

describe('dateFormatNames', () => {
    it('should return names for locale name', () => {
        const names = dateFormatNames('en', 'months', 3);
        expect(names).toBeDefined();
    });

    it('should return names for locale info', () => {
        const names = dateFormatNames(localeInfo('en'), 'months', 3);
        expect(names).toBeDefined();
    });

    it('should return month names', () => {
        const names = dateFormatNames('bg', 'months', 3);
        expect(names).toBeDefined();
    });

    it('should return days names', () => {
        const names = dateFormatNames('bg', 'days', 3);
        expect(names).toBeDefined();
    });

    it('should return quarters names', () => {
        const names = dateFormatNames('bg', 'quarters', 3);
        expect(names).toBeDefined();
    });

    it('should return dayPeriods names', () => {
        const names = dateFormatNames('bg', 'dayPeriods', 3);
        expect(names).toBeDefined();
    });

    it('should return eras names', () => {
        const names = dateFormatNames('bg', 'eras', 3);
        expect(names).toBeDefined();
    });

    it('should return abbreviated names', () => {
        const names = dateFormatNames('bg', 'days', 3);
        expect(names).toEqual(['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']);
    });

    it('should return wide names', () => {
        const names = dateFormatNames('bg', 'days', 4);
        expect(names).toEqual(['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота']);
    });

    it('should return narrow names', () => {
        const names = dateFormatNames('bg', 'days', 5);
        expect(names).toEqual(['н', 'п', 'в', 'с', 'ч', 'п', 'с']);
    });

    it('should return stand-alone names', () => {
        const names = dateFormatNames('en', 'dayPeriods', 5, true);
        expect(names.pm).toEqual('PM');
    });

    it('should return lower names', () => {
        const names = dateFormatNames('en', 'dayPeriods', 5, true, true);
        expect(names.pm).toEqual('pm');
    });
});

describe('localeFirstDay', () => {
    it('should return first day name based on locale', () => {
        expect(localeFirstDay('en')).toEqual("sun");
        expect(localeFirstDay('bg')).toEqual("mon");
    });
});

describe('localeCurrency', () => {
    it('should return default currency code for locale', () => {
        expect(localeCurrency('en')).toEqual('USD');
        expect(localeCurrency('bg')).toEqual('BGN');
    });
});

describe('currencyDisplay', () => {
    it('should return symbol by default', () => {
        expect(currencyDisplay('BGN', 'bg')).toEqual('лв.');
    });

    it('should return code', () => {
        expect(currencyDisplay('BGN', 'bg', 'code')).toEqual('BGN');
    });

    it('should return displayName', () => {
        expect(currencyDisplay('USD', 'bg', 'displayName')).toEqual('Щатски долар');
    });

    it('should return narrow-symbol if available', () => {
        expect(currencyDisplay('USD', 'bg', 'symbol')).toEqual('$');
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
