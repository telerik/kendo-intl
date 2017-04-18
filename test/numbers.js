import { load, cldr } from '../src/cldr';
import { formatNumber, parseNumber } from '../src/numbers';

const likelySubtags = require("cldr-data/supplemental/likelySubtags.json");
const numbers = require("cldr-data/main/bg/numbers.json");
const currencies = require("cldr-data/main/bg/currencies.json");
const currencyData = require("cldr-data/supplemental/currencyData.json");

// CUSTOM region is used in tests below
currencyData.supplemental.currencyData.region.CUSTOM = [{ XXX: {} }];

load(likelySubtags, currencyData, numbers, currencies);

function loadCustom(options) {
    load({
      "main": {
        "custom": {
          "identity": {
            "language": "custom",
            "territory": "CUSTOM"
          },
          "numbers": {
            "symbols-numberSystem-latn": {
              "decimal": options.decimal || ".",
              "group": options.group || ","
            },
            "decimalFormats-numberSystem-latn": {
              "standard": options.pattern || "#,##0.###"
            },
            "currencyFormats-numberSystem-latn": {
              "standard": options.currencyPattern || "¤#,##0.00"
            },
            currencies: options.currencies
          }
        }
      }
    });
}

describe('formatNumber', () => {

    it('should apply decimal formatting if no format is specified', () => {
        expect(formatNumber(10000)).toEqual("10,000");
    });

    it('should return empty string if no value is passed', () => {
        expect(formatNumber()).toEqual("");
    });

    it('should return empty string if null value is passed', () => {
        expect(formatNumber(null)).toEqual("");
    });

    it('should return value if not finite value is passed', () => {
        expect(formatNumber(Infinity)).toBe(Infinity);
        expect(formatNumber("foo")).toEqual("foo");
    });

    it('should limit precision', () => {
        const value = 5.4654647884512e+96;
        expect(formatNumber(value, '#.#')).toEqual(value.toFixed(20));
    });


    describe('errors', () => {
        currencyData.supplemental.currencyData.region.CUSTOM = [{ XXX: {} }];
        loadCustom({ currencies: { USD: { symbol: "$" } } });

        it('throws error if the default locale currency cannot be determined', () => {
            expect(() => {
                formatNumber(10, 'c', 'custom');
            }).toThrowError(/NoValidCurrency/);
        });

        it('does not throw error if default locale currency cannot be determined but the currency is specified', () => {
            expect(() => {
                formatNumber(10, { style: 'currency', currency: 'USD' }, 'custom');
            }).not.toThrow();
        });

        it('does not throw error if default locale currency cannot be determined but the format does not require it', () => {
            expect(() => {
                formatNumber(10, 'n', 'custom');
            }).not.toThrow();
        });
    });
});

describe('standard scientific formatting', () => {
    const value = 123;

    it('should apply format', () => {
        expect(formatNumber(value, 'e')).toEqual(value.toExponential());
    });

    it('should apply format with precision', () => {
        expect(formatNumber(value, 'e10')).toEqual(value.toExponential(10));
    });

    it('should apply format when passing options object', () => {
        expect(formatNumber(value, { style: 'scientific' })).toEqual(value.toExponential());
    });

    it('should apply format with precision when passing options object', () => {
        expect(formatNumber(value, { style: 'scientific', minimumFractionDigits: 10})).toEqual(value.toExponential(10));
    });

    it('should use locale specific decimal separator', () => {
        expect(formatNumber(value, { style: 'scientific' }, 'bg')).toEqual('1,23e+2');
    });
});

