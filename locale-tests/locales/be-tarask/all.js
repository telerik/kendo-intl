const data = {
    name: "be-tarask",
    identity: {
        language: "be",
        variant: "TARASK"
    },
    territory: "BY",
    numbers: {
        symbols: {
            decimal: ",",
            group: " ",
            list: ";",
            percentSign: "%",
            plusSign: "+",
            minusSign: "-",
            approximatelySign: "≈",
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
                "n %"
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
            "unitPattern-count-many": "n $",
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "n $"
            ],
            groupSize: [
                3
            ]
        },
        currencies: {
            ADP: {
                displayName: "ADP",
                symbol: "ADP"
            },
            AED: {
                displayName: "дырхам ААЭ",
                "displayName-count-one": "дырхам ААЭ",
                "displayName-count-few": "дырхамы ААЭ",
                "displayName-count-many": "дырхамаў ААЭ",
                "displayName-count-other": "дырхама ААЭ",
                symbol: "AED"
            },
            AFA: {
                displayName: "AFA",
                symbol: "AFA"
            },
            AFN: {
                displayName: "афганскі афгані",
                "displayName-count-one": "афганскі афгані",
                "displayName-count-few": "афганскія афгані",
                "displayName-count-many": "афганскіх афгані",
                "displayName-count-other": "афганскага афгані",
                symbol: "AFN",
                "symbol-alt-narrow": "؋"
            },
            ALK: {
                displayName: "ALK",
                symbol: "ALK"
            },
            ALL: {
                displayName: "албанскі лек",
                "displayName-count-one": "албанскі лек",
                "displayName-count-few": "албанскія лекі",
                "displayName-count-many": "албанскіх лекаў",
                "displayName-count-other": "албанскага лека",
                symbol: "ALL"
            },
            AMD: {
                displayName: "армянскі драм",
                "displayName-count-one": "армянскі драм",
                "displayName-count-few": "армянскія драмы",
                "displayName-count-many": "армянскіх драмаў",
                "displayName-count-other": "армянскага драма",
                symbol: "AMD",
                "symbol-alt-narrow": "֏"
            },
            ANG: {
                displayName: "нідэрландскі антыльскі гульдэн",
                "displayName-count-one": "нідэрландскі антыльскі гульдэн",
                "displayName-count-few": "нідэрландскія антыльскія гульдэны",
                "displayName-count-many": "нідэрландскіх антыльскіх гульдэнаў",
                "displayName-count-other": "нідэрландскага антыльскага гульдэна",
                symbol: "ANG"
            },
            AOA: {
                displayName: "ангольская кванза",
                "displayName-count-one": "ангольская кванза",
                "displayName-count-few": "ангольскія кванзы",
                "displayName-count-many": "ангольскіх кванз",
                "displayName-count-other": "ангольскай кванзы",
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
                displayName: "ARM",
                symbol: "ARM"
            },
            ARP: {
                displayName: "ARP",
                symbol: "ARP"
            },
            ARS: {
                displayName: "аргенцінскае песа",
                "displayName-count-one": "аргенцінскае песа",
                "displayName-count-few": "аргенцінскія песа",
                "displayName-count-many": "аргенцінскіх песа",
                "displayName-count-other": "аргенцінскага песа",
                symbol: "ARS",
                "symbol-alt-narrow": "$"
            },
            ATS: {
                displayName: "ATS",
                symbol: "ATS"
            },
            AUD: {
                displayName: "аўстралійскі долар",
                "displayName-count-one": "аўстралійскі долар",
                "displayName-count-few": "аўстралійскія долары",
                "displayName-count-many": "аўстралійскіх долараў",
                "displayName-count-other": "аўстралійскага долара",
                symbol: "A$",
                "symbol-alt-narrow": "A$"
            },
            AWG: {
                displayName: "арубанскі фларын",
                "displayName-count-one": "арубанскі фларын",
                "displayName-count-few": "арубанскія фларыны",
                "displayName-count-many": "арубанскіх фларынаў",
                "displayName-count-other": "арубанскага фларына",
                symbol: "AWG"
            },
            AZM: {
                displayName: "AZM",
                symbol: "AZM"
            },
            AZN: {
                displayName: "азербайджанскі манат",
                "displayName-count-one": "азербайджанскі манат",
                "displayName-count-few": "азербайджанскія манаты",
                "displayName-count-many": "азербайджанскіх манатаў",
                "displayName-count-other": "азербайджанскага маната",
                symbol: "AZN",
                "symbol-alt-narrow": "₼"
            },
            BAD: {
                displayName: "BAD",
                symbol: "BAD"
            },
            BAM: {
                displayName: "канверсоўная марка Босніі і Герцагавіны",
                "displayName-count-one": "канверсоўная марка Босніі і Герцагавіны",
                "displayName-count-few": "канверсоўныя маркі Босніі і Герцагавіны",
                "displayName-count-many": "канверсоўных марак Босніі і Герцагавіны",
                "displayName-count-other": "канверсоўнай маркі Босніі і Герцагавіны",
                symbol: "BAM",
                "symbol-alt-narrow": "KM"
            },
            BAN: {
                displayName: "BAN",
                symbol: "BAN"
            },
            BBD: {
                displayName: "барбадаскі долар",
                "displayName-count-one": "барбадаскі долар",
                "displayName-count-few": "барбадаскія долары",
                "displayName-count-many": "барбадаскіх долараў",
                "displayName-count-other": "барбадаскага долара",
                symbol: "BBD",
                "symbol-alt-narrow": "Bds$"
            },
            BDT: {
                displayName: "бангладэшская така",
                "displayName-count-one": "бангладэшская така",
                "displayName-count-few": "бангладэшскія такі",
                "displayName-count-many": "бангладэшскіх так",
                "displayName-count-other": "бангладэшскай такі",
                symbol: "BDT",
                "symbol-alt-narrow": "৳"
            },
            BEC: {
                displayName: "BEC",
                symbol: "BEC"
            },
            BEF: {
                displayName: "BEF",
                symbol: "BEF"
            },
            BEL: {
                displayName: "BEL",
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
                displayName: "балгарскі леў",
                "displayName-count-one": "балгарскі леў",
                "displayName-count-few": "балгарскія левы",
                "displayName-count-many": "балгарскіх леваў",
                "displayName-count-other": "балгарскага лева",
                symbol: "BGN"
            },
            BGO: {
                displayName: "BGO",
                symbol: "BGO"
            },
            BHD: {
                displayName: "бахрэйнскі дынар",
                "displayName-count-one": "бахрэйнскі дынар",
                "displayName-count-few": "бахрэйнскія дынары",
                "displayName-count-many": "бахрэйнскі дынараў",
                "displayName-count-other": "бахрэйнскага дынара",
                symbol: "BHD"
            },
            BIF: {
                displayName: "бурундзійскі франк",
                "displayName-count-one": "бурундзійскі франк",
                "displayName-count-few": "бурундзійскія франкі",
                "displayName-count-many": "бурундзійскіх франкаў",
                "displayName-count-other": "бурундзійскага франка",
                symbol: "BIF"
            },
            BMD: {
                displayName: "бермудскі долар",
                "displayName-count-one": "бермудскі долар",
                "displayName-count-few": "бермудскія долары",
                "displayName-count-many": "бермудскіх долараў",
                "displayName-count-other": "бермудскага долара",
                symbol: "BMD",
                "symbol-alt-narrow": "BD$"
            },
            BND: {
                displayName: "брунейскі долар",
                "displayName-count-one": "брунейскі долар",
                "displayName-count-few": "брунейскія долары",
                "displayName-count-many": "брунейскіх долараў",
                "displayName-count-other": "брунейскага долара",
                symbol: "BND",
                "symbol-alt-narrow": "$"
            },
            BOB: {
                displayName: "балівіяна",
                "displayName-count-one": "балівіяна",
                "displayName-count-few": "балівіяна",
                "displayName-count-many": "балівіяна",
                "displayName-count-other": "балівіяна",
                symbol: "BOB",
                "symbol-alt-narrow": "Bs"
            },
            BOL: {
                displayName: "BOL",
                symbol: "BOL"
            },
            BOP: {
                displayName: "BOP",
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
                displayName: "бразільскі рэал",
                "displayName-count-one": "бразільскі рэал",
                "displayName-count-few": "бразільскія рэалы",
                "displayName-count-many": "бразільскіх рэалаў",
                "displayName-count-other": "бразільскага рэала",
                symbol: "BRL",
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
                displayName: "багамскі долар",
                "displayName-count-one": "багамскі долар",
                "displayName-count-few": "багамскія долары",
                "displayName-count-many": "багамскіх долараў",
                "displayName-count-other": "багамскага долара",
                symbol: "BSD",
                "symbol-alt-narrow": "B$"
            },
            BTN: {
                displayName: "бутанскі нгултрум",
                "displayName-count-one": "бутанскі нгултрум",
                "displayName-count-few": "бутанскія нгултрумы",
                "displayName-count-many": "бутанскіх нгултрумаў",
                "displayName-count-other": "бутанскага нгултрума",
                symbol: "BTN"
            },
            BUK: {
                displayName: "BUK",
                symbol: "BUK"
            },
            BWP: {
                displayName: "батсванская пула",
                "displayName-count-one": "батсванская пула",
                "displayName-count-few": "батсванскія пулы",
                "displayName-count-many": "батсванскіх пул",
                "displayName-count-other": "батсванскай пулы",
                symbol: "BWP",
                "symbol-alt-narrow": "P"
            },
            BYB: {
                displayName: "BYB",
                symbol: "BYB"
            },
            BYN: {
                displayName: "беларускі рубель",
                "displayName-count-one": "беларускі рубель",
                "displayName-count-few": "беларускія рублі",
                "displayName-count-many": "беларускіх рублёў",
                "displayName-count-other": "беларускага рубля",
                symbol: "Br"
            },
            BYR: {
                displayName: "беларускі рубель (2000–2016)",
                "displayName-count-one": "беларускі рубель (2000–2016)",
                "displayName-count-few": "беларускія рублі (2000–2016)",
                "displayName-count-many": "беларускіх рублёў (2000–2016)",
                "displayName-count-other": "беларускага рубля (2000–2016)",
                symbol: "BYR"
            },
            BZD: {
                displayName: "белізскі долар",
                "displayName-count-one": "белізскі долар",
                "displayName-count-few": "белізскія долары",
                "displayName-count-many": "белізскіх долараў",
                "displayName-count-other": "белізскага долара",
                symbol: "BZD",
                "symbol-alt-narrow": "BZ$"
            },
            CAD: {
                displayName: "канадскі долар",
                "displayName-count-one": "канадскі долар",
                "displayName-count-few": "канадскія долары",
                "displayName-count-many": "канадскіх долараў",
                "displayName-count-other": "канадскага долара",
                symbol: "CAD",
                "symbol-alt-narrow": "CA$"
            },
            CDF: {
                displayName: "кангалезскі франк",
                "displayName-count-one": "кангалезскі франк",
                "displayName-count-few": "кангалезскія франкі",
                "displayName-count-many": "кангалезскіх франкаў",
                "displayName-count-other": "кангалезскага франка",
                symbol: "CDF"
            },
            CHE: {
                displayName: "CHE",
                symbol: "CHE"
            },
            CHF: {
                displayName: "швейцарскі франк",
                "displayName-count-one": "швейцарскі франк",
                "displayName-count-few": "швейцарскія франкі",
                "displayName-count-many": "швейцарскіх франкаў",
                "displayName-count-other": "швейцарскага франка",
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
                displayName: "чылійскае песа",
                "displayName-count-one": "чылійскае песа",
                "displayName-count-few": "чылійскія песа",
                "displayName-count-many": "чылійскіх песа",
                "displayName-count-other": "чылійскага песа",
                symbol: "CLP",
                "symbol-alt-narrow": "$"
            },
            CNH: {
                displayName: "афшорны кітайскі юань",
                "displayName-count-one": "афшорны кітайскі юань",
                "displayName-count-few": "афшорныя кітайскія юані",
                "displayName-count-many": "афшорных кітайскіх юаняў",
                "displayName-count-other": "афшорнага кітайскага юаня",
                symbol: "CNH"
            },
            CNX: {
                displayName: "CNX",
                symbol: "CNX"
            },
            CNY: {
                displayName: "кітайскі юань",
                "displayName-count-one": "кітайскі юань",
                "displayName-count-few": "кітайскія юані",
                "displayName-count-many": "кітайскіх юаняў",
                "displayName-count-other": "кітайскага юаня",
                symbol: "CN¥",
                "symbol-alt-narrow": "¥"
            },
            COP: {
                displayName: "калумбійскае песа",
                "displayName-count-one": "калумбійскае песа",
                "displayName-count-few": "калумбійскія песа",
                "displayName-count-many": "калумбійскіх песа",
                "displayName-count-other": "калумбійскага песа",
                symbol: "COP",
                "symbol-alt-narrow": "$"
            },
            COU: {
                displayName: "COU",
                symbol: "COU"
            },
            CRC: {
                displayName: "коста-рыканскі калон",
                "displayName-count-one": "коста-рыканскі калон",
                "displayName-count-few": "коста-рыканскія калоны",
                "displayName-count-many": "коста-рыканскіх калонаў",
                "displayName-count-other": "коста-рыканскага калона",
                symbol: "CRC",
                "symbol-alt-narrow": "₡"
            },
            CSD: {
                displayName: "CSD",
                symbol: "CSD"
            },
            CSK: {
                displayName: "CSK",
                symbol: "CSK"
            },
            CUC: {
                displayName: "кубінскае канверсоўнае песа",
                "displayName-count-one": "кубінскае канверсоўнае песа",
                "displayName-count-few": "кубінскія канверсоўныя песа",
                "displayName-count-many": "кубінскіх канверсоўных песа",
                "displayName-count-other": "кубінскага канверсоўнага песа",
                symbol: "CUC",
                "symbol-alt-narrow": "CUC$"
            },
            CUP: {
                displayName: "кубінскае песа",
                "displayName-count-one": "кубінскае песа",
                "displayName-count-few": "кубінскія песа",
                "displayName-count-many": "кубінскіх песа",
                "displayName-count-other": "кубінскага песа",
                symbol: "CUP",
                "symbol-alt-narrow": "$MN"
            },
            CVE: {
                displayName: "эскуда Каба-Вердэ",
                "displayName-count-one": "эскуда Каба-Вердэ",
                "displayName-count-few": "эскуда Каба-Вердэ",
                "displayName-count-many": "эскуда Каба-Вердэ",
                "displayName-count-other": "эскуда Каба-Вердэ",
                symbol: "CVE"
            },
            CYP: {
                displayName: "CYP",
                symbol: "CYP"
            },
            CZK: {
                displayName: "чэшская крона",
                "displayName-count-one": "чэшская крона",
                "displayName-count-few": "чэшскія кроны",
                "displayName-count-many": "чэшскіх крон",
                "displayName-count-other": "чэшскай кроны",
                symbol: "CZK",
                "symbol-alt-narrow": "Kč"
            },
            DDM: {
                displayName: "DDM",
                symbol: "DDM"
            },
            DEM: {
                displayName: "DEM",
                symbol: "DEM"
            },
            DJF: {
                displayName: "джыбуційскі франк",
                "displayName-count-one": "джыбуційскі франк",
                "displayName-count-few": "джыбуційскія франкі",
                "displayName-count-many": "джыбуційскіх франкаў",
                "displayName-count-other": "джыбуційскага франка",
                symbol: "DJF"
            },
            DKK: {
                displayName: "дацкая крона",
                "displayName-count-one": "дацкая крона",
                "displayName-count-few": "дацкія кроны",
                "displayName-count-many": "дацкіх крон",
                "displayName-count-other": "дацкай кроны",
                symbol: "DKK",
                "symbol-alt-narrow": "kr"
            },
            DOP: {
                displayName: "дамініканскае песа",
                "displayName-count-one": "дамініканскае песа",
                "displayName-count-few": "дамініканскія песа",
                "displayName-count-many": "дамініканскіх песа",
                "displayName-count-other": "дамініканскага песа",
                symbol: "DOP",
                "symbol-alt-narrow": "RD$"
            },
            DZD: {
                displayName: "алжырскі дынар",
                "displayName-count-one": "алжырскі дынар",
                "displayName-count-few": "алжырскія дынары",
                "displayName-count-many": "алжырскіх дынараў",
                "displayName-count-other": "алжырскага дынара",
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
                displayName: "EEK",
                symbol: "EEK"
            },
            EGP: {
                displayName: "егіпецкі фунт",
                "displayName-count-one": "егіпецкі фунт",
                "displayName-count-few": "егіпецкія фунты",
                "displayName-count-many": "егіпецкіх фунтаў",
                "displayName-count-other": "егіпецкага фунта",
                symbol: "EGP",
                "symbol-alt-narrow": "E£"
            },
            ERN: {
                displayName: "эрытрэйская накфа",
                "displayName-count-one": "эрытрэйская накфа",
                "displayName-count-few": "эрытрэйскія накфы",
                "displayName-count-many": "эрытрэйскіх накфаў",
                "displayName-count-other": "эрытрэйскай накфы",
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
                displayName: "ESP",
                symbol: "ESP",
                "symbol-alt-narrow": "₧"
            },
            ETB: {
                displayName: "эфіопскі быр",
                "displayName-count-one": "эфіопскі быр",
                "displayName-count-few": "эфіопскія быры",
                "displayName-count-many": "эфіопскіх быраў",
                "displayName-count-other": "эфіопскага быра",
                symbol: "ETB"
            },
            EUR: {
                displayName: "еўра",
                "displayName-count-one": "еўра",
                "displayName-count-few": "еўра",
                "displayName-count-many": "еўра",
                "displayName-count-other": "еўра",
                symbol: "€",
                "symbol-alt-narrow": "€"
            },
            FIM: {
                displayName: "FIM",
                symbol: "FIM"
            },
            FJD: {
                displayName: "фіджыйскі долар",
                "displayName-count-one": "фіджыйскі долар",
                "displayName-count-few": "фіджыйскія долары",
                "displayName-count-many": "фіджыйскіх долараў",
                "displayName-count-other": "фіджыйскага долара",
                symbol: "FJD",
                "symbol-alt-narrow": "FJ$"
            },
            FKP: {
                displayName: "фунт Фалклендскіх астравоў",
                "displayName-count-one": "фунт Фалклендскіх астравоў",
                "displayName-count-few": "фунты Фалклендскіх астравоў",
                "displayName-count-many": "фунтаў Фалклендскіх астравоў",
                "displayName-count-other": "фунта Фалклендскіх астравоў",
                symbol: "FKP",
                "symbol-alt-narrow": "FK£"
            },
            FRF: {
                displayName: "FRF",
                symbol: "FRF"
            },
            GBP: {
                displayName: "брытанскі фунт стэрлінгаў",
                "displayName-count-one": "брытанскі фунт стэрлінгаў",
                "displayName-count-few": "брытанскія фунты стэрлінгаў",
                "displayName-count-many": "брытанскіх фунтаў стэрлінгаў",
                "displayName-count-other": "брытанскага фунта стэрлінгаў",
                symbol: "£",
                "symbol-alt-narrow": "£"
            },
            GEK: {
                displayName: "GEK",
                symbol: "GEK"
            },
            GEL: {
                displayName: "грузінскі лары",
                "displayName-count-one": "грузінскі лары",
                "displayName-count-few": "грузінскія лары",
                "displayName-count-many": "грузінскіх лары",
                "displayName-count-other": "грузінскага лары",
                symbol: "GEL",
                "symbol-alt-narrow": "₾"
            },
            GHC: {
                displayName: "GHC",
                symbol: "GHC"
            },
            GHS: {
                displayName: "ганскі седзі",
                "displayName-count-one": "ганскі седзі",
                "displayName-count-few": "ганскія седзі",
                "displayName-count-many": "ганскіх седзі",
                "displayName-count-other": "ганскага седзі",
                symbol: "GHS",
                "symbol-alt-narrow": "GH₵"
            },
            GIP: {
                displayName: "гібралтарскі фунт",
                "displayName-count-one": "гібралтарскі фунт",
                "displayName-count-few": "гібралтарскія фунты",
                "displayName-count-many": "гібралтарскіх фунтаў",
                "displayName-count-other": "гібралтарскага фунта",
                symbol: "GIP",
                "symbol-alt-narrow": "£"
            },
            GMD: {
                displayName: "гамбійскі даласі",
                "displayName-count-one": "гамбійскі даласі",
                "displayName-count-few": "гамбійскія даласі",
                "displayName-count-many": "гамбійскіх даласі",
                "displayName-count-other": "гамбійскага даласі",
                symbol: "GMD"
            },
            GNF: {
                displayName: "гвінейскі франк",
                "displayName-count-one": "гвінейскі франк",
                "displayName-count-few": "гвінейскія франкі",
                "displayName-count-many": "гвінейскіх франкаў",
                "displayName-count-other": "гвінейскага франка",
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
                displayName: "GRD",
                symbol: "GRD"
            },
            GTQ: {
                displayName: "гватэмальскі кетсаль",
                "displayName-count-one": "гватэмальскі кетсаль",
                "displayName-count-few": "гватэмальскія кетсалі",
                "displayName-count-many": "гватэмальскіх кетсаляў",
                "displayName-count-other": "гватэмальскага кетсаля",
                symbol: "GTQ",
                "symbol-alt-narrow": "Q"
            },
            GWE: {
                displayName: "GWE",
                symbol: "GWE"
            },
            GWP: {
                displayName: "GWP",
                symbol: "GWP"
            },
            GYD: {
                displayName: "гаянскі долар",
                "displayName-count-one": "гаянскі долар",
                "displayName-count-few": "гаянскія долары",
                "displayName-count-many": "гаянскіх долараў",
                "displayName-count-other": "гаянскага долара",
                symbol: "GYD",
                "symbol-alt-narrow": "G$"
            },
            HKD: {
                displayName: "ганконгскі долар",
                "displayName-count-one": "ганконгскі долар",
                "displayName-count-few": "ганконгскія долары",
                "displayName-count-many": "ганконгскіх долараў",
                "displayName-count-other": "ганконгскага долара",
                symbol: "HK$",
                "symbol-alt-narrow": "$"
            },
            HNL: {
                displayName: "гандураская лемпіра",
                "displayName-count-one": "гандураская лемпіра",
                "displayName-count-few": "гандураскія лемпіры",
                "displayName-count-many": "гандураскіх лемпір",
                "displayName-count-other": "гандураскай лемпіры",
                symbol: "HNL",
                "symbol-alt-narrow": "L"
            },
            HRD: {
                displayName: "HRD",
                symbol: "HRD"
            },
            HRK: {
                displayName: "харвацкая куна",
                "displayName-count-one": "харвацкая куна",
                "displayName-count-few": "харвацкія куны",
                "displayName-count-many": "харвацкіх кун",
                "displayName-count-other": "харвацкай куны",
                symbol: "HRK",
                "symbol-alt-narrow": "kn"
            },
            HTG: {
                displayName: "гаіцянскі гурд",
                "displayName-count-one": "гаіцянскі гурд",
                "displayName-count-few": "гаіцянскія гурды",
                "displayName-count-many": "гаіцянскіх гурдаў",
                "displayName-count-other": "гаіцянскага гурда",
                symbol: "HTG"
            },
            HUF: {
                displayName: "венгерскі форынт",
                "displayName-count-one": "венгерскі форынт",
                "displayName-count-few": "венгерскія форынты",
                "displayName-count-many": "венгерскіх форынтаў",
                "displayName-count-other": "венгерскага форынта",
                symbol: "HUF",
                "symbol-alt-narrow": "Ft"
            },
            IDR: {
                displayName: "інданезійская рупія",
                "displayName-count-one": "інданезійская рупія",
                "displayName-count-few": "інданезійскія рупіі",
                "displayName-count-many": "інданезійскіх рупій",
                "displayName-count-other": "інданезійскай рупіі",
                symbol: "IDR",
                "symbol-alt-narrow": "Rp"
            },
            IEP: {
                displayName: "IEP",
                symbol: "IEP"
            },
            ILP: {
                displayName: "ILP",
                symbol: "ILP"
            },
            ILR: {
                displayName: "ILR",
                symbol: "ILR"
            },
            ILS: {
                displayName: "новы ізраільскі шэкель",
                "displayName-count-one": "новы ізраільскі шэкель",
                "displayName-count-few": "новыя ізраільскія шэкелі",
                "displayName-count-many": "новых ізраільскіх шэкеляў",
                "displayName-count-other": "новага ізраільскага шэкеля",
                symbol: "₪",
                "symbol-alt-narrow": "₪"
            },
            INR: {
                displayName: "індыйская рупія",
                "displayName-count-one": "індыйская рупія",
                "displayName-count-few": "індыйскія рупіі",
                "displayName-count-many": "індыйскіх рупій",
                "displayName-count-other": "індыйскай рупіі",
                symbol: "₹",
                "symbol-alt-narrow": "₹"
            },
            IQD: {
                displayName: "іракскі дынар",
                "displayName-count-one": "іракскі дынар",
                "displayName-count-few": "іракскія дынары",
                "displayName-count-many": "іракскіх дынараў",
                "displayName-count-other": "іракскага дынара",
                symbol: "IQD"
            },
            IRR: {
                displayName: "іранскі рыял",
                "displayName-count-one": "іранскі рыял",
                "displayName-count-few": "іранскія рыялы",
                "displayName-count-many": "іранскіх рыялаў",
                "displayName-count-other": "іранскага рыяла",
                symbol: "IRR"
            },
            ISJ: {
                displayName: "ISJ",
                symbol: "ISJ"
            },
            ISK: {
                displayName: "ісландская крона",
                "displayName-count-one": "ісландская крона",
                "displayName-count-few": "ісландскія кроны",
                "displayName-count-many": "ісландскіх крон",
                "displayName-count-other": "ісландскай кроны",
                symbol: "ISK",
                "symbol-alt-narrow": "Íkr"
            },
            ITL: {
                displayName: "ITL",
                symbol: "ITL"
            },
            JMD: {
                displayName: "ямайскі долар",
                "displayName-count-one": "ямайскі долар",
                "displayName-count-few": "ямайскія долары",
                "displayName-count-many": "ямайскіх долараў",
                "displayName-count-other": "ямайскага долара",
                symbol: "JMD",
                "symbol-alt-narrow": "J$"
            },
            JOD: {
                displayName: "іарданскі дынар",
                "displayName-count-one": "іарданскі дынар",
                "displayName-count-few": "іарданскія дынары",
                "displayName-count-many": "іарданскіх дынараў",
                "displayName-count-other": "іарданскага дынара",
                symbol: "JOD"
            },
            JPY: {
                displayName: "японская іена",
                "displayName-count-one": "японская іена",
                "displayName-count-few": "японскія іены",
                "displayName-count-many": "японскіх іен",
                "displayName-count-other": "японскай іены",
                symbol: "¥",
                "symbol-alt-narrow": "¥"
            },
            KES: {
                displayName: "кенійскі шылінг",
                "displayName-count-one": "кенійскі шылінг",
                "displayName-count-few": "кенійскія шылінгі",
                "displayName-count-many": "кенійскіх шылінгаў",
                "displayName-count-other": "кенійскага шылінга",
                symbol: "KES"
            },
            KGS: {
                displayName: "кіргізскі сом",
                "displayName-count-one": "кіргізскі сом",
                "displayName-count-few": "кіргізскія сомы",
                "displayName-count-many": "кіргізскіх сомаў",
                "displayName-count-other": "кіргізскага сома",
                symbol: "KGS"
            },
            KHR: {
                displayName: "камбаджыйскі рыель",
                "displayName-count-one": "камбаджыйскі рыель",
                "displayName-count-few": "камбаджыйскія рыелі",
                "displayName-count-many": "камбаджыйскіх рыеляў",
                "displayName-count-other": "камбаджыйскага рыеля",
                symbol: "KHR",
                "symbol-alt-narrow": "៛"
            },
            KMF: {
                displayName: "каморскі франк",
                "displayName-count-one": "каморскі франк",
                "displayName-count-few": "каморскія франкі",
                "displayName-count-many": "каморскіх франкаў",
                "displayName-count-other": "каморскага франка",
                symbol: "KMF",
                "symbol-alt-narrow": "CF"
            },
            KPW: {
                displayName: "паўночнакарэйская вона",
                "displayName-count-one": "паўночнакарэйская вона",
                "displayName-count-few": "паўночнакарэйскія воны",
                "displayName-count-many": "паўночнакарэйскіх вон",
                "displayName-count-other": "паўночнакарэйскай воны",
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
                displayName: "паўднёвакарэйская вона",
                "displayName-count-one": "паўднёвакарэйская вона",
                "displayName-count-few": "паўднёвакарэйскія воны",
                "displayName-count-many": "паўднёвакарэйскіх вон",
                "displayName-count-other": "паўднёвакарэйскай воны",
                symbol: "₩",
                "symbol-alt-narrow": "₩"
            },
            KWD: {
                displayName: "кувейцкі дынар",
                "displayName-count-one": "кувейцкі дынар",
                "displayName-count-few": "кувейцкія дынары",
                "displayName-count-many": "кувейцкіх дынараў",
                "displayName-count-other": "кувейцкага дынара",
                symbol: "KWD"
            },
            KYD: {
                displayName: "долар Кайманавых астравоў",
                "displayName-count-one": "долар Кайманавых астравоў",
                "displayName-count-few": "долары Кайманавых астравоў",
                "displayName-count-many": "долараў Кайманавых астравоў",
                "displayName-count-other": "долара Кайманавых астравоў",
                symbol: "KYD",
                "symbol-alt-narrow": "CI$"
            },
            KZT: {
                displayName: "казахстанскі тэнге",
                "displayName-count-one": "казахстанскі тэнге",
                "displayName-count-few": "казахстанскія тэнге",
                "displayName-count-many": "казахстанскіх тэнге",
                "displayName-count-other": "казахстанскага тэнге",
                symbol: "KZT",
                "symbol-alt-narrow": "₸"
            },
            LAK: {
                displayName: "лаоскі кіп",
                "displayName-count-one": "лаоскі кіп",
                "displayName-count-few": "лаоскія кіпы",
                "displayName-count-many": "лаоскіх кіпаў",
                "displayName-count-other": "лаоскага кіпа",
                symbol: "LAK",
                "symbol-alt-narrow": "₭"
            },
            LBP: {
                displayName: "ліванскі фунт",
                "displayName-count-one": "ліванскі фунт",
                "displayName-count-few": "ліванскія фунты",
                "displayName-count-many": "ліванскіх фунтаў",
                "displayName-count-other": "ліванскага фунта",
                symbol: "LBP",
                "symbol-alt-narrow": "L£"
            },
            LKR: {
                displayName: "шры-ланкійская рупія",
                "displayName-count-one": "шры-ланкійская рупія",
                "displayName-count-few": "шры-ланкійскія рупіі",
                "displayName-count-many": "шры-ланкійскіх рупій",
                "displayName-count-other": "шры-ланкійскай рупіі",
                symbol: "LKR",
                "symbol-alt-narrow": "Rs"
            },
            LRD: {
                displayName: "ліберыйскі долар",
                "displayName-count-one": "ліберыйскі долар",
                "displayName-count-few": "ліберыйскія долары",
                "displayName-count-many": "ліберыйскіх долараў",
                "displayName-count-other": "ліберыйскага долара",
                symbol: "LRD",
                "symbol-alt-narrow": "L$"
            },
            LSL: {
                displayName: "лесоцкі лоці",
                "displayName-count-one": "лесоцкі лоці",
                "displayName-count-few": "лесоцкія лоці",
                "displayName-count-many": "лесоцкіх лоці",
                "displayName-count-other": "лесоцкага лоці",
                symbol: "LSL"
            },
            LTL: {
                displayName: "LTL",
                symbol: "LTL",
                "symbol-alt-narrow": "Lt"
            },
            LTT: {
                displayName: "LTT",
                symbol: "LTT"
            },
            LUC: {
                displayName: "LUC",
                symbol: "LUC"
            },
            LUF: {
                displayName: "LUF",
                symbol: "LUF"
            },
            LUL: {
                displayName: "LUL",
                symbol: "LUL"
            },
            LVL: {
                displayName: "LVL",
                symbol: "LVL",
                "symbol-alt-narrow": "Ls"
            },
            LVR: {
                displayName: "LVR",
                symbol: "LVR"
            },
            LYD: {
                displayName: "лівійскі дынар",
                "displayName-count-one": "лівійскі дынар",
                "displayName-count-few": "лівійскія дынары",
                "displayName-count-many": "лівійскіх дынараў",
                "displayName-count-other": "лівійскага дынара",
                symbol: "LYD"
            },
            MAD: {
                displayName: "мараканскі дырхам",
                "displayName-count-one": "мараканскі дырхам",
                "displayName-count-few": "мараканскія дырхамы",
                "displayName-count-many": "мараканскіх дырхамаў",
                "displayName-count-other": "мараканскага дырхама",
                symbol: "MAD"
            },
            MAF: {
                displayName: "MAF",
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
                displayName: "малдаўскі лей",
                "displayName-count-one": "малдаўскі лей",
                "displayName-count-few": "малдаўскія леі",
                "displayName-count-many": "малдаўскіх леяў",
                "displayName-count-other": "малдаўскага лея",
                symbol: "MDL"
            },
            MGA: {
                displayName: "малагасійскі арыяры",
                "displayName-count-one": "малагасійскі арыяры",
                "displayName-count-few": "малагасійскія арыяры",
                "displayName-count-many": "малагасійскіх арыяры",
                "displayName-count-other": "малагасійскага арыяры",
                symbol: "MGA",
                "symbol-alt-narrow": "Ar"
            },
            MGF: {
                displayName: "MGF",
                symbol: "MGF"
            },
            MKD: {
                displayName: "македонскі дэнар",
                "displayName-count-one": "македонскі дэнар",
                "displayName-count-few": "македонскія дэнары",
                "displayName-count-many": "македонскіх дэнараў",
                "displayName-count-other": "македонскага дэнара",
                symbol: "MKD"
            },
            MKN: {
                displayName: "MKN",
                symbol: "MKN"
            },
            MLF: {
                displayName: "MLF",
                symbol: "MLF"
            },
            MMK: {
                displayName: "м’янманскі к’ят",
                "displayName-count-one": "м’янманскі к’ят",
                "displayName-count-few": "м’янманскія к’яты",
                "displayName-count-many": "м’янманскіх к’ятаў",
                "displayName-count-other": "м’янманскага к’ята",
                symbol: "MMK",
                "symbol-alt-narrow": "K"
            },
            MNT: {
                displayName: "мангольскі тугрык",
                "displayName-count-one": "мангольскі тугрык",
                "displayName-count-few": "мангольскія тугрыкі",
                "displayName-count-many": "мангольскіх тугрыкаў",
                "displayName-count-other": "мангольскага тугрыка",
                symbol: "MNT",
                "symbol-alt-narrow": "₮"
            },
            MOP: {
                displayName: "патака Макаа",
                "displayName-count-one": "патака Макаа",
                "displayName-count-few": "патакі Макаа",
                "displayName-count-many": "патак Макаа",
                "displayName-count-other": "патакі Макаа",
                symbol: "MOP"
            },
            MRO: {
                displayName: "маўрытанская ўгія (1973–2017)",
                "displayName-count-one": "маўрытанская ўгія (1973–2017)",
                "displayName-count-few": "маўрытанскія ўгіі (1973–2017)",
                "displayName-count-many": "маўрытанскіх угій (1973–2017)",
                "displayName-count-other": "маўрытанскай ўгіі (1973–2017)",
                symbol: "MRO"
            },
            MRU: {
                displayName: "маўрытанская угія",
                "displayName-count-one": "маўрытанская угія",
                "displayName-count-few": "маўрытанскія угіі",
                "displayName-count-many": "маўрытанскіх угій",
                "displayName-count-other": "маўрытанскай угіі",
                symbol: "MRU"
            },
            MTL: {
                displayName: "MTL",
                symbol: "MTL"
            },
            MTP: {
                displayName: "MTP",
                symbol: "MTP"
            },
            MUR: {
                displayName: "маўрыкійская рупія",
                "displayName-count-one": "маўрыкійская рупія",
                "displayName-count-few": "маўрыкійскія рупіі",
                "displayName-count-many": "маўрыкійскіх рупій",
                "displayName-count-other": "маўрыкійскай рупіі",
                symbol: "MUR",
                "symbol-alt-narrow": "Rs"
            },
            MVP: {
                displayName: "MVP",
                symbol: "MVP"
            },
            MVR: {
                displayName: "мальдыўская руфія",
                "displayName-count-one": "мальдыўская руфія",
                "displayName-count-few": "мальдыўскія руфіі",
                "displayName-count-many": "мальдыўскіх руфій",
                "displayName-count-other": "мальдыўскай руфіі",
                symbol: "MVR"
            },
            MWK: {
                displayName: "малавійская квача",
                "displayName-count-one": "малавійская квача",
                "displayName-count-few": "малавійскія квачы",
                "displayName-count-many": "малавійскіх квач",
                "displayName-count-other": "малавійскай квачы",
                symbol: "MWK"
            },
            MXN: {
                displayName: "мексіканскае песа",
                "displayName-count-one": "мексіканскае песа",
                "displayName-count-few": "мексіканскія песа",
                "displayName-count-many": "мексіканскіх песа",
                "displayName-count-other": "мексіканскага песа",
                symbol: "MX$",
                "symbol-alt-narrow": "MX$"
            },
            MXP: {
                displayName: "MXP",
                symbol: "MXP"
            },
            MXV: {
                displayName: "MXV",
                symbol: "MXV"
            },
            MYR: {
                displayName: "малайзійскі рынгіт",
                "displayName-count-one": "малайзійскі рынгіт",
                "displayName-count-few": "малайзійскія рынгіты",
                "displayName-count-many": "малайзійскіх рынгітаў",
                "displayName-count-other": "малайзійскага рынгіта",
                symbol: "MYR",
                "symbol-alt-narrow": "RM"
            },
            MZE: {
                displayName: "MZE",
                symbol: "MZE"
            },
            MZM: {
                displayName: "MZM",
                symbol: "MZM"
            },
            MZN: {
                displayName: "мазамбікскі метыкал",
                "displayName-count-one": "мазамбікскі метыкал",
                "displayName-count-few": "мазамбікскія метыкалы",
                "displayName-count-many": "мазамбікскіх метыкалаў",
                "displayName-count-other": "мазамбікскага метыкала",
                symbol: "MZN"
            },
            NAD: {
                displayName: "намібійскі долар",
                "displayName-count-one": "намібійскі долар",
                "displayName-count-few": "намібійскія долары",
                "displayName-count-many": "намібійскіх долараў",
                "displayName-count-other": "намібійскага долара",
                symbol: "NAD",
                "symbol-alt-narrow": "N$"
            },
            NGN: {
                displayName: "нігерыйская наіра",
                "displayName-count-one": "нігерыйская наіра",
                "displayName-count-few": "нігерыйскія наіры",
                "displayName-count-many": "нігерыйскіх наір",
                "displayName-count-other": "нігерыйскай наіры",
                symbol: "NGN",
                "symbol-alt-narrow": "₦"
            },
            NIC: {
                displayName: "NIC",
                symbol: "NIC"
            },
            NIO: {
                displayName: "нікарагуанская кордаба",
                "displayName-count-one": "нікарагуанская кордаба",
                "displayName-count-few": "нікарагуанскія кордабы",
                "displayName-count-many": "нікарагуанскіх кордаб",
                "displayName-count-other": "нікарагуанскай кордабы",
                symbol: "NIO",
                "symbol-alt-narrow": "C$"
            },
            NLG: {
                displayName: "NLG",
                symbol: "NLG"
            },
            NOK: {
                displayName: "нарвежская крона",
                "displayName-count-one": "нарвежская крона",
                "displayName-count-few": "нарвежскія кроны",
                "displayName-count-many": "нарвежскіх крон",
                "displayName-count-other": "нарвежскай кроны",
                symbol: "NOK",
                "symbol-alt-narrow": "kr"
            },
            NPR: {
                displayName: "непальская рупія",
                "displayName-count-one": "непальская рупія",
                "displayName-count-few": "непальскія рупіі",
                "displayName-count-many": "непальскіх рупій",
                "displayName-count-other": "непальскай рупіі",
                symbol: "NPR",
                "symbol-alt-narrow": "Rs"
            },
            NZD: {
                displayName: "новазеландскі долар",
                "displayName-count-one": "новазеландскі долар",
                "displayName-count-few": "новазеландскія долары",
                "displayName-count-many": "новазеландскіх долараў",
                "displayName-count-other": "новазеландскага долара",
                symbol: "NZD",
                "symbol-alt-narrow": "NZ$"
            },
            OMR: {
                displayName: "аманскі рыял",
                "displayName-count-one": "аманскі рыял",
                "displayName-count-few": "аманскія рыялы",
                "displayName-count-many": "аманскіх рыялаў",
                "displayName-count-other": "аманскага рыяла",
                symbol: "OMR"
            },
            PAB: {
                displayName: "панамскае бальбоа",
                "displayName-count-one": "панамскае бальбоа",
                "displayName-count-few": "панамскія бальбоа",
                "displayName-count-many": "панамскіх бальбоа",
                "displayName-count-other": "панамскага бальбоа",
                symbol: "PAB"
            },
            PEI: {
                displayName: "PEI",
                symbol: "PEI"
            },
            PEN: {
                displayName: "перуанскі соль",
                "displayName-count-one": "перуанскі соль",
                "displayName-count-few": "перуанскія солі",
                "displayName-count-many": "перуанскіх соляў",
                "displayName-count-other": "перуанскага соля",
                symbol: "PEN"
            },
            PES: {
                displayName: "PES",
                symbol: "PES"
            },
            PGK: {
                displayName: "кіна Папуа-Новай Гвінеі",
                "displayName-count-one": "кіна Папуа-Новай Гвінеі",
                "displayName-count-few": "кіны Папуа-Новай Гвінеі",
                "displayName-count-many": "кін Папуа-Новай Гвінеі",
                "displayName-count-other": "кіны Папуа-Новай Гвінеі",
                symbol: "PGK"
            },
            PHP: {
                displayName: "філіпінскае песа",
                "displayName-count-one": "філіпінскае песа",
                "displayName-count-few": "філіпінскія песа",
                "displayName-count-many": "філіпінскіх песа",
                "displayName-count-other": "філіпінскага песа",
                symbol: "PHP",
                "symbol-alt-narrow": "₱"
            },
            PKR: {
                displayName: "пакістанская рупія",
                "displayName-count-one": "пакістанская рупія",
                "displayName-count-few": "пакістанскія рупіі",
                "displayName-count-many": "пакістанскіх рупій",
                "displayName-count-other": "пакістанскай рупіі",
                symbol: "PKR",
                "symbol-alt-narrow": "Rs"
            },
            PLN: {
                displayName: "польскі злоты",
                "displayName-count-one": "польскі злоты",
                "displayName-count-few": "польскія злотыя",
                "displayName-count-many": "польскіх злотых",
                "displayName-count-other": "польскага злотага",
                symbol: "PLN",
                "symbol-alt-narrow": "zł"
            },
            PLZ: {
                displayName: "PLZ",
                symbol: "PLZ"
            },
            PTE: {
                displayName: "PTE",
                symbol: "PTE"
            },
            PYG: {
                displayName: "парагвайскі гуарані",
                "displayName-count-one": "парагвайскі гуарані",
                "displayName-count-few": "парагвайскія гуарані",
                "displayName-count-many": "парагвайскіх гуарані",
                "displayName-count-other": "парагвайскага гуарані",
                symbol: "PYG",
                "symbol-alt-narrow": "₲"
            },
            QAR: {
                displayName: "катарскі рыял",
                "displayName-count-one": "катарскі рыял",
                "displayName-count-few": "катарскія рыялы",
                "displayName-count-many": "катарскіх рыялаў",
                "displayName-count-other": "катарскага рыяла",
                symbol: "QAR"
            },
            RHD: {
                displayName: "RHD",
                symbol: "RHD"
            },
            ROL: {
                displayName: "ROL",
                symbol: "ROL"
            },
            RON: {
                displayName: "румынскі лей",
                "displayName-count-one": "румынскі лей",
                "displayName-count-few": "румынскія леі",
                "displayName-count-many": "румынскіх леяў",
                "displayName-count-other": "румынскага лея",
                symbol: "RON",
                "symbol-alt-narrow": "lei"
            },
            RSD: {
                displayName: "сербскі дынар",
                "displayName-count-one": "сербскі дынар",
                "displayName-count-few": "сербскія дынары",
                "displayName-count-many": "сербскіх дынараў",
                "displayName-count-other": "сербскага дынара",
                symbol: "RSD"
            },
            RUB: {
                displayName: "расійскі рубель",
                "displayName-count-one": "расійскі рубель",
                "displayName-count-few": "расійскія рублі",
                "displayName-count-many": "расійскіх рублёў",
                "displayName-count-other": "расійскага рубля",
                symbol: "₽",
                "symbol-alt-narrow": "руб."
            },
            RUR: {
                displayName: "RUR",
                symbol: "RUR"
            },
            RWF: {
                displayName: "руандыйскі франк",
                "displayName-count-one": "руандыйскі франк",
                "displayName-count-few": "руандыйскія франкі",
                "displayName-count-many": "руандыйскіх франкаў",
                "displayName-count-other": "руандыйскага франка",
                symbol: "RWF",
                "symbol-alt-narrow": "RF"
            },
            SAR: {
                displayName: "саудаўскі рыял",
                "displayName-count-one": "саудаўскі рыял",
                "displayName-count-few": "саудаўскія рыялы",
                "displayName-count-many": "саудаўскіх рыялаў",
                "displayName-count-other": "саудаўскага рыяла",
                symbol: "SAR"
            },
            SBD: {
                displayName: "долар Саламонавых астравоў",
                "displayName-count-one": "долар Саламонавых астравоў",
                "displayName-count-few": "долар Саламонавых астравоў",
                "displayName-count-many": "долараў Саламонавых астравоў",
                "displayName-count-other": "долара Саламонавых астравоў",
                symbol: "SBD",
                "symbol-alt-narrow": "SI$"
            },
            SCR: {
                displayName: "сейшэльская рупія",
                "displayName-count-one": "сейшэльская рупія",
                "displayName-count-few": "сейшэльскія рупіі",
                "displayName-count-many": "сейшэльскіх рупій",
                "displayName-count-other": "сейшэльскай рупіі",
                symbol: "SCR"
            },
            SDD: {
                displayName: "SDD",
                symbol: "SDD"
            },
            SDG: {
                displayName: "суданскі фунт",
                "displayName-count-one": "суданскі фунт",
                "displayName-count-few": "суданскія фунты",
                "displayName-count-many": "суданскіх фунтаў",
                "displayName-count-other": "суданскага фунта",
                symbol: "SDG"
            },
            SDP: {
                displayName: "SDP",
                symbol: "SDP"
            },
            SEK: {
                displayName: "шведская крона",
                "displayName-count-one": "шведская крона",
                "displayName-count-few": "шведскія кроны",
                "displayName-count-many": "шведскіх крон",
                "displayName-count-other": "шведскай кроны",
                symbol: "SEK",
                "symbol-alt-narrow": "kr"
            },
            SGD: {
                displayName: "сінгапурскі долар",
                "displayName-count-one": "сінгапурскі долар",
                "displayName-count-few": "сінгапурскія долары",
                "displayName-count-many": "сінгапурскіх долараў",
                "displayName-count-other": "сінгапурскага долара",
                symbol: "SGD",
                "symbol-alt-narrow": "S$"
            },
            SHP: {
                displayName: "фунт в-ва Святой Алены",
                "displayName-count-one": "фунт в-ва Святой Алены",
                "displayName-count-few": "фунты в-ва Святой Алены",
                "displayName-count-many": "фунтаў в-ва Святой Алены",
                "displayName-count-other": "фунта в-ва Святой Алены",
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
                displayName: "сьера-леонскі леонэ",
                "displayName-count-one": "сьера-леонскі леонэ",
                "displayName-count-few": "сьера-леонскія леонэ",
                "displayName-count-many": "сьера-леонскіх леонэ",
                "displayName-count-other": "сьера-леонскага леонэ",
                symbol: "SLL"
            },
            SOS: {
                displayName: "самалійскі шылінг",
                "displayName-count-one": "самалійскі шылінг",
                "displayName-count-few": "самалійскія шылінгі",
                "displayName-count-many": "самалійскіх шылінгаў",
                "displayName-count-other": "самалійскага шылінга",
                symbol: "SOS"
            },
            SRD: {
                displayName: "сурынамскі долар",
                "displayName-count-one": "сурынамскі долар",
                "displayName-count-few": "сурынамскія долары",
                "displayName-count-many": "сурынамскіх долараў",
                "displayName-count-other": "сурынамскага долара",
                symbol: "SRD",
                "symbol-alt-narrow": "$"
            },
            SRG: {
                displayName: "SRG",
                symbol: "SRG"
            },
            SSP: {
                displayName: "паўднёвасуданскі фунт",
                "displayName-count-one": "паўднёвасуданскі фунт",
                "displayName-count-few": "паўднёвасуданскія фунты",
                "displayName-count-many": "паўднёвасуданскіх фунтаў",
                "displayName-count-other": "паўднёвасуданскага фунта",
                symbol: "SSP",
                "symbol-alt-narrow": "£"
            },
            STD: {
                displayName: "добра Сан-Тамэ і Прынсіпі (1977–2017)",
                "displayName-count-one": "добра Сан-Тамэ і Прынсіпі (1977–2017)",
                "displayName-count-few": "добры Сан-Тамэ і Прынсіпі (1977–2017)",
                "displayName-count-many": "добраў Сан-Тамэ і Прынсіпі (1977–2017)",
                "displayName-count-other": "добры Сан-Тамэ і Прынсіпі (1977–2017)",
                symbol: "STD"
            },
            STN: {
                displayName: "добра Сан-Тамэ і Прынсіпі",
                "displayName-count-one": "добра Сан-Тамэ і Прынсіпі",
                "displayName-count-few": "добры Сан-Тамэ і Прынсіпі",
                "displayName-count-many": "добраў Сан-Тамэ і Прынсіпі",
                "displayName-count-other": "добры Сан-Тамэ і Прынсіпі",
                symbol: "STN",
                "symbol-alt-narrow": "Db"
            },
            SUR: {
                displayName: "SUR",
                symbol: "SUR"
            },
            SVC: {
                displayName: "SVC",
                symbol: "SVC"
            },
            SYP: {
                displayName: "сірыйскі фунт",
                "displayName-count-one": "сірыйскі фунт",
                "displayName-count-few": "сірыйскія фунты",
                "displayName-count-many": "сірыйскіх фунтаў",
                "displayName-count-other": "сірыйскага фунта",
                symbol: "SYP",
                "symbol-alt-narrow": "£"
            },
            SZL: {
                displayName: "свазілендскі лілангені",
                "displayName-count-one": "свазілендскі лілангені",
                "displayName-count-few": "свазілендскія лілангені",
                "displayName-count-many": "свазілендскіх лілангені",
                "displayName-count-other": "свазілендскага лілангені",
                symbol: "SZL"
            },
            THB: {
                displayName: "тайскі бат",
                "displayName-count-one": "тайскі бат",
                "displayName-count-few": "тайскія баты",
                "displayName-count-many": "тайскіх батаў",
                "displayName-count-other": "тайскага бата",
                symbol: "THB",
                "symbol-alt-narrow": "฿"
            },
            TJR: {
                displayName: "TJR",
                symbol: "TJR"
            },
            TJS: {
                displayName: "таджыкскі самані",
                "displayName-count-one": "таджыкскі самані",
                "displayName-count-few": "таджыкскія самані",
                "displayName-count-many": "таджыкскіх самані",
                "displayName-count-other": "таджыкскага самані",
                symbol: "TJS"
            },
            TMM: {
                displayName: "TMM",
                symbol: "TMM"
            },
            TMT: {
                displayName: "туркменскі манат",
                "displayName-count-one": "туркменскі манат",
                "displayName-count-few": "туркменскія манаты",
                "displayName-count-many": "туркменскіх манатаў",
                "displayName-count-other": "туркменскага маната",
                symbol: "TMT"
            },
            TND: {
                displayName: "туніскі дынар",
                "displayName-count-one": "туніскі дынар",
                "displayName-count-few": "туніскія дынары",
                "displayName-count-many": "туніскіх дынараў",
                "displayName-count-other": "туніскага дынара",
                symbol: "TND"
            },
            TOP: {
                displayName: "танганская паанга",
                "displayName-count-one": "танганская паанга",
                "displayName-count-few": "танганскія паангі",
                "displayName-count-many": "танганскіх паанг",
                "displayName-count-other": "танганскай паангі",
                symbol: "TOP",
                "symbol-alt-narrow": "T$"
            },
            TPE: {
                displayName: "TPE",
                symbol: "TPE"
            },
            TRL: {
                displayName: "TRL",
                symbol: "TRL"
            },
            TRY: {
                displayName: "турэцкая ліра",
                "displayName-count-one": "турэцкая ліра",
                "displayName-count-few": "турэцкія ліры",
                "displayName-count-many": "турэцкіх лір",
                "displayName-count-other": "турэцкай ліры",
                symbol: "TRY",
                "symbol-alt-narrow": "₺",
                "symbol-alt-variant": "TL"
            },
            TTD: {
                displayName: "долар Трынідада і Табага",
                "displayName-count-one": "долар Трынідада і Табага",
                "displayName-count-few": "долары Трынідада і Табага",
                "displayName-count-many": "долараў Трынідада і Табага",
                "displayName-count-other": "долара Трынідада і Табага",
                symbol: "TTD",
                "symbol-alt-narrow": "TT$"
            },
            TWD: {
                displayName: "новы тайваньскі долар",
                "displayName-count-one": "новы тайваньскі долар",
                "displayName-count-few": "новыя тайваньскія долары",
                "displayName-count-many": "новых тайваньскіх долараў",
                "displayName-count-other": "новага тайваньскага долара",
                symbol: "NT$",
                "symbol-alt-narrow": "$"
            },
            TZS: {
                displayName: "танзанійскі шылінг",
                "displayName-count-one": "танзанійскі шылінг",
                "displayName-count-few": "танзанійскія шылінгі",
                "displayName-count-many": "танзанійскіх шылінгаў",
                "displayName-count-other": "танзанійскага шылінга",
                symbol: "TZS"
            },
            UAH: {
                displayName: "украінская грыўня",
                "displayName-count-one": "украінская грыўня",
                "displayName-count-few": "украінскія грыўні",
                "displayName-count-many": "украінскіх грыўняў",
                "displayName-count-other": "украінскай грыўні",
                symbol: "UAH",
                "symbol-alt-narrow": "₴"
            },
            UAK: {
                displayName: "UAK",
                symbol: "UAK"
            },
            UGS: {
                displayName: "UGS",
                symbol: "UGS"
            },
            UGX: {
                displayName: "угандыйскі шылінг",
                "displayName-count-one": "угандыйскі шылінг",
                "displayName-count-few": "угандыйскія шылінгі",
                "displayName-count-many": "угандыйскіх шылінгаў",
                "displayName-count-other": "угандыйскага шылінга",
                symbol: "UGX"
            },
            USD: {
                displayName: "долар ЗША",
                "displayName-count-one": "долар ЗША",
                "displayName-count-few": "долары ЗША",
                "displayName-count-many": "долараў ЗША",
                "displayName-count-other": "долара ЗША",
                symbol: "$",
                "symbol-alt-narrow": "$"
            },
            USN: {
                displayName: "USN",
                symbol: "USN"
            },
            USS: {
                displayName: "USS",
                symbol: "USS"
            },
            UYI: {
                displayName: "UYI",
                symbol: "UYI"
            },
            UYP: {
                displayName: "UYP",
                symbol: "UYP"
            },
            UYU: {
                displayName: "уругвайскае песа",
                "displayName-count-one": "уругвайскае песа",
                "displayName-count-few": "уругвайскія песа",
                "displayName-count-many": "уругвайскіх песа",
                "displayName-count-other": "уругвайскага песа",
                symbol: "UYU",
                "symbol-alt-narrow": "$U"
            },
            UYW: {
                displayName: "UYW",
                symbol: "UYW"
            },
            UZS: {
                displayName: "узбекскі сум",
                "displayName-count-one": "узбекскі сум",
                "displayName-count-few": "узбекскія сумы",
                "displayName-count-many": "узбекскіх сумаў",
                "displayName-count-other": "узбекскага сума",
                symbol: "UZS"
            },
            VEB: {
                displayName: "VEB",
                symbol: "VEB"
            },
            VED: {
                displayName: "VED",
                symbol: "VED"
            },
            VEF: {
                displayName: "венесуальскі балівар (2008–2018)",
                "displayName-count-one": "венесуальскі балівар (2008–2018)",
                "displayName-count-few": "венесуальскія балівары (2008–2018)",
                "displayName-count-many": "венесуальскіх балівараў (2008–2018)",
                "displayName-count-other": "венесуальскага балівара (2008–2018)",
                symbol: "VEF",
                "symbol-alt-narrow": "Bs"
            },
            VES: {
                displayName: "венесуэльскі балівар",
                "displayName-count-one": "венесуэльскі балівар",
                "displayName-count-few": "венесуэльскія балівары",
                "displayName-count-many": "венесуэльскіх балівараў",
                "displayName-count-other": "венесуэльскага балівара",
                symbol: "VES"
            },
            VND: {
                displayName: "в’етнамскі донг",
                "displayName-count-one": "в’етнамскі донг",
                "displayName-count-few": "в’етнамскія донгі",
                "displayName-count-many": "в’етнамскіх донгаў",
                "displayName-count-other": "в’етнамскага донга",
                symbol: "₫",
                "symbol-alt-narrow": "₫"
            },
            VNN: {
                displayName: "VNN",
                symbol: "VNN"
            },
            VUV: {
                displayName: "вануацкі вату",
                "displayName-count-one": "вануацкі вату",
                "displayName-count-few": "вануацкія вату",
                "displayName-count-many": "вануацкіх вату",
                "displayName-count-other": "вануацкага вату",
                symbol: "VUV"
            },
            WST: {
                displayName: "самаанская тала",
                "displayName-count-one": "самаанская тала",
                "displayName-count-few": "самаанскія талы",
                "displayName-count-many": "самаанскіх тал",
                "displayName-count-other": "самаанскай талы",
                symbol: "WST"
            },
            XAF: {
                displayName: "цэнтральнаафрыканскі франк КФА",
                "displayName-count-one": "цэнтральнаафрыканскі франк КФА",
                "displayName-count-few": "цэнтральнаафрыканскія франкі КФА",
                "displayName-count-many": "цэнтральнаафрыканскіх франкаў КФА",
                "displayName-count-other": "цэнтральнаафрыканскага франка КФА",
                symbol: "FCFA"
            },
            XAG: {
                displayName: "XAG",
                symbol: "XAG"
            },
            XAU: {
                displayName: "XAU",
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
                displayName: "усходнекарыбскі долар",
                "displayName-count-one": "усходнекарыбскі долар",
                "displayName-count-few": "усходнекарыбскія долары",
                "displayName-count-many": "усходнекарыбскіх долараў",
                "displayName-count-other": "усходнекарыбскага долара",
                symbol: "EC$",
                "symbol-alt-narrow": "EC$"
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
                displayName: "XFO",
                symbol: "XFO"
            },
            XFU: {
                displayName: "XFU",
                symbol: "XFU"
            },
            XOF: {
                displayName: "заходнеафрыканскі франк КФА",
                "displayName-count-one": "заходнеафрыканскі франк КФА",
                "displayName-count-few": "заходнеафрыканскія франкі КФА",
                "displayName-count-many": "заходнеафрыканскіх франкаў КФА",
                "displayName-count-other": "заходнеафрыканскага франка КФА",
                symbol: "F CFA"
            },
            XPD: {
                displayName: "XPD",
                symbol: "XPD"
            },
            XPF: {
                displayName: "французскі ціхаакіянскі франк",
                "displayName-count-one": "французскі ціхаакіянскі франк",
                "displayName-count-few": "французскія ціхаакіянскія франкі",
                "displayName-count-many": "французскіх ціхаакіянскіх франкаў",
                "displayName-count-other": "французскага ціхаакіянскага франка",
                symbol: "CFPF"
            },
            XPT: {
                displayName: "XPT",
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
                displayName: "XTS",
                symbol: "XTS"
            },
            XUA: {
                displayName: "XUA",
                symbol: "XUA"
            },
            XXX: {
                displayName: "невядомая валюта",
                "displayName-count-one": "невядомай валюты",
                "displayName-count-few": "невядомай валюты",
                "displayName-count-many": "невядомай валюты",
                "displayName-count-other": "невядомай валюты",
                symbol: "¤"
            },
            YDD: {
                displayName: "YDD",
                symbol: "YDD"
            },
            YER: {
                displayName: "еменскі рыал",
                "displayName-count-one": "еменскі рыял",
                "displayName-count-few": "еменскія рыялы",
                "displayName-count-many": "еменскіх рыялаў",
                "displayName-count-other": "еменскага рыяла",
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
                displayName: "паўднёваафрыканскі рэнд",
                "displayName-count-one": "паўднёваафрыканскі рэнд",
                "displayName-count-few": "паўднёваафрыканскія рэнды",
                "displayName-count-many": "паўднёваафрыканскіх рэндаў",
                "displayName-count-other": "паўднёваафрыканскага рэнда",
                symbol: "ZAR",
                "symbol-alt-narrow": "R"
            },
            ZMK: {
                displayName: "ZMK",
                symbol: "ZMK"
            },
            ZMW: {
                displayName: "замбійская квача",
                "displayName-count-one": "замбійская квача",
                "displayName-count-few": "замбійскія квачы",
                "displayName-count-many": "замбійскіх квач",
                "displayName-count-other": "замбійскай квачы",
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
                displayName: "ZWD",
                symbol: "ZWD"
            },
            ZWL: {
                displayName: "ZWL",
                symbol: "ZWL"
            },
            ZWR: {
                displayName: "ZWR",
                symbol: "ZWR"
            }
        },
        localeCurrency: "BYN"
    },
    calendar: {
        patterns: {
            d: "d.MM.y",
            D: "EEEE, d MMMM y 'г'.",
            m: "d MMM",
            M: "d MMMM",
            y: "LLL y",
            Y: "LLLL y",
            F: "EEEE, d MMMM y 'г'. HH:mm:ss",
            g: "d.M.y HH:mm",
            G: "d.M.y HH:mm:ss",
            t: "HH:mm",
            T: "HH:mm:ss",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1} 'у' {0}",
            long: "{1} 'у' {0}",
            medium: "{1}, {0}",
            short: "{1}, {0}",
            availableFormats: {
                Bh: "h B",
                Bhm: "h:mm B",
                Bhms: "h:mm:ss B",
                d: "d",
                E: "ccc",
                EBhm: "E h:mm B",
                EBhms: "E h:mm:ss B",
                Ed: "d, E",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y 'г'. G",
                GyMd: "dd.MM.y GGGGG",
                GyMMM: "LLL y 'г'. G",
                GyMMMd: "d MMM y 'г'. G",
                GyMMMEd: "E, d MMM y 'г'. G",
                h: "hh a",
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
                MEd: "E, d.M",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E, d MMM",
                MMMMd: "d MMMM",
                MMMMEd: "E, d MMMM",
                "MMMMW-count-one": "W 'тыдзень' MMMM",
                "MMMMW-count-few": "W 'тыдзень' MMMM",
                "MMMMW-count-many": "W 'тыдзень' MMMM",
                "MMMMW-count-other": "W 'тыдзень' MMMM",
                ms: "mm.ss",
                y: "y",
                yM: "M.y",
                yMd: "d.M.y",
                yMEd: "E, d.M.y",
                yMMM: "LLL y",
                yMMMd: "d MMM y",
                yMMMEd: "E, d MMM y",
                yMMMM: "LLLL y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y",
                "yw-count-one": "w 'тыдзень' Y",
                "yw-count-few": "w 'тыдзень' Y",
                "yw-count-many": "w 'тыдзень' Y",
                "yw-count-other": "w 'тыдзень' Y"
            }
        },
        timeFormats: {
            full: "HH:mm:ss, zzzz",
            long: "HH:mm:ss z",
            medium: "HH:mm:ss",
            short: "HH:mm"
        },
        dateFormats: {
            full: "EEEE, d MMMM y 'г'.",
            long: "d MMMM y 'г'.",
            medium: "d MMM y 'г'.",
            short: "d.MM.yy"
        },
        days: {
            format: {
                abbreviated: [
                    "нд",
                    "пн",
                    "аў",
                    "ср",
                    "чц",
                    "пт",
                    "сб"
                ],
                narrow: [
                    "н",
                    "п",
                    "а",
                    "с",
                    "ч",
                    "п",
                    "с"
                ],
                short: [
                    "нд",
                    "пн",
                    "аў",
                    "ср",
                    "чц",
                    "пт",
                    "сб"
                ],
                wide: [
                    "нядзеля",
                    "панядзелак",
                    "аўторак",
                    "серада",
                    "чацвер",
                    "пятніца",
                    "субота"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "нд",
                    "пн",
                    "аў",
                    "ср",
                    "чц",
                    "пт",
                    "сб"
                ],
                narrow: [
                    "н",
                    "п",
                    "а",
                    "с",
                    "ч",
                    "п",
                    "с"
                ],
                short: [
                    "нд",
                    "пн",
                    "аў",
                    "ср",
                    "чц",
                    "пт",
                    "сб"
                ],
                wide: [
                    "нядзеля",
                    "панядзелак",
                    "аўторак",
                    "серада",
                    "чацвер",
                    "пятніца",
                    "субота"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "сту",
                    "лют",
                    "сак",
                    "кра",
                    "мая",
                    "чэр",
                    "ліп",
                    "жні",
                    "вер",
                    "кас",
                    "ліс",
                    "сне"
                ],
                narrow: [
                    "с",
                    "л",
                    "с",
                    "к",
                    "м",
                    "ч",
                    "л",
                    "ж",
                    "в",
                    "к",
                    "л",
                    "с"
                ],
                wide: [
                    "студзеня",
                    "лютага",
                    "сакавіка",
                    "красавіка",
                    "мая",
                    "чэрвеня",
                    "ліпеня",
                    "жніўня",
                    "верасня",
                    "кастрычніка",
                    "лістапада",
                    "снежня"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "сту",
                    "лют",
                    "сак",
                    "кра",
                    "май",
                    "чэр",
                    "ліп",
                    "жні",
                    "вер",
                    "кас",
                    "ліс",
                    "сне"
                ],
                narrow: [
                    "с",
                    "л",
                    "с",
                    "к",
                    "м",
                    "ч",
                    "л",
                    "ж",
                    "в",
                    "к",
                    "л",
                    "с"
                ],
                wide: [
                    "студзень",
                    "люты",
                    "сакавік",
                    "красавік",
                    "май",
                    "чэрвень",
                    "ліпень",
                    "жнівень",
                    "верасень",
                    "кастрычнік",
                    "лістапад",
                    "снежань"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "1-шы кв.",
                    "2-гі кв.",
                    "3-ці кв.",
                    "4-ты кв."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1-шы квартал",
                    "2-гі квартал",
                    "3-ці квартал",
                    "4-ты квартал"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "1-шы кв.",
                    "2-гі кв.",
                    "3-ці кв.",
                    "4-ты кв."
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "1-шы квартал",
                    "2-гі квартал",
                    "3-ці квартал",
                    "4-ты квартал"
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
                    am: "am",
                    pm: "pm"
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
                    "0": "да нараджэння Хрыстова",
                    "1": "ад нараджэння Хрыстова",
                    "0-alt-variant": "да нашай эры",
                    "1-alt-variant": "нашай эры"
                },
                abbreviated: {
                    "0": "да н.э.",
                    "1": "н.э.",
                    "0-alt-variant": "да н.э.",
                    "1-alt-variant": "н.э."
                },
                narrow: {
                    "0": "да н.э.",
                    "1": "н.э.",
                    "0-alt-variant": "да н.э.",
                    "1-alt-variant": "н.э."
                }
            }
        },
        gmtFormat: "GMT{0}",
        gmtZeroFormat: "GMT",
        dateFields: {
            era: {
                wide: "эра",
                short: "эра",
                narrow: "эра"
            },
            year: {
                wide: "год",
                short: "г.",
                narrow: "г."
            },
            quarter: {
                wide: "квартал",
                short: "кв.",
                narrow: "кв."
            },
            month: {
                wide: "месяц",
                short: "мес.",
                narrow: "мес."
            },
            week: {
                wide: "тыд",
                short: "тыд",
                narrow: "тыд"
            },
            weekOfMonth: {
                wide: "тыдзень месяца",
                short: "тыдзень месяца",
                narrow: "тыдзень месяца"
            },
            day: {
                wide: "дзень",
                short: "дзень",
                narrow: "д."
            },
            dayOfYear: {
                wide: "дзень года",
                short: "дзень года",
                narrow: "дзень года"
            },
            weekday: {
                wide: "дзень тыдня",
                short: "дзень тыдня",
                narrow: "дзень тыдня"
            },
            weekdayOfMonth: {
                wide: "дзень месяца",
                short: "дзень месяца",
                narrow: "дзень месяца"
            },
            dayperiod: {
                short: "AM/PM",
                wide: "AM/PM",
                narrow: "AM/PM"
            },
            hour: {
                wide: "гадзіна",
                short: "гадз",
                narrow: "гадз"
            },
            minute: {
                wide: "хвіліна",
                short: "хв",
                narrow: "хв"
            },
            second: {
                wide: "секунда",
                short: "с",
                narrow: "с"
            },
            zone: {
                wide: "часавы пояс",
                short: "часавы пояс",
                narrow: "часавы пояс"
            },
            millisecond: {
                narrow: "мс",
                short: "мс",
                wide: "мілісекунда"
            }
        }
    },
    firstDay: 1,
    weekendRange: {
        start: 6,
        end: 0
    },
    likelySubtags: {
        be: "be-Cyrl-BY"
    },
    currencyData: {
        BYN: {
            _rounding: "0",
            _digits: "2"
        }
    }
};
export default data;

