---
title: Date Formatting
page_title: Date Formatting | Kendo UI Dates Module
description: "Use the formatting capabilities of the formatDate method when working with the Kendo UI Internationalization package."
slug: dateformatting_internalization
position: 2
---

# Date Formatting

Date formatting converts a `Date` object to a human-readable string using the locale specific settings. The `formatDate` method supports the usage of predefined and custom formats specified as strings, and standard formats specified as objects.

## Types of Date Formats

### Predefined

**The `d` specifier**

The `"d"` specifier renders a short date pattern&mdash;`"M/d/y"` for en.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "d"); // 10/6/2000

**The `D` specifier**

The `"D"` specifier renders a long date pattern&mdash;`"EEEE, MMMM d, y"` for en.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "D"); // Monday, November 6, 2000

**The `F` specifier**

The `"F"` specifier renders a full date and time pattern&mdash;`"EEEE, MMMM d, y h:mm:ss a"` for en.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "F"); // Monday, November 6, 2000 12:00:00 AM

**The `g` specifier**

The `"g"` specifier renders a general date and time pattern (short time)&mdash;`"M/d/y h:mm a"` for en.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "g"); // 11/6/2000 12:00 AM

**The `G` specifier**

The `"G"` specifier renders a general date and time pattern (long time)&mdash;`"M/d/y h:mm:ss a"` for en.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "G"); // 11/6/2000 12:00:00 AM

**The `M` specifier**

Renders a wide month and day pattern&mdash;`"MMMM d"` for en.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "M"); // November 6

**The `m` specifier**

Renders an abbreviated month and day pattern&mdash;`"MMM d"` for en.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "m"); // Nov 6

**The `Y` specifier**

Renders a wide month and year pattern&mdash;`"MMMM y"` for en.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "Y"); // November 2000

**The `y` specifier**

Renders an abbreviated month/year pattern&mdash;`"MMM y"` for en.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "y"); // Nov 2000

**The `t` specifier**

The `"t"` specifier renders a short time pattern&mdash;`"h:mm a"` for en.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6, 14, 30, 45), "t"); // 2:30 PM

**The `T` specifier**

The `"T"` specifier renders a long time pattern&mdash;`"h:mm:ss a"` for en.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6, 14, 30, 45), "T"); // 2:30:45 PM

**The `s` specifier**

The `"s"` specifier renders universal sortable _local_ date and time pattern&mdash;`"yyyy-MM-dd HH:mm:ss"`.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "s"); // 2000-11-06T00:00:00

**The `u` specifier**

The `"u"` specifier renders universal sortable _UTC_ date and time pattern&mdash;`"yyyy-MM-dd HH:mm:ssZ"`.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "u"); // 2000-11-06 00:00:00Z

### Custom

The following specifiers can be used in the custom formats.

**The `"G"` specifier**

The `"G"` specifier renders the era name. Use one to three letters for the abbreviated name, four letters for (wide) name, and five for the narrow name.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "y G"); // 2000 AD

**The `"y"` specifier**

The `"y"` specifier renders the year. Use one letter to render the full year, two letters to render a two-digit year, and three or four letters to render a zero-padded year, if necessary.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "y"); // 2000

    formatDate(new Date(2011, 0, 1), "yy"); // 11

    formatDate(new Date(111, 0, 1), "yyyy"); // 0111  

**The `"Q"` specifier**

The `"Q"` specifier renders a quarter of the year. Use one or two letters for the numerical quarter, three for the abbreviation, four for the wide name, and five for the narrow name.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "Q"); // 1

    formatDate(new Date(2000, 4, 1), "QQQ"); // Q2

    formatDate(new Date(2000, 6, 1), "QQQQ"); // 3rd quarter

    formatDate(new Date(2000, 10, 1), "QQQQQ"); // 4

**The `"q"` specifier**

It is the same as the `"Q"` specifier, but uses the standalone names.

**The `"M"` specifier**

The `"M"` specifier renders the month. Use one or two letters for the numerical month, three for the abbreviation, four for the wide name, and five for the narrow name. With two letters, the month number is rendered as zero-padded.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "M"); // 1

    formatDate(new Date(2000, 0, 1), "MM"); // 01

    formatDate(new Date(2000, 0, 1), "MMM"); // Jan

    formatDate(new Date(2000, 0, 1), "MMMM"); // January

    formatDate(new Date(2000, 0, 1), "MMMMM"); // J

**The `"L"` specifier**

It is the same as the `"M"` specifier, but uses the standalone names.

**The `"d"` specifier**

The `"d"` specifier renders the day of the month. Use `"d"` to show the minimum number of digits, or `"dd"` to always show two digits (zero-padding, if necessary&mdash;for example, "08").

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "y d"); // 2000 1

    formatDate(new Date(2000, 0, 1), "y dd"); // 2000 01

**The `"E"` specifier**

The `"E"` specifier renders the day of the week. Use one through three letters for the abbreviated day name, four for the wide name, five for the narrow name, and six for the short name.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "E"); // Sat

    formatDate(new Date(2000, 0, 1), "EEEE"); // Saturday

    formatDate(new Date(2000, 0, 1), "EEEEE"); // S

    formatDate(new Date(2000, 0, 1), "EEEEEE"); // Sa

