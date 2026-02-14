import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/gd/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "nas lugha na diog",
        other: "nas lugha na {{count}} diogan"
    },
    xSeconds: {
        one: "1 diog",
        two: "2 dhiog",
        twenty: "20 diog",
        other: "{{count}} diogan"
    },
    halfAMinute: "leth mhionaid",
    lessThanXMinutes: {
        one: "nas lugha na mionaid",
        other: "nas lugha na {{count}} mionaidean"
    },
    xMinutes: {
        one: "1 mionaid",
        two: "2 mhionaid",
        twenty: "20 mionaid",
        other: "{{count}} mionaidean"
    },
    aboutXHours: {
        one: "mu uair de th\xECde",
        other: "mu {{count}} uairean de th\xECde"
    },
    xHours: {
        one: "1 uair de th\xECde",
        two: "2 uair de th\xECde",
        twenty: "20 uair de th\xECde",
        other: "{{count}} uairean de th\xECde"
    },
    xDays: {
        one: "1 l\xE0",
        other: "{{count}} l\xE0"
    },
    aboutXWeeks: {
        one: "mu 1 seachdain",
        other: "mu {{count}} seachdainean"
    },
    xWeeks: {
        one: "1 seachdain",
        other: "{{count}} seachdainean"
    },
    aboutXMonths: {
        one: "mu mh\xECos",
        other: "mu {{count}} m\xECosan"
    },
    xMonths: {
        one: "1 m\xECos",
        other: "{{count}} m\xECosan"
    },
    aboutXYears: {
        one: "mu bhliadhna",
        other: "mu {{count}} bliadhnaichean"
    },
    xYears: {
        one: "1 bhliadhna",
        other: "{{count}} bliadhna"
    },
    overXYears: {
        one: "c\xF2rr is bliadhna",
        other: "c\xF2rr is {{count}} bliadhnaichean"
    },
    almostXYears: {
        one: "cha mh\xF2r bliadhna",
        other: "cha mh\xF2r {{count}} bliadhnaichean"
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
    else if (count === 2 && !!tokenValue.two) {
        result = tokenValue.two;
    }
    else if (count === 20 && !!tokenValue.twenty) {
        result = tokenValue.twenty;
    }
    else {
        result = tokenValue.other.replace("{{count}}", String(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "ann an " + result;
        }
        else {
            return "o chionn " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/gd/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} 'aig' {{time}}",
    long: "{{date}} 'aig' {{time}}",
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
// node_modules/date-fns/esm/locale/gd/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'mu dheireadh' eeee 'aig' p",
    //FIX
    yesterday: "'an-d\xE8 aig' p",
    today: "'an-diugh aig' p",
    tomorrow: "'a-m\xE0ireach aig' p",
    nextWeek: "eeee 'aig' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/gd/_lib/localize/index.js
var eraValues = {
    narrow: ["R", "A"],
    abbreviated: ["RC", "AD"],
    wide: ["ro Chr\xECosta", "anno domini"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["C1", "C2", "C3", "C4"],
    wide: ["a' chiad chairteal", "an d\xE0rna cairteal", "an treas cairteal", "an ceathramh cairteal"]
};
var monthValues = {
    narrow: ["F", "G", "M", "G", "C", "\xD2", "I", "L", "S", "D", "S", "D"],
    abbreviated: ["Faoi", "Gear", "M\xE0rt", "Gibl", "C\xE8it", "\xD2gmh", "Iuch", "L\xF9n", "Sult", "D\xE0mh", "Samh", "D\xF9bh"],
    wide: ["Am Faoilleach", "An Gearran", "Am M\xE0rt", "An Giblean", "An C\xE8itean", "An t-\xD2gmhios", "An t-Iuchar", "An L\xF9nastal", "An t-Sultain", "An D\xE0mhair", "An t-Samhain", "An D\xF9bhlachd"]
};
var dayValues = {
    narrow: ["D", "L", "M", "C", "A", "H", "S"],
    short: ["D\xF2", "Lu", "M\xE0", "Ci", "Ar", "Ha", "Sa"],
    abbreviated: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
    wide: ["Did\xF2mhnaich", "Diluain", "Dim\xE0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"]
};
var dayPeriodValues = {
    narrow: {
        am: "m",
        pm: "f",
        midnight: "m.o.",
        noon: "m.l.",
        morning: "madainn",
        afternoon: "feasgar",
        evening: "feasgar",
        night: "oidhche"
    },
    abbreviated: {
        am: "M.",
        pm: "F.",
        midnight: "meadhan oidhche",
        noon: "meadhan l\xE0",
        morning: "madainn",
        afternoon: "feasgar",
        evening: "feasgar",
        night: "oidhche"
    },
    wide: {
        am: "m.",
        pm: "f.",
        midnight: "meadhan oidhche",
        noon: "meadhan l\xE0",
        morning: "madainn",
        afternoon: "feasgar",
        evening: "feasgar",
        night: "oidhche"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "m",
        pm: "f",
        midnight: "m.o.",
        noon: "m.l.",
        morning: "sa mhadainn",
        afternoon: "feasgar",
        evening: "feasgar",
        night: "air an oidhche"
    },
    abbreviated: {
        am: "M.",
        pm: "F.",
        midnight: "meadhan oidhche",
        noon: "meadhan l\xE0",
        morning: "sa mhadainn",
        afternoon: "feasgar",
        evening: "feasgar",
        night: "air an oidhche"
    },
    wide: {
        am: "m.",
        pm: "f.",
        midnight: "meadhan oidhche",
        noon: "meadhan l\xE0",
        morning: "sa mhadainn",
        afternoon: "feasgar",
        evening: "feasgar",
        night: "air an oidhche"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
            case 1:
                return number + "d";
            case 2:
                return number + "na";
        }
    }
    if (rem100 === 12) {
        return number + "na";
    }
    return number + "mh";
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
// node_modules/date-fns/esm/locale/gd/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(d|na|tr|mh)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(r|a)/i,
    abbreviated: /^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i,
    wide: /^(ro Chrìosta|ron aois choitchinn|anno domini|aois choitcheann)/i
};
var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^c[1234]/i,
    wide: /^[1234](cd|na|tr|mh)? cairteal/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[fgmcòilsd]/i,
    abbreviated: /^(faoi|gear|màrt|gibl|cèit|ògmh|iuch|lùn|sult|dàmh|samh|dùbh)/i,
    wide: /^(am faoilleach|an gearran|am màrt|an giblean|an cèitean|an t-Ògmhios|an t-Iuchar|an lùnastal|an t-Sultain|an dàmhair|an t-Samhain|an dùbhlachd)/i
};
var parseMonthPatterns = {
    narrow: [/^f/i, /^g/i, /^m/i, /^g/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^s/i, /^d/i, /^s/i, /^d/i],
    any: [/^fa/i, /^ge/i, /^mà/i, /^gi/i, /^c/i, /^ò/i, /^i/i, /^l/i, /^su/i, /^d/i, /^sa/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[dlmcahs]/i,
    short: /^(dò|lu|mà|ci|ar|ha|sa)/i,
    abbreviated: /^(did|dil|dim|dic|dia|dih|dis)/i,
    wide: /^(didòmhnaich|diluain|dimàirt|diciadain|diardaoin|dihaoine|disathairne)/i
};
var parseDayPatterns = {
    narrow: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i],
    any: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i,
    any: /^([ap]\.?\s?m\.?|meadhan oidhche|meadhan là|(san|aig) (madainn|feasgar|feasgar|oidhche))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^m/i,
        pm: /^f/i,
        midnight: /^meadhan oidhche/i,
        noon: /^meadhan là/i,
        morning: /sa mhadainn/i,
        afternoon: /feasgar/i,
        evening: /feasgar/i,
        night: /air an oidhche/i
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
// node_modules/date-fns/esm/locale/gd/index.js
var locale = {
    code: "gd",
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
var gd_default = locale;
export { gd_default };
