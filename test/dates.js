import { load, localeInfo, dateFormatNames } from '../src/cldr';
import { formatDate, parseDate, splitDateFormat } from '../src/dates';
import { convertTimeZone } from '../src/dates/time-utils';
import pad from '../src/common/pad';

const likelySubtags = require("cldr-data/supplemental/likelySubtags.json");
const timeZoneNames = require("cldr-data/main/bg/timeZoneNames.json");
const calendar = require("cldr-data/main/bg/ca-gregorian.json");

load(likelySubtags, timeZoneNames, calendar, require("cldr-data/main/ko/timeZoneNames.json"), require("cldr-data/main/ko/ca-gregorian.json"), require("cldr-data/supplemental/weekData.json"));

Date.prototype.getTimezoneOffset = function() {
    return -120;
};

function date(year, month = 1, day = 1, hour = 0, minute = 0, second = 0, millisecond = 0) {
    return new Date(year, month - 1, day, hour, minute, second, millisecond);
}

describe('date formatting', () => {
    it('returns value if it is not a date', () => {
        expect(formatDate("foo")).toEqual("foo");
    });

    it('returns empty string if value is null or undefined', () => {
        expect(formatDate(undefined)).toEqual("");
        expect(formatDate(null)).toEqual("");
    });

    it('applies short date format if no format is set', () => {
        expect(formatDate(date(2000, 1, 30))).toEqual("1/30/2000");
    });

    it('supports short date format', () => {
        expect(formatDate(date(2000, 1, 30), "d")).toEqual("1/30/2000");
    });

    it('supports long date format', () => {
        expect(formatDate(date(2000, 1, 30), "D")).toEqual('Sunday, January 30, 2000');
    });

    it('supports long time format', () => {
        expect(formatDate(date(2000, 1, 30), "T")).toEqual("12:00:00 AM");
    });

    it('supports short time pattern', () => {
        expect(formatDate(date(2000, 1, 30), "t")).toEqual('12:00 AM');
    });

    it('supports full date long time format', () => {
        expect(formatDate(date(2000, 1, 30, 13, 9, 9), "F")).toEqual('Sunday, January 30, 2000 1:09:09 PM');
    });

    it('supports general format', () => {
        expect(formatDate(date(2000, 1, 30, 13, 9, 9), "g")).toEqual('1/30/2000 1:09 PM');
    });

    it('supports long general format', () => {
        expect(formatDate(date(2000, 1, 30, 13, 9, 9), "G")).toEqual('1/30/2000 1:09:09 PM');
    });

    it('supports iso formats', () => {
        expect(formatDate(date(2000, 1, 30, 13, 9, 9), "s")).toEqual('2000-01-30T13:09:09');
        expect(formatDate(date(2000, 1, 30, 13, 9, 9), "u")).toEqual('2000-01-30 13:09:09Z');
    });

    it('supports zero padded days', () => {
        expect(formatDate(date(2000, 1, 1), "M/dd/yyyy")).toEqual('1/01/2000');
    });

    it('supports abbreviated day of week', () => {
        expect(formatDate(date(2000, 1, 1), "E")).toEqual('Sat');
        expect(formatDate(date(2000, 1, 1), "EE")).toEqual('Sat');
        expect(formatDate(date(2000, 1, 1), "EEE")).toEqual('Sat');
    });

    it('supports wide day of week', () => {
        expect(formatDate(date(2000, 1, 1), "EEEE")).toEqual('Saturday');
    });

    it('supports narrow day of week', () => {
        expect(formatDate(date(2000, 1, 1), "EEEEE")).toEqual('S');
    });

    it('supports short day of week', () => {
        expect(formatDate(date(2000, 1, 1), "EEEEEE")).toEqual('Sa');
    });

    it('supports day of week index', () => {
        expect(formatDate(date(2000, 1, 1), "e")).toEqual("7");
        expect(formatDate(date(2000, 1, 1), "ee")).toEqual("7");
        expect(formatDate(date(2000, 1, 1), "c")).toEqual("7");
    });

    it('supports localized day of week index', () => {
        expect(formatDate(date(2000, 1, 1), "e", "bg")).toEqual("6");
    });

    it('supports stand-alone day of week', () => {
        expect(formatDate(date(2000, 1, 1), "ccc")).toEqual('Sat');
        expect(formatDate(date(2000, 1, 1), "cccc")).toEqual('Saturday');
        expect(formatDate(date(2000, 1, 1), "ccccc")).toEqual('S');
        expect(formatDate(date(2000, 1, 1), "cccccc")).toEqual('Sa');
    });

    it('supports zero padded months', () => {
        expect(formatDate(date(2000, 1, 1), "MM/dd/yyyy")).toEqual('01/01/2000');
    });

    it('supports abbreviated month name', () => {
        expect(formatDate(date(2000, 1, 1), "MMM")).toEqual('Jan');
    });

    it('supports wide month name', () => {
        expect(formatDate(date(2000, 1, 1), "MMMM")).toEqual('January');
    });

    it('supports narrow month name', () => {
        expect(formatDate(date(2000, 1, 1), "MMMMM")).toEqual('J');
    });

    it('supports stand-alone month formatting', () => {
        expect(formatDate(date(2000, 1, 1), "LL")).toEqual('01');
        expect(formatDate(date(2000, 1, 1), "LLL")).toEqual('Jan');
        expect(formatDate(date(2000, 1, 1), "LLLL")).toEqual('January');
        expect(formatDate(date(2000, 1, 1), "LLLLL")).toEqual('J');
    });

    it('supports year formatting', () => {
        const oneDigitYear = new Date(1, 0, 1);
        oneDigitYear.setFullYear(1);
        expect(formatDate(oneDigitYear, "y MM")).toEqual('1 01');
        expect(formatDate(date(2000, 1, 1), "y MM")).toEqual('2000 01');
    });

    it('supports two length year formatting', () => {
        const oneDigitYear = new Date(1, 0, 1);
        oneDigitYear.setFullYear(1);
        expect(formatDate(oneDigitYear, "yy")).toEqual('01');
        expect(formatDate(date(2016, 1, 1), "yy")).toEqual('16');
    });

    it('supports padded year formatting', () => {
        const oneDigitYear = new Date(1, 0, 1);
        oneDigitYear.setFullYear(1);
        expect(formatDate(oneDigitYear, "yyy")).toEqual('001');
        expect(formatDate(date(111, 1, 1), "yyyy")).toEqual('0111');
    });

    it('supports 12-hour clock formatting', () => {
        const hourSmall = date(2000, 1, 1, 1);
        const hourBig = date(2000, 1, 1, 13);

        expect(formatDate(hourSmall, "h:mm")).toEqual("1:00");
        expect(formatDate(hourBig, "h:mm")).toEqual("1:00");
        expect(formatDate(hourSmall, "hh:mm")).toEqual("01:00");
        expect(formatDate(hourBig, "hh:mm")).toEqual("01:00");
        expect(formatDate(date(2000, 1, 1, 12), "hh:mm")).toEqual("12:00");
    });

    it('supports 0-11 hour clock formatting', () => {
        const hourZero = date(2000, 1, 1, 0);
        const hourSmall = date(2000, 1, 1, 1);
        
        const hour12 = date(2000, 1, 1, 12);
        const hourBig = date(2000, 1, 1, 13);

        expect(formatDate(hourZero, "K:mm")).toEqual("0:00");
        expect(formatDate(hourSmall, "K:mm")).toEqual("1:00");
        expect(formatDate(hour12, "K:mm")).toEqual("0:00");
        expect(formatDate(hourBig, "K:mm")).toEqual("1:00");

        expect(formatDate(hourZero, "KK:mm")).toEqual("00:00");
        expect(formatDate(hourSmall, "KK:mm")).toEqual("01:00");
        expect(formatDate(hour12, "KK:mm")).toEqual("00:00");
        expect(formatDate(hourBig, "KK:mm")).toEqual("01:00");
    });

    it('supports 24-hour clock formatting', () => {
        const hourSmall = date(2000, 1, 1, 1);
        const hourBig = date(2000, 1, 1, 23);

        expect(formatDate(hourSmall, "H:mm")).toEqual("1:00");
        expect(formatDate(hourBig, "H:mm")).toEqual("23:00");
        expect(formatDate(hourSmall, "HH:mm")).toEqual("01:00");
        expect(formatDate(hourBig, "HH:mm")).toEqual("23:00");
    });

    it('supports 1-24 hour clock formatting', () => {
        const hourZero = date(2000, 1, 1, 0);
        const hourSmall = date(2000, 1, 1, 1);
        const hour12 = date(2000, 1, 1, 12);
        const hourBig = date(2000, 1, 1, 13);

        expect(formatDate(hourZero, "k:mm")).toEqual("24:00");
        expect(formatDate(hourSmall, "k:mm")).toEqual("1:00");
        expect(formatDate(hour12, "k:mm")).toEqual("12:00");
        expect(formatDate(hourBig, "k:mm")).toEqual("13:00");

        expect(formatDate(hourZero, "kk:mm")).toEqual("24:00");
        expect(formatDate(hourSmall, "kk:mm")).toEqual("01:00");
        expect(formatDate(hour12, "kk:mm")).toEqual("12:00");
        expect(formatDate(hourBig, "kk:mm")).toEqual("13:00");
    });

    it('supports day period short formatting', () => {
        expect(formatDate(date(2000, 1, 1, 1), "hh a")).toEqual("01 AM");
        expect(formatDate(date(2000, 1, 1, 13), "hh a")).toEqual("01 PM");
    });

    it('supports day period wide formatting', () => {
        expect(formatDate(date(2000, 1, 1, 1), "hh aaaa")).toEqual("01 AM");
        expect(formatDate(date(2000, 1, 1, 13), "hh aaaa")).toEqual("01 PM");
    });

    it('supports day period narrow formatting', () => {
        expect(formatDate(date(2000, 1, 1, 1), "hh aaaaa")).toEqual("01 a");
        expect(formatDate(date(2000, 1, 1, 13), "hh aaaaa")).toEqual("01 p");
    });

    it('supports minutes formatting', () => {
        expect(formatDate(date(2000, 1, 1, 10, 1), "HH:m")).toEqual('10:1');
        expect(formatDate(date(2000, 1, 1, 10, 33), "HH:m")).toEqual('10:33');
        expect(formatDate(date(2000, 1, 1, 10, 1), "HH:mm")).toEqual('10:01');
        expect(formatDate(date(2000, 1, 1, 10, 33), "HH:mm")).toEqual('10:33');
    });

    it('supports seconds formatting', () => {
        expect(formatDate(date(2000, 1, 1, 10, 1, 1), "m:s")).toEqual('1:1');
        expect(formatDate(date(2000, 1, 1, 10, 1, 33), "m:s")).toEqual('1:33');
        expect(formatDate(date(2000, 1, 1, 10, 1, 1), "m:ss")).toEqual('1:01');
        expect(formatDate(date(2000, 1, 1, 10, 1, 33), "m:ss")).toEqual('1:33');
    });

    it('supports S more than 99', () => {
        expect(formatDate(date(2000, 1, 1, 1, 1, 1, 100), "hh:mm:S")).toEqual('01:01:1');
    });

    it('supports SSS with round numbers', () => {
        expect(formatDate(date(2000, 1, 1, 1, 1, 1, 100), "hh:mm:SSS")).toEqual('01:01:100');
    });

    it('supports S less than 100', () => {
        expect(formatDate(date(2000, 1, 1, 1, 1, 1, 99), "hh:mm:S")).toEqual('01:01:0');
    });

    it('supports SS', () => {
        expect(formatDate(date(2000, 1, 1, 1, 1, 1, 129), "hh:mm:SS")).toEqual('01:01:12');
    });

    it('supports padded SS', () => {
        expect(formatDate(date(2000, 1, 1, 1, 1, 1, 10), "SS")).toEqual('01');
    });

    it('supports SSS', () => {
        expect(formatDate(date(2000, 1, 1, 1, 1, 1, 129), "SSS")).toEqual('129');
    });

    it('supports padded SSS', () => {
        expect(formatDate(date(2000, 1, 1, 1, 1, 1, 1), "SSS")).toEqual('001');
    });

    it('supports abbreviated era formatting', () => {
        expect(formatDate(date(-1, 1, 1), "y G")).toEqual('-1 BC');
        expect(formatDate(date(2000, 1, 1), "y G")).toEqual('2000 AD');
    });

    it('supports wide era formatting', () => {
        expect(formatDate(date(-1, 1, 1), "y GGGG")).toEqual('-1 Before Christ');
        expect(formatDate(date(2000, 1, 1), "y GGGG")).toEqual('2000 Anno Domini');
    });

    it('supports narrow era formatting', () => {
        expect(formatDate(date(-1, 1, 1), "y GGGGG")).toEqual('-1 B');
        expect(formatDate(date(2000, 1, 1), "y GGGGG")).toEqual('2000 A');
    });

    it('supports numerical quarter formatting', () => {
        expect(formatDate(date(2000, 3, 1), "Q")).toEqual('1');
        expect(formatDate(date(2000, 4, 1), "Q")).toEqual('2');
    });

    it('supports abbreviated quarter formatting', () => {
        expect(formatDate(date(2000, 3, 1), "QQQ")).toEqual('Q1');
        expect(formatDate(date(2000, 4, 1), "QQQ")).toEqual('Q2');
    });

    it('supports wide quarter formatting', () => {
        expect(formatDate(date(2000, 3, 1), "QQQQ")).toEqual('1st quarter');
        expect(formatDate(date(2000, 4, 1), "QQQQ")).toEqual('2nd quarter');
    });

    it('supports narrow quarter formatting', () => {
        expect(formatDate(date(2000, 3, 1), "QQQQQ")).toEqual('1');
        expect(formatDate(date(2000, 4, 1), "QQQQQ")).toEqual('2');
    });

    it('supports short localized GMT format', () => {
        expect(formatDate(date(2000, 2, 1), "z")).toEqual('GMT+2');
    });

    it('supports long localized GMT format', () => {
        expect(formatDate(date(2000, 2, 1), "zzzz")).toEqual('GMT+02:00');
    });

    it('supports the ISO8601 basic format timezone format', () => {
        expect(formatDate(date(2000, 2, 1), "Z")).toEqual('+0200');
    });

    it('supports Z long localized GMT format', () => {
        expect(formatDate(date(2000, 2, 1), "ZZZZ")).toEqual('GMT+02:00');
    });

    it('supports the ISO8601 extended timezone format', () => {
        expect(formatDate(date(2000, 2, 1), "ZZZZZ")).toEqual('+02:00');
    });

    it('supports the x timezone format', () => {
        expect(formatDate(date(2000, 2, 1), "x")).toEqual('+02');
        expect(formatDate(date(2000, 2, 1), "xx")).toEqual('+0200');
        expect(formatDate(date(2000, 2, 1), "xxx")).toEqual('+02:00');
        expect(formatDate(date(2000, 2, 1), "xxxx")).toEqual('+0200');
        expect(formatDate(date(2000, 2, 1), "xxxxx")).toEqual('+02:00');
    });

    it('supports the X timezone format', () => {
        expect(formatDate(date(2000, 2, 1), "X")).toEqual('+02');
        expect(formatDate(date(2000, 2, 1), "XX")).toEqual('+0200');
        expect(formatDate(date(2000, 2, 1), "XXX")).toEqual('+02:00');
        expect(formatDate(date(2000, 2, 1), "XXXX")).toEqual('+0200');
        expect(formatDate(date(2000, 2, 1), "XXXXX")).toEqual('+02:00');
    });

    it('supports single quote literals', () => {
        expect(formatDate(date(2000, 1, 1, 9), "'literal'")).toEqual('literal');
    });

    it('supports quote literals', () => {
        expect(formatDate(date(2000, 1, 1, 9), "\"literal\"")).toEqual('literal');
    });

    it('honors specific locale', () => {
        expect(formatDate(date(2000, 2, 10), "E MMMM", "bg")).toEqual('чт февруари');
    });

    it('formats using skeleton format', () => {
        expect(formatDate(date(2000, 2, 10), { skeleton: "yMMMd" })).toEqual('Feb 10, 2000');
    });

    it('supports skeleton format if there is not exact match', () => {
        expect(formatDate(date(2000, 2, 10), { skeleton: "MMd" })).toEqual('02 10');
    });

    it('replaces available format pattern with specified pattern', () => {
        expect(formatDate(date(2000, 2, 10), { skeleton: "MMMM" })).toEqual('February');
    });

    it('supports skeleton format if there is both date and time', () => {
        expect(formatDate(date(2000, 2, 10, 10, 30), { skeleton: "yMMMdhm" })).toEqual('Feb 10, 2000, 10:30 AM');
    });

    it('supports pattern', () => {
        expect(formatDate(date(2000, 2, 1), { pattern: "d" })).toEqual('1');
    });

    it('supports dateFormats', () => {
        expect(formatDate(date(2000, 2, 10, 10, 30), { date: "long" })).toEqual('February 10, 2000');
    });

    it('supports timeFormats', () => {
        expect(formatDate(date(2000, 2, 10, 10, 30), { time: "medium" })).toEqual('10:30:00 AM');
    });

    it('supports dateTimeFormats', () => {
        expect(formatDate(date(2000, 2, 10, 10, 30), { datetime: "short" })).toEqual('2/10/00, 10:30 AM');
    });

    it('supports setting the required fields via options', () => {
        expect(formatDate(date(2000, 2, 10, 10, 30), {
            era: "short",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            weekday: "short",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZoneName: "long",
            hour12: true
        })).toEqual('Thu, 02 10, 2000 AD, 10:30:00 AM GMT+02:00');
    });
});

