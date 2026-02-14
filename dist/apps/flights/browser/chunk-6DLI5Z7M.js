import { isSameUTCWeek } from "@nf-internal/chunk-WGUJHRU3";
import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/zh-CN/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u4E0D\u5230 1 \u79D2",
        other: "\u4E0D\u5230 {{count}} \u79D2"
    },
    xSeconds: {
        one: "1 \u79D2",
        other: "{{count}} \u79D2"
    },
    halfAMinute: "\u534A\u5206\u949F",
    lessThanXMinutes: {
        one: "\u4E0D\u5230 1 \u5206\u949F",
        other: "\u4E0D\u5230 {{count}} \u5206\u949F"
    },
    xMinutes: {
        one: "1 \u5206\u949F",
        other: "{{count}} \u5206\u949F"
    },
    xHours: {
        one: "1 \u5C0F\u65F6",
        other: "{{count}} \u5C0F\u65F6"
    },
    aboutXHours: {
        one: "\u5927\u7EA6 1 \u5C0F\u65F6",
        other: "\u5927\u7EA6 {{count}} \u5C0F\u65F6"
    },
    xDays: {
        one: "1 \u5929",
        other: "{{count}} \u5929"
    },
    aboutXWeeks: {
        one: "\u5927\u7EA6 1 \u4E2A\u661F\u671F",
        other: "\u5927\u7EA6 {{count}} \u4E2A\u661F\u671F"
    },
    xWeeks: {
        one: "1 \u4E2A\u661F\u671F",
        other: "{{count}} \u4E2A\u661F\u671F"
    },
    aboutXMonths: {
        one: "\u5927\u7EA6 1 \u4E2A\u6708",
        other: "\u5927\u7EA6 {{count}} \u4E2A\u6708"
    },
    xMonths: {
        one: "1 \u4E2A\u6708",
        other: "{{count}} \u4E2A\u6708"
    },
    aboutXYears: {
        one: "\u5927\u7EA6 1 \u5E74",
        other: "\u5927\u7EA6 {{count}} \u5E74"
    },
    xYears: {
        one: "1 \u5E74",
        other: "{{count}} \u5E74"
    },
    overXYears: {
        one: "\u8D85\u8FC7 1 \u5E74",
        other: "\u8D85\u8FC7 {{count}} \u5E74"
    },
    almostXYears: {
        one: "\u5C06\u8FD1 1 \u5E74",
        other: "\u5C06\u8FD1 {{count}} \u5E74"
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
            return result + "\u5185";
        }
        else {
            return result + "\u524D";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/zh-CN/_lib/formatLong/index.js
var dateFormats = {
    full: "y'\u5E74'M'\u6708'd'\u65E5' EEEE",
    long: "y'\u5E74'M'\u6708'd'\u65E5'",
    medium: "yyyy-MM-dd",
    short: "yy-MM-dd"
};
var timeFormats = {
    full: "zzzz a h:mm:ss",
    long: "z a h:mm:ss",
    medium: "a h:mm:ss",
    short: "a h:mm"
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
// node_modules/date-fns/esm/locale/zh-CN/_lib/formatRelative/index.js
function checkWeek(date, baseDate, options) {
    var baseFormat = "eeee p";
    if (isSameUTCWeek(date, baseDate, options)) {
        return baseFormat;
    }
    else if (date.getTime() > baseDate.getTime()) {
        return "'\u4E0B\u4E2A'" + baseFormat;
    }
    return "'\u4E0A\u4E2A'" + baseFormat;
}
var formatRelativeLocale = {
    lastWeek: checkWeek,
    // days before yesterday, maybe in this week or last week
    yesterday: "'\u6628\u5929' p",
    today: "'\u4ECA\u5929' p",
    tomorrow: "'\u660E\u5929' p",
    nextWeek: checkWeek,
    // days after tomorrow, maybe in this week or next week
    other: "PP p"
};
var formatRelative = function formatRelative2(token, date, baseDate, options) {
    var format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date, baseDate, options);
    }
    return format;
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/zh-CN/_lib/localize/index.js
var eraValues = {
    narrow: ["\u524D", "\u516C\u5143"],
    abbreviated: ["\u524D", "\u516C\u5143"],
    wide: ["\u516C\u5143\u524D", "\u516C\u5143"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["\u7B2C\u4E00\u5B63", "\u7B2C\u4E8C\u5B63", "\u7B2C\u4E09\u5B63", "\u7B2C\u56DB\u5B63"],
    wide: ["\u7B2C\u4E00\u5B63\u5EA6", "\u7B2C\u4E8C\u5B63\u5EA6", "\u7B2C\u4E09\u5B63\u5EA6", "\u7B2C\u56DB\u5B63\u5EA6"]
};
var monthValues = {
    narrow: ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u5341\u4E00", "\u5341\u4E8C"],
    abbreviated: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
    wide: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"]
};
var dayValues = {
    narrow: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
    short: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
    abbreviated: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"],
    wide: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u4E0A",
        pm: "\u4E0B",
        midnight: "\u51CC\u6668",
        noon: "\u5348",
        morning: "\u65E9",
        afternoon: "\u4E0B\u5348",
        evening: "\u665A",
        night: "\u591C"
    },
    abbreviated: {
        am: "\u4E0A\u5348",
        pm: "\u4E0B\u5348",
        midnight: "\u51CC\u6668",
        noon: "\u4E2D\u5348",
        morning: "\u65E9\u6668",
        afternoon: "\u4E2D\u5348",
        evening: "\u665A\u4E0A",
        night: "\u591C\u95F4"
    },
    wide: {
        am: "\u4E0A\u5348",
        pm: "\u4E0B\u5348",
        midnight: "\u51CC\u6668",
        noon: "\u4E2D\u5348",
        morning: "\u65E9\u6668",
        afternoon: "\u4E2D\u5348",
        evening: "\u665A\u4E0A",
        night: "\u591C\u95F4"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u4E0A",
        pm: "\u4E0B",
        midnight: "\u51CC\u6668",
        noon: "\u5348",
        morning: "\u65E9",
        afternoon: "\u4E0B\u5348",
        evening: "\u665A",
        night: "\u591C"
    },
    abbreviated: {
        am: "\u4E0A\u5348",
        pm: "\u4E0B\u5348",
        midnight: "\u51CC\u6668",
        noon: "\u4E2D\u5348",
        morning: "\u65E9\u6668",
        afternoon: "\u4E2D\u5348",
        evening: "\u665A\u4E0A",
        night: "\u591C\u95F4"
    },
    wide: {
        am: "\u4E0A\u5348",
        pm: "\u4E0B\u5348",
        midnight: "\u51CC\u6668",
        noon: "\u4E2D\u5348",
        morning: "\u65E9\u6668",
        afternoon: "\u4E2D\u5348",
        evening: "\u665A\u4E0A",
        night: "\u591C\u95F4"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    switch (options === null || options === void 0 ? void 0 : options.unit) {
        case "date":
            return number.toString() + "\u65E5";
        case "hour":
            return number.toString() + "\u65F6";
        case "minute":
            return number.toString() + "\u5206";
        case "second":
            return number.toString() + "\u79D2";
        default:
            return "\u7B2C " + number.toString();
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
// node_modules/date-fns/esm/locale/zh-CN/_lib/match/index.js
var matchOrdinalNumberPattern = /^(第\s*)?\d+(日|时|分|秒)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(前)/i,
    abbreviated: /^(前)/i,
    wide: /^(公元前|公元)/i
};
var parseEraPatterns = {
    any: [/^(前)/i, /^(公元)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^第[一二三四]刻/i,
    wide: /^第[一二三四]刻钟/i
};
var parseQuarterPatterns = {
    any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
};
var matchMonthPatterns = {
    narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
    abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
    wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
};
var parseMonthPatterns = {
    narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i],
    any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]
};
var matchDayPatterns = {
    narrow: /^[一二三四五六日]/i,
    short: /^[一二三四五六日]/i,
    abbreviated: /^周[一二三四五六日]/i,
    wide: /^星期[一二三四五六日]/i
};
var parseDayPatterns = {
    any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
};
var matchDayPeriodPatterns = {
    any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^上午?/i,
        pm: /^下午?/i,
        midnight: /^午夜/i,
        noon: /^[中正]午/i,
        morning: /^早上/i,
        afternoon: /^下午/i,
        evening: /^晚上?/i,
        night: /^凌晨/i
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
// node_modules/date-fns/esm/locale/zh-CN/index.js
var locale = {
    code: "zh-CN",
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
var zh_CN_default = locale;
export { zh_CN_default };
