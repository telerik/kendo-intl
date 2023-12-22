const data = {
    name: "doi",
    identity: {
        language: "doi"
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
            "unitPattern-count-one": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "$n"
            ],
            groupSize: [
                3
            ]
        },
        currencies: {
            AFN: {
                "symbol-alt-narrow": "؋"
            },
            AMD: {
                "symbol-alt-narrow": "֏"
            },
            AOA: {
                "symbol-alt-narrow": "Kz"
            },
            ARS: {
                "symbol-alt-narrow": "$"
            },
            AUD: {
                symbol: "A$",
                "symbol-alt-narrow": "$"
            },
            AZN: {
                "symbol-alt-narrow": "₼"
            },
            BAM: {
                "symbol-alt-narrow": "KM"
            },
            BBD: {
                "symbol-alt-narrow": "$"
            },
            BDT: {
                "symbol-alt-narrow": "৳"
            },
            BMD: {
                "symbol-alt-narrow": "$"
            },
            BND: {
                "symbol-alt-narrow": "$"
            },
            BOB: {
                "symbol-alt-narrow": "Bs"
            },
            BRL: {
                displayName: "ब्राजीली रियाल",
                "displayName-count-one": "ब्राजीली रियाल",
                "displayName-count-other": "ब्राजीली रियाल",
                symbol: "R$",
                "symbol-alt-narrow": "R$"
            },
            BSD: {
                "symbol-alt-narrow": "$"
            },
            BWP: {
                "symbol-alt-narrow": "P"
            },
            BZD: {
                "symbol-alt-narrow": "$"
            },
            CAD: {
                symbol: "CA$",
                "symbol-alt-narrow": "$"
            },
            CLP: {
                "symbol-alt-narrow": "$"
            },
            CNY: {
                displayName: "चीनी युआन",
                "displayName-count-one": "चीनी युआन",
                "displayName-count-other": "चीनी युआन",
                symbol: "CN¥",
                "symbol-alt-narrow": "¥"
            },
            COP: {
                "symbol-alt-narrow": "$"
            },
            CRC: {
                "symbol-alt-narrow": "₡"
            },
            CUC: {
                "symbol-alt-narrow": "$"
            },
            CUP: {
                "symbol-alt-narrow": "$"
            },
            CZK: {
                "symbol-alt-narrow": "Kč"
            },
            DKK: {
                "symbol-alt-narrow": "kr"
            },
            DOP: {
                "symbol-alt-narrow": "$"
            },
            EGP: {
                "symbol-alt-narrow": "E£"
            },
            ESP: {
                "symbol-alt-narrow": "₧"
            },
            EUR: {
                displayName: "यूरो",
                "displayName-count-one": "यूरो",
                "displayName-count-other": "यूरो",
                symbol: "€",
                "symbol-alt-narrow": "€"
            },
            FJD: {
                "symbol-alt-narrow": "$"
            },
            FKP: {
                "symbol-alt-narrow": "£"
            },
            GBP: {
                displayName: "ब्रिटिश पाउंड",
                "displayName-count-one": "ब्रिटिश पाउंड",
                "displayName-count-other": "ब्रिटिश पाउंड",
                symbol: "£",
                "symbol-alt-narrow": "£"
            },
            GEL: {
                "symbol-alt-narrow": "₾"
            },
            GHS: {
                "symbol-alt-narrow": "GH₵"
            },
            GIP: {
                "symbol-alt-narrow": "£"
            },
            GNF: {
                "symbol-alt-narrow": "FG"
            },
            GTQ: {
                "symbol-alt-narrow": "Q"
            },
            GYD: {
                "symbol-alt-narrow": "$"
            },
            HKD: {
                symbol: "HK$",
                "symbol-alt-narrow": "$"
            },
            HNL: {
                "symbol-alt-narrow": "L"
            },
            HRK: {
                "symbol-alt-narrow": "kn"
            },
            HUF: {
                "symbol-alt-narrow": "Ft"
            },
            IDR: {
                "symbol-alt-narrow": "Rp"
            },
            ILS: {
                symbol: "₪",
                "symbol-alt-narrow": "₪"
            },
            INR: {
                displayName: "भारती रपेऽ",
                "displayName-count-one": "भारती रपेऽ",
                "displayName-count-other": "भारती रपेऽ",
                symbol: "₹",
                "symbol-alt-narrow": "₹"
            },
            ISK: {
                "symbol-alt-narrow": "kr"
            },
            JMD: {
                "symbol-alt-narrow": "$"
            },
            JPY: {
                displayName: "जापानी येन",
                "displayName-count-one": "जापानी येन",
                "displayName-count-other": "जापानी येन",
                symbol: "¥",
                "symbol-alt-narrow": "¥"
            },
            KHR: {
                "symbol-alt-narrow": "៛"
            },
            KMF: {
                "symbol-alt-narrow": "CF"
            },
            KPW: {
                "symbol-alt-narrow": "₩"
            },
            KRW: {
                symbol: "₩",
                "symbol-alt-narrow": "₩"
            },
            KYD: {
                "symbol-alt-narrow": "$"
            },
            KZT: {
                "symbol-alt-narrow": "₸"
            },
            LAK: {
                "symbol-alt-narrow": "₭"
            },
            LBP: {
                "symbol-alt-narrow": "L£"
            },
            LKR: {
                "symbol-alt-narrow": "Rs"
            },
            LRD: {
                "symbol-alt-narrow": "$"
            },
            LTL: {
                "symbol-alt-narrow": "Lt"
            },
            LVL: {
                "symbol-alt-narrow": "Ls"
            },
            MGA: {
                "symbol-alt-narrow": "Ar"
            },
            MMK: {
                "symbol-alt-narrow": "K"
            },
            MNT: {
                "symbol-alt-narrow": "₮"
            },
            MUR: {
                "symbol-alt-narrow": "Rs"
            },
            MXN: {
                symbol: "MX$",
                "symbol-alt-narrow": "$"
            },
            MYR: {
                "symbol-alt-narrow": "RM"
            },
            NAD: {
                "symbol-alt-narrow": "$"
            },
            NGN: {
                "symbol-alt-narrow": "₦"
            },
            NIO: {
                "symbol-alt-narrow": "C$"
            },
            NOK: {
                "symbol-alt-narrow": "kr"
            },
            NPR: {
                "symbol-alt-narrow": "Rs"
            },
            NZD: {
                symbol: "NZ$",
                "symbol-alt-narrow": "$"
            },
            PHP: {
                symbol: "₱",
                "symbol-alt-narrow": "₱"
            },
            PKR: {
                "symbol-alt-narrow": "Rs"
            },
            PLN: {
                "symbol-alt-narrow": "zł"
            },
            PYG: {
                "symbol-alt-narrow": "₲"
            },
            RON: {
                "symbol-alt-narrow": "lei"
            },
            RUB: {
                displayName: "रूसी रूबल",
                "displayName-count-one": "रूसी रूबल",
                "displayName-count-other": "रूसी रूबल",
                symbol: "RUB",
                "symbol-alt-narrow": "₽"
            },
            RWF: {
                "symbol-alt-narrow": "RF"
            },
            SBD: {
                "symbol-alt-narrow": "$"
            },
            SEK: {
                "symbol-alt-narrow": "kr"
            },
            SGD: {
                "symbol-alt-narrow": "$"
            },
            SHP: {
                "symbol-alt-narrow": "£"
            },
            SRD: {
                "symbol-alt-narrow": "$"
            },
            SSP: {
                "symbol-alt-narrow": "£"
            },
            STN: {
                "symbol-alt-narrow": "Db"
            },
            SYP: {
                "symbol-alt-narrow": "£"
            },
            THB: {
                "symbol-alt-narrow": "฿"
            },
            TOP: {
                "symbol-alt-narrow": "T$"
            },
            TRY: {
                "symbol-alt-narrow": "₺",
                "symbol-alt-variant": "TL"
            },
            TTD: {
                "symbol-alt-narrow": "$"
            },
            TWD: {
                symbol: "NT$",
                "symbol-alt-narrow": "$"
            },
            UAH: {
                "symbol-alt-narrow": "₴"
            },
            USD: {
                displayName: "यूएस डालर",
                "displayName-count-one": "यूएस डालर",
                "displayName-count-other": "यूएस डालर",
                symbol: "$",
                "symbol-alt-narrow": "$"
            },
            UYU: {
                "symbol-alt-narrow": "$"
            },
            VEF: {
                "symbol-alt-narrow": "Bs"
            },
            VND: {
                symbol: "₫",
                "symbol-alt-narrow": "₫"
            },
            XAF: {
                symbol: "FCFA"
            },
            XCD: {
                symbol: "EC$",
                "symbol-alt-narrow": "$"
            },
            XOF: {
                symbol: "F CFA"
            },
            XPF: {
                symbol: "CFPF"
            },
            XXX: {
                displayName: "अनजांती करंसी",
                "displayName-count-one": "(अनजांती करंसी)",
                "displayName-count-other": "(अनजांती करंसी)",
                symbol: "¤"
            },
            ZAR: {
                "symbol-alt-narrow": "R"
            },
            ZMW: {
                "symbol-alt-narrow": "ZK"
            }
        },
        localeCurrency: "INR"
    },
    calendar: {
        patterns: {
            d: "d/M/y",
            D: "EEEE, d, MMMM y",
            m: "d MMM",
            M: "d MMMM",
            y: "MMM y",
            Y: "MMMM y",
            F: "EEEE, d, MMMM y h:mm:ss a",
            g: "d/M/y h:mm a",
            G: "d/M/y h:mm:ss a",
            t: "h:mm a",
            T: "h:mm:ss a",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1}, {0}",
            long: "{1}, {0}",
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
                Ed: "E d",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "G y",
                GyMd: "GGGGG y-MM-dd",
                GyMMM: "G y MMM",
                GyMMMd: "d, MMM G y",
                GyMMMEd: "E, d, MMM G y",
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
                MEd: "E, d/M",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E, d MMM",
                MMMMd: "d MMMM",
                "MMMMW-count-one": "MMMM दा हफ्ता W",
                "MMMMW-count-other": "MMMM दा हफ्ता W",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "E, d/M/y",
                yMMM: "MMM y",
                yMMMd: "d, MMM y",
                yMMMEd: "E, d, MMM y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y",
                "yw-count-one": "Y दा हफ्ता w",
                "yw-count-other": "Y दा हफ्ता w"
            }
        },
        timeFormats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a"
        },
        dateFormats: {
            full: "EEEE, d, MMMM y",
            long: "d, MMMM y",
            medium: "d, MMM y",
            short: "d/M/yy"
        },
        days: {
            format: {
                abbreviated: [
                    "ऐत",
                    "सोम",
                    "मंगल",
                    "बुध",
                    "बीर",
                    "शुक्र",
                    "शनि"
                ],
                narrow: [
                    "ऐ.",
                    "सो.",
                    "म.",
                    "बु.",
                    "बी.",
                    "शु.",
                    "श."
                ],
                short: [
                    "ऐत",
                    "सोम",
                    "मंगल",
                    "बुध",
                    "बीर",
                    "शुक्र",
                    "शनि"
                ],
                wide: [
                    "ऐतबार",
                    "सोमबार",
                    "मंगलबार",
                    "बुधबार",
                    "बीरबार",
                    "शुक्रबार",
                    "शनिबार"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ऐत",
                    "सोम",
                    "मंगल",
                    "बुध",
                    "बीर",
                    "शुक्र",
                    "शनि"
                ],
                narrow: [
                    "ऐ",
                    "सो",
                    "म.",
                    "बु.",
                    "बी.",
                    "शु.",
                    "श."
                ],
                short: [
                    "ऐत",
                    "सोम",
                    "मंगल",
                    "बुध",
                    "बीर",
                    "शुक्र",
                    "शनि"
                ],
                wide: [
                    "ऐतबार",
                    "सोमबार",
                    "मंगलबार",
                    "बुधबार",
                    "बीरबार",
                    "शुक्रबार",
                    "शनिबार"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "जन.",
                    "फर.",
                    "मार्च",
                    "अप्रैल",
                    "मेई",
                    "जून",
                    "जुलाई",
                    "अग.",
                    "सित.",
                    "अक्तू.",
                    "नव.",
                    "दिस."
                ],
                narrow: [
                    "ज",
                    "फ",
                    "मा",
                    "अ",
                    "मे",
                    "जू",
                    "जु",
                    "अ",
                    "सि",
                    "अ",
                    "न",
                    "दि"
                ],
                wide: [
                    "जनवरी",
                    "फरवरी",
                    "मार्च",
                    "अप्रैल",
                    "मेई",
                    "जून",
                    "जुलाई",
                    "अगस्त",
                    "सितंबर",
                    "अक्तूबर",
                    "नवंबर",
                    "दिसंबर"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "जन.",
                    "फर.",
                    "मार्च",
                    "अप्रैल",
                    "मेई",
                    "जून",
                    "जुलाई",
                    "अग.",
                    "सित.",
                    "अक्तू.",
                    "नव.",
                    "दिस."
                ],
                narrow: [
                    "ज",
                    "फ",
                    "मा",
                    "अ",
                    "मे",
                    "जू",
                    "जु",
                    "अ",
                    "सि",
                    "अ",
                    "न",
                    "दि"
                ],
                wide: [
                    "जनवरी",
                    "फरवरी",
                    "मार्च",
                    "अप्रैल",
                    "मेई",
                    "जून",
                    "जुलाई",
                    "अगस्त",
                    "सितंबर",
                    "अक्तूबर",
                    "नवंबर",
                    "दिसंबर"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "त्र.1",
                    "त्र.2",
                    "त्र.3",
                    "त्र.4"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "पैहली त्रमाही",
                    "दूई त्रमाही",
                    "त्री त्रमाही",
                    "चौथी त्रमाही"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "त्र.1",
                    "त्र.2",
                    "त्र.3",
                    "त्र.4"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "पैहली त्रमाही",
                    "दूई त्रमाही",
                    "त्री त्रमाही",
                    "चौथी त्रमाही"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    am: "सवेर",
                    pm: "स’ञ"
                },
                narrow: {
                    am: "सवेर",
                    pm: "स’ञ"
                },
                wide: {
                    am: "सवेर",
                    pm: "दपैहर बाद"
                }
            },
            "stand-alone": {
                abbreviated: {
                    am: "सवेर",
                    pm: "स’ञ"
                },
                narrow: {
                    am: "सवेर",
                    pm: "स’ञ"
                },
                wide: {
                    am: "सवेर",
                    pm: "स’ञ"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "ई.पू.",
                    "1": "ई. सन्",
                    "0-alt-variant": "ई.पू.",
                    "1-alt-variant": "सन्"
                },
                abbreviated: {
                    "0": "ई.पू.",
                    "1": "ईसवी",
                    "0-alt-variant": "ई.पू.",
                    "1-alt-variant": "सन्"
                },
                narrow: {
                    "0": "ई.पू.",
                    "1": "ईसवी",
                    "0-alt-variant": "ई.पू.",
                    "1-alt-variant": "सन्"
                }
            }
        },
        gmtFormat: "GMT{0}",
        gmtZeroFormat: "GMT",
        dateFields: {
            era: {
                wide: "जुग",
                short: "जुग",
                narrow: "जुग"
            },
            year: {
                wide: "ब’रा",
                short: "ब.",
                narrow: "ब."
            },
            quarter: {
                wide: "त्रमाही",
                short: "त्रमा.",
                narrow: "त्रमा."
            },
            month: {
                wide: "म्हीना",
                short: "म्ही.",
                narrow: "म्ही."
            },
            week: {
                wide: "हफ्ता",
                short: "ह.",
                narrow: "ह."
            },
            weekOfMonth: {
                wide: "Week Of Month",
                short: "Week Of Month",
                narrow: "Week Of Month"
            },
            day: {
                wide: "दिन",
                short: "दिन",
                narrow: "दिन"
            },
            dayOfYear: {
                wide: "Day Of Year",
                short: "Day Of Year",
                narrow: "Day Of Year"
            },
            weekday: {
                wide: "हफ्ते दा दिन",
                short: "हफ्ते दा दिन",
                narrow: "हफ्ते दा दिन"
            },
            weekdayOfMonth: {
                wide: "Weekday Of Month",
                short: "Weekday Of Month",
                narrow: "Weekday Of Month"
            },
            dayperiod: {
                short: "सवेर/बा.दपै.",
                wide: "सवेर/बा.दपै.",
                narrow: "सवेर/बा.दपै."
            },
            hour: {
                wide: "घैंटा",
                short: "घैं.",
                narrow: "घैं."
            },
            minute: {
                wide: "मिंट्‌ट",
                short: "मिं.",
                narrow: "मिं."
            },
            second: {
                wide: "सकैंट",
                short: "सकैं.",
                narrow: "सकैं."
            },
            zone: {
                wide: "समां खेत्तर",
                short: "समां खेत्तर",
                narrow: "समां खेत्तर"
            },
            millisecond: {
                narrow: "ms",
                short: "ms",
                wide: "ms"
            }
        }
    },
    firstDay: 0,
    weekendRange: {
        start: 0,
        end: 0
    },
    likelySubtags: {
        doi: "doi-Deva-IN"
    }
};
export default data;

