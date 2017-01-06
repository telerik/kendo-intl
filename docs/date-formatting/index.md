---
title: Date Formatting
page_title: Date Formatting | Kendo UI Internationalization
description: "Use the formatting capabilities of the formatDate method when working with the Kendo UI Internationalization package."
slug: dateformatting_internalization
position: 1
---

# Date Formatting

Date formatting converts a `Date` object to a human-readable string using the locale specific settings. The `formatDate` method supports the usage of predefined and custom formats specified as strings, and standard formats specified as objects.

## Types of Date Formats

### Predefined

* **The `d` specifier**&mdash;Renders a short date pattern&mdash;`"M/d/y"` for en.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), "d"); // 10/6/2000

* **The `D` specifier**&mdash;Renders a long date pattern&mdash;`"EEEE, MMMM d, y"` for en.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), "D"); // Monday, November 6, 2000

* **The `F` specifier**&mdash;Renders a full date and time pattern&mdash;`"EEEE, MMMM d, y h:mm:ss a"` for en.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), "F"); // Monday, November 6, 2000 12:00:00 AM

* **The `g` specifier**&mdash;Renders a general date and time pattern (short time)&mdash;`"M/d/y h:mm a"` for en.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), "g"); // 11/6/2000 12:00 AM

* **The `G` specifier**&mdash;Renders a general date and time pattern (long time)&mdash;`"M/d/y h:mm:ss a"` for en.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), "G"); // 11/6/2000 12:00:00 AM

* **The `M` specifier**&mdash;Renders a wide month and day pattern&mdash;`"MMMM d"` for en.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), "M"); // November 6

* **The `m` specifier**&mdash;Renders an abbreviated month and day pattern&mdash;`"MMM d"` for en.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), "m"); // Nov 6

* **The `Y` specifier**&mdash;Renders a wide month and year pattern&mdash;`"MMMM y"` for en.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), "Y"); // November 2000

* **The `y` specifier**&mdash;Renders an abbreviated month/year pattern&mdash;`"MMM y"` for en.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), "y"); // Nov 2000

* **The `t` specifier**&mdash;Renders a short time pattern&mdash;`"h:mm a"` for en.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6, 14, 30, 45), "t"); // 2:30 PM

* **The `T` specifier**&mdash;Renders a long time pattern&mdash;`"h:mm:ss a"` for en.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6, 14, 30, 45), "T"); // 2:30:45 PM

* **The `s` specifier**&mdash;Renders a universal sortable local date and time pattern&mdash;`"yyyy-MM-dd HH:mm:ss"`.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), "s"); // 2000-11-06T00:00:00

* **The `u` specifier**&mdash;Renders a universal sortable UTC date and time pattern&mdash;`"yyyy-MM-dd HH:mm:ssZ"`.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), "u"); // 2000-11-06 00:00:00Z

### Custom

The following specifiers can be used in the custom formats.

* **The `"G"` specifier**&mdash;Renders the era name.
    For the abbreviated name, use one to three letters. For the wide name, use four letters. For the narrow name, use five letters.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1), "y G"); // 2000 AD

* **The `"y"` specifier**&mdash;Renders the year.

    To render the full year, use one letter. To render a two-digit year, use two letters. To render a zero-padded year, if necessary, use three or four letters.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1), "y"); // 2000

        formatDate(new Date(2011, 0, 1), "yy"); // 11

        formatDate(new Date(111, 0, 1), "yyyy"); // 0111  

* **The `"Q"` specifier**&mdash;Renders a quarter of the year.

    For the numerical quarter, use one or two letters. For the abbreviation, use three letters. For the wide name, use four letters. For the narrow name, use five letters.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1), "Q"); // 1

        formatDate(new Date(2000, 4, 1), "QQQ"); // Q2

        formatDate(new Date(2000, 6, 1), "QQQQ"); // 3rd quarter

        formatDate(new Date(2000, 10, 1), "QQQQQ"); // 4

* **The `"q"` specifier**&mdash;The same as the `"Q"` specifier except that the `"q"` specifier uses the standalone names.

* **The `"M"` specifier**&mdash;Renders the month.
  For the numerical month, use one or two letters. For the abbreviation, use three letters. For the wide name, use four letters. For the narrow name, use five letters.
  When you use two letters, the month number is rendered as zero-padded.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1), "M"); // 1

        formatDate(new Date(2000, 0, 1), "MM"); // 01

        formatDate(new Date(2000, 0, 1), "MMM"); // Jan

        formatDate(new Date(2000, 0, 1), "MMMM"); // January

        formatDate(new Date(2000, 0, 1), "MMMMM"); // J

* **The `"L"` specifier**&mdash;The same as the `"M"` specifier except that the `"L"` specifier uses the standalone names.

* **The `"d"` specifier**&mdash;Renders the day of the month.
  To show the minimum number of digits, use `"d"`. To always show two digits, use `"dd"` (zero-padding, if necessary&mdash;for example, "08").

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1), "y d"); // 2000 1

        formatDate(new Date(2000, 0, 1), "y dd"); // 2000 01

* **The `"E"` specifier**&mdash;Renders the day of the week.
  For the abbreviated day name, use one through three letters. For the wide name, use four letters. For the narrow name, use five letters. For the short name, use six letters.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1), "E"); // Sat

        formatDate(new Date(2000, 0, 1), "EEEE"); // Saturday

        formatDate(new Date(2000, 0, 1), "EEEEE"); // S

        formatDate(new Date(2000, 0, 1), "EEEEEE"); // Sa

