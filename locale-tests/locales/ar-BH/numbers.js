const data = {
    name: "ar-BH",
    likelySubtags: {
        ar: "ar-Arab-EG"
    },
    identity: {
        language: "ar",
        territory: "BH"
    },
    territory: "BH",
    numbers: {
        symbols: {
            decimal: ".",
            group: ",",
            list: ";",
            percentSign: "‎%‎",
            plusSign: "‎+",
            minusSign: "‎-",
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
            "unitPattern-count-zero": "n $",
            "unitPattern-count-one": "n $",
            "unitPattern-count-two": "n $",
            "unitPattern-count-few": "n $",
            "unitPattern-count-many": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "$n",
                "($n)"
            ],
            groupSize: [
                3
            ]
        }
    },
    currencyData: {
        BHD: {
            _rounding: "0",
            _digits: "3"
        }
    }
};
export default data;

