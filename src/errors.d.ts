declare class IntlError {
    name: string;
    message: string;
    constructor(error: { name: string, message: string });
    formatMessage(...values: any[]): string;
    error(...values: any[]): Error;
}
declare const errors: any;
declare const mapErrors: (errors: { [x: string]: string; }) => { [x: string]: IntlError };

export { errors, mapErrors, IntlError };
