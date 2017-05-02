const data = {
    eu: {
        name: "eu",
        likelySubtags: {
            eu: "eu-Latn-ES"
        },
        identity: {
            language: "eu"
        },
        territory: "ES",
        calendar: {
            patterns: {
                d: "y/M/d",
                D: "y('e')'ko' MMMM d, EEEE",
                m: "MMM d",
                M: "MMMM d",
                y: "y MMM",
                Y: "y('e')'ko' MMMM",
                F: "y('e')'ko' MMMM d, EEEE HH:mm:ss",
                g: "y/M/d HH:mm",
                G: "y/M/d HH:mm:ss",
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
                    Ed: "d, E",
                    Ehm: "E h:mm a",
                    EHm: "E HH:mm",
                    Ehms: "E h:mm:ss a",
                    EHms: "E HH:mm:ss",
                    Gy: "G y",
                    GyMMM: "G y. 'urteko' MMM",
                    GyMMMd: "G y. 'urteko' MMM d",
                    GyMMMEd: "G y. 'urteko' MMM d, E",
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
                    Md: "M/d",
                    MEd: "M/d, E",
                    MMM: "LLL",
                    MMMd: "MMM d",
                    MMMEd: "MMM d, E",
                    MMMMd: "MMMM d",
                    "MMMMW-count-one": "MMM W 'astea'",
                    "MMMMW-count-other": "MMM'ren' 'astea' W",
                    ms: "mm:ss",
                    y: "y",
                    yM: "y/M",
                    yMd: "y/M/d",
                    yMEd: "y/M/d, E",
                    yMMM: "y MMM",
                    yMMMd: "y MMM d",
                    yMMMEd: "y MMM d, E",
                    yMMMM: "y('e')'ko' MMMM",
                    yMMMMd: "y('e')'ko' MMMM d",
                    yMMMMEd: "y('e')'ko' MMMM d, E",
                    yQQQ: "y('e')'ko' QQQ",
                    yQQQQ: "y('e')'ko' QQQQ",
                    "yw-count-one": "y 'urteko' w 'astea'",
                    "yw-count-other": "w/y 'astea'"
                }
            },
            timeFormats: {
                full: "HH:mm:ss (zzzz)",
                long: "HH:mm:ss (z)",
                medium: "HH:mm:ss",
                short: "HH:mm"
            },
            dateFormats: {
                full: "y('e')'ko' MMMM d, EEEE",
                long: "y('e')'ko' MMMM d",
                medium: "y MMM d",
                short: "yy/M/d"
            },
            days: {
                format: {
                    abbreviated: [
                        "ig.",
                        "al.",
                        "ar.",
                        "az.",
                        "og.",
                        "or.",
                        "lr."
                    ],
                    narrow: [
                        "I",
                        "A",
                        "A",
                        "A",
                        "O",
                        "O",
                        "L"
                    ],
                    short: [
                        "ig.",
                        "al.",
                        "ar.",
                        "az.",
                        "og.",
                        "or.",
                        "lr."
                    ],
                    wide: [
                        "igandea",
                        "astelehena",
                        "asteartea",
                        "asteazkena",
                        "osteguna",
                        "ostirala",
                        "larunbata"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "ig.",
                        "al.",
                        "ar.",
                        "az.",
                        "og.",
                        "or.",
                        "lr."
                    ],
                    narrow: [
                        "I",
                        "A",
                        "A",
                        "A",
                        "O",
                        "O",
                        "L"
                    ],
                    short: [
                        "ig.",
                        "al.",
                        "ar.",
                        "az.",
                        "og.",
                        "or.",
                        "lr."
                    ],
                    wide: [
                        "Igandea",
                        "Astelehena",
                        "Asteartea",
                        "Asteazkena",
                        "Osteguna",
                        "Ostirala",
                        "Larunbata"
                    ]
                }
            },
            months: {
                format: {
                    abbreviated: [
                        "urt.",
                        "ots.",
                        "mar.",
                        "api.",
                        "mai.",
                        "eka.",
                        "uzt.",
                        "abu.",
                        "ira.",
                        "urr.",
                        "aza.",
                        "abe."
                    ],
                    narrow: [
                        "U",
                        "O",
                        "M",
                        "A",
                        "M",
                        "E",
                        "U",
                        "A",
                        "I",
                        "U",
                        "A",
                        "A"
                    ],
                    wide: [
                        "urtarrila",
                        "otsaila",
                        "martxoa",
                        "apirila",
                        "maiatza",
                        "ekaina",
                        "uztaila",
                        "abuztua",
                        "iraila",
                        "urria",
                        "azaroa",
                        "abendua"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "urt.",
                        "ots.",
                        "mar.",
                        "api.",
                        "mai.",
                        "eka.",
                        "uzt.",
                        "abu.",
                        "ira.",
                        "urr.",
                        "aza.",
                        "abe."
                    ],
                    narrow: [
                        "U",
                        "O",
                        "M",
                        "A",
                        "M",
                        "E",
                        "U",
                        "A",
                        "I",
                        "U",
                        "A",
                        "A"
                    ],
                    wide: [
                        "urtarrila",
                        "Otsaila",
                        "Martxoa",
                        "Apirila",
                        "Maiatza",
                        "Ekaina",
                        "Uztaila",
                        "Abuztua",
                        "Iraila",
                        "Urria",
                        "Azaroa",
                        "Abendua"
                    ]
                }
            },
            quarters: {
                format: {
                    abbreviated: [
                        "1Hh",
                        "2Hh",
                        "3Hh",
                        "4Hh"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "1. hiruhilekoa",
                        "2. hiruhilekoa",
                        "3. hiruhilekoa",
                        "4. hiruhilekoa"
                    ]
                },
                "stand-alone": {
                    abbreviated: [
                        "1Hh",
                        "2Hh",
                        "3Hh",
                        "4Hh"
                    ],
                    narrow: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    wide: [
                        "1. hiruhilekoa",
                        "2. hiruhilekoa",
                        "3. hiruhilekoa",
                        "4. hiruhilekoa"
                    ]
                }
            },
            dayPeriods: {
                format: {
                    abbreviated: {
                        midnight: "gauerdia",
                        am: "AM",
                        pm: "PM",
                        morning1: "goiz.",
                        morning2: "goizeko",
                        afternoon1: "eguerd.",
                        afternoon2: "arrats.",
                        evening1: "iluntz.",
                        night1: "gau."
                    },
                    narrow: {
                        midnight: "gauerdia",
                        am: "AM",
                        pm: "PM",
                        morning1: "goiz.",
                        morning2: "goizeko",
                        afternoon1: "eguerd.",
                        afternoon2: "arrats.",
                        evening1: "iluntz.",
                        night1: "gau."
                    },
                    wide: {
                        midnight: "gauerdia",
                        am: "AM",
                        pm: "PM",
                        morning1: "goizaldeko",
                        morning2: "goizeko",
                        afternoon1: "eguerdiko",
                        afternoon2: "arratsaldeko",
                        evening1: "iluntzeko",
                        night1: "gaueko"
                    }
                },
                "stand-alone": {
                    abbreviated: {
                        midnight: "gauerdia",
                        am: "AM",
                        pm: "PM",
                        morning1: "goiz.",
                        morning2: "goiza",
                        afternoon1: "eguerd.",
                        afternoon2: "arrats.",
                        evening1: "iluntz.",
                        night1: "gaua"
                    },
                    narrow: {
                        midnight: "gauerdia",
                        am: "AM",
                        pm: "PM",
                        morning1: "goiz.",
                        morning2: "goiza",
                        afternoon1: "eguerd.",
                        afternoon2: "arrats.",
                        evening1: "iluntz.",
                        night1: "gaua"
                    },
                    wide: {
                        midnight: "gauerdia",
                        am: "AM",
                        pm: "PM",
                        morning1: "goizaldea",
                        morning2: "goiza",
                        afternoon1: "eguerdia",
                        afternoon2: "arratsaldea",
                        evening1: "iluntzea",
                        night1: "gaua"
                    }
                }
            },
            eras: {
                format: {
                    wide: {
                        0: "K.a.",
                        1: "Kristo ondoren",
                        "0-alt-variant": "Gure aro aurretik",
                        "1-alt-variant": "Gure aroa"
                    },
                    abbreviated: {
                        0: "K.a.",
                        1: "K.o.",
                        "0-alt-variant": "G.a.a",
                        "1-alt-variant": "G.a"
                    },
                    narrow: {
                        0: "K.a.",
                        1: "K.o.",
                        "0-alt-variant": "G.a.a",
                        "1-alt-variant": "G.a"
                    }
                }
            },
            gmtFormat: "GMT{0}",
            gmtZeroFormat: "GMT",
            dateFields: {
                era: {
                    wide: "aroa",
                    short: "aroa",
                    narrow: "aroa"
                },
                year: {
                    wide: "urtea",
                    short: "urtea",
                    narrow: "urtea"
                },
                quarter: {
                    wide: "hiruhilekoa",
                    short: "hiruhil.",
                    narrow: "hiruhil."
                },
                month: {
                    wide: "hilabetea",
                    short: "hil.",
                    narrow: "hil."
                },
                week: {
                    wide: "astea",
                    short: "ast.",
                    narrow: "ast."
                },
                weekOfMonth: {
                    wide: "Week Of Month",
                    short: "Week Of Month",
                    narrow: "Week Of Month"
                },
                day: {
                    wide: "eguna",
                    short: "eg.",
                    narrow: "eg."
                },
                dayOfYear: {
                    wide: "Day Of Year",
                    short: "Day Of Year",
                    narrow: "Day Of Year"
                },
                weekday: {
                    wide: "asteguna",
                    short: "asteguna",
                    narrow: "asteguna"
                },
                weekdayOfMonth: {
                    wide: "Weekday Of Month",
                    short: "Weekday Of Month",
                    narrow: "Weekday Of Month"
                },
                dayperiod: {
                    short: "AM//PM",
                    wide: "AM//PM",
                    narrow: "AM//PM"
                },
                hour: {
                    wide: "ordua",
                    short: "h",
                    narrow: "h"
                },
                minute: {
                    wide: "minutua",
                    short: "min",
                    narrow: "min"
                },
                second: {
                    wide: "segundoa",
                    short: "s",
                    narrow: "s"
                },
                zone: {
                    wide: "ordu-zona",
                    short: "ordu-zona",
                    narrow: "ordu-zona"
                }
            }
        },
        firstDay: 1
    }
};
export default data;

