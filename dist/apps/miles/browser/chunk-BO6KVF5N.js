import { isSameUTCWeek } from "@nf-internal/chunk-WGUJHRU3";
import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
// node_modules/date-fns/esm/locale/bg/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u043F\u043E-\u043C\u0430\u043B\u043A\u043E \u043E\u0442 \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
        other: "\u043F\u043E-\u043C\u0430\u043B\u043A\u043E \u043E\u0442 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438"
    },
    xSeconds: {
        one: "1 \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
        other: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438"
    },
    halfAMinute: "\u043F\u043E\u043B\u043E\u0432\u0438\u043D \u043C\u0438\u043D\u0443\u0442\u0430",
    lessThanXMinutes: {
        one: "\u043F\u043E-\u043C\u0430\u043B\u043A\u043E \u043E\u0442 \u043C\u0438\u043D\u0443\u0442\u0430",
        other: "\u043F\u043E-\u043C\u0430\u043B\u043A\u043E \u043E\u0442 {{count}} \u043C\u0438\u043D\u0443\u0442\u0438"
    },
    xMinutes: {
        one: "1 \u043C\u0438\u043D\u0443\u0442\u0430",
        other: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0438"
    },
    aboutXHours: {
        one: "\u043E\u043A\u043E\u043B\u043E \u0447\u0430\u0441",
        other: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u0430"
    },
    xHours: {
        one: "1 \u0447\u0430\u0441",
        other: "{{count}} \u0447\u0430\u0441\u0430"
    },
    xDays: {
        one: "1 \u0434\u0435\u043D",
        other: "{{count}} \u0434\u043D\u0438"
    },
    aboutXWeeks: {
        one: "\u043E\u043A\u043E\u043B\u043E \u0441\u0435\u0434\u043C\u0438\u0446\u0430",
        other: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0441\u0435\u0434\u043C\u0438\u0446\u0438"
    },
    xWeeks: {
        one: "1 \u0441\u0435\u0434\u043C\u0438\u0446\u0430",
        other: "{{count}} \u0441\u0435\u0434\u043C\u0438\u0446\u0438"
    },
    aboutXMonths: {
        one: "\u043E\u043A\u043E\u043B\u043E \u043C\u0435\u0441\u0435\u0446",
        other: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u0435\u0446\u0430"
    },
    xMonths: {
        one: "1 \u043C\u0435\u0441\u0435\u0446",
        other: "{{count}} \u043C\u0435\u0441\u0435\u0446\u0430"
    },
    aboutXYears: {
        one: "\u043E\u043A\u043E\u043B\u043E \u0433\u043E\u0434\u0438\u043D\u0430",
        other: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0438"
    },
    xYears: {
        one: "1 \u0433\u043E\u0434\u0438\u043D\u0430",
        other: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0438"
    },
    overXYears: {
        one: "\u043D\u0430\u0434 \u0433\u043E\u0434\u0438\u043D\u0430",
        other: "\u043D\u0430\u0434 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438"
    },
    almostXYears: {
        one: "\u043F\u043E\u0447\u0442\u0438 \u0433\u043E\u0434\u0438\u043D\u0430",
        other: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438"
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
            return "\u0441\u043B\u0435\u0434 " + result;
        }
        else {
            return "\u043F\u0440\u0435\u0434\u0438 " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/bg/_lib/formatLong/index.js
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
// node_modules/date-fns/esm/locale/bg/_lib/formatRelative/index.js
var weekdays = ["\u043D\u0435\u0434\u0435\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u044F\u0434\u0430", "\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A", "\u043F\u0435\u0442\u044A\u043A", "\u0441\u044A\u0431\u043E\u0442\u0430"];
function lastWeek(day) {
    var weekday = weekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 6:
            return "'\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430 " + weekday + " \u0432' p";
        case 1:
        case 2:
        case 4:
        case 5:
            return "'\u043C\u0438\u043D\u0430\u043B\u0438\u044F " + weekday + " \u0432' p";
    }
}
function thisWeek(day) {
    var weekday = weekdays[day];
    if (day === 2) {
        return "'\u0432\u044A\u0432 " + weekday + " \u0432' p";
    }
    else {
        return "'\u0432 " + weekday + " \u0432' p";
    }
}
function nextWeek(day) {
    var weekday = weekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 6:
            return "'\u0441\u043B\u0435\u0434\u0432\u0430\u0449\u0430\u0442\u0430 " + weekday + " \u0432' p";
        case 1:
        case 2:
        case 4:
        case 5:
            return "'\u0441\u043B\u0435\u0434\u0432\u0430\u0449\u0438\u044F " + weekday + " \u0432' p";
    }
}
var lastWeekFormatToken = function lastWeekFormatToken2(dirtyDate, baseDate, options) {
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    if (isSameUTCWeek(date, baseDate, options)) {
        return thisWeek(day);
    }
    else {
        return lastWeek(day);
    }
};
var nextWeekFormatToken = function nextWeekFormatToken2(dirtyDate, baseDate, options) {
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    if (isSameUTCWeek(date, baseDate, options)) {
        return thisWeek(day);
    }
    else {
        return nextWeek(day);
    }
};
var formatRelativeLocale = {
    lastWeek: lastWeekFormatToken,
    yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
    today: "'\u0434\u043D\u0435\u0441 \u0432' p",
    tomorrow: "'\u0443\u0442\u0440\u0435 \u0432' p",
    nextWeek: nextWeekFormatToken,
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
// node_modules/date-fns/esm/locale/bg/_lib/localize/index.js
var eraValues = {
    narrow: ["\u043F\u0440.\u043D.\u0435.", "\u043D.\u0435."],
    abbreviated: ["\u043F\u0440\u0435\u0434\u0438 \u043D. \u0435.", "\u043D. \u0435."],
    wide: ["\u043F\u0440\u0435\u0434\u0438 \u043D\u043E\u0432\u0430\u0442\u0430 \u0435\u0440\u0430", "\u043D\u043E\u0432\u0430\u0442\u0430 \u0435\u0440\u0430"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1-\u0432\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "2-\u0440\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "3-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441.", "4-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441."],
    wide: ["1-\u0432\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435", "2-\u0440\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435", "3-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435", "4-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435"]
};
var monthValues = {
    abbreviated: ["\u044F\u043D\u0443", "\u0444\u0435\u0432", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0439", "\u044E\u043D\u0438", "\u044E\u043B\u0438", "\u0430\u0432\u0433", "\u0441\u0435\u043F", "\u043E\u043A\u0442", "\u043D\u043E\u0435", "\u0434\u0435\u043A"],
    wide: ["\u044F\u043D\u0443\u0430\u0440\u0438", "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0439", "\u044E\u043D\u0438", "\u044E\u043B\u0438", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438", "\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438", "\u043D\u043E\u0435\u043C\u0432\u0440\u0438", "\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438"]
};
var dayValues = {
    narrow: ["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"],
    short: ["\u043D\u0434", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"],
    abbreviated: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0432\u0442\u043E", "\u0441\u0440\u044F", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u044A\u0431"],
    wide: ["\u043D\u0435\u0434\u0435\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u044F\u0434\u0430", "\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A", "\u043F\u0435\u0442\u044A\u043A", "\u0441\u044A\u0431\u043E\u0442\u0430"]
};
var dayPeriodValues = {
    wide: {
        am: "\u043F\u0440\u0435\u0434\u0438 \u043E\u0431\u044F\u0434",
        pm: "\u0441\u043B\u0435\u0434 \u043E\u0431\u044F\u0434",
        midnight: "\u0432 \u043F\u043E\u043B\u0443\u043D\u043E\u0449",
        noon: "\u043D\u0430 \u043E\u0431\u044F\u0434",
        morning: "\u0441\u0443\u0442\u0440\u0438\u043D\u0442\u0430",
        afternoon: "\u0441\u043B\u0435\u0434\u043E\u0431\u0435\u0434",
        evening: "\u0432\u0435\u0447\u0435\u0440\u0442\u0430",
        night: "\u043F\u0440\u0435\u0437 \u043D\u043E\u0449\u0442\u0430"
    }
};
function isFeminine(unit) {
    return unit === "year" || unit === "week" || unit === "minute" || unit === "second";
}
function isNeuter(unit) {
    return unit === "quarter";
}
function numberWithSuffix(number, unit, masculine, feminine, neuter) {
    var suffix = isNeuter(unit) ? neuter : isFeminine(unit) ? feminine : masculine;
    return number + "-" + suffix;
}
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    var unit = options === null || options === void 0 ? void 0 : options.unit;
    if (number === 0) {
        return numberWithSuffix(0, unit, "\u0435\u0432", "\u0435\u0432\u0430", "\u0435\u0432\u043E");
    }
    else if (number % 1e3 === 0) {
        return numberWithSuffix(number, unit, "\u0435\u043D", "\u043D\u0430", "\u043D\u043E");
    }
    else if (number % 100 === 0) {
        return numberWithSuffix(number, unit, "\u0442\u0435\u043D", "\u0442\u043D\u0430", "\u0442\u043D\u043E");
    }
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
            case 1:
                return numberWithSuffix(number, unit, "\u0432\u0438", "\u0432\u0430", "\u0432\u043E");
            case 2:
                return numberWithSuffix(number, unit, "\u0440\u0438", "\u0440\u0430", "\u0440\u043E");
            case 7:
            case 8:
                return numberWithSuffix(number, unit, "\u043C\u0438", "\u043C\u0430", "\u043C\u043E");
        }
    }
    return numberWithSuffix(number, unit, "\u0442\u0438", "\u0442\u0430", "\u0442\u043E");
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
// node_modules/date-fns/esm/locale/bg/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^((пр)?н\.?\s?е\.?)/i,
    abbreviated: /^((пр)?н\.?\s?е\.?)/i,
    wide: /^(преди новата ера|новата ера|нова ера)/i
};
var parseEraPatterns = {
    any: [/^п/i, /^н/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234](-?[врт]?o?)? тримес.?/i,
    wide: /^[1234](-?[врт]?о?)? тримесечие/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchDayPatterns = {
    narrow: /^[нпвсч]/i,
    short: /^(нд|пн|вт|ср|чт|пт|сб)/i,
    abbreviated: /^(нед|пон|вто|сря|чет|пет|съб)/i,
    wide: /^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i
};
var parseDayPatterns = {
    narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
    any: [/^н[ед]/i, /^п[он]/i, /^вт/i, /^ср/i, /^ч[ет]/i, /^п[ет]/i, /^с[ъб]/i]
};
var matchMonthPatterns = {
    abbreviated: /^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,
    wide: /^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i
};
var parseMonthPatterns = {
    any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^юн/i, /^юл/i, /^ав/i, /^се/i, /^окт/i, /^но/i, /^де/i]
};
var matchDayPeriodPatterns = {
    any: /^(преди о|след о|в по|на о|през|веч|сут|следо)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^преди о/i,
        pm: /^след о/i,
        midnight: /^в пол/i,
        noon: /^на об/i,
        morning: /^сут/i,
        afternoon: /^следо/i,
        evening: /^веч/i,
        night: /^през н/i
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
// node_modules/date-fns/esm/locale/bg/index.js
var locale = {
    code: "bg",
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
var bg_default = locale;
export { bg_default };
