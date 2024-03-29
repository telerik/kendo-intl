const data = {
    name: "fa",
    identity: {
        language: "fa"
    },
    territory: "IR",
    numbers: {
        symbols: {
            decimal: ".",
            group: ",",
            list: ";",
            percentSign: "%",
            plusSign: "‎+",
            minusSign: "‎−",
            approximatelySign: "~",
            exponential: "E",
            superscriptingExponent: "×",
            perMille: "‰",
            infinity: "∞",
            nan: "ناعدد",
            timeSeparator: ":"
        },
        decimal: {
            patterns: [
                "n"
            ],
            groupSize: [
                3
            ]
        },
        scientific: {
            patterns: [
                "nEn"
            ],
            groupSize: []
        },
        percent: {
            patterns: [
                "n%"
            ],
            groupSize: [
                3
            ]
        },
        currency: {
            patterns: [
                "‎$ n"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-one": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "‎$ n",
                "‎($ n)"
            ],
            groupSize: [
                3
            ]
        },
        currencies: {
            ADP: {
                displayName: "پزتای آندورا",
                "displayName-count-one": "پزتای آندورا",
                "displayName-count-other": "پزتای آندورا",
                symbol: "ADP"
            },
            AED: {
                displayName: "درهم امارات متحدهٔ عربی",
                "displayName-count-one": "درهم امارات متحدهٔ عربی",
                "displayName-count-other": "درهم امارات متحدهٔ عربی",
                symbol: "AED"
            },
            AFA: {
                displayName: "افغانی افغانستان (۱۹۲۷ تا ۲۰۰۲)",
                "displayName-count-one": "افغانی افغانستان (۱۹۲۷ تا ۲۰۰۲)",
                "displayName-count-other": "افغانی افغانستان (۱۹۲۷ تا ۲۰۰۲)",
                symbol: "AFA"
            },
            AFN: {
                displayName: "افغانی افغانستان",
                "displayName-count-one": "افغانی افغانستان",
                "displayName-count-other": "افغانی افغانستان",
                symbol: "؋",
                "symbol-alt-narrow": "؋"
            },
            ALK: {
                displayName: "لک آلبانی (۱۹۴۶ تا ۱۹۶۵)",
                "displayName-count-one": "لک آلبانی (۱۹۴۶ تا ۱۹۶۵)",
                "displayName-count-other": "لک آلبانی (۱۹۴۶ تا ۱۹۶۵)",
                symbol: "ALK"
            },
            ALL: {
                displayName: "لک آلبانی",
                "displayName-count-one": "لک آلبانی",
                "displayName-count-other": "لک آلبانی",
                symbol: "ALL"
            },
            AMD: {
                displayName: "درام ارمنستان",
                "displayName-count-one": "درام ارمنستان",
                "displayName-count-other": "درام ارمنستان",
                symbol: "AMD",
                "symbol-alt-narrow": "֏"
            },
            ANG: {
                displayName: "گیلدر آنتیل هلند",
                "displayName-count-one": "گیلدر آنتیل هلند",
                "displayName-count-other": "گیلدر آنتیل هلند",
                symbol: "ANG"
            },
            AOA: {
                displayName: "کوانزای آنگولا",
                "displayName-count-one": "کوانزای آنگولا",
                "displayName-count-other": "کوانزای آنگولا",
                symbol: "AOA",
                "symbol-alt-narrow": "Kz"
            },
            AOK: {
                displayName: "AOK",
                symbol: "AOK"
            },
            AON: {
                displayName: "AON",
                symbol: "AON"
            },
            AOR: {
                displayName: "AOR",
                symbol: "AOR"
            },
            ARA: {
                displayName: "ARA",
                symbol: "ARA"
            },
            ARL: {
                displayName: "ARL",
                symbol: "ARL"
            },
            ARM: {
                displayName: "پزوی آرژانتین (۱۸۸۱ تا ۱۹۷۰)",
                "displayName-count-one": "پزوی آرژانتین (۱۸۸۱ تا ۱۹۷۰)",
                "displayName-count-other": "پزوی آرژانتین (۱۸۸۱ تا ۱۹۷۰)",
                symbol: "ARM"
            },
            ARP: {
                displayName: "پزوی آرژانتین (۱۹۸۳ تا ۱۹۸۵)‏",
                "displayName-count-one": "پزوی آرژانتین (۱۹۸۳ تا ۱۹۸۵)",
                "displayName-count-other": "پزوی آرژانتین (۱۹۸۳ تا ۱۹۸۵)",
                symbol: "ARP"
            },
            ARS: {
                displayName: "پزوی آرژانتین",
                "displayName-count-one": "پزوی آرژانتین",
                "displayName-count-other": "پزوی آرژانتین",
                symbol: "ARS",
                "symbol-alt-narrow": "$"
            },
            ATS: {
                displayName: "شیلینگ اتریش",
                "displayName-count-one": "شیلینگ اتریش",
                "displayName-count-other": "شیلینگ اتریش",
                symbol: "ATS"
            },
            AUD: {
                displayName: "دلار استرالیا",
                "displayName-count-one": "دلار استرالیا",
                "displayName-count-other": "دلار استرالیا",
                symbol: "A$",
                "symbol-alt-narrow": "$"
            },
            AWG: {
                displayName: "فلورین آروبا",
                "displayName-count-one": "فلورین آروبا",
                "displayName-count-other": "فلورین آروبا",
                symbol: "AWG"
            },
            AZM: {
                displayName: "منات جمهوری آذربایجان (۱۹۹۳ تا ۲۰۰۶)",
                "displayName-count-one": "منات جمهوری آذربایجان (۱۹۹۳ تا ۲۰۰۶)",
                "displayName-count-other": "منات جمهوری آذربایجان (۱۹۹۳ تا ۲۰۰۶)",
                symbol: "AZM"
            },
            AZN: {
                displayName: "منات جمهوری آذربایجان",
                "displayName-count-one": "منات جمهوری آذربایجان",
                "displayName-count-other": "منات جمهوری آذربایجان",
                symbol: "AZN",
                "symbol-alt-narrow": "₼"
            },
            BAD: {
                displayName: "دینار بوسنی و هرزگوین (۱۹۹۲ تا ۱۹۹۴)",
                "displayName-count-one": "دینار بوسنی و هرزگوین (۱۹۹۲ تا ۱۹۹۴)",
                "displayName-count-other": "دینار بوسنی و هرزگوین (۱۹۹۲ تا ۱۹۹۴)",
                symbol: "BAD"
            },
            BAM: {
                displayName: "مارک تبدیل‌پذیر بوسنی و هرزگوین",
                "displayName-count-one": "مارک تبدیل‌پذیر بوسنی و هرزگوین",
                "displayName-count-other": "مارک تبدیل‌پذیر بوسنی و هرزگوین",
                symbol: "BAM",
                "symbol-alt-narrow": "KM"
            },
            BAN: {
                displayName: "BAN",
                symbol: "BAN"
            },
            BBD: {
                displayName: "دلار باربادوس",
                "displayName-count-one": "دلار باربادوس",
                "displayName-count-other": "دلار باربادوس",
                symbol: "BBD",
                "symbol-alt-narrow": "$"
            },
            BDT: {
                displayName: "تاکای بنگلادش",
                "displayName-count-one": "تاکای بنگلادش",
                "displayName-count-other": "تاکای بنگلادش",
                symbol: "BDT",
                "symbol-alt-narrow": "৳"
            },
            BEC: {
                displayName: "BEC",
                symbol: "BEC"
            },
            BEF: {
                displayName: "فرانک بلژیک",
                "displayName-count-one": "فرانک بلژیک",
                "displayName-count-other": "فرانک بلژیک",
                symbol: "BEF"
            },
            BEL: {
                displayName: "فرانک بلژیک (مالی)",
                "displayName-count-one": "فرانک بلژیک (مالی)",
                "displayName-count-other": "فرانک بلژیک (مالی)",
                symbol: "BEL"
            },
            BGL: {
                displayName: "BGL",
                symbol: "BGL"
            },
            BGM: {
                displayName: "BGM",
                symbol: "BGM"
            },
            BGN: {
                displayName: "لف بلغارستان",
                "displayName-count-one": "لف بلغارستان",
                "displayName-count-other": "لف بلغارستان",
                symbol: "BGN"
            },
            BGO: {
                displayName: "BGO",
                symbol: "BGO"
            },
            BHD: {
                displayName: "دینار بحرین",
                "displayName-count-one": "دینار بحرین",
                "displayName-count-other": "دینار بحرین",
                symbol: "BHD"
            },
            BIF: {
                displayName: "فرانک بوروندی",
                "displayName-count-one": "فرانک بوروندی",
                "displayName-count-other": "فرانک بوروندی",
                symbol: "BIF"
            },
            BMD: {
                displayName: "دلار برمودا",
                "displayName-count-one": "دلار برمودا",
                "displayName-count-other": "دلار برمودا",
                symbol: "BMD",
                "symbol-alt-narrow": "$"
            },
            BND: {
                displayName: "دلار برونئی",
                "displayName-count-one": "دلار برونئی",
                "displayName-count-other": "دلار برونئی",
                symbol: "BND",
                "symbol-alt-narrow": "$"
            },
            BOB: {
                displayName: "بولیویانوی بولیوی",
                "displayName-count-one": "بولیویانوی بولیوی",
                "displayName-count-other": "بولیویانوی بولیوی",
                symbol: "BOB",
                "symbol-alt-narrow": "Bs"
            },
            BOL: {
                displayName: "BOL",
                symbol: "BOL"
            },
            BOP: {
                displayName: "پزوی بولیوی",
                symbol: "BOP"
            },
            BOV: {
                displayName: "BOV",
                symbol: "BOV"
            },
            BRB: {
                displayName: "BRB",
                symbol: "BRB"
            },
            BRC: {
                displayName: "BRC",
                symbol: "BRC"
            },
            BRE: {
                displayName: "BRE",
                symbol: "BRE"
            },
            BRL: {
                displayName: "رئال برزیل",
                "displayName-count-one": "رئال برزیل",
                "displayName-count-other": "رئال برزیل",
                symbol: "R$",
                "symbol-alt-narrow": "R$"
            },
            BRN: {
                displayName: "BRN",
                symbol: "BRN"
            },
            BRR: {
                displayName: "BRR",
                symbol: "BRR"
            },
            BRZ: {
                displayName: "BRZ",
                symbol: "BRZ"
            },
            BSD: {
                displayName: "دلار باهاما",
                "displayName-count-one": "دلار باهاما",
                "displayName-count-other": "دلار باهاما",
                symbol: "BSD",
                "symbol-alt-narrow": "$"
            },
            BTN: {
                displayName: "انگولتروم بوتان",
                "displayName-count-one": "انگولتروم بوتان",
                "displayName-count-other": "انگولتروم بوتان",
                symbol: "BTN"
            },
            BUK: {
                displayName: "BUK",
                symbol: "BUK"
            },
            BWP: {
                displayName: "پولای بوتسوانا",
                "displayName-count-one": "پولای بوتسوانا",
                "displayName-count-other": "پولای بوتسوانا",
                symbol: "BWP",
                "symbol-alt-narrow": "P"
            },
            BYB: {
                displayName: "روبل جدید بلاروس (۱۹۹۴ تا ۱۹۹۹)",
                "displayName-count-one": "روبل جدید بلاروس (۱۹۹۴ تا ۱۹۹۹)",
                "displayName-count-other": "روبل جدید بلاروس (۱۹۹۴ تا ۱۹۹۹)",
                symbol: "BYB"
            },
            BYN: {
                displayName: "روبل بلاروس",
                "displayName-count-one": "روبل بلاروس",
                "displayName-count-other": "روبل بلاروس",
                symbol: "BYN",
                "symbol-alt-narrow": "р."
            },
            BYR: {
                displayName: "روبل بلاروسی (۲۰۱۶–۲۰۰۰)",
                "displayName-count-one": "روبل بلاروسی (۲۰۱۶–۲۰۰۰)",
                "displayName-count-other": "روبل بلاروسی (۲۰۱۶–۲۰۰۰)",
                symbol: "BYR"
            },
            BZD: {
                displayName: "دلار بلیز",
                "displayName-count-one": "دلار بلیز",
                "displayName-count-other": "دلار بلیز",
                symbol: "BZD",
                "symbol-alt-narrow": "$"
            },
            CAD: {
                displayName: "دلار کانادا",
                "displayName-count-one": "دلار کانادا",
                "displayName-count-other": "دلار کانادا",
                symbol: "$CA",
                "symbol-alt-narrow": "$"
            },
            CDF: {
                displayName: "فرانک کنگو",
                "displayName-count-one": "فرانک کنگو",
                "displayName-count-other": "فرانک کنگو",
                symbol: "CDF"
            },
            CHE: {
                displayName: "CHE",
                symbol: "CHE"
            },
            CHF: {
                displayName: "فرانک سوئیس",
                "displayName-count-one": "فرانک سوئیس",
                "displayName-count-other": "فرانک سوئیس",
                symbol: "CHF"
            },
            CHW: {
                displayName: "CHW",
                symbol: "CHW"
            },
            CLE: {
                displayName: "CLE",
                symbol: "CLE"
            },
            CLF: {
                displayName: "CLF",
                symbol: "CLF"
            },
            CLP: {
                displayName: "پزوی شیلی",
                "displayName-count-one": "پزوی شیلی",
                "displayName-count-other": "پزوی شیلی",
                symbol: "CLP",
                "symbol-alt-narrow": "$"
            },
            CNH: {
                displayName: "یوآن چین (برون‌مرزی)",
                "displayName-count-one": "یوآن چین (برون‌مرزی)",
                "displayName-count-other": "یوآن چین (برون‌مرزی)",
                symbol: "CNH"
            },
            CNX: {
                displayName: "CNX",
                symbol: "CNX"
            },
            CNY: {
                displayName: "یوآن چین",
                "displayName-count-one": "یوآن چین",
                "displayName-count-other": "یوآن چین",
                symbol: "¥CN",
                "symbol-alt-narrow": "¥"
            },
            COP: {
                displayName: "پزوی کلمبیا",
                "displayName-count-one": "پزوی کلمبیا",
                "displayName-count-other": "پزوی کلمبیا",
                symbol: "COP",
                "symbol-alt-narrow": "$"
            },
            COU: {
                displayName: "COU",
                symbol: "COU"
            },
            CRC: {
                displayName: "کولون کاستاریکا",
                "displayName-count-one": "کولون کاستاریکا",
                "displayName-count-other": "کولون کاستاریکا",
                symbol: "CRC",
                "symbol-alt-narrow": "₡"
            },
            CSD: {
                displayName: "دینار صربستان (۲۰۰۲ تا ۲۰۰۶)",
                "displayName-count-one": "دینار صربستان (۲۰۰۲ تا ۲۰۰۶)",
                "displayName-count-other": "دینار صربستان (۲۰۰۲ تا ۲۰۰۶)",
                symbol: "CSD"
            },
            CSK: {
                displayName: "CSK",
                symbol: "CSK"
            },
            CUC: {
                displayName: "پزوی تبدیل‌پذیر کوبا",
                "displayName-count-one": "پزوی تبدیل‌پذیر کوبا",
                "displayName-count-other": "پزوی تبدیل‌پذیر کوبا",
                symbol: "CUC",
                "symbol-alt-narrow": "$"
            },
            CUP: {
                displayName: "پزوی کوبا",
                "displayName-count-one": "پزوی کوبا",
                "displayName-count-other": "پزوی کوبا",
                symbol: "CUP",
                "symbol-alt-narrow": "$"
            },
            CVE: {
                displayName: "اسکودوی کیپ‌ورد",
                "displayName-count-one": "اسکودوی کیپ‌ورد",
                "displayName-count-other": "اسکودوی کیپ‌ورد",
                symbol: "CVE"
            },
            CYP: {
                displayName: "پوند قبرس",
                "displayName-count-one": "پوند قبرس",
                "displayName-count-other": "پوند قبرس",
                symbol: "CYP"
            },
            CZK: {
                displayName: "کورونای جمهوری چک",
                "displayName-count-one": "کورونای جمهوری چک",
                "displayName-count-other": "کورونای جمهوری چک",
                symbol: "CZK",
                "symbol-alt-narrow": "Kč"
            },
            DDM: {
                displayName: "مارک آلمان شرقی",
                "displayName-count-one": "مارک آلمان شرقی",
                "displayName-count-other": "مارک آلمان شرقی",
                symbol: "DDM"
            },
            DEM: {
                displayName: "مارک آلمان",
                "displayName-count-one": "مارک آلمان",
                "displayName-count-other": "مارک آلمان",
                symbol: "DEM"
            },
            DJF: {
                displayName: "فرانک جیبوتی",
                "displayName-count-one": "فرانک جیبوتی",
                "displayName-count-other": "فرانک جیبوتی",
                symbol: "DJF"
            },
            DKK: {
                displayName: "کرون دانمارک",
                "displayName-count-one": "کرون دانمارک",
                "displayName-count-other": "کرون دانمارک",
                symbol: "DKK",
                "symbol-alt-narrow": "kr"
            },
            DOP: {
                displayName: "پزوی جمهوری دومینیکن",
                "displayName-count-one": "پزوی جمهوری دومینیکن",
                "displayName-count-other": "پزوی جمهوری دومینیکن",
                symbol: "DOP",
                "symbol-alt-narrow": "$"
            },
            DZD: {
                displayName: "دینار الجزایر",
                "displayName-count-one": "دینار الجزایر",
                "displayName-count-other": "دینار الجزایر",
                symbol: "DZD"
            },
            ECS: {
                displayName: "ECS",
                symbol: "ECS"
            },
            ECV: {
                displayName: "ECV",
                symbol: "ECV"
            },
            EEK: {
                displayName: "کرون استونی",
                "displayName-count-one": "کرون استونی",
                "displayName-count-other": "کرون استونی",
                symbol: "EEK"
            },
            EGP: {
                displayName: "پوند مصر",
                "displayName-count-one": "پوند مصر",
                "displayName-count-other": "پوند مصر",
                symbol: "EGP",
                "symbol-alt-narrow": "E£"
            },
            ERN: {
                displayName: "ناکفای اریتره",
                "displayName-count-one": "ناکفای اریتره",
                "displayName-count-other": "ناکفای اریتره",
                symbol: "ERN"
            },
            ESA: {
                displayName: "ESA",
                symbol: "ESA"
            },
            ESB: {
                displayName: "ESB",
                symbol: "ESB"
            },
            ESP: {
                displayName: "پزتای اسپانیا",
                "displayName-count-one": "پزتای اسپانیا",
                "displayName-count-other": "پزتای اسپانیا",
                symbol: "ESP",
                "symbol-alt-narrow": "₧"
            },
            ETB: {
                displayName: "بیر اتیوپی",
                "displayName-count-one": "بیر اتیوپی",
                "displayName-count-other": "بیر اتیوپی",
                symbol: "ETB"
            },
            EUR: {
                displayName: "یورو",
                "displayName-count-one": "یورو",
                "displayName-count-other": "یورو",
                symbol: "€",
                "symbol-alt-narrow": "€"
            },
            FIM: {
                displayName: "FIM",
                symbol: "FIM"
            },
            FJD: {
                displayName: "دلار فیجی",
                "displayName-count-one": "دلار فیجی",
                "displayName-count-other": "دلار فیجی",
                symbol: "FJD",
                "symbol-alt-narrow": "$"
            },
            FKP: {
                displayName: "پوند جزایر فالکلند",
                "displayName-count-one": "پوند جزایر فالکلند",
                "displayName-count-other": "پوند جزایر فالکلند",
                symbol: "FKP",
                "symbol-alt-narrow": "£"
            },
            FRF: {
                displayName: "فرانک فرانسه",
                "displayName-count-one": "فرانک فرانسه",
                "displayName-count-other": "فرانک فرانسه",
                symbol: "FRF"
            },
            GBP: {
                displayName: "پوند بریتانیا",
                "displayName-count-one": "پوند بریتانیا",
                "displayName-count-other": "پوند بریتانیا",
                symbol: "£",
                "symbol-alt-narrow": "£"
            },
            GEK: {
                displayName: "GEK",
                symbol: "GEK"
            },
            GEL: {
                displayName: "لاری گرجستان",
                "displayName-count-one": "لاری گرجستان",
                "displayName-count-other": "لاری گرجستان",
                symbol: "GEL",
                "symbol-alt-narrow": "₾"
            },
            GHC: {
                displayName: "GHC",
                symbol: "GHC"
            },
            GHS: {
                displayName: "سدی غنا",
                "displayName-count-one": "سدی غنا",
                "displayName-count-other": "سدی غنا",
                symbol: "GHS",
                "symbol-alt-narrow": "GH₵"
            },
            GIP: {
                displayName: "پوند جبل‌الطارق",
                "displayName-count-one": "پوند جبل‌الطارق",
                "displayName-count-other": "پوند جبل‌الطارق",
                symbol: "GIP",
                "symbol-alt-narrow": "£"
            },
            GMD: {
                displayName: "دالاسی گامبیا",
                "displayName-count-one": "دالاسی گامبیا",
                "displayName-count-other": "دالاسی گامبیا",
                symbol: "GMD"
            },
            GNF: {
                displayName: "فرانک گینه",
                "displayName-count-one": "فرانک گینه",
                "displayName-count-other": "فرانک گینه",
                symbol: "GNF",
                "symbol-alt-narrow": "FG"
            },
            GNS: {
                displayName: "GNS",
                symbol: "GNS"
            },
            GQE: {
                displayName: "GQE",
                symbol: "GQE"
            },
            GRD: {
                displayName: "دراخمای یونان",
                "displayName-count-one": "دراخمای یونان",
                "displayName-count-other": "دراخمای یونان",
                symbol: "GRD"
            },
            GTQ: {
                displayName: "کتزال گواتمالا",
                "displayName-count-one": "کتزال گواتمالا",
                "displayName-count-other": "کتزال گواتمالا",
                symbol: "GTQ",
                "symbol-alt-narrow": "Q"
            },
            GWE: {
                displayName: "GWE",
                symbol: "GWE"
            },
            GWP: {
                displayName: "پزوی گینهٔ بیسائو",
                symbol: "GWP"
            },
            GYD: {
                displayName: "دلار گویانا",
                "displayName-count-one": "دلار گویانا",
                "displayName-count-other": "دلار گویانا",
                symbol: "GYD",
                "symbol-alt-narrow": "$"
            },
            HKD: {
                displayName: "دلار هنگ‌کنگ",
                "displayName-count-one": "دلار هنگ‌کنگ",
                "displayName-count-other": "دلار هنگ‌کنگ",
                symbol: "$HK",
                "symbol-alt-narrow": "$"
            },
            HNL: {
                displayName: "لمپیرای هندوراس",
                "displayName-count-one": "لمپیرای هندوراس",
                "displayName-count-other": "لمپیرای هندوراس",
                symbol: "HNL",
                "symbol-alt-narrow": "L"
            },
            HRD: {
                displayName: "دینار کرواسی",
                "displayName-count-one": "دینار کرواسی",
                "displayName-count-other": "دینار کرواسی",
                symbol: "HRD"
            },
            HRK: {
                displayName: "کونای کرواسی",
                "displayName-count-one": "کونای کرواسی",
                "displayName-count-other": "کونای کرواسی",
                symbol: "HRK",
                "symbol-alt-narrow": "kn"
            },
            HTG: {
                displayName: "گورد هائیتی",
                "displayName-count-one": "گورد هائیتی",
                "displayName-count-other": "گورد هائیتی",
                symbol: "HTG"
            },
            HUF: {
                displayName: "فورینت مجارستان",
                "displayName-count-one": "فورینت مجارستان",
                "displayName-count-other": "فورینت مجارستان",
                symbol: "HUF",
                "symbol-alt-narrow": "Ft"
            },
            IDR: {
                displayName: "روپیهٔ اندونزی",
                "displayName-count-one": "روپیهٔ اندونزی",
                "displayName-count-other": "روپیهٔ اندونزی",
                symbol: "IDR",
                "symbol-alt-narrow": "Rp"
            },
            IEP: {
                displayName: "پوند ایرلند",
                "displayName-count-one": "پوند ایرلند",
                "displayName-count-other": "پوند ایرلند",
                symbol: "IEP"
            },
            ILP: {
                displayName: "پوند اسرائیل",
                "displayName-count-one": "پوند اسرائیل",
                "displayName-count-other": "پوند اسرائیل",
                symbol: "ILP"
            },
            ILR: {
                displayName: "شقل اسرائیل (۱۹۸۰ تا ۱۹۸۵)",
                "displayName-count-one": "شقل اسرائیل (۱۹۸۰ تا ۱۹۸۵)",
                "displayName-count-other": "شقل اسرائیل (۱۹۸۰ تا ۱۹۸۵)",
                symbol: "ILR"
            },
            ILS: {
                displayName: "شقل جدید اسرائیل",
                "displayName-count-one": "شقل جدید اسرائیل",
                "displayName-count-other": "شقل جدید اسرائیل",
                symbol: "₪",
                "symbol-alt-narrow": "₪"
            },
            INR: {
                displayName: "روپیهٔ هند",
                "displayName-count-one": "روپیهٔ هند",
                "displayName-count-other": "روپیهٔ هند",
                symbol: "₹",
                "symbol-alt-narrow": "₹"
            },
            IQD: {
                displayName: "دینار عراق",
                "displayName-count-one": "دینار عراق",
                "displayName-count-other": "دینار عراق",
                symbol: "IQD"
            },
            IRR: {
                displayName: "ریال ایران",
                "displayName-count-one": "ریال ایران",
                "displayName-count-other": "ریال ایران",
                symbol: "ریال"
            },
            ISJ: {
                displayName: "کرونای ایسلند (۱۹۱۸ تا ۱۹۸۱)",
                "displayName-count-one": "کرونای ایسلند (۱۹۱۸ تا ۱۹۸۱)",
                "displayName-count-other": "کرونای ایسلند (۱۹۱۸ تا ۱۹۸۱)",
                symbol: "ISJ"
            },
            ISK: {
                displayName: "کرونای ایسلند",
                "displayName-count-one": "کرونای ایسلند",
                "displayName-count-other": "کرونای ایسلند",
                symbol: "ISK",
                "symbol-alt-narrow": "kr"
            },
            ITL: {
                displayName: "لیرهٔ ایتالیا",
                "displayName-count-one": "لیرهٔ ایتالیا",
                "displayName-count-other": "لیرهٔ ایتالیا",
                symbol: "ITL"
            },
            JMD: {
                displayName: "دلار جامائیکا",
                "displayName-count-one": "دلار جامائیکا",
                "displayName-count-other": "دلار جامائیکا",
                symbol: "JMD",
                "symbol-alt-narrow": "$"
            },
            JOD: {
                displayName: "دینار اردن",
                "displayName-count-one": "دینار اردن",
                "displayName-count-other": "دینار اردن",
                symbol: "JOD"
            },
            JPY: {
                displayName: "ین ژاپن",
                "displayName-count-one": "ین ژاپن",
                "displayName-count-other": "ین ژاپن",
                symbol: "¥",
                "symbol-alt-narrow": "¥"
            },
            KES: {
                displayName: "شیلینگ کنیا",
                "displayName-count-one": "شیلینگ کنیا",
                "displayName-count-other": "شیلینگ کنیا",
                symbol: "KES"
            },
            KGS: {
                displayName: "سوم قرقیزستان",
                "displayName-count-one": "سوم قرقیزستان",
                "displayName-count-other": "سوم قرقیزستان",
                symbol: "KGS"
            },
            KHR: {
                displayName: "ری‌یل کامبوج",
                "displayName-count-one": "ری‌یل کامبوج",
                "displayName-count-other": "ری‌یل کامبوج",
                symbol: "KHR",
                "symbol-alt-narrow": "៛"
            },
            KMF: {
                displayName: "فرانک کومورو",
                "displayName-count-one": "فرانک کومورو",
                "displayName-count-other": "فرانک کومورو",
                symbol: "KMF",
                "symbol-alt-narrow": "CF"
            },
            KPW: {
                displayName: "وون کرهٔ شمالی",
                "displayName-count-one": "وون کرهٔ شمالی",
                "displayName-count-other": "وون کرهٔ شمالی",
                symbol: "KPW",
                "symbol-alt-narrow": "₩"
            },
            KRH: {
                displayName: "KRH",
                symbol: "KRH"
            },
            KRO: {
                displayName: "وون کرهٔ جنوبی (۱۹۴۵ تا ۱۹۵۳)",
                "displayName-count-one": "وون کرهٔ جنوبی (۱۹۴۵ تا ۱۹۵۳)",
                "displayName-count-other": "وون کرهٔ جنوبی (۱۹۴۵ تا ۱۹۵۳)",
                symbol: "KRO"
            },
            KRW: {
                displayName: "وون کرهٔ جنوبی",
                "displayName-count-one": "وون کرهٔ جنوبی",
                "displayName-count-other": "وون کرهٔ جنوبی",
                symbol: "₩",
                "symbol-alt-narrow": "₩"
            },
            KWD: {
                displayName: "دینار کویت",
                "displayName-count-one": "دینار کویت",
                "displayName-count-other": "دینار کویت",
                symbol: "KWD"
            },
            KYD: {
                displayName: "دلار جزایر کِیمن",
                "displayName-count-one": "دلار جزایر کِیمن",
                "displayName-count-other": "دلار جزایر کِیمن",
                symbol: "KYD",
                "symbol-alt-narrow": "$"
            },
            KZT: {
                displayName: "تنگهٔ قزاقستان",
                "displayName-count-one": "تنگهٔ قزاقستان",
                "displayName-count-other": "تنگهٔ قزاقستان",
                symbol: "KZT",
                "symbol-alt-narrow": "₸"
            },
            LAK: {
                displayName: "کیپ لائوس",
                "displayName-count-one": "کیپ لائوس",
                "displayName-count-other": "کیپ لائوس",
                symbol: "LAK",
                "symbol-alt-narrow": "₭"
            },
            LBP: {
                displayName: "لیرهٔ لبنان",
                "displayName-count-one": "لیرهٔ لبنان",
                "displayName-count-other": "لیرهٔ لبنان",
                symbol: "LBP",
                "symbol-alt-narrow": "L£"
            },
            LKR: {
                displayName: "روپیهٔ سری‌لانکا",
                "displayName-count-one": "روپیهٔ سری‌لانکا",
                "displayName-count-other": "روپیهٔ سری‌لانکا",
                symbol: "LKR",
                "symbol-alt-narrow": "Rs"
            },
            LRD: {
                displayName: "دلار لیبریا",
                "displayName-count-one": "دلار لیبریا",
                "displayName-count-other": "دلار لیبریا",
                symbol: "LRD",
                "symbol-alt-narrow": "$"
            },
            LSL: {
                displayName: "لوتی لسوتو",
                "displayName-count-one": "لوتی لسوتو",
                "displayName-count-other": "لوتی لسوتو",
                symbol: "LSL"
            },
            LTL: {
                displayName: "لیتاس لیتوانی",
                "displayName-count-one": "لیتاس لیتوانی",
                "displayName-count-other": "لیتاس لیتوانی",
                symbol: "LTL",
                "symbol-alt-narrow": "Lt"
            },
            LTT: {
                displayName: "تالوناس لیتوانی",
                symbol: "LTT"
            },
            LUC: {
                displayName: "LUC",
                symbol: "LUC"
            },
            LUF: {
                displayName: "فرانک لوکزامبورگ",
                symbol: "LUF"
            },
            LUL: {
                displayName: "فرانک مالی لوگزامبورگ",
                "displayName-count-one": "فرانک مالی لوگزامبورگ",
                "displayName-count-other": "فرانک مالی لوگزامبورگ",
                symbol: "LUL"
            },
            LVL: {
                displayName: "لاتس لتونی",
                "displayName-count-one": "لاتس لتونی",
                "displayName-count-other": "لاتس لتونی",
                symbol: "LVL",
                "symbol-alt-narrow": "Ls"
            },
            LVR: {
                displayName: "روبل لتونی",
                "displayName-count-one": "روبل لتونی",
                "displayName-count-other": "روبل لتونی",
                symbol: "LVR"
            },
            LYD: {
                displayName: "دینار لیبی",
                "displayName-count-one": "دینار لیبی",
                "displayName-count-other": "دینار لیبی",
                symbol: "LYD"
            },
            MAD: {
                displayName: "درهم مراکش",
                "displayName-count-one": "درهم مراکش",
                "displayName-count-other": "درهم مراکش",
                symbol: "MAD"
            },
            MAF: {
                displayName: "فرانک مراکش",
                "displayName-count-one": "فرانک مراکش",
                "displayName-count-other": "فرانک مراکش",
                symbol: "MAF"
            },
            MCF: {
                displayName: "فرانک موناکو",
                "displayName-count-one": "فرانک موناکو",
                "displayName-count-other": "فرانک موناکو",
                symbol: "MCF"
            },
            MDC: {
                displayName: "MDC",
                symbol: "MDC"
            },
            MDL: {
                displayName: "لئوی مولداوی",
                "displayName-count-one": "لئوی مولداوی",
                "displayName-count-other": "لئوی مولداوی",
                symbol: "MDL"
            },
            MGA: {
                displayName: "آریاری مالاگاسی",
                "displayName-count-one": "آریاری مالاگاسی",
                "displayName-count-other": "آریاری مالاگاسی",
                symbol: "MGA",
                "symbol-alt-narrow": "Ar"
            },
            MGF: {
                displayName: "فرانک ماداگاسکار",
                symbol: "MGF"
            },
            MKD: {
                displayName: "دینار مقدونیه",
                "displayName-count-one": "دینار مقدونیه",
                "displayName-count-other": "دینار مقدونیه",
                symbol: "MKD"
            },
            MKN: {
                displayName: "دینار مقدونیه (۱۹۹۲ تا ۱۹۹۳)",
                "displayName-count-one": "دینار مقدونیه (۱۹۹۲ تا ۱۹۹۳)",
                "displayName-count-other": "دینار مقدونیه (۱۹۹۲ تا ۱۹۹۳)",
                symbol: "MKN"
            },
            MLF: {
                displayName: "فرانک مالی",
                symbol: "MLF"
            },
            MMK: {
                displayName: "کیات میانمار",
                "displayName-count-one": "کیات میانمار",
                "displayName-count-other": "کیات میانمار",
                symbol: "MMK",
                "symbol-alt-narrow": "K"
            },
            MNT: {
                displayName: "توگریک مغولستان",
                "displayName-count-one": "توگریک مغولستان",
                "displayName-count-other": "توگریک مغولستان",
                symbol: "MNT",
                "symbol-alt-narrow": "₮"
            },
            MOP: {
                displayName: "پاتاکای ماکائو",
                "displayName-count-one": "پاتاکای ماکائو",
                "displayName-count-other": "پاتاکای ماکائو",
                symbol: "MOP"
            },
            MRO: {
                displayName: "اوگوئیای موریتانی (۱۹۷۳ تا ۲۰۱۷)",
                "displayName-count-one": "اوگوئیای موریتانی (۱۹۷۳ تا ۲۰۱۷)",
                "displayName-count-other": "اوگوئیای موریتانی (۱۹۷۳ تا ۲۰۱۷)",
                symbol: "MRO"
            },
            MRU: {
                displayName: "اوگوئیای موریتانی",
                "displayName-count-one": "اوگوئیای موریتانی",
                "displayName-count-other": "اوگوئیای موریتانی",
                symbol: "MRU"
            },
            MTL: {
                displayName: "لیرهٔ مالت",
                symbol: "MTL"
            },
            MTP: {
                displayName: "پوند مالت",
                symbol: "MTP"
            },
            MUR: {
                displayName: "روپیهٔ موریس",
                "displayName-count-one": "روپیهٔ موریس",
                "displayName-count-other": "روپیهٔ موریس",
                symbol: "MUR",
                "symbol-alt-narrow": "Rs"
            },
            MVP: {
                displayName: "روپیهٔ مالدیو (۱۹۴۷ تا ۱۹۸۱)",
                "displayName-count-one": "روپیهٔ مالدیو (۱۹۴۷ تا ۱۹۸۱)",
                "displayName-count-other": "روپیهٔ مالدیو (۱۹۴۷ تا ۱۹۸۱)",
                symbol: "MVP"
            },
            MVR: {
                displayName: "روپیهٔ مالدیو",
                "displayName-count-one": "روپیهٔ مالدیو",
                "displayName-count-other": "روپیهٔ مالدیو",
                symbol: "MVR"
            },
            MWK: {
                displayName: "کواچای مالاوی",
                "displayName-count-one": "کواچای مالاوی",
                "displayName-count-other": "کواچای مالاوی",
                symbol: "MWK"
            },
            MXN: {
                displayName: "پزوی مکزیک",
                "displayName-count-one": "پزوی مکزیک",
                "displayName-count-other": "پزوی مکزیک",
                symbol: "$MX",
                "symbol-alt-narrow": "$"
            },
            MXP: {
                displayName: "پزوی نقرهٔ مکزیک (۱۸۶۱ تا ۱۹۹۲)",
                "displayName-count-one": "پزوی نقرهٔ مکزیک (۱۸۶۱ تا ۱۹۹۲)",
                "displayName-count-other": "پزوی نقرهٔ مکزیک (۱۸۶۱ تا ۱۹۹۲)",
                symbol: "MXP"
            },
            MXV: {
                displayName: "MXV",
                symbol: "MXV"
            },
            MYR: {
                displayName: "رینگیت مالزی",
                "displayName-count-one": "رینگیت مالزی",
                "displayName-count-other": "رینگیت مالزی",
                symbol: "MYR",
                "symbol-alt-narrow": "RM"
            },
            MZE: {
                displayName: "اسکودوی موزامبیک",
                symbol: "MZE"
            },
            MZM: {
                displayName: "MZM",
                symbol: "MZM"
            },
            MZN: {
                displayName: "متیکال موزامبیک",
                "displayName-count-one": "متیکال موزامبیک",
                "displayName-count-other": "متیکال موزامبیک",
                symbol: "MZN"
            },
            NAD: {
                displayName: "دلار نامیبیا",
                "displayName-count-one": "دلار نامیبیا",
                "displayName-count-other": "دلار نامیبیا",
                symbol: "NAD",
                "symbol-alt-narrow": "$"
            },
            NGN: {
                displayName: "نایرای نیجریه",
                "displayName-count-one": "نایرای نیجریه",
                "displayName-count-other": "نایرای نیجریه",
                symbol: "NGN",
                "symbol-alt-narrow": "₦"
            },
            NIC: {
                displayName: "NIC",
                symbol: "NIC"
            },
            NIO: {
                displayName: "کوردوبای نیکاراگوئه",
                "displayName-count-one": "کوردوبای نیکاراگوئه",
                "displayName-count-other": "کوردوبای نیکاراگوئه",
                symbol: "NIO",
                "symbol-alt-narrow": "C$"
            },
            NLG: {
                displayName: "گیلدر هلند",
                "displayName-count-one": "گیلدر هلند",
                "displayName-count-other": "گیلدر هلند",
                symbol: "NLG"
            },
            NOK: {
                displayName: "کرون نروژ",
                "displayName-count-one": "کرون نروژ",
                "displayName-count-other": "کرون نروژ",
                symbol: "NOK",
                "symbol-alt-narrow": "kr"
            },
            NPR: {
                displayName: "روپیهٔ نپال",
                "displayName-count-one": "روپیهٔ نپال",
                "displayName-count-other": "روپیهٔ نپال",
                symbol: "NPR",
                "symbol-alt-narrow": "Rs"
            },
            NZD: {
                displayName: "دلار زلاند نو",
                "displayName-count-one": "دلار زلاند نو",
                "displayName-count-other": "دلار زلاند نو",
                symbol: "$NZ",
                "symbol-alt-narrow": "$"
            },
            OMR: {
                displayName: "ریال عمان",
                "displayName-count-one": "ریال عمان",
                "displayName-count-other": "ریال عمان",
                symbol: "OMR"
            },
            PAB: {
                displayName: "بالبوای پاناما",
                "displayName-count-one": "بالبوای پاناما",
                "displayName-count-other": "بالبوای پاناما",
                symbol: "PAB"
            },
            PEI: {
                displayName: "اینتی پرو",
                "displayName-count-one": "اینتی پرو",
                "displayName-count-other": "اینتی پرو",
                symbol: "PEI"
            },
            PEN: {
                displayName: "سول پرو",
                "displayName-count-one": "سول پرو",
                "displayName-count-other": "سول پرو",
                symbol: "PEN"
            },
            PES: {
                displayName: "سول پرو (۱۸۶۳ تا ۱۹۶۵)",
                "displayName-count-one": "سول پرو (۱۸۶۳ تا ۱۹۶۵)",
                "displayName-count-other": "سول پرو (۱۸۶۳ تا ۱۹۶۵)",
                symbol: "PES"
            },
            PGK: {
                displayName: "کینای پاپوا گینهٔ نو",
                "displayName-count-one": "کینای پاپوا گینهٔ نو",
                "displayName-count-other": "کینای پاپوا گینهٔ نو",
                symbol: "PGK"
            },
            PHP: {
                displayName: "پزوی فیلیپین",
                "displayName-count-one": "پزوی فیلیپین",
                "displayName-count-other": "پزوی فیلیپین",
                symbol: "PHP",
                "symbol-alt-narrow": "₱"
            },
            PKR: {
                displayName: "روپیهٔ پاکستان",
                "displayName-count-one": "روپیهٔ پاکستان",
                "displayName-count-other": "روپیهٔ پاکستان",
                symbol: "PKR",
                "symbol-alt-narrow": "Rs"
            },
            PLN: {
                displayName: "زواتی لهستان",
                "displayName-count-one": "زواتی لهستان",
                "displayName-count-other": "زواتی لهستان",
                symbol: "PLN",
                "symbol-alt-narrow": "zł"
            },
            PLZ: {
                displayName: "PLZ",
                symbol: "PLZ"
            },
            PTE: {
                displayName: "اسکودوی پرتغال",
                "displayName-count-one": "اسکودوی پرتغال",
                "displayName-count-other": "اسکودوی پرتغال",
                symbol: "PTE"
            },
            PYG: {
                displayName: "گوارانی پاراگوئه",
                "displayName-count-one": "گوارانی پاراگوئه",
                "displayName-count-other": "گوارانی پاراگوئه",
                symbol: "PYG",
                "symbol-alt-narrow": "₲"
            },
            QAR: {
                displayName: "ریال قطر",
                "displayName-count-one": "ریال قطر",
                "displayName-count-other": "ریال قطر",
                symbol: "QAR"
            },
            RHD: {
                displayName: "دلار رودزیا",
                symbol: "RHD"
            },
            ROL: {
                displayName: "ROL",
                symbol: "ROL"
            },
            RON: {
                displayName: "لئوی رومانی",
                "displayName-count-one": "لئوی رومانی",
                "displayName-count-other": "لئوی رومانی",
                symbol: "RON",
                "symbol-alt-narrow": "lei"
            },
            RSD: {
                displayName: "دینار صربستان",
                "displayName-count-one": "دینار صربستان",
                "displayName-count-other": "دینار صربستان",
                symbol: "RSD"
            },
            RUB: {
                displayName: "روبل روسیه",
                "displayName-count-one": "روبل روسیه",
                "displayName-count-other": "روبل روسیه",
                symbol: "RUB",
                "symbol-alt-narrow": "₽",
                "symbol-alt-variant": "₽"
            },
            RUR: {
                displayName: "روبل روسیه (۱۹۹۱ تا ۱۹۹۸)",
                "displayName-count-one": "روبل روسیه (۱۹۹۱ تا ۱۹۹۸)",
                "displayName-count-other": "روبل روسیه (۱۹۹۱ تا ۱۹۹۸)",
                symbol: "RUR"
            },
            RWF: {
                displayName: "فرانک رواندا",
                "displayName-count-one": "فرانک رواندا",
                "displayName-count-other": "فرانک رواندا",
                symbol: "RWF",
                "symbol-alt-narrow": "RF"
            },
            SAR: {
                displayName: "ریال سعودی",
                "displayName-count-one": "ریال سعودی",
                "displayName-count-other": "ریال سعودی",
                symbol: "SAR"
            },
            SBD: {
                displayName: "دلار جزایر سلیمان",
                "displayName-count-one": "دلار جزایر سلیمان",
                "displayName-count-other": "دلار جزایر سلیمان",
                symbol: "SBD",
                "symbol-alt-narrow": "$"
            },
            SCR: {
                displayName: "روپیهٔ سیشل",
                "displayName-count-one": "روپیهٔ سیشل",
                "displayName-count-other": "روپیهٔ سیشل",
                symbol: "SCR"
            },
            SDD: {
                displayName: "دینار سودان (۱۹۹۲ تا ۲۰۰۷)",
                "displayName-count-one": "دینار سودان (۱۹۹۲ تا ۲۰۰۷)",
                "displayName-count-other": "دینار سودان (۱۹۹۲ تا ۲۰۰۷)",
                symbol: "SDD"
            },
            SDG: {
                displayName: "پوند سودان",
                "displayName-count-one": "پوند سودان",
                "displayName-count-other": "پوند سودان",
                symbol: "SDG"
            },
            SDP: {
                displayName: "SDP",
                symbol: "SDP"
            },
            SEK: {
                displayName: "کرون سوئد",
                "displayName-count-one": "کرون سوئد",
                "displayName-count-other": "کرون سوئد",
                symbol: "SEK",
                "symbol-alt-narrow": "kr"
            },
            SGD: {
                displayName: "دلار سنگاپور",
                "displayName-count-one": "دلار سنگاپور",
                "displayName-count-other": "دلار سنگاپور",
                symbol: "SGD",
                "symbol-alt-narrow": "$"
            },
            SHP: {
                displayName: "پوند سنت هلن",
                "displayName-count-one": "پوند سنت هلن",
                "displayName-count-other": "پوند سنت هلن",
                symbol: "SHP",
                "symbol-alt-narrow": "£"
            },
            SIT: {
                displayName: "SIT",
                symbol: "SIT"
            },
            SKK: {
                displayName: "SKK",
                symbol: "SKK"
            },
            SLE: {
                displayName: "SLE",
                symbol: "SLE"
            },
            SLL: {
                displayName: "لئون سیرالئون",
                "displayName-count-one": "لئون سیرالئون",
                "displayName-count-other": "لئون سیرالئون",
                symbol: "SLL"
            },
            SOS: {
                displayName: "شیلینگ سومالی",
                "displayName-count-one": "شیلینگ سومالی",
                "displayName-count-other": "شیلینگ سومالی",
                symbol: "SOS"
            },
            SRD: {
                displayName: "دلار سورینام",
                "displayName-count-one": "دلار سورینام",
                "displayName-count-other": "دلار سورینام",
                symbol: "SRD",
                "symbol-alt-narrow": "$"
            },
            SRG: {
                displayName: "گیلدر سورینام",
                "displayName-count-one": "گیلدر سورینام",
                "displayName-count-other": "گیلدر سورینام",
                symbol: "SRG"
            },
            SSP: {
                displayName: "پوند سودان جنوبی",
                "displayName-count-one": "پوند سودان جنوبی",
                "displayName-count-other": "پوند سودان جنوبی",
                symbol: "SSP",
                "symbol-alt-narrow": "£"
            },
            STD: {
                displayName: "دوبرای سائوتومه و پرنسیپ (۱۹۷۷ تا ۲۰۱۷)",
                "displayName-count-one": "دوبرای سائوتومه و پرنسیپ (۱۹۷۷ تا ۲۰۱۷)",
                "displayName-count-other": "دوبرای سائوتومه و پرنسیپ (۱۹۷۷ تا ۲۰۱۷)",
                symbol: "STD"
            },
            STN: {
                displayName: "دوبرای سائوتومه و پرنسیپ",
                "displayName-count-one": "دوبرای سائوتومه و پرنسیپ",
                "displayName-count-other": "دوبرای سائوتومه و پرنسیپ",
                symbol: "STN",
                "symbol-alt-narrow": "Db"
            },
            SUR: {
                displayName: "روبل شوروی",
                "displayName-count-one": "روبل شوروی",
                "displayName-count-other": "روبل شوروی",
                symbol: "SUR"
            },
            SVC: {
                displayName: "SVC",
                symbol: "SVC"
            },
            SYP: {
                displayName: "لیرهٔ سوریه",
                "displayName-count-one": "لیرهٔ سوریه",
                "displayName-count-other": "لیرهٔ سوریه",
                symbol: "SYP",
                "symbol-alt-narrow": "£"
            },
            SZL: {
                displayName: "لیلانگنی سوازیلند",
                "displayName-count-one": "لیلانگنی سوازیلند",
                "displayName-count-other": "لیلانگنی سوازیلند",
                symbol: "SZL"
            },
            THB: {
                displayName: "بات تایلند",
                "displayName-count-one": "بات تایلند",
                "displayName-count-other": "بات تایلند",
                symbol: "฿",
                "symbol-alt-narrow": "฿"
            },
            TJR: {
                displayName: "روبل تاجیکستان",
                "displayName-count-one": "روبل تاجیکستان",
                "displayName-count-other": "روبل تاجیکستان",
                symbol: "TJR"
            },
            TJS: {
                displayName: "سامانی تاجیکستان",
                "displayName-count-one": "سامانی تاجیکستان",
                "displayName-count-other": "سامانی تاجیکستان",
                symbol: "TJS"
            },
            TMM: {
                displayName: "منات ترکمنستان (۱۹۹۳ تا ۲۰۰۹)",
                "displayName-count-one": "منات ترکمنستان (۱۹۹۳ تا ۲۰۰۹)",
                "displayName-count-other": "منات ترکمنستان (۱۹۹۳ تا ۲۰۰۹)",
                symbol: "TMM"
            },
            TMT: {
                displayName: "منات ترکمنستان",
                "displayName-count-one": "منات ترکمنستان",
                "displayName-count-other": "منات ترکمنستان",
                symbol: "TMT"
            },
            TND: {
                displayName: "دینار تونس",
                "displayName-count-one": "دینار تونس",
                "displayName-count-other": "دینار تونس",
                symbol: "TND"
            },
            TOP: {
                displayName: "پاآنگای تونگا",
                "displayName-count-one": "پاآنگای تونگا",
                "displayName-count-other": "پاآنگای تونگا",
                symbol: "TOP",
                "symbol-alt-narrow": "T$"
            },
            TPE: {
                displayName: "اسکودوی تیمور",
                symbol: "TPE"
            },
            TRL: {
                displayName: "لیرهٔ ترکیه (۱۹۲۲ تا ۲۰۰۵)",
                "displayName-count-one": "لیرهٔ ترکیه (۱۹۲۲ تا ۲۰۰۵)",
                "displayName-count-other": "لیرهٔ ترکیه (۱۹۲۲ تا ۲۰۰۵)",
                symbol: "TRL"
            },
            TRY: {
                displayName: "لیرهٔ ترکیه",
                "displayName-count-one": "لیرهٔ ترکیه",
                "displayName-count-other": "لیرهٔ ترکیه",
                symbol: "TRY",
                "symbol-alt-narrow": "₺",
                "symbol-alt-variant": "TL"
            },
            TTD: {
                displayName: "دلار ترینیداد و توباگو",
                "displayName-count-one": "دلار ترینیداد و توباگو",
                "displayName-count-other": "دلار ترینیداد و توباگو",
                symbol: "TTD",
                "symbol-alt-narrow": "$"
            },
            TWD: {
                displayName: "دلار جدید تایوان",
                "displayName-count-one": "دلار جدید تایوان",
                "displayName-count-other": "دلار جدید تایوان",
                symbol: "NT$",
                "symbol-alt-narrow": "$"
            },
            TZS: {
                displayName: "شیلینگ تانزانیا",
                "displayName-count-one": "شیلینگ تانزانیا",
                "displayName-count-other": "شیلینگ تانزانیا",
                symbol: "TZS"
            },
            UAH: {
                displayName: "هریونیای اوکراین",
                "displayName-count-one": "هریونیای اوکراین",
                "displayName-count-other": "هریونیای اوکراین",
                symbol: "UAH",
                "symbol-alt-narrow": "₴"
            },
            UAK: {
                displayName: "UAK",
                symbol: "UAK"
            },
            UGS: {
                displayName: "شیلینگ اوگاندا (۱۹۶۶ تا ۱۹۸۷)",
                symbol: "UGS"
            },
            UGX: {
                displayName: "شیلینگ اوگاندا",
                "displayName-count-one": "شیلینگ اوگاندا",
                "displayName-count-other": "شیلینگ اوگاندا",
                symbol: "UGX"
            },
            USD: {
                displayName: "دلار آمریکا",
                "displayName-count-one": "دلار آمریکا",
                "displayName-count-other": "دلار آمریکا",
                symbol: "$",
                "symbol-alt-narrow": "$"
            },
            USN: {
                displayName: "دلار امریکا (روز بعد)",
                "displayName-count-one": "دلار امریکا (روز بعد)",
                "displayName-count-other": "دلار امریکا (روز بعد)",
                symbol: "USN"
            },
            USS: {
                displayName: "دلار امریکا (همان روز)",
                "displayName-count-one": "دلار امریکا (همان روز)",
                "displayName-count-other": "دلار امریکا (همان روز)",
                symbol: "USS"
            },
            UYI: {
                displayName: "UYI",
                symbol: "UYI"
            },
            UYP: {
                displayName: "پزوی اوروگوئه (۱۹۷۵ تا ۱۹۹۳)",
                symbol: "UYP"
            },
            UYU: {
                displayName: "پزوی اوروگوئه",
                "displayName-count-one": "پزوی اوروگوئه",
                "displayName-count-other": "پزوی اوروگوئه",
                symbol: "UYU",
                "symbol-alt-narrow": "$"
            },
            UYW: {
                displayName: "UYW",
                symbol: "UYW"
            },
            UZS: {
                displayName: "سوم ازبکستان",
                "displayName-count-one": "سوم ازبکستان",
                "displayName-count-other": "سوم ازبکستان",
                symbol: "UZS"
            },
            VEB: {
                displayName: "بولیوار ونزوئلا (۱۸۷۱ تا ۲۰۰۸)",
                "displayName-count-one": "بولیوار ونزوئلا (۱۸۷۱ تا ۲۰۰۸)",
                "displayName-count-other": "بولیوار ونزوئلا (۱۸۷۱ تا ۲۰۰۸)",
                symbol: "VEB"
            },
            VED: {
                displayName: "VED",
                symbol: "VED"
            },
            VEF: {
                displayName: "بولیوار ونزوئلا (۲۰۰۸ تا ۲۰۱۸)",
                "displayName-count-one": "بولیوار ونزوئلا (۲۰۰۸ تا ۲۰۱۸)",
                "displayName-count-other": "بولیوار ونزوئلا (۲۰۰۸ تا ۲۰۱۸)",
                symbol: "VEF",
                "symbol-alt-narrow": "Bs"
            },
            VES: {
                displayName: "بولیوار ونزوئلا",
                "displayName-count-one": "بولیوار ونزوئلا",
                "displayName-count-other": "بولیوار ونزوئلا",
                symbol: "VES"
            },
            VND: {
                displayName: "دانگ ویتنام",
                "displayName-count-one": "دانگ ویتنام",
                "displayName-count-other": "دانگ ویتنام",
                symbol: "₫",
                "symbol-alt-narrow": "₫"
            },
            VNN: {
                displayName: "VNN",
                symbol: "VNN"
            },
            VUV: {
                displayName: "واتوی وانوواتو",
                "displayName-count-one": "واتوی وانوواتو",
                "displayName-count-other": "واتوی وانوواتو",
                symbol: "VUV"
            },
            WST: {
                displayName: "تالای ساموا",
                "displayName-count-one": "تالای ساموا",
                "displayName-count-other": "تالای ساموا",
                symbol: "WST"
            },
            XAF: {
                displayName: "فرانک CFA مرکز افریقا",
                "displayName-count-one": "فرانک CFA مرکز افریقا",
                "displayName-count-other": "فرانک CFA مرکز افریقا",
                symbol: "FCFA"
            },
            XAG: {
                displayName: "نقره",
                "displayName-count-one": "اونس تروا نقره",
                "displayName-count-other": "اونس تروا نقره",
                symbol: "XAG"
            },
            XAU: {
                displayName: "طلا",
                "displayName-count-one": "اونس تروا طلا",
                "displayName-count-other": "اونس تروا طلا",
                symbol: "XAU"
            },
            XBA: {
                displayName: "XBA",
                symbol: "XBA"
            },
            XBB: {
                displayName: "XBB",
                symbol: "XBB"
            },
            XBC: {
                displayName: "XBC",
                symbol: "XBC"
            },
            XBD: {
                displayName: "XBD",
                symbol: "XBD"
            },
            XCD: {
                displayName: "دلار شرق کارائیب",
                "displayName-count-one": "دلار شرق کارائیب",
                "displayName-count-other": "دلار شرق کارائیب",
                symbol: "$EC",
                "symbol-alt-narrow": "$"
            },
            XDR: {
                displayName: "XDR",
                symbol: "XDR"
            },
            XEU: {
                displayName: "XEU",
                symbol: "XEU"
            },
            XFO: {
                displayName: "فرانک طلای فرانسه",
                "displayName-count-one": "فرانک طلای فرانسه",
                "displayName-count-other": "فرانک طلای فرانسه",
                symbol: "XFO"
            },
            XFU: {
                displayName: "XFU",
                symbol: "XFU"
            },
            XOF: {
                displayName: "فرانک CFA غرب افریقا",
                "displayName-count-one": "فرانک CFA غرب افریقا",
                "displayName-count-other": "فرانک CFA غرب افریقا",
                symbol: "فرانک CFA"
            },
            XPD: {
                displayName: "پالادیم",
                symbol: "XPD"
            },
            XPF: {
                displayName: "فرانک اقیانوسیه",
                "displayName-count-one": "فرانک اقیانوسیه",
                "displayName-count-other": "فرانک اقیانوسیه",
                symbol: "CFPF"
            },
            XPT: {
                displayName: "پلاتین",
                "displayName-count-one": "اونس تروا پلاتین",
                "displayName-count-other": "اونس تروا پلاتین",
                symbol: "XPT"
            },
            XRE: {
                displayName: "XRE",
                symbol: "XRE"
            },
            XSU: {
                displayName: "XSU",
                symbol: "XSU"
            },
            XTS: {
                displayName: "ارز آزمایشی",
                "displayName-count-one": "واحد ارز آزمایشی",
                "displayName-count-other": "واحد ارز آزمایشی",
                symbol: "XTS"
            },
            XUA: {
                displayName: "XUA",
                symbol: "XUA"
            },
            XXX: {
                displayName: "ارز نامشخص",
                "displayName-count-one": "(ارز نامشخص)",
                "displayName-count-other": "(ارز نامشخص)",
                symbol: "¤"
            },
            YDD: {
                displayName: "دینار یمن",
                "displayName-count-one": "دینار یمن",
                "displayName-count-other": "دینار یمن",
                symbol: "YDD"
            },
            YER: {
                displayName: "ریال یمن",
                "displayName-count-one": "ریال یمن",
                "displayName-count-other": "ریال یمن",
                symbol: "YER"
            },
            YUD: {
                displayName: "YUD",
                symbol: "YUD"
            },
            YUM: {
                displayName: "YUM",
                symbol: "YUM"
            },
            YUN: {
                displayName: "YUN",
                symbol: "YUN"
            },
            YUR: {
                displayName: "YUR",
                symbol: "YUR"
            },
            ZAL: {
                displayName: "ZAL",
                symbol: "ZAL"
            },
            ZAR: {
                displayName: "راند افریقای جنوبی",
                "displayName-count-one": "راند افریقای جنوبی",
                "displayName-count-other": "راند افریقای جنوبی",
                symbol: "ZAR",
                "symbol-alt-narrow": "R"
            },
            ZMK: {
                displayName: "کواچای زامبیا (۱۹۶۸ تا ۲۰۱۲)",
                symbol: "ZMK"
            },
            ZMW: {
                displayName: "کواچای زامبیا",
                "displayName-count-one": "کواچای زامبیا",
                "displayName-count-other": "کواچای زامبیا",
                symbol: "ZMW",
                "symbol-alt-narrow": "ZK"
            },
            ZRN: {
                displayName: "ZRN",
                symbol: "ZRN"
            },
            ZRZ: {
                displayName: "ZRZ",
                symbol: "ZRZ"
            },
            ZWD: {
                displayName: "دلار زیمبابوه (۱۹۸۰ تا ۲۰۰۸)",
                symbol: "ZWD"
            },
            ZWL: {
                displayName: "دلار زیمبابوه (۲۰۰۹)",
                symbol: "ZWL"
            },
            ZWR: {
                displayName: "دلار زیمبابوه (۲۰۰۸)",
                symbol: "ZWR"
            }
        },
        localeCurrency: "IRR"
    },
    calendar: {
        patterns: {
            d: "y/M/d",
            D: "EEEE d MMMM y",
            m: "d LLL",
            M: "d LLLL",
            y: "MMM y",
            Y: "MMMM y",
            F: "EEEE d MMMM y H:mm:ss",
            g: "y/M/d H:mm",
            G: "y/M/d H:mm:ss",
            t: "H:mm",
            T: "H:mm:ss",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1}، ساعت {0}",
            long: "{1}، ساعت {0}",
            medium: "{1}،‏ {0}",
            short: "{1}،‏ {0}",
            availableFormats: {
                Bh: "h B",
                Bhm: "h:mm B",
                Bhms: "h:mm:ss B",
                d: "d",
                E: "ccc",
                EBhm: "E h:mm B",
                EBhms: "E h:mm:ss B",
                Ed: "E d",
                Ehm: "E h:mm a",
                EHm: "E H:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E H:mm:ss",
                Gy: "y G",
                GyMd: "y/M/d GGGGG",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E d MMM y G",
                h: "h a",
                H: "H",
                HHmmZ: "HH:mm (Z)",
                hm: "h:mm a",
                Hm: "H:mm",
                hms: "h:mm:ss a",
                Hms: "H:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "H:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "H:mm v",
                M: "L",
                Md: "M/d",
                MEd: "E M/d",
                MMM: "LLL",
                MMMd: "d LLL",
                MMMEd: "E d LLL",
                MMMMd: "d LLLL",
                MMMMEd: "E d LLLL",
                "MMMMW-count-one": "هفتهٔ Wم LLLL",
                "MMMMW-count-other": "هفتهٔ Wم LLLL",
                mmss: "mm:ss",
                ms: "m:ss",
                y: "y",
                yM: "y/M",
                yMd: "y/M/d",
                yMEd: "E y/M/d",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "E d MMM y",
                yMMMM: "MMMM y",
                yMMMMEEEEd: "EEEE d MMMM y",
                yQQQ: "QQQQ y",
                yQQQQ: "QQQQ y",
                "yw-count-one": "هفتهٔ wم Y",
                "yw-count-other": "هفتهٔ wم Y"
            }
        },
        timeFormats: {
            full: "H:mm:ss (zzzz)",
            long: "H:mm:ss (z)",
            medium: "H:mm:ss",
            short: "H:mm"
        },
        dateFormats: {
            full: "EEEE d MMMM y",
            long: "d MMMM y",
            medium: "d MMM y",
            short: "y/M/d"
        },
        days: {
            format: {
                abbreviated: [
                    "یکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه",
                    "شنبه"
                ],
                narrow: [
                    "ی",
                    "د",
                    "س",
                    "چ",
                    "پ",
                    "ج",
                    "ش"
                ],
                short: [
                    "۱ش",
                    "۲ش",
                    "۳ش",
                    "۴ش",
                    "۵ش",
                    "ج",
                    "ش"
                ],
                wide: [
                    "یکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه",
                    "شنبه"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "یکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه",
                    "شنبه"
                ],
                narrow: [
                    "ی",
                    "د",
                    "س",
                    "چ",
                    "پ",
                    "ج",
                    "ش"
                ],
                short: [
                    "۱ش",
                    "۲ش",
                    "۳ش",
                    "۴ش",
                    "۵ش",
                    "ج",
                    "ش"
                ],
                wide: [
                    "یکشنبه",
                    "دوشنبه",
                    "سه‌شنبه",
                    "چهارشنبه",
                    "پنجشنبه",
                    "جمعه",
                    "شنبه"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "ژانویه",
                    "فوریه",
                    "مارس",
                    "آوریل",
                    "مه",
                    "ژوئن",
                    "ژوئیه",
                    "اوت",
                    "سپتامبر",
                    "اکتبر",
                    "نوامبر",
                    "دسامبر"
                ],
                narrow: [
                    "ژ",
                    "ف",
                    "م",
                    "آ",
                    "م",
                    "ژ",
                    "ژ",
                    "ا",
                    "س",
                    "ا",
                    "ن",
                    "د"
                ],
                wide: [
                    "ژانویهٔ",
                    "فوریهٔ",
                    "مارس",
                    "آوریل",
                    "مهٔ",
                    "ژوئن",
                    "ژوئیهٔ",
                    "اوت",
                    "سپتامبر",
                    "اکتبر",
                    "نوامبر",
                    "دسامبر"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ژانویه",
                    "فوریه",
                    "مارس",
                    "آوریل",
                    "مه",
                    "ژوئن",
                    "ژوئیه",
                    "اوت",
                    "سپتامبر",
                    "اکتبر",
                    "نوامبر",
                    "دسامبر"
                ],
                narrow: [
                    "ژ",
                    "ف",
                    "م",
                    "آ",
                    "م",
                    "ژ",
                    "ژ",
                    "ا",
                    "س",
                    "ا",
                    "ن",
                    "د"
                ],
                wide: [
                    "ژانویه",
                    "فوریه",
                    "مارس",
                    "آوریل",
                    "مه",
                    "ژوئن",
                    "ژوئیه",
                    "اوت",
                    "سپتامبر",
                    "اکتبر",
                    "نوامبر",
                    "دسامبر"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "س‌م۱",
                    "س‌م۲",
                    "س‌م۳",
                    "س‌م۴"
                ],
                narrow: [
                    "۱",
                    "۲",
                    "۳",
                    "۴"
                ],
                wide: [
                    "سه‌ماههٔ اول",
                    "سه‌ماههٔ دوم",
                    "سه‌ماههٔ سوم",
                    "سه‌ماههٔ چهارم"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "س‌م۱",
                    "س‌م۲",
                    "س‌م۳",
                    "س‌م۴"
                ],
                narrow: [
                    "۱",
                    "۲",
                    "۳",
                    "۴"
                ],
                wide: [
                    "سه‌ماههٔ اول",
                    "سه‌ماههٔ دوم",
                    "سه‌ماههٔ سوم",
                    "سه‌ماههٔ چهارم"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    am: "ق.ظ.",
                    pm: "ب.ظ.",
                    morning1: "بامداد",
                    morning2: "صبح",
                    afternoon1: "ظهر",
                    afternoon2: "عصر",
                    night1: "شب",
                    night2: "نیمه‌شب"
                },
                narrow: {
                    am: "ق",
                    pm: "ب",
                    morning1: "ب",
                    morning2: "ص",
                    afternoon1: "ظ",
                    afternoon2: "ع",
                    night1: "ش",
                    night2: "ن"
                },
                wide: {
                    am: "قبل‌ازظهر",
                    pm: "بعدازظهر",
                    morning1: "بامداد",
                    morning2: "صبح",
                    afternoon1: "بعدازظهر",
                    afternoon2: "عصر",
                    night1: "شب",
                    night2: "نیمه‌شب"
                }
            },
            "stand-alone": {
                abbreviated: {
                    am: "ق.ظ.",
                    pm: "ب.ظ.",
                    morning1: "بامداد",
                    morning2: "صبح",
                    afternoon1: "ظهر",
                    afternoon2: "عصر",
                    night1: "شب",
                    night2: "نیمه‌شب"
                },
                narrow: {
                    am: "ق",
                    pm: "ب",
                    morning1: "ب",
                    morning2: "ص",
                    afternoon1: "ظ",
                    afternoon2: "ع",
                    night1: "ش",
                    night2: "ن"
                },
                wide: {
                    am: "قبل‌ازظهر",
                    pm: "بعدازظهر",
                    morning1: "بامداد",
                    morning2: "صبح",
                    afternoon1: "ظهر",
                    afternoon2: "عصر",
                    night1: "شب",
                    night2: "نیمه‌شب"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "قبل از میلاد",
                    "1": "میلادی",
                    "0-alt-variant": "قبل از دوران مشترک",
                    "1-alt-variant": "دوران مشترک"
                },
                abbreviated: {
                    "0": "ق.م.",
                    "1": "م.",
                    "0-alt-variant": "ق.د.م",
                    "1-alt-variant": "د.م."
                },
                narrow: {
                    "0": "ق",
                    "1": "م",
                    "0-alt-variant": "ق.د.م",
                    "1-alt-variant": "د.م."
                }
            }
        },
        gmtFormat: "{0} گرینویچ",
        gmtZeroFormat: "گرینویچ",
        dateFields: {
            era: {
                wide: "دوره",
                short: "دوره",
                narrow: "دوره"
            },
            year: {
                wide: "سال",
                short: "سال",
                narrow: "سال"
            },
            quarter: {
                wide: "سه‌ماهه",
                short: "سه‌ماهه",
                narrow: "سه‌ماهه"
            },
            month: {
                wide: "ماه",
                short: "ماه",
                narrow: "ماه"
            },
            week: {
                wide: "هفته",
                short: "هفته",
                narrow: "هفته"
            },
            weekOfMonth: {
                wide: "هفتهٔ ماه",
                short: "هفتهٔ ماه",
                narrow: "هفتهٔ ماه"
            },
            day: {
                wide: "روز",
                short: "روز",
                narrow: "روز"
            },
            dayOfYear: {
                wide: "روز سال",
                short: "روز سال",
                narrow: "روز سال"
            },
            weekday: {
                wide: "روز هفته",
                short: "روز هفته",
                narrow: "روز هفته"
            },
            weekdayOfMonth: {
                wide: "روز کاری ماه",
                short: "روز کاری ماه",
                narrow: "روز کاری ماه"
            },
            dayperiod: {
                short: "ق.ظ/ب.ظ",
                wide: "ق.ظ/ب.ظ",
                narrow: "ق.ظ/ب.ظ"
            },
            hour: {
                wide: "ساعت",
                short: "ساعت",
                narrow: "ساعت"
            },
            minute: {
                wide: "دقیقه",
                short: "دقیقه",
                narrow: "دقیقه"
            },
            second: {
                wide: "ثانیه",
                short: "ثانیه",
                narrow: "ثانیه"
            },
            zone: {
                wide: "منطقهٔ زمانی",
                short: "منطقهٔ زمانی",
                narrow: "منطقهٔ زمانی"
            },
            millisecond: {
                narrow: "ms",
                short: "میلی‌ثانیه",
                wide: "میلی‌ثانیه"
            }
        }
    },
    firstDay: 6,
    weekendRange: {
        start: 5,
        end: 5
    },
    likelySubtags: {
        fa: "fa-Arab-IR"
    },
    currencyData: {
        IRR: {
            _rounding: "0",
            _digits: "0"
        }
    }
};
export default data;

