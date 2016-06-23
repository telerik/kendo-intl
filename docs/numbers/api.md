---
title: Numbers API
page_title: Numbers API | Kendo Internationalization API
description: "Provides information about the exported methods from the Kendo Internationalization numbers module."
slug: numbersapi_internalization
position: 3
---

# Numbers API

Provides information about the exported methods from the Numbers module.

## The formatNumber Method

### formatNumber

Converts a `Number` to a string based on the specified format and locale.

## The formatNumber Parameters

#### number `Number`

Defines the number to be formatted.

#### format `String|Object`

Defines a string representing a predefined or custom number format, or a configuration object.

#### format.style `String` *(default: "decimal")*

Specifies the format style.

The supported values are:
* `"decimal"`
* `"currency"`
* `"precent"`
* `"scientific"`

#### format.currency `String`

Defines the currency code of the currency used in the formatting. If not specified, the default currency for the locale is used.

#### format.currencyDisplay `String` *(default: "symbol")*

Specifies how to display the currency.

The supported values are:
* `"symbol"`
* `"code"`
* `"name"`

#### format.useGrouping `Boolean` *(default: true)*

Specifies whether to use grouping separators.

#### format.minimumIntegerDigits `Number` *(default: 1)*

Defines the minimum number of integer digits to be used in the formatting.

#### format.minimumFractionDigits `Number`

Defines the minimum number of fraction digits to use.

The default value for the decimal and percent formatting is 0 (zero).

The default value of the currency formatting is the number of digits for the currency from the supplemental `currencyData` or 2 if no info is provided for the currency.

#### format.maximumFractionDigits `Number`

Defines the maximum number of fraction digits to be used.

The default value of the decimal formatting is the greater one between `minimumFractionDigits` and 3.

The default value of the currency formatting is the greater one between `minimumFractionDigits` and the number of digits for the currency from the supplemental  `currencyData` or 2 if no info is provided for the currency.

The default value of the percent formatting is the greater one between `minimumFractionDigits` and 0 (zero).

#### locale `String`

Defines the locale id.

## The parseNumber Method

Converts a string to a `Number` based on the specified locale.

## The parseNumber Parameters

#### string `String`

Defines the string to be converted.

#### locale `String`

Defines the locale to be used for the parsing.

#### format `Object`

Specifies how the value should format the options. It is also used to specify that a non-default currency for the locale should be used.
