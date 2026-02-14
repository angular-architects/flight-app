import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/ug/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u0628\u0649\u0631 \u0633\u0649\u0643\u06C7\u0646\u062A \u0626\u0649\u0686\u0649\u062F\u06D5",
        other: "\u0633\u0649\u0643\u06C7\u0646\u062A \u0626\u0649\u0686\u0649\u062F\u06D5 {{count}}"
    },
    xSeconds: {
        one: "\u0628\u0649\u0631 \u0633\u0649\u0643\u06C7\u0646\u062A",
        other: "\u0633\u0649\u0643\u06C7\u0646\u062A {{count}}"
    },
    halfAMinute: "\u064A\u0649\u0631\u0649\u0645 \u0645\u0649\u0646\u06C7\u062A",
    lessThanXMinutes: {
        one: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06C7\u062A \u0626\u0649\u0686\u0649\u062F\u06D5",
        other: "\u0645\u0649\u0646\u06C7\u062A \u0626\u0649\u0686\u0649\u062F\u06D5 {{count}}"
    },
    xMinutes: {
        one: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06C7\u062A",
        other: "\u0645\u0649\u0646\u06C7\u062A {{count}}"
    },
    aboutXHours: {
        one: "\u062A\u06D5\u062E\u0645\u0649\u0646\u06D5\u0646 \u0628\u0649\u0631 \u0633\u0627\u0626\u06D5\u062A",
        other: "\u0633\u0627\u0626\u06D5\u062A {{count}} \u062A\u06D5\u062E\u0645\u0649\u0646\u06D5\u0646"
    },
    xHours: {
        one: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06D5\u062A",
        other: "\u0633\u0627\u0626\u06D5\u062A {{count}}"
    },
    xDays: {
        one: "\u0628\u0649\u0631 \u0643\u06C8\u0646",
        other: "\u0643\u06C8\u0646 {{count}}"
    },
    aboutXWeeks: {
        one: "\u062A\u06D5\u062E\u0645\u0649\u0646\u06D5\u0646 \u0628\u0649\u0631\u06BE\u06D5\u067E\u062A\u06D5",
        other: "\u06BE\u06D5\u067E\u062A\u06D5 {{count}} \u062A\u06D5\u062E\u0645\u0649\u0646\u06D5\u0646"
    },
    xWeeks: {
        one: "\u0628\u0649\u0631\u06BE\u06D5\u067E\u062A\u06D5",
        other: "\u06BE\u06D5\u067E\u062A\u06D5 {{count}}"
    },
    aboutXMonths: {
        one: "\u062A\u06D5\u062E\u0645\u0649\u0646\u06D5\u0646 \u0628\u0649\u0631 \u0626\u0627\u064A",
        other: "\u0626\u0627\u064A {{count}} \u062A\u06D5\u062E\u0645\u0649\u0646\u06D5\u0646"
    },
    xMonths: {
        one: "\u0628\u0649\u0631 \u0626\u0627\u064A",
        other: "\u0626\u0627\u064A {{count}}"
    },
    aboutXYears: {
        one: "\u062A\u06D5\u062E\u0645\u0649\u0646\u06D5\u0646 \u0628\u0649\u0631 \u064A\u0649\u0644",
        other: "\u064A\u0649\u0644 {{count}} \u062A\u06D5\u062E\u0645\u0649\u0646\u06D5\u0646"
    },
    xYears: {
        one: "\u0628\u0649\u0631 \u064A\u0649\u0644",
        other: "\u064A\u0649\u0644 {{count}}"
    },
    overXYears: {
        one: "\u0628\u0649\u0631 \u064A\u0649\u0644\u062F\u0649\u0646 \u0626\u0627\u0631\u062A\u06C7\u0642",
        other: "\u064A\u0649\u0644\u062F\u0649\u0646 \u0626\u0627\u0631\u062A\u06C7\u0642 {{count}}"
    },
    almostXYears: {
        one: "\u0626\u0627\u0633\u0627\u0633\u06D5\u0646 \u0628\u0649\u0631 \u064A\u0649\u0644",
        other: "\u064A\u0649\u0644 {{count}} \u0626\u0627\u0633\u0627\u0633\u06D5\u0646"
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
            return result;
        }
        else {
            return result + " \u0628\u0648\u0644\u062F\u0649";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/ug/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} '\u062F\u06D5' {{time}}",
    long: "{{date}} '\u062F\u06D5' {{time}}",
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
// node_modules/date-fns/esm/locale/ug/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\u0626\u200D\u06C6\u062A\u0643\u06D5\u0646' eeee '\u062F\u06D5' p",
    yesterday: "'\u062A\u06C8\u0646\u06C8\u06AF\u06C8\u0646 \u062F\u06D5' p",
    today: "'\u0628\u06C8\u06AF\u06C8\u0646 \u062F\u06D5' p",
    tomorrow: "'\u0626\u06D5\u062A\u06D5 \u062F\u06D5' p",
    nextWeek: "eeee '\u062F\u06D5' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/ug/_lib/localize/index.js
