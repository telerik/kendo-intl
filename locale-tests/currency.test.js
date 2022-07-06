import { formatNumber, parseNumber, setData } from '../src/main';
import { LOCALES, clean, NO_CURRENCY_LOCALE } from './utils';

const number = 5.55;
const numberString = '5.55';
const currencyLocales = LOCALES.filter(locale => locale !== NO_CURRENCY_LOCALE);

describe.each(currencyLocales)('%s currency', (locale) => {
    beforeAll(() => {
        const numbers = require(`./locales/${ locale }/numbers`).default;
        const currencies = require(`./locales/${ locale }/currencies`).default;

        setData(numbers);
        setData(currencies);

    });

    afterAll(() => {
        clean();
    });

    it('format', () => {
        expect(() => {
            formatNumber(number, 'c', locale);
        }).not.toThrow();
    });

    it('parse', () => {
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
});
