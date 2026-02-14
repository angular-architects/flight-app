import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/sv/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "mindre \xE4n en sekund",
        other: "mindre \xE4n {{count}} sekunder"
    },
    xSeconds: {
        one: "en sekund",
        other: "{{count}} sekunder"
    },
    halfAMinute: "en halv minut",
    lessThanXMinutes: {
        one: "mindre \xE4n en minut",
        other: "mindre \xE4n {{count}} minuter"
    },
    xMinutes: {
        one: "en minut",
        other: "{{count}} minuter"
    },
    aboutXHours: {
        one: "ungef\xE4r en timme",
        other: "ungef\xE4r {{count}} timmar"
    },
    xHours: {
        one: "en timme",
        other: "{{count}} timmar"
    },
    xDays: {
        one: "en dag",
        other: "{{count}} dagar"
    },
    aboutXWeeks: {
        one: "ungef\xE4r en vecka",
        other: "ungef\xE4r {{count}} vecka"
    },
    xWeeks: {
        one: "en vecka",
        other: "{{count}} vecka"
    },
    aboutXMonths: {
        one: "ungef\xE4r en m\xE5nad",
        other: "ungef\xE4r {{count}} m\xE5nader"
    },
    xMonths: {
        one: "en m\xE5nad",
        other: "{{count}} m\xE5nader"
    },
    aboutXYears: {
        one: "ungef\xE4r ett \xE5r",
        other: "ungef\xE4r {{count}} \xE5r"
    },
    xYears: {
        one: "ett \xE5r",
        other: "{{count}} \xE5r"
    },
    overXYears: {
        one: "\xF6ver ett \xE5r",
        other: "\xF6ver {{count}} \xE5r"
    },
    almostXYears: {
        one: "n\xE4stan ett \xE5r",
        other: "n\xE4stan {{count}} \xE5r"
    }
};
var wordMapping = ["noll", "en", "tv\xE5", "tre", "fyra", "fem", "sex", "sju", "\xE5tta", "nio", "tio", "elva", "tolv"];
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
        if (options && options.onlyNumeric) {
            result = tokenValue.other.replace("{{count}}", String(count));
        }
        else {
            result = tokenValue.other.replace("{{count}}", count < 13 ? wordMapping[count] : String(count));
        }
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "om " + result;
        }
        else {
            return result + " sedan";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/sv/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE d MMMM y",
    long: "d MMMM y",
    medium: "d MMM y",
    short: "y-MM-dd"
};
var timeFormats = {
    full: "'kl'. HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'kl.' {{time}}",
    long: "{{date}} 'kl.' {{time}}",
    medium: "{{date}} {{time}}",
    short: "{{date}} {{time}}"
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
// node_modules/date-fns/esm/locale/sv/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'i' EEEE's kl.' p",
    yesterday: "'ig\xE5r kl.' p",
    today: "'idag kl.' p",
    tomorrow: "'imorgon kl.' p",
    nextWeek: "EEEE 'kl.' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/sv/_lib/localize/index.js
var eraValues = {
    narrow: ["f.Kr.", "e.Kr."],
    abbreviated: ["f.Kr.", "e.Kr."],
    wide: ["f\xF6re Kristus", "efter Kristus"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"]
};
var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["jan.", "feb.", "mars", "apr.", "maj", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."],
    wide: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]
};
var dayValues = {
    narrow: ["S", "M", "T", "O", "T", "F", "L"],
    short: ["s\xF6", "m\xE5", "ti", "on", "to", "fr", "l\xF6"],
    abbreviated: ["s\xF6n", "m\xE5n", "tis", "ons", "tors", "fre", "l\xF6r"],
    wide: ["s\xF6ndag", "m\xE5ndag", "tisdag", "onsdag", "torsdag", "fredag", "l\xF6rdag"]
};
var dayPeriodValues = {
    narrow: {
        am: "fm",
        pm: "em",
        midnight: "midnatt",
        noon: "middag",
        morning: "morg.",
        afternoon: "efterm.",
        evening: "kv\xE4ll",
        night: "natt"
    },
    abbreviated: {
        am: "f.m.",
        pm: "e.m.",
        midnight: "midnatt",
        noon: "middag",
        morning: "morgon",
        afternoon: "efterm.",
        evening: "kv\xE4ll",
        night: "natt"
    },
    wide: {
        am: "f\xF6rmiddag",
        pm: "eftermiddag",
        midnight: "midnatt",
        noon: "middag",
        morning: "morgon",
        afternoon: "eftermiddag",
        evening: "kv\xE4ll",
        night: "natt"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "fm",
        pm: "em",
        midnight: "midnatt",
        noon: "middag",
        morning: "p\xE5 morg.",
        afternoon: "p\xE5 efterm.",
        evening: "p\xE5 kv\xE4llen",
        night: "p\xE5 natten"
    },
    abbreviated: {
        am: "fm",
        pm: "em",
        midnight: "midnatt",
        noon: "middag",
        morning: "p\xE5 morg.",
        afternoon: "p\xE5 efterm.",
        evening: "p\xE5 kv\xE4llen",
        night: "p\xE5 natten"
    },
    wide: {
        am: "fm",
        pm: "em",
        midnight: "midnatt",
        noon: "middag",
        morning: "p\xE5 morgonen",
        afternoon: "p\xE5 eftermiddagen",
        evening: "p\xE5 kv\xE4llen",
        night: "p\xE5 natten"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
            case 1:
            case 2:
                return number + ":a";
        }
    }
    return number + ":e";
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
// node_modules/date-fns/esm/locale/sv/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(:a|:e)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
    abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
    wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i
};
var parseEraPatterns = {
    any: [/^f/i, /^[ev]/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](:a|:e)? kvartalet/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,
    wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[smtofl]/i,
    short: /^(sö|må|ti|on|to|fr|lö)/i,
    abbreviated: /^(sön|mån|tis|ons|tors|fre|lör)/i,
    wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i
};
var parseDayPatterns = {
    any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
};
var matchDayPeriodPatterns = {
    any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^f/i,
        pm: /^e/i,
        midnight: /^midn/i,
        noon: /^midd/i,
        morning: /morgon/i,
        afternoon: /eftermiddag/i,
        evening: /kväll/i,
        night: /natt/i
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
// node_modules/date-fns/esm/locale/sv/index.js
var locale = {
    code: "sv",
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
var sv_default = locale;
export { sv_default };
