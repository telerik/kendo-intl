const data = {
    ca: {
        name: "ca",
        likelySubtags: {
            ca: "ca-Latn-ES"
        },
        identity: {
            language: "ca"
        },
        territory: "ES",
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
                "unitPattern-count-other": "n $"
            }
        }
    }
};
export default data;

