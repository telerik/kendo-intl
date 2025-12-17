const data = {
    name: "cs",
    likelySubtags: {
        cs: "cs-Latn-CZ"
    },
    identity: {
        language: "cs"
    },
    territory: "CZ",
    numbers: {
        symbols: {
            decimal: ",",
            group: " ",
            list: ";",
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
        rational: {},
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
                "n $"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "n $"
            ],
            groupSize: [
                3
            ]
        }
    },
    currencyData: {
        CZK: {
            _rounding: "0",
            _digits: "2",
            _cashRounding: "0",
            _cashDigits: "0"
        }
    }
};
export default data;

