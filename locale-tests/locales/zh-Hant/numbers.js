const data = {
    "zh-Hant": {
        name: "zh-Hant",
        likelySubtags: {
            zh: "zh-Hans-CN",
            "zh-Hant": "zh-Hant-TW"
        },
        identity: {
            language: "zh",
            script: "Hant"
        },
        territory: "TW",
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
                nan: "非數值",
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
                    "$n"
                ],
                groupSize: [
                    3
                ],
                "unitPattern-count-other": "n $"
            }
        }
    }
};
export default data;

