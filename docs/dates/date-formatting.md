---
title: date formatting
page_title: Date formatting | Kendo Internationalization API
description: "Describes formatting capabilities of the formatDate method."
position: 2
---

# Date Formatting

The purpose of date formatting is to convert a `Date` object to a human readable string using the locale specific settings. The formatDate method supports using predefined and custom formats specified as string, and standard formats specified as object.

## Types of Date Formats

### Predefined formats

#### The 'd' Specifier

The `"d"` specifier renders a short date pattern (`"M/d/y"` for en), as shown below.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "d"); // 10/6/2000

#### The 'D' Specifier

The `"D"` specifier renders a long date pattern (`"EEEE, MMMM d, y"` for en).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "D"); // Monday, November 6, 2000

#### The 'F' Specifier

The `"F"` specifier renders a full date/time pattern (`"EEEE, MMMM d, y h:mm:ss a"` for en).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "F"); // Monday, November 6, 2000 12:00:00 AM

#### The 'g' Specifier

The `"g"` specifier renders a general date/time pattern (short time) (`"M/d/y h:mm a"` for en).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "g"); // 11/6/2000 12:00 AM

#### The 'G' Specifier

The `"G"` specifier renders a general date/time pattern (long time) (`"M/d/y h:mm:ss a"` for en).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "G"); // 11/6/2000 12:00:00 AM

#### The 'M' Specifier

Renders a wide month/day pattern (`"MMMM d"` for en).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "M"); // November 6

#### The 'm' Specifier

Renders an abbreviated month/day pattern (`"MMM d"` for en).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "m"); // Nov 6

#### The 'Y' Specifier

Renders a wide month/year pattern (`"MMMM y"` for en).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "Y"); // November 2000

#### The 'y' Specifier

Renders an abbreviated month/year pattern (`"MMM y"` for en).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "y"); // Nov 2000

#### The 't' Specifier

The `"t"` specifier renders a short time pattern (`"h:mm a"` for en).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6, 14, 30, 45), "t"); // 2:30 PM

#### The 'T' Specifier

The `"T"` specifier renders a long time pattern (`"h:mm:ss a"` for en).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6, 14, 30, 45), "T"); // 2:30:45 PM

#### The 's' Specifier

The `"s"` specifier renders universal sortable **local** date/time pattern (`"yyyy-MM-dd HH:mm:ss"`).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "s"); // 2000-11-06T00:00:00

#### The 'u' Specifier

The `"u"` specifier renders universal sortable **UTC** date/time pattern (`"yyyy-MM-dd HH:mm:ssZ"`).

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), "u"); // 2000-11-06 00:00:00Z

### Custom formats

The following specifiers can be used in the custom formats.

#### The `"G"` Specifier

Renders the era name. Use one to three letters for the abbreviated name, four letters for (wide) name and five for the narrow name.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "y G"); // 2000 AD

#### The `"y"` Specifier

Renders the year. Use one letter to render the full year, two letters to render a two digit year and three or four letters to render a zero padded if necessary year.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "y"); // 2000

    formatDate(new Date(2011, 0, 1), "yy"); // 11

    formatDate(new Date(111, 0, 1), "yyyy"); // 0111  

#### The `"Q"` Specifier

Renders quarter of the year. Use one or two letters for the numerical quarter, three for the abbreviation, four for the wide name and five for the narrow name.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "Q"); // 1

    formatDate(new Date(2000, 4, 1), "QQQ"); // Q2

    formatDate(new Date(2000, 6, 1), "QQQQ"); // 3rd quarter

    formatDate(new Date(2000, 10, 1), "QQQQQ"); // 4

#### The `"q"` Specifier

It is the same as `"Q"` but uses the stand-alone names.

#### The `"M"` Specifier

Renders the month. Use one or two letters for the numerical month, three for the abbreviation, four for the wide name and five for the narrow name. With two letters, the month number is zero-padded if necessary.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "M"); // 1

    formatDate(new Date(2000, 0, 1), "MM"); // 01

    formatDate(new Date(2000, 0, 1), "MMM"); // Jan

    formatDate(new Date(2000, 0, 1), "MMMM"); // January

    formatDate(new Date(2000, 0, 1), "MMMMM"); // J

#### The `"L"` Specifier

It is the same as `"M"` but uses the stand-alone names.

#### The `"d"` Specifier

Renders the day of month. Use `"d"` to show the minimum number of digits, or `"dd"` to always show two digits (zero-padding if necessary, e.g. "08").

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "y d"); // 2000 1

    formatDate(new Date(2000, 0, 1), "y dd"); // 2000 01

#### The `"E"` Specifier

Renders the day of the week. Use one through three letters for the abbreviated day name, four for the wide name, five for the narrow name and six for the short name.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "E"); // Sat

    formatDate(new Date(2000, 0, 1), "EEEE"); // Saturday

    formatDate(new Date(2000, 0, 1), "EEEEE"); // S

    formatDate(new Date(2000, 0, 1), "EEEEEE"); // Sa

