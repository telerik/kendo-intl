[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Kendo Internationalization API

Provides methods for parsing and formatting dates and numbers using [cldr](http://cldr.unicode.org/) data.

## Installation

The library is published as [scoped NPM package](https://docs.npmjs.com/misc/scope) in the [NPMJS Telerik account](https://www.npmjs.com/~telerik).

```bash
npm install --save '@telerik/kendo-intl';
```

## Prerequisites

The library uses [cldr](http://cldr.unicode.org/) as source of the locale information and requires the data for the corresponding locale to be loaded in order to work. The _numbers_, _currencies_, _gregorian calendar_ and _timeZoneNames_ for the _en_ locale are loaded by default. To use the methods for different locales you must use the [load](https://github.com/telerik/kendo-intl/docs/cldr/api.md#load) method from the _cldr_ module to load the _likelySubtags_ and locale data. Additionally the library requires loading the supplemental _currencyData_ for the default currency formatting and the _weekData_ for the day of week formatting.

```javascript
import { cldr } from '@telerik/kendo-intl/cldr';

load(require("cldr-data/main/bg/numbers.json"),
     require("cldr-data/main/bg/currencies.json"),
     require("cldr-data/main/bg/ca-gregorian.json"), 
     require("cldr-data/main/bg/timeZoneNames.json"), 
     require("cldr-data/supplemental/currencyData.json"),
     require("cldr-data/supplemental/weekData.json"));
```

For more information on the required data check the [cldr](https://github.com/telerik/kendo-intl/docs/cldr/cldr.md) documentation.

## Number formatting

The `formatNumber` method from the _numbers_ module is used to format numbers in decimal, currency, percentage and exponential formats based on the specified locale. The method can be passed both standard and custom numeric formats. 

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(1234.567, "n2"); // 1,234.57

    formatNumber(1234.567, "c", "de"); // 1.234,57 €

    formatNumber(1234.567, {
        style: "currency",
        currency: "USD",
        currencyDisplay: "displayName"
    }, "bg"); // 1 234,57 щатски долара

    formatNumber(2345678, "##,#.00"); // 2,345,678.00

For more detailed information check the [number formatting](https://github.com/telerik/kendo-intl/docs/numbers/number-formatting.md) documentation.

## Number parsing

The `parseNumber` method from the _numbers_ module is used to convert the passed string to a number based on the specified locale.

###### Example

    import { parseNumber } from '@telerik/kendo-intl/numbers';

    parseNumber("12.22"); // 12.22

    parseNumber("1.212,22 €", "de"); // 1212.22

    parseNumber("10.22 %"); // 0.1022    

    parseNumber("1,0000123e+4", "bg"); // 10000.123
 
For more detailed information check the [number parsing]((https://github.com/telerik/kendo-intl/docs/numbers/number-parsing.md)) documentation.

## Date formatting

The formatDate method from the _dates_ module is used to format dates using the locale predefined patterns and available formats or using a custom date formats.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "d"); // 11/6/2000
    
    formatDate(new Date(2000, 10, 6), "yMd", "de"); // 6.11.2000

    formatDate(new Date(2000, 10, 6), "EEEE, d.MM.y", "bg"); // понеделник, 6.11.2000

For more detailed information check the [date formatting](https://github.com/telerik/kendo-intl/docs/dates/date-formatting.md) documentation.

## Date parsing

The parseDate method from the _dates_ module is used to convert strings to JavaScript Date based on the locale and specified formats. If the formats are omitted then the locale predefined patterns and the standard ISO formats will be used to parse the string.

###### Example

    import { parseDate } from '@telerik/kendo-intl/dates';

    parseDate("11/6/2000", ["G", "d"]); // Mon Nov 06 2000
    
    parseDate("Montag, 6.11.2000", "EEEE, d.MM.y", "de"); // Mon Nov 06 2000

    parseDate("2000-11-06T10:30Z"); // Mon Nov 06 2000 12:30

For more detailed information check the [date parsing](https://github.com/telerik/kendo-intl/docs/dates/date-parsing.md) documentation.