var eraValues = {
    narrow: ["\u0628", "\u0643"],
    abbreviated: ["\u0628", "\u0643"],
    wide: ["\u0645\u0649\u064A\u0644\u0627\u062F\u0649\u062F\u0649\u0646 \u0628\u06C7\u0631\u06C7\u0646", "\u0645\u0649\u064A\u0644\u0627\u062F\u0649\u062F\u0649\u0646 \u0643\u0649\u064A\u0649\u0646"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1", "2", "3", "4"],
    wide: ["\u0628\u0649\u0631\u0649\u0646\u062C\u0649 \u0686\u0627\u0631\u06D5\u0643", "\u0626\u0649\u0643\u0643\u0649\u0646\u062C\u0649 \u0686\u0627\u0631\u06D5\u0643", "\u0626\u06C8\u0686\u0649\u0646\u062C\u0649 \u0686\u0627\u0631\u06D5\u0643", "\u062A\u06C6\u062A\u0649\u0646\u062C\u0649 \u0686\u0627\u0631\u06D5\u0643"]
};
var monthValues = {
    narrow: ["\u064A", "\u0641", "\u0645", "\u0627", "\u0645", "\u0649", "\u0649", "\u0627", "\u0633", "\u06C6", "\u0646", "\u062F"],
    abbreviated: ["\u064A\u0627\u0646\u06CB\u0627\u0631", "\u0641\u06D0\u06CB\u0649\u0631\u0627\u0644", "\u0645\u0627\u0631\u062A", "\u0626\u0627\u067E\u0631\u0649\u0644", "\u0645\u0627\u064A", "\u0626\u0649\u064A\u06C7\u0646", "\u0626\u0649\u064A\u0648\u0644", "\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A", "\u0633\u0649\u0646\u062A\u06D5\u0628\u0649\u0631", "\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631", "\u0646\u0648\u064A\u0627\u0628\u0649\u0631", "\u062F\u0649\u0643\u0627\u0628\u0649\u0631"],
    wide: ["\u064A\u0627\u0646\u06CB\u0627\u0631", "\u0641\u06D0\u06CB\u0649\u0631\u0627\u0644", "\u0645\u0627\u0631\u062A", "\u0626\u0627\u067E\u0631\u0649\u0644", "\u0645\u0627\u064A", "\u0626\u0649\u064A\u06C7\u0646", "\u0626\u0649\u064A\u0648\u0644", "\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A", "\u0633\u0649\u0646\u062A\u06D5\u0628\u0649\u0631", "\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631", "\u0646\u0648\u064A\u0627\u0628\u0649\u0631", "\u062F\u0649\u0643\u0627\u0628\u0649\u0631"]
};
var dayValues = {
    narrow: ["\u064A", "\u062F", "\u0633", "\u0686", "\u067E", "\u062C", "\u0634"],
    short: ["\u064A", "\u062F", "\u0633", "\u0686", "\u067E", "\u062C", "\u0634"],
    abbreviated: ["\u064A\u06D5\u0643\u0634\u06D5\u0646\u0628\u06D5", "\u062F\u06C8\u0634\u06D5\u0646\u0628\u06D5", "\u0633\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5", "\u0686\u0627\u0631\u0634\u06D5\u0646\u0628\u06D5", "\u067E\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5", "\u062C\u06C8\u0645\u06D5", "\u0634\u06D5\u0646\u0628\u06D5"],
    wide: ["\u064A\u06D5\u0643\u0634\u06D5\u0646\u0628\u06D5", "\u062F\u06C8\u0634\u06D5\u0646\u0628\u06D5", "\u0633\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5", "\u0686\u0627\u0631\u0634\u06D5\u0646\u0628\u06D5", "\u067E\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5", "\u062C\u06C8\u0645\u06D5", "\u0634\u06D5\u0646\u0628\u06D5"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u0626\u06D5",
        pm: "\u0686",
        midnight: "\u0643",
        noon: "\u0686",
        morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646",
        afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646",
        evening: "\u0626\u0627\u062E\u0634\u0649\u0645",
        night: "\u0643\u0649\u0686\u06D5"
    },
    abbreviated: {
        am: "\u0626\u06D5",
        pm: "\u0686",
        midnight: "\u0643",
        noon: "\u0686",
        morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646",
        afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646",
        evening: "\u0626\u0627\u062E\u0634\u0649\u0645",
        night: "\u0643\u0649\u0686\u06D5"
    },
    wide: {
        am: "\u0626\u06D5",
        pm: "\u0686",
        midnight: "\u0643",
        noon: "\u0686",
        morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646",
        afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646",
        evening: "\u0626\u0627\u062E\u0634\u0649\u0645",
        night: "\u0643\u0649\u0686\u06D5"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u0626\u06D5",
        pm: "\u0686",
        midnight: "\u0643",
        noon: "\u0686",
        morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646\u062F\u06D5",
        afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646",
        evening: "\u0626\u0627\u062E\u0634\u0627\u0645\u062F\u0627",
        night: "\u0643\u0649\u0686\u0649\u062F\u06D5"
    },
    abbreviated: {
        am: "\u0626\u06D5",
        pm: "\u0686",
        midnight: "\u0643",
        noon: "\u0686",
        morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646\u062F\u06D5",
        afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646",
        evening: "\u0626\u0627\u062E\u0634\u0627\u0645\u062F\u0627",
        night: "\u0643\u0649\u0686\u0649\u062F\u06D5"
    },
    wide: {
        am: "\u0626\u06D5",
        pm: "\u0686",
        midnight: "\u0643",
        noon: "\u0686",
        morning: "\u0626\u06D5\u062A\u0649\u06AF\u06D5\u0646\u062F\u06D5",
        afternoon: "\u0686\u06C8\u0634\u062A\u0649\u0646 \u0643\u0649\u064A\u0649\u0646",
        evening: "\u0626\u0627\u062E\u0634\u0627\u0645\u062F\u0627",
        night: "\u0643\u0649\u0686\u0649\u062F\u06D5"
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
// node_modules/date-fns/esm/locale/ug/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(ب|ك)/i,
    wide: /^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i
};
var parseEraPatterns = {
    any: [/^بۇرۇن/i, /^كىيىن/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^چ[1234]/i,
    wide: /^چارەك [1234]/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    // eslint-disable-next-line no-misleading-character-class
    narrow: /^[يفمئامئ‍ئاسۆند]/i,
    abbreviated: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,
    wide: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i
};
var parseMonthPatterns = {
    narrow: [/^ي/i, /^ف/i, /^م/i, /^ا/i, /^م/i, /^ى‍/i, /^ى‍/i, /^ا‍/i, /^س/i, /^ۆ/i, /^ن/i, /^د/i],
    any: [/^يان/i, /^فېۋ/i, /^مار/i, /^ئاپ/i, /^ماي/i, /^ئىيۇن/i, /^ئىيول/i, /^ئاۋ/i, /^سىن/i, /^ئۆك/i, /^نوي/i, /^دىك/i]
};
var matchDayPatterns = {
    narrow: /^[دسچپجشي]/i,
    short: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
    abbreviated: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
    wide: /^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i
};
var parseDayPatterns = {
    narrow: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
    any: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,
    any: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^ئە/i,
        pm: /^چ/i,
        midnight: /^ك/i,
        noon: /^چ/i,
        morning: /ئەتىگەن/i,
        afternoon: /چۈشتىن كىيىن/i,
        evening: /ئاخشىم/i,
        night: /كىچە/i
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
// node_modules/date-fns/esm/locale/ug/index.js
var locale = {
    code: "ug",
    formatDistance: formatDistance_default,
    formatLong: formatLong_default,
    formatRelative: formatRelative_default,
    localize: localize_default,
    match: match_default,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
var ug_default = locale;
export { ug_default };
