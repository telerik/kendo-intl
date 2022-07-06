import { formatNumber, parseNumber, formatDate, parseDate, firstDay, weekendRange, setData } from '../src/main';
import { LOCALES, NO_CURRENCY_LOCALE, clean } from './utils';

describe('generated-locales', () => {
    const date = new Date(2000, 0, 1);
    const number = 5.55;
    const numberString = '5.55';

    describe.each(LOCALES)('%s (all)', (locale) => {
        beforeAll(() => {
            const all = require(`./locales/${ locale }/all`).default;
            setData(all);
        });

        afterAll(() => {
            clean();
        });

        it('format number', () => {
            expect(() => {
                formatNumber(number, 'n', locale);
            }).not.toThrow();
        });

        it('parse number', () => {
            expect(() => {
                parseNumber(numberString, locale, 'n');
            }).not.toThrow();
        });

        if (locale !== NO_CURRENCY_LOCALE) {
            it('format currency', () => {
                expect(() => {
                    formatNumber(number, 'c', locale);
                }).not.toThrow();
            });

            it('parse currency', () => {
                expect(() => {
                    parseNumber(numberString, locale, 'c');
                }).not.toThrow();
            });

            it('format accounting', () => {
                expect(() => {
                    formatNumber(number, 'a', locale);
                }).not.toThrow();
            });

            it('parse accounting', () => {
                expect(() => {
                    parseNumber(numberString, locale, 'a');
                }).not.toThrow();
            });
        }

        it('format date', () => {
            expect(() => {
                formatDate(date, 'F', locale);
            }).not.toThrow();
        });

        it('parse date', () => {
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
