import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/cy/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "llai na eiliad",
        other: "llai na {{count}} eiliad"
    },
    xSeconds: {
        one: "1 eiliad",
        other: "{{count}} eiliad"
    },
    halfAMinute: "hanner munud",
    lessThanXMinutes: {
        one: "llai na munud",
        two: "llai na 2 funud",
        other: "llai na {{count}} munud"
    },
    xMinutes: {
        one: "1 munud",
        two: "2 funud",
        other: "{{count}} munud"
    },
    aboutXHours: {
        one: "tua 1 awr",
        other: "tua {{count}} awr"
    },
    xHours: {
        one: "1 awr",
        other: "{{count}} awr"
    },
    xDays: {
        one: "1 diwrnod",
        two: "2 ddiwrnod",
        other: "{{count}} diwrnod"
    },
    aboutXWeeks: {
        one: "tua 1 wythnos",
        two: "tua pythefnos",
        other: "tua {{count}} wythnos"
    },
    xWeeks: {
        one: "1 wythnos",
        two: "pythefnos",
        other: "{{count}} wythnos"
    },
    aboutXMonths: {
        one: "tua 1 mis",
        two: "tua 2 fis",
        other: "tua {{count}} mis"
    },
    xMonths: {
        one: "1 mis",
        two: "2 fis",
        other: "{{count}} mis"
    },
    aboutXYears: {
        one: "tua 1 flwyddyn",
        two: "tua 2 flynedd",
        other: "tua {{count}} mlynedd"
    },
    xYears: {
        one: "1 flwyddyn",
        two: "2 flynedd",
        other: "{{count}} mlynedd"
    },
    overXYears: {
        one: "dros 1 flwyddyn",
        two: "dros 2 flynedd",
        other: "dros {{count}} mlynedd"
    },
    almostXYears: {
        one: "bron 1 flwyddyn",
        two: "bron 2 flynedd",
        other: "bron {{count}} mlynedd"
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
    else {
        result = tokenValue.other.replace("{{count}}", String(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "mewn " + result;
        }
        else {
            return result + " yn \xF4l";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/cy/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d MMMM yyyy",
    long: "d MMMM yyyy",
    medium: "d MMM yyyy",
    short: "dd/MM/yyyy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} 'am' {{time}}",
    long: "{{date}} 'am' {{time}}",
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
// node_modules/date-fns/esm/locale/cy/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "eeee 'diwethaf am' p",
    yesterday: "'ddoe am' p",
    today: "'heddiw am' p",
    tomorrow: "'yfory am' p",
    nextWeek: "eeee 'am' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/cy/_lib/localize/index.js
var eraValues = {
    narrow: ["C", "O"],
    abbreviated: ["CC", "OC"],
    wide: ["Cyn Crist", "Ar \xF4l Crist"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Ch1", "Ch2", "Ch3", "Ch4"],
    wide: ["Chwarter 1af", "2ail chwarter", "3ydd chwarter", "4ydd chwarter"]
};
var monthValues = {
    narrow: ["I", "Ch", "Ma", "E", "Mi", "Me", "G", "A", "Md", "H", "T", "Rh"],
    abbreviated: ["Ion", "Chwe", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rhag"],
    wide: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"]
};
var dayValues = {
    narrow: ["S", "Ll", "M", "M", "I", "G", "S"],
    short: ["Su", "Ll", "Ma", "Me", "Ia", "Gw", "Sa"],
    abbreviated: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
    wide: ["dydd Sul", "dydd Llun", "dydd Mawrth", "dydd Mercher", "dydd Iau", "dydd Gwener", "dydd Sadwrn"]
};
var dayPeriodValues = {
    narrow: {
        am: "b",
        pm: "h",
        midnight: "hn",
        noon: "hd",
        morning: "bore",
        afternoon: "prynhawn",
        evening: "gyda'r nos",
        night: "nos"
    },
    abbreviated: {
        am: "yb",
        pm: "yh",
        midnight: "hanner nos",
        noon: "hanner dydd",
        morning: "bore",
        afternoon: "prynhawn",
        evening: "gyda'r nos",
        night: "nos"
    },
    wide: {
        am: "y.b.",
        pm: "y.h.",
        midnight: "hanner nos",
        noon: "hanner dydd",
        morning: "bore",
        afternoon: "prynhawn",
        evening: "gyda'r nos",
        night: "nos"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "b",
        pm: "h",
        midnight: "hn",
        noon: "hd",
        morning: "yn y bore",
        afternoon: "yn y prynhawn",
        evening: "gyda'r nos",
        night: "yn y nos"
    },
    abbreviated: {
        am: "yb",
        pm: "yh",
        midnight: "hanner nos",
        noon: "hanner dydd",
        morning: "yn y bore",
        afternoon: "yn y prynhawn",
        evening: "gyda'r nos",
        night: "yn y nos"
    },
    wide: {
        am: "y.b.",
        pm: "y.h.",
        midnight: "hanner nos",
        noon: "hanner dydd",
        morning: "yn y bore",
        afternoon: "yn y prynhawn",
        evening: "gyda'r nos",
        night: "yn y nos"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    if (number < 20) {
        switch (number) {
            case 0:
                return number + "fed";
            case 1:
                return number + "af";
            case 2:
                return number + "ail";
            case 3:
            case 4:
                return number + "ydd";
            case 5:
            case 6:
                return number + "ed";
            case 7:
            case 8:
            case 9:
            case 10:
            case 12:
            case 15:
            case 18:
                return number + "fed";
            case 11:
            case 13:
            case 14:
            case 16:
            case 17:
            case 19:
                return number + "eg";
        }
    }
    else if (number >= 50 && number <= 60 || number === 80 || number >= 100) {
        return number + "fed";
    }
    return number + "ain";
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
// node_modules/date-fns/esm/locale/cy/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(c|o)/i,
    abbreviated: /^(c\.?\s?c\.?|o\.?\s?c\.?)/i,
    wide: /^(cyn christ|ar ôl crist|ar ol crist)/i
};
var parseEraPatterns = {
    wide: [/^c/i, /^(ar ôl crist|ar ol crist)/i],
    any: [/^c/i, /^o/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^ch[1234]/i,
    wide: /^(chwarter 1af)|([234](ail|ydd)? chwarter)/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^(i|ch|m|e|g|a|h|t|rh)/i,
    abbreviated: /^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,
    wide: /^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i
};
var parseMonthPatterns = {
    narrow: [/^i/i, /^ch/i, /^m/i, /^e/i, /^m/i, /^m/i, /^g/i, /^a/i, /^m/i, /^h/i, /^t/i, /^rh/i],
    any: [/^io/i, /^ch/i, /^maw/i, /^e/i, /^mai/i, /^meh/i, /^g/i, /^a/i, /^med/i, /^h/i, /^t/i, /^rh/i]
};
var matchDayPatterns = {
    narrow: /^(s|ll|m|i|g)/i,
    short: /^(su|ll|ma|me|ia|gw|sa)/i,
    abbreviated: /^(sul|llun|maw|mer|iau|gwe|sad)/i,
    wide: /^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i
};
var parseDayPatterns = {
    narrow: [/^s/i, /^ll/i, /^m/i, /^m/i, /^i/i, /^g/i, /^s/i],
    wide: [/^dydd su/i, /^dydd ll/i, /^dydd ma/i, /^dydd me/i, /^dydd i/i, /^dydd g/i, /^dydd sa/i],
    any: [/^su/i, /^ll/i, /^ma/i, /^me/i, /^i/i, /^g/i, /^sa/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,
    any: /^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^b|(y\.?\s?b\.?)/i,
        pm: /^h|(y\.?\s?h\.?)|(yr hwyr)/i,
        midnight: /^hn|hanner nos/i,
        noon: /^hd|hanner dydd/i,
        morning: /bore/i,
        afternoon: /prynhawn/i,
        evening: /^gyda'r nos$/i,
        night: /blah/i
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
// node_modules/date-fns/esm/locale/cy/index.js
var locale = {
    code: "cy",
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
var cy_default = locale;
export { cy_default };
