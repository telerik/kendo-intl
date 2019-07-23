const data = {
    name: "ar-PS",
    likelySubtags: {
        ar: "ar-Arab-EG"
    },
    identity: {
        language: "ar",
        territory: "PS"
    },
    territory: "PS",
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
        JOD: {
            _rounding: "0",
            _digits: "3"
        }
    }
};
export default data;

