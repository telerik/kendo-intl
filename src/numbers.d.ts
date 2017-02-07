/**
 * Settings for the formatNumber and parseNumber functions.
 */
export interface NumberFormatOptions {

    /**
     * Specifies the format style.
     */
    style?: 'decimal' | 'currency' | 'precent' | 'scientific';

    /**
     * Defines the currency code of the currency used in the formatting. If not specified, the default currency for the locale is used.
     */
    currency?: string;

    /**
     * Specifies how to display the currency.
     */
    currencyDisplay?: 'symbol' | 'code' | 'name';

    /**
     * Specifies whether to use grouping separators.
     */
    useGrouping?: boolean;

    /**
     * Defines the minimum number of integer digits to be used in the formatting.
     */
    minimumIntegerDigits?: number;

    /**
     * Defines the minimum number of fraction digits to use.
     * The default value for the decimal and percent formatting is 0 (zero).
     * The default value of the currency formatting is the number of digits for the currency from the supplemental `currencyData` or 2 if no info is provided for the currency.
     */
    minimumFractionDigits?: number;

    /**
     * Defines the maximum number of fraction digits to be used.
     * The default value of the decimal formatting is the greater one between `minimumFractionDigits` and 3.
     * The default value of the currency formatting is the greater one between `minimumFractionDigits` and the number of digits for the currency from the supplemental  `currencyData` or 2 if no info is provided for the currency.
     * The default value of the percent formatting is the greater one between `minimumFractionDigits` and 0 (zero).
     */
    maximumFractionDigits?: number;
}

/**
 * Converts a string to a `Number` based on the specified locale.
 *
 * @param value The string to be parsed.
 * @param locale The locale id defining the locale which information should be used to parse the string.
 * @param format The format used to parse the string. Usefull if parsing non-default currencies.
 * @returns The parsed number.
 */
export function parseNumber(value: string, locale?: string, format?: string|NumberFormatOptions): number;

/**
 * Converts a `Number` to a string based on the specified format and locale.
 *
 * @param value The number to be formatted.
 * @param format The format to be applied.
 * @param locale The locale id defining the locale which information should be used for the formatting.
 * @returns The formatted number.
 */
export function formatNumber(value: number, format: string|NumberFormatOptions, locale?: string): string;