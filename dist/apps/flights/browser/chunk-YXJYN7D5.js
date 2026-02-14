import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/uz-Cyrl/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "1 \u0441\u043E\u043D\u0438\u044F\u0434\u0430\u043D \u043A\u0430\u043C",
        other: "{{count}} \u0441\u043E\u043D\u0438\u044F\u0434\u0430\u043D \u043A\u0430\u043C"
    },
    xSeconds: {
        one: "1 \u0441\u043E\u043D\u0438\u044F",
        other: "{{count}} \u0441\u043E\u043D\u0438\u044F"
    },
    halfAMinute: "\u044F\u0440\u0438\u043C \u0434\u0430\u049B\u0438\u049B\u0430",
    lessThanXMinutes: {
        one: "1 \u0434\u0430\u049B\u0438\u049B\u0430\u0434\u0430\u043D \u043A\u0430\u043C",
        other: "{{count}} \u0434\u0430\u049B\u0438\u049B\u0430\u0434\u0430\u043D \u043A\u0430\u043C"
    },
    xMinutes: {
        one: "1 \u0434\u0430\u049B\u0438\u049B\u0430",
        other: "{{count}} \u0434\u0430\u049B\u0438\u049B\u0430"
    },
    aboutXHours: {
        one: "\u0442\u0430\u0445\u043C\u0438\u043D\u0430\u043D 1 \u0441\u043E\u0430\u0442",
        other: "\u0442\u0430\u0445\u043C\u0438\u043D\u0430\u043D {{count}} \u0441\u043E\u0430\u0442"
    },
    xHours: {
        one: "1 \u0441\u043E\u0430\u0442",
        other: "{{count}} \u0441\u043E\u0430\u0442"
    },
    xDays: {
        one: "1 \u043A\u0443\u043D",
        other: "{{count}} \u043A\u0443\u043D"
    },
    aboutXWeeks: {
        one: "\u0442\u0430\u0445\u043C\u0438\u043D\u0430\u043D 1 \u0445\u0430\u0444\u0442\u0430",
        other: "\u0442\u0430\u0445\u043C\u0438\u043D\u0430\u043D {{count}} \u0445\u0430\u0444\u0442\u0430"
    },
    xWeeks: {
        one: "1 \u0445\u0430\u0444\u0442\u0430",
        other: "{{count}} \u0445\u0430\u0444\u0442\u0430"
    },
    aboutXMonths: {
        one: "\u0442\u0430\u0445\u043C\u0438\u043D\u0430\u043D 1 \u043E\u0439",
        other: "\u0442\u0430\u0445\u043C\u0438\u043D\u0430\u043D {{count}} \u043E\u0439"
    },
    xMonths: {
        one: "1 \u043E\u0439",
        other: "{{count}} \u043E\u0439"
    },
    aboutXYears: {
        one: "\u0442\u0430\u0445\u043C\u0438\u043D\u0430\u043D 1 \u0439\u0438\u043B",
        other: "\u0442\u0430\u0445\u043C\u0438\u043D\u0430\u043D {{count}} \u0439\u0438\u043B"
    },
    xYears: {
        one: "1 \u0439\u0438\u043B",
        other: "{{count}} \u0439\u0438\u043B"
    },
    overXYears: {
        one: "1 \u0439\u0438\u043B\u0434\u0430\u043D \u043A\u045E\u043F",
        other: "{{count}} \u0439\u0438\u043B\u0434\u0430\u043D \u043A\u045E\u043F"
    },
    almostXYears: {
        one: "\u0434\u0435\u044F\u0440\u043B\u0438 1 \u0439\u0438\u043B",
        other: "\u0434\u0435\u044F\u0440\u043B\u0438 {{count}} \u0439\u0438\u043B"
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
            return result + "\u0434\u0430\u043D \u043A\u0435\u0439\u0438\u043D";
        }
        else {
            return result + " \u043E\u043B\u0434\u0438\u043D";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/uz-Cyrl/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, do MMMM, y",
    long: "do MMMM, y",
    medium: "d MMM, y",
    short: "dd/MM/yyyy"
};
var timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
var dateTimeFormats = {
    any: "{{date}}, {{time}}"
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
// node_modules/date-fns/esm/locale/uz-Cyrl/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\u045E\u0442\u0433\u0430\u043D' eeee p '\u0434\u0430'",
    yesterday: "'\u043A\u0435\u0447\u0430' p '\u0434\u0430'",
    today: "'\u0431\u0443\u0433\u0443\u043D' p '\u0434\u0430'",
    tomorrow: "'\u044D\u0440\u0442\u0430\u0433\u0430' p '\u0434\u0430'",
    nextWeek: "eeee p '\u0434\u0430'",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/uz-Cyrl/_lib/localize/index.js
var eraValues = {
    narrow: ["\u041C.\u0410", "\u041C"],
    abbreviated: ["\u041C.\u0410", "\u041C"],
    wide: ["\u041C\u0438\u043B\u043E\u0434\u0434\u0430\u043D \u0410\u0432\u0432\u0430\u043B\u0433\u0438", "\u041C\u0438\u043B\u043E\u0434\u0438\u0439"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1-\u0447\u043E\u0440.", "2-\u0447\u043E\u0440.", "3-\u0447\u043E\u0440.", "4-\u0447\u043E\u0440."],
    wide: ["1-\u0447\u043E\u0440\u0430\u043A", "2-\u0447\u043E\u0440\u0430\u043A", "3-\u0447\u043E\u0440\u0430\u043A", "4-\u0447\u043E\u0440\u0430\u043A"]
};
var monthValues = {
    narrow: ["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"],
    abbreviated: ["\u044F\u043D\u0432", "\u0444\u0435\u0432", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0439", "\u0438\u044E\u043D", "\u0438\u044E\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043D", "\u043E\u043A\u0442", "\u043D\u043E\u044F", "\u0434\u0435\u043A"],
    wide: ["\u044F\u043D\u0432\u0430\u0440", "\u0444\u0435\u0432\u0440\u0430\u043B", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0435\u043B", "\u043C\u0430\u0439", "\u0438\u044E\u043D", "\u0438\u044E\u043B", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043D\u0442\u0430\u0431\u0440", "\u043E\u043A\u0442\u0430\u0431\u0440", "\u043D\u043E\u044F\u0431\u0440", "\u0434\u0435\u043A\u0430\u0431\u0440"]
};
var dayValues = {
    narrow: ["\u042F", "\u0414", "\u0421", "\u0427", "\u041F", "\u0416", "\u0428"],
    short: ["\u044F\u043A", "\u0434\u0443", "\u0441\u0435", "\u0447\u043E", "\u043F\u0430", "\u0436\u0443", "\u0448\u0430"],
    abbreviated: ["\u044F\u043A\u0448", "\u0434\u0443\u0448", "\u0441\u0435\u0448", "\u0447\u043E\u0440", "\u043F\u0430\u0439", "\u0436\u0443\u043C", "\u0448\u0430\u043D"],
    wide: ["\u044F\u043A\u0448\u0430\u043D\u0431\u0430", "\u0434\u0443\u0448\u0430\u043D\u0431\u0430", "\u0441\u0435\u0448\u0430\u043D\u0431\u0430", "\u0447\u043E\u0440\u0448\u0430\u043D\u0431\u0430", "\u043F\u0430\u0439\u0448\u0430\u043D\u0431\u0430", "\u0436\u0443\u043C\u0430", "\u0448\u0430\u043D\u0431\u0430"]
};
var dayPeriodValues = {
    any: {
        am: "\u041F.\u041E.",
        pm: "\u041F.\u041A.",
        midnight: "\u044F\u0440\u0438\u043C \u0442\u0443\u043D",
        noon: "\u043F\u0435\u0448\u0438\u043D",
        morning: "\u044D\u0440\u0442\u0430\u043B\u0430\u0431",
        afternoon: "\u043F\u0435\u0448\u0438\u043D\u0434\u0430\u043D \u043A\u0435\u0439\u0438\u043D",
        evening: "\u043A\u0435\u0447\u0430\u0441\u0438",
        night: "\u0442\u0443\u043D"
    }
};
var formattingDayPeriodValues = {
    any: {
        am: "\u041F.\u041E.",
        pm: "\u041F.\u041A.",
        midnight: "\u044F\u0440\u0438\u043C \u0442\u0443\u043D",
        noon: "\u043F\u0435\u0448\u0438\u043D",
        morning: "\u044D\u0440\u0442\u0430\u043B\u0430\u0431",
        afternoon: "\u043F\u0435\u0448\u0438\u043D\u0434\u0430\u043D \u043A\u0435\u0439\u0438\u043D",
        evening: "\u043A\u0435\u0447\u0430\u0441\u0438",
        night: "\u0442\u0443\u043D"
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
        defaultWidth: "any",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "any"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/uz-Cyrl/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(чи)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(м\.а|м\.)/i,
    abbreviated: /^(м\.а|м\.)/i,
    wide: /^(милоддан аввал|милоддан кейин)/i
};
var parseEraPatterns = {
    any: [/^м/i, /^а/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]-чор./i,
    wide: /^[1234]-чорак/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[яфмамииасонд]/i,
    abbreviated: /^(янв|фев|мар|апр|май|июн|июл|авг|сен|окт|ноя|дек)/i,
    wide: /^(январ|феврал|март|апрел|май|июн|июл|август|сентабр|октабр|ноябр|декабр)/i
};
var parseMonthPatterns = {
    narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^д/i],
    any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^май/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]
};
var matchDayPatterns = {
    narrow: /^[ядсчпжш]/i,
    short: /^(як|ду|се|чо|па|жу|ша)/i,
    abbreviated: /^(якш|душ|сеш|чор|пай|жум|шан)/i,
    wide: /^(якшанба|душанба|сешанба|чоршанба|пайшанба|жума|шанба)/i
};
var parseDayPatterns = {
    narrow: [/^я/i, /^д/i, /^с/i, /^ч/i, /^п/i, /^ж/i, /^ш/i],
    any: [/^як/i, /^ду/i, /^се/i, /^чор/i, /^пай/i, /^жу/i, /^шан/i]
};
var matchDayPeriodPatterns = {
    any: /^(п\.о\.|п\.к\.|ярим тун|пешиндан кейин|(эрталаб|пешиндан кейин|кечаси|тун))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^п\.о\./i,
        pm: /^п\.к\./i,
        midnight: /^ярим тун/i,
        noon: /^пешиндан кейин/i,
        morning: /эрталаб/i,
        afternoon: /пешиндан кейин/i,
        evening: /кечаси/i,
        night: /тун/i
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
// node_modules/date-fns/esm/locale/uz-Cyrl/index.js
var locale = {
    code: "uz-Cyrl",
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
var uz_Cyrl_default = locale;
export { uz_Cyrl_default };