* **The `"e"` specifier**&mdash;The same as the `"E"` specifier except that it adds a numeric value that depends on the local starting day of the week, using one or two letters. The format requires you to load the supplemental `weekData`.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1), "e"); // 7

* **The `"c"` specifier**&mdash;The same as the `"e"` specifier except that uses the standalone names.

* **The `"a"` specifier**&mdash;Renders the day period.
  For the short name, use one through three letters. For the wide name, use four letters. For the narrow name, use five letters.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1), "a"); // AM

        formatDate(new Date(2000, 0, 1, 13), "aaaa"); // PM

        formatDate(new Date(2000, 0, 1, 13), "aaaaa"); // p

* **The `"h"` specifier**&mdash;Renders the hour using a 12-hour clock from 1 to 12.
  To show the minimum number of digits, use `"h"`. To always show two digits, use `"hh"`.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1, 13), "h a"); // 1 PM

        formatDate(new Date(2000, 0, 1, 13), "h a"); // 01 PM

* **The `"H"` specifier**&mdash;Renders the hour using a 24-hour clock from 1 to 23.
  To show the minimum number of digits, use `"H"`. To always show two digits, use `"HH"`.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1, 1), "H:mm"); // 1:00

        formatDate(new Date(2000, 0, 1, 13), "HH:mm"); // 13:00

* **The `"m"` specifier**&mdash;Renders the minutes from 0 through 59.
  To show the minimum number of digits, use `"m"`. To always show two digits, use `"mm"`.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1, 1, 1), "H:m"); // 1:1

        formatDate(new Date(2000, 0, 1, 1, 1), "H:mm"); // 1:01

* **The `"s"` specifier**&mdash;Renders the seconds from 0 through 59.
  To show the minimum number of digits, use `"s"`. To always show two digits, use `"ss"`.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1, 1, 1, 1), "HH:mm:s"); // 01:01:1

        formatDate(new Date(2000, 0, 1, 1, 1, 1), "HH:mm:ss"); // 01:01:01

* **The `"S"` specifier**&mdash;Renders the fractional seconds. It truncates based on the number of letters.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1, 1, 1, 1, 123), "s.S"); // 1.1

        formatDate(new Date(2000, 0, 1, 1, 1, 1, 123), "s.SS"); // 1.12

        formatDate(new Date(2000, 0, 1, 1, 1, 1, 123), "s.SSS"); // 1.123

* **The `"z"` specifier**&mdash;Renders the timezone.
  For the short localized GMT format, use one through three letters. For the long localized GMT format, use four letters.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1), "z"); // GMT+2

        formatDate(new Date(2000, 0, 1), "zzzz"); // GMT+02:00

* **The `"Z"` specifier**&mdash;Renders the timezone.
  To show the ISO8601 basic format with hours and minutes, use one through three letters. For the long localized GMT format, use four letters. For the ISO8601 extended format, use five letters.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1), "Z"); // +0200

        formatDate(new Date(2000, 0, 1), "ZZZZ"); // GMT+02:00

        formatDate(new Date(2000, 0, 1), "ZZZZZ"); // +02:00

* **The `"X"` specifier**&mdash;Renders the timezone.
  For the ISO8601 basic format with hours and optional minutes, use one letter.   For the ISO8601 basic format with hours and minutes, use two letters and four letters. For the ISO8601 extended format, use three and five letters.
  The ISO8601 UTC indicator `Z` is used when the local time offset is `0` (zero).

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 0, 1), "X"); // +02

        formatDate(new Date(2000, 0, 1), "X"); // Z if zero offset

        formatDate(new Date(2000, 0, 1), "XX"); // +0200

        formatDate(new Date(2000, 0, 1), "XXX"); // +02:00

* **The `"x"` specifier**&mdash;The same as the `"X"` specifier, but without adding the UTC indicator when the offset is 0 (zero).

### Standard

The standard formats are used when passing an object.

The supported types of options are:

* **Locale predefined formats**&mdash;Used to set the format from the [`dateFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#dateFormats), [`timeFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#timeFormats), and [`dateTimeFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#dateTimeFormats) elements of the calendar.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6, 13), { time: "short" }); // 1:00 PM

        formatDate(new Date(2000, 10, 6, 13), { date: "long" }); // November 6, 2000

        formatDate(new Date(2000, 10, 6, 13), { datetime: "full" }); // Monday, November 6, 2000 at 1:00:00 PM GMT+02:00

* **Skeleton formats**&mdash;Used to set the format from the [`availableFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems) of the calendar based on the date fields that you want to display.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6, 13), { skeleton: "yMMMdEHm" }); // Mon, Nov 6, 2000, 13:00

* **Fields formats**&mdash;Similar to the skeleton formats except that you need to set the required fields by using separate options in the same way as the [`Intl.DateTimeFormat`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) object.

        import { formatDate } from '@telerik/kendo-intl';

        formatDate(new Date(2000, 10, 6), { year: "numeric", month: "long" }); // November 2000

## Suggested Links

* [Date Formatting API]({% slug dateformatapi_internalization %})
* [Date Parsing]({% slug dateparsing_internalization %})
