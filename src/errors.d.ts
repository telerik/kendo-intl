declare class IntlError {
    _error: {
        code: string;
        name: string;
        message: string;
    };
    name: string;
    constructor(error: any);
    appendMessage(message: string): void;
    formatMessage(...values: any[]): string;
}
declare const errors: any;
export { errors, IntlError };
