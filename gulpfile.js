const gulp = require('gulp');
const numbers = require("cldr-data/main/en/numbers.json");
const currencies = require("cldr-data/main/en/currencies.json");
const timeZoneNames = require("cldr-data/main/en/timeZoneNames.json");
const calendar = require("cldr-data/main/en/ca-gregorian.json");
const likelySubtags = require("cldr-data/supplemental/likelySubtags.json");
const currencyData = require("cldr-data/supplemental/currencyData.json");
const weekData = require("cldr-data/supplemental/weekData.json");
const fs = require('fs');

require('@telerik/kendo-package-tasks')(gulp, 'kendo-intl');

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
            "weekData": {
                "firstDay": {
                    "001": "mon",
                    "US": "sun"
                }
            }
        }
    };
    fs.writeFileSync('src/cldr/default-data.js', "const defaultData = " + JSON.stringify(defaultData, null, 4) + ";\nexport default defaultData;");
});
