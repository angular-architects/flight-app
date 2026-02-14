import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/sq/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "m\xEB pak se nj\xEB sekond\xEB",
        other: "m\xEB pak se {{count}} sekonda"
    },
    xSeconds: {
        one: "1 sekond\xEB",
        other: "{{count}} sekonda"
    },
    halfAMinute: "gjys\xEBm minuti",
    lessThanXMinutes: {
        one: "m\xEB pak se nj\xEB minute",
        other: "m\xEB pak se {{count}} minuta"
    },
    xMinutes: {
        one: "1 minut\xEB",
        other: "{{count}} minuta"
    },
    aboutXHours: {
        one: "rreth 1 or\xEB",
        other: "rreth {{count}} or\xEB"
    },
    xHours: {
        one: "1 or\xEB",
        other: "{{count}} or\xEB"
    },
    xDays: {
        one: "1 dit\xEB",
        other: "{{count}} dit\xEB"
    },
    aboutXWeeks: {
        one: "rreth 1 jav\xEB",
        other: "rreth {{count}} jav\xEB"
    },
    xWeeks: {
        one: "1 jav\xEB",
        other: "{{count}} jav\xEB"
    },
    aboutXMonths: {
        one: "rreth 1 muaj",
        other: "rreth {{count}} muaj"
    },
    xMonths: {
        one: "1 muaj",
        other: "{{count}} muaj"
    },
    aboutXYears: {
        one: "rreth 1 vit",
        other: "rreth {{count}} vite"
    },
    xYears: {
        one: "1 vit",
        other: "{{count}} vite"
    },
    overXYears: {
        one: "mbi 1 vit",
        other: "mbi {{count}} vite"
    },
    almostXYears: {
        one: "pothuajse 1 vit",
        other: "pothuajse {{count}} vite"
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
            return "n\xEB " + result;
        }
        else {
            return result + " m\xEB par\xEB";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/sq/_lib/formatLong/index.js
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
    full: "{{date}} 'n\xEB' {{time}}",
    long: "{{date}} 'n\xEB' {{time}}",
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
// node_modules/date-fns/esm/locale/sq/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'t\xEB' eeee 'e shkuar n\xEB' p",
    yesterday: "'dje n\xEB' p",
    today: "'sot n\xEB' p",
    tomorrow: "'nes\xEBr n\xEB' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/sq/_lib/localize/index.js
var eraValues = {
    narrow: ["P", "M"],
    abbreviated: ["PK", "MK"],
    wide: ["Para Krishtit", "Mbas Krishtit"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["4-mujori I", "4-mujori II", "4-mujori III", "4-mujori IV"]
};
var monthValues = {
    narrow: ["J", "S", "M", "P", "M", "Q", "K", "G", "S", "T", "N", "D"],
    abbreviated: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "N\xEBn", "Dhj"],
    wide: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "N\xEBntor", "Dhjetor"]
};
var dayValues = {
    narrow: ["D", "H", "M", "M", "E", "P", "S"],
    short: ["Di", "H\xEB", "Ma", "M\xEB", "En", "Pr", "Sh"],
    abbreviated: ["Die", "H\xEBn", "Mar", "M\xEBr", "Enj", "Pre", "Sht"],
    wide: ["Diel\xEB", "H\xEBn\xEB", "Mart\xEB", "M\xEBrkur\xEB", "Enjte", "Premte", "Shtun\xEB"]
};
var dayPeriodValues = {
    narrow: {
        am: "p",
        pm: "m",
        midnight: "m",
        noon: "d",
        morning: "m\xEBngjes",
        afternoon: "dite",
        evening: "mbr\xEBmje",
        night: "nat\xEB"
    },
    abbreviated: {
        am: "PD",
        pm: "MD",
        midnight: "mesn\xEBt\xEB",
        noon: "drek",
        morning: "m\xEBngjes",
        afternoon: "mbasdite",
        evening: "mbr\xEBmje",
        night: "nat\xEB"
    },
    wide: {
        am: "p.d.",
        pm: "m.d.",
        midnight: "mesn\xEBt\xEB",
        noon: "drek",
        morning: "m\xEBngjes",
        afternoon: "mbasdite",
        evening: "mbr\xEBmje",
        night: "nat\xEB"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "p",
        pm: "m",
        midnight: "m",
        noon: "d",
        morning: "n\xEB m\xEBngjes",
        afternoon: "n\xEB mbasdite",
        evening: "n\xEB mbr\xEBmje",
        night: "n\xEB mesnat\xEB"
    },
    abbreviated: {
        am: "PD",
        pm: "MD",
        midnight: "mesnat\xEB",
        noon: "drek",
        morning: "n\xEB m\xEBngjes",
        afternoon: "n\xEB mbasdite",
        evening: "n\xEB mbr\xEBmje",
        night: "n\xEB mesnat\xEB"
    },
    wide: {
        am: "p.d.",
        pm: "m.d.",
        midnight: "mesnat\xEB",
        noon: "drek",
        morning: "n\xEB m\xEBngjes",
        afternoon: "n\xEB mbasdite",
        evening: "n\xEB mbr\xEBmje",
        night: "n\xEB mesnat\xEB"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    if ((options === null || options === void 0 ? void 0 : options.unit) === "hour")
        return String(number);
    if (number === 1)
        return number + "-r\xEB";
    if (number === 4)
        return number + "t";
    return number + "-t\xEB";
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
// node_modules/date-fns/esm/locale/sq/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(-rë|-të|t|)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(p|m)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(para krishtit|mbas krishtit)/i
};
var parseEraPatterns = {
    any: [/^b/i, /^(p|m)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234]-mujori (i{1,3}|iv)/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jsmpqkftnd]/i,
    abbreviated: /^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i,
    wide: /^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^s/i, /^m/i, /^p/i, /^m/i, /^q/i, /^k/i, /^g/i, /^s/i, /^t/i, /^n/i, /^d/i],
    any: [/^ja/i, /^shk/i, /^mar/i, /^pri/i, /^maj/i, /^qer/i, /^kor/i, /^gu/i, /^sht/i, /^tet/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[dhmeps]/i,
    short: /^(di|hë|ma|më|en|pr|sh)/i,
    abbreviated: /^(die|hën|mar|mër|enj|pre|sht)/i,
    wide: /^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i
};
var parseDayPatterns = {
    narrow: [/^d/i, /^h/i, /^m/i, /^m/i, /^e/i, /^p/i, /^s/i],
    any: [/^d/i, /^h/i, /^ma/i, /^më/i, /^e/i, /^p/i, /^s/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,
    any: /^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^p/i,
        pm: /^m/i,
        midnight: /^me/i,
        noon: /^dr/i,
        morning: /mëngjes/i,
        afternoon: /mbasdite/i,
        evening: /mbrëmje/i,
        night: /natë/i
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
// node_modules/date-fns/esm/locale/sq/index.js
var locale = {
    code: "sq",
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
var sq_default = locale;
export { sq_default };
