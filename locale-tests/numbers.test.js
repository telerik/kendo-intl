import { formatNumber, parseNumber, setData } from '../src/main';
import { LOCALES, clean } from './utils';

describe('generated-locales', () => {
    const number = 5.55;
    const numberString = '5.55';

    describe.each(LOCALES)('%s numbers', (locale) => {
        beforeAll(() => {
            const numbers = require(`./locales/${ locale }/numbers`).default;
            setData(numbers);
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
