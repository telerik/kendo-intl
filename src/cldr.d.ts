/**
 * Settings for the dateFormatNames function.
 */
export interface DateFormatNameOptions {
    /**
     * Specifies the type of names.
     */
    type: 'dayPeriods' | 'days' | 'months' | 'quarters' | 'eras';

    /**
     * Specifies the names form.
     */
    nameType: 'abbreviated' | 'narrow' | 'short' | 'wide';

    /**
     * Specifies if the returned names should be converted to lower case.
     */
    lower?: boolean;

    /**
     * Specifies whether the standalone names should be returned.
     */
    standAlone?: boolean;
}

/**
 * Returns the names from the specified locale based on the options.
 *
 * @param locale The locale id which defines the locale from which the names should be retrieved.
 * @param options The options that determine the returned names.
 * @returns The date format names.
 */
export function dateFormatNames(locale: string, options: DateFormatNameOptions): any;

/**
 * Returns the first day index starting from Sunday based on the specified locale.
 *
 * @param locale The locale id.
 * @returns The first day index.
 */
export function firstDay(locale: string): number;

/**
 * Loads CLDR data.
 *
 * @param data The CLDR data to be loaded. Accepts multiple parameters.
 */
export function load(...data: any[]): void;

/**
 * Returns the number symbols from the specified locale.
 *
 * @param locale The locale id which defines the locale for which the number symbols should be returned.
 * @returns The number symbols.
 */
export function numberSymbols(locale: string): any;

/**
 * @hidden
 */
export interface CurrencyDisplayOptions {
    currency: string;
    currencyDisplay?: string;
    value?: number;
}

/**
 * @hidden
 */
export function currencyDisplay(locale: string, options: CurrencyDisplayOptions): any;

/**
 * @hidden
 */
export function currencyDisplays(locale: string, currency: string): any;

/**
 * @hidden
 */
export function currencyFractionOptions(locale: string): any;

/**
 * @hidden
 */
export function localeCurrency(locale: string): any;

/**
 * @hidden
 */
export function localeInfo(locale: string): any;

/**
 * @hidden
 */
export function territoryCurrencyCode(territory: string): any;
