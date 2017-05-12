const data = {
    he: {
        name: "he",
        likelySubtags: {
            he: "he-Hebr-IL"
        },
        identity: {
            language: "he"
        },
        territory: "IL",
        calendar: {
            patterns: {
                d: "d.M.y",
                D: "EEEE, d בMMMM y",
                m: "d בMMM",
                M: "d בMMMM",
                y: "MMM y",
                Y: "MMMM y",
                F: "EEEE, d בMMMM y H:mm:ss",
                g: "d.M.y H:mm",
                G: "d.M.y H:mm:ss",
                t: "H:mm",
                T: "H:mm:ss",
                s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
            },
            dateTimeFormats: {
                full: "{1} בשעה {0}",
                long: "{1} בשעה {0}",
                medium: "{1}, {0}",
                short: "{1}, {0}",
                availableFormats: {
                    d: "d",
                    E: "ccc",
                    Ed: "E ה-d",
                    Ehm: "E h:mm a",
                    EHm: "E H:mm",
                    Ehms: "E h:mm:ss a",
                    EHms: "E H:mm:ss",
                    Gy: "y G",
                    GyMMM: "MMM y G",
                    GyMMMd: "d בMMM y G",
                    GyMMMEd: "E, d בMMM y G",
                    h: "‏h a",
                    H: "H",
                    hm: "h:mm a",
                    Hm: "H:mm",
                    hms: "h:mm:ss a",
                    Hms: "H:mm:ss",
                    hmsv: "h:mm:ss a v",
                    Hmsv: "HH:mm:ss v",
                    hmv: "h:mm a v",
                    Hmv: "HH:mm v",
                    M: "L",
                    Md: "d.M",
                    MEd: "E, d.M",
                    MMM: "LLL",
                    MMMd: "d בMMM",
                    MMMEd: "E, d בMMM",
                    MMMMd: "d בMMMM",
                    "MMMMW-count-one": "שבוע W בMMM",
                    "MMMMW-count-two": "שבוע W בMMM",
                    "MMMMW-count-many": "שבוע W בMMM",
                    "MMMMW-count-other": "שבוע W בMMM",
                    ms: "mm:ss",
                    y: "y",
                    yM: "M.y",
                    yMd: "d.M.y",
                    yMEd: "E, d.M.y",
                    yMM: "M.y",
                    yMMM: "MMM y",
                    yMMMd: "d בMMM y",
                    yMMMEd: "E, d בMMM y",
                    yMMMM: "MMMM y",
                    yQQQ: "QQQ y",
                    yQQQQ: "QQQQ y",
                    "yw-count-one": "שבוע w בשנת y",
                    "yw-count-two": "שבוע w בשנת y",
                    "yw-count-many": "שבוע w בשנת y",
                    "yw-count-other": "שבוע w בשנת y"
                }
            },
            timeFormats: {
                full: "H:mm:ss zzzz",
                long: "H:mm:ss z",
                medium: "H:mm:ss",
                short: "H:mm"
            },
            dateFormats: {
                full: "EEEE, d בMMMM y",
                long: "d בMMMM y",
                medium: "d בMMM y",
                short: "d.M.y"
            },
            days: {
                format: {
                    abbreviated: [
                        "יום א׳",
                        "יום ב׳",
                        "יום ג׳",
                        "יום ד׳",
                        "יום ה׳",
                        "יום ו׳",
                        "שבת"
                    ],
                    narrow: [
                        "א׳",
                        "ב׳",
                        "ג׳",
                        "ד׳",
                        "ה׳",
                        "ו׳",
                        "ש׳"
                    ],
                    short: [
                        "א׳",
                        "ב׳",
                        "ג׳",
                        "ד׳",
                        "ה׳",
                        "ו׳",
                        "ש׳"
                    ],
                    wide: [
                        "יום ראשון",
                        "יום שני",
                        "יום שלישי",
                        "יום רביעי",
                        "יום חמישי",
                        "יום שישי",
                        "יום שבת"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "יום א׳",
                        "יום ב׳",
                        "יום ג׳",
                        "יום ד׳",
                        "יום ה׳",
                        "יום ו׳",
                        "שבת"
                    ],
                    narrow: [
                        "א׳",
                        "ב׳",
                        "ג׳",
                        "ד׳",
                        "ה׳",
                        "ו׳",
                        "ש׳"
                    ],
                    short: [
                        "א׳",
                        "ב׳",
                        "ג׳",
                        "ד׳",
                        "ה׳",
                        "ו׳",
                        "ש׳"
                    ],
                    wide: [
                        "יום ראשון",
                        "יום שני",
                        "יום שלישי",
                        "יום רביעי",
                        "יום חמישי",
                        "יום שישי",
                        "יום שבת"
                    ]
                }
            },
            months: {
                format: {
                    abbreviated: [
                        "ינו׳",
                        "פבר׳",
                        "מרץ",
                        "אפר׳",
                        "מאי",
                        "יוני",
                        "יולי",
                        "אוג׳",
                        "ספט׳",
                        "אוק׳",
                        "נוב׳",
                        "דצמ׳"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12"
                    ],
                    wide: [
                        "ינואר",
                        "פברואר",
                        "מרץ",
                        "אפריל",
                        "מאי",
                        "יוני",
                        "יולי",
                        "אוגוסט",
                        "ספטמבר",
                        "אוקטובר",
                        "נובמבר",
                        "דצמבר"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "ינו׳",
                        "פבר׳",
                        "מרץ",
                        "אפר׳",
                        "מאי",
                        "יוני",
                        "יולי",
                        "אוג׳",
                        "ספט׳",
                        "אוק׳",
                        "נוב׳",
                        "דצמ׳"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                        "12"
                    ],
                    wide: [
                        "ינואר",
                        "פברואר",
                        "מרץ",
                        "אפריל",
                        "מאי",
                        "יוני",
                        "יולי",
                        "אוגוסט",
                        "ספטמבר",
                        "אוקטובר",
                        "נובמבר",
                        "דצמבר"
                    ]
                }
            },
            quarters: {
                format: {
                    abbreviated: [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "רבעון 1",
                        "רבעון 2",
                        "רבעון 3",
                        "רבעון 4"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "רבעון 1",
                        "רבעון 2",
                        "רבעון 3",
                        "רבעון 4"
                    ]
                }
            },
            dayPeriods: {
                format: {
                    abbreviated: {
                        midnight: "חצות",
                        am: "לפנה״צ",
                        pm: "אחה״צ",
                        morning1: "בוקר",
                        afternoon1: "צהריים",
                        afternoon2: "אחר הצהריים",
                        evening1: "ערב",
                        night1: "לילה",
                        night2: "לפנות בוקר"
                    },
                    narrow: {
                        midnight: "חצות",
                        am: "לפנה״צ",
                        pm: "אחה״צ",
                        morning1: "בוקר",
                        afternoon1: "צהריים",
                        afternoon2: "אחר הצהריים",
                        evening1: "ערב",
                        night1: "לילה",
                        night2: "לפנות בוקר"
                    },
                    wide: {
                        midnight: "חצות",
                        am: "לפנה״צ",
                        pm: "אחה״צ",
                        morning1: "בוקר",
                        afternoon1: "צהריים",
                        afternoon2: "אחר הצהריים",
                        evening1: "ערב",
                        night1: "לילה",
                        night2: "לפנות בוקר"
                    }
                },
                "stand-alone": {
                    abbreviated: {
                        midnight: "חצות",
                        am: "לפנה״צ",
                        pm: "אחה״צ",
                        morning1: "בוקר",
                        afternoon1: "צהריים",
                        afternoon2: "אחר הצהריים",
                        evening1: "ערב",
                        night1: "לילה",
                        night2: "לפנות בוקר"
                    },
                    narrow: {
                        midnight: "חצות",
                        am: "לפנה״צ",
                        pm: "אחה״צ",
                        morning1: "בוקר",
                        afternoon1: "צהריים",
                        afternoon2: "אחר הצהריים",
                        evening1: "ערב",
                        night1: "לילה",
                        night2: "לפנות בוקר"
                    },
                    wide: {
                        midnight: "חצות",
                        am: "לפנה״צ",
                        pm: "אחה״צ",
                        morning1: "בוקר",
                        afternoon1: "צהריים",
                        afternoon2: "אחר הצהריים",
                        evening1: "ערב",
                        night1: "לילה",
                        night2: "לפנות בוקר"
                    }
                }
            },
            eras: {
                format: {
                    wide: {
                        0: "לפני הספירה",
                        1: "לספירה",
                        "0-alt-variant": "לפנה״ס",
                        "1-alt-variant": "CE"
                    },
                    abbreviated: {
                        0: "לפנה״ס",
                        1: "לספירה",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    },
                    narrow: {
                        0: "לפנה״ס",
                        1: "לספירה",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    }
                }
            },
            gmtFormat: "GMT{0}‎",
            gmtZeroFormat: "GMT",
            dateFields: {
                era: {
                    wide: "תקופה",
                    short: "תקופה",
                    narrow: "תקופה"
                },
                year: {
                    wide: "שנה",
                    short: "שנ׳",
                    narrow: "שנ׳"
                },
                quarter: {
                    wide: "רבעון",
                    short: "רבע׳",
                    narrow: "רבע׳"
                },
                month: {
                    wide: "חודש",
                    short: "חו׳",
                    narrow: "חו׳"
                },
                week: {
                    wide: "שבוע",
                    short: "שב׳",
                    narrow: "שב׳"
                },
                weekOfMonth: {
                    wide: "Week Of Month",
                    short: "Week Of Month",
                    narrow: "Week Of Month"
                },
                day: {
                    wide: "יום",
                    short: "יום",
                    narrow: "יום"
                },
                dayOfYear: {
                    wide: "Day Of Year",
                    short: "Day Of Year",
                    narrow: "Day Of Year"
                },
                weekday: {
                    wide: "יום בשבוע",
                    short: "יום בשבוע",
                    narrow: "יום בשבוע"
                },
                weekdayOfMonth: {
                    wide: "Weekday Of Month",
                    short: "Weekday Of Month",
                    narrow: "Weekday Of Month"
                },
                dayperiod: {
                    short: "לפנה״צ/אחה״צ",
                    wide: "לפנה״צ/אחה״צ",
                    narrow: "לפנה״צ/אחה״צ"
                },
                hour: {
                    wide: "שעה",
                    short: "שעה",
                    narrow: "שע׳"
                },
                minute: {
                    wide: "דקה",
                    short: "דק׳",
                    narrow: "דק׳"
                },
                second: {
                    wide: "שנייה",
                    short: "שנ׳",
                    narrow: "שנ׳"
                },
                zone: {
                    wide: "אזור",
                    short: "אזור",
                    narrow: "אזור"
                }
            }
        },
        firstDay: 0
    }
};
export default data;

