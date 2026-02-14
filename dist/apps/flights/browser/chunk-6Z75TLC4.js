import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/pt/_lib/formatDistance/index.js
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
        one: "aproximadamente 1 hora",
        other: "aproximadamente {{count}} horas"
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
        one: "aproximadamente 1 semana",
        other: "aproximadamente {{count}} semanas"
    },
    xWeeks: {
        one: "1 semana",
        other: "{{count}} semanas"
    },
    aboutXMonths: {
        one: "aproximadamente 1 m\xEAs",
        other: "aproximadamente {{count}} meses"
    },
    xMonths: {
        one: "1 m\xEAs",
        other: "{{count}} meses"
    },
    aboutXYears: {
        one: "aproximadamente 1 ano",
        other: "aproximadamente {{count}} anos"
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
            return "daqui a " + result;
        }
        else {
            return "h\xE1 " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/pt/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d 'de' MMMM 'de' y",
    long: "d 'de' MMMM 'de' y",
    medium: "d 'de' MMM 'de' y",
    short: "dd/MM/y"
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
// node_modules/date-fns/esm/locale/pt/_lib/formatRelative/index.js
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
// node_modules/date-fns/esm/locale/pt/_lib/localize/index.js
var eraValues = {
    narrow: ["aC", "dC"],
    abbreviated: ["a.C.", "d.C."],
    wide: ["antes de Cristo", "depois de Cristo"]
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
    narrow: ["d", "s", "t", "q", "q", "s", "s"],
    short: ["dom", "seg", "ter", "qua", "qui", "sex", "s\xE1b"],
    abbreviated: ["dom", "seg", "ter", "qua", "qui", "sex", "s\xE1b"],
    wide: ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"]
};
var dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "manh\xE3",
        afternoon: "tarde",
        evening: "noite",
        night: "madrugada"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "manh\xE3",
        afternoon: "tarde",
        evening: "noite",
        night: "madrugada"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "manh\xE3",
        afternoon: "tarde",
        evening: "noite",
        night: "madrugada"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "da manh\xE3",
        afternoon: "da tarde",
        evening: "da noite",
        night: "da madrugada"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "da manh\xE3",
        afternoon: "da tarde",
        evening: "da noite",
        night: "da madrugada"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "da manh\xE3",
        afternoon: "da tarde",
        evening: "da noite",
        night: "da madrugada"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
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
// node_modules/date-fns/esm/locale/pt/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(º|ª)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(ac|dc|a|d)/i,
    abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
    wide: /^(antes de cristo|antes da era comum|depois de cristo|era comum)/i
};
var parseEraPatterns = {
    any: [/^ac/i, /^dc/i],
    wide: [/^(antes de cristo|antes da era comum)/i, /^(depois de cristo|era comum)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^T[1234]/i,
    wide: /^[1234](º|ª)? trimestre/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
    wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ab/i, /^mai/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[dstq]/i,
    short: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
    abbreviated: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
    wide: /^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i
};
var parseDayPatterns = {
    narrow: [/^d/i, /^s/i, /^t/i, /^q/i, /^q/i, /^s/i, /^s/i],
    any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[áa]/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,
    any: /^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^meia/i,
        noon: /^meio/i,
        morning: /manh[ãa]/i,
        afternoon: /tarde/i,
        evening: /noite/i,
        night: /madrugada/i
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
// node_modules/date-fns/esm/locale/pt/index.js
var locale = {
    code: "pt",
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
var pt_default = locale;
export { pt_default };
