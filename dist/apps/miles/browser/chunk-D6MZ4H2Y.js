import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/ka/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        past: "{{count}} \u10EC\u10D0\u10DB\u10D6\u10D4 \u10DC\u10D0\u10D9\u10DA\u10D4\u10D1\u10D8 \u10EE\u10DC\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "{{count}} \u10EC\u10D0\u10DB\u10D6\u10D4 \u10DC\u10D0\u10D9\u10DA\u10D4\u10D1\u10D8",
        future: "{{count}} \u10EC\u10D0\u10DB\u10D6\u10D4 \u10DC\u10D0\u10D9\u10DA\u10D4\u10D1\u10E8\u10D8"
    },
    xSeconds: {
        past: "{{count}} \u10EC\u10D0\u10DB\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "{{count}} \u10EC\u10D0\u10DB\u10D8",
        future: "{{count}} \u10EC\u10D0\u10DB\u10E8\u10D8"
    },
    halfAMinute: {
        past: "\u10DC\u10D0\u10EE\u10D4\u10D5\u10D0\u10E0\u10D8 \u10EC\u10E3\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "\u10DC\u10D0\u10EE\u10D4\u10D5\u10D0\u10E0\u10D8 \u10EC\u10E3\u10D7\u10D8",
        future: "\u10DC\u10D0\u10EE\u10D4\u10D5\u10D0\u10E0\u10D8 \u10EC\u10E3\u10D7\u10E8\u10D8"
    },
    lessThanXMinutes: {
        past: "{{count}} \u10EC\u10E3\u10D7\u10D6\u10D4 \u10DC\u10D0\u10D9\u10DA\u10D4\u10D1\u10D8 \u10EE\u10DC\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "{{count}} \u10EC\u10E3\u10D7\u10D6\u10D4 \u10DC\u10D0\u10D9\u10DA\u10D4\u10D1\u10D8",
        future: "{{count}} \u10EC\u10E3\u10D7\u10D6\u10D4 \u10DC\u10D0\u10D9\u10DA\u10D4\u10D1\u10E8\u10D8"
    },
    xMinutes: {
        past: "{{count}} \u10EC\u10E3\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "{{count}} \u10EC\u10E3\u10D7\u10D8",
        future: "{{count}} \u10EC\u10E3\u10D7\u10E8\u10D8"
    },
    aboutXHours: {
        past: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10E1\u10D0\u10D0\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10E1\u10D0\u10D0\u10D7\u10D8",
        future: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10E1\u10D0\u10D0\u10D7\u10E8\u10D8"
    },
    xHours: {
        past: "{{count}} \u10E1\u10D0\u10D0\u10D7\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "{{count}} \u10E1\u10D0\u10D0\u10D7\u10D8",
        future: "{{count}} \u10E1\u10D0\u10D0\u10D7\u10E8\u10D8"
    },
    xDays: {
        past: "{{count}} \u10D3\u10E6\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "{{count}} \u10D3\u10E6\u10D4",
        future: "{{count}} \u10D3\u10E6\u10D4\u10E8\u10D8"
    },
    aboutXWeeks: {
        past: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10D9\u10D5\u10D8\u10E0\u10D0\u10E1 \u10EC\u10D8\u10DC",
        present: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10D9\u10D5\u10D8\u10E0\u10D0",
        future: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10D9\u10D5\u10D8\u10E0\u10D0\u10E8\u10D8"
    },
    xWeeks: {
        past: "{{count}} \u10D9\u10D5\u10D8\u10E0\u10D0\u10E1 \u10D9\u10D5\u10D8\u10E0\u10D0",
        present: "{{count}} \u10D9\u10D5\u10D8\u10E0\u10D0",
        future: "{{count}} \u10D9\u10D5\u10D8\u10E0\u10D0\u10E8\u10D8"
    },
    aboutXMonths: {
        past: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10D7\u10D5\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10D7\u10D5\u10D4",
        future: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10D7\u10D5\u10D4\u10E8\u10D8"
    },
    xMonths: {
        past: "{{count}} \u10D7\u10D5\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "{{count}} \u10D7\u10D5\u10D4",
        future: "{{count}} \u10D7\u10D5\u10D4\u10E8\u10D8"
    },
    aboutXYears: {
        past: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10EC\u10D4\u10DA\u10D8",
        future: "\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 {{count}} \u10EC\u10D4\u10DA\u10E8\u10D8"
    },
    xYears: {
        past: "{{count}} \u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "{{count}} \u10EC\u10D4\u10DA\u10D8",
        future: "{{count}} \u10EC\u10D4\u10DA\u10E8\u10D8"
    },
    overXYears: {
        past: "{{count}} \u10EC\u10D4\u10DA\u10D6\u10D4 \u10DB\u10D4\u10E2\u10D8 \u10EE\u10DC\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "{{count}} \u10EC\u10D4\u10DA\u10D6\u10D4 \u10DB\u10D4\u10E2\u10D8",
        future: "{{count}} \u10EC\u10D4\u10DA\u10D6\u10D4 \u10DB\u10D4\u10E2\u10D8 \u10EE\u10DC\u10D8\u10E1 \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2"
    },
    almostXYears: {
        past: "\u10D7\u10D8\u10D7\u10E5\u10DB\u10D8\u10E1 {{count}} \u10EC\u10DA\u10D8\u10E1 \u10EC\u10D8\u10DC",
        present: "\u10D7\u10D8\u10D7\u10E5\u10DB\u10D8\u10E1 {{count}} \u10EC\u10D4\u10DA\u10D8",
        future: "\u10D7\u10D8\u10D7\u10E5\u10DB\u10D8\u10E1 {{count}} \u10EC\u10D4\u10DA\u10E8\u10D8"
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    }
    else if (options !== null && options !== void 0 && options.addSuffix && options.comparison && options.comparison > 0) {
        result = tokenValue.future.replace("{{count}}", String(count));
    }
    else if (options !== null && options !== void 0 && options.addSuffix) {
        result = tokenValue.past.replace("{{count}}", String(count));
    }
    else {
        result = tokenValue.present.replace("{{count}}", String(count));
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/ka/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, do MMMM, y",
    long: "do, MMMM, y",
    medium: "d, MMM, y",
    short: "dd/MM/yyyy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} {{time}}'-\u10D6\u10D4'",
    long: "{{date}} {{time}}'-\u10D6\u10D4'",
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
// node_modules/date-fns/esm/locale/ka/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\u10EC\u10D8\u10DC\u10D0' eeee p'-\u10D6\u10D4'",
    yesterday: "'\u10D2\u10E3\u10E8\u10D8\u10DC' p'-\u10D6\u10D4'",
    today: "'\u10D3\u10E6\u10D4\u10E1' p'-\u10D6\u10D4'",
    tomorrow: "'\u10EE\u10D5\u10D0\u10DA' p'-\u10D6\u10D4'",
    nextWeek: "'\u10E8\u10D4\u10DB\u10D3\u10D4\u10D2\u10D8' eeee p'-\u10D6\u10D4'",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/ka/_lib/localize/index.js
var eraValues = {
    narrow: ["\u10E9.\u10EC-\u10DB\u10D3\u10D4", "\u10E9.\u10EC"],
    abbreviated: ["\u10E9\u10D5.\u10EC-\u10DB\u10D3\u10D4", "\u10E9\u10D5.\u10EC"],
    wide: ["\u10E9\u10D5\u10D4\u10DC\u10E1 \u10EC\u10D4\u10DA\u10D7\u10D0\u10E6\u10E0\u10D8\u10EA\u10EE\u10D5\u10D0\u10DB\u10D3\u10D4", "\u10E9\u10D5\u10D4\u10DC\u10D8 \u10EC\u10D4\u10DA\u10D7\u10D0\u10E6\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8\u10D7"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1-\u10DA\u10D8 \u10D9\u10D5", "2-\u10D4 \u10D9\u10D5", "3-\u10D4 \u10D9\u10D5", "4-\u10D4 \u10D9\u10D5"],
    wide: ["1-\u10DA\u10D8 \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8", "2-\u10D4 \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8", "3-\u10D4 \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8", "4-\u10D4 \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8"]
};
var monthValues = {
    narrow: ["\u10D8\u10D0", "\u10D7\u10D4", "\u10DB\u10D0", "\u10D0\u10DE", "\u10DB\u10E1", "\u10D5\u10DC", "\u10D5\u10DA", "\u10D0\u10D2", "\u10E1\u10D4", "\u10DD\u10E5", "\u10DC\u10DD", "\u10D3\u10D4"],
    abbreviated: ["\u10D8\u10D0\u10DC", "\u10D7\u10D4\u10D1", "\u10DB\u10D0\u10E0", "\u10D0\u10DE\u10E0", "\u10DB\u10D0\u10D8", "\u10D8\u10D5\u10DC", "\u10D8\u10D5\u10DA", "\u10D0\u10D2\u10D5", "\u10E1\u10D4\u10E5", "\u10DD\u10E5\u10E2", "\u10DC\u10DD\u10D4", "\u10D3\u10D4\u10D9"],
    wide: ["\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8", "\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8", "\u10DB\u10D0\u10E0\u10E2\u10D8", "\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8", "\u10DB\u10D0\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8", "\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD", "\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8"]
};
var dayValues = {
    narrow: ["\u10D9\u10D5", "\u10DD\u10E0", "\u10E1\u10D0", "\u10DD\u10D7", "\u10EE\u10E3", "\u10DE\u10D0", "\u10E8\u10D0"],
    short: ["\u10D9\u10D5\u10D8", "\u10DD\u10E0\u10E8", "\u10E1\u10D0\u10DB", "\u10DD\u10D7\u10EE", "\u10EE\u10E3\u10D7", "\u10DE\u10D0\u10E0", "\u10E8\u10D0\u10D1"],
    abbreviated: ["\u10D9\u10D5\u10D8", "\u10DD\u10E0\u10E8", "\u10E1\u10D0\u10DB", "\u10DD\u10D7\u10EE", "\u10EE\u10E3\u10D7", "\u10DE\u10D0\u10E0", "\u10E8\u10D0\u10D1"],
    wide: ["\u10D9\u10D5\u10D8\u10E0\u10D0", "\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8", "\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8"]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D4",
        noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4",
        morning: "\u10D3\u10D8\u10DA\u10D0",
        afternoon: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD",
        evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD",
        night: "\u10E6\u10D0\u10DB\u10D4"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D4",
        noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4",
        morning: "\u10D3\u10D8\u10DA\u10D0",
        afternoon: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD",
        evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD",
        night: "\u10E6\u10D0\u10DB\u10D4"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D4",
        noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4",
        morning: "\u10D3\u10D8\u10DA\u10D0",
        afternoon: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD",
        evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD",
        night: "\u10E6\u10D0\u10DB\u10D4"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D8\u10D7",
        noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D8\u10E1\u10D0\u10E1",
        morning: "\u10D3\u10D8\u10DA\u10D8\u10D7",
        afternoon: "\u10DC\u10D0\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4\u10D5\u10E1",
        evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD\u10E1",
        night: "\u10E6\u10D0\u10DB\u10D8\u10D7"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D8\u10D7",
        noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D8\u10E1\u10D0\u10E1",
        morning: "\u10D3\u10D8\u10DA\u10D8\u10D7",
        afternoon: "\u10DC\u10D0\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4\u10D5\u10E1",
        evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD\u10E1",
        night: "\u10E6\u10D0\u10DB\u10D8\u10D7"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "\u10E8\u10E3\u10D0\u10E6\u10D0\u10DB\u10D8\u10D7",
        noon: "\u10E8\u10E3\u10D0\u10D3\u10E6\u10D8\u10E1\u10D0\u10E1",
        morning: "\u10D3\u10D8\u10DA\u10D8\u10D7",
        afternoon: "\u10DC\u10D0\u10E8\u10E3\u10D0\u10D3\u10E6\u10D4\u10D5\u10E1",
        evening: "\u10E1\u10D0\u10E6\u10D0\u10DB\u10DD\u10E1",
        night: "\u10E6\u10D0\u10DB\u10D8\u10D7"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber) {
    var number = Number(dirtyNumber);
    if (number === 1) {
        return number + "-\u10DA\u10D8";
    }
    return number + "-\u10D4";
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
// node_modules/date-fns/esm/locale/ka/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(-ლი|-ე)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(ჩვ?\.წ)/i,
    abbreviated: /^(ჩვ?\.წ)/i,
    wide: /^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე|ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i
};
var parseEraPatterns = {
    any: [/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე)/i, /^(ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]-(ლი|ე)? კვ/i,
    wide: /^[1234]-(ლი|ე)? კვარტალი/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    any: /^(ია|თე|მა|აპ|მს|ვნ|ვლ|აგ|სე|ოქ|ნო|დე)/i
};
var parseMonthPatterns = {
    any: [/^ია/i, /^თ/i, /^მარ/i, /^აპ/i, /^მაი/i, /^ი?ვნ/i, /^ი?ვლ/i, /^აგ/i, /^ს/i, /^ო/i, /^ნ/i, /^დ/i]
};
var matchDayPatterns = {
    narrow: /^(კვ|ორ|სა|ოთ|ხუ|პა|შა)/i,
    short: /^(კვი|ორშ|სამ|ოთხ|ხუთ|პარ|შაბ)/i,
    wide: /^(კვირა|ორშაბათი|სამშაბათი|ოთხშაბათი|ხუთშაბათი|პარასკევი|შაბათი)/i
};
var parseDayPatterns = {
    any: [/^კვ/i, /^ორ/i, /^სა/i, /^ოთ/i, /^ხუ/i, /^პა/i, /^შა/i]
};
var matchDayPeriodPatterns = {
    any: /^([ap]\.?\s?m\.?|შუაღ|დილ)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^შუაღ/i,
        noon: /^შუადღ/i,
        morning: /^დილ/i,
        afternoon: /ნაშუადღევს/i,
        evening: /საღამო/i,
        night: /ღამ/i
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
        defaultMatchWidth: "any",
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
// node_modules/date-fns/esm/locale/ka/index.js
var locale = {
    code: "ka",
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
var ka_default = locale;
export { ka_default };
