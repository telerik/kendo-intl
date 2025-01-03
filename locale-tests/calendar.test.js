import { afterAll, beforeAll, describe, it, expect, vi } from 'vitest';

import { formatDate, parseDate, firstDay, weekendRange, setData } from '../src/main';
import { LOCALES, clean } from './utils';

describe('generated-locales', () => {
    const date = new Date(2000, 0, 1);

    describe.each(LOCALES)('%s (calendar)', async(locale) => {
        beforeAll(async () => {
            const calendar = await import(`./locales/${ locale }/calendar.js`);
            await vi.dynamicImportSettled();

            setData(calendar.default);
        });

        afterAll(() => {
            clean();
        });

        it('format', () => {
            expect(() => {
                formatDate(date, 'F', locale);
            }).not.toThrow();
        });

        it('parse', () => {
            expect(() => {
                parseDate(formatDate(date, 'F'), 'F', locale);
            }).not.toThrow();
        });

        it('firstDay', () => {
            expect(() => {
                firstDay(locale);
            }).not.toThrow();
        });

        it('weekendRange', () => {
            expect(() => {
                weekendRange(locale);
            }).not.toThrow();
        });
    });
});
