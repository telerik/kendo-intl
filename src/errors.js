const NoLocaleError = { code: "101", message: "Missing locale info for '${0}'" };
const NoCurrencyError = { code: "201", message: "Cannot determine currency information. Please load the locale currencies data." };
const NoSupplementalCurrencyError = { code: "202", message: "Cannot determine currency. Please load the supplemental currencyData." };
const NoCurrencyRegionError = { code: "203", message: "No currency data for region '${0}'" };
const NoGMTInfoError = { code: "301", message: "Cannot determine locale GMT format. Please load the locale timeZoneNames data." };
const NoWeekDataError = { code: "302", message: "Cannot determine locale first day of week. Please load the supplemental weekData." };
const NoFirstDayError = { code: "303", message: "Cannot determine locale first day of week. The default culture data includes only 'en-US' first day info. Please load the supplemental weekData." };

const errors = {
    NoLocaleError,
    NoCurrencyError,
    NoSupplementalCurrencyError,
    NoCurrencyRegionError,
    NoGMTInfoError,
    NoWeekDataError,
    NoFirstDayError
};

const formatError = function(error, additionalInfo) {
    return `Error ${error.code}: ${error.message.replace("${0}", additionalInfo)}`;
};

export {
    errors,
    formatError
};
