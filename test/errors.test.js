import { describe, it, expect } from 'vitest';
import { errors, IntlError } from '../src/errors';

describe('Intl', () => {
    it('gets message', () => {
        const error = {
            name: "Big",
            message: "Big error!"
        };

        const intlError = new IntlError(error);

        const result = `${error.name}: ${error.message}`;

        expect(intlError.formatMessage()).toBe(result);
    });

    it('should replace single placeholder in the message', () => {
        const error = {
            name: "Big",
            message: "Big error! {0} {1}"
        };

        const intlError = new IntlError(error);

        const result = `${error.name}: Big error! p1 p2`;

        expect(intlError.formatMessage("p1", "p2")).toBe(result);
    });

    it('should return  instance with message', () => {
        const error = {
            name: "Big",
            message: "Big error! {0} {1}"
        };

        const intlError = new IntlError(error);

        const expectedMessage = `${error.name}: Big error! p1 p2`;

        expect(intlError.error("p1", "p2") instanceof Error).toBe(true);
        expect(intlError.error("p1", "p2").message).toBe(expectedMessage);
    });
});

describe('default errors', () => {
    it('should have NoLocale type', () => {
        expect(errors.NoLocale.formatMessage()).toMatch(/NoLocale/);
    });

    it('should have NoCurrency type', () => {
        expect(errors.NoCurrency.formatMessage()).toMatch(/NoCurrency/);
    });

    it('should have NoSupplementalCurrency type', () => {
        expect(errors.NoSupplementalCurrency.formatMessage()).toMatch(/NoSupplementalCurrency/);
    });

    it('should have NoCurrencyRegion type', () => {
        expect(errors.NoCurrencyRegion.formatMessage()).toMatch(/NoCurrencyRegion/);
    });

    it('should have NoCurrencyDisplay type', () => {
        expect(errors.NoCurrencyDisplay.formatMessage()).toMatch(/NoCurrencyDisplay/);
    });

    it('should have NoGMTInfo type', () => {
        expect(errors.NoGMTInfo.formatMessage()).toMatch(/NoGMTInfo/);
    });

    it('should have NoWeekData type', () => {
        expect(errors.NoWeekData.formatMessage()).toMatch(/NoWeekData/);
    });

    it('should have NoFirstDay type', () => {
        expect(errors.NoFirstDay.formatMessage()).toMatch(/NoFirstDay/);
    });
});