describe('standard decimal formatting', () => {
    it('should apply format for big positive integer', () => {
        const number = 10000;
        expect(formatNumber(number, 'n')).toEqual("10,000");
    });

    it('should apply format for big positive integer with precision', () => {
        const number = 10000;
        expect(formatNumber(number, 'n2')).toEqual("10,000.00");
    });

    it('should apply format for big negative integer', () => {
        const number = -10000;
        expect(formatNumber(number, 'n')).toEqual("-10,000");
    });

    it('should apply format for big negative integer with precision', () => {
        const number = -10000;
        expect(formatNumber(number, 'n2')).toEqual("-10,000.00");
    });

    it('should apply format for small positive integer', () => {
        const number = 10;
        expect(formatNumber(number, 'n')).toEqual("10");
    });

    it('should apply format for small positive integer with precision', () => {
        const number = 10;
        expect(formatNumber(number, 'n2')).toEqual("10.00");
    });

    it('should apply format for small negative integer', () => {
        const number = -10;
        expect(formatNumber(number, 'n')).toEqual("-10");
    });

    it('should apply format for small negative integer with precision', () => {
        const number = -10;
        expect(formatNumber(number, 'n2')).toEqual("-10.00");
    });

    it('should format only the integer value with zero precision', () => {
        const number = 10.3337;
        expect(formatNumber(number, 'n0')).toEqual("10");
    });

    it('should clear sign if rounded number is zero', () => {
        expect(formatNumber(-0.00001, 'n2')).toEqual("0.00");
    });

    it('should apply culture specific format', () => {
        const number = 10000.123;
        expect(formatNumber(number, 'n', 'bg')).toEqual("10 000,123");
    });

    it('should apply format with options object', () => {
        const number = 10000;
        expect(formatNumber(number, {})).toEqual("10,000");
    });

    it('should apply minimumIntegerDigits', () => {
        const number = 10;
        expect(formatNumber(number, { minimumIntegerDigits: 5 })).toEqual("00,010");
    });

    it('should apply minimumIntegerDigits for floating point numbers', () => {
        const number = 10.123;
        expect(formatNumber(number, { minimumIntegerDigits: 5 })).toEqual("00,010.123");
    });

    it('should apply minimumIntegerDigits for floating point numbers', () => {
        const number = 10.123;
        expect(formatNumber(number, { minimumIntegerDigits: 5 })).toEqual("00,010.123");
    });

    it('should apply useGrouping', () => {
        const number = 10000;
        expect(formatNumber(number, { useGrouping: false })).toEqual("10000");
    });

    it('should apply minimumFractionDigits', () => {
        const number = 10.001;
        expect(formatNumber(number, { minimumFractionDigits: 5 })).toEqual("10.00100");
    });

    it('should apply zero minimumFractionDigits', () => {
        const number = 10;
        expect(formatNumber(number, { minimumFractionDigits: 0 })).toEqual("10");
    });

    it('should apply maximumFractionDigits', () => {
        const number = 10.123456;
        expect(formatNumber(number, { maximumFractionDigits: 5 })).toEqual("10.12346");
    });

    it('should apply maximumFractionDigits by default', () => {
        const number = 10.1235;
        expect(formatNumber(number, { })).toEqual("10.124");
    });

    it('should limit maximumFractionDigits based on minimumFractionDigits by default', () => {
        const number = 10.123456;
        expect(formatNumber(number, { minimumFractionDigits: 5})).toEqual("10.12346");
    });

    it('should apply multiple group separators', () => {
        loadCustom({ pattern: "#,##,##0.###"});

        expect(formatNumber(33111110.01, "n", "custom")).toEqual("3,31,11,110.01");
    });

    it('should apply group separators with zero length', () => {
        loadCustom({ pattern: ",,##0.###"});

        expect(formatNumber(33111110, "n", "custom")).toEqual("33111,110");
    });

    it('should not group integer for zero group', () => {
        loadCustom({ pattern: ",.###"});

        expect(formatNumber(33111110, "n", "custom")).toEqual("33111110");
    });

});

describe('standard percent formatting', () => {

    it('should apply format', () => {
        const number = 0.009;
        expect(formatNumber(number, 'p')).toEqual("1%");
    });

    it('should apply format with precision', () => {
        const number = 0.1;
        expect(formatNumber(number, 'p0')).toEqual("10%");
    });

    it('should apply format for negative values', () => {
        const number = -1.3;
        expect(formatNumber(number, 'p3')).toEqual("-130.000%");
    });

});

