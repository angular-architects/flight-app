import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/ja/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "1\u79D2\u672A\u6E80",
        other: "{{count}}\u79D2\u672A\u6E80",
        oneWithSuffix: "\u7D041\u79D2",
        otherWithSuffix: "\u7D04{{count}}\u79D2"
    },
    xSeconds: {
        one: "1\u79D2",
        other: "{{count}}\u79D2"
    },
    halfAMinute: "30\u79D2",
    lessThanXMinutes: {
        one: "1\u5206\u672A\u6E80",
        other: "{{count}}\u5206\u672A\u6E80",
        oneWithSuffix: "\u7D041\u5206",
        otherWithSuffix: "\u7D04{{count}}\u5206"
    },
    xMinutes: {
        one: "1\u5206",
        other: "{{count}}\u5206"
    },
    aboutXHours: {
        one: "\u7D041\u6642\u9593",
        other: "\u7D04{{count}}\u6642\u9593"
    },
    xHours: {
        one: "1\u6642\u9593",
        other: "{{count}}\u6642\u9593"
    },
    xDays: {
        one: "1\u65E5",
        other: "{{count}}\u65E5"
    },
    aboutXWeeks: {
        one: "\u7D041\u9031\u9593",
        other: "\u7D04{{count}}\u9031\u9593"
    },
    xWeeks: {
        one: "1\u9031\u9593",
        other: "{{count}}\u9031\u9593"
    },
    aboutXMonths: {
        one: "\u7D041\u304B\u6708",
        other: "\u7D04{{count}}\u304B\u6708"
    },
    xMonths: {
        one: "1\u304B\u6708",
        other: "{{count}}\u304B\u6708"
    },
    aboutXYears: {
        one: "\u7D041\u5E74",
        other: "\u7D04{{count}}\u5E74"
    },
    xYears: {
        one: "1\u5E74",
        other: "{{count}}\u5E74"
    },
    overXYears: {
        one: "1\u5E74\u4EE5\u4E0A",
        other: "{{count}}\u5E74\u4EE5\u4E0A"
    },
    almostXYears: {
        one: "1\u5E74\u8FD1\u304F",
        other: "{{count}}\u5E74\u8FD1\u304F"
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
            return result + "\u5F8C";
        }
        else {
            return result + "\u524D";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/ja/_lib/formatLong/index.js
var dateFormats = {
    full: "y\u5E74M\u6708d\u65E5EEEE",
    long: "y\u5E74M\u6708d\u65E5",
    medium: "y/MM/dd",
    short: "y/MM/dd"
};
var timeFormats = {
    full: "H\u6642mm\u5206ss\u79D2 zzzz",
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
// node_modules/date-fns/esm/locale/ja/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "\u5148\u9031\u306Eeeee\u306Ep",
    yesterday: "\u6628\u65E5\u306Ep",
    today: "\u4ECA\u65E5\u306Ep",
    tomorrow: "\u660E\u65E5\u306Ep",
    nextWeek: "\u7FCC\u9031\u306Eeeee\u306Ep",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/ja/_lib/localize/index.js
var eraValues = {
    narrow: ["BC", "AC"],
    abbreviated: ["\u7D00\u5143\u524D", "\u897F\u66A6"],
    wide: ["\u7D00\u5143\u524D", "\u897F\u66A6"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["\u7B2C1\u56DB\u534A\u671F", "\u7B2C2\u56DB\u534A\u671F", "\u7B2C3\u56DB\u534A\u671F", "\u7B2C4\u56DB\u534A\u671F"]
};
var monthValues = {
    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    abbreviated: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
    wide: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"]
};
var dayValues = {
    narrow: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
    short: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
    abbreviated: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
    wide: ["\u65E5\u66DC\u65E5", "\u6708\u66DC\u65E5", "\u706B\u66DC\u65E5", "\u6C34\u66DC\u65E5", "\u6728\u66DC\u65E5", "\u91D1\u66DC\u65E5", "\u571F\u66DC\u65E5"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u5348\u524D",
        pm: "\u5348\u5F8C",
        midnight: "\u6DF1\u591C",
        noon: "\u6B63\u5348",
        morning: "\u671D",
        afternoon: "\u5348\u5F8C",
        evening: "\u591C",
        night: "\u6DF1\u591C"
    },
    abbreviated: {
        am: "\u5348\u524D",
        pm: "\u5348\u5F8C",
        midnight: "\u6DF1\u591C",
        noon: "\u6B63\u5348",
        morning: "\u671D",
        afternoon: "\u5348\u5F8C",
        evening: "\u591C",
        night: "\u6DF1\u591C"
    },
    wide: {
        am: "\u5348\u524D",
        pm: "\u5348\u5F8C",
        midnight: "\u6DF1\u591C",
        noon: "\u6B63\u5348",
        morning: "\u671D",
        afternoon: "\u5348\u5F8C",
        evening: "\u591C",
        night: "\u6DF1\u591C"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u5348\u524D",
        pm: "\u5348\u5F8C",
        midnight: "\u6DF1\u591C",
        noon: "\u6B63\u5348",
        morning: "\u671D",
        afternoon: "\u5348\u5F8C",
        evening: "\u591C",
        night: "\u6DF1\u591C"
    },
    abbreviated: {
        am: "\u5348\u524D",
        pm: "\u5348\u5F8C",
        midnight: "\u6DF1\u591C",
        noon: "\u6B63\u5348",
        morning: "\u671D",
        afternoon: "\u5348\u5F8C",
        evening: "\u591C",
        night: "\u6DF1\u591C"
    },
    wide: {
        am: "\u5348\u524D",
        pm: "\u5348\u5F8C",
        midnight: "\u6DF1\u591C",
        noon: "\u6B63\u5348",
        morning: "\u671D",
        afternoon: "\u5348\u5F8C",
        evening: "\u591C",
        night: "\u6DF1\u591C"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    var unit = String(options === null || options === void 0 ? void 0 : options.unit);
    switch (unit) {
        case "year":
            return "".concat(number, "\u5E74");
        case "quarter":
            return "\u7B2C".concat(number, "\u56DB\u534A\u671F");
        case "month":
            return "".concat(number, "\u6708");
        case "week":
            return "\u7B2C".concat(number, "\u9031");
        case "date":
            return "".concat(number, "\u65E5");
        case "hour":
            return "".concat(number, "\u6642");
        case "minute":
            return "".concat(number, "\u5206");
        case "second":
            return "".concat(number, "\u79D2");
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
// node_modules/date-fns/esm/locale/ja/_lib/match/index.js
var matchOrdinalNumberPattern = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(B\.?C\.?|A\.?D\.?)/i,
    abbreviated: /^(紀元[前後]|西暦)/i,
    wide: /^(紀元[前後]|西暦)/i
};
var parseEraPatterns = {
    narrow: [/^B/i, /^A/i],
    any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^Q[1234]/i,
    wide: /^第[1234一二三四１２３４]四半期/i
};
var parseQuarterPatterns = {
    any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
};
var matchMonthPatterns = {
    narrow: /^([123456789]|1[012])/,
    abbreviated: /^([123456789]|1[012])月/i,
    wide: /^([123456789]|1[012])月/i
};
var parseMonthPatterns = {
    any: [/^1\D/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
};
var matchDayPatterns = {
    narrow: /^[日月火水木金土]/,
    short: /^[日月火水木金土]/,
    abbreviated: /^[日月火水木金土]/,
    wide: /^[日月火水木金土]曜日/
};
var parseDayPatterns = {
    any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
};
var matchDayPeriodPatterns = {
    any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^(A|午前)/i,
        pm: /^(P|午後)/i,
        midnight: /^深夜|真夜中/i,
        noon: /^正午/i,
        morning: /^朝/i,
        afternoon: /^午後/i,
        evening: /^夜/i,
        night: /^深夜/i
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
// node_modules/date-fns/esm/locale/ja/index.js
var locale = {
    code: "ja",
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
var ja_default = locale;
export { ja_default };
