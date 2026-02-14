import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/bn/_lib/localize/index.js
var numberValues = {
    locale: {
        "1": "\u09E7",
        "2": "\u09E8",
        "3": "\u09E9",
        "4": "\u09EA",
        "5": "\u09EB",
        "6": "\u09EC",
        "7": "\u09ED",
        "8": "\u09EE",
        "9": "\u09EF",
        "0": "\u09E6"
    },
    number: {
        "\u09E7": "1",
        "\u09E8": "2",
        "\u09E9": "3",
        "\u09EA": "4",
        "\u09EB": "5",
        "\u09EC": "6",
        "\u09ED": "7",
        "\u09EE": "8",
        "\u09EF": "9",
        "\u09E6": "0"
    }
};
var eraValues = {
    narrow: ["\u0996\u09CD\u09B0\u09BF\u0983\u09AA\u09C2\u0983", "\u0996\u09CD\u09B0\u09BF\u0983"],
    abbreviated: ["\u0996\u09CD\u09B0\u09BF\u0983\u09AA\u09C2\u09B0\u09CD\u09AC", "\u0996\u09CD\u09B0\u09BF\u0983"],
    wide: ["\u0996\u09CD\u09B0\u09BF\u09B8\u09CD\u099F\u09AA\u09C2\u09B0\u09CD\u09AC", "\u0996\u09CD\u09B0\u09BF\u09B8\u09CD\u099F\u09BE\u09AC\u09CD\u09A6"]
};
var quarterValues = {
    narrow: ["\u09E7", "\u09E8", "\u09E9", "\u09EA"],
    abbreviated: ["\u09E7\u09A4\u09CD\u09B0\u09C8", "\u09E8\u09A4\u09CD\u09B0\u09C8", "\u09E9\u09A4\u09CD\u09B0\u09C8", "\u09EA\u09A4\u09CD\u09B0\u09C8"],
    wide: ["\u09E7\u09AE \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995", "\u09E8\u09DF \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995", "\u09E9\u09DF \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995", "\u09EA\u09B0\u09CD\u09A5 \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995"]
};
var monthValues = {
    narrow: ["\u099C\u09BE\u09A8\u09C1", "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1", "\u09AE\u09BE\u09B0\u09CD\u099A", "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B8\u09CD\u099F", "\u09B8\u09C7\u09AA\u09CD\u099F", "\u0985\u0995\u09CD\u099F\u09CB", "\u09A8\u09AD\u09C7", "\u09A1\u09BF\u09B8\u09C7"],
    abbreviated: ["\u099C\u09BE\u09A8\u09C1", "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1", "\u09AE\u09BE\u09B0\u09CD\u099A", "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B8\u09CD\u099F", "\u09B8\u09C7\u09AA\u09CD\u099F", "\u0985\u0995\u09CD\u099F\u09CB", "\u09A8\u09AD\u09C7", "\u09A1\u09BF\u09B8\u09C7"],
    wide: ["\u099C\u09BE\u09A8\u09C1\u09DF\u09BE\u09B0\u09BF", "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09DF\u09BE\u09B0\u09BF", "\u09AE\u09BE\u09B0\u09CD\u099A", "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2", "\u09AE\u09C7", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B8\u09CD\u099F", "\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0", "\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0", "\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0", "\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0"]
};
var dayValues = {
    narrow: ["\u09B0", "\u09B8\u09CB", "\u09AE", "\u09AC\u09C1", "\u09AC\u09C3", "\u09B6\u09C1", "\u09B6"],
    short: ["\u09B0\u09AC\u09BF", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9", "\u09B6\u09C1\u0995\u09CD\u09B0", "\u09B6\u09A8\u09BF"],
    abbreviated: ["\u09B0\u09AC\u09BF", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9", "\u09B6\u09C1\u0995\u09CD\u09B0", "\u09B6\u09A8\u09BF"],
    wide: ["\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0", "\u09B8\u09CB\u09AE\u09AC\u09BE\u09B0", "\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0", "\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0", "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0 ", "\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0", "\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u09AA\u09C2",
        pm: "\u0985\u09AA",
        midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
        noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
        morning: "\u09B8\u0995\u09BE\u09B2",
        afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
        evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
        night: "\u09B0\u09BE\u09A4"
    },
    abbreviated: {
        am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8",
        pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8",
        midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
        noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
        morning: "\u09B8\u0995\u09BE\u09B2",
        afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
        evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
        night: "\u09B0\u09BE\u09A4"
    },
    wide: {
        am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8",
        pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8",
        midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
        noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
        morning: "\u09B8\u0995\u09BE\u09B2",
        afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
        evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
        night: "\u09B0\u09BE\u09A4"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u09AA\u09C2",
        pm: "\u0985\u09AA",
        midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
        noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
        morning: "\u09B8\u0995\u09BE\u09B2",
        afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
        evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
        night: "\u09B0\u09BE\u09A4"
    },
    abbreviated: {
        am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8",
        pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8",
        midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
        noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
        morning: "\u09B8\u0995\u09BE\u09B2",
        afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
        evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
        night: "\u09B0\u09BE\u09A4"
    },
    wide: {
        am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8",
        pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8",
        midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
        noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
        morning: "\u09B8\u0995\u09BE\u09B2",
        afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
        evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
        night: "\u09B0\u09BE\u09A4"
    }
};
function dateOrdinalNumber(number, localeNumber) {
    if (number > 18 && number <= 31) {
        return localeNumber + "\u09B6\u09C7";
    }
    else {
        switch (number) {
            case 1:
                return localeNumber + "\u09B2\u09BE";
            case 2:
            case 3:
                return localeNumber + "\u09B0\u09BE";
            case 4:
                return localeNumber + "\u09A0\u09BE";
            default:
                return localeNumber + "\u0987";
        }
    }
}
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    var localeNumber = numberToLocale(number);
    var unit = options === null || options === void 0 ? void 0 : options.unit;
    if (unit === "date") {
        return dateOrdinalNumber(number, localeNumber);
    }
    if (number > 10 || number === 0)
        return localeNumber + "\u09A4\u09AE";
    var rem10 = number % 10;
    switch (rem10) {
        case 2:
        case 3:
            return localeNumber + "\u09DF";
        case 4:
            return localeNumber + "\u09B0\u09CD\u09A5";
        case 6:
            return localeNumber + "\u09B7\u09CD\u09A0";
        default:
            return localeNumber + "\u09AE";
    }
};
function numberToLocale(enNumber) {
    return enNumber.toString().replace(/\d/g, function (match2) {
        return numberValues.locale[match2];
    });
}
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
// node_modules/date-fns/esm/locale/bn/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",
        other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1"
    },
    xSeconds: {
        one: "\u09E7 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",
        other: "{{count}} \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1"
    },
    halfAMinute: "\u0986\u09A7 \u09AE\u09BF\u09A8\u09BF\u099F",
    lessThanXMinutes: {
        one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09AE\u09BF\u09A8\u09BF\u099F",
        other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09AE\u09BF\u09A8\u09BF\u099F"
    },
    xMinutes: {
        one: "\u09E7 \u09AE\u09BF\u09A8\u09BF\u099F",
        other: "{{count}} \u09AE\u09BF\u09A8\u09BF\u099F"
    },
    aboutXHours: {
        one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u0998\u09A8\u09CD\u099F\u09BE",
        other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u0998\u09A8\u09CD\u099F\u09BE"
    },
    xHours: {
        one: "\u09E7 \u0998\u09A8\u09CD\u099F\u09BE",
        other: "{{count}} \u0998\u09A8\u09CD\u099F\u09BE"
    },
    xDays: {
        one: "\u09E7 \u09A6\u09BF\u09A8",
        other: "{{count}} \u09A6\u09BF\u09A8"
    },
    aboutXWeeks: {
        one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9",
        other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9"
    },
    xWeeks: {
        one: "\u09E7 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9",
        other: "{{count}} \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9"
    },
    aboutXMonths: {
        one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09AE\u09BE\u09B8",
        other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09AE\u09BE\u09B8"
    },
    xMonths: {
        one: "\u09E7 \u09AE\u09BE\u09B8",
        other: "{{count}} \u09AE\u09BE\u09B8"
    },
    aboutXYears: {
        one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09AC\u099B\u09B0",
        other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09AC\u099B\u09B0"
    },
    xYears: {
        one: "\u09E7 \u09AC\u099B\u09B0",
        other: "{{count}} \u09AC\u099B\u09B0"
    },
    overXYears: {
        one: "\u09E7 \u09AC\u099B\u09B0\u09C7\u09B0 \u09AC\u09C7\u09B6\u09BF",
        other: "{{count}} \u09AC\u099B\u09B0\u09C7\u09B0 \u09AC\u09C7\u09B6\u09BF"
    },
    almostXYears: {
        one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09AC\u099B\u09B0",
        other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09AC\u099B\u09B0"
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
        result = tokenValue.other.replace("{{count}}", numberToLocale(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return result + " \u098F\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7";
        }
        else {
            return result + " \u0986\u0997\u09C7";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/bn/_lib/formatLong/index.js
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
    full: "{{date}} {{time}} '\u09B8\u09AE\u09DF'",
    long: "{{date}} {{time}} '\u09B8\u09AE\u09DF'",
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
// node_modules/date-fns/esm/locale/bn/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\u0997\u09A4' eeee '\u09B8\u09AE\u09DF' p",
    yesterday: "'\u0997\u09A4\u0995\u09BE\u09B2' '\u09B8\u09AE\u09DF' p",
    today: "'\u0986\u099C' '\u09B8\u09AE\u09DF' p",
    tomorrow: "'\u0986\u0997\u09BE\u09AE\u09C0\u0995\u09BE\u09B2' '\u09B8\u09AE\u09DF' p",
    nextWeek: "eeee '\u09B8\u09AE\u09DF' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/bn/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(ম|য়|র্থ|ষ্ঠ|শে|ই|তম)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(খ্রিঃপূঃ|খ্রিঃ)/i,
    abbreviated: /^(খ্রিঃপূর্ব|খ্রিঃ)/i,
    wide: /^(খ্রিস্টপূর্ব|খ্রিস্টাব্দ)/i
};
var parseEraPatterns = {
    narrow: [/^খ্রিঃপূঃ/i, /^খ্রিঃ/i],
    abbreviated: [/^খ্রিঃপূর্ব/i, /^খ্রিঃ/i],
    wide: [/^খ্রিস্টপূর্ব/i, /^খ্রিস্টাব্দ/i]
};
var matchQuarterPatterns = {
    narrow: /^[১২৩৪]/i,
    abbreviated: /^[১২৩৪]ত্রৈ/i,
    wide: /^[১২৩৪](ম|য়|র্থ)? ত্রৈমাসিক/i
};
var parseQuarterPatterns = {
    any: [/১/i, /২/i, /৩/i, /৪/i]
};
var matchMonthPatterns = {
    narrow: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,
    abbreviated: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,
    wide: /^(জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর)/i
};
var parseMonthPatterns = {
    any: [/^জানু/i, /^ফেব্রু/i, /^মার্চ/i, /^এপ্রিল/i, /^মে/i, /^জুন/i, /^জুলাই/i, /^আগস্ট/i, /^সেপ্ট/i, /^অক্টো/i, /^নভে/i, /^ডিসে/i]
};
var matchDayPatterns = {
    narrow: /^(র|সো|ম|বু|বৃ|শু|শ)+/i,
    short: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,
    abbreviated: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,
    wide: /^(রবিবার|সোমবার|মঙ্গলবার|বুধবার|বৃহস্পতিবার |শুক্রবার|শনিবার)+/i
};
var parseDayPatterns = {
    narrow: [/^র/i, /^সো/i, /^ম/i, /^বু/i, /^বৃ/i, /^শু/i, /^শ/i],
    short: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i],
    abbreviated: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i],
    wide: [/^রবিবার/i, /^সোমবার/i, /^মঙ্গলবার/i, /^বুধবার/i, /^বৃহস্পতিবার /i, /^শুক্রবার/i, /^শনিবার/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(পূ|অপ|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,
    abbreviated: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,
    wide: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^পূ/i,
        pm: /^অপ/i,
        midnight: /^মধ্যরাত/i,
        noon: /^মধ্যাহ্ন/i,
        morning: /সকাল/i,
        afternoon: /বিকাল/i,
        evening: /সন্ধ্যা/i,
        night: /রাত/i
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
        defaultParseWidth: "wide"
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
        defaultParseWidth: "wide"
    }),
    dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
var match_default = match;
// node_modules/date-fns/esm/locale/bn/index.js
var locale = {
    code: "bn",
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
var bn_default = locale;
export { bn_default };
