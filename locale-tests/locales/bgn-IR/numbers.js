const data = {
    name: "bgn-IR",
    likelySubtags: {
        bgn: "bgn-Arab-PK"
    },
    identity: {
        language: "bgn",
        territory: "IR"
    },
    territory: "IR",
    numbers: {
        symbols: {
            decimal: "٫",
            group: "،",
            list: ";",
            percentSign: "٪",
            plusSign: "+",
            minusSign: "-",
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
        IRR: {
            _rounding: "0",
            _digits: "0"
        }
    }
};
export default data;

