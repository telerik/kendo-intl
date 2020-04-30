import { cldr, formatNumber, parseNumber, formatDate, parseDate, firstDay, weekendRange, setData } from '../src/main';

const fs = require('fs');
const path = require('path');
const locales = fs.readdirSync(path.join('./node_modules', 'cldr-data', 'main'));
const defaultDataClone = clone(cldr);
const NO_CURRENCY_LOCALE = 'es-419';

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function clean() {
    for (let field in cldr) {
        delete cldr[field];
    }
    Object.assign(cldr, clone(defaultDataClone));
}

describe('generated-locales', () => {
    const date = new Date(2000, 0, 1);
    const number = 5.55;
    const numberString = '5.55';

    locales.forEach((locale) => {
        if (locale === 'root') {
            return;
        }

        describe(`${ locale }`, () => {

            describe(`numbers`, () => {
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

            if (locale !== NO_CURRENCY_LOCALE) {

                describe(`currency`, () => {
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
            }

            describe(`calendar`, () => {
                beforeAll(() => {
                    const calendar = require(`./locales/${ locale }/calendar`).default;
                    setData(calendar);
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

            describe(`all`, () => {
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
    });
});
