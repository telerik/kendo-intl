const data = {
    name: "ceb",
    likelySubtags: {
        ceb: "ceb-Latn-PH"
    },
    identity: {
        language: "ceb"
    },
    territory: "PH",
    numbers: {
        symbols: {
            decimal: ".",
            group: ",",
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
                "n%"
            ],
            groupSize: [
                2
            ]
        },
        currency: {
            patterns: [
                "$n"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-one": "$ n",
            "unitPattern-count-other": "$ n"
        },
        accounting: {
            patterns: [
                "$n"
            ],
            groupSize: [
                3
            ]
        }
    }
};
export default data;

