import { load, cldr, localeInfo, dateFormatNames, localeCurrency, currencyDisplay, currencyFractionOptions} from '../src/cldr';

function loadLocale() {
  const numbers = require("cldr-data/main/bg/numbers.json");
  const timeZoneNames = require("cldr-data/main/bg/timeZoneNames.json");
  const calendar = require("cldr-data/main/bg/ca-gregorian.json");
  const currencies = require("cldr-data/main/bg/currencies.json");
  const weekData = require("cldr-data/supplemental/weekData.json");
  const currencyData = require("cldr-data/supplemental/currencyData.json");
  load(currencyData, weekData, numbers, currencies, calendar, timeZoneNames);
}

describe('load', () => {
  loadLocale();

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
  loadLocale();

  it('should set symbols', () => {
    const symbols = cldr.bg.numbers.symbols;
    expect(symbols.decimal).toEqual(",");
    expect(symbols.percentSign).toEqual("%");
  });

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

  it('should set currencies pattern', () => {
    const currencies = cldr.bg.numbers.currencies;
    expect(currencies).toBeDefined();
  });

  it('should set localeCurrency', () => {
    const localeCurrency = cldr.bg.numbers.localeCurrency;
    expect(localeCurrency).toEqual("BGN");
  });
});

describe('load calendar', () => {
  loadLocale();

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
    expect(patterns.m).toEqual("d MMMM");
    expect(patterns.M).toEqual("d MMMM");
    expect(patterns.t).toEqual("H:mm");
    expect(patterns.T).toEqual("H:mm:ss");
    expect(patterns.y).toEqual("MMMM y 'г'.");
    expect(patterns.Y).toEqual("MMMM y 'г'.");
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

});

