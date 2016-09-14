declare class IntlError {
    _error: {
        code: string;
        name: string;
        message: string;
    };
    constructor(error: any);
    getMessage(...values: any[]): string;
    setMessage(message: string): void;
}
declare const errors: any;
export { errors, IntlError };
