const data = {
    "ru-KG": {
        name: "ru-KG",
        likelySubtags: {
            ru: "ru-Cyrl-RU"
        },
        identity: {
            language: "ru",
            territory: "KG"
        },
        territory: "KG",
        numbers: {
            symbols: {
                decimal: ",",
                group: " ",
                list: ";",
                percentSign: "%",
                plusSign: "+",
                minusSign: "-",
                exponential: "E",
                superscriptingExponent: "×",
                perMille: "‰",
                infinity: "∞",
                nan: "не число",
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
                    "n $"
                ],
                groupSize: [
                    3
                ],
                "unitPattern-count-one": "n $",
                "unitPattern-count-few": "n $",
                "unitPattern-count-many": "n $",
                "unitPattern-count-other": "n $"
            }
        }
    }
};
export default data;

