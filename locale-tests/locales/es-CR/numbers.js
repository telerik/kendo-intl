const data = {
    name: "es-CR",
    likelySubtags: {
        es: "es-Latn-ES"
    },
    identity: {
        language: "es",
        territory: "CR"
    },
    territory: "CR",
    numbers: {
        symbols: {
            decimal: ",",
            group: " ",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "-",
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
                "n %"
            ],
            groupSize: [
                3
            ]
        },
        currency: {
            patterns: [
                "$n"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-one": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "$n"
            ],
            groupSize: [
                3
            ]
        }
    },
    currencyData: {
        CRC: {
            _rounding: "0",
            _digits: "2",
            _cashRounding: "0",
            _cashDigits: "0"
        }
    }
};
export default data;

