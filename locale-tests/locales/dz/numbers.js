const data = {
    name: "dz",
    likelySubtags: {
        dz: "dz-Tibt-BT"
    },
    identity: {
        language: "dz"
    },
    territory: "BT",
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
                "n %"
            ],
            groupSize: [
                3,
                2
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

