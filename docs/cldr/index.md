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

If you work with the `en` locale, you do not have to load any data. The only exception refers to the currency formatting with non-default currency. In this case, load the `cldr-numbers-full/main/en/currencies.json` data.

The following table provides the data formats that are required for number and date formatting and parsing when you use a non-default locale.

| Formats                      | Required data                          |
|:---                          |:---                                    |
| Any                          | `cldr-core/supplemental/likelySubtags.json` |
| Basic numbers                | `cldr-numbers-full/main/LOCALE/numbers.json`        |
| Currency                     | `cldr-numbers-full/main/LOCALE/currencies.json` and `cldr-core/supplemental/currencyData.json` |
| Basic dates                  | `cldr-dates-full/main/LOCALE/ca-gregorian.json`   |
| Localized time-zone          | `cldr-dates-full/main/LOCALE/timeZoneNames.json`  |
| Localized date field names   | `cldr-dates-full/main/LOCALE/dateFields.json`     |
| Numeric week day formatting  | `cldr-core/supplemental/weekData.json`      |

## Getting CLDR Data

Unicode CLDR is available as JSON at [https://github.com/unicode-cldr/](https://github.com/unicode-cldr/). For more information on the package organization, refer to [https://github.com/unicode-cldr/cldr-json](https://github.com/unicode-cldr/cldr-json). It is also available as a single [cldr-data](https://www.npmjs.com/package/cldr-data) package.

## Loading CLDR Data

To load the CLDR data, use the [`load`](https://github.com/telerik/kendo-intl/blob/master/docs/cldr/api.md#load) method.

> Before other culture scripts, you have to load the supplemental data first. It requires you to load it just once.

```
import { cldr, load } from '@progress/kendo-intl';

const likelySubtags = require('cldr-core/supplemental/likelySubtags.json');
const weekData      = require('cldr-core/supplemental/weekData.json');
const currencyData  = require('cldr-core/supplemental/currencyData.json');

const numbers       = require('cldr-numbers-full/main/bg/numbers.json');
const currencies    = require('cldr-numbers-full/main/bg/currencies.json');

const calendar      = require('cldr-dates-full/main/bg/ca-gregorian.json');
const dateFields    = require('cldr-dates-full/main/bg/dateFields.json');
const timeZoneNames = require('cldr-dates-full/main/bg/timeZoneNames.json');

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

## Pre-Building CLDR Data

> To generate the locales, install the following subset of [cldr-json](https://github.com/unicode-org/cldr-json) packages first: 'cldr-core cldr-dates-full cldr-numbers-full'.

The `build` method the kendo-intl package provides generates the files which use the data that is required by the Internationalization library.

The following example demonstrates how to generate the data for typescript projects.

```
const { buildLocales, toJSObject } = require('@progress/kendo-intl/build-locales');
const intl = require('@progress/kendo-intl');

const localeTemplate = (data) => {
    return `export const data = ${ toJSObject(data) };`;
};

buildLocales(intl, { contentTemplate: localeTemplate, extension: 'ts', destFolder: 'locales' });
```

The method outputs four files in the destination locale folder. These are:

* `all`&mdash;Contains all required data.
* `numbers`&mdash;Contains the numbers data.
* `currencies`&mdash;Contains the currencies data.
* `calendar`&mdash;Contains the calendar data.

To set the generated data, use the [`setData`](https://github.com/telerik/kendo-intl/blob/master/docs/cldr/api.md#setdata) method.

```
import { setData } from '@progress/kendo-intl';
import { data } from './locales/bg/all';

setData(data);
```

## Suggested Links

* [API Reference of the CLDR Module](https://github.com/telerik/kendo-intl/blob/master/docs/cldr/api.md)
