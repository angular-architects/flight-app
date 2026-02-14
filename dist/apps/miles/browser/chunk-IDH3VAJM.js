import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/cs/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: {
            regular: "m\xE9n\u011B ne\u017E sekunda",
            past: "p\u0159ed m\xE9n\u011B ne\u017E sekundou",
            future: "za m\xE9n\u011B ne\u017E sekundu"
        },
        few: {
            regular: "m\xE9n\u011B ne\u017E {{count}} sekundy",
            past: "p\u0159ed m\xE9n\u011B ne\u017E {{count}} sekundami",
            future: "za m\xE9n\u011B ne\u017E {{count}} sekundy"
        },
        many: {
            regular: "m\xE9n\u011B ne\u017E {{count}} sekund",
            past: "p\u0159ed m\xE9n\u011B ne\u017E {{count}} sekundami",
            future: "za m\xE9n\u011B ne\u017E {{count}} sekund"
        }
    },
    xSeconds: {
        one: {
            regular: "sekunda",
            past: "p\u0159ed sekundou",
            future: "za sekundu"
        },
        few: {
            regular: "{{count}} sekundy",
            past: "p\u0159ed {{count}} sekundami",
            future: "za {{count}} sekundy"
        },
        many: {
            regular: "{{count}} sekund",
            past: "p\u0159ed {{count}} sekundami",
            future: "za {{count}} sekund"
        }
    },
    halfAMinute: {
        type: "other",
        other: {
            regular: "p\u016Fl minuty",
            past: "p\u0159ed p\u016Fl minutou",
            future: "za p\u016Fl minuty"
        }
    },
    lessThanXMinutes: {
        one: {
            regular: "m\xE9n\u011B ne\u017E minuta",
            past: "p\u0159ed m\xE9n\u011B ne\u017E minutou",
            future: "za m\xE9n\u011B ne\u017E minutu"
        },
        few: {
            regular: "m\xE9n\u011B ne\u017E {{count}} minuty",
            past: "p\u0159ed m\xE9n\u011B ne\u017E {{count}} minutami",
            future: "za m\xE9n\u011B ne\u017E {{count}} minuty"
        },
        many: {
            regular: "m\xE9n\u011B ne\u017E {{count}} minut",
            past: "p\u0159ed m\xE9n\u011B ne\u017E {{count}} minutami",
            future: "za m\xE9n\u011B ne\u017E {{count}} minut"
        }
    },
    xMinutes: {
        one: {
            regular: "minuta",
            past: "p\u0159ed minutou",
            future: "za minutu"
        },
        few: {
            regular: "{{count}} minuty",
            past: "p\u0159ed {{count}} minutami",
            future: "za {{count}} minuty"
        },
        many: {
            regular: "{{count}} minut",
            past: "p\u0159ed {{count}} minutami",
            future: "za {{count}} minut"
        }
    },
    aboutXHours: {
        one: {
            regular: "p\u0159ibli\u017En\u011B hodina",
            past: "p\u0159ibli\u017En\u011B p\u0159ed hodinou",
            future: "p\u0159ibli\u017En\u011B za hodinu"
        },
        few: {
            regular: "p\u0159ibli\u017En\u011B {{count}} hodiny",
            past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} hodinami",
            future: "p\u0159ibli\u017En\u011B za {{count}} hodiny"
        },
        many: {
            regular: "p\u0159ibli\u017En\u011B {{count}} hodin",
            past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} hodinami",
            future: "p\u0159ibli\u017En\u011B za {{count}} hodin"
        }
    },
    xHours: {
        one: {
            regular: "hodina",
            past: "p\u0159ed hodinou",
            future: "za hodinu"
        },
        few: {
            regular: "{{count}} hodiny",
            past: "p\u0159ed {{count}} hodinami",
            future: "za {{count}} hodiny"
        },
        many: {
            regular: "{{count}} hodin",
            past: "p\u0159ed {{count}} hodinami",
            future: "za {{count}} hodin"
        }
    },
    xDays: {
        one: {
            regular: "den",
            past: "p\u0159ed dnem",
            future: "za den"
        },
        few: {
            regular: "{{count}} dny",
            past: "p\u0159ed {{count}} dny",
            future: "za {{count}} dny"
        },
        many: {
            regular: "{{count}} dn\xED",
            past: "p\u0159ed {{count}} dny",
            future: "za {{count}} dn\xED"
        }
    },
    aboutXWeeks: {
        one: {
            regular: "p\u0159ibli\u017En\u011B t\xFDden",
            past: "p\u0159ibli\u017En\u011B p\u0159ed t\xFDdnem",
            future: "p\u0159ibli\u017En\u011B za t\xFDden"
        },
        few: {
            regular: "p\u0159ibli\u017En\u011B {{count}} t\xFDdny",
            past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} t\xFDdny",
            future: "p\u0159ibli\u017En\u011B za {{count}} t\xFDdny"
        },
        many: {
            regular: "p\u0159ibli\u017En\u011B {{count}} t\xFDdn\u016F",
            past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} t\xFDdny",
            future: "p\u0159ibli\u017En\u011B za {{count}} t\xFDdn\u016F"
        }
    },
    xWeeks: {
        one: {
            regular: "t\xFDden",
            past: "p\u0159ed t\xFDdnem",
            future: "za t\xFDden"
        },
        few: {
            regular: "{{count}} t\xFDdny",
            past: "p\u0159ed {{count}} t\xFDdny",
            future: "za {{count}} t\xFDdny"
        },
        many: {
            regular: "{{count}} t\xFDdn\u016F",
            past: "p\u0159ed {{count}} t\xFDdny",
            future: "za {{count}} t\xFDdn\u016F"
        }
    },
    aboutXMonths: {
        one: {
            regular: "p\u0159ibli\u017En\u011B m\u011Bs\xEDc",
            past: "p\u0159ibli\u017En\u011B p\u0159ed m\u011Bs\xEDcem",
            future: "p\u0159ibli\u017En\u011B za m\u011Bs\xEDc"
        },
        few: {
            regular: "p\u0159ibli\u017En\u011B {{count}} m\u011Bs\xEDce",
            past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} m\u011Bs\xEDci",
            future: "p\u0159ibli\u017En\u011B za {{count}} m\u011Bs\xEDce"
        },
        many: {
            regular: "p\u0159ibli\u017En\u011B {{count}} m\u011Bs\xEDc\u016F",
            past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} m\u011Bs\xEDci",
            future: "p\u0159ibli\u017En\u011B za {{count}} m\u011Bs\xEDc\u016F"
        }
    },
    xMonths: {
        one: {
            regular: "m\u011Bs\xEDc",
            past: "p\u0159ed m\u011Bs\xEDcem",
            future: "za m\u011Bs\xEDc"
        },
        few: {
            regular: "{{count}} m\u011Bs\xEDce",
            past: "p\u0159ed {{count}} m\u011Bs\xEDci",
            future: "za {{count}} m\u011Bs\xEDce"
        },
        many: {
            regular: "{{count}} m\u011Bs\xEDc\u016F",
            past: "p\u0159ed {{count}} m\u011Bs\xEDci",
            future: "za {{count}} m\u011Bs\xEDc\u016F"
        }
    },
    aboutXYears: {
        one: {
            regular: "p\u0159ibli\u017En\u011B rok",
            past: "p\u0159ibli\u017En\u011B p\u0159ed rokem",
            future: "p\u0159ibli\u017En\u011B za rok"
        },
        few: {
            regular: "p\u0159ibli\u017En\u011B {{count}} roky",
            past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} roky",
            future: "p\u0159ibli\u017En\u011B za {{count}} roky"
        },
        many: {
            regular: "p\u0159ibli\u017En\u011B {{count}} rok\u016F",
            past: "p\u0159ibli\u017En\u011B p\u0159ed {{count}} roky",
            future: "p\u0159ibli\u017En\u011B za {{count}} rok\u016F"
        }
    },
    xYears: {
        one: {
            regular: "rok",
            past: "p\u0159ed rokem",
            future: "za rok"
        },
        few: {
            regular: "{{count}} roky",
            past: "p\u0159ed {{count}} roky",
            future: "za {{count}} roky"
        },
        many: {
            regular: "{{count}} rok\u016F",
            past: "p\u0159ed {{count}} roky",
            future: "za {{count}} rok\u016F"
        }
    },
    overXYears: {
        one: {
            regular: "v\xEDce ne\u017E rok",
            past: "p\u0159ed v\xEDce ne\u017E rokem",
            future: "za v\xEDce ne\u017E rok"
        },
        few: {
            regular: "v\xEDce ne\u017E {{count}} roky",
            past: "p\u0159ed v\xEDce ne\u017E {{count}} roky",
            future: "za v\xEDce ne\u017E {{count}} roky"
        },
        many: {
            regular: "v\xEDce ne\u017E {{count}} rok\u016F",
            past: "p\u0159ed v\xEDce ne\u017E {{count}} roky",
            future: "za v\xEDce ne\u017E {{count}} rok\u016F"
        }
    },
    almostXYears: {
        one: {
            regular: "skoro rok",
            past: "skoro p\u0159ed rokem",
            future: "skoro za rok"
        },
        few: {
            regular: "skoro {{count}} roky",
            past: "skoro p\u0159ed {{count}} roky",
            future: "skoro za {{count}} roky"
        },
        many: {
            regular: "skoro {{count}} rok\u016F",
            past: "skoro p\u0159ed {{count}} roky",
            future: "skoro za {{count}} rok\u016F"
        }
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var pluralResult;
    var tokenValue = formatDistanceLocale[token];
    if (tokenValue.type === "other") {
        pluralResult = tokenValue.other;
    }
    else if (count === 1) {
        pluralResult = tokenValue.one;
    }
    else if (count > 1 && count < 5) {
        pluralResult = tokenValue.few;
    }
    else {
        pluralResult = tokenValue.many;
    }
    var suffixExist = (options === null || options === void 0 ? void 0 : options.addSuffix) === true;
    var comparison = options === null || options === void 0 ? void 0 : options.comparison;
    var timeResult;
    if (suffixExist && comparison === -1) {
        timeResult = pluralResult.past;
    }
    else if (suffixExist && comparison === 1) {
        timeResult = pluralResult.future;
    }
    else {
        timeResult = pluralResult.regular;
    }
    return timeResult.replace("{{count}}", String(count));
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/cs/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d. MMMM yyyy",
    long: "d. MMMM yyyy",
    medium: "d. M. yyyy",
    short: "dd.MM.yyyy"
};
var timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'v' {{time}}",
    long: "{{date}} 'v' {{time}}",
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
// node_modules/date-fns/esm/locale/cs/_lib/formatRelative/index.js
var accusativeWeekdays = ["ned\u011Bli", "pond\u011Bl\xED", "\xFAter\xFD", "st\u0159edu", "\u010Dtvrtek", "p\xE1tek", "sobotu"];
var formatRelativeLocale = {
    lastWeek: "'posledn\xED' eeee 've' p",
    yesterday: "'v\u010Dera v' p",
    today: "'dnes v' p",
    tomorrow: "'z\xEDtra v' p",
    nextWeek: function nextWeek(date) {
        var day = date.getUTCDay();
        return "'v " + accusativeWeekdays[day] + " o' p";
    },
    other: "P"
};
var formatRelative = function formatRelative2(token, date) {
    var format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date);
    }
    return format;
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/cs/_lib/localize/index.js
var eraValues = {
    narrow: ["p\u0159. n. l.", "n. l."],
    abbreviated: ["p\u0159. n. l.", "n. l."],
    wide: ["p\u0159ed na\u0161\xEDm letopo\u010Dtem", "na\u0161eho letopo\u010Dtu"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1. \u010Dtvrtlet\xED", "2. \u010Dtvrtlet\xED", "3. \u010Dtvrtlet\xED", "4. \u010Dtvrtlet\xED"],
    wide: ["1. \u010Dtvrtlet\xED", "2. \u010Dtvrtlet\xED", "3. \u010Dtvrtlet\xED", "4. \u010Dtvrtlet\xED"]
};
var monthValues = {
    narrow: ["L", "\xDA", "B", "D", "K", "\u010C", "\u010C", "S", "Z", "\u0158", "L", "P"],
    abbreviated: ["led", "\xFAno", "b\u0159e", "dub", "kv\u011B", "\u010Dvn", "\u010Dvc", "srp", "z\xE1\u0159", "\u0159\xEDj", "lis", "pro"],
    wide: ["leden", "\xFAnor", "b\u0159ezen", "duben", "kv\u011Bten", "\u010Derven", "\u010Dervenec", "srpen", "z\xE1\u0159\xED", "\u0159\xEDjen", "listopad", "prosinec"]
};
var formattingMonthValues = {
    narrow: ["L", "\xDA", "B", "D", "K", "\u010C", "\u010C", "S", "Z", "\u0158", "L", "P"],
    abbreviated: ["led", "\xFAno", "b\u0159e", "dub", "kv\u011B", "\u010Dvn", "\u010Dvc", "srp", "z\xE1\u0159", "\u0159\xEDj", "lis", "pro"],
    wide: ["ledna", "\xFAnora", "b\u0159ezna", "dubna", "kv\u011Btna", "\u010Dervna", "\u010Dervence", "srpna", "z\xE1\u0159\xED", "\u0159\xEDjna", "listopadu", "prosince"]
};
var dayValues = {
    narrow: ["ne", "po", "\xFAt", "st", "\u010Dt", "p\xE1", "so"],
    short: ["ne", "po", "\xFAt", "st", "\u010Dt", "p\xE1", "so"],
    abbreviated: ["ned", "pon", "\xFAte", "st\u0159", "\u010Dtv", "p\xE1t", "sob"],
    wide: ["ned\u011Ble", "pond\u011Bl\xED", "\xFAter\xFD", "st\u0159eda", "\u010Dtvrtek", "p\xE1tek", "sobota"]
};
var dayPeriodValues = {
    narrow: {
        am: "dop.",
        pm: "odp.",
        midnight: "p\u016Flnoc",
        noon: "poledne",
        morning: "r\xE1no",
        afternoon: "odpoledne",
        evening: "ve\u010Der",
        night: "noc"
    },
    abbreviated: {
        am: "dop.",
        pm: "odp.",
        midnight: "p\u016Flnoc",
        noon: "poledne",
        morning: "r\xE1no",
        afternoon: "odpoledne",
        evening: "ve\u010Der",
        night: "noc"
    },
    wide: {
        am: "dopoledne",
        pm: "odpoledne",
        midnight: "p\u016Flnoc",
        noon: "poledne",
        morning: "r\xE1no",
        afternoon: "odpoledne",
        evening: "ve\u010Der",
        night: "noc"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "dop.",
        pm: "odp.",
        midnight: "p\u016Flnoc",
        noon: "poledne",
        morning: "r\xE1no",
        afternoon: "odpoledne",
        evening: "ve\u010Der",
        night: "noc"
    },
    abbreviated: {
        am: "dop.",
        pm: "odp.",
        midnight: "p\u016Flnoc",
        noon: "poledne",
        morning: "r\xE1no",
        afternoon: "odpoledne",
        evening: "ve\u010Der",
        night: "noc"
    },
    wide: {
        am: "dopoledne",
        pm: "odpoledne",
        midnight: "p\u016Flnoc",
        noon: "poledne",
        morning: "r\xE1no",
        afternoon: "odpoledne",
        evening: "ve\u010Der",
        night: "noc"
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
// node_modules/date-fns/esm/locale/cs/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)\.?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
    abbreviated: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
    wide: /^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i
};
var parseEraPatterns = {
    any: [/^p[řr]/i, /^(po|n)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]\. [čc]tvrtlet[íi]/i,
    wide: /^[1234]\. [čc]tvrtlet[íi]/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[lúubdkčcszřrlp]/i,
    abbreviated: /^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,
    wide: /^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i
};
var parseMonthPatterns = {
    narrow: [/^l/i, /^[úu]/i, /^b/i, /^d/i, /^k/i, /^[čc]/i, /^[čc]/i, /^s/i, /^z/i, /^[řr]/i, /^l/i, /^p/i],
    any: [/^led/i, /^[úu]n/i, /^b[řr]e/i, /^dub/i, /^kv[ěe]/i, /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i, /^[čc]vc|[čc]erven(ec|ce)/i, /^srp/i, /^z[áa][řr]/i, /^[řr][íi]j/i, /^lis/i, /^pro/i]
};
var matchDayPatterns = {
    narrow: /^[npuúsčps]/i,
    short: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,
    abbreviated: /^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,
    wide: /^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i
};
var parseDayPatterns = {
    narrow: [/^n/i, /^p/i, /^[úu]/i, /^s/i, /^[čc]/i, /^p/i, /^s/i],
    any: [/^ne/i, /^po/i, /^[úu]t/i, /^st/i, /^[čc]t/i, /^p[áa]/i, /^so/i]
};
var matchDayPeriodPatterns = {
    any: /^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^dop/i,
        pm: /^odp/i,
        midnight: /^p[ůu]lnoc/i,
        noon: /^poledne/i,
        morning: /r[áa]no/i,
        afternoon: /odpoledne/i,
        evening: /ve[čc]er/i,
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
// node_modules/date-fns/esm/locale/cs/index.js
var locale = {
    code: "cs",
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
var cs_default = locale;
export { cs_default };
