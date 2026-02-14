import { isSameUTCWeek } from "@nf-internal/chunk-WGUJHRU3";
import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/sk/_lib/formatDistance/index.js
function declensionGroup(scheme, count) {
    if (count === 1 && scheme.one) {
        return scheme.one;
    }
    if (count >= 2 && count <= 4 && scheme.twoFour) {
        return scheme.twoFour;
    }
    return scheme.other;
}
function declension(scheme, count, time) {
    var group = declensionGroup(scheme, count);
    var finalText = group[time];
    return finalText.replace("{{count}}", String(count));
}
function extractPreposition(token) {
    var result = ["lessThan", "about", "over", "almost"].filter(function (preposition) {
        return !!token.match(new RegExp("^" + preposition));
    });
    return result[0];
}
function prefixPreposition(preposition) {
    var translation = "";
    if (preposition === "almost") {
        translation = "takmer";
    }
    if (preposition === "about") {
        translation = "pribli\u017Ene";
    }
    return translation.length > 0 ? translation + " " : "";
}
function suffixPreposition(preposition) {
    var translation = "";
    if (preposition === "lessThan") {
        translation = "menej ne\u017E";
    }
    if (preposition === "over") {
        translation = "viac ne\u017E";
    }
    return translation.length > 0 ? translation + " " : "";
}
function lowercaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
var formatDistanceLocale = {
    xSeconds: {
        one: {
            present: "sekunda",
            past: "sekundou",
            future: "sekundu"
        },
        twoFour: {
            present: "{{count}} sekundy",
            past: "{{count}} sekundami",
            future: "{{count}} sekundy"
        },
        other: {
            present: "{{count}} sek\xFAnd",
            past: "{{count}} sekundami",
            future: "{{count}} sek\xFAnd"
        }
    },
    halfAMinute: {
        other: {
            present: "pol min\xFAty",
            past: "pol min\xFAtou",
            future: "pol min\xFAty"
        }
    },
    xMinutes: {
        one: {
            present: "min\xFAta",
            past: "min\xFAtou",
            future: "min\xFAtu"
        },
        twoFour: {
            present: "{{count}} min\xFAty",
            past: "{{count}} min\xFAtami",
            future: "{{count}} min\xFAty"
        },
        other: {
            present: "{{count}} min\xFAt",
            past: "{{count}} min\xFAtami",
            future: "{{count}} min\xFAt"
        }
    },
    xHours: {
        one: {
            present: "hodina",
            past: "hodinou",
            future: "hodinu"
        },
        twoFour: {
            present: "{{count}} hodiny",
            past: "{{count}} hodinami",
            future: "{{count}} hodiny"
        },
        other: {
            present: "{{count}} hod\xEDn",
            past: "{{count}} hodinami",
            future: "{{count}} hod\xEDn"
        }
    },
    xDays: {
        one: {
            present: "de\u0148",
            past: "d\u0148om",
            future: "de\u0148"
        },
        twoFour: {
            present: "{{count}} dni",
            past: "{{count}} d\u0148ami",
            future: "{{count}} dni"
        },
        other: {
            present: "{{count}} dn\xED",
            past: "{{count}} d\u0148ami",
            future: "{{count}} dn\xED"
        }
    },
    xWeeks: {
        one: {
            present: "t\xFD\u017Ede\u0148",
            past: "t\xFD\u017Ed\u0148om",
            future: "t\xFD\u017Ede\u0148"
        },
        twoFour: {
            present: "{{count}} t\xFD\u017Edne",
            past: "{{count}} t\xFD\u017Ed\u0148ami",
            future: "{{count}} t\xFD\u017Edne"
        },
        other: {
            present: "{{count}} t\xFD\u017Ed\u0148ov",
            past: "{{count}} t\xFD\u017Ed\u0148ami",
            future: "{{count}} t\xFD\u017Ed\u0148ov"
        }
    },
    xMonths: {
        one: {
            present: "mesiac",
            past: "mesiacom",
            future: "mesiac"
        },
        twoFour: {
            present: "{{count}} mesiace",
            past: "{{count}} mesiacmi",
            future: "{{count}} mesiace"
        },
        other: {
            present: "{{count}} mesiacov",
            past: "{{count}} mesiacmi",
            future: "{{count}} mesiacov"
        }
    },
    xYears: {
        one: {
            present: "rok",
            past: "rokom",
            future: "rok"
        },
        twoFour: {
            present: "{{count}} roky",
            past: "{{count}} rokmi",
            future: "{{count}} roky"
        },
        other: {
            present: "{{count}} rokov",
            past: "{{count}} rokmi",
            future: "{{count}} rokov"
        }
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var preposition = extractPreposition(token) || "";
    var key = lowercaseFirstLetter(token.substring(preposition.length));
    var scheme = formatDistanceLocale[key];
    if (!(options !== null && options !== void 0 && options.addSuffix)) {
        return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, "present");
    }
    if (options.comparison && options.comparison > 0) {
        return prefixPreposition(preposition) + "o " + suffixPreposition(preposition) + declension(scheme, count, "future");
    }
    else {
        return prefixPreposition(preposition) + "pred " + suffixPreposition(preposition) + declension(scheme, count, "past");
    }
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/sk/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE d. MMMM y",
    long: "d. MMMM y",
    medium: "d. M. y",
    short: "d. M. y"
};
var timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
var dateTimeFormats = {
    full: "{{date}}, {{time}}",
    long: "{{date}}, {{time}}",
    medium: "{{date}}, {{time}}",
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
// node_modules/date-fns/esm/locale/sk/_lib/formatRelative/index.js
var accusativeWeekdays = ["nede\u013Eu", "pondelok", "utorok", "stredu", "\u0161tvrtok", "piatok", "sobotu"];
function _lastWeek(day) {
    var weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
        /* Sun */
        case 3:
        /* Wed */
        case 6:
            return "'minul\xFA " + weekday + " o' p";
        default:
            return "'minul\xFD' eeee 'o' p";
    }
}
function thisWeek(day) {
    var weekday = accusativeWeekdays[day];
    if (day === 4) {
        return "'vo' eeee 'o' p";
    }
    else {
        return "'v " + weekday + " o' p";
    }
}
function _nextWeek(day) {
    var weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
        /* Sun */
        case 4:
        /* Wed */
        case 6:
            return "'bud\xFAcu " + weekday + " o' p";
        default:
            return "'bud\xFAci' eeee 'o' p";
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
    yesterday: "'v\u010Dera o' p",
    today: "'dnes o' p",
    tomorrow: "'zajtra o' p",
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
// node_modules/date-fns/esm/locale/sk/_lib/localize/index.js
var eraValues = {
    narrow: ["pred Kr.", "po Kr."],
    abbreviated: ["pred Kr.", "po Kr."],
    wide: ["pred Kristom", "po Kristovi"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1. \u0161tvr\u0165rok", "2. \u0161tvr\u0165rok", "3. \u0161tvr\u0165rok", "4. \u0161tvr\u0165rok"]
};
var monthValues = {
    narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: ["jan", "feb", "mar", "apr", "m\xE1j", "j\xFAn", "j\xFAl", "aug", "sep", "okt", "nov", "dec"],
    wide: ["janu\xE1r", "febru\xE1r", "marec", "apr\xEDl", "m\xE1j", "j\xFAn", "j\xFAl", "august", "september", "okt\xF3ber", "november", "december"]
};
var formattingMonthValues = {
    narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: ["jan", "feb", "mar", "apr", "m\xE1j", "j\xFAn", "j\xFAl", "aug", "sep", "okt", "nov", "dec"],
    wide: ["janu\xE1ra", "febru\xE1ra", "marca", "apr\xEDla", "m\xE1ja", "j\xFAna", "j\xFAla", "augusta", "septembra", "okt\xF3bra", "novembra", "decembra"]
};
var dayValues = {
    narrow: ["n", "p", "u", "s", "\u0161", "p", "s"],
    short: ["ne", "po", "ut", "st", "\u0161t", "pi", "so"],
    abbreviated: ["ne", "po", "ut", "st", "\u0161t", "pi", "so"],
    wide: ["nede\u013Ea", "pondelok", "utorok", "streda", "\u0161tvrtok", "piatok", "sobota"]
};
var dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "poln.",
        noon: "pol.",
        morning: "r\xE1no",
        afternoon: "pop.",
        evening: "ve\u010D.",
        night: "noc"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "poln.",
        noon: "pol.",
        morning: "r\xE1no",
        afternoon: "popol.",
        evening: "ve\u010Der",
        night: "noc"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "polnoc",
        noon: "poludnie",
        morning: "r\xE1no",
        afternoon: "popoludnie",
        evening: "ve\u010Der",
        night: "noc"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "o poln.",
        noon: "nap.",
        morning: "r\xE1no",
        afternoon: "pop.",
        evening: "ve\u010D.",
        night: "v n."
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "o poln.",
        noon: "napol.",
        morning: "r\xE1no",
        afternoon: "popol.",
        evening: "ve\u010Der",
        night: "v noci"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "o polnoci",
        noon: "napoludnie",
        morning: "r\xE1no",
        afternoon: "popoludn\xED",
        evening: "ve\u010Der",
        night: "v noci"
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
        defaultWidth: "wide",
        formattingValues: formattingMonthValues,
        defaultFormattingWidth: "wide"
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
// node_modules/date-fns/esm/locale/sk/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)\.?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
    abbreviated: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
    wide: /^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i
};
var parseEraPatterns = {
    any: [/^pr/i, /^(po|n)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234]\. [šs]tvr[ťt]rok/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i,
    wide: /^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^m[áa]j/i, /^j[úu]n/i, /^j[úu]l/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[npusšp]/i,
    short: /^(ne|po|ut|st|št|pi|so)/i,
    abbreviated: /^(ne|po|ut|st|št|pi|so)/i,
    wide: /^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i
};
var parseDayPatterns = {
    narrow: [/^n/i, /^p/i, /^u/i, /^s/i, /^š/i, /^p/i, /^s/i],
    any: [/^n/i, /^po/i, /^u/i, /^st/i, /^(št|stv)/i, /^pi/i, /^so/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i,
    abbreviated: /^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i,
    any: /^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^am/i,
        pm: /^pm/i,
        midnight: /poln/i,
        noon: /^(nap|(na)?pol(\.|u))/i,
        morning: /^r[áa]no/i,
        afternoon: /^pop/i,
        evening: /^ve[čc]/i,
        night: /^(noc|v n\.)/i
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
// node_modules/date-fns/esm/locale/sk/index.js
var locale = {
    code: "sk",
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
var sk_default = locale;
export { sk_default };
