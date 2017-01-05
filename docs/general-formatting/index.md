---
title: General Formatting
page_title: General Formatting | Kendo UI Internationalization
description: "Use the formatting capabilities of the format and toString methods when working with the Kendo UI Internationalization package."
slug: generalformatting_internalization
position: 1
---

# General Formatting

Provides methods for applying placeholder format and type independent value formatting using the locale specific settings.

## Placeholder formatting

The `format` method can be used to replace the format string placeholders(`{index}`) with the provided values based on the index.
A specific format can also be specified for `Date` and `Number` values by adding `:format` after the index.

    import { format } from '@telerik/kendo-intl';

    format('Date: {0:d} - Price: {1:c}', [new Date(), 10.5], "en"); // Date: 1/5/2017 - Price: $10.50

## Type independent formatting

The `toString` method can be used to format both `Date` and `Number` values using the locale specific settings. If a string is passed as value then it will be returned without modification.

    import { toString } from '@telerik/kendo-intl';

    toString(new Date(), "d", "en"); // 1/5/2017

    toString(10.5, "c", "bg"); // 10,50 лв.

## Suggested Links

* [General Formatting API]({% slug generalformatapi_internalization %})
* [Date Formatting]({% slug dateformatting_internalization %})
* [Number Formatting]({% slug numbeformatting_internalization %})
