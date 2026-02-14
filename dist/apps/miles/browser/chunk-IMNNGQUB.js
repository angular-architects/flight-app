import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/gl/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "menos dun segundo",
        other: "menos de {{count}} segundos"
    },
    xSeconds: {
        one: "1 segundo",
        other: "{{count}} segundos"
    },
    halfAMinute: "medio minuto",
    lessThanXMinutes: {
        one: "menos dun minuto",
        other: "menos de {{count}} minutos"
    },
    xMinutes: {
        one: "1 minuto",
        other: "{{count}} minutos"
    },
    aboutXHours: {
        one: "arredor dunha hora",
        other: "arredor de {{count}} horas"
    },
    xHours: {
        one: "1 hora",
        other: "{{count}} horas"
    },
    xDays: {
        one: "1 d\xEDa",
        other: "{{count}} d\xEDas"
    },
    aboutXWeeks: {
        one: "arredor dunha semana",
        other: "arredor de {{count}} semanas"
    },
    xWeeks: {
        one: "1 semana",
        other: "{{count}} semanas"
    },
    aboutXMonths: {
        one: "arredor de 1 mes",
        other: "arredor de {{count}} meses"
    },
    xMonths: {
        one: "1 mes",
        other: "{{count}} meses"
    },
    aboutXYears: {
        one: "arredor dun ano",
        other: "arredor de {{count}} anos"
    },
    xYears: {
        one: "1 ano",
        other: "{{count}} anos"
    },
    overXYears: {
        one: "m\xE1is dun ano",
        other: "m\xE1is de {{count}} anos"
    },
    almostXYears: {
        one: "case un ano",
        other: "case {{count}} anos"
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
            return "en " + result;
        }
        else {
            return "hai " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/gl/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d 'de' MMMM y",
    long: "d 'de' MMMM y",
    medium: "d MMM y",
    short: "dd/MM/y"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} '\xE1s' {{time}}",
    long: "{{date}} '\xE1s' {{time}}",
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
// node_modules/date-fns/esm/locale/gl/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'o' eeee 'pasado \xE1' LT",
    yesterday: "'onte \xE1' p",
    today: "'hoxe \xE1' p",
    tomorrow: "'ma\xF1\xE1 \xE1' p",
    nextWeek: "eeee '\xE1' p",
    other: "P"
};
var formatRelativeLocalePlural = {
    lastWeek: "'o' eeee 'pasado \xE1s' p",
    yesterday: "'onte \xE1s' p",
    today: "'hoxe \xE1s' p",
    tomorrow: "'ma\xF1\xE1 \xE1s' p",
    nextWeek: "eeee '\xE1s' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, date, _baseDate, _options) {
    if (date.getUTCHours() !== 1) {
        return formatRelativeLocalePlural[token];
    }
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/gl/_lib/localize/index.js
var eraValues = {
    narrow: ["AC", "DC"],
    abbreviated: ["AC", "DC"],
    wide: ["antes de cristo", "despois de cristo"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"]
};
var monthValues = {
    narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: ["xan", "feb", "mar", "abr", "mai", "xun", "xul", "ago", "set", "out", "nov", "dec"],
    wide: ["xaneiro", "febreiro", "marzo", "abril", "maio", "xu\xF1o", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"]
};
var dayValues = {
    narrow: ["d", "l", "m", "m", "j", "v", "s"],
    short: ["do", "lu", "ma", "me", "xo", "ve", "sa"],
    abbreviated: ["dom", "lun", "mar", "mer", "xov", "ven", "sab"],
    wide: ["domingo", "luns", "martes", "m\xE9rcores", "xoves", "venres", "s\xE1bado"]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "ma\xF1\xE1",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "medianoite",
        noon: "mediod\xEDa",
        morning: "ma\xF1\xE1",
        afternoon: "tarde",
        evening: "tardi\xF1a",
        night: "noite"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "medianoite",
        noon: "mediod\xEDa",
        morning: "ma\xF1\xE1",
        afternoon: "tarde",
        evening: "tardi\xF1a",
        night: "noite"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "da ma\xF1\xE1",
        afternoon: "da tarde",
        evening: "da tardi\xF1a",
        night: "da noite"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "medianoite",
        noon: "mediod\xEDa",
        morning: "da ma\xF1\xE1",
        afternoon: "da tarde",
        evening: "da tardi\xF1a",
        night: "da noite"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "medianoite",
        noon: "mediod\xEDa",
        morning: "da ma\xF1\xE1",
        afternoon: "da tarde",
        evening: "da tardi\xF1a",
        night: "da noite"
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
// node_modules/date-fns/esm/locale/gl/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(º)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(ac|dc|a|d)/i,
    abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
    wide: /^(antes de cristo|antes da era com[uú]n|despois de cristo|era com[uú]n)/i
};
var parseEraPatterns = {
    any: [/^ac/i, /^dc/i],
    wide: [/^(antes de cristo|antes da era com[uú]n)/i, /^(despois de cristo|era com[uú]n)/i]
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
    narrow: /^[xfmasond]/i,
    abbreviated: /^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,
    wide: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i
};
var parseMonthPatterns = {
    narrow: [/^x/i, /^f/i, /^m/i, /^a/i, /^m/i, /^x/i, /^x/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xun/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i]
};
var matchDayPatterns = {
    narrow: /^[dlmxvs]/i,
    short: /^(do|lu|ma|me|xo|ve|sa)/i,
    abbreviated: /^(dom|lun|mar|mer|xov|ven|sab)/i,
    wide: /^(domingo|luns|martes|m[eé]rcores|xoves|venres|s[áa]bado)/i
};
var parseDayPatterns = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^x/i, /^v/i, /^s/i],
    any: [/^do/i, /^lu/i, /^ma/i, /^me/i, /^xo/i, /^ve/i, /^sa/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mn|md|(da|[aá]s) (mañ[aá]|tarde|noite))/i,
    any: /^([ap]\.?\s?m\.?|medianoite|mediod[ií]a|(da|[aá]s) (mañ[aá]|tarde|noite))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mn/i,
        noon: /^md/i,
        morning: /mañ[aá]/i,
        afternoon: /tarde/i,
        evening: /tardiña/i,
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
// node_modules/date-fns/esm/locale/gl/index.js
var locale = {
    code: "gl",
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
var gl_default = locale;
export { gl_default };
