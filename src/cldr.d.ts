export interface DateFormatNameOptions {
    type: string;
    nameType: string;
    lower?: string;
    standAlone?: string;
}

export function dateFormatNames(locale: string, options: DateFormatNameOptions) : any;
export function firstDay(locale: string): number;
export function load(...data: any[]): void;
