const data = {
    name: "gsw",
    likelySubtags: {
        gsw: "gsw-Latn-CH"
    },
    identity: {
        language: "gsw"
    },
    territory: "CH",
    numbers: {
        symbols: {
            decimal: ".",
            group: "’",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "−",
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
        },
        accounting: {
            patterns: [
                "n $"
            ],
            groupSize: [
                3
            ]
        }
    }
};
export default data;

