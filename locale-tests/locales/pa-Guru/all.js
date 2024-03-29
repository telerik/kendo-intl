const data = {
    name: "pa-Guru",
    identity: {
        language: "pa",
        script: "Guru"
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
                "[nEn]"
            ],
            groupSize: []
        },
        percent: {
            patterns: [
                "n%"
            ],
            groupSize: [
                3,
                2
            ]
        },
        currency: {
            patterns: [
                "$ n"
            ],
            groupSize: [
                3,
                2
            ],
            "unitPattern-count-one": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "$ n"
            ],
            groupSize: [
                3,
                2
            ]
        },
        currencies: {
            ADP: {
                displayName: "ADP",
                symbol: "ADP"
            },
            AED: {
                displayName: "ਸੰਯੁਕਤ ਅਰਬ ਅਮੀਰਾਤ ਦਿਰਹਾਮ",
                "displayName-count-one": "ਸੰਯੁਕਤ ਅਰਬ ਅਮੀਰਾਤ ਦਿਰਹਾਮ",
                "displayName-count-other": "ਸੰਯੁਕਤ ਅਰਬ ਅਮੀਰਾਤ ਦਿਰਹਾਮ",
                symbol: "AED"
            },
            AFA: {
                displayName: "AFA",
                symbol: "AFA"
            },
            AFN: {
                displayName: "ਅਫ਼ਗਾਨ ਅਫ਼ਗਾਨੀ",
                "displayName-count-one": "ਅਫ਼ਗਾਨ ਅਫ਼ਗਾਨੀ",
                "displayName-count-other": "ਅਫ਼ਗਾਨ ਅਫ਼ਗਾਨੀ",
                symbol: "AFN",
                "symbol-alt-narrow": "؋"
            },
            ALK: {
                displayName: "ALK",
                symbol: "ALK"
            },
            ALL: {
                displayName: "ਅਲਬਾਨੀਆਈ ਲੇਕ",
                "displayName-count-one": "ਅਲਬਾਨੀਆਈ ਲੇਕ",
                "displayName-count-other": "ਅਲਬਾਨੀਆਈ ਲੇਕ",
                symbol: "ALL"
            },
            AMD: {
                displayName: "ਅਰਮੀਨੀਆਈ ਦਰਾਮ",
                "displayName-count-one": "ਅਰਮੀਨੀਆਈ ਦਰਾਮ",
                "displayName-count-other": "ਅਰਮੀਨੀਆਈ ਦਰਾਮ",
                symbol: "AMD",
                "symbol-alt-narrow": "֏"
            },
            ANG: {
                displayName: "ਨੀਦਰਲੈਂਡਸ ਐਂਟੀਲੀਅਨ ਗਿਲਡਰ",
                "displayName-count-one": "ਨੀਦਰਲੈਂਡਸ ਐਂਟੀਲੀਅਨ ਗਿਲਡਰ",
                "displayName-count-other": "ਨੀਦਰਲੈਂਡਸ ਐਂਟੀਲੀਅਨ ਗਿਲਡਰ",
                symbol: "ANG"
            },
            AOA: {
                displayName: "ਅੰਗੋਲਾ ਕਵਾਂਜਾ",
                "displayName-count-one": "ਅੰਗੋਲਾ ਕਵਾਂਜਾ",
                "displayName-count-other": "ਅੰਗੋਲਾ ਕਵਾਂਜਾ",
                symbol: "AOA",
                "symbol-alt-narrow": "Kz"
            },
            AOK: {
                displayName: "AOK",
                symbol: "AOK"
            },
            AON: {
                displayName: "AON",
                symbol: "AON"
            },
            AOR: {
                displayName: "AOR",
                symbol: "AOR"
            },
            ARA: {
                displayName: "ਅਰਜਨਟੀਨੀ ਅਸਟਰਾਲ",
                "displayName-count-one": "ਅਰਜਨਟੀਨੀ ਅਸਟਰਾਲ",
                "displayName-count-other": "ਅਰਜਨਟੀਨੀ ਅਸਟਰਾਲ",
                symbol: "ARA"
            },
            ARL: {
                displayName: "ਅਰਜਨਟੀਨੀ ਪੇਸੋ ਲੇ (1970–1983)",
                "displayName-count-one": "ਅਰਜਨਟੀਨੀ ਪੇਸੋ ਲੇ (1970–1983)",
                "displayName-count-other": "ਅਰਜਨਟੀਨੀ ਪੇਸੋ ਲੇ (1970–1983)",
                symbol: "ARL"
            },
            ARM: {
                displayName: "ਅਰਜਨਟੀਨੀ ਪੇਸੋ (1881–1970)",
                "displayName-count-one": "ਅਰਜਨਟੀਨੀ ਪੇਸੋ (1881–1970)",
                "displayName-count-other": "ਅਰਜਨਟੀਨੀ ਪੇਸੋ (1881–1970)",
                symbol: "ARM"
            },
            ARP: {
                displayName: "ਅਰਜਨਟੀਨੀ ਪੇਸੋ (1983–1985)",
                "displayName-count-one": "ਅਰਜਨਟੀਨੀ ਪੇਸੋ (1983–1985)",
                "displayName-count-other": "ਅਰਜਨਟੀਨੀ ਪੇਸੋ (1983–1985)",
                symbol: "ARP"
            },
            ARS: {
                displayName: "ਅਰਜਨਟੀਨੀ ਪੇਸੋ",
                "displayName-count-one": "ਅਰਜਨਟੀਨੀ ਪੇਸੋ",
                "displayName-count-other": "ਅਰਜਨਟੀਨੀ ਪੇਸੋ",
                symbol: "ARS",
                "symbol-alt-narrow": "$"
            },
            ATS: {
                displayName: "ATS",
                symbol: "ATS"
            },
            AUD: {
                displayName: "ਆਸਟ੍ਰੇਲੀਆਈ ਡਾਲਰ",
                "displayName-count-one": "ਆਸਟ੍ਰੇਲੀਆਈ ਡਾਲਰ",
                "displayName-count-other": "ਆਸਟ੍ਰੇਲੀਆਈ ਡਾਲਰ",
                symbol: "A$",
                "symbol-alt-narrow": "$"
            },
            AWG: {
                displayName: "ਅਰੂਬਨ ਫਲੋਰਿਨ",
                "displayName-count-one": "ਅਰੂਬਨ ਫਲੋਰਿਨ",
                "displayName-count-other": "ਅਰੂਬਨ ਫਲੋਰਿਨ",
                symbol: "AWG"
            },
            AZM: {
                displayName: "AZM",
                symbol: "AZM"
            },
            AZN: {
                displayName: "ਅਜ਼ਰਬਾਈਜਾਨ ਮਾਨਤ",
                "displayName-count-one": "ਅਜ਼ਰਬਾਈਜਾਨ ਮਾਨਤ",
                "displayName-count-other": "ਅਜ਼ਰਬਾਈਜਾਨ ਮਾਨਤ",
                symbol: "AZN",
                "symbol-alt-narrow": "₼"
            },
            BAD: {
                displayName: "BAD",
                symbol: "BAD"
            },
            BAM: {
                displayName: "ਬੋਸਨੀਆ-ਹਰਜ਼ੇਗੋਵੀਨਾ ਬਦਲਣਯੋਗ ਮਾਰਕ",
                "displayName-count-one": "ਬੋਸਨੀਆ-ਹਰਜ਼ੇਗੋਵੀਨਾ ਬਦਲਣਯੋਗ ਮਾਰਕ",
                "displayName-count-other": "ਬੋਸਨੀਆ-ਹਰਜ਼ੇਗੋਵੀਨਾ ਬਦਲਣਯੋਗ ਮਾਰਕ",
                symbol: "BAM",
                "symbol-alt-narrow": "KM"
            },
            BAN: {
                displayName: "BAN",
                symbol: "BAN"
            },
            BBD: {
                displayName: "ਬਾਰਬਾਡੀਅਨ ਡਾਲਰ",
                "displayName-count-one": "ਬਾਰਬਾਡੀਅਨ ਡਾਲਰ",
                "displayName-count-other": "ਬਾਰਬਾਡੀਅਨ ਡਾਲਰ",
                symbol: "BBD",
                "symbol-alt-narrow": "$"
            },
            BDT: {
                displayName: "ਬੰਗਲਾਦੇਸ਼ੀ ਟਕਾ",
                "displayName-count-one": "ਬੰਗਲਾਦੇਸ਼ੀ ਟਕਾ",
                "displayName-count-other": "ਬੰਗਲਾਦੇਸ਼ੀ ਟਕਾ",
                symbol: "BDT",
                "symbol-alt-narrow": "৳"
            },
            BEC: {
                displayName: "BEC",
                symbol: "BEC"
            },
            BEF: {
                displayName: "BEF",
                symbol: "BEF"
            },
            BEL: {
                displayName: "BEL",
                symbol: "BEL"
            },
            BGL: {
                displayName: "BGL",
                symbol: "BGL"
            },
            BGM: {
                displayName: "BGM",
                symbol: "BGM"
            },
            BGN: {
                displayName: "ਬੁਲਗਾਰੀਆਈ ਲੇਵ",
                "displayName-count-one": "ਬੁਲਗਾਰੀਆਈ ਲੇਵ",
                "displayName-count-other": "ਬੁਲਗਾਰੀਆਈ ਲੇਵ",
                symbol: "BGN"
            },
            BGO: {
                displayName: "BGO",
                symbol: "BGO"
            },
            BHD: {
                displayName: "ਬਹਿਰੀਨੀ ਦਿਨਾਰ",
                "displayName-count-one": "ਬਹਿਰੀਨੀ ਦਿਨਾਰ",
                "displayName-count-other": "ਬਹਿਰੀਨੀ ਦਿਨਾਰ",
                symbol: "BHD"
            },
            BIF: {
                displayName: "ਬੁਰੁੰਡੀਆਈ ਫ੍ਰੈਂਕ",
                "displayName-count-one": "ਬੁਰੁੰਡੀਆਈ ਫ੍ਰੈਂਕ",
                "displayName-count-other": "ਬੁਰੁੰਡੀਆਈ ਫ੍ਰੈਂਕ",
                symbol: "BIF"
            },
            BMD: {
                displayName: "ਬਰਮੂਡਾ ਡਾਲਰ",
                "displayName-count-one": "ਬਰਮੂਡਾ ਡਾਲਰ",
                "displayName-count-other": "ਬਰਮੂਡਾ ਡਾਲਰ",
                symbol: "BMD",
                "symbol-alt-narrow": "$"
            },
            BND: {
                displayName: "ਬਰੂਨੇਈ ਡਾਲਰ",
                "displayName-count-one": "ਬਰੂਨੇਈ ਡਾਲਰ",
                "displayName-count-other": "ਬਰੂਨੇਈ ਡਾਲਰ",
                symbol: "BND",
                "symbol-alt-narrow": "$"
            },
            BOB: {
                displayName: "ਬੋਲੀਵੀਅਨ ਬੋਲੀਵੀਅਨੋ",
                "displayName-count-one": "ਬੋਲੀਵੀਅਨ ਬੋਲੀਵੀਅਨੋ",
                "displayName-count-other": "ਬੋਲੀਵੀਅਨ ਬੋਲੀਵੀਅਨੋ",
                symbol: "BOB",
                "symbol-alt-narrow": "Bs"
            },
            BOL: {
                displayName: "ਬੋਲੀਵੀਆਈ ਬੋਲੀਵੀਅਨੋ (1863–1963)",
                "displayName-count-one": "ਬੋਲੀਵੀਆਈ ਬੋਲੀਵੀਅਨੋ (1863–1963)",
                "displayName-count-other": "ਬੋਲੀਵੀਆਈ ਬੋਲੀਵੀਅਨੋ (1863–1963)",
                symbol: "BOL"
            },
            BOP: {
                displayName: "ਬੋਲੀਵੀਆਈ ਪੇਸੋ",
                "displayName-count-one": "ਬੋਲੀਵੀਆਈ ਪੇਸੋ",
                "displayName-count-other": "ਬੋਲੀਵੀਆਈ ਪੇਸੋ",
                symbol: "BOP"
            },
            BOV: {
                displayName: "ਬੋਲੀਵੀਆਈ ਮਵਡੋਲ",
                "displayName-count-one": "ਬੋਲੀਵੀਆਈ ਮਵਡੋਲ",
                "displayName-count-other": "ਬੋਲੀਵੀਆਈ ਮਵਡੋਲ",
                symbol: "BOV"
            },
            BRB: {
                displayName: "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਨਿਊ ਕਰੁਜ਼ਿਰੋਸ (1967–1986)",
                "displayName-count-one": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਨਿਊ ਕਰੁਜ਼ਿਰੋਸ (1967–1986)",
                "displayName-count-other": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਨਿਊ ਕਰੁਜ਼ਿਰੋਸ (1967–1986)",
                symbol: "BRB"
            },
            BRC: {
                displayName: "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਾਡੂ (1986–1989)",
                "displayName-count-one": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਾਡੂ (1986–1989)",
                "displayName-count-other": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਾਡੂ (1986–1989)",
                symbol: "BRC"
            },
            BRE: {
                displayName: "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1990–1993)",
                "displayName-count-one": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1990–1993)",
                "displayName-count-other": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1990–1993)",
                symbol: "BRE"
            },
            BRL: {
                displayName: "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਰੀਅਲ",
                "displayName-count-one": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਰੀਅਲ",
                "displayName-count-other": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਰੀਅਲ",
                symbol: "R$",
                "symbol-alt-narrow": "R$"
            },
            BRN: {
                displayName: "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਨਿਊ ਕਰੁਜ਼ਾਡੂ (1989–1990)",
                "displayName-count-one": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਨਿਊ ਕਰੁਜ਼ਾਡੂ (1989–1990)",
                "displayName-count-other": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਨਿਊ ਕਰੁਜ਼ਾਡੂ (1989–1990)",
                symbol: "BRN"
            },
            BRR: {
                displayName: "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1993–1994)",
                "displayName-count-one": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1993–1994)",
                "displayName-count-other": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1993–1994)",
                symbol: "BRR"
            },
            BRZ: {
                displayName: "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1942–1967)",
                "displayName-count-one": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1942–1967)",
                "displayName-count-other": "ਬ੍ਰਾਜ਼ੀਲੀਆਈ ਕਰੁਜ਼ਿਰੋਸ (1942–1967)",
                symbol: "BRZ"
            },
            BSD: {
                displayName: "ਬਾਹਾਮੀਅਨ ਡਾਲਰ",
                "displayName-count-one": "ਬਾਹਾਮੀਅਨ ਡਾਲਰ",
                "displayName-count-other": "ਬਾਹਾਮੀਅਨ ਡਾਲਰ",
                symbol: "BSD",
                "symbol-alt-narrow": "$"
            },
            BTN: {
                displayName: "ਭੂਟਾਨੀ ਐਂਗਲਟ੍ਰਮ",
                "displayName-count-one": "ਭੂਟਾਨੀ ਐਂਗਲਟ੍ਰਮ",
                "displayName-count-other": "ਭੂਟਾਨੀ ਐਂਗਲਟ੍ਰਮ",
                symbol: "BTN"
            },
            BUK: {
                displayName: "BUK",
                symbol: "BUK"
            },
            BWP: {
                displayName: "ਬੋਟਸਵਾਨਾ ਪੁਲਾ",
                "displayName-count-one": "ਬੋਟਸਵਾਨਾ ਪੁਲਾ",
                "displayName-count-other": "ਬੋਟਸਵਾਨਾ ਪੁਲਾ",
                symbol: "BWP",
                "symbol-alt-narrow": "P"
            },
            BYB: {
                displayName: "BYB",
                symbol: "BYB"
            },
            BYN: {
                displayName: "ਬੇਲਾਰੂਸੀ ਰੂਬਲ",
                "displayName-count-one": "ਬੇਲਾਰੂਸੀ ਰੂਬਲ",
                "displayName-count-other": "ਬੇਲਾਰੂਸੀ ਰੂਬਲ",
                symbol: "BYN",
                "symbol-alt-narrow": "р."
            },
            BYR: {
                displayName: "ਬੇਲਾਰੂਸੀ ਰੂਬਲ (2000–2016)",
                "displayName-count-one": "ਬੇਲਾਰੂਸੀ ਰੂਬਲ (2000–2016)",
                "displayName-count-other": "ਬੇਲਾਰੂਸੀ ਰੂਬਲ (2000–2016)",
                symbol: "BYR"
            },
            BZD: {
                displayName: "ਬੇਲੀਜ਼ ਡਾਲਰ",
                "displayName-count-one": "ਬੇਲੀਜ਼ ਡਾਲਰ",
                "displayName-count-other": "ਬੇਲੀਜ਼ ਡਾਲਰ",
                symbol: "BZD",
                "symbol-alt-narrow": "$"
            },
            CAD: {
                displayName: "ਕੇਨੇਡਿਆਈ ਡਾਲਰ",
                "displayName-count-one": "ਕੇਨੇਡਿਆਈ ਡਾਲਰ",
                "displayName-count-other": "ਕੇਨੇਡਿਆਈ ਡਾਲਰ",
                symbol: "CA$",
                "symbol-alt-narrow": "$"
            },
            CDF: {
                displayName: "ਕਾਂਗੋਲੀਜ਼ ਫ੍ਰੈਂਕ",
                "displayName-count-one": "ਕਾਂਗੋਲੀਜ਼ ਫ੍ਰੈਂਕ",
                "displayName-count-other": "ਕਾਂਗੋਲੀਜ਼ ਫ੍ਰੈਂਕ",
                symbol: "CDF"
            },
            CHE: {
                displayName: "CHE",
                symbol: "CHE"
            },
            CHF: {
                displayName: "ਸਵਿਸ ਫ੍ਰੈਂਕ",
                "displayName-count-one": "ਸਵਿਸ ਫ੍ਰੈਂਕ",
                "displayName-count-other": "ਸਵਿਸ ਫ੍ਰੈਂਕ",
                symbol: "CHF"
            },
            CHW: {
                displayName: "CHW",
                symbol: "CHW"
            },
            CLE: {
                displayName: "CLE",
                symbol: "CLE"
            },
            CLF: {
                displayName: "CLF",
                symbol: "CLF"
            },
            CLP: {
                displayName: "ਚਿਲੀ ਪੇਸੋ",
                "displayName-count-one": "ਚਿਲੀ ਪੇਸੋ",
                "displayName-count-other": "ਚਿਲੀ ਪੇਸੋ",
                symbol: "CLP",
                "symbol-alt-narrow": "$"
            },
            CNH: {
                displayName: "ਚੀਨੀ ਯੁਆਨ (ਔਫ਼ਸ਼ੋਰ)",
                "displayName-count-one": "ਚੀਨੀ ਯੁਆਨ (ਔਫ਼ਸ਼ੋਰ)",
                "displayName-count-other": "ਚੀਨੀ ਯੁਆਨ (ਔਫ਼ਸ਼ੋਰ)",
                symbol: "CNH"
            },
            CNX: {
                displayName: "CNX",
                symbol: "CNX"
            },
            CNY: {
                displayName: "ਚੀਨੀ ਯੁਆਨ",
                "displayName-count-one": "ਚੀਨੀ ਯੁਆਨ",
                "displayName-count-other": "ਚੀਨੀ ਯੁਆਨ",
                symbol: "CN¥",
                "symbol-alt-narrow": "¥"
            },
            COP: {
                displayName: "ਕੋਲੰਬਿਆਈ ਪੇਸੋ",
                "displayName-count-one": "ਕੋਲੰਬਿਆਈ ਪੇਸੋ",
                "displayName-count-other": "ਕੋਲੰਬਿਆਈ ਪੇਸੋ",
                symbol: "COP",
                "symbol-alt-narrow": "$"
            },
            COU: {
                displayName: "COU",
                symbol: "COU"
            },
            CRC: {
                displayName: "ਕੋਸਟਾ ਰੀਕਨ ਕੋਲਨ",
                "displayName-count-one": "ਕੋਸਟਾ ਰੀਕਨ ਕੋਲਨ",
                "displayName-count-other": "ਕੋਸਟਾ ਰੀਕਨ ਕੋਲਨ",
                symbol: "CRC",
                "symbol-alt-narrow": "₡"
            },
            CSD: {
                displayName: "CSD",
                symbol: "CSD"
            },
            CSK: {
                displayName: "CSK",
                symbol: "CSK"
            },
            CUC: {
                displayName: "ਕਿਊਬਨ ਬਦਲਣਯੋਗ ਪੇਸੋ",
                "displayName-count-one": "ਕਿਊਬਨ ਬਦਲਣਯੋਗ ਪੇਸੋ",
                "displayName-count-other": "ਕਿਊਬਨ ਬਦਲਣਯੋਗ ਪੇਸੋ",
                symbol: "CUC",
                "symbol-alt-narrow": "$"
            },
            CUP: {
                displayName: "ਕਿਊਬਨ ਪੇਸੋ",
                "displayName-count-one": "ਕਿਊਬਨ ਪੇਸੋ",
                "displayName-count-other": "ਕਿਊਬਨ ਪੇਸੋ",
                symbol: "CUP",
                "symbol-alt-narrow": "$"
            },
            CVE: {
                displayName: "ਕੇਪ ਵਰਡੀਅਨ ਸਕੂਡੋ",
                "displayName-count-one": "ਕੇਪ ਵਰਡੀਅਨ ਸਕੂਡੋ",
                "displayName-count-other": "ਕੇਪ ਵਰਡੀਅਨ ਸਕੂਡੋ",
                symbol: "CVE"
            },
            CYP: {
                displayName: "CYP",
                symbol: "CYP"
            },
            CZK: {
                displayName: "ਚੈਕ ਗਣਰਾਜ ਕੋਰੁਨਾ",
                "displayName-count-one": "ਚੈਕ ਗਣਰਾਜ ਕੋਰੁਨਾ",
                "displayName-count-other": "ਚੈਕ ਗਣਰਾਜ ਕੋਰੁਨਾ",
                symbol: "CZK",
                "symbol-alt-narrow": "Kč"
            },
            DDM: {
                displayName: "DDM",
                symbol: "DDM"
            },
            DEM: {
                displayName: "ਜਰਮਨ ਮਾਰਕ",
                "displayName-count-one": "ਜਰਮਨ ਮਾਰਕ",
                "displayName-count-other": "ਜਰਮਨ ਮਾਰਕ",
                symbol: "DEM"
            },
            DJF: {
                displayName: "ਜ਼ੀਬੂਤੀਅਨ ਫ੍ਰੈਂਕ",
                "displayName-count-one": "ਜ਼ੀਬੂਤੀਅਨ ਫ੍ਰੈਂਕ",
                "displayName-count-other": "ਜ਼ੀਬੂਤੀਅਨ ਫ੍ਰੈਂਕ",
                symbol: "DJF"
            },
            DKK: {
                displayName: "ਡੈਨਿਸ਼ ਕਰੌਨ",
                "displayName-count-one": "ਡੈਨਿਸ਼ ਕਰੌਨ",
                "displayName-count-other": "ਡੈਨਿਸ਼ ਕਰੌਨ",
                symbol: "DKK",
                "symbol-alt-narrow": "kr"
            },
            DOP: {
                displayName: "ਡੌਮਿਨਿਕਨ ਪੇਸੋ",
                "displayName-count-one": "ਡੌਮਿਨਿਕਨ ਪੇਸੋ",
                "displayName-count-other": "ਡੌਮਿਨਿਕਨ ਪੇਸੋ",
                symbol: "DOP",
                "symbol-alt-narrow": "$"
            },
            DZD: {
                displayName: "ਅਲਜੀਰਿਆਈ ਦਿਨਾਰ",
                "displayName-count-one": "ਅਲਜੀਰਿਆਈ ਦਿਨਾਰ",
                "displayName-count-other": "ਅਲਜੀਰਿਆਈ ਦਿਨਾਰ",
                symbol: "DZD"
            },
            ECS: {
                displayName: "ECS",
                symbol: "ECS"
            },
            ECV: {
                displayName: "ECV",
                symbol: "ECV"
            },
            EEK: {
                displayName: "EEK",
                symbol: "EEK"
            },
            EGP: {
                displayName: "ਮਿਸਰੀ ਪੌਂਡ",
                "displayName-count-one": "ਮਿਸਰੀ ਪੌਂਡ",
                "displayName-count-other": "ਮਿਸਰੀ ਪੌਂਡ",
                symbol: "EGP",
                "symbol-alt-narrow": "E£"
            },
            ERN: {
                displayName: "ਇਰੀਟ੍ਰਿਆਈ ਨਾਫ਼ਾ",
                "displayName-count-one": "ਇਰੀਟ੍ਰਿਆਈ ਨਾਫ਼ਾ",
                "displayName-count-other": "ਇਰੀਟ੍ਰਿਆਈ ਨਾਫ਼ਾ",
                symbol: "ERN"
            },
            ESA: {
                displayName: "ESA",
                symbol: "ESA"
            },
            ESB: {
                displayName: "ESB",
                symbol: "ESB"
            },
            ESP: {
                displayName: "ESP",
                symbol: "ESP",
                "symbol-alt-narrow": "₧"
            },
            ETB: {
                displayName: "ਇਥੋਪੀਆਈ ਬਿਰ",
                "displayName-count-one": "ਇਥੋਪੀਆਈ ਬਿਰ",
                "displayName-count-other": "ਇਥੋਪੀਆਈ ਬਿਰ",
                symbol: "ETB"
            },
            EUR: {
                displayName: "ਯੂਰੋ",
                "displayName-count-one": "ਯੂਰੋ",
                "displayName-count-other": "ਯੂਰੋ",
                symbol: "€",
                "symbol-alt-narrow": "€"
            },
            FIM: {
                displayName: "FIM",
                symbol: "FIM"
            },
            FJD: {
                displayName: "ਫ਼ਿਜ਼ੀ ਡਾਲਰ",
                "displayName-count-one": "ਫ਼ਿਜ਼ੀ ਡਾਲਰ",
                "displayName-count-other": "ਫ਼ਿਜ਼ੀ ਡਾਲਰ",
                symbol: "FJD",
                "symbol-alt-narrow": "$"
            },
            FKP: {
                displayName: "ਫ਼ਾਕਲੈਂਡ ਆਈਲੈਂਡਸ ਪੌਂਡ",
                "displayName-count-one": "ਫ਼ਾਕਲੈਂਡ ਆਈਲੈਂਡਸ ਪੌਂਡ",
                "displayName-count-other": "ਫ਼ਾਕਲੈਂਡ ਆਈਲੈਂਡਸ ਪੌਂਡ",
                symbol: "FKP",
                "symbol-alt-narrow": "£"
            },
            FRF: {
                displayName: "FRF",
                symbol: "FRF"
            },
            GBP: {
                displayName: "ਬ੍ਰਿਟਿਸ਼ ਪੌਂਡ",
                "displayName-count-one": "ਬ੍ਰਿਟਿਸ਼ ਪੌਂਡ",
                "displayName-count-other": "ਬ੍ਰਿਟਿਸ਼ ਪੌਂਡ",
                symbol: "£",
                "symbol-alt-narrow": "£"
            },
            GEK: {
                displayName: "GEK",
                symbol: "GEK"
            },
            GEL: {
                displayName: "ਜਾਰਜੀਆਈ ਲਾਰੀ",
                "displayName-count-one": "ਜਾਰਜੀਆਈ ਲਾਰੀ",
                "displayName-count-other": "ਜਾਰਜੀਆਈ ਲਾਰੀ",
                symbol: "GEL",
                "symbol-alt-narrow": "₾"
            },
            GHC: {
                displayName: "GHC",
                symbol: "GHC"
            },
            GHS: {
                displayName: "ਘਾਨਾਈ ਸੇਡੀ",
                "displayName-count-one": "ਘਾਨਾਈ ਸੇਡੀ",
                "displayName-count-other": "ਘਾਨਾਈ ਸੇਡੀ",
                symbol: "GHS",
                "symbol-alt-narrow": "GH₵"
            },
            GIP: {
                displayName: "ਜਿਬਰਾਲਟਰ ਪੌਂਡ",
                "displayName-count-one": "ਜਿਬਰਾਲਟਰ ਪੌਂਡ",
                "displayName-count-other": "ਜਿਬਰਾਲਟਰ ਪੌਂਡ",
                symbol: "GIP",
                "symbol-alt-narrow": "£"
            },
            GMD: {
                displayName: "ਗੈਂਬੀਆਈ ਦਲਾਸੀ",
                "displayName-count-one": "ਗੈਂਬੀਆਈ ਦਲਾਸੀ",
                "displayName-count-other": "ਗੈਂਬੀਆਈ ਦਲਾਸੀ",
                symbol: "GMD"
            },
            GNF: {
                displayName: "ਗਿਨੀ ਫ੍ਰੈਂਕ",
                "displayName-count-one": "ਗਿਨੀ ਫ੍ਰੈਂਕ",
                "displayName-count-other": "ਗਿਨੀ ਫ੍ਰੈਂਕ",
                symbol: "GNF",
                "symbol-alt-narrow": "FG"
            },
            GNS: {
                displayName: "GNS",
                symbol: "GNS"
            },
            GQE: {
                displayName: "GQE",
                symbol: "GQE"
            },
            GRD: {
                displayName: "GRD",
                symbol: "GRD"
            },
            GTQ: {
                displayName: "ਗੁਆਟੇਮਾਲਾ ਕੁਏਟਜ਼ਲ",
                "displayName-count-one": "ਗੁਆਟੇਮਾਲਾ ਕੁਏਟਜ਼ਲ",
                "displayName-count-other": "ਗੁਆਟੇਮਾਲਾ ਕੁਏਟਜ਼ਲ",
                symbol: "GTQ",
                "symbol-alt-narrow": "Q"
            },
            GWE: {
                displayName: "GWE",
                symbol: "GWE"
            },
            GWP: {
                displayName: "GWP",
                symbol: "GWP"
            },
            GYD: {
                displayName: "ਗੁਆਨਾਆਈ ਡਾਲਰ",
                "displayName-count-one": "ਗੁਆਨਾਆਈ ਡਾਲਰ",
                "displayName-count-other": "ਗੁਆਨਾਆਈ ਡਾਲਰ",
                symbol: "GYD",
                "symbol-alt-narrow": "$"
            },
            HKD: {
                displayName: "ਹਾਂਗ ਕਾਂਗ ਡਾਲਰ",
                "displayName-count-one": "ਹਾਂਗ ਕਾਂਗ ਡਾਲਰ",
                "displayName-count-other": "ਹਾਂਗ ਕਾਂਗ ਡਾਲਰ",
                symbol: "HK$",
                "symbol-alt-narrow": "$"
            },
            HNL: {
                displayName: "ਹਾਨਡੂਰਨ ਲੇਮਪਿਰਾ",
                "displayName-count-one": "ਹਾਨਡੂਰਨ ਲੇਮਪਿਰਾ",
                "displayName-count-other": "ਹਾਨਡੂਰਨ ਲੇਮਪਿਰਾ",
                symbol: "HNL",
                "symbol-alt-narrow": "L"
            },
            HRD: {
                displayName: "HRD",
                symbol: "HRD"
            },
            HRK: {
                displayName: "ਕਰੋਏਸ਼ੀਆਈ ਕੁਨਾ",
                "displayName-count-one": "ਕਰੋਏਸ਼ੀਆਈ ਕੁਨਾ",
                "displayName-count-other": "ਕਰੋਏਸ਼ੀਆਈ ਕੁਨਾ",
                symbol: "HRK",
                "symbol-alt-narrow": "kn"
            },
            HTG: {
                displayName: "ਹੈਤੀ ਗੌਰਡੇ",
                "displayName-count-one": "ਹੈਤੀ ਗੌਰਡੇ",
                "displayName-count-other": "ਹੈਤੀ ਗੌਰਡੇ",
                symbol: "HTG"
            },
            HUF: {
                displayName: "ਹੰਗਰੀ ਫੋਰਿੰਟ",
                "displayName-count-one": "ਹੰਗਰੀ ਫੋਰਿੰਟ",
                "displayName-count-other": "ਹੰਗਰੀ ਫੋਰਿੰਟ",
                symbol: "HUF",
                "symbol-alt-narrow": "Ft"
            },
            IDR: {
                displayName: "ਇੰਡੋਨੇਸ਼ੀਆਈ ਰੁਪਿਆਹ",
                "displayName-count-one": "ਇੰਡੋਨੇਸ਼ੀਆਈ ਰੁਪਿਆਹ",
                "displayName-count-other": "ਇੰਡੋਨੇਸ਼ੀਆਈ ਰੁਪਿਆਹ",
                symbol: "IDR",
                "symbol-alt-narrow": "Rp"
            },
            IEP: {
                displayName: "ਆਇਰਿਸ਼ ਪੌਂਡ",
                "displayName-count-one": "ਆਇਰਿਸ਼ ਪੌਂਡ",
                "displayName-count-other": "ਆਇਰਿਸ਼ ਪੌਂਡ",
                symbol: "IEP"
            },
            ILP: {
                displayName: "ਇਜ਼ਰਾਈਲੀ ਪੌਂਡ",
                "displayName-count-one": "ਇਜ਼ਰਾਈਲੀ ਪੌਂਡ",
                "displayName-count-other": "ਇਜ਼ਰਾਈਲੀ ਪੌਂਡ",
                symbol: "ILP"
            },
            ILR: {
                displayName: "ILR",
                symbol: "ILR"
            },
            ILS: {
                displayName: "ਇਜ਼ਰਾਈਲੀ ਨਵੀਂ ਸ਼ੇਕੇਲ",
                "displayName-count-one": "ਇਜ਼ਰਾਈਲੀ ਨਵੀਂ ਸ਼ੇਕੇਲ",
                "displayName-count-other": "ਇਜ਼ਰਾਈਲੀ ਨਵੀਂ ਸ਼ੇਕੇਲ",
                symbol: "₪",
                "symbol-alt-narrow": "₪"
            },
            INR: {
                displayName: "ਭਾਰਤੀ ਰੁਪਇਆ",
                "displayName-count-one": "ਭਾਰਤੀ ਰੁਪਇਆ",
                "displayName-count-other": "ਭਾਰਤੀ ਰੁਪਏ",
                symbol: "₹",
                "symbol-alt-narrow": "₹"
            },
            IQD: {
                displayName: "ਇਰਾਕੀ ਦਿਨਾਰ",
                "displayName-count-one": "ਇਰਾਕੀ ਦਿਨਾਰ",
                "displayName-count-other": "ਇਰਾਕੀ ਦਿਨਾਰ",
                symbol: "IQD"
            },
            IRR: {
                displayName: "ਈਰਾਨੀ ਰਿਆਲ",
                "displayName-count-one": "ਈਰਾਨੀ ਰਿਆਲ",
                "displayName-count-other": "ਈਰਾਨੀ ਰਿਆਲ",
                symbol: "IRR"
            },
            ISJ: {
                displayName: "ISJ",
                symbol: "ISJ"
            },
            ISK: {
                displayName: "ਆਈਸਲੈਂਡੀ ਕਰੋਨਾ",
                "displayName-count-one": "ਆਈਸਲੈਂਡੀ ਕਰੋਨਾ",
                "displayName-count-other": "ਆਈਸਲੈਂਡੀ ਕਰੋਨਾ",
                symbol: "ISK",
                "symbol-alt-narrow": "kr"
            },
            ITL: {
                displayName: "ITL",
                symbol: "ITL"
            },
            JMD: {
                displayName: "ਜਮਾਇਕਨ ਡਾਲਰ",
                "displayName-count-one": "ਜਮਾਇਕਨ ਡਾਲਰ",
                "displayName-count-other": "ਜਮਾਇਕਨ ਡਾਲਰ",
                symbol: "JMD",
                "symbol-alt-narrow": "$"
            },
            JOD: {
                displayName: "ਜਾਰਡਨ ਦਿਨਾਰ",
                "displayName-count-one": "ਜਾਰਡਨ ਦਿਨਾਰ",
                "displayName-count-other": "ਜਾਰਡਨ ਦਿਨਾਰ",
                symbol: "JOD"
            },
            JPY: {
                displayName: "ਜਪਾਨੀ ਯੇਨ",
                "displayName-count-one": "ਜਪਾਨੀ ਯੇਨ",
                "displayName-count-other": "ਜਪਾਨੀ ਯੇਨ",
                symbol: "JP¥",
                "symbol-alt-narrow": "¥"
            },
            KES: {
                displayName: "ਕੀਨੀਆਈ ਸ਼ਿਲਿੰਗ",
                "displayName-count-one": "ਕੀਨੀਆਈ ਸ਼ਿਲਿੰਗ",
                "displayName-count-other": "ਕੀਨੀਆਈ ਸ਼ਿਲਿੰਗ",
                symbol: "KES"
            },
            KGS: {
                displayName: "ਕਿਰਗਿਸਤਾਨੀ ਸੋਮ",
                "displayName-count-one": "ਕਿਰਗਿਸਤਾਨੀ ਸੋਮ",
                "displayName-count-other": "ਕਿਰਗਿਸਤਾਨੀ ਸੋਮ",
                symbol: "KGS"
            },
            KHR: {
                displayName: "ਕੰਬੋਡੀਆਈ ਰੀਅਲ",
                "displayName-count-one": "ਕੰਬੋਡੀਆਈ ਰੀਅਲ",
                "displayName-count-other": "ਕੰਬੋਡੀਆਈ ਰੀਅਲ",
                symbol: "KHR",
                "symbol-alt-narrow": "៛"
            },
            KMF: {
                displayName: "ਕੋਮੋਰੀਅਨ ਫ੍ਰੈਂਕ",
                "displayName-count-one": "ਕੋਮੋਰੀਅਨ ਫ੍ਰੈਂਕ",
                "displayName-count-other": "ਕੋਮੋਰੀਅਨ ਫ੍ਰੈਂਕ",
                symbol: "KMF",
                "symbol-alt-narrow": "CF"
            },
            KPW: {
                displayName: "ਉੱਤਰੀ ਕੋਰੀਆਈ ਵੋਨ",
                "displayName-count-one": "ਉੱਤਰੀ ਕੋਰੀਆਈ ਵੋਨ",
                "displayName-count-other": "ਉੱਤਰੀ ਕੋਰੀਆਈ ਵੋਨ",
                symbol: "KPW",
                "symbol-alt-narrow": "₩"
            },
            KRH: {
                displayName: "KRH",
                symbol: "KRH"
            },
            KRO: {
                displayName: "KRO",
                symbol: "KRO"
            },
            KRW: {
                displayName: "ਦੱਖਣੀ ਕੋਰੀਆਈ ਵੋਨ",
                "displayName-count-one": "ਦੱਖਣੀ ਕੋਰੀਆਈ ਵੋਨ",
                "displayName-count-other": "ਦੱਖਣੀ ਕੋਰੀਆਈ ਵੋਨ",
                symbol: "₩",
                "symbol-alt-narrow": "₩"
            },
            KWD: {
                displayName: "ਕੁਵੈਤੀ ਦਿਨਾਰ",
                "displayName-count-one": "ਕੁਵੈਤੀ ਦਿਨਾਰ",
                "displayName-count-other": "ਕੁਵੈਤੀ ਦਿਨਾਰ",
                symbol: "KWD"
            },
            KYD: {
                displayName: "ਕੇਮੈਨ ਆਈਲੈਂਡਸ ਡਾਲਰ",
                "displayName-count-one": "ਕੇਮੈਨ ਆਈਲੈਂਡਸ ਡਾਲਰ",
                "displayName-count-other": "ਕੇਮੈਨ ਆਈਲੈਂਡਸ ਡਾਲਰ",
                symbol: "KYD",
                "symbol-alt-narrow": "$"
            },
            KZT: {
                displayName: "ਕਜ਼ਾਖਸਤਾਨੀ ਤੇਂਗੇ",
                "displayName-count-one": "ਕਜ਼ਾਖਸਤਾਨੀ ਤੇਂਗੇ",
                "displayName-count-other": "ਕਜ਼ਾਖਸਤਾਨੀ ਤੇਂਗੇ",
                symbol: "KZT",
                "symbol-alt-narrow": "₸"
            },
            LAK: {
                displayName: "ਲਾਓਟਿਆਈ ਕਿਪ",
                "displayName-count-one": "ਲਾਓਟਿਆਈ ਕਿਪ",
                "displayName-count-other": "ਲਾਓਟਿਆਈ ਕਿਪ",
                symbol: "LAK",
                "symbol-alt-narrow": "₭"
            },
            LBP: {
                displayName: "ਲੈਬਨਾਨੀ ਪੌਂਡ",
                "displayName-count-one": "ਲੈਬਨਾਨੀ ਪੌਂਡ",
                "displayName-count-other": "ਲੈਬਨਾਨੀ ਪੌਂਡ",
                symbol: "LBP",
                "symbol-alt-narrow": "L£"
            },
            LKR: {
                displayName: "ਸ੍ਰੀਲੰਕਾਈ ਰੁਪਇਆ",
                "displayName-count-one": "ਸ੍ਰੀਲੰਕਾਈ ਰੁਪਇਆ",
                "displayName-count-other": "ਸ੍ਰੀਲੰਕਾਈ ਰੁਪਏ",
                symbol: "LKR",
                "symbol-alt-narrow": "Rs"
            },
            LRD: {
                displayName: "ਲਾਈਬੀਰੀਆਈ ਡਾਲਰ",
                "displayName-count-one": "ਲਾਈਬੀਰੀਆਈ ਡਾਲਰ",
                "displayName-count-other": "ਲਾਈਬੀਰੀਆਈ ਡਾਲਰ",
                symbol: "LRD",
                "symbol-alt-narrow": "$"
            },
            LSL: {
                displayName: "ਲੇਸੋਥੋ ਲੋਟੀ",
                "displayName-count-one": "ਲੇਸੋਥੋ ਲੋਟੀ",
                "displayName-count-other": "ਲੇਸੋਥੋ ਲੋਟੀ",
                symbol: "LSL"
            },
            LTL: {
                displayName: "ਲਿਥੁਆਨੀਆਈ ਲਿਤਾਸ",
                "displayName-count-one": "ਲਿਥੁਆਨੀਆਈ ਲਿਤਾਸ",
                "displayName-count-other": "ਲਿਥੁਆਨੀਆਈ ਲਿਤਾਸ",
                symbol: "LTL",
                "symbol-alt-narrow": "Lt"
            },
            LTT: {
                displayName: "LTT",
                symbol: "LTT"
            },
            LUC: {
                displayName: "LUC",
                symbol: "LUC"
            },
            LUF: {
                displayName: "LUF",
                symbol: "LUF"
            },
            LUL: {
                displayName: "LUL",
                symbol: "LUL"
            },
            LVL: {
                displayName: "ਲਾਟਵਿਆਈ ਲਾਟਸ",
                "displayName-count-one": "ਲਾਟਵਿਆਈ ਲਾਟਸ",
                "displayName-count-other": "ਲਾਟਵਿਆਈ ਲਾਟਸ",
                symbol: "LVL",
                "symbol-alt-narrow": "Ls"
            },
            LVR: {
                displayName: "LVR",
                symbol: "LVR"
            },
            LYD: {
                displayName: "ਲੀਬੀਆਈ ਦਿਨਾਰ",
                "displayName-count-one": "ਲੀਬੀਆਈ ਦਿਨਾਰ",
                "displayName-count-other": "ਲੀਬੀਆਈ ਦਿਨਾਰ",
                symbol: "LYD"
            },
            MAD: {
                displayName: "ਮੋਰੱਕਨ ਦਿਰਹਾਮ",
                "displayName-count-one": "ਮੋਰੱਕਨ ਦਿਰਹਾਮ",
                "displayName-count-other": "ਮੋਰੱਕਨ ਦਿਰਹਾਮ",
                symbol: "MAD"
            },
            MAF: {
                displayName: "MAF",
                symbol: "MAF"
            },
            MCF: {
                displayName: "MCF",
                symbol: "MCF"
            },
            MDC: {
                displayName: "MDC",
                symbol: "MDC"
            },
            MDL: {
                displayName: "ਮੋਲਡੋਵਨ ਲੇਉ",
                "displayName-count-one": "ਮੋਲਡੋਵਨ ਲੇਉ",
                "displayName-count-other": "ਮੋਲਡੋਵਨ ਲੇਉ",
                symbol: "MDL"
            },
            MGA: {
                displayName: "ਮਾਲਾਗਾਸੀ ਅਰਾਇਰੀ",
                "displayName-count-one": "ਮਾਲਾਗਾਸੀ ਅਰਾਇਰੀ",
                "displayName-count-other": "ਮਾਲਾਗਾਸੀ ਅਰਾਇਰੀ",
                symbol: "MGA",
                "symbol-alt-narrow": "Ar"
            },
            MGF: {
                displayName: "MGF",
                symbol: "MGF"
            },
            MKD: {
                displayName: "ਮੈਕਡੋਨੀਆਈ ਡੇਨਾਰ",
                "displayName-count-one": "ਮੈਕਡੋਨੀਆਈ ਡੇਨਾਰ",
                "displayName-count-other": "ਮੈਕਡੋਨੀਆਈ ਡੇਨਾਰ",
                symbol: "MKD"
            },
            MKN: {
                displayName: "MKN",
                symbol: "MKN"
            },
            MLF: {
                displayName: "MLF",
                symbol: "MLF"
            },
            MMK: {
                displayName: "ਮਿਆਂਮਾਰ ਕਿਆਤ",
                "displayName-count-one": "ਮਿਆਂਮਾਰ ਕਿਆਤ",
                "displayName-count-other": "ਮਿਆਂਮਾਰ ਕਿਆਤ",
                symbol: "MMK",
                "symbol-alt-narrow": "K"
            },
            MNT: {
                displayName: "ਮੰਗੋਲੀਆਈ ਤੁਗਰਿਕ",
                "displayName-count-one": "ਮੰਗੋਲੀਆਈ ਤੁਗਰਿਕ",
                "displayName-count-other": "ਮੰਗੋਲੀਆਈ ਤੁਗਰਿਕ",
                symbol: "MNT",
                "symbol-alt-narrow": "₮"
            },
            MOP: {
                displayName: "ਮੇਕਾਨੀ ਪਟਾਕਾ",
                "displayName-count-one": "ਮੇਕਾਨੀ ਪਟਾਕਾ",
                "displayName-count-other": "ਮੇਕਾਨੀ ਪਟਾਕਾ",
                symbol: "MOP"
            },
            MRO: {
                displayName: "ਮੋਰਿਟਾਨੀਆਈ ਊਗੀਆ (1973–2017)",
                "displayName-count-one": "ਮੋਰਿਟਾਨੀਆਈ ਊਗੀਆ (1973–2017)",
                "displayName-count-other": "ਮੋਰਿਟਾਨੀਆਈ ਊਗੀਆ (1973–2017)",
                symbol: "MRO"
            },
            MRU: {
                displayName: "ਮੋਰਿਟਾਨੀਆਈ ਊਗੀਆ",
                "displayName-count-one": "ਮੋਰਿਟਾਨੀਆਈ ਊਗੀਆ",
                "displayName-count-other": "ਮੋਰਿਟਾਨੀਆਈ ਊਗੀਆ",
                symbol: "MRU"
            },
            MTL: {
                displayName: "MTL",
                symbol: "MTL"
            },
            MTP: {
                displayName: "MTP",
                symbol: "MTP"
            },
            MUR: {
                displayName: "ਮੌਰਿਸ਼ੀਆਈ ਰੁਪਇਆ",
                "displayName-count-one": "ਮੌਰਿਸ਼ੀਆਈ ਰੁਪਇਆ",
                "displayName-count-other": "ਮੌਰਿਸ਼ੀਆਈ ਰੁਪਏ",
                symbol: "MUR",
                "symbol-alt-narrow": "Rs"
            },
            MVP: {
                displayName: "MVP",
                symbol: "MVP"
            },
            MVR: {
                displayName: "ਮਾਲਦੀਵੀ ਰੁਫੀਆ",
                "displayName-count-one": "ਮਾਲਦੀਵੀ ਰੁਫੀਆ",
                "displayName-count-other": "ਮਾਲਦੀਵੀ ਰੁਫੀਆ",
                symbol: "MVR"
            },
            MWK: {
                displayName: "ਮਾਲਾਵੀਆਈ ਕਵਾਚਾ",
                "displayName-count-one": "ਮਾਲਾਵੀਆਈ ਕਵਾਚਾ",
                "displayName-count-other": "ਮਾਲਾਵੀਆਈ ਕਵਾਚਾ",
                symbol: "MWK"
            },
            MXN: {
                displayName: "ਮੈਕਸੀਕਨ ਪੇਸੋ",
                "displayName-count-one": "ਮੈਕਸੀਕਨ ਪੇਸੋ",
                "displayName-count-other": "ਮੈਕਸੀਕਨ ਪੇਸੋ",
                symbol: "MX$",
                "symbol-alt-narrow": "$"
            },
            MXP: {
                displayName: "MXP",
                symbol: "MXP"
            },
            MXV: {
                displayName: "MXV",
                symbol: "MXV"
            },
            MYR: {
                displayName: "ਮਲੇਸ਼ੀਆਈ ਰਿੰਗਿਟ",
                "displayName-count-one": "ਮਲੇਸ਼ੀਆਈ ਰਿੰਗਿਟ",
                "displayName-count-other": "ਮਲੇਸ਼ੀਆਈ ਰਿੰਗਿਟ",
                symbol: "MYR",
                "symbol-alt-narrow": "RM"
            },
            MZE: {
                displayName: "MZE",
                symbol: "MZE"
            },
            MZM: {
                displayName: "MZM",
                symbol: "MZM"
            },
            MZN: {
                displayName: "ਮੋਜ਼ਾਮਬੀਕਨ ਮੈਟੀਕਲ",
                "displayName-count-one": "ਮੋਜ਼ਾਮਬੀਕਨ ਮੈਟੀਕਲ",
                "displayName-count-other": "ਮੋਜ਼ਾਮਬੀਕਨ ਮੈਟੀਕਲ",
                symbol: "MZN"
            },
            NAD: {
                displayName: "ਨਾਮੀਬੀਆਈ ਡਾਲਰ",
                "displayName-count-one": "ਨਾਮੀਬੀਆਈ ਡਾਲਰ",
                "displayName-count-other": "ਨਾਮੀਬੀਆਈ ਡਾਲਰ",
                symbol: "NAD",
                "symbol-alt-narrow": "$"
            },
            NGN: {
                displayName: "ਨਾਇਜੀਰੀਆਈ ਨਾਇਰਾ",
                "displayName-count-one": "ਨਾਇਜੀਰੀਆਈ ਨਾਇਰਾ",
                "displayName-count-other": "ਨਾਇਜੀਰੀਆਈ ਨਾਇਰਾ",
                symbol: "NGN",
                "symbol-alt-narrow": "₦"
            },
            NIC: {
                displayName: "NIC",
                symbol: "NIC"
            },
            NIO: {
                displayName: "ਨਿਕਾਰਾਗੁਆਈ ਕੋਰਡੋਬਾ",
                "displayName-count-one": "ਨਿਕਾਰਾਗੁਆਈ ਕੋਰਡੋਬਾ",
                "displayName-count-other": "ਨਿਕਾਰਾਗੁਆਈ ਕੋਰਡੋਬਾ",
                symbol: "NIO",
                "symbol-alt-narrow": "C$"
            },
            NLG: {
                displayName: "NLG",
                symbol: "NLG"
            },
            NOK: {
                displayName: "ਨਾਰਵੇਜੀਆਈ ਕਰੌਨ",
                "displayName-count-one": "ਨਾਰਵੇਜੀਆਈ ਕਰੌਨ",
                "displayName-count-other": "ਨਾਰਵੇਜੀਆਈ ਕਰੌਨ",
                symbol: "NOK",
                "symbol-alt-narrow": "kr"
            },
            NPR: {
                displayName: "ਨੇਪਾਲੀ ਰੁਪਇਆ",
                "displayName-count-one": "ਨੇਪਾਲੀ ਰੁਪਇਆ",
                "displayName-count-other": "ਨੇਪਾਲੀ ਰੁਪਏ",
                symbol: "NPR",
                "symbol-alt-narrow": "Rs"
            },
            NZD: {
                displayName: "ਨਿਊਜ਼ੀਲੈਂਡ ਡਾਲਰ",
                "displayName-count-one": "ਨਿਊਜ਼ੀਲੈਂਡ ਡਾਲਰ",
                "displayName-count-other": "ਨਿਊਜ਼ੀਲੈਂਡ ਡਾਲਰ",
                symbol: "NZ$",
                "symbol-alt-narrow": "$"
            },
            OMR: {
                displayName: "ਓਮਾਨੀ ਰਿਆਲ",
                "displayName-count-one": "ਓਮਾਨੀ ਰਿਆਲ",
                "displayName-count-other": "ਓਮਾਨੀ ਰਿਆਲ",
                symbol: "OMR"
            },
            PAB: {
                displayName: "ਪਨਾਮੇਨੀਅਨ ਬਾਲਬੋਆ",
                "displayName-count-one": "ਪਨਾਮੇਨੀਅਨ ਬਾਲਬੋਆ",
                "displayName-count-other": "ਪਨਾਮੇਨੀਅਨ ਬਾਲਬੋਆ",
                symbol: "PAB"
            },
            PEI: {
                displayName: "PEI",
                symbol: "PEI"
            },
            PEN: {
                displayName: "ਪੇਰੂਵੀਅਨ ਸੋਲ",
                "displayName-count-one": "ਪੇਰੂਵੀਅਨ ਸੋਲ",
                "displayName-count-other": "ਪੇਰੂਵੀਅਨ ਸੋਲ",
                symbol: "PEN"
            },
            PES: {
                displayName: "PES",
                symbol: "PES"
            },
            PGK: {
                displayName: "ਪਾਪੂਆ ਨਿਊ ਗਿਨੀਆਈ ਕੀਨਾ",
                "displayName-count-one": "ਪਾਪੂਆ ਨਿਊ ਗਿਨੀਆਈ ਕੀਨਾ",
                "displayName-count-other": "ਪਾਪੂਆ ਨਿਊ ਗਿਨੀਆਈ ਕੀਨਾ",
                symbol: "PGK"
            },
            PHP: {
                displayName: "ਫਿਲਿਪੀਨੀ ਪੇਸੋ",
                "displayName-count-one": "ਫਿਲਿਪੀਨੀ ਪੇਸੋ",
                "displayName-count-other": "ਫਿਲਿਪੀਨੀ ਪੇਸੋ",
                symbol: "PHP",
                "symbol-alt-narrow": "₱"
            },
            PKR: {
                displayName: "ਪਾਕਿਸਤਾਨੀ ਰੁਪਇਆ",
                "displayName-count-one": "ਪਾਕਿਸਤਾਨੀ ਰੁਪਇਆ",
                "displayName-count-other": "ਪਾਕਿਸਤਾਨੀ ਰੁਪਏ",
                symbol: "PKR",
                "symbol-alt-narrow": "Rs"
            },
            PLN: {
                displayName: "ਪੋਲੈਂਡੀ ਜ਼ਲੌਟੀ",
                "displayName-count-one": "ਪੋਲੈਂਡੀ ਜ਼ਲੌਟੀ",
                "displayName-count-other": "ਪੋਲੈਂਡੀ ਜ਼ਲੌਟੀ",
                symbol: "PLN",
                "symbol-alt-narrow": "zł"
            },
            PLZ: {
                displayName: "PLZ",
                symbol: "PLZ"
            },
            PTE: {
                displayName: "PTE",
                symbol: "PTE"
            },
            PYG: {
                displayName: "ਪੈਰਾਗੁਵਾਇਨ ਗੁਆਰਾਨੀ",
                "displayName-count-one": "ਪੈਰਾਗੁਵਾਇਨ ਗੁਆਰਾਨੀ",
                "displayName-count-other": "ਪੈਰਾਗੁਵਾਇਨ ਗੁਆਰਾਨੀ",
                symbol: "PYG",
                "symbol-alt-narrow": "₲"
            },
            QAR: {
                displayName: "ਕਤਰੀ ਰਿਆਲ",
                "displayName-count-one": "ਕਤਰੀ ਰਿਆਲ",
                "displayName-count-other": "ਕਤਰੀ ਰਿਆਲ",
                symbol: "QAR"
            },
            RHD: {
                displayName: "RHD",
                symbol: "RHD"
            },
            ROL: {
                displayName: "ROL",
                symbol: "ROL"
            },
            RON: {
                displayName: "ਰੋਮਾਨੀਆਈ ਲੇਉ",
                "displayName-count-one": "ਰੋਮਾਨੀਆਈ ਲੇਉ",
                "displayName-count-other": "ਰੋਮਾਨੀਆਈ ਲੇਉ",
                symbol: "RON",
                "symbol-alt-narrow": "lei"
            },
            RSD: {
                displayName: "ਸਰਬੀਆਈ ਦਿਨਾਰ",
                "displayName-count-one": "ਸਰਬੀਆਈ ਦਿਨਾਰ",
                "displayName-count-other": "ਸਰਬੀਆਈ ਦਿਨਾਰ",
                symbol: "RSD"
            },
            RUB: {
                displayName: "ਰੂਸੀ ਰੂਬਲ",
                "displayName-count-one": "ਰੂਸੀ ਰੂਬਲ",
                "displayName-count-other": "ਰੂਸੀ ਰੂਬਲ",
                symbol: "RUB",
                "symbol-alt-narrow": "₽"
            },
            RUR: {
                displayName: "RUR",
                symbol: "RUR"
            },
            RWF: {
                displayName: "ਰਵਾਂਡਨ ਫ੍ਰੈਂਕ",
                "displayName-count-one": "ਰਵਾਂਡਨ ਫ੍ਰੈਂਕ",
                "displayName-count-other": "ਰਵਾਂਡਨ ਫ੍ਰੈਂਕ",
                symbol: "RWF",
                "symbol-alt-narrow": "RF"
            },
            SAR: {
                displayName: "ਸਾਊਦੀ ਰਿਆਲ",
                "displayName-count-one": "ਸਾਊਦੀ ਰਿਆਲ",
                "displayName-count-other": "ਸਾਊਦੀ ਰਿਆਲ",
                symbol: "SAR"
            },
            SBD: {
                displayName: "ਸੋਲੋਮਨ ਆਈਲੈਂਡਸ ਡਾਲਰ",
                "displayName-count-one": "ਸੋਲੋਮਨ ਆਈਲੈਂਡਸ ਡਾਲਰ",
                "displayName-count-other": "ਸੋਲੋਮਨ ਆਈਲੈਂਡਸ ਡਾਲਰ",
                symbol: "SBD",
                "symbol-alt-narrow": "$"
            },
            SCR: {
                displayName: "ਸੇਸ਼ਲਸ ਰੁਪਇਆ",
                "displayName-count-one": "ਸੇਸ਼ਲਸ ਰੁਪਇਆ",
                "displayName-count-other": "ਸੇਸ਼ਲਸ ਰੁਪਏ",
                symbol: "SCR"
            },
            SDD: {
                displayName: "SDD",
                symbol: "SDD"
            },
            SDG: {
                displayName: "ਸੂਡਾਨੀ ਪੌਂਡ",
                "displayName-count-one": "ਸੂਡਾਨੀ ਪੌਂਡ",
                "displayName-count-other": "ਸੂਡਾਨੀ ਪੌਂਡ",
                symbol: "SDG"
            },
            SDP: {
                displayName: "SDP",
                symbol: "SDP"
            },
            SEK: {
                displayName: "ਸਵੀਡਿਸ਼ ਕਰੋਨਾ",
                "displayName-count-one": "ਸਵੀਡਿਸ਼ ਕਰੋਨਾ",
                "displayName-count-other": "ਸਵੀਡਿਸ਼ ਕਰੋਨਾ",
                symbol: "SEK",
                "symbol-alt-narrow": "kr"
            },
            SGD: {
                displayName: "ਸਿੰਗਾਪੁਰ ਡਾਲਰ",
                "displayName-count-one": "ਸਿੰਗਾਪੁਰ ਡਾਲਰ",
                "displayName-count-other": "ਸਿੰਗਾਪੁਰ ਡਾਲਰ",
                symbol: "SGD",
                "symbol-alt-narrow": "$"
            },
            SHP: {
                displayName: "ਸੇਂਟ ਹੇਲੇਨਾ ਪੌਂਡ",
                "displayName-count-one": "ਸੇਂਟ ਹੇਲੇਨਾ ਪੌਂਡ",
                "displayName-count-other": "ਸੇਂਟ ਹੇਲੇਨਾ ਪੌਂਡ",
                symbol: "SHP",
                "symbol-alt-narrow": "£"
            },
            SIT: {
                displayName: "SIT",
                symbol: "SIT"
            },
            SKK: {
                displayName: "SKK",
                symbol: "SKK"
            },
            SLE: {
                displayName: "SLE",
                symbol: "SLE"
            },
            SLL: {
                displayName: "ਸਿਏਰਾ ਲਿਓਨੀਅਨ ਲਿਓਨ",
                "displayName-count-one": "ਸਿਏਰਾ ਲਿਓਨੀਅਨ ਲਿਓਨ",
                "displayName-count-other": "ਸਿਏਰਾ ਲਿਓਨੀਅਨ ਲਿਓਨ",
                symbol: "SLL"
            },
            SOS: {
                displayName: "ਸੋਮਾਲੀ ਸ਼ਿਲਿੰਗ",
                "displayName-count-one": "ਸੋਮਾਲੀ ਸ਼ਿਲਿੰਗ",
                "displayName-count-other": "ਸੋਮਾਲੀ ਸ਼ਿਲਿੰਗ",
                symbol: "SOS"
            },
            SRD: {
                displayName: "ਸੂਰੀਨਾਮੀ ਡਾਲਰ",
                "displayName-count-one": "ਸੂਰੀਨਾਮੀ ਡਾਲਰ",
                "displayName-count-other": "ਸੂਰੀਨਾਮੀ ਡਾਲਰ",
                symbol: "SRD",
                "symbol-alt-narrow": "$"
            },
            SRG: {
                displayName: "SRG",
                symbol: "SRG"
            },
            SSP: {
                displayName: "ਦੱਖਣੀ ਸੂਡਾਨੀ ਪੌਂਡ",
                "displayName-count-one": "ਦੱਖਣੀ ਸੂਡਾਨੀ ਪੌਂਡ",
                "displayName-count-other": "ਦੱਖਣੀ ਸੂਡਾਨੀ ਪੌਂਡ",
                symbol: "SSP",
                "symbol-alt-narrow": "£"
            },
            STD: {
                displayName: "ਸਾਉ ਟੋਮੀ ਐਂਡ ਪ੍ਰਿੰਸਪੀ ਡੋਬਰਾ (1977–2017)",
                "displayName-count-one": "ਸਾਉ ਟੋਮੀ ਐਂਡ ਪ੍ਰਿੰਸਪੀ ਡੋਬਰਾ (1977–2017)",
                "displayName-count-other": "ਸਾਉ ਟੋਮੀ ਐਂਡ ਪ੍ਰਿੰਸਪੀ ਡੋਬਰਾ (1977–2017)",
                symbol: "STD"
            },
            STN: {
                displayName: "ਸਾਉ ਟੋਮੀ ਐਂਡ ਪ੍ਰਿੰਸਪੀ ਡੋਬਰਾ",
                "displayName-count-one": "ਸਾਉ ਟੋਮੀ ਐਂਡ ਪ੍ਰਿੰਸਪੀ ਡੋਬਰਾ",
                "displayName-count-other": "ਸਾਉ ਟੋਮੀ ਐਂਡ ਪ੍ਰਿੰਸਪੀ ਡੋਬਰਾ",
                symbol: "STN",
                "symbol-alt-narrow": "Db"
            },
            SUR: {
                displayName: "ਸੋਵੀਅਤ ਰੂਬਲ",
                "displayName-count-one": "ਸੋਵੀਅਤ ਰੂਬਲ",
                "displayName-count-other": "ਸੋਵੀਅਤ ਰੂਬਲ",
                symbol: "SUR"
            },
            SVC: {
                displayName: "SVC",
                symbol: "SVC"
            },
            SYP: {
                displayName: "ਸੀਰੀਆਈ ਪੌਂਡ",
                "displayName-count-one": "ਸੀਰੀਆਈ ਪੌਂਡ",
                "displayName-count-other": "ਸੀਰੀਆਈ ਪੌਂਡ",
                symbol: "SYP",
                "symbol-alt-narrow": "£"
            },
            SZL: {
                displayName: "ਸਵਾਜ਼ੀ ਲਾਇਲੈਂਗਨੀ",
                "displayName-count-one": "ਸਵਾਜ਼ੀ ਲਾਇਲੈਂਗਨੀ",
                "displayName-count-other": "ਸਵਾਜ਼ੀ ਲਾਇਲੈਂਗਨੀ",
                symbol: "SZL"
            },
            THB: {
                displayName: "ਥਾਈ ਬਾਹਤ",
                "displayName-count-one": "ਥਾਈ ਬਾਹਤ",
                "displayName-count-other": "ਥਾਈ ਬਾਹਤ",
                symbol: "฿",
                "symbol-alt-narrow": "฿"
            },
            TJR: {
                displayName: "TJR",
                symbol: "TJR"
            },
            TJS: {
                displayName: "ਤਾਜਿਕਿਸਤਾਨੀ ਸੋਮੋਨੀ",
                "displayName-count-one": "ਤਾਜਿਕਿਸਤਾਨੀ ਸੋਮੋਨੀ",
                "displayName-count-other": "ਤਾਜਿਕਿਸਤਾਨੀ ਸੋਮੋਨੀ",
                symbol: "TJS"
            },
            TMM: {
                displayName: "TMM",
                symbol: "TMM"
            },
            TMT: {
                displayName: "ਤੁਰਕਮੇਨਿਸਤਾਨੀ ਮਾਨਤ",
                "displayName-count-one": "ਤੁਰਕਮੇਨਿਸਤਾਨੀ ਮਾਨਤ",
                "displayName-count-other": "ਤੁਰਕਮੇਨਿਸਤਾਨੀ ਮਾਨਤ",
                symbol: "TMT"
            },
            TND: {
                displayName: "ਟਿਉਨੀਸ਼ੀਆਈ ਦਿਨਾਰ",
                "displayName-count-one": "ਟਿਉਨੀਸ਼ੀਆਈ ਦਿਨਾਰ",
                "displayName-count-other": "ਟਿਉਨੀਸ਼ੀਆਈ ਦਿਨਾਰ",
                symbol: "TND"
            },
            TOP: {
                displayName: "ਟੌਂਗਨ ਪੈਂਗਾ",
                "displayName-count-one": "ਟੌਂਗਨ ਪੈਂਗਾ",
                "displayName-count-other": "ਟੌਂਗਨ ਪੈਂਗਾ",
                symbol: "TOP",
                "symbol-alt-narrow": "T$"
            },
            TPE: {
                displayName: "TPE",
                symbol: "TPE"
            },
            TRL: {
                displayName: "TRL",
                symbol: "TRL"
            },
            TRY: {
                displayName: "ਤੁਰਕੀ ਲੀਰਾ",
                "displayName-count-one": "ਤੁਰਕੀ ਲੀਰਾ",
                "displayName-count-other": "ਤੁਰਕੀ ਲੀਰਾ",
                symbol: "TRY",
                "symbol-alt-narrow": "₺",
                "symbol-alt-variant": "TL"
            },
            TTD: {
                displayName: "ਟ੍ਰਿਨੀਡਾਡ ਅਤੇ ਟੋਬਾਗੋ ਡਾਲਰ",
                "displayName-count-one": "ਟ੍ਰਿਨੀਡਾਡ ਅਤੇ ਟੋਬਾਗੋ ਡਾਲਰ",
                "displayName-count-other": "ਟ੍ਰਿਨੀਡਾਡ ਅਤੇ ਟੋਬਾਗੋ ਡਾਲਰ",
                symbol: "TTD",
                "symbol-alt-narrow": "$"
            },
            TWD: {
                displayName: "ਨਵਾਂ ਤਾਇਵਾਨ ਡਾਲਰ",
                "displayName-count-one": "ਨਵਾਂ ਤਾਇਵਾਨ ਡਾਲਰ",
                "displayName-count-other": "ਨਵਾਂ ਤਾਇਵਾਨ ਡਾਲਰ",
                symbol: "NT$",
                "symbol-alt-narrow": "NT$"
            },
            TZS: {
                displayName: "ਤਨਜ਼ਾਨੀਆਈ ਸ਼ਿਲਿੰਗ",
                "displayName-count-one": "ਤਨਜ਼ਾਨੀਆਈ ਸ਼ਿਲਿੰਗ",
                "displayName-count-other": "ਤਨਜ਼ਾਨੀਆਈ ਸ਼ਿਲਿੰਗ",
                symbol: "TZS"
            },
            UAH: {
                displayName: "ਯੂਕਰੇਨੀਆਈ ਰਿਵਨਿਆ",
                "displayName-count-one": "ਯੂਕਰੇਨੀਆਈ ਰਿਵਨਿਆ",
                "displayName-count-other": "ਯੂਕਰੇਨੀਆਈ ਰਿਵਨਿਆ",
                symbol: "UAH",
                "symbol-alt-narrow": "₴"
            },
            UAK: {
                displayName: "UAK",
                symbol: "UAK"
            },
            UGS: {
                displayName: "UGS",
                symbol: "UGS"
            },
            UGX: {
                displayName: "ਯੂਗਾਂਡੀਆਈ ਸ਼ਿਲਿੰਗ",
                "displayName-count-one": "ਯੂਗਾਂਡੀਆਈ ਸ਼ਿਲਿੰਗ",
                "displayName-count-other": "ਯੂਗਾਂਡੀਆਈ ਸ਼ਿਲਿੰਗ",
                symbol: "UGX"
            },
            USD: {
                displayName: "ਯੂ.ਐਸ. ਡਾਲਰ",
                "displayName-count-one": "ਯੂ.ਐਸ. ਡਾਲਰ",
                "displayName-count-other": "ਯੂ.ਐਸ. ਡਾਲਰ",
                symbol: "US$",
                "symbol-alt-narrow": "$"
            },
            USN: {
                displayName: "USN",
                symbol: "USN"
            },
            USS: {
                displayName: "USS",
                symbol: "USS"
            },
            UYI: {
                displayName: "UYI",
                symbol: "UYI"
            },
            UYP: {
                displayName: "ਉਰੂਗੁਵਾਇਨ ਪੇਸੋ (1975–1993)",
                "displayName-count-one": "ਉਰੂਗੁਵਾਇਨ ਪੇਸੋ (1975–1993)",
                "displayName-count-other": "ਉਰੂਗੁਵਾਇਨ ਪੇਸੋ (1975–1993)",
                symbol: "UYP"
            },
            UYU: {
                displayName: "ਉਰੂਗੁਵਾਇਨ ਪੇਸੋ",
                "displayName-count-one": "ਉਰੂਗੁਵਾਇਨ ਪੇਸੋ",
                "displayName-count-other": "ਉਰੂਗੁਵਾਇਨ ਪੇਸੋ",
                symbol: "UYU",
                "symbol-alt-narrow": "$"
            },
            UYW: {
                displayName: "UYW",
                symbol: "UYW"
            },
            UZS: {
                displayName: "ਉਜ਼ਬੇਕਿਸਤਾਨ ਸੋਮ",
                "displayName-count-one": "ਉਜ਼ਬੇਕਿਸਤਾਨ ਸੋਮ",
                "displayName-count-other": "ਉਜ਼ਬੇਕਿਸਤਾਨ ਸੋਮ",
                symbol: "UZS"
            },
            VEB: {
                displayName: "ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ (1871–2008)",
                "displayName-count-one": "ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ (1871–2008)",
                "displayName-count-other": "ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ (1871–2008)",
                symbol: "VEB"
            },
            VED: {
                displayName: "VED",
                symbol: "VED"
            },
            VEF: {
                displayName: "ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ (2008–2018)",
                "displayName-count-one": "ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ (2008–2018)",
                "displayName-count-other": "ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ (2008–2018)",
                symbol: "VEF",
                "symbol-alt-narrow": "Bs"
            },
            VES: {
                displayName: "ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ",
                "displayName-count-one": "ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ",
                "displayName-count-other": "ਵੇਨੇਜ਼ੂਏਲਨ ਬੋਲੀਵਰ",
                symbol: "VES"
            },
            VND: {
                displayName: "ਵੀਅਤਨਾਮੀ ਡੋਂਗ",
                "displayName-count-one": "ਵੀਅਤਨਾਮੀ ਡੋਂਗ",
                "displayName-count-other": "ਵੀਅਤਨਾਮੀ ਡੋਂਗ",
                symbol: "₫",
                "symbol-alt-narrow": "₫"
            },
            VNN: {
                displayName: "ਵੀਅਤਨਾਮੀ ਡੋਂਗ (1978–1985)",
                "displayName-count-one": "ਵੀਅਤਨਾਮੀ ਡੋਂਗ (1978–1985)",
                "displayName-count-other": "ਵੀਅਤਨਾਮੀ ਡੋਂਗ (1978–1985)",
                symbol: "VNN"
            },
            VUV: {
                displayName: "ਵਾਨੂਆਟੂ ਵਾਟੂ",
                "displayName-count-one": "ਵਾਨੂਆਟੂ ਵਾਟੂ",
                "displayName-count-other": "ਵਾਨੂਆਟੂ ਵਾਟੂ",
                symbol: "VUV"
            },
            WST: {
                displayName: "ਸਾਮੋਆਈ ਤਾਲਾ",
                "displayName-count-one": "ਸਾਮੋਆਈ ਤਾਲਾ",
                "displayName-count-other": "ਸਾਮੋਆਈ ਤਾਲਾ",
                symbol: "WST"
            },
            XAF: {
                displayName: "ਕੇਂਦਰੀ ਅਫ਼ਰੀਕੀ [CFA] ਫ੍ਰੈਂਕ",
                "displayName-count-one": "ਕੇਂਦਰੀ ਅਫ਼ਰੀਕੀ [CFA] ਫ੍ਰੈਂਕ",
                "displayName-count-other": "ਕੇਂਦਰੀ ਅਫ਼ਰੀਕੀ [CFA] ਫ੍ਰੈਂਕ",
                symbol: "FCFA"
            },
            XAG: {
                displayName: "ਚਾਂਦੀ",
                "displayName-count-one": "ਚਾਂਦੀ ਦਾ ਟਰੌਏ ਔਂਸ",
                "displayName-count-other": "ਚਾਂਦੀ ਦਾ ਟਰੌਏ ਔਂਸ",
                symbol: "XAG"
            },
            XAU: {
                displayName: "ਸੋਨਾ",
                "displayName-count-one": "ਸੋਨੇ ਦਾ ਟਰੌਏ ਔਂਸ",
                "displayName-count-other": "ਸੋਨੇ ਦਾ ਟਰੌਏ ਔਂਸ",
                symbol: "XAU"
            },
            XBA: {
                displayName: "XBA",
                symbol: "XBA"
            },
            XBB: {
                displayName: "ਯੂਰਪੀ ਵਿੱਤੀ ਇਕਾਈ",
                "displayName-count-one": "ਯੂਰਪੀ ਵਿੱਤੀ ਇਕਾਈ",
                "displayName-count-other": "ਯੂਰਪੀ ਵਿੱਤੀ ਇਕਾਈ",
                symbol: "XBB"
            },
            XBC: {
                displayName: "XBC",
                symbol: "XBC"
            },
            XBD: {
                displayName: "XBD",
                symbol: "XBD"
            },
            XCD: {
                displayName: "ਪੂਰਬੀ ਕੈਰੇਬੀਅਨ ਡਾਲਰ",
                "displayName-count-one": "ਪੂਰਬੀ ਕੈਰੇਬੀਅਨ ਡਾਲਰ",
                "displayName-count-other": "ਪੂਰਬੀ ਕੈਰੇਬੀਅਨ ਡਾਲਰ",
                symbol: "EC$",
                "symbol-alt-narrow": "$"
            },
            XDR: {
                displayName: "XDR",
                symbol: "XDR"
            },
            XEU: {
                displayName: "ਯੂਰਪੀ ਮੁਦਰਾ ਇਕਾਈ",
                "displayName-count-one": "ਯੂਰਪੀਅਨ ਮੁਦਰਾ ਇਕਾਈ",
                "displayName-count-other": "ਯੂਰਪੀ ਮੁਦਰਾ ਇਕਾਈ",
                symbol: "XEU"
            },
            XFO: {
                displayName: "XFO",
                symbol: "XFO"
            },
            XFU: {
                displayName: "XFU",
                symbol: "XFU"
            },
            XOF: {
                displayName: "ਪੱਛਮੀ ਅਫ਼ਰੀਕੀ (CFA) ਫ੍ਰੈਂਕ",
                "displayName-count-one": "ਪੱਛਮੀ ਅਫ਼ਰੀਕੀ (CFA) ਫ੍ਰੈਂਕ",
                "displayName-count-other": "ਪੱਛਮੀ ਅਫ਼ਰੀਕੀ (CFA) ਫ੍ਰੈਂਕ",
                symbol: "F CFA"
            },
            XPD: {
                displayName: "XPD",
                symbol: "XPD"
            },
            XPF: {
                displayName: "ਫ੍ਰੈਂਕ (CFP)",
                "displayName-count-one": "ਫ੍ਰੈਂਕ (CFP)",
                "displayName-count-other": "ਫ੍ਰੈਂਕ (CFP)",
                symbol: "CFPF"
            },
            XPT: {
                displayName: "XPT",
                symbol: "XPT"
            },
            XRE: {
                displayName: "XRE",
                symbol: "XRE"
            },
            XSU: {
                displayName: "XSU",
                symbol: "XSU"
            },
            XTS: {
                displayName: "XTS",
                symbol: "XTS"
            },
            XUA: {
                displayName: "XUA",
                symbol: "XUA"
            },
            XXX: {
                displayName: "ਅਗਿਆਤ ਮੁਦਰਾ",
                "displayName-count-one": "(ਮੁਦਰਾ ਦੀ ਅਗਿਆਤ ਇਕਾਈ)",
                "displayName-count-other": "(ਅਗਿਆਤ ਮੁਦਰਾ)",
                symbol: "XXX"
            },
            YDD: {
                displayName: "YDD",
                symbol: "YDD"
            },
            YER: {
                displayName: "ਯਮਨੀ ਰਿਆਲ",
                "displayName-count-one": "ਯਮਨੀ ਰਿਆਲ",
                "displayName-count-other": "ਯਮਨੀ ਰਿਆਲ",
                symbol: "YER"
            },
            YUD: {
                displayName: "YUD",
                symbol: "YUD"
            },
            YUM: {
                displayName: "YUM",
                symbol: "YUM"
            },
            YUN: {
                displayName: "YUN",
                symbol: "YUN"
            },
            YUR: {
                displayName: "YUR",
                symbol: "YUR"
            },
            ZAL: {
                displayName: "ZAL",
                symbol: "ZAL"
            },
            ZAR: {
                displayName: "ਦੱਖਣੀ ਅਫਰੀਕੀ ਰੈਂਡ",
                "displayName-count-one": "ਦੱਖਣੀ ਅਫਰੀਕੀ ਰੈਂਡ",
                "displayName-count-other": "ਦੱਖਣੀ ਅਫਰੀਕੀ ਰੈਂਡ",
                symbol: "ZAR",
                "symbol-alt-narrow": "R"
            },
            ZMK: {
                displayName: "ZMK",
                symbol: "ZMK"
            },
            ZMW: {
                displayName: "ਜ਼ਾਮਬੀਆਈ ਕਵਾਚਾ",
                "displayName-count-one": "ਜ਼ਾਮਬੀਆਈ ਕਵਾਚਾ",
                "displayName-count-other": "ਜ਼ਾਮਬੀਆਈ ਕਵਾਚਾ",
                symbol: "ZMW",
                "symbol-alt-narrow": "ZK"
            },
            ZRN: {
                displayName: "ZRN",
                symbol: "ZRN"
            },
            ZRZ: {
                displayName: "ZRZ",
                symbol: "ZRZ"
            },
            ZWD: {
                displayName: "ZWD",
                symbol: "ZWD"
            },
            ZWL: {
                displayName: "ZWL",
                symbol: "ZWL"
            },
            ZWR: {
                displayName: "ZWR",
                symbol: "ZWR"
            }
        },
        localeCurrency: "INR"
    },
    calendar: {
        patterns: {
            d: "d/M/y",
            D: "EEEE, d MMMM y",
            m: "d MMM",
            M: "MMMM d",
            y: "MMM y",
            Y: "MMMM y",
            F: "EEEE, d MMMM y h:mm:ss a",
            g: "d/M/y h:mm a",
            G: "d/M/y h:mm:ss a",
            t: "h:mm a",
            T: "h:mm:ss a",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1} {0}",
            long: "{1} {0}",
            medium: "{1}, {0}",
            short: "{1}, {0}",
            availableFormats: {
                Bh: "h B",
                Bhm: "h:mm B",
                Bhms: "h:mm:ss B",
                d: "d",
                E: "ccc",
                EBhm: "E h:mm B",
                EBhms: "E h:mm:ss B",
                Ed: "d, E",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "G y",
                GyMd: "d/M/GGGGG y",
                GyMMM: "MMM, G y",
                GyMMMd: "d MMM, G y",
                GyMMMEd: "E d MMM, G y",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d/M",
                MEd: "E, dd-MM.",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E, d MMM",
                MMMMd: "MMMM d",
                "MMMMW-count-one": "MMMM ਦਾ W ਹਫ਼ਤਾ",
                "MMMMW-count-other": "MMMM ਦਾ W ਹਫ਼ਤਾ",
                mmss: "mm:ss",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "E, d/M/y",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "E, d MMM y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y",
                "yw-count-one": "Y ਦਾ w ਹਫ਼ਤਾ",
                "yw-count-other": "Y ਦਾ w ਹਫ਼ਤਾ"
            }
        },
        timeFormats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a"
        },
        dateFormats: {
            full: "EEEE, d MMMM y",
            long: "d MMMM y",
            medium: "d MMM y",
            short: "d/M/yy"
        },
        days: {
            format: {
                abbreviated: [
                    "ਐਤ",
                    "ਸੋਮ",
                    "ਮੰਗਲ",
                    "ਬੁੱਧ",
                    "ਵੀਰ",
                    "ਸ਼ੁੱਕਰ",
                    "ਸ਼ਨਿੱਚਰ"
                ],
                narrow: [
                    "ਐ",
                    "ਸੋ",
                    "ਮੰ",
                    "ਬੁੱ",
                    "ਵੀ",
                    "ਸ਼ੁੱ",
                    "ਸ਼"
                ],
                short: [
                    "ਐਤ",
                    "ਸੋਮ",
                    "ਮੰਗ",
                    "ਬੁੱਧ",
                    "ਵੀਰ",
                    "ਸ਼ੁੱਕ",
                    "ਸ਼ਨਿੱ"
                ],
                wide: [
                    "ਐਤਵਾਰ",
                    "ਸੋਮਵਾਰ",
                    "ਮੰਗਲਵਾਰ",
                    "ਬੁੱਧਵਾਰ",
                    "ਵੀਰਵਾਰ",
                    "ਸ਼ੁੱਕਰਵਾਰ",
                    "ਸ਼ਨਿੱਚਰਵਾਰ"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ਐਤ",
                    "ਸੋਮ",
                    "ਮੰਗਲ",
                    "ਬੁੱਧ",
                    "ਵੀਰ",
                    "ਸ਼ੁੱਕਰ",
                    "ਸ਼ਨਿੱਚਰ"
                ],
                narrow: [
                    "ਐ",
                    "ਸੋ",
                    "ਮੰ",
                    "ਬੁੱ",
                    "ਵੀ",
                    "ਸ਼ੁੱ",
                    "ਸ਼"
                ],
                short: [
                    "ਐਤ",
                    "ਸੋਮ",
                    "ਮੰਗ",
                    "ਬੁੱਧ",
                    "ਵੀਰ",
                    "ਸ਼ੁੱਕ",
                    "ਸ਼ਨਿੱ"
                ],
                wide: [
                    "ਐਤਵਾਰ",
                    "ਸੋਮਵਾਰ",
                    "ਮੰਗਲਵਾਰ",
                    "ਬੁੱਧਵਾਰ",
                    "ਵੀਰਵਾਰ",
                    "ਸ਼ੁੱਕਰਵਾਰ",
                    "ਸ਼ਨਿੱਚਰਵਾਰ"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "ਜਨ",
                    "ਫ਼ਰ",
                    "ਮਾਰਚ",
                    "ਅਪ੍ਰੈ",
                    "ਮਈ",
                    "ਜੂਨ",
                    "ਜੁਲਾ",
                    "ਅਗ",
                    "ਸਤੰ",
                    "ਅਕਤੂ",
                    "ਨਵੰ",
                    "ਦਸੰ"
                ],
                narrow: [
                    "ਜ",
                    "ਫ਼",
                    "ਮਾ",
                    "ਅ",
                    "ਮ",
                    "ਜੂ",
                    "ਜੁ",
                    "ਅ",
                    "ਸ",
                    "ਅ",
                    "ਨ",
                    "ਦ"
                ],
                wide: [
                    "ਜਨਵਰੀ",
                    "ਫ਼ਰਵਰੀ",
                    "ਮਾਰਚ",
                    "ਅਪ੍ਰੈਲ",
                    "ਮਈ",
                    "ਜੂਨ",
                    "ਜੁਲਾਈ",
                    "ਅਗਸਤ",
                    "ਸਤੰਬਰ",
                    "ਅਕਤੂਬਰ",
                    "ਨਵੰਬਰ",
                    "ਦਸੰਬਰ"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ਜਨ",
                    "ਫ਼ਰ",
                    "ਮਾਰਚ",
                    "ਅਪ੍ਰੈ",
                    "ਮਈ",
                    "ਜੂਨ",
                    "ਜੁਲਾ",
                    "ਅਗ",
                    "ਸਤੰ",
                    "ਅਕਤੂ",
                    "ਨਵੰ",
                    "ਦਸੰ"
                ],
                narrow: [
                    "ਜ",
                    "ਫ਼",
                    "ਮਾ",
                    "ਅ",
                    "ਮ",
                    "ਜੂ",
                    "ਜੁ",
                    "ਅ",
                    "ਸ",
                    "ਅ",
                    "ਨ",
                    "ਦ"
                ],
                wide: [
                    "ਜਨਵਰੀ",
                    "ਫ਼ਰਵਰੀ",
                    "ਮਾਰਚ",
                    "ਅਪ੍ਰੈਲ",
                    "ਮਈ",
                    "ਜੂਨ",
                    "ਜੁਲਾਈ",
                    "ਅਗਸਤ",
                    "ਸਤੰਬਰ",
                    "ਅਕਤੂਬਰ",
                    "ਨਵੰਬਰ",
                    "ਦਸੰਬਰ"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "ਤਿਮਾਹੀ1",
                    "ਤਿਮਾਹੀ2",
                    "ਤਿਮਾਹੀ3",
                    "ਤਿਮਾਹੀ4"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "ਪਹਿਲੀ ਤਿਮਾਹੀ",
                    "ਦੂਜੀ ਤਿਮਾਹੀ",
                    "ਤੀਜੀ ਤਿਮਾਹੀ",
                    "ਚੌਥੀ ਤਿਮਾਹੀ"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ਤਿਮਾਹੀ1",
                    "ਤਿਮਾਹੀ2",
                    "ਤਿਮਾਹੀ3",
                    "ਤਿਮਾਹੀ4"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "ਪਹਿਲੀ ਤਿਮਾਹੀ",
                    "ਦੂਜੀ ਤਿਮਾਹੀ",
                    "ਤੀਜੀ ਤਿਮਾਹੀ",
                    "ਚੌਥੀ ਤਿਮਾਹੀ"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "ਅੱਧੀ ਰਾਤ",
                    am: "ਪੂ.ਦੁ.",
                    pm: "ਬਾ.ਦੁ.",
                    morning1: "ਸਵੇਰੇ",
                    afternoon1: "ਦੁਪਹਿਰੇ",
                    evening1: "ਸ਼ਾਮੀਂ",
                    night1: "ਰਾਤੀਂ"
                },
                narrow: {
                    midnight: "ਅੱਧੀ ਰਾਤ",
                    am: "ਸ.",
                    pm: "ਸ਼.",
                    morning1: "ਸਵੇਰੇ",
                    afternoon1: "ਦੁਪਹਿਰੇ",
                    evening1: "ਸ਼ਾਮੀਂ",
                    night1: "ਰਾਤੀਂ"
                },
                wide: {
                    midnight: "ਅੱਧੀ ਰਾਤ",
                    am: "ਪੂ.ਦੁ.",
                    pm: "ਬਾ.ਦੁ.",
                    morning1: "ਸਵੇਰੇ",
                    afternoon1: "ਦੁਪਹਿਰੇ",
                    evening1: "ਸ਼ਾਮੀਂ",
                    night1: "ਰਾਤੀਂ"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "ਅੱਧੀ ਰਾਤ",
                    am: "ਪੂ.ਦੁ.",
                    pm: "ਬਾ.ਦੁ.",
                    morning1: "ਸਵੇਰੇ",
                    afternoon1: "ਦੁਪਹਿਰੇ",
                    evening1: "ਸ਼ਾਮੀਂ",
                    night1: "ਰਾਤੀਂ"
                },
                narrow: {
                    midnight: "ਅੱਧੀ ਰਾਤ",
                    am: "ਪੂ.ਦੁ.",
                    pm: "ਬਾ.ਦੁ.",
                    morning1: "ਸਵੇਰੇ",
                    afternoon1: "ਦੁਪਹਿਰੇ",
                    evening1: "ਸ਼ਾਮੀਂ",
                    night1: "ਰਾਤੀਂ"
                },
                wide: {
                    midnight: "ਅੱਧੀ ਰਾਤ",
                    am: "ਪੂ.ਦੁ.",
                    pm: "ਬਾ.ਦੁ.",
                    morning1: "ਸਵੇਰੇ",
                    afternoon1: "ਦੁਪਹਿਰੇ",
                    evening1: "ਸ਼ਾਮ",
                    night1: "ਰਾਤ"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "ਈਸਵੀ ਪੂਰਵ",
                    "1": "ਈਸਵੀ ਸੰਨ",
                    "0-alt-variant": "ਈਸਵੀ ਪੂਰਵ ਯੁੱਗ",
                    "1-alt-variant": "ਈਸਵੀ ਯੁੱਗ"
                },
                abbreviated: {
                    "0": "ਈ. ਪੂ.",
                    "1": "ਸੰਨ",
                    "0-alt-variant": "ਈ. ਪੂ.",
                    "1-alt-variant": "ਈ. ਸੰ."
                },
                narrow: {
                    "0": "ਈ.ਪੂ.",
                    "1": "ਸੰਨ",
                    "0-alt-variant": "ਈ. ਪੂ.",
                    "1-alt-variant": "ਈ.ਸੰ."
                }
            }
        },
        gmtFormat: "GMT{0}",
        gmtZeroFormat: "GMT",
        dateFields: {
            era: {
                wide: "ਸੰਮਤ",
                short: "ਸੰਮਤ",
                narrow: "ਸੰਮਤ"
            },
            year: {
                wide: "ਸਾਲ",
                short: "ਸਾਲ",
                narrow: "ਸਾਲ"
            },
            quarter: {
                wide: "ਤਿਮਾਹੀ",
                short: "ਤਿਮਾਹੀ",
                narrow: "ਤਿਮਾਹੀ"
            },
            month: {
                wide: "ਮਹੀਨਾ",
                short: "ਮਹੀਨਾ",
                narrow: "ਮਹੀਨਾ"
            },
            week: {
                wide: "ਹਫ਼ਤਾ",
                short: "ਹਫ਼ਤਾ",
                narrow: "ਹਫ਼ਤਾ"
            },
            weekOfMonth: {
                wide: "ਮਹੀਨੇ ਦਾ ਹਫ਼ਤਾ",
                short: "ਮਹੀਨੇ ਦਾ ਹਫ਼ਤਾ",
                narrow: "ਮਹੀਨੇ ਦਾ ਹਫ਼ਤਾ"
            },
            day: {
                wide: "ਦਿਨ",
                short: "ਦਿਨ",
                narrow: "ਦਿਨ"
            },
            dayOfYear: {
                wide: "ਸਾਲ ਦਾ ਦਿਨ",
                short: "ਸਾਲ ਦਾ ਦਿਨ",
                narrow: "ਸਾਲ ਦਾ ਦਿਨ"
            },
            weekday: {
                wide: "ਹਫ਼ਤੇ ਦਾ ਦਿਨ",
                short: "ਹਫ਼ਤੇ ਦਾ ਦਿਨ",
                narrow: "ਹਫ਼ਤੇ ਦਾ ਦਿਨ"
            },
            weekdayOfMonth: {
                wide: "ਮਹੀਨੇ ਦਾ ਹਫ਼ਤੇ ਦਾ ਦਿਨ",
                short: "ਮਹੀਨੇ ਦਾ ਹਫ਼ਤੇ ਦਾ ਦਿਨ",
                narrow: "ਮਹੀਨੇ ਦਾ ਹਫ਼ਤੇ ਦਾ ਦਿਨ"
            },
            dayperiod: {
                short: "ਪੂ.ਦੁ./ਬਾ.ਦੁ.",
                wide: "ਪੂ.ਦੁ./ਬਾ.ਦੁ.",
                narrow: "ਪੂ.ਦੁ./ਬਾ.ਦੁ."
            },
            hour: {
                wide: "ਘੰਟਾ",
                short: "ਘੰਟਾ",
                narrow: "ਘੰ"
            },
            minute: {
                wide: "ਮਿੰਟ",
                short: "ਮਿੰਟ",
                narrow: "ਮਿੰਟ"
            },
            second: {
                wide: "ਸਕਿੰਟ",
                short: "ਸਕਿੰਟ",
                narrow: "ਸਕਿੰਟ"
            },
            zone: {
                wide: "ਇਲਾਕਾਈ ਵੇਲਾ",
                short: "ਇਲਾਕਾਈ ਵੇਲਾ",
                narrow: "ਇਲਾਕਾਈ ਵੇਲਾ"
            },
            millisecond: {
                narrow: "ਮਿ.ਸ.",
                short: "ਮਿਲੀਸਕਿੰਟ",
                wide: "ਮਿਲੀਸਕਿੰਟ"
            }
        }
    },
    firstDay: 0,
    weekendRange: {
        start: 0,
        end: 0
    },
    likelySubtags: {
        pa: "pa-Guru-IN"
    }
};
export default data;

