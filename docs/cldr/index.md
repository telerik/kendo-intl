---
title: CLDR Data
page_title: CLDR Data | Kendo UI Internationalization
description: "Use the required CLDR data in your project for the different Kendo UI Internationalization modules to work."
slug: cldrdata_overview_internalization
position: 1
---

# CLDR Data

The Kendo UI Internationalization library uses the [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) as a source for the locale information.

In order for it to function properly, load the data for the corresponding locale. By default, the `numbers`, `currencies`, `gregorian calendar`(`"ca-gregorian"`), and `timeZoneNames` for the `en` locale are loaded. To support `en` dates and numbers parsing and formatting without loading any data, a subset of the supplemental `currencyData`, `likelySubtags`, and `weekData` is also loaded.

## Prerequisites

If you work with the `en` locale, you do not have to load any data. The only exception refers to the currency formatting with non-default currency. In this case, load the `cldr-data/main/en/currencies.json` data.

The following table provides the data formats that are required for number and date formatting and parsing when you use a non-default locale.

| FORMATS                      | REQUIRED DATA                          |
|:---                          |:---                                    |
| Any                          | `cldr/supplemental/likelySubtags.json` |
| Basic numbers                | `cldr/main/locale/numbers.json`        |
| Currency                     | `cldr/main/locale/currencies.json` and `cldr/supplemental/currencyData.json` |
| Basic dates                  | `cldr/main/locale/ca-gregorian.json`   |
| Localized timezone           | `cldr/main/locale/timeZoneNames.json`  |
| Localized date field names   | `cldr/main/locale/dateFields.json`     |
| Numeric week day formatting  | `cldr/supplemental/weekData.json`      |

## Getting CLDR Data

Unicode CLDR is available as JSON at [https://github.com/unicode-cldr/](https://github.com/unicode-cldr/). For more information on the package organization, refer to [https://github.com/unicode-cldr/cldr-json](https://github.com/unicode-cldr/cldr-json). It is also available as a single [cldr-data](https://www.npmjs.com/package/cldr-data) package.

## Loading CLDR Data

To load the CLDR data, use the [`load`]({% cldrapi_internalization %}#load) method.

```
import { cldr, load } from '@telerik/kendo-intl';

const likelySubtags = require("cldr-data/supplemental/likelySubtags.json");
const numbers = require("cldr-data/main/bg/numbers.json");
const timeZoneNames = require("cldr-data/main/bg/timeZoneNames.json");
const calendar = require("cldr-data/main/bg/ca-gregorian.json");
const currencies = require("cldr-data/main/bg/currencies.json");
const dateFields = require("cldr-data/main/bg/dateFields.json");
const weekData = require("cldr-data/supplemental/weekData.json");
const currencyData = require("cldr-data/supplemental/currencyData.json");

load(
    likelySubtags,
    weekData,
    currencyData,
    numbers,
    currencies,
    calendar,
    dateFields,
    timeZoneNames
);

//the `cldr` object will consist the loaded data
```

## Suggested Links

* [API Reference of the CLDR Module]({% slug cldrapi_internalization %})