describe('standard currency formatting', () => {

    it('should apply format', () => {
        const number = 10;
        expect(formatNumber(number, 'c')).toEqual("$10.00");
    });

    it('should apply format with precision', () => {
        const number = 10;
        expect(formatNumber(number, 'c0')).toEqual("$10");
    });

    it('should apply format for negative numbers', () => {
        const number = -10.3337;
        expect(formatNumber(number, 'c3')).toEqual("-$10.334");
    });

    it("should apply group separators", () => {
        expect(formatNumber(123456789, "c")).toEqual("$123,456,789.00");
    });

    it("should not apply group separators to numbers with less digits", () => {
        expect(formatNumber(123, "c")).toEqual("$123.00");
    });

    it("should apply format when passing language", () => {
        expect(formatNumber(10, "c", "bg")).toEqual("10,00 лв.");
    });

    it("should apply format when passing language and territory", () => {
        expect(formatNumber(10, "c", "bg-BG")).toEqual("10,00 лв.");
    });

    it("should apply format when passing object", () => {
        expect(formatNumber(10, { style: "currency" })).toEqual("$10.00");
    });

    it("should apply format for specific currency", () => {
        expect(formatNumber(10, { style: "currency", currency: "BGN" })).toEqual("BGN10.00");
    });

    it("should apply specific currency display", () => {
        expect(formatNumber(10, { style: "currency", currency: "BGN", currencyDisplay: "name" })).toEqual("10.00 Bulgarian leva");
    });

    it("should format negative currency with name", () => {
        expect(formatNumber(-10, { style: "currency", currency: "BGN", currencyDisplay: "name" })).toEqual("-10.00 Bulgarian leva");
    });

    it("should format currency equal to one with name", () => {
        expect(formatNumber(1, { style: "currency", currency: "BGN", currencyDisplay: "name" })).toEqual("1.00 Bulgarian lev");
    });

    it("should apply minimumFractionDigits", () => {
        expect(formatNumber(10, { style: "currency", minimumFractionDigits: 5 })).toEqual("$10.00000");
    });

    it("should apply maximumFractionDigits", () => {
        expect(formatNumber(10.1235, { style: "currency", maximumFractionDigits: 3 })).toEqual("$10.124");
    });

});

