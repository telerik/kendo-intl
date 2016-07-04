const gulp = require('gulp');
const numbers = require("cldr-data/main/en/numbers.json");
const currencies = require("cldr-data/main/en/currencies.json");
const timeZoneNames = require("cldr-data/main/en/timeZoneNames.json");
const calendar = require("cldr-data/main/en/ca-gregorian.json");
const likelySubtags = require("cldr-data/supplemental/likelySubtags.json");
const currencyData = require("cldr-data/supplemental/currencyData.json");
const fs = require('fs');

require('@telerik/kendo-package-tasks')(gulp, 'kendo-intl');

gulp.task("build-default-locale", () => {
    gulp.run("build-npm-package", function() {
        const cldr = require("./dist/npm/js/cldr");
        cldr.load(likelySubtags, currencyData, numbers, currencies, timeZoneNames, calendar);

        fs.writeFileSync('src/cldr/default-locale.js', "const defaultLocale = " + JSON.stringify(cldr.cldr.en, null, 4) + ";\nexport default defaultLocale;");
    });
});