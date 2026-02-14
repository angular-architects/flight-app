import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/sr/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: {
            standalone: "\u043C\u0430\u045A\u0435 \u043E\u0434 1 \u0441\u0435\u043A\u0443\u043D\u0434\u0435",
            withPrepositionAgo: "\u043C\u0430\u045A\u0435 \u043E\u0434 1 \u0441\u0435\u043A\u0443\u043D\u0434\u0435",
            withPrepositionIn: "\u043C\u0430\u045A\u0435 \u043E\u0434 1 \u0441\u0435\u043A\u0443\u043D\u0434\u0443"
        },
        dual: "\u043C\u0430\u045A\u0435 \u043E\u0434 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0435",
        other: "\u043C\u0430\u045A\u0435 \u043E\u0434 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438"
    },
    xSeconds: {
        one: {
            standalone: "1 \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
            withPrepositionAgo: "1 \u0441\u0435\u043A\u0443\u043D\u0434\u0435",
            withPrepositionIn: "1 \u0441\u0435\u043A\u0443\u043D\u0434\u0443"
        },
        dual: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0435",
        other: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438"
    },
    halfAMinute: "\u043F\u043E\u043B\u0430 \u043C\u0438\u043D\u0443\u0442\u0435",
    lessThanXMinutes: {
        one: {
            standalone: "\u043C\u0430\u045A\u0435 \u043E\u0434 1 \u043C\u0438\u043D\u0443\u0442\u0435",
            withPrepositionAgo: "\u043C\u0430\u045A\u0435 \u043E\u0434 1 \u043C\u0438\u043D\u0443\u0442\u0435",
            withPrepositionIn: "\u043C\u0430\u045A\u0435 \u043E\u0434 1 \u043C\u0438\u043D\u0443\u0442\u0443"
        },
        dual: "\u043C\u0430\u045A\u0435 \u043E\u0434 {{count}} \u043C\u0438\u043D\u0443\u0442\u0435",
        other: "\u043C\u0430\u045A\u0435 \u043E\u0434 {{count}} \u043C\u0438\u043D\u0443\u0442\u0430"
    },
    xMinutes: {
        one: {
            standalone: "1 \u043C\u0438\u043D\u0443\u0442\u0430",
            withPrepositionAgo: "1 \u043C\u0438\u043D\u0443\u0442\u0435",
            withPrepositionIn: "1 \u043C\u0438\u043D\u0443\u0442\u0443"
        },
        dual: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0435",
        other: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0430"
    },
    aboutXHours: {
        one: {
            standalone: "\u043E\u043A\u043E 1 \u0441\u0430\u0442",
            withPrepositionAgo: "\u043E\u043A\u043E 1 \u0441\u0430\u0442",
            withPrepositionIn: "\u043E\u043A\u043E 1 \u0441\u0430\u0442"
        },
        dual: "\u043E\u043A\u043E {{count}} \u0441\u0430\u0442\u0430",
        other: "\u043E\u043A\u043E {{count}} \u0441\u0430\u0442\u0438"
    },
    xHours: {
        one: {
            standalone: "1 \u0441\u0430\u0442",
            withPrepositionAgo: "1 \u0441\u0430\u0442",
            withPrepositionIn: "1 \u0441\u0430\u0442"
        },
        dual: "{{count}} \u0441\u0430\u0442\u0430",
        other: "{{count}} \u0441\u0430\u0442\u0438"
    },
    xDays: {
        one: {
            standalone: "1 \u0434\u0430\u043D",
            withPrepositionAgo: "1 \u0434\u0430\u043D",
            withPrepositionIn: "1 \u0434\u0430\u043D"
        },
        dual: "{{count}} \u0434\u0430\u043D\u0430",
        other: "{{count}} \u0434\u0430\u043D\u0430"
    },
    aboutXWeeks: {
        one: {
            standalone: "\u043E\u043A\u043E 1 \u043D\u0435\u0434\u0435\u0459\u0443",
            withPrepositionAgo: "\u043E\u043A\u043E 1 \u043D\u0435\u0434\u0435\u0459\u0443",
            withPrepositionIn: "\u043E\u043A\u043E 1 \u043D\u0435\u0434\u0435\u0459\u0443"
        },
        dual: "\u043E\u043A\u043E {{count}} \u043D\u0435\u0434\u0435\u0459\u0435",
        other: "\u043E\u043A\u043E {{count}} \u043D\u0435\u0434\u0435\u0459\u0435"
    },
    xWeeks: {
        one: {
            standalone: "1 \u043D\u0435\u0434\u0435\u0459\u0443",
            withPrepositionAgo: "1 \u043D\u0435\u0434\u0435\u0459\u0443",
            withPrepositionIn: "1 \u043D\u0435\u0434\u0435\u0459\u0443"
        },
        dual: "{{count}} \u043D\u0435\u0434\u0435\u0459\u0435",
        other: "{{count}} \u043D\u0435\u0434\u0435\u0459\u0435"
    },
    aboutXMonths: {
        one: {
            standalone: "\u043E\u043A\u043E 1 \u043C\u0435\u0441\u0435\u0446",
            withPrepositionAgo: "\u043E\u043A\u043E 1 \u043C\u0435\u0441\u0435\u0446",
            withPrepositionIn: "\u043E\u043A\u043E 1 \u043C\u0435\u0441\u0435\u0446"
        },
        dual: "\u043E\u043A\u043E {{count}} \u043C\u0435\u0441\u0435\u0446\u0430",
        other: "\u043E\u043A\u043E {{count}} \u043C\u0435\u0441\u0435\u0446\u0438"
    },
    xMonths: {
        one: {
            standalone: "1 \u043C\u0435\u0441\u0435\u0446",
            withPrepositionAgo: "1 \u043C\u0435\u0441\u0435\u0446",
            withPrepositionIn: "1 \u043C\u0435\u0441\u0435\u0446"
        },
        dual: "{{count}} \u043C\u0435\u0441\u0435\u0446\u0430",
        other: "{{count}} \u043C\u0435\u0441\u0435\u0446\u0438"
    },
    aboutXYears: {
        one: {
            standalone: "\u043E\u043A\u043E 1 \u0433\u043E\u0434\u0438\u043D\u0443",
            withPrepositionAgo: "\u043E\u043A\u043E 1 \u0433\u043E\u0434\u0438\u043D\u0443",
            withPrepositionIn: "\u043E\u043A\u043E 1 \u0433\u043E\u0434\u0438\u043D\u0443"
        },
        dual: "\u043E\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0435",
        other: "\u043E\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0430"
    },
    xYears: {
        one: {
            standalone: "1 \u0433\u043E\u0434\u0438\u043D\u0430",
            withPrepositionAgo: "1 \u0433\u043E\u0434\u0438\u043D\u0435",
            withPrepositionIn: "1 \u0433\u043E\u0434\u0438\u043D\u0443"
        },
        dual: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0435",
        other: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0430"
    },
    overXYears: {
        one: {
            standalone: "\u043F\u0440\u0435\u043A\u043E 1 \u0433\u043E\u0434\u0438\u043D\u0443",
            withPrepositionAgo: "\u043F\u0440\u0435\u043A\u043E 1 \u0433\u043E\u0434\u0438\u043D\u0443",
            withPrepositionIn: "\u043F\u0440\u0435\u043A\u043E 1 \u0433\u043E\u0434\u0438\u043D\u0443"
        },
        dual: "\u043F\u0440\u0435\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0435",
        other: "\u043F\u0440\u0435\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0430"
    },
    almostXYears: {
        one: {
            standalone: "\u0433\u043E\u0442\u043E\u0432\u043E 1 \u0433\u043E\u0434\u0438\u043D\u0443",
            withPrepositionAgo: "\u0433\u043E\u0442\u043E\u0432\u043E 1 \u0433\u043E\u0434\u0438\u043D\u0443",
            withPrepositionIn: "\u0433\u043E\u0442\u043E\u0432\u043E 1 \u0433\u043E\u0434\u0438\u043D\u0443"
        },
        dual: "\u0433\u043E\u0442\u043E\u0432\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0435",
        other: "\u0433\u043E\u0442\u043E\u0432\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0430"
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    }
    else if (count === 1) {
        if (options !== null && options !== void 0 && options.addSuffix) {
            if (options.comparison && options.comparison > 0) {
                result = tokenValue.one.withPrepositionIn;
            }
            else {
                result = tokenValue.one.withPrepositionAgo;
            }
        }
        else {
            result = tokenValue.one.standalone;
        }
    }
    else if (count % 10 > 1 && count % 10 < 5 &&
        // if last digit is between 2 and 4
        String(count).substr(-2, 1) !== "1") {
        result = tokenValue.dual.replace("{{count}}", String(count));
    }
    else {
        result = tokenValue.other.replace("{{count}}", String(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "\u0437\u0430 " + result;
        }
        else {
            return "\u043F\u0440\u0435 " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/sr/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d. MMMM yyyy.",
    long: "d. MMMM yyyy.",
    medium: "d. MMM yy.",
    short: "dd. MM. yy."
};
var timeFormats = {
    full: "HH:mm:ss (zzzz)",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} '\u0443' {{time}}",
    long: "{{date}} '\u0443' {{time}}",
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
// node_modules/date-fns/esm/locale/sr/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: function lastWeek(date) {
        var day = date.getUTCDay();
        switch (day) {
            case 0:
                return "'\u043F\u0440\u043E\u0448\u043B\u0435 \u043D\u0435\u0434\u0435\u0459\u0435 \u0443' p";
            case 3:
                return "'\u043F\u0440\u043E\u0448\u043B\u0435 \u0441\u0440\u0435\u0434\u0435 \u0443' p";
            case 6:
                return "'\u043F\u0440\u043E\u0448\u043B\u0435 \u0441\u0443\u0431\u043E\u0442\u0435 \u0443' p";
            default:
                return "'\u043F\u0440\u043E\u0448\u043B\u0438' EEEE '\u0443' p";
        }
    },
    yesterday: "'\u0458\u0443\u0447\u0435 \u0443' p",
    today: "'\u0434\u0430\u043D\u0430\u0441 \u0443' p",
    tomorrow: "'\u0441\u0443\u0442\u0440\u0430 \u0443' p",
    nextWeek: function nextWeek(date) {
        var day = date.getUTCDay();
        switch (day) {
            case 0:
                return "'\u0441\u043B\u0435\u0434\u0435\u045B\u0435 \u043D\u0435\u0434\u0435\u0459\u0435 \u0443' p";
            case 3:
                return "'\u0441\u043B\u0435\u0434\u0435\u045B\u0443 \u0441\u0440\u0435\u0434\u0443 \u0443' p";
            case 6:
                return "'\u0441\u043B\u0435\u0434\u0435\u045B\u0443 \u0441\u0443\u0431\u043E\u0442\u0443 \u0443' p";
            default:
                return "'\u0441\u043B\u0435\u0434\u0435\u045B\u0438' EEEE '\u0443' p";
        }
    },
    other: "P"
};
var formatRelative = function formatRelative2(token, date, _baseDate, _options) {
    var format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date);
    }
    return format;
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/sr/_lib/localize/index.js
var eraValues = {
    narrow: ["\u043F\u0440.\u043D.\u0435.", "\u0410\u0414"],
    abbreviated: ["\u043F\u0440. \u0425\u0440.", "\u043F\u043E. \u0425\u0440."],
    wide: ["\u041F\u0440\u0435 \u0425\u0440\u0438\u0441\u0442\u0430", "\u041F\u043E\u0441\u043B\u0435 \u0425\u0440\u0438\u0441\u0442\u0430"]
};
var quarterValues = {
    narrow: ["1.", "2.", "3.", "4."],
    abbreviated: ["1. \u043A\u0432.", "2. \u043A\u0432.", "3. \u043A\u0432.", "4. \u043A\u0432."],
    wide: ["1. \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2. \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3. \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4. \u043A\u0432\u0430\u0440\u0442\u0430\u043B"]
};
var monthValues = {
    narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
    abbreviated: ["\u0458\u0430\u043D", "\u0444\u0435\u0431", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043F", "\u043E\u043A\u0442", "\u043D\u043E\u0432", "\u0434\u0435\u0446"],
    wide: ["\u0458\u0430\u043D\u0443\u0430\u0440", "\u0444\u0435\u0431\u0440\u0443\u0430\u0440", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440", "\u043E\u043A\u0442\u043E\u0431\u0430\u0440", "\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440", "\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440"]
};
var formattingMonthValues = {
    narrow: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."],
    abbreviated: ["\u0458\u0430\u043D", "\u0444\u0435\u0431", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043F", "\u043E\u043A\u0442", "\u043D\u043E\u0432", "\u0434\u0435\u0446"],
    wide: ["\u0458\u0430\u043D\u0443\u0430\u0440", "\u0444\u0435\u0431\u0440\u0443\u0430\u0440", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440", "\u043E\u043A\u0442\u043E\u0431\u0430\u0440", "\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440", "\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440"]
};
var dayValues = {
    narrow: ["\u041D", "\u041F", "\u0423", "\u0421", "\u0427", "\u041F", "\u0421"],
    short: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0443\u0442\u043E", "\u0441\u0440\u0435", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u0443\u0431"],
    abbreviated: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0443\u0442\u043E", "\u0441\u0440\u0435", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u0443\u0431"],
    wide: ["\u043D\u0435\u0434\u0435\u0459\u0430", "\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A", "\u0443\u0442\u043E\u0440\u0430\u043A", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A", "\u043F\u0435\u0442\u0430\u043A", "\u0441\u0443\u0431\u043E\u0442\u0430"]
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u0410\u041C",
        pm: "\u041F\u041C",
        midnight: "\u043F\u043E\u043D\u043E\u045B",
        noon: "\u043F\u043E\u0434\u043D\u0435",
        morning: "\u0443\u0458\u0443\u0442\u0440\u0443",
        afternoon: "\u043F\u043E\u043F\u043E\u0434\u043D\u0435",
        evening: "\u0443\u0432\u0435\u0447\u0435",
        night: "\u043D\u043E\u045B\u0443"
    },
    abbreviated: {
        am: "\u0410\u041C",
        pm: "\u041F\u041C",
        midnight: "\u043F\u043E\u043D\u043E\u045B",
        noon: "\u043F\u043E\u0434\u043D\u0435",
        morning: "\u0443\u0458\u0443\u0442\u0440\u0443",
        afternoon: "\u043F\u043E\u043F\u043E\u0434\u043D\u0435",
        evening: "\u0443\u0432\u0435\u0447\u0435",
        night: "\u043D\u043E\u045B\u0443"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "\u043F\u043E\u043D\u043E\u045B",
        noon: "\u043F\u043E\u0434\u043D\u0435",
        morning: "\u0443\u0458\u0443\u0442\u0440\u0443",
        afternoon: "\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u043D\u0435",
        evening: "\u0443\u0432\u0435\u0447\u0435",
        night: "\u043D\u043E\u045B\u0443"
    }
};
var dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "\u043F\u043E\u043D\u043E\u045B",
        noon: "\u043F\u043E\u0434\u043D\u0435",
        morning: "\u0443\u0458\u0443\u0442\u0440\u0443",
        afternoon: "\u043F\u043E\u043F\u043E\u0434\u043D\u0435",
        evening: "\u0443\u0432\u0435\u0447\u0435",
        night: "\u043D\u043E\u045B\u0443"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "\u043F\u043E\u043D\u043E\u045B",
        noon: "\u043F\u043E\u0434\u043D\u0435",
        morning: "\u0443\u0458\u0443\u0442\u0440\u0443",
        afternoon: "\u043F\u043E\u043F\u043E\u0434\u043D\u0435",
        evening: "\u0443\u0432\u0435\u0447\u0435",
        night: "\u043D\u043E\u045B\u0443"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "\u043F\u043E\u043D\u043E\u045B",
        noon: "\u043F\u043E\u0434\u043D\u0435",
        morning: "\u0443\u0458\u0443\u0442\u0440\u0443",
        afternoon: "\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u043D\u0435",
        evening: "\u0443\u0432\u0435\u0447\u0435",
        night: "\u043D\u043E\u045B\u0443"
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
        defaultWidth: "wide",
        formattingValues: formattingMonthValues,
        defaultFormattingWidth: "wide"
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
// node_modules/date-fns/esm/locale/sr/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(пр\.н\.е\.|АД)/i,
    abbreviated: /^(пр\.\s?Хр\.|по\.\s?Хр\.)/i,
    wide: /^(Пре Христа|пре нове ере|После Христа|нова ера)/i
};
var parseEraPatterns = {
    any: [/^пр/i, /^(по|нова)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]\.\s?кв\.?/i,
    wide: /^[1234]\. квартал/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^(10|11|12|[123456789])\./i,
    abbreviated: /^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i,
    wide: /^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i
};
var parseMonthPatterns = {
    narrow: [/^1/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^7/i, /^8/i, /^9/i, /^10/i, /^11/i, /^12/i],
    any: [/^ја/i, /^ф/i, /^мар/i, /^ап/i, /^мај/i, /^јун/i, /^јул/i, /^авг/i, /^с/i, /^о/i, /^н/i, /^д/i]
};
var matchDayPatterns = {
    narrow: /^[пусчн]/i,
    short: /^(нед|пон|уто|сре|чет|пет|суб)/i,
    abbreviated: /^(нед|пон|уто|сре|чет|пет|суб)/i,
    wide: /^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i
};
var parseDayPatterns = {
    narrow: [/^п/i, /^у/i, /^с/i, /^ч/i, /^п/i, /^с/i, /^н/i],
    any: [/^нед/i, /^пон/i, /^уто/i, /^сре/i, /^чет/i, /^пет/i, /^суб/i]
};
var matchDayPeriodPatterns = {
    any: /^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^поно/i,
        noon: /^под/i,
        morning: /ујутру/i,
        afternoon: /(после\s|по)+подне/i,
        evening: /(увече)/i,
        night: /(ноћу)/i
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
// node_modules/date-fns/esm/locale/sr/index.js
var locale = {
    code: "sr",
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
var sr_default = locale;
export { sr_default };
