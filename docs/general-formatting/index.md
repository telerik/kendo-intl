---
title: General Formatting
page_title: General Formatting | Kendo UI Internationalization
description: "Use the formatting capabilities of the `format` and `toString` methods when working with the Kendo UI Internationalization package."
slug: generalformatting_internalization
position: 1
---

# General Formatting

Provides methods for applying placeholder format and type independent value formatting by using the locale specific settings.

## Types of General Formatting

The supported types of general formatting are:

* [Placeholder formatting](#placeholder-formatting)
* [Type independent formatting](#type-independent-formatting)

### Placeholder Formatting

To replace the format string placeholders (`{index}`) with the provided values based on the index, use the `format` method. You can also set a specific format specified for `Date` and `Number` values by adding `:format` after the index.

    import { format } from '@progress/kendo-intl';

    format('Date: {0:d} - Price: {1:c}', [new Date(), 10.5], "en"); // Date: 1/5/2017 - Price: $10.50

### Type Independent Formatting

To format both the `Date` and `Number` values by using the locale specific settings, apply the `toString` method. If you pass a string as a value, it is returned without any modification.

    import { toString } from '@progress/kendo-intl';

    toString(new Date(), "d", "en"); // 1/5/2017

    toString(10.5, "c", "bg"); // 10,50 лв.

## Suggested Links

* [General Formatting API](https://github.com/telerik/kendo-intl/blob/develop/docs/general-formatting/api.md)
* [Date Formatting](https://github.com/telerik/kendo-intl/blob/develop/docs/date-formatting/index.md)
* [Number Formatting](https://github.com/telerik/kendo-intl/blob/develop/docs/num-formatting/index.md)
