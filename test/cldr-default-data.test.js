import { describe, it, expect } from 'vitest';

import { currencyDisplay, currencyDisplays, territoryCurrencyCode } from '../src/cldr';
import { errors } from '../src/errors';

describe('currencyDisplay', () => {
    it('should throw an exception when locale is not available', () => {
        expect(() => {
            currencyDisplay('de', {
                currency: 'USD'
            });
        }).toThrowError(new RegExp(errors.NoLocale.name));
    });
});

describe('currencyDisplays', () => {
    it('should throw an exception when currency display is not available', () => {
        expect(() => {
            currencyDisplays('en', {
                currency: 'GBP'
            });
        }).toThrowError(new RegExp(errors.NoCurrencyDisplay.name));
    });
});

describe('territoryCurrencyCode', () => {
    it('should throw an exception when no region currencies info', () => {
        expect(() => {
            territoryCurrencyCode('en');
        }).toThrowError(new RegExp(errors.NoCurrencyRegion.name));
    });
});
