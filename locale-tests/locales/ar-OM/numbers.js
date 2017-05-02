const data = {
    "ar-OM": {
        name: "ar-OM",
        likelySubtags: {
            ar: "ar-Arab-EG"
        },
        identity: {
            language: "ar",
            territory: "OM"
        },
        territory: "OM",
        numbers: {
            symbols: {
                decimal: ".",
                group: ",",
                list: ";",
                percentSign: "‎%‎",
                plusSign: "‎+",
                minusSign: "‎-",
                exponential: "E",
                superscriptingExponent: "×",
                perMille: "‰",
                infinity: "∞",
                nan: "ليس رقمًا",
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
                    "$ n"
                ],
                groupSize: [
                    3
                ],
                "unitPattern-count-zero": "n $",
                "unitPattern-count-one": "n $",
                "unitPattern-count-two": "n $",
                "unitPattern-count-few": "n $",
                "unitPattern-count-many": "n $",
                "unitPattern-count-other": "n $"
            }
        }
    }
};
export default data;

