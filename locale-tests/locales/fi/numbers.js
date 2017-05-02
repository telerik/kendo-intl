const data = {
    fi: {
        name: "fi",
        likelySubtags: {
            fi: "fi-Latn-FI"
        },
        identity: {
            language: "fi"
        },
        territory: "FI",
        numbers: {
            symbols: {
                decimal: ",",
                group: " ",
                list: ";",
                percentSign: "%",
                plusSign: "+",
                minusSign: "−",
                exponential: "E",
                superscriptingExponent: "×",
                perMille: "‰",
                infinity: "∞",
                nan: "epäluku",
                timeSeparator: "."
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
                    "n $"
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

