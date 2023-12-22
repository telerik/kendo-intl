const data = {
    name: "kxv-Orya",
    likelySubtags: {
        kxv: "kxv-Latn-IN"
    },
    identity: {
        language: "kxv",
        script: "Orya"
    },
    territory: "IN",
    numbers: {
        symbols: {
            decimal: ".",
            group: ",",
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
                3,
                2
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
                "$n"
            ],
            groupSize: [
                3,
                2
            ],
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "$n"
            ],
            groupSize: [
                3,
                2
            ]
        }
    }
};
export default data;

