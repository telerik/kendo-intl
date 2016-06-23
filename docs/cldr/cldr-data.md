---
title: CLDR Data
page_title: CLDR Data | Kendo UI CLDR Module
description: "Use the required CLDR data in your project for the different Kendo UI Internalization modules to work."
slug: cldrdata_overview_internalization
position: 1
---

# CLDR Data

The Kendo UI Internalization library uses the [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) as a source for the locale information. To function properly, it requires the data for the corresponding locale to load.

The `numbers`, `currencies`, `gregorian calendar` and `timeZoneNames` for the `en` locale are loaded by default.

## Prerequisites

The table below lists the data which is required for number and date formatting and parsing.

| FORMATS            | REQUIRED DATA                          |
|:---                |:---                                    |
| Any                | `cldr/supplemental/likelySubtags.json` |   
| Basic numbers      | `cldr/main/locale/numbers.json`        |
| Currency           | `cldr/main/locale/currencies.json` and `cldr/supplemental/currencyData.json` |
| Basic dates        | `cldr/main/locale/ca-gregorian.json`   |
| Localized timezone | `cldr/main/locale/timeZoneNames.json`  |
| Numeric week day   | `cldr/supplemental/weekData.json`      |

## Getting CLDR Data

Unicode CLDR is available as JSON at [https://github.com/unicode-cldr/](https://github.com/unicode-cldr/). For more information on the package organization, refer to [https://github.com/unicode-cldr/cldr-json](https://github.com/unicode-cldr/cldr-json) .

It is also available as a single [cldr-data](https://www.npmjs.com/package/cldr-data) package.

## Suggested Links

* [API Reference of the CLDR Module]({% slug cldrapi_internalization %})