**The `"e"` specifier**

It is the same as the `"E"` specifier except for its adding a numeric value that depends on the local starting day of the week, using one or two letters. The format requires the loading of the supplemental `weekData`.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "e"); // 7

**The `"c"` specifier**

It is the same as the `"e"` specifier,but uses the standalone names.

**The `"a"` specifier**

The `"a"` specifier renders the day period. Use one through three letters for the short name, four for the wide name, and five for the narrow name.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "a"); // AM

    formatDate(new Date(2000, 0, 1, 13), "aaaa"); // PM

    formatDate(new Date(2000, 0, 1, 13), "aaaaa"); // p

**The `"h"` specifier**

The `"h"` specifier renders the hour using a 12-hour clock from 1 to 12. Use `"h"` to show the minimum number of digits, or `"hh"` to always show two digits.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1, 13), "h a"); // 1 PM

    formatDate(new Date(2000, 0, 1, 13), "h a"); // 01 PM

**The `"H"` specifier**

The `"H"` specifier renders the hour using a 24-hour clock from 1 to 23. Use `"H"` to show the minimum number of digits, or `"HH"` to always show two digits.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1, 1), "H:mm"); // 1:00

    formatDate(new Date(2000, 0, 1, 13), "HH:mm"); // 13:00

**The `"m"` specifier**

The `"m"` specifier renders the minutes from 0 through 59. Use `"m"` to show the minimum number of digits, or `"mm"` to always show two digits.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1, 1, 1), "H:m"); // 1:1

    formatDate(new Date(2000, 0, 1, 1, 1), "H:mm"); // 1:01

**The `"s"` specifier**

The `"s"` specifier renders the seconds from 0 through 59. Use `"s"` to show the minimum number of digits, or `"s"` to always show two digits.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1, 1, 1, 1), "HH:mm:s"); // 01:01:1

    formatDate(new Date(2000, 0, 1, 1, 1, 1), "HH:mm:ss"); // 01:01:01

**The `"S"` specifier**

The `"S"` specifier renders the fractional seconds. It truncates based on the number of letters.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1, 1, 1, 1, 123), "s.S"); // 1.1

    formatDate(new Date(2000, 0, 1, 1, 1, 1, 123), "s.SS"); // 1.12

    formatDate(new Date(2000, 0, 1, 1, 1, 1, 123), "s.SSS"); // 1.123

**The `"z"` specifier**

The `"z"` specifier renders the timezone. Use one through three letters for the short localized GMT format, and four for the long localized GMT format.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "z"); // GMT+2

    formatDate(new Date(2000, 0, 1), "zzzz"); // GMT+02:00

**The `"Z"` specifier**

The `"Z"` specifier renders the timezone. Use one through three letters to show the ISO8601 basic format with hours and minutes, four for the long localized GMT format, and five for the ISO8601 extended format.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "Z"); // +0200

    formatDate(new Date(2000, 0, 1), "ZZZZ"); // GMT+02:00

    formatDate(new Date(2000, 0, 1), "ZZZZZ"); // +02:00

**The `"X"` specifier**

The `"X"` specifier renders the timezone. Use one letter for the ISO8601 basic format with hours and optional minutes, two and four letters for the ISO8601 basic format with hours and minutes, and three and five letters for the ISO8601 extended format. The ISO8601 UTC indicator `Z` is used when the local time offset is 0 (zero).

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "X"); // +02

    formatDate(new Date(2000, 0, 1), "X"); // Z if zero offset

    formatDate(new Date(2000, 0, 1), "XX"); // +0200

    formatDate(new Date(2000, 0, 1), "XXX"); // +02:00

**The `"x"` specifier**

It is the same as the `"X"` specifier, but without adding the UTC indicator when the offset is 0 (zero).

### Standard

The standard formats are used by passing an object. The following types of options are supported.

**Locale predefined formats**

These are used to set the format from the calendar [`dateFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#dateFormats), [`timeFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#timeFormats), and [`dateTimeFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#dateTimeFormats) elements.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6, 13), { time: "short" }); // 1:00 PM

    formatDate(new Date(2000, 10, 6, 13), { date: "long" }); // November 6, 2000

    formatDate(new Date(2000, 10, 6, 13), { datetime: "full" }); // Monday, November 6, 2000 at 1:00:00 PM GMT+02:00

**Skeleton formats**

These are used to set the format from the calendar [`availableFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems) based on the date fields that need to be displayed.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6, 13), { skeleton: "yMMMdEHm" }); // Mon, Nov 6, 2000, 13:00

**Fields formats**

These are similar to the skeleton formats but the required fields are set using separate options in the same way as the [`Intl.DateTimeFormat`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) object.

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), { year: "numeric", month: "long" }); // November 2000

## Suggested Links

* [API Reference of the Dates Module]({% slug datesapi_internalization %})
* [Date Parsing]({% slug dateparsing_internalization %})
