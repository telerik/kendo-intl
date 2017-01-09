---
title: General Formatting API
page_title: General Formatting API | Kendo UI Internationalization
description: "Learn about the exported methods from the Kendo UI Internationalization General Formatting module."
slug: dateformatapi_internalization
position: 2
---

# General Formatting API

Provides information about the exported methods from the format module.

## Methods

#### format

Replaces the format string placeholders with the provided values based on the index.

## Parameters

#### formatString `String`

The format string.

#### values `Array`

The values that should be replaced in the format string.

#### locale `String`

The optional locale id. If not specified, the `en` locale id is used.

## Return Value

#### Returns `String`

The format string with replaced formatted values.

#### toString

Formats dates and numbers based on the specified format and locale.

## Parameters

#### value `String|Date|Number`

The value to be formatted.

#### format `String|Object`

A string representing a predefined or custom date or number format, or a configuration object.

#### locale `String`

The optional locale id. If not specified, the `en` locale id is used.

## Return Value

#### Returns `String`

The formatted value.
