const data = {
    name: "kl",
    likelySubtags: {
        kl: "kl-Latn-GL"
    },
    identity: {
        language: "kl"
    },
    territory: "GL",
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
                "$n",
                "$-n"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "$n",
                "$-n"
            ],
            groupSize: [
                3
            ]
        }
    },
    currencyData: {
        DKK: {
            _rounding: "0",
            _digits: "2",
            _cashRounding: "50"
        }
    }
};
export default data;

