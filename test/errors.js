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

        expect(intlError.getMessage(), result);
    });

    it('should replace single placeholder in the message', () => {
        const error = {
            code: "001",
            name: "BigError",
            message: "Big error! {0} {1}"
        };

        const intlError = new IntlError(error);

        const result = `${error.name}: Big error! p1 p2`;

        expect(intlError.getMessage("p1", "p2"), result);
    });
});

describe('default errors', () => {
    it('should have NoLocaleError type', () => {
        expect(errors.NoLocaleError.getMessage()).toMatch(/NoLocaleError/);
    });

    it('should have NoCurrencyError type', () => {
        expect(errors.NoCurrencyError.getMessage()).toMatch(/NoCurrencyError/);
    });

    it('should have NoSupplementalCurrencyError type', () => {
        expect(errors.NoSupplementalCurrencyError.getMessage()).toMatch(/NoSupplementalCurrencyError/);
    });

    it('should have NoCurrencyRegionError type', () => {
        expect(errors.NoCurrencyRegionError.getMessage()).toMatch(/NoCurrencyRegionError/);
    });

    it('should have NoCurrencyDisplayError type', () => {
        expect(errors.NoCurrencyDisplayError.getMessage()).toMatch(/NoCurrencyDisplayError/);
    });

    it('should have NoGMTInfoError type', () => {
        expect(errors.NoGMTInfoError.getMessage()).toMatch(/NoGMTInfoError/);
    });

    it('should have NoWeekDataError type', () => {
        expect(errors.NoWeekDataError.getMessage()).toMatch(/NoWeekDataError/);
    });

    it('should have NoFirstDayError type', () => {
        expect(errors.NoFirstDayError.getMessage()).toMatch(/NoFirstDayError/);
    });
});
