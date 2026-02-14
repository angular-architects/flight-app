import { isSameUTCWeek } from "@nf-internal/chunk-WGUJHRU3";
import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/pl/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: {
            regular: "mniej ni\u017C sekunda",
            past: "mniej ni\u017C sekund\u0119",
            future: "mniej ni\u017C sekund\u0119"
        },
        twoFour: "mniej ni\u017C {{count}} sekundy",
        other: "mniej ni\u017C {{count}} sekund"
    },
    xSeconds: {
        one: {
            regular: "sekunda",
            past: "sekund\u0119",
            future: "sekund\u0119"
        },
        twoFour: "{{count}} sekundy",
        other: "{{count}} sekund"
    },
    halfAMinute: {
        one: "p\xF3\u0142 minuty",
        twoFour: "p\xF3\u0142 minuty",
        other: "p\xF3\u0142 minuty"
    },
    lessThanXMinutes: {
        one: {
            regular: "mniej ni\u017C minuta",
            past: "mniej ni\u017C minut\u0119",
            future: "mniej ni\u017C minut\u0119"
        },
        twoFour: "mniej ni\u017C {{count}} minuty",
        other: "mniej ni\u017C {{count}} minut"
    },
    xMinutes: {
        one: {
            regular: "minuta",
            past: "minut\u0119",
            future: "minut\u0119"
        },
        twoFour: "{{count}} minuty",
        other: "{{count}} minut"
    },
    aboutXHours: {
        one: {
            regular: "oko\u0142o godziny",
            past: "oko\u0142o godziny",
            future: "oko\u0142o godzin\u0119"
        },
        twoFour: "oko\u0142o {{count}} godziny",
        other: "oko\u0142o {{count}} godzin"
    },
    xHours: {
        one: {
            regular: "godzina",
            past: "godzin\u0119",
            future: "godzin\u0119"
        },
        twoFour: "{{count}} godziny",
        other: "{{count}} godzin"
    },
    xDays: {
        one: {
            regular: "dzie\u0144",
            past: "dzie\u0144",
            future: "1 dzie\u0144"
        },
        twoFour: "{{count}} dni",
        other: "{{count}} dni"
    },
    aboutXWeeks: {
        one: "oko\u0142o tygodnia",
        twoFour: "oko\u0142o {{count}} tygodni",
        other: "oko\u0142o {{count}} tygodni"
    },
    xWeeks: {
        one: "tydzie\u0144",
        twoFour: "{{count}} tygodnie",
        other: "{{count}} tygodni"
    },
    aboutXMonths: {
        one: "oko\u0142o miesi\u0105c",
        twoFour: "oko\u0142o {{count}} miesi\u0105ce",
        other: "oko\u0142o {{count}} miesi\u0119cy"
    },
    xMonths: {
        one: "miesi\u0105c",
        twoFour: "{{count}} miesi\u0105ce",
        other: "{{count}} miesi\u0119cy"
    },
    aboutXYears: {
        one: "oko\u0142o rok",
        twoFour: "oko\u0142o {{count}} lata",
        other: "oko\u0142o {{count}} lat"
    },
    xYears: {
        one: "rok",
        twoFour: "{{count}} lata",
        other: "{{count}} lat"
    },
    overXYears: {
        one: "ponad rok",
        twoFour: "ponad {{count}} lata",
        other: "ponad {{count}} lat"
    },
    almostXYears: {
        one: "prawie rok",
        twoFour: "prawie {{count}} lata",
        other: "prawie {{count}} lat"
    }
};
function declensionGroup(scheme, count) {
    if (count === 1) {
        return scheme.one;
    }
    var rem100 = count % 100;
    if (rem100 <= 20 && rem100 > 10) {
        return scheme.other;
    }
    var rem10 = rem100 % 10;
    if (rem10 >= 2 && rem10 <= 4) {
        return scheme.twoFour;
    }
    return scheme.other;
}
function declension(scheme, count, time) {
    var group = declensionGroup(scheme, count);
    var finalText = typeof group === "string" ? group : group[time];
    return finalText.replace("{{count}}", String(count));
}
var formatDistance = function formatDistance2(token, count, options) {
    var scheme = formatDistanceLocale[token];
    if (!(options !== null && options !== void 0 && options.addSuffix)) {
        return declension(scheme, count, "regular");
    }
    if (options.comparison && options.comparison > 0) {
        return "za " + declension(scheme, count, "future");
    }
    else {
        return declension(scheme, count, "past") + " temu";
    }
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/pl/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, do MMMM y",
    long: "do MMMM y",
    medium: "do MMM y",
    short: "dd.MM.y"
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
// node_modules/date-fns/esm/locale/pl/_lib/formatRelative/index.js
var adjectivesLastWeek = {
    masculine: "ostatni",
    feminine: "ostatnia"
};
var adjectivesThisWeek = {
    masculine: "ten",
    feminine: "ta"
};
var adjectivesNextWeek = {
    masculine: "nast\u0119pny",
    feminine: "nast\u0119pna"
};
var dayGrammaticalGender = {
    0: "feminine",
    1: "masculine",
    2: "masculine",
    3: "feminine",
    4: "masculine",
    5: "masculine",
    6: "feminine"
};
function dayAndTimeWithAdjective(token, date, baseDate, options) {
    var adjectives;
    if (isSameUTCWeek(date, baseDate, options)) {
        adjectives = adjectivesThisWeek;
    }
    else if (token === "lastWeek") {
        adjectives = adjectivesLastWeek;
    }
    else if (token === "nextWeek") {
        adjectives = adjectivesNextWeek;
    }
    else {
        throw new Error("Cannot determine adjectives for token ".concat(token));
    }
    var day = date.getUTCDay();
    var grammaticalGender = dayGrammaticalGender[day];
    var adjective = adjectives[grammaticalGender];
    return "'".concat(adjective, "' eeee 'o' p");
}
var formatRelativeLocale = {
    lastWeek: dayAndTimeWithAdjective,
    yesterday: "'wczoraj o' p",
    today: "'dzisiaj o' p",
    tomorrow: "'jutro o' p",
    nextWeek: dayAndTimeWithAdjective,
    other: "P"
};
var formatRelative = function formatRelative2(token, date, baseDate, options) {
    var format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(token, date, baseDate, options);
    }
    return format;
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/pl/_lib/localize/index.js
var eraValues = {
    narrow: ["p.n.e.", "n.e."],
    abbreviated: ["p.n.e.", "n.e."],
    wide: ["przed nasz\u0105 er\u0105", "naszej ery"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
    wide: ["I kwarta\u0142", "II kwarta\u0142", "III kwarta\u0142", "IV kwarta\u0142"]
};
var monthValues = {
    narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
    abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa\u017A", "lis", "gru"],
    wide: ["stycze\u0144", "luty", "marzec", "kwiecie\u0144", "maj", "czerwiec", "lipiec", "sierpie\u0144", "wrzesie\u0144", "pa\u017Adziernik", "listopad", "grudzie\u0144"]
};
var monthFormattingValues = {
    narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
    abbreviated: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa\u017A", "lis", "gru"],
    wide: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "wrze\u015Bnia", "pa\u017Adziernika", "listopada", "grudnia"]
};
var dayValues = {
    narrow: ["N", "P", "W", "\u015A", "C", "P", "S"],
    short: ["nie", "pon", "wto", "\u015Bro", "czw", "pi\u0105", "sob"],
    abbreviated: ["niedz.", "pon.", "wt.", "\u015Br.", "czw.", "pt.", "sob."],
    wide: ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015Broda", "czwartek", "pi\u0105tek", "sobota"]
};
var dayFormattingValues = {
    narrow: ["n", "p", "w", "\u015B", "c", "p", "s"],
    short: ["nie", "pon", "wto", "\u015Bro", "czw", "pi\u0105", "sob"],
    abbreviated: ["niedz.", "pon.", "wt.", "\u015Br.", "czw.", "pt.", "sob."],
    wide: ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015Broda", "czwartek", "pi\u0105tek", "sobota"]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "p\xF3\u0142n.",
        noon: "po\u0142",
        morning: "rano",
        afternoon: "popo\u0142.",
        evening: "wiecz.",
        night: "noc"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "p\xF3\u0142noc",
        noon: "po\u0142udnie",
        morning: "rano",
        afternoon: "popo\u0142udnie",
        evening: "wiecz\xF3r",
        night: "noc"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "p\xF3\u0142noc",
        noon: "po\u0142udnie",
        morning: "rano",
        afternoon: "popo\u0142udnie",
        evening: "wiecz\xF3r",
        night: "noc"
    }
};
var dayPeriodFormattingValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "o p\xF3\u0142n.",
        noon: "w po\u0142.",
        morning: "rano",
        afternoon: "po po\u0142.",
        evening: "wiecz.",
        night: "w nocy"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "o p\xF3\u0142nocy",
        noon: "w po\u0142udnie",
        morning: "rano",
        afternoon: "po po\u0142udniu",
        evening: "wieczorem",
        night: "w nocy"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "o p\xF3\u0142nocy",
        noon: "w po\u0142udnie",
        morning: "rano",
        afternoon: "po po\u0142udniu",
        evening: "wieczorem",
        night: "w nocy"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    return String(dirtyNumber);
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
        formattingValues: monthFormattingValues,
        defaultFormattingWidth: "wide"
    }),
    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: "wide",
        formattingValues: dayFormattingValues,
        defaultFormattingWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: dayPeriodFormattingValues,
        defaultFormattingWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/pl/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
    abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
    wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i
};
var parseEraPatterns = {
    any: [/^p/i, /^n/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
    wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i
};
var parseQuarterPatterns = {
    narrow: [/1/i, /2/i, /3/i, /4/i],
    any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i]
};
var matchMonthPatterns = {
    narrow: /^[slmkcwpg]/i,
    abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
    wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i
};
var parseMonthPatterns = {
    narrow: [/^s/i, /^l/i, /^m/i, /^k/i, /^m/i, /^c/i, /^l/i, /^s/i, /^w/i, /^p/i, /^l/i, /^g/i],
    any: [/^st/i, /^lu/i, /^mar/i, /^k/i, /^maj/i, /^c/i, /^lip/i, /^si/i, /^w/i, /^p/i, /^lis/i, /^g/i]
};
var matchDayPatterns = {
    narrow: /^[npwścs]/i,
    short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
    abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
    wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i
};
var parseDayPatterns = {
    narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
    abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i],
    any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
    any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i
};
var parseDayPeriodPatterns = {
    narrow: {
        am: /^a$/i,
        pm: /^p$/i,
        midnight: /pó(ł|l)n/i,
        noon: /po(ł|l)/i,
        morning: /rano/i,
        afternoon: /po\s*po(ł|l)/i,
        evening: /wiecz/i,
        night: /noc/i
    },
    any: {
        am: /^am/i,
        pm: /^pm/i,
        midnight: /pó(ł|l)n/i,
        noon: /po(ł|l)/i,
        morning: /rano/i,
        afternoon: /po\s*po(ł|l)/i,
        evening: /wiecz/i,
        night: /noc/i
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
// node_modules/date-fns/esm/locale/pl/index.js
var locale = {
    code: "pl",
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
var pl_default = locale;
export { pl_default };
