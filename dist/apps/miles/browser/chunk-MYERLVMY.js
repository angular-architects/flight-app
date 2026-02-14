import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/gu/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u0AB9\u0AAE\u0AA3\u0ABE\u0A82",
        // CLDR #1461
        other: "\u200B\u0A86\u0AB6\u0AB0\u0AC7 {{count}} \u0AB8\u0AC7\u0A95\u0A82\u0AA1"
    },
    xSeconds: {
        one: "1 \u0AB8\u0AC7\u0A95\u0A82\u0AA1",
        other: "{{count}} \u0AB8\u0AC7\u0A95\u0A82\u0AA1"
    },
    halfAMinute: "\u0A85\u0AA1\u0AA7\u0AC0 \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F",
    lessThanXMinutes: {
        one: "\u0A86 \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F",
        // CLDR #1448
        other: "\u200B\u0A86\u0AB6\u0AB0\u0AC7 {{count}} \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F"
    },
    xMinutes: {
        one: "1 \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F",
        other: "{{count}} \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F"
    },
    aboutXHours: {
        one: "\u200B\u0A86\u0AB6\u0AB0\u0AC7 1 \u0A95\u0AB2\u0ABE\u0A95",
        other: "\u200B\u0A86\u0AB6\u0AB0\u0AC7 {{count}} \u0A95\u0AB2\u0ABE\u0A95"
    },
    xHours: {
        one: "1 \u0A95\u0AB2\u0ABE\u0A95",
        other: "{{count}} \u0A95\u0AB2\u0ABE\u0A95"
    },
    xDays: {
        one: "1 \u0AA6\u0ABF\u0AB5\u0AB8",
        other: "{{count}} \u0AA6\u0ABF\u0AB5\u0AB8"
    },
    aboutXWeeks: {
        one: "\u0A86\u0AB6\u0AB0\u0AC7 1 \u0A85\u0AA0\u0AB5\u0ABE\u0AA1\u0ABF\u0AAF\u0AC1\u0A82",
        other: "\u0A86\u0AB6\u0AB0\u0AC7 {{count}} \u0A85\u0AA0\u0AB5\u0ABE\u0AA1\u0ABF\u0AAF\u0ABE"
    },
    xWeeks: {
        one: "1 \u0A85\u0AA0\u0AB5\u0ABE\u0AA1\u0ABF\u0AAF\u0AC1\u0A82",
        other: "{{count}} \u0A85\u0AA0\u0AB5\u0ABE\u0AA1\u0ABF\u0AAF\u0ABE"
    },
    aboutXMonths: {
        one: "\u0A86\u0AB6\u0AB0\u0AC7 1 \u0AAE\u0AB9\u0ABF\u0AA8\u0ACB",
        other: "\u0A86\u0AB6\u0AB0\u0AC7 {{count}} \u0AAE\u0AB9\u0ABF\u0AA8\u0ABE"
    },
    xMonths: {
        one: "1 \u0AAE\u0AB9\u0ABF\u0AA8\u0ACB",
        other: "{{count}} \u0AAE\u0AB9\u0ABF\u0AA8\u0ABE"
    },
    aboutXYears: {
        one: "\u0A86\u0AB6\u0AB0\u0AC7 1 \u0AB5\u0AB0\u0ACD\u0AB7",
        other: "\u0A86\u0AB6\u0AB0\u0AC7 {{count}} \u0AB5\u0AB0\u0ACD\u0AB7"
    },
    xYears: {
        one: "1 \u0AB5\u0AB0\u0ACD\u0AB7",
        other: "{{count}} \u0AB5\u0AB0\u0ACD\u0AB7"
    },
    overXYears: {
        one: "1 \u0AB5\u0AB0\u0ACD\u0AB7\u0AA5\u0AC0 \u0AB5\u0AA7\u0AC1",
        other: "{{count}} \u0AB5\u0AB0\u0ACD\u0AB7\u0AA5\u0AC0 \u0AB5\u0AA7\u0AC1"
    },
    almostXYears: {
        one: "\u0AB2\u0A97\u0AAD\u0A97 1 \u0AB5\u0AB0\u0ACD\u0AB7",
        other: "\u0AB2\u0A97\u0AAD\u0A97 {{count}} \u0AB5\u0AB0\u0ACD\u0AB7"
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
            return result + "\u0AAE\u0ABE\u0A82";
        }
        else {
            return result + " \u0AAA\u0AB9\u0AC7\u0AB2\u0ABE\u0A82";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/gu/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d MMMM, y",
    // CLDR #1825
    long: "d MMMM, y",
    // CLDR #1826
    medium: "d MMM, y",
    // CLDR #1827
    short: "d/M/yy"
    // CLDR #1828
};
var timeFormats = {
    full: "hh:mm:ss a zzzz",
    // CLDR #1829
    long: "hh:mm:ss a z",
    // CLDR #1830
    medium: "hh:mm:ss a",
    // CLDR #1831
    short: "hh:mm a"
    // CLDR #1832
};
var dateTimeFormats = {
    full: "{{date}} {{time}}",
    // CLDR #1833
    long: "{{date}} {{time}}",
    // CLDR #1834
    medium: "{{date}} {{time}}",
    // CLDR #1835
    short: "{{date}} {{time}}"
    // CLDR #1836
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
// node_modules/date-fns/esm/locale/gu/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\u0AAA\u0ABE\u0A9B\u0AB2\u0ABE' eeee p",
    // CLDR #1384
    yesterday: "'\u0A97\u0A88\u0A95\u0ABE\u0AB2\u0AC7' p",
    // CLDR #1409
    today: "'\u0A86\u0A9C\u0AC7' p",
    // CLDR #1410
    tomorrow: "'\u0A86\u0AB5\u0AA4\u0AC0\u0A95\u0ABE\u0AB2\u0AC7' p",
    // CLDR #1411
    nextWeek: "eeee p",
    // CLDR #1386
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/gu/_lib/localize/index.js
var eraValues = {
    narrow: ["\u0A88\u0AB8\u0AAA\u0AC2", "\u0A88\u0AB8"],
    abbreviated: ["\u0A88.\u0AB8.\u0AAA\u0AC2\u0AB0\u0ACD\u0AB5\u0AC7", "\u0A88.\u0AB8."],
    wide: ["\u0A88\u0AB8\u0AB5\u0AC0\u0AB8\u0AA8 \u0AAA\u0AC2\u0AB0\u0ACD\u0AB5\u0AC7", "\u0A88\u0AB8\u0AB5\u0AC0\u0AB8\u0AA8"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1\u0AB2\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8", "2\u0A9C\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8", "3\u0A9C\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8", "4\u0AA5\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8"]
};
var monthValues = {
    narrow: ["\u0A9C\u0ABE", "\u0AAB\u0AC7", "\u0AAE\u0ABE", "\u0A8F", "\u0AAE\u0AC7", "\u0A9C\u0AC2", "\u0A9C\u0AC1", "\u0A93", "\u0AB8", "\u0A93", "\u0AA8", "\u0AA1\u0ABF"],
    abbreviated: ["\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1", "\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1", "\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A", "\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF\u0AB2", "\u0AAE\u0AC7", "\u0A9C\u0AC2\u0AA8", "\u0A9C\u0AC1\u0AB2\u0ABE\u0A88", "\u0A91\u0A97\u0AB8\u0ACD\u0A9F", "\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7", "\u0A93\u0A95\u0ACD\u0A9F\u0ACB", "\u0AA8\u0AB5\u0AC7", "\u0AA1\u0ABF\u0AB8\u0AC7"],
    wide: ["\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1\u0A86\u0AB0\u0AC0", "\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1\u0A86\u0AB0\u0AC0", "\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A", "\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF\u0AB2", "\u0AAE\u0AC7", "\u0A9C\u0AC2\u0AA8", "\u0A9C\u0AC1\u0AB2\u0ABE\u0A87", "\u0A93\u0A97\u0AB8\u0ACD\u0A9F", "\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0", "\u0A93\u0A95\u0ACD\u0A9F\u0ACB\u0AAC\u0AB0", "\u0AA8\u0AB5\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0", "\u0AA1\u0ABF\u0AB8\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0"]
};
var dayValues = {
    narrow: ["\u0AB0", "\u0AB8\u0ACB", "\u0AAE\u0A82", "\u0AAC\u0AC1", "\u0A97\u0AC1", "\u0AB6\u0AC1", "\u0AB6"],
    short: ["\u0AB0", "\u0AB8\u0ACB", "\u0AAE\u0A82", "\u0AAC\u0AC1", "\u0A97\u0AC1", "\u0AB6\u0AC1", "\u0AB6"],
    abbreviated: ["\u0AB0\u0AB5\u0ABF", "\u0AB8\u0ACB\u0AAE", "\u0AAE\u0A82\u0A97\u0AB3", "\u0AAC\u0AC1\u0AA7", "\u0A97\u0AC1\u0AB0\u0AC1", "\u0AB6\u0AC1\u0A95\u0ACD\u0AB0", "\u0AB6\u0AA8\u0ABF"],
    wide: ["\u0AB0\u0AB5\u0ABF\u0AB5\u0ABE\u0AB0", "\u0AB8\u0ACB\u0AAE\u0AB5\u0ABE\u0AB0", "\u0AAE\u0A82\u0A97\u0AB3\u0AB5\u0ABE\u0AB0", "\u0AAC\u0AC1\u0AA7\u0AB5\u0ABE\u0AB0", "\u0A97\u0AC1\u0AB0\u0AC1\u0AB5\u0ABE\u0AB0", "\u0AB6\u0AC1\u0A95\u0ACD\u0AB0\u0AB5\u0ABE\u0AB0", "\u0AB6\u0AA8\u0ABF\u0AB5\u0ABE\u0AB0"
        /* Saturday */
    ]
};
var dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "\u0AAE.\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF",
        noon: "\u0AAC.",
        morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7",
        afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7",
        evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7",
        night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "\u200B\u0AAE\u0AA7\u0ACD\u0AAF\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF",
        noon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7",
        morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7",
        afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7",
        evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7",
        night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "\u200B\u0AAE\u0AA7\u0ACD\u0AAF\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF",
        noon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7",
        morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7",
        afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7",
        evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7",
        night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "\u0AAE.\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF",
        noon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7",
        morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7",
        afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7",
        evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7",
        night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "\u0AAE\u0AA7\u0ACD\u0AAF\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF",
        noon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7",
        morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7",
        afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7",
        evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7",
        night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "\u200B\u0AAE\u0AA7\u0ACD\u0AAF\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0ABF",
        noon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7",
        morning: "\u0AB8\u0AB5\u0ABE\u0AB0\u0AC7",
        afternoon: "\u0AAC\u0AAA\u0ACB\u0AB0\u0AC7",
        evening: "\u0AB8\u0ABE\u0A82\u0A9C\u0AC7",
        night: "\u0AB0\u0ABE\u0AA4\u0ACD\u0AB0\u0AC7"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    return String(dirtyNumber);
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
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/gu/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(ઈસપૂ|ઈસ)/i,
    abbreviated: /^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,
    wide: /^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i
};
var parseEraPatterns = {
    any: [/^ઈસપૂ/i, /^ઈસ/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](લો|જો|થો)? ત્રિમાસ/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    // eslint-disable-next-line no-misleading-character-class
    narrow: /^[જાફેમાએમેજૂજુઓસઓનડિ]/i,
    abbreviated: /^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,
    wide: /^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i
};
var parseMonthPatterns = {
    narrow: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i],
    any: [/^જા/i, /^ફે/i, /^મા/i, /^એ/i, /^મે/i, /^જૂ/i, /^જુ/i, /^ઑગ/i, /^સ/i, /^ઓક્ટો/i, /^ન/i, /^ડિ/i]
};
var matchDayPatterns = {
    narrow: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
    short: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
    abbreviated: /^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,
    wide: /^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i
};
var parseDayPatterns = {
    narrow: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i],
    any: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|મ\.?|સ|બ|સાં|રા)/i,
    any: /^(a|p|મ\.?|સ|બ|સાં|રા)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^મ\.?/i,
        noon: /^બ/i,
        morning: /સ/i,
        afternoon: /બ/i,
        evening: /સાં/i,
        night: /રા/i
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
// node_modules/date-fns/esm/locale/gu/index.js
var locale = {
    code: "gu",
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
var gu_default = locale;
export { gu_default };
