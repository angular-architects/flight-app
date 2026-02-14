import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/hr/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: {
            standalone: "manje od 1 sekunde",
            withPrepositionAgo: "manje od 1 sekunde",
            withPrepositionIn: "manje od 1 sekundu"
        },
        dual: "manje od {{count}} sekunde",
        other: "manje od {{count}} sekundi"
    },
    xSeconds: {
        one: {
            standalone: "1 sekunda",
            withPrepositionAgo: "1 sekunde",
            withPrepositionIn: "1 sekundu"
        },
        dual: "{{count}} sekunde",
        other: "{{count}} sekundi"
    },
    halfAMinute: "pola minute",
    lessThanXMinutes: {
        one: {
            standalone: "manje od 1 minute",
            withPrepositionAgo: "manje od 1 minute",
            withPrepositionIn: "manje od 1 minutu"
        },
        dual: "manje od {{count}} minute",
        other: "manje od {{count}} minuta"
    },
    xMinutes: {
        one: {
            standalone: "1 minuta",
            withPrepositionAgo: "1 minute",
            withPrepositionIn: "1 minutu"
        },
        dual: "{{count}} minute",
        other: "{{count}} minuta"
    },
    aboutXHours: {
        one: {
            standalone: "oko 1 sat",
            withPrepositionAgo: "oko 1 sat",
            withPrepositionIn: "oko 1 sat"
        },
        dual: "oko {{count}} sata",
        other: "oko {{count}} sati"
    },
    xHours: {
        one: {
            standalone: "1 sat",
            withPrepositionAgo: "1 sat",
            withPrepositionIn: "1 sat"
        },
        dual: "{{count}} sata",
        other: "{{count}} sati"
    },
    xDays: {
        one: {
            standalone: "1 dan",
            withPrepositionAgo: "1 dan",
            withPrepositionIn: "1 dan"
        },
        dual: "{{count}} dana",
        other: "{{count}} dana"
    },
    aboutXWeeks: {
        one: {
            standalone: "oko 1 tjedan",
            withPrepositionAgo: "oko 1 tjedan",
            withPrepositionIn: "oko 1 tjedan"
        },
        dual: "oko {{count}} tjedna",
        other: "oko {{count}} tjedana"
    },
    xWeeks: {
        one: {
            standalone: "1 tjedan",
            withPrepositionAgo: "1 tjedan",
            withPrepositionIn: "1 tjedan"
        },
        dual: "{{count}} tjedna",
        other: "{{count}} tjedana"
    },
    aboutXMonths: {
        one: {
            standalone: "oko 1 mjesec",
            withPrepositionAgo: "oko 1 mjesec",
            withPrepositionIn: "oko 1 mjesec"
        },
        dual: "oko {{count}} mjeseca",
        other: "oko {{count}} mjeseci"
    },
    xMonths: {
        one: {
            standalone: "1 mjesec",
            withPrepositionAgo: "1 mjesec",
            withPrepositionIn: "1 mjesec"
        },
        dual: "{{count}} mjeseca",
        other: "{{count}} mjeseci"
    },
    aboutXYears: {
        one: {
            standalone: "oko 1 godinu",
            withPrepositionAgo: "oko 1 godinu",
            withPrepositionIn: "oko 1 godinu"
        },
        dual: "oko {{count}} godine",
        other: "oko {{count}} godina"
    },
    xYears: {
        one: {
            standalone: "1 godina",
            withPrepositionAgo: "1 godine",
            withPrepositionIn: "1 godinu"
        },
        dual: "{{count}} godine",
        other: "{{count}} godina"
    },
    overXYears: {
        one: {
            standalone: "preko 1 godinu",
            withPrepositionAgo: "preko 1 godinu",
            withPrepositionIn: "preko 1 godinu"
        },
        dual: "preko {{count}} godine",
        other: "preko {{count}} godina"
    },
    almostXYears: {
        one: {
            standalone: "gotovo 1 godinu",
            withPrepositionAgo: "gotovo 1 godinu",
            withPrepositionIn: "gotovo 1 godinu"
        },
        dual: "gotovo {{count}} godine",
        other: "gotovo {{count}} godina"
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    }
    else if (count === 1) {
        if (options !== null && options !== void 0 && options.addSuffix) {
            if (options.comparison && options.comparison > 0) {
                result = tokenValue.one.withPrepositionIn;
            }
            else {
                result = tokenValue.one.withPrepositionAgo;
            }
        }
        else {
            result = tokenValue.one.standalone;
        }
    }
    else if (count % 10 > 1 && count % 10 < 5 &&
        // if last digit is between 2 and 4
        String(count).substr(-2, 1) !== "1") {
        result = tokenValue.dual.replace("{{count}}", String(count));
    }
    else {
        result = tokenValue.other.replace("{{count}}", String(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "za " + result;
        }
        else {
            return "prije " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/hr/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d. MMMM y.",
    long: "d. MMMM y.",
    medium: "d. MMM y.",
    short: "dd. MM. y."
};
var timeFormats = {
    full: "HH:mm:ss (zzzz)",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'u' {{time}}",
    long: "{{date}} 'u' {{time}}",
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
// node_modules/date-fns/esm/locale/hr/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: function lastWeek(date) {
        switch (date.getUTCDay()) {
            case 0:
                return "'pro\u0161lu nedjelju u' p";
            case 3:
                return "'pro\u0161lu srijedu u' p";
            case 6:
                return "'pro\u0161lu subotu u' p";
            default:
                return "'pro\u0161li' EEEE 'u' p";
        }
    },
    yesterday: "'ju\u010Der u' p",
    today: "'danas u' p",
    tomorrow: "'sutra u' p",
    nextWeek: function nextWeek(date) {
        switch (date.getUTCDay()) {
            case 0:
                return "'idu\u0107u nedjelju u' p";
            case 3:
                return "'idu\u0107u srijedu u' p";
            case 6:
                return "'idu\u0107u subotu u' p";
            default:
                return "'pro\u0161li' EEEE 'u' p";
        }
    },
    other: "P"
};
var formatRelative = function formatRelative2(token, date, _baseDate, _options) {
    var format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date);
    }
    return format;
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/hr/_lib/localize/index.js
var eraValues = {
    narrow: ["pr.n.e.", "AD"],
    abbreviated: ["pr. Kr.", "po. Kr."],
    wide: ["Prije Krista", "Poslije Krista"]
};
var quarterValues = {
    narrow: ["1.", "2.", "3.", "4."],
    abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."],
    wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
};
var monthValues = {
    narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
    abbreviated: ["sij", "velj", "o\u017Eu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"],
    wide: ["sije\u010Danj", "velja\u010Da", "o\u017Eujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"]
};
var formattingMonthValues = {
    narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
    abbreviated: ["sij", "velj", "o\u017Eu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"],
    wide: ["sije\u010Dnja", "velja\u010De", "o\u017Eujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenog", "prosinca"]
};
var dayValues = {
    narrow: ["N", "P", "U", "S", "\u010C", "P", "S"],
    short: ["ned", "pon", "uto", "sri", "\u010Det", "pet", "sub"],
    abbreviated: ["ned", "pon", "uto", "sri", "\u010Det", "pet", "sub"],
    wide: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "\u010Detvrtak", "petak", "subota"]
};
var formattingDayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutro",
        afternoon: "popodne",
        evening: "nave\u010Der",
        night: "no\u0107u"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutro",
        afternoon: "popodne",
        evening: "nave\u010Der",
        night: "no\u0107u"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutro",
        afternoon: "poslije podne",
        evening: "nave\u010Der",
        night: "no\u0107u"
    }
};
var dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutro",
        afternoon: "popodne",
        evening: "nave\u010Der",
        night: "no\u0107u"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutro",
        afternoon: "popodne",
        evening: "nave\u010Der",
        night: "no\u0107u"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutro",
        afternoon: "poslije podne",
        evening: "nave\u010Der",
        night: "no\u0107u"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    return number + ".";
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
        defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/hr/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(pr\.n\.e\.|AD)/i,
    abbreviated: /^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,
    wide: /^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i
};
var parseEraPatterns = {
    any: [/^pr/i, /^(po|nova)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]\.\s?kv\.?/i,
    wide: /^[1234]\. kvartal/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^(10|11|12|[123456789])\./i,
    abbreviated: /^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,
    wide: /^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i
};
var parseMonthPatterns = {
    narrow: [/1/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i, /8/i, /9/i, /10/i, /11/i, /12/i],
    abbreviated: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i],
    wide: [/^sij/i, /^velj/i, /^(ožu|ozu)/i, /^tra/i, /^svi/i, /^lip/i, /^srp/i, /^kol/i, /^ruj/i, /^lis/i, /^stu/i, /^pro/i]
};
var matchDayPatterns = {
    narrow: /^[npusčc]/i,
    short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
    abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
    wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i
};
var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
    any: /^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^pono/i,
        noon: /^pod/i,
        morning: /jutro/i,
        afternoon: /(poslije\s|po)+podne/i,
        evening: /(navece|naveče)/i,
        night: /(nocu|noću)/i
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
        defaultParseWidth: "wide"
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
// node_modules/date-fns/esm/locale/hr/index.js
var locale = {
    code: "hr",
    formatDistance: formatDistance_default,
    formatLong: formatLong_default,
    formatRelative: formatRelative_default,
    localize: localize_default,
    match: match_default,
    options: {
        weekStartsOn: 1,
        firstWeekContainsDate: 1
    }
};
var hr_default = locale;
export { hr_default };
