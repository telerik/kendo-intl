---
title: Errors
page_title: Errors | Kendo UI Internationalization Package
description: "List of possible exceptions that the package could throw."
slug: errors_internalization_kendoui
position: 6
---

# Errors list

Below is the list of all controlled errors that could be thrown:

| Type                         | Message
|:---                          |:---
|`NoLocaleError`               | Missing locale info for {locale}
|`NoCurrencyError`             | Cannot determine currency information. Please load the locale currencies data.
|`NoSupplementalCurrencyError` | Cannot determine currency. Please load the supplemental currencyData.
|`NoCurrencyRegionError`       | No currency data for region ${territory}
|`NoCurrencyDisplay`           | Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.
|`NoGMTInfoError`              | Cannot determine locale GMT format. Please load the locale timeZoneNames data.
|`NoWeekDataError`             | Cannot determine locale first day of week. Please load the supplemental weekData.
|`NoFirstDayError`             | Cannot determine locale first day of week. The default culture data includes only en-US first day info. Please load the supplemental weekData.

## Suggested Links

Articles on the Kendo UI Internationalization components:

* [Get Started with CLDR]({% slug cldrdata_overview_internalization %})
* [Get Started with Date Parsing]({% slug dateparsing_internalization %})
* [Get Started with Date Formatting]({% slug dateformatting_internalization %})
* [Get Started with Number Parsing]({% slug numberparsing_internalization %})
* [Get Started with Number Formatting]({% slug numbeformatting_internalization %})
