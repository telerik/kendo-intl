---
title: API
page_title: API | Kendo UI CLDR Module
description: "Learn about the exported methods from the Kendo UI Internationalization CLDR module."
slug: cldrapi_internalization
position: 2
---

# CLDR API

Provides information about the exported methods from the `cldr` module.

## Methods: load

### load

Loads CLDR data.

### Parameters: load

#### data `Object`

The CLDR data to be loaded. Multiple parameters are accepted.

## Methods: firstDay

Returns the first day index starting from Sunday based on the specified locale.

### Parameters: firstDay

#### locale `String`

The locale id.

### Return Value: firstDay

#### Returns `Number`

The first day index.

## Methods: dateFormatNames

Returns the names from the specified locale based on the option.

### Parameters: dateFormatNames

#### locale `String`

The locale id.

#### options `Object`

The options that determine the returned names.

#### options.type `String`

The type of the names. The supported values are `"eras"`, `"quarters"`, `"months"`, `"days"` and `"dayPeriods"`.

#### options.nameType `String`

The format name type. The supported values are `"abbreviated"`, `"wide"`, `"narrow"`. `"short"` can also be specified for `days`.

#### options.standAlone `Boolean`

Indicates whether the stand-alone names should be returned.

### Return Value: dateFormatNames

#### Returns `Object|Array`

The names. An object will be returned it the type is `"dayPeriods"` or `"eras"`. For the other types the result is `Array`.

## Methods: numberSymbols

Returns the number symbols from specified locale.

### Parameters: numberSymbols

#### locale `String`

The locale id.

### Return Value: numberSymbols

#### Returns `Object`

An object holding the locale number symbols.