describe('date parsing', () => {

    function isValidDate(year, month, day, date) {
        let isValid = true;

        if (year != date.getFullYear()) {
            isValid = false;
        } else if (month != date.getMonth() + 1) {
            isValid = false;
        } else if (day != date.getDate()) {
            isValid = false;
        }

        return isValid;
    }

    function isValidDateTime(date, year, month, day, hours, minutes, seconds, milliseconds) {
        let isValid = isValidDate(year, month, day, date);

        if (hours && hours != date.getHours()) {
            isValid = false;
        } else if (minutes && minutes != date.getMinutes()) {
            isValid = false;
        } else if (seconds && seconds != date.getSeconds()) {
            isValid = false;
        } else if (milliseconds && milliseconds != date.getMilliseconds()) {
            isValid = false;
        }

        return isValid;
    }

    it("should use the calendar patterns if no format is provided", () => {
        const result = parseDate("10/12/2000 10:10:10 AM");

        expect(result).toEqual(new Date(2000, 9, 12, 10, 10, 10));
    });

    it("pasrses time iso string if no format is provided", () => {
        const result = parseDate("10:10:10");
        const today = new Date();
        today.setHours(10, 10, 10, 0);

        expect(result).toEqual(today);
    });

    it("returns null if no value is passed", () => {
        const result = parseDate();

        expect(result).toBeNull(null);
    });

    it('parses d ISO format', function () {
        expect(isValidDate(2000, 12, 23, parseDate("12/23/2000"))).toBe(true);
    });

    it('parses G ISO format', function () {
        expect(isValidDateTime(parseDate("12/23/2000 1:30:30 AM"), 2000, 12, 23, 1, 30, 30)).toBe(true);
    });

    it('short year 11 should return year 2011', function () {
        const result = parseDate("12/23/11", "M/d/yy");
        expect(result.getFullYear()).toBe(2011);
    });

    it('short year 31 should return year 1931', function () {
        expect(parseDate("12/23/31", "M/d/yy").getFullYear()).toBe(1931);
    });

    it('short year 29 should return year 2029', function () {
        expect(parseDate("12/23/29", "M/d/yy").getFullYear(), 2029);
    });

    it('prases formats with leading and trailing spaces', function () {
        const result = parseDate("  12/23/2000 ", "  MM/dd/yyyy ");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('prases G format time', function () {
        const result = parseDate("12/23/2000 8:12:22 pm", "G");
        expect(isValidDateTime(result, 2000, 12, 23, 20, 12, 22)).toBe(true);
    });

    it('parses G format time at midnight', function () {
        const result = parseDate("10/23/2000 12:00:00 pm", "G");
        expect(isValidDateTime(result, 2000, 10, 23, 12, 0, 0)).toBe(true);
    });

    it('parses G format time at noon', function () {
        const result = parseDate("10/23/2000 12:00:00 am", "G");
        expect(isValidDateTime(result, 2000, 10, 23, 0, 0, 0)).toBe(true);
    });

    it('prases ISO date format', function () {
        const result = parseDate("12-23-2000", "MM-dd-yyyy");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Invariant Language date format', function () {
        const result = parseDate("12/23/2000", "MM/dd/yyyy");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Arabic date format', function () {
        const result = parseDate("10/10/99", "dd/MM/yy");
        expect(isValidDate(1999, 10, 10, result)).toBe(true);
    });

    it('parses Bulgarian Language date format', function () {
        const result = parseDate("23.12.2000", "d.M.yyyy");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Bulgarian Language with literal date format', function () {
        const result = parseDate("23.12.2000 ?.", "d.M.yyyy '?.'");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Catalan Language date format', function () {
        const result = parseDate("23/12/2000", "dd/MM/yyyy");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Chinese Language date format', function () {
        const result = parseDate("2000/12/23", "yyyy/M/d");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Czech Language date format', function () {
        const result = parseDate("23.12.2000", "d.M.yyyy");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Danish Language date format', function () {
        const result = parseDate("23-12-2000", "dd-MM-yyyy");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses German Language date format', function () {
        const result = parseDate("23.12.2000", "dd.MM.yyyy");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Greek Language date format', function () {
        const result = parseDate("23/12/2000", "d/M/yyyy");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses English Language date format', function () {
        const result = parseDate("12/23/2000", "M/d/yyyy");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Finnish Language date format', function () {
        const result = parseDate("23.12.2000", "d.M.yyyy");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses French Language date format', function () {
        const result = parseDate("23/12/2000", "dd/MM/yyyy");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Hungarian Language date format', function () {
        const result = parseDate("2000. 12. 23.", "yyyy. MM. dd.");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Japanese Language date format', function () {
        const result = parseDate("2000/12/23", "yyyy/MM/dd");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Korean Language date format', function () {
        const result = parseDate("2000-12-23", "yyyy-MM-dd");
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Dutch Language date format', function () {
        const result = parseDate("23-2-2008", "d-M-yyyy");
        expect(isValidDate(2008, 2, 23, result)).toBe(true);
    });

    it('parses Norwegian Language date format', function () {
        const result = parseDate("23-2-2008", "d-M-yyyy");
        expect(isValidDate(2008, 2, 23, result)).toBe(true);
    });

    it('parses Slovak Language date format', function () {
        const result = parseDate("23. 2. 2008", "d. M. yyyy");
        expect(isValidDate(2008, 2, 23, result)).toBe(true);
    });

    it('parses Estonian Language date format', function () {

        const dateFormat = "d.MM.yyyy";
        const result = parseDate("23.12.2008", dateFormat);
        expect(isValidDate(2008, 12, 23, result)).toBe(true);
    });

    it('parses Latvian Language date format', function () {
        const result = parseDate("2008.12.23.", "yyyy.MM.dd.");
        expect(isValidDate(2008, 12, 23, result)).toBe(true);
    });

    it('parses Lithuanian Language date format', function () {
        const result = parseDate("2008.12.23", "yyyy.MM.dd");
        expect(isValidDate(2008, 12, 23, result)).toBe(true);
    });

    it('parses Kyrgyz Language date format', function () {
        const result = parseDate("5.3.08", "dd.MM.yy");
        expect(isValidDate(2008, 3, 5, result)).toBe(true);
    });

    it('parses Uzbek Language date format', function () {
        const result = parseDate("5/3 2008", "dd/MM yyyy");
        expect(isValidDate(2008, 3, 5, result)).toBe(true);
    });

    it('parses Punjabi Language date format', function () { // Also : Gujarati, Telugu, Kannada
        const dateFormat = "dd-MM-yy";
        const result = parseDate("5-3-08", dateFormat);
        expect(isValidDate(2008, 3, 5, result)).toBe(true);
    });

    it('parses Mongolian Language date format', function () {
        const dateFormat = "yy.MM.dd";
        const result = parseDate("99.12.25", dateFormat);
        expect(isValidDate(1999, 12, 25, result)).toBe(true);
    });

    it('parses Belgium Language date format', function () { // Also Dutch(Belgium ), English (Australia)
        const dateFormat = "d/MM/yyyy";
        const result = parseDate("05/10/2009", dateFormat);
        expect(isValidDate(2009, 10, 5, result)).toBe(true);
    });

    it('parses Yakut Language date format', function () {
        const dateFormat = "MM.dd.yyyy";
        const result = parseDate("3.5.2008", dateFormat);
        expect(isValidDate(2008, 3, 5, result)).toBe(true);
    });

    it('parses Croatian Language date format', function () {
        const dateFormat = "d.M.yyyy.";
        const result = parseDate("5.3.2008.", dateFormat);
        expect(isValidDate(2008, 3, 5, result)).toBe(true);
    });

    it('parses Invariant Language long date format', function () {
        const dateFormat = "EEEE, dd MMMM yyyy";
        const result = parseDate("Saturday, 23 December 2000", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('skips EEEE in favor of dd value', function () {
        const dateFormat = "dd MMMM yyyy, EEEE";
        const result = parseDate("23 December 2000, Saturday", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Arabic long date format', function () {
        const dateFormat = "dd/MMMM/yyyy";
        const result = parseDate("10/September/2009", dateFormat);
        expect(isValidDate(2009, 9, 10, result)).toBe(true);
    });

    it('parses Bulgarian long date format', function () {
        const dateFormat = "dd MMMM yyyy '?.'";
        const result = parseDate("10 September 2009 '?.'", dateFormat);
        expect(isValidDate(2009, 9, 10, result)).toBe(true);
    });

    it('parses Catalan long date format', function () {
        const dateFormat = "EEEE, d' / 'MMMM' / 'yyyy";
        const result = parseDate("Saturday, 23 / December / 2000", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Chinese long date format', function () {
        const dateFormat = "yyyy'?'M'?'d'?'";
        const result = parseDate("2009?9?10?", dateFormat);
        expect(isValidDate(2009, 9, 10, result)).toBe(true);
    });

    it('parses Czech long date format', function () { // also: Danish, Norwegian
        const dateFormat = "d. MMMM yyyy";
        const result = parseDate("10. September 2009", dateFormat);
        expect(isValidDate(2009, 9, 10, result)).toBe(true);
    });

    it('parses German long date format', function () {
        const dateFormat = "EEEE, d. MMMM yyyy";
        const result = parseDate("Saturday, 23. December 2000", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Greek long date format', function () {
        const dateFormat = "EEEE, d MMMM yyyy";
        const result = parseDate("Saturday, 3 December 2000", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses English long date format', function () {
        const dateFormat = "EEEE, MMMM dd, yyyy";
        const result = parseDate("Saturday, December 3, 2000", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Finnish long date format', function () {
        const dateFormat = "d. MMMM'ta 'yyyy";
        const result = parseDate("23. Decemberta 2000", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses France long date format', function () {
        const dateFormat = "EEEE d MMMM yyyy";
        const result = parseDate("Saturday 3 December 2000", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Hebrew long date format', function () {
        const dateFormat = "EEEE dd MMMM yyyy";
        const result = parseDate("Saturday 3 December 2000", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Hungarian long date format', function () {
        const dateFormat = "yyyy. MMMM d.";
        const result = parseDate("2000. December 23.", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Icelandic long date format', function () {
        const dateFormat = "d. MMMM yyyy";
        const result = parseDate("23. December 2000", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Italian long date format', function () { // Also Dutch
        const dateFormat = "EEEE d MMMM yyyy";
        const result = parseDate("Saturday 3 December 2000", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Japanese long date format', function () {
        const dateFormat = "yyyy'?'M'?'d'?'";
        const result = parseDate("2000?12?3?", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Norwegian long date format', function () {
        const dateFormat = "EEEE d MMMM yyyy";
        const result = parseDate("Saturday 3 December 2000", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Brazil long date format', function () {
        const dateFormat = "EEEE, d' de 'MMMM' de 'yyyy";
        const result = parseDate("Saturday, 3 de December de 2000", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Polish long date format', function () { //Also Romanian, Thailand, Belarusian
        const dateFormat = "d MMMM yyyy";
        const result = parseDate("3 December 2000", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Russian long date format', function () {
        const dateFormat = "d MMMM yyyy '?.'";
        const result = parseDate("3 December 2000 '?.'", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Croatian long date format', function () { //Also Slovak
        const dateFormat = "d. MMMM yyyy";
        const result = parseDate("3. December 2000", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Albanian long date format', function () {
        const dateFormat = "yyyy-MM-dd";
        const result = parseDate("2000-12-23", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Swedish long date format', function () {
        const dateFormat = "'den 'd MMMM yyyy";
        const result = parseDate("den 23 December 2000", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Ukrainian long date format', function () {
        const dateFormat = "'den 'd MMMM yyyy' ?.'";
        const result = parseDate("den 23 December 2000", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Estonian long date format', function () {
        const dateFormat = "d. MMMM yyyy'. a.'";
        const result = parseDate("3. December 2000. a.", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Latvian long date format', function () {
        const dateFormat = "EEEE, yyyy'. gada 'd. MMMM";
        const result = parseDate("Saturday, 2000. gada 3. December", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Lithuanian long date format', function () {
        const dateFormat = "yyyy 'm.' MMMM d 'd.'";
        const result = parseDate("2000 m. December 23 d.", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses Basque long date format', function () {
        const dateFormat = "EEEE, yyyy.'eko' MMMM'k 'd";
        const result = parseDate("Saturday, 2000.eko Decemberk 3", dateFormat);
        expect(isValidDate(2000, 12, 3, result)).toBe(true);
    });

    it('parses Tibetian long date format', function () {
        const dateFormat = "yyyy'???????' M'???' d";
        const result = parseDate("2000??????? 12??? 23", dateFormat);
        expect(isValidDate(2000, 12, 23, result)).toBe(true);
    });

    it('parses date time format', function () { // ISO format
        const dateFormat = "dd/MMM/yyyy HH:mm:ss";
        const result = parseDate("22/Aug/2006 06:30:07", dateFormat);
        expect(new Date(2006, 7, 22, 6, 30, 7) - result).toBe(0);
    });

    it('should return null if date is invalid', function () {
        const dateFormat = "MM/dd/yyyy";

        const result = parseDate("1//2100", dateFormat);
        expect(result, null);
    });

    it('parses MMMM yyyy date format', function () {
        const result = parseDate("January 2000", "MMMM yyyy");
        expect(isValidDate(2000, 1, 1, result)).toBe(true);
    });

    it('parses MMMM yyyy date format if the current culture contains months with names that start with the same letters', function () {
        const monthNames = dateFormatNames("en", { type: "months", nameType: "wide" });
        const originalMonthName = monthNames[5];
        try {
            monthNames[5] = monthNames[6].substr(0, monthNames[6].length - 1);
            const result = parseDate(monthNames[6] + " 2000", "MMMM yyyy");
            expect(isValidDate(2000, 7, 1, result)).toBe(true);
        }
        finally {
            monthNames[5] = originalMonthName;
        }
    });

    it('parseDate G format of ko-KR culture', function () {
       //missing info in the cldr data for the abbreviated and narrow day periods
       const info = localeInfo("ko");
       const abbreviatedNames = dateFormatNames(info, { type: "dayPeriods", nameType: "abbreviated" });
       const wideNames = dateFormatNames(info, { type: "dayPeriods", nameType: "wide" });
       abbreviatedNames.am = wideNames.am;
       const result = parseDate("2016. 05. 27. 오전 11:00:00", "G", "ko");
       expect(isValidDateTime(result, 2016, 5, 27, 11, 0, 0, 0 ,0), result).toBe(true);
    });

    it('should return null if only year is passed', function () {
        const result = parseDate("2010", "M/dd/yyyy");

        expect(result).toBeNull();
    });

    it("parses dates using multiple formats", () => {
        const result = parseDate("2/2/2000", ["G", "M/dd/yyyy"]);

        expect(result).not.toBeNull();
    });

    it("parses using most specific format", () => {
        const result = parseDate("2/2/2000 10:10", ["M/dd/yyyy", "M/dd/yyyy HH:mm"]);

        expect(result).toEqual(new Date(2000, 1, 2, 10, 10));
    });

    it("does not parse value containing additional characters not included in the format", () => {
        const result = parseDate("2/2/2000 10:10 foo", "M/dd/yyyy HH:mm");

        expect(result).toBeNull();
    });

    it("parses value if it has additional spaces before and after the date", () => {
        const result = parseDate(" 2/2/2000 10:10  ", "M/dd/yyyy HH:mm");

        expect(result).toEqual(new Date(2000, 1, 2, 10, 10));
    });

    it("should parse string using predefined patterns", () => {
        const result = parseDate("2/2/2000");
        const result1 = parseDate("Thu Nov 24 2011 18:06:53");

        expect(result).not.toBeNull();
        expect(result1).not.toBeNull();
    });

    it("does not parse date if time does not have day period", () => {
        expect(parseDate("10:00", "hh:mm a")).toBeNull();
    });

    it("parses narrow day period", () => {
        expect(parseDate("10/10/2000 10:00 p", "MM/dd/yyyy hh:mm aaaaa")).toEqual(new Date(2000, 9, 10, 22, 0, 0));
    });

    it("parses dates in UTC iso8601 format", () => {
        const utcDate = new Date(Date.UTC(2000, 9, 10, 14, 30, 0));
        expect(parseDate("2000-10-10T14:30Z", "yyyy-MM-ddTHH:mmX")).toEqual(utcDate);
    });

    it("returns null if string is not valid ISO8601", () => {
        const utcDate = new Date(Date.UTC(2000, 9, 10, 14, 30, 0));
        expect(parseDate("2000-10-1014:30Z", "yyyy-MM-ddTHH:mmX"), null);
    });

    it("parses UTC milliseconds correctly", () => {
        const utcDate = new Date(Date.UTC(2000, 9, 10, 14, 30, 0, 450));
        expect(parseDate("2000-10-10T14:30:0.45Z", "yyyy-MM-ddTHH:mm:ss.SSX").getMilliseconds()).toEqual(utcDate.getMilliseconds());
    });

    it("parses milliseconds with leading zeros", () => {
        expect(parseDate("2000-10-10T14:30:0.0400000Z", "yyyy-MM-ddTHH:mm:ss.SSSSSSSX").getMilliseconds()).toEqual(40);
    });

    it('parses first digit of ISO date string milliseconds as hundreds', () => {
        expect(parseDate("2000-01-01T00:00:00.1Z").getMilliseconds()).toEqual(100);
        expect(parseDate("2000-01-01T00:00:00.10Z").getMilliseconds()).toEqual(100);
        expect(parseDate("2000-01-01T00:00:00.100Z").getMilliseconds()).toEqual(100);
    });

    it("parses UTC milliseconds without specified format", () => {
        const utcDate = new Date(Date.UTC(2000, 9, 10, 14, 30, 0, 450));
        expect(parseDate("2000-10-10T14:30:0.45Z").getMilliseconds()).toEqual(utcDate.getMilliseconds());
    });

    it("parses iso8601 with timezone", () => {
        expect(+parseDate("2000-10-10T14:30+03:30", "yyyy-MM-ddTHH:mmXXX")).toEqual(Date.parse("2000-10-10T14:30+03:30"));
    });

    it("parses iso8601 with 2 digit milliseconds and timezone without specified format", () => {
        expect(+parseDate("2000-10-10T14:30:00.03+02:00")).toEqual(Date.parse("2000-10-10T14:30:00.03+02:00"));
    });

    it("parses datetime with timezone offset (hours)", () => {
        expect(+parseDate("2000-10-10 14:30 +01", "yyyy-MM-dd HH:mm X")).toEqual(Date.parse("2000-10-10T14:30+01:00"));
    });

    it("parses datetime with timezone offset (hours and minutes)", () => {
        expect(+parseDate("2000-10-10 14:30 +03:30", "yyyy-MM-dd HH:mm XXX")).toEqual(Date.parse("2000-10-10T14:30+03:30"));
    });

    it("parses datetime with timezone hours and minutes offset wihout colon", () => {
        expect(+parseDate("2000-10-10 14:30 +0330", "yyyy-MM-dd HH:mm X")).toEqual(Date.parse("2000-10-10T14:30+03:30"));
    });

    it("returns null if timezone is incorrect", () => {
        expect(parseDate("2000-10-10 14:30 +14:30", "yyyy-MM-dd HH:mm XXX")).toBeNull();
    });

    it("honors DST start date", () => {
        //DST in Bulgaria 2012-3-25
        expect(parseDate("2012-3-25 3:30 +02:00", "yyyy-MM-dd HH:mm XXX")).toEqual(new Date("2012-03-25T03:30+02:00"));
        expect(parseDate("2012-3-25 3:30 +03:00", "yyyy-MM-dd HH:mm XXX")).toEqual(new Date("2012-03-25T03:30+03:00"));
    });

    it("honors DST end date", () => {
        //DST in Bulgaria 2012-10-28
        expect(parseDate("2012-10-28 2:00 +02:00", "yyyy-MM-dd HH:mm XXX")).toEqual(new Date("2012-10-28T02:00+02:00"));
        expect(parseDate("2012-10-28 3:00 +02:00", "yyyy-MM-dd HH:mm XXX")).toEqual(new Date("2012-10-28T03:00+02:00"));
    });

    it("parses JSON date format", () => {
        let date = JSON.stringify(new Date(2000, 10, 10, 14, 15, 30, 333));
        date = date.substr(1, date.length - 2);

        expect(+parseDate(date, "yyyy-MM-ddTHH:mm:ss.SSSX")).toEqual(Date.parse(date));
    });

    it("parses JSON date format without specified format", () => {
        let date = JSON.stringify(new Date(2000, 10, 10, 14, 15, 30, 333));
        date = date.substr(1, date.length - 2);

        expect(+parseDate(date)).toEqual(Date.parse(date));
    });

    it("parses Microsoft JSON date format", () => {
        const date = new Date();
        const dateString = "/Date(" + +date + ")/";

        expect(parseDate(dateString)).toEqual(date);
    });

    it("parses Microsoft JSON date format with negative ticks", () => {
        const date = new Date(1965, 0, 1);
        const dateString = "/Date(" + date.getTime() + ")/";

        expect(parseDate(dateString)).toEqual(date);
    });

    it("parses Microsoft JSON date format with offset", () => {
        const date = new Date();
        const utcDate = convertTimeZone(date, date.getTimezoneOffset(), 0);
        const adjustedDate = convertTimeZone(utcDate, 0, -150);
        const dateString = "/Date(" + date.getTime() + "+0230)/";

        expect(parseDate(dateString)).toEqual(adjustedDate);
    });

    it("parses Microsoft JSON date format with offset (2)", () => {
        const utcTime = 1376949210000;
        let tzoffset = new Date(utcTime).getTimezoneOffset();

        const sign = tzoffset > 0 ? "-" : "+";
        tzoffset = Math.abs(tzoffset);

        const minutes = tzoffset % 60;
        const hours = (tzoffset - minutes) / 60;

        const msoffset = sign + pad(hours, 2) + pad(minutes, 2);
        const daitring = "/Date(" + utcTime + msoffset + ")/";

        expect(parseDate(daitring)).toEqual(new Date(utcTime));
    });

    it("does not parse ISO8601 with format dd.MM.yyyy", () => {
        expect(parseDate("2012-08-16T21:00:00Z", "dd.MM.yyyy")).toBeNull();
    });

    it("eturns null if input does not meet format", () => {
        expect(parseDate("10/10/2000", "yyyy/MM/dd")).toBeNull();
    });

    it("parseDate parses yyy date", () => {
        expect(parseDate("900/10/10", "yyy/MM/dd")).toEqual(new Date(900, 9, 10));
    });

    it("does not expand date if yyy format", () => {
        const date = new Date(90, 9, 10);
        date.setFullYear(90);

        expect(parseDate("090/10/10", "yyy/MM/dd")).toEqual(date);
    });

    it("parses yy date", () => {
        expect(parseDate("09/10/10", "yy/MM/dd")).toEqual(new Date(2009, 9, 10));
    });

    it("returns null if 'yyy' and four digit year", () => {
        expect(parseDate("201/10/10", "yyyy/MM/dd")).toBeNull();
    });

    it("returns null if 'yyyy' and three digit year", () => {
        expect(parseDate("2011/10/10", "yyy/MM/dd")).toBeNull();
    });

    it("uses current year if the year is not part of the format", () => {
        const year = (new Date()).getFullYear();
        expect(parseDate("10/10", "MM/dd").getFullYear()).toEqual(year);
    });

    it("does not expand year if digits are 4", () => {
        const date = new Date(1, 9, 10);
        date.setFullYear(1);

        expect(parseDate("0001/10/10", "yyyy/MM/dd")).toEqual(date);
    });

    it("returns null if yyyy and bigger date", () => {
        expect(parseDate("10000/10/10", "yyyy/MM/dd")).toBeNull();
    });

    it("returns null if year is negative", () => {
        expect(parseDate("-9000/10/10", "yyyy/MM/dd")).toBeNull();
    });

    it("supports 5 digit year", () => {
        expect(parseDate("11111/10/10", "yyyyy/MM/dd")).toEqual(new Date(11111, 9, 10));
    });

    it("expands year if digits are 2", () => {
        expect(parseDate("01/10/10", "yy/MM/dd")).toEqual(new Date(2001, 9, 10));
    });

    it("supports milliseconds length depending on the 'S' count", () => {
        const result = parseDate("2012-03-25T03:30:10.1234567-10:00", "yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX");
        expect(+result).toEqual(Date.parse("2012-03-25T03:30:10.1234567-10:00"));
    });

    it("supports JSON.NET format", () => {
        expect(+parseDate("2012-03-25T03:30:10.1234567-10:00")).toEqual(Date.parse("2012-03-25T03:30:10.1234567-10:00"));
    });

    it("parses ISO8601 format using local time if no time zone is specified", () => {
        const result = parseDate("2012-03-25T03:30:10", "yyyy-MM-ddTHH:mm:ss");
        expect(result).toEqual(new Date(2012, 2, 25, 3, 30, 10));
    });

    it("returns null if entered day is bigger then the possible in the current month", () => {
        expect(parseDate("09/31/2012")).toBeNull();
    });

    it("parses ISO8601 with negative timezone", () => {
        const result = parseDate("2013-01-16T16:00:00-10:00", "yyyy-MM-ddTHH:mm:ssXXX");
        expect(result).toEqual(new Date("2013-01-16T16:00:00-10:00"));
    });

    it("returns null if format expects milliseconds", () => {
        expect(parseDate("2013-01-16T16:00:00-10:00", "yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX")).toBeNull();
    });

    it("parses ISO8601 with Z in the format", () => {
        expect(parseDate("2013-01-17T22:00:00Z")).toEqual(new Date("2013-01-17T22:00:00Z"));
    });

    it("month names case insensitive", () => {
        const format = "MMMM, dd-MMM-yyyy",
            expectedDate = new Date(2000, 2, 10),
            result1 = parseDate("march, 10-mar-2000", format),
            result2 = parseDate("MARCH, 10-MAR-2000", format),
            result3 = parseDate("March, 10-Mar-2000", format);

        expect(expectedDate).toEqual(result1);
        expect(expectedDate).toEqual(result2);
        expect(expectedDate).toEqual(result3);
    });

    it("parses 'yyyy-MM-dd HH:mm:ss' format", () => {
        expect(parseDate("2013-01-17 22:00:02")).toEqual(new Date("2013/01/17 22:00:02"));
    });

    it("parses 'yyyy-MM-dd HH:mm' format", () => {
        expect(parseDate("2013-01-17 22:02")).toEqual(new Date("2013/01/17 22:02:00"));
    });

    it("parses 'yyyy-MM-dd' format", () => {
        expect(parseDate("2013-01-17")).toEqual(new Date("2013/01/17 00:00:00"));
    });

    it("parses 'yyyy/MM/dd HH:mm:ss' format", () => {
        expect(parseDate("2013/01/17 22:00:02")).toEqual(new Date("2013/01/17 22:00:02"));
    });

    it("parses 'yyyy/MM/dd HH:mm' format", () => {
        expect(parseDate("2013/01/17 22:02")).toEqual(new Date("2013/01/17 22:02:00"));
    });

    it("parses 'yyyy/MM/dd' format", () => {
        expect(parseDate("2013/01/17")).toEqual(new Date("2013/01/17 00:00:00"));
    });

    it("uses today's date when the format contains only the time", () => {
        const today = new Date();
        today.setHours(10, 0, 0, 0);

        expect(parseDate("10:00 AM", "hh:mm a")).toEqual(today);
    });

    it("supports UTC date without a timezone offset", () => {
        expect(parseDate("2012-03-25T04:30:10.1234567")).toEqual(new Date(2012, 2, 25, 4, 30, 10, 123));
    });

    it("parses date string with UTC 'Z' zone designator", () => {
        const utcDate = new Date(Date.UTC(2014, 4, 21, 0, 0, 0));

        expect(parseDate("2014-05-21 00:00:00Z", "yyyy-MM-dd HH:mm:ssX")).toEqual(utcDate);
    });

    it('parses 0-11 hour clock formatted value', () => {
        const hourZero = date(2000, 1, 1, 0);
        const hourSmall = date(2000, 1, 1, 1);
        const hour12 = date(2000, 1, 1, 12);
        const hourBig = date(2000, 1, 1, 13);

        expect(parseDate("01.01.2000 0:00 am", "dd.MM.yyyy K:mm a")).toEqual(hourZero);
        expect(parseDate("01.01.2000 1:00 am", "dd.MM.yyyy K:mm a")).toEqual(hourSmall);
        expect(parseDate("01.01.2000 0:00 pm", "dd.MM.yyyy K:mm a")).toEqual(hour12);
        expect(parseDate("01.01.2000 1:00 pm", "dd.MM.yyyy K:mm a")).toEqual(hourBig);

        expect(parseDate("01.01.2000 00:00 am", "dd.MM.yyyy KK:mm a")).toEqual(hourZero);
        expect(parseDate("01.01.2000 01:00 am", "dd.MM.yyyy KK:mm a")).toEqual(hourSmall);
        expect(parseDate("01.01.2000 00:00 pm", "dd.MM.yyyy KK:mm a")).toEqual(hour12);
        expect(parseDate("01.01.2000 01:00 pm", "dd.MM.yyyy KK:mm a")).toEqual(hourBig);
    });

    it('parses 1-24 hour clock formatted value', () => {
        const hourZero = date(2000, 1, 1, 0);
        const hourSmall = date(2000, 1, 1, 1);
        const hour12 = date(2000, 1, 1, 12);
        const hourBig = date(2000, 1, 1, 13);

        expect(parseDate("01.01.2000 0:00", "dd.MM.yyyy k:mm")).toBeNull();
        expect(parseDate("01.01.2000 24:00", "dd.MM.yyyy k:mm")).toEqual(hourZero);
        expect(parseDate("01.01.2000 1:00", "dd.MM.yyyy k:mm")).toEqual(hourSmall);
        expect(parseDate("01.01.2000 12:00", "dd.MM.yyyy k:mm")).toEqual(hour12);
        expect(parseDate("01.01.2000 13:00", "dd.MM.yyyy k:mm")).toEqual(hourBig);

        expect(parseDate("01.01.2000 00:00", "dd.MM.yyyy kk:mm")).toBeNull();
        expect(parseDate("01.01.2000 24:00", "dd.MM.yyyy kk:mm")).toEqual(hourZero);
        expect(parseDate("01.01.2000 01:00", "dd.MM.yyyy kk:mm")).toEqual(hourSmall);
        expect(parseDate("01.01.2000 12:00", "dd.MM.yyyy kk:mm")).toEqual(hour12);
        expect(parseDate("01.01.2000 13:00", "dd.MM.yyyy kk:mm")).toEqual(hourBig);
    });
});

describe('splitDateFormat', () => {

    it('returns array containing type and pattern', () => {
        const expected = [{
            type: 'month',
            pattern: 'M'
        }, {
            type: 'literal',
            pattern: '/'
        }, {
            type: 'year',
            pattern: 'y'
        }, {
            type: 'literal',
            pattern: '/'
        }, {
            type: 'day',
            pattern: 'd'
        }];

        expect(splitDateFormat('M/y/d')).toEqual(expected);
    });

    it('splits format spefied as object', () => {
        const expected = [{
            type: 'month',
            pattern: 'M'
        }, {
            type: 'literal',
            pattern: '/'
        }, {
            type: 'day',
            pattern: 'd'
        }, {
            type: 'literal',
            pattern: '/'
        }, {
            type: 'year',
            pattern: 'yy'
        }];

        expect(splitDateFormat({
            date: 'short'
        })).toEqual(expected);
    });

    it('result contains literals parts', () => {

        expect(splitDateFormat('M "M" y')).toEqual([{
            type: 'month',
            pattern: 'M'
        }, {
            type: 'literal',
            pattern: ' "M" '
        }, {
            type: 'year',
            pattern: 'y'
        }]);

        expect(splitDateFormat("M'M'y")).toEqual([{
            type: 'month',
            pattern: 'M'
        }, {
            type: 'literal',
            pattern: "'M'"
        }, {
            type: 'year',
            pattern: 'y'
        }]);
    });

    it('result contains literals parts at the start and end of the format', () => {

        expect(splitDateFormat('Foo "M" y')).toEqual([{
            type: 'literal',
            pattern: 'Foo "M" '
        }, {
            type: 'year',
            pattern: 'y'
        }]);

        expect(splitDateFormat('M "M" Foo ')).toEqual([{
            type: 'month',
            pattern: 'M'
        }, {
            type: 'literal',
            pattern: ' "M" Foo '
        }]);
    });

    it('parts contain names information if the pattern uses localized names', () => {
        const expected = [{
            type: "month",
            names: {
                type: "months",
                nameType: "abbreviated",
                standAlone: false
            },
            pattern: "MMM"
        }];

        expect(splitDateFormat('MMM')).toEqual(expected);
    });

    it('part names standAlone options is set to true if specifier is for standAlone names', () => {
        const expected = [{
            type: "month",
            names: {
                type: "months",
                nameType: "abbreviated",
                standAlone: true
            },
            pattern: "LLL"
        }];

        expect(splitDateFormat('LLL')).toEqual(expected);
    });

    it('includes all specifiers', () => {
        const expected = [{
            type: "era",
            names: {
                type: "eras",
                nameType: "abbreviated",
                standAlone: false
            },
            pattern: "G"
        }, {
            type: "year",
            pattern: "yy"
        }, {
            type: "quarter",
            pattern: "q"
        }, {
            type: "quarter",
            names: {
                type: "quarters",
                nameType: "abbreviated",
                standAlone: false
            },
            pattern: "QQQ"
        }, {
            type: "month",
            names: {
                type: "months",
                nameType: "wide",
                standAlone: false
            },
            pattern: "MMMM"
        }, {
            type: "month",
            names: {
                type: "months",
                nameType: "narrow",
                standAlone: true
            },
            pattern: "LLLLL"
        }, {
            type: "day",
            pattern: "d"
        }, {
            type: "weekday",
            names: {
                type: "days",
                nameType: "abbreviated",
                standAlone: false
            },
            pattern: "EE"
        }, {
            type: "weekday",
            names: {
                type: "days",
                nameType: "abbreviated",
                standAlone: true
            },
            pattern: "ccc"
        }, {
            type: "weekday",
            names: {
                type: "days",
                nameType: "wide",
                standAlone: false
            },
            pattern: "eeee"
        }, {
            type: "hour",
            pattern: "h",
            hour12: true
        }, {
            type: "hour",
            pattern: "HH",
            hour12: false
        }, {
            type: "minute",
            pattern: "m"
        }, {
            type: "second",
            pattern: "s"
        }, {
            type: "dayperiod",
            names: {
                type: "dayPeriods",
                nameType: "abbreviated",
                standAlone: false
            },
            pattern: "a"
        }, {
            type: "zone",
            pattern: "x"
        }, {
            type: "zone",
            pattern: "X"
        }, {
            type: "zone",
            pattern: "z"
        }, {
            type: "zone",
            pattern: "Z"
        }];

        expect(splitDateFormat('GyyqQQQMMMMLLLLLdEEccceeeehHHmsaxXzZ')).toEqual(expected);
    });

    it('returns hour12 info in the DatePart', () => {
        const expected = [{
            type: 'hour',
            pattern: 'h',
            hour12: true
        }, {
            type: 'hour',
            pattern: 'H',
            hour12: false
        }, {
            type: 'hour',
            pattern: 'k',
            hour12: false
        }, {
            type: 'hour',
            pattern: 'K',
            hour12: true
        }];

        expect(splitDateFormat('hHkK')).toEqual(expected);
    });
});







