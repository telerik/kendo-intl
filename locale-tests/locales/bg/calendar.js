const data = {
    name: "bg",
    likelySubtags: {
        bg: "bg-Cyrl-BG"
    },
    identity: {
        language: "bg"
    },
    territory: "BG",
    calendar: {
        patterns: {
            d: "d.MM.y 'г'.",
            D: "EEEE, d MMMM y 'г'.",
            m: "d.MM",
            M: "d MMMM",
            y: "MM.y 'г'.",
            Y: "MMMM y 'г'.",
            F: "EEEE, d MMMM y 'г'. H:mm:ss 'ч'.",
            g: "d.MM.y 'г'. H:mm 'ч'.",
            G: "d.MM.y 'г'. H:mm:ss 'ч'.",
            t: "H:mm 'ч'.",
            T: "H:mm:ss 'ч'.",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1}, {0}",
            long: "{1}, {0}",
            medium: "{1}, {0}",
            short: "{1}, {0}",
            availableFormats: {
                Bh: "h 'ч'. B",
                Bhm: "h:mm 'ч'. B",
                Bhms: "h:mm:ss 'ч'. B",
                d: "d",
                E: "ccc",
                EBhm: "E, h:mm 'ч'. B",
                EBhms: "E, h:mm:ss 'ч'. B",
                Ed: "E, d",
                Ehm: "E, h:mm 'ч'. a",
                EHm: "E, HH:mm 'ч'.",
                Ehms: "E, h:mm:ss 'ч'. a",
                EHms: "E, H:mm:ss 'ч'.",
                Gy: "y 'г'. G",
                GyMMM: "MM.y 'г'. G",
                GyMMMd: "d.MM.y 'г'. G",
                GyMMMEd: "E, d.MM.y 'г'. G",
                GyMMMM: "MMMM y 'г'. G",
                GyMMMMd: "d MMMM y 'г'. G",
                GyMMMMEd: "E, d MMMM y 'г'. G",
                h: "h 'ч'. a",
                H: "H 'ч'.",
                hm: "h:mm 'ч'. a",
                Hm: "H:mm 'ч'.",
                hms: "h:mm:ss 'ч'. a",
                Hms: "H:mm:ss 'ч'.",
                hmsv: "h:mm:ss 'ч'. a v",
                Hmsv: "HH:mm:ss 'ч'. v",
                hmv: "h:mm 'ч'. a v",
                Hmv: "HH:mm 'ч'. v",
                M: "L",
                Md: "d.MM",
                MEd: "E, d.MM",
                MMM: "MM",
                MMMd: "d.MM",
                MMMEd: "E, d.MM",
                MMMM: "LLLL",
                MMMMd: "d MMMM",
                MMMMdd: "d MMMM",
                MMMMEd: "E, d MMMM",
                "MMMMW-count-one": "'седмица' W 'от' MMM",
                "MMMMW-count-other": "'седмица' W 'от' MMM",
                ms: "m:ss",
                y: "y 'г'.",
                yM: "MM.y 'г'.",
                yMd: "d.MM.y 'г'.",
                yMEd: "E, d.MM.y 'г'.",
                yMMM: "MM.y 'г'.",
                yMMMd: "d.MM.y 'г'.",
                yMMMEd: "E, d.MM.y 'г'.",
                yMMMM: "MMMM y 'г'.",
                yMMMMd: "d MMMM y 'г'.",
                yMMMMEd: "E, d MMMM y 'г'.",
                yQQQ: "QQQ y 'г'.",
                yQQQQ: "QQQQ y 'г'.",
                "yw-count-one": "'седмица' w 'от' Y 'г'.",
                "yw-count-other": "'седмица' w 'от' Y 'г'."
            }
        },
        timeFormats: {
            full: "H:mm:ss 'ч'. zzzz",
            long: "H:mm:ss 'ч'. z",
            medium: "H:mm:ss 'ч'.",
            short: "H:mm 'ч'."
        },
        dateFormats: {
            full: "EEEE, d MMMM y 'г'.",
            long: "d MMMM y 'г'.",
            medium: "d.MM.y 'г'.",
            short: "d.MM.yy 'г'."
        },
        days: {
            format: {
                abbreviated: [
                    "нд",
                    "пн",
                    "вт",
                    "ср",
                    "чт",
                    "пт",
                    "сб"
                ],
                narrow: [
                    "н",
                    "п",
                    "в",
                    "с",
                    "ч",
                    "п",
                    "с"
                ],
                short: [
                    "нд",
                    "пн",
                    "вт",
                    "ср",
                    "чт",
                    "пт",
                    "сб"
                ],
                wide: [
                    "неделя",
                    "понеделник",
                    "вторник",
                    "сряда",
                    "четвъртък",
                    "петък",
                    "събота"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "нд",
                    "пн",
                    "вт",
                    "ср",
                    "чт",
                    "пт",
                    "сб"
                ],
                narrow: [
                    "н",
                    "п",
                    "в",
                    "с",
                    "ч",
                    "п",
                    "с"
                ],
                short: [
                    "нд",
                    "пн",
                    "вт",
                    "ср",
                    "чт",
                    "пт",
                    "сб"
                ],
                wide: [
                    "неделя",
                    "понеделник",
                    "вторник",
                    "сряда",
                    "четвъртък",
                    "петък",
                    "събота"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "яну",
                    "фев",
                    "март",
                    "апр",
                    "май",
                    "юни",
                    "юли",
                    "авг",
                    "сеп",
                    "окт",
                    "ное",
                    "дек"
                ],
                narrow: [
                    "я",
                    "ф",
                    "м",
                    "а",
                    "м",
                    "ю",
                    "ю",
                    "а",
                    "с",
                    "о",
                    "н",
                    "д"
                ],
                wide: [
                    "януари",
                    "февруари",
                    "март",
                    "април",
                    "май",
                    "юни",
                    "юли",
                    "август",
                    "септември",
                    "октомври",
                    "ноември",
                    "декември"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "яну",
                    "фев",
                    "март",
                    "апр",
                    "май",
                    "юни",
                    "юли",
                    "авг",
                    "сеп",
                    "окт",
                    "ное",
                    "дек"
                ],
                narrow: [
                    "я",
                    "ф",
                    "м",
                    "а",
                    "м",
                    "ю",
                    "ю",
                    "а",
                    "с",
                    "о",
                    "н",
                    "д"
                ],
                wide: [
                    "януари",
                    "февруари",
                    "март",
                    "април",
                    "май",
                    "юни",
                    "юли",
                    "август",
                    "септември",
                    "октомври",
                    "ноември",
                    "декември"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "1. трим.",
                    "2. трим.",
                    "3. трим.",
                    "4. трим."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1. тримесечие",
                    "2. тримесечие",
                    "3. тримесечие",
                    "4. тримесечие"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "1. трим.",
                    "2. трим.",
                    "3. трим.",
                    "4. трим."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1. тримесечие",
                    "2. тримесечие",
                    "3. тримесечие",
                    "4. тримесечие"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "полунощ",
                    am: "am",
                    pm: "pm",
                    morning1: "сутринта",
                    morning2: "на обед",
                    afternoon1: "следобед",
                    evening1: "вечерта",
                    night1: "през нощта"
                },
                narrow: {
                    midnight: "полунощ",
                    am: "am",
                    pm: "pm",
                    morning1: "сутринта",
                    morning2: "на обед",
                    afternoon1: "следобед",
                    evening1: "вечерта",
                    night1: "през нощта"
                },
                wide: {
                    midnight: "полунощ",
                    am: "пр.об.",
                    pm: "сл.об.",
                    morning1: "сутринта",
                    morning2: "на обяд",
                    afternoon1: "следобед",
                    evening1: "вечерта",
                    night1: "през нощта"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "полунощ",
                    am: "am",
                    pm: "pm",
                    morning1: "сутринта",
                    morning2: "на обед",
                    afternoon1: "следобед",
                    evening1: "вечерта",
                    night1: "през нощта"
                },
                narrow: {
                    midnight: "полунощ",
                    am: "am",
                    pm: "pm",
                    morning1: "сутринта",
                    morning2: "наобед",
                    afternoon1: "следобед",
                    evening1: "вечерта",
                    night1: "през нощта"
                },
                wide: {
                    midnight: "полунощ",
                    am: "am",
                    pm: "pm",
                    morning1: "сутринта",
                    morning2: "на обед",
                    afternoon1: "следобед",
                    evening1: "вечерта",
                    night1: "през нощта"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    0: "преди Христа",
                    1: "след Христа",
                    "0-alt-variant": "преди новата ера",
                    "1-alt-variant": "след новата ера"
                },
                abbreviated: {
                    0: "пр.Хр.",
                    1: "сл.Хр.",
                    "0-alt-variant": "пр.н.е.",
                    "1-alt-variant": "сл.н.е."
                },
                narrow: {
                    0: "пр.Хр.",
                    1: "сл.Хр.",
                    "0-alt-variant": "пр.н.е.",
                    "1-alt-variant": "сл.н.е."
                }
            }
        },
        gmtFormat: "Гринуич{0}",
        gmtZeroFormat: "Гринуич",
        dateFields: {
            era: {
                wide: "ера",
                short: "ера",
                narrow: "ера"
            },
            year: {
                wide: "година",
                short: "г.",
                narrow: "г."
            },
            quarter: {
                wide: "тримесечие",
                short: "трим.",
                narrow: "трим."
            },
            month: {
                wide: "месец",
                short: "мес.",
                narrow: "мес."
            },
            week: {
                wide: "седмица",
                short: "седм.",
                narrow: "седм."
            },
            weekOfMonth: {
                wide: "седмица от месеца",
                short: "седмица от месеца",
                narrow: "седмица от месеца"
            },
            day: {
                wide: "ден",
                short: "д",
                narrow: "д"
            },
            dayOfYear: {
                wide: "ден от годината",
                short: "ден от годината",
                narrow: "ден от годината"
            },
            weekday: {
                wide: "ден от седмицата",
                short: "ден от седм.",
                narrow: "ден от седм."
            },
            weekdayOfMonth: {
                wide: "работен ден от месеца",
                short: "работен ден от месеца",
                narrow: "работен ден от месеца"
            },
            dayperiod: {
                short: "пр.об./сл.об.",
                wide: "пр.об./сл.об.",
                narrow: "пр.об./сл.об."
            },
            hour: {
                wide: "час",
                short: "ч",
                narrow: "ч"
            },
            minute: {
                wide: "минута",
                short: "мин",
                narrow: "мин"
            },
            second: {
                wide: "секунда",
                short: "с",
                narrow: "с"
            },
            zone: {
                wide: "часова зона",
                short: "час. зона",
                narrow: "час. зона"
            }
        }
    },
    firstDay: 1
};
export default data;

