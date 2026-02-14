import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/fy/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "minder as 1 sekonde",
        other: "minder as {{count}} sekonden"
    },
    xSeconds: {
        one: "1 sekonde",
        other: "{{count}} sekonden"
    },
    halfAMinute: "oardel min\xFAt",
    lessThanXMinutes: {
        one: "minder as 1 min\xFAt",
        other: "minder as {{count}} minuten"
    },
    xMinutes: {
        one: "1 min\xFAt",
        other: "{{count}} minuten"
    },
    aboutXHours: {
        one: "sawat 1 oere",
        other: "sawat {{count}} oere"
    },
    xHours: {
        one: "1 oere",
        other: "{{count}} oere"
    },
    xDays: {
        one: "1 dei",
        other: "{{count}} dagen"
    },
    aboutXWeeks: {
        one: "sawat 1 wike",
        other: "sawat {{count}} wiken"
    },
    xWeeks: {
        one: "1 wike",
        other: "{{count}} wiken"
    },
    aboutXMonths: {
        one: "sawat 1 moanne",
        other: "sawat {{count}} moannen"
    },
    xMonths: {
        one: "1 moanne",
        other: "{{count}} moannen"
    },
    aboutXYears: {
        one: "sawat 1 jier",
        other: "sawat {{count}} jier"
    },
    xYears: {
        one: "1 jier",
        other: "{{count}} jier"
    },
    overXYears: {
        one: "mear as 1 jier",
        other: "mear as {{count}}s jier"
    },
    almostXYears: {
        one: "hast 1 jier",
        other: "hast {{count}} jier"
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
            return "oer " + result;
        }
        else {
            return result + " lyn";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/fy/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE d MMMM y",
    long: "d MMMM y",
    medium: "d MMM y",
    short: "dd-MM-y"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'om' {{time}}",
    long: "{{date}} 'om' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
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
// node_modules/date-fns/esm/locale/fy/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\xF4fr\xFBne' eeee 'om' p",
    yesterday: "'juster om' p",
    today: "'hjoed om' p",
    tomorrow: "'moarn om' p",
    nextWeek: "eeee 'om' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/fy/_lib/localize/index.js
var eraValues = {
    narrow: ["f.K.", "n.K."],
    abbreviated: ["f.Kr.", "n.Kr."],
    wide: ["foar Kristus", "nei Kristus"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["K1", "K2", "K3", "K4"],
    wide: ["1e fearnsjier", "2e fearnsjier", "3e fearnsjier", "4e fearnsjier"]
};
var monthValues = {
    narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: ["jan.", "feb.", "mrt.", "apr.", "mai.", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "des."],
    wide: ["jannewaris", "febrewaris", "maart", "april", "maaie", "juny", "july", "augustus", "septimber", "oktober", "novimber", "desimber"]
};
var dayValues = {
    narrow: ["s", "m", "t", "w", "t", "f", "s"],
    short: ["si", "mo", "ti", "wo", "to", "fr", "so"],
    abbreviated: ["snein", "moa", "tii", "woa", "ton", "fre", "sneon"],
    wide: ["snein", "moandei", "tiisdei", "woansdei", "tongersdei", "freed", "sneon"]
};
var dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "middernacht",
        noon: "middei",
        morning: "moarns",
        afternoon: "middeis",
        evening: "j\xFBns",
        night: "nachts"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "middernacht",
        noon: "middei",
        morning: "moarns",
        afternoon: "middeis",
        evening: "j\xFBns",
        night: "nachts"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "middernacht",
        noon: "middei",
        morning: "moarns",
        afternoon: "middeis",
        evening: "j\xFBns",
        night: "nachts"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    return number + "e";
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
// node_modules/date-fns/esm/locale/fy/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)e?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^([fn]\.? ?K\.?)/,
    abbreviated: /^([fn]\. ?Kr\.?)/,
    wide: /^((foar|nei) Kristus)/
};
var parseEraPatterns = {
    any: [/^f/, /^n/]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^K[1234]/i,
    wide: /^[1234]e fearnsjier/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan.|feb.|mrt.|apr.|mai.|jun.|jul.|aug.|sep.|okt.|nov.|des.)/i,
    wide: /^(jannewaris|febrewaris|maart|april|maaie|juny|july|augustus|septimber|oktober|novimber|desimber)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^jan/i, /^feb/i, /^m(r|a)/i, /^apr/i, /^mai/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^des/i]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(si|mo|ti|wo|to|fr|so)/i,
    abbreviated: /^(snein|moa|tii|woa|ton|fre|sneon)/i,
    wide: /^(snein|moandei|tiisdei|woansdei|tongersdei|freed|sneon)/i
};
var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^sn/i, /^mo/i, /^ti/i, /^wo/i, /^to/i, /^fr/i, /^sn/i]
};
var matchDayPeriodPatterns = {
    any: /^(am|pm|middernacht|middeis|moarns|middei|jûns|nachts)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^am/i,
        pm: /^pm/i,
        midnight: /^middernacht/i,
        noon: /^middei/i,
        morning: /moarns/i,
        afternoon: /^middeis/i,
        evening: /jûns/i,
        night: /nachts/i
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
// node_modules/date-fns/esm/locale/fy/index.js
var locale = {
    code: "fy",
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
var fy_default = locale;
export { fy_default };
