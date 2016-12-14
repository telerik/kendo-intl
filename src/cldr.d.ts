export interface DateFormatNameOptions {
    type: string;
    nameType: string;
    lower?: string;
    standAlone?: string;
}

export interface CurrencyDisplayOptions {
    currency: string;
    currencyDisplay?: string;
    value?: number;
}

export function currencyDisplay(locale: string, options: CurrencyDisplayOptions): any;
export function currencyDisplays(locale: string, currency: string): any;
export function currencyFractionOptions(locale: string): any;
export function dateFormatNames(locale: string, options: DateFormatNameOptions): any;
export function dateFormatNames(locale: string): any;
export function firstDay(locale: string): number;
export function load(...data: any[]): void;
export function localeCurrency(locale: string): any;
export function localeInfo(locale: string): any;
export function numberSymbols(locale: string): any;
export function territoryCurrencyCode(territory: string): any;
