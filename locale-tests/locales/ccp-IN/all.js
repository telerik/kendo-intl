const data = {
    name: "ccp-IN",
    identity: {
        language: "ccp",
        territory: "IN"
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
                3,
                2
            ]
        },
        currency: {
            patterns: [
                "n$"
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
                "n$",
                "(n$)"
            ],
            groupSize: [
                3,
                2
            ]
        },
        currencies: {
            ADP: {
                displayName: "𑄃𑄳𑄠𑄚𑄴𑄓𑄮𑄢𑄚𑄴 𑄛𑄬𑄥𑄬𑄖"
            },
            AED: {
                displayName: "𑄎𑄧𑄙 𑄃𑄢𑄧𑄝𑄴 𑄃𑄟𑄨𑄢𑄖𑄴 𑄘𑄨𑄢𑄴𑄦𑄟𑄴",
                "displayName-count-one": "𑄎𑄧𑄙 𑄃𑄢𑄧𑄝𑄴 𑄃𑄟𑄨𑄢𑄖𑄴 𑄘𑄨𑄢𑄴𑄦𑄟𑄴",
                "displayName-count-other": "𑄎𑄧𑄙 𑄃𑄢𑄧𑄝𑄴 𑄃𑄟𑄨𑄢𑄖𑄴 𑄘𑄨𑄢𑄴𑄦𑄟𑄴",
                symbol: "AED"
            },
            AFA: {
                displayName: "𑄃𑄛𑄴𑄉𑄚𑄨 (𑄷𑄿𑄸𑄽-𑄸𑄶𑄶𑄸)"
            },
            AFN: {
                displayName: "𑄃𑄜𑄴𑄉𑄚𑄴 𑄃𑄜𑄴𑄉𑄚𑄨",
                "displayName-count-one": "𑄃𑄜𑄴𑄉𑄚𑄴 𑄃𑄜𑄴𑄉𑄚𑄨",
                "displayName-count-other": "𑄃𑄜𑄴𑄉𑄚𑄴 𑄃𑄜𑄴𑄉𑄚𑄨",
                symbol: "AFN",
                "symbol-alt-narrow": "؋"
            },
            ALL: {
                displayName: "𑄃𑄣𑄴𑄝𑄬𑄚𑄨𑄠𑄚𑄴 𑄣𑄬𑄇𑄴",
                "displayName-count-one": "𑄃𑄣𑄴𑄝𑄬𑄚𑄨𑄠𑄚𑄴 𑄣𑄬𑄇𑄴",
                "displayName-count-other": "𑄃𑄣𑄴𑄝𑄬𑄚𑄨𑄠𑄚𑄴 𑄣𑄬𑄇𑄴",
                symbol: "ALL"
            },
            AMD: {
                displayName: "𑄃𑄢𑄴𑄟𑄬𑄚𑄨𑄠𑄚𑄴 𑄘𑄳𑄢𑄟𑄴",
                "displayName-count-one": "𑄃𑄢𑄴𑄟𑄬𑄚𑄨𑄠𑄚𑄴 𑄘𑄳𑄢𑄟𑄴",
                "displayName-count-other": "𑄃𑄢𑄴𑄟𑄬𑄚𑄨𑄠𑄚𑄴 𑄘𑄳𑄢𑄟𑄴",
                symbol: "AMD",
                "symbol-alt-narrow": "֏"
            },
            ANG: {
                displayName: "𑄚𑄬𑄘𑄢𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄃𑄳𑄠𑄚𑄴𑄑𑄨𑄣𑄨𑄠𑄚𑄴 𑄉𑄪𑄣𑄴𑄓𑄬𑄢𑄴",
                "displayName-count-one": "𑄚𑄬𑄘𑄢𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄃𑄳𑄠𑄚𑄴𑄑𑄨𑄣𑄨𑄠𑄚𑄴 𑄉𑄪𑄣𑄴𑄓𑄬𑄢𑄴",
                "displayName-count-other": "𑄚𑄬𑄘𑄢𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄃𑄳𑄠𑄚𑄴𑄑𑄨𑄣𑄨𑄠𑄚𑄴 𑄉𑄪𑄣𑄴𑄓𑄬𑄢𑄴",
                symbol: "ANG"
            },
            AOA: {
                displayName: "𑄃𑄳𑄠𑄋𑄴𑄉𑄮𑄣𑄚𑄴 𑄇𑄧𑄤𑄮𑄚𑄴𑄎",
                "displayName-count-one": "𑄃𑄳𑄠𑄋𑄴𑄉𑄮𑄣𑄚𑄴 𑄇𑄧𑄤𑄮𑄚𑄴𑄎",
                "displayName-count-other": "𑄃𑄳𑄠𑄋𑄴𑄉𑄮𑄣𑄚𑄴 𑄇𑄧𑄤𑄮𑄚𑄴𑄎",
                symbol: "AOA",
                "symbol-alt-narrow": "Kz"
            },
            AOK: {
                displayName: "𑄃𑄳𑄠𑄋𑄴𑄉𑄮𑄣𑄚𑄴 𑄇𑄧𑄤𑄮𑄚𑄴𑄎(𑄷𑄿𑄽𑄽-𑄷𑄿𑄿𑄶)"
            },
            AON: {
                displayName: "𑄃𑄳𑄠𑄋𑄴𑄉𑄮𑄣𑄚𑄴 𑄚𑄱 𑄇𑄧𑄤𑄮𑄚𑄴𑄎(𑄷𑄿𑄿𑄻-𑄸𑄶𑄶𑄶)"
            },
            AOR: {
                displayName: "𑄃𑄳𑄠𑄋𑄴𑄉𑄮𑄣𑄚𑄴 𑄇𑄧𑄤𑄮𑄚𑄴𑄎(𑄷𑄿𑄿𑄻-𑄷𑄿𑄿𑄿)"
            },
            ARA: {
                displayName: "𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄣𑄴"
            },
            ARP: {
                displayName: "𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄛𑄬𑄥𑄮 (𑄷𑄿𑄾𑄹-𑄷𑄿𑄾𑄻)"
            },
            ARS: {
                displayName: "𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄛𑄬𑄥𑄮",
                "displayName-count-one": "𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄛𑄬𑄥𑄮",
                "displayName-count-other": "𑄃𑄢𑄴𑄎𑄬𑄚𑄴𑄑𑄨𑄚 𑄛𑄬𑄥𑄮",
                symbol: "ARS",
                "symbol-alt-narrow": "$"
            },
            ATS: {
                displayName: "𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄨𑄠𑄚𑄴 𑄥𑄨𑄣𑄨𑄁"
            },
            AUD: {
                displayName: "𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄃𑄧𑄌𑄴𑄑𑄳𑄢𑄬𑄣𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "A$",
                "symbol-alt-narrow": "$"
            },
            AWG: {
                displayName: "𑄃𑄢𑄪𑄝 𑄉𑄨𑄣𑄴𑄓𑄢𑄴",
                "displayName-count-one": "𑄃𑄢𑄪𑄝 𑄉𑄨𑄣𑄴𑄓𑄢𑄴",
                "displayName-count-other": "𑄃𑄢𑄪𑄝 𑄉𑄨𑄣𑄴𑄓𑄢𑄴",
                symbol: "AWG"
            },
            AZM: {
                displayName: "𑄃𑄎𑄢𑄴𑄝𑄭𑄎𑄚𑄴 𑄟𑄚𑄖𑄴 (𑄷𑄿𑄿𑄹-𑄸𑄶𑄶𑄼)"
            },
            AZN: {
                displayName: "𑄃𑄎𑄢𑄴𑄝𑄭𑄎𑄚𑄴 𑄟𑄚𑄖𑄴",
                "displayName-count-one": "𑄃𑄎𑄢𑄴𑄝𑄭𑄎𑄚𑄴 𑄟𑄚𑄖𑄴",
                "displayName-count-other": "𑄃𑄎𑄢𑄴𑄝𑄭𑄎𑄚𑄴 𑄟𑄚𑄖𑄴",
                symbol: "AZN",
                "symbol-alt-narrow": "₼"
            },
            BAD: {
                displayName: "𑄝𑄧𑄥𑄴𑄚𑄨𑄠 𑄃𑄳𑄃 𑄦𑄢𑄴𑄎𑄬𑄉𑄮𑄞𑄨𑄚 𑄘𑄨𑄚𑄢𑄴"
            },
            BAM: {
                displayName: "𑄝𑄧𑄥𑄴𑄚𑄨𑄠 𑄃𑄳𑄃 𑄦𑄢𑄴𑄎𑄬𑄉𑄮𑄞𑄨𑄚 𑄟𑄢𑄴𑄇𑄴",
                "displayName-count-one": "𑄝𑄧𑄥𑄴𑄚𑄨𑄠 𑄃𑄳𑄃 𑄦𑄢𑄴𑄎𑄬𑄉𑄮𑄞𑄨𑄚 𑄟𑄢𑄴𑄇𑄴",
                "displayName-count-other": "𑄝𑄧𑄥𑄴𑄚𑄨𑄠 𑄃𑄳𑄃 𑄦𑄢𑄴𑄎𑄬𑄉𑄮𑄞𑄨𑄚 𑄟𑄢𑄴𑄇𑄴",
                symbol: "BAM",
                "symbol-alt-narrow": "KM"
            },
            BBD: {
                displayName: "𑄝𑄢𑄴𑄝𑄬𑄓𑄮𑄎𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄝𑄢𑄴𑄝𑄬𑄓𑄮𑄎𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄝𑄢𑄴𑄝𑄬𑄓𑄮𑄎𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "BBD",
                "symbol-alt-narrow": "$"
            },
            BDT: {
                displayName: "𑄝𑄁𑄣𑄘𑄬𑄥𑄨 𑄑𑄬𑄋",
                "displayName-count-one": "𑄝𑄁𑄣𑄘𑄬𑄥𑄨 𑄑𑄬𑄋",
                "displayName-count-other": "𑄝𑄁𑄣𑄘𑄬𑄥𑄨 𑄑𑄬𑄋",
                symbol: "৳",
                "symbol-alt-narrow": "৳"
            },
            BEC: {
                displayName: "𑄝𑄬𑄣𑄴𑄘𑄎𑄨𑄠𑄚𑄴 𑄜𑄳𑄢𑄋𑄴𑄇𑄴 (𑄝𑄮𑄘𑄮𑄣𑄬𑄭𑄛𑄢𑄬)"
            },
            BEF: {
                displayName: "𑄝𑄬𑄣𑄴𑄘𑄎𑄨𑄠𑄚𑄴 𑄜𑄳𑄢𑄋𑄴𑄇𑄴"
            },
            BEL: {
                displayName: "𑄝𑄬𑄣𑄴𑄘𑄎𑄨𑄠𑄚𑄴 𑄜𑄳𑄢𑄋𑄴𑄇𑄴 (𑄃𑄢𑄴𑄗𑄨𑄇𑄴)"
            },
            BGL: {
                displayName: "𑄝𑄪𑄣𑄴𑄉𑄬𑄢𑄩𑄠𑄧 𑄦𑄢𑄴𑄓𑄴 𑄣𑄬𑄞𑄴"
            },
            BGN: {
                displayName: "𑄝𑄪𑄣𑄴𑄉𑄬𑄢𑄩𑄠𑄧 𑄚𑄱 𑄣𑄬𑄞𑄴",
                "displayName-count-one": "𑄝𑄪𑄣𑄴𑄉𑄬𑄢𑄩𑄠𑄧 𑄚𑄱 𑄣𑄬𑄞𑄴",
                "displayName-count-other": "𑄝𑄪𑄣𑄴𑄉𑄬𑄢𑄩𑄠𑄧 𑄚𑄱 𑄣𑄬𑄞𑄴",
                symbol: "BGN"
            },
            BHD: {
                displayName: "𑄝𑄦𑄧𑄢𑄭𑄚𑄨 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-one": "𑄝𑄦𑄧𑄢𑄭𑄚𑄨 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-other": "𑄝𑄦𑄧𑄢𑄭𑄚𑄨 𑄘𑄨𑄚𑄢𑄴",
                symbol: "BHD"
            },
            BIF: {
                displayName: "𑄝𑄪𑄢𑄪𑄚𑄴𑄓𑄨 𑄜𑄳𑄢𑄋𑄴𑄇𑄴",
                "displayName-count-one": "𑄝𑄪𑄢𑄪𑄚𑄴𑄓𑄨 𑄜𑄳𑄢𑄋𑄴𑄇𑄴",
                "displayName-count-other": "𑄝𑄪𑄢𑄪𑄚𑄴𑄓𑄨 𑄜𑄳𑄢𑄋𑄴𑄇𑄴",
                symbol: "BIF"
            },
            BMD: {
                displayName: "𑄝𑄢𑄴𑄟𑄨𑄅𑄪𑄓𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄝𑄢𑄴𑄟𑄨𑄅𑄪𑄓𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄝𑄢𑄴𑄟𑄨𑄅𑄪𑄓𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "BMD",
                "symbol-alt-narrow": "$"
            },
            BND: {
                displayName: "𑄝𑄳𑄢𑄪𑄚𑄬𑄭 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄝𑄳𑄢𑄪𑄚𑄬𑄭 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄝𑄳𑄢𑄪𑄚𑄬𑄭 𑄓𑄧𑄣𑄢𑄴",
                symbol: "BND",
                "symbol-alt-narrow": "$"
            },
            BOB: {
                displayName: "𑄝𑄧𑄣𑄨𑄞𑄨𑄠𑄚𑄮",
                "displayName-count-one": "𑄝𑄧𑄣𑄨𑄞𑄨𑄠𑄚𑄮",
                "displayName-count-other": "𑄝𑄧𑄣𑄨𑄞𑄨𑄠𑄚𑄮",
                symbol: "BOB",
                "symbol-alt-narrow": "Bs"
            },
            BOP: {
                displayName: "𑄝𑄧𑄣𑄨𑄞𑄨𑄠𑄚𑄴 𑄛𑄬𑄥𑄮"
            },
            BOV: {
                displayName: "𑄝𑄧𑄣𑄨𑄞𑄨𑄠𑄚𑄴 𑄟𑄧𑄞𑄴𑄓𑄮𑄣𑄴"
            },
            BRB: {
                displayName: "𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄇𑄳𑄢𑄪𑄎𑄬𑄠𑄧𑄢𑄮𑄚𑄮𑄞𑄮 (𑄷𑄿𑄼𑄽-𑄷𑄿𑄾𑄼)"
            },
            BRC: {
                displayName: "𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄇𑄳𑄢𑄪𑄎𑄬𑄭𑄓𑄅𑄪"
            },
            BRE: {
                displayName: "𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄇𑄳𑄢𑄪𑄎𑄬𑄠𑄧𑄢𑄮 (𑄷𑄿𑄿𑄶-𑄷𑄿𑄿𑄹)"
            },
            BRL: {
                displayName: "𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄬𑄣𑄴",
                "displayName-count-one": "𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄬𑄣𑄴",
                "displayName-count-other": "𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄬𑄣𑄴",
                symbol: "R$",
                "symbol-alt-narrow": "R$"
            },
            BRN: {
                displayName: "𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄝𑄳𑄢𑄪𑄎𑄬𑄭𑄓𑄮 𑄚𑄮𑄞𑄮"
            },
            BRR: {
                displayName: "𑄝𑄳𑄢𑄎𑄨𑄣𑄨𑄠𑄚𑄴 𑄝𑄳𑄢𑄪𑄎𑄬𑄠𑄧𑄢𑄮"
            },
            BSD: {
                displayName: "𑄝𑄦𑄟𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄝𑄦𑄟𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄝𑄦𑄟𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "BSD",
                "symbol-alt-narrow": "$"
            },
            BTN: {
                displayName: "𑄞𑄪𑄑𑄚𑄨 𑄃𑄬𑄚𑄴𑄉𑄪𑄣𑄴𑄑𑄳𑄢𑄟𑄴𑄛𑄴",
                "displayName-count-one": "𑄞𑄪𑄑𑄚𑄨 𑄃𑄬𑄚𑄴𑄉𑄪𑄣𑄴𑄑𑄳𑄢𑄟𑄴𑄛𑄴",
                "displayName-count-other": "𑄞𑄪𑄑𑄚𑄨 𑄃𑄬𑄚𑄴𑄉𑄪𑄣𑄴𑄑𑄳𑄢𑄟𑄴𑄛𑄴",
                symbol: "BTN"
            },
            BUK: {
                displayName: "𑄝𑄧𑄢𑄴𑄟𑄨 𑄇𑄨𑄠𑄖𑄴"
            },
            BWP: {
                displayName: "𑄝𑄧𑄖𑄴𑄥𑄮𑄠𑄚 𑄛𑄪𑄣",
                "displayName-count-one": "𑄝𑄧𑄖𑄴𑄥𑄮𑄠𑄚 𑄛𑄪𑄣",
                "displayName-count-other": "𑄝𑄧𑄖𑄴𑄥𑄮𑄠𑄚 𑄛𑄪𑄣",
                symbol: "BWP",
                "symbol-alt-narrow": "P"
            },
            BYB: {
                displayName: "𑄝𑄬𑄣𑄢𑄪𑄥𑄨𑄠𑄚𑄴 𑄚𑄨𑄅𑄪 𑄢𑄪𑄝𑄬𑄣𑄴 (𑄷𑄿𑄿𑄺-𑄷𑄿𑄿𑄿)"
            },
            BYN: {
                displayName: "𑄝𑄬𑄣𑄢𑄪𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴",
                "displayName-count-one": "𑄝𑄬𑄣𑄢𑄪𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴",
                "displayName-count-other": "𑄝𑄬𑄣𑄢𑄪𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴",
                symbol: "BYN",
                "symbol-alt-narrow": "р."
            },
            BYR: {
                displayName: "𑄝𑄬𑄣𑄢𑄪𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴(𑄸𑄶𑄶𑄶-𑄸𑄶𑄷𑄼)",
                "displayName-count-one": "𑄝𑄬𑄣𑄢𑄪𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴(𑄸𑄶𑄶𑄶-𑄸𑄶𑄷𑄼)",
                "displayName-count-other": "𑄝𑄬𑄣𑄢𑄪𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴(𑄸𑄶𑄶𑄶-𑄸𑄶𑄷𑄼)",
                symbol: "BYR"
            },
            BZD: {
                displayName: "𑄝𑄬𑄣𑄨𑄎𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄝𑄬𑄣𑄨𑄎𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄝𑄬𑄣𑄨𑄎𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "BZD",
                "symbol-alt-narrow": "$"
            },
            CAD: {
                displayName: "𑄇𑄚𑄓𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄇𑄚𑄓𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄇𑄚𑄓𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "CA$",
                "symbol-alt-narrow": "$"
            },
            CDF: {
                displayName: "𑄇𑄧𑄋𑄴𑄉𑄮𑄣𑄨𑄌𑄴 𑄜𑄳𑄢𑄁𑄇𑄴",
                "displayName-count-one": "𑄇𑄧𑄋𑄴𑄉𑄮𑄣𑄨𑄌𑄴 𑄜𑄳𑄢𑄁𑄇𑄴",
                "displayName-count-other": "𑄇𑄧𑄋𑄴𑄉𑄮𑄣𑄨𑄌𑄴 𑄜𑄳𑄢𑄁𑄇𑄴",
                symbol: "CDF"
            },
            CHF: {
                displayName: "𑄥𑄭𑄪𑄥𑄴 𑄜𑄳𑄢𑄀",
                "displayName-count-one": "𑄥𑄭𑄪𑄥𑄴 𑄜𑄳𑄢𑄀",
                "displayName-count-other": "𑄥𑄭𑄪𑄥𑄴 𑄜𑄳𑄢𑄀",
                symbol: "CHF"
            },
            CLF: {
                displayName: "𑄌𑄨𑄣𑄨𑄠𑄚𑄴 𑄃𑄪𑄚𑄨𑄘𑄘𑄬𑄥𑄴 𑄘𑄨 𑄜𑄮𑄟𑄬𑄚𑄴𑄖𑄮"
            },
            CLP: {
                displayName: "𑄌𑄨𑄣𑄨 𑄛𑄬𑄥𑄮",
                "displayName-count-one": "𑄌𑄨𑄣𑄨 𑄛𑄬𑄥𑄮",
                "displayName-count-other": "𑄌𑄨𑄣𑄨 𑄛𑄬𑄥𑄮",
                symbol: "CLP",
                "symbol-alt-narrow": "$"
            },
            CNY: {
                displayName: "𑄌𑄩𑄚 𑄠𑄪𑄠𑄚𑄴",
                "displayName-count-one": "𑄌𑄩𑄚 𑄠𑄪𑄠𑄚𑄴",
                "displayName-count-other": "𑄌𑄩𑄚 𑄠𑄪𑄠𑄚𑄴",
                symbol: "CN¥",
                "symbol-alt-narrow": "¥"
            },
            COP: {
                displayName: "𑄇𑄧𑄣𑄮𑄟𑄴𑄝𑄨𑄠𑄚𑄴 𑄛𑄬𑄥𑄮",
                "displayName-count-one": "𑄇𑄧𑄣𑄮𑄟𑄴𑄝𑄨𑄠𑄚𑄴 𑄛𑄬𑄥𑄮",
                "displayName-count-other": "𑄇𑄧𑄣𑄮𑄟𑄴𑄝𑄨𑄠𑄚𑄴 𑄛𑄬𑄥𑄮",
                symbol: "COP",
                "symbol-alt-narrow": "$"
            },
            COU: {
                displayName: "𑄃𑄪𑄚𑄨𑄘𑄖𑄴 𑄘𑄨 𑄞𑄳𑄠𑄣𑄮𑄢𑄴 𑄢𑄨𑄠𑄬𑄣𑄴"
            },
            CRC: {
                displayName: "𑄇𑄮𑄥𑄴𑄑𑄢𑄨𑄇 𑄇𑄮𑄣𑄮𑄚𑄴",
                "displayName-count-one": "𑄇𑄮𑄥𑄴𑄑𑄢𑄨𑄇 𑄇𑄮𑄣𑄮𑄚𑄴",
                "displayName-count-other": "𑄇𑄮𑄥𑄴𑄑𑄢𑄨𑄇 𑄇𑄮𑄣𑄮𑄚𑄴",
                symbol: "CRC",
                "symbol-alt-narrow": "₡"
            },
            CSD: {
                displayName: "𑄛𑄪𑄢𑄮𑄚𑄨 𑄥𑄢𑄴𑄝𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴"
            },
            CSK: {
                displayName: "𑄌𑄬𑄇𑄮𑄥𑄳𑄣𑄮𑄞𑄇𑄴 𑄦𑄢𑄴𑄓𑄴 𑄇𑄮𑄢𑄪𑄚"
            },
            CUC: {
                displayName: "𑄇𑄨𑄅𑄪𑄝𑄚𑄴 𑄝𑄮𑄘𑄮𑄣𑄨𑄛𑄢𑄬 𑄛𑄬𑄥𑄮",
                "displayName-count-one": "𑄇𑄨𑄅𑄪𑄝𑄚𑄴 𑄝𑄮𑄘𑄮𑄣𑄨𑄛𑄢𑄬 𑄛𑄬𑄥𑄮",
                "displayName-count-other": "𑄇𑄨𑄅𑄪𑄝𑄚𑄴 𑄝𑄮𑄘𑄮𑄣𑄨𑄛𑄢𑄬 𑄛𑄬𑄥𑄮",
                symbol: "CUC",
                "symbol-alt-narrow": "$"
            },
            CUP: {
                displayName: "𑄇𑄨𑄅𑄪𑄝𑄚𑄴 𑄛𑄬𑄥𑄮",
                "displayName-count-one": "𑄇𑄨𑄅𑄪𑄝𑄚𑄴 𑄛𑄬𑄥𑄮",
                "displayName-count-other": "𑄇𑄨𑄅𑄪𑄝𑄚𑄴 𑄛𑄬𑄥𑄮",
                symbol: "CUP",
                "symbol-alt-narrow": "$"
            },
            CVE: {
                displayName: "𑄇𑄬𑄛𑄴 𑄞𑄢𑄴𑄘𑄬 𑄃𑄬𑄥𑄴𑄇𑄪𑄓𑄮",
                "displayName-count-one": "𑄇𑄬𑄛𑄴 𑄞𑄢𑄴𑄘𑄬 𑄃𑄬𑄥𑄴𑄇𑄪𑄓𑄮",
                "displayName-count-other": "𑄇𑄬𑄛𑄴 𑄞𑄢𑄴𑄘𑄬 𑄃𑄬𑄥𑄴𑄇𑄪𑄓𑄮",
                symbol: "CVE"
            },
            CYP: {
                displayName: "𑄥𑄭𑄛𑄳𑄢𑄥𑄴 𑄛𑄃𑄪𑄚𑄴𑄓𑄴"
            },
            CZK: {
                displayName: "𑄌𑄬𑄇𑄴 𑄛𑄳𑄢𑄧𑄎𑄖𑄧𑄚𑄴𑄖𑄳𑄢𑄧 𑄇𑄮𑄢𑄪𑄚",
                "displayName-count-one": "𑄌𑄬𑄇𑄴 𑄛𑄳𑄢𑄧𑄎𑄖𑄧𑄚𑄴𑄖𑄳𑄢𑄧 𑄇𑄮𑄢𑄪𑄚",
                "displayName-count-other": "𑄌𑄬𑄇𑄴 𑄛𑄳𑄢𑄧𑄎𑄖𑄧𑄚𑄴𑄖𑄳𑄢𑄧 𑄇𑄮𑄢𑄪𑄚",
                symbol: "CZK",
                "symbol-alt-narrow": "Kč"
            },
            DDM: {
                displayName: "𑄛𑄪𑄉𑄬𑄘𑄨 𑄎𑄢𑄴𑄟𑄚𑄴 𑄟𑄢𑄴𑄇𑄴"
            },
            DEM: {
                displayName: "𑄓𑄧𑄠𑄧𑄌𑄴 𑄟𑄢𑄴𑄇𑄴"
            },
            DJF: {
                displayName: "𑄎𑄨𑄝𑄪𑄖𑄨 𑄜𑄳𑄢𑄁𑄇𑄴",
                "displayName-count-one": "𑄎𑄨𑄝𑄪𑄖𑄨 𑄜𑄳𑄢𑄁𑄇𑄴",
                "displayName-count-other": "𑄎𑄨𑄝𑄪𑄖𑄨 𑄜𑄳𑄢𑄁",
                symbol: "DJF"
            },
            DKK: {
                displayName: "𑄓𑄳𑄠𑄚𑄨𑄌𑄴 𑄇𑄳𑄢𑄯𑄚𑄴",
                "displayName-count-one": "𑄓𑄳𑄠𑄚𑄨𑄌𑄴 𑄇𑄳𑄢𑄯𑄚𑄴",
                "displayName-count-other": "𑄓𑄳𑄠𑄚𑄨𑄌𑄴 𑄇𑄳𑄢𑄯𑄚𑄴",
                symbol: "DKK",
                "symbol-alt-narrow": "kr"
            },
            DOP: {
                displayName: "𑄓𑄮𑄟𑄨𑄚𑄨𑄇𑄚𑄴 𑄛𑄬𑄥𑄮",
                "displayName-count-one": "𑄓𑄮𑄟𑄨𑄚𑄨𑄇𑄚𑄴 𑄛𑄬𑄥𑄮",
                "displayName-count-other": "𑄓𑄮𑄟𑄨𑄚𑄨𑄇𑄚𑄴 𑄛𑄬𑄥𑄮",
                symbol: "DOP",
                "symbol-alt-narrow": "$"
            },
            DZD: {
                displayName: "𑄃𑄢𑄴𑄎𑄬𑄢𑄩𑄠𑄧 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-one": "𑄃𑄢𑄴𑄎𑄬𑄢𑄩𑄠𑄧 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-other": "𑄃𑄢𑄴𑄎𑄬𑄢𑄩𑄠𑄧 𑄘𑄨𑄚𑄢𑄴",
                symbol: "DZD"
            },
            ECS: {
                displayName: "𑄃𑄨𑄇𑄪𑄠𑄓𑄮𑄢𑄴 𑄥𑄪𑄇𑄳𑄢𑄬"
            },
            ECV: {
                displayName: "𑄃𑄨𑄇𑄪𑄠𑄓𑄮𑄢𑄴 𑄃𑄪𑄚𑄨𑄘𑄘𑄬𑄌𑄴 𑄘𑄨 𑄞𑄬𑄣𑄧𑄢𑄴 𑄇𑄧𑄚𑄴𑄥𑄴𑄖𑄚𑄴𑄖𑄬 (𑄃𑄨𑄅𑄪𑄞𑄨𑄥𑄨)"
            },
            EEK: {
                displayName: "𑄃𑄬𑄌𑄴𑄖𑄮𑄚𑄨𑄠 𑄇𑄳𑄢𑄪𑄚𑄨"
            },
            EGP: {
                displayName: "𑄟𑄨𑄥𑄧𑄢𑄩𑄠𑄴 𑄛𑄅𑄪𑄚𑄴𑄓𑄴",
                "displayName-count-one": "𑄟𑄨𑄥𑄧𑄢𑄩𑄠𑄴 𑄛𑄅𑄪𑄚𑄴𑄓𑄴",
                "displayName-count-other": "𑄟𑄨𑄥𑄧𑄢𑄩𑄠𑄴 𑄛𑄅𑄪𑄚𑄴𑄓𑄴",
                symbol: "EGP",
                "symbol-alt-narrow": "E£"
            },
            ERN: {
                displayName: "𑄃𑄬𑄢𑄨𑄑𑄳𑄢𑄨𑄠𑄬𑄚𑄴 𑄚𑄇𑄴𑄜",
                "displayName-count-one": "𑄃𑄬𑄢𑄨𑄑𑄳𑄢𑄨𑄠𑄬𑄚𑄴 𑄚𑄇𑄴𑄜",
                "displayName-count-other": "𑄃𑄬𑄢𑄨𑄑𑄳𑄢𑄨𑄠𑄬𑄚𑄴 𑄚𑄇𑄴𑄜",
                symbol: "ERN"
            },
            ESA: {
                displayName: "𑄥𑄳𑄛𑄳𑄠𑄚𑄨𑄥𑄴 𑄛𑄬𑄥𑄬𑄖 (𑄃𑄬𑄇𑄴𑄇𑄭𑄪 𑄦𑄨𑄎𑄬𑄛𑄴)"
            },
            ESB: {
                displayName: "𑄥𑄳𑄛𑄳𑄠𑄚𑄨𑄥𑄴 𑄛𑄬𑄥𑄬𑄖 (𑄝𑄮𑄘𑄮𑄣𑄬𑄭 𑄛𑄢𑄬 𑄦𑄨𑄎𑄬𑄛𑄴)"
            },
            ESP: {
                displayName: "𑄥𑄳𑄛𑄳𑄠𑄚𑄨𑄥𑄴 𑄛𑄬𑄥𑄬𑄖",
                "symbol-alt-narrow": "₧"
            },
            ETB: {
                displayName: "𑄃𑄨𑄗𑄨𑄃𑄮𑄛𑄨𑄠𑄚𑄴 𑄝𑄨𑄢𑄴",
                "displayName-count-one": "𑄃𑄨𑄗𑄨𑄃𑄮𑄛𑄨𑄠𑄚𑄴 𑄝𑄨𑄢𑄴",
                "displayName-count-other": "𑄃𑄨𑄗𑄨𑄃𑄮𑄛𑄨𑄠𑄚𑄴 𑄝𑄨𑄢𑄴",
                symbol: "ETB"
            },
            EUR: {
                displayName: "𑄃𑄨𑄅𑄪𑄢𑄮",
                "displayName-count-one": "𑄃𑄨𑄅𑄪𑄢𑄮",
                "displayName-count-other": "𑄃𑄨𑄅𑄪𑄢𑄮",
                symbol: "€",
                "symbol-alt-narrow": "€"
            },
            FIM: {
                displayName: "𑄜𑄨𑄚𑄨𑄥𑄴 𑄟𑄢𑄴𑄇"
            },
            FJD: {
                displayName: "𑄜𑄨𑄎𑄨 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄜𑄨𑄎𑄨 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄜𑄨𑄎𑄨 𑄓𑄧𑄣𑄢𑄴",
                symbol: "FJD",
                "symbol-alt-narrow": "$"
            },
            FKP: {
                displayName: "𑄜𑄧𑄇𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬 𑄛𑄃𑄪𑄚𑄴𑄓𑄴",
                "displayName-count-one": "𑄜𑄧𑄇𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬 𑄛𑄃𑄪𑄚𑄴𑄓𑄴",
                "displayName-count-other": "𑄜𑄧𑄇𑄴𑄣𑄳𑄠𑄚𑄴𑄓𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬 𑄛𑄃𑄪𑄚𑄴𑄓𑄴",
                symbol: "FKP",
                "symbol-alt-narrow": "£"
            },
            FRF: {
                displayName: "𑄜𑄧𑄢𑄥𑄨 𑄜𑄳𑄢𑄁𑄇𑄴"
            },
            GBP: {
                displayName: "𑄝𑄳𑄢𑄨𑄑𑄨𑄌𑄴 𑄛𑄃𑄪𑄚𑄴",
                "displayName-count-one": "𑄝𑄳𑄢𑄨𑄑𑄨𑄌𑄴 𑄛𑄃𑄪𑄚𑄴",
                "displayName-count-other": "𑄝𑄳𑄢𑄨𑄑𑄨𑄌𑄴 𑄛𑄃𑄪𑄚𑄴",
                symbol: "£",
                "symbol-alt-narrow": "£"
            },
            GEK: {
                displayName: "𑄎𑄧𑄢𑄴𑄎𑄨𑄠𑄚𑄴 𑄇𑄪𑄛𑄧𑄚𑄴 𑄣𑄢𑄨𑄖𑄴"
            },
            GEL: {
                displayName: "𑄎𑄧𑄢𑄴𑄎𑄨𑄠𑄚𑄴 𑄣𑄢𑄨",
                "displayName-count-one": "𑄎𑄧𑄢𑄴𑄎𑄨𑄠𑄚𑄴 𑄣𑄢𑄨",
                "displayName-count-other": "𑄎𑄧𑄢𑄴𑄎𑄨𑄠𑄚𑄴 𑄣𑄢𑄨",
                symbol: "GEL",
                "symbol-alt-narrow": "₾"
            },
            GHC: {
                displayName: "𑄊𑄚 𑄥𑄬𑄓𑄨 (𑄷𑄿𑄽𑄿-𑄸𑄶𑄶𑄽)"
            },
            GHS: {
                displayName: "𑄊𑄚 𑄥𑄬𑄓𑄨",
                "displayName-count-one": "𑄊𑄚 𑄥𑄬𑄓𑄨",
                "displayName-count-other": "𑄊𑄚 𑄥𑄬𑄓𑄨",
                symbol: "GHS",
                "symbol-alt-narrow": "GH₵"
            },
            GIP: {
                displayName: "𑄎𑄨𑄝𑄳𑄢𑄣𑄴𑄑𑄢𑄴 𑄛𑄅𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-one": "𑄎𑄨𑄝𑄳𑄢𑄣𑄴𑄑𑄢𑄴 𑄛𑄅𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-other": "𑄎𑄨𑄝𑄳𑄢𑄣𑄴𑄑𑄢𑄴 𑄛𑄅𑄪𑄚𑄳𑄓𑄴",
                symbol: "GIP",
                "symbol-alt-narrow": "£"
            },
            GMD: {
                displayName: "𑄉𑄟𑄴𑄝𑄨𑄠 𑄓𑄣𑄥𑄨",
                "displayName-count-one": "𑄉𑄟𑄴𑄝𑄨𑄠 𑄓𑄣𑄥𑄨",
                "displayName-count-other": "𑄉𑄟𑄴𑄝𑄨𑄠 𑄓𑄣𑄥𑄨",
                symbol: "GMD"
            },
            GNF: {
                displayName: "𑄉𑄨𑄚𑄨 𑄜𑄳𑄢𑄋𑄳𑄇𑄴",
                "displayName-count-one": "𑄉𑄨𑄚𑄨 𑄜𑄳𑄢𑄋𑄳𑄇𑄴",
                "displayName-count-other": "𑄉𑄨𑄚𑄨 𑄜𑄳𑄢𑄋𑄳𑄇𑄴",
                symbol: "GNF",
                "symbol-alt-narrow": "FG"
            },
            GNS: {
                displayName: "𑄉𑄨𑄚𑄨 𑄥𑄭𑄣𑄨"
            },
            GQE: {
                displayName: "𑄃𑄨𑄇𑄪𑄠𑄬𑄑𑄮𑄢𑄨𑄠𑄣𑄴 𑄉𑄨𑄚𑄨 𑄃𑄨𑄇𑄪𑄠𑄨𑄣𑄨"
            },
            GRD: {
                displayName: "𑄉𑄳𑄢𑄩𑄇𑄴 𑄘𑄳𑄢𑄌𑄴𑄟"
            },
            GTQ: {
                displayName: "𑄉𑄪𑄠𑄖𑄬𑄟𑄣𑄧 𑄇𑄪𑄠𑄬𑄖𑄴𑄎𑄣𑄴",
                "displayName-count-one": "𑄉𑄪𑄠𑄖𑄬𑄟𑄣𑄧 𑄇𑄪𑄠𑄬𑄖𑄴𑄎𑄣𑄴",
                "displayName-count-other": "𑄉𑄪𑄠𑄖𑄬𑄟𑄣𑄧 𑄇𑄪𑄠𑄬𑄖𑄴𑄎𑄣𑄴",
                symbol: "GTQ",
                "symbol-alt-narrow": "Q"
            },
            GWE: {
                displayName: "𑄛𑄧𑄢𑄴𑄖𑄪𑄉𑄨𑄎𑄴 𑄉𑄨𑄚𑄨 𑄃𑄬𑄥𑄴𑄇𑄪𑄓𑄮"
            },
            GWP: {
                displayName: "𑄉𑄨𑄚𑄨 𑄥𑄨𑄥𑄅𑄪 𑄛𑄬𑄥𑄮"
            },
            GYD: {
                displayName: "𑄉𑄭𑄠𑄬𑄚 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄉𑄭𑄠𑄬𑄚 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄉𑄭𑄠𑄬𑄚 𑄓𑄧𑄣𑄢𑄴",
                symbol: "GYD",
                "symbol-alt-narrow": "$"
            },
            HKD: {
                displayName: "𑄦𑄧𑄁𑄇𑄧𑄁 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄦𑄧𑄁𑄇𑄧𑄁 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄦𑄧𑄁𑄇𑄧𑄁 𑄓𑄧𑄣𑄢𑄴",
                symbol: "HK$",
                "symbol-alt-narrow": "$"
            },
            HNL: {
                displayName: "𑄦𑄪𑄚𑄴𑄓𑄪𑄢𑄥𑄴 𑄣𑄬𑄟𑄴𑄛𑄨𑄢",
                "displayName-count-one": "𑄦𑄪𑄚𑄴𑄓𑄪𑄢𑄥𑄴 𑄣𑄬𑄟𑄴𑄛𑄨𑄢",
                "displayName-count-other": "𑄦𑄪𑄚𑄴𑄓𑄪𑄢𑄥𑄴 𑄣𑄬𑄟𑄴𑄛𑄨𑄢",
                symbol: "HNL",
                "symbol-alt-narrow": "L"
            },
            HRD: {
                displayName: "𑄇𑄳𑄢𑄮𑄠𑄬𑄥𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴"
            },
            HRK: {
                displayName: "𑄇𑄳𑄢𑄮𑄠𑄬𑄥𑄨𑄠𑄚𑄴 𑄇𑄪𑄚",
                "displayName-count-one": "𑄇𑄳𑄢𑄮𑄠𑄬𑄥𑄨𑄠𑄚𑄴 𑄇𑄪𑄚",
                "displayName-count-other": "𑄇𑄳𑄢𑄮𑄠𑄬𑄥𑄨𑄠𑄚𑄴 𑄇𑄪𑄚",
                symbol: "HRK",
                "symbol-alt-narrow": "kn"
            },
            HTG: {
                displayName: "𑄦𑄭𑄖𑄨 𑄉𑄯𑄢𑄴𑄘𑄬",
                "displayName-count-one": "𑄦𑄭𑄖𑄨 𑄉𑄯𑄢𑄴𑄘𑄬",
                "displayName-count-other": "𑄦𑄭𑄖𑄨 𑄉𑄯𑄢𑄴𑄘𑄬",
                symbol: "HTG"
            },
            HUF: {
                displayName: "𑄦𑄋𑄴𑄉𑄬𑄢𑄨𑄠𑄚𑄴 𑄜𑄮𑄢𑄨𑄚𑄳𑄑𑄴",
                "displayName-count-one": "𑄦𑄋𑄴𑄉𑄬𑄢𑄨𑄠𑄚𑄴 𑄜𑄮𑄢𑄨𑄚𑄳𑄑𑄴",
                "displayName-count-other": "𑄦𑄋𑄴𑄉𑄬𑄢𑄨𑄠𑄚𑄴 𑄜𑄮𑄢𑄨𑄚𑄳𑄑𑄴",
                symbol: "HUF",
                "symbol-alt-narrow": "Ft"
            },
            IDR: {
                displayName: "𑄃𑄨𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨𑄠𑄳𑄦𑄴",
                "displayName-count-one": "𑄃𑄨𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨𑄠𑄳𑄦𑄴",
                "displayName-count-other": "𑄃𑄨𑄚𑄴𑄘𑄮𑄚𑄬𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨𑄠𑄳𑄦𑄴",
                symbol: "IDR",
                "symbol-alt-narrow": "Rp"
            },
            IEP: {
                displayName: "𑄃𑄨𑄢𑄨𑄌𑄴 𑄛𑄅𑄪𑄚𑄳𑄓𑄴"
            },
            ILP: {
                displayName: "𑄃𑄨𑄥𑄳𑄢𑄭𑄣𑄨 𑄛𑄅𑄪𑄚𑄳𑄓𑄴"
            },
            ILS: {
                displayName: "𑄃𑄨𑄥𑄳𑄢𑄭𑄣𑄨 𑄚𑄱 𑄥𑄬𑄇𑄬𑄣𑄴",
                "displayName-count-one": "𑄃𑄨𑄥𑄳𑄢𑄭𑄣𑄨 𑄚𑄱 𑄥𑄬𑄇𑄬𑄣𑄴",
                "displayName-count-other": "𑄃𑄨𑄥𑄳𑄢𑄭𑄣𑄨 𑄚𑄱 𑄥𑄬𑄇𑄬𑄣𑄴",
                symbol: "₪",
                "symbol-alt-narrow": "₪"
            },
            INR: {
                displayName: "𑄃𑄨𑄚𑄴𑄘𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨",
                "displayName-count-one": "𑄃𑄨𑄚𑄴𑄘𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨",
                "displayName-count-other": "𑄃𑄨𑄚𑄴𑄘𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨",
                symbol: "₹",
                "symbol-alt-narrow": "₹"
            },
            IQD: {
                displayName: "𑄃𑄨𑄢𑄇𑄨 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-one": "𑄃𑄨𑄢𑄇𑄨 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-other": "𑄃𑄨𑄢𑄇𑄨 𑄘𑄨𑄚𑄢𑄴",
                symbol: "IQD"
            },
            IRR: {
                displayName: "𑄃𑄨𑄢𑄚𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄣𑄴",
                "displayName-count-one": "𑄃𑄨𑄢𑄚𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄣𑄴",
                "displayName-count-other": "𑄃𑄨𑄢𑄚𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄣𑄴",
                symbol: "IRR"
            },
            ISK: {
                displayName: "𑄃𑄭𑄥𑄴𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄇𑄳𑄢𑄯𑄚𑄴",
                "displayName-count-one": "𑄃𑄭𑄥𑄴𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄇𑄳𑄢𑄯𑄚𑄴",
                "displayName-count-other": "𑄃𑄭𑄥𑄴𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄇𑄳𑄢𑄯𑄚𑄴",
                symbol: "ISK",
                "symbol-alt-narrow": "kr"
            },
            ITL: {
                displayName: "𑄃𑄨𑄖𑄣𑄨𑄠𑄧 𑄣𑄨𑄢"
            },
            JMD: {
                displayName: "𑄎𑄟𑄭𑄇𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄎𑄟𑄭𑄇𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄎𑄟𑄭𑄇𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "JMD",
                "symbol-alt-narrow": "$"
            },
            JOD: {
                displayName: "𑄎𑄧𑄢𑄴𑄓𑄚𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-one": "𑄎𑄧𑄢𑄴𑄓𑄚𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-other": "𑄎𑄧𑄢𑄴𑄓𑄚𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                symbol: "JOD"
            },
            JPY: {
                displayName: "𑄎𑄛𑄚𑄨 𑄃𑄨𑄠𑄬𑄚𑄴",
                "displayName-count-one": "𑄎𑄛𑄚𑄨 𑄃𑄨𑄠𑄬𑄚𑄴",
                "displayName-count-other": "𑄎𑄛𑄚𑄨 𑄃𑄨𑄠𑄬𑄚𑄴",
                symbol: "JP¥",
                "symbol-alt-narrow": "¥"
            },
            KES: {
                displayName: "𑄇𑄬𑄚𑄨𑄠𑄚𑄴 𑄥𑄨𑄣𑄨𑄁",
                "displayName-count-one": "𑄇𑄬𑄚𑄨𑄠𑄚𑄴 𑄥𑄨𑄣𑄨𑄁",
                "displayName-count-other": "𑄇𑄬𑄚𑄨𑄠𑄚𑄴 𑄥𑄨𑄣𑄨𑄁",
                symbol: "KES"
            },
            KGS: {
                displayName: "𑄇𑄨𑄢𑄴𑄉𑄨𑄎𑄴𑄃𑄨𑄥𑄴𑄖𑄚𑄴 𑄥𑄮𑄟𑄴",
                "displayName-count-one": "𑄇𑄨𑄢𑄴𑄉𑄨𑄎𑄴𑄃𑄨𑄥𑄴𑄖𑄚𑄴 𑄥𑄮𑄟𑄴",
                "displayName-count-other": "𑄇𑄨𑄢𑄴𑄉𑄨𑄎𑄴𑄃𑄨𑄥𑄴𑄖𑄚𑄴 𑄥𑄮𑄟𑄴",
                symbol: "KGS"
            },
            KHR: {
                displayName: "𑄇𑄧𑄟𑄴𑄝𑄮𑄓𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄬𑄣𑄴",
                "displayName-count-one": "𑄇𑄧𑄟𑄴𑄝𑄮𑄓𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄬𑄣𑄴",
                "displayName-count-other": "𑄇𑄧𑄟𑄴𑄝𑄮𑄓𑄨𑄠𑄚𑄴 𑄢𑄨𑄠𑄬𑄣𑄴",
                symbol: "KHR",
                "symbol-alt-narrow": "៛"
            },
            KMF: {
                displayName: "𑄇𑄧𑄟𑄴𑄝𑄮𑄢𑄮 𑄜𑄳𑄢𑄋𑄳𑄇𑄴",
                "displayName-count-one": "𑄇𑄧𑄟𑄴𑄝𑄮𑄢𑄮 𑄜𑄳𑄢𑄋𑄳𑄇𑄴",
                "displayName-count-other": "𑄇𑄧𑄟𑄴𑄝𑄮𑄢𑄮 𑄜𑄳𑄢𑄋𑄳𑄇𑄴",
                symbol: "KMF",
                "symbol-alt-narrow": "CF"
            },
            KPW: {
                displayName: "𑄃𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄇𑄮𑄢𑄨𑄠𑄢𑄴 𑄃𑄮𑄚𑄴",
                "displayName-count-one": "𑄃𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄇𑄮𑄢𑄨𑄠𑄢𑄴 𑄃𑄮𑄚𑄴",
                "displayName-count-other": "𑄃𑄪𑄖𑄴𑄖𑄮𑄢𑄴 𑄇𑄮𑄢𑄨𑄠𑄢𑄴 𑄃𑄮𑄚𑄴",
                symbol: "KPW",
                "symbol-alt-narrow": "₩"
            },
            KRW: {
                displayName: "𑄘𑄧𑄉𑄨𑄚𑄴 𑄇𑄮𑄢𑄨𑄠𑄢𑄴 𑄃𑄮𑄚𑄴",
                "displayName-count-one": "𑄘𑄧𑄉𑄨𑄚𑄴 𑄇𑄮𑄢𑄨𑄠𑄢𑄴 𑄃𑄮𑄚𑄴",
                "displayName-count-other": "𑄘𑄧𑄉𑄨𑄚𑄴 𑄇𑄮𑄢𑄨𑄠𑄢𑄴 𑄃𑄮𑄚𑄴",
                symbol: "₩",
                "symbol-alt-narrow": "₩"
            },
            KWD: {
                displayName: "𑄇𑄪𑄠𑄬𑄖𑄨 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-one": "𑄇𑄪𑄠𑄬𑄖𑄨 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-other": "𑄇𑄪𑄠𑄬𑄖𑄨 𑄘𑄨𑄚𑄢𑄴",
                symbol: "KWD"
            },
            KYD: {
                displayName: "𑄇𑄬𑄟𑄳𑄠𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄢𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄇𑄬𑄟𑄳𑄠𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄢𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄇𑄬𑄟𑄳𑄠𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄢𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "KYD",
                "symbol-alt-narrow": "$"
            },
            KZT: {
                displayName: "𑄇𑄎𑄈𑄥𑄴𑄖𑄚𑄨 𑄑𑄬𑄋𑄴𑄉𑄬",
                "displayName-count-one": "𑄇𑄎𑄈𑄥𑄴𑄖𑄚𑄨 𑄑𑄬𑄋𑄴𑄉𑄬",
                "displayName-count-other": "𑄇𑄎𑄈𑄥𑄴𑄖𑄚𑄨 𑄑𑄬𑄋𑄴𑄉𑄬",
                symbol: "KZT",
                "symbol-alt-narrow": "₸"
            },
            LAK: {
                displayName: "𑄣𑄬𑄅𑄪𑄥𑄚𑄴 𑄇𑄨𑄛𑄴",
                "displayName-count-one": "𑄣𑄬𑄅𑄪𑄥𑄚𑄴 𑄇𑄨𑄛𑄴",
                "displayName-count-other": "𑄣𑄬𑄅𑄪𑄥𑄚𑄴 𑄇𑄨𑄛𑄴",
                symbol: "LAK",
                "symbol-alt-narrow": "₭"
            },
            LBP: {
                displayName: "𑄣𑄬𑄝𑄚𑄨𑄎𑄴 𑄛𑄅𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-one": "𑄣𑄬𑄝𑄚𑄨𑄎𑄴 𑄛𑄅𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-other": "𑄣𑄬𑄝𑄚𑄨𑄎𑄴 𑄛𑄅𑄪𑄚𑄳𑄓𑄴",
                symbol: "LBP",
                "symbol-alt-narrow": "L£"
            },
            LKR: {
                displayName: "𑄥𑄳𑄢𑄨𑄣𑄧𑄁𑄇𑄚𑄴 𑄢𑄪𑄛𑄨",
                "displayName-count-one": "𑄥𑄳𑄢𑄨𑄣𑄧𑄁𑄇𑄚𑄴 𑄢𑄪𑄛𑄨",
                "displayName-count-other": "𑄥𑄳𑄢𑄨𑄣𑄧𑄁𑄇𑄚𑄴 𑄢𑄪𑄛𑄨",
                symbol: "LKR",
                "symbol-alt-narrow": "Rs"
            },
            LRD: {
                displayName: "𑄣𑄨𑄝𑄬𑄢𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄣𑄨𑄝𑄬𑄢𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄣𑄨𑄝𑄬𑄢𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "LRD",
                "symbol-alt-narrow": "$"
            },
            LSL: {
                displayName: "𑄣𑄬𑄥𑄪𑄑𑄪 𑄣𑄮𑄑𑄨"
            },
            LTL: {
                displayName: "𑄣𑄨𑄗𑄭𑄪𑄚𑄨𑄠𑄚𑄴 𑄣𑄨𑄑",
                "displayName-count-one": "𑄣𑄨𑄗𑄭𑄪𑄚𑄨𑄠𑄚𑄴 𑄣𑄨𑄑",
                "displayName-count-other": "𑄣𑄨𑄗𑄭𑄪𑄚𑄨𑄠𑄚𑄴 𑄣𑄨𑄑",
                symbol: "LTL",
                "symbol-alt-narrow": "Lt"
            },
            LTT: {
                displayName: "𑄣𑄨𑄗𑄭𑄪𑄚𑄨𑄠𑄚𑄴 𑄑𑄣𑄮𑄚𑄳𑄠𑄥𑄴"
            },
            LUC: {
                displayName: "𑄣𑄪𑄇𑄴𑄥𑄬𑄟𑄴𑄝𑄢𑄴𑄉𑄴 𑄝𑄮𑄘𑄮𑄣𑄬𑄝𑄢𑄴 𑄜𑄳𑄢𑄇𑄳𑄋𑄴"
            },
            LUF: {
                displayName: "𑄣𑄪𑄇𑄴𑄥𑄬𑄟𑄴𑄝𑄢𑄴𑄉𑄴 𑄜𑄳𑄢𑄇𑄳𑄋𑄴"
            },
            LUL: {
                displayName: "𑄣𑄪𑄇𑄴𑄥𑄬𑄟𑄴𑄝𑄢𑄴𑄉𑄴 𑄜𑄭𑄚𑄬𑄚𑄴𑄥𑄨𑄠𑄣𑄴 𑄜𑄳𑄢𑄇𑄳𑄋𑄴"
            },
            LVL: {
                displayName: "𑄣𑄳𑄠𑄑𑄴𑄞𑄨𑄠𑄚𑄴 𑄣𑄳𑄠𑄑𑄴𑄥𑄴",
                "displayName-count-one": "𑄣𑄳𑄠𑄑𑄴𑄞𑄨𑄠𑄚𑄴 𑄣𑄳𑄠𑄑𑄴𑄥𑄴",
                "displayName-count-other": "𑄣𑄳𑄠𑄑𑄴𑄞𑄨𑄠𑄚𑄴 𑄣𑄳𑄠𑄑𑄴𑄥𑄴",
                symbol: "LVL",
                "symbol-alt-narrow": "Ls"
            },
            LVR: {
                displayName: "𑄣𑄳𑄠𑄑𑄴𑄞𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄧𑄣𑄴"
            },
            LYD: {
                displayName: "𑄣𑄨𑄝𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄣𑄨𑄝𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄣𑄨𑄝𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "LYD"
            },
            MAD: {
                displayName: "𑄟𑄮𑄢𑄮𑄇𑄳𑄦𑄚𑄴 𑄘𑄨𑄢𑄴𑄦𑄟𑄴",
                "displayName-count-one": "𑄟𑄮𑄢𑄮𑄇𑄳𑄦𑄚𑄴 𑄘𑄨𑄢𑄴𑄦𑄟𑄴",
                "displayName-count-other": "𑄟𑄮𑄢𑄮𑄇𑄳𑄦𑄚𑄴 𑄘𑄨𑄢𑄴𑄦𑄟𑄴",
                symbol: "MAD"
            },
            MAF: {
                displayName: "𑄟𑄮𑄢𑄮𑄇𑄳𑄦𑄚𑄴 𑄜𑄳𑄢𑄋𑄳𑄇𑄴"
            },
            MDL: {
                displayName: "𑄟𑄮𑄣𑄴𑄓𑄮𑄞𑄚𑄴 𑄣𑄬𑄠𑄪",
                "displayName-count-one": "𑄟𑄮𑄣𑄴𑄓𑄮𑄞𑄚𑄴 𑄣𑄬𑄠𑄪",
                "displayName-count-other": "𑄟𑄮𑄣𑄴𑄓𑄮𑄞𑄚𑄴 𑄣𑄬𑄠𑄪",
                symbol: "MDL"
            },
            MGA: {
                displayName: "𑄟𑄘𑄉𑄌𑄴𑄇𑄢𑄴 𑄃𑄢𑄨𑄠𑄢𑄨",
                "displayName-count-one": "𑄟𑄘𑄉𑄌𑄴𑄇𑄢𑄴 𑄃𑄢𑄨𑄠𑄢𑄨",
                "displayName-count-other": "𑄟𑄘𑄉𑄌𑄴𑄇𑄢𑄴 𑄃𑄢𑄨𑄠𑄢𑄨",
                symbol: "MGA",
                "symbol-alt-narrow": "Ar"
            },
            MGF: {
                displayName: "𑄟𑄘𑄉𑄌𑄴𑄇𑄢𑄴 𑄜𑄳𑄢𑄋𑄳𑄇𑄴"
            },
            MKD: {
                displayName: "𑄟𑄳𑄠𑄥𑄬𑄓𑄮𑄚𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-one": "𑄟𑄳𑄠𑄥𑄬𑄓𑄮𑄚𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-other": "𑄟𑄳𑄠𑄥𑄬𑄓𑄮𑄚𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                symbol: "MKD"
            },
            MLF: {
                displayName: "𑄟𑄣𑄨 𑄜𑄳𑄢𑄋𑄳𑄇𑄴"
            },
            MMK: {
                displayName: "𑄟𑄠𑄚𑄴𑄟𑄢𑄴 𑄇𑄨𑄠𑄖𑄴",
                "displayName-count-one": "𑄟𑄠𑄚𑄴𑄟𑄢𑄴 𑄇𑄨𑄠𑄖𑄴",
                "displayName-count-other": "𑄟𑄠𑄚𑄴𑄟𑄢𑄴 𑄇𑄨𑄠𑄖𑄴",
                symbol: "MMK",
                "symbol-alt-narrow": "K"
            },
            MNT: {
                displayName: "𑄟𑄧𑄋𑄴𑄉𑄮𑄣𑄨𑄠𑄚𑄴 𑄖𑄪𑄇𑄴𑄢𑄨𑄇𑄴",
                "displayName-count-one": "𑄟𑄧𑄋𑄴𑄉𑄮𑄣𑄨𑄠𑄚𑄴 𑄖𑄪𑄇𑄴𑄢𑄨𑄇𑄴",
                "displayName-count-other": "𑄟𑄧𑄋𑄴𑄉𑄮𑄣𑄨𑄠𑄚𑄴 𑄖𑄪𑄇𑄴𑄢𑄨𑄇𑄴",
                symbol: "MNT",
                "symbol-alt-narrow": "₮"
            },
            MOP: {
                displayName: "𑄟𑄳𑄠𑄇𑄳𑄠𑄃𑄮 𑄛𑄑𑄇",
                "displayName-count-one": "𑄟𑄳𑄠𑄇𑄳𑄠𑄃𑄮 𑄛𑄑𑄇",
                "displayName-count-other": "𑄟𑄳𑄠𑄇𑄳𑄠𑄃𑄮 𑄛𑄑𑄇",
                symbol: "MOP"
            },
            MRO: {
                displayName: "𑄟𑄯𑄢𑄨𑄖𑄚𑄨𑄠𑄚𑄴 𑄃𑄮𑄃𑄪𑄉𑄭𑄪𑄠",
                "displayName-count-one": "𑄟𑄯𑄢𑄨𑄖𑄚𑄨𑄠𑄚𑄴 𑄃𑄮𑄃𑄪𑄉𑄭𑄪𑄠",
                "displayName-count-other": "𑄟𑄯𑄢𑄨𑄖𑄚𑄨𑄠𑄚𑄴 𑄃𑄮𑄃𑄪𑄉𑄭𑄪𑄠",
                symbol: "MRO"
            },
            MTL: {
                displayName: "𑄟𑄣𑄴𑄑 𑄣𑄨𑄢"
            },
            MTP: {
                displayName: "𑄟𑄣𑄴𑄑 𑄛𑄃𑄪𑄚𑄳𑄓𑄴"
            },
            MUR: {
                displayName: "𑄟𑄯𑄢𑄨𑄖𑄚𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨",
                "displayName-count-one": "𑄟𑄯𑄢𑄨𑄖𑄚𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨",
                "displayName-count-other": "𑄟𑄯𑄢𑄨𑄖𑄚𑄨𑄠𑄚𑄴 𑄢𑄪𑄛𑄨",
                symbol: "MUR",
                "symbol-alt-narrow": "Rs"
            },
            MVR: {
                displayName: "𑄟𑄣𑄴𑄘𑄨𑄞𑄨𑄠𑄚𑄴 𑄢𑄪𑄜𑄨𑄠",
                "displayName-count-one": "𑄟𑄣𑄴𑄘𑄨𑄞𑄨𑄠𑄚𑄴 𑄢𑄪𑄜𑄨𑄠",
                "displayName-count-other": "𑄟𑄣𑄴𑄘𑄨𑄞𑄨𑄠𑄚𑄴 𑄢𑄪𑄜𑄨𑄠",
                symbol: "MVR"
            },
            MWK: {
                displayName: "𑄟𑄣𑄃𑄪𑄃𑄨𑄠𑄚𑄴 𑄇𑄧𑄤𑄌𑄴",
                "displayName-count-one": "𑄟𑄣𑄃𑄪𑄃𑄨𑄠𑄚𑄴 𑄇𑄧𑄤𑄌𑄴",
                "displayName-count-other": "𑄟𑄣𑄃𑄪𑄃𑄨𑄠𑄚𑄴 𑄇𑄧𑄤𑄌𑄴",
                symbol: "MWK"
            },
            MXN: {
                displayName: "𑄟𑄳𑄠𑄇𑄴𑄥𑄨𑄇𑄚𑄴 𑄛𑄬𑄥𑄮",
                "displayName-count-one": "𑄟𑄳𑄠𑄇𑄴𑄥𑄨𑄇𑄚𑄴 𑄛𑄬𑄥𑄮",
                "displayName-count-other": "𑄟𑄳𑄠𑄇𑄴𑄥𑄨𑄇𑄚𑄴 𑄛𑄬𑄥𑄮",
                symbol: "MX$",
                "symbol-alt-narrow": "$"
            },
            MXP: {
                displayName: "𑄟𑄳𑄠𑄇𑄴𑄥𑄨𑄇𑄚𑄴 𑄥𑄨𑄣𑄴𑄞𑄢𑄴 𑄛𑄬𑄥𑄮 (𑄷𑄾𑄼𑄷-𑄷𑄿𑄿𑄸)"
            },
            MXV: {
                displayName: "𑄟𑄬𑄇𑄴𑄥𑄨𑄇𑄚𑄴 𑄃𑄪𑄚𑄨𑄘𑄖𑄴 𑄘𑄨 𑄃𑄨𑄚𑄴𑄞𑄢𑄴𑄥𑄧𑄚𑄴(UDI)"
            },
            MYR: {
                displayName: "𑄟𑄣𑄴𑄠𑄬𑄥𑄨𑄠𑄚𑄴 𑄢𑄨𑄁𑄉𑄨𑄖𑄴",
                "displayName-count-one": "𑄟𑄣𑄴𑄠𑄬𑄥𑄨𑄠𑄚𑄴 𑄢𑄨𑄁𑄉𑄨𑄖𑄴",
                "displayName-count-other": "𑄟𑄣𑄴𑄠𑄬𑄥𑄨𑄠𑄚𑄴 𑄢𑄨𑄁𑄉𑄨𑄖𑄴",
                symbol: "MYR",
                "symbol-alt-narrow": "RM"
            },
            MZE: {
                displayName: "𑄟𑄮𑄎𑄟𑄴𑄝𑄨𑄇𑄴 𑄃𑄬𑄥𑄴𑄇𑄪𑄓𑄮"
            },
            MZM: {
                displayName: "𑄛𑄪𑄢𑄮𑄚𑄨 𑄟𑄮𑄎𑄟𑄴𑄝𑄨𑄇𑄴 𑄟𑄬𑄑𑄨𑄇𑄬𑄣𑄴"
            },
            MZN: {
                displayName: "𑄟𑄮𑄎𑄟𑄴𑄝𑄨𑄇𑄴 𑄟𑄬𑄑𑄨𑄇𑄬𑄣𑄴",
                "displayName-count-one": "𑄟𑄮𑄎𑄟𑄴𑄝𑄨𑄇𑄴 𑄟𑄬𑄑𑄨𑄇𑄬𑄣𑄴",
                "displayName-count-other": "𑄟𑄮𑄎𑄟𑄴𑄝𑄨𑄇𑄴 𑄟𑄬𑄑𑄨𑄇𑄬𑄣𑄴",
                symbol: "MZN"
            },
            NAD: {
                displayName: "𑄚𑄟𑄨𑄝𑄨𑄠 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄚𑄟𑄨𑄝𑄨𑄠 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄚𑄟𑄨𑄝𑄨𑄠 𑄓𑄧𑄣𑄢𑄴",
                symbol: "NAD",
                "symbol-alt-narrow": "$"
            },
            NGN: {
                displayName: "𑄚𑄭𑄎𑄬𑄢𑄨𑄠𑄚𑄴 𑄚𑄠𑄴𑄢",
                "displayName-count-one": "𑄚𑄭𑄎𑄬𑄢𑄨𑄠𑄚𑄴 𑄚𑄠𑄴𑄢",
                "displayName-count-other": "𑄚𑄭𑄎𑄬𑄢𑄨𑄠𑄚𑄴 𑄚𑄠𑄴𑄢",
                symbol: "NGN",
                "symbol-alt-narrow": "₦"
            },
            NIC: {
                displayName: "𑄚𑄨𑄇𑄢𑄉𑄪𑄠𑄚 𑄇𑄧𑄢𑄴𑄓𑄮𑄝(𑄷𑄿𑄾𑄾-𑄷𑄿𑄿𑄷)"
            },
            NIO: {
                displayName: "𑄚𑄨𑄇𑄢𑄉𑄪𑄠𑄚 𑄇𑄧𑄢𑄴𑄓𑄮𑄝",
                "displayName-count-one": "𑄚𑄨𑄇𑄢𑄉𑄪𑄠𑄚 𑄇𑄧𑄢𑄴𑄓𑄮𑄝",
                "displayName-count-other": "𑄚𑄨𑄇𑄢𑄉𑄪𑄠𑄚 𑄇𑄧𑄢𑄴𑄓𑄮𑄝",
                symbol: "NIO",
                "symbol-alt-narrow": "C$"
            },
            NLG: {
                displayName: "𑄚𑄬𑄘𑄢𑄴𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄉𑄪𑄣𑄴𑄓𑄬𑄢𑄴"
            },
            NOK: {
                displayName: "𑄚𑄧𑄢𑄴𑄃𑄮𑄠𑄬 𑄇𑄳𑄢𑄯𑄚𑄴",
                "displayName-count-one": "𑄚𑄧𑄢𑄴𑄃𑄮𑄠𑄬 𑄇𑄳𑄢𑄯𑄚𑄴",
                "displayName-count-other": "𑄚𑄧𑄢𑄴𑄃𑄮𑄠𑄬 𑄇𑄳𑄢𑄯𑄚𑄴",
                symbol: "NOK",
                "symbol-alt-narrow": "kr"
            },
            NPR: {
                displayName: "𑄚𑄬𑄛𑄣𑄨 𑄢𑄪𑄛𑄨",
                "displayName-count-one": "𑄚𑄬𑄛𑄣𑄨 𑄢𑄪𑄛𑄨",
                "displayName-count-other": "𑄚𑄬𑄛𑄣𑄨 𑄢𑄪𑄛𑄨",
                symbol: "NPR",
                "symbol-alt-narrow": "Rs"
            },
            NZD: {
                displayName: "𑄚𑄨𑄃𑄪𑄎𑄨𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄚𑄨𑄃𑄪𑄎𑄨𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄚𑄨𑄃𑄪𑄎𑄨𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "NZ$",
                "symbol-alt-narrow": "$"
            },
            OMR: {
                displayName: "𑄃𑄮𑄟𑄚𑄨 𑄢𑄨𑄠𑄣𑄴",
                "displayName-count-one": "𑄃𑄮𑄟𑄚𑄨 𑄢𑄨𑄠𑄣𑄴",
                "displayName-count-other": "𑄃𑄮𑄟𑄚𑄨 𑄢𑄨𑄠𑄣𑄴",
                symbol: "OMR"
            },
            PAB: {
                displayName: "𑄛𑄚𑄟 𑄝𑄬𑄣𑄴𑄝𑄮𑄠",
                "displayName-count-one": "𑄛𑄚𑄟 𑄝𑄬𑄣𑄴𑄝𑄮𑄠",
                "displayName-count-other": "𑄛𑄚𑄟 𑄝𑄬𑄣𑄴𑄝𑄮𑄠",
                symbol: "PAB"
            },
            PEI: {
                displayName: "𑄛𑄬𑄢𑄪𑄞𑄨𑄠𑄚𑄴 𑄃𑄨𑄚𑄴𑄖𑄨"
            },
            PEN: {
                displayName: "𑄛𑄬𑄢𑄪𑄞𑄨𑄠𑄚𑄴 𑄥𑄮𑄣𑄴",
                "displayName-count-one": "𑄛𑄬𑄢𑄪𑄞𑄨𑄠𑄚𑄴 𑄥𑄮𑄣𑄴",
                "displayName-count-other": "𑄛𑄬𑄢𑄪𑄞𑄨𑄠𑄚𑄴 𑄥𑄮𑄣𑄴",
                symbol: "PEN"
            },
            PES: {
                displayName: "𑄛𑄬𑄢𑄪𑄞𑄨𑄠𑄚𑄴 𑄥𑄮𑄣𑄴(𑄷𑄾𑄼𑄹-𑄷𑄿𑄼𑄻)",
                "displayName-count-one": "𑄛𑄬𑄢𑄪𑄞𑄨𑄠𑄚𑄴 𑄥𑄮𑄣𑄴(𑄷𑄾𑄼𑄹-𑄷𑄿𑄼𑄻)",
                "displayName-count-other": "𑄛𑄬𑄢𑄪𑄞𑄨𑄠𑄚𑄴 𑄥𑄮𑄣𑄴(𑄷𑄾𑄼𑄹-𑄷𑄿𑄼𑄻)"
            },
            PGK: {
                displayName: "𑄛𑄛𑄱 𑄚𑄨𑄃𑄪 𑄉𑄨𑄚𑄨 𑄉𑄨𑄚𑄨𑄠𑄚𑄴 𑄇𑄨𑄚",
                "displayName-count-one": "𑄛𑄛𑄱 𑄚𑄨𑄃𑄪 𑄉𑄨𑄚𑄨 𑄉𑄨𑄚𑄨𑄠𑄚𑄴 𑄇𑄨𑄚",
                "displayName-count-other": "𑄛𑄛𑄱 𑄚𑄨𑄃𑄪 𑄉𑄨𑄚𑄨 𑄉𑄨𑄚𑄨𑄠𑄚𑄴 𑄇𑄨𑄚",
                symbol: "PGK"
            },
            PHP: {
                displayName: "𑄜𑄨𑄣𑄨𑄛𑄭𑄚𑄴 𑄛𑄬𑄥𑄮",
                "displayName-count-one": "𑄜𑄨𑄣𑄨𑄛𑄭𑄚𑄴 𑄛𑄬𑄥𑄮",
                "displayName-count-other": "𑄜𑄨𑄣𑄨𑄛𑄭𑄚𑄴 𑄛𑄬𑄥𑄮",
                symbol: "PHP",
                "symbol-alt-narrow": "₱"
            },
            PKR: {
                displayName: "𑄛𑄇𑄨𑄥𑄴𑄖𑄚𑄨 𑄢𑄪𑄛𑄨",
                "displayName-count-one": "𑄛𑄇𑄨𑄥𑄴𑄖𑄚𑄨 𑄢𑄪𑄛𑄨",
                "displayName-count-other": "𑄛𑄇𑄨𑄥𑄴𑄖𑄚𑄨 𑄢𑄪𑄛𑄨",
                symbol: "PKR",
                "symbol-alt-narrow": "Rs"
            },
            PLN: {
                displayName: "𑄛𑄮𑄣𑄨𑄌𑄴 𑄎𑄧𑄣𑄮𑄑𑄨",
                "displayName-count-one": "𑄛𑄮𑄣𑄨𑄌𑄴 𑄎𑄧𑄣𑄮𑄑𑄨",
                "displayName-count-other": "𑄛𑄮𑄣𑄨𑄌𑄴 𑄎𑄧𑄣𑄮𑄑𑄨",
                symbol: "PLN",
                "symbol-alt-narrow": "zł"
            },
            PLZ: {
                displayName: "𑄛𑄮𑄣𑄨𑄌𑄴 𑄎𑄧𑄣𑄮𑄑𑄨(𑄷𑄿𑄻𑄶-𑄷𑄿𑄿𑄻)"
            },
            PTE: {
                displayName: "𑄛𑄧𑄢𑄴𑄖𑄪𑄉𑄨𑄌𑄴 𑄃𑄬𑄥𑄴𑄇𑄪𑄓𑄮"
            },
            PYG: {
                displayName: "𑄛𑄳𑄠𑄢𑄉𑄪𑄠𑄚𑄴 𑄉𑄪𑄠𑄢𑄚𑄨",
                "displayName-count-one": "𑄛𑄳𑄠𑄢𑄉𑄪𑄠𑄚𑄴 𑄉𑄪𑄠𑄢𑄚𑄨",
                "displayName-count-other": "𑄛𑄳𑄠𑄢𑄉𑄪𑄠𑄚𑄴 𑄉𑄪𑄠𑄢𑄚𑄨",
                symbol: "PYG",
                "symbol-alt-narrow": "₲"
            },
            QAR: {
                displayName: "𑄇𑄖𑄢𑄴 𑄢𑄨𑄠𑄳𑄠𑄣𑄴",
                "displayName-count-one": "𑄇𑄖𑄢𑄴 𑄢𑄨𑄠𑄳𑄠𑄣𑄴",
                "displayName-count-other": "𑄇𑄖𑄢𑄴 𑄢𑄨𑄠𑄳𑄠𑄣𑄴",
                symbol: "QAR"
            },
            RHD: {
                displayName: "𑄢𑄮𑄓𑄬𑄥𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴"
            },
            ROL: {
                displayName: "𑄛𑄪𑄢𑄮𑄚𑄨 𑄢𑄪𑄟𑄚𑄨𑄠 𑄣𑄬𑄠𑄪"
            },
            RON: {
                displayName: "𑄢𑄪𑄟𑄚𑄨𑄠 𑄣𑄬𑄠𑄪",
                "displayName-count-one": "𑄢𑄪𑄟𑄚𑄨𑄠 𑄣𑄬𑄠𑄪",
                "displayName-count-other": "𑄢𑄪𑄟𑄚𑄨𑄠 𑄣𑄬𑄠𑄪",
                symbol: "RON",
                "symbol-alt-narrow": "lei"
            },
            RSD: {
                displayName: "𑄥𑄢𑄴𑄝𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-one": "𑄥𑄢𑄴𑄝𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-other": "𑄥𑄢𑄴𑄝𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                symbol: "RSD"
            },
            RUB: {
                displayName: "𑄢𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴",
                "displayName-count-one": "𑄢𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴",
                "displayName-count-other": "𑄢𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄬𑄣𑄴",
                symbol: "RUB",
                "symbol-alt-narrow": "₽"
            },
            RUR: {
                displayName: "𑄢𑄥𑄨𑄠𑄚𑄴 𑄢𑄪𑄝𑄧𑄣𑄴(𑄷𑄿𑄿𑄷-𑄷𑄿𑄿𑄾)"
            },
            RWF: {
                displayName: "𑄢𑄪𑄠𑄚𑄴𑄓𑄚𑄴 𑄜𑄳𑄢𑄋𑄳𑄇𑄴",
                "displayName-count-one": "𑄢𑄪𑄠𑄚𑄴𑄓𑄚𑄴 𑄜𑄳𑄢𑄋𑄳𑄇𑄴",
                "displayName-count-other": "𑄢𑄪𑄠𑄚𑄴𑄓𑄚𑄴 𑄜𑄳𑄢𑄋𑄳𑄇𑄴",
                symbol: "RWF",
                "symbol-alt-narrow": "RF"
            },
            SAR: {
                displayName: "𑄥𑄯𑄘𑄨 𑄢𑄨𑄠𑄣𑄴",
                "displayName-count-one": "𑄥𑄯𑄘𑄨 𑄢𑄨𑄠𑄣𑄴",
                "displayName-count-other": "𑄥𑄯𑄘𑄨 𑄢𑄨𑄠𑄣𑄴",
                symbol: "SAR"
            },
            SBD: {
                displayName: "𑄥𑄧𑄣𑄮𑄟𑄧𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄢𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄥𑄧𑄣𑄮𑄟𑄧𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄢𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄥𑄧𑄣𑄮𑄟𑄧𑄚𑄴 𑄉𑄭 𑄉𑄭 𑄞𑄨𑄘𑄬𑄢𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "SBD",
                "symbol-alt-narrow": "$"
            },
            SCR: {
                displayName: "𑄥𑄬𑄠𑄧𑄥𑄬𑄣𑄴𑄣𑄮𑄃𑄨𑄌𑄴 𑄢𑄪𑄛𑄨",
                "displayName-count-one": "𑄥𑄬𑄠𑄧𑄥𑄬𑄣𑄴𑄣𑄮𑄃𑄨𑄌𑄴 𑄢𑄪𑄛𑄨",
                "displayName-count-other": "𑄥𑄬𑄠𑄧𑄥𑄬𑄣𑄴𑄣𑄮𑄃𑄨𑄌𑄴 𑄢𑄪𑄛𑄨",
                symbol: "SCR"
            },
            SDD: {
                displayName: "𑄛𑄪𑄢𑄮𑄚𑄨 𑄥𑄪𑄘𑄚𑄨 𑄘𑄨𑄚𑄢𑄴"
            },
            SDG: {
                displayName: "𑄥𑄪𑄘𑄚𑄨 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-one": "𑄥𑄪𑄘𑄚𑄨 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-other": "𑄥𑄪𑄘𑄚𑄨 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                symbol: "SDG"
            },
            SDP: {
                displayName: "𑄛𑄪𑄢𑄮𑄚𑄨 𑄥𑄪𑄘𑄚𑄨 𑄛𑄃𑄪𑄚𑄳𑄓𑄴"
            },
            SEK: {
                displayName: "𑄥𑄭𑄪𑄓𑄨𑄥𑄴 𑄇𑄳𑄢𑄮𑄚",
                "displayName-count-one": "𑄥𑄭𑄪𑄓𑄨𑄥𑄴 𑄇𑄳𑄢𑄮𑄚",
                "displayName-count-other": "𑄥𑄭𑄪𑄓𑄨𑄥𑄴 𑄇𑄳𑄢𑄮𑄚",
                symbol: "SEK",
                "symbol-alt-narrow": "kr"
            },
            SGD: {
                displayName: "𑄥𑄨𑄁𑄉𑄛𑄪𑄢𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄥𑄨𑄁𑄉𑄛𑄪𑄢𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄥𑄨𑄁𑄉𑄛𑄪𑄢𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "SGD",
                "symbol-alt-narrow": "$"
            },
            SHP: {
                displayName: "𑄥𑄬𑄚𑄳𑄑𑄴 𑄦𑄬𑄣𑄬𑄚 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-one": "𑄥𑄬𑄚𑄴 𑄦𑄬𑄣𑄬𑄚 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-other": "𑄥𑄬𑄚𑄴 𑄦𑄬𑄣𑄬𑄚 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                symbol: "SHP",
                "symbol-alt-narrow": "£"
            },
            SIT: {
                displayName: "𑄥𑄳𑄣𑄮𑄞𑄚𑄨𑄠 𑄑𑄮𑄣𑄢𑄴"
            },
            SKK: {
                displayName: "𑄥𑄳𑄣𑄮𑄞𑄇𑄴 𑄇𑄮𑄢𑄪𑄚"
            },
            SLL: {
                displayName: "𑄥𑄨𑄠𑄬𑄢𑄣𑄨𑄠𑄧𑄚𑄴 𑄣𑄨𑄠𑄧𑄚𑄴",
                "displayName-count-one": "𑄥𑄨𑄠𑄬𑄢𑄣𑄨𑄠𑄧𑄚𑄴 𑄣𑄨𑄠𑄧𑄚𑄴",
                "displayName-count-other": "𑄥𑄨𑄠𑄬𑄢𑄣𑄨𑄠𑄧𑄚𑄴 𑄣𑄨𑄠𑄧𑄚𑄴",
                symbol: "SLL"
            },
            SOS: {
                displayName: "𑄥𑄮𑄟𑄣𑄨 𑄥𑄨𑄣𑄨𑄁",
                "displayName-count-one": "𑄥𑄮𑄟𑄣𑄨 𑄥𑄨𑄣𑄨𑄁",
                "displayName-count-other": "𑄥𑄮𑄟𑄣𑄨 𑄥𑄨𑄣𑄨𑄁",
                symbol: "SOS"
            },
            SRD: {
                displayName: "𑄥𑄪𑄢𑄨𑄚𑄟𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄥𑄪𑄢𑄨𑄚𑄟𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄥𑄪𑄢𑄨𑄚𑄟𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "SRD",
                "symbol-alt-narrow": "$"
            },
            SRG: {
                displayName: "𑄥𑄪𑄢𑄨𑄚𑄟𑄴 𑄉𑄨𑄣𑄴𑄓𑄢𑄴"
            },
            SSP: {
                displayName: "𑄘𑄧𑄉𑄨𑄚𑄴 𑄥𑄪𑄘𑄚𑄨 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-one": "𑄘𑄧𑄉𑄨𑄚𑄴 𑄥𑄪𑄘𑄚𑄨 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-other": "𑄘𑄧𑄉𑄨𑄚𑄴 𑄥𑄪𑄘𑄚𑄨 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                symbol: "SSP",
                "symbol-alt-narrow": "£"
            },
            STD: {
                displayName: "𑄥𑄃𑄮 𑄑𑄮𑄟𑄬 𑄃𑄳𑄃 𑄛𑄳𑄢𑄨𑄚𑄴𑄥𑄨𑄛𑄬 𑄓𑄮𑄛𑄴𑄢",
                "displayName-count-one": "𑄥𑄃𑄮 𑄑𑄮𑄟𑄬 𑄃𑄳𑄃 𑄛𑄳𑄢𑄨𑄚𑄴𑄥𑄨𑄛𑄬 𑄓𑄮𑄛𑄴𑄢",
                "displayName-count-other": "𑄥𑄃𑄮 𑄑𑄮𑄟𑄬 𑄃𑄳𑄃 𑄛𑄳𑄢𑄨𑄚𑄴𑄥𑄨𑄛𑄬 𑄓𑄮𑄛𑄴𑄢",
                symbol: "STD",
                "symbol-alt-narrow": "Db"
            },
            STN: {
                "symbol-alt-narrow": "Db"
            },
            SUR: {
                displayName: "𑄥𑄮𑄣𑄨𑄠𑄬𑄖𑄴 𑄢𑄪𑄝𑄧𑄣𑄴"
            },
            SVC: {
                displayName: "𑄃𑄬𑄣𑄴 𑄥𑄳𑄠𑄣𑄴𑄞𑄮𑄓𑄮𑄢𑄴 𑄇𑄮𑄣𑄮𑄚𑄴"
            },
            SYP: {
                displayName: "𑄥𑄨𑄢𑄨𑄠𑄚𑄴 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-one": "𑄥𑄨𑄢𑄨𑄠𑄚𑄴 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                "displayName-count-other": "𑄥𑄨𑄢𑄨𑄠𑄚𑄴 𑄛𑄃𑄪𑄚𑄳𑄓𑄴",
                symbol: "SYP",
                "symbol-alt-narrow": "£"
            },
            SZL: {
                displayName: "𑄥𑄮𑄠𑄎𑄨𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄣𑄨𑄣𑄋𑄴𑄉𑄬𑄚𑄨",
                "displayName-count-one": "𑄥𑄮𑄠𑄎𑄨𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄣𑄨𑄣𑄋𑄴𑄉𑄬𑄚𑄨",
                "displayName-count-other": "𑄥𑄮𑄠𑄎𑄨𑄣𑄳𑄠𑄚𑄳𑄓𑄴 𑄣𑄨𑄣𑄋𑄴𑄉𑄬𑄚𑄨",
                symbol: "SZL"
            },
            THB: {
                displayName: "𑄗𑄭 𑄝𑄖𑄴",
                "displayName-count-one": "𑄗𑄭 𑄝𑄖𑄴",
                "displayName-count-other": "𑄗𑄭 𑄝𑄖𑄴",
                symbol: "฿",
                "symbol-alt-narrow": "฿"
            },
            TJR: {
                displayName: "𑄖𑄎𑄨𑄇𑄨𑄌𑄴𑄖𑄚𑄴 𑄢𑄪𑄝𑄧𑄣𑄴"
            },
            TJS: {
                displayName: "𑄖𑄎𑄨𑄇𑄨𑄌𑄴𑄖𑄚𑄴 𑄥𑄮𑄟𑄮𑄚𑄨",
                "displayName-count-one": "𑄖𑄎𑄨𑄇𑄨𑄌𑄴𑄖𑄚𑄴 𑄥𑄮𑄟𑄮𑄚𑄨",
                "displayName-count-other": "𑄖𑄎𑄨𑄇𑄨𑄌𑄴𑄖𑄚𑄴 𑄥𑄮𑄟𑄮𑄚𑄨",
                symbol: "TJS"
            },
            TMM: {
                displayName: "𑄖𑄪𑄢𑄴𑄇𑄧𑄟𑄬𑄚𑄨𑄌𑄴𑄖𑄚𑄨 𑄟𑄚𑄖𑄴 (1993–2009)"
            },
            TMT: {
                displayName: "𑄖𑄪𑄢𑄴𑄇𑄧𑄟𑄬𑄚𑄨𑄌𑄴𑄖𑄚𑄨 𑄟𑄚𑄖𑄴",
                "displayName-count-one": "𑄖𑄪𑄢𑄴𑄇𑄧𑄟𑄬𑄚𑄨𑄌𑄴𑄖𑄚𑄨 𑄟𑄚𑄖𑄴",
                "displayName-count-other": "𑄖𑄪𑄢𑄴𑄇𑄧𑄟𑄬𑄚𑄨𑄌𑄴𑄖𑄚𑄨 𑄟𑄚𑄖𑄴",
                symbol: "TMT"
            },
            TND: {
                displayName: "𑄖𑄨𑄃𑄪𑄚𑄬𑄥𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-one": "𑄖𑄨𑄃𑄪𑄚𑄬𑄥𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                "displayName-count-other": "𑄖𑄨𑄃𑄪𑄚𑄬𑄥𑄨𑄠𑄚𑄴 𑄘𑄨𑄚𑄢𑄴",
                symbol: "TND"
            },
            TOP: {
                displayName: "𑄑𑄮𑄋𑄴𑄉 𑄛𑄳𑄃 𑄃𑄋𑄴𑄉",
                "displayName-count-one": "𑄑𑄮𑄋𑄴𑄉 𑄛𑄳𑄃 𑄃𑄋𑄴𑄉",
                "displayName-count-other": "𑄑𑄮𑄋𑄴𑄉 𑄛𑄳𑄃 𑄃𑄋𑄴𑄉",
                symbol: "TOP",
                "symbol-alt-narrow": "T$"
            },
            TPE: {
                displayName: "𑄖𑄨𑄟𑄪𑄢𑄴 𑄃𑄬𑄌𑄴𑄇𑄪𑄓𑄮"
            },
            TRL: {
                displayName: "𑄛𑄪𑄢𑄮𑄚𑄴 𑄖𑄪𑄢𑄴𑄇𑄨 𑄣𑄨𑄢"
            },
            TRY: {
                displayName: "𑄖𑄪𑄢𑄴𑄇𑄨 𑄣𑄨𑄢",
                "displayName-count-one": "𑄖𑄪𑄢𑄴𑄇𑄨 𑄣𑄨𑄢",
                "displayName-count-other": "𑄖𑄪𑄢𑄴𑄇𑄨 𑄣𑄨𑄢",
                symbol: "TRY",
                "symbol-alt-narrow": "₺",
                "symbol-alt-variant": "TL"
            },
            TTD: {
                displayName: "𑄖𑄳𑄢𑄨𑄚𑄨𑄘𑄖𑄴 𑄃𑄳𑄃 𑄑𑄮𑄝𑄉𑄮 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄖𑄳𑄢𑄨𑄚𑄨𑄘𑄖𑄴 𑄃𑄳𑄃 𑄑𑄮𑄝𑄉𑄮 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄖𑄳𑄢𑄨𑄚𑄨𑄘𑄖𑄴 𑄃𑄳𑄃 𑄑𑄮𑄝𑄉𑄮 𑄓𑄧𑄣𑄢𑄴",
                symbol: "TTD",
                "symbol-alt-narrow": "$"
            },
            TWD: {
                displayName: "𑄚𑄱 𑄦𑄭𑄤𑄚𑄴𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄚𑄱 𑄦𑄭𑄤𑄚𑄴𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄚𑄱 𑄦𑄭𑄤𑄚𑄴𑄓𑄧𑄣𑄢𑄴",
                symbol: "NT$",
                "symbol-alt-narrow": "NT$"
            },
            TZS: {
                displayName: "𑄖𑄚𑄴𑄎𑄚𑄨𑄠 𑄥𑄨𑄣𑄨𑄁",
                "displayName-count-one": "𑄖𑄚𑄴𑄎𑄚𑄨𑄠 𑄥𑄨𑄣𑄨𑄁",
                "displayName-count-other": "𑄖𑄚𑄴𑄎𑄚𑄨𑄠 𑄥𑄨𑄣𑄨𑄁",
                symbol: "TZS"
            },
            UAH: {
                displayName: "ই𑄃𑄨𑄃𑄪𑄇𑄳𑄢𑄭𑄚𑄴 𑄢𑄨𑄛𑄴𑄚𑄨𑄠",
                "displayName-count-one": "𑄃𑄨𑄃𑄪𑄇𑄳𑄢𑄭𑄚𑄴 𑄢𑄨𑄛𑄴𑄚𑄨𑄠",
                "displayName-count-other": "𑄃𑄨𑄃𑄪𑄇𑄳𑄢𑄭𑄚𑄴 𑄢𑄨𑄛𑄴𑄚𑄨𑄠",
                symbol: "UAH",
                "symbol-alt-narrow": "₴"
            },
            UAK: {
                displayName: "𑄃𑄨𑄃𑄪𑄇𑄳𑄢𑄭𑄚𑄴 𑄇𑄢𑄴𑄝𑄮𑄞𑄳𑄠𑄚𑄴𑄑𑄧𑄌𑄴"
            },
            UGS: {
                displayName: "𑄃𑄪𑄉𑄚𑄴𑄓𑄚𑄴 𑄥𑄨𑄣𑄨𑄁 (𑄷𑄿𑄼𑄼-𑄷𑄿𑄾𑄽)"
            },
            UGX: {
                displayName: "𑄃𑄪𑄉𑄚𑄴𑄓𑄚𑄴 𑄥𑄨𑄣𑄨𑄁",
                "displayName-count-one": "𑄃𑄪𑄉𑄚𑄴𑄓𑄚𑄴 𑄥𑄨𑄣𑄨𑄁",
                "displayName-count-other": "𑄃𑄪𑄉𑄚𑄴𑄓𑄚𑄴 𑄥𑄨𑄣𑄨𑄁",
                symbol: "UGX"
            },
            USD: {
                displayName: "𑄟𑄢𑄴𑄇𑄨𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄟𑄢𑄴𑄇𑄨𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄟𑄢𑄴𑄇𑄨𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "US$",
                "symbol-alt-narrow": "$"
            },
            USN: {
                displayName: "𑄟𑄢𑄴𑄇𑄨𑄚𑄴 𑄓𑄧𑄣𑄢𑄴 (𑄛𑄧𑄢𑄬 𑄘𑄨𑄚𑄴)"
            },
            USS: {
                displayName: "𑄟𑄢𑄴𑄇𑄨𑄚𑄴 𑄓𑄧𑄣𑄢𑄴 (𑄃𑄬𑄇𑄴𑄇𑄰𑄪 𑄘𑄨𑄚𑄴)"
            },
            UYI: {
                displayName: "𑄃𑄪𑄢𑄪𑄉𑄪𑄠𑄚𑄴 𑄛𑄬𑄥𑄮 𑄃𑄬𑄚𑄴 𑄃𑄪𑄚𑄨𑄘𑄘𑄬𑄌𑄴 𑄃𑄨𑄚𑄴𑄓𑄬𑄇𑄴𑄥𑄬𑄓𑄥𑄴"
            },
            UYP: {
                displayName: "𑄃𑄪𑄢𑄪𑄉𑄪𑄠𑄬 𑄛𑄬𑄥𑄮 (𑄷𑄿𑄽𑄻-𑄷𑄿𑄿𑄹)"
            },
            UYU: {
                displayName: "𑄃𑄪𑄢𑄪𑄉𑄪𑄠𑄬 𑄛𑄬𑄥𑄮",
                "displayName-count-one": "𑄃𑄪𑄢𑄪𑄉𑄪𑄠𑄬 𑄛𑄬𑄥𑄮",
                "displayName-count-other": "𑄃𑄪𑄢𑄪𑄉𑄪𑄠𑄬 𑄛𑄬𑄥𑄮",
                symbol: "UYU",
                "symbol-alt-narrow": "$"
            },
            UZS: {
                displayName: "𑄃𑄪𑄌𑄴𑄝𑄬𑄇𑄨𑄌𑄴𑄖𑄚𑄨 𑄥𑄮𑄟𑄴",
                "displayName-count-one": "𑄃𑄪𑄌𑄴𑄝𑄬𑄇𑄨𑄌𑄴𑄖𑄚𑄨 𑄥𑄮𑄟𑄴",
                "displayName-count-other": "𑄃𑄪𑄌𑄴𑄝𑄬𑄇𑄨𑄌𑄴𑄖𑄚𑄨 𑄥𑄮𑄟𑄴",
                symbol: "UZS"
            },
            VEB: {
                displayName: "𑄞𑄬𑄚𑄨𑄎𑄪𑄔𑄮𑄣𑄚𑄴 𑄝𑄧𑄣𑄨𑄞𑄢𑄴(𑄷𑄾𑄽𑄷-𑄸𑄶𑄶𑄾)"
            },
            VEF: {
                displayName: "𑄞𑄬𑄚𑄨𑄎𑄪𑄔𑄮𑄣𑄚𑄴 𑄝𑄧𑄣𑄨𑄞𑄢𑄴",
                "displayName-count-one": "𑄞𑄬𑄚𑄨𑄎𑄪𑄔𑄮𑄣𑄚𑄴 𑄝𑄧𑄣𑄨𑄞𑄢𑄴",
                "displayName-count-other": "𑄞𑄬𑄚𑄨𑄎𑄪𑄔𑄮𑄣𑄚𑄴 𑄝𑄧𑄣𑄨𑄞𑄢𑄴",
                symbol: "VEF",
                "symbol-alt-narrow": "Bs"
            },
            VND: {
                displayName: "𑄞𑄨𑄠𑄬𑄖𑄴𑄚𑄟𑄨 𑄓𑄧𑄋𑄴𑄉𑄧",
                "displayName-count-one": "𑄞𑄨𑄠𑄬𑄖𑄴𑄚𑄟𑄨 𑄓𑄧𑄋𑄴𑄉𑄧",
                "displayName-count-other": "𑄞𑄨𑄠𑄬𑄖𑄴𑄚𑄟𑄨 𑄓𑄧𑄋𑄴𑄉𑄧",
                symbol: "₫",
                "symbol-alt-narrow": "₫"
            },
            VUV: {
                displayName: "𑄞𑄚𑄪𑄠𑄖𑄪 𑄞𑄖𑄪",
                "displayName-count-one": "𑄞𑄚𑄪𑄠𑄖𑄪 𑄞𑄖𑄪",
                "displayName-count-other": "𑄞𑄚𑄪𑄠𑄖𑄪 𑄞𑄖𑄪",
                symbol: "VUV"
            },
            WST: {
                displayName: "𑄥𑄟𑄮𑄠𑄚𑄴 𑄑𑄣",
                "displayName-count-one": "𑄥𑄟𑄮𑄠𑄚𑄴 𑄑𑄣",
                "displayName-count-other": "𑄥𑄟𑄮𑄠𑄚𑄴 𑄑𑄣",
                symbol: "WST"
            },
            XAF: {
                displayName: "𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴[CFA] 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴",
                "displayName-count-one": "𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴[CFA] 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴",
                "displayName-count-other": "𑄟𑄧𑄖𑄴𑄙𑄳𑄠 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴[CFA] 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴",
                symbol: "FCFA"
            },
            XAG: {
                displayName: "𑄥𑄨𑄣𑄴𑄞𑄢𑄴"
            },
            XAU: {
                displayName: "𑄉𑄮𑄣𑄳𑄓𑄴"
            },
            XCD: {
                displayName: "𑄛𑄪𑄉𑄬𑄘𑄨 𑄇𑄳𑄠𑄢𑄝𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-one": "𑄛𑄪𑄉𑄬𑄘𑄨 𑄇𑄳𑄠𑄢𑄝𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                "displayName-count-other": "𑄛𑄪𑄉𑄬𑄘𑄨 𑄇𑄳𑄠𑄢𑄝𑄨𑄠𑄚𑄴 𑄓𑄧𑄣𑄢𑄴",
                symbol: "EC$",
                "symbol-alt-narrow": "$"
            },
            XEU: {
                displayName: "𑄃𑄨𑄃𑄪𑄢𑄮𑄛𑄨𑄠𑄚𑄴 𑄑𑄬𑄋𑄢𑄴 𑄃𑄬𑄇𑄧𑄇𑄴"
            },
            XFO: {
                displayName: "𑄜𑄧𑄢𑄥𑄨 𑄉𑄮𑄣𑄳𑄓𑄴 𑄜𑄳𑄢𑄋𑄳𑄇𑄴"
            },
            XFU: {
                displayName: "𑄜𑄧𑄢𑄥𑄨 𑄃𑄨𑄃𑄪𑄃𑄭𑄥𑄨 𑄜𑄳𑄢𑄋𑄳𑄇𑄴"
            },
            XOF: {
                displayName: "𑄛𑄧𑄎𑄨𑄟𑄴 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴 [CFA] 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴",
                "displayName-count-one": "𑄛𑄧𑄎𑄨𑄟𑄴 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴 [CFA] 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴",
                "displayName-count-other": "𑄛𑄧𑄎𑄨𑄟𑄴 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴 [CFA] 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴",
                symbol: "F CFA"
            },
            XPD: {
                displayName: "𑄛𑄳𑄠𑄣𑄬𑄓𑄨𑄠𑄟𑄴"
            },
            XPF: {
                displayName: "𑄥𑄨𑄃𑄬𑄛𑄴𑄛𑄨 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴",
                "displayName-count-one": "𑄥𑄨𑄃𑄬𑄛𑄴𑄛𑄨 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴",
                "displayName-count-other": "𑄥𑄨𑄃𑄬𑄛𑄴𑄛𑄨 𑄜𑄳𑄢𑄳𑄠𑄋𑄳𑄇𑄴",
                symbol: "CFPF"
            },
            XPT: {
                displayName: "𑄛𑄳𑄣𑄑𑄨𑄚𑄟𑄴"
            },
            XXX: {
                displayName: "𑄦𑄧𑄝𑄢𑄴 𑄚𑄧𑄛𑄬𑄠𑄬 𑄑𑄬𑄋",
                "displayName-count-one": "𑄦𑄧𑄝𑄧𑄢𑄴 𑄚𑄧𑄛𑄬𑄠𑄬 𑄃𑄳𑄃 𑄞𑄪𑄣𑄴 𑄑𑄬𑄋",
                "displayName-count-other": "𑄦𑄧𑄝𑄧𑄢𑄴 𑄚𑄧𑄛𑄬𑄠𑄬 𑄑𑄬𑄋",
                symbol: "¤"
            },
            YDD: {
                displayName: "𑄃𑄨𑄠𑄬𑄟𑄬𑄚𑄨 𑄘𑄨𑄚𑄢𑄴"
            },
            YER: {
                displayName: "𑄃𑄨𑄠𑄬𑄟𑄬𑄚𑄨 𑄢𑄨𑄠𑄣𑄴",
                "displayName-count-one": "𑄃𑄨𑄠𑄬𑄟𑄬𑄚𑄨 𑄢𑄨𑄠𑄣𑄴",
                "displayName-count-other": "𑄃𑄨𑄠𑄬𑄟𑄬𑄚𑄨 𑄢𑄨𑄠𑄣𑄴",
                symbol: "YER"
            },
            YUD: {
                displayName: "𑄡𑄪𑄉𑄮𑄥𑄳𑄣𑄞𑄨𑄠𑄧 𑄦𑄢𑄴𑄓𑄴 𑄘𑄨𑄚𑄢𑄴"
            },
            YUM: {
                displayName: "𑄡𑄪𑄉𑄮𑄥𑄳𑄣𑄞𑄨𑄠𑄧 𑄚𑄮𑄞𑄨 𑄘𑄨𑄚𑄢𑄴"
            },
            YUN: {
                displayName: "𑄡𑄪𑄉𑄮𑄥𑄳𑄣𑄞𑄨𑄠𑄧 𑄝𑄮𑄘𑄮𑄣𑄬𑄭𑄛𑄢𑄬 𑄘𑄨𑄚𑄢𑄴"
            },
            ZAR: {
                displayName: "𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴 𑄢𑄳𑄠𑄚𑄳𑄓𑄴",
                "displayName-count-one": "𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴 𑄢𑄳𑄠𑄚𑄳𑄓𑄴",
                "displayName-count-other": "𑄘𑄧𑄉𑄨𑄚𑄴 𑄃𑄜𑄳𑄢𑄨𑄇𑄚𑄴 𑄢𑄳𑄠𑄚𑄳𑄓𑄴",
                symbol: "ZAR",
                "symbol-alt-narrow": "R"
            },
            ZMK: {
                displayName: "𑄎𑄟𑄴𑄝𑄨𑄠𑄚𑄴 𑄇𑄧𑄤𑄌 (𑄷𑄿𑄼𑄾-𑄸𑄶𑄷𑄸)"
            },
            ZMW: {
                displayName: "𑄎𑄟𑄴𑄝𑄨𑄠𑄚𑄴 𑄇𑄧𑄤𑄌",
                "displayName-count-one": "𑄎𑄟𑄴𑄝𑄨𑄠𑄚𑄴 𑄇𑄧𑄤𑄌",
                "displayName-count-other": "𑄎𑄟𑄴𑄝𑄨𑄠𑄚𑄴 𑄇𑄧𑄤𑄌",
                symbol: "ZMW",
                "symbol-alt-narrow": "ZK"
            },
            ZRN: {
                displayName: "𑄎𑄭𑄢𑄨𑄠𑄚𑄴 𑄚𑄨𑄅𑄪 𑄎𑄭𑄢𑄬 (1993–1998)"
            },
            ZRZ: {
                displayName: "𑄎𑄭𑄢𑄨𑄠𑄚𑄴 𑄚𑄨𑄅𑄪 𑄎𑄭𑄢𑄬 (1971–1993)"
            },
            ZWD: {
                displayName: "𑄎𑄨𑄟𑄴𑄝𑄝𑄪𑄠𑄬 𑄓𑄧𑄣𑄢𑄴 (𑄷𑄿𑄾𑄶-𑄸𑄶𑄶𑄾)"
            },
            ZWL: {
                displayName: "𑄎𑄨𑄟𑄴𑄝𑄝𑄪𑄠𑄬 𑄓𑄧𑄣𑄢𑄴 (𑄸𑄶𑄶𑄿)"
            },
            ZWR: {
                displayName: "𑄎𑄨𑄟𑄴𑄝𑄝𑄪𑄠𑄬 𑄓𑄧𑄣𑄢𑄴 (𑄸𑄶𑄶𑄾)"
            }
        },
        localeCurrency: "INR"
    },
    calendar: {
        patterns: {
            d: "d/M/y",
            D: "EEEE, d MMMM, y",
            m: "d MMM",
            M: "d MMMM",
            y: "MMM y",
            Y: "MMMM y",
            F: "EEEE, d MMMM, y h:mm:ss a",
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
            medium: "{1} {0}",
            short: "{1} {0}",
            availableFormats: {
                Bh: "h B",
                Bhm: "h:mm B",
                Bhms: "h:mm:ss B",
                d: "d",
                E: "ccc",
                EBhm: "E h:mm B",
                EBhms: "E h:mm:ss B",
                Ed: "d E",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y G",
                GyMd: "GGGGG y-MM-dd",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM, y G",
                GyMMMEd: "E, d MMM, y G",
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
                MEd: "E, d-M",
                MMdd: "dd-MM",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E d MMM",
                MMMMd: "d MMMM",
                MMMMEd: "E d MMMM",
                "MMMMW-count-one": "MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W",
                "MMMMW-count-other": "MMMM 𑄃𑄬𑄢𑄴 𑄠𑄴 𑄥𑄛𑄴𑄖 W",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "E, d/M/y",
                yMM: "MM-y",
                yMMM: "MMM y",
                yMMMd: "d MMM, y",
                yMMMEd: "E, d MMM, y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y",
                "yw-count-one": "Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w",
                "yw-count-other": "Y 𑄃𑄬𑄢𑄴 𑄖𑄧𑄟𑄴 𑄥𑄛𑄴𑄖 w"
            }
        },
        timeFormats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a"
        },
        dateFormats: {
            full: "EEEE, d MMMM, y",
            long: "d MMMM, y",
            medium: "d MMM, y",
            short: "d/M/yy"
        },
        days: {
            format: {
                abbreviated: [
                    "𑄢𑄧𑄝𑄨",
                    "𑄥𑄧𑄟𑄴",
                    "𑄟𑄧𑄁𑄉𑄧𑄣𑄴",
                    "𑄝𑄪𑄖𑄴",
                    "𑄝𑄳𑄢𑄨𑄥𑄪𑄛𑄴",
                    "𑄥𑄪𑄇𑄴𑄇𑄮𑄢𑄴",
                    "𑄥𑄧𑄚𑄨"
                ],
                narrow: [
                    "𑄢𑄧",
                    "𑄥𑄧",
                    "𑄟𑄧",
                    "𑄝𑄪",
                    "𑄝𑄳𑄢𑄨",
                    "𑄥𑄪",
                    "𑄥𑄧"
                ],
                short: [
                    "𑄢𑄧𑄝𑄨",
                    "𑄥𑄧𑄟𑄴",
                    "𑄟𑄧𑄁𑄉𑄧𑄣𑄴",
                    "𑄝𑄪𑄖𑄴",
                    "𑄝𑄳𑄢𑄨𑄥𑄪𑄛𑄴",
                    "𑄥𑄪𑄇𑄴𑄇𑄮𑄢𑄴",
                    "𑄥𑄧𑄚𑄨"
                ],
                wide: [
                    "𑄢𑄧𑄝𑄨𑄝𑄢𑄴",
                    "𑄥𑄧𑄟𑄴𑄝𑄢𑄴",
                    "𑄟𑄧𑄁𑄉𑄧𑄣𑄴𑄝𑄢𑄴",
                    "𑄝𑄪𑄖𑄴𑄝𑄢𑄴",
                    "𑄝𑄳𑄢𑄨𑄥𑄪𑄛𑄴𑄝𑄢𑄴",
                    "𑄥𑄪𑄇𑄴𑄇𑄮𑄢𑄴𑄝𑄢𑄴",
                    "𑄥𑄧𑄚𑄨𑄝𑄢𑄴"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "𑄢𑄧𑄝𑄨",
                    "𑄥𑄧𑄟𑄴",
                    "𑄟𑄧𑄁𑄉𑄧𑄣𑄴",
                    "𑄝𑄪𑄖𑄴",
                    "𑄝𑄳𑄢𑄨𑄥𑄪𑄛𑄴",
                    "𑄥𑄪𑄇𑄴𑄇𑄮𑄢𑄴",
                    "𑄥𑄧𑄚𑄨"
                ],
                narrow: [
                    "𑄢𑄧",
                    "𑄥𑄧",
                    "𑄟𑄧",
                    "𑄝𑄪",
                    "𑄝𑄳𑄢𑄨",
                    "𑄥𑄪",
                    "𑄥𑄧"
                ],
                short: [
                    "𑄢𑄧𑄝𑄨",
                    "𑄥𑄧𑄟𑄴",
                    "𑄟𑄧𑄁𑄉𑄧𑄣𑄴",
                    "𑄝𑄪𑄖𑄴",
                    "𑄝𑄳𑄢𑄨𑄥𑄪𑄛𑄴",
                    "𑄥𑄪𑄇𑄴𑄇𑄮𑄢𑄴",
                    "𑄥𑄧𑄚𑄨"
                ],
                wide: [
                    "𑄢𑄧𑄝𑄨𑄝𑄢𑄴",
                    "𑄥𑄧𑄟𑄴𑄝𑄢𑄴",
                    "𑄟𑄧𑄁𑄉𑄧𑄣𑄴𑄝𑄢𑄴",
                    "𑄝𑄪𑄖𑄴𑄝𑄢𑄴",
                    "𑄝𑄳𑄢𑄨𑄥𑄪𑄛𑄴𑄝𑄢𑄴",
                    "𑄥𑄪𑄇𑄴𑄇𑄮𑄢𑄴𑄝𑄢𑄴",
                    "𑄥𑄧𑄚𑄨𑄝𑄢𑄴"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "𑄎𑄚𑄪",
                    "𑄜𑄬𑄛𑄴",
                    "𑄟𑄢𑄴𑄌𑄧",
                    "𑄃𑄬𑄛𑄳𑄢𑄨𑄣𑄴",
                    "𑄟𑄬",
                    "𑄎𑄪𑄚𑄴",
                    "𑄎𑄪𑄣𑄭",
                    "𑄃𑄉𑄧𑄌𑄴𑄑𑄴",
                    "𑄥𑄬𑄛𑄴𑄑𑄬𑄟𑄴𑄝𑄧𑄢𑄴",
                    "𑄃𑄧𑄇𑄴𑄑𑄮𑄝𑄧𑄢𑄴",
                    "𑄚𑄧𑄞𑄬𑄟𑄴𑄝𑄧𑄢𑄴",
                    "𑄓𑄨𑄥𑄬𑄟𑄴𑄝𑄢𑄴"
                ],
                narrow: [
                    "𑄎",
                    "𑄜𑄬",
                    "𑄟",
                    "𑄃𑄬",
                    "𑄟𑄬",
                    "𑄎𑄪𑄚𑄴",
                    "𑄎𑄪",
                    "𑄃",
                    "𑄥𑄬",
                    "𑄃𑄧",
                    "𑄚𑄧",
                    "𑄓𑄨"
                ],
                wide: [
                    "𑄎𑄚𑄪𑄠𑄢𑄨",
                    "𑄜𑄬𑄛𑄴𑄝𑄳𑄢𑄪𑄠𑄢𑄨",
                    "𑄟𑄢𑄴𑄌𑄧",
                    "𑄃𑄬𑄛𑄳𑄢𑄨𑄣𑄴",
                    "𑄟𑄬",
                    "𑄎𑄪𑄚𑄴",
                    "𑄎𑄪𑄣𑄭",
                    "𑄃𑄉𑄧𑄌𑄴𑄑𑄴",
                    "𑄥𑄬𑄛𑄴𑄑𑄬𑄟𑄴𑄝𑄧𑄢𑄴",
                    "𑄃𑄧𑄇𑄴𑄑𑄬𑄝𑄧𑄢𑄴",
                    "𑄚𑄧𑄞𑄬𑄟𑄴𑄝𑄧𑄢𑄴",
                    "𑄓𑄨𑄥𑄬𑄟𑄴𑄝𑄧𑄢𑄴"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "𑄎𑄚𑄪𑄠𑄢𑄨",
                    "𑄜𑄬𑄛𑄴𑄝𑄳𑄢𑄪𑄠𑄢𑄨",
                    "𑄟𑄢𑄴𑄌𑄧",
                    "𑄃𑄬𑄛𑄳𑄢𑄨𑄣𑄴",
                    "𑄟𑄬",
                    "𑄎𑄪𑄚𑄴",
                    "𑄎𑄪𑄣𑄭",
                    "𑄃𑄉𑄧𑄌𑄴𑄑𑄴",
                    "𑄥𑄬𑄛𑄴𑄑𑄬𑄟𑄴𑄝𑄧𑄢𑄴",
                    "𑄃𑄧𑄇𑄴𑄑𑄮𑄝𑄧𑄢𑄴",
                    "𑄚𑄧𑄞𑄬𑄟𑄴𑄝𑄧𑄢𑄴",
                    "𑄓𑄨𑄥𑄬𑄟𑄴𑄝𑄧𑄢𑄴"
                ],
                narrow: [
                    "𑄎",
                    "𑄜𑄬",
                    "𑄟",
                    "𑄃𑄬",
                    "𑄟𑄬",
                    "𑄎𑄪𑄚𑄴",
                    "𑄎𑄪",
                    "𑄃",
                    "𑄥𑄬",
                    "𑄃𑄧",
                    "𑄚𑄧",
                    "𑄓𑄨"
                ],
                wide: [
                    "𑄎𑄚𑄪𑄠𑄢𑄨",
                    "𑄜𑄬𑄛𑄴𑄝𑄳𑄢𑄪𑄠𑄢𑄨",
                    "𑄟𑄢𑄴𑄌𑄧",
                    "𑄃𑄬𑄛𑄳𑄢𑄨𑄣𑄴",
                    "𑄟𑄬",
                    "𑄎𑄪𑄚𑄴",
                    "𑄎𑄪𑄣𑄭",
                    "𑄃𑄉𑄧𑄌𑄴𑄑𑄴",
                    "𑄥𑄬𑄛𑄴𑄑𑄬𑄟𑄴𑄝𑄧𑄢𑄴",
                    "𑄃𑄧𑄇𑄴𑄑𑄮𑄝𑄧𑄢𑄴",
                    "𑄚𑄧𑄞𑄬𑄟𑄴𑄝𑄧𑄢𑄴",
                    "𑄓𑄨𑄥𑄬𑄟𑄴𑄝𑄧𑄢𑄴"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "Q1",
                    "Q2",
                    "Q3",
                    "Q4"
                ],
                narrow: [
                    "𑄷",
                    "𑄸",
                    "𑄹",
                    "𑄺"
                ],
                wide: [
                    "𑄖𑄨𑄚𑄴𑄟𑄎𑄧𑄢𑄴",
                    "𑄘𑄨 𑄛𑄳𑄆𑄘𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄎𑄧𑄢𑄴",
                    "𑄖𑄨𑄚𑄴 𑄛𑄳𑄆𑄘𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄎𑄧𑄢𑄴",
                    "𑄌𑄳𑄆𑄬𑄢𑄴 𑄛𑄳𑄆𑄘𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄎𑄧𑄢𑄴"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "Q1",
                    "Q2",
                    "Q3",
                    "Q4"
                ],
                narrow: [
                    "𑄷",
                    "𑄸",
                    "𑄹",
                    "𑄺"
                ],
                wide: [
                    "𑄖𑄨𑄚𑄴𑄟𑄎𑄧𑄢𑄴",
                    "𑄘𑄨 𑄛𑄳𑄆𑄘𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄎𑄧𑄢𑄴",
                    "𑄖𑄨𑄚𑄴 𑄛𑄳𑄆𑄘𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄎𑄧𑄢𑄴",
                    "𑄌𑄳𑄆𑄬𑄢𑄴 𑄛𑄳𑄆𑄘𑄳𑄠𑄬 𑄖𑄨𑄚𑄴𑄟𑄎𑄧𑄢𑄴"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    morning1: "𑄛𑄧𑄖𑄳𑄠𑄃𑄟𑄧𑄣𑄳𑄠𑄬",
                    morning2: "𑄝𑄬𑄚𑄳𑄠𑄬",
                    afternoon1: "𑄘𑄨𑄝𑄪𑄎𑄳𑄠",
                    afternoon2: "𑄝𑄬𑄣𑄳𑄠𑄬",
                    evening1: "𑄥𑄎𑄧𑄚𑄳𑄠",
                    night1: "𑄢𑄬𑄖𑄴"
                },
                narrow: {
                    am: "AM",
                    pm: "PM",
                    morning1: "𑄛𑄧𑄖𑄳𑄠𑄃𑄟𑄧𑄣𑄳𑄠𑄬",
                    morning2: "𑄝𑄬𑄚𑄳𑄠𑄬",
                    afternoon1: "𑄘𑄨𑄝𑄪𑄎𑄳𑄠",
                    afternoon2: "𑄝𑄬𑄣𑄳𑄠𑄬",
                    evening1: "𑄥𑄎𑄧𑄚𑄳𑄠",
                    night1: "𑄢𑄬𑄖𑄴"
                },
                wide: {
                    am: "AM",
                    pm: "PM",
                    morning1: "𑄛𑄧𑄖𑄳𑄠𑄃𑄟𑄧𑄣𑄳𑄠𑄬",
                    morning2: "𑄝𑄬𑄚𑄳𑄠𑄬",
                    afternoon1: "𑄘𑄨𑄝𑄪𑄎𑄳𑄠",
                    afternoon2: "𑄝𑄬𑄣𑄳𑄠𑄬",
                    evening1: "𑄥𑄎𑄧𑄚𑄳𑄠",
                    night1: "𑄢𑄬𑄖𑄴"
                }
            },
            "stand-alone": {
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    morning1: "𑄛𑄧𑄖𑄳𑄠𑄃𑄟𑄧𑄣𑄳𑄠𑄬",
                    morning2: "𑄝𑄬𑄚𑄳𑄠𑄬",
                    afternoon1: "𑄘𑄨𑄝𑄪𑄎𑄳𑄠",
                    afternoon2: "𑄝𑄬𑄣𑄳𑄠𑄬",
                    evening1: "𑄥𑄎𑄧𑄚𑄳𑄠",
                    night1: "𑄢𑄬𑄖𑄴"
                },
                narrow: {
                    am: "AM",
                    pm: "PM",
                    morning1: "𑄛𑄧𑄖𑄳𑄠𑄃𑄟𑄧𑄣𑄳𑄠𑄬",
                    morning2: "𑄝𑄬𑄚𑄳𑄠𑄬",
                    afternoon1: "𑄘𑄨𑄝𑄪𑄎𑄳𑄠",
                    afternoon2: "𑄝𑄬𑄣𑄳𑄠𑄬",
                    evening1: "𑄥𑄎𑄧𑄚𑄳𑄠",
                    night1: "𑄢𑄬𑄖𑄴"
                },
                wide: {
                    am: "AM",
                    pm: "PM",
                    morning1: "𑄛𑄧𑄖𑄳𑄠𑄃𑄟𑄧𑄣𑄳𑄠𑄬",
                    morning2: "𑄝𑄬𑄚𑄳𑄠𑄬",
                    afternoon1: "𑄘𑄨𑄝𑄪𑄎𑄳𑄠",
                    afternoon2: "𑄝𑄬𑄣𑄳𑄠𑄬",
                    evening1: "𑄥𑄎𑄧𑄚𑄳𑄠",
                    night1: "𑄢𑄬𑄖𑄴"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄴𑄛𑄫𑄢𑄴𑄝𑄧",
                    "1": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄛𑄴𑄘𑄧",
                    "0-alt-variant": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄴𑄛𑄫𑄢𑄴𑄝𑄛𑄴𑄘𑄧",
                    "1-alt-variant": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄛𑄴𑄘𑄧"
                },
                abbreviated: {
                    "0": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄴𑄛𑄫𑄢𑄴𑄝𑄧",
                    "1": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄛𑄴𑄘𑄧",
                    "0-alt-variant": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄧𑄛𑄫𑄢𑄴𑄝𑄛𑄴𑄘𑄧",
                    "1-alt-variant": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄛𑄴𑄘𑄧"
                },
                narrow: {
                    "0": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄴𑄛𑄫𑄢𑄴𑄝𑄧",
                    "1": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄛𑄴𑄘𑄧",
                    "0-alt-variant": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄧𑄛𑄫𑄢𑄴𑄝𑄛𑄴𑄘𑄧",
                    "1-alt-variant": "𑄈𑄳𑄢𑄨𑄌𑄴𑄑𑄛𑄴𑄘𑄧"
                }
            }
        },
        gmtFormat: "GMT {0}",
        gmtZeroFormat: "GMT",
        dateFields: {
            era: {
                wide: "𑄡𑄪𑄇𑄴",
                short: "𑄡𑄪𑄇𑄴",
                narrow: "𑄡𑄪𑄇𑄴"
            },
            year: {
                wide: "𑄝𑄧𑄏𑄧𑄢𑄴",
                short: "𑄝𑄧𑄏𑄧𑄢𑄴",
                narrow: "𑄝𑄧𑄏𑄧𑄢𑄴"
            },
            quarter: {
                wide: "𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴",
                short: "𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴",
                narrow: "𑄖𑄨𑄚𑄴𑄟𑄏𑄧𑄢𑄴"
            },
            month: {
                wide: "𑄟𑄏𑄴",
                short: "𑄟𑄏𑄴",
                narrow: "𑄟𑄏𑄴"
            },
            week: {
                wide: "𑄥𑄛𑄴𑄖",
                short: "𑄥𑄛𑄴𑄖",
                narrow: "𑄥𑄛𑄴𑄖"
            },
            weekOfMonth: {
                wide: "Week Of Month",
                short: "Week Of Month",
                narrow: "Week Of Month"
            },
            day: {
                wide: "𑄘𑄨𑄚𑄴",
                short: "𑄘𑄨𑄚𑄴",
                narrow: "𑄘𑄨𑄚𑄴"
            },
            dayOfYear: {
                wide: "Day Of Year",
                short: "Day Of Year",
                narrow: "Day Of Year"
            },
            weekday: {
                wide: "𑄥𑄛𑄴𑄖𑄢𑄴 𑄘𑄨𑄚𑄴",
                short: "𑄥𑄛𑄴𑄖𑄢𑄴 𑄘𑄨𑄚𑄴",
                narrow: "𑄥𑄛𑄴𑄖𑄢𑄴 𑄘𑄨𑄚𑄴"
            },
            weekdayOfMonth: {
                wide: "Weekday Of Month",
                short: "Weekday Of Month",
                narrow: "Weekday Of Month"
            },
            dayperiod: {
                short: "AM/PM",
                wide: "AM/PM",
                narrow: "AM/PM"
            },
            hour: {
                wide: "𑄊𑄮𑄚𑄴𑄓",
                short: "𑄊𑄮𑄚𑄴𑄓",
                narrow: "𑄊𑄮𑄚𑄴𑄓"
            },
            minute: {
                wide: "𑄟𑄨𑄚𑄨𑄖𑄴",
                short: "𑄟𑄨𑄚𑄨𑄖𑄴",
                narrow: "𑄟𑄨𑄚𑄨𑄖𑄴"
            },
            second: {
                wide: "𑄥𑄬𑄉𑄬𑄚𑄴",
                short: "𑄥𑄬𑄉𑄬𑄚𑄴",
                narrow: "𑄥𑄬𑄉𑄬𑄚𑄴"
            },
            zone: {
                wide: "𑄃𑄧𑄇𑄴𑄖𑄧𑄢𑄴 𑄎𑄉",
                short: "𑄃𑄧𑄇𑄴𑄖𑄧𑄢𑄴 𑄎𑄉",
                narrow: "𑄃𑄧𑄇𑄴𑄖𑄧𑄢𑄴 𑄎𑄉"
            },
            millisecond: {
                narrow: "ms",
                short: "ms",
                wide: "𑄟𑄨𑄣𑄨𑄥𑄬𑄇𑄬𑄚𑄳𑄓𑄴"
            }
        }
    },
    firstDay: 0,
    weekendRange: {
        start: 0,
        end: 0
    },
    likelySubtags: {
        ccp: "ccp-Cakm-BD"
    }
};
export default data;

