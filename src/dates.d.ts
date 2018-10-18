import { DateFormatNameOptions } from './cldr';

/**
 * Settings for the `formatDate` and `parseDate` functions.
 */
export interface DateFormatOptions {
    /**
     * Defines the skeleton format that is used to get the pattern from the
     * [`availableFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems) of the locale calendar.
     */
    skeleton?: string;

    /**
     * Defines the exact pattern that will be used to format the date.
     */
    pattern?: string;

    /**
     * Specifies which of the locale `dateFormats` should be used to format the value.
     */
    date?: 'short' | 'medium' | 'long' | 'full';

    /**
     * Specifies which of the locale `timeFormats` should be used to format the value.
     */
    time?: 'short' | 'medium' | 'long' | 'full';

    /**
     * Specifies which of the locale `dateTimeFormats` should be used to format the value.
     */
    datetime?: 'short' | 'medium' | 'long' | 'full';

    /**
     * Specifies how the date era should be formatted.
     */
    era?: 'narrow' | 'short' | 'long';

    /**
     * Specifies how the date year should be formatted.
     */
    year?: 'numeric' | '2-digit';

    /**
     * Specifies how the date month should be formatted.
     */
    month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';

    /**
     * Specifies how the day of the month should be formatted.
     */
    day?: 'numeric' | '2-digit';

    /**
     * Specifies how the day of the week should be formatted.
     */
    weekday?: 'narrow' | 'short' | 'long';

    /**
     * Specifies how the hours should be formatted.
     */
    hour?: 'numeric' | '2-digit';

    /**
     * Specifies whether a 12-hour time-set should be used for the formatting.
     */
    hour12?: boolean;

    /**
     * Specifies how the minutes should be formatted.
     */
    minute?: 'numeric' | '2-digit';

    /**
     * Specifies how the seconds should be formatted.
     */
    second?: 'numeric' | '2-digit';

    /**
     * Specifies how the time-zone should be formatted.
     */
    timeZoneName?: 'short' | 'long';
}

/** A Date-like object that provides read-only access to the date parts. */
export interface ImmutableDate {
    /** Gets the time value in milliseconds. */
    getTime(): number;

    /** Gets the year, using local time. */
    getFullYear(): number;

    /** Gets the year using Universal Coordinated Time (UTC). */
    getUTCFullYear(): number;

    /** Gets the month, using local time. */
    getMonth(): number;

    /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
    getUTCMonth(): number;

    /** Gets the day-of-the-month, using local time. */
    getDate(): number;

    /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
    getUTCDate(): number;

    /** Gets the day of the week, using local time. */
    getDay(): number;

    /** Gets the day of the week using Universal Coordinated Time (UTC). */
    getUTCDay(): number;

    /** Gets the hours in a date, using local time. */
    getHours(): number;

    /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
    getUTCHours(): number;

    /** Gets the minutes of a Date object, using local time. */
    getMinutes(): number;

    /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
    getUTCMinutes(): number;

    /** Gets the seconds of a Date object, using local time. */
    getSeconds(): number;

    /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
    getUTCSeconds(): number;

    /** Gets the milliseconds of a Date, using local time. */
    getMilliseconds(): number;

    /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
    getUTCMilliseconds(): number;

    /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
    getTimezoneOffset(): number;
}

/**
 * Converts a `Date` object to a string based on the specified format and locale.
 *
 * @param value - Defines the date that will be formatted.
 * @param format - Defines a string that represents a predefined or custom date format, or a configuration object.
 * @param locale - The optional locale `id`. If not specified, the `id` of the `"en"` locale is used.
 * @returns - The formatted date.
 */
export function formatDate(value: Date | ImmutableDate, format: string|DateFormatOptions, locale?: string): string;

/**
 * Converts a string to a `Date` object based on the specified format and locale.
 *
 * @param value - Defines the string that will be parsed.
 * @param format - Defines a string that represents a predefined or custom date format, a configuration object, or an array of formats that should be used to parse the value.
 * @param locale - The optional locale `id`. If not specified, the `id` of the `"en"` locale is used.
 * @returns - The parsed date.
 */
export function parseDate(value: string, format?: string | DateFormatOptions | string[] | DateFormatOptions[], locale?: string): Date;

/**
 * Details for the date format part.
 */
export interface DateFormatPart {
    /**
     * Specifies the type of the format part.
     */
    type?: 'era' | 'year' | 'quarter' | 'month' | 'day' | 'weekday' | 'hour' | 'minute' | 'second' | 'dayperiod' | 'zone' | 'literal';

    /**
     * Specifies the pattern of the format part.
     */
    pattern?: string;

    /**
     * Specifies the format names options.
     */
    names?: DateFormatNameOptions;

    /**
     * Specifies whether a 12-hour time-set should be used for the formatting.
     */
    hour12?: boolean;
}

/**
 * Splits the date format into objects that contain information about each part of the pattern.
 *
 * @param format - The format string or options.
 * @param locale - The optional locale `id`. If not specified, the `id` of the `"en"` locale is used.
 * @returns - The date format parts.
 */
export function splitDateFormat(format: string|DateFormatOptions, locale?: string): DateFormatPart[];
