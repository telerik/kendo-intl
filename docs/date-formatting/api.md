---
title: Date Formatting API
page_title: Date Formatting API | Kendo UI Internationalization
description: "Learn about the exported methods from the Kendo UI Internationalization Date Formatting module."
slug: dateformatapi_internalization
position: 2
---

# Date Formatting API

Provides information about the exported methods from the Date Formatting module.

## Methods

#### formatDate

Converts a `Date` object to a string based on the specified format and locale.

## Parameters

#### date `Date`

Defines the date to be formatted.

#### format `String|Object`

Defines a string representing a predefined or custom date format, or a configuration object.

#### format.skeleton `String`

Defines the skeleton format used to get the pattern from the locale calendar [`availableFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems).

#### format.date `String`

Specifies which of the locale `dateFormats` should be used to format the value.

The supported values are:
* `"short"`
* `"medium"`
* `"long"`
* `"full"`

#### format.time `String`

Specifies which of the locale `timeFormats` should be used to format the value.

The supported values are:
* `"short"`
* `"medium"`
* `"long"`
* `"full"`

#### format.datetime `String`

Specifies which of the locale `dateTimeFormats` should be used to format the value.

The supported values are:
* `"short"`
* `"medium"`
* `"long"`
* `"full"`

#### format.era `String`

Specifies how should the date era be formatted.

The supported values are:
* `"narrow"`
* `"short"`
* `"long"`

#### format.year `String`

Specifies how the date year should be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`

#### format.month `String`

Specifies how the date month should be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`
* `"narrow"`
* `"short"`
* `"long"`

#### format.day `String`

Specifies how the day of the month should be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`

#### format.weekday `String`

Specifies how the day of the week should be formatted.

The supported values are:
* `"narrow"`
* `"short"`
* `"long"`

#### format.weekday `String`

Specifies how the day of the week should be formatted.

The supported values are:
* `"narrow"`
* `"short"`
* `"long"`

#### format.hour `String`

Specifies how the hours should be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`

#### format.hour12 `Boolean`

Specifies if a 12-hour time set should be used for the formatting.

#### format.minute `String`

Specifies how the minutes should be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`

#### format.second `String`

Specifies how the seconds should be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`

#### format.timeZoneName `String`

Specifies how the timezone should be formatted.

The supported values are:
* `"short"`
* `"long"`

#### locale `String`

Defines the locale id.

## Return Value

#### Returns `String`

The formatted date.

#### splitDateFormat

Returns information about the individual segments of a format. The returned objects contain the segment type (for example, year or month), the pattern, and the information about the [dateFormatNames](https://github.com/telerik/kendo-intl/blob/master/docs/cldr/api.md#dateformatnames) that are used for the pattern.

## Parameters

#### format `String|Object`

Specifies a string representing a predefined or custom date format, or a configuration object.

#### locale `String`

Defines the locale ID.

## Return Value

#### Returns `Array`

An array with information about the format segments.
