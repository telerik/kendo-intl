---
title: API
page_title: API | Kendo UI CLDR Module
description: "Learn about the exported methods from the Kendo UI Internationalization CLDR module."
slug: cldrapi_internalization
position: 2
---

# CLDR API

Provides information about the exported methods from the `cldr` module.

## The load Method

### load

Loads CLDR data.

## The load Parameters

#### data `Object`

The CLDR data to be loaded. Multiple parameters are accepted.

## The firstDay Method

### firstDay

Returns the first day index starting from sunday based on the specified locale.

## The firstDay Parameters

#### locale `String`

The locale id.

## The firstDay return value

#### Returns `Number`

The first day index.

## The dateFormatNames Method

### dateFormatNames

Returns the names from the specified locale based on the option.

## The dateFormatNames Parameters

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

## The dateFormatNames return value

#### Returns `Object|Array`

The names. An object will be returned it the type is `"dayPeriods"` or `"eras"`. For the other types the result is `Array`.


## The numberSymbols Method

### numberSymbols

Returns the number symbols from specified locale.

## The numberSymbols Parameters

#### locale `String`

The locale id.

## The numberSymbols return value

#### Returns `Object`

An object holding the locale number symbols.