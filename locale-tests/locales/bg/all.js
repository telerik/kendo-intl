const data = {
    name: "bg",
    identity: {
        language: "bg"
    },
    territory: "BG",
    numbers: {
        symbols: {
            decimal: ",",
            group: " ",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "-",
            approximatelySign: "~",
            exponential: "E",
            superscriptingExponent: "×",
            perMille: "‰",
            infinity: "∞",
            nan: "NaN",
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
                "n $"
            ],
            groupSize: [
                3
            ],
            "unitPattern-count-one": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "n $",
                "(n $)"
            ],
            groupSize: [
                3
            ]
        },
        currencies: {
            ADP: {
                displayName: "Андорска песета",
                "displayName-count-one": "андорска песета",
                "displayName-count-other": "андорски песети"
            },
            AED: {
                displayName: "Дирхам на Обединените арабски емирства",
                "displayName-count-one": "дирхам на Обединените арабски емирства",
                "displayName-count-other": "дирхама на Обединените арабски емирства",
                symbol: "AED"
            },
            AFA: {
                displayName: "Афганистански афган (1927–2002)",
                "displayName-count-one": "афганистански афган (1927–2002)",
                "displayName-count-other": "афганистански афгана (1927–2002)"
            },
            AFN: {
                displayName: "Афганистански афган",
                "displayName-count-one": "афганистански афган",
                "displayName-count-other": "афганистански афгана",
                symbol: "AFN",
                "symbol-alt-narrow": "Af"
            },
            ALL: {
                displayName: "Албански лек",
                "displayName-count-one": "албански лек",
                "displayName-count-other": "албански лека",
                symbol: "ALL"
            },
            AMD: {
                displayName: "Арменски драм",
                "displayName-count-one": "арменски драм",
                "displayName-count-other": "арменски драма",
                symbol: "AMD",
                "symbol-alt-narrow": "AMD"
            },
            ANG: {
                displayName: "Антилски гулден",
                "displayName-count-one": "антилски гулден",
                "displayName-count-other": "антилски гулдена",
                symbol: "ANG"
            },
            AOA: {
                displayName: "Анголска кванза",
                "displayName-count-one": "анголска кванза",
                "displayName-count-other": "анголски кванзи",
                symbol: "AOA",
                "symbol-alt-narrow": "Kz"
            },
            AOK: {
                displayName: "Анголска кванца (1977–1990)",
                "displayName-count-one": "анголска кванца (1977–1991)",
                "displayName-count-other": "анголски кванци (1977–1991)"
            },
            AON: {
                displayName: "Анголска нова кванца (1990–2000)",
                "displayName-count-one": "анголска нова кванца (1990–2000)",
                "displayName-count-other": "анголски нови кванци (1990–2000)"
            },
            AOR: {
                displayName: "Анголска нова кванца (1995–1999)",
                "displayName-count-one": "анголска нова кванца (1995–1999)",
                "displayName-count-other": "анголски нови кванци (1995–1999)"
            },
            ARA: {
                displayName: "Аржентински австрал",
                "displayName-count-one": "аржентински австрал",
                "displayName-count-other": "аржентински австрала"
            },
            ARP: {
                displayName: "Аржентинско песо (1983–1985)",
                "displayName-count-one": "аржентинско песо (1983–1985)",
                "displayName-count-other": "аржентински песо (1983–1985)"
            },
            ARS: {
                displayName: "Аржентинско песо",
                "displayName-count-one": "аржентинско песо",
                "displayName-count-other": "аржентински песо",
                symbol: "ARS",
                "symbol-alt-narrow": "ARS"
            },
            ATS: {
                displayName: "Австрийски шилинг",
                "displayName-count-one": "австрийски шилинг",
                "displayName-count-other": "австрийски шилинга"
            },
            AUD: {
                displayName: "Австралийски долар",
                "displayName-count-one": "австралийски долар",
                "displayName-count-other": "австралийски долара",
                symbol: "AUD",
                "symbol-alt-narrow": "AUD"
            },
            AWG: {
                displayName: "Арубски флорин",
                "displayName-count-one": "арубски флорин",
                "displayName-count-other": "арубски флорина",
                symbol: "AWG"
            },
            AZM: {
                displayName: "Азербайджански манат (1993–2006)",
                "displayName-count-one": "азербайджански манат (1993–2006)",
                "displayName-count-other": "азербайджански маната (1993–2006)"
            },
            AZN: {
                displayName: "Азербайджански манат",
                "displayName-count-one": "азербайджански манат",
                "displayName-count-other": "азербайджански маната",
                symbol: "AZN",
                "symbol-alt-narrow": "AZN"
            },
            BAD: {
                displayName: "Босна и Херцеговина-динар",
                "displayName-count-one": "Босна и Херцеговина-динар",
                "displayName-count-other": "Босна и Херцеговина-динара"
            },
            BAM: {
                displayName: "Босненска конвертируема марка",
                "displayName-count-one": "босненска конвертируема марка",
                "displayName-count-other": "босненски конвертируеми марки",
                symbol: "BAM",
                "symbol-alt-narrow": "KM"
            },
            BBD: {
                displayName: "Барбадоски долар",
                "displayName-count-one": "барбадоски долар",
                "displayName-count-other": "барбадоски долара",
                symbol: "BBD",
                "symbol-alt-narrow": "BBD"
            },
            BDT: {
                displayName: "Бангладешка така",
                "displayName-count-one": "бангладешка така",
                "displayName-count-other": "бангладешки таки",
                symbol: "BDT",
                "symbol-alt-narrow": "BDT"
            },
            BEC: {
                displayName: "Белгийски франк (конвертируем)",
                "displayName-count-one": "белгийски франк (конвертируем)",
                "displayName-count-other": "белгийски франка (конвертируеми)"
            },
            BEF: {
                displayName: "Белгийски франк",
                "displayName-count-one": "белгийски франк",
                "displayName-count-other": "белгийски франка"
            },
            BEL: {
                displayName: "Белгийски франк (финансов)",
                "displayName-count-one": "белгийски франк (финансов)",
                "displayName-count-other": "белгийски франка (финансови)"
            },
            BGL: {
                displayName: "Български конвертируем лев (1962–1999)",
                "displayName-count-one": "български конвертируем лев",
                "displayName-count-other": "български конвертируеми лева"
            },
            BGN: {
                displayName: "Български лев",
                "displayName-count-one": "български лев",
                "displayName-count-other": "български лева",
                symbol: "лв."
            },
            BHD: {
                displayName: "Бахрейнски динар",
                "displayName-count-one": "бахрейнски динар",
                "displayName-count-other": "бахрейнски динара",
                symbol: "BHD"
            },
            BIF: {
                displayName: "Бурундийски франк",
                "displayName-count-one": "бурундийски франк",
                "displayName-count-other": "бурундийски франка",
                symbol: "BIF"
            },
            BMD: {
                displayName: "Бермудски долар",
                "displayName-count-one": "бермудски долар",
                "displayName-count-other": "бермудски долара",
                symbol: "BMD",
                "symbol-alt-narrow": "BMD"
            },
            BND: {
                displayName: "Брунейски долар",
                "displayName-count-one": "брунейски долар",
                "displayName-count-other": "брунейски долара",
                symbol: "BND",
                "symbol-alt-narrow": "BND"
            },
            BOB: {
                displayName: "Боливийско боливиано",
                "displayName-count-one": "боливийско боливиано",
                "displayName-count-other": "боливийски боливиано",
                symbol: "BOB",
                "symbol-alt-narrow": "Bs"
            },
            BOP: {
                displayName: "Боливийско песо",
                "displayName-count-one": "боливийско песо",
                "displayName-count-other": "боливийски песо"
            },
            BOV: {
                displayName: "Боливийски мвдол",
                "displayName-count-one": "боливийски мвдол",
                "displayName-count-other": "боливийски мвдол"
            },
            BRB: {
                displayName: "Бразилско ново крузейро (1967–1986)",
                "displayName-count-one": "бразилско ново крузейро (1967–1986)",
                "displayName-count-other": "бразилско ново крузейро (1967–1986)"
            },
            BRC: {
                displayName: "Бразилско крозадо"
            },
            BRE: {
                displayName: "Бразилско крузейро (1990–1993)"
            },
            BRL: {
                displayName: "Бразилски реал",
                "displayName-count-one": "бразилски реал",
                "displayName-count-other": "бразилски реала",
                symbol: "BRL",
                "symbol-alt-narrow": "BRL"
            },
            BRN: {
                displayName: "Бразилско ново крозадо"
            },
            BRR: {
                displayName: "Бразилско крузейро"
            },
            BSD: {
                displayName: "Бахамски долар",
                "displayName-count-one": "бахамски долар",
                "displayName-count-other": "бахамски долара",
                symbol: "BSD",
                "symbol-alt-narrow": "BSD"
            },
            BTN: {
                displayName: "Бутански нгултрум",
                "displayName-count-one": "бутански нгултрум",
                "displayName-count-other": "бутански нгултрума",
                symbol: "BTN"
            },
            BUK: {
                displayName: "Бирмански киат"
            },
            BWP: {
                displayName: "Ботсванска пула",
                "displayName-count-one": "ботсванска пула",
                "displayName-count-other": "ботсвански пули",
                symbol: "BWP",
                "symbol-alt-narrow": "P"
            },
            BYB: {
                displayName: "Беларуска нова рубла (1994–1999)",
                "displayName-count-one": "беларуска нова рубла (1994–1999)",
                "displayName-count-other": "беларуски нови рубли (1994–1999)"
            },
            BYN: {
                displayName: "Беларуска рубла",
                "displayName-count-one": "беларуска рубла",
                "displayName-count-other": "беларуски рубли",
                symbol: "BYN"
            },
            BYR: {
                displayName: "Беларуска рубла (2000–2016)",
                "displayName-count-one": "беларуска рубла (2000–2016)",
                "displayName-count-other": "беларуски рубли (2000–2016)",
                symbol: "BYR"
            },
            BZD: {
                displayName: "Белизийски долар",
                "displayName-count-one": "белизийски долар",
                "displayName-count-other": "белизийски долара",
                symbol: "BZD",
                "symbol-alt-narrow": "BZD"
            },
            CAD: {
                displayName: "Канадски долар",
                "displayName-count-one": "канадски долар",
                "displayName-count-other": "канадски долара",
                symbol: "CAD",
                "symbol-alt-narrow": "CAD"
            },
            CDF: {
                displayName: "Конгоански франк",
                "displayName-count-one": "конгоански франк",
                "displayName-count-other": "конгоански франка",
                symbol: "CDF"
            },
            CHE: {
                displayName: "WIR евро"
            },
            CHF: {
                displayName: "Швейцарски франк",
                "displayName-count-one": "швейцарски франк",
                "displayName-count-other": "швейцарски франка",
                symbol: "CHF"
            },
            CHW: {
                displayName: "WIR франк"
            },
            CLF: {
                displayName: "Условна разчетна единица на Чили"
            },
            CLP: {
                displayName: "Чилийско песо",
                "displayName-count-one": "чилийско песо",
                "displayName-count-other": "чилийски песо",
                symbol: "CLP",
                "symbol-alt-narrow": "CLP"
            },
            CNH: {
                displayName: "Китайски юан (офшорен)",
                "displayName-count-one": "китайски юан (офшорен)",
                "displayName-count-other": "китайски юана (офшорни)",
                symbol: "CNH"
            },
            CNY: {
                displayName: "Китайски юан",
                "displayName-count-one": "китайски юан",
                "displayName-count-other": "китайски юана",
                symbol: "CNY",
                "symbol-alt-narrow": "CNY"
            },
            COP: {
                displayName: "Колумбийско песо",
                "displayName-count-one": "колумбийско песо",
                "displayName-count-other": "колумбийски песо",
                symbol: "COP",
                "symbol-alt-narrow": "COP"
            },
            COU: {
                displayName: "Колумбийска единица на реалната стойност"
            },
            CRC: {
                displayName: "Костарикански колон",
                "displayName-count-one": "костарикански колон",
                "displayName-count-other": "костарикански колона",
                symbol: "CRC",
                "symbol-alt-narrow": "CRC"
            },
            CSD: {
                displayName: "Стар сръбски динар"
            },
            CSK: {
                displayName: "Чехословашка конвертируема крона",
                "displayName-count-one": "чехословашка конвертируема крона",
                "displayName-count-other": "чехословашки конвертируеми крони"
            },
            CUC: {
                displayName: "Кубинско конвертируемо песо",
                "displayName-count-one": "кубинско конвертируемо песо",
                "displayName-count-other": "кубински конвертируеми песо",
                symbol: "CUC",
                "symbol-alt-narrow": "$"
            },
            CUP: {
                displayName: "Кубинско песо",
                "displayName-count-one": "кубинско песо",
                "displayName-count-other": "кубински песо",
                symbol: "CUP",
                "symbol-alt-narrow": "CUP"
            },
            CVE: {
                displayName: "Ескудо на Кабо Верде",
                "displayName-count-one": "ескудо на Кабо Верде",
                "displayName-count-other": "ескудо на Кабо Верде",
                symbol: "CVE"
            },
            CYP: {
                displayName: "Кипърска лира",
                "displayName-count-one": "кипърска лира",
                "displayName-count-other": "кипърски лири"
            },
            CZK: {
                displayName: "Чешка крона",
                "displayName-count-one": "чешка крона",
                "displayName-count-other": "чешки крони",
                symbol: "CZK",
                "symbol-alt-narrow": "Kč"
            },
            DDM: {
                displayName: "Източногерманска марка"
            },
            DEM: {
                displayName: "Германска марка",
                "displayName-count-one": "германска марка",
                "displayName-count-other": "германски марки"
            },
            DJF: {
                displayName: "Джибутски франк",
                "displayName-count-one": "джибутски франк",
                "displayName-count-other": "джибутски франка",
                symbol: "DJF"
            },
            DKK: {
                displayName: "Датска крона",
                "displayName-count-one": "датска крона",
                "displayName-count-other": "датски крони",
                symbol: "DKK",
                "symbol-alt-narrow": "kr"
            },
            DOP: {
                displayName: "Доминиканско песо",
                "displayName-count-one": "доминиканско песо",
                "displayName-count-other": "доминикански песо",
                symbol: "DOP",
                "symbol-alt-narrow": "DOP"
            },
            DZD: {
                displayName: "Алжирски динар",
                "displayName-count-one": "алжирски динар",
                "displayName-count-other": "алжирски динара",
                symbol: "DZD"
            },
            ECS: {
                displayName: "Еквадорско сукре",
                "displayName-count-one": "еквадорско сукре",
                "displayName-count-other": "еквадорско сукре"
            },
            ECV: {
                displayName: "Еквадорска банкова единица"
            },
            EEK: {
                displayName: "Естонска крона",
                "displayName-count-one": "естонска крона",
                "displayName-count-other": "естонски крони"
            },
            EGP: {
                displayName: "Египетска лира",
                "displayName-count-one": "египетска лира",
                "displayName-count-other": "египетски лири",
                symbol: "EGP",
                "symbol-alt-narrow": "E£"
            },
            ERN: {
                displayName: "Еритрейска накфа",
                "displayName-count-one": "еритрейска накфа",
                "displayName-count-other": "еритрейски накфи",
                symbol: "ERN"
            },
            ESP: {
                displayName: "Испанска песета",
                "displayName-count-one": "испанска песета",
                "displayName-count-other": "испански песети",
                "symbol-alt-narrow": "₧"
            },
            ETB: {
                displayName: "Етиопски бир",
                "displayName-count-one": "етиопски бир",
                "displayName-count-other": "етиопски бира",
                symbol: "ETB"
            },
            EUR: {
                displayName: "Евро",
                "displayName-count-one": "евро",
                "displayName-count-other": "евро",
                symbol: "€",
                "symbol-alt-narrow": "€"
            },
            FIM: {
                displayName: "Финландска марка",
                "displayName-count-one": "финландска марка",
                "displayName-count-other": "финландски марки"
            },
            FJD: {
                displayName: "Фиджийски долар",
                "displayName-count-one": "фиджийски долар",
                "displayName-count-other": "фиджийски долара",
                symbol: "FJD",
                "symbol-alt-narrow": "FJD"
            },
            FKP: {
                displayName: "Фолкландска лира",
                "displayName-count-one": "фолкландска лира",
                "displayName-count-other": "фолкландски лири",
                symbol: "FKP",
                "symbol-alt-narrow": "FKP"
            },
            FRF: {
                displayName: "Френски франк",
                "displayName-count-one": "френски франк",
                "displayName-count-other": "френски франка"
            },
            GBP: {
                displayName: "Британска лира",
                "displayName-count-one": "британска лира",
                "displayName-count-other": "британски лири",
                symbol: "GBP",
                "symbol-alt-narrow": "£"
            },
            GEK: {
                displayName: "Грузински купон"
            },
            GEL: {
                displayName: "Грузински лари",
                "displayName-count-one": "грузински лари",
                "displayName-count-other": "грузински лари",
                symbol: "GEL",
                "symbol-alt-narrow": "₾"
            },
            GHC: {
                displayName: "Ганайско седи (1979–2007)",
                "displayName-count-one": "ганайско седи (1979–2007)",
                "displayName-count-other": "ганайски седи (1979–2007)"
            },
            GHS: {
                displayName: "Ганайско седи",
                "displayName-count-one": "ганайско седи",
                "displayName-count-other": "ганайски седи",
                symbol: "GHS",
                "symbol-alt-narrow": "GHS"
            },
            GIP: {
                displayName: "Гибралтарска лира",
                "displayName-count-one": "гибралтарска лира",
                "displayName-count-other": "гибралтарски лири",
                symbol: "GIP",
                "symbol-alt-narrow": "GIP"
            },
            GMD: {
                displayName: "Гамбийско даласи",
                "displayName-count-one": "гамбийско даласи",
                "displayName-count-other": "гамбийски даласи",
                symbol: "GMD"
            },
            GNF: {
                displayName: "Гвинейски франк",
                "displayName-count-one": "гвинейски франк",
                "displayName-count-other": "гвинейски франка",
                symbol: "GNF",
                "symbol-alt-narrow": "FG"
            },
            GNS: {
                displayName: "Гвинейска сили"
            },
            GQE: {
                displayName: "Екваториално гвинейско еквеле"
            },
            GRD: {
                displayName: "Гръцка драхма",
                "displayName-count-one": "гръцка драхма",
                "displayName-count-other": "гръцки драхми"
            },
            GTQ: {
                displayName: "Гватемалски кетцал",
                "displayName-count-one": "гватемалски кетцал",
                "displayName-count-other": "гватемалски кетцала",
                symbol: "GTQ",
                "symbol-alt-narrow": "Q"
            },
            GWE: {
                displayName: "Ескудо от Португалска Гвинея"
            },
            GWP: {
                displayName: "Гвинея-Бисау песо"
            },
            GYD: {
                displayName: "Гаянски долар",
                "displayName-count-one": "гаянски долар",
                "displayName-count-other": "гаянски долара",
                symbol: "GYD",
                "symbol-alt-narrow": "GYD"
            },
            HKD: {
                displayName: "Хонконгски долар",
                "displayName-count-one": "хонконгски долар",
                "displayName-count-other": "хонконгски долара",
                symbol: "HKD",
                "symbol-alt-narrow": "HKD"
            },
            HNL: {
                displayName: "Хондураска лемпира",
                "displayName-count-one": "хондураска лемпира",
                "displayName-count-other": "хондураски лемпири",
                symbol: "HNL",
                "symbol-alt-narrow": "L"
            },
            HRD: {
                displayName: "Хърватски динар",
                "displayName-count-one": "хърватски динар",
                "displayName-count-other": "хърватски динара"
            },
            HRK: {
                displayName: "Хърватска куна",
                "displayName-count-one": "хърватска куна",
                "displayName-count-other": "хърватски куни",
                symbol: "HRK",
                "symbol-alt-narrow": "kn"
            },
            HTG: {
                displayName: "Хаитски гурд",
                "displayName-count-one": "хаитски гурд",
                "displayName-count-other": "хаитски гурда",
                symbol: "HTG"
            },
            HUF: {
                displayName: "Унгарски форинт",
                "displayName-count-one": "унгарски форинт",
                "displayName-count-other": "унгарски форинта",
                symbol: "HUF",
                "symbol-alt-narrow": "Ft"
            },
            IDR: {
                displayName: "Индонезийска рупия",
                "displayName-count-one": "индонезийска рупия",
                "displayName-count-other": "индонезийски рупии",
                symbol: "IDR",
                "symbol-alt-narrow": "Rp"
            },
            IEP: {
                displayName: "Ирландска лира",
                "displayName-count-one": "ирландска лира",
                "displayName-count-other": "ирландски лири"
            },
            ILP: {
                displayName: "Израелска лира",
                "displayName-count-one": "израелска лира",
                "displayName-count-other": "израелски лири"
            },
            ILS: {
                displayName: "Израелски нов шекел",
                "displayName-count-one": "израелски нов шекел",
                "displayName-count-other": "израелски нови шекела",
                symbol: "ILS",
                "symbol-alt-narrow": "ILS"
            },
            INR: {
                displayName: "Индийска рупия",
                "displayName-count-one": "индийска рупия",
                "displayName-count-other": "индийски рупии",
                symbol: "INR",
                "symbol-alt-narrow": "INR"
            },
            IQD: {
                displayName: "Иракски динар",
                "displayName-count-one": "иракски динар",
                "displayName-count-other": "иракски динара",
                symbol: "IQD"
            },
            IRR: {
                displayName: "Ирански риал",
                "displayName-count-one": "ирански риал",
                "displayName-count-other": "ирански риала",
                symbol: "IRR"
            },
            ISK: {
                displayName: "Исландска крона",
                "displayName-count-one": "исландска крона",
                "displayName-count-other": "исландски крони",
                symbol: "ISK",
                "symbol-alt-narrow": "kr"
            },
            ITL: {
                displayName: "Италианска лира",
                "displayName-count-one": "италианска лира",
                "displayName-count-other": "италиански лири"
            },
            JMD: {
                displayName: "Ямайски долар",
                "displayName-count-one": "ямайски долар",
                "displayName-count-other": "ямайски долара",
                symbol: "JMD",
                "symbol-alt-narrow": "JMD"
            },
            JOD: {
                displayName: "Йордански динар",
                "displayName-count-one": "йордански динар",
                "displayName-count-other": "йордански динара",
                symbol: "JOD"
            },
            JPY: {
                displayName: "Японска йена",
                "displayName-count-one": "японска йена",
                "displayName-count-other": "японски йени",
                symbol: "JPY",
                "symbol-alt-narrow": "¥"
            },
            KES: {
                displayName: "Кенийски шилинг",
                "displayName-count-one": "кенийски шилинг",
                "displayName-count-other": "кенийски шилинга",
                symbol: "KES"
            },
            KGS: {
                displayName: "Киргизстански сом",
                "displayName-count-one": "киргизстански сом",
                "displayName-count-other": "киргизстански сома",
                symbol: "KGS"
            },
            KHR: {
                displayName: "Камбоджански риел",
                "displayName-count-one": "камбоджански риел",
                "displayName-count-other": "камбоджански риела",
                symbol: "KHR",
                "symbol-alt-narrow": "KHR"
            },
            KMF: {
                displayName: "Коморски франк",
                "displayName-count-one": "коморски франк",
                "displayName-count-other": "коморски франка",
                symbol: "KMF",
                "symbol-alt-narrow": "CF"
            },
            KPW: {
                displayName: "Севернокорейски вон",
                "displayName-count-one": "севернокорейски вон",
                "displayName-count-other": "севернокорейски вона",
                symbol: "KPW",
                "symbol-alt-narrow": "₩"
            },
            KRW: {
                displayName: "Южнокорейски вон",
                "displayName-count-one": "южнокорейски вон",
                "displayName-count-other": "южнокорейски вона",
                symbol: "KRW",
                "symbol-alt-narrow": "KRW"
            },
            KWD: {
                displayName: "Кувейтски динар",
                "displayName-count-one": "кувейтски динар",
                "displayName-count-other": "кувейтски динара",
                symbol: "KWD"
            },
            KYD: {
                displayName: "Кайманов долар",
                "displayName-count-one": "кайманов долар",
                "displayName-count-other": "кайманови долара",
                symbol: "KYD",
                "symbol-alt-narrow": "KYD"
            },
            KZT: {
                displayName: "Казахстанско тенге",
                "displayName-count-one": "казахстанско тенге",
                "displayName-count-other": "казахстански тенге",
                symbol: "KZT",
                "symbol-alt-narrow": "KZT"
            },
            LAK: {
                displayName: "Лаоски кип",
                "displayName-count-one": "лаоски кип",
                "displayName-count-other": "лаоски кипа",
                symbol: "LAK",
                "symbol-alt-narrow": "LAK"
            },
            LBP: {
                displayName: "Ливанска лира",
                "displayName-count-one": "ливанска лира",
                "displayName-count-other": "ливански лири",
                symbol: "LBP",
                "symbol-alt-narrow": "L£"
            },
            LKR: {
                displayName: "Шриланкска рупия",
                "displayName-count-one": "шриланкска рупия",
                "displayName-count-other": "шриланкски рупии",
                symbol: "LKR",
                "symbol-alt-narrow": "Rs"
            },
            LRD: {
                displayName: "Либерийски долар",
                "displayName-count-one": "либерийски долар",
                "displayName-count-other": "либерийски долара",
                symbol: "LRD",
                "symbol-alt-narrow": "LRD"
            },
            LSL: {
                displayName: "Лесотско лоти",
                "displayName-count-one": "лесотско лоти",
                "displayName-count-other": "лесотски лоти"
            },
            LTL: {
                displayName: "Литовски литас",
                "displayName-count-one": "литовски литас",
                "displayName-count-other": "литовски литаса",
                symbol: "LTL",
                "symbol-alt-narrow": "Lt"
            },
            LTT: {
                displayName: "Литовски талон"
            },
            LUF: {
                displayName: "Люксембургски франк",
                "displayName-count-one": "люксембургски франк",
                "displayName-count-other": "люксембургски франка"
            },
            LVL: {
                displayName: "Латвийски лат",
                "displayName-count-one": "латвийски лат",
                "displayName-count-other": "латвийски лата",
                symbol: "LVL",
                "symbol-alt-narrow": "Ls"
            },
            LVR: {
                displayName: "Латвийска рубла",
                "displayName-count-one": "латвийска рубла",
                "displayName-count-other": "латвийски рубли"
            },
            LYD: {
                displayName: "Либийски динар",
                "displayName-count-one": "либийски динар",
                "displayName-count-other": "либийски динара",
                symbol: "LYD"
            },
            MAD: {
                displayName: "Марокански дирхам",
                "displayName-count-one": "марокански дирхам",
                "displayName-count-other": "марокански дирхама",
                symbol: "MAD"
            },
            MAF: {
                displayName: "Марокански франк",
                "displayName-count-one": "марокански франк",
                "displayName-count-other": "марокански франка"
            },
            MDL: {
                displayName: "Молдовска лея",
                "displayName-count-one": "молдовска лея",
                "displayName-count-other": "молдовски леи",
                symbol: "MDL"
            },
            MGA: {
                displayName: "Малгашко ариари",
                "displayName-count-one": "малгашко ариари",
                "displayName-count-other": "малгашки ариари",
                symbol: "MGA",
                "symbol-alt-narrow": "Ar"
            },
            MGF: {
                displayName: "Малгашки франк - Мадагаскар",
                "displayName-count-one": "малгашки франк - Мадагаскар",
                "displayName-count-other": "малгашки франка - Мадагаскар"
            },
            MKD: {
                displayName: "Македонски денар",
                "displayName-count-one": "македонски денар",
                "displayName-count-other": "македонски денара",
                symbol: "MKD"
            },
            MLF: {
                displayName: "Малийски франк"
            },
            MMK: {
                displayName: "Мианмарски киат",
                "displayName-count-one": "мианмарски киат",
                "displayName-count-other": "мианмарски киата",
                symbol: "MMK",
                "symbol-alt-narrow": "K"
            },
            MNT: {
                displayName: "Монголски тугрик",
                "displayName-count-one": "монголски тугрик",
                "displayName-count-other": "монголски тугрика",
                symbol: "MNT",
                "symbol-alt-narrow": "MNT"
            },
            MOP: {
                displayName: "Патака на Макао",
                "displayName-count-one": "патака на Макао",
                "displayName-count-other": "патаки на Макао",
                symbol: "MOP"
            },
            MRO: {
                displayName: "Мавританска угия (1973–2017)",
                "displayName-count-one": "мавританска угия (1973–2017)",
                "displayName-count-other": "мавритански угии (1973–2017)",
                symbol: "MRO"
            },
            MRU: {
                displayName: "Мавританска угия",
                "displayName-count-one": "мавританска угия",
                "displayName-count-other": "мавритански угии",
                symbol: "MRU"
            },
            MTL: {
                displayName: "Малтийска лира",
                "displayName-count-one": "малтийска лира",
                "displayName-count-other": "малтийски лири"
            },
            MUR: {
                displayName: "Маврицийска рупия",
                "displayName-count-one": "маврицийска рупия",
                "displayName-count-other": "маврицийски рупии",
                symbol: "MUR",
                "symbol-alt-narrow": "Rs"
            },
            MVR: {
                displayName: "Малдивска руфия",
                "displayName-count-one": "малдивска руфия",
                "displayName-count-other": "малдивски руфии",
                symbol: "MVR"
            },
            MWK: {
                displayName: "Малавийска куача",
                "displayName-count-one": "малавийска куача",
                "displayName-count-other": "малавийски куачи",
                symbol: "MWK"
            },
            MXN: {
                displayName: "Мексиканско песо",
                "displayName-count-one": "мексиканско песо",
                "displayName-count-other": "мексикански песо",
                symbol: "MXN",
                "symbol-alt-narrow": "MXN"
            },
            MXP: {
                displayName: "Мексиканско сребърно песо (1861–1992)",
                "displayName-count-one": "мексиканско сребърно песо (1861–1992)",
                "displayName-count-other": "мексикански сребърни песо (1861–1992)",
                symbol: "MXP"
            },
            MXV: {
                displayName: "Мексиканска конвертируема единица (UDI)",
                symbol: "MXV"
            },
            MYR: {
                displayName: "Малайзийски рингит",
                "displayName-count-one": "малайзийски рингит",
                "displayName-count-other": "малайзийски рингита",
                symbol: "MYR",
                "symbol-alt-narrow": "RM"
            },
            MZE: {
                displayName: "Мозамбикско ескудо",
                "displayName-count-one": "мозамбикско ескудо",
                "displayName-count-other": "мозамбикски ескудо"
            },
            MZM: {
                displayName: "Мозамбикски метикал (1980–2006)",
                "displayName-count-one": "мозамбикски метикал (1980–2006)",
                "displayName-count-other": "мозамбикски метикала (1980–2006)"
            },
            MZN: {
                displayName: "Мозамбикски метикал",
                "displayName-count-one": "мозамбикски метикал",
                "displayName-count-other": "мозамбикски метикала",
                symbol: "MZN"
            },
            NAD: {
                displayName: "Намибийски долар",
                "displayName-count-one": "намибийски долар",
                "displayName-count-other": "намибийски долара",
                symbol: "NAD",
                "symbol-alt-narrow": "NAD"
            },
            NGN: {
                displayName: "Нигерийска найра",
                "displayName-count-one": "нигерийска найра",
                "displayName-count-other": "нигерийски найри",
                symbol: "NGN",
                "symbol-alt-narrow": "NGN"
            },
            NIC: {
                displayName: "Никарагуанска кордоба (1988–1991)",
                "displayName-count-one": "никарагуанска кордоба (1988–1991)",
                "displayName-count-other": "никарагуански кордоби (1988–1991)",
                symbol: "NIC"
            },
            NIO: {
                displayName: "Никарагуанска кордоба",
                "displayName-count-one": "никарагуанска кордоба",
                "displayName-count-other": "никарагуански кордоби",
                symbol: "NIO",
                "symbol-alt-narrow": "C$"
            },
            NLG: {
                displayName: "Холандски гулден",
                "displayName-count-one": "холандски гулден",
                "displayName-count-other": "холандски гулдена"
            },
            NOK: {
                displayName: "Норвежка крона",
                "displayName-count-one": "норвежка крона",
                "displayName-count-other": "норвежки крони",
                symbol: "NOK",
                "symbol-alt-narrow": "kr"
            },
            NPR: {
                displayName: "Непалска рупия",
                "displayName-count-one": "непалска рупия",
                "displayName-count-other": "непалски рупии",
                symbol: "NPR",
                "symbol-alt-narrow": "Rs"
            },
            NZD: {
                displayName: "Новозеландски долар",
                "displayName-count-one": "новозеландски долар",
                "displayName-count-other": "новозеландски долара",
                symbol: "NZD",
                "symbol-alt-narrow": "NZD"
            },
            OMR: {
                displayName: "Омански риал",
                "displayName-count-one": "омански риал",
                "displayName-count-other": "омански риала",
                symbol: "OMR"
            },
            PAB: {
                displayName: "Панамска балбоа",
                "displayName-count-one": "панамска балбоа",
                "displayName-count-other": "панамски балбоа",
                symbol: "PAB"
            },
            PEI: {
                displayName: "Перуанско инти"
            },
            PEN: {
                displayName: "Перуански сол",
                "displayName-count-one": "перуански сол",
                "displayName-count-other": "перуански сола",
                symbol: "PEN"
            },
            PES: {
                displayName: "Перуански сол (1863–1965)",
                "displayName-count-one": "перуански сол (1863–1965)",
                "displayName-count-other": "перуански сол (1863–1965)"
            },
            PGK: {
                displayName: "Папуа-новогвинейска кина",
                "displayName-count-one": "папуа-новогвинейска кина",
                "displayName-count-other": "папуа-новогвинейски кини",
                symbol: "PGK"
            },
            PHP: {
                displayName: "Филипинско песо",
                "displayName-count-one": "филипинско песо",
                "displayName-count-other": "филипински песо",
                symbol: "PHP",
                "symbol-alt-narrow": "PHP"
            },
            PKR: {
                displayName: "Пакистанска рупия",
                "displayName-count-one": "пакистанска рупия",
                "displayName-count-other": "пакистански рупии",
                symbol: "PKR",
                "symbol-alt-narrow": "Rs"
            },
            PLN: {
                displayName: "Полска злота",
                "displayName-count-one": "полска злота",
                "displayName-count-other": "полски злоти",
                symbol: "PLN",
                "symbol-alt-narrow": "zł"
            },
            PLZ: {
                displayName: "Полска злота (1950–1995)",
                "displayName-count-one": "полска злота (1950–1995)",
                "displayName-count-other": "полски злоти (1950–1995)"
            },
            PTE: {
                displayName: "Португалско ескудо",
                "displayName-count-one": "португалско ескудо",
                "displayName-count-other": "португалски ескудо"
            },
            PYG: {
                displayName: "Парагвайско гуарани",
                "displayName-count-one": "парагвайско гуарани",
                "displayName-count-other": "парагвайски гуарани",
                symbol: "PYG",
                "symbol-alt-narrow": "PYG"
            },
            QAR: {
                displayName: "Катарски риал",
                "displayName-count-one": "катарски риал",
                "displayName-count-other": "катарски риала",
                symbol: "QAR"
            },
            RHD: {
                displayName: "Родезийски долар"
            },
            ROL: {
                displayName: "Стара румънска лея",
                "displayName-count-one": "стара румънска лея",
                "displayName-count-other": "стари румънски леи"
            },
            RON: {
                displayName: "Румънска лея",
                "displayName-count-one": "румънска лея",
                "displayName-count-other": "румънски леи",
                symbol: "RON",
                "symbol-alt-narrow": "RON"
            },
            RSD: {
                displayName: "Сръбски динар",
                "displayName-count-one": "сръбски динар",
                "displayName-count-other": "сръбски динара",
                symbol: "RSD"
            },
            RUB: {
                displayName: "Руска рубла",
                "displayName-count-one": "руска рубла",
                "displayName-count-other": "руски рубли",
                symbol: "RUB",
                "symbol-alt-narrow": "₽"
            },
            RUR: {
                displayName: "Руска рубла (1991–1998)",
                "displayName-count-one": "руска рубла (1991–1998)",
                "displayName-count-other": "руски рубли (1991–1998)"
            },
            RWF: {
                displayName: "Руандски франк",
                "displayName-count-one": "руандски франк",
                "displayName-count-other": "руандски франка",
                symbol: "RWF",
                "symbol-alt-narrow": "RF"
            },
            SAR: {
                displayName: "саудитски риал",
                "displayName-count-one": "саудитски риал",
                "displayName-count-other": "саудитски риала",
                symbol: "SAR"
            },
            SBD: {
                displayName: "Долар на Соломоновите острови",
                "displayName-count-one": "долар на Соломоновите острови",
                "displayName-count-other": "долара на Соломоновите острови",
                symbol: "SBD",
                "symbol-alt-narrow": "SBD"
            },
            SCR: {
                displayName: "Сейшелска рупия",
                "displayName-count-one": "сейшелска рупия",
                "displayName-count-other": "сейшелски рупии",
                symbol: "SCR"
            },
            SDD: {
                displayName: "Судански динар",
                "displayName-count-one": "судански динар",
                "displayName-count-other": "судански динара"
            },
            SDG: {
                displayName: "Суданска лира",
                "displayName-count-one": "суданска лира",
                "displayName-count-other": "судански лири",
                symbol: "SDG"
            },
            SEK: {
                displayName: "Шведска крона",
                "displayName-count-one": "шведска крона",
                "displayName-count-other": "шведски крони",
                symbol: "SEK",
                "symbol-alt-narrow": "kr"
            },
            SGD: {
                displayName: "Сингапурски долар",
                "displayName-count-one": "сингапурски долар",
                "displayName-count-other": "сингапурски долара",
                symbol: "SGD",
                "symbol-alt-narrow": "SGD"
            },
            SHP: {
                displayName: "Лира на Света Елена",
                "displayName-count-one": "лира на Света Елена",
                "displayName-count-other": "лири на Света Елена",
                symbol: "SHP",
                "symbol-alt-narrow": "£"
            },
            SIT: {
                displayName: "Словенски толар",
                "displayName-count-one": "словенски толар",
                "displayName-count-other": "словенски толара"
            },
            SKK: {
                displayName: "Словашка крона",
                "displayName-count-one": "словашка крона",
                "displayName-count-other": "словашки крони"
            },
            SLL: {
                displayName: "Сиералеонско леоне",
                "displayName-count-one": "сиералеонско леоне",
                "displayName-count-other": "сиералеонски леоне",
                symbol: "SLL"
            },
            SOS: {
                displayName: "Сомалийски шилинг",
                "displayName-count-one": "сомалийски шилинг",
                "displayName-count-other": "сомалийски шилинга",
                symbol: "SOS"
            },
            SRD: {
                displayName: "Суринамски долар",
                "displayName-count-one": "суринамски долар",
                "displayName-count-other": "суринамски долара",
                symbol: "SRD",
                "symbol-alt-narrow": "SRD"
            },
            SRG: {
                displayName: "Суринамски гилдер",
                "displayName-count-one": "суринамски гилдер",
                "displayName-count-other": "суринамски гилдера"
            },
            SSP: {
                displayName: "Южносуданска лира",
                "displayName-count-one": "южносуданска лира",
                "displayName-count-other": "южносудански лири",
                symbol: "SSP",
                "symbol-alt-narrow": "SSP"
            },
            STD: {
                displayName: "Добра на Сао Томе и Принсипи (1977–2017)",
                "displayName-count-one": "добра на Сао Томе и Принсипи (1977–2017)",
                "displayName-count-other": "добра на Сао Томе и Принсипи (1977–2017)",
                symbol: "STD"
            },
            STN: {
                displayName: "Добра на Сао Томе и Принсипи",
                "displayName-count-one": "добра на Сао Томе и Принсипи",
                "displayName-count-other": "добра на Сао Томе и Принсипи",
                symbol: "STN",
                "symbol-alt-narrow": "Db"
            },
            SUR: {
                displayName: "Съветска рубла",
                "displayName-count-one": "съветска рубла",
                "displayName-count-other": "съветски рубли"
            },
            SVC: {
                displayName: "Салвадорски колон",
                "displayName-count-one": "салвадорски колон",
                "displayName-count-other": "салвадорски колона",
                symbol: "SVC"
            },
            SYP: {
                displayName: "Сирийска лира",
                "displayName-count-one": "сирийска лира",
                "displayName-count-other": "сирийски лири",
                symbol: "SYP",
                "symbol-alt-narrow": "£"
            },
            SZL: {
                displayName: "Свазилендски лилангени",
                "displayName-count-one": "свазилендски лилангени",
                "displayName-count-other": "свазилендски лилангени",
                symbol: "SZL"
            },
            THB: {
                displayName: "Тайландски бат",
                "displayName-count-one": "тайландски бат",
                "displayName-count-other": "тайландски бата",
                symbol: "THB",
                "symbol-alt-narrow": "฿"
            },
            TJR: {
                displayName: "Таджикистанска рубла",
                "displayName-count-one": "таджикистанска рубла",
                "displayName-count-other": "таджикистански рубли"
            },
            TJS: {
                displayName: "Таджикистански сомони",
                "displayName-count-one": "таджикистански сомони",
                "displayName-count-other": "таджикистански сомони",
                symbol: "TJS"
            },
            TMM: {
                displayName: "Туркменистански манат",
                "displayName-count-one": "туркменистански манат",
                "displayName-count-other": "туркменистански маната"
            },
            TMT: {
                displayName: "Туркменски манат",
                "displayName-count-one": "туркменски манат",
                "displayName-count-other": "туркменски маната",
                symbol: "TMT"
            },
            TND: {
                displayName: "Тунизийски динар",
                "displayName-count-one": "тунизийски динар",
                "displayName-count-other": "тунизийски динара",
                symbol: "TND"
            },
            TOP: {
                displayName: "Тонганска паанга",
                "displayName-count-one": "тонганска паанга",
                "displayName-count-other": "тонгански паанги",
                symbol: "TOP",
                "symbol-alt-narrow": "T$"
            },
            TPE: {
                displayName: "Тиморско ескудо",
                "displayName-count-one": "тиморско ескудо",
                "displayName-count-other": "тиморски ескудо"
            },
            TRL: {
                displayName: "Турска лира (1922–2005)",
                "displayName-count-one": "турска лира (1922–2005)",
                "displayName-count-other": "турски лири (1922–2005)"
            },
            TRY: {
                displayName: "Турска лира",
                "displayName-count-one": "турска лира",
                "displayName-count-other": "турски лири",
                symbol: "TRY",
                "symbol-alt-narrow": "TRY",
                "symbol-alt-variant": "TL"
            },
            TTD: {
                displayName: "Долар на Тринидад и Тобаго",
                "displayName-count-one": "долар на Тринидад и Тобаго",
                "displayName-count-other": "долара на Тринидад и Тобаго",
                symbol: "TTD",
                "symbol-alt-narrow": "TTD"
            },
            TWD: {
                displayName: "Тайвански долар",
                "displayName-count-one": "тайвански долар",
                "displayName-count-other": "тайвански долара",
                symbol: "TWD",
                "symbol-alt-narrow": "TWD"
            },
            TZS: {
                displayName: "Танзанийски шилинг",
                "displayName-count-one": "танзанийски шилинг",
                "displayName-count-other": "танзанийски шилинга",
                symbol: "TZS"
            },
            UAH: {
                displayName: "Украинска гривня",
                "displayName-count-one": "украинска гривня",
                "displayName-count-other": "украински гривни",
                symbol: "UAH",
                "symbol-alt-narrow": "UAH"
            },
            UAK: {
                displayName: "Украински карбованец",
                "displayName-count-one": "украински карбованец",
                "displayName-count-other": "украински карбованеца"
            },
            UGS: {
                displayName: "Угандийски шилинг (1966–1987)",
                "displayName-count-one": "угандийски шилинг (1966–1987)",
                "displayName-count-other": "угандийски шилинга (1966–1987)"
            },
            UGX: {
                displayName: "Угандски шилинг",
                "displayName-count-one": "угандски шилинг",
                "displayName-count-other": "угандски шилинга",
                symbol: "UGX"
            },
            USD: {
                displayName: "Щатски долар",
                "displayName-count-one": "щатски долар",
                "displayName-count-other": "щатски долара",
                symbol: "щ.д.",
                "symbol-alt-narrow": "$"
            },
            USN: {
                symbol: "USN"
            },
            USS: {
                symbol: "USS"
            },
            UYI: {
                displayName: "Уругвайско песо (индекс на инфлацията)"
            },
            UYP: {
                displayName: "Уругвайско песо (1975–1993)",
                "displayName-count-one": "уругвайско песо (1975–1993)",
                "displayName-count-other": "уругвайски песо (1975–1993)"
            },
            UYU: {
                displayName: "Уругвайско песо",
                "displayName-count-one": "уругвайско песо",
                "displayName-count-other": "уругвайски песо",
                symbol: "UYU",
                "symbol-alt-narrow": "UYU"
            },
            UZS: {
                displayName: "Узбекски сум",
                "displayName-count-one": "узбекски сум",
                "displayName-count-other": "узбекски сума",
                symbol: "UZS"
            },
            VEB: {
                displayName: "Венецуелски боливар (1871–2008)",
                "displayName-count-one": "венецуелски боливар (1871–2008)",
                "displayName-count-other": "венецуелски боливара (1871–2008)"
            },
            VEF: {
                displayName: "Венецуелски боливар",
                "displayName-count-one": "венецуелски боливар",
                "displayName-count-other": "венецуелски боливара",
                symbol: "VEF",
                "symbol-alt-narrow": "Bs"
            },
            VES: {
                displayName: "Венецуелски боливар (VES)",
                "displayName-count-one": "венецуелски боливар (VES)",
                "displayName-count-other": "венецуелски боливара (VES)",
                symbol: "VES"
            },
            VND: {
                displayName: "Виетнамски донг",
                "displayName-count-one": "виетнамски донг",
                "displayName-count-other": "виетнамски донга",
                symbol: "VND",
                "symbol-alt-narrow": "VND"
            },
            VUV: {
                displayName: "Вануатско вату",
                "displayName-count-one": "вануатско вату",
                "displayName-count-other": "вануатски вату",
                symbol: "VUV"
            },
            WST: {
                displayName: "Самоанска тала",
                "displayName-count-one": "самоанска тала",
                "displayName-count-other": "самоански тали",
                symbol: "WST"
            },
            XAF: {
                displayName: "Централноафрикански франк",
                "displayName-count-one": "централноафрикански франк",
                "displayName-count-other": "централноафрикански франка",
                symbol: "FCFA"
            },
            XAG: {
                displayName: "Сребро"
            },
            XAU: {
                displayName: "Злато"
            },
            XBA: {
                displayName: "Европейска съставна единица"
            },
            XBB: {
                displayName: "Европейска валутна единица"
            },
            XBC: {
                displayName: "Европейска единица по сметка (XBC)"
            },
            XBD: {
                displayName: "Европейска единица по сметка (XBD)"
            },
            XCD: {
                displayName: "Източнокарибски долар",
                "displayName-count-one": "източнокарибски долар",
                "displayName-count-other": "източнокарибски долара",
                symbol: "XCD",
                "symbol-alt-narrow": "$"
            },
            XDR: {
                displayName: "Специални права на тираж"
            },
            XEU: {
                displayName: "Еку на ЕИО"
            },
            XFO: {
                displayName: "Френски златен франк",
                "displayName-count-one": "френски златен франк",
                "displayName-count-other": "френски златна франка"
            },
            XOF: {
                displayName: "Западноафрикански франк",
                "displayName-count-one": "западноафрикански франк",
                "displayName-count-other": "западноафрикански франка",
                symbol: "F CFA"
            },
            XPD: {
                displayName: "Паладий"
            },
            XPF: {
                displayName: "CFP франк",
                "displayName-count-one": "CFP франк",
                "displayName-count-other": "CFP франка",
                symbol: "CFPF"
            },
            XPT: {
                displayName: "Платина"
            },
            XTS: {
                displayName: "Код резервиран за целите на тестване"
            },
            XXX: {
                displayName: "Непозната валута",
                "displayName-count-one": "(непозната валута)",
                "displayName-count-other": "(непозната валута)",
                symbol: "¤"
            },
            YDD: {
                displayName: "Йеменски динар",
                "displayName-count-one": "йеменски динар",
                "displayName-count-other": "йеменски динара"
            },
            YER: {
                displayName: "Йеменски риал",
                "displayName-count-one": "йеменски риал",
                "displayName-count-other": "йеменски риала",
                symbol: "YER"
            },
            YUD: {
                displayName: "Югославски твърд динар"
            },
            YUM: {
                displayName: "Югославски динар",
                "displayName-count-one": "югославски динар",
                "displayName-count-other": "югославски динара"
            },
            YUN: {
                displayName: "Югославски конвертируем динар",
                "displayName-count-one": "югославски конвертируем динар",
                "displayName-count-other": "югославски конвертируеми динара"
            },
            ZAL: {
                displayName: "Южноафрикански ранд (финансов)",
                "displayName-count-one": "южноафрикански ранд (финансов)",
                "displayName-count-other": "южноафрикански ранда (финансови)"
            },
            ZAR: {
                displayName: "Южноафрикански ранд",
                "displayName-count-one": "южноафрикански ранд",
                "displayName-count-other": "южноафрикански ранда",
                symbol: "ZAR",
                "symbol-alt-narrow": "R"
            },
            ZMK: {
                displayName: "Замбийска квача (1968–2012)",
                "displayName-count-one": "замбийска квача (1968–2012)",
                "displayName-count-other": "замбийски квачи (1968–2012)"
            },
            ZMW: {
                displayName: "Замбийска куача",
                "displayName-count-one": "замбийска куача",
                "displayName-count-other": "замбийски куачи",
                symbol: "ZMW",
                "symbol-alt-narrow": "ZK"
            },
            ZRN: {
                displayName: "Заирско ново зайре",
                "displayName-count-one": "заирско ново зайре",
                "displayName-count-other": "заирски нови зайре"
            },
            ZRZ: {
                displayName: "Заирско зайре",
                "displayName-count-one": "заирско зайре",
                "displayName-count-other": "заирски зайре"
            },
            ZWD: {
                displayName: "Зимбабвийски долар",
                "displayName-count-one": "зимбабвийски долар",
                "displayName-count-other": "зимбабвийски долара"
            },
            ZWL: {
                displayName: "Зимбабвийски долар (2009)",
                "displayName-count-one": "зимбабвийски долар (2009)",
                "displayName-count-other": "зимбабвийски долара (2009)"
            }
        },
        localeCurrency: "BGN"
    },
    calendar: {
        patterns: {
            d: "d.MM.y 'г'.",
            D: "EEEE, d MMMM y 'г'.",
            m: "d.MM",
            M: "d MMMM",
            y: "MM.y 'г'.",
            Y: "MMMM y 'г'.",
            F: "EEEE, d MMMM y 'г'. H:mm:ss 'ч'.",
            g: "d.MM.y 'г'. H:mm 'ч'.",
            G: "d.MM.y 'г'. H:mm:ss 'ч'.",
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
                EHms: "E, HH:mm:ss 'ч'.",
                Gy: "y 'г'. G",
                GyMd: "dd.MM.y 'г'. GGGGG",
                GyMMM: "MM.y 'г'. G",
                GyMMMd: "d.MM.y 'г'. G",
                GyMMMEd: "E, d.MM.y 'г'. G",
                GyMMMM: "MMMM y 'г'. G",
                GyMMMMd: "d MMMM y 'г'. G",
                GyMMMMEd: "E, d MMMM y 'г'. G",
                h: "h 'ч'. a",
                H: "HH 'ч'.",
                hm: "h:mm 'ч'. a",
                Hm: "HH:mm 'ч'.",
                hms: "h:mm:ss 'ч'. a",
                Hms: "HH:mm:ss 'ч'.",
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
                "MMMMW-count-one": "'седмица' W 'от' MMMM",
                "MMMMW-count-other": "'седмица' W 'от' MMMM",
                ms: "m:ss",
                y: "y 'г'.",
                yM: "MM.y 'г'.",
                yMd: "d.MM.y 'г'.",
                yMEd: "E, d.MM.y 'г'.",
                yMMM: "MM.y 'г'.",
                yMMMd: "d.MM.y 'г'.",
                yMMMEd: "E, d.MM.y 'г'.",
                yMMMM: "MMMM y 'г'.",
                yMMMMd: "d MMMM y 'г'.",
                yMMMMEd: "E, d MMMM y 'г'.",
                yQQQ: "QQQ y 'г'.",
                yQQQQ: "QQQQ y 'г'.",
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
            full: "EEEE, d MMMM y 'г'.",
            long: "d MMMM y 'г'.",
            medium: "d.MM.y 'г'.",
            short: "d.MM.yy 'г'."
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
                    morning2: "на обяд",
                    afternoon1: "следобед",
                    evening1: "вечерта",
                    night1: "през нощта"
                },
                narrow: {
                    midnight: "полунощ",
                    am: "am",
                    pm: "pm",
                    morning1: "сутринта",
                    morning2: "на обяд",
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
                    morning2: "на обяд",
                    afternoon1: "следобед",
                    evening1: "вечерта",
                    night1: "през нощта"
                },
                narrow: {
                    midnight: "полунощ",
                    am: "am",
                    pm: "pm",
                    morning1: "сутринта",
                    morning2: "на обяд",
                    afternoon1: "следобед",
                    evening1: "вечерта",
                    night1: "през нощта"
                },
                wide: {
                    midnight: "полунощ",
                    am: "am",
                    pm: "pm",
                    morning1: "сутринта",
                    morning2: "на обяд",
                    afternoon1: "следобед",
                    evening1: "вечерта",
                    night1: "през нощта"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "преди Христа",
                    "1": "след Христа",
                    "0-alt-variant": "преди новата ера",
                    "1-alt-variant": "след новата ера"
                },
                abbreviated: {
                    "0": "пр.Хр.",
                    "1": "сл.Хр.",
                    "0-alt-variant": "пр.н.е.",
                    "1-alt-variant": "сл.н.е."
                },
                narrow: {
                    "0": "пр.Хр.",
                    "1": "сл.Хр.",
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
                short: "год.",
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
                short: "седм. от мес.",
                narrow: "седм. от мес."
            },
            day: {
                wide: "ден",
                short: "д",
                narrow: "д"
            },
            dayOfYear: {
                wide: "ден от годината",
                short: "ден от г.",
                narrow: "ден от г."
            },
            weekday: {
                wide: "ден от седмицата",
                short: "ден от седм.",
                narrow: "ден от седм."
            },
            weekdayOfMonth: {
                wide: "работен ден от месеца",
                short: "раб. ден от мес.",
                narrow: "раб. ден от мес."
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
                short: "сек",
                narrow: "сек"
            },
            zone: {
                wide: "часова зона",
                short: "час. зона",
                narrow: "час. зона"
            },
            millisecond: {
                narrow: "мсек",
                short: "мсек",
                wide: "милисекунда"
            }
        }
    },
    firstDay: 1,
    weekendRange: {
        start: 6,
        end: 0
    },
    likelySubtags: {
        bg: "bg-Cyrl-BG"
    }
};
export default data;

