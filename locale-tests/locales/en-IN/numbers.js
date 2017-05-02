const data = {
    "en-IN": {
        name: "en-IN",
        likelySubtags: {
            en: "en-Latn-US"
        },
        identity: {
            language: "en",
            territory: "IN"
        },
        territory: "IN",
        numbers: {
            symbols: {
                decimal: ".",
                group: ",",
                list: ";",
                percentSign: "%",
                plusSign: "+",
                minusSign: "-",
                exponential: "E",
                superscriptingExponent: "×",
                perMille: "‰",
                infinity: "∞",
                nan: "NaN",
                timeSeparator: ":"
            },
            decimal: {
                patterns: [
                    "n"
                ],
                groupSize: [
                    3,
                    2
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
                    "n%"
                ],
                groupSize: [
                    3,
                    2
                ]
            },
            currency: {
                patterns: [
                    "$ n"
                ],
                groupSize: [
                    3,
                    2
                ],
                "unitPattern-count-one": "n $",
                "unitPattern-count-other": "n $"
            }
        }
    }
};
export default data;

