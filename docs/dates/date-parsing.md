---
title: date parsing
page_title: Date parsing | Kendo Internationalization API
description: "Describes the parsing capabilities of the parseDate method."
position: 2
---

# Date parsing

The purpose of date parsing is to convert a string to a `Date` object using the locale specific settings. The parseDate method can be used to parse values based on the specified format(s) or implicitly based on the locale predefined formats and some of the standard date formats.

## Settings

### Implicit Formats

The method will try to parse the string in this case using the locale [predefined formats](https://github.com/telerik/kendo-intl/blob/master/docs/dates/date-formatting.md#predefined-formats) and the following standard formats:

| Standard Formats                   | Example Value                         |
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

The format(s) that should be used to parse the value can be passed as parameter to the method. In this case the value will be parsed only if the value matches one of the specified formats. The supported formats are the same as the ones described in the date formatting documentation. 

###### Example - specifying the parse formats

    import { parseDate } from '@telerik/kendo-intl/dates';

    parseDate("2000/11/06", "yyyy/MM/dd");

    parseDate("2000/11/06 10:30", ["yyyy/MM/dd", "yyyy/MM/dd HH:mm"]);

    parseDate("Nov 6, 2000", { skeleton: "yMMMd"})

