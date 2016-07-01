export interface NumberFormatOptions {
    style?: string;
    currency?: string;
    currencyDisplay?: string;
    useGrouping?: boolean;
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
}

export function parseNumber(value: string, locale?: string, format?: String|NumberFormatOptions): number;
export function formatNumber(value: number, format: string|NumberFormatOptions, locale?: string): string;