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
|`NoCurrencyError`             | <p>Cannot determine the currency information.</p> <p>Load the currency data of the locale.</p>
|`NoSupplementalCurrencyError` | <p>Cannot determine the currency.</p> <p>Load the supplemental `currencyData`.</p>
|`NoCurrencyRegionError`       | Missing currency information for the region ${territory}.
|`NoCurrencyDisplay`           | <p>Cannot determine the display information for the currency.</p> <p>Load the currency data of the locale. The default culture does not include all currency data.</p>
|`NoGMTInfoError`              | <p>Cannot determine the GMT format of the locale.</p> <p>Load the `timeZoneNames` data of the locale.</p>
|`NoWeekDataError`             | <p>Cannot determine the first week day of the locale.</p> <p>Load the supplemental `weekData`.</p>
|`NoFirstDayError`             | <p>Cannot determine the first week day of the locale.</p> <p>The default culture data includes only the en-US first day information. Load the supplemental `weekData`.</p>

## Suggested Links

* [Get Started with CLDR]({% slug cldrdata_overview_internalization %})
* [Get Started with Date Parsing]({% slug dateparsing_internalization %})
* [Get Started with Date Formatting]({% slug dateformatting_internalization %})
* [Get Started with Number Parsing]({% slug numberparsing_internalization %})
* [Get Started with Number Formatting]({% slug numbeformatting_internalization %})
* [Get Started with General Formatting]({% slug generalformatting_internalization %})
