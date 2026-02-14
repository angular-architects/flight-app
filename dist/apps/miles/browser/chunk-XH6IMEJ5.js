import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/is/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "minna en 1 sek\xFAnda",
        other: "minna en {{count}} sek\xFAndur"
    },
    xSeconds: {
        one: "1 sek\xFAnda",
        other: "{{count}} sek\xFAndur"
    },
    halfAMinute: "h\xE1lf m\xEDn\xFAta",
    lessThanXMinutes: {
        one: "minna en 1 m\xEDn\xFAta",
        other: "minna en {{count}} m\xEDn\xFAtur"
    },
    xMinutes: {
        one: "1 m\xEDn\xFAta",
        other: "{{count}} m\xEDn\xFAtur"
    },
    aboutXHours: {
        one: "u.\xFE.b. 1 klukkustund",
        other: "u.\xFE.b. {{count}} klukkustundir"
    },
    xHours: {
        one: "1 klukkustund",
        other: "{{count}} klukkustundir"
    },
    xDays: {
        one: "1 dagur",
        other: "{{count}} dagar"
    },
    aboutXWeeks: {
        one: "um viku",
        other: "um {{count}} vikur"
    },
    xWeeks: {
        one: "1 viku",
        other: "{{count}} vikur"
    },
    aboutXMonths: {
        one: "u.\xFE.b. 1 m\xE1nu\xF0ur",
        other: "u.\xFE.b. {{count}} m\xE1nu\xF0ir"
    },
    xMonths: {
        one: "1 m\xE1nu\xF0ur",
        other: "{{count}} m\xE1nu\xF0ir"
    },
    aboutXYears: {
        one: "u.\xFE.b. 1 \xE1r",
        other: "u.\xFE.b. {{count}} \xE1r"
    },
    xYears: {
        one: "1 \xE1r",
        other: "{{count}} \xE1r"
    },
    overXYears: {
        one: "meira en 1 \xE1r",
        other: "meira en {{count}} \xE1r"
    },
    almostXYears: {
        one: "n\xE6stum 1 \xE1r",
        other: "n\xE6stum {{count}} \xE1r"
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
            return "\xED " + result;
        }
        else {
            return result + " s\xED\xF0an";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/is/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, do MMMM y",
    long: "do MMMM y",
    medium: "do MMM y",
    short: "d.MM.y"
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
// node_modules/date-fns/esm/locale/is/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'s\xED\xF0asta' dddd 'kl.' p",
    yesterday: "'\xED g\xE6r kl.' p",
    today: "'\xED dag kl.' p",
    tomorrow: "'\xE1 morgun kl.' p",
    nextWeek: "dddd 'kl.' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/is/_lib/localize/index.js
var eraValues = {
    narrow: ["f.Kr.", "e.Kr."],
    abbreviated: ["f.Kr.", "e.Kr."],
    wide: ["fyrir Krist", "eftir Krist"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1F", "2F", "3F", "4F"],
    wide: ["1. fj\xF3r\xF0ungur", "2. fj\xF3r\xF0ungur", "3. fj\xF3r\xF0ungur", "4. fj\xF3r\xF0ungur"]
};
var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "\xC1", "S", "\xD3", "N", "D"],
    abbreviated: ["jan.", "feb.", "mars", "apr\xEDl", "ma\xED", "j\xFAn\xED", "j\xFAl\xED", "\xE1g\xFAst", "sept.", "okt.", "n\xF3v.", "des."],
    wide: ["jan\xFAar", "febr\xFAar", "mars", "apr\xEDl", "ma\xED", "j\xFAn\xED", "j\xFAl\xED", "\xE1g\xFAst", "september", "okt\xF3ber", "n\xF3vember", "desember"]
};
var dayValues = {
    narrow: ["S", "M", "\xDE", "M", "F", "F", "L"],
    short: ["Su", "M\xE1", "\xDEr", "Mi", "Fi", "F\xF6", "La"],
    abbreviated: ["sun.", "m\xE1n.", "\xFEri.", "mi\xF0.", "fim.", "f\xF6s.", "lau."],
    wide: ["sunnudagur", "m\xE1nudagur", "\xFEri\xF0judagur", "mi\xF0vikudagur", "fimmtudagur", "f\xF6studagur", "laugardagur"]
};
var dayPeriodValues = {
    narrow: {
        am: "f",
        pm: "e",
        midnight: "mi\xF0n\xE6tti",
        noon: "h\xE1degi",
        morning: "morgunn",
        afternoon: "s\xED\xF0degi",
        evening: "kv\xF6ld",
        night: "n\xF3tt"
    },
    abbreviated: {
        am: "f.h.",
        pm: "e.h.",
        midnight: "mi\xF0n\xE6tti",
        noon: "h\xE1degi",
        morning: "morgunn",
        afternoon: "s\xED\xF0degi",
        evening: "kv\xF6ld",
        night: "n\xF3tt"
    },
    wide: {
        am: "fyrir h\xE1degi",
        pm: "eftir h\xE1degi",
        midnight: "mi\xF0n\xE6tti",
        noon: "h\xE1degi",
        morning: "morgunn",
        afternoon: "s\xED\xF0degi",
        evening: "kv\xF6ld",
        night: "n\xF3tt"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "f",
        pm: "e",
        midnight: "\xE1 mi\xF0n\xE6tti",
        noon: "\xE1 h\xE1degi",
        morning: "a\xF0 morgni",
        afternoon: "s\xED\xF0degis",
        evening: "um kv\xF6ld",
        night: "um n\xF3tt"
    },
    abbreviated: {
        am: "f.h.",
        pm: "e.h.",
        midnight: "\xE1 mi\xF0n\xE6tti",
        noon: "\xE1 h\xE1degi",
        morning: "a\xF0 morgni",
        afternoon: "s\xED\xF0degis",
        evening: "um kv\xF6ld",
        night: "um n\xF3tt"
    },
    wide: {
        am: "fyrir h\xE1degi",
        pm: "eftir h\xE1degi",
        midnight: "\xE1 mi\xF0n\xE6tti",
        noon: "\xE1 h\xE1degi",
        morning: "a\xF0 morgni",
        afternoon: "s\xED\xF0degis",
        evening: "um kv\xF6ld",
        night: "um n\xF3tt"
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
// node_modules/date-fns/esm/locale/is/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern = /\d+(\.)?/i;
var matchEraPatterns = {
    narrow: /^(f\.Kr\.|e\.Kr\.)/i,
    abbreviated: /^(f\.Kr\.|e\.Kr\.)/i,
    wide: /^(fyrir Krist|eftir Krist)/i
};
var parseEraPatterns = {
    any: [/^(f\.Kr\.)/i, /^(e\.Kr\.)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]\.?/i,
    abbreviated: /^q[1234]\.?/i,
    wide: /^[1234]\.? fjórðungur/i
};
var parseQuarterPatterns = {
    any: [/1\.?/i, /2\.?/i, /3\.?/i, /4\.?/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmásónd]/i,
    abbreviated: /^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,
    wide: /^(januar|febrúar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^á/i, /^s/i, /^ó/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maí/i, /^jún/i, /^júl/i, /^áu/i, /^s/i, /^ó/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|má|þr|mi|fi|fö|la)/i,
    abbreviated: /^(sun|mán|þri|mið|fim|fös|lau)\.?/i,
    wide: /^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i
};
var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^þ/i, /^m/i, /^f/i, /^f/i, /^l/i],
    any: [/^su/i, /^má/i, /^þr/i, /^mi/i, /^fi/i, /^fö/i, /^la/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,
    any: /^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^f/i,
        pm: /^e/i,
        midnight: /^mi/i,
        noon: /^há/i,
        morning: /morgunn/i,
        afternoon: /síðdegi/i,
        evening: /kvöld/i,
        night: /nótt/i
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
// node_modules/date-fns/esm/locale/is/index.js
var locale = {
    code: "is",
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
var is_default = locale;
export { is_default };
