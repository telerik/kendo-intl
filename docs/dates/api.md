---
title: Dates API
page_title: Dates API | Kendo Internationalization API
description: "Provides information about the exported methods from the Kendo Internationalization dates module."
position: 1
---

# Dates API

Provides information about the exported methods from the dates module.

## Methods

### formatDate

Converts a `Date` to string based on the specified format and locale.

#### Parameters

##### date `Date`

The date to be formatted.

##### format `String|Object`

A string representing a predefined or custom date format or a configuration object.

##### format.skeleton `String`

The skeleton format used get the pattern from the locale calendar [availableFormats](http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems).

##### format.date `String`

Specifies which of the locale _dateFormats_ should be used to format the value. The supported values are `"short"`, `"medium"`, `"long"` and `"full"`.

##### format.time `String`

Specifies which of the locale _timeFormats_ should be used to format the value. The supported values are `"short"`, `"medium"`, `"long"` and `"full"`.

##### format.datetime `String`

Specifies which of the locale _dateTimeFormats_ should be used to format the value. The supported values are `"short"`, `"medium"`, `"long"` and `"full"`.

##### format.era `String`

Specifies how should the date era be formatted. The supported values are `"narrow"`, `"short"` and `"long"`.

##### format.year `String`

Specifies how should the date year be formatted. The supported values are `"numeric"` and `"2-digit"`.

##### format.month `String`

Specifies how should the date month be formatted. The supported values are `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` and `"long"`.

##### format.day `String`

Specifies how should the day of the month be formatted. The supported values are `"numeric"`, `"2-digit"`.

##### format.weekday `String`

Specifies how should the day of the week be formatted. The supported values are `"narrow"`, `"short"`, `"long"`.

##### format.weekday `String`

Specifies how should the day of the week be formatted. The supported values are `"narrow"`, `"short"`, `"long"`.

##### format.hour `String`

Specifies how should the hours be formatted. The supported values are `"numeric"` and `"2-digit"`.

##### format.hour12 `Boolean`

Specifies if 12-hour time should be used for the formatting.

##### format.minute `String`

Specifies how should the minutes be formatted. The supported values are `"numeric"` and `"2-digit"`.

##### format.second `String`

Specifies how should the seconds be formatted. The supported values are `"numeric"` and `"2-digit"`.

##### format.timeZoneName `String`

Specifies how should the timezone be formatted. The supported values are `"short"` and `"long"`.

##### locale `String`

The locale id.

### parseDate

Converts a string to `Date` based on the specified format and locale.

#### Parameters

##### date `Date`

The date to be formatted.

##### format `String|Object|Array`

A string representing a predefined or custom date format or a configuration object or an array of formats.

##### format.skeleton `String`

The skeleton format used get the pattern from the locale calendar [availableFormats](http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems).

##### format.date `String`

Specifies which of the locale _dateFormats_ should be used to format the value. The supported values are `"short"`, `"medium"`, `"long"` and `"full"`.

##### format.time `String`

Specifies which of the locale _timeFormats_ should be used to format the value. The supported values are `"short"`, `"medium"`, `"long"` and `"full"`.

##### format.datetime `String`

Specifies which of the locale _dateTimeFormats_ should be used to format the value. The supported values are `"short"`, `"medium"`, `"long"` and `"full"`.

##### format.era `String`

Specifies how should the date era be formatted. The supported values are `"narrow"`, `"short"` and `"long"`.

##### format.year `String`

Specifies how should the date year be formatted. The supported values are `"numeric"` and `"2-digit"`.

##### format.month `String`

Specifies how should the date month be formatted. The supported values are `"numeric"`, `"2-digit"`, `"narrow"`, `"short"` and `"long"`.

##### format.day `String`

Specifies how should the day of the month be formatted. The supported values are `"numeric"`, `"2-digit"`.

##### format.weekday `String`

Specifies how should the day of the week be formatted. The supported values are `"narrow"`, `"short"`, `"long"`.

##### format.weekday `String`

Specifies how should the day of the week be formatted. The supported values are `"narrow"`, `"short"`, `"long"`.

##### format.hour `String`

Specifies how should the hours be formatted. The supported values are `"numeric"` and `"2-digit"`.

##### format.hour12 `Boolean`

Specifies if 12-hour time should be used for the formatting.

##### format.minute `String`

Specifies how should the minutes be formatted. The supported values are `"numeric"` and `"2-digit"`.

##### format.second `String`

Specifies how should the seconds be formatted. The supported values are `"numeric"` and `"2-digit"`.

##### format.timeZoneName `String`

Specifies how should the timezone be formatted. The supported values are `"short"` and `"long"`.

##### locale `String`

The locale id.


