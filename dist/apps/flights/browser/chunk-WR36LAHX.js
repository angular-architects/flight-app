import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/tr/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "bir saniyeden az",
        other: "{{count}} saniyeden az"
    },
    xSeconds: {
        one: "1 saniye",
        other: "{{count}} saniye"
    },
    halfAMinute: "yar\u0131m dakika",
    lessThanXMinutes: {
        one: "bir dakikadan az",
        other: "{{count}} dakikadan az"
    },
    xMinutes: {
        one: "1 dakika",
        other: "{{count}} dakika"
    },
    aboutXHours: {
        one: "yakla\u015F\u0131k 1 saat",
        other: "yakla\u015F\u0131k {{count}} saat"
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
        one: "yakla\u015F\u0131k 1 hafta",
        other: "yakla\u015F\u0131k {{count}} hafta"
    },
    xWeeks: {
        one: "1 hafta",
        other: "{{count}} hafta"
    },
    aboutXMonths: {
        one: "yakla\u015F\u0131k 1 ay",
        other: "yakla\u015F\u0131k {{count}} ay"
    },
    xMonths: {
        one: "1 ay",
        other: "{{count}} ay"
    },
    aboutXYears: {
        one: "yakla\u015F\u0131k 1 y\u0131l",
        other: "yakla\u015F\u0131k {{count}} y\u0131l"
    },
    xYears: {
        one: "1 y\u0131l",
        other: "{{count}} y\u0131l"
    },
    overXYears: {
        one: "1 y\u0131ldan fazla",
        other: "{{count}} y\u0131ldan fazla"
    },
    almostXYears: {
        one: "neredeyse 1 y\u0131l",
        other: "neredeyse {{count}} y\u0131l"
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
            return result + " sonra";
        }
        else {
            return result + " \xF6nce";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/tr/_lib/formatLong/index.js
var dateFormats = {
    full: "d MMMM y EEEE",
    long: "d MMMM y",
    medium: "d MMM y",
    short: "dd.MM.yyyy"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'saat' {{time}}",
    long: "{{date}} 'saat' {{time}}",
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
// node_modules/date-fns/esm/locale/tr/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'ge\xE7en hafta' eeee 'saat' p",
    yesterday: "'d\xFCn saat' p",
    today: "'bug\xFCn saat' p",
    tomorrow: "'yar\u0131n saat' p",
    nextWeek: "eeee 'saat' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/tr/_lib/localize/index.js
var eraValues = {
    narrow: ["M\xD6", "MS"],
    abbreviated: ["M\xD6", "MS"],
    wide: ["Milattan \xD6nce", "Milattan Sonra"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1\xC7", "2\xC7", "3\xC7", "4\xC7"],
    wide: ["\u0130lk \xE7eyrek", "\u0130kinci \xC7eyrek", "\xDC\xE7\xFCnc\xFC \xE7eyrek", "Son \xE7eyrek"]
};
var monthValues = {
    narrow: ["O", "\u015E", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
    abbreviated: ["Oca", "\u015Eub", "Mar", "Nis", "May", "Haz", "Tem", "A\u011Fu", "Eyl", "Eki", "Kas", "Ara"],
    wide: ["Ocak", "\u015Eubat", "Mart", "Nisan", "May\u0131s", "Haziran", "Temmuz", "A\u011Fustos", "Eyl\xFCl", "Ekim", "Kas\u0131m", "Aral\u0131k"]
};
var dayValues = {
    narrow: ["P", "P", "S", "\xC7", "P", "C", "C"],
    short: ["Pz", "Pt", "Sa", "\xC7a", "Pe", "Cu", "Ct"],
    abbreviated: ["Paz", "Pzt", "Sal", "\xC7ar", "Per", "Cum", "Cts"],
    wide: ["Pazar", "Pazartesi", "Sal\u0131", "\xC7ar\u015Famba", "Per\u015Fembe", "Cuma", "Cumartesi"]
};
var dayPeriodValues = {
    narrow: {
        am: "\xF6\xF6",
        pm: "\xF6s",
        midnight: "gy",
        noon: "\xF6",
        morning: "sa",
        afternoon: "\xF6s",
        evening: "ak",
        night: "ge"
    },
    abbreviated: {
        am: "\xD6\xD6",
        pm: "\xD6S",
        midnight: "gece yar\u0131s\u0131",
        noon: "\xF6\u011Fle",
        morning: "sabah",
        afternoon: "\xF6\u011Fleden sonra",
        evening: "ak\u015Fam",
        night: "gece"
    },
    wide: {
        am: "\xD6.\xD6.",
        pm: "\xD6.S.",
        midnight: "gece yar\u0131s\u0131",
        noon: "\xF6\u011Fle",
        morning: "sabah",
        afternoon: "\xF6\u011Fleden sonra",
        evening: "ak\u015Fam",
        night: "gece"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\xF6\xF6",
        pm: "\xF6s",
        midnight: "gy",
        noon: "\xF6",
        morning: "sa",
        afternoon: "\xF6s",
        evening: "ak",
        night: "ge"
    },
    abbreviated: {
        am: "\xD6\xD6",
        pm: "\xD6S",
        midnight: "gece yar\u0131s\u0131",
        noon: "\xF6\u011Flen",
        morning: "sabahleyin",
        afternoon: "\xF6\u011Fleden sonra",
        evening: "ak\u015Famleyin",
        night: "geceleyin"
    },
    wide: {
        am: "\xF6.\xF6.",
        pm: "\xF6.s.",
        midnight: "gece yar\u0131s\u0131",
        noon: "\xF6\u011Flen",
        morning: "sabahleyin",
        afternoon: "\xF6\u011Fleden sonra",
        evening: "ak\u015Famleyin",
        night: "geceleyin"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    return number + ".";
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
// node_modules/date-fns/esm/locale/tr/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(mö|ms)/i,
    abbreviated: /^(mö|ms)/i,
    wide: /^(milattan önce|milattan sonra)/i
};
var parseEraPatterns = {
    any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]ç/i,
    wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i],
    abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i],
    wide: [/^(i|İ)lk çeyrek/i, /(i|İ)kinci çeyrek/i, /üçüncü çeyrek/i, /son çeyrek/i]
};
var matchMonthPatterns = {
    narrow: /^[oşmnhtaek]/i,
    abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
    wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i
};
var parseMonthPatterns = {
    narrow: [/^o/i, /^ş/i, /^m/i, /^n/i, /^m/i, /^h/i, /^t/i, /^a/i, /^e/i, /^e/i, /^k/i, /^a/i],
    any: [/^o/i, /^ş/i, /^mar/i, /^n/i, /^may/i, /^h/i, /^t/i, /^ağ/i, /^ey/i, /^ek/i, /^k/i, /^ar/i]
};
var matchDayPatterns = {
    narrow: /^[psçc]/i,
    short: /^(pz|pt|sa|ça|pe|cu|ct)/i,
    abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i,
    wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i
};
var parseDayPatterns = {
    narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
    any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i],
    wide: [/^pazar(?!tesi)/i, /^pazartesi/i, /^salı/i, /^çarşamba/i, /^perşembe/i, /^cuma(?!rtesi)/i, /^cumartesi/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i,
    any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^ö\.?ö\.?/i,
        pm: /^ö\.?s\.?/i,
        midnight: /^(gy|gece yarısı)/i,
        noon: /^öğ/i,
        morning: /^sa/i,
        afternoon: /^öğleden sonra/i,
        evening: /^ak/i,
        night: /^ge/i
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
// node_modules/date-fns/esm/locale/tr/index.js
var locale = {
    code: "tr",
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
var tr_default = locale;
export { tr_default };
