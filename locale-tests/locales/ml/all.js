const data = {
    name: "ml",
    identity: {
        language: "ml"
    },
    territory: "IN",
    numbers: {
        symbols: {
            decimal: ".",
            group: ",",
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
                3,
                2
            ]
        },
        rational: {},
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
                "$n"
            ],
            groupSize: [
                3,
                2
            ],
            "unitPattern-count-other": "n $"
        },
        accounting: {
            patterns: [
                "$n",
                "($n)"
            ],
            groupSize: [
                3,
                2
            ]
        },
        currencies: {
            ADP: {
                displayName: "അൻഡോറൻ പെസെയ്റ്റ",
                "displayName-count-one": "അൻഡോറൻ പെസെയ്റ്റ",
                "displayName-count-other": "അൻഡോറൻ പെസെയ്റ്റാസ്"
            },
            AED: {
                displayName: "യുണൈറ്റഡ് അറബ് എമിറേറ്റ്സ് ദിർഹം",
                "displayName-count-one": "യു.എ.ഇ. ദിർഹം",
                "displayName-count-other": "യു.എ.ഇ. ദിർഹം"
            },
            AFA: {
                displayName: "അഫ്ഘാനി (1927–2002)",
                "displayName-count-one": "അഫ്ഘാനി (AFA)",
                "displayName-count-other": "അഫ്ഘാനിസ് (AFA)"
            },
            AFN: {
                displayName: "അഫ്‌ഗാൻ അഫ്‌‌ഗാനി",
                "displayName-count-other": "അഫ്‌ഗാൻ അഫ്‌‌ഗാനി",
                "symbol-alt-narrow": "؋"
            },
            ALL: {
                displayName: "അൽബേനിയൻ ലെക്",
                "displayName-count-other": "അൽബേനിയൻ ലെക്"
            },
            AMD: {
                displayName: "അർമേനിയൻ ഡ്രാം",
                "displayName-count-other": "അർമേനിയൻ ഡ്രാം",
                "symbol-alt-narrow": "֏"
            },
            ANG: {
                displayName: "നെതർലാൻഡ്‌സ് ആന്റിലൻ ഗിൽഡർ",
                "displayName-count-other": "നെതർലാൻഡ്‌സ് ആന്റിലൻ ഗിൽഡർ"
            },
            AOA: {
                displayName: "അംഗോളൻ ‍ക്വാൻസ",
                "displayName-count-one": "അംഗോളൻ ക്വാൻസ",
                "displayName-count-other": "അംഗോളൻ ക്വാൻസ",
                "symbol-alt-narrow": "Kz"
            },
            AOK: {
                displayName: "അംഗോളൻ ‍ക്വാൻസ (1977–1990)",
                "displayName-count-one": "അംഗോളൻ ക്വാൻസാ (AOK)",
                "displayName-count-other": "അംഗോളൻ ക്വാൻസാസ് (AOK"
            },
            AON: {
                displayName: "അംഗോളൻ ‍ന്യൂ ക്വാൻസ (1990–2000)",
                "displayName-count-one": "അംഗോളൻ ന്യൂ ക്വാൻസാ (AON)",
                "displayName-count-other": "അംഗോളൻ ന്യൂ ക്വാൻസാസ് (AON)"
            },
            AOR: {
                displayName: "അംഗോളൻ ‍ക്വാൻസ റിയാജസ്റ്റാഡോ (1995–1999)",
                "displayName-count-one": "അംഗോളൻ ക്വാൻസ റീഅഡ്ജസ്റ്റാഡോ (AOR)",
                "displayName-count-other": "അംഗോളൻ ക്വാൻസാസ് റീഅഡ്ജസ്റ്റാഡോ (AOR)"
            },
            ARA: {
                displayName: "അർജൻറീൻ ഓസ്ട്രൽ",
                "displayName-count-one": "അർജൻറീൻ ഓസ്ട്രൽ",
                "displayName-count-other": "അർജൻറീൻ ഓസ്ട്രൽസ്"
            },
            ARP: {
                displayName: "അർജൻറീൻ പെയ്സോ (1983–1985)",
                "displayName-count-one": "അർജൻറീൻ പെയ്സോ (ARP)",
                "displayName-count-other": "അർജൻറീൻ പെയ്സോസ് (ARP)"
            },
            ARS: {
                displayName: "അർജന്റീൻ പെസോ",
                "displayName-count-one": "അർജന്റീൻ പെസോ",
                "displayName-count-other": "അർജന്റീൻ പെസോ",
                "symbol-alt-narrow": "$"
            },
            ATS: {
                displayName: "ഓസ്ട്രേലിയൻ ഷില്ലിംഗ്",
                "displayName-count-one": "ഓസ്ട്രിയൻ ഷില്ലിംഗ്",
                "displayName-count-other": "ഓസ്ട്രിയൻ ഷില്ലിംഗ്സ്"
            },
            AUD: {
                displayName: "ഓസ്ട്രേലിയൻ ഡോളർ",
                "displayName-count-other": "ഓസ്ട്രേലിയൻ ഡോളർ",
                symbol: "A$",
                "symbol-alt-narrow": "$"
            },
            AWG: {
                displayName: "അറൂബൻ ഫ്ലോറിൻ",
                "displayName-count-other": "അറൂബൻ ഫ്ലോറിൻ"
            },
            AZM: {
                displayName: "അസർബയ്ജാനിയൻ മനത് (1993–2006)",
                "displayName-count-one": "അസർബയ്ജാൻ മനത്‌ (AZM)",
                "displayName-count-other": "അസർബയ്ജാൻ മനത്‌സ് (AZM)"
            },
            AZN: {
                displayName: "അസർബൈജാനി മനത്",
                "displayName-count-other": "അസർബൈജാനി മനത്",
                "symbol-alt-narrow": "₼"
            },
            BAD: {
                displayName: "ബോസ്നിയ-ഹെർസഗോവിന ദിനാർ",
                "displayName-count-one": "ബോസ്നിയ ഹെർസഗോവിന ദിനാർ",
                "displayName-count-other": "ബോസ്നിയ ഹെർസഗോവിന ദിനാർസ്"
            },
            BAM: {
                displayName: "ബോസ്‌നിയ-ഹെർസഗോവിന കൺവേർട്ടബിൾ മാർക്ക്",
                "displayName-count-other": "ബോസ്‌നിയ-ഹെർസഗോവിന കൺവേർട്ടബിൾ മാർക്ക്",
                "symbol-alt-narrow": "KM"
            },
            BBD: {
                displayName: "ബാർബേഡിയൻ ഡോളർ",
                "displayName-count-other": "ബാർബേഡിയൻ ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            BDT: {
                displayName: "ബംഗ്ലാദേശി ടാക്ക",
                "displayName-count-other": "ബംഗ്ലാദേശി ടാക്ക",
                "symbol-alt-narrow": "৳"
            },
            BEC: {
                displayName: "ബെൽജിയൻ ഫ്രാങ്ക് (കൈമാറ്റം ചെയ്യാവുന്നത്)",
                "displayName-count-one": "ബെൽജിയൻ ഫ്രാങ്ക് (കൈമാറ്റം ചെയ്യാവുന്നത്)",
                "displayName-count-other": "ബെൽജിയൻ ഫ്രാങ്ക്സ് (കൈമാറ്റം ചെയ്യാവുന്നത്)"
            },
            BEF: {
                displayName: "ബെൽജിയൻ ഫ്രാങ്ക്",
                "displayName-count-one": "ബെൽജിയൻ ഫ്രാങ്ക്",
                "displayName-count-other": "ബെൽജിയൻ ഫ്രാങ്ക്സ്"
            },
            BEL: {
                displayName: "ബൽജിയൻ ഫ്രാങ്ക്",
                "displayName-count-one": "ബെൽജിയൻ ഫ്രാങ്ക് (ഫിനാൻഷ്യൽ)",
                "displayName-count-other": "ബെൽജിയൻ ഫ്രാങ്ക്സ്(ഫിനാൻഷ്യൽ)"
            },
            BGL: {
                displayName: "ബൾഗേറിയൻ ഹാർഡ് ലെവ്",
                "displayName-count-one": "ബൾഗേറിയൻ ഹാർഡ് ലെവ്",
                "displayName-count-other": "ബൾഗേറിയൻ ഹാർഡ് ലെവ്സ്"
            },
            BGN: {
                displayName: "ബൾഗേറിയൻ ലെവ്",
                "displayName-count-other": "ബൾഗേറിയൻ ലെവ്"
            },
            BHD: {
                displayName: "ബഹ്റൈനി ദിനാർ",
                "displayName-count-other": "ബഹ്റൈനി ദിനാർ"
            },
            BIF: {
                displayName: "ബറുണ്ടിയൻ ഫ്രാങ്ക്",
                "displayName-count-one": "ബുറുണ്ടിയൻ ഫ്രാങ്ക്",
                "displayName-count-other": "ബറുണ്ടിയൻ ഫ്രാങ്ക്"
            },
            BMD: {
                displayName: "ബെർമുഡൻ ഡോളർ",
                "displayName-count-other": "ബെർമുഡൻ ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            BND: {
                displayName: "ബ്രൂണൈ ഡോളർ",
                "displayName-count-other": "ബ്രൂണൈ ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            BOB: {
                displayName: "ബൊളീവിയൻ ബൊളിവിയാനോ",
                "displayName-count-other": "ബൊളീവിയൻ ബൊളിവിയാനോ",
                "symbol-alt-narrow": "Bs"
            },
            BOP: {
                displayName: "ബൊളീവിയൻ പെയ്സോ",
                "displayName-count-one": "ബൊളീവിയൻ പെയ്സോ",
                "displayName-count-other": "ബൊളീവിയൻ പെയ്സോസ്"
            },
            BOV: {
                displayName: "ബൊളീവിയൻ എംവിഡോൾ",
                "displayName-count-one": "ബൊളീവിയൻ എംവിഡോ",
                "displayName-count-other": "ബൊളീവിയൻ എംവിഡോസ്"
            },
            BRB: {
                displayName: "ബ്രസീലിയൻ ക്രുസെയ്റോ നോവോ (1967–1986)",
                "displayName-count-one": "ബ്രസീലിയൻ ക്രുസെയ്റോ നോവോ (BRB)",
                "displayName-count-other": "ബ്രസീലിയൻ ക്രുസെയ്റോസ് നോവോ (BRB)"
            },
            BRC: {
                displayName: "ബ്രസീലിയൻ ക്രുസാഡോ",
                "displayName-count-one": "ബ്രസീലിയൻ ക്രുസാഡോ",
                "displayName-count-other": "ബ്രസീലിയൻ ക്രുസാഡോസ്"
            },
            BRE: {
                displayName: "ബ്രസീലിയൻ ക്രുസെയ്റോ (1990–1993)",
                "displayName-count-one": "ബ്രസീലിയൻ ക്രുസെയ്റോ (BRE)",
                "displayName-count-other": "ബ്രസീലിയൻ ക്രുസെയ്റോസ് (BRE)"
            },
            BRL: {
                displayName: "ബ്രസീലിയൻ റിയാൽ",
                "displayName-count-other": "ബ്രസീലിയൻ റിയാൽ",
                symbol: "R$",
                "symbol-alt-narrow": "R$"
            },
            BRN: {
                displayName: "ബ്രസീലിയൻ ക്രുസാഡോ നോവോ",
                "displayName-count-one": "ബ്രസീലിയൻ ക്രുസാഡോ നോവോ",
                "displayName-count-other": "ബ്രസീലിയൻ ക്രുസാഡോ നോവോസ്"
            },
            BRR: {
                displayName: "ബ്രസീലിയൻ ക്രുസെയ്റോ",
                "displayName-count-one": "ബ്രസീലിയൻ ക്രുസെയ്റോ",
                "displayName-count-other": "ബ്രസീലിയൻ ക്രുസെയ്റോസ്"
            },
            BSD: {
                displayName: "ബഹാമിയൻ ഡോളർ",
                "displayName-count-other": "ബഹാമിയൻ ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            BTN: {
                displayName: "ഭൂട്ടാനീസ് ഗൾട്രം",
                "displayName-count-other": "ഭൂട്ടാനീസ് ഗൾട്രം"
            },
            BUK: {
                displayName: "ബർമീസ് ചാറ്റ്",
                "displayName-count-one": "ബർമീസ് ചാറ്റ്",
                "displayName-count-other": "ബർമീസ് ചാറ്റ്സ്"
            },
            BWP: {
                displayName: "ബോട്‌സ്വാനൻ പ്യുല",
                "displayName-count-other": "ബോട്‌സ്വാനൻ പ്യുല",
                "symbol-alt-narrow": "P"
            },
            BYB: {
                displayName: "ബെലാറഷ്യൻ ന്യൂ റൂബിൾ (1994–1999)",
                "displayName-count-one": "ബെലാറഷ്യൻ ന്യൂ റൂബിൾ (BYB)",
                "displayName-count-other": "ബെലാറഷ്യൻ ന്യൂ റൂബിൾസ് (BYB)"
            },
            BYN: {
                displayName: "ബെലാറുഷ്യൻ റൂബിൾ",
                "displayName-count-other": "ബെലാറുഷ്യൻ റൂബിൾ",
                "symbol-alt-narrow": "р."
            },
            BYR: {
                displayName: "ബെലാറുഷ്യൻ റൂബിൾ (2000–2016)",
                "displayName-count-other": "ബെലാറുഷ്യൻ റൂബിൾ (2000–2016)"
            },
            BZD: {
                displayName: "ബെലീസ് ഡോളർ",
                "displayName-count-other": "ബെലീസ് ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            CAD: {
                displayName: "കനേഡിയൻ ഡോളർ",
                "displayName-count-other": "കനേഡിയൻ ഡോളർ",
                symbol: "CA$",
                "symbol-alt-narrow": "$"
            },
            CDF: {
                displayName: "കോങ്കളീസ് ഫ്രാങ്ക്",
                "displayName-count-other": "കോങ്കളീസ് ഫ്രാങ്ക്"
            },
            CHE: {
                displayName: "WIR യൂറോ",
                "displayName-count-one": "WIR യൂറോ",
                "displayName-count-other": "WIR യൂറോസ്"
            },
            CHF: {
                displayName: "സ്വിസ് ഫ്രാങ്ക്",
                "displayName-count-other": "സ്വിസ് ഫ്രാങ്ക്"
            },
            CHW: {
                displayName: "WIR ഫ്രാങ്ക്",
                "displayName-count-one": "WIR ഫ്രാങ്ക്",
                "displayName-count-other": "WIR ഫ്രാങ്ക്സ്"
            },
            CLF: {
                displayName: "ചിലിയൻ യൂണിഡാഡ്സ് ഡി ഫോമെൻറോ",
                "displayName-count-one": "ചിലിയൻ യൂണിഡാഡ്സ് ഡി ഫോമെൻറോ",
                "displayName-count-other": "ചിലിയൻ യൂണിഡാഡ്സ് ഡി ഫോമെൻറോസ്"
            },
            CLP: {
                displayName: "ചിലിയൻ പെസോ",
                "displayName-count-other": "ചിലിയൻ പെസോ",
                "symbol-alt-narrow": "$"
            },
            CNH: {
                displayName: "ചൈനീസ് യുവാൻ (ഓഫ്‌ഷോർ)",
                "displayName-count-other": "ചൈനീസ് യുവാൻ (ഓഫ്‌ഷോർ)"
            },
            CNY: {
                displayName: "ചൈനീസ് യുവാൻ",
                "displayName-count-other": "ചൈനീസ് യുവാൻ",
                symbol: "CN¥",
                "symbol-alt-narrow": "¥"
            },
            COP: {
                displayName: "കൊളംബിയൻ പെസോ",
                "displayName-count-other": "കൊളംബിയൻ പെസോ",
                "symbol-alt-narrow": "$"
            },
            COU: {
                displayName: "യൂണിഡാഡ് ഡി വാലർ റിയൽ",
                "displayName-count-one": "യൂണിഡാഡ് ഡി വാലർ റിയൽ",
                "displayName-count-other": "യൂണിഡാഡ് ഡി വാലർ റിയൽസ്"
            },
            CRC: {
                displayName: "കോസ്റ്റാ റിക്കൻ കോളൻ",
                "displayName-count-other": "കോസ്റ്റാ റിക്കൻ കോളൻ",
                "symbol-alt-narrow": "₡"
            },
            CSD: {
                displayName: "പ്രാചീന സെർബിയൻ ദിനാർ",
                "displayName-count-one": "പ്രാചീന സെർബിയൻ ദിനാർ",
                "displayName-count-other": "പ്രാചീന സെർബിയൻ ദിനാർസ്"
            },
            CSK: {
                displayName: "ചെക്കോസ്ലൊവാക്ക് ഹാർഡ് കൊരൂന",
                "displayName-count-one": "ചെക്കോസ്ലൊവാക്ക് ഹാർഡ് കൊരൂന",
                "displayName-count-other": "ചെക്കോസ്ലൊവാക്ക് ഹാർഡ് കൊരൂനാസ്"
            },
            CUC: {
                displayName: "ക്യൂബൻ കൺവേർട്ടബിൾ പെസോ",
                "displayName-count-other": "ക്യൂബൻ കൺവേർട്ടബിൾ പെസോ",
                "symbol-alt-narrow": "$"
            },
            CUP: {
                displayName: "ക്യൂബൻ പെസോ",
                "displayName-count-other": "ക്യൂബൻ പെസോ",
                "symbol-alt-narrow": "$"
            },
            CVE: {
                displayName: "കേപ് വെർദിയൻ എസ്‌ക്യുഡോ",
                "displayName-count-one": "കേപ് വെർദിയൻ എസ്‌ക്യുഡോ",
                "displayName-count-other": "കേപ് വെർദിയൻ എസ്‌ക്യുഡോസ്"
            },
            CYP: {
                displayName: "സൈപ്രസ് പൌണ്ട്",
                "displayName-count-one": "സൈപ്രസ് പൌണ്ട്",
                "displayName-count-other": "സൈപ്രസ് പൌണ്ട്സ്"
            },
            CZK: {
                displayName: "ചെക്ക് റിപ്പബ്ലിക് കൊരുണ",
                "displayName-count-other": "ചെക്ക് റിപ്പബ്ലിക് കൊരുണ",
                "symbol-alt-narrow": "Kč"
            },
            DDM: {
                displayName: "കിഴക്കൻ ജർമൻ ഓസ്റ്റ്മാർക്ക്",
                "displayName-count-one": "കിഴക്കൻ ജർമൻ ഓസ്റ്റ്മാർക്ക്",
                "displayName-count-other": "കിഴക്കൻ ജർമൻ ഓസ്റ്റ്മാർക്ക്സ്"
            },
            DEM: {
                displayName: "ജർമൻ മാർക്ക്",
                "displayName-count-one": "ജർമൻ മാർക്ക്",
                "displayName-count-other": "ജർമൻ മാർക്ക്സ്"
            },
            DJF: {
                displayName: "ദിജിബൗട്ടിയൻ ഫ്രാങ്ക്",
                "displayName-count-other": "ദിജിബൗട്ടിയൻ ഫ്രാങ്ക്"
            },
            DKK: {
                displayName: "ഡാനിഷ് ക്രോണെ",
                "displayName-count-other": "ഡാനിഷ് ക്രോണെ",
                "symbol-alt-narrow": "kr"
            },
            DOP: {
                displayName: "ഡൊമിനിക്കൻ പെസോ",
                "displayName-count-other": "ഡൊമിനിക്കൻ പെസോ",
                "symbol-alt-narrow": "$"
            },
            DZD: {
                displayName: "അൾജീരിയൻ ദിനാർ",
                "displayName-count-other": "അൾജീരിയൻ ദിനാർ"
            },
            ECS: {
                displayName: "ഇക്വഡോർ സൂക്രേ",
                "displayName-count-one": "ഇക്വഡോർ സൂക്രേ",
                "displayName-count-other": "ഇക്വഡോർ സൂക്രേസ്"
            },
            ECV: {
                displayName: "ഇക്വഡോർ യൂണിഡാഡ് വാലർ കോൺസ്റ്റൻറെ (UVC)",
                "displayName-count-one": "ഇക്വഡോർ യൂണിഡാഡ് ഡി വാലർ കോൺസ്റ്റൻറെ (UVC)",
                "displayName-count-other": "ഇക്വഡോർ യൂണിഡാഡ്സ് ഡി വാലർ കോൺസ്റ്റൻറെ (UVC)"
            },
            EEK: {
                displayName: "എസ്റ്റൌനിയൻ ക്രൂൺ",
                "displayName-count-one": "എസ്റ്റൌനിയൻ ക്രൂൺ",
                "displayName-count-other": "എസ്റ്റൌനിയൻ ക്രൂൺസ്"
            },
            EGP: {
                displayName: "ഈജിപ്‌ഷ്യൻ പൗണ്ട്",
                "displayName-count-other": "ഈജിപ്‌ഷ്യൻ പൗണ്ട്",
                "symbol-alt-narrow": "E£"
            },
            ERN: {
                displayName: "എറിത്രിയൻ നക്ഫ",
                "displayName-count-one": "എറിത്രിയൻ നക്ഫ",
                "displayName-count-other": "എറിത്രിയൻ നക്‌ഫ"
            },
            ESA: {
                displayName: "സ്പാനിഷ് പസെയ്റ്റ (A അക്കൌണ്ട്)",
                "displayName-count-one": "സ്പാനിഷ് പസെയ്റ്റ (A അക്കൌണ്ട്)",
                "displayName-count-other": "സ്പാനിഷ് പസെയ്റ്റാസ് (A അക്കൌണ്ട്)"
            },
            ESB: {
                displayName: "സ്പാനിഷ് പസെയ്റ്റ (കൈമാറ്റം ചെയ്യാവുന്ന അക്കൌണ്ട്)",
                "displayName-count-one": "സ്പാനിഷ് പസെയ്റ്റ (കൈമാറ്റം ചെയ്യാവുന്ന അക്കൌണ്ട്)",
                "displayName-count-other": "സ്പാനിഷ് പസെയ്റ്റാസ് (കൈമാറ്റം ചെയ്യാവുന്ന അക്കൌണ്ട്)"
            },
            ESP: {
                displayName: "സ്പാനിഷ് പസെയ്റ്റ",
                "displayName-count-one": "സ്പാനിഷ് പസെയ്റ്റ",
                "displayName-count-other": "സ്പാനിഷ് പസെയ്റ്റാസ്",
                "symbol-alt-narrow": "₧"
            },
            ETB: {
                displayName: "എത്യോപ്യൻ ബിർ",
                "displayName-count-other": "എത്യോപ്യൻ ബിർ"
            },
            EUR: {
                displayName: "യൂറോ",
                "displayName-count-other": "യൂറോ",
                symbol: "€",
                "symbol-alt-narrow": "€"
            },
            FIM: {
                displayName: "ഫിന്നിഷ് മാർക്ക",
                "displayName-count-one": "ഫിന്നിഷ് മാർക്ക",
                "displayName-count-other": "ഫിന്നിഷ് മാർക്കാസ്"
            },
            FJD: {
                displayName: "ഫിജിയൻ ഡോളർ",
                "displayName-count-other": "ഫിജിയൻ ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            FKP: {
                displayName: "ഫാക്ക്‌ലാന്റ് ദ്വീപുകളുടെ പൗണ്ട്",
                "displayName-count-other": "ഫാക്ക്‌ലാന്റ് ദ്വീപുകളുടെ പൗണ്ട്",
                "symbol-alt-narrow": "£"
            },
            FRF: {
                displayName: "ഫ്രാങ്ക്",
                "displayName-count-one": "ഫ്രെഞ്ച് ഫ്രാങ്ക്",
                "displayName-count-other": "ഫ്രെഞ്ച് ഫ്രാങ്ക്സ്"
            },
            GBP: {
                displayName: "ബ്രിട്ടീഷ് പൗണ്ട്",
                "displayName-count-other": "ബ്രിട്ടീഷ് പൗണ്ട്",
                symbol: "£",
                "symbol-alt-narrow": "£"
            },
            GEK: {
                displayName: "ജോർ‍ജ്ജിയൻ ക്യൂപോൺ ലാരിറ്റ്",
                "displayName-count-one": "ജോർ‍ജ്ജിയൻ ക്യൂപോൺ ലാരിറ്റ്",
                "displayName-count-other": "ജോർ‍ജ്ജിയൻ ക്യൂപോൺ ലാരിറ്റ്സ്"
            },
            GEL: {
                displayName: "ജോർജ്ജിയൻ ലാറി",
                "displayName-count-one": "ജോർജ്ജിയൻ ലാറി",
                "displayName-count-other": "ജോർജ്ജിയൻ ലാറിസ്",
                "symbol-alt-narrow": "₾"
            },
            GHC: {
                displayName: "ഘാന കെഡി (1979–2007)",
                "displayName-count-one": "ഘാന കെഡി (GHC)",
                "displayName-count-other": "ഘാന കെഡിസ് (GHC)"
            },
            GHS: {
                displayName: "ഘാനയൻ കെഡി",
                "displayName-count-other": "ഘാനയൻ കെഡി",
                "symbol-alt-narrow": "GH₵"
            },
            GIP: {
                displayName: "ജിബ്രാൾട്ടർ പൗണ്ട്",
                "displayName-count-other": "ജിബ്രാൾട്ടർ പൗണ്ട്",
                "symbol-alt-narrow": "£"
            },
            GMD: {
                displayName: "ഗാംബിയൻ ദലാസി",
                "displayName-count-one": "ഗാംബിയൻ ദലാസി",
                "displayName-count-other": "ഗാംബിയൻ ദലാസിസ്"
            },
            GNF: {
                displayName: "ഗിനിയൻ ഫ്രാങ്ക്",
                "displayName-count-one": "ഗിനിയൻ ഫ്രാങ്ക്",
                "displayName-count-other": "ഗിനിയൻ ഫ്രാങ്ക്സ്",
                "symbol-alt-narrow": "FG"
            },
            GNS: {
                displayName: "ഗിനിയ സൈലി",
                "displayName-count-one": "ഗിനിയ സൈലി",
                "displayName-count-other": "ഗിനിയ സൈലിസ്"
            },
            GQE: {
                displayName: "ഇക്വിറ്റോറിയൽ ഗിനിയ എക്വീലെ ഗിനിയാന",
                "displayName-count-one": "ഇക്വിറ്റോറിയൽ ഗിനി എക്വീലെ",
                "displayName-count-other": "ഇക്വിറ്റോറിയൽ ഗിനി എക്വീലെ"
            },
            GRD: {
                displayName: "ഗ്രീക്ക് ഡ്രാക്ക്മ",
                "displayName-count-one": "ഗ്രീക്ക് ഡ്രാക്ക്മ",
                "displayName-count-other": "ഗ്രീക്ക് ഡ്രാക്ക്മാസ്"
            },
            GTQ: {
                displayName: "ഗ്വാട്ടിമാലൻ ക്വെറ്റ്‌സൽ",
                "displayName-count-other": "ഗ്വാട്ടിമാലൻ ക്വെറ്റ്‌സൽ",
                "symbol-alt-narrow": "Q"
            },
            GWE: {
                displayName: "പോർച്ചുഗീസ് ഗിനി എസ്ക്യൂഡോ",
                "displayName-count-one": "പോർച്ചുഗീസ് ഗിനി എസ്ക്യൂഡോ",
                "displayName-count-other": "പോർച്ചുഗീസ് ഗിനി എസ്ക്യൂഡോസ്"
            },
            GWP: {
                displayName: "ഗിനിയ-ബിസാവു പെയ്സോ",
                "displayName-count-one": "ഗിനി-ബിസാവു പെയ്സോ",
                "displayName-count-other": "ഗിനി-ബിസാവു പെയ്സോസ്"
            },
            GYD: {
                displayName: "ഗയാനീസ് ഡോളർ",
                "displayName-count-other": "ഗയാനീസ് ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            HKD: {
                displayName: "ഹോങ്കോങ്ങ് ഡോളർ",
                "displayName-count-other": "ഹോങ്കോങ്ങ് ഡോളർ",
                symbol: "HK$",
                "symbol-alt-narrow": "$"
            },
            HNL: {
                displayName: "ഹോണ്ടുറൻ ലെംപിറ",
                "displayName-count-other": "ഹോണ്ടുറൻ ലെംപിറ",
                "symbol-alt-narrow": "L"
            },
            HRD: {
                displayName: "ക്രൊയേഷ്യൻ ദിനാർ",
                "displayName-count-one": "ക്രൊയേഷ്യൻ ദിനാർ",
                "displayName-count-other": "ക്രൊയേഷ്യൻ ദിനാർസ്"
            },
            HRK: {
                displayName: "ക്രൊയേഷൻ ക്യുന",
                "displayName-count-other": "ക്രൊയേഷൻ ക്യുന",
                "symbol-alt-narrow": "kn"
            },
            HTG: {
                displayName: "ഹെയ്‌തിയൻ ഗൂർഡ്",
                "displayName-count-other": "ഹെയ്‌തിയൻ ഗൂർഡ്"
            },
            HUF: {
                displayName: "ഹംഗേറിയൻ ഫോറിന്റ്",
                "displayName-count-other": "ഹംഗേറിയൻ ഫോറിന്റ്",
                "symbol-alt-narrow": "Ft"
            },
            IDR: {
                displayName: "ഇന്തോനേഷ്യൻ റുപിയ",
                "displayName-count-other": "ഇന്തോനേഷ്യൻ റുപിയ",
                "symbol-alt-narrow": "Rp"
            },
            IEP: {
                displayName: "ഐറിഷ് പൌണ്ട്",
                "displayName-count-one": "ഐറിഷ് പൌണ്ട്",
                "displayName-count-other": "ഐറിഷ് പൌണ്ട്സ്"
            },
            ILP: {
                displayName: "ഇസ്രയേലി പൌണ്ട്",
                "displayName-count-one": "ഇസ്രയേലി പൌണ്ട്",
                "displayName-count-other": "ഇസ്രയേലി പൌണ്ട്സ്"
            },
            ILS: {
                displayName: "ഇസ്രായേലി ന്യൂ ഷെക്കെൽ",
                "displayName-count-other": "ഇസ്രായേലി ന്യൂ ഷെക്കെൽ",
                symbol: "₪",
                "symbol-alt-narrow": "₪"
            },
            INR: {
                displayName: "ഇന്ത്യൻ രൂപ",
                "displayName-count-other": "ഇന്ത്യൻ രൂപ",
                symbol: "₹",
                "symbol-alt-narrow": "₹"
            },
            IQD: {
                displayName: "ഇറാഖി ദിനാർ",
                "displayName-count-other": "ഇറാഖി ദിനാർ"
            },
            IRR: {
                displayName: "ഇറാനിയൻ റിയാൽ",
                "displayName-count-other": "ഇറാനിയൻ റിയാൽ"
            },
            ISK: {
                displayName: "ഐസ്‌ലാൻഡിക് ക്രോണ",
                "displayName-count-other": "ഐസ്‌ലാൻഡിക് ക്രോണ",
                "symbol-alt-narrow": "kr"
            },
            ITL: {
                displayName: "ഇറ്റാലിയൻ ലിറ",
                "displayName-count-one": "ഇറ്റാലിയൻ ലിറ",
                "displayName-count-other": "ഇറ്റാലിയൻ ലിറാസ്"
            },
            JMD: {
                displayName: "ജമൈക്കൻ ഡോളർ",
                "displayName-count-other": "ജമൈക്കൻ ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            JOD: {
                displayName: "ജോർദ്ദാനിയൻ ദിനാർ",
                "displayName-count-other": "ജോർദ്ദാനിയൻ ദിനാർ"
            },
            JPY: {
                displayName: "ജാപ്പനീസ് യെൻ",
                "displayName-count-other": "ജാപ്പനീസ് യെൻ",
                symbol: "¥",
                "symbol-alt-narrow": "¥"
            },
            KES: {
                displayName: "കെനിയൻ ഷില്ലിംഗ്",
                "displayName-count-other": "കെനിയൻ ഷില്ലിംഗ്"
            },
            KGS: {
                displayName: "കിർഗിസ്ഥാനി സോം",
                "displayName-count-other": "കിർഗിസ്ഥാനി സോം",
                "symbol-alt-narrow": "⃀"
            },
            KHR: {
                displayName: "കംബോഡിയൻ റീൽ",
                "displayName-count-other": "കംബോഡിയൻ റീൽ",
                "symbol-alt-narrow": "៛"
            },
            KMF: {
                displayName: "കൊമോറിയൻ ഫ്രാങ്ക്",
                "displayName-count-other": "കൊമോറിയൻ ഫ്രാങ്ക്",
                "symbol-alt-narrow": "CF"
            },
            KPW: {
                displayName: "ഉത്തര കൊറിയൻ വോൺ",
                "displayName-count-other": "ഉത്തര കൊറിയൻ വോൺ",
                "symbol-alt-narrow": "₩"
            },
            KRW: {
                displayName: "ദക്ഷിണ കൊറിയൻ വോൺ",
                "displayName-count-other": "ദക്ഷിണ കൊറിയൻ വോൺ",
                symbol: "₩",
                "symbol-alt-narrow": "₩"
            },
            KWD: {
                displayName: "കുവൈറ്റി ദിനാർ",
                "displayName-count-other": "കുവൈറ്റി ദിനാർ"
            },
            KYD: {
                displayName: "കേമാൻ ഐലൻഡ്‌സ് ഡോളർ",
                "displayName-count-other": "കേമാൻ ഐലൻഡ്‌സ് ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            KZT: {
                displayName: "കസാക്കിസ്ഥാനി ടെംഗെ",
                "displayName-count-other": "കസാക്കിസ്ഥാനി ടെംഗെ",
                "symbol-alt-narrow": "₸"
            },
            LAK: {
                displayName: "ലാവോഷിയൻ കിപ്",
                "displayName-count-one": "ലാവോഷ്യൻ കിപ്‌",
                "displayName-count-other": "ലാവോഷിയൻ കിപ്",
                "symbol-alt-narrow": "₭"
            },
            LBP: {
                displayName: "ലെബനീസ് പൗണ്ട്",
                "displayName-count-other": "ലെബനീസ് പൗണ്ട്",
                "symbol-alt-narrow": "L£"
            },
            LKR: {
                displayName: "ശ്രീലങ്കൻ റുപ്പീ",
                "displayName-count-other": "ശ്രീലങ്കൻ റുപ്പീ",
                "symbol-alt-narrow": "Rs"
            },
            LRD: {
                displayName: "ലൈബീരിയൻ ഡോളർ",
                "displayName-count-other": "ലൈബീരിയൻ ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            LSL: {
                displayName: "ലെസോതോ ലോത്തി",
                "displayName-count-one": "ലെസോതോ ലോത്തി",
                "displayName-count-other": "ലെസോതോ ലോത്തിസ്‌"
            },
            LTL: {
                displayName: "ലിത്വാനിയൻ ലിറ്റാസ്",
                "displayName-count-other": "ലിത്വാനിയൻ ലിറ്റാസ്",
                "symbol-alt-narrow": "Lt"
            },
            LTT: {
                displayName: "ലിത്വാനിയൻ തലോനാസ്",
                "displayName-count-one": "ലിത്വാനിയൻ തലോനാസ്",
                "displayName-count-other": "ലിത്വാനിയൻ തലോനാസെസ്‌"
            },
            LUC: {
                displayName: "ലക്സംബർഗ് കൺവേർട്ടിബിൾ ഫ്രാങ്ക്",
                "displayName-count-one": "ലക്സംബർഗ് കൈമാറ്റം ചെയ്യാവുന്ന ഫ്രാങ്ക്‌",
                "displayName-count-other": "ലക്സംബർഗ് കൈമാറ്റം ചെയ്യാവുന്ന ഫ്രാങ്ക്‌സ്‌"
            },
            LUF: {
                displayName: "ലക്സംബർഗ് ഫ്രാങ്ക്",
                "displayName-count-one": "ലക്സംബർഗ് ഫ്രാങ്ക്",
                "displayName-count-other": "ലക്സംബർഗ് ഫ്രാങ്ക്‌സ്‌"
            },
            LUL: {
                displayName: "ലക്സംബർഗ് ഫിനാൻഷ്യൽ ഫ്രാങ്ക്",
                "displayName-count-one": "ലക്സംബർഗ് ഫിനാൻഷ്യൽ ഫ്രാങ്ക്",
                "displayName-count-other": "ലക്സംബർഗ് ഫിനാൻഷ്യൽ ഫ്രാങ്ക്‌സ്‌"
            },
            LVL: {
                displayName: "ലാറ്റ്വിയൻ ലാറ്റ്സ്",
                "displayName-count-other": "ലാറ്റ്വിയൻ ലാറ്റ്സ്",
                "symbol-alt-narrow": "Ls"
            },
            LVR: {
                displayName: "ലാറ്റ്വിയൻ റൂബിൾ",
                "displayName-count-other": "ലാറ്റ്വിയൻ റൂബിൾ"
            },
            LYD: {
                displayName: "ലിബിയൻ ദിനാർ",
                "displayName-count-other": "ലിബിയൻ ദിനാർ"
            },
            MAD: {
                displayName: "മൊറോക്കൻ ദിർഹം",
                "displayName-count-other": "മൊറോക്കൻ ദിർഹം"
            },
            MAF: {
                displayName: "മൊറോക്കൻ ഫ്രാങ്ക്",
                "displayName-count-other": "മൊറോക്കൻ ഫ്രാങ്ക്"
            },
            MDL: {
                displayName: "മൊൾഡോവൻ ലിയു",
                "displayName-count-other": "മൊൾഡോവൻ ലിയു"
            },
            MGA: {
                displayName: "മഡഗാസി ഏരിയറി",
                "displayName-count-other": "മഡഗാസി ഏരിയറി",
                "symbol-alt-narrow": "Ar"
            },
            MGF: {
                displayName: "മഡഗാസ്കർ ഫ്രാങ്ക്",
                "displayName-count-other": "മഡഗാസ്കർ ഫ്രാങ്ക്"
            },
            MKD: {
                displayName: "മാസിഡോണിയൻ ദിനാർ",
                "displayName-count-other": "മാസിഡോണിയൻ ദിനാർ"
            },
            MLF: {
                displayName: "മാലി ഫ്രാങ്ക്",
                "displayName-count-other": "മാലി ഫ്രാങ്ക്"
            },
            MMK: {
                displayName: "മ്യാൻമാർ ക്യാട്",
                "displayName-count-other": "മ്യാൻമാർ ക്യാട്",
                "symbol-alt-narrow": "K"
            },
            MNT: {
                displayName: "മംഗോളിയൻ തുഗ്രിക്",
                "displayName-count-other": "മംഗോളിയൻ തുഗ്രിക്",
                "symbol-alt-narrow": "₮"
            },
            MOP: {
                displayName: "മകാനീസ് പതാക്ക",
                "displayName-count-other": "മകാനീസ് പതാക്ക"
            },
            MRO: {
                displayName: "മൗറിറ്റേനിയൻ ഔഗിയ (1973–2017)",
                "displayName-count-one": "മൗറിറ്റേനിയൻ ഔഗിയ (1973–2017)",
                "displayName-count-other": "മൗറിറ്റേനിയൻ ഔഗിയസ് (1973–2017)"
            },
            MRU: {
                displayName: "മൗറിറ്റേനിയൻ ഔഗിയ",
                "displayName-count-one": "മൗറിറ്റേനിയൻ ഔഗിയ",
                "displayName-count-other": "മൗറിറ്റേനിയൻ ഔഗിയസ്"
            },
            MTL: {
                displayName: "മൽത്തീസ് ലിറ",
                "displayName-count-other": "മൽത്തീസ് ലിറ"
            },
            MTP: {
                displayName: "മൽത്തീസ് പൌണ്ട്",
                "displayName-count-other": "മൽത്തീസ് പൌണ്ട്"
            },
            MUR: {
                displayName: "മൗറീഷ്യൻ റുപ്പീ",
                "displayName-count-other": "മൗറീഷ്യൻ റുപ്പീ",
                "symbol-alt-narrow": "Rs"
            },
            MVR: {
                displayName: "മാൽദീവിയൻ റുഫിയ",
                "displayName-count-other": "മാൽദീവിയൻ റുഫിയ"
            },
            MWK: {
                displayName: "മലാവിയൻ ക്വച്ചാ",
                "displayName-count-other": "മലാവിയൻ ക്വച്ചാ"
            },
            MXN: {
                displayName: "മെക്സിക്കൻ പെസോ",
                "displayName-count-other": "മെക്സിക്കൻ പെസോ",
                symbol: "MX$",
                "symbol-alt-narrow": "$"
            },
            MXP: {
                displayName: "മെക്സിക്കൻ സിൽവർ പെയ്സോ (1861–1992)",
                "displayName-count-one": "മെക്സിക്കൻ സിൽവർ പെയ്സോ (MXP)",
                "displayName-count-other": "മെക്സിക്കൻ സിൽവർ പെയ്സോസ് (MXP)"
            },
            MXV: {
                displayName: "മെക്സിക്കൻ യൂണിഡാഡ് ഡി ഇൻവെർഷൻ (UDI)",
                "displayName-count-one": "മെക്സിക്കൻ യൂണിഡാഡ് ഡി ഇൻവെർഷൻ (UDI)",
                "displayName-count-other": "മെക്സിക്കൻ യൂണിഡാഡ്സ് ഡി ഇൻവെർഷൻ (UDI)"
            },
            MYR: {
                displayName: "മലേഷ്യൻ റിംഗിറ്റ്",
                "displayName-count-other": "മലേഷ്യൻ റിംഗിറ്റ്",
                "symbol-alt-narrow": "RM"
            },
            MZE: {
                displayName: "മൊസാന്പിക്ക് എസ്ക്യുഡോ",
                "displayName-count-other": "മൊസാന്പിക്ക് എസ്ക്യുഡോ"
            },
            MZM: {
                displayName: "ഓൾഡ് മൊസാന്പിക്ക് മെറ്റിക്കൽ",
                "displayName-count-other": "ഓൾഡ് മൊസാന്പിക്ക് മെറ്റിക്കൽ"
            },
            MZN: {
                displayName: "മൊസാംബിക്കൻ മെറ്റിക്കൽ",
                "displayName-count-other": "മൊസാംബിക്കൻ മെറ്റിക്കൽ"
            },
            NAD: {
                displayName: "നമീബിയൻ ഡോളർ",
                "displayName-count-other": "നമീബിയൻ ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            NGN: {
                displayName: "നൈജീരിയൻ നൈറ",
                "displayName-count-other": "നൈജീരിയൻ നൈറ",
                "symbol-alt-narrow": "₦"
            },
            NIC: {
                displayName: "നികരാഗ്വൻ കൊർഡോബ",
                "displayName-count-other": "നികരാഗ്വൻ കൊർഡോബ"
            },
            NIO: {
                displayName: "നിക്കരാഗ്വൻ കോർഡോബ",
                "displayName-count-other": "നിക്കരാഗ്വൻ കോർഡോബ",
                "symbol-alt-narrow": "C$"
            },
            NLG: {
                displayName: "നെതർലൻഡ്സ് ഗിൽഡർ",
                "displayName-count-one": "നെതർലൻഡ്സ് ഗിൽഡർ",
                "displayName-count-other": "നെതർലൻഡ്സ് ഗിൽഡേഴ്സ്"
            },
            NOK: {
                displayName: "നോർവീജിയൻ ക്രോണെ",
                "displayName-count-other": "നോർവീജിയൻ ക്രോണെ",
                "symbol-alt-narrow": "kr"
            },
            NPR: {
                displayName: "നേപ്പാളീസ് റുപ്പീ",
                "displayName-count-other": "നേപ്പാളീസ് റുപ്പീ",
                "symbol-alt-narrow": "Rs"
            },
            NZD: {
                displayName: "ന്യൂസിലാന്റ് ഡോളർ",
                "displayName-count-other": "ന്യൂസിലാന്റ് ഡോളർ",
                symbol: "NZ$",
                "symbol-alt-narrow": "$"
            },
            OMR: {
                displayName: "ഒമാനി റിയാൽ",
                "displayName-count-other": "ഒമാനി റിയാൽ"
            },
            PAB: {
                displayName: "പനാമനിയൻ ബാൽബോവ",
                "displayName-count-other": "പനാമനിയൻ ബാൽബോവ"
            },
            PEI: {
                displayName: "പെറൂവിയൻ ഇൻറി",
                "displayName-count-one": "പെറൂവിയൻ ഇൻറി",
                "displayName-count-other": "പെറൂവിയൻ ഇൻറിസ്"
            },
            PEN: {
                displayName: "പെറുവിയൻ സോൾ",
                "displayName-count-other": "പെറുവിയൻ സോൾ"
            },
            PES: {
                displayName: "പെറൂവിയൻ സോൾ (1863–1965)",
                "displayName-count-one": "പെറൂവിയൻ സോൾ (1863–1965)",
                "displayName-count-other": "പെറൂവിയൻ സോൾസ് (1863–1965)"
            },
            PGK: {
                displayName: "പാപ്പുവ ന്യൂ ഗിനിയൻ കിന",
                "displayName-count-other": "പാപ്പുവ ന്യൂ ഗിനിയൻ കിന"
            },
            PHP: {
                displayName: "ഫിലിപ്പീനി പെസോ",
                "displayName-count-other": "ഫിലിപ്പീനി പെസോ",
                symbol: "PHP",
                "symbol-alt-narrow": "₱"
            },
            PKR: {
                displayName: "പാക്കിസ്ഥാനി റുപ്പീ",
                "displayName-count-other": "പാക്കിസ്ഥാനി റുപ്പീ",
                "symbol-alt-narrow": "Rs"
            },
            PLN: {
                displayName: "പോളിഷ് സ്ലോട്ടി",
                "displayName-count-other": "പോളിഷ് സ്ലോട്ടി",
                "symbol-alt-narrow": "zł"
            },
            PLZ: {
                displayName: "പോളിഷ് സ്ലോട്ടി (1950–1995)",
                "displayName-count-other": "പോളിഷ് സ്ലോട്ടി (1950–1995)"
            },
            PTE: {
                displayName: "പോർച്ചുഗീസ് എസ്ക്യുഡോ",
                "displayName-count-other": "പോർച്ചുഗീസ് എസ്ക്യുഡോ"
            },
            PYG: {
                displayName: "പരാഗ്വേയൻ ഗ്വരനീ",
                "displayName-count-other": "പരാഗ്വേയൻ ഗ്വരനീ",
                "symbol-alt-narrow": "₲"
            },
            QAR: {
                displayName: "ഖത്തർ റിയാൽ",
                "displayName-count-other": "ഖത്തർ റിയാൽ"
            },
            RHD: {
                displayName: "റൊഡേഷ്യൻ ഡോളർ",
                "displayName-count-other": "റൊഡേഷ്യൻ ഡോളർ"
            },
            ROL: {
                displayName: "പ്രാചീന റൊമേനിയൻ ലിയു",
                "displayName-count-other": "പ്രാചീന റൊമേനിയൻ ലിയു"
            },
            RON: {
                displayName: "റൊമാനിയൻ ലെയു",
                "displayName-count-other": "റൊമാനിയൻ ലെയു",
                "symbol-alt-narrow": "lei"
            },
            RSD: {
                displayName: "സെർബിയൻ ദിനാർ",
                "displayName-count-other": "സെർബിയൻ ദിനാർ"
            },
            RUB: {
                displayName: "റഷ്യൻ റൂബിൾ",
                "displayName-count-other": "റഷ്യൻ റൂബിൾ",
                "symbol-alt-narrow": "₽"
            },
            RUR: {
                displayName: "റഷ്യൻ റൂബിൾ (1991–1998)",
                "displayName-count-other": "റഷ്യൻ റൂബിൾ (1991–1998)"
            },
            RWF: {
                displayName: "റുവാണ്ടൻ ഫ്രാങ്ക്",
                "displayName-count-other": "റുവാണ്ടൻ ഫ്രാങ്ക്",
                "symbol-alt-narrow": "RF"
            },
            SAR: {
                displayName: "സൗദി റിയാൽ",
                "displayName-count-other": "സൗദി റിയാൽ",
                "symbol-alt-variant": "⃁"
            },
            SBD: {
                displayName: "സോളമൻ ദ്വീപ് ഡോളർ",
                "displayName-count-other": "സോളമൻ ദ്വീപ് ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            SCR: {
                displayName: "സീഷെലോയിസ് റുപ്പീ",
                "displayName-count-other": "സീഷെലോയിസ് റുപ്പീ"
            },
            SDD: {
                displayName: "പ്രാചീന സുഡാനീസ് ദിനാർ",
                "displayName-count-other": "പ്രാചീന സുഡാനീസ് ദിനാർ"
            },
            SDG: {
                displayName: "സുഡാനീസ് പൗണ്ട്",
                "displayName-count-other": "സുഡാനീസ് പൗണ്ട്"
            },
            SDP: {
                displayName: "പ്രാചീന സുഡാനീസ് പൌണ്ട്",
                "displayName-count-other": "പ്രാചീന സുഡാനീസ് പൌണ്ട്"
            },
            SEK: {
                displayName: "സ്വീഡിഷ് ക്രോണ",
                "displayName-count-other": "സ്വീഡിഷ് ക്രോണ",
                "symbol-alt-narrow": "kr"
            },
            SGD: {
                displayName: "സിംഗപ്പൂർ ഡോളർ",
                "displayName-count-other": "സിംഗപ്പൂർ ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            SHP: {
                displayName: "സെന്റ് ഹെലീന പൗണ്ട്",
                "displayName-count-other": "സെന്റ് ഹെലീന പൗണ്ട്",
                "symbol-alt-narrow": "£"
            },
            SIT: {
                displayName: "സ്ലൊവേനിയ റ്റോളർ",
                "displayName-count-other": "സ്ലൊവേനിയ റ്റോളർ"
            },
            SKK: {
                displayName: "സ്ലോവാക് കൊരൂന",
                "displayName-count-other": "സ്ലോവാക് കൊരൂന"
            },
            SLE: {
                displayName: "സിയെറ ലിയോണിയൻ ലിയോൺ",
                "displayName-count-one": "സിയെറ ലിയോണിയൻ ലിയോൺ",
                "displayName-count-other": "സിയെറ ലിയോണിയൻ ലിയോണസ്"
            },
            SLL: {
                displayName: "സിയെറ ലിയോണിയൻ ലിയോൺ (1964—2022)",
                "displayName-count-one": "സിയെറ ലിയോണിയൻ ലിയോൺ (1964—2022)",
                "displayName-count-other": "സിയെറ ലിയോണിയൻ ലിയോണസ് (1964—2022)"
            },
            SOS: {
                displayName: "സോമാലി ഷില്ലിംഗ്",
                "displayName-count-other": "സോമാലി ഷില്ലിംഗ്"
            },
            SRD: {
                displayName: "സുരിനെയിമിസ് ഡോളർ",
                "displayName-count-other": "സുരിനെയിമിസ് ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            SRG: {
                displayName: "സൂരിനാം ഗിൽഡർ",
                "displayName-count-other": "സൂരിനാം ഗിൽഡർ"
            },
            SSP: {
                displayName: "ദക്ഷിണ സുഡാനീസ് പൗണ്ട്",
                "displayName-count-other": "ദക്ഷിണ സുഡാനീസ് പൗണ്ട്",
                "symbol-alt-narrow": "£"
            },
            STD: {
                displayName: "സാവോ ടോമി ആൻഡ് പ്രിൻസിപെ ഡോബ്ര (1977–2017)",
                "displayName-count-other": "സാവോ ടോമി ആൻഡ് പ്രിൻസിപെ ഡോബ്ര (1977–2017)"
            },
            STN: {
                displayName: "സാവോ ടോമി ആൻഡ് പ്രിൻസിപെ ഡോബ്ര",
                "displayName-count-other": "സാവോ ടോമി ആൻഡ് പ്രിൻസിപെ ഡോബ്ര",
                "symbol-alt-narrow": "Db"
            },
            SUR: {
                displayName: "സോവിയറ്റ് റൂബിൾ",
                "displayName-count-other": "സോവിയറ്റ് റൂബിൾ"
            },
            SVC: {
                displayName: "എൽ സാൽവഡോർ കോളൻ",
                "displayName-count-other": "എൽ സാൽവഡോർ കോളൻ"
            },
            SYP: {
                displayName: "സിറിയൻ പൗണ്ട്",
                "displayName-count-other": "സിറിയൻ പൗണ്ട്",
                "symbol-alt-narrow": "£"
            },
            SZL: {
                displayName: "സ്വാസി ലിലാംഗനി",
                "displayName-count-other": "സ്വാസി ലിലാംഗനി"
            },
            THB: {
                displayName: "തായ് ബട്ട്",
                "displayName-count-other": "തായ് ബട്ട്",
                symbol: "฿",
                "symbol-alt-narrow": "฿"
            },
            TJR: {
                displayName: "താജിക്കിസ്ഥാൻ റൂബിൾ",
                "displayName-count-one": "തജിക്സ്ഥാൻ റൂബിൾ",
                "displayName-count-other": "തജിക്സ്ഥാൻ റൂബിൾസ്"
            },
            TJS: {
                displayName: "താജിക്കിസ്ഥാനി സോംനി",
                "displayName-count-one": "താജിക്കിസ്ഥാനി സോംനി",
                "displayName-count-other": "താജിക്കിസ്ഥാനി സൊമോനി"
            },
            TMM: {
                displayName: "തുർക്മെനിസ്ഥാൻ മനത്",
                "displayName-count-one": "തുർക്മെനിസ്ഥാൻ മനത്",
                "displayName-count-other": "തുർക്മെനിസ്ഥാൻ മനത്‌സ്"
            },
            TMT: {
                displayName: "തുർക്ക്‌മെനിസ്ഥാനി മനത്",
                "displayName-count-other": "തുർക്ക്‌മെനിസ്ഥാനി മനത്"
            },
            TND: {
                displayName: "ടുണീഷ്യൻ ദിനാർ",
                "displayName-count-other": "ടുണീഷ്യൻ ദിനാർ"
            },
            TOP: {
                displayName: "ടോംഗൻ പാംഗ",
                "displayName-count-other": "ടോംഗൻ പാംഗ",
                "symbol-alt-narrow": "T$"
            },
            TPE: {
                displayName: "തിമോർ എസ്ക്യൂഡോ",
                "displayName-count-one": "തിമോർ എസ്ക്യൂഡോ",
                "displayName-count-other": "തിമോർ എസ്ക്യൂഡോസ്"
            },
            TRL: {
                displayName: "പ്രാചീന തുർക്കിഷ് ലിറ",
                "displayName-count-one": "പ്രാചീന തുർക്കിഷ് ലിറ",
                "displayName-count-other": "പ്രാചീന തുർക്കിഷ് ലിറാസ്"
            },
            TRY: {
                displayName: "ടർക്കിഷ് ലിറ",
                "displayName-count-other": "ടർക്കിഷ് ലിറ",
                "symbol-alt-narrow": "₺",
                "symbol-alt-variant": "TL"
            },
            TTD: {
                displayName: "ട്രിനിഡാഡ് അന്റ് ടുബാഗോ ഡോളർ",
                "displayName-count-one": "ട്രിനിഡാഡ് ആന്റ് ടുബാഗോ ഡോളർ",
                "displayName-count-other": "ട്രിനിഡാഡ് ആന്റ് ടുബാഗോ ഡോളർ",
                "symbol-alt-narrow": "$"
            },
            TWD: {
                displayName: "ന്യൂ തായ്‌വാൻ ഡോളർ",
                "displayName-count-other": "ന്യൂ തായ്‌വാൻ ഡോളർ",
                symbol: "NT$",
                "symbol-alt-narrow": "NT$"
            },
            TZS: {
                displayName: "ടാൻസാനിയൻ ഷില്ലിംഗ്",
                "displayName-count-other": "ടാൻസാനിയൻ ഷില്ലിംഗ്"
            },
            UAH: {
                displayName: "ഉക്രേനിയൻ ഹ്രിവ്‌നിയ",
                "displayName-count-one": "ഉക്രേനിയൻ ഹ്രിവ്നിയ",
                "displayName-count-other": "ഉക്രേനിയൻ ഹ്രിവ്‌നിയ",
                "symbol-alt-narrow": "₴"
            },
            UAK: {
                displayName: "യുക്രേനിയൻ കാർബോവാനെസ്",
                "displayName-count-one": "ഉക്രേനിയൻ കാർബോവാനെസ്",
                "displayName-count-other": "ഉക്രേനിയൻ കാർബോവാനെസ്"
            },
            UGS: {
                displayName: "ഉഗാണ്ടൻ ഷില്ലിംഗ് (1966–1987)",
                "displayName-count-other": "ഉഗാണ്ടൻ ഷില്ലിംഗ് (1966–1987)"
            },
            UGX: {
                displayName: "ഉഗാണ്ടൻ ഷില്ലിംഗ്",
                "displayName-count-other": "ഉഗാണ്ടൻ ഷില്ലിംഗ്"
            },
            USD: {
                displayName: "യു.എസ്. ഡോളർ",
                "displayName-count-other": "യു.എസ്. ഡോളർ",
                symbol: "$",
                "symbol-alt-narrow": "$"
            },
            USN: {
                displayName: "യുഎസ് ഡോളർ (അടുത്ത ദിവസം)",
                "displayName-count-other": "യുഎസ് ഡോളർ (അടുത്ത ദിവസം)"
            },
            USS: {
                displayName: "യുഎസ് ഡോളർ (അതേ ദിവസം)",
                "displayName-count-one": "യുഎസ് ഡോളർ (അതേ ദിവസം)",
                "displayName-count-other": "യുഎസ് ഡോളേഴ്സ് (അതേ ദിവസം)"
            },
            UYI: {
                displayName: "ഉറുഗ്വേ പെയ്സോ എൻ യൂണിഡാഡ്സ്",
                "displayName-count-one": "ഉറുഗ്വേ പെയ്സോ എൻ യൂണിഡാഡ്സ് ഇൻഡെക്സാഡാസ്",
                "displayName-count-other": "ഉറുഗ്വേ പെയ്സോസ് എൻ യൂണിഡാഡ്സ് ഇൻഡെക്സാഡാസ്"
            },
            UYP: {
                displayName: "ഉറുഗ്വേ പെയ്സോ (1975–1993)",
                "displayName-count-one": "ഉറുഗ്വേ പെയ്സോ (UYP)",
                "displayName-count-other": "ഉറുഗ്വേ പെയ്സോസ് (UYP)"
            },
            UYU: {
                displayName: "ഉറുഗ്വേയൻ പെസോ",
                "displayName-count-other": "ഉറുഗ്വേയൻ പെസോ",
                "symbol-alt-narrow": "$"
            },
            UZS: {
                displayName: "ഉസ്‌ബെക്കിസ്ഥാനി സോം",
                "displayName-count-other": "ഉസ്‌ബെക്കിസ്ഥാനി സോം"
            },
            VEB: {
                displayName: "വെനസ്വേലൻ ബോലിവർ (1871–2008)",
                "displayName-count-one": "വെനസ്വേലൻ ബോലിവർ (1871–2008)",
                "displayName-count-other": "വെനസ്വേലൻ ബോലിവർസ് (1871–2008)"
            },
            VEF: {
                displayName: "വെനിസ്വേലൻ ബൊളീവർ (2008–2018)",
                "displayName-count-other": "വെനിസ്വേലൻ ബൊളീവർ (2008–2018)",
                "symbol-alt-narrow": "Bs"
            },
            VES: {
                displayName: "വെനിസ്വേലൻ ബൊളീവർ",
                "displayName-count-other": "വെനിസ്വേലൻ ബൊളീവർ"
            },
            VND: {
                displayName: "വിയറ്റ്നാമീസ് ഡോങ്",
                "displayName-count-other": "വിയറ്റ്നാമീസ് ഡോങ്",
                symbol: "₫",
                "symbol-alt-narrow": "₫"
            },
            VUV: {
                displayName: "വന്വാതു വാതു",
                "displayName-count-other": "വന്വാതു വാതു"
            },
            WST: {
                displayName: "സമോവൻ താല",
                "displayName-count-other": "സമോവൻ താല"
            },
            XAF: {
                displayName: "മദ്ധ്യ ആഫ്രിക്കൻ [CFA] ഫ്രാങ്ക്",
                "displayName-count-other": "മദ്ധ്യ ആഫ്രിക്കൻ [CFA] ഫ്രാങ്ക്",
                symbol: "FCFA"
            },
            XAG: {
                displayName: "വെള്ളി",
                "displayName-count-other": "വെള്ളി"
            },
            XAU: {
                displayName: "സ്വർണ്ണം",
                "displayName-count-other": "സ്വർണ്ണം"
            },
            XBA: {
                displayName: "യൂറോപ്യൻ കോന്പസിറ്റ് യൂണിറ്റ്",
                "displayName-count-one": "യൂറോപ്യൻ കോന്പസിറ്റ് യൂണിറ്റ്",
                "displayName-count-other": "യൂറോപ്യൻ കോന്പസിറ്റ് യൂണിറ്റ്സ്"
            },
            XBB: {
                displayName: "യൂറോപ്യൻ മോണിറ്ററി യൂണിറ്റ്",
                "displayName-count-one": "യൂറോപ്യൻ മോണിറ്ററി യൂണിറ്റ്",
                "displayName-count-other": "യൂറോപ്യൻ മോണിറ്ററി യൂണിറ്റ്സ്"
            },
            XBC: {
                displayName: "യൂറോപ്യൻ യൂണിറ്റ് ഓഫ് അക്കൌണ്ട് (XBC)",
                "displayName-count-one": "യൂറോപ്യൻ യൂണിറ്റ് ഓഫ് അക്കൌണ്ട് (XBC)",
                "displayName-count-other": "യൂറോപ്യൻ യൂണിറ്റ്സ് ഓഫ് അക്കൌണ്ട് (XBC)"
            },
            XBD: {
                displayName: "യൂറോപ്യൻ യൂണിറ്റ് ഓഫ് അക്കൌണ്ട് (XBD)",
                "displayName-count-one": "യൂറോപ്യൻ യൂണിറ്റ് ഓഫ് അക്കൌണ്ട് (XBD)",
                "displayName-count-other": "യൂറോപ്യൻ യൂണിറ്റ്സ് ഓഫ് അക്കൌണ്ട് (XBD)"
            },
            XCD: {
                displayName: "കിഴക്കൻ കരീബിയൻ ഡോളർ",
                "displayName-count-other": "കിഴക്കൻ കരീബിയൻ ഡോളർ",
                symbol: "EC$",
                "symbol-alt-narrow": "$"
            },
            XCG: {
                displayName: "കരീബിയൻ ഗിൽഡർ",
                "displayName-count-one": "കരീബിയൻ ഗിൽഡർ",
                "displayName-count-other": "കരീബിയൻ ഗിൽഡർ",
                symbol: "Cg."
            },
            XDR: {
                displayName: "സ്പെഷ്യൽ ഡ്രോയിംഗ് റൈറ്റ്സ്",
                "displayName-count-other": "സ്പെഷ്യൽ ഡ്രോയിംഗ് റൈറ്റ്സ്"
            },
            XEU: {
                displayName: "യൂറോപ്യൻ നാണയ യൂണിറ്റ്",
                "displayName-count-one": "യൂറോപ്യൻ നാണയ യൂണിറ്റ്",
                "displayName-count-other": "യൂറോപ്യൻ നാണയ യൂണിറ്റ്സ്"
            },
            XFO: {
                displayName: "ഫ്രെഞ്ച് ഗോൾഡ് ഫ്രാങ്ക്",
                "displayName-count-one": "ഫ്രെഞ്ച് ഗോൾഡ് ഫ്രാങ്ക്",
                "displayName-count-other": "ഫ്രെഞ്ച് ഗോൾഡ് ഫ്രാങ്ക്സ്"
            },
            XFU: {
                displayName: "ഫ്രെഞ്ച് UIC-ഫ്രാങ്ക്",
                "displayName-count-one": "ഫ്രെഞ്ച് UIC-ഫ്രാങ്ക്",
                "displayName-count-other": "ഫ്രെഞ്ച് UIC-ഫ്രാങ്ക്സ്"
            },
            XOF: {
                displayName: "പശ്ചിമ ആഫ്രിക്കൻ [CFA] ഫ്രാങ്ക്",
                "displayName-count-other": "പശ്ചിമ ആഫ്രിക്കൻ [CFA] ഫ്രാങ്ക്",
                symbol: "F CFA"
            },
            XPD: {
                displayName: "പലാഡിയം",
                "displayName-count-other": "പലാഡിയം"
            },
            XPF: {
                displayName: "CFP ഫ്രാങ്ക്",
                "displayName-count-other": "CFP ഫ്രാങ്ക്",
                symbol: "CFPF"
            },
            XPT: {
                displayName: "പ്ലാറ്റിനം",
                "displayName-count-other": "പ്ലാറ്റിനം"
            },
            XRE: {
                displayName: "RINET ഫണ്ട്സ്",
                "displayName-count-other": "RINET ഫണ്ട്സ്"
            },
            XTS: {
                displayName: "ടെസ്റ്റിംഗിനുള്ള കറൻസി കോഡ്",
                "displayName-count-one": "റ്റെസ്റ്റിംഗ് കറൻസി കോഡ്",
                "displayName-count-other": "റ്റെസ്റ്റിംഗ് കറൻസി കോഡ്"
            },
            XXX: {
                displayName: "അജ്ഞാത നാണയം",
                "displayName-count-one": "(അജ്ഞാത നാണയം‌)",
                "displayName-count-other": "(അജ്ഞാത നാണയം)",
                symbol: "¤"
            },
            YDD: {
                displayName: "യമനി ദിനാർ",
                "displayName-count-one": "യമനി ദിനാർ",
                "displayName-count-other": "യമനി ദിനാർസ്"
            },
            YER: {
                displayName: "യെമനി റിയാൽ",
                "displayName-count-other": "യെമനി റിയാൽ"
            },
            YUD: {
                displayName: "യൂഗോസ്ലേവിയൻ ഹാർഡ് ദിനാർ",
                "displayName-count-one": "യൂഗോസ്ലേവിയൻ ഹാർഡ് ദിനാർ",
                "displayName-count-other": "യൂഗോസ്ലേവിയൻ ഹാർഡ് ദിനാർസ്"
            },
            YUM: {
                displayName: "യൂഗോസ്ലേവിയൻ നോവി ദിനാർ",
                "displayName-count-one": "യൂഗോസ്ലേവിയൻ നോവി ദിനാർ",
                "displayName-count-other": "യൂഗോസ്ലേവിയൻ നോവി ദിനാർസ്"
            },
            YUN: {
                displayName: "യൂഗോസ്ലേവിയൻ കൺവേർട്ടിബിൾ ദിനാർ",
                "displayName-count-one": "യൂഗോസ്ലേവിയൻ കൺവേർട്ടിബിൾ ദിനാർ",
                "displayName-count-other": "യൂഗോസ്ലേവിയൻ കൺവേർട്ടിബിൾ ദിനാർസ്"
            },
            ZAL: {
                displayName: "ദക്ഷിണാഫ്രിക്കൻ റാൻഡ് (ഫിനാൻഷ്യൽ)",
                "displayName-count-one": "ദക്ഷിണാഫ്രിക്കൻ റാൻഡ് (ഫിനാൻഷ്യൽ)",
                "displayName-count-other": "ദക്ഷിണാഫ്രിക്കൻ റാൻഡ്സ് (ഫിനാൻഷ്യൽ)"
            },
            ZAR: {
                displayName: "ദക്ഷിണാഫ്രിക്കൻ റാൻഡ്",
                "displayName-count-other": "ദക്ഷിണാഫ്രിക്കൻ റാൻഡ്",
                "symbol-alt-narrow": "R"
            },
            ZMK: {
                displayName: "സാംബിയൻ ക്വാച (1968–2012)",
                "displayName-count-one": "സാംബിയൻ ക്വാച (1968–2012)",
                "displayName-count-other": "സാംബിയൻ ക്വാചാസ് (1968–2012)"
            },
            ZMW: {
                displayName: "സാംബിയൻ ക്വാച്ച",
                "displayName-count-other": "സാംബിയൻ ക്വാച്ച",
                "symbol-alt-narrow": "ZK"
            },
            ZRN: {
                displayName: "സൈറിയൻ ന്യൂ സൈർ",
                "displayName-count-one": "സൈറിയൻ ന്യൂ സൈർ",
                "displayName-count-other": "സൈറിയൻ ന്യൂ സൈർസ്"
            },
            ZRZ: {
                displayName: "സൈറിയൻ സൈർ",
                "displayName-count-one": "സൈറിയൻ സൈർ",
                "displayName-count-other": "സൈറിയൻ സൈർസ്"
            },
            ZWD: {
                displayName: "സിംബാബ്‌വെ ഡോളർ",
                "displayName-count-one": "സിംബാബ്‌വെ ഡോളർ",
                "displayName-count-other": "സിംബാബ്‌വെ ഡോളേഴ്സ്"
            },
            ZWG: {
                displayName: "സിംബാബ്‌വെയൻ ഗോൾഡ്",
                "displayName-count-one": "സിംബാബ്‌വെയൻ ഗോൾഡ്",
                "displayName-count-other": "സിംബാബ്‌വെയൻ ഗോൾഡ്"
            }
        },
        localeCurrency: "INR"
    },
    calendar: {
        patterns: {
            d: "d/M/y",
            D: "y MMMM d, EEEE",
            m: "MMM d",
            M: "MMMM d",
            y: "y MMM",
            Y: "y MMMM",
            F: "y MMMM d, EEEE h:mm:ss a",
            g: "d/M/y h:mm a",
            G: "d/M/y h:mm:ss a",
            t: "h:mm a",
            T: "h:mm:ss a",
            s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
        },
        dateTimeFormats: {
            full: "{1}, {0}",
            long: "{1}, {0}",
            medium: "{1}, {0}",
            short: "{1}, {0}",
            availableFormats: {
                Bh: "B h",
                Bhm: "B h:mm",
                Bhms: "B h:mm:ss",
                d: "d",
                E: "ccc",
                EBh: "E h B",
                EBhm: "E, B h:mm",
                EBhms: "E, B h:mm:ss",
                Ed: "d, E",
                Eh: "E, h a",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "G y",
                GyM: "G y/M",
                GyMd: "G y/M/d",
                GyMEd: "G d/M/y, E",
                GyMMM: "G y MMM",
                GyMMMd: "G y MMM d",
                GyMMMEd: "G y MMM d, E",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "v h:mm:ss a",
                Hmsv: "v HH:mm:ss",
                hmv: "v h:mm a",
                Hmv: "v HH:mm",
                hv: "v h a",
                Hv: "v HH'h'",
                M: "L",
                Md: "d/M",
                MEd: "d/M, E",
                MMdd: "dd/MM",
                MMM: "LLL",
                MMMd: "MMM d",
                MMMEd: "MMM d, E",
                MMMMd: "MMMM d",
                MMMMEd: "MMMM d, E",
                "MMMMW-count-one": "MMMM - ആഴ്ച W",
                "MMMMW-count-other": "MMMM - ആഴ്ച W",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "d/M/y, E",
                yMM: "MM/y",
                yMMM: "y MMM",
                yMMMd: "y MMM d",
                yMMMEd: "y MMM d, E",
                yMMMM: "y MMMM",
                yQQQ: "y QQQ",
                yQQQQ: "y QQQQ",
                "yw-count-one": "Y-ലെ ആഴ്ച w",
                "yw-count-other": "Y-ലെ ആഴ്ച w"
            }
        },
        timeFormats: {
            full: "zzzz h:mm:ss a",
            long: "z h:mm:ss a",
            medium: "h:mm:ss a",
            short: "h:mm a"
        },
        dateFormats: {
            full: "y MMMM d, EEEE",
            long: "y MMMM d",
            medium: "y MMM d",
            short: "d/M/yy"
        },
        days: {
            format: {
                abbreviated: [
                    "ഞായർ",
                    "തിങ്കൾ",
                    "ചൊവ്വ",
                    "ബുധൻ",
                    "വ്യാഴം",
                    "വെള്ളി",
                    "ശനി"
                ],
                narrow: [
                    "ഞ",
                    "തി",
                    "ചൊ",
                    "ബു",
                    "വ്യാ",
                    "വെ",
                    "ശ"
                ],
                short: [
                    "ഞാ",
                    "തി",
                    "ചൊ",
                    "ബു",
                    "വ്യാ",
                    "വെ",
                    "ശ"
                ],
                wide: [
                    "ഞായറാഴ്‌ച",
                    "തിങ്കളാഴ്‌ച",
                    "ചൊവ്വാഴ്ച",
                    "ബുധനാഴ്‌ച",
                    "വ്യാഴാഴ്‌ച",
                    "വെള്ളിയാഴ്‌ച",
                    "ശനിയാഴ്‌ച"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ഞായർ",
                    "തിങ്കൾ",
                    "ചൊവ്വ",
                    "ബുധൻ",
                    "വ്യാഴം",
                    "വെള്ളി",
                    "ശനി"
                ],
                narrow: [
                    "ഞാ",
                    "തി",
                    "ചൊ",
                    "ബു",
                    "വ്യാ",
                    "വെ",
                    "ശ"
                ],
                short: [
                    "ഞാ",
                    "തി",
                    "ചൊ",
                    "ബു",
                    "വ്യാ",
                    "വെ",
                    "ശ"
                ],
                wide: [
                    "ഞായറാഴ്‌ച",
                    "തിങ്കളാഴ്‌ച",
                    "ചൊവ്വാഴ്‌ച",
                    "ബുധനാഴ്‌ച",
                    "വ്യാഴാഴ്‌ച",
                    "വെള്ളിയാഴ്‌ച",
                    "ശനിയാഴ്‌ച"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "ജനു",
                    "ഫെബ്രു",
                    "മാർ",
                    "ഏപ്രി",
                    "മേയ്",
                    "ജൂൺ",
                    "ജൂലൈ",
                    "ഓഗ",
                    "സെപ്റ്റം",
                    "ഒക്ടോ",
                    "നവം",
                    "ഡിസം"
                ],
                narrow: [
                    "ജ",
                    "ഫെ",
                    "മാ",
                    "ഏ",
                    "മെ",
                    "ജൂൺ",
                    "ജൂ",
                    "ഓ",
                    "സെ",
                    "ഒ",
                    "ന",
                    "ഡി"
                ],
                wide: [
                    "ജനുവരി",
                    "ഫെബ്രുവരി",
                    "മാർച്ച്",
                    "ഏപ്രിൽ",
                    "മേയ്",
                    "ജൂൺ",
                    "ജൂലൈ",
                    "ഓഗസ്റ്റ്",
                    "സെപ്റ്റംബർ",
                    "ഒക്‌ടോബർ",
                    "നവംബർ",
                    "ഡിസംബർ"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ജനു",
                    "ഫെബ്രു",
                    "മാർ",
                    "ഏപ്രി",
                    "മേയ്",
                    "ജൂൺ",
                    "ജൂലൈ",
                    "ഓഗ",
                    "സെപ്റ്റം",
                    "ഒക്ടോ",
                    "നവം",
                    "ഡിസം"
                ],
                narrow: [
                    "ജ",
                    "ഫെ",
                    "മാ",
                    "ഏ",
                    "മെ",
                    "ജൂൺ",
                    "ജൂ",
                    "ഓ",
                    "സെ",
                    "ഒ",
                    "ന",
                    "ഡി"
                ],
                wide: [
                    "ജനുവരി",
                    "ഫെബ്രുവരി",
                    "മാർച്ച്",
                    "ഏപ്രിൽ",
                    "മേയ്",
                    "ജൂൺ",
                    "ജൂലൈ",
                    "ഓഗസ്റ്റ്",
                    "സെപ്റ്റംബർ",
                    "ഒക്‌ടോബർ",
                    "നവംബർ",
                    "ഡിസംബർ"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "ഒന്നാം പാദം",
                    "രണ്ടാം പാദം",
                    "മൂന്നാം പാദം",
                    "നാലാം പാദം"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "ഒന്നാം പാദം",
                    "രണ്ടാം പാദം",
                    "മൂന്നാം പാദം",
                    "നാലാം പാദം"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ഒന്നാം പാദം",
                    "രണ്ടാം പാദം",
                    "മൂന്നാം പാദം",
                    "നാലാം പാദം"
                ],
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                wide: [
                    "ഒന്നാം പാദം",
                    "രണ്ടാം പാദം",
                    "മൂന്നാം പാദം",
                    "നാലാം പാദം"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "അർദ്ധരാത്രി",
                    am: "AM",
                    noon: "ഉച്ച",
                    pm: "PM",
                    morning1: "പുലർച്ചെ",
                    morning2: "രാവിലെ",
                    afternoon1: "ഉച്ചയ്ക്ക്",
                    afternoon2: "ഉച്ചതിരിഞ്ഞ്",
                    evening1: "വൈകുന്നേരം",
                    evening2: "സന്ധ്യ",
                    night1: "രാത്രി"
                },
                narrow: {
                    midnight: "അ",
                    am: "AM",
                    noon: "ഉച്ച",
                    pm: "PM",
                    morning1: "പുലർച്ചെ",
                    morning2: "രാവിലെ",
                    afternoon1: "ഉച്ചയ്ക്ക്",
                    afternoon2: "ഉച്ചതിരിഞ്ഞ്",
                    evening1: "വൈകുന്നേരം",
                    evening2: "സന്ധ്യ",
                    night1: "രാത്രി"
                },
                wide: {
                    midnight: "അർദ്ധരാത്രി",
                    am: "AM",
                    noon: "ഉച്ച",
                    pm: "PM",
                    morning1: "പുലർച്ചെ",
                    morning2: "രാവിലെ",
                    afternoon1: "ഉച്ചയ്ക്ക്",
                    afternoon2: "ഉച്ചതിരിഞ്ഞ്",
                    evening1: "വൈകുന്നേരം",
                    evening2: "സന്ധ്യ",
                    night1: "രാത്രി"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "അർദ്ധരാത്രി",
                    am: "AM",
                    noon: "ഉച്ച",
                    pm: "PM",
                    morning1: "പുലർച്ചെ",
                    morning2: "രാവിലെ",
                    afternoon1: "ഉച്ചയ്ക്ക്",
                    afternoon2: "ഉച്ചതിരിഞ്ഞ്",
                    evening1: "വൈകുന്നേരം",
                    evening2: "സന്ധ്യ",
                    night1: "രാത്രി"
                },
                narrow: {
                    midnight: "അർദ്ധരാത്രി",
                    am: "AM",
                    noon: "ഉച്ച",
                    pm: "PM",
                    morning1: "പുലർച്ചെ",
                    morning2: "രാവിലെ",
                    afternoon1: "ഉച്ചയ്ക്ക്",
                    afternoon2: "ഉച്ചതിരിഞ്ഞ്",
                    evening1: "വൈകുന്നേരം",
                    evening2: "സന്ധ്യ",
                    night1: "രാത്രി"
                },
                wide: {
                    midnight: "അർദ്ധരാത്രി",
                    am: "AM",
                    noon: "ഉച്ച",
                    pm: "PM",
                    morning1: "പുലർച്ചെ",
                    morning2: "രാവിലെ",
                    afternoon1: "ഉച്ചയ്ക്ക്",
                    afternoon2: "ഉച്ചതിരിഞ്ഞ്",
                    evening1: "വൈകുന്നേരം",
                    evening2: "സന്ധ്യ",
                    night1: "രാത്രി"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "ക്രിസ്‌തുവിന് മുമ്പ്",
                    "1": "ആന്നോ ഡൊമിനി",
                    "0-alt-variant": "കോമൺ ഇറയ്ക്ക് മുമ്പ്",
                    "1-alt-variant": "കോമൺ ഇറ"
                },
                abbreviated: {
                    "0": "ബിസി",
                    "1": "എഡി",
                    "0-alt-variant": "ബിസിഇ",
                    "1-alt-variant": "സിഇ"
                },
                narrow: {
                    "0": "ബിസി",
                    "1": "എഡി",
                    "0-alt-variant": "ബിസിഇ",
                    "1-alt-variant": "സിഇ"
                }
            }
        },
        gmtFormat: "ജിഎംടി{0}",
        gmtZeroFormat: "ജിഎംടി",
        dateFields: {
            era: {
                wide: "കാലഘട്ടം",
                short: "കാലഘട്ടം",
                narrow: "കാല."
            },
            year: {
                wide: "വർഷം",
                short: "വ.",
                narrow: "വ."
            },
            quarter: {
                wide: "പാദം",
                short: "പാദം",
                narrow: "പാദം"
            },
            month: {
                wide: "മാസം",
                short: "മാ.",
                narrow: "മാ."
            },
            week: {
                wide: "ആഴ്ച",
                short: "ആ.",
                narrow: "ആ."
            },
            weekOfMonth: {
                wide: "മാസത്തിലെ ആഴ്‌ച",
                short: "മാസ. ആഴ്‌ച",
                narrow: "മാസ. ആഴ്‌ച"
            },
            day: {
                wide: "ദിവസം",
                short: "ദിവസം",
                narrow: "ദിവസം"
            },
            dayOfYear: {
                wide: "വർഷത്തിലെ ദിവസം",
                short: "വർഷ. ദിവസം",
                narrow: "വർഷ. ദിവസം"
            },
            weekday: {
                wide: "ആഴ്ചയിലെ ദിവസം",
                short: "ആഴ്‌ച. ദിവസം",
                narrow: "ആഴ്‌ച. ദിവസം"
            },
            weekdayOfMonth: {
                wide: "മാസത്തിലെ പ്രവൃത്തി ദിവസം",
                short: "മാസ. പ്രവൃത്തി ദിവസം",
                narrow: "മാസ. പ്രവൃത്തി ദിവസം"
            },
            dayperiod: {
                short: "AM/PM",
                wide: "AM/PM",
                narrow: "AM/PM"
            },
            hour: {
                wide: "മണിക്കൂർ",
                short: "മ.",
                narrow: "മ."
            },
            minute: {
                wide: "മിനിറ്റ്",
                short: "മി.",
                narrow: "മി."
            },
            second: {
                wide: "സെക്കൻഡ്",
                short: "സെ.",
                narrow: "സെ."
            },
            zone: {
                wide: "സമയ മേഖല",
                short: "മേഖല",
                narrow: "മേഖല"
            },
            millisecond: {
                narrow: "മി.സെ.",
                short: "മി.സെ.",
                wide: "മില്ലിസെക്കൻഡ്"
            }
        }
    },
    firstDay: 0,
    weekendRange: {
        start: 0,
        end: 0
    },
    likelySubtags: {
        ml: "ml-Mlym-IN"
    }
};
export default data;

