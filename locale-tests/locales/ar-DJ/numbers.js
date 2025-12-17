const data = {
    name: "ar-DJ",
    likelySubtags: {
        ar: "ar-Arab-EG"
    },
    identity: {
        language: "ar",
        territory: "DJ"
    },
    territory: "DJ",
    numbers: {
        symbols: {
            decimal: ".",
            group: ",",
            list: ";",
            percentSign: "‎%‎",
            plusSign: "‎+",
            minusSign: "‎-",
            approximatelySign: "~",
            exponential: "E",
            superscriptingExponent: "×",
            perMille: "‰",
            infinity: "∞",
            nan: "ليس رقمًا",
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
                "‏n $",
                "‏-n $"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "؜n$",
                "(؜n$)"
            ],
            groupSize: [
                3
            ]
        }
    },
    currencyData: {
        DJF: {
            _rounding: "0",
            _digits: "0"
        }
    }
};
export default data;

