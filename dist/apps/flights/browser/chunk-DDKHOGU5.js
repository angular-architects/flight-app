import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/az/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "bir saniy\u0259d\u0259n az",
        other: "{{count}} bir saniy\u0259d\u0259n az"
    },
    xSeconds: {
        one: "1 saniy\u0259",
        other: "{{count}} saniy\u0259"
    },
    halfAMinute: "yar\u0131m d\u0259qiq\u0259",
    lessThanXMinutes: {
        one: "bir d\u0259qiq\u0259d\u0259n az",
        other: "{{count}} bir d\u0259qiq\u0259d\u0259n az"
    },
    xMinutes: {
        one: "bir d\u0259qiq\u0259",
        other: "{{count}} d\u0259qiq\u0259"
    },
    aboutXHours: {
        one: "t\u0259xmin\u0259n 1 saat",
        other: "t\u0259xmin\u0259n {{count}} saat"
    },
    xHours: {
        one: "1 saat",
        other: "{{count}} saat"
    },
    xDays: {
        one: "1 g\xFCn",
        other: "{{count}} g\xFCn"
    },
    aboutXWeeks: {
        one: "t\u0259xmin\u0259n 1 h\u0259ft\u0259",
        other: "t\u0259xmin\u0259n {{count}} h\u0259ft\u0259"
    },
    xWeeks: {
        one: "1 h\u0259ft\u0259",
        other: "{{count}} h\u0259ft\u0259"
    },
    aboutXMonths: {
        one: "t\u0259xmin\u0259n 1 ay",
        other: "t\u0259xmin\u0259n {{count}} ay"
    },
    xMonths: {
        one: "1 ay",
        other: "{{count}} ay"
    },
    aboutXYears: {
        one: "t\u0259xmin\u0259n 1 il",
        other: "t\u0259xmin\u0259n {{count}} il"
    },
    xYears: {
        one: "1 il",
        other: "{{count}} il"
    },
    overXYears: {
        one: "1 ild\u0259n \xE7ox",
        other: "{{count}} ild\u0259n \xE7ox"
    },
    almostXYears: {
        one: "dem\u0259k olar ki 1 il",
        other: "dem\u0259k olar ki {{count}} il"
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
            return result + " sonra";
        }
        else {
            return result + " \u0259vv\u0259l";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/az/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, do MMMM y 'il'",
    long: "do MMMM y 'il'",
    medium: "d MMM y 'il'",
    short: "dd.MM.yyyy"
};
var timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
var dateTimeFormats = {
    full: "{{date}} {{time}} - 'd\u0259'",
    long: "{{date}} {{time}} - 'd\u0259'",
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
// node_modules/date-fns/esm/locale/az/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'sonuncu' eeee p -'d\u0259'",
    yesterday: "'d\xFCn\u0259n' p -'d\u0259'",
    today: "'bug\xFCn' p -'d\u0259'",
    tomorrow: "'sabah' p -'d\u0259'",
    nextWeek: "eeee p -'d\u0259'",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/az/_lib/localize/index.js
var eraValues = {
    narrow: ["e.\u0259", "b.e"],
    abbreviated: ["e.\u0259", "b.e"],
    wide: ["eram\u0131zdan \u0259vv\u0259l", "bizim era"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["K1", "K2", "K3", "K4"],
    wide: ["1ci kvartal", "2ci kvartal", "3c\xFC kvartal", "4c\xFC kvartal"]
};
var monthValues = {
    narrow: ["Y", "F", "M", "A", "M", "\u0130", "\u0130", "A", "S", "O", "N", "D"],
    abbreviated: ["Yan", "Fev", "Mar", "Apr", "May", "\u0130yun", "\u0130yul", "Avq", "Sen", "Okt", "Noy", "Dek"],
    wide: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "\u0130yun", "\u0130yul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
};
var dayValues = {
    narrow: ["B.", "B.e", "\xC7.a", "\xC7.", "C.a", "C.", "\u015E."],
    short: ["B.", "B.e", "\xC7.a", "\xC7.", "C.a", "C.", "\u015E."],
    abbreviated: ["Baz", "Baz.e", "\xC7\u0259r.a", "\xC7\u0259r", "C\xFCm.a", "C\xFCm", "\u015E\u0259"],
    wide: ["Bazar", "Bazar ert\u0259si", "\xC7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131", "\xC7\u0259r\u015F\u0259nb\u0259", "C\xFCm\u0259 ax\u015Fam\u0131", "C\xFCm\u0259", "\u015E\u0259nb\u0259"]
};
var dayPeriodValues = {
    narrow: {
        am: "am",
        pm: "pm",
        midnight: "gec\u0259yar\u0131",
        noon: "g\xFCn",
        morning: "s\u0259h\u0259r",
        afternoon: "g\xFCnd\xFCz",
        evening: "ax\u015Fam",
        night: "gec\u0259"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "gec\u0259yar\u0131",
        noon: "g\xFCn",
        morning: "s\u0259h\u0259r",
        afternoon: "g\xFCnd\xFCz",
        evening: "ax\u015Fam",
        night: "gec\u0259"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "gec\u0259yar\u0131",
        noon: "g\xFCn",
        morning: "s\u0259h\u0259r",
        afternoon: "g\xFCnd\xFCz",
        evening: "ax\u015Fam",
        night: "gec\u0259"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "gec\u0259yar\u0131",
        noon: "g\xFCn",
        morning: "s\u0259h\u0259r",
        afternoon: "g\xFCnd\xFCz",
        evening: "ax\u015Fam",
        night: "gec\u0259"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "gec\u0259yar\u0131",
        noon: "g\xFCn",
        morning: "s\u0259h\u0259r",
        afternoon: "g\xFCnd\xFCz",
        evening: "ax\u015Fam",
        night: "gec\u0259"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "gec\u0259yar\u0131",
        noon: "g\xFCn",
        morning: "s\u0259h\u0259r",
        afternoon: "g\xFCnd\xFCz",
        evening: "ax\u015Fam",
        night: "gec\u0259"
    }
};
var suffixes = {
    1: "-inci",
    5: "-inci",
    8: "-inci",
    70: "-inci",
    80: "-inci",
    2: "-nci",
    7: "-nci",
    20: "-nci",
    50: "-nci",
    3: "-\xFCnc\xFC",
    4: "-\xFCnc\xFC",
    100: "-\xFCnc\xFC",
    6: "-nc\u0131",
    9: "-uncu",
    10: "-uncu",
    30: "-uncu",
    60: "-\u0131nc\u0131",
    90: "-\u0131nc\u0131"
};
var getSuffix = function getSuffix2(number) {
    if (number === 0) {
        return number + "-\u0131nc\u0131";
    }
    var a = number % 10;
    var b = number % 100 - a;
    var c = number >= 100 ? 100 : null;
    if (suffixes[a]) {
        return suffixes[a];
    }
    else if (suffixes[b]) {
        return suffixes[b];
    }
    else if (c !== null) {
        return suffixes[c];
    }
    return "";
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var suffix = getSuffix(number);
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
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/az/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)$/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,
    wide: /^(bizim eradan əvvəl|bizim era)$/i
};
var parseEraPatterns = {
    any: [/^b$/i, /^(a|c)$/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]$/i,
    abbreviated: /^K[1234]$/i,
    wide: /^[1234](ci)? kvartal$/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[(?-i)yfmaisond]$/i,
    abbreviated: /^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,
    wide: /^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i
};
var parseMonthPatterns = {
    narrow: [/^[(?-i)y]$/i, /^[(?-i)f]$/i, /^[(?-i)m]$/i, /^[(?-i)a]$/i, /^[(?-i)m]$/i, /^[(?-i)i]$/i, /^[(?-i)i]$/i, /^[(?-i)a]$/i, /^[(?-i)s]$/i, /^[(?-i)o]$/i, /^[(?-i)n]$/i, /^[(?-i)d]$/i],
    abbreviated: [/^Yan$/i, /^Fev$/i, /^Mar$/i, /^Apr$/i, /^May$/i, /^İyun$/i, /^İyul$/i, /^Avg$/i, /^Sen$/i, /^Okt$/i, /^Noy$/i, /^Dek$/i],
    wide: [/^Yanvar$/i, /^Fevral$/i, /^Mart$/i, /^Aprel$/i, /^May$/i, /^İyun$/i, /^İyul$/i, /^Avgust$/i, /^Sentyabr$/i, /^Oktyabr$/i, /^Noyabr$/i, /^Dekabr$/i]
};
var matchDayPatterns = {
    narrow: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
    short: /^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,
    abbreviated: /^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,
    wide: /^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i
};
var parseDayPatterns = {
    narrow: [/^B\.$/i, /^B\.e$/i, /^Ç\.a$/i, /^Ç\.$/i, /^C\.a$/i, /^C\.$/i, /^Ş\.$/i],
    abbreviated: [/^Baz$/i, /^Baz\.e$/i, /^Çər\.a$/i, /^Çər$/i, /^Cüm\.a$/i, /^Cüm$/i, /^Şə$/i],
    wide: [/^Bazar$/i, /^Bazar ertəsi$/i, /^Çərşənbə axşamı$/i, /^Çərşənbə$/i, /^Cümə axşamı$/i, /^Cümə$/i, /^Şənbə$/i],
    any: [/^B\.$/i, /^B\.e$/i, /^Ç\.a$/i, /^Ç\.$/i, /^C\.a$/i, /^C\.$/i, /^Ş\.$/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,
    any: /^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a$/i,
        pm: /^p$/i,
        midnight: /^gecəyarı$/i,
        noon: /^gün$/i,
        morning: /səhər$/i,
        afternoon: /gündüz$/i,
        evening: /axşam$/i,
        night: /gecə$/i
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
        defaultParseWidth: "narrow"
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
// node_modules/date-fns/esm/locale/az/index.js
var locale = {
    code: "az",
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
var az_default = locale;
export { az_default };
