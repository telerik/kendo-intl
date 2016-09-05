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

gulp.task("build-default-data", ["build-npm-package"], () => {
    const cldr = require("./dist/npm/js/cldr");
    cldr.load(likelySubtags, currencyData, weekData, numbers, currencies, timeZoneNames, calendar);
    const defaultData = {
        en: cldr.cldr.en,
        supplemental: {
            weekData: cldr.cldr.supplemental.weekData
        }
    };
    fs.writeFileSync('src/cldr/default-data.js', "const defaultData = " + JSON.stringify(defaultData, null, 4) + ";\nexport default defaultData;");
});
