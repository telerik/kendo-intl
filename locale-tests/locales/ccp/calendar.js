const data = {
    name: "ccp",
    likelySubtags: {
        ccp: "ccp-Cakm-BD"
    },
    identity: {
        language: "ccp"
    },
    territory: "BD",
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
    firstDay: 0
};
export default data;

