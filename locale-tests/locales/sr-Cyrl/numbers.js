const data = {
    "sr-Cyrl": {
        name: "sr-Cyrl",
        likelySubtags: {
            sr: "sr-Cyrl-RS"
        },
        identity: {
            language: "sr",
            script: "Cyrl"
        },
        territory: "RS",
        numbers: {
            symbols: {
                decimal: ",",
                group: ".",
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
                "unitPattern-count-few": "n $",
                "unitPattern-count-other": "n $"
            }
        }
    }
};
export default data;

