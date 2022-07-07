const data = {
    name: "fr-CA",
    likelySubtags: {
        fr: "fr-Latn-FR"
    },
    identity: {
        language: "fr",
        territory: "CA"
    },
    territory: "CA",
    calendar: {
        patterns: {
            d: "y-MM-dd",
            D: "EEEE d MMMM y",
            m: "d MMM",
            M: "d MMMM",
            y: "MMM y",
            Y: "MMMM y",
            F: "EEEE d MMMM y HH 'h' mm 'min' ss 's'",
            g: "y-MM-dd HH 'h' mm",
            G: "y-MM-dd HH 'h' mm 'min' ss 's'",
            t: "HH 'h' mm",
            T: "HH 'h' mm 'min' ss 's'",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1} 'à' {0}",
            long: "{1} 'à' {0}",
            medium: "{1}, {0}",
            short: "{1} {0}",
            availableFormats: {
                Bh: "h 'h' B",
                Bhm: "h 'h' mm B",
                Bhms: "h 'h' mm 'min' ss 's' B",
                d: "d",
                E: "E",
                EBhm: "E h 'h' mm B",
                EBhms: "E h 'h' mm 'min' ss 's' B",
                Ed: "E d",
                Ehm: "E h 'h' mm a",
                EHm: "E HH 'h' mm",
                Ehms: "E h 'h' mm 'min' ss 's' a",
                EHms: "E HH 'h' mm 'min' ss 's'",
                Gy: "y G",
                GyMd: "y-MM-dd GGGGG",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E d MMM y G",
                h: "h 'h' a",
                H: "HH 'h'",
                hm: "h 'h' mm a",
                Hm: "HH 'h' mm",
                hms: "h 'h' mm 'min' ss 's' a",
                Hms: "HH 'h' mm 'min' ss 's'",
                hmsv: "h 'h' mm 'min' ss 's' a v",
                Hmsv: "HH 'h' mm 'min' ss 's' v",
                hmv: "h 'h' mm a v",
                Hmv: "HH 'h' mm v",
                M: "L",
                Md: "M-d",
                MEd: "E M-d",
                MMd: "MM-d",
                MMdd: "MM-dd",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E d MMM",
                MMMMd: "d MMMM",
                "MMMMW-count-one": "'semaine' W (MMMM)",
                "MMMMW-count-other": "'semaine' W (MMMM)",
                ms: "mm 'min' ss 's'",
                y: "y",
                yM: "y-MM",
                yMd: "y-MM-dd",
                yMEd: "E y-MM-dd",
                yMM: "y-MM",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "E d MMM y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y",
                "yw-count-one": "'semaine' w 'de' Y",
                "yw-count-other": "'semaine' w 'de' Y"
            }
        },
        timeFormats: {
            full: "HH 'h' mm 'min' ss 's' zzzz",
            long: "HH 'h' mm 'min' ss 's' z",
            medium: "HH 'h' mm 'min' ss 's'",
            short: "HH 'h' mm"
        },
        dateFormats: {
            full: "EEEE d MMMM y",
            long: "d MMMM y",
            medium: "d MMM y",
            short: "y-MM-dd"
        },
        days: {
            format: {
                abbreviated: [
                    "dim.",
                    "lun.",
                    "mar.",
                    "mer.",
                    "jeu.",
                    "ven.",
                    "sam."
                ],
                narrow: [
                    "D",
                    "L",
                    "M",
                    "M",
                    "J",
                    "V",
                    "S"
                ],
                short: [
                    "di",
                    "lu",
                    "ma",
                    "me",
                    "je",
                    "ve",
                    "sa"
                ],
                wide: [
                    "dimanche",
                    "lundi",
                    "mardi",
                    "mercredi",
                    "jeudi",
                    "vendredi",
                    "samedi"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "dim.",
                    "lun.",
                    "mar.",
                    "mer.",
                    "jeu.",
                    "ven.",
                    "sam."
                ],
                narrow: [
                    "D",
                    "L",
                    "M",
                    "M",
                    "J",
                    "V",
                    "S"
                ],
                short: [
                    "di",
                    "lu",
                    "ma",
                    "me",
                    "je",
                    "ve",
                    "sa"
                ],
                wide: [
                    "dimanche",
                    "lundi",
                    "mardi",
                    "mercredi",
                    "jeudi",
                    "vendredi",
                    "samedi"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "janv.",
                    "févr.",
                    "mars",
                    "avr.",
                    "mai",
                    "juin",
                    "juill.",
                    "août",
                    "sept.",
                    "oct.",
                    "nov.",
                    "déc."
                ],
                narrow: [
                    "J",
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
                    "janvier",
                    "février",
                    "mars",
                    "avril",
                    "mai",
                    "juin",
                    "juillet",
                    "août",
                    "septembre",
                    "octobre",
                    "novembre",
                    "décembre"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "janv.",
                    "févr.",
                    "mars",
                    "avr.",
                    "mai",
                    "juin",
                    "juill.",
                    "août",
                    "sept.",
                    "oct.",
                    "nov.",
                    "déc."
                ],
                narrow: [
                    "J",
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
                    "janvier",
                    "février",
                    "mars",
                    "avril",
                    "mai",
                    "juin",
                    "juillet",
                    "août",
                    "septembre",
                    "octobre",
                    "novembre",
                    "décembre"
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
                    "1er trimestre",
                    "2e trimestre",
                    "3e trimestre",
                    "4e trimestre"
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
                    "1er trimestre",
                    "2e trimestre",
                    "3e trimestre",
                    "4e trimestre"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "minuit",
                    am: "a.m.",
                    noon: "midi",
                    pm: "p.m.",
                    morning1: "du mat.",
                    afternoon1: "après-midi",
                    evening1: "du soir",
                    night1: "du mat."
                },
                narrow: {
                    midnight: "minuit",
                    am: "a",
                    noon: "midi",
                    pm: "p",
                    morning1: "mat.",
                    afternoon1: "après-midi",
                    evening1: "soir",
                    night1: "mat."
                },
                wide: {
                    midnight: "minuit",
                    am: "a.m.",
                    noon: "midi",
                    pm: "p.m.",
                    morning1: "du matin",
                    afternoon1: "de l’après-midi",
                    evening1: "du soir",
                    night1: "du matin"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "minuit",
                    am: "a.m.",
                    noon: "midi",
                    pm: "p.m.",
                    morning1: "mat.",
                    afternoon1: "après-midi",
                    evening1: "soir",
                    night1: "nuit"
                },
                narrow: {
                    midnight: "minuit",
                    am: "a.m.",
                    noon: "midi",
                    pm: "p.m.",
                    morning1: "mat.",
                    afternoon1: "après-midi",
                    evening1: "soir",
                    night1: "mat."
                },
                wide: {
                    midnight: "minuit",
                    am: "a.m.",
                    noon: "midi",
                    pm: "p.m.",
                    morning1: "matin",
                    afternoon1: "après-midi",
                    evening1: "soir",
                    night1: "nuit"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "avant Jésus-Christ",
                    "1": "après Jésus-Christ",
                    "0-alt-variant": "avant l’ère chrétienne",
                    "1-alt-variant": "de l’ère chrétienne"
                },
                abbreviated: {
                    "0": "av. J.-C.",
                    "1": "ap. J.-C.",
                    "0-alt-variant": "AEC",
                    "1-alt-variant": "EC"
                },
                narrow: {
                    "0": "av. J.-C.",
                    "1": "ap. J.-C.",
                    "0-alt-variant": "AEC",
                    "1-alt-variant": "EC"
                }
            }
        },
        gmtFormat: "UTC{0}",
        gmtZeroFormat: "UTC",
        dateFields: {
            era: {
                wide: "ère",
                short: "ère",
                narrow: "ère"
            },
            year: {
                wide: "année",
                short: "a",
                narrow: "a"
            },
            quarter: {
                wide: "trimestre",
                short: "trim.",
                narrow: "trim."
            },
            month: {
                wide: "mois",
                short: "m.",
                narrow: "m."
            },
            week: {
                wide: "semaine",
                short: "sem.",
                narrow: "sem."
            },
            weekOfMonth: {
                wide: "semaine du mois",
                short: "sem. (mois)",
                narrow: "sem. (mois)"
            },
            day: {
                wide: "jour",
                short: "j",
                narrow: "j"
            },
            dayOfYear: {
                wide: "jour de l’année",
                short: "j de l’année",
                narrow: "j (an)"
            },
            weekday: {
                wide: "jour de la semaine",
                short: "j de la semaine",
                narrow: "j (sem.)"
            },
            weekdayOfMonth: {
                wide: "jour du mois",
                short: "j du mois",
                narrow: "j (mois)"
            },
            dayperiod: {
                short: "cadran",
                wide: "cadran",
                narrow: "cadran"
            },
            hour: {
                wide: "heure",
                short: "h",
                narrow: "h"
            },
            minute: {
                wide: "minute",
                short: "min",
                narrow: "min"
            },
            second: {
                wide: "seconde",
                short: "s",
                narrow: "s"
            },
            zone: {
                wide: "fuseau horaire",
                short: "fuseau horaire",
                narrow: "fuseau horaire"
            },
            millisecond: {
                narrow: "ms",
                short: "ms",
                wide: "milliseconde"
            }
        }
    },
    firstDay: 0
};
export default data;

