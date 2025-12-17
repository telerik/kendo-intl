const data = {
    name: "sl",
    likelySubtags: {
        sl: "sl-Latn-SI"
    },
    identity: {
        language: "sl"
    },
    territory: "SI",
    numbers: {
        symbols: {
            decimal: ",",
            group: ".",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "−",
            approximatelySign: "~",
            exponential: "e",
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
                "n $",
                "(n $)"
            ],
            groupSize: [
                3
            ]
        }
    }
};
export default data;

