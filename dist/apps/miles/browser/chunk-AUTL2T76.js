import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/lb/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        standalone: {
            one: "manner w\xE9i eng Sekonn",
            other: "manner w\xE9i {{count}} Sekonnen"
        },
        withPreposition: {
            one: "manner w\xE9i enger Sekonn",
            other: "manner w\xE9i {{count}} Sekonnen"
        }
    },
    xSeconds: {
        standalone: {
            one: "eng Sekonn",
            other: "{{count}} Sekonnen"
        },
        withPreposition: {
            one: "enger Sekonn",
            other: "{{count}} Sekonnen"
        }
    },
    halfAMinute: {
        standalone: "eng hallef Minutt",
        withPreposition: "enger hallwer Minutt"
    },
    lessThanXMinutes: {
        standalone: {
            one: "manner w\xE9i eng Minutt",
            other: "manner w\xE9i {{count}} Minutten"
        },
        withPreposition: {
            one: "manner w\xE9i enger Minutt",
            other: "manner w\xE9i {{count}} Minutten"
        }
    },
    xMinutes: {
        standalone: {
            one: "eng Minutt",
            other: "{{count}} Minutten"
        },
        withPreposition: {
            one: "enger Minutt",
            other: "{{count}} Minutten"
        }
    },
    aboutXHours: {
        standalone: {
            one: "ongef\xE9ier eng Stonn",
            other: "ongef\xE9ier {{count}} Stonnen"
        },
        withPreposition: {
            one: "ongef\xE9ier enger Stonn",
            other: "ongef\xE9ier {{count}} Stonnen"
        }
    },
    xHours: {
        standalone: {
            one: "eng Stonn",
            other: "{{count}} Stonnen"
        },
        withPreposition: {
            one: "enger Stonn",
            other: "{{count}} Stonnen"
        }
    },
    xDays: {
        standalone: {
            one: "een Dag",
            other: "{{count}} Deeg"
        },
        withPreposition: {
            one: "engem Dag",
            other: "{{count}} Deeg"
        }
    },
    aboutXWeeks: {
        standalone: {
            one: "ongef\xE9ier eng Woch",
            other: "ongef\xE9ier {{count}} Wochen"
        },
        withPreposition: {
            one: "ongef\xE9ier enger Woche",
            other: "ongef\xE9ier {{count}} Wochen"
        }
    },
    xWeeks: {
        standalone: {
            one: "eng Woch",
            other: "{{count}} Wochen"
        },
        withPreposition: {
            one: "enger Woch",
            other: "{{count}} Wochen"
        }
    },
    aboutXMonths: {
        standalone: {
            one: "ongef\xE9ier ee Mount",
            other: "ongef\xE9ier {{count}} M\xE9int"
        },
        withPreposition: {
            one: "ongef\xE9ier engem Mount",
            other: "ongef\xE9ier {{count}} M\xE9int"
        }
    },
    xMonths: {
        standalone: {
            one: "ee Mount",
            other: "{{count}} M\xE9int"
        },
        withPreposition: {
            one: "engem Mount",
            other: "{{count}} M\xE9int"
        }
    },
    aboutXYears: {
        standalone: {
            one: "ongef\xE9ier ee Joer",
            other: "ongef\xE9ier {{count}} Joer"
        },
        withPreposition: {
            one: "ongef\xE9ier engem Joer",
            other: "ongef\xE9ier {{count}} Joer"
        }
    },
    xYears: {
        standalone: {
            one: "ee Joer",
            other: "{{count}} Joer"
        },
        withPreposition: {
            one: "engem Joer",
            other: "{{count}} Joer"
        }
    },
    overXYears: {
        standalone: {
            one: "m\xE9i w\xE9i ee Joer",
            other: "m\xE9i w\xE9i {{count}} Joer"
        },
        withPreposition: {
            one: "m\xE9i w\xE9i engem Joer",
            other: "m\xE9i w\xE9i {{count}} Joer"
        }
    },
    almostXYears: {
        standalone: {
            one: "bal ee Joer",
            other: "bal {{count}} Joer"
        },
        withPreposition: {
            one: "bal engem Joer",
            other: "bal {{count}} Joer"
        }
    }
};
var EXCEPTION_CONSONANTS = ["d", "h", "n", "t", "z"];
var VOWELS = ["a,", "e", "i", "o", "u"];
var DIGITS_SPOKEN_N_NEEDED = [0, 1, 2, 3, 8, 9];
var FIRST_TWO_DIGITS_SPOKEN_NO_N_NEEDED = [40, 50, 60, 70];
function isFinalNNeeded(nextWords) {
    var firstLetter = nextWords.charAt(0).toLowerCase();
    if (VOWELS.indexOf(firstLetter) != -1 || EXCEPTION_CONSONANTS.indexOf(firstLetter) != -1) {
        return true;
    }
    var firstWord = nextWords.split(" ")[0];
    var number = parseInt(firstWord);
    if (!isNaN(number) && DIGITS_SPOKEN_N_NEEDED.indexOf(number % 10) != -1 && FIRST_TWO_DIGITS_SPOKEN_NO_N_NEEDED.indexOf(parseInt(firstWord.substring(0, 2))) == -1) {
        return true;
    }
    return false;
}
var formatDistance = function formatDistance2(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    var usageGroup = options !== null && options !== void 0 && options.addSuffix ? tokenValue.withPreposition : tokenValue.standalone;
    if (typeof usageGroup === "string") {
        result = usageGroup;
    }
    else if (count === 1) {
        result = usageGroup.one;
    }
    else {
        result = usageGroup.other.replace("{{count}}", String(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "a" + (isFinalNNeeded(result) ? "n" : "") + " " + result;
        }
        else {
            return "viru" + (isFinalNNeeded(result) ? "n" : "") + " " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/lb/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, do MMMM y",
    // Méindeg, 7. Januar 2018
    long: "do MMMM y",
    // 7. Januar 2018
    medium: "do MMM y",
    // 7. Jan 2018
    short: "dd.MM.yy"
    // 07.01.18
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'um' {{time}}",
    long: "{{date}} 'um' {{time}}",
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
// node_modules/date-fns/esm/locale/lb/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: function lastWeek(date) {
        var day = date.getUTCDay();
        var result = "'l\xE4schte";
        if (day === 2 || day === 4) {
            result += "n";
        }
        result += "' eeee 'um' p";
        return result;
    },
    yesterday: "'g\xEBschter um' p",
    today: "'haut um' p",
    tomorrow: "'moien um' p",
    nextWeek: "eeee 'um' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, date, _baseDate, _options) {
    var format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date);
    }
    return format;
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/lb/_lib/localize/index.js
var eraValues = {
    narrow: ["v.Chr.", "n.Chr."],
    abbreviated: ["v.Chr.", "n.Chr."],
    wide: ["viru Christus", "no Christus"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
};
var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "M\xE4e", "Abr", "Mee", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    wide: ["Januar", "Februar", "M\xE4erz", "Abr\xEBll", "Mee", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
};
var dayValues = {
    narrow: ["S", "M", "D", "M", "D", "F", "S"],
    short: ["So", "M\xE9", "D\xEB", "M\xEB", "Do", "Fr", "Sa"],
    abbreviated: ["So.", "M\xE9.", "D\xEB.", "M\xEB.", "Do.", "Fr.", "Sa."],
    wide: ["Sonndeg", "M\xE9indeg", "D\xEBnschdeg", "M\xEBttwoch", "Donneschdeg", "Freideg", "Samschdeg"]
};
var dayPeriodValues = {
    narrow: {
        am: "mo.",
        pm: "nom\xEB.",
        midnight: "M\xEBtternuecht",
        noon: "M\xEBtteg",
        morning: "Moien",
        afternoon: "Nom\xEBtteg",
        evening: "Owend",
        night: "Nuecht"
    },
    abbreviated: {
        am: "moies",
        pm: "nom\xEBttes",
        midnight: "M\xEBtternuecht",
        noon: "M\xEBtteg",
        morning: "Moien",
        afternoon: "Nom\xEBtteg",
        evening: "Owend",
        night: "Nuecht"
    },
    wide: {
        am: "moies",
        pm: "nom\xEBttes",
        midnight: "M\xEBtternuecht",
        noon: "M\xEBtteg",
        morning: "Moien",
        afternoon: "Nom\xEBtteg",
        evening: "Owend",
        night: "Nuecht"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "mo.",
        pm: "nom.",
        midnight: "M\xEBtternuecht",
        noon: "m\xEBttes",
        morning: "moies",
        afternoon: "nom\xEBttes",
        evening: "owes",
        night: "nuets"
    },
    abbreviated: {
        am: "moies",
        pm: "nom\xEBttes",
        midnight: "M\xEBtternuecht",
        noon: "m\xEBttes",
        morning: "moies",
        afternoon: "nom\xEBttes",
        evening: "owes",
        night: "nuets"
    },
    wide: {
        am: "moies",
        pm: "nom\xEBttes",
        midnight: "M\xEBtternuecht",
        noon: "m\xEBttes",
        morning: "moies",
        afternoon: "nom\xEBttes",
        evening: "owes",
        night: "nuets"
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
// node_modules/date-fns/esm/locale/lb/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
    abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
    wide: /^(viru Christus|virun eiser Zäitrechnung|no Christus|eiser Zäitrechnung)/i
};
var parseEraPatterns = {
    any: [/^v/i, /^n/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](\.)? Quartal/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mäe|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,
    wide: /^(januar|februar|mäerz|abrëll|mee|juni|juli|august|september|oktober|november|dezember)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mä/i, /^ab/i, /^me/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[smdf]/i,
    short: /^(so|mé|dë|më|do|fr|sa)/i,
    abbreviated: /^(son?|méi?|dën?|mët?|don?|fre?|sam?)\.?/i,
    wide: /^(sonndeg|méindeg|dënschdeg|mëttwoch|donneschdeg|freideg|samschdeg)/i
};
var parseDayPatterns = {
    any: [/^so/i, /^mé/i, /^dë/i, /^më/i, /^do/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(mo\.?|nomë\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,
    abbreviated: /^(moi\.?|nomët\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,
    wide: /^(moies|nomëttes|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^m/i,
        pm: /^n/i,
        midnight: /^Mëtter/i,
        noon: /^mëttes/i,
        morning: /moies/i,
        afternoon: /nomëttes/i,
        // will never be matched. Afternoon is matched by `pm`
        evening: /owes/i,
        night: /nuets/i
        // will never be matched. Night is matched by `pm`
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
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
var match_default = match;
// node_modules/date-fns/esm/locale/lb/index.js
var locale = {
    code: "lb",
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
var lb_default = locale;
export { lb_default };
