---
title: List of Errors
page_title: List of Errors | Kendo UI Internationalization
description: "List of possible exceptions that the Internationalization package might throw."
slug: errors_internalization_kendoui
position: 2
---

# List of Errors

The following table provides the full list of controlled errors that might possibly be thrown by the Internationalization package.

| TYPE                         | MESSAGE  
|:---                          |:---
|`NoLocaleError`               | Missing locale information for {locale}.
|`NoCurrencyError`             | Cannot determine the currency information. Load the currency data of the locale.
|`NoSupplementalCurrencyError` | Cannot determine the currency. Load the supplemental `currencyData`.
|`NoCurrencyRegionError`       | Missing currency information for the region ${territory}.
|`NoCurrencyDisplay`           | Cannot determine the display information for the currency. Load the currency data of the locale. The default culture does not include all currency data.
|`NoGMTInfoError`              | Cannot determine the GMT format of the locale. Load the `timeZoneNames` data of the locale.
|`NoWeekDataError`             | Cannot determine the first week day of the locale. Load the supplemental `weekData`.
|`NoFirstDayError`             | Cannot determine the first week day of the locale. The default culture data includes only the en-US first day information. Load the supplemental `weekData`.

## Suggested Links

* [Get Started with CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md)
* [Get Started with Date Parsing](https://github.com/telerik/kendo-intl/blob/develop/docs/date-parsing/index.md)
* [Get Started with Date Formatting](https://github.com/telerik/kendo-intl/blob/develop/docs/date-formatting/index.md)
* [Get Started with Number Parsing](https://github.com/telerik/kendo-intl/blob/develop/docs/num-parsing/index.md)
* [Get Started with Number Formatting](https://github.com/telerik/kendo-intl/blob/develop/docs/num-formatting/index.md)
* [Get Started with General Formatting](https://github.com/telerik/kendo-intl/blob/develop/docs/general-formatting/index.md)
