---
title: API
page_title: API | Kendo UI CLDR Module
description: "Learn about the exported methods from the Kendo UI Internationalization CLDR module."
slug: cldrapi_internalization
position: 2
---

# CLDR API

Provides information about the exported methods from the `cldr` module.

## Methods

### load

Loads CLDR data.

#### load Parameters

##### data `Object`

The CLDR data to be loaded. Accepts multiple parameters.

### firstDay

Returns the first day index starting from Sunday and based on the specified locale.

#### firstDay Parameters

##### locale `String`

The locale id.

#### firstDay Return Value

##### Returns `Number`

The first day index.

### dateFormatNames

Returns the names from the specified locale based on the option.

#### dateFormatNames Parameters

##### locale `String`

The locale id.

##### options `Object`

The options that determine the returned names.

##### options.type `String`

The type of the names.

The supported values are:
* `"eras"`
* `"quarters"`
* `"months"`
* `"days"`
* `"dayPeriods"`

##### options.nameType `String`

The format name type.

The supported values are:
* `"abbreviated"`
* `"wide"`
* `"narrow"`

The `"short"` option can also be specified for `days`.

##### options.standAlone `Boolean`

Indicates whether the standalone names should be returned.

#### dateFormatNames Return Value

##### Returns `Object|Array`

The names.

If the type is `"dayPeriods"` or `"eras"`, an object is returned. For the other types, the result is `Array`.

### dateFieldName

Returns a localized date field name based on a specific format specifier.

#### dateFieldName Parameters

##### options `Object`

The options that determine the returned date field name.

##### options.type `String`

The type of the date field name.

The supported values are:
* `"era"`
* `"year"`
* `"quarter"`
* `"month"`
* `"week"`
* `"day"`
* `"weekday"`
* `"dayperiod"`
* `"hour"`
* `"minute"`
* `"second"`
* `"zone"`

##### options.nameType `String`

The format name type.

The supported values are:
* `"wide"`
* `"narrow"`
* `"short"`

##### locale `String`

The locale id.

#### dateFieldName Return Value

##### Returns `String`

The date field name.

If an information for the specified date field type is missing, a `undefined` is returned.

### numberSymbols

Returns the number symbols from the specified locale.

#### numberSymbols Parameters

##### locale `String`

The locale id.

#### numberSymbols Return Value

##### Returns `Object`

Holds the number symbols from the specified locale.

### setData

Sets pre-generated data. For information on how to generate the locales refer to the [Generated Data](https://github.com/telerik/kendo-intl/blob/master/docs/cldr/index.md#generated-data) documentation.

#### setData Parameters

##### data `Object`

The pre-generated data.
