const data = {
    name: "es",
    likelySubtags: {
        es: "es-Latn-ES"
    },
    identity: {
        language: "es"
    },
    territory: "ES",
    calendar: {
        patterns: {
            d: "d/M/y",
            D: "EEEE, d 'de' MMMM 'de' y",
            m: "d MMM",
            M: "d 'de' MMMM",
            y: "MMM y",
            Y: "MMMM 'de' y",
            F: "EEEE, d 'de' MMMM 'de' y H:mm:ss",
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
            short: "{1}, {0}",
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
                Ehm: "E, h:mm a",
                EHm: "E, H:mm",
                Ehms: "E, h:mm:ss a",
                EHms: "E, H:mm:ss",
                Gy: "y G",
                GyM: "M/y G",
                GyMd: "d/M/y G",
                GyMEd: "E, d/M/y G",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E, d MMM y G",
                GyMMMM: "MMMM 'de' y G",
                GyMMMMd: "d 'de' MMMM 'de' y G",
                GyMMMMEd: "E, d 'de' MMMM 'de' y G",
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
                hv: "h a v",
                Hv: "H 'h' v",
                M: "L",
                Md: "d/M",
                MEd: "E, d/M",
                MMd: "d/M",
                MMdd: "d/M",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E, d MMM",
                MMMMd: "d 'de' MMMM",
                MMMMEd: "E, d 'de' MMMM",
                "MMMMW-count-one": "'semana' W 'de' MMMM",
                "MMMMW-count-other": "'semana' W 'de' MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "EEE, d/M/y",
                yMM: "M/y",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "EEE, d MMM y",
                yMMMM: "MMMM 'de' y",
                yMMMMd: "d 'de' MMMM 'de' y",
                yMMMMEd: "EEE, d 'de' MMMM 'de' y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ 'de' y",
                "yw-count-one": "'semana' w 'de' Y",
                "yw-count-other": "'semana' w 'de' Y"
            }
        },
        timeFormats: {
            full: "H:mm:ss (zzzz)",
            long: "H:mm:ss z",
            medium: "H:mm:ss",
            short: "H:mm"
        },
        dateFormats: {
            full: "EEEE, d 'de' MMMM 'de' y",
            long: "d 'de' MMMM 'de' y",
            medium: "d MMM y",
            short: "d/M/yy"
        },
        days: {
            format: {
                abbreviated: [
                    "dom",
                    "lun",
                    "mar",
                    "mié",
                    "jue",
                    "vie",
                    "sáb"
                ],
                narrow: [
                    "D",
                    "L",
                    "M",
                    "X",
                    "J",
                    "V",
                    "S"
                ],
                short: [
                    "DO",
                    "LU",
                    "MA",
                    "MI",
                    "JU",
                    "VI",
                    "SA"
                ],
                wide: [
                    "domingo",
                    "lunes",
                    "martes",
                    "miércoles",
                    "jueves",
                    "viernes",
                    "sábado"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "dom",
                    "lun",
                    "mar",
                    "mié",
                    "jue",
                    "vie",
                    "sáb"
                ],
                narrow: [
                    "D",
                    "L",
                    "M",
                    "X",
                    "J",
                    "V",
                    "S"
                ],
                short: [
                    "DO",
                    "LU",
                    "MA",
                    "MI",
                    "JU",
                    "VI",
                    "SA"
                ],
                wide: [
                    "domingo",
                    "lunes",
                    "martes",
                    "miércoles",
                    "jueves",
                    "viernes",
                    "sábado"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "ene",
                    "feb",
                    "mar",
                    "abr",
                    "may",
                    "jun",
                    "jul",
                    "ago",
                    "sept",
                    "oct",
                    "nov",
                    "dic"
                ],
                narrow: [
                    "E",
                    "F",
                    "M",
                    "A",
                    "M",
                    "J",
                    "J",
                    "A",
                    "S",
                    "O",
                    "N",
                    "D"
                ],
                wide: [
                    "enero",
                    "febrero",
                    "marzo",
                    "abril",
                    "mayo",
                    "junio",
                    "julio",
                    "agosto",
                    "septiembre",
                    "octubre",
                    "noviembre",
                    "diciembre"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ene",
                    "feb",
                    "mar",
                    "abr",
                    "may",
                    "jun",
                    "jul",
                    "ago",
                    "sept",
                    "oct",
                    "nov",
                    "dic"
                ],
                narrow: [
                    "E",
                    "F",
                    "M",
                    "A",
                    "M",
                    "J",
                    "J",
                    "A",
                    "S",
                    "O",
                    "N",
                    "D"
                ],
                wide: [
                    "enero",
                    "febrero",
                    "marzo",
                    "abril",
                    "mayo",
                    "junio",
                    "julio",
                    "agosto",
                    "septiembre",
                    "octubre",
                    "noviembre",
                    "diciembre"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "T1",
                    "T2",
                    "T3",
                    "T4"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1.er trimestre",
                    "2.º trimestre",
                    "3.er trimestre",
                    "4.º trimestre"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "T1",
                    "T2",
                    "T3",
                    "T4"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1.er trimestre",
                    "2.º trimestre",
                    "3.er trimestre",
                    "4.º trimestre"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    am: "a. m.",
                    noon: "del mediodía",
                    pm: "p. m.",
                    morning1: "de la madrugada",
                    morning2: "de la mañana",
                    evening1: "de la tarde",
                    night1: "de la noche"
                },
                narrow: {
                    am: "a. m.",
                    noon: "del mediodía",
                    pm: "p. m.",
                    morning1: "de la madrugada",
                    morning2: "de la mañana",
                    evening1: "de la tarde",
                    night1: "de la noche"
                },
                wide: {
                    am: "a. m.",
                    noon: "del mediodía",
                    pm: "p. m.",
                    morning1: "de la madrugada",
                    morning2: "de la mañana",
                    evening1: "de la tarde",
                    night1: "de la noche"
                }
            },
            "stand-alone": {
                abbreviated: {
                    am: "a. m.",
                    noon: "mediodía",
                    pm: "p. m.",
                    morning1: "madrugada",
                    morning2: "mañana",
                    evening1: "tarde",
                    night1: "noche"
                },
                narrow: {
                    am: "a. m.",
                    noon: "mediodía",
                    pm: "p. m.",
                    morning1: "madrugada",
                    morning2: "mañana",
                    evening1: "tarde",
                    night1: "noche"
                },
                wide: {
                    am: "a. m.",
                    noon: "mediodía",
                    pm: "p. m.",
                    morning1: "madrugada",
                    morning2: "mañana",
                    evening1: "tarde",
                    night1: "noche"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "antes de Cristo",
                    "1": "después de Cristo",
                    "0-alt-variant": "antes de la era común",
                    "1-alt-variant": "era común"
                },
                abbreviated: {
                    "0": "a. C.",
                    "1": "d. C.",
                    "0-alt-variant": "a. e. c.",
                    "1-alt-variant": "e. c."
                },
                narrow: {
                    "0": "a. C.",
                    "1": "d. C.",
                    "0-alt-variant": "a. e. c.",
                    "1-alt-variant": "e. c."
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
                wide: "año",
                short: "a",
                narrow: "a"
            },
            quarter: {
                wide: "trimestre",
                short: "trim.",
                narrow: "trim."
            },
            month: {
                wide: "mes",
                short: "m",
                narrow: "m"
            },
            week: {
                wide: "semana",
                short: "sem.",
                narrow: "sem."
            },
            weekOfMonth: {
                wide: "semana del mes",
                short: "sem. de mes",
                narrow: "sem. de mes"
            },
            day: {
                wide: "día",
                short: "d",
                narrow: "d"
            },
            dayOfYear: {
                wide: "día del año",
                short: "día del a",
                narrow: "día del a"
            },
            weekday: {
                wide: "día de la semana",
                short: "día de sem.",
                narrow: "día de sem."
            },
            weekdayOfMonth: {
                wide: "día de la semana del mes",
                short: "día de sem. de mes",
                narrow: "día de sem. de mes"
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
                wide: "minuto",
                short: "min",
                narrow: "min"
            },
            second: {
                wide: "segundo",
                short: "s",
                narrow: "s"
            },
            zone: {
                wide: "zona horaria",
                short: "zona",
                narrow: "zona"
            },
            millisecond: {
                narrow: "ms",
                short: "ms",
                wide: "milisegundo"
            }
        }
    },
    firstDay: 1
};
export default data;

