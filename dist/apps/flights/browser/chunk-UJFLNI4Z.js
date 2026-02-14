import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/da/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "mindre end \xE9t sekund",
        other: "mindre end {{count}} sekunder"
    },
    xSeconds: {
        one: "1 sekund",
        other: "{{count}} sekunder"
    },
    halfAMinute: "\xE9t halvt minut",
    lessThanXMinutes: {
        one: "mindre end \xE9t minut",
        other: "mindre end {{count}} minutter"
    },
    xMinutes: {
        one: "1 minut",
        other: "{{count}} minutter"
    },
    aboutXHours: {
        one: "cirka 1 time",
        other: "cirka {{count}} timer"
    },
    xHours: {
        one: "1 time",
        other: "{{count}} timer"
    },
    xDays: {
        one: "1 dag",
        other: "{{count}} dage"
    },
    aboutXWeeks: {
        one: "cirka 1 uge",
        other: "cirka {{count}} uger"
    },
    xWeeks: {
        one: "1 uge",
        other: "{{count}} uger"
    },
    aboutXMonths: {
        one: "cirka 1 m\xE5ned",
        other: "cirka {{count}} m\xE5neder"
    },
    xMonths: {
        one: "1 m\xE5ned",
        other: "{{count}} m\xE5neder"
    },
    aboutXYears: {
        one: "cirka 1 \xE5r",
        other: "cirka {{count}} \xE5r"
    },
    xYears: {
        one: "1 \xE5r",
        other: "{{count}} \xE5r"
    },
    overXYears: {
        one: "over 1 \xE5r",
        other: "over {{count}} \xE5r"
    },
    almostXYears: {
        one: "n\xE6sten 1 \xE5r",
        other: "n\xE6sten {{count}} \xE5r"
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
            return "om " + result;
        }
        else {
            return result + " siden";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/da/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE 'den' d. MMMM y",
    long: "d. MMMM y",
    medium: "d. MMM y",
    short: "dd/MM/y"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'kl'. {{time}}",
    long: "{{date}} 'kl'. {{time}}",
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
// node_modules/date-fns/esm/locale/da/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'sidste' eeee 'kl.' p",
    yesterday: "'i g\xE5r kl.' p",
    today: "'i dag kl.' p",
    tomorrow: "'i morgen kl.' p",
    nextWeek: "'p\xE5' eeee 'kl.' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/da/_lib/localize/index.js
var eraValues = {
    narrow: ["fvt", "vt"],
    abbreviated: ["f.v.t.", "v.t."],
    wide: ["f\xF8r vesterlandsk tidsregning", "vesterlandsk tidsregning"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."],
    wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
};
var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
    wide: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]
};
var dayValues = {
    narrow: ["S", "M", "T", "O", "T", "F", "L"],
    short: ["s\xF8", "ma", "ti", "on", "to", "fr", "l\xF8"],
    abbreviated: ["s\xF8n.", "man.", "tir.", "ons.", "tor.", "fre.", "l\xF8r."],
    wide: ["s\xF8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\xF8rdag"]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "midnat",
        noon: "middag",
        morning: "morgen",
        afternoon: "eftermiddag",
        evening: "aften",
        night: "nat"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnat",
        noon: "middag",
        morning: "morgen",
        afternoon: "eftermiddag",
        evening: "aften",
        night: "nat"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnat",
        noon: "middag",
        morning: "morgen",
        afternoon: "eftermiddag",
        evening: "aften",
        night: "nat"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "midnat",
        noon: "middag",
        morning: "om morgenen",
        afternoon: "om eftermiddagen",
        evening: "om aftenen",
        night: "om natten"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnat",
        noon: "middag",
        morning: "om morgenen",
        afternoon: "om eftermiddagen",
        evening: "om aftenen",
        night: "om natten"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnat",
        noon: "middag",
        morning: "om morgenen",
        afternoon: "om eftermiddagen",
        evening: "om aftenen",
        night: "om natten"
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
// node_modules/date-fns/esm/locale/da/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(fKr|fvt|eKr|vt)/i,
    abbreviated: /^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,
    wide: /^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i
};
var parseEraPatterns = {
    any: [/^f/i, /^(v|e)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]. kvt\./i,
    wide: /^[1234]\.? kvartal/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
    wide: /^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[smtofl]/i,
    short: /^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,
    abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
    wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
};
var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^o/i, /^t/i, /^f/i, /^l/i],
    any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,
    any: /^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /midnat/i,
        noon: /middag/i,
        morning: /morgen/i,
        afternoon: /eftermiddag/i,
        evening: /aften/i,
        night: /nat/i
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
// node_modules/date-fns/esm/locale/da/index.js
var locale = {
    code: "da",
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
var da_default = locale;
export { da_default };
