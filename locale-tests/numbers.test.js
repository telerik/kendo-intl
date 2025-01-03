import { afterAll, beforeAll, describe, it, expect, vi } from 'vitest';
import { formatNumber, parseNumber, setData } from '../src/main';
import { LOCALES, clean } from './utils';

describe('generated-locales', () => {
    const number = 5.55;
    const numberString = '5.55';

    describe.each(LOCALES.slice(0, 1))('%s numbers', async(locale) => {
        beforeAll(async () => {
            const numbers = await import(`./locales/${ locale }/numbers.js`);
            await vi.dynamicImportSettled();
            setData(numbers.default);
        });

        afterAll(() => {
            clean();
        });

        it('format', () => {
            expect(() => {
                formatNumber(number, 'n', locale);
            }).not.toThrow();
        });

        it('parse', () => {
            expect(() => {
                parseNumber(numberString, locale, 'n');
            }).not.toThrow();
        });
    });
});
