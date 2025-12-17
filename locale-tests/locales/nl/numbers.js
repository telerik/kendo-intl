const data = {
    name: "nl",
    likelySubtags: {
        nl: "nl-Latn-NL"
    },
    identity: {
        language: "nl"
    },
    territory: "NL",
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
                "($ n)"
            ],
            groupSize: [
                3
            ]
        }
    }
};
export default data;

