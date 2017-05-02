const data = {
    "de-AT": {
        name: "de-AT",
        likelySubtags: {
            de: "de-Latn-DE"
        },
        identity: {
            language: "de",
            territory: "AT"
        },
        territory: "AT",
        numbers: {
            symbols: {
                decimal: ",",
                group: " ",
                list: ";",
                percentSign: "%",
                plusSign: "+",
                minusSign: "-",
                exponential: "E",
                superscriptingExponent: "·",
                perMille: "‰",
                infinity: "∞",
                nan: "NaN",
                currencyGroup: ".",
                timeSeparator: ":"
            },
            decimal: {
                patterns: [
                    "n"
                ],
                groupSize: [
                    3
                ]
            },
            scientific: {
                patterns: [
                    "nEn"
                ],
                groupSize: []
            },
            percent: {
                patterns: [
                    "n %"
                ],
                groupSize: [
                    3
                ]
            },
            currency: {
                patterns: [
                    "$ n"
                ],
                groupSize: [
                    3
                ],
                "unitPattern-count-one": "n $",
                "unitPattern-count-other": "n $"
            }
        }
    }
};
export default data;

