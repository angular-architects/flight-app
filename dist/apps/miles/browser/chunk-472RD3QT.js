import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/ar-TN/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u0629",
        two: "\u0623\u0642\u0644 \u0645\u0646 \u0632\u0648\u0632 \u062B\u0648\u0627\u0646\u064A",
        threeToTen: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062B\u0648\u0627\u0646\u064A",
        other: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062B\u0627\u0646\u064A\u0629"
    },
    xSeconds: {
        one: "\u062B\u0627\u0646\u064A\u0629",
        two: "\u0632\u0648\u0632 \u062B\u0648\u0627\u0646\u064A",
        threeToTen: "{{count}} \u062B\u0648\u0627\u0646\u064A",
        other: "{{count}} \u062B\u0627\u0646\u064A\u0629"
    },
    halfAMinute: "\u0646\u0635 \u062F\u0642\u064A\u0642\u0629",
    lessThanXMinutes: {
        one: "\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629",
        two: "\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u062A\u064A\u0646",
        threeToTen: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062F\u0642\u0627\u064A\u0642",
        other: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062F\u0642\u064A\u0642\u0629"
    },
    xMinutes: {
        one: "\u062F\u0642\u064A\u0642\u0629",
        two: "\u062F\u0642\u064A\u0642\u062A\u064A\u0646",
        threeToTen: "{{count}} \u062F\u0642\u0627\u064A\u0642",
        other: "{{count}} \u062F\u0642\u064A\u0642\u0629"
    },
    aboutXHours: {
        one: "\u0633\u0627\u0639\u0629 \u062A\u0642\u0631\u064A\u0628",
        two: "\u0633\u0627\u0639\u062A\u064A\u0646 \u062A\u0642\u0631\u064A\u0628",
        threeToTen: "{{count}} \u0633\u0648\u0627\u064A\u0639 \u062A\u0642\u0631\u064A\u0628",
        other: "{{count}} \u0633\u0627\u0639\u0629 \u062A\u0642\u0631\u064A\u0628"
    },
    xHours: {
        one: "\u0633\u0627\u0639\u0629",
        two: "\u0633\u0627\u0639\u062A\u064A\u0646",
        threeToTen: "{{count}} \u0633\u0648\u0627\u064A\u0639",
        other: "{{count}} \u0633\u0627\u0639\u0629"
    },
    xDays: {
        one: "\u0646\u0647\u0627\u0631",
        two: "\u0646\u0647\u0627\u0631\u064A\u0646",
        threeToTen: "{{count}} \u0623\u064A\u0627\u0645",
        other: "{{count}} \u064A\u0648\u0645"
    },
    aboutXWeeks: {
        one: "\u062C\u0645\u0639\u0629 \u062A\u0642\u0631\u064A\u0628",
        two: "\u062C\u0645\u0639\u062A\u064A\u0646 \u062A\u0642\u0631\u064A\u0628",
        threeToTen: "{{count}} \u062C\u0645\u0627\u0639 \u062A\u0642\u0631\u064A\u0628",
        other: "{{count}} \u062C\u0645\u0639\u0629 \u062A\u0642\u0631\u064A\u0628"
    },
    xWeeks: {
        one: "\u062C\u0645\u0639\u0629",
        two: "\u062C\u0645\u0639\u062A\u064A\u0646",
        threeToTen: "{{count}} \u062C\u0645\u0627\u0639",
        other: "{{count}} \u062C\u0645\u0639\u0629"
    },
    aboutXMonths: {
        one: "\u0634\u0647\u0631 \u062A\u0642\u0631\u064A\u0628",
        two: "\u0634\u0647\u0631\u064A\u0646 \u062A\u0642\u0631\u064A\u0628",
        threeToTen: "{{count}} \u0623\u0634\u0647\u0631\u0629 \u062A\u0642\u0631\u064A\u0628",
        other: "{{count}} \u0634\u0647\u0631 \u062A\u0642\u0631\u064A\u0628"
    },
    xMonths: {
        one: "\u0634\u0647\u0631",
        two: "\u0634\u0647\u0631\u064A\u0646",
        threeToTen: "{{count}} \u0623\u0634\u0647\u0631\u0629",
        other: "{{count}} \u0634\u0647\u0631"
    },
    aboutXYears: {
        one: "\u0639\u0627\u0645 \u062A\u0642\u0631\u064A\u0628",
        two: "\u0639\u0627\u0645\u064A\u0646 \u062A\u0642\u0631\u064A\u0628",
        threeToTen: "{{count}} \u0623\u0639\u0648\u0627\u0645 \u062A\u0642\u0631\u064A\u0628",
        other: "{{count}} \u0639\u0627\u0645 \u062A\u0642\u0631\u064A\u0628"
    },
    xYears: {
        one: "\u0639\u0627\u0645",
        two: "\u0639\u0627\u0645\u064A\u0646",
        threeToTen: "{{count}} \u0623\u0639\u0648\u0627\u0645",
        other: "{{count}} \u0639\u0627\u0645"
    },
    overXYears: {
        one: "\u0623\u0643\u062B\u0631 \u0645\u0646 \u0639\u0627\u0645",
        two: "\u0623\u0643\u062B\u0631 \u0645\u0646 \u0639\u0627\u0645\u064A\u0646",
        threeToTen: "\u0623\u0643\u062B\u0631 \u0645\u0646 {{count}} \u0623\u0639\u0648\u0627\u0645",
        other: "\u0623\u0643\u062B\u0631 \u0645\u0646 {{count}} \u0639\u0627\u0645"
    },
    almostXYears: {
        one: "\u0639\u0627\u0645 \u062A\u0642\u0631\u064A\u0628",
        two: "\u0639\u0627\u0645\u064A\u0646 \u062A\u0642\u0631\u064A\u0628",
        threeToTen: "{{count}} \u0623\u0639\u0648\u0627\u0645 \u062A\u0642\u0631\u064A\u0628",
        other: "{{count}} \u0639\u0627\u0645 \u062A\u0642\u0631\u064A\u0628"
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var usageGroup = formatDistanceLocale[token];
    var result;
    if (typeof usageGroup === "string") {
        result = usageGroup;
    }
    else if (count === 1) {
        result = usageGroup.one;
    }
    else if (count === 2) {
        result = usageGroup.two;
    }
    else if (count <= 10) {
        result = usageGroup.threeToTen.replace("{{count}}", String(count));
    }
    else {
        result = usageGroup.other.replace("{{count}}", String(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "\u0641\u064A " + result;
        }
        else {
            return "\u0639\u0646\u062F\u0648 " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/ar-TN/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE\u060C do MMMM y",
    long: "do MMMM y",
    medium: "d MMM y",
    short: "dd/MM/yyyy"
};
var timeFormats = {
    full: "HH:mm:ss",
    long: "HH:mm:ss",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} '\u0645\u0639' {{time}}",
    long: "{{date}} '\u0645\u0639' {{time}}",
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
// node_modules/date-fns/esm/locale/ar-TN/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "eeee '\u0625\u0644\u064A \u0641\u0627\u062A \u0645\u0639' p",
    yesterday: "'\u0627\u0644\u0628\u0627\u0631\u062D \u0645\u0639' p",
    today: "'\u0627\u0644\u064A\u0648\u0645 \u0645\u0639' p",
    tomorrow: "'\u063A\u062F\u0648\u0629 \u0645\u0639' p",
    nextWeek: "eeee '\u0627\u0644\u062C\u0645\u0639\u0629 \u0627\u0644\u062C\u0627\u064A\u0629 \u0645\u0639' p '\u0646\u0647\u0627\u0631'",
    other: "P"
};
var formatRelative = function formatRelative2(token) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/ar-TN/_lib/localize/index.js
var eraValues = {
    narrow: ["\u0642", "\u0628"],
    abbreviated: ["\u0642.\u0645.", "\u0628.\u0645."],
    wide: ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0628\u0639\u062F \u0627\u0644\u0645\u064A\u0644\u0627\u062F"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["\u06311", "\u06312", "\u06313", "\u06314"],
    wide: ["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"]
};
var monthValues = {
    narrow: ["\u062F", "\u0646", "\u0623", "\u0633", "\u0623", "\u062C", "\u062C", "\u0645", "\u0623", "\u0645", "\u0641", "\u062C"],
    abbreviated: ["\u062C\u0627\u0646\u0641\u064A", "\u0641\u064A\u0641\u0631\u064A", "\u0645\u0627\u0631\u0633", "\u0623\u0641\u0631\u064A\u0644", "\u0645\u0627\u064A", "\u062C\u0648\u0627\u0646", "\u062C\u0648\u064A\u0644\u064A\u0629", "\u0623\u0648\u062A", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"],
    wide: ["\u062C\u0627\u0646\u0641\u064A", "\u0641\u064A\u0641\u0631\u064A", "\u0645\u0627\u0631\u0633", "\u0623\u0641\u0631\u064A\u0644", "\u0645\u0627\u064A", "\u062C\u0648\u0627\u0646", "\u062C\u0648\u064A\u0644\u064A\u0629", "\u0623\u0648\u062A", "\u0633\u0628\u062A\u0645\u0628\u0631", "\u0623\u0643\u062A\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062F\u064A\u0633\u0645\u0628\u0631"]
};
var dayValues = {
    narrow: ["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"],
    short: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
    abbreviated: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
    wide: ["\u0627\u0644\u0623\u062D\u062F", "\u0627\u0644\u0627\u062B\u0646\u064A\u0646", "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621", "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621", "\u0627\u0644\u062E\u0645\u064A\u0633", "\u0627\u0644\u062C\u0645\u0639\u0629", "\u0627\u0644\u0633\u0628\u062A"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u0635",
        pm: "\u0639",
        morning: "\u0627\u0644\u0635\u0628\u0627\u062D",
        noon: "\u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        evening: "\u0627\u0644\u0639\u0634\u064A\u0629",
        night: "\u0627\u0644\u0644\u064A\u0644",
        midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644"
    },
    abbreviated: {
        am: "\u0635",
        pm: "\u0639",
        morning: "\u0627\u0644\u0635\u0628\u0627\u062D",
        noon: "\u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        evening: "\u0627\u0644\u0639\u0634\u064A\u0629",
        night: "\u0627\u0644\u0644\u064A\u0644",
        midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644"
    },
    wide: {
        am: "\u0635",
        pm: "\u0639",
        morning: "\u0627\u0644\u0635\u0628\u0627\u062D",
        noon: "\u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        evening: "\u0627\u0644\u0639\u0634\u064A\u0629",
        night: "\u0627\u0644\u0644\u064A\u0644",
        midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u0635",
        pm: "\u0639",
        morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D",
        noon: "\u0641\u064A \u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        evening: "\u0641\u064A \u0627\u0644\u0639\u0634\u064A\u0629",
        night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644",
        midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644"
    },
    abbreviated: {
        am: "\u0635",
        pm: "\u0639",
        morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D",
        noon: "\u0641\u064A \u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        evening: "\u0641\u064A \u0627\u0644\u0639\u0634\u064A\u0629",
        night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644",
        midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644"
    },
    wide: {
        am: "\u0635",
        pm: "\u0639",
        morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D",
        noon: "\u0641\u064A \u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        afternoon: "\u0628\u0639\u062F \u0627\u0644\u0642\u0627\u064A\u0644\u0629",
        evening: "\u0641\u064A \u0627\u0644\u0639\u0634\u064A\u0629",
        night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644",
        midnight: "\u0646\u0635 \u0627\u0644\u0644\u064A\u0644"
    }
};
var ordinalNumber = function ordinalNumber2(num) {
    return String(num);
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
// node_modules/date-fns/esm/locale/ar-TN/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /[قب]/,
    abbreviated: /[قب]\.م\./,
    wide: /(قبل|بعد) الميلاد/
};
var parseEraPatterns = {
    any: [/قبل/, /بعد/]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /ر[1234]/,
    wide: /الربع (الأول|الثاني|الثالث|الرابع)/
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[جفمأسند]/,
    abbreviated: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
    wide: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
};
var parseMonthPatterns = {
    narrow: [/^ج/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ج/i, /^ج/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i],
    any: [/^جانفي/i, /^فيفري/i, /^مارس/i, /^أفريل/i, /^ماي/i, /^جوان/i, /^جويلية/i, /^أوت/i, /^سبتمبر/i, /^أكتوبر/i, /^نوفمبر/i, /^ديسمبر/i]
};
var matchDayPatterns = {
    narrow: /^[حنثرخجس]/i,
    short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
    abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
    wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
};
var parseDayPatterns = {
    narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
    wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i],
    any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(ص|ع|ن ل|ل|(في|مع) (صباح|قايلة|عشية|ليل))/,
    any: /^([صع]|نص الليل|قايلة|(في|مع) (صباح|قايلة|عشية|ليل))/
};
var parseDayPeriodPatterns = {
    any: {
        am: /^ص/,
        pm: /^ع/,
        midnight: /نص الليل/,
        noon: /قايلة/,
        afternoon: /بعد القايلة/,
        morning: /صباح/,
        evening: /عشية/,
        night: /ليل/
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
// node_modules/date-fns/esm/locale/ar-TN/index.js
var locale = {
    code: "ar-TN",
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
var ar_TN_default = locale;
export { ar_TN_default };
