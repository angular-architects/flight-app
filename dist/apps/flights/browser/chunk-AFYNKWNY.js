import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/ko/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "1\uCD08 \uBBF8\uB9CC",
        other: "{{count}}\uCD08 \uBBF8\uB9CC"
    },
    xSeconds: {
        one: "1\uCD08",
        other: "{{count}}\uCD08"
    },
    halfAMinute: "30\uCD08",
    lessThanXMinutes: {
        one: "1\uBD84 \uBBF8\uB9CC",
        other: "{{count}}\uBD84 \uBBF8\uB9CC"
    },
    xMinutes: {
        one: "1\uBD84",
        other: "{{count}}\uBD84"
    },
    aboutXHours: {
        one: "\uC57D 1\uC2DC\uAC04",
        other: "\uC57D {{count}}\uC2DC\uAC04"
    },
    xHours: {
        one: "1\uC2DC\uAC04",
        other: "{{count}}\uC2DC\uAC04"
    },
    xDays: {
        one: "1\uC77C",
        other: "{{count}}\uC77C"
    },
    aboutXWeeks: {
        one: "\uC57D 1\uC8FC",
        other: "\uC57D {{count}}\uC8FC"
    },
    xWeeks: {
        one: "1\uC8FC",
        other: "{{count}}\uC8FC"
    },
    aboutXMonths: {
        one: "\uC57D 1\uAC1C\uC6D4",
        other: "\uC57D {{count}}\uAC1C\uC6D4"
    },
    xMonths: {
        one: "1\uAC1C\uC6D4",
        other: "{{count}}\uAC1C\uC6D4"
    },
    aboutXYears: {
        one: "\uC57D 1\uB144",
        other: "\uC57D {{count}}\uB144"
    },
    xYears: {
        one: "1\uB144",
        other: "{{count}}\uB144"
    },
    overXYears: {
        one: "1\uB144 \uC774\uC0C1",
        other: "{{count}}\uB144 \uC774\uC0C1"
    },
    almostXYears: {
        one: "\uAC70\uC758 1\uB144",
        other: "\uAC70\uC758 {{count}}\uB144"
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
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return result + " \uD6C4";
        }
        else {
            return result + " \uC804";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/ko/_lib/formatLong/index.js
var dateFormats = {
    full: "y\uB144 M\uC6D4 d\uC77C EEEE",
    long: "y\uB144 M\uC6D4 d\uC77C",
    medium: "y.MM.dd",
    short: "y.MM.dd"
};
var timeFormats = {
    full: "a H\uC2DC mm\uBD84 ss\uCD08 zzzz",
    long: "a H:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
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
// node_modules/date-fns/esm/locale/ko/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\uC9C0\uB09C' eeee p",
    yesterday: "'\uC5B4\uC81C' p",
    today: "'\uC624\uB298' p",
    tomorrow: "'\uB0B4\uC77C' p",
    nextWeek: "'\uB2E4\uC74C' eeee p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/ko/_lib/localize/index.js
var eraValues = {
    narrow: ["BC", "AD"],
    abbreviated: ["BC", "AD"],
    wide: ["\uAE30\uC6D0\uC804", "\uC11C\uAE30"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1\uBD84\uAE30", "2\uBD84\uAE30", "3\uBD84\uAE30", "4\uBD84\uAE30"]
};
var monthValues = {
    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    abbreviated: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"],
    wide: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"]
};
var dayValues = {
    narrow: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
    short: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
    abbreviated: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
    wide: ["\uC77C\uC694\uC77C", "\uC6D4\uC694\uC77C", "\uD654\uC694\uC77C", "\uC218\uC694\uC77C", "\uBAA9\uC694\uC77C", "\uAE08\uC694\uC77C", "\uD1A0\uC694\uC77C"]
};
var dayPeriodValues = {
    narrow: {
        am: "\uC624\uC804",
        pm: "\uC624\uD6C4",
        midnight: "\uC790\uC815",
        noon: "\uC815\uC624",
        morning: "\uC544\uCE68",
        afternoon: "\uC624\uD6C4",
        evening: "\uC800\uB141",
        night: "\uBC24"
    },
    abbreviated: {
        am: "\uC624\uC804",
        pm: "\uC624\uD6C4",
        midnight: "\uC790\uC815",
        noon: "\uC815\uC624",
        morning: "\uC544\uCE68",
        afternoon: "\uC624\uD6C4",
        evening: "\uC800\uB141",
        night: "\uBC24"
    },
    wide: {
        am: "\uC624\uC804",
        pm: "\uC624\uD6C4",
        midnight: "\uC790\uC815",
        noon: "\uC815\uC624",
        morning: "\uC544\uCE68",
        afternoon: "\uC624\uD6C4",
        evening: "\uC800\uB141",
        night: "\uBC24"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\uC624\uC804",
        pm: "\uC624\uD6C4",
        midnight: "\uC790\uC815",
        noon: "\uC815\uC624",
        morning: "\uC544\uCE68",
        afternoon: "\uC624\uD6C4",
        evening: "\uC800\uB141",
        night: "\uBC24"
    },
    abbreviated: {
        am: "\uC624\uC804",
        pm: "\uC624\uD6C4",
        midnight: "\uC790\uC815",
        noon: "\uC815\uC624",
        morning: "\uC544\uCE68",
        afternoon: "\uC624\uD6C4",
        evening: "\uC800\uB141",
        night: "\uBC24"
    },
    wide: {
        am: "\uC624\uC804",
        pm: "\uC624\uD6C4",
        midnight: "\uC790\uC815",
        noon: "\uC815\uC624",
        morning: "\uC544\uCE68",
        afternoon: "\uC624\uD6C4",
        evening: "\uC800\uB141",
        night: "\uBC24"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    var unit = String(options === null || options === void 0 ? void 0 : options.unit);
    switch (unit) {
        case "minute":
        case "second":
            return String(number);
        case "date":
            return number + "\uC77C";
        default:
            return number + "\uBC88\uC9F8";
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
// node_modules/date-fns/esm/locale/ko/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(일|번째)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(기원전|서기)/i
};
var parseEraPatterns = {
    any: [/^(bc|기원전)/i, /^(ad|서기)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234]사?분기/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^(1[012]|[123456789])/,
    abbreviated: /^(1[012]|[123456789])월/i,
    wide: /^(1[012]|[123456789])월/i
};
var parseMonthPatterns = {
    any: [/^1월?$/, /^2/, /^3/, /^4/, /^5/, /^6/, /^7/, /^8/, /^9/, /^10/, /^11/, /^12/]
};
var matchDayPatterns = {
    narrow: /^[일월화수목금토]/,
    short: /^[일월화수목금토]/,
    abbreviated: /^[일월화수목금토]/,
    wide: /^[일월화수목금토]요일/
};
var parseDayPatterns = {
    any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/]
};
var matchDayPeriodPatterns = {
    any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^(am|오전)/i,
        pm: /^(pm|오후)/i,
        midnight: /^자정/i,
        noon: /^정오/i,
        morning: /^아침/i,
        afternoon: /^오후/i,
        evening: /^저녁/i,
        night: /^밤/i
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
// node_modules/date-fns/esm/locale/ko/index.js
var locale = {
    code: "ko",
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
var ko_default = locale;
export { ko_default };
