import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/sr-Latn/_lib/formatDistance/index.js
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
            standalone: "oko 1 nedelju",
            withPrepositionAgo: "oko 1 nedelju",
            withPrepositionIn: "oko 1 nedelju"
        },
        dual: "oko {{count}} nedelje",
        other: "oko {{count}} nedelje"
    },
    xWeeks: {
        one: {
            standalone: "1 nedelju",
            withPrepositionAgo: "1 nedelju",
            withPrepositionIn: "1 nedelju"
        },
        dual: "{{count}} nedelje",
        other: "{{count}} nedelje"
    },
    aboutXMonths: {
        one: {
            standalone: "oko 1 mesec",
            withPrepositionAgo: "oko 1 mesec",
            withPrepositionIn: "oko 1 mesec"
        },
        dual: "oko {{count}} meseca",
        other: "oko {{count}} meseci"
    },
    xMonths: {
        one: {
            standalone: "1 mesec",
            withPrepositionAgo: "1 mesec",
            withPrepositionIn: "1 mesec"
        },
        dual: "{{count}} meseca",
        other: "{{count}} meseci"
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
            return "pre " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/sr-Latn/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d. MMMM yyyy.",
    long: "d. MMMM yyyy.",
    medium: "d. MMM yy.",
    short: "dd. MM. yy."
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
// node_modules/date-fns/esm/locale/sr-Latn/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: function lastWeek(date) {
        switch (date.getUTCDay()) {
            case 0:
                return "'pro\u0161le nedelje u' p";
            case 3:
                return "'pro\u0161le srede u' p";
            case 6:
                return "'pro\u0161le subote u' p";
            default:
                return "'pro\u0161li' EEEE 'u' p";
        }
    },
    yesterday: "'ju\u010De u' p",
    today: "'danas u' p",
    tomorrow: "'sutra u' p",
    nextWeek: function nextWeek(date) {
        switch (date.getUTCDay()) {
            case 0:
                return "'slede\u0107e nedelje u' p";
            case 3:
                return "'slede\u0107u sredu u' p";
            case 6:
                return "'slede\u0107u subotu u' p";
            default:
                return "'slede\u0107i' EEEE 'u' p";
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
// node_modules/date-fns/esm/locale/sr-Latn/_lib/localize/index.js
var eraValues = {
    narrow: ["pr.n.e.", "AD"],
    abbreviated: ["pr. Hr.", "po. Hr."],
    wide: ["Pre Hrista", "Posle Hrista"]
};
var quarterValues = {
    narrow: ["1.", "2.", "3.", "4."],
    abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."],
    wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
};
var monthValues = {
    narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
    abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
    wide: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"]
};
var formattingMonthValues = {
    narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
    abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"],
    wide: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"]
};
var dayValues = {
    narrow: ["N", "P", "U", "S", "\u010C", "P", "S"],
    short: ["ned", "pon", "uto", "sre", "\u010Det", "pet", "sub"],
    abbreviated: ["ned", "pon", "uto", "sre", "\u010Det", "pet", "sub"],
    wide: ["nedelja", "ponedeljak", "utorak", "sreda", "\u010Detvrtak", "petak", "subota"]
};
var formattingDayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutru",
        afternoon: "popodne",
        evening: "uve\u010De",
        night: "no\u0107u"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutru",
        afternoon: "popodne",
        evening: "uve\u010De",
        night: "no\u0107u"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutru",
        afternoon: "posle podne",
        evening: "uve\u010De",
        night: "no\u0107u"
    }
};
var dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutru",
        afternoon: "popodne",
        evening: "uve\u010De",
        night: "no\u0107u"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutru",
        afternoon: "popodne",
        evening: "uve\u010De",
        night: "no\u0107u"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "pono\u0107",
        noon: "podne",
        morning: "ujutru",
        afternoon: "posle podne",
        evening: "uve\u010De",
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
// node_modules/date-fns/esm/locale/sr-Latn/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(pr\.n\.e\.|AD)/i,
    abbreviated: /^(pr\.\s?Hr\.|po\.\s?Hr\.)/i,
    wide: /^(Pre Hrista|pre nove ere|Posle Hrista|nova era)/i
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
    abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i,
    wide: /^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(jun|juna)|(jul|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i
};
var parseMonthPatterns = {
    narrow: [/^1/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^avg/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[npusčc]/i,
    short: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,
    abbreviated: /^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,
    wide: /^(nedelja|ponedeljak|utorak|sreda|(četvrtak|cetvrtak)|petak|subota)/i
};
var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
    any: /^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|posle podne|ujutru)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^pono/i,
        noon: /^pod/i,
        morning: /jutro/i,
        afternoon: /(posle\s|po)+podne/i,
        evening: /(uvece|uveče)/i,
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
// node_modules/date-fns/esm/locale/sr-Latn/index.js
var locale = {
    code: "sr-Latn",
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
var sr_Latn_default = locale;
export { sr_Latn_default };
