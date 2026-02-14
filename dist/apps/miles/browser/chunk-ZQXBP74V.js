import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/nb/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "mindre enn ett sekund",
        other: "mindre enn {{count}} sekunder"
    },
    xSeconds: {
        one: "ett sekund",
        other: "{{count}} sekunder"
    },
    halfAMinute: "et halvt minutt",
    lessThanXMinutes: {
        one: "mindre enn ett minutt",
        other: "mindre enn {{count}} minutter"
    },
    xMinutes: {
        one: "ett minutt",
        other: "{{count}} minutter"
    },
    aboutXHours: {
        one: "omtrent en time",
        other: "omtrent {{count}} timer"
    },
    xHours: {
        one: "en time",
        other: "{{count}} timer"
    },
    xDays: {
        one: "en dag",
        other: "{{count}} dager"
    },
    aboutXWeeks: {
        one: "omtrent en uke",
        other: "omtrent {{count}} uker"
    },
    xWeeks: {
        one: "en uke",
        other: "{{count}} uker"
    },
    aboutXMonths: {
        one: "omtrent en m\xE5ned",
        other: "omtrent {{count}} m\xE5neder"
    },
    xMonths: {
        one: "en m\xE5ned",
        other: "{{count}} m\xE5neder"
    },
    aboutXYears: {
        one: "omtrent ett \xE5r",
        other: "omtrent {{count}} \xE5r"
    },
    xYears: {
        one: "ett \xE5r",
        other: "{{count}} \xE5r"
    },
    overXYears: {
        one: "over ett \xE5r",
        other: "over {{count}} \xE5r"
    },
    almostXYears: {
        one: "nesten ett \xE5r",
        other: "nesten {{count}} \xE5r"
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    }
    else if (count === 1) {
        result = tokenValue.one;
    }
    else {
        result = tokenValue.other.replace("{{count}}", String(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "om " + result;
        }
        else {
            return result + " siden";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/nb/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE d. MMMM y",
    long: "d. MMMM y",
    medium: "d. MMM y",
    short: "dd.MM.y"
};
var timeFormats = {
    full: "'kl'. HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'kl.' {{time}}",
    long: "{{date}} 'kl.' {{time}}",
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
// node_modules/date-fns/esm/locale/nb/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'forrige' eeee 'kl.' p",
    yesterday: "'i g\xE5r kl.' p",
    today: "'i dag kl.' p",
    tomorrow: "'i morgen kl.' p",
    nextWeek: "EEEE 'kl.' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/nb/_lib/localize/index.js
var eraValues = {
    narrow: ["f.Kr.", "e.Kr."],
    abbreviated: ["f.Kr.", "e.Kr."],
    wide: ["f\xF8r Kristus", "etter Kristus"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
};
var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["jan.", "feb.", "mars", "apr.", "mai", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "des."],
    wide: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]
};
var dayValues = {
    narrow: ["S", "M", "T", "O", "T", "F", "L"],
    short: ["s\xF8", "ma", "ti", "on", "to", "fr", "l\xF8"],
    abbreviated: ["s\xF8n", "man", "tir", "ons", "tor", "fre", "l\xF8r"],
    wide: ["s\xF8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xF8rdag"]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "midnatt",
        noon: "middag",
        morning: "p\xE5 morg.",
        afternoon: "p\xE5 etterm.",
        evening: "p\xE5 kvelden",
        night: "p\xE5 natten"
    },
    abbreviated: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnatt",
        noon: "middag",
        morning: "p\xE5 morg.",
        afternoon: "p\xE5 etterm.",
        evening: "p\xE5 kvelden",
        night: "p\xE5 natten"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnatt",
        noon: "middag",
        morning: "p\xE5 morgenen",
        afternoon: "p\xE5 ettermiddagen",
        evening: "p\xE5 kvelden",
        night: "p\xE5 natten"
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
        defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/nb/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)\.?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
    abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
    wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i
};
var parseEraPatterns = {
    any: [/^f/i, /^e/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](\.)? kvartal/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,
    wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^aug/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[smtofl]/i,
    short: /^(sø|ma|ti|on|to|fr|lø)/i,
    abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
    wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
};
var parseDayPatterns = {
    any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,
    any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a(\.?\s?m\.?)?$/i,
        pm: /^p(\.?\s?m\.?)?$/i,
        midnight: /^midn/i,
        noon: /^midd/i,
        morning: /morgen/i,
        afternoon: /ettermiddag/i,
        evening: /kveld/i,
        night: /natt/i
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
// node_modules/date-fns/esm/locale/nb/index.js
var locale = {
    code: "nb",
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
var nb_default = locale;
export { nb_default };
