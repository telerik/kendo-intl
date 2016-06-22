---
title: Number formatting
page_title: Number formatting | Kendo Internationalization API
description: "Describes the standard and custom formatting capabilities of the formatNumber method."
position: 2
---

# Number Formatting

The purpose of number formatting is to convert a `Number` object to a human readable string using the locale specific settings. The formatNumber method support standard and custom numeric formats.

## Types of Number Formats

### Standard Number Formatting

Standard formatting can be specified by passing an options object or a string format.

The following standard string formats are supported.

#### The `"n"` specifier

Formats the number as decimal number based on the locale. Precision is specified by adding a number after `"n"`. By default the number is formatted and rounded to three decimal digits.

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(1234.5678, "n"); // 1,234.568

    formatNumber(1234.5678, "n2", "bg"); // 1 234,57
    
    formatNumber(1234.5678, "n5"); // 1,234.56780

#### The `"c"` specifier

Formats the number as currency based on the locale. The specified locale latest currency symbol is used for the formatting. Precision is specified by adding a number after `"c"`. By default the number is formatted and rounded to two decimal digits or the number of digits in the cldr _currencyData_ fractions data if the currency is available.

> Note that the locale numbers _currencies_ data and the supplemental _currencyData_ must be loaded in order for the currency formatting to work.

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(1234.5678, "c"); // $1,234.57

    formatNumber(1234.5678, "c3", "de"); // 1.234,568 €
    
    formatNumber(1234.5678, "c5", "bg"); // 1 234,56780 лв

#### The `"p"` specifier

Formats the number as percentage based on the locale. The passed number is multiplied by 100. Precision is specified by adding a number after `"p"`. By default the number is formatted and rounded to zero decimal digits.

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(0.5678, "p"); // 57%

    formatNumber(0.5678, "p2", "de"); // 56,78 %
    
    formatNumber(0.5678, "p5"); // 56.78000%

#### The `"e"` specifier
Formats the number in exponential notation.

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(0.45678, "e0"); // 5e-1

Besides setting a string, the standard formats can also be specified by passing an object with the style option.

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(1234.5678, {
        style: "decimal",
        minimumFractionDigits: 4
    }); // 1,234.5678

    formatNumber(1234.5678, {
        style: "currency",            
        currency: "EUR",
        currencyDisplay: "displayName"
    }, "bg"); // 1 234,57 евро
    
    formatNumber(0.5678, {
        style: "percent"
    }, "de"); // 123.457 %

For full list of available options check the [formatNumber API](https://github.com/telerik/kendo-intl/blob/master/docs/numbers/api.md). 


### Custom Number Formatting

You are able to create a custom numeric format string using one or more custom numeric specifiers. A custom numeric format string is any string which is not a standard numeric format. The supported format specifiers are listed below.

#### The `"0"` specifier

A zero placeholder. It replaces the zero with the corresponding digit if one is present. Otherwise, zero appears in the result string.

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(1234.5678, "00000"); // 01235    

#### The `"#"` specifier

A digit placeholder. It replaces the pound sign with the corresponding digit if one is present. Otherwise, no digit appears in the result string.

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(1234.5678, "#####"); // 1235

> **Important**
>
> The `"#"` specifier cannot be used to format a number as telephone number, i.e. (###)-###-####.

#### The `"."` specifier

A decimal placeholder. It determines the location of the decimal separator in the result string.

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(0.45678, "0.00"); // 0.46

#### The `","` specifier

A group separator placeholder. It inserts a localized group separator between each group.

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(12345678, "##,#"); // 12,345,678

#### The `"%"` specifier

A percentage placeholder. It multiplies a number by 100 and inserts a localized percentage symbol in the result string.

> **Important**
>
> The `%` symbol is interpreted as a format specifier in the format string. If you need to prevent this, precede the `%` symbol with a double backslash - `formatNumber(12, "# \\\%")` -> 12 %

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(1.1, "#.0 %"); // 110.0 %

#### The `"$"` specifier

A currency placeholder. It is replaced by the locale currency symbol.

> **Important**
>
> The `$` symbol is interpreted as a format specifier in the format string. If you need to prevent this, precede the `$` symbol with a double backslash - `formatNumber(12, "# \\\$")` -> 12 $

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(-123, "##,# $", "de"); // 12.345.678 €

#### The `";"` specifier

A section separator. It defines sections with separate format strings for positive, negative, and zero numbers.

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(-123, "##,#;(##,#)"); // (123)

#### The `"string"/'string'` specifier

A literal string delimiter. It indicates that the enclosed characters should be copied to the result string.

###### Example

    import { formatNumber } from '@telerik/kendo-intl/numbers';

    formatNumber(12345678, "##,# '$'", "de"); // 12.345.678 $