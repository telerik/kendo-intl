---
title: Number Parsing
page_title: Number Parsing | Kendo UI Internationalization
description: "Use the parsing capabilities of the parseNumber method when working with the Kendo UI Internationalization package."
slug: numberparsing_internalization
position: 1
---

# Number Parsing

Number parsing converts a string to a `Number` object using the specific settings of the locale.

## Configuration

The `parseNumber` method supports the parsing of the following string formats:

* Decimal
* Currency
* Percentage
* Exponential

### Decimal

It parses strings representing numbers with locale specific group and decimal separators.

    import { parseNumber } from '@telerik/kendo-intl';

    parseNumber("123.456,789", "de"); // 123456.789

### Currency

It parses strings representing numbers with locale specific separators and currency symbol. If non-default for the locale currency is used then you must supply format options that specify the currency.

The example below demonstrates the basic Currency format.

    import { parseNumber } from '@telerik/kendo-intl';

    parseNumber("$123,456.789"); // 123456.789

The example below demonstrates a non-default Currency format.

    import { parseNumber } from '@telerik/kendo-intl';

    parseNumber("€123,456,789.00", "en", { currency: "EUR" }); // 123456789

### Percentage

It parses strings representing percentages with locale specific separators and percent symbol. The parsed number is divided by 100.

    import { parseNumber } from '@telerik/kendo-intl';

    parseNumber("50%"); // 0.5

### Exponential

It parses strings representing exponential numbers with the locale specific decimal separator.

    import { parseNumber } from '@telerik/kendo-intl';

    parseNumber("1,5e+7", "de"); // 15000000

## Suggested Links

* [Number Parsing API Reference]({% slug numberparseapi_internalization %})
* [Number Formatting]({% slug numbeformatting_internalization %})
