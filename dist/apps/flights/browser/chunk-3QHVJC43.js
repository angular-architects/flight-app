import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/oc/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "mens d\u2019una segonda",
        other: "mens de {{count}} segondas"
    },
    xSeconds: {
        one: "1 segonda",
        other: "{{count}} segondas"
    },
    halfAMinute: "30 segondas",
    lessThanXMinutes: {
        one: "mens d\u2019una minuta",
        other: "mens de {{count}} minutas"
    },
    xMinutes: {
        one: "1 minuta",
        other: "{{count}} minutas"
    },
    aboutXHours: {
        one: "environ 1 ora",
        other: "environ {{count}} oras"
    },
    xHours: {
        one: "1 ora",
        other: "{{count}} oras"
    },
    xDays: {
        one: "1 jorn",
        other: "{{count}} jorns"
    },
    aboutXWeeks: {
        one: "environ 1 setmana",
        other: "environ {{count}} setmanas"
    },
    xWeeks: {
        one: "1 setmana",
        other: "{{count}} setmanas"
    },
    aboutXMonths: {
        one: "environ 1 mes",
        other: "environ {{count}} meses"
    },
    xMonths: {
        one: "1 mes",
        other: "{{count}} meses"
    },
    aboutXYears: {
        one: "environ 1 an",
        other: "environ {{count}} ans"
    },
    xYears: {
        one: "1 an",
        other: "{{count}} ans"
    },
    overXYears: {
        one: "mai d\u2019un an",
        other: "mai de {{count}} ans"
    },
    almostXYears: {
        one: "gaireben un an",
        other: "gaireben {{count}} ans"
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
            return "d\u2019aqu\xED " + result;
        }
        else {
            return "fa " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/oc/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE d 'de' MMMM y",
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
    full: "{{date}} 'a' {{time}}",
    long: "{{date}} 'a' {{time}}",
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
// node_modules/date-fns/esm/locale/oc/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "eeee 'passat a' p",
    yesterday: "'i\xE8r a' p",
    today: "'u\xE8i a' p",
    tomorrow: "'deman a' p",
    nextWeek: "eeee 'a' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/oc/_lib/localize/index.js
var eraValues = {
    narrow: ["ab. J.C.", "apr. J.C."],
    abbreviated: ["ab. J.C.", "apr. J.C."],
    wide: ["abans J\xE8sus-Crist", "apr\xE8s J\xE8sus-Crist"]
};
var quarterValues = {
    narrow: ["T1", "T2", "T3", "T4"],
    abbreviated: ["1\xE8r trim.", "2nd trim.", "3en trim.", "4en trim."],
    wide: ["1\xE8r trim\xE8stre", "2nd trim\xE8stre", "3en trim\xE8stre", "4en trim\xE8stre"]
};
var monthValues = {
    narrow: ["GN", "FB", "M\xC7", "AB", "MA", "JN", "JL", "AG", "ST", "OC", "NV", "DC"],
    abbreviated: ["gen.", "febr.", "mar\xE7", "abr.", "mai", "junh", "jul.", "ag.", "set.", "oct.", "nov.", "dec."],
    wide: ["geni\xE8r", "febri\xE8r", "mar\xE7", "abril", "mai", "junh", "julhet", "agost", "setembre", "oct\xF2bre", "novembre", "decembre"]
};
var dayValues = {
    narrow: ["dg.", "dl.", "dm.", "dc.", "dj.", "dv.", "ds."],
    short: ["dg.", "dl.", "dm.", "dc.", "dj.", "dv.", "ds."],
    abbreviated: ["dg.", "dl.", "dm.", "dc.", "dj.", "dv.", "ds."],
    wide: ["dimenge", "diluns", "dimars", "dim\xE8cres", "dij\xF2us", "divendres", "dissabte"]
};
var dayPeriodValues = {
    narrow: {
        am: "am",
        pm: "pm",
        midnight: "mi\xE8janu\xE8ch",
        noon: "mi\xE8gjorn",
        morning: "matin",
        afternoon: "apr\xE8p-mi\xE8gjorn",
        evening: "v\xE8spre",
        night: "nu\xE8ch"
    },
    abbreviated: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "mi\xE8janu\xE8ch",
        noon: "mi\xE8gjorn",
        morning: "matin",
        afternoon: "apr\xE8p-mi\xE8gjorn",
        evening: "v\xE8spre",
        night: "nu\xE8ch"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "mi\xE8janu\xE8ch",
        noon: "mi\xE8gjorn",
        morning: "matin",
        afternoon: "apr\xE8p-mi\xE8gjorn",
        evening: "v\xE8spre",
        night: "nu\xE8ch"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "am",
        pm: "pm",
        midnight: "mi\xE8janu\xE8ch",
        noon: "mi\xE8gjorn",
        morning: "del matin",
        afternoon: "de l\u2019apr\xE8p-mi\xE8gjorn",
        evening: "del ser",
        night: "de la nu\xE8ch"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "mi\xE8janu\xE8ch",
        noon: "mi\xE8gjorn",
        morning: "del matin",
        afternoon: "de l\u2019apr\xE8p-mi\xE8gjorn",
        evening: "del ser",
        night: "de la nu\xE8ch"
    },
    wide: {
        am: "ante meridiem",
        pm: "post meridiem",
        midnight: "mi\xE8janu\xE8ch",
        noon: "mi\xE8gjorn",
        morning: "del matin",
        afternoon: "de l\u2019apr\xE8p-mi\xE8gjorn",
        evening: "del ser",
        night: "de la nu\xE8ch"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    var unit = options === null || options === void 0 ? void 0 : options.unit;
    var ordinal;
    switch (number) {
        case 1:
            ordinal = "\xE8r";
            break;
        case 2:
            ordinal = "nd";
            break;
        default:
            ordinal = "en";
    }
    if (unit === "year" || unit === "week" || unit === "hour" || unit === "minute" || unit === "second") {
        ordinal += "a";
    }
    return number + ordinal;
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
// node_modules/date-fns/esm/locale/oc/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(èr|nd|en)?[a]?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(ab\.J\.C|apr\.J\.C|apr\.J\.-C)/i,
    abbreviated: /^(ab\.J\.-C|ab\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
    wide: /^(abans Jèsus-Crist|après Jèsus-Crist)/i
};
var parseEraPatterns = {
    any: [/^ab/i, /^ap/i]
};
var matchQuarterPatterns = {
    narrow: /^T[1234]/i,
    abbreviated: /^[1234](èr|nd|en)? trim\.?/i,
    wide: /^[1234](èr|nd|en)? trimèstre/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^(GN|FB|MÇ|AB|MA|JN|JL|AG|ST|OC|NV|DC)/i,
    abbreviated: /^(gen|febr|març|abr|mai|junh|jul|ag|set|oct|nov|dec)\.?/i,
    wide: /^(genièr|febrièr|març|abril|mai|junh|julhet|agost|setembre|octòbre|novembre|decembre)/i
};
var parseMonthPatterns = {
    any: [/^g/i, /^f/i, /^ma[r?]|MÇ/i, /^ab/i, /^ma[i?]/i, /^ju[n?]|JN/i, /^ju[l?]|JL/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^d[glmcjvs]\.?/i,
    short: /^d[glmcjvs]\.?/i,
    abbreviated: /^d[glmcjvs]\.?/i,
    wide: /^(dimenge|diluns|dimars|dimècres|dijòus|divendres|dissabte)/i
};
var parseDayPatterns = {
    narrow: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i],
    short: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i],
    abbreviated: [/^dg/i, /^dl/i, /^dm/i, /^dc/i, /^dj/i, /^dv/i, /^ds/i],
    any: [/^dg|dime/i, /^dl|dil/i, /^dm|dima/i, /^dc|dimè/i, /^dj|dij/i, /^dv|div/i, /^ds|dis/i]
};
var matchDayPeriodPatterns = {
    any: /(^(a\.?m|p\.?m))|(ante meridiem|post meridiem)|((del |de la |de l’)(matin|aprèp-miègjorn|vèspre|ser|nuèch))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /(^a)|ante meridiem/i,
        pm: /(^p)|post meridiem/i,
        midnight: /^mièj/i,
        noon: /^mièg/i,
        morning: /matin/i,
        afternoon: /aprèp-miègjorn/i,
        evening: /vèspre|ser/i,
        night: /nuèch/i
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
// node_modules/date-fns/esm/locale/oc/index.js
var locale = {
    code: "oc",
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
var oc_default = locale;
export { oc_default };
