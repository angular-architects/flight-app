import { isSameUTCWeek } from "@nf-internal/chunk-WGUJHRU3";
import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/mk/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u043F\u043E\u043C\u0430\u043B\u043A\u0443 \u043E\u0434 \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
        other: "\u043F\u043E\u043C\u0430\u043B\u043A\u0443 \u043E\u0434 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438"
    },
    xSeconds: {
        one: "1 \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
        other: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438"
    },
    halfAMinute: "\u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0430 \u043C\u0438\u043D\u0443\u0442\u0430",
    lessThanXMinutes: {
        one: "\u043F\u043E\u043C\u0430\u043B\u043A\u0443 \u043E\u0434 \u043C\u0438\u043D\u0443\u0442\u0430",
        other: "\u043F\u043E\u043C\u0430\u043B\u043A\u0443 \u043E\u0434 {{count}} \u043C\u0438\u043D\u0443\u0442\u0438"
    },
    xMinutes: {
        one: "1 \u043C\u0438\u043D\u0443\u0442\u0430",
        other: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0438"
    },
    aboutXHours: {
        one: "\u043E\u043A\u043E\u043B\u0443 1 \u0447\u0430\u0441",
        other: "\u043E\u043A\u043E\u043B\u0443 {{count}} \u0447\u0430\u0441\u0430"
    },
    xHours: {
        one: "1 \u0447\u0430\u0441",
        other: "{{count}} \u0447\u0430\u0441\u0430"
    },
    xDays: {
        one: "1 \u0434\u0435\u043D",
        other: "{{count}} \u0434\u0435\u043D\u0430"
    },
    aboutXWeeks: {
        one: "\u043E\u043A\u043E\u043B\u0443 1 \u043D\u0435\u0434\u0435\u043B\u0430",
        other: "\u043E\u043A\u043E\u043B\u0443 {{count}} \u043C\u0435\u0441\u0435\u0446\u0438"
    },
    xWeeks: {
        one: "1 \u043D\u0435\u0434\u0435\u043B\u0430",
        other: "{{count}} \u043D\u0435\u0434\u0435\u043B\u0438"
    },
    aboutXMonths: {
        one: "\u043E\u043A\u043E\u043B\u0443 1 \u043C\u0435\u0441\u0435\u0446",
        other: "\u043E\u043A\u043E\u043B\u0443 {{count}} \u043D\u0435\u0434\u0435\u043B\u0438"
    },
    xMonths: {
        one: "1 \u043C\u0435\u0441\u0435\u0446",
        other: "{{count}} \u043C\u0435\u0441\u0435\u0446\u0438"
    },
    aboutXYears: {
        one: "\u043E\u043A\u043E\u043B\u0443 1 \u0433\u043E\u0434\u0438\u043D\u0430",
        other: "\u043E\u043A\u043E\u043B\u0443 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438"
    },
    xYears: {
        one: "1 \u0433\u043E\u0434\u0438\u043D\u0430",
        other: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0438"
    },
    overXYears: {
        one: "\u043F\u043E\u0432\u0435\u045C\u0435 \u043E\u0434 1 \u0433\u043E\u0434\u0438\u043D\u0430",
        other: "\u043F\u043E\u0432\u0435\u045C\u0435 \u043E\u0434 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438"
    },
    almostXYears: {
        one: "\u0431\u0435\u0437\u043C\u0430\u043B\u043A\u0443 1 \u0433\u043E\u0434\u0438\u043D\u0430",
        other: "\u0431\u0435\u0437\u043C\u0430\u043B\u043A\u0443 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438"
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
            return "\u0437\u0430 " + result;
        }
        else {
            return "\u043F\u0440\u0435\u0434 " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/mk/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, dd MMMM yyyy",
    long: "dd MMMM yyyy",
    medium: "dd MMM yyyy",
    short: "dd/MM/yyyy"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "H:mm"
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
// node_modules/date-fns/esm/locale/mk/_lib/formatRelative/index.js
var weekdays = ["\u043D\u0435\u0434\u0435\u043B\u0430", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0440\u0442\u043E\u043A", "\u043F\u0435\u0442\u043E\u043A", "\u0441\u0430\u0431\u043E\u0442\u0430"];
function _lastWeek(day) {
    var weekday = weekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 6:
            return "'\u043C\u0438\u043D\u0430\u0442\u0430\u0442\u0430 " + weekday + " \u0432\u043E' p";
        case 1:
        case 2:
        case 4:
        case 5:
            return "'\u043C\u0438\u043D\u0430\u0442\u0438\u043E\u0442 " + weekday + " \u0432\u043E' p";
    }
}
function thisWeek(day) {
    var weekday = weekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 6:
            return "'\u043E\u0432\u0430 " + weekday + " \u0432o' p";
        case 1:
        case 2:
        case 4:
        case 5:
            return "'\u043E\u0432\u043E\u0458 " + weekday + " \u0432o' p";
    }
}
function _nextWeek(day) {
    var weekday = weekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 6:
            return "'\u0441\u043B\u0435\u0434\u043D\u0430\u0442\u0430 " + weekday + " \u0432o' p";
        case 1:
        case 2:
        case 4:
        case 5:
            return "'\u0441\u043B\u0435\u0434\u043D\u0438\u043E\u0442 " + weekday + " \u0432o' p";
    }
}
var formatRelativeLocale = {
    lastWeek: function lastWeek(date, baseDate, options) {
        var day = date.getUTCDay();
        if (isSameUTCWeek(date, baseDate, options)) {
            return thisWeek(day);
        }
        else {
            return _lastWeek(day);
        }
    },
    yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432\u043E' p",
    today: "'\u0434\u0435\u043D\u0435\u0441 \u0432\u043E' p",
    tomorrow: "'\u0443\u0442\u0440\u0435 \u0432\u043E' p",
    nextWeek: function nextWeek(date, baseDate, options) {
        var day = date.getUTCDay();
        if (isSameUTCWeek(date, baseDate, options)) {
            return thisWeek(day);
        }
        else {
            return _nextWeek(day);
        }
    },
    other: "P"
};
var formatRelative = function formatRelative2(token, date, baseDate, options) {
    var format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date, baseDate, options);
    }
    return format;
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/mk/_lib/localize/index.js
var eraValues = {
    narrow: ["\u043F\u0440.\u043D.\u0435.", "\u043D.\u0435."],
    abbreviated: ["\u043F\u0440\u0435\u0434 \u043D. \u0435.", "\u043D. \u0435."],
    wide: ["\u043F\u0440\u0435\u0434 \u043D\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430", "\u043D\u0430\u0448\u0430\u0442\u0430 \u0435\u0440\u0430"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1-\u0432\u0438 \u043A\u0432.", "2-\u0440\u0438 \u043A\u0432.", "3-\u0442\u0438 \u043A\u0432.", "4-\u0442\u0438 \u043A\u0432."],
    wide: ["1-\u0432\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0440\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0442\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u0442\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"]
};
var monthValues = {
    abbreviated: ["\u0458\u0430\u043D", "\u0444\u0435\u0432", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043F\u0442", "\u043E\u043A\u0442", "\u043D\u043E\u0435\u043C", "\u0434\u0435\u043A"],
    wide: ["\u0458\u0430\u043D\u0443\u0430\u0440\u0438", "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0458", "\u0458\u0443\u043D\u0438", "\u0458\u0443\u043B\u0438", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438", "\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438", "\u043D\u043E\u0435\u043C\u0432\u0440\u0438", "\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438"]
};
var dayValues = {
    narrow: ["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"],
    short: ["\u043D\u0435", "\u043F\u043E", "\u0432\u0442", "\u0441\u0440", "\u0447\u0435", "\u043F\u0435", "\u0441\u0430"],
    abbreviated: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0432\u0442\u043E", "\u0441\u0440\u0435", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u0430\u0431"],
    wide: ["\u043D\u0435\u0434\u0435\u043B\u0430", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0440\u0442\u043E\u043A", "\u043F\u0435\u0442\u043E\u043A", "\u0441\u0430\u0431\u043E\u0442\u0430"]
};
var dayPeriodValues = {
    wide: {
        am: "\u043F\u0440\u0435\u0442\u043F\u043B\u0430\u0434\u043D\u0435",
        pm: "\u043F\u043E\u043F\u043B\u0430\u0434\u043D\u0435",
        midnight: "\u043F\u043E\u043B\u043D\u043E\u045C",
        noon: "\u043D\u0430\u043F\u043B\u0430\u0434\u043D\u0435",
        morning: "\u043D\u0430\u0443\u0442\u0440\u043E",
        afternoon: "\u043F\u043E\u043F\u043B\u0430\u0434\u043D\u0435",
        evening: "\u043D\u0430\u0432\u0435\u0447\u0435\u0440",
        night: "\u043D\u043E\u045C\u0435"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
            case 1:
                return number + "-\u0432\u0438";
            case 2:
                return number + "-\u0440\u0438";
            case 7:
            case 8:
                return number + "-\u043C\u0438";
        }
    }
    return number + "-\u0442\u0438";
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
// node_modules/date-fns/esm/locale/mk/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(-?[врмт][и])?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^((пр)?н\.?\s?е\.?)/i,
    abbreviated: /^((пр)?н\.?\s?е\.?)/i,
    wide: /^(пред нашата ера|нашата ера)/i
};
var parseEraPatterns = {
    any: [/^п/i, /^н/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234](-?[врт]?и?)? кв.?/i,
    wide: /^[1234](-?[врт]?и?)? квартал/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchDayPatterns = {
    narrow: /^[нпвсч]/i,
    short: /^(не|по|вт|ср|че|пе|са)/i,
    abbreviated: /^(нед|пон|вто|сре|чет|пет|саб)/i,
    wide: /^(недела|понеделник|вторник|среда|четврток|петок|сабота)/i
};
var parseDayPatterns = {
    narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
    any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[аб]/i]
};
var matchMonthPatterns = {
    abbreviated: /^(јан|фев|мар|апр|мај|јун|јул|авг|сеп|окт|ноем|дек)/i,
    wide: /^(јануари|февруари|март|април|мај|јуни|јули|август|септември|октомври|ноември|декември)/i
};
var parseMonthPatterns = {
    any: [/^ја/i, /^Ф/i, /^мар/i, /^ап/i, /^мај/i, /^јун/i, /^јул/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i]
};
var matchDayPeriodPatterns = {
    any: /^(претп|попл|полноќ|утро|пладне|вечер|ноќ)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /претпладне/i,
        pm: /попладне/i,
        midnight: /полноќ/i,
        noon: /напладне/i,
        morning: /наутро/i,
        afternoon: /попладне/i,
        evening: /навечер/i,
        night: /ноќе/i
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
// node_modules/date-fns/esm/locale/mk/index.js
var locale = {
    code: "mk",
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
var mk_default = locale;
export { mk_default };
