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

### numberSymbols

Returns the number symbols from the specified locale.

#### numberSymbols Parameters

##### locale `String`

The locale id.

#### numberSymbols Return Value

##### Returns `Object`

Holds the number symbols from the specified locale.
