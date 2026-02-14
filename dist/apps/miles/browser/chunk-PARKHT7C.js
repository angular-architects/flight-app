import { isSameUTCWeek } from "@nf-internal/chunk-WGUJHRU3";
import { buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/it/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "meno di un secondo",
        other: "meno di {{count}} secondi"
    },
    xSeconds: {
        one: "un secondo",
        other: "{{count}} secondi"
    },
    halfAMinute: "alcuni secondi",
    lessThanXMinutes: {
        one: "meno di un minuto",
        other: "meno di {{count}} minuti"
    },
    xMinutes: {
        one: "un minuto",
        other: "{{count}} minuti"
    },
    aboutXHours: {
        one: "circa un'ora",
        other: "circa {{count}} ore"
    },
    xHours: {
        one: "un'ora",
        other: "{{count}} ore"
    },
    xDays: {
        one: "un giorno",
        other: "{{count}} giorni"
    },
    aboutXWeeks: {
        one: "circa una settimana",
        other: "circa {{count}} settimane"
    },
    xWeeks: {
        one: "una settimana",
        other: "{{count}} settimane"
    },
    aboutXMonths: {
        one: "circa un mese",
        other: "circa {{count}} mesi"
    },
    xMonths: {
        one: "un mese",
        other: "{{count}} mesi"
    },
    aboutXYears: {
        one: "circa un anno",
        other: "circa {{count}} anni"
    },
    xYears: {
        one: "un anno",
        other: "{{count}} anni"
    },
    overXYears: {
        one: "pi\xF9 di un anno",
        other: "pi\xF9 di {{count}} anni"
    },
    almostXYears: {
        one: "quasi un anno",
        other: "quasi {{count}} anni"
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
            return "tra " + result;
        }
        else {
            return result + " fa";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/it/_lib/formatRelative/index.js
var weekdays = ["domenica", "luned\xEC", "marted\xEC", "mercoled\xEC", "gioved\xEC", "venerd\xEC", "sabato"];
function _lastWeek(day) {
    switch (day) {
        case 0:
            return "'domenica scorsa alle' p";
        default:
            return "'" + weekdays[day] + " scorso alle' p";
    }
}
function thisWeek(day) {
    return "'" + weekdays[day] + " alle' p";
}
function _nextWeek(day) {
    switch (day) {
        case 0:
            return "'domenica prossima alle' p";
        default:
            return "'" + weekdays[day] + " prossimo alle' p";
    }
}
var formatRelativeLocale = {
    lastWeek: function lastWeek(date, baseDate, options) {
        var day = date.getUTCDay();
        if (isSameUTCWeek(date, baseDate, options)) {
            return thisWeek(day);
        }
        else {
            return _lastWeek(day);
        }
    },
    yesterday: "'ieri alle' p",
    today: "'oggi alle' p",
    tomorrow: "'domani alle' p",
    nextWeek: function nextWeek(date, baseDate, options) {
        var day = date.getUTCDay();
        if (isSameUTCWeek(date, baseDate, options)) {
            return thisWeek(day);
        }
        else {
            return _nextWeek(day);
        }
    },
    other: "P"
};
var formatRelative = function formatRelative2(token, date, baseDate, options) {
    var format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date, baseDate, options);
    }
    return format;
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/it/_lib/localize/index.js
var eraValues = {
    narrow: ["aC", "dC"],
    abbreviated: ["a.C.", "d.C."],
    wide: ["avanti Cristo", "dopo Cristo"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1\xBA trimestre", "2\xBA trimestre", "3\xBA trimestre", "4\xBA trimestre"]
};
var monthValues = {
    narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
    abbreviated: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
    wide: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
};
var dayValues = {
    narrow: ["D", "L", "M", "M", "G", "V", "S"],
    short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    wide: ["domenica", "luned\xEC", "marted\xEC", "mercoled\xEC", "gioved\xEC", "venerd\xEC", "sabato"]
};
var dayPeriodValues = {
    narrow: {
        am: "m.",
        pm: "p.",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "mattina",
        afternoon: "pomeriggio",
        evening: "sera",
        night: "notte"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "mattina",
        afternoon: "pomeriggio",
        evening: "sera",
        night: "notte"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "mattina",
        afternoon: "pomeriggio",
        evening: "sera",
        night: "notte"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "m.",
        pm: "p.",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "di mattina",
        afternoon: "del pomeriggio",
        evening: "di sera",
        night: "di notte"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "di mattina",
        afternoon: "del pomeriggio",
        evening: "di sera",
        night: "di notte"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "di mattina",
        afternoon: "del pomeriggio",
        evening: "di sera",
        night: "di notte"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    return String(number);
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
// node_modules/date-fns/esm/locale/it/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(º)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(aC|dC)/i,
    abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
    wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
};
var parseEraPatterns = {
    any: [/^a/i, /^(d|e)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^t[1234]/i,
    wide: /^[1234](º)? trimestre/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[gfmalsond]/i,
    abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
    wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
};
var parseMonthPatterns = {
    narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[dlmgvs]/i,
    short: /^(do|lu|ma|me|gi|ve|sa)/i,
    abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
    wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
};
var parseDayPatterns = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
    any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
    any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mezza/i,
        noon: /^mezzo/i,
        morning: /mattina/i,
        afternoon: /pomeriggio/i,
        evening: /sera/i,
        night: /notte/i
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
export { formatDistance_default, formatRelative_default, localize_default, match_default };
