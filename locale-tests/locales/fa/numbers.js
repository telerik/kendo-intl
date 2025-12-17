const data = {
    name: "fa",
    likelySubtags: {
        fa: "fa-Arab-IR"
    },
    identity: {
        language: "fa"
    },
    territory: "IR",
    numbers: {
        symbols: {
            decimal: ".",
            group: ",",
            list: ";",
            percentSign: "%",
            plusSign: "‎+",
            minusSign: "‎−",
            approximatelySign: "~",
            exponential: "E",
            superscriptingExponent: "×",
            perMille: "‰",
            infinity: "∞",
            nan: "ناعدد",
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
                3
            ]
        },
        currency: {
            patterns: [
                "‎$ n"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "‎$ n",
                "‎($ n)"
            ],
            groupSize: [
                3
            ]
        }
    },
    currencyData: {
        IRR: {
            _rounding: "0",
            _digits: "0"
        }
    }
};
export default data;

