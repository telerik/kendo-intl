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
const path = require('path');

const LOCALES_PATH = path.join(process.cwd(), 'node_modules', 'cldr-data', 'main');

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
            weekData: {
                firstDay: {
                    US: cldr.cldr.supplemental.weekData.firstDay.US
                }
            }
        }
    };
    fs.writeFileSync('src/cldr/default-data.js', "const defaultData = " + JSON.stringify(defaultData, null, 4) + ";\nexport default defaultData;");
});

const loadLocale = (name, cldr) => {
    const numbers = require(`cldr-data/main/${ name }/numbers.json`);
    const currencies = require(`cldr-data/main/${ name }/currencies.json`);
    const calendar = require(`cldr-data/main/${ name }/ca-gregorian.json`);
    const timeZoneNames = require(`cldr-data/main/${ name }/timeZoneNames.json`);
    const dateFields = require(`cldr-data/main/${ name }/dateFields.json`);


    cldr.load(numbers, currencies, calendar, timeZoneNames, dateFields);
};

gulp.task('clean-locales', (done) => {
    exec(`rm -rf locales`, () => {
        done();
    });
});

const EXCLUDE = {
    root: true
};

const NO_CURRENCY = {
    'es-419': true // latin america. not sure what to use here
};

gulp.task("build-locales", ["build-npm-package", 'clean-locales'], () => {
    const cldr = require("./dist/npm/js/cldr");
    cldr.load(likelySubtags, currencyData, weekData);
    const data = cldr.cldr;

    const locales = fs.readdirSync(LOCALES_PATH);
    fs.mkdirSync('./locales');

    for (let idx = 0; idx < locales.length; idx++) {
        const name = locales[idx];
        if (!EXCLUDE[name]) {
            console.log(name);
            const localePath = path.join('./locales', name);
            loadLocale(name, cldr);

            cldr.firstDay(name);
            if (!NO_CURRENCY[name]) {
                cldr.localeCurrency(name);
            }

            if (!fs.existsSync(localePath)){
                fs.mkdirSync(localePath);
            }

            fs.writeFileSync(path.join(localePath, 'all.js'), `const data = ${ JSON.stringify(data[name], null, 4) };\nexport default data;`);
        }
    }
});
