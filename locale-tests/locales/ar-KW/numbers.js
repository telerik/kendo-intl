const data = {
    name: "ar-KW",
    likelySubtags: {
        ar: "ar-Arab-EG"
    },
    identity: {
        language: "ar",
        territory: "KW"
    },
    territory: "KW",
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
        KWD: {
            _rounding: "0",
            _digits: "3"
        }
    }
};
export default data;

