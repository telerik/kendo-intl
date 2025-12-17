const data = {
    name: "uk",
    likelySubtags: {
        uk: "uk-Cyrl-UA"
    },
    identity: {
        language: "uk"
    },
    territory: "UA",
    calendar: {
        patterns: {
            d: "dd.MM.y",
            D: "EEEE, d MMMM y 'р'.",
            m: "d MMM",
            M: "d MMMM",
            y: "LLL y 'р'.",
            Y: "LLLL y 'р'.",
            F: "EEEE, d MMMM y 'р'. HH:mm:ss",
            g: "dd.MM.y HH:mm",
            G: "dd.MM.y HH:mm:ss",
            t: "HH:mm",
            T: "HH:mm:ss",
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
                Ed: "E, d",
                Eh: "E h a",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y G",
                GyM: "MM y G",
                GyMd: "dd-MM-y GGGGG",
                GyMEd: "dd-MM-y, E, G",
                GyMMM: "LLL y 'р'. G",
                GyMMMd: "d MMM y 'р'. G",
                GyMMMEd: "E, d MMM y 'р'. G",
                h: "h a",
                H: "H",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                hv: "h a v",
                Hv: "HH 'год' v",
                M: "LL",
                Md: "dd.MM",
                MEd: "E, dd.MM",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E, d MMM",
                MMMMd: "d MMMM",
                MMMMEd: "E, d MMMM",
                "MMMMW-count-one": "W-'й' 'тиж'. MMMM",
                "MMMMW-count-few": "W-'й' 'тиж'. MMMM",
                "MMMMW-count-many": "W-'й' 'тиж'. MMMM",
                "MMMMW-count-other": "W-'й' 'тиж'. MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "MM.y",
                yMd: "dd.MM.y",
                yMEd: "E, dd.MM.y",
                yMMM: "LLL y 'р'.",
                yMMMd: "d MMM y 'р'.",
                yMMMEd: "E, d MMM y 'р'.",
                yMMMM: "LLLL y 'р'.",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y 'р'.",
                "yw-count-one": "w-'й' 'тиж'. Y 'р'.",
                "yw-count-few": "w-'й' 'тиж'. Y 'р'.",
                "yw-count-many": "w-'й' 'тиж'. Y 'р'.",
                "yw-count-other": "w-'й' 'тиж'. Y 'р'."
            }
        },
        timeFormats: {
            full: "HH:mm:ss zzzz",
            long: "HH:mm:ss z",
            medium: "HH:mm:ss",
            short: "HH:mm"
        },
        dateFormats: {
            full: "EEEE, d MMMM y 'р'.",
            long: "d MMMM y 'р'.",
            medium: "d MMM y 'р'.",
            short: "dd.MM.yy"
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
                    "Н",
                    "П",
                    "В",
                    "С",
                    "Ч",
                    "П",
                    "С"
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
                    "неділя",
                    "понеділок",
                    "вівторок",
                    "середа",
                    "четвер",
                    "пʼятниця",
                    "субота"
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
                    "Н",
                    "П",
                    "В",
                    "С",
                    "Ч",
                    "П",
                    "С"
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
                    "неділя",
                    "понеділок",
                    "вівторок",
                    "середа",
                    "четвер",
                    "пʼятниця",
                    "субота"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "січ.",
                    "лют.",
                    "бер.",
                    "квіт.",
                    "трав.",
                    "черв.",
                    "лип.",
                    "серп.",
                    "вер.",
                    "жовт.",
                    "лист.",
                    "груд."
                ],
                narrow: [
                    "с",
                    "л",
                    "б",
                    "к",
                    "т",
                    "ч",
                    "л",
                    "с",
                    "в",
                    "ж",
                    "л",
                    "г"
                ],
                wide: [
                    "січня",
                    "лютого",
                    "березня",
                    "квітня",
                    "травня",
                    "червня",
                    "липня",
                    "серпня",
                    "вересня",
                    "жовтня",
                    "листопада",
                    "грудня"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "січ.",
                    "лют.",
                    "бер.",
                    "квіт.",
                    "трав.",
                    "черв.",
                    "лип.",
                    "серп.",
                    "вер.",
                    "жовт.",
                    "лист.",
                    "груд."
                ],
                narrow: [
                    "С",
                    "Л",
                    "Б",
                    "К",
                    "Т",
                    "Ч",
                    "Л",
                    "С",
                    "В",
                    "Ж",
                    "Л",
                    "Г"
                ],
                wide: [
                    "січень",
                    "лютий",
                    "березень",
                    "квітень",
                    "травень",
                    "червень",
                    "липень",
                    "серпень",
                    "вересень",
                    "жовтень",
                    "листопад",
                    "грудень"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "1-й кв.",
                    "2-й кв.",
                    "3-й кв.",
                    "4-й кв."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1-й квартал",
                    "2-й квартал",
                    "3-й квартал",
                    "4-й квартал"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "1-й кв.",
                    "2-й кв.",
                    "3-й кв.",
                    "4-й кв."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1-й квартал",
                    "2-й квартал",
                    "3-й квартал",
                    "4-й квартал"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "ночі",
                    am: "дп",
                    noon: "дня",
                    pm: "пп",
                    morning1: "ранку",
                    afternoon1: "дня",
                    evening1: "вечора",
                    night1: "ночі"
                },
                narrow: {
                    midnight: "ночі",
                    am: "дп",
                    noon: "дня",
                    pm: "пп",
                    morning1: "ранку",
                    afternoon1: "дня",
                    evening1: "вечора",
                    night1: "ночі"
                },
                wide: {
                    midnight: "ночі",
                    am: "дп",
                    noon: "дня",
                    pm: "пп",
                    morning1: "ранку",
                    afternoon1: "дня",
                    evening1: "вечора",
                    night1: "ночі"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "північ",
                    am: "дп",
                    noon: "полудень",
                    pm: "пп",
                    morning1: "ранок",
                    afternoon1: "день",
                    evening1: "вечір",
                    night1: "ніч"
                },
                narrow: {
                    midnight: "північ",
                    am: "дп",
                    noon: "полудень",
                    pm: "пп",
                    morning1: "ранок",
                    afternoon1: "день",
                    evening1: "вечір",
                    night1: "ніч"
                },
                wide: {
                    midnight: "північ",
                    am: "дп",
                    noon: "полудень",
                    pm: "пп",
                    morning1: "ранок",
                    afternoon1: "день",
                    evening1: "вечір",
                    night1: "ніч"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "до нашої ери",
                    "1": "нашої ери",
                    "0-alt-variant": "до нової ери",
                    "1-alt-variant": "нової ери"
                },
                abbreviated: {
                    "0": "до н. е.",
                    "1": "н. е.",
                    "0-alt-variant": "до н. е.",
                    "1-alt-variant": "н. е."
                },
                narrow: {
                    "0": "до н.е.",
                    "1": "н.е.",
                    "0-alt-variant": "до н. е.",
                    "1-alt-variant": "н. е."
                }
            }
        },
        gmtFormat: "GMT{0}",
        gmtZeroFormat: "GMT",
        dateFields: {
            era: {
                wide: "ера",
                short: "е.",
                narrow: "е"
            },
            year: {
                wide: "рік",
                short: "р.",
                narrow: "р"
            },
            quarter: {
                wide: "квартал",
                short: "кв.",
                narrow: "кв"
            },
            month: {
                wide: "місяць",
                short: "міс.",
                narrow: "м"
            },
            week: {
                wide: "тиждень",
                short: "тиж.",
                narrow: "т"
            },
            weekOfMonth: {
                wide: "тиждень місяця",
                short: "тиж. місяця",
                narrow: "тиж. міс."
            },
            day: {
                wide: "день",
                short: "д.",
                narrow: "д"
            },
            dayOfYear: {
                wide: "день року",
                short: "д. року",
                narrow: "д. р."
            },
            weekday: {
                wide: "день тижня",
                short: "д. тижня",
                narrow: "д. тиж."
            },
            weekdayOfMonth: {
                wide: "день місяця",
                short: "д. місяця",
                narrow: "д. міс."
            },
            dayperiod: {
                short: "дп/пп",
                wide: "дп/пп",
                narrow: "дп/пп"
            },
            hour: {
                wide: "година",
                short: "год.",
                narrow: "год"
            },
            minute: {
                wide: "хвилина",
                short: "хв.",
                narrow: "хв"
            },
            second: {
                wide: "секунда",
                short: "с",
                narrow: "с"
            },
            zone: {
                wide: "часовий пояс",
                short: "час. пояс",
                narrow: "час. п."
            },
            millisecond: {
                narrow: "мс",
                short: "мс",
                wide: "мілісекунда"
            }
        }
    },
    firstDay: 1
};
export default data;

