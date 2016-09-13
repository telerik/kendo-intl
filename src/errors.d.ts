declare const errors: {
    NoLocaleError: {
        code: string;
        message: string;
    };
    NoCurrencyError: {
        code: string;
        message: string;
    };
    NoSupplementalCurrencyError: {
        code: string;
        message: string;
    };
    NoCurrencyRegionError: {
        code: string;
        message: string;
    };
    NoGMTInfoError: {
        code: string;
        message: string;
    };
    NoWeekDataError: {
        code: string;
        message: string;
    };
    NoFirstDayError: {
        code: string;
        message: string;
    };
};

declare const formatError: (error: {
    code: string;
    message: string;
}, additionalInfo: any) => string;

export { errors, formatError };

