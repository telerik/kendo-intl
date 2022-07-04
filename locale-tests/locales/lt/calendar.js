const data = {
    name: "lt",
    likelySubtags: {
        lt: "lt-Latn-LT"
    },
    identity: {
        language: "lt"
    },
    territory: "LT",
    calendar: {
        patterns: {
            d: "y-MM-dd",
            D: "y 'm'. MMMM d 'd'., EEEE",
            m: "MM-dd",
            M: "MMMM d 'd'.",
            y: "y-MM",
            Y: "y 'm'. LLLL",
            F: "y 'm'. MMMM d 'd'., EEEE HH:mm:ss",
            g: "y-MM-dd HH:mm",
            G: "y-MM-dd HH:mm:ss",
            t: "HH:mm",
            T: "HH:mm:ss",
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
                d: "dd",
                E: "ccc",
                EBhm: "h:mm B, E",
                EBhms: "h:mm:ss B, E",
                Ed: "d, E",
                Ehm: "hh:mm a, E",
                EHm: "HH:mm, E",
                Ehms: "hh:mm:ss a, E",
                EHms: "HH:mm:ss, E",
                Gy: "y 'm'. G",
                GyMd: "GGGGG y-MM-dd",
                GyMMM: "y-MM G",
                GyMMMd: "y-MM-dd G",
                GyMMMEd: "y-MM-dd G, E",
                GyMMMM: "y 'm'. G, LLLL",
                GyMMMMd: "y 'm'. G MMMM d 'd'.",
                GyMMMMEd: "y 'm'. G MMMM d 'd'., E",
                h: "hh a",
                H: "HH",
                hm: "hh:mm a",
                Hm: "HH:mm",
                hms: "hh:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "hh:mm:ss a; v",
                Hmsv: "HH:mm:ss; v",
                hmv: "hh:mm a; v",
                Hmv: "HH:mm; v",
                M: "MM",
                Md: "MM-d",
                MEd: "MM-dd, E",
                MMdd: "MM-dd",
                MMM: "MM",
                MMMd: "MM-dd",
                MMMEd: "MM-dd, E",
                MMMM: "LLLL",
                MMMMd: "MMMM d 'd'.",
                MMMMEd: "MMMM d 'd'., E",
                "MMMMW-count-one": "MMMM W 'sav'.",
                "MMMMW-count-few": "MMMM W 'sav'.",
                "MMMMW-count-many": "MMMM W 'sav'.",
                "MMMMW-count-other": "MMMM W 'sav'.",
                ms: "mm:ss",
                y: "y",
                yM: "y-MM",
                yMd: "y-MM-dd",
                yMEd: "y-MM-dd, E",
                yMMM: "y-MM",
                yMMMd: "y-MM-dd",
                yMMMEd: "y-MM-dd, E",
                yMMMM: "y 'm'. LLLL",
                yMMMMd: "y 'm'. MMMM d 'd'.",
                yMMMMEd: "y 'm'. MMMM d 'd'., E",
                yQQQ: "y QQQ",
                yQQQQ: "y QQQQ",
                "yw-count-one": "Y w 'sav'.",
                "yw-count-few": "Y w 'sav'.",
                "yw-count-many": "Y w 'sav'.",
                "yw-count-other": "Y w 'sav'."
            }
        },
        timeFormats: {
            full: "HH:mm:ss zzzz",
            long: "HH:mm:ss z",
            medium: "HH:mm:ss",
            short: "HH:mm"
        },
        dateFormats: {
            full: "y 'm'. MMMM d 'd'., EEEE",
            long: "y 'm'. MMMM d 'd'.",
            medium: "y-MM-dd",
            short: "y-MM-dd"
        },
        days: {
            format: {
                abbreviated: [
                    "sk",
                    "pr",
                    "an",
                    "tr",
                    "kt",
                    "pn",
                    "št"
                ],
                narrow: [
                    "S",
                    "P",
                    "A",
                    "T",
                    "K",
                    "P",
                    "Š"
                ],
                short: [
                    "Sk",
                    "Pr",
                    "An",
                    "Tr",
                    "Kt",
                    "Pn",
                    "Št"
                ],
                wide: [
                    "sekmadienis",
                    "pirmadienis",
                    "antradienis",
                    "trečiadienis",
                    "ketvirtadienis",
                    "penktadienis",
                    "šeštadienis"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "sk",
                    "pr",
                    "an",
                    "tr",
                    "kt",
                    "pn",
                    "št"
                ],
                narrow: [
                    "S",
                    "P",
                    "A",
                    "T",
                    "K",
                    "P",
                    "Š"
                ],
                short: [
                    "Sk",
                    "Pr",
                    "An",
                    "Tr",
                    "Kt",
                    "Pn",
                    "Št"
                ],
                wide: [
                    "sekmadienis",
                    "pirmadienis",
                    "antradienis",
                    "trečiadienis",
                    "ketvirtadienis",
                    "penktadienis",
                    "šeštadienis"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "saus.",
                    "vas.",
                    "kov.",
                    "bal.",
                    "geg.",
                    "birž.",
                    "liep.",
                    "rugp.",
                    "rugs.",
                    "spal.",
                    "lapkr.",
                    "gruod."
                ],
                narrow: [
                    "S",
                    "V",
                    "K",
                    "B",
                    "G",
                    "B",
                    "L",
                    "R",
                    "R",
                    "S",
                    "L",
                    "G"
                ],
                wide: [
                    "sausio",
                    "vasario",
                    "kovo",
                    "balandžio",
                    "gegužės",
                    "birželio",
                    "liepos",
                    "rugpjūčio",
                    "rugsėjo",
                    "spalio",
                    "lapkričio",
                    "gruodžio"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "saus.",
                    "vas.",
                    "kov.",
                    "bal.",
                    "geg.",
                    "birž.",
                    "liep.",
                    "rugp.",
                    "rugs.",
                    "spal.",
                    "lapkr.",
                    "gruod."
                ],
                narrow: [
                    "S",
                    "V",
                    "K",
                    "B",
                    "G",
                    "B",
                    "L",
                    "R",
                    "R",
                    "S",
                    "L",
                    "G"
                ],
                wide: [
                    "sausis",
                    "vasaris",
                    "kovas",
                    "balandis",
                    "gegužė",
                    "birželis",
                    "liepa",
                    "rugpjūtis",
                    "rugsėjis",
                    "spalis",
                    "lapkritis",
                    "gruodis"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "I k.",
                    "II k.",
                    "III k.",
                    "IV k."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "I ketvirtis",
                    "II ketvirtis",
                    "III ketvirtis",
                    "IV ketvirtis"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "I ketv.",
                    "II ketv.",
                    "III ketv.",
                    "IV ketv."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "I ketvirtis",
                    "II ketvirtis",
                    "III ketvirtis",
                    "IV ketvirtis"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "vidurnaktis",
                    am: "priešpiet",
                    noon: "perpiet",
                    pm: "popiet",
                    morning1: "rytas",
                    afternoon1: "popietė",
                    evening1: "vakaras",
                    night1: "naktis"
                },
                narrow: {
                    midnight: "vidurnaktis",
                    am: "pr. p.",
                    noon: "perpiet",
                    pm: "pop.",
                    morning1: "rytas",
                    afternoon1: "popietė",
                    evening1: "vakaras",
                    night1: "naktis"
                },
                wide: {
                    midnight: "vidurnaktis",
                    am: "priešpiet",
                    noon: "perpiet",
                    pm: "popiet",
                    morning1: "rytas",
                    afternoon1: "popietė",
                    evening1: "vakaras",
                    night1: "naktis"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "vidurnaktis",
                    am: "priešpiet",
                    noon: "vidurdienis",
                    pm: "popiet",
                    morning1: "rytas",
                    afternoon1: "diena",
                    evening1: "vakaras",
                    night1: "naktis"
                },
                narrow: {
                    midnight: "vidurnaktis",
                    am: "pr. p.",
                    noon: "vidurdienis",
                    pm: "pop.",
                    morning1: "rytas",
                    afternoon1: "diena",
                    evening1: "vakaras",
                    night1: "naktis"
                },
                wide: {
                    midnight: "vidurnaktis",
                    am: "priešpiet",
                    noon: "vidurdienis",
                    pm: "popiet",
                    morning1: "rytas",
                    afternoon1: "diena",
                    evening1: "vakaras",
                    night1: "naktis"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "prieš Kristų",
                    "1": "po Kristaus",
                    "0-alt-variant": "prieš mūsų erą",
                    "1-alt-variant": "mūsų eroje"
                },
                abbreviated: {
                    "0": "pr. Kr.",
                    "1": "po Kr.",
                    "0-alt-variant": "pr. m. e.",
                    "1-alt-variant": "mūsų eroje"
                },
                narrow: {
                    "0": "pr. Kr.",
                    "1": "po Kr.",
                    "0-alt-variant": "pr. m. e.",
                    "1-alt-variant": "mūsų eroje"
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
                wide: "metai",
                short: "m.",
                narrow: "m."
            },
            quarter: {
                wide: "ketvirtis",
                short: "ketv.",
                narrow: "ketv."
            },
            month: {
                wide: "mėnuo",
                short: "mėn.",
                narrow: "mėn."
            },
            week: {
                wide: "savaitė",
                short: "sav.",
                narrow: "sav."
            },
            weekOfMonth: {
                wide: "mėnesio savaitė",
                short: "mėnesio savaitė",
                narrow: "mėnesio savaitė"
            },
            day: {
                wide: "diena",
                short: "d.",
                narrow: "d."
            },
            dayOfYear: {
                wide: "metų diena",
                short: "metų diena",
                narrow: "metų diena"
            },
            weekday: {
                wide: "savaitės diena",
                short: "savaitės diena",
                narrow: "savaitės diena"
            },
            weekdayOfMonth: {
                wide: "mėnesio šiokiadienis",
                short: "mėnesio šiokiadienis",
                narrow: "mėnesio šiokiadienis"
            },
            dayperiod: {
                short: "iki pietų / po pietų",
                wide: "iki pietų / po pietų",
                narrow: "iki pietų / po pietų"
            },
            hour: {
                wide: "valanda",
                short: "val.",
                narrow: "h"
            },
            minute: {
                wide: "minutė",
                short: "min.",
                narrow: "min."
            },
            second: {
                wide: "sekundė",
                short: "sek.",
                narrow: "s"
            },
            zone: {
                wide: "laiko juosta",
                short: "laiko juosta",
                narrow: "laiko juosta"
            }
        }
    },
    firstDay: 1
};
export default data;

