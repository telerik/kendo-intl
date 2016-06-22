---
title: cldr data
page_title: CLDR data | Kendo Internationalization API
description: "Describes the requred CLDR data in order for the different modules to work."
position: 2
---

# CLDR data

Provides locale information for the _dates_ and _numbers_ modules.

## Required data

The following table illustrates the required data for the number and date formatting and parsing. 

| Formats            | Required data                   |
|:---                |:---                             | 
| any                | _cldr/supplemental/likelySubtags.json_ |   
| basic numbers      | _cldr/main/locale/numbers.json_ |
| currency           | _cldr/main/locale/currencies.json_ and _cldr/supplemental/currencyData.json_ |
| basic dates        | _cldr/main/locale/ca-gregorian.json_ |
| localized timezone | _cldr/main/locale/timeZoneNames.json_ |
| numeric week day   | _cldr/supplemental/weekData.json_ |

## Getting CLDR data

Unicode CLDR is available as JSON at [https://github.com/unicode-cldr/](https://github.com/unicode-cldr/). Please, read [https://github.com/unicode-cldr/cldr-json](https://github.com/unicode-cldr/cldr-json) for more information about the package organization.

It is also available as a single package - [cldr-data](https://www.npmjs.com/package/cldr-data).