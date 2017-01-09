---
title: Number Parsing
page_title: Number Parsing | Kendo UI Internationalization
description: "Use the parsing capabilities of the parseNumber method when working with the Kendo UI Internationalization package."
slug: numberparsing_internalization
position: 1
---

# Number Parsing

Number parsing converts a string to a `Number` object by using the specific settings of the locale.

## Configuration

The `parseNumber` method supports the parsing of the following string formats:

* [Decimal](#decimal).
* [Currency](#currency).
* [Percentage](#percentage).
* [Exponential](#exponential).

### Decimal

It parses strings representing numbers with the specific group and decimal separators of the locale.

    import { parseNumber } from '@telerik/kendo-intl';

    parseNumber("123.456,789", "de"); // 123456.789

### Currency

It parses strings representing numbers with the specific separators and currency symbol of the locale. If you use a non-default format for the locale currency, provide format options to specify the currency.

The following example demonstrates the basic currency format.

    import { parseNumber } from '@telerik/kendo-intl';

    parseNumber("$123,456.789"); // 123456.789

The following example demonstrates a non-default currency format.

    import { parseNumber } from '@telerik/kendo-intl';

    parseNumber("€123,456,789.00", "en", { currency: "EUR" }); // 123456789

### Percentage

It parses strings representing percentages with specific separators and percent symbol of the locale. The parsed number is divided by 100.

    import { parseNumber } from '@telerik/kendo-intl';

    parseNumber("50%"); // 0.5

### Exponential

It parses strings representing exponential numbers with the specific decimal separator of the locale.

    import { parseNumber } from '@telerik/kendo-intl';

    parseNumber("1,5e+7", "de"); // 15000000

## Suggested Links

* [Number Parsing API Reference]({% slug numberparseapi_internalization %})
* [Number Formatting]({% slug numbeformatting_internalization %})
