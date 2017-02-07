/**
 * Settings for the formatDate and parseDate functions.
 */
export interface DateFormatOptions {
    /**
     * Defines the skeleton format used to get the pattern from the locale calendar [`availableFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems).
     */
    skeleton?: string;

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
     * Specifies how should the date era be formatted.
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
     * Specifies if a 12-hour time set should be used for the formatting.
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
     * Specifies how the timezone should be formatted.
     */
    timeZoneName?: 'short' | 'long';
}

/**
 * Converts a `Date` object to a string based on the specified format and locale.
 *
 * @param value Defines the date to be formatted.
 * @param format Defines a string representing a predefined or custom date format, or a configuration object.
 * @param locale The optional locale id. If not specified, the `"en"` locale id is used.
 * @returns The formatted date.
 */
export function formatDate(value: Date, format: string|DateFormatOptions, locale?: string): string;

/**
 * Converts a string to a `Date` object based on the specified format and locale.
 *
 * @param value Defines the string to be parsed.
 * @param format Defines a string representing a predefined or custom date format, a configuration object, or an array of formats that should be used to parse the value.
 * @param locale The optional locale id. If not specified, the `"en"` locale id is used.
 * @returns The parsed date.
 */
export function parseDate(value: string, format?: string | DateFormatOptions | string[] | DateFormatOptions[], locale?: string): Date;

/**
 * Returns the full format based on the Date object and the specified format. If no format is provided, the default short date format is used.
 *
 * @param value The date to format.
 * @param format The format string or options.
 * @param locale The optional locale id. If not specified, the `"en"` locale id is used.
 * @returns The full date format.
 */
export function dateFormatString(value: Date, format: string|DateFormatOptions, locale?: string): string;
