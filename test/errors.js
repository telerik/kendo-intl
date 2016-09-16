import { errors, IntlError } from '../src/errors';

describe('IntlError', () => {
    it('gets message', () => {
        const error = {
            code: "001",
            name: "BigError",
            message: "Big error!"
        };

        const intlError = new IntlError(error);

        const result = `${error.name}: ${error.message}`;

        expect(intlError.formatMessage(), result);
    });

    it('should replace single placeholder in the message', () => {
        const error = {
            code: "001",
            name: "BigError",
            message: "Big error! {0} {1}"
        };

        const intlError = new IntlError(error);

        const result = `${error.name}: Big error! p1 p2`;

        expect(intlError.formatMessage("p1", "p2"), result);
    });

    it('should append new message to current one', () => {
        const error = {
            code: "001",
            name: "BigError",
            message: "Big error! {0}"
        };

        const toAppend = "appended";
        const intlError = new IntlError(error);

        const result = `${error.name}: Big error! {0} ${toAppend}`;

        intlError.appendMessage(toAppend);

        expect(intlError.formatMessage(), result);
    });
});

describe('default errors', () => {
    it('should have NoLocaleError type', () => {
        expect(errors.NoLocaleError.formatMessage()).toMatch(/NoLocaleError/);
    });

    it('should have NoCurrencyError type', () => {
        expect(errors.NoCurrencyError.formatMessage()).toMatch(/NoCurrencyError/);
    });

    it('should have NoSupplementalCurrencyError type', () => {
        expect(errors.NoSupplementalCurrencyError.formatMessage()).toMatch(/NoSupplementalCurrencyError/);
    });

    it('should have NoCurrencyRegionError type', () => {
        expect(errors.NoCurrencyRegionError.formatMessage()).toMatch(/NoCurrencyRegionError/);
    });

    it('should have NoCurrencyDisplayError type', () => {
        expect(errors.NoCurrencyDisplayError.formatMessage()).toMatch(/NoCurrencyDisplayError/);
    });

    it('should have NoGMTInfoError type', () => {
        expect(errors.NoGMTInfoError.formatMessage()).toMatch(/NoGMTInfoError/);
    });

    it('should have NoWeekDataError type', () => {
        expect(errors.NoWeekDataError.formatMessage()).toMatch(/NoWeekDataError/);
    });

    it('should have NoFirstDayError type', () => {
        expect(errors.NoFirstDayError.formatMessage()).toMatch(/NoFirstDayError/);
    });
});
