const data = {
    name: "en-CH",
    likelySubtags: {
        en: "en-Latn-US"
    },
    identity: {
        language: "en",
        territory: "CH"
    },
    territory: "CH",
    numbers: {
        symbols: {
            decimal: ".",
            group: "'",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "-",
            approximatelySign: "~",
            exponential: "E",
            superscriptingExponent: "·",
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
                "$-n"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-one": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "$ n",
                "$-n"
            ],
            groupSize: [
                3
            ]
        }
    },
    currencyData: {
        CHF: {
            _rounding: "0",
            _digits: "2",
            _cashRounding: "5"
        }
    }
};
export default data;

