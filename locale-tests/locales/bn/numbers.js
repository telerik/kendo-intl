const data = {
    name: "bn",
    likelySubtags: {
        bn: "bn-Beng-BD"
    },
    identity: {
        language: "bn"
    },
    territory: "BD",
    numbers: {
        symbols: {
            decimal: ".",
            group: ",",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "-",
            approximatelySign: "~",
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
        rational: {},
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
                "n$"
            ],
            groupSize: [
                3,
                2
            ],
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "n$",
                "(n$)"
            ],
            groupSize: [
                3,
                2
            ]
        }
    }
};
export default data;

