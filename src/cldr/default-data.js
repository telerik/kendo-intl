const defaultData = {
    "en": {
        "name": "en",
        "identity": {
            "version": {
                "_number": "$Revision: 12418 $",
                "_cldrVersion": "29"
            },
            "language": "en"
        },
        "territory": "US",
        "numbers": {
            "symbols": {
                "decimal": ".",
                "group": ",",
                "list": ";",
                "percentSign": "%",
                "plusSign": "+",
                "minusSign": "-",
                "exponential": "E",
                "superscriptingExponent": "×",
                "perMille": "‰",
                "infinity": "∞",
                "nan": "NaN",
                "timeSeparator": ":"
            },
            "decimal": {
                "patterns": [
                    "n"
                ],
                "groupSize": [
                    3
                ]
            },
            "scientific": {
                "patterns": [
                    "nEn"
                ],
                "groupSize": []
            },
            "percent": {
                "patterns": [
                    "n%"
                ],
                "groupSize": [
                    3
                ]
            },
            "currency": {
                "patterns": [
                    "$n"
                ],
                "groupSize": [
                    3
                ],
                "unitPattern-count-one": "n $",
                "unitPattern-count-other": "n $"
            },
            "currencies": {
                "BGN": {
                    "displayName": "Bulgarian Lev",
                    "displayName-count-one": "Bulgarian lev",
                    "displayName-count-other": "Bulgarian leva",
                    "symbol": "BGN"
                },
                "EUR": {
                    "displayName": "Euro",
                    "displayName-count-one": "euro",
                    "displayName-count-other": "euros",
                    "symbol": "€",
                    "symbol-alt-narrow": "€"
                },
                "USD": {
                    "displayName": "US Dollar",
                    "displayName-count-one": "US dollar",
                    "displayName-count-other": "US dollars",
                    "symbol": "$",
                    "symbol-alt-narrow": "$"
                }
            },
            "localeCurrency": "USD"
        },
        "calendar": {
            "gmtFormat": "GMT{0}",
            "gmtZeroFormat": "GMT",
            "patterns": {
                "d": "M/d/y",
                "D": "EEEE, MMMM d, y",
                "m": "MMM d",
                "M": "MMMM d",
                "y": "MMM y",
                "Y": "MMMM y",
                "F": "EEEE, MMMM d, y h:mm:ss a",
                "g": "M/d/y h:mm a",
                "G": "M/d/y h:mm:ss a",
                "t": "h:mm a",
                "T": "h:mm:ss a",
                "s": "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                "u": "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
            },
            "dateTimeFormats": {
                "full": "{1} 'at' {0}",
                "long": "{1} 'at' {0}",
                "medium": "{1}, {0}",
                "short": "{1}, {0}",
                "availableFormats": {
                    "d": "d",
                    "E": "ccc",
                    "Ed": "d E",
                    "Ehm": "E h:mm a",
                    "EHm": "E HH:mm",
                    "Ehms": "E h:mm:ss a",
                    "EHms": "E HH:mm:ss",
                    "Gy": "y G",
                    "GyMMM": "MMM y G",
                    "GyMMMd": "MMM d, y G",
                    "GyMMMEd": "E, MMM d, y G",
                    "h": "h a",
                    "H": "HH",
                    "hm": "h:mm a",
                    "Hm": "HH:mm",
                    "hms": "h:mm:ss a",
                    "Hms": "HH:mm:ss",
                    "hmsv": "h:mm:ss a v",
                    "Hmsv": "HH:mm:ss v",
                    "hmv": "h:mm a v",
                    "Hmv": "HH:mm v",
                    "M": "L",
                    "Md": "M/d",
                    "MEd": "E, M/d",
                    "MMM": "LLL",
                    "MMMd": "MMM d",
                    "MMMEd": "E, MMM d",
                    "MMMMd": "MMMM d",
                    "MMMMW": "'week' W 'of' MMM",
                    "ms": "mm:ss",
                    "y": "y",
                    "yM": "M/y",
                    "yMd": "M/d/y",
                    "yMEd": "E, M/d/y",
                    "yMMM": "MMM y",
                    "yMMMd": "MMM d, y",
                    "yMMMEd": "E, MMM d, y",
                    "yMMMM": "MMMM y",
                    "yQQQ": "QQQ y",
                    "yQQQQ": "QQQQ y",
                    "yw": "'week' w 'of' y"
                },
                "appendItems": {
                    "Day": "{0} ({2}: {1})",
                    "Day-Of-Week": "{0} {1}",
                    "Era": "{0} {1}",
                    "Hour": "{0} ({2}: {1})",
                    "Minute": "{0} ({2}: {1})",
                    "Month": "{0} ({2}: {1})",
                    "Quarter": "{0} ({2}: {1})",
                    "Second": "{0} ({2}: {1})",
                    "Timezone": "{0} {1}",
                    "Week": "{0} ({2}: {1})",
                    "Year": "{0} {1}"
                },
                "intervalFormats": {
                    "intervalFormatFallback": "{0} – {1}",
                    "d": {
                        "d": "d – d"
                    },
                    "h": {
                        "a": "h a – h a",
                        "h": "h – h a"
                    },
                    "H": {
                        "H": "HH – HH"
                    },
                    "hm": {
                        "a": "h:mm a – h:mm a",
                        "h": "h:mm – h:mm a",
                        "m": "h:mm – h:mm a"
                    },
                    "Hm": {
                        "H": "HH:mm – HH:mm",
                        "m": "HH:mm – HH:mm"
                    },
                    "hmv": {
                        "a": "h:mm a – h:mm a v",
                        "h": "h:mm – h:mm a v",
                        "m": "h:mm – h:mm a v"
                    },
                    "Hmv": {
                        "H": "HH:mm – HH:mm v",
                        "m": "HH:mm – HH:mm v"
                    },
                    "hv": {
                        "a": "h a – h a v",
                        "h": "h – h a v"
                    },
                    "Hv": {
                        "H": "HH – HH v"
                    },
                    "M": {
                        "M": "M – M"
                    },
                    "Md": {
                        "d": "M/d – M/d",
                        "M": "M/d – M/d"
                    },
                    "MEd": {
                        "d": "E, M/d – E, M/d",
                        "M": "E, M/d – E, M/d"
                    },
                    "MMM": {
                        "M": "MMM – MMM"
                    },
                    "MMMd": {
                        "d": "MMM d – d",
                        "M": "MMM d – MMM d"
                    },
                    "MMMEd": {
                        "d": "E, MMM d – E, MMM d",
                        "M": "E, MMM d – E, MMM d"
                    },
                    "y": {
                        "y": "y – y"
                    },
                    "yM": {
                        "M": "M/y – M/y",
                        "y": "M/y – M/y"
                    },
                    "yMd": {
                        "d": "M/d/y – M/d/y",
                        "M": "M/d/y – M/d/y",
                        "y": "M/d/y – M/d/y"
                    },
                    "yMEd": {
                        "d": "E, M/d/y – E, M/d/y",
                        "M": "E, M/d/y – E, M/d/y",
                        "y": "E, M/d/y – E, M/d/y"
                    },
                    "yMMM": {
                        "M": "MMM – MMM y",
                        "y": "MMM y – MMM y"
                    },
                    "yMMMd": {
                        "d": "MMM d – d, y",
                        "M": "MMM d – MMM d, y",
                        "y": "MMM d, y – MMM d, y"
                    },
                    "yMMMEd": {
                        "d": "E, MMM d – E, MMM d, y",
                        "M": "E, MMM d – E, MMM d, y",
                        "y": "E, MMM d, y – E, MMM d, y"
                    },
                    "yMMMM": {
                        "M": "MMMM – MMMM y",
                        "y": "MMMM y – MMMM y"
                    }
                }
            },
            "timeFormats": {
                "full": "h:mm:ss a zzzz",
                "long": "h:mm:ss a z",
                "medium": "h:mm:ss a",
                "short": "h:mm a"
            },
            "dateFormats": {
                "full": "EEEE, MMMM d, y",
                "long": "MMMM d, y",
                "medium": "MMM d, y",
                "short": "M/d/yy"
            },
            "days": {
                "format": {
                    "abbreviated": [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    "narrow": [
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S"
                    ],
                    "short": [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    "wide": [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                },
                "stand-alone": {
                    "abbreviated": [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ],
                    "narrow": [
                        "S",
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S"
                    ],
                    "short": [
                        "Su",
                        "Mo",
                        "Tu",
                        "We",
                        "Th",
                        "Fr",
                        "Sa"
                    ],
                    "wide": [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ]
                }
            },
            "months": {
                "format": {
                    "abbreviated": [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    "narrow": [
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
                    "wide": [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                },
                "stand-alone": {
                    "abbreviated": [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    "narrow": [
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
                    "wide": [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ]
                }
            },
            "quarters": {
                "format": {
                    "abbreviated": [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    "narrow": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "wide": [
                        "1st quarter",
                        "2nd quarter",
                        "3rd quarter",
                        "4th quarter"
                    ]
                },
                "stand-alone": {
                    "abbreviated": [
                        "Q1",
                        "Q2",
                        "Q3",
                        "Q4"
                    ],
                    "narrow": [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    "wide": [
                        "1st quarter",
                        "2nd quarter",
                        "3rd quarter",
                        "4th quarter"
                    ]
                }
            },
            "dayPeriods": {
                "format": {
                    "abbreviated": {
                        "midnight": "midnight",
                        "am": "AM",
                        "am-alt-variant": "am",
                        "noon": "noon",
                        "pm": "PM",
                        "pm-alt-variant": "pm",
                        "morning1": "in the morning",
                        "afternoon1": "in the afternoon",
                        "evening1": "in the evening",
                        "night1": "at night"
                    },
                    "narrow": {
                        "midnight": "mi",
                        "am": "a",
                        "am-alt-variant": "am",
                        "noon": "n",
                        "pm": "p",
                        "pm-alt-variant": "pm",
                        "morning1": "in the morning",
                        "afternoon1": "in the afternoon",
                        "evening1": "in the evening",
                        "night1": "at night"
                    },
                    "wide": {
                        "midnight": "midnight",
                        "am": "AM",
                        "am-alt-variant": "am",
                        "noon": "noon",
                        "pm": "PM",
                        "pm-alt-variant": "pm",
                        "morning1": "in the morning",
                        "afternoon1": "in the afternoon",
                        "evening1": "in the evening",
                        "night1": "at night"
                    }
                },
                "stand-alone": {
                    "abbreviated": {
                        "midnight": "midnight",
                        "am": "AM",
                        "am-alt-variant": "am",
                        "noon": "noon",
                        "pm": "PM",
                        "pm-alt-variant": "pm",
                        "morning1": "morning",
                        "afternoon1": "afternoon",
                        "evening1": "evening",
                        "night1": "night"
                    },
                    "narrow": {
                        "midnight": "midnight",
                        "am": "AM",
                        "am-alt-variant": "am",
                        "noon": "noon",
                        "pm": "PM",
                        "pm-alt-variant": "pm",
                        "morning1": "morning",
                        "afternoon1": "afternoon",
                        "evening1": "evening",
                        "night1": "night"
                    },
                    "wide": {
                        "midnight": "midnight",
                        "am": "AM",
                        "am-alt-variant": "am",
                        "noon": "noon",
                        "pm": "PM",
                        "pm-alt-variant": "pm",
                        "morning1": "morning",
                        "afternoon1": "afternoon",
                        "evening1": "evening",
                        "night1": "night"
                    }
                }
            },
            "eras": {
                "format": {
                    "wide": {
                        "0": "Before Christ",
                        "1": "Anno Domini",
                        "0-alt-variant": "Before Common Era",
                        "1-alt-variant": "Common Era"
                    },
                    "abbreviated": {
                        "0": "BC",
                        "1": "AD",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    },
                    "narrow": {
                        "0": "B",
                        "1": "A",
                        "0-alt-variant": "BCE",
                        "1-alt-variant": "CE"
                    }
                }
            }
        }
    },
    "supplemental": {
        "likelySubtags": {
            "en": "en-Latn-US"
        },
        "currencyData": {
            "region": {
                "US": [
                    {
                        "USD": {
                            "_from": "1792-01-01"
                        }
                    }
                ]
            }
        },
        "weekData": {
            "firstDay": {
                "US": "sun"
            }
        }
    }
};
export default defaultData;