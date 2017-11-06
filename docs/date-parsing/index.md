---
title: Date Parsing
page_title: Date Parsing | Kendo UI Internationalization
description: "Use the parsing capabilities of the parseDate method when working with the Kendo UI Internationalization package."
slug: dateparsing_internalization
position: 1
---

# Date Parsing

Date parsing converts a string to a `Date` object by using the locale specific settings.

You can use the `parseDate` method to parse values based on the specified formats or implicitly based on the locale predefined formats and some of the standard date formats. If the formats are omitted, the locale predefined patterns and the standard ISO formats are used to parse the string.

## Configuration

The `parseDate` method supports the parsing of:
* [Implicit string formats](#implicit-formats)
* [Explicit string formats](#explicit-formats)

### Implicit Formats

In this case, the `parseDate` method tries to parse the string using both the locale [predefined formats](https://github.com/telerik/kendo-intl/blob/master/docs/date-formatting/index.md#predefined) and the standard formats listed in the following table.

| STANDARD FORMATS                   | EXAMPLE VALUE                         |
| :---                               | :---                                  |
| The Microsoft JSON date format     | `"\/Date(1330848000000)\/`"           |  
| `"yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX"` | `"2000-11-06T10:30:30.0000000+05:00"` |
| `"yyyy-MM-ddTHH:mm:ss.SSSXXX"`     | `"2000-11-06T10:30:30.000Z"`          |
| `"yyyy-MM-ddTHH:mm:ssXXX"`         | `"2000-11-06T10:30:30+05:00"`         |
| `"yyyy-MM-ddTHH:mm:ss.SSSSSSS"`    | `"2000-11-06T10:30:30.0000000"`       |
| `"yyyy-MM-ddTHH:mm:ss.SSS"`        | `"2000-11-06T10:30:30.000"`           |
| `"yyyy-MM-ddTHH:mmX"`              | `"2000-11-06T10:30+05"`               |
| `"yyyy-MM-ddTHH:mm"`               | `"2000-11-06T10:30"`                  |
| `"yyyy-MM-dd HH:mm:ss"`            | `"2000-11-06 10:30:30"`               |
| `"yyyy-MM-dd HH:mm"`               | `"2000-11-06 10:30"`                  |
| `"yyyy-MM-dd"`                     | `"2000-11-06"`                        |
| `"yyyy/MM/dd HH:mm:ss"`            | `"2000/11/06 10:30:30"`               |
| `"yyyy/MM/dd HH:mm"`               | `"2000/11/06 10:30"`                  |
| `"yyyy/MM/dd"`                     | `"2000/11/06"`                        |
| `"HH:mm:ss"`                       | `"10:30:30"`                          |
| `"HH:mm"`                          | `"10:30"`                             |
| `"E MMM dd yyyy HH:mm:ss"`         | `"Mon Nov 06 2000 10:30:30"`          |

### Explicit Formats

You can pass the formats that have to be used to parse the value as parameters to the method. In this case, only if it matches one of the specified formats, is the value parsed. The supported formats are the same as the ones described in the article on [date formatting](https://github.com/telerik/kendo-intl/blob/develop/docs/date-formatting/index.md).

The following example demonstrates how to specify the parse formats.

    import { parseDate } from '@telerik/kendo-intl';

    parseDate("2000/11/06", "yyyy/MM/dd");

    parseDate("2000/11/06 10:30", ["yyyy/MM/dd", "yyyy/MM/dd HH:mm"]);

    parseDate("Nov 6, 2000", { skeleton: "yMMMd"})

## Suggested Links

* [Date Parsing API](https://github.com/telerik/kendo-intl/blob/develop/docs/date-parsing/api.md)
* [Date Formatting](https://github.com/telerik/kendo-intl/blob/develop/docs/date-formatting/index.md)