describe('custom formatting', () => {

    it('replaces whole part of the number', () => {
        expect(formatNumber(10.9, '#')).toEqual("11");
    });

    it('replaces # after 0 with 0', () => {
        expect(formatNumber(10.1, '#0####')).toEqual("00010");
    });

    it('removes # after replace', () => {
        expect(formatNumber(10.1, '####')).toEqual("10");
    });

    it('applies thousand separator if pattern contains comma', () => {
        expect(formatNumber(1000.1, '##,##')).toEqual("1,000");
    });

    it('does not apply thousand separator if there are not enough digits', () => {
        expect(formatNumber(10, '##,##')).toEqual("10");
    });

    it("applies thousand separator for negative integer", function() {
        expect(formatNumber(-18000, '#,##0')).toEqual("-18,000");
    });

    it('applies thousand separator to a longer than the pattern number', () => {
        expect(formatNumber(1000000.1, '#,###')).toEqual("1,000,000");
    });

    it('replaces number in decimal part', () => {
        expect(formatNumber(10.1, '####.#')).toEqual("10.1");
    });

    it("replaces # before 0 with 0 in decimal part", () => {
        expect(formatNumber(10.1, "####.####0#")).toEqual("10.10000");
    });

    it("replaces # from decimal part", function() {
        expect(formatNumber(10.1, "####.####")).toEqual("10.1");
    });

    it("replaces # correctly when exponential number", function() {
        expect(formatNumber(0.0000001, "#.#######")).toEqual("0.0000001");
    });

    it("returns integer if no 0 in decimal part of the format", () => {
        expect(formatNumber(10, "####.#")).toEqual("10");
    });

    it("returns negative integer if no 0 in decimal part of the format", () => {
        expect(formatNumber(-10, "####.#")).toEqual("-10");
    });

    it("returns decimal if 0 in the decimal part of the format", () => {
        expect(formatNumber(10, "####.#0#")).toEqual("10.00");
    });

    it("does not round floating number to the last 0 if # follows", () => {
        expect(formatNumber(10.12345, "0.000#####")).toEqual("10.12345");
    });

    it("one digit after decimal point", () => {
        expect(formatNumber(10, "####.0")).toEqual("10.0");
    });

    it("rounds number if last sigh in the format is 0", () => {
        expect(formatNumber(10.99, "####.0")).toEqual("11.0");
    });

    it("decimal number 0.001", () => {
        expect(formatNumber(0.001, "####.#0#")).toEqual("0.001");
    });

    it("decimal number -0.001", () => {
        expect(formatNumber(-0.001, "####.#0#")).toEqual("-0.001");
    });

    it("formats with literals", () => {
        expect(formatNumber(10.1, "'EFD' #")).toEqual("EFD 10");
    });

    it("formats with '# %'", () => {
        expect(formatNumber(10.1, "# %")).toEqual("1010 %");
    });

    it("formats with percent symbol as literal", () => {
        expect(formatNumber(10, "# '%'")).toEqual("10 %");
    });

    it("formats with escaped percent symbol", () => {
        expect(formatNumber(10, "# \\%")).toEqual("10 %");
    });

    it("formats with quote as literal", () => {
        expect(formatNumber(10, "# \"%\"")).toEqual("10 %");
    });

    it("formats with escaped ' ", () => {
        expect(formatNumber(10, "# %\\'")).toEqual("1000 %'");
    });

    it("does not crash when number placeholder is in literal", () => {
        expect(formatNumber(10.12, "#.# '# y.0'")).toEqual("10.1 # y.0");
    });

    it("does not throw exception when format integer with 0.## format", () => {
        expect(formatNumber(4, "0.##")).toEqual("4");
    });

    it("formats correctly big integer using custom format", () => {
        expect(formatNumber(4000, "0,000.##########")).toEqual("4,000");
    });

    it("adds leading zero if number is shorter than format with group separator ", () => {
        expect(formatNumber(300, "0,000.##########")).toEqual("0,300");
    });

    it("adds group separator to a leading zeros number", () => {
        expect(formatNumber(300, "0,000,000.##########")).toEqual("0,000,300");
    });

    it("adds [3,2] group separators when custom format is used", () => {
        loadCustom({ pattern: "#,##,##0.###"});
        expect(formatNumber(33111110, "#,##,##,##,###.00", "custom")).toEqual("3,31,11,110.00");
    });

    it("rounds the number if custom format is used", () => {
        expect(formatNumber(3.235555, "0.##")).toEqual("3.24");
        expect(formatNumber(3.235555, "0.#0")).toEqual("3.24");
    });

    it("removes trailing zeros after rounding", () => {
        expect(formatNumber(0.016999999999, "#.#####")).toEqual("0.017");
        expect(formatNumber(0.016999999999, "#.0000#")).toEqual("0.0170");
        expect(formatNumber(1.999, "0.0#")).toEqual("2.0");
        expect(formatNumber(1.999, "0.#")).toEqual("2");
    });

    it("removes decimal part if no number placeholder", () => {
        expect(formatNumber(3.222, "0.")).toEqual("3");
    });

    it("formats negative numbers", () => {
        expect(formatNumber(-1, "0##")).toEqual("-001");
    });

    it("applies negative format", () => {
        expect(formatNumber(-0.001, "####;-(#.###)")).toEqual("-(0.001)");
    });

    it("applies negative format rounding", () => {
        expect(formatNumber(-0.001, "####;-(#.#)")).toEqual("-(0)");
    });

    it("toString decimal number -1000 with negative format", () => {
        expect(formatNumber(-1000, "#,##0;(#,##0);-")).toEqual("(1,000)");
    });

    it("applies negative format", () => {
        expect(formatNumber(-123, "####;-(#.00)")).toEqual("-(123.00)");
    });

    it("clears negative sign if rounded number is positive", () => {
        expect(formatNumber(-0.00001, "#.##")).toEqual("0");
    });

    it("formats 0", () => {
        expect(formatNumber(0, "####;-(#.#);ZERO")).toEqual("ZERO");
    });

    it("applies #.00 format for zero number", () => {
        expect(formatNumber(0, "####;-(#.00);#.00")).toEqual("0.00");
    });

    it("removes incorrect decimal separators", () => {
        expect(formatNumber(10, "# y. it")).toEqual("10 y it");
    });

    it("formats correctly big integer values", () => {
        expect(formatNumber(5285654313, "#.########0")).toEqual("5285654313.000000000");
    });

    it("rounds 17.115", () => {
        expect(formatNumber(17.115, "#.##")).toEqual("17.12");
    });

    it("returns number if format is a constant", () => {
        expect(formatNumber(0, "Foo")).toEqual("0");
    });

});

