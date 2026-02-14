import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/pt-BR/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "menos de um segundo",
        other: "menos de {{count}} segundos"
    },
    xSeconds: {
        one: "1 segundo",
        other: "{{count}} segundos"
    },
    halfAMinute: "meio minuto",
    lessThanXMinutes: {
        one: "menos de um minuto",
        other: "menos de {{count}} minutos"
    },
    xMinutes: {
        one: "1 minuto",
        other: "{{count}} minutos"
    },
    aboutXHours: {
        one: "cerca de 1 hora",
        other: "cerca de {{count}} horas"
    },
    xHours: {
        one: "1 hora",
        other: "{{count}} horas"
    },
    xDays: {
        one: "1 dia",
        other: "{{count}} dias"
    },
    aboutXWeeks: {
        one: "cerca de 1 semana",
        other: "cerca de {{count}} semanas"
    },
    xWeeks: {
        one: "1 semana",
        other: "{{count}} semanas"
    },
    aboutXMonths: {
        one: "cerca de 1 m\xEAs",
        other: "cerca de {{count}} meses"
    },
    xMonths: {
        one: "1 m\xEAs",
        other: "{{count}} meses"
    },
    aboutXYears: {
        one: "cerca de 1 ano",
        other: "cerca de {{count}} anos"
    },
    xYears: {
        one: "1 ano",
        other: "{{count}} anos"
    },
    overXYears: {
        one: "mais de 1 ano",
        other: "mais de {{count}} anos"
    },
    almostXYears: {
        one: "quase 1 ano",
        other: "quase {{count}} anos"
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
            return "em " + result;
        }
        else {
            return "h\xE1 " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/pt-BR/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d 'de' MMMM 'de' y",
    long: "d 'de' MMMM 'de' y",
    medium: "d MMM y",
    short: "dd/MM/yyyy"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} '\xE0s' {{time}}",
    long: "{{date}} '\xE0s' {{time}}",
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
// node_modules/date-fns/esm/locale/pt-BR/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: function lastWeek(date) {
        var weekday = date.getUTCDay();
        var last = weekday === 0 || weekday === 6 ? "\xFAltimo" : "\xFAltima";
        return "'" + last + "' eeee '\xE0s' p";
    },
    yesterday: "'ontem \xE0s' p",
    today: "'hoje \xE0s' p",
    tomorrow: "'amanh\xE3 \xE0s' p",
    nextWeek: "eeee '\xE0s' p",
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
// node_modules/date-fns/esm/locale/pt-BR/_lib/localize/index.js
var eraValues = {
    narrow: ["AC", "DC"],
    abbreviated: ["AC", "DC"],
    wide: ["antes de cristo", "depois de cristo"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"]
};
var monthValues = {
    narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
    wide: ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
};
var dayValues = {
    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
    abbreviated: ["domingo", "segunda", "ter\xE7a", "quarta", "quinta", "sexta", "s\xE1bado"],
    wide: ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "manh\xE3",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "manh\xE3",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "manh\xE3",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "da manh\xE3",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "da manh\xE3",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "da manh\xE3",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    if ((options === null || options === void 0 ? void 0 : options.unit) === "week") {
        return number + "\xAA";
    }
    return number + "\xBA";
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
// node_modules/date-fns/esm/locale/pt-BR/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)[ºªo]?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(ac|dc|a|d)/i,
    abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
    wide: /^(antes de cristo|depois de cristo)/i
};
var parseEraPatterns = {
    any: [/^ac/i, /^dc/i],
    wide: [/^antes de cristo/i, /^depois de cristo/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^T[1234]/i,
    wide: /^[1234](º)? trimestre/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmajsond]/i,
    abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
    wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
};
var matchDayPatterns = {
    narrow: /^(dom|[23456]ª?|s[aá]b)/i,
    short: /^(dom|[23456]ª?|s[aá]b)/i,
    abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
    wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
};
var parseDayPatterns = {
    short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
    narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
    any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
    any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mn|^meia[-\s]noite/i,
        noon: /^md|^meio[-\s]dia/i,
        morning: /manhã/i,
        afternoon: /tarde/i,
        evening: /tarde/i,
        night: /noite/i
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
// node_modules/date-fns/esm/locale/pt-BR/index.js
var locale = {
    code: "pt-BR",
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
var pt_BR_default = locale;
export { pt_BR_default };
