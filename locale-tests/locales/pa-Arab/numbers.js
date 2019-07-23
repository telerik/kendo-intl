const data = {
    name: "pa-Arab",
    likelySubtags: {
        pa: "pa-Guru-IN",
        "pa-Arab": "pa-Arab-PK"
    },
    identity: {
        language: "pa",
        script: "Arab"
    },
    territory: "PK",
    numbers: {
        symbols: {
            decimal: ".",
            group: ",",
            list: ";",
            percentSign: "%",
            plusSign: "‎+",
            minusSign: "‎-",
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
        PKR: {
            _rounding: "0",
            _digits: "2",
            _cashRounding: "0",
            _cashDigits: "0"
        }
    }
};
export default data;