describe('parseNumber', () => {

    it('returns zero if zero is passed', () => {
        const value = 0;
        expect(parseNumber(value)).toEqual(value);
    });

    it('returns number if number is passed', () => {
        const value = 12.12;
        expect(parseNumber(value)).toEqual(value);
    });

    it("parses string number", () => {
        expect(parseNumber("12.12")).toEqual(12.12);
    });

    it("returns null if incorrect value is passed", () => {
        expect(parseNumber({})).toBeNull();
    });

    it("returns null if no value is passed", () => {
        expect(parseNumber()).toBeNull();
    });

    it("returns null if not valid number string is passed", () => {
        expect(parseNumber("not a number")).toBeNull();
    });

    it("returns null if negative sign is not in the begining", () => {
        expect(parseNumber("23-12")).toBeNull();
    });

    it("parses locale specific float numbers", () => {
        expect(parseNumber("12,13", "bg")).toEqual(12.13);
    });

    it("parses locale numbers with group separators", () => {
        expect(parseNumber("1,123.12", "en-US")).toEqual(1123.12);
        expect(parseNumber("1 123 112,13", "bg-BG")).toEqual(1123112.13);
    });

    it("parses currency numbers", () => {
        expect(parseNumber("$12")).toEqual(12);
    });

    it("parses currency numbers", () => {
        expect(parseNumber("$12")).toEqual(12);
    });

    it("parses currency numbers with non-default currency display", () => {
        expect(parseNumber("US dollars12")).toEqual(12);
        expect(parseNumber("US dollar12")).toEqual(12);
    });

    it("parses locale currency numbers", () => {
        expect(parseNumber("лв.12", "bg")).toEqual(12);
    });

    it("parses locale currency floating numbers", () => {
        expect(parseNumber("лв.1 123 112,13", "bg")).toEqual(1123112.13);
    });

    it("parses non-default for the locale currency", () => {
        expect(parseNumber("€12", "en", { currency: "EUR"})).toEqual(12);
    });

    it("parses percent numbers", () => {
        expect(parseNumber("% 12")).toEqual(0.12);
    });

    it("parses locale percent numbers", () => {
        expect(parseNumber("%1 234,56", "bg")).toEqual(12.3456);
    });

    it("parses negative numbers", () => {
        expect(parseNumber("-12,123.322")).toEqual(-12123.322);
    });

    it("parses negative currency numbers", () => {
        expect(parseNumber("-$12")).toEqual(-12);
    });

    it("parses locale negative currency numbers", () => {
        expect(parseNumber("-1 123 112,13 лв.", "bg")).toEqual(-1123112.13);
    });

    it("parses currency numbers with negative format", () => {
        loadCustom({ currencyPattern: "¤#,##0.00;(¤#,##0.00)", currencies: { USD: { symbol: "$" }}});
        expect(parseNumber("($1,123,112.13)", "custom", { style: "currency", currency: "USD" })).toEqual(-1123112.13);
    });

    it("parses negative percent numbers", () => {
        expect(parseNumber("-12%")).toEqual(-0.12);
    });

    it("parses exponential numbers", () => {
        expect(parseNumber("1.23432e+5")).toEqual(123432);
    });

    it("parses negative exponential numbers", () => {
        expect(parseNumber("-1.23432e-1")).toEqual(-0.123432);
    });

    it("parses exponential numbers with capital case", () => {
        expect(parseNumber("1E-7")).toEqual(0.0000001);
    });

    it("parses localized exponential numbers", () => {
        expect(parseNumber("1,23432e+5", "bg")).toEqual(123432);
    });

    describe('errors', () => {
        currencyData.supplemental.currencyData.region.CUSTOM = [{ XXX: {} }];
        loadCustom({ currencies: { USD: { symbol: "$" } } });

        it('throws error if the default locale currency cannot be determined', () => {
            expect(() => {
                parseNumber("10", 'custom', { style: "currency" });
            }).toThrowError(/NoValidCurrency/);
        });

        it('does not throw error if default locale currency cannot be determined but the currency is specified', () => {
            expect(() => {
                parseNumber("10", 'custom', { style: "currency", currency: 'USD' });
            }).not.toThrow();
        });

        it('does not throw error if default locale currency cannot be determined but the format does not require it', () => {
            expect(() => {
                parseNumber("10", 'custom', "n");
            }).not.toThrow();
        });
    });
});