#### The `"e"` Specifier

It is the same as `"E"` excepts it adds a numeric value that will depend on the local starting day of the week, using one or two letters. The format requires loading the supplemental _weekData_.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "e"); // 7

#### The `"c"` Specifier

It is the same as `"e"` but uses the stand-alone names.

#### The `"a"` Specifier

Renders the day period. Use one through three letters for the short name, four for the wide name and five for the narrow name.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "a"); // AM

    formatDate(new Date(2000, 0, 1, 13), "aaaa"); // PM

    formatDate(new Date(2000, 0, 1, 13), "aaaaa"); // p

#### The `"h"` Specifier

Renders the hour using a 12-hour clock from 1 to 12. Use `"h"` to show the minimum number of digits, or `"hh"` to always show two digits.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1, 13), "h a"); // 1 PM

    formatDate(new Date(2000, 0, 1, 13), "h a"); // 01 PM

#### The `"H"` Specifier

Renders the hour using a 24-hour clock from 1 to 23. Use `"H"` to show the minimum number of digits, or `"HH"` to always show two digits.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1, 1), "H:mm"); // 1:00

    formatDate(new Date(2000, 0, 1, 13), "HH:mm"); // 13:00

#### The `"m"` Specifier

Renders the minutes from 0 through 59. Use `"m"` to show the minimum number of digits, or `"mm"` to always show two digits.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1, 1, 1), "H:m"); // 1:1
    
    formatDate(new Date(2000, 0, 1, 1, 1), "H:mm"); // 1:01

#### The `"s"` Specifier

Renders the seconds from 0 through 59. Use `"s"` to show the minimum number of digits, or `"s"` to always show two digits

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1, 1, 1, 1), "HH:mm:s"); // 01:01:1
    
    formatDate(new Date(2000, 0, 1, 1, 1, 1), "HH:mm:ss"); // 01:01:01

#### The `"S"` Specifier

Renders the fractional seconds. Truncates based on the number of letters.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1, 1, 1, 1, 123), "s.S"); // 1.1
    
    formatDate(new Date(2000, 0, 1, 1, 1, 1, 123), "s.SS"); // 1.12
    
    formatDate(new Date(2000, 0, 1, 1, 1, 1, 123), "s.SSS"); // 1.123

#### The `"z"` Specifier

Renders the timezone. Use one through three letters for the short localized GMT format and four for the long localized GMT format.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "z"); // GMT+2

    formatDate(new Date(2000, 0, 1), "zzzz"); // GMT+02:00

#### The `"Z"` Specifier

Renders the timezone. Use one through three letters to show the ISO8601 basic format with hours and minutes, four for the long localized GMT format and five for the ISO8601 extended format.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "Z"); // +0200

    formatDate(new Date(2000, 0, 1), "ZZZZ"); // GMT+02:00

    formatDate(new Date(2000, 0, 1), "ZZZZZ"); // +02:00

#### The `"X"` Specifier

Renders the timezone. Use one letter for the ISO8601 basic format with hours and optional minutes, two and four letters for the ISO8601 basic format with hours and minutes, three and five letters for the ISO8601 extended format. The ISO8601 UTC indicator "Z" is used when local time offset is 0.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 0, 1), "X"); // +02

    formatDate(new Date(2000, 0, 1), "X"); // Z if zero offset

    formatDate(new Date(2000, 0, 1), "XX"); // +0200

    formatDate(new Date(2000, 0, 1), "XXX"); // +02:00

#### The `"x"` Specifier

It is the same as `"X"` but without adding the UTC indicator when the offset is 0.

### Standard formats

The standard formats are used by passing an object. The following types of options are supported.

#### Locale predefined formats

Used to set the format from the calendar [dateFormats](http://www.unicode.org/reports/tr35/tr35-dates.html#dateFormats), [timeFormats](http://www.unicode.org/reports/tr35/tr35-dates.html#timeFormats) and [dateTimeFormats](http://www.unicode.org/reports/tr35/tr35-dates.html#dateTimeFormats) elements. 

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6, 13), { time: "short" }); // 1:00 PM

    formatDate(new Date(2000, 10, 6, 13), { date: "long" }); // November 6, 2000

    formatDate(new Date(2000, 10, 6, 13), { datetime: "full" }); // Monday, November 6, 2000 at 1:00:00 PM GMT+02:00

#### Skeleton formats

Used to set the format from the calendar [availableFormats](http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems) based on the date fields that needs to be displayed. 

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6, 13), { skeleton: "yMMMdEHm" }); // Mon, Nov 6, 2000, 13:00

#### Fields formats

Similar to the skeleton formats but the required fields are set using separate options the same way as with the [Intl.DateTimeFormat](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) object.

###### Example

    import { formatDate } from '@telerik/kendo-intl/dates';

    formatDate(new Date(2000, 10, 6), { year: "numeric", month: "long" }); // November 2000

