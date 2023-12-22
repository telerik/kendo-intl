const data = {
    name: "mr",
    identity: {
        language: "mr"
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
        scientific: {
            patterns: [
                "[nEn]"
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
            "unitPattern-count-one": "n $",
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
            AED: {
                displayName: "संयुक्त अरब अमीरात दिरहॅम",
                "displayName-count-one": "संयुक्त अरब अमीरात दिरहॅम",
                "displayName-count-other": "संयुक्त अरब अमीरात दिरहॅम",
                symbol: "AED"
            },
            AFN: {
                displayName: "अफगाण अफगाणी",
                "displayName-count-one": "अफगाण अफगाणी",
                "displayName-count-other": "अफगाण अफगाणी",
                symbol: "AFN",
                "symbol-alt-narrow": "؋"
            },
            ALL: {
                displayName: "अल्बानियन लेक",
                "displayName-count-one": "अल्बानियन लेक",
                "displayName-count-other": "अल्बानियन लेके",
                symbol: "ALL"
            },
            AMD: {
                displayName: "आर्मेनियन द्रॅम",
                "displayName-count-one": "आर्मेनियन द्रॅम",
                "displayName-count-other": "आर्मेनियन द्रॅम",
                symbol: "AMD",
                "symbol-alt-narrow": "֏"
            },
            ANG: {
                displayName: "नेदरलँडचा अँटिलीन गिल्डर",
                "displayName-count-one": "नेदरलँडचा अँटिलीन गिल्डर",
                "displayName-count-other": "नेदरलँडचे अँटिलीन गिल्डर्स",
                symbol: "ANG"
            },
            AOA: {
                displayName: "अँगोलन क्वॅन्झा",
                "displayName-count-one": "अँगोलन क्वॅन्झा",
                "displayName-count-other": "अँगोलन क्वॅन्झास",
                symbol: "AOA",
                "symbol-alt-narrow": "Kz"
            },
            ARS: {
                displayName: "अर्जेंटाइन पेसो",
                "displayName-count-one": "अर्जेंटाइन पेसो",
                "displayName-count-other": "अर्जेंटाइन पेसोज",
                symbol: "ARS",
                "symbol-alt-narrow": "$"
            },
            AUD: {
                displayName: "ऑस्ट्रेलियन डॉलर",
                "displayName-count-one": "ऑस्ट्रेलियन डॉलर",
                "displayName-count-other": "ऑस्ट्रेलियन डॉलर्स",
                symbol: "A$",
                "symbol-alt-narrow": "$"
            },
            AWG: {
                displayName: "अरुबा फ्लोरिन",
                "displayName-count-one": "अरुबा फ्लोरिन",
                "displayName-count-other": "अरुबा फ्लोरिन",
                symbol: "AWG"
            },
            AZN: {
                displayName: "अझरबैझानी मानाट",
                "displayName-count-one": "अझरबैझानी मानाट",
                "displayName-count-other": "अझरबैझानी मानाट",
                symbol: "AZN",
                "symbol-alt-narrow": "₼"
            },
            BAM: {
                displayName: "बोस्निया-हर्जेगोविना विनिमय मार्क",
                "displayName-count-one": "बोस्निया-हर्जेगोविना विनिमय मार्क",
                "displayName-count-other": "बोस्निया-हर्जेगोविना विनिमय मार्क्स",
                symbol: "BAM",
                "symbol-alt-narrow": "KM"
            },
            BBD: {
                displayName: "बार्बाडियन डॉलर",
                "displayName-count-one": "बार्बाडियन डॉलर",
                "displayName-count-other": "बार्बाडियन डॉलर्स",
                symbol: "BBD",
                "symbol-alt-narrow": "$"
            },
            BDT: {
                displayName: "बांगलादेशी टका",
                "displayName-count-one": "बांगलादेशी टका",
                "displayName-count-other": "बांगलादेशी टका",
                symbol: "BDT",
                "symbol-alt-narrow": "৳"
            },
            BGN: {
                displayName: "बल्गेरियन लेव",
                "displayName-count-one": "बल्गेरियन लेव",
                "displayName-count-other": "बल्गेरियन लेवा",
                symbol: "BGN"
            },
            BHD: {
                displayName: "बाहरिनी दिनार",
                "displayName-count-one": "बाहरिनी दिनार",
                "displayName-count-other": "बाहरिनी दिनार",
                symbol: "BHD"
            },
            BIF: {
                displayName: "बुरुंडियन फ्रँक",
                "displayName-count-one": "बुरुंडियन फ्रँक",
                "displayName-count-other": "बुरुंडियन फ्रँक्स",
                symbol: "BIF"
            },
            BMD: {
                displayName: "बर्मुडा डॉलर",
                "displayName-count-one": "बर्मुडा डॉलर",
                "displayName-count-other": "बर्मुडा डॉलर्स",
                symbol: "BMD",
                "symbol-alt-narrow": "$"
            },
            BND: {
                displayName: "ब्रुनेई डॉलर",
                "displayName-count-one": "ब्रुनेई डॉलर",
                "displayName-count-other": "ब्रुनेई डॉलर्स",
                symbol: "BND",
                "symbol-alt-narrow": "$"
            },
            BOB: {
                displayName: "बोलिव्हियन बोलिव्हियानो",
                "displayName-count-one": "बोलिव्हियन बोलिव्हियानो",
                "displayName-count-other": "बोलिव्हियन बोलिव्हियानोज",
                symbol: "BOB",
                "symbol-alt-narrow": "Bs"
            },
            BRL: {
                displayName: "ब्राझिलियन रियाल",
                "displayName-count-one": "ब्राझिलियन रियाल",
                "displayName-count-other": "ब्राझिलियन रियाल्स",
                symbol: "R$",
                "symbol-alt-narrow": "R$"
            },
            BSD: {
                displayName: "बहामी डॉलर",
                "displayName-count-one": "बहामी डॉलर",
                "displayName-count-other": "बहामी डॉलर्स",
                symbol: "BSD",
                "symbol-alt-narrow": "$"
            },
            BTN: {
                displayName: "भूतानी एंगल्ट्रम",
                "displayName-count-one": "भूतानी एंगल्ट्रम",
                "displayName-count-other": "भूतानी एंगल्ट्रम",
                symbol: "BTN"
            },
            BWP: {
                displayName: "बोट्सवानन पुला",
                "displayName-count-one": "बोट्सवानन पुला",
                "displayName-count-other": "बोट्सवाना पुलाज",
                symbol: "BWP",
                "symbol-alt-narrow": "P"
            },
            BYN: {
                displayName: "बेलारुशियन रुबल",
                "displayName-count-one": "बेलारुशियन रुबल",
                "displayName-count-other": "बेलारुशियन रुबल्स",
                symbol: "BYN"
            },
            BYR: {
                displayName: "बेलारुशियन रुबल (2000–2016)",
                "displayName-count-one": "बेलारुशियन रुबल (2000–2016)",
                "displayName-count-other": "बेलारुशियन रुबल्स (2000–2016)",
                symbol: "BYR"
            },
            BZD: {
                displayName: "बेलीझ डॉलर",
                "displayName-count-one": "बेलीझ डॉलर",
                "displayName-count-other": "बेलीझ डॉलर्स",
                symbol: "BZD",
                "symbol-alt-narrow": "$"
            },
            CAD: {
                displayName: "कॅनडियन डॉलर",
                "displayName-count-one": "कॅनडियन डॉलर",
                "displayName-count-other": "कॅनडियन डॉलर्स",
                symbol: "CA$",
                "symbol-alt-narrow": "$"
            },
            CDF: {
                displayName: "काँगोलीज फ्रँक",
                "displayName-count-one": "काँगोलीज फ्रँक",
                "displayName-count-other": "काँगोलीज फ्रँक्स",
                symbol: "CDF"
            },
            CHF: {
                displayName: "स्विस फ्रँक",
                "displayName-count-one": "स्विस फ्रँक",
                "displayName-count-other": "स्विस फ्रँक्स",
                symbol: "CHF"
            },
            CLP: {
                displayName: "चिली पेसो",
                "displayName-count-one": "चिली पेसो",
                "displayName-count-other": "चिली पेसोज",
                symbol: "CLP",
                "symbol-alt-narrow": "$"
            },
            CNH: {
                displayName: "चिनी युआन (ऑफशोर)",
                "displayName-count-one": "चिनी युआन (ऑफशोर)",
                "displayName-count-other": "चिनी युआन (ऑफशोर)",
                symbol: "CNH"
            },
            CNY: {
                displayName: "चीनी युआन",
                "displayName-count-one": "चीनी युआन",
                "displayName-count-other": "चीनी युआन",
                symbol: "CN¥",
                "symbol-alt-narrow": "¥"
            },
            COP: {
                displayName: "कोलंबियन पेसो",
                "displayName-count-one": "कोलंबियन पेसो",
                "displayName-count-other": "कोलंबियन पेसोज",
                symbol: "COP",
                "symbol-alt-narrow": "$"
            },
            CRC: {
                displayName: "कोस्टारिकन कोलोन",
                "displayName-count-one": "कोस्टारिकन कोलोन",
                "displayName-count-other": "कोस्टारिकन कोलोन्स",
                symbol: "CRC",
                "symbol-alt-narrow": "₡"
            },
            CUC: {
                displayName: "क्यूबन विनिमय पेसो",
                "displayName-count-one": "क्यूबन विनिमय पेसो",
                "displayName-count-other": "क्यूबन विनिमय पेसोज",
                symbol: "CUC",
                "symbol-alt-narrow": "$"
            },
            CUP: {
                displayName: "क्यूबन पेसो",
                "displayName-count-one": "क्यूबन पेसो",
                "displayName-count-other": "क्यूबन पेसोज",
                symbol: "CUP",
                "symbol-alt-narrow": "$"
            },
            CVE: {
                displayName: "केप व्हर्डेयन एस्कुडो",
                "displayName-count-one": "केप व्हर्डेयन एस्कुडो",
                "displayName-count-other": "केप व्हर्डेयन एस्कुडोज",
                symbol: "CVE"
            },
            CZK: {
                displayName: "झेक प्रजासत्ताक कोरुना",
                "displayName-count-one": "झेक प्रजासत्ताक कोरुना",
                "displayName-count-other": "झेक प्रजासत्ताक कोरुनाज",
                symbol: "CZK",
                "symbol-alt-narrow": "Kč"
            },
            DJF: {
                displayName: "जिबौटियन फ्रँक",
                "displayName-count-one": "जिबौटियन फ्रँक",
                "displayName-count-other": "जिबौटियन फ्रँक्स",
                symbol: "DJF"
            },
            DKK: {
                displayName: "डॅनिश क्रोन",
                "displayName-count-one": "डॅनिश क्रोन",
                "displayName-count-other": "डॅनिश क्रोन",
                symbol: "DKK",
                "symbol-alt-narrow": "kr"
            },
            DOP: {
                displayName: "डोमिनिकन पेसो",
                "displayName-count-one": "डोमिनिकन पेसो",
                "displayName-count-other": "डोमिनिकन पेसोज",
                symbol: "DOP",
                "symbol-alt-narrow": "$"
            },
            DZD: {
                displayName: "अल्जेरियन दिनार",
                "displayName-count-one": "अल्जेरियन दिनार",
                "displayName-count-other": "अल्जेरियन दिनार",
                symbol: "DZD"
            },
            EGP: {
                displayName: "इजिप्शियन पाउंड",
                "displayName-count-one": "इजिप्शियन पाउंड",
                "displayName-count-other": "इजिप्शियन पाउंड्स",
                symbol: "EGP",
                "symbol-alt-narrow": "E£"
            },
            ERN: {
                displayName: "इरिट्रियन नाक्फा",
                "displayName-count-one": "इरिट्रियन नाक्फा",
                "displayName-count-other": "इरिट्रियन नाक्फाज",
                symbol: "ERN"
            },
            ESP: {
                "symbol-alt-narrow": "₧"
            },
            ETB: {
                displayName: "इथिओपियन बिर",
                "displayName-count-one": "इथिओपियन बिर",
                "displayName-count-other": "इथिओपियन बिर्स",
                symbol: "ETB"
            },
            EUR: {
                displayName: "युरो",
                "displayName-count-one": "युरो",
                "displayName-count-other": "युरो",
                symbol: "€",
                "symbol-alt-narrow": "€"
            },
            FJD: {
                displayName: "फिजियन डॉलर",
                "displayName-count-one": "फिजियन डॉलर्स",
                "displayName-count-other": "फिजियन डॉलर्स",
                symbol: "FJD",
                "symbol-alt-narrow": "$"
            },
            FKP: {
                displayName: "फॉकलंड आयलंड पाउंड",
                "displayName-count-one": "फॉकलंड आयलंड पाउंड",
                "displayName-count-other": "फॉकलंड आयलंड पाउंड्स",
                symbol: "FKP",
                "symbol-alt-narrow": "£"
            },
            GBP: {
                displayName: "ब्रिटिश पाऊंड",
                "displayName-count-one": "ब्रिटिश पाऊंड",
                "displayName-count-other": "ब्रिटिश पाऊंड्स",
                symbol: "£",
                "symbol-alt-narrow": "£"
            },
            GEL: {
                displayName: "जॉर्जियन लारी",
                "displayName-count-one": "जॉर्जियन लारी",
                "displayName-count-other": "जॉर्जियन लारी",
                symbol: "GEL",
                "symbol-alt-narrow": "₾",
                "symbol-alt-variant": "[₾]"
            },
            GHS: {
                displayName: "घानीयन सेडी",
                "displayName-count-one": "घानीयन सेडी",
                "displayName-count-other": "घानीयन सेडीस",
                symbol: "GHS",
                "symbol-alt-narrow": "GH₵"
            },
            GIP: {
                displayName: "जिब्राल्टर पाउंड",
                "displayName-count-one": "जिब्राल्टर पाउंड",
                "displayName-count-other": "जिब्राल्टर पाउंड्स",
                symbol: "GIP",
                "symbol-alt-narrow": "£"
            },
            GMD: {
                displayName: "गाम्बियन डालासी",
                "displayName-count-one": "गाम्बियन डालासी",
                "displayName-count-other": "गाम्बियन डालासीस",
                symbol: "GMD"
            },
            GNF: {
                displayName: "गिनी फ्रँक",
                "displayName-count-one": "गिनी फ्रँक",
                "displayName-count-other": "गिनी फ्रँक्स",
                symbol: "GNF",
                "symbol-alt-narrow": "FG"
            },
            GTQ: {
                displayName: "ग्वाटेमालाचे क्वेत्झाल",
                "displayName-count-one": "ग्वाटेमालाचे क्वेत्झाल",
                "displayName-count-other": "ग्वाटेमालाचे क्वेत्झाल्स",
                symbol: "GTQ",
                "symbol-alt-narrow": "Q"
            },
            GYD: {
                displayName: "गयाना डॉलर",
                "displayName-count-one": "गयाना डॉलर",
                "displayName-count-other": "गयाना डॉलर्स",
                symbol: "GYD",
                "symbol-alt-narrow": "$"
            },
            HKD: {
                displayName: "हाँगकाँग डॉलर",
                "displayName-count-one": "हाँगकाँग डॉलर",
                "displayName-count-other": "हाँगकाँग डॉलर्स",
                symbol: "HK$",
                "symbol-alt-narrow": "$"
            },
            HNL: {
                displayName: "होन्डुरन लेंपिरा",
                "displayName-count-one": "होन्डुरन लेंपिरा",
                "displayName-count-other": "होन्डुरन लेंपिराज",
                symbol: "HNL",
                "symbol-alt-narrow": "L"
            },
            HRK: {
                displayName: "क्रोएशियन कूना",
                "displayName-count-one": "क्रोएशियन कूना",
                "displayName-count-other": "क्रोएशियन कूनाज",
                symbol: "HRK",
                "symbol-alt-narrow": "kn"
            },
            HTG: {
                displayName: "हैती गोअर्ड",
                "displayName-count-one": "हैती गोअर्ड",
                "displayName-count-other": "हैती गोअर्ड्स",
                symbol: "HTG"
            },
            HUF: {
                displayName: "हंगेरियन फॉरिन्ट",
                "displayName-count-one": "हंगेरियन फॉरिन्ट",
                "displayName-count-other": "हंगेरियन फॉरिन्ट्स",
                symbol: "HUF",
                "symbol-alt-narrow": "Ft"
            },
            IDR: {
                displayName: "इंडोनेशियन रुपिया",
                "displayName-count-one": "इंडोनेशियन रुपिया",
                "displayName-count-other": "इंडोनेशियन रुपिया",
                symbol: "IDR",
                "symbol-alt-narrow": "Rp"
            },
            ILS: {
                displayName: "ईस्त्रायली न्यू शेकेल",
                "displayName-count-one": "ईस्त्रायली न्यू शेकेल",
                "displayName-count-other": "ईस्त्रायली न्यू शेकेल",
                symbol: "₪",
                "symbol-alt-narrow": "₪"
            },
            INR: {
                displayName: "भारतीय रुपया",
                "displayName-count-one": "भारतीय रुपया",
                "displayName-count-other": "भारतीय रुपये",
                symbol: "₹",
                "symbol-alt-narrow": "₹"
            },
            IQD: {
                displayName: "इराकी दिनार",
                "displayName-count-one": "इराकी दिनार",
                "displayName-count-other": "इराकी दिनार",
                symbol: "IQD"
            },
            IRR: {
                displayName: "इराणी रियाल",
                "displayName-count-one": "इराणी रियाल",
                "displayName-count-other": "इराणी रियाल",
                symbol: "IRR"
            },
            ISK: {
                displayName: "आइसलँडिक क्रोना",
                "displayName-count-one": "आइसलँडिक क्रोना",
                "displayName-count-other": "आइसलँडिक क्रोन्युर",
                symbol: "ISK",
                "symbol-alt-narrow": "kr"
            },
            JMD: {
                displayName: "जमैकन डॉलर",
                "displayName-count-one": "जमैकन डॉलर",
                "displayName-count-other": "जमैकन डॉलर्स",
                symbol: "JMD",
                "symbol-alt-narrow": "$"
            },
            JOD: {
                displayName: "जॉर्डनियन दिनार",
                "displayName-count-one": "जॉर्डनियन दिनार",
                "displayName-count-other": "जॉर्डनियन दिनार",
                symbol: "JOD"
            },
            JPY: {
                displayName: "जपानी येन",
                "displayName-count-one": "जपानी येन",
                "displayName-count-other": "जपानी येन",
                symbol: "JP¥",
                "symbol-alt-narrow": "¥"
            },
            KES: {
                displayName: "केनियन शिलिंग",
                "displayName-count-one": "केनियन शिलिंग",
                "displayName-count-other": "केनियन शिलिंग्स",
                symbol: "KES"
            },
            KGS: {
                displayName: "किरगिस्तानी सॉम",
                "displayName-count-one": "किरगिस्तानी सॉम",
                "displayName-count-other": "किरगिस्तानी सॉम",
                symbol: "KGS"
            },
            KHR: {
                displayName: "कंबोडियन रियेल",
                "displayName-count-one": "कंबोडियन रियेल",
                "displayName-count-other": "कंबोडियन रियेल",
                symbol: "KHR",
                "symbol-alt-narrow": "៛"
            },
            KMF: {
                displayName: "कोमोरियन फ्रँक",
                "displayName-count-one": "कोमोरियन फ्रँक",
                "displayName-count-other": "कोमोरियन फ्रँक्स",
                symbol: "KMF",
                "symbol-alt-narrow": "CF"
            },
            KPW: {
                displayName: "उत्तर कोरियन वॉन",
                "displayName-count-one": "उत्तर कोरियन वॉन",
                "displayName-count-other": "उत्तर कोरियन वॉन",
                symbol: "KPW",
                "symbol-alt-narrow": "₩"
            },
            KRW: {
                displayName: "दक्षिण कोरियन वॉन",
                "displayName-count-one": "दक्षिण कोरियन वॉन",
                "displayName-count-other": "दक्षिण कोरियन वॉन",
                symbol: "₩",
                "symbol-alt-narrow": "₩"
            },
            KWD: {
                displayName: "कुवैती दिनार",
                "displayName-count-one": "कुवैती दिनार",
                "displayName-count-other": "कुवैती दिनार",
                symbol: "KWD"
            },
            KYD: {
                displayName: "केमेन आयलॅंड डॉलर",
                "displayName-count-one": "केमेन आयलॅंड डॉलर",
                "displayName-count-other": "केमेन आयलॅंड डॉलर्स",
                symbol: "KYD",
                "symbol-alt-narrow": "$"
            },
            KZT: {
                displayName: "कझाकिस्तानी तेंगे",
                "displayName-count-one": "कझाकिस्तानी तेंगे",
                "displayName-count-other": "कझाकिस्तानी तेंगे",
                symbol: "KZT",
                "symbol-alt-narrow": "₸"
            },
            LAK: {
                displayName: "लाओशियन किप",
                "displayName-count-one": "लाओशियन किप",
                "displayName-count-other": "लाओशियन किप",
                symbol: "LAK",
                "symbol-alt-narrow": "₭"
            },
            LBP: {
                displayName: "लेबनीज पाउंड",
                "displayName-count-one": "लेबनीज पाउंड",
                "displayName-count-other": "लेबनीज पाउंड्स",
                symbol: "LBP",
                "symbol-alt-narrow": "L£"
            },
            LKR: {
                displayName: "श्रीलंकन रुपया",
                "displayName-count-one": "श्रीलंकन रुपया",
                "displayName-count-other": "श्रीलंकन रुपये",
                symbol: "LKR",
                "symbol-alt-narrow": "Rs"
            },
            LRD: {
                displayName: "लाइबेरियन डॉलर",
                "displayName-count-one": "लाइबेरियन डॉलर",
                "displayName-count-other": "लाइबेरियन डॉलर्स",
                symbol: "LRD",
                "symbol-alt-narrow": "$"
            },
            LSL: {
                displayName: "लेसोटो लोटी",
                "displayName-count-one": "लेसोटो लोटी",
                "displayName-count-other": "लेसोटो लोटी"
            },
            LTL: {
                displayName: "लिथुआनियन लिटास",
                "displayName-count-one": "लिथुआनियन लिटास",
                "displayName-count-other": "लिथुआनियन लिटाई",
                symbol: "LTL",
                "symbol-alt-narrow": "Lt"
            },
            LVL: {
                displayName: "लाट्व्हियन लाट्झ",
                "displayName-count-one": "लाट्व्हियन लाट्झ",
                "displayName-count-other": "लाट्व्हियन लाटी",
                symbol: "LVL",
                "symbol-alt-narrow": "Ls"
            },
            LYD: {
                displayName: "लिबियाचा दिनार",
                "displayName-count-one": "लिबियाचा दिनार",
                "displayName-count-other": "लिबियन दिनार",
                symbol: "LYD"
            },
            MAD: {
                displayName: "मोरोक्को दिरहॅम",
                "displayName-count-one": "मोरोक्को दिरहॅम",
                "displayName-count-other": "मोरोक्कन दिरहाम",
                symbol: "MAD"
            },
            MDL: {
                displayName: "मोल्डोवन लेउ",
                "displayName-count-one": "मोल्डोवन लेउ",
                "displayName-count-other": "मोल्डोवन लेई",
                symbol: "MDL"
            },
            MGA: {
                displayName: "मालागासी एरियारी",
                "displayName-count-one": "मालागासी एरियारी",
                "displayName-count-other": "मालागासी एरियारीज",
                symbol: "MGA",
                "symbol-alt-narrow": "Ar"
            },
            MKD: {
                displayName: "मॅसेडोनियन देनार",
                "displayName-count-one": "मॅसेडोनियन देनार",
                "displayName-count-other": "मॅसेडोनियन देनारी",
                symbol: "MKD"
            },
            MMK: {
                displayName: "म्यानमार क्याट",
                "displayName-count-one": "म्यानमार क्याट",
                "displayName-count-other": "म्यानमार क्याट",
                symbol: "MMK",
                "symbol-alt-narrow": "K"
            },
            MNT: {
                displayName: "मंगोलियन टुग्रिक",
                "displayName-count-one": "मंगोलियन टुग्रिक",
                "displayName-count-other": "मंगोलियन टुग्रिक्स",
                symbol: "MNT",
                "symbol-alt-narrow": "₮"
            },
            MOP: {
                displayName: "मॅकॅनीज् पटाका",
                "displayName-count-one": "मॅकॅनीज् पटाका",
                "displayName-count-other": "मॅकॅनीज् पटाकाज",
                symbol: "MOP"
            },
            MRO: {
                displayName: "मॉरिटानियन ओगिया (1973–2017)",
                "displayName-count-one": "मॉरिटानियन ओगिया (1973–2017)",
                "displayName-count-other": "मॉरिटानियन ओगियाज (1973–2017)",
                symbol: "MRO"
            },
            MRU: {
                displayName: "मॉरिटानियन ओगिया",
                "displayName-count-one": "मॉरिटानियन ओगिया",
                "displayName-count-other": "मॉरिटानियन ओगियाज",
                symbol: "MRU"
            },
            MUR: {
                displayName: "मॉरिशियन रुपी",
                "displayName-count-one": "मॉरिशियन रुपी",
                "displayName-count-other": "मॉरिशियन रुपीज",
                symbol: "MUR",
                "symbol-alt-narrow": "Rs"
            },
            MVR: {
                displayName: "मालदीवियन रुफिया",
                "displayName-count-one": "मालदीवियन रुफिया",
                "displayName-count-other": "मालदीवियन रुफिया",
                symbol: "MVR"
            },
            MWK: {
                displayName: "मालावियन क्वाचा",
                "displayName-count-one": "मालावियन क्वाचा",
                "displayName-count-other": "मालावियन क्वाचास",
                symbol: "MWK"
            },
            MXN: {
                displayName: "मेक्सिको पेसो",
                "displayName-count-one": "मेक्सिको पेसो",
                "displayName-count-other": "मेक्सिको पेसोज",
                symbol: "MX$",
                "symbol-alt-narrow": "$"
            },
            MYR: {
                displayName: "मलेशियन रिंगिट",
                "displayName-count-one": "मलेशियन रिंगिट",
                "displayName-count-other": "मलेशियन रिंगिट",
                symbol: "MYR",
                "symbol-alt-narrow": "RM"
            },
            MZN: {
                displayName: "मोझांबिकन मेटिकल",
                "displayName-count-one": "मोझांबिकन मेटिकल",
                "displayName-count-other": "मोझांबिकन मेटिकल्स",
                symbol: "MZN"
            },
            NAD: {
                displayName: "नमिबियन डॉलर",
                "displayName-count-one": "नमिबियन डॉलर",
                "displayName-count-other": "नमिबियन डॉलर्स",
                symbol: "NAD",
                "symbol-alt-narrow": "$"
            },
            NGN: {
                displayName: "नायजेरियन नायरा",
                "displayName-count-one": "नायजेरियन नायरा",
                "displayName-count-other": "नायजेरियन नायराज",
                symbol: "NGN",
                "symbol-alt-narrow": "₦"
            },
            NIO: {
                displayName: "निकाराग्वन कोर्डोबा",
                "displayName-count-one": "निकाराग्वन कोर्डोबा",
                "displayName-count-other": "निकाराग्वन कोर्डोबाज",
                symbol: "NIO",
                "symbol-alt-narrow": "C$"
            },
            NOK: {
                displayName: "नॉर्वेजियन क्रोन",
                "displayName-count-one": "नॉर्वेजियन क्रोन",
                "displayName-count-other": "नॉर्वेजियन क्रोनर",
                symbol: "NOK",
                "symbol-alt-narrow": "kr"
            },
            NPR: {
                displayName: "नेपाळी रुपया",
                "displayName-count-one": "नेपाळी रुपया",
                "displayName-count-other": "नेपाळी रुपये",
                symbol: "NPR",
                "symbol-alt-narrow": "Rs"
            },
            NZD: {
                displayName: "न्यूझीलँड डॉलर",
                "displayName-count-one": "न्यूझीलँड डॉलर",
                "displayName-count-other": "न्यूझीलँड डॉलर्स",
                symbol: "NZ$",
                "symbol-alt-narrow": "$"
            },
            OMR: {
                displayName: "ओमानी रियाल",
                "displayName-count-one": "ओमानी रियाल",
                "displayName-count-other": "ओमानी रियाल",
                symbol: "OMR"
            },
            PAB: {
                displayName: "पनामा बाल्बोआ",
                "displayName-count-one": "पनामा बाल्बोआ",
                "displayName-count-other": "पनामा बाल्बोआज",
                symbol: "PAB"
            },
            PEN: {
                displayName: "पेरुवियन सोल",
                "displayName-count-one": "पेरुवियन सोल",
                "displayName-count-other": "पेरुवियन सोल्स",
                symbol: "PEN"
            },
            PGK: {
                displayName: "पापुआ न्यू गिनीयन किना",
                "displayName-count-one": "पापुआ न्यू गिनीयन किना",
                "displayName-count-other": "पापुआ न्यू गिनीयन किना",
                symbol: "PGK"
            },
            PHP: {
                displayName: "फिलिपिनी पेसो",
                "displayName-count-one": "फिलिपिनी पेसो",
                "displayName-count-other": "फिलिपिनी पेसोज",
                symbol: "PHP",
                "symbol-alt-narrow": "₱"
            },
            PKR: {
                displayName: "पाकिस्तानी रुपया",
                "displayName-count-one": "पाकिस्तानी रुपया",
                "displayName-count-other": "पाकिस्तानी रुपये",
                symbol: "PKR",
                "symbol-alt-narrow": "Rs"
            },
            PLN: {
                displayName: "पोलिश झ्लॉटी",
                "displayName-count-one": "पोलिश झ्लॉटी",
                "displayName-count-other": "पोलिश झ्लॉटीज",
                symbol: "PLN",
                "symbol-alt-narrow": "zł"
            },
            PYG: {
                displayName: "पराग्वे ग्वारानी",
                "displayName-count-one": "पराग्वे ग्वारानी",
                "displayName-count-other": "पराग्वे ग्वारानीज",
                symbol: "PYG",
                "symbol-alt-narrow": "₲"
            },
            QAR: {
                displayName: "कतारी रियाल",
                "displayName-count-one": "कतारी रियाल",
                "displayName-count-other": "कतारी रियाल",
                symbol: "QAR"
            },
            RON: {
                displayName: "रोमानियन लेऊ",
                "displayName-count-one": "रोमानियन लेऊ",
                "displayName-count-other": "रोमानियन लेई",
                symbol: "RON",
                "symbol-alt-narrow": "lei"
            },
            RSD: {
                displayName: "सर्बियन दिनार",
                "displayName-count-one": "सर्बियन दिनार",
                "displayName-count-other": "सर्बियन दिनार",
                symbol: "RSD"
            },
            RUB: {
                displayName: "रशियन रुबल",
                "displayName-count-one": "रशियन रुबल",
                "displayName-count-other": "रशियन रुबल्स",
                symbol: "RUB",
                "symbol-alt-narrow": "₽"
            },
            RWF: {
                displayName: "रवांडा फ्रँक",
                "displayName-count-one": "रवांडा फ्रँक",
                "displayName-count-other": "रवांडा फ्रँक्स",
                symbol: "RWF",
                "symbol-alt-narrow": "RF"
            },
            SAR: {
                displayName: "सौदी रियाल",
                "displayName-count-one": "सौदी रियाल",
                "displayName-count-other": "सौदी रियाल",
                symbol: "SAR"
            },
            SBD: {
                displayName: "सोलोमन आयलँड्स डॉलर",
                "displayName-count-one": "सोलोमन आयलँड्स डॉलर",
                "displayName-count-other": "सोलोमन आयलँड्स डॉलर्स",
                symbol: "SBD",
                "symbol-alt-narrow": "$"
            },
            SCR: {
                displayName: "सेशेलोईस रुपी",
                "displayName-count-one": "सेशेलोईस रुपी",
                "displayName-count-other": "सेशेलोईस रुपीज",
                symbol: "SCR"
            },
            SDG: {
                displayName: "सुदानी पाउंड",
                "displayName-count-one": "सुदानी पाउंड",
                "displayName-count-other": "सुदानी पाउंड्स",
                symbol: "SDG"
            },
            SEK: {
                displayName: "स्वीडिश क्रोना",
                "displayName-count-one": "स्वीडिश क्रोना",
                "displayName-count-other": "स्वीडिश क्रोनोर",
                symbol: "SEK",
                "symbol-alt-narrow": "kr"
            },
            SGD: {
                displayName: "सिंगापूर डॉलर",
                "displayName-count-one": "सिंगापूर डॉलर",
                "displayName-count-other": "सिंगापूर डॉलर्स",
                symbol: "SGD",
                "symbol-alt-narrow": "$"
            },
            SHP: {
                displayName: "सेंट हेलेना पाउंड",
                "displayName-count-one": "सेंट हेलेना पाउंड",
                "displayName-count-other": "सेंट हेलेना पाउंड्स",
                symbol: "SHP",
                "symbol-alt-narrow": "£"
            },
            SLL: {
                displayName: "सिएरा लिऑनचा लिऑन",
                "displayName-count-one": "सिएरा लिऑनचा लिऑन",
                "displayName-count-other": "सिएरा लिऑनचे लिऑन्स",
                symbol: "SLL"
            },
            SOS: {
                displayName: "सोमाली शिलिंग",
                "displayName-count-one": "सोमाली शिलिंग्स",
                "displayName-count-other": "सोमाली शिलिंग",
                symbol: "SOS"
            },
            SRD: {
                displayName: "सुरिनामी डॉलर",
                "displayName-count-one": "सुरिनामी डॉलर",
                "displayName-count-other": "सुरिनामी डॉलर्स",
                symbol: "SRD",
                "symbol-alt-narrow": "$"
            },
            SSP: {
                displayName: "दक्षिण सुदानी पाउंड",
                "displayName-count-one": "दक्षिण सुदानी पाउंड",
                "displayName-count-other": "दक्षिण सुदानी पाउंड्स",
                symbol: "SSP",
                "symbol-alt-narrow": "£"
            },
            STD: {
                displayName: "साओ टोम आणि प्रिन्सिपे डोबरा (1977–2017)",
                "displayName-count-one": "साओ टोम आणि प्रिन्सिपे डोबरा (1977–2017)",
                "displayName-count-other": "साओ टोम आणि प्रिन्सिपे डोबराज (1977–2017)",
                symbol: "STD"
            },
            STN: {
                displayName: "साओ टोम आणि प्रिन्सिपे डोबरा",
                "displayName-count-one": "साओ टोम आणि प्रिन्सिपे डोबरा",
                "displayName-count-other": "साओ टोम आणि प्रिन्सिपे डोबराज",
                symbol: "STN",
                "symbol-alt-narrow": "Db"
            },
            SYP: {
                displayName: "सीरियन पाउंड",
                "displayName-count-one": "सीरियन पाउंड",
                "displayName-count-other": "सीरियन पाउंड्स",
                symbol: "SYP",
                "symbol-alt-narrow": "£"
            },
            SZL: {
                displayName: "स्वाझी लीलांगेनी",
                "displayName-count-one": "स्वाझी लीलांगेनी",
                "displayName-count-other": "स्वाझी एमालांगेनी",
                symbol: "SZL"
            },
            THB: {
                displayName: "थाई बाहत",
                "displayName-count-one": "थाई बाहत",
                "displayName-count-other": "थाई बाहत",
                symbol: "฿",
                "symbol-alt-narrow": "฿"
            },
            TJS: {
                displayName: "ताजकीस्तानी सोमोनी",
                "displayName-count-one": "ताजकीस्तानी सोमोनी",
                "displayName-count-other": "ताजकीस्तानी सोमोनीज",
                symbol: "TJS"
            },
            TMT: {
                displayName: "तुर्कमेनिस्तानी मानाट",
                "displayName-count-one": "तुर्कमेनिस्तानी मानाट",
                "displayName-count-other": "तुर्कमेनिस्तानी मानाट",
                symbol: "TMT"
            },
            TND: {
                displayName: "ट्यूनिशियन दिनार",
                "displayName-count-one": "ट्यूनिशियन दिनार",
                "displayName-count-other": "ट्यूनिशियन दिनार",
                symbol: "TND"
            },
            TOP: {
                displayName: "टोंगन पाआंगा",
                "displayName-count-one": "टोंगन पाआंगा",
                "displayName-count-other": "टोंगन पाआंगा",
                symbol: "TOP",
                "symbol-alt-narrow": "T$"
            },
            TRY: {
                displayName: "तुर्की लिरा",
                "displayName-count-one": "तुर्की लिरा",
                "displayName-count-other": "तुर्की लिरा",
                symbol: "TRY",
                "symbol-alt-narrow": "₺",
                "symbol-alt-variant": "TL"
            },
            TTD: {
                displayName: "त्रिनिदाद आणि टोबॅगो डॉलर",
                "displayName-count-one": "त्रिनिदाद आणि टोबॅगो डॉलर",
                "displayName-count-other": "त्रिनिदाद आणि टोबॅगो डॉलर्स",
                symbol: "TTD",
                "symbol-alt-narrow": "$"
            },
            TWD: {
                displayName: "न्यू तैवान डॉलर",
                "displayName-count-one": "न्यू तैवान डॉलर",
                "displayName-count-other": "न्यू तैवान डॉलर्स",
                symbol: "NT$",
                "symbol-alt-narrow": "NT$"
            },
            TZS: {
                displayName: "टांझानियन शिलिंग",
                "displayName-count-one": "टांझानियन शिलिंग",
                "displayName-count-other": "टांझानियन शिलिंग्स",
                symbol: "TZS"
            },
            UAH: {
                displayName: "युक्रेनियन रिवनिया",
                "displayName-count-one": "युक्रेनियन रिवनिया",
                "displayName-count-other": "युक्रेनियन रिवनियाज",
                symbol: "UAH",
                "symbol-alt-narrow": "₴"
            },
            UGX: {
                displayName: "युगांडा शिलिंग",
                "displayName-count-one": "युगांडा शिलिंग",
                "displayName-count-other": "युगांडा शिलिंग्स",
                symbol: "UGX"
            },
            USD: {
                displayName: "यूएस डॉलर",
                "displayName-count-one": "यूएस डॉलर",
                "displayName-count-other": "यूएस डॉलर्स",
                symbol: "$",
                "symbol-alt-narrow": "$"
            },
            UYU: {
                displayName: "उरुग्वेचा पेसो",
                "displayName-count-one": "उरुग्वेचा पेसो",
                "displayName-count-other": "उरुग्वेचे पेसोज",
                symbol: "UYU",
                "symbol-alt-narrow": "$"
            },
            UZS: {
                displayName: "उझबेकिस्तानी सोम",
                "displayName-count-one": "उझबेकिस्तानी सोम",
                "displayName-count-other": "उझबेकिस्तानी सोम",
                symbol: "UZS"
            },
            VEF: {
                displayName: "व्हेनेझुएला बोलिव्हार (2008–2018)",
                "displayName-count-one": "व्हेनेझुएला बोलिव्हार (2008–2018)",
                "displayName-count-other": "व्हेनेझुएला बोलिव्हार्स (2008–2018)",
                symbol: "VEF",
                "symbol-alt-narrow": "Bs"
            },
            VES: {
                displayName: "व्हेनेझुएला बोलिव्हार",
                "displayName-count-one": "व्हेनेझुएला बोलिव्हार",
                "displayName-count-other": "व्हेनेझुएला बोलिव्हार्स",
                symbol: "VES"
            },
            VND: {
                displayName: "व्हिएतनामी डोंग",
                "displayName-count-one": "व्हिएतनामी डोंग",
                "displayName-count-other": "व्हिएतनामी डोंग",
                symbol: "₫",
                "symbol-alt-narrow": "₫"
            },
            VUV: {
                displayName: "वानुआतु वाटु",
                "displayName-count-one": "वानुआतु वाटु",
                "displayName-count-other": "वानुआतु वाटु",
                symbol: "VUV"
            },
            WST: {
                displayName: "सामोअन टाला",
                "displayName-count-one": "सामोअन टाला",
                "displayName-count-other": "सामोअन टाला",
                symbol: "WST"
            },
            XAF: {
                displayName: "मध्य आफ्रिकन [CFA] फ्रँक",
                "displayName-count-one": "मध्य आफ्रिकन [CFA] फ्रँक",
                "displayName-count-other": "मध्य आफ्रिकन [CFA] फ्रँक",
                symbol: "FCFA"
            },
            XCD: {
                displayName: "पूर्व कॅरीबियन डॉलर",
                "displayName-count-one": "पूर्व कॅरीबियन डॉलर",
                "displayName-count-other": "पूर्व कॅरीबियन डॉलर्स",
                symbol: "EC$",
                "symbol-alt-narrow": "$"
            },
            XOF: {
                displayName: "पश्चिम आफ्रिकन [CFA] फ्रँक",
                "displayName-count-one": "पश्चिम आफ्रिकन [CFA] फ्रँक",
                "displayName-count-other": "पश्चिम आफ्रिकन [CFA] फ्रँक्स",
                symbol: "F CFA"
            },
            XPF: {
                displayName: "[CFP] फ्रँक",
                "displayName-count-one": "[CFP] फ्रँक",
                "displayName-count-other": "[CFP] फ्रँक्स",
                symbol: "CFPF"
            },
            XXX: {
                displayName: "अज्ञात चलन",
                "displayName-count-one": "(चलनाचे अज्ञात एकक)",
                "displayName-count-other": "(अज्ञात चलन)",
                symbol: "¤"
            },
            YER: {
                displayName: "येमेनी रियाल",
                "displayName-count-one": "येमेनी रियाल",
                "displayName-count-other": "येमेनी रियाल",
                symbol: "YER"
            },
            ZAR: {
                displayName: "दक्षिण आफ्रिकी रँड",
                "displayName-count-one": "दक्षिण आफ्रिकी रँड",
                "displayName-count-other": "दक्षिण आफ्रिकी रँड",
                symbol: "ZAR",
                "symbol-alt-narrow": "R"
            },
            ZMK: {
                displayName: "झांबियन क्वाचा (1968–2012)"
            },
            ZMW: {
                displayName: "झांबियन क्वाचा",
                "displayName-count-one": "झांबियन क्वाचा",
                "displayName-count-other": "झांबियन क्वाचास",
                symbol: "ZMW",
                "symbol-alt-narrow": "ZK"
            }
        },
        localeCurrency: "INR"
    },
    calendar: {
        patterns: {
            d: "d/M/y",
            D: "EEEE, d MMMM, y",
            m: "d MMM",
            M: "d MMMM",
            y: "MMM y",
            Y: "MMMM y",
            F: "EEEE, d MMMM, y h:mm:ss a",
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
                EBhm: "E B h:mm",
                EBhms: "E B h:mm:ss",
                Ed: "d E",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "G y",
                GyMd: "GGGGG d/M/y",
                GyMMM: "MMM G y",
                GyMMMd: "d MMM, G y",
                GyMMMEd: "E, d MMM, G y",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "H:mm",
                hms: "h:mm:ss a",
                Hms: "H:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d/M",
                MEd: "E, d/M",
                MMdd: "dd-MM",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E, d MMM",
                MMMMd: "d MMMM",
                "MMMMW-count-one": "MMMM चा W रा आठवडा",
                "MMMMW-count-other": "MMMM चा W रा आठवडा",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "E, d/M/y",
                yMM: "MM-y",
                yMMM: "MMM y",
                yMMMd: "d MMM, y",
                yMMMEd: "E, d, MMM y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y",
                "yw-count-one": "Y चा w रा आठवडा",
                "yw-count-other": "Y चा w रा आठवडा"
            }
        },
        timeFormats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a"
        },
        dateFormats: {
            full: "EEEE, d MMMM, y",
            long: "d MMMM, y",
            medium: "d MMM, y",
            short: "d/M/yy"
        },
        days: {
            format: {
                abbreviated: [
                    "रवि",
                    "सोम",
                    "मंगळ",
                    "बुध",
                    "गुरु",
                    "शुक्र",
                    "शनि"
                ],
                narrow: [
                    "र",
                    "सो",
                    "मं",
                    "बु",
                    "गु",
                    "शु",
                    "श"
                ],
                short: [
                    "र",
                    "सो",
                    "मं",
                    "बु",
                    "गु",
                    "शु",
                    "श"
                ],
                wide: [
                    "रविवार",
                    "सोमवार",
                    "मंगळवार",
                    "बुधवार",
                    "गुरुवार",
                    "शुक्रवार",
                    "शनिवार"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "रवि",
                    "सोम",
                    "मंगळ",
                    "बुध",
                    "गुरु",
                    "शुक्र",
                    "शनि"
                ],
                narrow: [
                    "र",
                    "सो",
                    "मं",
                    "बु",
                    "गु",
                    "शु",
                    "श"
                ],
                short: [
                    "र",
                    "सो",
                    "मं",
                    "बु",
                    "गु",
                    "शु",
                    "श"
                ],
                wide: [
                    "रविवार",
                    "सोमवार",
                    "मंगळवार",
                    "बुधवार",
                    "गुरुवार",
                    "शुक्रवार",
                    "शनिवार"
                ]
            }
        },
        months: {
            format: {
                abbreviated: [
                    "जाने",
                    "फेब्रु",
                    "मार्च",
                    "एप्रि",
                    "मे",
                    "जून",
                    "जुलै",
                    "ऑग",
                    "सप्टें",
                    "ऑक्टो",
                    "नोव्हें",
                    "डिसें"
                ],
                narrow: [
                    "जा",
                    "फे",
                    "मा",
                    "ए",
                    "मे",
                    "जू",
                    "जु",
                    "ऑ",
                    "स",
                    "ऑ",
                    "नो",
                    "डि"
                ],
                wide: [
                    "जानेवारी",
                    "फेब्रुवारी",
                    "मार्च",
                    "एप्रिल",
                    "मे",
                    "जून",
                    "जुलै",
                    "ऑगस्ट",
                    "सप्टेंबर",
                    "ऑक्टोबर",
                    "नोव्हेंबर",
                    "डिसेंबर"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "जाने",
                    "फेब्रु",
                    "मार्च",
                    "एप्रि",
                    "मे",
                    "जून",
                    "जुलै",
                    "ऑग",
                    "सप्टें",
                    "ऑक्टो",
                    "नोव्हें",
                    "डिसें"
                ],
                narrow: [
                    "जा",
                    "फे",
                    "मा",
                    "ए",
                    "मे",
                    "जू",
                    "जु",
                    "ऑ",
                    "स",
                    "ऑ",
                    "नो",
                    "डि"
                ],
                wide: [
                    "जानेवारी",
                    "फेब्रुवारी",
                    "मार्च",
                    "एप्रिल",
                    "मे",
                    "जून",
                    "जुलै",
                    "ऑगस्ट",
                    "सप्टेंबर",
                    "ऑक्टोबर",
                    "नोव्हेंबर",
                    "डिसेंबर"
                ]
            }
        },
        quarters: {
            format: {
                abbreviated: [
                    "ति१",
                    "ति२",
                    "ति३",
                    "ति४"
                ],
                narrow: [
                    "१",
                    "२",
                    "३",
                    "४"
                ],
                wide: [
                    "प्रथम तिमाही",
                    "द्वितीय तिमाही",
                    "तृतीय तिमाही",
                    "चतुर्थ तिमाही"
                ]
            },
            "stand-alone": {
                abbreviated: [
                    "ति१",
                    "ति२",
                    "ति३",
                    "ति४"
                ],
                narrow: [
                    "१",
                    "२",
                    "३",
                    "४"
                ],
                wide: [
                    "प्रथम तिमाही",
                    "द्वितीय तिमाही",
                    "तृतीय तिमाही",
                    "चतुर्थ तिमाही"
                ]
            }
        },
        dayPeriods: {
            format: {
                abbreviated: {
                    midnight: "मध्यरात्र",
                    am: "AM",
                    noon: "मध्यान्ह",
                    pm: "PM",
                    morning1: "पहाट",
                    morning2: "सकाळ",
                    afternoon1: "दुपार",
                    evening1: "संध्याकाळ",
                    night1: "रात्र"
                },
                narrow: {
                    midnight: "म.रा.",
                    am: "a",
                    noon: "दु",
                    pm: "p",
                    morning1: "प",
                    morning2: "स",
                    afternoon1: "दु",
                    evening1: "सं",
                    night1: "रा"
                },
                wide: {
                    midnight: "मध्यरात्र",
                    am: "AM",
                    noon: "मध्यान्ह",
                    pm: "PM",
                    morning1: "पहाट",
                    morning2: "सकाळ",
                    afternoon1: "दुपार",
                    evening1: "संध्याकाळ",
                    night1: "रात्र"
                }
            },
            "stand-alone": {
                abbreviated: {
                    midnight: "मध्यरात्र",
                    am: "AM",
                    noon: "मध्यान्ह",
                    pm: "PM",
                    morning1: "पहाट",
                    morning2: "सकाळ",
                    afternoon1: "दुपार",
                    evening1: "संध्याकाळ",
                    night1: "रात्र"
                },
                narrow: {
                    midnight: "म.रा.",
                    am: "AM",
                    noon: "म",
                    pm: "PM",
                    morning1: "प",
                    morning2: "स",
                    afternoon1: "दु",
                    evening1: "सं",
                    night1: "रात्र"
                },
                wide: {
                    midnight: "मध्यरात्र",
                    am: "AM",
                    noon: "मध्यान्ह",
                    pm: "PM",
                    morning1: "पहाट",
                    morning2: "सकाळ",
                    afternoon1: "दुपार",
                    evening1: "संध्याकाळ",
                    night1: "रात्र"
                }
            }
        },
        eras: {
            format: {
                wide: {
                    "0": "ईसवीसनपूर्व",
                    "1": "ईसवीसन",
                    "0-alt-variant": "ईसापूर्व युग",
                    "1-alt-variant": "ख्रिस्तयुग"
                },
                abbreviated: {
                    "0": "ई. स. पू.",
                    "1": "इ. स.",
                    "0-alt-variant": "ई. स. पू. युग",
                    "1-alt-variant": "ख्रि. यु."
                },
                narrow: {
                    "0": "ई. स. पू.",
                    "1": "इ. स.",
                    "0-alt-variant": "ई. स. पू. युग",
                    "1-alt-variant": "ख्रि. यु."
                }
            }
        },
        gmtFormat: "[GMT]{0}",
        gmtZeroFormat: "[GMT]",
        dateFields: {
            era: {
                wide: "युग",
                short: "युग",
                narrow: "युग"
            },
            year: {
                wide: "वर्ष",
                short: "वर्ष",
                narrow: "वर्ष"
            },
            quarter: {
                wide: "तिमाही",
                short: "तिमाही",
                narrow: "तिमाही"
            },
            month: {
                wide: "महिना",
                short: "महिना",
                narrow: "महिना"
            },
            week: {
                wide: "आठवडा",
                short: "आठवडा",
                narrow: "आठवडा"
            },
            weekOfMonth: {
                wide: "महिन्याचा आठवडा",
                short: "महिन्याचा आठ.",
                narrow: "महिन्याचा आठ."
            },
            day: {
                wide: "दिवस",
                short: "दिवस",
                narrow: "दिवस"
            },
            dayOfYear: {
                wide: "वर्षातील दिवस",
                short: "वर्षातील दिवस",
                narrow: "वर्षातील दिवस"
            },
            weekday: {
                wide: "आठवड्याचा दिवस",
                short: "आठवड्याचा दिवस",
                narrow: "आठवड्याचा दिवस"
            },
            weekdayOfMonth: {
                wide: "महिन्यातील साप्ताहिक दिवस",
                short: "महिन्यातील साप्ता. दिवस",
                narrow: "महिन्यातील साप्ता. दिवस"
            },
            dayperiod: {
                short: "AM/PM",
                wide: "AM/PM",
                narrow: "AM/PM"
            },
            hour: {
                wide: "तास",
                short: "तास",
                narrow: "तास"
            },
            minute: {
                wide: "मिनिट",
                short: "मि.",
                narrow: "मि."
            },
            second: {
                wide: "सेकंद",
                short: "से.",
                narrow: "से."
            },
            zone: {
                wide: "वेळ क्षेत्र",
                short: "क्षेत्र",
                narrow: "क्षेत्र"
            },
            millisecond: {
                narrow: "मिलिसे",
                short: "मिलिसे",
                wide: "मिलिसेकंद"
            }
        }
    },
    firstDay: 0,
    weekendRange: {
        start: 0,
        end: 0
    },
    likelySubtags: {
        mr: "mr-Deva-IN"
    }
};
export default data;

