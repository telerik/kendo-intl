const data = {
    "en-US-POSIX": {
        name: "en-US-POSIX",
        likelySubtags: {
            en: "en-Latn-US"
        },
        identity: {
            language: "en",
            territory: "US",
            variant: "POSIX"
        },
        territory: "US",
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
                perMille: "0/00",
                infinity: "INF",
                nan: "NaN",
                timeSeparator: ":"
            },
            decimal: {
                patterns: [
                    "n"
                ],
                groupSize: []
            },
            scientific: {
                patterns: [
                    "nE+n"
                ],
                groupSize: []
            },
            percent: {
                patterns: [
                    "n%"
                ],
                groupSize: []
            },
            currency: {
                patterns: [
                    "$ n"
                ],
                groupSize: [],
                "unitPattern-count-one": "n $",
                "unitPattern-count-other": "n $"
            }
        }
    }
};
export default data;

