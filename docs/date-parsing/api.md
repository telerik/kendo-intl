---
title: Date Parsing API
page_title: Date Parsing API | Kendo UI Internationalization
description: "Learn about the exported methods from the Kendo UI Internationalization Date Parsing module."
slug: dateparseapi_internalization
position: 2
---

# Date Parsing API

Provides information about the exported methods from the Date Parsing module.

## Methods

#### parseDate

Converts a string into a `Date` object based on the specified format and locale ([more information](https://github.com/telerik/kendo-intl/blob/master/docs/date-parsing/index.md).

## Parameters

#### date `Date`

Defines the date to be formatted.

#### format `String|Object|Array`

Defines a string representing a predefined or custom date format, a configuration object, or an array of formats.

#### format.skeleton `String`

Defines the skeleton format used to get the pattern from the locale calendar [`availableFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems).

#### format.date `String`

Specifies which of the locale `dateFormats` will be used to format the value.

The supported values are:
* `"short"`
* `"medium"`
* `"long"`
* `"full"`

#### format.time `String`

Specifies which of the locale `timeFormats` will be used to format the value.

The supported values are:
* `"short"`
* `"medium"`
* `"long"`
* `"full"`

#### format.datetime `String`

Specifies which of the locale `dateTimeFormats` will be used to format the value.

The supported values are:
* `"short"`
* `"medium"`
* `"long"`
* `"full"`

#### format.era `String`

Specifies how the date era will be formatted.

The supported values are:
* `"narrow"`
* `"short"`
* `"long"`

#### format.year `String`

Specifies how the date year will be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`

#### format.month `String`

Specifies how the date month will be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`
* `"narrow"`
* `"short"`
* `"long"`

#### format.day `String`

Specifies how the day of the month will be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`

#### format.weekday `String`

Specifies how the day of the week will be formatted.

The supported values are:
* `"narrow"`
* `"short"`
* `"long"`

#### format.weekday `String`

Specifies how the day of the week will be formatted.

The supported values are:
* `"narrow"`
* `"short"`
* `"long"`

#### format.hour `String`

Specifies how the hours will be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`

#### format.hour12 `Boolean`

Specifies if a 12-hour time set will be used for the formatting.

#### format.minute `String`

Specifies how the minutes will be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`

#### format.second `String`

Specifies how the seconds will be formatted.

The supported values are:
* `"numeric"`
* `"2-digit"`

#### format.timeZoneName `String`

Specifies how the timezone will be formatted.

The supported values are:
* `"short"`
* `"long"`

#### locale `String`

Defines the locale id.

## Return Value

#### Returns `Date`

The parsed date.
