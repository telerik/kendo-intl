const data = {
    name: "sr-Cyrl-ME",
    identity: {
        language: "sr",
        script: "Cyrl",
        territory: "ME"
    },
    territory: "ME",
    numbers: {
        symbols: {
            decimal: ",",
            group: ".",
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
            "unitPattern-count-few": "n $",
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
                displayName: "Андорска пезета",
                "displayName-count-one": "андорска пезета",
                "displayName-count-few": "андорске пезете",
                "displayName-count-other": "андорске пезете",
                symbol: "ADP"
            },
            AED: {
                displayName: "дирхам УАЕ",
                "displayName-count-one": "дирхам УАЕ",
                "displayName-count-few": "дирхама УАЕ",
                "displayName-count-other": "дирхама УАЕ",
                symbol: "AED"
            },
            AFA: {
                displayName: "Авганистански авгани (1927–2002)",
                "displayName-count-one": "aвганистански авгани (1927–2002)",
                "displayName-count-few": "авганистанска авгана (1927–2002)",
                "displayName-count-other": "авганистанских авгана (1927–2002)",
                symbol: "AFA"
            },
            AFN: {
                displayName: "авганистански авгани",
                "displayName-count-one": "aвганистански авгани",
                "displayName-count-few": "авганистанска авгана",
                "displayName-count-other": "авганистанских авгана",
                symbol: "AFN",
                "symbol-alt-narrow": "؋"
            },
            ALK: {
                displayName: "ALK",
                symbol: "ALK"
            },
            ALL: {
                displayName: "албански лек",
                "displayName-count-one": "албански лек",
                "displayName-count-few": "албанска лека",
                "displayName-count-other": "албанских лека",
                symbol: "ALL"
            },
            AMD: {
                displayName: "јерменски драм",
                "displayName-count-one": "јерменски драм",
                "displayName-count-few": "јерменска драма",
                "displayName-count-other": "јерменска драма",
                symbol: "AMD",
                "symbol-alt-narrow": "֏"
            },
            ANG: {
                displayName: "холандскоантилски гулден",
                "displayName-count-one": "холандскоантилски гулден",
                "displayName-count-few": "холандскоантилска гулдена",
                "displayName-count-other": "холандскоантилских гулдена",
                symbol: "ANG"
            },
            AOA: {
                displayName: "анголска кванза",
                "displayName-count-one": "анголска кванза",
                "displayName-count-few": "анголске кванзе",
                "displayName-count-other": "анголских кванзи",
                symbol: "AOA",
                "symbol-alt-narrow": "Kz"
            },
            AOK: {
                displayName: "Анголијска кванза (1977–1990)",
                "displayName-count-one": "анголијска кванза (1977–1990)",
                "displayName-count-few": "анголијске кванзе (1977–1990)",
                "displayName-count-other": "анголијских кванзи (1977–1990)",
                symbol: "AOK"
            },
            AON: {
                displayName: "Анголијска нова кванза (1990–2000)",
                "displayName-count-one": "анголијска нова кванза",
                "displayName-count-few": "анголијске нове кванзе",
                "displayName-count-other": "анголијских нових кванзи",
                symbol: "AON"
            },
            AOR: {
                displayName: "Анголијска кванза реађустадо (1995–1999)",
                "displayName-count-one": "анголијска кванза реађустадо (1995–1999)",
                "displayName-count-few": "анголијске кванзе реађустадо (1995–1999)",
                "displayName-count-other": "анголијских кванзи реађустадо (1995–1999)",
                symbol: "AOR"
            },
            ARA: {
                displayName: "Аргентински аустрал",
                "displayName-count-one": "аргентински аустрал",
                "displayName-count-few": "аргентинска аустрала",
                "displayName-count-other": "аргентинских аустрала",
                symbol: "ARA"
            },
            ARL: {
                displayName: "ARL",
                symbol: "ARL"
            },
            ARM: {
                displayName: "ARM",
                symbol: "ARM"
            },
            ARP: {
                displayName: "Аргентински пезо (1983–1985)",
                "displayName-count-one": "аргентински пезо (1983–1985)",
                "displayName-count-few": "аргентинска пезоса (1983–1985)",
                "displayName-count-other": "аргентинских пезоса (1983–1985)",
                symbol: "ARP"
            },
            ARS: {
                displayName: "аргентински пезос",
                "displayName-count-one": "аргентински пезос",
                "displayName-count-few": "аргентинска пезоса",
                "displayName-count-other": "аргентинских пезоса",
                symbol: "ARS",
                "symbol-alt-narrow": "$"
            },
            ATS: {
                displayName: "Аустријски шилинг",
                "displayName-count-one": "аустријски шилинг",
                "displayName-count-few": "аустријска шилинга",
                "displayName-count-other": "аустријских шилинга",
                symbol: "ATS"
            },
            AUD: {
                displayName: "аустралијски долар",
                "displayName-count-one": "аустралијски долар",
                "displayName-count-few": "аустралијска долара",
                "displayName-count-other": "аустралијских долара",
                symbol: "AUD",
                "symbol-alt-narrow": "$"
            },
            AWG: {
                displayName: "арубански флорин",
                "displayName-count-one": "арубански флорин",
                "displayName-count-few": "арубанска флорина",
                "displayName-count-other": "арубанских флорина",
                symbol: "AWG"
            },
            AZM: {
                displayName: "Азербејџански манат (1993–2006)",
                "displayName-count-one": "азербејџански манат (1993–2006)",
                "displayName-count-few": "азербејџанска маната (1993–2006)",
                "displayName-count-other": "азербејџанских маната (1993–2006)",
                symbol: "AZM"
            },
            AZN: {
                displayName: "азербејџански манат",
                "displayName-count-one": "азербејџански манат",
                "displayName-count-few": "азербејџанска маната",
                "displayName-count-other": "азербејџанских маната",
                symbol: "AZN",
                "symbol-alt-narrow": "₼"
            },
            BAD: {
                displayName: "Босанско-Херцеговачки динар",
                "displayName-count-one": "босанско-херцеговачки динар",
                "displayName-count-few": "босанско-херцеговачка динара",
                "displayName-count-other": "босанско-херцеговачких динара",
                symbol: "BAD"
            },
            BAM: {
                displayName: "босанско-херцеговачка конвертибилна марка",
                "displayName-count-one": "босанско-херцеговачка конвертибилна марка",
                "displayName-count-few": "босанско-херцеговачке конвертибилне маркe",
                "displayName-count-other": "босанско-херцеговачких конвертибилних марака",
                symbol: "КМ",
                "symbol-alt-narrow": "KM"
            },
            BAN: {
                displayName: "BAN",
                symbol: "BAN"
            },
            BBD: {
                displayName: "барбадошки долар",
                "displayName-count-one": "барбадошки долар",
                "displayName-count-few": "барбадошка долара",
                "displayName-count-other": "барбадошких долара",
                symbol: "BBD",
                "symbol-alt-narrow": "$"
            },
            BDT: {
                displayName: "бангладешка така",
                "displayName-count-one": "бангладешка така",
                "displayName-count-few": "бангладешке таке",
                "displayName-count-other": "бангладешких така",
                symbol: "BDT",
                "symbol-alt-narrow": "৳"
            },
            BEC: {
                displayName: "Белгијски франак (конвертибилни)",
                "displayName-count-one": "белгијски франак (конвертибилни)",
                "displayName-count-few": "белгијска франка (конвертибилна)",
                "displayName-count-other": "белгијских франака (конвертибилних)",
                symbol: "BEC"
            },
            BEF: {
                displayName: "Белгијски франак",
                "displayName-count-one": "белгијски франак",
                "displayName-count-few": "белгијска франка",
                "displayName-count-other": "белгијских франака",
                symbol: "BEF"
            },
            BEL: {
                displayName: "Белгијски франак (финансијски)",
                "displayName-count-one": "белгијски франак (финансијски)",
                "displayName-count-few": "белгијска франка (финансијска)",
                "displayName-count-other": "белгијских франака (финансијских)",
                symbol: "BEL"
            },
            BGL: {
                displayName: "Бугарски тврди лев",
                "displayName-count-one": "бугарски тврди лев",
                "displayName-count-few": "бугарска тврда лева",
                "displayName-count-other": "бугарских тврдих лева",
                symbol: "BGL"
            },
            BGM: {
                displayName: "BGM",
                symbol: "BGM"
            },
            BGN: {
                displayName: "бугарски лев",
                "displayName-count-one": "бугарски лев",
                "displayName-count-few": "бугарска лева",
                "displayName-count-other": "бугарских лева",
                symbol: "BGN"
            },
            BGO: {
                displayName: "BGO",
                symbol: "BGO"
            },
            BHD: {
                displayName: "бахреински динар",
                "displayName-count-one": "бахреински динар",
                "displayName-count-few": "бахреинскa динара",
                "displayName-count-other": "бахреинских динара",
                symbol: "BHD"
            },
            BIF: {
                displayName: "бурундски франак",
                "displayName-count-one": "бурундски франак",
                "displayName-count-few": "бурундска франка",
                "displayName-count-other": "бурундских франакa",
                symbol: "BIF"
            },
            BMD: {
                displayName: "бермудски долар",
                "displayName-count-one": "бермудски долар",
                "displayName-count-few": "бермудска долара",
                "displayName-count-other": "бермудских долара",
                symbol: "BMD",
                "symbol-alt-narrow": "$"
            },
            BND: {
                displayName: "брунејски долар",
                "displayName-count-one": "брунејски долар",
                "displayName-count-few": "брунејска долара",
                "displayName-count-other": "брунејских долара",
                symbol: "BND",
                "symbol-alt-narrow": "$"
            },
            BOB: {
                displayName: "боливијски боливијано",
                "displayName-count-one": "боливијски боливијано",
                "displayName-count-few": "боливијска боливијана",
                "displayName-count-other": "боливијских боливијана",
                symbol: "BOB",
                "symbol-alt-narrow": "Bs"
            },
            BOL: {
                displayName: "BOL",
                symbol: "BOL"
            },
            BOP: {
                displayName: "Боливијски пезо",
                "displayName-count-one": "боливијски пезо",
                "displayName-count-few": "боливијска пезоса",
                "displayName-count-other": "боливијских пезоса",
                symbol: "BOP"
            },
            BOV: {
                displayName: "Боливијски мвдол",
                "displayName-count-one": "боливијски мвдол",
                "displayName-count-few": "боливијска мвдола",
                "displayName-count-other": "боливијских мвдола",
                symbol: "BOV"
            },
            BRB: {
                displayName: "Бразилски нови крузеиро (1967–1986)",
                "displayName-count-one": "бразилски нови крузеиро (1967–1986)",
                "displayName-count-few": "бразилска нова крузеира (1967–1986)",
                "displayName-count-other": "бразилских нових крузеира (1967–1986)",
                symbol: "BRB"
            },
            BRC: {
                displayName: "Бразилијски крузадо",
                "displayName-count-one": "бразилски крузадос",
                "displayName-count-few": "бразилска крузадоса",
                "displayName-count-other": "бразилских крузадоса",
                symbol: "BRC"
            },
            BRE: {
                displayName: "Бразилски крузеиро (1990–1993)",
                "displayName-count-one": "бразилски крузеиро (1990–1993)",
                "displayName-count-few": "бразилска крузеира (1990–1993)",
                "displayName-count-other": "бразилских крузеира (1990–1993)",
                symbol: "BRE"
            },
            BRL: {
                displayName: "бразилски реал",
                "displayName-count-one": "бразилски реал",
                "displayName-count-few": "бразилска реала",
                "displayName-count-other": "бразилских реала",
                symbol: "R$",
                "symbol-alt-narrow": "R$"
            },
            BRN: {
                displayName: "Бразилијски нови крузадо",
                "displayName-count-one": "бразилски нови крузадо",
                "displayName-count-few": "бразилска нова крузада",
                "displayName-count-other": "бразилских нових крузада",
                symbol: "BRN"
            },
            BRR: {
                displayName: "Бразилски крузеиро",
                "displayName-count-one": "бразилски крузеиро",
                "displayName-count-few": "бразилска крузеира",
                "displayName-count-other": "бразилских крузеира",
                symbol: "BRR"
            },
            BRZ: {
                displayName: "BRZ",
                symbol: "BRZ"
            },
            BSD: {
                displayName: "бахамски долар",
                "displayName-count-one": "бахамски долар",
                "displayName-count-few": "бахамска долара",
                "displayName-count-other": "бахамских долара",
                symbol: "BSD",
                "symbol-alt-narrow": "$"
            },
            BTN: {
                displayName: "бутански нгултрум",
                "displayName-count-one": "бутански нгултрум",
                "displayName-count-few": "бутанска нгултрума",
                "displayName-count-other": "бутанских нгултрума",
                symbol: "BTN"
            },
            BUK: {
                displayName: "Бурмански кјат",
                "displayName-count-one": "бурмански кјат",
                "displayName-count-few": "бурманска кјата",
                "displayName-count-other": "бурманских кјата",
                symbol: "BUK"
            },
            BWP: {
                displayName: "боцванска пула",
                "displayName-count-one": "боцванска пула",
                "displayName-count-few": "боцванске пуле",
                "displayName-count-other": "боцванских пула",
                symbol: "BWP",
                "symbol-alt-narrow": "P"
            },
            BYB: {
                displayName: "Белоруска нова рубља (1994–1999)",
                "displayName-count-one": "белоруска нова рубља (1994–1999)",
                "displayName-count-few": "белоруске нове рубља (1994–1999)",
                "displayName-count-other": "белоруских нових рубљи (1994–1999)",
                symbol: "BYB"
            },
            BYN: {
                displayName: "белоруска рубља",
                "displayName-count-one": "белоруска рубља",
                "displayName-count-few": "белоруске рубље",
                "displayName-count-other": "белоруских рубљи",
                symbol: "BYN",
                "symbol-alt-narrow": "р."
            },
            BYR: {
                displayName: "Белоруска рубља (2000–2016)",
                "displayName-count-one": "белоруска рубља (2000–2016)",
                "displayName-count-few": "белоруске рубље (2000–2016)",
                "displayName-count-other": "белоруских рубљи (2000–2016)",
                symbol: "BYR"
            },
            BZD: {
                displayName: "белиски долар",
                "displayName-count-one": "белиски долар",
                "displayName-count-few": "белиска долара",
                "displayName-count-other": "белиских долара",
                symbol: "BZD",
                "symbol-alt-narrow": "$"
            },
            CAD: {
                displayName: "канадски долар",
                "displayName-count-one": "канадски долар",
                "displayName-count-few": "канадска долара",
                "displayName-count-other": "канадских долара",
                symbol: "CA$",
                "symbol-alt-narrow": "$"
            },
            CDF: {
                displayName: "конгоански франак",
                "displayName-count-one": "конгоански франак",
                "displayName-count-few": "конгоанска франка",
                "displayName-count-other": "конгоанских франака",
                symbol: "CDF"
            },
            CHE: {
                displayName: "WIR евро",
                "displayName-count-one": "WIR евро",
                "displayName-count-few": "WIR евра",
                "displayName-count-other": "WIR евра",
                symbol: "CHE"
            },
            CHF: {
                displayName: "швајцарски франак",
                "displayName-count-one": "швајцарски франак",
                "displayName-count-few": "швајцарска франка",
                "displayName-count-other": "швајцарских франака",
                symbol: "CHF"
            },
            CHW: {
                displayName: "WIR франак",
                "displayName-count-one": "WIR франак",
                "displayName-count-few": "WIR франка",
                "displayName-count-other": "WIR франака",
                symbol: "CHW"
            },
            CLE: {
                displayName: "CLE",
                symbol: "CLE"
            },
            CLF: {
                displayName: "Чилеовски унидадес се фоменто",
                "displayName-count-one": "чилеански унидадес де фоменто",
                "displayName-count-few": "чилеанска унидадес де фомента",
                "displayName-count-other": "чилеански унидадеси де фоменто",
                symbol: "CLF"
            },
            CLP: {
                displayName: "чилеански пезос",
                "displayName-count-one": "чилеански пезос",
                "displayName-count-few": "чилеанска пезоса",
                "displayName-count-other": "чилеанских пезоса",
                symbol: "CLP",
                "symbol-alt-narrow": "$"
            },
            CNH: {
                displayName: "кинески јуан (острвски)",
                "displayName-count-one": "кинески јуан (острвски)",
                "displayName-count-few": "кинеска јуана (острвска)",
                "displayName-count-other": "кинеских јуана (острвских)",
                symbol: "CNH"
            },
            CNX: {
                displayName: "CNX",
                symbol: "CNX"
            },
            CNY: {
                displayName: "кинески јуан",
                "displayName-count-one": "кинески јуан",
                "displayName-count-few": "кинеска јуана",
                "displayName-count-other": "кинеских јуана",
                symbol: "CN¥",
                "symbol-alt-narrow": "¥"
            },
            COP: {
                displayName: "колумбијски пезос",
                "displayName-count-one": "колумбијски пезос",
                "displayName-count-few": "колумбијска пезоса",
                "displayName-count-other": "колумбијских пезоса",
                symbol: "COP",
                "symbol-alt-narrow": "$"
            },
            COU: {
                displayName: "Унидад де валоршки реал",
                "displayName-count-one": "унидад де валоршки реал",
                "displayName-count-few": "нидад де валор реала",
                "displayName-count-other": "унидад де валоршких реала",
                symbol: "COU"
            },
            CRC: {
                displayName: "костарикански колон",
                "displayName-count-one": "костарикански колон",
                "displayName-count-few": "костариканска колона",
                "displayName-count-other": "костариканских колона",
                symbol: "CRC",
                "symbol-alt-narrow": "₡"
            },
            CSD: {
                displayName: "Стари српски динар",
                "displayName-count-one": "стари српски динар",
                "displayName-count-few": "стара српска динара",
                "displayName-count-other": "старих српских динара",
                symbol: "CSD"
            },
            CSK: {
                displayName: "Чехословачка тврда круна",
                "displayName-count-one": "чехословачка тврда круна",
                "displayName-count-few": "чехословачке тврде круне",
                "displayName-count-other": "чехословачких тврдих круна",
                symbol: "CSK"
            },
            CUC: {
                displayName: "кубански конвертибилни пезос",
                "displayName-count-one": "кубански конвертибилни пезос",
                "displayName-count-few": "кубанска конвертибилна пезоса",
                "displayName-count-other": "кубанских конвертибилних пезоса",
                symbol: "CUC",
                "symbol-alt-narrow": "$"
            },
            CUP: {
                displayName: "кубански пезос",
                "displayName-count-one": "кубански пезос",
                "displayName-count-few": "кубанска пезоса",
                "displayName-count-other": "кубанских пезоса",
                symbol: "CUP",
                "symbol-alt-narrow": "$"
            },
            CVE: {
                displayName: "зеленортски ескудо",
                "displayName-count-one": "зеленортски ескудо",
                "displayName-count-few": "зеленортска ескуда",
                "displayName-count-other": "зеленортских ескуда",
                symbol: "CVE"
            },
            CYP: {
                displayName: "Кипарска фунта",
                "displayName-count-one": "кипарска фунта",
                "displayName-count-few": "кипарске фунте",
                "displayName-count-other": "кипарских фунти",
                symbol: "CYP"
            },
            CZK: {
                displayName: "чешка круна",
                "displayName-count-one": "чешка круна",
                "displayName-count-few": "чешке круне",
                "displayName-count-other": "чешких крунa",
                symbol: "CZK",
                "symbol-alt-narrow": "Kč"
            },
            DDM: {
                displayName: "Источно-немачка марка",
                "displayName-count-one": "источно-немачка марка",
                "displayName-count-few": "источно-немачке марке",
                "displayName-count-other": "источно-немачких марака",
                symbol: "DDM"
            },
            DEM: {
                displayName: "Немачка марка",
                "displayName-count-one": "немачка марка",
                "displayName-count-few": "немачке марке",
                "displayName-count-other": "немачких марака",
                symbol: "DEM"
            },
            DJF: {
                displayName: "џибутски франак",
                "displayName-count-one": "џибутски франак",
                "displayName-count-few": "џибутска франка",
                "displayName-count-other": "џибутских франака",
                symbol: "DJF"
            },
            DKK: {
                displayName: "данска круна",
                "displayName-count-one": "данска круна",
                "displayName-count-few": "данске круне",
                "displayName-count-other": "данских круна",
                symbol: "DKK",
                "symbol-alt-narrow": "kr"
            },
            DOP: {
                displayName: "доминикански пезос",
                "displayName-count-one": "доминикански пезос",
                "displayName-count-few": "доминиканска пезоса",
                "displayName-count-other": "доминиканских пезоса",
                symbol: "DOP",
                "symbol-alt-narrow": "$"
            },
            DZD: {
                displayName: "алжирски динар",
                "displayName-count-one": "алжирски динар",
                "displayName-count-few": "алжирска динара",
                "displayName-count-other": "алжирских динара",
                symbol: "DZD"
            },
            ECS: {
                displayName: "Еквадорски сакр",
                "displayName-count-one": "еквадорски сакр",
                "displayName-count-few": "еквадорска сакра",
                "displayName-count-other": "еквадорских сакра",
                symbol: "ECS"
            },
            ECV: {
                displayName: "Еквадорски унидад де валор константе",
                "displayName-count-one": "еквадорски унидад де валор константе",
                "displayName-count-few": "еквадорска унидад де валор константа",
                "displayName-count-other": "еквадорских унидад де валор константа",
                symbol: "ECV"
            },
            EEK: {
                displayName: "Естонска кроон",
                "displayName-count-one": "естонска круна",
                "displayName-count-few": "естонске круне",
                "displayName-count-other": "естонских круна",
                symbol: "EEK"
            },
            EGP: {
                displayName: "египатска фунта",
                "displayName-count-one": "египатска фунта",
                "displayName-count-few": "египатске фунте",
                "displayName-count-other": "египатских фунти",
                symbol: "EGP",
                "symbol-alt-narrow": "E£"
            },
            ERN: {
                displayName: "еритрејска накфа",
                "displayName-count-one": "еритрејска накфа",
                "displayName-count-few": "еритрејске накфе",
                "displayName-count-other": "еритрејских накфи",
                symbol: "ERN"
            },
            ESA: {
                displayName: "Шпанска пезета (рачун)",
                "displayName-count-one": "шпанска пезета (А рачун)",
                "displayName-count-few": "шпанске пезете (А рачун)",
                "displayName-count-other": "шпанских пезета (А рачун)",
                symbol: "ESA"
            },
            ESB: {
                displayName: "Шпанска пезета (конвертибилнирачун)",
                "displayName-count-one": "шпанска пезета (конвертибилан рачун)",
                "displayName-count-few": "шпанске пезете (конвертибилан рачун)",
                "displayName-count-other": "шпанских пезета (конвертибилан рачун)",
                symbol: "ESB"
            },
            ESP: {
                displayName: "Шпанска пезета",
                "displayName-count-one": "шпанска пезета",
                "displayName-count-few": "шпанска пезета",
                "displayName-count-other": "шпанске пезете",
                symbol: "ESP",
                "symbol-alt-narrow": "₧"
            },
            ETB: {
                displayName: "етиопијски бир",
                "displayName-count-one": "етиопски бир",
                "displayName-count-few": "етиопска бира",
                "displayName-count-other": "етиопских бира",
                symbol: "ETB"
            },
            EUR: {
                displayName: "Евро",
                "displayName-count-one": "евро",
                "displayName-count-few": "евра",
                "displayName-count-other": "евра",
                symbol: "€",
                "symbol-alt-narrow": "€"
            },
            FIM: {
                displayName: "Финска марка",
                "displayName-count-one": "финска марка",
                "displayName-count-few": "финске марке",
                "displayName-count-other": "финских марака",
                symbol: "FIM"
            },
            FJD: {
                displayName: "фиџијски долар",
                "displayName-count-one": "фиџијски долар",
                "displayName-count-few": "фиџијска долара",
                "displayName-count-other": "фиџијских долара",
                symbol: "FJD",
                "symbol-alt-narrow": "$"
            },
            FKP: {
                displayName: "фолкландска фунта",
                "displayName-count-one": "фокландска фунта",
                "displayName-count-few": "фокландске фунте",
                "displayName-count-other": "фокландских фунти",
                symbol: "FKP",
                "symbol-alt-narrow": "£"
            },
            FRF: {
                displayName: "Француски франак",
                "displayName-count-one": "француски франак",
                "displayName-count-few": "француска франка",
                "displayName-count-other": "француских франака",
                symbol: "FRF"
            },
            GBP: {
                displayName: "британска фунта",
                "displayName-count-one": "британска фунта",
                "displayName-count-few": "британске фунте",
                "displayName-count-other": "британских фунти",
                symbol: "£",
                "symbol-alt-narrow": "£"
            },
            GEK: {
                displayName: "Грузијски купон ларит",
                "displayName-count-one": "грузијски купон ларит",
                "displayName-count-few": "грузијска купон ларита",
                "displayName-count-other": "грузијских купон ларита",
                symbol: "GEK"
            },
            GEL: {
                displayName: "грузијски лари",
                "displayName-count-one": "грузијски лари",
                "displayName-count-few": "грузијска ларија",
                "displayName-count-other": "грузијских ларија",
                symbol: "GEL",
                "symbol-alt-narrow": "ლ"
            },
            GHC: {
                displayName: "Гански цеди (1979–2007)",
                "displayName-count-one": "гански цед (1979–2007)",
                "displayName-count-few": "ганска цеда (1979–2007)",
                "displayName-count-other": "ганских цеда (1979–2007)",
                symbol: "GHC"
            },
            GHS: {
                displayName: "гански седи",
                "displayName-count-one": "гански седи",
                "displayName-count-few": "ганска седија",
                "displayName-count-other": "ганских седија",
                symbol: "GHS",
                "symbol-alt-narrow": "GH₵"
            },
            GIP: {
                displayName: "гибралтарска фунта",
                "displayName-count-one": "гибралтарска фунта",
                "displayName-count-few": "гибралтарске фунте",
                "displayName-count-other": "гибралтарских фунти",
                symbol: "GIP",
                "symbol-alt-narrow": "£"
            },
            GMD: {
                displayName: "гамбијски даласи",
                "displayName-count-one": "гамбијски даласи",
                "displayName-count-few": "гамбијских даласија",
                "displayName-count-other": "гамбијских даласија",
                symbol: "GMD"
            },
            GNF: {
                displayName: "гвинејски франак",
                "displayName-count-one": "гвинејски франак",
                "displayName-count-few": "гвинејска франка",
                "displayName-count-other": "гвинејских франака",
                symbol: "GNF",
                "symbol-alt-narrow": "FG"
            },
            GNS: {
                displayName: "Гвинејски сили",
                "displayName-count-one": "гвинејски сили",
                "displayName-count-few": "гвинејска сила",
                "displayName-count-other": "гвинејских сила",
                symbol: "GNS"
            },
            GQE: {
                displayName: "Екваторијално-гвинејски еквеле",
                "displayName-count-one": "екваторијално-гвинејски еквеле",
                "displayName-count-few": "екваторијално-гвинејска еквела",
                "displayName-count-other": "екваторијално-гвинејских еквела",
                symbol: "GQE"
            },
            GRD: {
                displayName: "Грчка драхма",
                "displayName-count-one": "грчка драхма",
                "displayName-count-few": "грчке драхме",
                "displayName-count-other": "грчких драхми",
                symbol: "GRD"
            },
            GTQ: {
                displayName: "гватемалски кецал",
                "displayName-count-one": "гватемалски кецал",
                "displayName-count-few": "гватемалска кецала",
                "displayName-count-other": "гватемалских кецала",
                symbol: "GTQ",
                "symbol-alt-narrow": "Q"
            },
            GWE: {
                displayName: "Португалска гвинеја ескудо",
                "displayName-count-one": "португалско-гвинејски ескудо",
                "displayName-count-few": "португалско-гвинејска ескуда",
                "displayName-count-other": "португалско-гвинејских ескуда",
                symbol: "GWE"
            },
            GWP: {
                displayName: "Гвинеја Бисао Пезо",
                "displayName-count-one": "гвинеја-бисаошки пезо",
                "displayName-count-few": "гвинеја-бисаошка пезоса",
                "displayName-count-other": "гвинеја-бисаошких пезоса",
                symbol: "GWP"
            },
            GYD: {
                displayName: "гвајански долар",
                "displayName-count-one": "гвајански долар",
                "displayName-count-few": "гвајанска долара",
                "displayName-count-other": "гвајанских долара",
                symbol: "GYD",
                "symbol-alt-narrow": "$"
            },
            HKD: {
                displayName: "хонгконшки долар",
                "displayName-count-one": "хонгконшки долар",
                "displayName-count-few": "хонгконшка долара",
                "displayName-count-other": "хонгконшких долара",
                symbol: "HK$",
                "symbol-alt-narrow": "$"
            },
            HNL: {
                displayName: "хондурашка лемпира",
                "displayName-count-one": "хондурашка лемпира",
                "displayName-count-few": "хондурашке лемпире",
                "displayName-count-other": "хондурашких лемпира",
                symbol: "HNL",
                "symbol-alt-narrow": "L"
            },
            HRD: {
                displayName: "Хрватски динар",
                "displayName-count-one": "хрватски динар",
                "displayName-count-few": "хрватска динара",
                "displayName-count-other": "хрватских динара",
                symbol: "HRD"
            },
            HRK: {
                displayName: "хрватска куна",
                "displayName-count-one": "хрватска куна",
                "displayName-count-few": "хрватске куне",
                "displayName-count-other": "хрватских куна",
                symbol: "HRK",
                "symbol-alt-narrow": "kn"
            },
            HTG: {
                displayName: "хаићански гурд",
                "displayName-count-one": "хаићански гурд",
                "displayName-count-few": "хаићанска гурда",
                "displayName-count-other": "хаићанских гурда",
                symbol: "HTG"
            },
            HUF: {
                displayName: "мађарска форинта",
                "displayName-count-one": "мађарска форинта",
                "displayName-count-few": "мађарске форинте",
                "displayName-count-other": "мађарских форинти",
                symbol: "HUF",
                "symbol-alt-narrow": "Ft"
            },
            IDR: {
                displayName: "индонежанска рупија",
                "displayName-count-one": "индонежанска рупија",
                "displayName-count-few": "индонежанске рупије",
                "displayName-count-other": "индонежанских рупијa",
                symbol: "IDR",
                "symbol-alt-narrow": "Rp"
            },
            IEP: {
                displayName: "Ирска фунта",
                "displayName-count-one": "ирска фунта",
                "displayName-count-few": "ирске фунте",
                "displayName-count-other": "ирских фунти",
                symbol: "IEP"
            },
            ILP: {
                displayName: "Израелска фунта",
                "displayName-count-one": "израелска фунта",
                "displayName-count-few": "израелске фунте",
                "displayName-count-other": "израелских фунти",
                symbol: "ILP"
            },
            ILR: {
                displayName: "Стари израелски шекели",
                "displayName-count-one": "стари израелски шекели",
                "displayName-count-few": "стари израелски шекели",
                "displayName-count-other": "стари израелски шекели",
                symbol: "ILR"
            },
            ILS: {
                displayName: "израелски нови шекел",
                "displayName-count-one": "израелски нови шекел",
                "displayName-count-few": "израелска нова шекела",
                "displayName-count-other": "израелских нових шекела",
                symbol: "₪",
                "symbol-alt-narrow": "₪"
            },
            INR: {
                displayName: "индијска рупија",
                "displayName-count-one": "индијска рупија",
                "displayName-count-few": "индијске рупије",
                "displayName-count-other": "индијских рупија",
                symbol: "₹",
                "symbol-alt-narrow": "₹"
            },
            IQD: {
                displayName: "ирачки динар",
                "displayName-count-one": "ирачки динар",
                "displayName-count-few": "ирачка динара",
                "displayName-count-other": "ирачких динара",
                symbol: "IQD"
            },
            IRR: {
                displayName: "ирански ријал",
                "displayName-count-one": "ирански ријал",
                "displayName-count-few": "иранска ријала",
                "displayName-count-other": "иранских ријала",
                symbol: "IRR"
            },
            ISJ: {
                displayName: "Стара исландска круна",
                "displayName-count-one": "стара исландска круна",
                "displayName-count-few": "стара исландска круна",
                "displayName-count-other": "стара исландска круна",
                symbol: "ISJ"
            },
            ISK: {
                displayName: "исландска круна",
                "displayName-count-one": "исландска круна",
                "displayName-count-few": "исландске круне",
                "displayName-count-other": "исландских круна",
                symbol: "ISK",
                "symbol-alt-narrow": "kr"
            },
            ITL: {
                displayName: "Италијанска лира",
                "displayName-count-one": "италијанска лира",
                "displayName-count-few": "италијанске лире",
                "displayName-count-other": "италијанске лире",
                symbol: "ITL"
            },
            JMD: {
                displayName: "јамајчански долар",
                "displayName-count-one": "jамајчански долар",
                "displayName-count-few": "jамајчанска долара",
                "displayName-count-other": "jамајчанскиx долара",
                symbol: "JMD",
                "symbol-alt-narrow": "$"
            },
            JOD: {
                displayName: "јордански динар",
                "displayName-count-one": "јордански динар",
                "displayName-count-few": "јорданскa динара",
                "displayName-count-other": "јорданских динара",
                symbol: "JOD"
            },
            JPY: {
                displayName: "јапански јен",
                "displayName-count-one": "јапански јен",
                "displayName-count-few": "јапанска јена",
                "displayName-count-other": "јапанских јена",
                symbol: "¥",
                "symbol-alt-narrow": "¥"
            },
            KES: {
                displayName: "кенијски шилинг",
                "displayName-count-one": "кенијски шилинг",
                "displayName-count-few": "кенијска шилинга",
                "displayName-count-other": "кенијских шилинга",
                symbol: "KES"
            },
            KGS: {
                displayName: "киргистански сом",
                "displayName-count-one": "киргистански сом",
                "displayName-count-few": "киргистанска сома",
                "displayName-count-other": "киргистанских сома",
                symbol: "KGS"
            },
            KHR: {
                displayName: "камбоџански ријел",
                "displayName-count-one": "камбоџански ријел",
                "displayName-count-few": "камбоџанска ријела",
                "displayName-count-other": "камбоџанских ријела",
                symbol: "KHR",
                "symbol-alt-narrow": "៛"
            },
            KMF: {
                displayName: "коморски франак",
                "displayName-count-one": "коморски франак",
                "displayName-count-few": "коморскa франкa",
                "displayName-count-other": "коморских франакa",
                symbol: "KMF",
                "symbol-alt-narrow": "CF"
            },
            KPW: {
                displayName: "севернокорејски вон",
                "displayName-count-one": "севернокорејски вон",
                "displayName-count-few": "севернокорејска вона",
                "displayName-count-other": "севернокорејских вона",
                symbol: "KPW",
                "symbol-alt-narrow": "₩"
            },
            KRH: {
                displayName: "KRH",
                symbol: "KRH"
            },
            KRO: {
                displayName: "KRO",
                symbol: "KRO"
            },
            KRW: {
                displayName: "јужнокорејски вон",
                "displayName-count-one": "јужнокорејски вон",
                "displayName-count-few": "јужнокорејска вона",
                "displayName-count-other": "јужнокорејских вона",
                symbol: "KRW",
                "symbol-alt-narrow": "₩"
            },
            KWD: {
                displayName: "кувајтски динар",
                "displayName-count-one": "кувајтски динар",
                "displayName-count-few": "кувајтскa динара",
                "displayName-count-other": "кувајтских динара",
                symbol: "KWD"
            },
            KYD: {
                displayName: "кајмански долар",
                "displayName-count-one": "кајмански долар",
                "displayName-count-few": "кајманска долара",
                "displayName-count-other": "кајманских долара",
                symbol: "KYD",
                "symbol-alt-narrow": "$"
            },
            KZT: {
                displayName: "казахстански тенге",
                "displayName-count-one": "казахстански тенге",
                "displayName-count-few": "казахстанска тенгеа",
                "displayName-count-other": "казахстанских тенгеа",
                symbol: "KZT",
                "symbol-alt-narrow": "₸"
            },
            LAK: {
                displayName: "лаоски кип",
                "displayName-count-one": "лаоски кип",
                "displayName-count-few": "лаоска кипа",
                "displayName-count-other": "лаоских кипа",
                symbol: "LAK",
                "symbol-alt-narrow": "₭"
            },
            LBP: {
                displayName: "либанска фунта",
                "displayName-count-one": "либанскa фунтa",
                "displayName-count-few": "либанскe фунтe",
                "displayName-count-other": "либанских фунти",
                symbol: "LBP",
                "symbol-alt-narrow": "L£"
            },
            LKR: {
                displayName: "шриланчанска рупија",
                "displayName-count-one": "шриланчанска рупија",
                "displayName-count-few": "шриланчанске рупије",
                "displayName-count-other": "шриланчанских рупија",
                symbol: "LKR",
                "symbol-alt-narrow": "Rs"
            },
            LRD: {
                displayName: "либеријски долар",
                "displayName-count-one": "либеријски долар",
                "displayName-count-few": "либеријска долара",
                "displayName-count-other": "либеријских долара",
                symbol: "LRD",
                "symbol-alt-narrow": "$"
            },
            LSL: {
                displayName: "лесотски лоти",
                "displayName-count-one": "лесотски лоти",
                "displayName-count-few": "лесотска лотија",
                "displayName-count-other": "лесотских лотија",
                symbol: "LSL"
            },
            LTL: {
                displayName: "Литвански литас",
                "displayName-count-one": "литвански литас",
                "displayName-count-few": "литванска литаса",
                "displayName-count-other": "литванских литаса",
                symbol: "LTL",
                "symbol-alt-narrow": "Lt"
            },
            LTT: {
                displayName: "Литвански талонас",
                "displayName-count-one": "литвански талонас",
                "displayName-count-few": "литванска талонаса",
                "displayName-count-other": "литванских талонаса",
                symbol: "LTT"
            },
            LUC: {
                displayName: "Луксембуршки конвертибилни франак",
                "displayName-count-one": "луксембуршки конвертибилни франак",
                "displayName-count-few": "луксембуршка конвертибилна франка",
                "displayName-count-other": "луксембуршких конвертибилних франака",
                symbol: "LUC"
            },
            LUF: {
                displayName: "Луксембуршки франак",
                "displayName-count-one": "луксембуршки франак",
                "displayName-count-few": "луксембуршка франка",
                "displayName-count-other": "луксембуршки франци",
                symbol: "LUF"
            },
            LUL: {
                displayName: "Луксембуршки финансијски франак",
                "displayName-count-one": "луксембуршки финансијски франак",
                "displayName-count-few": "луксембуршка финансијска франка",
                "displayName-count-other": "луксембуршких финансијских франака",
                symbol: "LUL"
            },
            LVL: {
                displayName: "Латвијски лати",
                "displayName-count-one": "латвијски лат",
                "displayName-count-few": "латвијска лата",
                "displayName-count-other": "латвијских лата",
                symbol: "LVL",
                "symbol-alt-narrow": "Ls"
            },
            LVR: {
                displayName: "Латвијска рубља",
                "displayName-count-one": "латвијска рубља",
                "displayName-count-few": "латвијске рубље",
                "displayName-count-other": "латвијских рубљи",
                symbol: "LVR"
            },
            LYD: {
                displayName: "либијски динар",
                "displayName-count-one": "либијски динар",
                "displayName-count-few": "либијскa динарa",
                "displayName-count-other": "либијских динарa",
                symbol: "LYD"
            },
            MAD: {
                displayName: "марокански дирхам",
                "displayName-count-one": "марокански дирхам",
                "displayName-count-few": "мароканска дирхама",
                "displayName-count-other": "мароканских дирхама",
                symbol: "MAD"
            },
            MAF: {
                displayName: "Марокански франак",
                "displayName-count-one": "марокански франак",
                "displayName-count-few": "мароканска франка",
                "displayName-count-other": "мароканских франака",
                symbol: "MAF"
            },
            MCF: {
                displayName: "MCF",
                symbol: "MCF"
            },
            MDC: {
                displayName: "MDC",
                symbol: "MDC"
            },
            MDL: {
                displayName: "молдавски леј",
                "displayName-count-one": "молдaвски леј",
                "displayName-count-few": "молдaвскa леја",
                "displayName-count-other": "молдaвских леја",
                symbol: "MDL"
            },
            MGA: {
                displayName: "малгашки аријари",
                "displayName-count-one": "малгашки аријари",
                "displayName-count-few": "малгашка аријарија",
                "displayName-count-other": "малгашких аријарија",
                symbol: "MGA",
                "symbol-alt-narrow": "Ar"
            },
            MGF: {
                displayName: "Малагасијски франак",
                "displayName-count-one": "малагашајски франак",
                "displayName-count-few": "малагашајска франка",
                "displayName-count-other": "малагашајски франци",
                symbol: "MGF"
            },
            MKD: {
                displayName: "македонски денар",
                "displayName-count-one": "македонски денар",
                "displayName-count-few": "македонска денара",
                "displayName-count-other": "македонских денара",
                symbol: "MKD"
            },
            MKN: {
                displayName: "MKN",
                symbol: "MKN"
            },
            MLF: {
                displayName: "Малијански франак",
                "displayName-count-one": "малијски франак",
                "displayName-count-few": "малијска франка",
                "displayName-count-other": "малијских франака",
                symbol: "MLF"
            },
            MMK: {
                displayName: "мјанмарски кјат",
                "displayName-count-one": "мјанмарски кјат",
                "displayName-count-few": "мјанмарскa кјатa",
                "displayName-count-other": "мјанмарских кјатa",
                symbol: "MMK",
                "symbol-alt-narrow": "K"
            },
            MNT: {
                displayName: "монголски тугрик",
                "displayName-count-one": "монголски тугрик",
                "displayName-count-few": "монголскa тугрика",
                "displayName-count-other": "монголских тугрика",
                symbol: "MNT",
                "symbol-alt-narrow": "₮"
            },
            MOP: {
                displayName: "макаоска патака",
                "displayName-count-one": "макаоска патака",
                "displayName-count-few": "макаоске патаке",
                "displayName-count-other": "макаоских патака",
                symbol: "MOP"
            },
            MRO: {
                displayName: "Мауританијска oгија (1973–2017)",
                "displayName-count-one": "мауританијска oгија (1973–2017)",
                "displayName-count-few": "мауританијскe oгијe (1973–2017)",
                "displayName-count-other": "мауританијских oгијa (1973–2017)",
                symbol: "MRO"
            },
            MRU: {
                displayName: "мауританска огија",
                "displayName-count-one": "мауританска огија",
                "displayName-count-few": "мауританске огије",
                "displayName-count-other": "мауританских огија",
                symbol: "MRU"
            },
            MTL: {
                displayName: "Малтешка лира",
                "displayName-count-one": "малтешка лира",
                "displayName-count-few": "малтешке лире",
                "displayName-count-other": "малтешких лира",
                symbol: "MTL"
            },
            MTP: {
                displayName: "Малтешка фунта",
                "displayName-count-one": "малтешка фунта",
                "displayName-count-few": "малтешке фунте",
                "displayName-count-other": "малтешких фунти",
                symbol: "MTP"
            },
            MUR: {
                displayName: "маурицијска рупија",
                "displayName-count-one": "маурицијска рупија",
                "displayName-count-few": "маурицијскe рупијe",
                "displayName-count-other": "маурицијских рупија",
                symbol: "MUR",
                "symbol-alt-narrow": "Rs"
            },
            MVP: {
                displayName: "MVP",
                symbol: "MVP"
            },
            MVR: {
                displayName: "малдивска руфија",
                "displayName-count-one": "малдивскa руфија",
                "displayName-count-few": "малдивскe руфијe",
                "displayName-count-other": "малдивских руфија",
                symbol: "MVR"
            },
            MWK: {
                displayName: "малавијска квача",
                "displayName-count-one": "малавијска квача",
                "displayName-count-few": "малавијске кваче",
                "displayName-count-other": "малавијских квача",
                symbol: "MWK"
            },
            MXN: {
                displayName: "мексички пезос",
                "displayName-count-one": "мексички пезос",
                "displayName-count-few": "мексичка пезоса",
                "displayName-count-other": "мексичких пезоса",
                symbol: "MX$",
                "symbol-alt-narrow": "$"
            },
            MXP: {
                displayName: "Мексички сребрни пезо (1861–1992)",
                "displayName-count-one": "мексички сребрни пезо",
                "displayName-count-few": "мексичка сребрна пезоса",
                "displayName-count-other": "мексичких сребрних пезоса",
                symbol: "MXP"
            },
            MXV: {
                displayName: "Мексички унидад де инверсион (UDI)",
                "displayName-count-one": "мексички унидадс де инверзион",
                "displayName-count-few": "мексичка унидадс де инверзиона",
                "displayName-count-other": "мексичких унидадс де инверзиона",
                symbol: "MXV"
            },
            MYR: {
                displayName: "малезијски рингит",
                "displayName-count-one": "малезијски рингит",
                "displayName-count-few": "малезијска рингита",
                "displayName-count-other": "малезијских рингита",
                symbol: "MYR",
                "symbol-alt-narrow": "RM"
            },
            MZE: {
                displayName: "Мозамбијски ескудо",
                "displayName-count-one": "мозамбијски ескудо",
                "displayName-count-few": "мозамбијска ескуда",
                "displayName-count-other": "мозамбијских ескуда",
                symbol: "MZE"
            },
            MZM: {
                displayName: "Стари мозамбијски метикал",
                "displayName-count-one": "стари мозамбијски метикал",
                "displayName-count-few": "стара мозамбијска метикала",
                "displayName-count-other": "старих мозамбијских метикала",
                symbol: "MZM"
            },
            MZN: {
                displayName: "мозамбички метикал",
                "displayName-count-one": "мозамбички метикал",
                "displayName-count-few": "мозамбичка метикала",
                "displayName-count-other": "мозамбичких метикала",
                symbol: "MZN"
            },
            NAD: {
                displayName: "намибијски долар",
                "displayName-count-one": "намибијски долар",
                "displayName-count-few": "намибијска долара",
                "displayName-count-other": "намибијских долара",
                symbol: "NAD",
                "symbol-alt-narrow": "$"
            },
            NGN: {
                displayName: "нигеријска наира",
                "displayName-count-one": "нигеријска наира",
                "displayName-count-few": "нигеријске наире",
                "displayName-count-other": "нигеријских наира",
                symbol: "NGN",
                "symbol-alt-narrow": "₦"
            },
            NIC: {
                displayName: "никарагванска кордоба (1988–1991)",
                "displayName-count-one": "никарагванска кордоба (1988–1991)",
                "displayName-count-few": "никарагванске кордобе (1988–1991)",
                "displayName-count-other": "никарагванских кордоба (1988–1991)",
                symbol: "NIC"
            },
            NIO: {
                displayName: "никарагванска кордоба",
                "displayName-count-one": "никарагванска кордоба",
                "displayName-count-few": "никарагванске кордобе",
                "displayName-count-other": "никарагванских кордоба",
                symbol: "NIO",
                "symbol-alt-narrow": "C$"
            },
            NLG: {
                displayName: "Холандски гулден",
                "displayName-count-one": "холандски гулден",
                "displayName-count-few": "холандска гулдена",
                "displayName-count-other": "холандских гулдена",
                symbol: "NLG"
            },
            NOK: {
                displayName: "норвешка круна",
                "displayName-count-one": "норвешка круна",
                "displayName-count-few": "норвешке круне",
                "displayName-count-other": "норвешких круна",
                symbol: "NOK",
                "symbol-alt-narrow": "kr"
            },
            NPR: {
                displayName: "непалска рупија",
                "displayName-count-one": "непалска рупија",
                "displayName-count-few": "непалске рупије",
                "displayName-count-other": "непалских рупија",
                symbol: "NPR",
                "symbol-alt-narrow": "Rs"
            },
            NZD: {
                displayName: "новозеландски долар",
                "displayName-count-one": "новозеландски долар",
                "displayName-count-few": "новозеландска долара",
                "displayName-count-other": "новозеландских долара",
                symbol: "NZD",
                "symbol-alt-narrow": "$"
            },
            OMR: {
                displayName: "омански ријал",
                "displayName-count-one": "омански ријал",
                "displayName-count-few": "оманскa ријала",
                "displayName-count-other": "оманских ријала",
                symbol: "OMR"
            },
            PAB: {
                displayName: "панамска балбоа",
                "displayName-count-one": "панамска балбоа",
                "displayName-count-few": "панамске балбое",
                "displayName-count-other": "панамских балбоа",
                symbol: "PAB"
            },
            PEI: {
                displayName: "Перуански инти",
                "displayName-count-one": "перувијски инти",
                "displayName-count-few": "перувијска интија",
                "displayName-count-other": "перувијских интија",
                symbol: "PEI"
            },
            PEN: {
                displayName: "перуански сол",
                "displayName-count-one": "перуански сол",
                "displayName-count-few": "перуанска сола",
                "displayName-count-other": "перуанских сола",
                symbol: "PEN"
            },
            PES: {
                displayName: "Перуански сол (1863–1965)",
                "displayName-count-one": "перуански сол (1863–1965)",
                "displayName-count-few": "перуанска сола (1863–1965)",
                "displayName-count-other": "перуанских сола (1863–1965)",
                symbol: "PES"
            },
            PGK: {
                displayName: "папуанска кина",
                "displayName-count-one": "папуанска кина",
                "displayName-count-few": "папуанскe кинe",
                "displayName-count-other": "папуанских кинa",
                symbol: "PGK"
            },
            PHP: {
                displayName: "филипински пезос",
                "displayName-count-one": "филипински пезос",
                "displayName-count-few": "филипинска пезоса",
                "displayName-count-other": "филипинских пезоса",
                symbol: "PHP",
                "symbol-alt-narrow": "₱"
            },
            PKR: {
                displayName: "пакистанска рупија",
                "displayName-count-one": "пакистанска рупија",
                "displayName-count-few": "пакистанске рупије",
                "displayName-count-other": "пакистанских рупија",
                symbol: "PKR",
                "symbol-alt-narrow": "Rs"
            },
            PLN: {
                displayName: "пољски злот",
                "displayName-count-one": "пољски злот",
                "displayName-count-few": "пољска злота",
                "displayName-count-other": "пољских злота",
                symbol: "PLN",
                "symbol-alt-narrow": "zł"
            },
            PLZ: {
                displayName: "Пољски злоти (1950–1995)",
                "displayName-count-one": "пољски злот (1950–1995)",
                "displayName-count-few": "пољска злота (1950–1995)",
                "displayName-count-other": "пољских злота (1950–1995)",
                symbol: "PLZ"
            },
            PTE: {
                displayName: "Португалски ескудо",
                "displayName-count-one": "португалски ескудо",
                "displayName-count-few": "португалска ескуда",
                "displayName-count-other": "португалских ескуда",
                symbol: "PTE"
            },
            PYG: {
                displayName: "парагвајски гварани",
                "displayName-count-one": "парагвајски гварани",
                "displayName-count-few": "парагвајска гваранија",
                "displayName-count-other": "парагвајских гваранија",
                symbol: "PYG",
                "symbol-alt-narrow": "₲"
            },
            QAR: {
                displayName: "катарски ријал",
                "displayName-count-one": "катарски ријал",
                "displayName-count-few": "катарска ријала",
                "displayName-count-other": "катарских ријала",
                symbol: "QAR"
            },
            RHD: {
                displayName: "Родејскидолар",
                "displayName-count-one": "родежански долар",
                "displayName-count-few": "родежанска долара",
                "displayName-count-other": "родежанских долара",
                symbol: "RHD"
            },
            ROL: {
                displayName: "Румунски леј (1952–2006)",
                "displayName-count-one": "румунски леј (1952–2006)",
                "displayName-count-few": "румунскa леја (1952–2006)",
                "displayName-count-other": "румунских леја (1952–2006)",
                symbol: "ROL"
            },
            RON: {
                displayName: "румунски леј",
                "displayName-count-one": "румунски леј",
                "displayName-count-few": "румунскa леја",
                "displayName-count-other": "румунских леја",
                symbol: "RON",
                "symbol-alt-narrow": "lei"
            },
            RSD: {
                displayName: "српски динар",
                "displayName-count-one": "српски динар",
                "displayName-count-few": "српска динара",
                "displayName-count-other": "српских динара",
                symbol: "RSD"
            },
            RUB: {
                displayName: "руска рубља",
                "displayName-count-one": "руска рубља",
                "displayName-count-few": "руске рубље",
                "displayName-count-other": "руских рубљи",
                symbol: "RUB",
                "symbol-alt-narrow": "₽"
            },
            RUR: {
                displayName: "Руска рубља (1991–1998)",
                "displayName-count-one": "руска рубља (1991–1998)",
                "displayName-count-few": "руске рубље (1991–1998)",
                "displayName-count-other": "руских рубљи (1991–1998)",
                symbol: "RUR"
            },
            RWF: {
                displayName: "руандски франак",
                "displayName-count-one": "руандски франак",
                "displayName-count-few": "руандскa франка",
                "displayName-count-other": "руандских франака",
                symbol: "RWF",
                "symbol-alt-narrow": "RF"
            },
            SAR: {
                displayName: "саудијски ријал",
                "displayName-count-one": "саудијски ријал",
                "displayName-count-few": "саудијска ријала",
                "displayName-count-other": "саудијских ријала",
                symbol: "SAR"
            },
            SBD: {
                displayName: "соломонски долар",
                "displayName-count-one": "соломонски долар",
                "displayName-count-few": "соломонска долара",
                "displayName-count-other": "соломонских долара",
                symbol: "SBD",
                "symbol-alt-narrow": "$"
            },
            SCR: {
                displayName: "сејшелска рупија",
                "displayName-count-one": "сејшелска рупија",
                "displayName-count-few": "сејшелске рупије",
                "displayName-count-other": "сејшелских рупија",
                symbol: "SCR"
            },
            SDD: {
                displayName: "Стари судански динар",
                "displayName-count-one": "стари судански динар",
                "displayName-count-few": "стара суданска динара",
                "displayName-count-other": "старих суданских динара",
                symbol: "SDD"
            },
            SDG: {
                displayName: "суданска фунта",
                "displayName-count-one": "суданска фунта",
                "displayName-count-few": "суданске фунте",
                "displayName-count-other": "суданских фунти",
                symbol: "SDG"
            },
            SDP: {
                displayName: "Стара суданска фунта",
                "displayName-count-one": "стара суданска фунта",
                "displayName-count-few": "старе суданске фунте",
                "displayName-count-other": "старих суданских фунти",
                symbol: "SDP"
            },
            SEK: {
                displayName: "шведска круна",
                "displayName-count-one": "шведска круна",
                "displayName-count-few": "шведске круне",
                "displayName-count-other": "шведских круна",
                symbol: "SEK",
                "symbol-alt-narrow": "kr"
            },
            SGD: {
                displayName: "сингапурски долар",
                "displayName-count-one": "сингапурски долар",
                "displayName-count-few": "сингапурска долара",
                "displayName-count-other": "сингапурских долара",
                symbol: "SGD",
                "symbol-alt-narrow": "$"
            },
            SHP: {
                displayName: "фунта Свете Јелене",
                "displayName-count-one": "фунта Свете Јелене",
                "displayName-count-few": "фунте Свете Јелене",
                "displayName-count-other": "фунти Свете Јелене",
                symbol: "SHP",
                "symbol-alt-narrow": "£"
            },
            SIT: {
                displayName: "Словеначки толар",
                "displayName-count-one": "словеначки толар",
                "displayName-count-few": "словеначка толара",
                "displayName-count-other": "словеначких толара",
                symbol: "SIT"
            },
            SKK: {
                displayName: "Словачка круна",
                "displayName-count-one": "словачка круна",
                "displayName-count-few": "словачке круне",
                "displayName-count-other": "словачких круна",
                symbol: "SKK"
            },
            SLE: {
                displayName: "SLE",
                symbol: "SLE"
            },
            SLL: {
                displayName: "сијералеонски леоне",
                "displayName-count-one": "сијералеонски леоне",
                "displayName-count-few": "сијералеонска леона",
                "displayName-count-other": "сијералеонских леона",
                symbol: "SLL"
            },
            SOS: {
                displayName: "сомалијски шилинг",
                "displayName-count-one": "сомалијски шилинг",
                "displayName-count-few": "сомалијска шилинга",
                "displayName-count-other": "сомалијских шилинга",
                symbol: "SOS"
            },
            SRD: {
                displayName: "суринамски долар",
                "displayName-count-one": "суринамски долар",
                "displayName-count-few": "суринамска долара",
                "displayName-count-other": "суринамских долара",
                symbol: "SRD",
                "symbol-alt-narrow": "$"
            },
            SRG: {
                displayName: "Суринамски гилдер",
                "displayName-count-one": "суринамски гилдер",
                "displayName-count-few": "суринамска гилдера",
                "displayName-count-other": "суринамских гилдера",
                symbol: "SRG"
            },
            SSP: {
                displayName: "јужносуданска фунта",
                "displayName-count-one": "јужносуданска фунта",
                "displayName-count-few": "јужносуданскe фунтe",
                "displayName-count-other": "јужносуданских фунти",
                symbol: "SSP",
                "symbol-alt-narrow": "£"
            },
            STD: {
                displayName: "Саотомска добра (1977–2017)",
                "displayName-count-one": "саотомска добра (1977–2017)",
                "displayName-count-few": "саотомске добре (1977–2017)",
                "displayName-count-other": "саотомских добри (1977–2017)",
                symbol: "STD"
            },
            STN: {
                displayName: "саотомска добра",
                "displayName-count-one": "саотомска добра",
                "displayName-count-few": "саотомске добре",
                "displayName-count-other": "саотомских добри",
                symbol: "STN",
                "symbol-alt-narrow": "Db"
            },
            SUR: {
                displayName: "Совјетска рубља",
                "displayName-count-one": "совјетска рубља",
                "displayName-count-few": "совјетске рубље",
                "displayName-count-other": "совјетских рубљи",
                symbol: "SUR"
            },
            SVC: {
                displayName: "Салвадорски колон",
                "displayName-count-one": "салвадорски колон",
                "displayName-count-few": "салвадорска колона",
                "displayName-count-other": "салвадорских колона",
                symbol: "SVC"
            },
            SYP: {
                displayName: "сиријска фунта",
                "displayName-count-one": "сиријска фунта",
                "displayName-count-few": "сиријске фунте",
                "displayName-count-other": "сиријских фунти",
                symbol: "SYP",
                "symbol-alt-narrow": "£"
            },
            SZL: {
                displayName: "свазилендски лилангени",
                "displayName-count-one": "свазилендски лилангени",
                "displayName-count-few": "свазилендска лилангенија",
                "displayName-count-other": "свазилендских лилангенија",
                symbol: "SZL"
            },
            THB: {
                displayName: "тајландски бат",
                "displayName-count-one": "тајландски бат",
                "displayName-count-few": "тајландска бата",
                "displayName-count-other": "тајландских бата",
                symbol: "THB",
                "symbol-alt-narrow": "฿"
            },
            TJR: {
                displayName: "Таџихистанска рубља",
                "displayName-count-one": "таџихистанска рубља",
                "displayName-count-few": "таџихистанске рубље",
                "displayName-count-other": "таџихистанских рубљи",
                symbol: "TJR"
            },
            TJS: {
                displayName: "таџикистански сомон",
                "displayName-count-one": "таџикистански сомон",
                "displayName-count-few": "таџикистанска сомона",
                "displayName-count-other": "таџикистанских сомона",
                symbol: "TJS"
            },
            TMM: {
                displayName: "Туркменистански манат (1993–2009)",
                "displayName-count-one": "туркменистански манат (1993–2009)",
                "displayName-count-few": "туркменистанска маната (1993–2009)",
                "displayName-count-other": "туркменистански манат (1993–2009)",
                symbol: "TMM"
            },
            TMT: {
                displayName: "туркменистански манат",
                "displayName-count-one": "туркменистански манат",
                "displayName-count-few": "туркменистанскa манатa",
                "displayName-count-other": "туркменистанских маната",
                symbol: "TMT"
            },
            TND: {
                displayName: "туниски динар",
                "displayName-count-one": "туниски динар",
                "displayName-count-few": "туниска динара",
                "displayName-count-other": "туниских динара",
                symbol: "TND"
            },
            TOP: {
                displayName: "тонганска панга",
                "displayName-count-one": "тонганска панга",
                "displayName-count-few": "тонганске панге",
                "displayName-count-other": "тонганских панги",
                symbol: "TOP",
                "symbol-alt-narrow": "T$"
            },
            TPE: {
                displayName: "Тиморшки ескудо",
                "displayName-count-one": "тиморшки ескудо",
                "displayName-count-few": "тиморшка ескуда",
                "displayName-count-other": "тиморшких ескуда",
                symbol: "TPE"
            },
            TRL: {
                displayName: "Турска лира (1922–2005)",
                "displayName-count-one": "турска лира (1922–2005)",
                "displayName-count-few": "турске лире (1922–2005)",
                "displayName-count-other": "турских лира (1922–2005)",
                symbol: "TRL"
            },
            TRY: {
                displayName: "турска лира",
                "displayName-count-one": "турска лира",
                "displayName-count-few": "турске лире",
                "displayName-count-other": "турских лира",
                symbol: "TRY",
                "symbol-alt-narrow": "₺",
                "symbol-alt-variant": "TL"
            },
            TTD: {
                displayName: "Тринидад-тобагошки долар",
                "displayName-count-one": "тринидад-тобагошки долар",
                "displayName-count-few": "тринидад-тобагошка долара",
                "displayName-count-other": "тринидад-тобагошких долара",
                symbol: "TTD",
                "symbol-alt-narrow": "$"
            },
            TWD: {
                displayName: "нови тајвански долар",
                "displayName-count-one": "нови тајвански долар",
                "displayName-count-few": "нова тајванска долара",
                "displayName-count-other": "нових тајванских долара",
                symbol: "NT$",
                "symbol-alt-narrow": "NT$"
            },
            TZS: {
                displayName: "танзанијски шилинг",
                "displayName-count-one": "танзанијски шилинг",
                "displayName-count-few": "танзанијска шилинга",
                "displayName-count-other": "танзанијских шилинга",
                symbol: "TZS"
            },
            UAH: {
                displayName: "украјинска гривна",
                "displayName-count-one": "украјинска гривна",
                "displayName-count-few": "украјинскe гривнe",
                "displayName-count-other": "украјинских хривњи",
                symbol: "UAH",
                "symbol-alt-narrow": "₴"
            },
            UAK: {
                displayName: "Украјински карбованети",
                "displayName-count-one": "украјински карбованец",
                "displayName-count-few": "украјинска карбованцива",
                "displayName-count-other": "украјинских карбованцива",
                symbol: "UAK"
            },
            UGS: {
                displayName: "Угандски шилинг (1966–1987)",
                "displayName-count-one": "угандијски шилинг (1966–1987)",
                "displayName-count-few": "угандијска шилинга (1966–1987)",
                "displayName-count-other": "угандијских шилинга (1966–1987)",
                symbol: "UGS"
            },
            UGX: {
                displayName: "угандски шилинг",
                "displayName-count-one": "угандски шилинг",
                "displayName-count-few": "угандскa шилинга",
                "displayName-count-other": "угандских шилинга",
                symbol: "UGX"
            },
            USD: {
                displayName: "амерички долар",
                "displayName-count-one": "амерички долар",
                "displayName-count-few": "америчка долара",
                "displayName-count-other": "америчких долара",
                symbol: "US$",
                "symbol-alt-narrow": "$"
            },
            USN: {
                displayName: "САД долар (следећи дан)",
                "displayName-count-one": "САД долар (следећи дан)",
                "displayName-count-few": "САД долара (следећи дан)",
                "displayName-count-other": "САД долара (следећи дан)",
                symbol: "USN"
            },
            USS: {
                displayName: "САД долар (исти дан)",
                "displayName-count-one": "САД долар (исти дан)",
                "displayName-count-few": "САД долара (исти дан)",
                "displayName-count-other": "САД долара (исти дан)",
                symbol: "USS"
            },
            UYI: {
                displayName: "Уругвајски пезо ен унидадес индексадас",
                "displayName-count-one": "уругвајски пезо ен унидадес индексадес",
                "displayName-count-few": "уругвајска пезоса ен унидадес индексадеса",
                "displayName-count-other": "угвајских пезоса ен унидадес индексадеса",
                symbol: "UYI"
            },
            UYP: {
                displayName: "Уругвајски пезо (1975–1993)",
                "displayName-count-one": "уругвајски пезо (1975–1993)",
                "displayName-count-few": "уругвајска пезоса (1975–1993)",
                "displayName-count-other": "уругвајских пезоса (1975–1993)",
                symbol: "UYP"
            },
            UYU: {
                displayName: "уругвајски пезос",
                "displayName-count-one": "уругвајски пезос",
                "displayName-count-few": "уругвајска пезоса",
                "displayName-count-other": "уругвајских пезоса",
                symbol: "UYU",
                "symbol-alt-narrow": "$"
            },
            UYW: {
                displayName: "UYW",
                symbol: "UYW"
            },
            UZS: {
                displayName: "узбекистански сом",
                "displayName-count-one": "узбекистански сом",
                "displayName-count-few": "узбекистанска сома",
                "displayName-count-other": "узбекистанских сома",
                symbol: "UZS"
            },
            VEB: {
                displayName: "Венецуелански боливар (1871–2008)",
                "displayName-count-one": "венецуелански боливар (1871–2008)",
                "displayName-count-few": "венецуеланска боливара (1871–2008)",
                "displayName-count-other": "венецуеланских боливара (1871–2008)",
                symbol: "VEB"
            },
            VED: {
                displayName: "VED",
                symbol: "VED"
            },
            VEF: {
                displayName: "Венецуелански боливар (2008–2018)",
                "displayName-count-one": "венецуелански боливар (2008–2018)",
                "displayName-count-few": "венецуеланска боливара (2008–2018)",
                "displayName-count-other": "венецуеланских боливара (2008–2018)",
                symbol: "VEF",
                "symbol-alt-narrow": "Bs"
            },
            VES: {
                displayName: "венецуелански боливар",
                "displayName-count-one": "венецуелански боливар",
                "displayName-count-few": "венецуеланска боливара",
                "displayName-count-other": "венецуеланских боливара",
                symbol: "VES"
            },
            VND: {
                displayName: "вијетнамски донг",
                "displayName-count-one": "вијетнамски донг",
                "displayName-count-few": "вијетнамска донга",
                "displayName-count-other": "вијетнамских донга",
                symbol: "VND",
                "symbol-alt-narrow": "₫"
            },
            VNN: {
                displayName: "Вијетнамски донг (1978–1985)",
                "displayName-count-one": "вијетнамски донг (1978–1985)",
                "displayName-count-few": "вијетнамска донга (1978–1985)",
                "displayName-count-other": "вијетнамских донга (1978–1985)",
                symbol: "VNN"
            },
            VUV: {
                displayName: "вануатски вату",
                "displayName-count-one": "вануатски вату",
                "displayName-count-few": "вануатскa ватуa",
                "displayName-count-other": "вануатских ватуa",
                symbol: "VUV"
            },
            WST: {
                displayName: "самоанска тала",
                "displayName-count-one": "самоанска тала",
                "displayName-count-few": "самоанске тале",
                "displayName-count-other": "самоанских тала",
                symbol: "WST"
            },
            XAF: {
                displayName: "централноафрички франак",
                "displayName-count-one": "централноафрички франак",
                "displayName-count-few": "централноафричка франка",
                "displayName-count-other": "централноафричких франака",
                symbol: "FCFA"
            },
            XAG: {
                displayName: "Сребро",
                "displayName-count-one": "сребро",
                "displayName-count-few": "сребра",
                "displayName-count-other": "сребра",
                symbol: "XAG"
            },
            XAU: {
                displayName: "Злато",
                "displayName-count-one": "злато",
                "displayName-count-few": "злата",
                "displayName-count-other": "злата",
                symbol: "XAU"
            },
            XBA: {
                displayName: "Европска композитна јединица",
                "displayName-count-one": "европска композитна јединица",
                "displayName-count-few": "европске композитне јединице",
                "displayName-count-other": "европских композитних јединица",
                symbol: "XBA"
            },
            XBB: {
                displayName: "Европска новчана јединица",
                "displayName-count-one": "европска новчана јединица (XBB)",
                "displayName-count-few": "европске новчане јединице (XBB)",
                "displayName-count-other": "европске новчане јединице (XBB)",
                symbol: "XBB"
            },
            XBC: {
                displayName: "Европска јединица рачуна (XBC)",
                "displayName-count-one": "европска јединица рачуна (XBC)",
                "displayName-count-few": "европске јединице рачуна (XBC)",
                "displayName-count-other": "европских јединица рачуна (XBC)",
                symbol: "XBC"
            },
            XBD: {
                displayName: "Европска јединица рачуна (XBD)",
                "displayName-count-one": "европска јединица рачуна (XBD)",
                "displayName-count-few": "европске јединице рачуна (XBD)",
                "displayName-count-other": "европских јединица рачуна (XBD)",
                symbol: "XBD"
            },
            XCD: {
                displayName: "источнокарипски долар",
                "displayName-count-one": "источнокарипски долар",
                "displayName-count-few": "источнокарипскa доларa",
                "displayName-count-other": "источнокарипскиx доларa",
                symbol: "EC$",
                "symbol-alt-narrow": "$"
            },
            XDR: {
                displayName: "Посебна цртаћа права",
                "displayName-count-one": "посебно цртаће право",
                "displayName-count-few": "посебна цртаћа права",
                "displayName-count-other": "посебних цртаћих права",
                symbol: "XDR"
            },
            XEU: {
                displayName: "Европска валутна јединица",
                "displayName-count-one": "европска новчана јединица (XEU)",
                "displayName-count-few": "европске новчане јединице (XEU)",
                "displayName-count-other": "европских новчаних јединица",
                symbol: "XEU"
            },
            XFO: {
                displayName: "Француски златни франак",
                "displayName-count-one": "француски златни франак",
                "displayName-count-few": "француска златна франка",
                "displayName-count-other": "француских златних франака",
                symbol: "XFO"
            },
            XFU: {
                displayName: "Француски UIC-франак",
                "displayName-count-one": "француски UIC-франак",
                "displayName-count-few": "француска UIC-франка",
                "displayName-count-other": "француских UIC-франака",
                symbol: "XFU"
            },
            XOF: {
                displayName: "западноафрички франак",
                "displayName-count-one": "западноафрички франак",
                "displayName-count-few": "западноафричка франка",
                "displayName-count-other": "западноафричких франака",
                symbol: "F CFA"
            },
            XPD: {
                displayName: "Паладијум",
                "displayName-count-one": "паладијум",
                "displayName-count-few": "паладијума",
                "displayName-count-other": "паладијума",
                symbol: "XPD"
            },
            XPF: {
                displayName: "CFP франак",
                "displayName-count-one": "CFP франак",
                "displayName-count-few": "CFP франка",
                "displayName-count-other": "CFP франака",
                symbol: "CFPF"
            },
            XPT: {
                displayName: "Платина",
                "displayName-count-one": "платина",
                "displayName-count-few": "платине",
                "displayName-count-other": "платина",
                symbol: "XPT"
            },
            XRE: {
                displayName: "RINET фонд",
                "displayName-count-one": "RINET фонд",
                "displayName-count-few": "RINET фонда",
                "displayName-count-other": "RINET фондова",
                symbol: "XRE"
            },
            XSU: {
                displayName: "XSU",
                symbol: "XSU"
            },
            XTS: {
                displayName: "Код тестиране валуте",
                "displayName-count-one": "код тестиране валуте",
                "displayName-count-few": "кода тестиране валуте",
                "displayName-count-other": "кодова тестиране валуте",
                symbol: "XTS"
            },
            XUA: {
                displayName: "XUA",
                symbol: "XUA"
            },
            XXX: {
                displayName: "Непозната валута",
                "displayName-count-one": "непозната јединица валуте",
                "displayName-count-few": "непознате валуте",
                "displayName-count-other": "непознатих валута",
                symbol: "¤"
            },
            YDD: {
                displayName: "Јеменски динар",
                "displayName-count-one": "јеменски долар",
                "displayName-count-few": "јеменска долара",
                "displayName-count-other": "јеменских долара",
                symbol: "YDD"
            },
            YER: {
                displayName: "јеменски ријал",
                "displayName-count-one": "јеменски ријал",
                "displayName-count-few": "јеменска ријала",
                "displayName-count-other": "jеменских ријала",
                symbol: "YER"
            },
            YUD: {
                displayName: "Југословенски тврди динар",
                "displayName-count-one": "југословенски тврди динар",
                "displayName-count-few": "југословенска тврда динара",
                "displayName-count-other": "југословенских тврдих динара",
                symbol: "YUD"
            },
            YUM: {
                displayName: "Југословенски нови динар",
                "displayName-count-one": "југословенски нови динар",
                "displayName-count-few": "југословенска нова динара",
                "displayName-count-other": "југословенских нових динара",
                symbol: "YUM"
            },
            YUN: {
                displayName: "Југословенски конвертибилни динар",
                "displayName-count-one": "југословенски конвертибилни динар",
                "displayName-count-few": "југословенска конвертибилна динара",
                "displayName-count-other": "југословенских конвертибилних динара",
                symbol: "YUN"
            },
            YUR: {
                displayName: "YUR",
                symbol: "YUR"
            },
            ZAL: {
                displayName: "Јужно-афрички ранд (финансијски)",
                "displayName-count-one": "јужноафрички ранд (финансијски)",
                "displayName-count-few": "јужноафричка ранда (финансијска)",
                "displayName-count-other": "јужноафричких ранда (финансијских)",
                symbol: "ZAL"
            },
            ZAR: {
                displayName: "јужноафрички ранд",
                "displayName-count-one": "јужноафрички ранд",
                "displayName-count-few": "јужноафричка ранда",
                "displayName-count-other": "јужноафричких ранда",
                symbol: "ZAR",
                "symbol-alt-narrow": "R"
            },
            ZMK: {
                displayName: "Замбијска квача (1968–2012)",
                "displayName-count-one": "замбијска квача (1968–2012)",
                "displayName-count-few": "замбијске кваче (1968–2012)",
                "displayName-count-other": "замбијских квача (1968–2012)",
                symbol: "ZMK"
            },
            ZMW: {
                displayName: "замбијска квача",
                "displayName-count-one": "замбијска квача",
                "displayName-count-few": "замбијске кваче",
                "displayName-count-other": "замбијских квача",
                symbol: "ZMW",
                "symbol-alt-narrow": "ZK"
            },
            ZRN: {
                displayName: "Заирски нови заир",
                "displayName-count-one": "заирски нови заир",
                "displayName-count-few": "заирска нова заира",
                "displayName-count-other": "заирских нових заира",
                symbol: "ZRN"
            },
            ZRZ: {
                displayName: "Заирски заир",
                "displayName-count-one": "заирски заир",
                "displayName-count-few": "заирска заира",
                "displayName-count-other": "заирских заира",
                symbol: "ZRZ"
            },
            ZWD: {
                displayName: "Зимбабвеански долар (1980–2008)",
                "displayName-count-one": "зимбабвејски долар (1980–2008)",
                "displayName-count-few": "зимбабвејска долара (1980–2008)",
                "displayName-count-other": "зимбабвејских долара (1980–2008)",
                symbol: "ZWD"
            },
            ZWL: {
                displayName: "Зимбабвеански долар (2009)",
                "displayName-count-one": "зимбабвејски долар (2009)",
                "displayName-count-few": "зимбабвејска долара (2009)",
                "displayName-count-other": "зимбабвејских долара (2009)",
                symbol: "ZWL"
            },
            ZWR: {
                displayName: "Зимбабвеански долар (2008)",
                "displayName-count-one": "зимбабвејски долар (2008)",
                "displayName-count-few": "зимбабвејска долара (2008)",
                "displayName-count-other": "зимбабвејских долара (2008)",
                symbol: "ZWR"
            }
        },
        localeCurrency: "EUR"
    },
    calendar: {
        patterns: {
            d: "d.M.y.",
            D: "EEEE, d. MMMM y.",
            m: "d. MMM",
            M: "d. MMMM",
            y: "MMM y.",
            Y: "MMMM y.",
            F: "EEEE, d. MMMM y. HH:mm:ss",
            g: "d.M.y. HH:mm",
            G: "d.M.y. HH:mm:ss",
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
                Bhm: "hh:mm B",
                Bhms: "hh:mm:ss B",
                d: "d",
                E: "E",
                EBhm: "E hh:mm B",
                EBhms: "E hh:mm:ss B",
                Ed: "E d.",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y. G",
                GyMd: "d.MM.y. GGGGG",
                GyMMM: "MMM y. G",
                GyMMMd: "d. MMM y. G",
                GyMMMEd: "E, d. MMM y. G",
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
                Md: "d.M.",
                MEd: "E, d.M.",
                MMdd: "dd.MM.",
                MMM: "LLL",
                MMMd: "d. MMM",
                MMMdd: "dd.MMM",
                MMMEd: "E d. MMM",
                MMMMd: "d. MMMM",
                MMMMEd: "E, d. MMMM",
                "MMMMW-count-one": "W. 'сједмица' 'у' MMMM",
                "MMMMW-count-few": "W. 'сједмица' 'у' MMMM",
                "MMMMW-count-other": "W. 'сједмица' 'у' MMMM",
                ms: "mm:ss",
                y: "y.",
                yM: "M.y.",
                yMd: "d.M.y.",
                yMEd: "E, d.M.y.",
                yMM: "MM.y.",
                yMMdd: "dd.MM.y.",
                yMMM: "MMM y.",
                yMMMd: "d. MMM y.",
                yMMMEd: "E, d. MMM y.",
                yMMMM: "MMMM y.",
                yQQQ: "QQQ y.",
                yQQQQ: "QQQQ y.",
                "yw-count-one": "w. 'сједмица' 'у' Y.",
                "yw-count-few": "w. 'сједмица' 'у' Y.",
                "yw-count-other": "w. 'сједмица' 'у' Y."
            }
        },
        timeFormats: {
            full: "HH:mm:ss zzzz",
            long: "HH:mm:ss z",
            medium: "HH:mm:ss",
            short: "HH:mm"
        },
        dateFormats: {
            full: "EEEE, d. MMMM y.",
            long: "d. MMMM y.",
            medium: "d. M. y.",
            short: "d.M.yy."
        },
        days: {
            format: {
                abbreviated: [
                    "нед",
                    "пон",
                    "уто",
                    "сре",
                    "чет",
                    "пет",
                    "суб"
                ],
                narrow: [
                    "н",
                    "п",
                    "у",
                    "с",
                    "ч",
                    "п",
                    "с"
                ],
                short: [
                    "не",
                    "по",
                    "ут",
                    "ср",
                    "че",
                    "пе",
                    "су"
                ],
                wide: [
                    "недјеља",
                    "понедељак",
                    "уторак",
                    "сриједа",
                    "четвртак",
                    "петак",
                    "субота"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "нед",
                    "пон",
                    "уто",
                    "сре",
                    "чет",
                    "пет",
                    "суб"
                ],
                narrow: [
                    "н",
                    "п",
                    "у",
                    "с",
                    "ч",
                    "п",
                    "с"
                ],
                short: [
                    "не",
                    "по",
                    "ут",
                    "ср",
                    "че",
                    "пе",
                    "су"
                ],
                wide: [
                    "недјеља",
                    "понедељак",
                    "уторак",
                    "сриједа",
                    "четвртак",
                    "петак",
                    "субота"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "јан",
                    "феб",
                    "март",
                    "апр",
                    "мај",
                    "јун",
                    "јул",
                    "авг",
                    "септ",
                    "окт",
                    "нов",
                    "дец"
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
                    "јануар",
                    "фебруар",
                    "март",
                    "април",
                    "мај",
                    "јун",
                    "јул",
                    "август",
                    "септембар",
                    "октобар",
                    "новембар",
                    "децембар"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "јан",
                    "феб",
                    "март",
                    "апр",
                    "мај",
                    "јун",
                    "јул",
                    "авг",
                    "септ",
                    "окт",
                    "нов",
                    "дец"
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
                    "јануар",
                    "фебруар",
                    "март",
                    "април",
                    "мај",
                    "јун",
                    "јул",
                    "август",
                    "септембар",
                    "октобар",
                    "новембар",
                    "децембар"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "1. кв.",
                    "2. кв.",
                    "3. кв.",
                    "4. кв."
                ],
                narrow: [
                    "1.",
                    "2.",
                    "3.",
                    "4."
                ],
                wide: [
                    "први квартал",
                    "други квартал",
                    "трећи квартал",
                    "четврти квартал"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "1. кв.",
                    "2. кв.",
                    "3. кв.",
                    "4. кв."
                ],
                narrow: [
                    "1.",
                    "2.",
                    "3.",
                    "4."
                ],
                wide: [
                    "први квартал",
                    "други квартал",
                    "трећи квартал",
                    "четврти квартал"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "поноћ",
                    am: "прије подне",
                    noon: "подне",
                    pm: "по подне",
                    morning1: "јутро",
                    afternoon1: "по под.",
                    evening1: "вече",
                    night1: "ноћу"
                },
                narrow: {
                    midnight: "поноћ",
                    am: "AM",
                    noon: "подне",
                    pm: "PM",
                    morning1: "јутро",
                    afternoon1: "по под.",
                    evening1: "вече",
                    night1: "ноћ"
                },
                wide: {
                    midnight: "поноћ",
                    am: "прије подне",
                    noon: "подне",
                    pm: "по подне",
                    morning1: "ујутро",
                    afternoon1: "по подне",
                    evening1: "увече",
                    night1: "ноћу"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "поноћ",
                    am: "прије подне",
                    noon: "подне",
                    pm: "по подне",
                    morning1: "јутро",
                    afternoon1: "поподне",
                    evening1: "вече",
                    night1: "ноћ"
                },
                narrow: {
                    midnight: "поноћ",
                    am: "a",
                    noon: "подне",
                    pm: "p",
                    morning1: "јутро",
                    afternoon1: "поподне",
                    evening1: "вече",
                    night1: "ноћ"
                },
                wide: {
                    midnight: "поноћ",
                    am: "прије подне",
                    noon: "подне",
                    pm: "по подне",
                    morning1: "јутро",
                    afternoon1: "поподне",
                    evening1: "вече",
                    night1: "ноћ"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "прије нове ере",
                    "1": "нове ере",
                    "0-alt-variant": "пре наше ере",
                    "1-alt-variant": "наше ере"
                },
                abbreviated: {
                    "0": "п. н. е.",
                    "1": "н. е.",
                    "0-alt-variant": "п. н. е.",
                    "1-alt-variant": "н. е."
                },
                narrow: {
                    "0": "п.н.е.",
                    "1": "н.е.",
                    "0-alt-variant": "п. н. е.",
                    "1-alt-variant": "н. е."
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
                narrow: "г."
            },
            quarter: {
                wide: "квартал",
                short: "кв.",
                narrow: "кв."
            },
            month: {
                wide: "месец",
                short: "мес.",
                narrow: "мес."
            },
            week: {
                wide: "недеља",
                short: "нед.",
                narrow: "нед."
            },
            weekOfMonth: {
                wide: "недеља у месецу",
                short: "нед. у мес.",
                narrow: "нед. у мес."
            },
            day: {
                wide: "дан",
                short: "д.",
                narrow: "д."
            },
            dayOfYear: {
                wide: "дан у години",
                short: "дан у год.",
                narrow: "дан у год."
            },
            weekday: {
                wide: "дан у недељи",
                short: "дан у недељи",
                narrow: "дан у недељи"
            },
            weekdayOfMonth: {
                wide: "дан у месецу",
                short: "дан у месецу",
                narrow: "дан у месецу"
            },
            dayperiod: {
                short: "пре подне/по подне",
                wide: "AM/PM",
                narrow: "пре подне/по подне"
            },
            hour: {
                wide: "сат",
                short: "ч.",
                narrow: "ч."
            },
            minute: {
                wide: "минут",
                short: "мин.",
                narrow: "мин."
            },
            second: {
                wide: "секунд",
                short: "сек.",
                narrow: "с"
            },
            zone: {
                wide: "временска зона",
                short: "временска зона",
                narrow: "временска зона"
            },
            millisecond: {
                narrow: "ms",
                short: "ms",
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
        sr: "sr-Cyrl-RS"
    }
};
export default data;

