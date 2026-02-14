import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/lt/_lib/formatDistance/index.js
var translations = {
    xseconds_other: "sekund\u0117_sekund\u017Ei\u0173_sekundes",
    xminutes_one: "minut\u0117_minut\u0117s_minut\u0119",
    xminutes_other: "minut\u0117s_minu\u010Di\u0173_minutes",
    xhours_one: "valanda_valandos_valand\u0105",
    xhours_other: "valandos_valand\u0173_valandas",
    xdays_one: "diena_dienos_dien\u0105",
    xdays_other: "dienos_dien\u0173_dienas",
    xweeks_one: "savait\u0117_savait\u0117s_savait\u0119",
    xweeks_other: "savait\u0117s_savai\u010Di\u0173_savaites",
    xmonths_one: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F",
    xmonths_other: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
    xyears_one: "metai_met\u0173_metus",
    xyears_other: "metai_met\u0173_metus",
    about: "apie",
    over: "daugiau nei",
    almost: "beveik",
    lessthan: "ma\u017Eiau nei"
};
var translateSeconds = function translateSeconds2(_number, addSuffix, _key, isFuture) {
    if (!addSuffix) {
        return "kelios sekund\u0117s";
    }
    else {
        return isFuture ? "keli\u0173 sekund\u017Ei\u0173" : "kelias sekundes";
    }
};
var translateSingular = function translateSingular2(_number, addSuffix, key, isFuture) {
    return !addSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
};
var translate = function translate2(number, addSuffix, key, isFuture) {
    var result = number + " ";
    if (number === 1) {
        return result + translateSingular(number, addSuffix, key, isFuture);
    }
    else if (!addSuffix) {
        return result + (special(number) ? forms(key)[1] : forms(key)[0]);
    }
    else {
        if (isFuture) {
            return result + forms(key)[1];
        }
        else {
            return result + (special(number) ? forms(key)[1] : forms(key)[2]);
        }
    }
};
function special(number) {
    return number % 10 === 0 || number > 10 && number < 20;
}
function forms(key) {
    return translations[key].split("_");
}
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: translateSeconds,
        other: translate
    },
    xSeconds: {
        one: translateSeconds,
        other: translate
    },
    halfAMinute: "pus\u0117 minut\u0117s",
    lessThanXMinutes: {
        one: translateSingular,
        other: translate
    },
    xMinutes: {
        one: translateSingular,
        other: translate
    },
    aboutXHours: {
        one: translateSingular,
        other: translate
    },
    xHours: {
        one: translateSingular,
        other: translate
    },
    xDays: {
        one: translateSingular,
        other: translate
    },
    aboutXWeeks: {
        one: translateSingular,
        other: translate
    },
    xWeeks: {
        one: translateSingular,
        other: translate
    },
    aboutXMonths: {
        one: translateSingular,
        other: translate
    },
    xMonths: {
        one: translateSingular,
        other: translate
    },
    aboutXYears: {
        one: translateSingular,
        other: translate
    },
    xYears: {
        one: translateSingular,
        other: translate
    },
    overXYears: {
        one: translateSingular,
        other: translate
    },
    almostXYears: {
        one: translateSingular,
        other: translate
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var adverb = token.match(/about|over|almost|lessthan/i);
    var unit = adverb ? token.replace(adverb[0], "") : token;
    var isFuture = (options === null || options === void 0 ? void 0 : options.comparison) !== void 0 && options.comparison > 0;
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    }
    else if (count === 1) {
        result = tokenValue.one(count, (options === null || options === void 0 ? void 0 : options.addSuffix) === true, unit.toLowerCase() + "_one", isFuture);
    }
    else {
        result = tokenValue.other(count, (options === null || options === void 0 ? void 0 : options.addSuffix) === true, unit.toLowerCase() + "_other", isFuture);
    }
    if (adverb) {
        var _key2 = adverb[0].toLowerCase();
        result = translations[_key2] + " " + result;
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "po " + result;
        }
        else {
            return "prie\u0161 " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/lt/_lib/formatLong/index.js
var dateFormats = {
    full: "y 'm'. MMMM d 'd'., EEEE",
    long: "y 'm'. MMMM d 'd'.",
    medium: "y-MM-dd",
    short: "y-MM-dd"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} {{time}}",
    long: "{{date}} {{time}}",
    medium: "{{date}} {{time}}",
    short: "{{date}} {{time}}"
};
var formatLong = {
    date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
var formatLong_default = formatLong;
// node_modules/date-fns/esm/locale/lt/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'Pra\u0117jus\u012F' eeee p",
    yesterday: "'Vakar' p",
    today: "'\u0160iandien' p",
    tomorrow: "'Rytoj' p",
    nextWeek: "eeee p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/lt/_lib/localize/index.js
var eraValues = {
    narrow: ["pr. Kr.", "po Kr."],
    abbreviated: ["pr. Kr.", "po Kr."],
    wide: ["prie\u0161 Krist\u0173", "po Kristaus"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."],
    wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
};
var formattingQuarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["I k.", "II k.", "III k.", "IV k."],
    wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
};
var monthValues = {
    narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
    abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "bir\u017E.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."],
    wide: ["sausis", "vasaris", "kovas", "balandis", "gegu\u017E\u0117", "bir\u017Eelis", "liepa", "rugpj\u016Btis", "rugs\u0117jis", "spalis", "lapkritis", "gruodis"]
};
var formattingMonthValues = {
    narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
    abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "bir\u017E.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."],
    wide: ["sausio", "vasario", "kovo", "baland\u017Eio", "gegu\u017E\u0117s", "bir\u017Eelio", "liepos", "rugpj\u016B\u010Dio", "rugs\u0117jo", "spalio", "lapkri\u010Dio", "gruod\u017Eio"]
};
var dayValues = {
    narrow: ["S", "P", "A", "T", "K", "P", "\u0160"],
    short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "\u0160t"],
    abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"],
    wide: ["sekmadienis", "pirmadienis", "antradienis", "tre\u010Diadienis", "ketvirtadienis", "penktadienis", "\u0161e\u0161tadienis"]
};
var formattingDayValues = {
    narrow: ["S", "P", "A", "T", "K", "P", "\u0160"],
    short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "\u0160t"],
    abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"],
    wide: ["sekmadien\u012F", "pirmadien\u012F", "antradien\u012F", "tre\u010Diadien\u012F", "ketvirtadien\u012F", "penktadien\u012F", "\u0161e\u0161tadien\u012F"]
};
var dayPeriodValues = {
    narrow: {
        am: "pr. p.",
        pm: "pop.",
        midnight: "vidurnaktis",
        noon: "vidurdienis",
        morning: "rytas",
        afternoon: "diena",
        evening: "vakaras",
        night: "naktis"
    },
    abbreviated: {
        am: "prie\u0161piet",
        pm: "popiet",
        midnight: "vidurnaktis",
        noon: "vidurdienis",
        morning: "rytas",
        afternoon: "diena",
        evening: "vakaras",
        night: "naktis"
    },
    wide: {
        am: "prie\u0161piet",
        pm: "popiet",
        midnight: "vidurnaktis",
        noon: "vidurdienis",
        morning: "rytas",
        afternoon: "diena",
        evening: "vakaras",
        night: "naktis"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "pr. p.",
        pm: "pop.",
        midnight: "vidurnaktis",
        noon: "perpiet",
        morning: "rytas",
        afternoon: "popiet\u0117",
        evening: "vakaras",
        night: "naktis"
    },
    abbreviated: {
        am: "prie\u0161piet",
        pm: "popiet",
        midnight: "vidurnaktis",
        noon: "perpiet",
        morning: "rytas",
        afternoon: "popiet\u0117",
        evening: "vakaras",
        night: "naktis"
    },
    wide: {
        am: "prie\u0161piet",
        pm: "popiet",
        midnight: "vidurnaktis",
        noon: "perpiet",
        morning: "rytas",
        afternoon: "popiet\u0117",
        evening: "vakaras",
        night: "naktis"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    return number + "-oji";
};
var localize = {
    ordinalNumber,
    era: buildLocalizeFn({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
        values: quarterValues,
        defaultWidth: "wide",
        formattingValues: formattingQuarterValues,
        defaultFormattingWidth: "wide",
        argumentCallback: function argumentCallback(quarter) {
            return quarter - 1;
        }
    }),
    month: buildLocalizeFn({
        values: monthValues,
        defaultWidth: "wide",
        formattingValues: formattingMonthValues,
        defaultFormattingWidth: "wide"
    }),
    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: "wide",
        formattingValues: formattingDayValues,
        defaultFormattingWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/lt/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(-oji)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^p(r|o)\.?\s?(kr\.?|me)/i,
    abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,
    wide: /^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i
};
var parseEraPatterns = {
    wide: [/prieš/i, /(po|mūsų)/i],
    any: [/^pr/i, /^(po|m)/i]
};
var matchQuarterPatterns = {
    narrow: /^([1234])/i,
    abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i,
    wide: /^(I|II|III|IV)\s?ketvirtis/i
};
var parseQuarterPatterns = {
    narrow: [/1/i, /2/i, /3/i, /4/i],
    any: [/I$/i, /II$/i, /III/i, /IV/i]
};
var matchMonthPatterns = {
    narrow: /^[svkbglr]/i,
    abbreviated: /^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,
    wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i
};
var parseMonthPatterns = {
    narrow: [/^s/i, /^v/i, /^k/i, /^b/i, /^g/i, /^b/i, /^l/i, /^r/i, /^r/i, /^s/i, /^l/i, /^g/i],
    any: [/^saus/i, /^vas/i, /^kov/i, /^bal/i, /^geg/i, /^birž/i, /^liep/i, /^rugp/i, /^rugs/i, /^spal/i, /^lapkr/i, /^gruod/i]
};
var matchDayPatterns = {
    narrow: /^[spatkš]/i,
    short: /^(sk|pr|an|tr|kt|pn|št)/i,
    abbreviated: /^(sk|pr|an|tr|kt|pn|št)/i,
    wide: /^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i
};
var parseDayPatterns = {
    narrow: [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i],
    wide: [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i],
    any: [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,
    any: /^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i
};
var parseDayPeriodPatterns = {
    narrow: {
        am: /^pr/i,
        pm: /^pop./i,
        midnight: /^vidurnaktis/i,
        noon: /^(vidurdienis|perp)/i,
        morning: /rytas/i,
        afternoon: /(die|popietė)/i,
        evening: /vakaras/i,
        night: /naktis/i
    },
    any: {
        am: /^pr/i,
        pm: /^popiet$/i,
        midnight: /^vidurnaktis/i,
        noon: /^(vidurdienis|perp)/i,
        morning: /rytas/i,
        afternoon: /(die|popietė)/i,
        evening: /vakaras/i,
        night: /naktis/i
    }
};
var match = {
    ordinalNumber: buildMatchPatternFn({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function valueCallback(value) {
            return parseInt(value, 10);
        }
    }),
    era: buildMatchFn({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: function valueCallback2(index) {
            return index + 1;
        }
    }),
    month: buildMatchFn({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: buildMatchFn({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
var match_default = match;
// node_modules/date-fns/esm/locale/lt/index.js
var locale = {
    code: "lt",
    formatDistance: formatDistance_default,
    formatLong: formatLong_default,
    formatRelative: formatRelative_default,
    localize: localize_default,
    match: match_default,
    options: {
        weekStartsOn: 1,
        firstWeekContainsDate: 4
    }
};
var lt_default = locale;
export { lt_default };
