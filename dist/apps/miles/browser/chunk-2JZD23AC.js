import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/et/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        standalone: {
            one: "v\xE4hem kui \xFCks sekund",
            other: "v\xE4hem kui {{count}} sekundit"
        },
        withPreposition: {
            one: "v\xE4hem kui \xFChe sekundi",
            other: "v\xE4hem kui {{count}} sekundi"
        }
    },
    xSeconds: {
        standalone: {
            one: "\xFCks sekund",
            other: "{{count}} sekundit"
        },
        withPreposition: {
            one: "\xFChe sekundi",
            other: "{{count}} sekundi"
        }
    },
    halfAMinute: {
        standalone: "pool minutit",
        withPreposition: "poole minuti"
    },
    lessThanXMinutes: {
        standalone: {
            one: "v\xE4hem kui \xFCks minut",
            other: "v\xE4hem kui {{count}} minutit"
        },
        withPreposition: {
            one: "v\xE4hem kui \xFChe minuti",
            other: "v\xE4hem kui {{count}} minuti"
        }
    },
    xMinutes: {
        standalone: {
            one: "\xFCks minut",
            other: "{{count}} minutit"
        },
        withPreposition: {
            one: "\xFChe minuti",
            other: "{{count}} minuti"
        }
    },
    aboutXHours: {
        standalone: {
            one: "umbes \xFCks tund",
            other: "umbes {{count}} tundi"
        },
        withPreposition: {
            one: "umbes \xFChe tunni",
            other: "umbes {{count}} tunni"
        }
    },
    xHours: {
        standalone: {
            one: "\xFCks tund",
            other: "{{count}} tundi"
        },
        withPreposition: {
            one: "\xFChe tunni",
            other: "{{count}} tunni"
        }
    },
    xDays: {
        standalone: {
            one: "\xFCks p\xE4ev",
            other: "{{count}} p\xE4eva"
        },
        withPreposition: {
            one: "\xFChe p\xE4eva",
            other: "{{count}} p\xE4eva"
        }
    },
    aboutXWeeks: {
        standalone: {
            one: "umbes \xFCks n\xE4dal",
            other: "umbes {{count}} n\xE4dalat"
        },
        withPreposition: {
            one: "umbes \xFChe n\xE4dala",
            other: "umbes {{count}} n\xE4dala"
        }
    },
    xWeeks: {
        standalone: {
            one: "\xFCks n\xE4dal",
            other: "{{count}} n\xE4dalat"
        },
        withPreposition: {
            one: "\xFChe n\xE4dala",
            other: "{{count}} n\xE4dala"
        }
    },
    aboutXMonths: {
        standalone: {
            one: "umbes \xFCks kuu",
            other: "umbes {{count}} kuud"
        },
        withPreposition: {
            one: "umbes \xFChe kuu",
            other: "umbes {{count}} kuu"
        }
    },
    xMonths: {
        standalone: {
            one: "\xFCks kuu",
            other: "{{count}} kuud"
        },
        withPreposition: {
            one: "\xFChe kuu",
            other: "{{count}} kuu"
        }
    },
    aboutXYears: {
        standalone: {
            one: "umbes \xFCks aasta",
            other: "umbes {{count}} aastat"
        },
        withPreposition: {
            one: "umbes \xFChe aasta",
            other: "umbes {{count}} aasta"
        }
    },
    xYears: {
        standalone: {
            one: "\xFCks aasta",
            other: "{{count}} aastat"
        },
        withPreposition: {
            one: "\xFChe aasta",
            other: "{{count}} aasta"
        }
    },
    overXYears: {
        standalone: {
            one: "rohkem kui \xFCks aasta",
            other: "rohkem kui {{count}} aastat"
        },
        withPreposition: {
            one: "rohkem kui \xFChe aasta",
            other: "rohkem kui {{count}} aasta"
        }
    },
    almostXYears: {
        standalone: {
            one: "peaaegu \xFCks aasta",
            other: "peaaegu {{count}} aastat"
        },
        withPreposition: {
            one: "peaaegu \xFChe aasta",
            other: "peaaegu {{count}} aasta"
        }
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var usageGroup = options !== null && options !== void 0 && options.addSuffix ? formatDistanceLocale[token].withPreposition : formatDistanceLocale[token].standalone;
    var result;
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
            return result + " p\xE4rast";
        }
        else {
            return result + " eest";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/et/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d. MMMM y",
    long: "d. MMMM y",
    medium: "d. MMM y",
    short: "dd.MM.y"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'kell' {{time}}",
    long: "{{date}} 'kell' {{time}}",
    medium: "{{date}}. {{time}}",
    short: "{{date}}. {{time}}"
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
// node_modules/date-fns/esm/locale/et/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'eelmine' eeee 'kell' p",
    yesterday: "'eile kell' p",
    today: "'t\xE4na kell' p",
    tomorrow: "'homme kell' p",
    nextWeek: "'j\xE4rgmine' eeee 'kell' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/et/_lib/localize/index.js
var eraValues = {
    narrow: ["e.m.a", "m.a.j"],
    abbreviated: ["e.m.a", "m.a.j"],
    wide: ["enne meie ajaarvamist", "meie ajaarvamise j\xE4rgi"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["K1", "K2", "K3", "K4"],
    wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
};
var monthValues = {
    narrow: ["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["jaan", "veebr", "m\xE4rts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"],
    wide: ["jaanuar", "veebruar", "m\xE4rts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"]
};
var dayValues = {
    narrow: ["P", "E", "T", "K", "N", "R", "L"],
    short: ["P", "E", "T", "K", "N", "R", "L"],
    abbreviated: ["p\xFChap.", "esmasp.", "teisip.", "kolmap.", "neljap.", "reede.", "laup."],
    wide: ["p\xFChap\xE4ev", "esmasp\xE4ev", "teisip\xE4ev", "kolmap\xE4ev", "neljap\xE4ev", "reede", "laup\xE4ev"]
};
var dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "kesk\xF6\xF6",
        noon: "keskp\xE4ev",
        morning: "hommik",
        afternoon: "p\xE4rastl\xF5una",
        evening: "\xF5htu",
        night: "\xF6\xF6"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "kesk\xF6\xF6",
        noon: "keskp\xE4ev",
        morning: "hommik",
        afternoon: "p\xE4rastl\xF5una",
        evening: "\xF5htu",
        night: "\xF6\xF6"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "kesk\xF6\xF6",
        noon: "keskp\xE4ev",
        morning: "hommik",
        afternoon: "p\xE4rastl\xF5una",
        evening: "\xF5htu",
        night: "\xF6\xF6"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "kesk\xF6\xF6l",
        noon: "keskp\xE4eval",
        morning: "hommikul",
        afternoon: "p\xE4rastl\xF5unal",
        evening: "\xF5htul",
        night: "\xF6\xF6sel"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "kesk\xF6\xF6l",
        noon: "keskp\xE4eval",
        morning: "hommikul",
        afternoon: "p\xE4rastl\xF5unal",
        evening: "\xF5htul",
        night: "\xF6\xF6sel"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "kesk\xF6\xF6l",
        noon: "keskp\xE4eval",
        morning: "hommikul",
        afternoon: "p\xE4rastl\xF5unal",
        evening: "\xF5htul",
        night: "\xF6\xF6sel"
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
        formattingValues: monthValues,
        defaultFormattingWidth: "wide"
    }),
    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: "wide",
        formattingValues: dayValues,
        defaultFormattingWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/et/_lib/match/index.js
var matchOrdinalNumberPattern = /^\d+\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
    abbreviated: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
    wide: /^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i
};
var parseEraPatterns = {
    any: [/^e/i, /^(m|p)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^K[1234]/i,
    wide: /^[1234](\.)? kvartal/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[jvmasond]/i,
    abbreviated: /^(jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets)/i,
    wide: /^(jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember)/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^v/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^v/i, /^mär/i, /^ap/i, /^mai/i, /^juun/i, /^juul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[petknrl]/i,
    short: /^[petknrl]/i,
    abbreviated: /^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,
    wide: /^(pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev)/i
};
var parseDayPatterns = {
    any: [/^p/i, /^e/i, /^t/i, /^k/i, /^n/i, /^r/i, /^l/i]
};
var matchDayPeriodPatterns = {
    any: /^(am|pm|keskööl?|keskpäev(al)?|hommik(ul)?|pärastlõunal?|õhtul?|öö(sel)?)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^keskö/i,
        noon: /^keskp/i,
        morning: /hommik/i,
        afternoon: /pärastlõuna/i,
        evening: /õhtu/i,
        night: /öö/i
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
// node_modules/date-fns/esm/locale/et/index.js
var locale = {
    code: "et",
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
var et_default = locale;
export { et_default };
