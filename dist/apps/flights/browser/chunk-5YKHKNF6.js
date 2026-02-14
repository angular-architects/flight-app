import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/ht/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "mwens pase yon segond",
        other: "mwens pase {{count}} segond"
    },
    xSeconds: {
        one: "1 segond",
        other: "{{count}} segond"
    },
    halfAMinute: "30 segond",
    lessThanXMinutes: {
        one: "mwens pase yon minit",
        other: "mwens pase {{count}} minit"
    },
    xMinutes: {
        one: "1 minit",
        other: "{{count}} minit"
    },
    aboutXHours: {
        one: "anviwon in\xE8",
        other: "anviwon {{count}} \xE8"
    },
    xHours: {
        one: "1 l\xE8",
        other: "{{count}} l\xE8"
    },
    xDays: {
        one: "1 jou",
        other: "{{count}} jou"
    },
    aboutXWeeks: {
        one: "anviwon 1 sem\xE8n",
        other: "anviwon {{count}} sem\xE8n"
    },
    xWeeks: {
        one: "1 sem\xE8n",
        other: "{{count}} sem\xE8n"
    },
    aboutXMonths: {
        one: "anviwon 1 mwa",
        other: "anviwon {{count}} mwa"
    },
    xMonths: {
        one: "1 mwa",
        other: "{{count}} mwa"
    },
    aboutXYears: {
        one: "anviwon 1 an",
        other: "anviwon {{count}} an"
    },
    xYears: {
        one: "1 an",
        other: "{{count}} an"
    },
    overXYears: {
        one: "plis pase 1 an",
        other: "plis pase {{count}} an"
    },
    almostXYears: {
        one: "pr\xE8ske 1 an",
        other: "pr\xE8ske {{count}} an"
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
            return "nan " + result;
        }
        else {
            return "sa f\xE8 " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/ht/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE d MMMM y",
    long: "d MMMM y",
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
    full: "{{date}} 'nan l\xE8' {{time}}",
    long: "{{date}} 'nan l\xE8' {{time}}",
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
// node_modules/date-fns/esm/locale/ht/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "eeee 'pase nan l\xE8' p",
    yesterday: "'y\xE8 nan l\xE8' p",
    today: "'jodi a' p",
    tomorrow: "'demen nan l\xE8' p'",
    nextWeek: "eeee 'pwochen nan l\xE8' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/ht/_lib/localize/index.js
var eraValues = {
    narrow: ["av. J.-K", "ap. J.-K"],
    abbreviated: ["av. J.-K", "ap. J.-K"],
    wide: ["anvan Jezi Kris", "apre Jezi Kris"]
};
var quarterValues = {
    narrow: ["T1", "T2", "T3", "T4"],
    abbreviated: ["1ye trim.", "2y\xE8m trim.", "3y\xE8m trim.", "4y\xE8m trim."],
    wide: ["1ye trim\xE8s", "2y\xE8m trim\xE8s", "3y\xE8m trim\xE8s", "4y\xE8m trim\xE8s"]
};
var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"],
    abbreviated: ["janv.", "fevr.", "mas", "avr.", "me", "jen", "jiy\xE8", "out", "sept.", "okt.", "nov.", "des."],
    wide: ["janvye", "fevrye", "mas", "avril", "me", "jen", "jiy\xE8", "out", "septanm", "okt\xF2b", "novanm", "desanm"]
};
var dayValues = {
    narrow: ["D", "L", "M", "M", "J", "V", "S"],
    short: ["di", "le", "ma", "m\xE8", "je", "va", "sa"],
    abbreviated: ["dim.", "len.", "mad.", "m\xE8k.", "jed.", "van.", "sam."],
    wide: ["dimanch", "lendi", "madi", "m\xE8kredi", "jedi", "vandredi", "samdi"]
};
var dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "minwit",
        noon: "midi",
        morning: "mat.",
        afternoon: "ap.m.",
        evening: "swa",
        night: "mat."
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "minwit",
        noon: "midi",
        morning: "maten",
        afternoon: "apr\xE8midi",
        evening: "swa",
        night: "maten"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "minwit",
        noon: "midi",
        morning: "nan maten",
        afternoon: "nan apr\xE8midi",
        evening: "nan asw\xE8",
        night: "nan maten"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    if (number === 0)
        return String(number);
    var suffix = number === 1 ? "ye" : "y\xE8m";
    return number + suffix;
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
// node_modules/date-fns/esm/locale/ht/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(ye|yèm)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(av\.J\.K|ap\.J\.K|ap\.J\.-K)/i,
    abbreviated: /^(av\.J\.-K|av\.J-K|apr\.J\.-K|apr\.J-K|ap\.J-K)/i,
    wide: /^(avan Jezi Kris|apre Jezi Kris)/i
};
var parseEraPatterns = {
    any: [/^av/i, /^ap/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^t[1234]/i,
    wide: /^[1234](ye|yèm)? trimès/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(janv|fevr|mas|avr|me|jen|jiyè|out|sept|okt|nov|des)\.?/i,
    wide: /^(janvye|fevrye|mas|avril|me|jen|jiyè|out|septanm|oktòb|novanm|desanm)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^o/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^ma/i, /^av/i, /^me/i, /^je/i, /^ji/i, /^ou/i, /^s/i, /^ok/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[lmjvsd]/i,
    short: /^(di|le|ma|me|je|va|sa)/i,
    abbreviated: /^(dim|len|mad|mèk|jed|van|sam)\.?/i,
    wide: /^(dimanch|lendi|madi|mèkredi|jedi|vandredi|samdi)/i
};
var parseDayPatterns = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
    any: [/^di/i, /^le/i, /^ma/i, /^mè/i, /^je/i, /^va/i, /^sa/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|minwit|midi|mat\.?|ap\.?m\.?|swa)/i,
    any: /^([ap]\.?\s?m\.?|nan maten|nan aprèmidi|nan aswè)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^min/i,
        noon: /^mid/i,
        morning: /mat/i,
        afternoon: /ap/i,
        evening: /sw/i,
        night: /nwit/i
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
// node_modules/date-fns/esm/locale/ht/index.js
var locale = {
    code: "ht",
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
var ht_default = locale;
export { ht_default };
