---
title: Number parsing
page_title: Number parsing | Kendo Internationalization API
description: "Describes the capabilities of the parseNumber method."
position: 1
---


# Number Parsing

The purpose of number parsing is to convert a string to a `Number` object using the locale's specific settings. The parseNumber method supports parsing the following string formats.

### decimal

Parses strings representing numbers with locale specific group and decimal separators.

###### Example

    import { parseNumber } from '@telerik/kendo-intl/numbers';

    parseNumber("123.456,789", "de"); // 123456.789

### currency

Parses strings representing numbers with locale specific separators and currency symbol. If non-default for the locale currency is used then you must supply format options that specify the currency.

###### Example - basic

    import { parseNumber } from '@telerik/kendo-intl/numbers';

    parseNumber("$123,456.789"); // 123456.789

###### Example - non-default currency

    import { parseNumber } from '@telerik/kendo-intl/numbers';

    parseNumber("€123,456,789.00", "en", { currency: "EUR" }); // 123456789

### percentage

Parses strings representing percentage with locale specific separators and percent symbol. The parsed number is divided by 100.

###### Example

    import { parseNumber } from '@telerik/kendo-intl/numbers';

    parseNumber("50%"); // 0.5


### exponential

Parses strings representing exponential number with locale specific decimal separator. 

###### Example

    import { parseNumber } from '@telerik/kendo-intl/numbers';

    parseNumber("1,5e+7", "de"); // 15000000