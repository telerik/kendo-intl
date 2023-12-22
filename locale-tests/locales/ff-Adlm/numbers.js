const data = {
    name: "ff-Adlm",
    likelySubtags: {
        ff: "ff-Latn-SN",
        "ff-Adlm": "ff-Adlm-GN"
    },
    identity: {
        language: "ff",
        script: "Adlm"
    },
    territory: "GN",
    numbers: {
        symbols: {
            decimal: ".",
            group: "⹁",
            list: "⁏",
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
                "$ n"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-one": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "$ n"
            ],
            groupSize: [
                3
            ]
        }
    },
    currencyData: {
        GNF: {
            _rounding: "0",
            _digits: "0"
        }
    }
};
export default data;

