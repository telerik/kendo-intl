const data = {
    name: "twq",
    likelySubtags: {
        twq: "twq-Latn-NE"
    },
    identity: {
        language: "twq"
    },
    territory: "NE",
    numbers: {
        symbols: {
            decimal: ".",
            group: " ",
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
                "n%"
            ],
            groupSize: [
                3
            ]
        },
        currency: {
            patterns: [
                "n$"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "n$"
            ],
            groupSize: [
                3
            ]
        }
    },
    currencyData: {
        XOF: {
            _rounding: "0",
            _digits: "0"
        }
    }
};
export default data;

