import { currencyDisplay, territoryCurrencyCode } from '../src/cldr';

describe('currencyDisplay', () => {
    it('should throw an exception when locale is not available', () => {
        try {
            currencyDisplay('de', {
                currency: 'USD'
            });

            expect(true).toBe(false);
        } catch (e) {
            expect(e.message).toEqual("Error 101: Missing locale info for 'de'");
        }
    });
});

describe('territoryCurrencyCode', () => {
    it('should throw an exception when no region currencies info', () => {
        try {
            territoryCurrencyCode('en');

            expect(true).toBe(false);
        } catch (e) {
            expect(e.message).toEqual("Error 203: No currency data for region 'en'");
        }
    });
});
