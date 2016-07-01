export interface DateFormatOptions {
    skeleton?: string;
    date?: string;
    time?: string;
    datetime?: string;
    era?: string;
    year?: string;
    month?: string;
    day?: string;
    weekday?: string;
    hour?: string;
    hour12?: boolean;
    minute?: string;
    second?: string;
    timeZoneName?: string;
}

export function formatDate(value: Date, format: String|DateFormatOptions, locale?: string): string;

export function parseDate(value: string, format?: String|DateFormatOptions|Array<String>|Array<DateFormatOptions>, locale?: string): Date;

