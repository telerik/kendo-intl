const data = {
    name: "cy",
    likelySubtags: {
        cy: "cy-Latn-GB"
    },
    identity: {
        language: "cy"
    },
    territory: "GB",
    calendar: {
        patterns: {
            d: "dd/MM/y",
            D: "EEEE, d MMMM y",
            m: "d MMM",
            M: "MMMM d",
            y: "MMM y",
            Y: "MMMM y",
            F: "EEEE, d MMMM y HH:mm:ss",
            g: "d/M/y HH:mm",
            G: "d/M/y HH:mm:ss",
            t: "HH:mm",
            T: "HH:mm:ss",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1}, {0}",
            long: "{1}, {0}",
            medium: "{1} {0}",
            short: "{1} {0}",
            availableFormats: {
                Bh: "h B",
                Bhm: "h:mm B",
                Bhms: "h:mm:ss B",
                d: "d",
                E: "ccc",
                EBh: "E h B",
                EBhm: "E h:mm B",
                EBhms: "E h:mm:ss B",
                Ed: "d, E",
                Eh: "E h a",
                Ehm: "E, h:mm a",
                EHm: "E, HH:mm",
                Ehms: "E, h:mm:ss a",
                EHms: "E, HH:mm:ss",
                Gy: "y G",
                GyM: "M/y G",
                GyMd: "M/d/y GGGGG",
                GyMEd: "E, M/d/y G",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E, d MMM y G",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                hv: "h a v",
                Hv: "HH'h' v",
                M: "L",
                Md: "d/M",
                MEd: "E, d/M",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E, d MMM",
                MMMMd: "MMMM d",
                "MMMMW-count-zero": "'wythnos' W 'o' MMMM",
                "MMMMW-count-one": "'wythnos' W 'o' MMMM",
                "MMMMW-count-two": "'wythnos' W 'o' MMMM",
                "MMMMW-count-few": "'wythnos' W 'o' MMMM",
                "MMMMW-count-many": "'wythnos' W 'o' MMMM",
                "MMMMW-count-other": "'wythnos' W 'o' MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "E, d/M/y",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "E, d MMM y",
                yMMMM: "MMMM y",
                yQ: "Q y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y",
                "yw-count-zero": "'wythnos' w 'o' Y",
                "yw-count-one": "'wythnos' w 'o' Y",
                "yw-count-two": "'wythnos' w 'o' Y",
                "yw-count-few": "'wythnos' w 'o' Y",
                "yw-count-many": "'wythnos' w 'o' Y",
                "yw-count-other": "'wythnos' w 'o' Y"
            }
        },
        timeFormats: {
            full: "HH:mm:ss zzzz",
            long: "HH:mm:ss z",
            medium: "HH:mm:ss",
            short: "HH:mm"
        },
        dateFormats: {
            full: "EEEE, d MMMM y",
            long: "d MMMM y",
            medium: "d MMM y",
            short: "dd/MM/yy"
        },
        days: {
            format: {
                abbreviated: [
                    "Sul",
                    "Llun",
                    "Maw",
                    "Mer",
                    "Iau",
                    "Gwen",
                    "Sad"
                ],
                narrow: [
                    "S",
                    "Ll",
                    "M",
                    "M",
                    "I",
                    "G",
                    "S"
                ],
                short: [
                    "Su",
                    "Ll",
                    "Ma",
                    "Me",
                    "Ia",
                    "Gw",
                    "Sa"
                ],
                wide: [
                    "Dydd Sul",
                    "Dydd Llun",
                    "Dydd Mawrth",
                    "Dydd Mercher",
                    "Dydd Iau",
                    "Dydd Gwener",
                    "Dydd Sadwrn"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "Sul",
                    "Llun",
                    "Maw",
                    "Mer",
                    "Iau",
                    "Gwe",
                    "Sad"
                ],
                narrow: [
                    "S",
                    "Ll",
                    "M",
                    "M",
                    "I",
                    "G",
                    "S"
                ],
                short: [
                    "Su",
                    "Ll",
                    "Ma",
                    "Me",
                    "Ia",
                    "Gw",
                    "Sa"
                ],
                wide: [
                    "Dydd Sul",
                    "Dydd Llun",
                    "Dydd Mawrth",
                    "Dydd Mercher",
                    "Dydd Iau",
                    "Dydd Gwener",
                    "Dydd Sadwrn"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "Ion",
                    "Chwef",
                    "Maw",
                    "Ebr",
                    "Mai",
                    "Meh",
                    "Gorff",
                    "Awst",
                    "Medi",
                    "Hyd",
                    "Tach",
                    "Rhag"
                ],
                narrow: [
                    "I",
                    "Ch",
                    "M",
                    "E",
                    "M",
                    "M",
                    "G",
                    "A",
                    "M",
                    "H",
                    "T",
                    "Rh"
                ],
                wide: [
                    "Ionawr",
                    "Chwefror",
                    "Mawrth",
                    "Ebrill",
                    "Mai",
                    "Mehefin",
                    "Gorffennaf",
                    "Awst",
                    "Medi",
                    "Hydref",
                    "Tachwedd",
                    "Rhagfyr"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "Ion",
                    "Chw",
                    "Maw",
                    "Ebr",
                    "Mai",
                    "Meh",
                    "Gor",
                    "Awst",
                    "Medi",
                    "Hyd",
                    "Tach",
                    "Rhag"
                ],
                narrow: [
                    "I",
                    "Ch",
                    "M",
                    "E",
                    "M",
                    "M",
                    "G",
                    "A",
                    "M",
                    "H",
                    "T",
                    "Rh"
                ],
                wide: [
                    "Ionawr",
                    "Chwefror",
                    "Mawrth",
                    "Ebrill",
                    "Mai",
                    "Mehefin",
                    "Gorffennaf",
                    "Awst",
                    "Medi",
                    "Hydref",
                    "Tachwedd",
                    "Rhagfyr"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "Ch1",
                    "Ch2",
                    "Ch3",
                    "Ch4"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "chwarter 1af",
                    "2il chwarter",
                    "3ydd chwarter",
                    "4ydd chwarter"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "Ch1",
                    "Ch2",
                    "Ch3",
                    "Ch4"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "chwarter 1af",
                    "2il chwarter",
                    "3ydd chwarter",
                    "4ydd chwarter"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "canol nos",
                    am: "AM",
                    noon: "canol dydd",
                    pm: "PM",
                    morning1: "y bore",
                    afternoon1: "y prynhawn",
                    evening1: "yr hwyr"
                },
                narrow: {
                    midnight: "canol nos",
                    am: "b",
                    noon: "canol dydd",
                    pm: "h",
                    morning1: "yn y bore",
                    afternoon1: "yn y prynhawn",
                    evening1: "min nos"
                },
                wide: {
                    midnight: "canol nos",
                    am: "yb",
                    noon: "canol dydd",
                    pm: "yh",
                    morning1: "y bore",
                    afternoon1: "y prynhawn",
                    evening1: "yr hwyr"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "canol nos",
                    am: "AM",
                    noon: "canol dydd",
                    pm: "PM",
                    morning1: "bore",
                    afternoon1: "prynhawn",
                    evening1: "yr hwyr"
                },
                narrow: {
                    midnight: "canol nos",
                    am: "AM",
                    noon: "canol dydd",
                    pm: "PM",
                    morning1: "bore",
                    afternoon1: "prynhawn",
                    evening1: "min nos"
                },
                wide: {
                    midnight: "canol nos",
                    am: "AM",
                    noon: "canol dydd",
                    pm: "PM",
                    morning1: "y bore",
                    afternoon1: "y prynhawn",
                    evening1: "yr hwyr"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "Cyn Crist",
                    "1": "Oed Crist",
                    "0-alt-variant": "Cyn Cyfnod Cyffredin",
                    "1-alt-variant": "Cyfnod Cyffredin"
                },
                abbreviated: {
                    "0": "CC",
                    "1": "OC",
                    "0-alt-variant": "CCC",
                    "1-alt-variant": "CYCY"
                },
                narrow: {
                    "0": "C",
                    "1": "O",
                    "0-alt-variant": "CCC",
                    "1-alt-variant": "CYCY"
                }
            }
        },
        gmtFormat: "GMT{0}",
        gmtZeroFormat: "GMT",
        dateFields: {
            era: {
                wide: "oes",
                short: "oes",
                narrow: "oes"
            },
            year: {
                wide: "blwyddyn",
                short: "bl.",
                narrow: "bl."
            },
            quarter: {
                wide: "chwarter",
                short: "chw.",
                narrow: "chw."
            },
            month: {
                wide: "mis",
                short: "mis",
                narrow: "mis"
            },
            week: {
                wide: "wythnos",
                short: "wythnos",
                narrow: "wythnos"
            },
            weekOfMonth: {
                wide: "rhif wythnos yn y mis",
                short: "wythnos y mis",
                narrow: "wythnos y mis"
            },
            day: {
                wide: "diwrnod",
                short: "diwrnod",
                narrow: "diwrnod"
            },
            dayOfYear: {
                wide: "rhif y dydd yn y flwyddyn",
                short: "rhif y dydd yn y fl.",
                narrow: "dydd y fl."
            },
            weekday: {
                wide: "diwrnod o’r wythnos",
                short: "diwrnod o’r wythnos",
                narrow: "diwrnod o’r wythnos"
            },
            weekdayOfMonth: {
                wide: "diwrnod yn y mis",
                short: "diwrnod yn y mis",
                narrow: "diwrnod yn y mis"
            },
            dayperiod: {
                short: "AM/PM",
                wide: "AM/PM",
                narrow: "AM/PM"
            },
            hour: {
                wide: "awr",
                short: "awr",
                narrow: "awr"
            },
            minute: {
                wide: "munud",
                short: "mun.",
                narrow: "mun."
            },
            second: {
                wide: "eiliad",
                short: "eiliad",
                narrow: "eiliad"
            },
            zone: {
                wide: "cylchfa amser",
                short: "cylchfa amser",
                narrow: "cylchfa"
            },
            millisecond: {
                narrow: "ms",
                short: "ms",
                wide: "milieiliad"
            }
        }
    },
    firstDay: 1
};
export default data;

