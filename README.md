[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Kendo UI Internationalization

This repository contains the source code and documentation of the Kendo UI Internationalization package.

It includes methods for parsing and formatting dates and numbers using [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) data, which are split into the following modules:

* CLDR
* Date Parsing
* Date Formatting
* Number Parsing
* Number Formatting

## Basic Usage

### CLDR Data

To use the methods for different locales, use the [`load`](https://github.com/telerik/kendo-intl/blob/master/docs/cldr/api.md#load) method from the `cldr` module to load the `likelySubtags` and locale data. Additionally, the library requires the loading of the supplemental `currencyData` for the default currency formatting and the `weekData` for the day of week formatting.

```javascript
import { load } from '@telerik/kendo-intl/cldr';

load(require("cldr-data/main/bg/numbers.json"),
     require("cldr-data/main/bg/currencies.json"),
     require("cldr-data/main/bg/ca-gregorian.json"),
     require("cldr-data/main/bg/timeZoneNames.json"),
     require("cldr-data/supplemental/currencyData.json"),
     require("cldr-data/supplemental/weekData.json"));
```

For more examples and available configuration options, refer to the article on [CLDR Data](https://github.com/telerik/kendo-intl/blob/master/docs/cldr/cldr-data.md).

### Date Parsing

Date parsing converts a string to a `Date` object using the locale specific settings.

    import { parseDate } from '@telerik/kendo-intl/dates';

    parseDate("11/6/2000", ["G", "d"]); // Mon Nov 06 2000

    parseDate("Montag, 6.11.2000", "EEEE, d.MM.y", "de"); // Mon Nov 06 2000

    parseDate("2000-11-06T10:30Z"); // Mon Nov 06 2000 12:30

For more examples and available configuration options, refer to the article on [date parsing](https://github.com/telerik/kendo-intl/blob/master/docs/dates/date-parsing.md).

### Date Formatting

Date parsing converts a `Date` object to a human-readable string using the locale specific settings.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "d"); // 11/6/2000

    formatDate(new Date(2000, 10, 6), "yMd", "de"); // 6.11.2000

    formatDate(new Date(2000, 10, 6), "EEEE, d.MM.y", "bg"); // понеделник, 6.11.2000

For more examples and available configuration options, refer to the article on [date formatting](https://github.com/telerik/kendo-intl/blob/master/docs/dates/date-formatting.md).

### Number Parsing

Number parsing converts a string to a `Number` object using the specific settings of the locale.

    import { parseNumber } from '@telerik/kendo-intl/numbers';

    parseNumber("12.22"); // 12.22

    parseNumber("1.212,22 €", "de"); // 1212.22

    parseNumber("10.22 %"); // 0.1022    

    parseNumber("1,0000123e+4", "bg"); // 10000.123

For more examples and available configuration options, refer to the article on [number parsing](https://github.com/telerik/kendo-intl/blob/master/docs/numbers/number-parsing.md).

### Number Formatting

Number formatting converts a `Number` object to a human-readable string using the locale specific settings.

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(1234.567, "n2"); // 1,234.57

    formatNumber(1234.567, "c", "de"); // 1.234,57 €

    formatNumber(1234.567, {
        style: "currency",
        currency: "USD",
        currencyDisplay: "displayName"
    }, "bg"); // 1 234,57 щатски долара

    formatNumber(2345678, "##,#.00"); // 2,345,678.00

For more examples and available configuration options, refer to the article on [number formatting](https://github.com/telerik/kendo-intl/blob/master/docs/numbers/number-formatting.md).

## Installation

The Internationalization library is published as a [scoped NPM package](https://docs.npmjs.com/misc/scope) in the [NPMJS Telerik account](https://www.npmjs.com/~telerik).

Install it using NPM.

```bash
npm install --save '@telerik/kendo-intl';
```

Once installed, import the module.

```javascript
// ES2015 module syntax
import { formatDate, parseDate } from '@telerik/kendo-intl/dates';
//or
import { formatNumber, parseNumber } from '@telerik/kendo-intl/number';
```
```javascript
// CommonJS format
var numbers = require('@telerik/kendo-intl/number').numbers;
//or
var dates = require('@telerik/kendo-intl/dates').dates;
```

> To install the npm package, it is recommended that you use Node.js 5.0.0 or later versions.
