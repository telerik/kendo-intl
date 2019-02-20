const gulp = require('gulp');
const exec = require('child_process').exec;
const numbers = require("cldr-data/main/en/numbers.json");
const currencies = require("cldr-data/main/en/currencies.json");
const timeZoneNames = require("cldr-data/main/en/timeZoneNames.json");
const calendar = require("cldr-data/main/en/ca-gregorian.json");
const likelySubtags = require("cldr-data/supplemental/likelySubtags.json");
const currencyData = require("cldr-data/supplemental/currencyData.json");
const weekData = require("cldr-data/supplemental/weekData.json");
const fs = require('fs');
const { toJSObject, buildLocales } = require("./build-locales.js");
const DEFAULT_TERRITORY = '001';

require('@progress/kendo-package-tasks')(gulp, 'kendo-intl');

const cleanupCurrencies = (locale) => {
    const currencies = locale.numbers.currencies;
    const subset = {};

    Object.keys(currencies).forEach(id => {
        const data = currencies[id];
        if (id === 'USD' || id === 'EUR' || id === 'BGN') {
            subset[id] = data;
        }
    });

    locale.numbers.currencies = subset;

    return locale;
};

gulp.task("build-default-data", ["build-npm-package"], () => {
    const cldr = require("./dist/npm/js/cldr");
    cldr.load(likelySubtags, currencyData, weekData, numbers, currencies, timeZoneNames, calendar);

    const defaultData = {
        en: cleanupCurrencies(cldr.cldr.en),
        supplemental: {
            likelySubtags: {
                en: "en-Latn-US"
            },
            currencyData: {
                region: {
                    "US": [{
                        "USD": { "_from": "1792-01-01" }
                    }]
                }
            },
            weekData: {
                firstDay: {
                    US: cldr.cldr.supplemental.weekData.firstDay.US
                },
                weekendStart: {
                    [DEFAULT_TERRITORY]: cldr.cldr.supplemental.weekData.weekendStart[DEFAULT_TERRITORY]
                },
                weekendEnd: {
                    [DEFAULT_TERRITORY]: cldr.cldr.supplemental.weekData.weekendEnd[DEFAULT_TERRITORY]
                }
            }
        }
    };
    fs.writeFileSync('src/cldr/default-data.js', `const defaultData = ${ toJSObject(defaultData) };\nexport default defaultData;`);
});

gulp.task('clean-locales', (done) => {
    exec(`rm -rf locales`, () => {
        done();
    });
});

gulp.task("build-locales", ["build-npm-package", 'clean-locales'], () => {
    const intl = require('./dist/npm/js/main');

    buildLocales(intl, { destFolder: './locale-tests/locales' });
});

