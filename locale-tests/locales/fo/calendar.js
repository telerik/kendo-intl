const data = {
    name: "fo",
    likelySubtags: {
        fo: "fo-Latn-FO"
    },
    identity: {
        language: "fo"
    },
    territory: "FO",
    calendar: {
        patterns: {
            d: "dd.MM.y",
            D: "EEEE, d. MMMM y",
            m: "d. MMM",
            M: "d. MMMM",
            y: "MMM y",
            Y: "MMMM y",
            F: "EEEE, d. MMMM y HH:mm:ss",
            g: "dd.MM.y HH:mm",
            G: "dd.MM.y HH:mm:ss",
            t: "HH:mm",
            T: "HH:mm:ss",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1} 'kl'. {0}",
            long: "{1} 'kl'. {0}",
            medium: "{1}, {0}",
            short: "{1}, {0}",
            availableFormats: {
                Bh: "h B",
                Bhm: "h:mm B",
                Bhms: "h:mm:ss B",
                d: "d.",
                E: "ccc",
                EBhm: "E h:mm B",
                EBhms: "E h:mm:ss B",
                Ed: "E d.",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y G",
                GyMd: "GGGGG y-MM-dd",
                GyMMM: "MMM y G",
                GyMMMd: "d. MMM y G",
                GyMMMEd: "E d. MMM y G",
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
                M: "LL",
                Md: "dd.MM",
                MEd: "E dd.MM",
                MMM: "LLL",
                MMMd: "d. MMM",
                MMMEd: "E d. MMM",
                MMMMd: "d. MMMM",
                "MMMMW-count-one": "W. 'vika' 'í' MMMM",
                "MMMMW-count-other": "W. 'vika' 'í' MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "MM.y",
                yMd: "dd.MM.y",
                yMEd: "E dd.MM.y",
                yMMM: "MMM y",
                yMMMd: "d. MMM y",
                yMMMEd: "E d. MMM y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ 'í' y",
                yQQQQ: "QQQQ 'í' y",
                "yw-count-one": "w. 'vika' 'í' Y",
                "yw-count-other": "w. 'vika' 'í' Y"
            }
        },
        timeFormats: {
            full: "HH:mm:ss zzzz",
            long: "HH:mm:ss z",
            medium: "HH:mm:ss",
            short: "HH:mm"
        },
        dateFormats: {
            full: "EEEE, d. MMMM y",
            long: "d. MMMM y",
            medium: "dd.MM.y",
            short: "dd.MM.yy"
        },
        days: {
            format: {
                abbreviated: [
                    "sun.",
                    "mán.",
                    "týs.",
                    "mik.",
                    "hós.",
                    "frí.",
                    "ley."
                ],
                narrow: [
                    "S",
                    "M",
                    "T",
                    "M",
                    "H",
                    "F",
                    "L"
                ],
                short: [
                    "su.",
                    "má.",
                    "tý.",
                    "mi.",
                    "hó.",
                    "fr.",
                    "le."
                ],
                wide: [
                    "sunnudagur",
                    "mánadagur",
                    "týsdagur",
                    "mikudagur",
                    "hósdagur",
                    "fríggjadagur",
                    "leygardagur"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "sun",
                    "mán",
                    "týs",
                    "mik",
                    "hós",
                    "frí",
                    "ley"
                ],
                narrow: [
                    "S",
                    "M",
                    "T",
                    "M",
                    "H",
                    "F",
                    "L"
                ],
                short: [
                    "su",
                    "má",
                    "tý",
                    "mi",
                    "hó",
                    "fr",
                    "le"
                ],
                wide: [
                    "sunnudagur",
                    "mánadagur",
                    "týsdagur",
                    "mikudagur",
                    "hósdagur",
                    "fríggjadagur",
                    "leygardagur"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "jan.",
                    "feb.",
                    "mar.",
                    "apr.",
                    "mai",
                    "jun.",
                    "jul.",
                    "aug.",
                    "sep.",
                    "okt.",
                    "nov.",
                    "des."
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
                    "januar",
                    "februar",
                    "mars",
                    "apríl",
                    "mai",
                    "juni",
                    "juli",
                    "august",
                    "september",
                    "oktober",
                    "november",
                    "desember"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "jan",
                    "feb",
                    "mar",
                    "apr",
                    "mai",
                    "jun",
                    "jul",
                    "aug",
                    "sep",
                    "okt",
                    "nov",
                    "des"
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
                    "januar",
                    "februar",
                    "mars",
                    "apríl",
                    "mai",
                    "juni",
                    "juli",
                    "august",
                    "september",
                    "oktober",
                    "november",
                    "desember"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "1. ársfj.",
                    "2. ársfj.",
                    "3. ársfj.",
                    "4. ársfj."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1. ársfjórðingur",
                    "2. ársfjórðingur",
                    "3. ársfjórðingur",
                    "4. ársfjórðingur"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "1. ársfj.",
                    "2. ársfj.",
                    "3. ársfj.",
                    "4. ársfj."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1. ársfjórðingur",
                    "2. ársfjórðingur",
                    "3. ársfjórðingur",
                    "4. ársfjórðingur"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    am: "AM",
                    pm: "PM"
                },
                narrow: {
                    am: "AM",
                    pm: "PM"
                },
                wide: {
                    am: "AM",
                    pm: "PM"
                }
            },
            "stand-alone": {
                abbreviated: {
                    am: "AM",
                    pm: "PM"
                },
                narrow: {
                    am: "AM",
                    pm: "PM"
                },
                wide: {
                    am: "AM",
                    pm: "PM"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "fyri Krist",
                    "1": "eftir Krist",
                    "0-alt-variant": "fyri okkara tíðarrokning",
                    "1-alt-variant": "okkara tíðarrokning"
                },
                abbreviated: {
                    "0": "f.Kr.",
                    "1": "e.Kr.",
                    "0-alt-variant": "f.o.tíðr.",
                    "1-alt-variant": "o.tíðr."
                },
                narrow: {
                    "0": "fKr",
                    "1": "eKr",
                    "0-alt-variant": "flt",
                    "1-alt-variant": "lt"
                }
            }
        },
        gmtFormat: "GMT{0}",
        gmtZeroFormat: "GMT",
        dateFields: {
            era: {
                wide: "tíðarrokning",
                short: "tíðarrokning",
                narrow: "tíðarrokning"
            },
            year: {
                wide: "ár",
                short: "ár",
                narrow: "ár"
            },
            quarter: {
                wide: "ársfjórðingur",
                short: "ársfj.",
                narrow: "ársfj."
            },
            month: {
                wide: "mánaður",
                short: "mnð.",
                narrow: "mnð."
            },
            week: {
                wide: "vika",
                short: "vi.",
                narrow: "v."
            },
            weekOfMonth: {
                wide: "vika í mánaðinum",
                short: "vi. í mnð.",
                narrow: "vi. í mnð."
            },
            day: {
                wide: "dagur",
                short: "da.",
                narrow: "d."
            },
            dayOfYear: {
                wide: "dagur í árinum",
                short: "dagur í ár.",
                narrow: "dagur í ár."
            },
            weekday: {
                wide: "vikudagur",
                short: "vikudagur",
                narrow: "vikudagur"
            },
            weekdayOfMonth: {
                wide: "vikudagur í mánaðinum",
                short: "vikudagur í mnð.",
                narrow: "vikudagur í mnð."
            },
            dayperiod: {
                short: "AM/PM",
                wide: "AM/PM",
                narrow: "AM/PM"
            },
            hour: {
                wide: "tími",
                short: "t.",
                narrow: "t."
            },
            minute: {
                wide: "minuttur",
                short: "min.",
                narrow: "m."
            },
            second: {
                wide: "sekund",
                short: "sek.",
                narrow: "s."
            },
            zone: {
                wide: "tíðarøki",
                short: "tíðarøki",
                narrow: "tíðarøki"
            }
        }
    },
    firstDay: 1
};
export default data;

