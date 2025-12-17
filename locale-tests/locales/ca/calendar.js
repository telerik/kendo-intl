const data = {
    name: "ca",
    likelySubtags: {
        ca: "ca-Latn-ES"
    },
    identity: {
        language: "ca"
    },
    territory: "ES",
    calendar: {
        patterns: {
            d: "d/M/y",
            D: "EEEE, d MMMM 'del' y",
            m: "d MMM",
            M: "d MMMM",
            y: "LLL 'del' y",
            Y: "LLLL 'del' y",
            F: "EEEE, d MMMM 'del' y H:mm:ss",
            g: "d/M/y H:mm",
            G: "d/M/y H:mm:ss",
            t: "H:mm",
            T: "H:mm:ss",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1}, {0}",
            long: "{1}, {0}",
            medium: "{1}, {0}",
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
                Ed: "E d",
                Eh: "E h a",
                Ehm: "E h:mm a",
                EHm: "E H:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E H:mm:ss",
                Gy: "y G",
                GyM: "M/y G",
                GyMd: "dd-MM-y GGGGG",
                GyMEd: "E, d/M/y G",
                GyMMM: "LLL y G",
                GyMMMd: "d MMM 'del' y G",
                GyMMMEd: "E, d MMM 'del' y G",
                GyMMMM: "LLLL 'del' y G",
                GyMMMMd: "d MMMM 'del' y G",
                GyMMMMEd: "E, d MMMM 'del' y G",
                h: "h a",
                H: "H",
                hm: "h:mm a",
                Hm: "H:mm",
                hms: "h:mm:ss a",
                Hms: "H:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "H:mm:ss v",
                hmsvvvv: "h:mm:ss a (vvvv)",
                Hmsvvvv: "H:mm:ss (vvvv)",
                hmv: "h:mm a v",
                Hmv: "H:mm v",
                hmvvvv: "h:mm a (vvvv)",
                Hmvvvv: "H:mm (vvvv)",
                hv: "h a v",
                Hv: "H 'h' v",
                M: "L",
                Md: "d/M",
                MEd: "E d/M",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E, d MMM",
                MMMMd: "d MMMM",
                MMMMEd: "E, d MMMM",
                "MMMMW-count-one": "'setmana' W MMMM",
                "MMMMW-count-other": "'setmana' W MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "E, d/M/y",
                yMMM: "LLL 'del' y",
                yMMMd: "d MMM 'del' y",
                yMMMEd: "E, d MMM y",
                yMMMM: "LLLL 'del' y",
                yMMMMd: "d MMMM 'del' y",
                yMMMMEd: "E, d MMMM 'del' y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ 'del' y",
                "yw-count-one": "'setmana' w 'del' Y",
                "yw-count-other": "'setmana' w 'del' Y"
            }
        },
        timeFormats: {
            full: "H:mm:ss (zzzz)",
            long: "H:mm:ss z",
            medium: "H:mm:ss",
            short: "H:mm"
        },
        dateFormats: {
            full: "EEEE, d MMMM 'del' y",
            long: "d MMMM 'del' y",
            medium: "d MMM y",
            short: "d/M/yy"
        },
        days: {
            format: {
                abbreviated: [
                    "dg.",
                    "dl.",
                    "dt.",
                    "dc.",
                    "dj.",
                    "dv.",
                    "ds."
                ],
                narrow: [
                    "dg.",
                    "dl.",
                    "dt.",
                    "dc.",
                    "dj.",
                    "dv.",
                    "ds."
                ],
                short: [
                    "dg.",
                    "dl.",
                    "dt.",
                    "dc.",
                    "dj.",
                    "dv.",
                    "ds."
                ],
                wide: [
                    "diumenge",
                    "dilluns",
                    "dimarts",
                    "dimecres",
                    "dijous",
                    "divendres",
                    "dissabte"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "dg.",
                    "dl.",
                    "dt.",
                    "dc.",
                    "dj.",
                    "dv.",
                    "ds."
                ],
                narrow: [
                    "dg.",
                    "dl.",
                    "dt.",
                    "dc.",
                    "dj.",
                    "dv.",
                    "ds."
                ],
                short: [
                    "dg.",
                    "dl.",
                    "dt.",
                    "dc.",
                    "dj.",
                    "dv.",
                    "ds."
                ],
                wide: [
                    "diumenge",
                    "dilluns",
                    "dimarts",
                    "dimecres",
                    "dijous",
                    "divendres",
                    "dissabte"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "de gen.",
                    "de febr.",
                    "de març",
                    "d’abr.",
                    "de maig",
                    "de juny",
                    "de jul.",
                    "d’ag.",
                    "de set.",
                    "d’oct.",
                    "de nov.",
                    "de des."
                ],
                narrow: [
                    "GN",
                    "FB",
                    "MÇ",
                    "AB",
                    "MG",
                    "JN",
                    "JL",
                    "AG",
                    "ST",
                    "OC",
                    "NV",
                    "DS"
                ],
                wide: [
                    "de gener",
                    "de febrer",
                    "de març",
                    "d’abril",
                    "de maig",
                    "de juny",
                    "de juliol",
                    "d’agost",
                    "de setembre",
                    "d’octubre",
                    "de novembre",
                    "de desembre"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "gen.",
                    "febr.",
                    "març",
                    "abr.",
                    "maig",
                    "juny",
                    "jul.",
                    "ag.",
                    "set.",
                    "oct.",
                    "nov.",
                    "des."
                ],
                narrow: [
                    "GN",
                    "FB",
                    "MÇ",
                    "AB",
                    "MG",
                    "JN",
                    "JL",
                    "AG",
                    "ST",
                    "OC",
                    "NV",
                    "DS"
                ],
                wide: [
                    "gener",
                    "febrer",
                    "març",
                    "abril",
                    "maig",
                    "juny",
                    "juliol",
                    "agost",
                    "setembre",
                    "octubre",
                    "novembre",
                    "desembre"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "1T",
                    "2T",
                    "3T",
                    "4T"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1r trimestre",
                    "2n trimestre",
                    "3r trimestre",
                    "4t trimestre"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "1T",
                    "2T",
                    "3T",
                    "4T"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1r trimestre",
                    "2n trimestre",
                    "3r trimestre",
                    "4t trimestre"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "mitjanit",
                    am: "a. m.",
                    pm: "p. m.",
                    morning1: "matinada",
                    morning2: "matí",
                    afternoon1: "migdia",
                    afternoon2: "tarda",
                    evening1: "vespre",
                    night1: "nit"
                },
                narrow: {
                    midnight: "mitjanit",
                    am: "a. m.",
                    pm: "p. m.",
                    morning1: "matinada",
                    morning2: "matí",
                    afternoon1: "migdia",
                    afternoon2: "tarda",
                    evening1: "vespre",
                    night1: "nit"
                },
                wide: {
                    midnight: "mitjanit",
                    am: "a. m.",
                    pm: "p. m.",
                    morning1: "matinada",
                    morning2: "matí",
                    afternoon1: "migdia",
                    afternoon2: "tarda",
                    evening1: "vespre",
                    night1: "nit"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "mitjanit",
                    am: "a. m.",
                    pm: "p. m.",
                    morning1: "matinada",
                    morning2: "matí",
                    afternoon1: "migdia",
                    afternoon2: "tarda",
                    evening1: "vespre",
                    night1: "nit"
                },
                narrow: {
                    midnight: "mitjanit",
                    am: "a. m.",
                    pm: "p. m.",
                    morning1: "matinada",
                    morning2: "matí",
                    afternoon1: "migdia",
                    afternoon2: "tarda",
                    evening1: "vespre",
                    night1: "nit"
                },
                wide: {
                    midnight: "mitjanit",
                    am: "a. m.",
                    pm: "p. m.",
                    morning1: "matinada",
                    morning2: "matí",
                    afternoon1: "migdia",
                    afternoon2: "tarda",
                    evening1: "vespre",
                    night1: "nit"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "abans de Crist",
                    "1": "després de Crist",
                    "0-alt-variant": "abans de l’era cristiana",
                    "1-alt-variant": "era cristiana"
                },
                abbreviated: {
                    "0": "aC",
                    "1": "dC",
                    "0-alt-variant": "AEC",
                    "1-alt-variant": "EC"
                },
                narrow: {
                    "0": "aC",
                    "1": "dC",
                    "0-alt-variant": "AEC",
                    "1-alt-variant": "EC"
                }
            }
        },
        gmtFormat: "GMT{0}",
        gmtZeroFormat: "GMT",
        dateFields: {
            era: {
                wide: "era",
                short: "era",
                narrow: "era"
            },
            year: {
                wide: "any",
                short: "any",
                narrow: "any"
            },
            quarter: {
                wide: "trimestre",
                short: "trim.",
                narrow: "trim."
            },
            month: {
                wide: "mes",
                short: "mes",
                narrow: "mes"
            },
            week: {
                wide: "setmana",
                short: "setm.",
                narrow: "setm."
            },
            weekOfMonth: {
                wide: "setmana del mes",
                short: "setm. del mes",
                narrow: "setm. del mes"
            },
            day: {
                wide: "dia",
                short: "dia",
                narrow: "dia"
            },
            dayOfYear: {
                wide: "dia de l’any",
                short: "dia de l’any",
                narrow: "dia de l’any"
            },
            weekday: {
                wide: "dia de la setmana",
                short: "dia de la setm.",
                narrow: "dia de la setm."
            },
            weekdayOfMonth: {
                wide: "dia de la setmana del mes",
                short: "dia de la setm. del mes",
                narrow: "dia de la setm. del mes"
            },
            dayperiod: {
                short: "a. m./p. m.",
                wide: "a. m./p. m.",
                narrow: "a. m./p. m."
            },
            hour: {
                wide: "hora",
                short: "h",
                narrow: "h"
            },
            minute: {
                wide: "minut",
                short: "min",
                narrow: "min"
            },
            second: {
                wide: "segon",
                short: "s",
                narrow: "s"
            },
            zone: {
                wide: "fus horari",
                short: "fus horari",
                narrow: "fus horari"
            },
            millisecond: {
                narrow: "ms",
                short: "ms",
                wide: "mil·lisegon"
            }
        }
    },
    firstDay: 1
};
export default data;

