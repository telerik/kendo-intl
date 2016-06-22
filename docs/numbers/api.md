---
title: Numbers API
page_title: Numbers API | Kendo Internationalization API
description: "Provides information about the exported methods from the Kendo Internationalization numbers module."
position: 1
---

# Numbers API

Provides information about the exported methods from the numbers module.

## Methods

### formatNumber

Converts a `Number` to string based on the specified format and locale

#### Parameters

##### number `Number`

The number to be formatted.

##### format `String|Object`

A string representing a predefined or custom number format or a configuration object.

##### format.style `String` *(default: "decimal")*

Specifies the format style. The supported values are `"decimal"`, `"currency"`, `"precent"` and `"scientific"`. 

##### format.currency `String`

The currency code of the currency used in the formatting. If not specified, the default currency for the locale is used.

##### format.currencyDisplay `String` *(default: "symbol")*

Specifies how to display the currency. The supported values are `"symbol"`, `"code"` and `"name"`.

##### format.useGrouping `Boolean` *(default: true)*

Specifies whether to use grouping separators.

##### format.minimumIntegerDigits `Number` *(default: 1)*

The minimum number of integer digits to use in the formatting. 

##### format.minimumFractionDigits `Number`

The minimum number of fraction digits to use. The default for decimal and percent formatting is 0. The default for currency formatting is the number of digits for the currency from the supplemental _currencyData_ or 2 if no info is provided for the currency.

##### format.maximumFractionDigits `Number`

The maximum number of fraction digits to use. The default for decimal formatting is the larger of `minimumFractionDigits` and 3. The default for currency formatting is the larger of `minimumFractionDigits` and the number of digits for the currency from the supplemental _currencyData_ or 2 if no info is provided for the currency. The default for percent formatting is the larger of minimumFractionDigits and 0.

##### locale `String`

The locale id.

### parseNumber

Converts a string to a `Number` based on the specified locale.

#### Parameters

##### string `String`

The string to be converted.

##### locale `String`

The locale to be used for the parsing.

##### format `Object`

Specifies how should the value format options. Can be used to specify that a non-default for the locale currency is used.