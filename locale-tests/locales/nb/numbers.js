const data = {
    name: "nb",
    likelySubtags: {
        nb: "nb-Latn-NO"
    },
    identity: {
        language: "nb"
    },
    territory: "NO",
    numbers: {
        symbols: {
            decimal: ",",
            group: " ",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "−",
            exponential: "E",
            superscriptingExponent: "×",
            perMille: "‰",
            infinity: "∞",
            nan: "NaN",
            timeSeparator: ":",
            "timeSeparator-alt-variant": "."
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
                "n %"
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
        NOK: {
            _rounding: "0",
            _digits: "2",
            _cashRounding: "0",
            _cashDigits: "0"
        }
    }
};
export default data;

