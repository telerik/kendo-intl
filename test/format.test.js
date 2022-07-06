import { load } from '../src/cldr';
import { toString, format } from '../src/format';

const likelySubtags = require("cldr-core/supplemental/likelySubtags.json");
const calendar = require("cldr-dates-full/main/bg/ca-gregorian.json");
const numbers = require("cldr-numbers-full/main/bg/numbers.json");
const currencies = require("cldr-numbers-full/main/bg/currencies.json");
const currencyData = require("cldr-core/supplemental/currencyData.json");

load(likelySubtags, calendar, currencyData, numbers, currencies);

describe('toString', () => {
    function logCharCodes(value) {
        var result = [];
        for (var idx = 0; idx < value.length; idx++) {
            result.push(value.charCodeAt(idx));
        }
        console.log(result.join(","));
    }
    
    it('formats value as date', () => {
        expect(toString(new Date(2000, 0, 30), "d", "en")).toEqual("1/30/2000");
    });

    it('formats value as date based on the specified locale', () => {
        expect(toString(new Date(2000, 0, 30), "d", "bg")).toEqual("30.01.2000 г.");
    });

    it('formats value as number', () => {
        expect(toString(10, "c", "en")).toEqual("$10.00");
    });

    it('formats value as number based on the specified locale', () => {
        expect(toString(10, "c", "bg")).toEqual("10,00 лв.");
    });

    it('returns empty string if the value is undefined', () => {
        expect(toString(undefined, "c", "en")).toBe("");
    });

    it('returns empty string if the value is null', () => {
        expect(toString(null, "c", "en")).toBe("");
    });

    it('returns the value if the format is not defined', () => {
        expect(toString(10)).toBe(10);
    });
});

describe('format', () => {
    it('replaces placeholders', () => {
        expect(format("{0}-{1}", ["foo", "bar"])).toEqual("foo-bar");
    });

    it('formats values based on specified format', () => {
        expect(format("{0:d}-{1:c}", [new Date(2000, 0, 30), 10])).toEqual("1/30/2000-$10.00");
    });

    it('formats values based on specified format and locale', () => {
        expect(format("{0:d}-{1:c}", [new Date(2000, 0, 30), 10], "bg")).toEqual("30.01.2000 г.-10,00 лв.");
    });
});