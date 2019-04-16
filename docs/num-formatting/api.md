---
title: Number Formatting API
page_title: Number Formatting API | Kendo UI Internationalization
description: "Learn about the exported methods from the Kendo UI Internationalization Number Formatting module."
slug: numberformatatapi_internalization
position: 2
---

# Number Formatting API

Provides information about the exported methods from the Number Formatting module.

## Methods

### formatNumber

Converts a `Number` into a string based on the specified format and locale.

## Parameters

#### number `Number`

Defines the number to be formatted.

#### format `String|Object`

Defines a string representing a predefined or custom number format, or a configuration object.

#### format.style `String` *(default: "decimal")*

Specifies the format style.

The supported values are:
* `"decimal"`
* `"currency"`
* `"accounting"`
* `"percent"`
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

## Return Value

#### Returns `String`

The formatted number.
