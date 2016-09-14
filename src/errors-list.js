export default [
    { "name": "NoLocaleError", "code": "101", "message": "Missing locale info for '{0}'" },
    { "name": "NoCurrencyError","code": "201", "message": "Cannot determine currency information. Please load the locale currencies data." },
    { "name": "NoSupplementalCurrencyError", "code": "202", "message": "Cannot determine currency. Please load the supplemental currencyData." },
    { "name": "NoCurrencyRegionError", "code": "203", "message": "No currency data for region '{0}'" },
    { "name": "NoCurrencyDisplayError", "code": "204", "message": "Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data." },
    { "name": "NoGMTInfoError", "code": "301", "message": "Cannot determine locale GMT format. Please load the locale timeZoneNames data." },
    { "name": "NoWeekDataError", "code": "302", "message": "Cannot determine locale first day of week. Please load the supplemental weekData." },
    { "name": "NoFirstDayError", "code": "303", "message": "Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info." }
];
