import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/ja-Hira/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "1\u3073\u3087\u3046\u307F\u307E\u3093",
        other: "{{count}}\u3073\u3087\u3046\u307F\u307E\u3093",
        oneWithSuffix: "\u3084\u304F1\u3073\u3087\u3046",
        otherWithSuffix: "\u3084\u304F{{count}}\u3073\u3087\u3046"
    },
    xSeconds: {
        one: "1\u3073\u3087\u3046",
        other: "{{count}}\u3073\u3087\u3046"
    },
    halfAMinute: "30\u3073\u3087\u3046",
    lessThanXMinutes: {
        one: "1\u3077\u3093\u307F\u307E\u3093",
        other: "{{count}}\u3075\u3093\u307F\u307E\u3093",
        oneWithSuffix: "\u3084\u304F1\u3077\u3093",
        otherWithSuffix: "\u3084\u304F{{count}}\u3075\u3093"
    },
    xMinutes: {
        one: "1\u3077\u3093",
        other: "{{count}}\u3075\u3093"
    },
    aboutXHours: {
        one: "\u3084\u304F1\u3058\u304B\u3093",
        other: "\u3084\u304F{{count}}\u3058\u304B\u3093"
    },
    xHours: {
        one: "1\u3058\u304B\u3093",
        other: "{{count}}\u3058\u304B\u3093"
    },
    xDays: {
        one: "1\u306B\u3061",
        other: "{{count}}\u306B\u3061"
    },
    aboutXWeeks: {
        one: "\u3084\u304F1\u3057\u3085\u3046\u304B\u3093",
        other: "\u3084\u304F{{count}}\u3057\u3085\u3046\u304B\u3093"
    },
    xWeeks: {
        one: "1\u3057\u3085\u3046\u304B\u3093",
        other: "{{count}}\u3057\u3085\u3046\u304B\u3093"
    },
    aboutXMonths: {
        one: "\u3084\u304F1\u304B\u3052\u3064",
        other: "\u3084\u304F{{count}}\u304B\u3052\u3064"
    },
    xMonths: {
        one: "1\u304B\u3052\u3064",
        other: "{{count}}\u304B\u3052\u3064"
    },
    aboutXYears: {
        one: "\u3084\u304F1\u306D\u3093",
        other: "\u3084\u304F{{count}}\u306D\u3093"
    },
    xYears: {
        one: "1\u306D\u3093",
        other: "{{count}}\u306D\u3093"
    },
    overXYears: {
        one: "1\u306D\u3093\u3044\u3058\u3087\u3046",
        other: "{{count}}\u306D\u3093\u3044\u3058\u3087\u3046"
    },
    almostXYears: {
        one: "1\u306D\u3093\u3061\u304B\u304F",
        other: "{{count}}\u306D\u3093\u3061\u304B\u304F"
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    options = options || {};
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    }
    else if (count === 1) {
        if (options.addSuffix && tokenValue.oneWithSuffix) {
            result = tokenValue.oneWithSuffix;
        }
        else {
            result = tokenValue.one;
        }
    }
    else {
        if (options.addSuffix && tokenValue.otherWithSuffix) {
            result = tokenValue.otherWithSuffix.replace("{{count}}", String(count));
        }
        else {
            result = tokenValue.other.replace("{{count}}", String(count));
        }
    }
    if (options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return result + "\u3042\u3068";
        }
        else {
            return result + "\u307E\u3048";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/ja-Hira/_lib/formatLong/index.js
var dateFormats = {
    full: "y\u306D\u3093M\u304C\u3064d\u306B\u3061EEEE",
    long: "y\u306D\u3093M\u304C\u3064d\u306B\u3061",
    medium: "y/MM/dd",
    short: "y/MM/dd"
};
var timeFormats = {
    full: "H\u3058mm\u3075\u3093ss\u3073\u3087\u3046 zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
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
// node_modules/date-fns/esm/locale/ja-Hira/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "\u305B\u3093\u3057\u3085\u3046\u306Eeeee\u306Ep",
    yesterday: "\u304D\u306E\u3046\u306Ep",
    today: "\u304D\u3087\u3046\u306Ep",
    tomorrow: "\u3042\u3057\u305F\u306Ep",
    nextWeek: "\u3088\u304F\u3057\u3085\u3046\u306Eeeee\u306Ep",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/ja-Hira/_lib/localize/index.js
var eraValues = {
    narrow: ["BC", "AC"],
    abbreviated: ["\u304D\u3052\u3093\u305C\u3093", "\u305B\u3044\u308C\u304D"],
    wide: ["\u304D\u3052\u3093\u305C\u3093", "\u305B\u3044\u308C\u304D"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["\u3060\u30441\u3057\u306F\u3093\u304D", "\u3060\u30442\u3057\u306F\u3093\u304D", "\u3060\u30443\u3057\u306F\u3093\u304D", "\u3060\u30444\u3057\u306F\u3093\u304D"]
};
var monthValues = {
    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    abbreviated: ["1\u304C\u3064", "2\u304C\u3064", "3\u304C\u3064", "4\u304C\u3064", "5\u304C\u3064", "6\u304C\u3064", "7\u304C\u3064", "8\u304C\u3064", "9\u304C\u3064", "10\u304C\u3064", "11\u304C\u3064", "12\u304C\u3064"],
    wide: ["1\u304C\u3064", "2\u304C\u3064", "3\u304C\u3064", "4\u304C\u3064", "5\u304C\u3064", "6\u304C\u3064", "7\u304C\u3064", "8\u304C\u3064", "9\u304C\u3064", "10\u304C\u3064", "11\u304C\u3064", "12\u304C\u3064"]
};
var dayValues = {
    narrow: ["\u306B\u3061", "\u3052\u3064", "\u304B", "\u3059\u3044", "\u3082\u304F", "\u304D\u3093", "\u3069"],
    short: ["\u306B\u3061", "\u3052\u3064", "\u304B", "\u3059\u3044", "\u3082\u304F", "\u304D\u3093", "\u3069"],
    abbreviated: ["\u306B\u3061", "\u3052\u3064", "\u304B", "\u3059\u3044", "\u3082\u304F", "\u304D\u3093", "\u3069"],
    wide: ["\u306B\u3061\u3088\u3046\u3073", "\u3052\u3064\u3088\u3046\u3073", "\u304B\u3088\u3046\u3073", "\u3059\u3044\u3088\u3046\u3073", "\u3082\u304F\u3088\u3046\u3073", "\u304D\u3093\u3088\u3046\u3073", "\u3069\u3088\u3046\u3073"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u3054\u305C\u3093",
        pm: "\u3054\u3054",
        midnight: "\u3057\u3093\u3084",
        noon: "\u3057\u3087\u3046\u3054",
        morning: "\u3042\u3055",
        afternoon: "\u3054\u3054",
        evening: "\u3088\u308B",
        night: "\u3057\u3093\u3084"
    },
    abbreviated: {
        am: "\u3054\u305C\u3093",
        pm: "\u3054\u3054",
        midnight: "\u3057\u3093\u3084",
        noon: "\u3057\u3087\u3046\u3054",
        morning: "\u3042\u3055",
        afternoon: "\u3054\u3054",
        evening: "\u3088\u308B",
        night: "\u3057\u3093\u3084"
    },
    wide: {
        am: "\u3054\u305C\u3093",
        pm: "\u3054\u3054",
        midnight: "\u3057\u3093\u3084",
        noon: "\u3057\u3087\u3046\u3054",
        morning: "\u3042\u3055",
        afternoon: "\u3054\u3054",
        evening: "\u3088\u308B",
        night: "\u3057\u3093\u3084"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u3054\u305C\u3093",
        pm: "\u3054\u3054",
        midnight: "\u3057\u3093\u3084",
        noon: "\u3057\u3087\u3046\u3054",
        morning: "\u3042\u3055",
        afternoon: "\u3054\u3054",
        evening: "\u3088\u308B",
        night: "\u3057\u3093\u3084"
    },
    abbreviated: {
        am: "\u3054\u305C\u3093",
        pm: "\u3054\u3054",
        midnight: "\u3057\u3093\u3084",
        noon: "\u3057\u3087\u3046\u3054",
        morning: "\u3042\u3055",
        afternoon: "\u3054\u3054",
        evening: "\u3088\u308B",
        night: "\u3057\u3093\u3084"
    },
    wide: {
        am: "\u3054\u305C\u3093",
        pm: "\u3054\u3054",
        midnight: "\u3057\u3093\u3084",
        noon: "\u3057\u3087\u3046\u3054",
        morning: "\u3042\u3055",
        afternoon: "\u3054\u3054",
        evening: "\u3088\u308B",
        night: "\u3057\u3093\u3084"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    var unit = String(options === null || options === void 0 ? void 0 : options.unit);
    switch (unit) {
        case "year":
            return "".concat(number, "\u306D\u3093");
        case "quarter":
            return "\u3060\u3044".concat(number, "\u3057\u306F\u3093\u304D");
        case "month":
            return "".concat(number, "\u304C\u3064");
        case "week":
            return "\u3060\u3044".concat(number, "\u3057\u3085\u3046");
        case "date":
            return "".concat(number, "\u306B\u3061");
        case "hour":
            return "".concat(number, "\u3058");
        case "minute":
            return "".concat(number, "\u3075\u3093");
        case "second":
            return "".concat(number, "\u3073\u3087\u3046");
        default:
            return "".concat(number);
    }
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
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/ja-Hira/_lib/match/index.js
var matchOrdinalNumberPattern = /^だ?い?\d+(ねん|しはんき|がつ|しゅう|にち|じ|ふん|びょう)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(B\.?C\.?|A\.?D\.?)/i,
    abbreviated: /^(きげん[前後]|せいれき)/i,
    wide: /^(きげん[前後]|せいれき)/i
};
var parseEraPatterns = {
    narrow: [/^B/i, /^A/i],
    any: [/^(きげんぜん)/i, /^(せいれき|きげんご)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^Q[1234]/i,
    wide: /^だい[1234一二三四１２３４]しはんき/i
};
var parseQuarterPatterns = {
    any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
};
var matchMonthPatterns = {
    narrow: /^([123456789]|1[012])/,
    abbreviated: /^([123456789]|1[012])がつ/i,
    wide: /^([123456789]|1[012])がつ/i
};
var parseMonthPatterns = {
    any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
};
var matchDayPatterns = {
    narrow: /^(にち|げつ|か|すい|もく|きん|ど)/,
    short: /^(にち|げつ|か|すい|もく|きん|ど)/,
    abbreviated: /^(にち|げつ|か|すい|もく|きん|ど)/,
    wide: /^(にち|げつ|か|すい|もく|きん|ど)ようび/
};
var parseDayPatterns = {
    any: [/^にち/, /^げつ/, /^か/, /^すい/, /^もく/, /^きん/, /^ど/]
};
var matchDayPeriodPatterns = {
    any: /^(AM|PM|ごぜん|ごご|しょうご|しんや|まよなか|よる|あさ)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^(A|ごぜん)/i,
        pm: /^(P|ごご)/i,
        midnight: /^しんや|まよなか/i,
        noon: /^しょうご/i,
        morning: /^あさ/i,
        afternoon: /^ごご/i,
        evening: /^よる/i,
        night: /^しんや/i
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
// node_modules/date-fns/esm/locale/ja-Hira/index.js
var locale = {
    code: "ja-Hira",
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
var ja_Hira_default = locale;
export { ja_Hira_default };
