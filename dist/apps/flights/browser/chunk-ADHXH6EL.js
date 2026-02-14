import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/es/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "menos de un segundo",
        other: "menos de {{count}} segundos"
    },
    xSeconds: {
        one: "1 segundo",
        other: "{{count}} segundos"
    },
    halfAMinute: "medio minuto",
    lessThanXMinutes: {
        one: "menos de un minuto",
        other: "menos de {{count}} minutos"
    },
    xMinutes: {
        one: "1 minuto",
        other: "{{count}} minutos"
    },
    aboutXHours: {
        one: "alrededor de 1 hora",
        other: "alrededor de {{count}} horas"
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
        one: "alrededor de 1 semana",
        other: "alrededor de {{count}} semanas"
    },
    xWeeks: {
        one: "1 semana",
        other: "{{count}} semanas"
    },
    aboutXMonths: {
        one: "alrededor de 1 mes",
        other: "alrededor de {{count}} meses"
    },
    xMonths: {
        one: "1 mes",
        other: "{{count}} meses"
    },
    aboutXYears: {
        one: "alrededor de 1 a\xF1o",
        other: "alrededor de {{count}} a\xF1os"
    },
    xYears: {
        one: "1 a\xF1o",
        other: "{{count}} a\xF1os"
    },
    overXYears: {
        one: "m\xE1s de 1 a\xF1o",
        other: "m\xE1s de {{count}} a\xF1os"
    },
    almostXYears: {
        one: "casi 1 a\xF1o",
        other: "casi {{count}} a\xF1os"
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
            return "en " + result;
        }
        else {
            return "hace " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/es/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d 'de' MMMM 'de' y",
    long: "d 'de' MMMM 'de' y",
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
    full: "{{date}} 'a las' {{time}}",
    long: "{{date}} 'a las' {{time}}",
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
// node_modules/date-fns/esm/locale/es/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'el' eeee 'pasado a la' p",
    yesterday: "'ayer a la' p",
    today: "'hoy a la' p",
    tomorrow: "'ma\xF1ana a la' p",
    nextWeek: "eeee 'a la' p",
    other: "P"
};
var formatRelativeLocalePlural = {
    lastWeek: "'el' eeee 'pasado a las' p",
    yesterday: "'ayer a las' p",
    today: "'hoy a las' p",
    tomorrow: "'ma\xF1ana a las' p",
    nextWeek: "eeee 'a las' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, date, _baseDate, _options) {
    if (date.getUTCHours() !== 1) {
        return formatRelativeLocalePlural[token];
    }
    else {
        return formatRelativeLocale[token];
    }
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/es/_lib/localize/index.js
var eraValues = {
    narrow: ["AC", "DC"],
    abbreviated: ["AC", "DC"],
    wide: ["antes de cristo", "despu\xE9s de cristo"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"]
};
var monthValues = {
    narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
};
var dayValues = {
    narrow: ["d", "l", "m", "m", "j", "v", "s"],
    short: ["do", "lu", "ma", "mi", "ju", "vi", "s\xE1"],
    abbreviated: ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"],
    wide: ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "ma\xF1ana",
        afternoon: "tarde",
        evening: "tarde",
        night: "noche"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "medianoche",
        noon: "mediodia",
        morning: "ma\xF1ana",
        afternoon: "tarde",
        evening: "tarde",
        night: "noche"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "medianoche",
        noon: "mediodia",
        morning: "ma\xF1ana",
        afternoon: "tarde",
        evening: "tarde",
        night: "noche"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "de la ma\xF1ana",
        afternoon: "de la tarde",
        evening: "de la tarde",
        night: "de la noche"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "medianoche",
        noon: "mediodia",
        morning: "de la ma\xF1ana",
        afternoon: "de la tarde",
        evening: "de la tarde",
        night: "de la noche"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "medianoche",
        noon: "mediodia",
        morning: "de la ma\xF1ana",
        afternoon: "de la tarde",
        evening: "de la tarde",
        night: "de la noche"
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
            return Number(quarter) - 1;
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
// node_modules/date-fns/esm/locale/es/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(º)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(ac|dc|a|d)/i,
    abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
    wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
};
var parseEraPatterns = {
    any: [/^ac/i, /^dc/i],
    wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
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
    narrow: /^[efmajsond]/i,
    abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
    wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
};
var parseMonthPatterns = {
    narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
};
var matchDayPatterns = {
    narrow: /^[dlmjvs]/i,
    short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
    abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
    wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
};
var parseDayPatterns = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
    any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
    any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mn/i,
        noon: /^md/i,
        morning: /mañana/i,
        afternoon: /tarde/i,
        evening: /tarde/i,
        night: /noche/i
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
// node_modules/date-fns/esm/locale/es/index.js
var locale = {
    code: "es",
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
var es_default = locale;
export { es_default };
