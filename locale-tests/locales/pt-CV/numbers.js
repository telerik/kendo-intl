const data = {
    name: "pt-CV",
    likelySubtags: {
        pt: "pt-Latn-BR"
    },
    identity: {
        language: "pt",
        territory: "CV"
    },
    territory: "CV",
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
                "n $"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-one": "n $",
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

