const data = {
    name: "es-PY",
    likelySubtags: {
        es: "es-Latn-ES"
    },
    identity: {
        language: "es",
        territory: "PY"
    },
    territory: "PY",
    numbers: {
        symbols: {
            decimal: ",",
            group: ".",
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
                "n%"
            ],
            groupSize: [
                3
            ]
        },
        currency: {
            patterns: [
                "$ n",
                "$ -n"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "$ n",
                "$ -n"
            ],
            groupSize: [
                3
            ]
        }
    },
    currencyData: {
        PYG: {
            _rounding: "0",
            _digits: "0"
        }
    }
};
export default data;

