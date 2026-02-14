import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/eo/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "malpli ol sekundo",
        other: "malpli ol {{count}} sekundoj"
    },
    xSeconds: {
        one: "1 sekundo",
        other: "{{count}} sekundoj"
    },
    halfAMinute: "duonminuto",
    lessThanXMinutes: {
        one: "malpli ol minuto",
        other: "malpli ol {{count}} minutoj"
    },
    xMinutes: {
        one: "1 minuto",
        other: "{{count}} minutoj"
    },
    aboutXHours: {
        one: "proksimume 1 horo",
        other: "proksimume {{count}} horoj"
    },
    xHours: {
        one: "1 horo",
        other: "{{count}} horoj"
    },
    xDays: {
        one: "1 tago",
        other: "{{count}} tagoj"
    },
    aboutXMonths: {
        one: "proksimume 1 monato",
        other: "proksimume {{count}} monatoj"
    },
    xWeeks: {
        one: "1 semajno",
        other: "{{count}} semajnoj"
    },
    aboutXWeeks: {
        one: "proksimume 1 semajno",
        other: "proksimume {{count}} semajnoj"
    },
    xMonths: {
        one: "1 monato",
        other: "{{count}} monatoj"
    },
    aboutXYears: {
        one: "proksimume 1 jaro",
        other: "proksimume {{count}} jaroj"
    },
    xYears: {
        one: "1 jaro",
        other: "{{count}} jaroj"
    },
    overXYears: {
        one: "pli ol 1 jaro",
        other: "pli ol {{count}} jaroj"
    },
    almostXYears: {
        one: "preska\u016D 1 jaro",
        other: "preska\u016D {{count}} jaroj"
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
        if (options !== null && options !== void 0 && options.comparison && options.comparison > 0) {
            return "post " + result;
        }
        else {
            return "anta\u016D " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/eo/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, do 'de' MMMM y",
    long: "y-MMMM-dd",
    medium: "y-MMM-dd",
    short: "yyyy-MM-dd"
};
var timeFormats = {
    full: "Ho 'horo kaj' m:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    any: "{{date}} {{time}}"
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
        defaultWidth: "any"
    })
};
var formatLong_default = formatLong;
// node_modules/date-fns/esm/locale/eo/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'pasinta' eeee 'je' p",
    yesterday: "'hiera\u016D je' p",
    today: "'hodia\u016D je' p",
    tomorrow: "'morga\u016D je' p",
    nextWeek: "eeee 'je' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/eo/_lib/localize/index.js
var eraValues = {
    narrow: ["aK", "pK"],
    abbreviated: ["a.K.E.", "p.K.E."],
    wide: ["anta\u016D Komuna Erao", "Komuna Erao"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["K1", "K2", "K3", "K4"],
    wide: ["1-a kvaronjaro", "2-a kvaronjaro", "3-a kvaronjaro", "4-a kvaronjaro"]
};
var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "a\u016Dg", "sep", "okt", "nov", "dec"],
    wide: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "a\u016Dgusto", "septembro", "oktobro", "novembro", "decembro"]
};
var dayValues = {
    narrow: ["D", "L", "M", "M", "\u0134", "V", "S"],
    short: ["di", "lu", "ma", "me", "\u0135a", "ve", "sa"],
    abbreviated: ["dim", "lun", "mar", "mer", "\u0135a\u016D", "ven", "sab"],
    wide: ["diman\u0109o", "lundo", "mardo", "merkredo", "\u0135a\u016Ddo", "vendredo", "sabato"]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "noktomezo",
        noon: "tagmezo",
        morning: "matene",
        afternoon: "posttagmeze",
        evening: "vespere",
        night: "nokte"
    },
    abbreviated: {
        am: "a.t.m.",
        pm: "p.t.m.",
        midnight: "noktomezo",
        noon: "tagmezo",
        morning: "matene",
        afternoon: "posttagmeze",
        evening: "vespere",
        night: "nokte"
    },
    wide: {
        am: "anta\u016Dtagmeze",
        pm: "posttagmeze",
        midnight: "noktomezo",
        noon: "tagmezo",
        morning: "matene",
        afternoon: "posttagmeze",
        evening: "vespere",
        night: "nokte"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber) {
    var number = Number(dirtyNumber);
    return number + "-a";
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
            return Number(quarter) - 1;
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
// node_modules/date-fns/esm/locale/eo/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(-?a)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^([ap]k)/i,
    abbreviated: /^([ap]\.?\s?k\.?\s?e\.?)/i,
    wide: /^((antaǔ |post )?komuna erao)/i
};
var parseEraPatterns = {
    any: [/^a/i, /^[kp]/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^k[1234]/i,
    wide: /^[1234](-?a)? kvaronjaro/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i,
    wide: /^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^a(u|ŭ)/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[dlmĵjvs]/i,
    short: /^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,
    abbreviated: /^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,
    wide: /^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i
};
var parseDayPatterns = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^(j|ĵ)/i, /^v/i, /^s/i],
    any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^(j|ĵ)/i, /^v/i, /^s/i]
};
var matchDayPeriodPatterns = {
    narrow: /^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,
    abbreviated: /^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,
    wide: /^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^noktom/i,
        noon: /^t/i,
        morning: /^m/i,
        afternoon: /^posttagmeze/i,
        evening: /^v/i,
        night: /^n/i
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
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
var match_default = match;
// node_modules/date-fns/esm/locale/eo/index.js
var locale = {
    code: "eo",
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
var eo_default = locale;
export { eo_default };
