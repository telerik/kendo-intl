const data = {
    mk: {
        name: "mk",
        likelySubtags: {
            mk: "mk-Cyrl-MK"
        },
        identity: {
            language: "mk"
        },
        territory: "MK",
        calendar: {
            patterns: {
                d: "d.M.y",
                D: "EEEE, dd MMMM y",
                m: "d MMM",
                M: "d MMMM",
                y: "MMM y 'г'.",
                Y: "MMMM y 'г'.",
                F: "EEEE, dd MMMM y HH:mm:ss",
                g: "d.M.y HH:mm",
                G: "d.M.y HH:mm:ss",
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
                    d: "d",
                    E: "ccc",
                    Ed: "d E",
                    Ehm: "E h:mm a",
                    EHm: "E HH:mm",
                    Ehms: "E h:mm:ss a",
                    EHms: "E HH:mm:ss",
                    Gy: "y G",
                    GyMMM: "MMM y G",
                    GyMMMd: "dd MMM y G",
                    GyMMMEd: "E, dd MMM y G",
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
                    Md: "d.M",
                    Mdd: "dd.M",
                    MEd: "E, d.M",
                    MMM: "LLL",
                    MMMd: "d MMM",
                    MMMEd: "E, d MMM",
                    MMMMd: "d MMMM",
                    MMMMEd: "E, d MMMM",
                    "MMMMW-count-one": "W 'седмица' 'од' MMM",
                    "MMMMW-count-other": "W 'седмица' 'од' MMM",
                    ms: "mm:ss",
                    y: "y",
                    yM: "M.y",
                    yMd: "d.M.y",
                    yMEd: "E, d.M.y",
                    yMMM: "MMM y 'г'.",
                    yMMMd: "d MMM y 'г'.",
                    yMMMEd: "E, d MMM y 'г'.",
                    yMMMM: "MMMM y 'г'.",
                    yQQQ: "QQQ y 'г'.",
                    yQQQQ: "QQQQ y 'г'.",
                    "yw-count-one": "w 'седмица' 'од' y",
                    "yw-count-other": "w 'седмица' 'од' y"
                }
            },
            timeFormats: {
                full: "HH:mm:ss zzzz",
                long: "HH:mm:ss z",
                medium: "HH:mm:ss",
                short: "HH:mm"
            },
            dateFormats: {
                full: "EEEE, dd MMMM y",
                long: "dd MMMM y",
                medium: "dd.M.y",
                short: "dd.M.yy"
            },
            days: {
                format: {
                    abbreviated: [
                        "нед.",
                        "пон.",
                        "вт.",
                        "сре.",
                        "чет.",
                        "пет.",
                        "саб."
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
                        "нед.",
                        "пон.",
                        "вто.",
                        "сре.",
                        "чет.",
                        "пет.",
                        "саб."
                    ],
                    wide: [
                        "недела",
                        "понеделник",
                        "вторник",
                        "среда",
                        "четврток",
                        "петок",
                        "сабота"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "нед.",
                        "пон.",
                        "вто.",
                        "сре.",
                        "чет.",
                        "пет.",
                        "саб."
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
                        "нед.",
                        "пон.",
                        "вто.",
                        "сре.",
                        "чет.",
                        "пет.",
                        "саб."
                    ],
                    wide: [
                        "недела",
                        "понеделник",
                        "вторник",
                        "среда",
                        "четврток",
                        "петок",
                        "сабота"
                    ]
                }
            },
            months: {
                format: {
                    abbreviated: [
                        "јан.",
                        "фев.",
                        "мар.",
                        "апр.",
                        "мај",
                        "јун.",
                        "јул.",
                        "авг.",
                        "септ.",
                        "окт.",
                        "ноем.",
                        "дек."
                    ],
                    narrow: [
                        "ј",
                        "ф",
                        "м",
                        "а",
                        "м",
                        "ј",
                        "ј",
                        "а",
                        "с",
                        "о",
                        "н",
                        "д"
                    ],
                    wide: [
                        "јануари",
                        "февруари",
                        "март",
                        "април",
                        "мај",
                        "јуни",
                        "јули",
                        "август",
                        "септември",
                        "октомври",
                        "ноември",
                        "декември"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "јан.",
                        "фев.",
                        "мар.",
                        "апр.",
                        "мај",
                        "јун.",
                        "јул.",
                        "авг.",
                        "септ.",
                        "окт.",
                        "ноем.",
                        "дек."
                    ],
                    narrow: [
                        "ј",
                        "ф",
                        "м",
                        "а",
                        "м",
                        "ј",
                        "ј",
                        "а",
                        "с",
                        "о",
                        "н",
                        "д"
                    ],
                    wide: [
                        "јануари",
                        "февруари",
                        "март",
                        "април",
                        "мај",
                        "јуни",
                        "јули",
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
                        "јан-мар",
                        "апр-јун",
                        "јул-сеп",
                        "окт-дек"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "прво тромесечје",
                        "второ тромесечје",
                        "трето тромесечје",
                        "четврто тромесечје"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "јан-мар",
                        "апр-јун",
                        "јул-сеп",
                        "окт-дек"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "прво тромесечје",
                        "второ тромесечје",
                        "трето тромесечје",
                        "четврто тромесечје"
                    ]
                }
            },
            dayPeriods: {
                format: {
                    abbreviated: {
                        midnight: "полноќ",
                        am: "претпл.",
                        noon: "напладне",
                        pm: "попл.",
                        morning1: "наутро",
                        morning2: "претпл.",
                        afternoon1: "попл.",
                        evening1: "навечер",
                        night1: "ноќе"
                    },
                    narrow: {
                        midnight: "полн.",
                        am: "претпл.",
                        noon: "напл.",
                        pm: "попл.",
                        morning1: "утро",
                        morning2: "претпл.",
                        afternoon1: "попл.",
                        evening1: "веч.",
                        night1: "ноќе"
                    },
                    wide: {
                        midnight: "полноќ",
                        am: "претпладне",
                        noon: "напладне",
                        pm: "попладне",
                        morning1: "наутро",
                        morning2: "претпладне",
                        afternoon1: "попладне",
                        evening1: "навечер",
                        night1: "по полноќ"
                    }
                },
                "stand-alone": {
                    abbreviated: {
                        midnight: "полноќ",
                        am: "претпл.",
                        noon: "напладне",
                        pm: "попл.",
                        morning1: "наутро",
                        morning2: "претпл.",
                        afternoon1: "попл.",
                        evening1: "навечер",
                        night1: "по полноќ"
                    },
                    narrow: {
                        midnight: "полноќ",
                        am: "претпл.",
                        noon: "пладне",
                        pm: "попл.",
                        morning1: "наутро",
                        morning2: "претпладне",
                        afternoon1: "попладне",
                        evening1: "навечер",
                        night1: "по полноќ"
                    },
                    wide: {
                        midnight: "на полноќ",
                        am: "претпладне",
                        noon: "напладне",
                        pm: "попладне",
                        morning1: "наутро",
                        morning2: "претпладне",
                        afternoon1: "попладне",
                        evening1: "навечер",
                        night1: "по полноќ"
                    }
                }
            },
            eras: {
                format: {
                    wide: {
                        0: "пред нашата ера",
                        1: "од нашата ера",
                        "0-alt-variant": "пр. н.е.",
                        "1-alt-variant": "CE"
                    },
                    abbreviated: {
                        0: "пр.н.е.",
                        1: "н.е.",
                        "0-alt-variant": "пр. н.е.",
                        "1-alt-variant": "CE"
                    },
                    narrow: {
                        0: "пр.н.е.",
                        1: "н.е.",
                        "0-alt-variant": "пр. н.е.",
                        "1-alt-variant": "CE"
                    }
                }
            },
            gmtFormat: "GMT{0}",
            gmtZeroFormat: "GMT",
            dateFields: {
                era: {
                    wide: "ера",
                    short: "ера",
                    narrow: "ера"
                },
                year: {
                    wide: "година",
                    short: "год.",
                    narrow: "год."
                },
                quarter: {
                    wide: "тромесечје",
                    short: "тромес.",
                    narrow: "тромес."
                },
                month: {
                    wide: "месец",
                    short: "мес.",
                    narrow: "мес."
                },
                week: {
                    wide: "недела",
                    short: "сед.",
                    narrow: "сед."
                },
                weekOfMonth: {
                    wide: "Week Of Month",
                    short: "Week Of Month",
                    narrow: "Week Of Month"
                },
                day: {
                    wide: "ден",
                    short: "ден",
                    narrow: "ден"
                },
                dayOfYear: {
                    wide: "Day Of Year",
                    short: "Day Of Year",
                    narrow: "Day Of Year"
                },
                weekday: {
                    wide: "ден во неделата",
                    short: "ден во неделата",
                    narrow: "ден во неделата"
                },
                weekdayOfMonth: {
                    wide: "Weekday Of Month",
                    short: "Weekday Of Month",
                    narrow: "Weekday Of Month"
                },
                dayperiod: {
                    short: "претпладне/попладне",
                    wide: "претпладне/попладне",
                    narrow: "претпладне/попладне"
                },
                hour: {
                    wide: "час",
                    short: "час",
                    narrow: "час"
                },
                minute: {
                    wide: "минута",
                    short: "мин.",
                    narrow: "мин."
                },
                second: {
                    wide: "секунда",
                    short: "сек.",
                    narrow: "сек."
                },
                zone: {
                    wide: "временска зона",
                    short: "временска зона",
                    narrow: "временска зона"
                }
            }
        },
        firstDay: 1
    }
};
export default data;

