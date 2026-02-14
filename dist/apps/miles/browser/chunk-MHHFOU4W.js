import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/sl/_lib/formatDistance/index.js
function isPluralType(val) {
    return val.one !== void 0;
}
var formatDistanceLocale = {
    lessThanXSeconds: {
        present: {
            one: "manj kot {{count}} sekunda",
            two: "manj kot {{count}} sekundi",
            few: "manj kot {{count}} sekunde",
            other: "manj kot {{count}} sekund"
        },
        past: {
            one: "manj kot {{count}} sekundo",
            two: "manj kot {{count}} sekundama",
            few: "manj kot {{count}} sekundami",
            other: "manj kot {{count}} sekundami"
        },
        future: {
            one: "manj kot {{count}} sekundo",
            two: "manj kot {{count}} sekundi",
            few: "manj kot {{count}} sekunde",
            other: "manj kot {{count}} sekund"
        }
    },
    xSeconds: {
        present: {
            one: "{{count}} sekunda",
            two: "{{count}} sekundi",
            few: "{{count}} sekunde",
            other: "{{count}} sekund"
        },
        past: {
            one: "{{count}} sekundo",
            two: "{{count}} sekundama",
            few: "{{count}} sekundami",
            other: "{{count}} sekundami"
        },
        future: {
            one: "{{count}} sekundo",
            two: "{{count}} sekundi",
            few: "{{count}} sekunde",
            other: "{{count}} sekund"
        }
    },
    halfAMinute: "pol minute",
    lessThanXMinutes: {
        present: {
            one: "manj kot {{count}} minuta",
            two: "manj kot {{count}} minuti",
            few: "manj kot {{count}} minute",
            other: "manj kot {{count}} minut"
        },
        past: {
            one: "manj kot {{count}} minuto",
            two: "manj kot {{count}} minutama",
            few: "manj kot {{count}} minutami",
            other: "manj kot {{count}} minutami"
        },
        future: {
            one: "manj kot {{count}} minuto",
            two: "manj kot {{count}} minuti",
            few: "manj kot {{count}} minute",
            other: "manj kot {{count}} minut"
        }
    },
    xMinutes: {
        present: {
            one: "{{count}} minuta",
            two: "{{count}} minuti",
            few: "{{count}} minute",
            other: "{{count}} minut"
        },
        past: {
            one: "{{count}} minuto",
            two: "{{count}} minutama",
            few: "{{count}} minutami",
            other: "{{count}} minutami"
        },
        future: {
            one: "{{count}} minuto",
            two: "{{count}} minuti",
            few: "{{count}} minute",
            other: "{{count}} minut"
        }
    },
    aboutXHours: {
        present: {
            one: "pribli\u017Eno {{count}} ura",
            two: "pribli\u017Eno {{count}} uri",
            few: "pribli\u017Eno {{count}} ure",
            other: "pribli\u017Eno {{count}} ur"
        },
        past: {
            one: "pribli\u017Eno {{count}} uro",
            two: "pribli\u017Eno {{count}} urama",
            few: "pribli\u017Eno {{count}} urami",
            other: "pribli\u017Eno {{count}} urami"
        },
        future: {
            one: "pribli\u017Eno {{count}} uro",
            two: "pribli\u017Eno {{count}} uri",
            few: "pribli\u017Eno {{count}} ure",
            other: "pribli\u017Eno {{count}} ur"
        }
    },
    xHours: {
        present: {
            one: "{{count}} ura",
            two: "{{count}} uri",
            few: "{{count}} ure",
            other: "{{count}} ur"
        },
        past: {
            one: "{{count}} uro",
            two: "{{count}} urama",
            few: "{{count}} urami",
            other: "{{count}} urami"
        },
        future: {
            one: "{{count}} uro",
            two: "{{count}} uri",
            few: "{{count}} ure",
            other: "{{count}} ur"
        }
    },
    xDays: {
        present: {
            one: "{{count}} dan",
            two: "{{count}} dni",
            few: "{{count}} dni",
            other: "{{count}} dni"
        },
        past: {
            one: "{{count}} dnem",
            two: "{{count}} dnevoma",
            few: "{{count}} dnevi",
            other: "{{count}} dnevi"
        },
        future: {
            one: "{{count}} dan",
            two: "{{count}} dni",
            few: "{{count}} dni",
            other: "{{count}} dni"
        }
    },
    // no tenses for weeks?
    aboutXWeeks: {
        one: "pribli\u017Eno {{count}} teden",
        two: "pribli\u017Eno {{count}} tedna",
        few: "pribli\u017Eno {{count}} tedne",
        other: "pribli\u017Eno {{count}} tednov"
    },
    // no tenses for weeks?
    xWeeks: {
        one: "{{count}} teden",
        two: "{{count}} tedna",
        few: "{{count}} tedne",
        other: "{{count}} tednov"
    },
    aboutXMonths: {
        present: {
            one: "pribli\u017Eno {{count}} mesec",
            two: "pribli\u017Eno {{count}} meseca",
            few: "pribli\u017Eno {{count}} mesece",
            other: "pribli\u017Eno {{count}} mesecev"
        },
        past: {
            one: "pribli\u017Eno {{count}} mesecem",
            two: "pribli\u017Eno {{count}} mesecema",
            few: "pribli\u017Eno {{count}} meseci",
            other: "pribli\u017Eno {{count}} meseci"
        },
        future: {
            one: "pribli\u017Eno {{count}} mesec",
            two: "pribli\u017Eno {{count}} meseca",
            few: "pribli\u017Eno {{count}} mesece",
            other: "pribli\u017Eno {{count}} mesecev"
        }
    },
    xMonths: {
        present: {
            one: "{{count}} mesec",
            two: "{{count}} meseca",
            few: "{{count}} meseci",
            other: "{{count}} mesecev"
        },
        past: {
            one: "{{count}} mesecem",
            two: "{{count}} mesecema",
            few: "{{count}} meseci",
            other: "{{count}} meseci"
        },
        future: {
            one: "{{count}} mesec",
            two: "{{count}} meseca",
            few: "{{count}} mesece",
            other: "{{count}} mesecev"
        }
    },
    aboutXYears: {
        present: {
            one: "pribli\u017Eno {{count}} leto",
            two: "pribli\u017Eno {{count}} leti",
            few: "pribli\u017Eno {{count}} leta",
            other: "pribli\u017Eno {{count}} let"
        },
        past: {
            one: "pribli\u017Eno {{count}} letom",
            two: "pribli\u017Eno {{count}} letoma",
            few: "pribli\u017Eno {{count}} leti",
            other: "pribli\u017Eno {{count}} leti"
        },
        future: {
            one: "pribli\u017Eno {{count}} leto",
            two: "pribli\u017Eno {{count}} leti",
            few: "pribli\u017Eno {{count}} leta",
            other: "pribli\u017Eno {{count}} let"
        }
    },
    xYears: {
        present: {
            one: "{{count}} leto",
            two: "{{count}} leti",
            few: "{{count}} leta",
            other: "{{count}} let"
        },
        past: {
            one: "{{count}} letom",
            two: "{{count}} letoma",
            few: "{{count}} leti",
            other: "{{count}} leti"
        },
        future: {
            one: "{{count}} leto",
            two: "{{count}} leti",
            few: "{{count}} leta",
            other: "{{count}} let"
        }
    },
    overXYears: {
        present: {
            one: "ve\u010D kot {{count}} leto",
            two: "ve\u010D kot {{count}} leti",
            few: "ve\u010D kot {{count}} leta",
            other: "ve\u010D kot {{count}} let"
        },
        past: {
            one: "ve\u010D kot {{count}} letom",
            two: "ve\u010D kot {{count}} letoma",
            few: "ve\u010D kot {{count}} leti",
            other: "ve\u010D kot {{count}} leti"
        },
        future: {
            one: "ve\u010D kot {{count}} leto",
            two: "ve\u010D kot {{count}} leti",
            few: "ve\u010D kot {{count}} leta",
            other: "ve\u010D kot {{count}} let"
        }
    },
    almostXYears: {
        present: {
            one: "skoraj {{count}} leto",
            two: "skoraj {{count}} leti",
            few: "skoraj {{count}} leta",
            other: "skoraj {{count}} let"
        },
        past: {
            one: "skoraj {{count}} letom",
            two: "skoraj {{count}} letoma",
            few: "skoraj {{count}} leti",
            other: "skoraj {{count}} leti"
        },
        future: {
            one: "skoraj {{count}} leto",
            two: "skoraj {{count}} leti",
            few: "skoraj {{count}} leta",
            other: "skoraj {{count}} let"
        }
    }
};
function getFormFromCount(count) {
    switch (count % 100) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
        case 4:
            return "few";
        default:
            return "other";
    }
}
var formatDistance = function formatDistance2(token, count, options) {
    var result = "";
    var tense = "present";
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            tense = "future";
            result = "\u010Dez ";
        }
        else {
            tense = "past";
            result = "pred ";
        }
    }
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result += tokenValue;
    }
    else {
        var form = getFormFromCount(count);
        if (isPluralType(tokenValue)) {
            result += tokenValue[form].replace("{{count}}", String(count));
        }
        else {
            result += tokenValue[tense][form].replace("{{count}}", String(count));
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/sl/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, dd. MMMM y",
    long: "dd. MMMM y",
    medium: "d. MMM y",
    short: "d. MM. yy"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} {{time}}",
    long: "{{date}} {{time}}",
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
// node_modules/date-fns/esm/locale/sl/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: function lastWeek(date) {
        var day = date.getUTCDay();
        switch (day) {
            case 0:
                return "'prej\u0161njo nedeljo ob' p";
            case 3:
                return "'prej\u0161njo sredo ob' p";
            case 6:
                return "'prej\u0161njo soboto ob' p";
            default:
                return "'prej\u0161nji' EEEE 'ob' p";
        }
    },
    yesterday: "'v\u010Deraj ob' p",
    today: "'danes ob' p",
    tomorrow: "'jutri ob' p",
    nextWeek: function nextWeek(date) {
        var day = date.getUTCDay();
        switch (day) {
            case 0:
                return "'naslednjo nedeljo ob' p";
            case 3:
                return "'naslednjo sredo ob' p";
            case 6:
                return "'naslednjo soboto ob' p";
            default:
                return "'naslednji' EEEE 'ob' p";
        }
    },
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
// node_modules/date-fns/esm/locale/sl/_lib/localize/index.js
var eraValues = {
    narrow: ["pr. n. \u0161t.", "po n. \u0161t."],
    abbreviated: ["pr. n. \u0161t.", "po n. \u0161t."],
    wide: ["pred na\u0161im \u0161tetjem", "po na\u0161em \u0161tetju"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1. \u010Det.", "2. \u010Det.", "3. \u010Det.", "4. \u010Det."],
    wide: ["1. \u010Detrtletje", "2. \u010Detrtletje", "3. \u010Detrtletje", "4. \u010Detrtletje"]
};
var monthValues = {
    narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "avg.", "sep.", "okt.", "nov.", "dec."],
    wide: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"]
};
var dayValues = {
    narrow: ["n", "p", "t", "s", "\u010D", "p", "s"],
    short: ["ned.", "pon.", "tor.", "sre.", "\u010Det.", "pet.", "sob."],
    abbreviated: ["ned.", "pon.", "tor.", "sre.", "\u010Det.", "pet.", "sob."],
    wide: ["nedelja", "ponedeljek", "torek", "sreda", "\u010Detrtek", "petek", "sobota"]
};
var dayPeriodValues = {
    narrow: {
        am: "d",
        pm: "p",
        midnight: "24.00",
        noon: "12.00",
        morning: "j",
        afternoon: "p",
        evening: "v",
        night: "n"
    },
    abbreviated: {
        am: "dop.",
        pm: "pop.",
        midnight: "poln.",
        noon: "pold.",
        morning: "jut.",
        afternoon: "pop.",
        evening: "ve\u010D.",
        night: "no\u010D"
    },
    wide: {
        am: "dop.",
        pm: "pop.",
        midnight: "polno\u010D",
        noon: "poldne",
        morning: "jutro",
        afternoon: "popoldne",
        evening: "ve\u010Der",
        night: "no\u010D"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "d",
        pm: "p",
        midnight: "24.00",
        noon: "12.00",
        morning: "zj",
        afternoon: "p",
        evening: "zv",
        night: "po"
    },
    abbreviated: {
        am: "dop.",
        pm: "pop.",
        midnight: "opoln.",
        noon: "opold.",
        morning: "zjut.",
        afternoon: "pop.",
        evening: "zve\u010D.",
        night: "pono\u010Di"
    },
    wide: {
        am: "dop.",
        pm: "pop.",
        midnight: "opolno\u010Di",
        noon: "opoldne",
        morning: "zjutraj",
        afternoon: "popoldan",
        evening: "zve\u010Der",
        night: "pono\u010Di"
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
// node_modules/date-fns/esm/locale/sl/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    abbreviated: /^(pr\. n\. št\.|po n\. št\.)/i,
    wide: /^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i
};
var parseEraPatterns = {
    any: [/^pr/i, /^(po|na[sš]em)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]\.\s?[čc]et\.?/i,
    wide: /^[1234]\. [čc]etrtletje/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,
    wide: /^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    abbreviated: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i],
    wide: [/^ja/i, /^fe/i, /^mar/i, /^ap/i, /^maj/i, /^jun/i, /^jul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[nptsčc]/i,
    short: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,
    abbreviated: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,
    wide: /^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i
};
var parseDayPatterns = {
    narrow: [/^n/i, /^p/i, /^t/i, /^s/i, /^[cč]/i, /^p/i, /^s/i],
    any: [/^n/i, /^po/i, /^t/i, /^sr/i, /^[cč]/i, /^pe/i, /^so/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,
    any: /^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i
};
var parseDayPeriodPatterns = {
    narrow: {
        am: /^d/i,
        pm: /^p/i,
        midnight: /^24/i,
        noon: /^12/i,
        morning: /^(z?j)/i,
        afternoon: /^p/i,
        evening: /^(z?v)/i,
        night: /^(n|po)/i
    },
    any: {
        am: /^dop\./i,
        pm: /^pop\./i,
        midnight: /^o?poln/i,
        noon: /^o?pold/i,
        morning: /j/i,
        afternoon: /^pop\./i,
        evening: /^z?ve/i,
        night: /(po)?no/i
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
        defaultParseWidth: "wide"
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
// node_modules/date-fns/esm/locale/sl/index.js
var locale = {
    code: "sl",
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
var sl_default = locale;
export { sl_default };
