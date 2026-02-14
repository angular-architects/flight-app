import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/hy/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u0561\u057E\u0565\u056C\u056B \u0584\u056B\u0579 \u0584\u0561\u0576 1 \u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576",
        other: "\u0561\u057E\u0565\u056C\u056B \u0584\u056B\u0579 \u0584\u0561\u0576 {{count}} \u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576"
    },
    xSeconds: {
        one: "1 \u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576",
        other: "{{count}} \u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576"
    },
    halfAMinute: "\u056F\u0565\u057D \u0580\u0578\u057A\u0565",
    lessThanXMinutes: {
        one: "\u0561\u057E\u0565\u056C\u056B \u0584\u056B\u0579 \u0584\u0561\u0576 1 \u0580\u0578\u057A\u0565",
        other: "\u0561\u057E\u0565\u056C\u056B \u0584\u056B\u0579 \u0584\u0561\u0576 {{count}} \u0580\u0578\u057A\u0565"
    },
    xMinutes: {
        one: "1 \u0580\u0578\u057A\u0565",
        other: "{{count}} \u0580\u0578\u057A\u0565"
    },
    aboutXHours: {
        one: "\u0574\u0578\u057F 1 \u056A\u0561\u0574",
        other: "\u0574\u0578\u057F {{count}} \u056A\u0561\u0574"
    },
    xHours: {
        one: "1 \u056A\u0561\u0574",
        other: "{{count}} \u056A\u0561\u0574"
    },
    xDays: {
        one: "1 \u0585\u0580",
        other: "{{count}} \u0585\u0580"
    },
    aboutXWeeks: {
        one: "\u0574\u0578\u057F 1 \u0577\u0561\u0562\u0561\u0569",
        other: "\u0574\u0578\u057F {{count}} \u0577\u0561\u0562\u0561\u0569"
    },
    xWeeks: {
        one: "1 \u0577\u0561\u0562\u0561\u0569",
        other: "{{count}} \u0577\u0561\u0562\u0561\u0569"
    },
    aboutXMonths: {
        one: "\u0574\u0578\u057F 1 \u0561\u0574\u056B\u057D",
        other: "\u0574\u0578\u057F {{count}} \u0561\u0574\u056B\u057D"
    },
    xMonths: {
        one: "1 \u0561\u0574\u056B\u057D",
        other: "{{count}} \u0561\u0574\u056B\u057D"
    },
    aboutXYears: {
        one: "\u0574\u0578\u057F 1 \u057F\u0561\u0580\u056B",
        other: "\u0574\u0578\u057F {{count}} \u057F\u0561\u0580\u056B"
    },
    xYears: {
        one: "1 \u057F\u0561\u0580\u056B",
        other: "{{count}} \u057F\u0561\u0580\u056B"
    },
    overXYears: {
        one: "\u0561\u057E\u0565\u056C\u056B \u0584\u0561\u0576 1 \u057F\u0561\u0580\u056B",
        other: "\u0561\u057E\u0565\u056C\u056B \u0584\u0561\u0576 {{count}} \u057F\u0561\u0580\u056B"
    },
    almostXYears: {
        one: "\u0570\u0561\u0574\u0561\u0580\u0575\u0561 1 \u057F\u0561\u0580\u056B",
        other: "\u0570\u0561\u0574\u0561\u0580\u0575\u0561 {{count}} \u057F\u0561\u0580\u056B"
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
            return result + " \u0570\u0565\u057F\u0578";
        }
        else {
            return result + " \u0561\u057C\u0561\u057B";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/hy/_lib/formatLong/index.js
var dateFormats = {
    full: "d MMMM, y, EEEE",
    long: "d MMMM, y",
    medium: "d MMM, y",
    short: "dd.MM.yyyy"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} '\u056A\u2024'{{time}}",
    long: "{{date}} '\u056A\u2024'{{time}}",
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
// node_modules/date-fns/esm/locale/hy/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\u0576\u0561\u056D\u0578\u0580\u0564' eeee p'\u058A\u056B\u0576'",
    yesterday: "'\u0565\u0580\u0565\u056F' p'\u058A\u056B\u0576'",
    today: "'\u0561\u0575\u057D\u0585\u0580' p'\u058A\u056B\u0576'",
    tomorrow: "'\u057E\u0561\u0572\u0568' p'\u058A\u056B\u0576'",
    nextWeek: "'\u0570\u0561\u057B\u0578\u0580\u0564' eeee p'\u058A\u056B\u0576'",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/hy/_lib/localize/index.js
var eraValues = {
    narrow: ["\u0554", "\u0544"],
    abbreviated: ["\u0554\u0531", "\u0544\u0539"],
    wide: ["\u0554\u0580\u056B\u057D\u057F\u0578\u057D\u056B\u0581 \u0561\u057C\u0561\u057B", "\u0544\u0565\u0580 \u0569\u057E\u0561\u0580\u056F\u0578\u0582\u0569\u0575\u0561\u0576"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["\u05541", "\u05542", "\u05543", "\u05544"],
    wide: ["1\u058A\u056B\u0576 \u0584\u0561\u057C\u0578\u0580\u0564", "2\u058A\u0580\u0564 \u0584\u0561\u057C\u0578\u0580\u0564", "3\u058A\u0580\u0564 \u0584\u0561\u057C\u0578\u0580\u0564", "4\u058A\u0580\u0564 \u0584\u0561\u057C\u0578\u0580\u0564"]
};
var monthValues = {
    narrow: ["\u0540", "\u0553", "\u0544", "\u0531", "\u0544", "\u0540", "\u0540", "\u0555", "\u054D", "\u0540", "\u0546", "\u0534"],
    abbreviated: ["\u0570\u0578\u0582\u0576", "\u0583\u0565\u057F", "\u0574\u0561\u0580", "\u0561\u057A\u0580", "\u0574\u0561\u0575", "\u0570\u0578\u0582\u0576", "\u0570\u0578\u0582\u056C", "\u0585\u0563\u057D", "\u057D\u0565\u057A", "\u0570\u0578\u056F", "\u0576\u0578\u0575", "\u0564\u0565\u056F"],
    wide: ["\u0570\u0578\u0582\u0576\u057E\u0561\u0580", "\u0583\u0565\u057F\u0580\u057E\u0561\u0580", "\u0574\u0561\u0580\u057F", "\u0561\u057A\u0580\u056B\u056C", "\u0574\u0561\u0575\u056B\u057D", "\u0570\u0578\u0582\u0576\u056B\u057D", "\u0570\u0578\u0582\u056C\u056B\u057D", "\u0585\u0563\u0578\u057D\u057F\u0578\u057D", "\u057D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580", "\u0570\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580", "\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580", "\u0564\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580"]
};
var dayValues = {
    narrow: ["\u053F", "\u0535", "\u0535", "\u0549", "\u0540", "\u0548", "\u0547"],
    short: ["\u056F\u0580", "\u0565\u0580", "\u0565\u0584", "\u0579\u0584", "\u0570\u0563", "\u0578\u0582\u0580", "\u0577\u0562"],
    abbreviated: ["\u056F\u056B\u0580", "\u0565\u0580\u056F", "\u0565\u0580\u0584", "\u0579\u0578\u0580", "\u0570\u0576\u0563", "\u0578\u0582\u0580\u0562", "\u0577\u0561\u0562"],
    wide: ["\u056F\u056B\u0580\u0561\u056F\u056B", "\u0565\u0580\u056F\u0578\u0582\u0577\u0561\u0562\u0569\u056B", "\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B", "\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B", "\u0570\u056B\u0576\u0563\u0577\u0561\u0562\u0569\u056B", "\u0578\u0582\u0580\u0562\u0561\u0569", "\u0577\u0561\u0562\u0561\u0569"]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "\u056F\u0565\u057D\u0563\u0577",
        noon: "\u056F\u0565\u057D\u0585\u0580",
        morning: "\u0561\u057C\u0561\u057E\u0578\u057F",
        afternoon: "\u0581\u0565\u0580\u0565\u056F",
        evening: "\u0565\u0580\u0565\u056F\u0578",
        night: "\u0563\u056B\u0577\u0565\u0580"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "\u056F\u0565\u057D\u0563\u056B\u0577\u0565\u0580",
        noon: "\u056F\u0565\u057D\u0585\u0580",
        morning: "\u0561\u057C\u0561\u057E\u0578\u057F",
        afternoon: "\u0581\u0565\u0580\u0565\u056F",
        evening: "\u0565\u0580\u0565\u056F\u0578",
        night: "\u0563\u056B\u0577\u0565\u0580"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "\u056F\u0565\u057D\u0563\u056B\u0577\u0565\u0580",
        noon: "\u056F\u0565\u057D\u0585\u0580",
        morning: "\u0561\u057C\u0561\u057E\u0578\u057F",
        afternoon: "\u0581\u0565\u0580\u0565\u056F",
        evening: "\u0565\u0580\u0565\u056F\u0578",
        night: "\u0563\u056B\u0577\u0565\u0580"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "\u056F\u0565\u057D\u0563\u0577",
        noon: "\u056F\u0565\u057D\u0585\u0580",
        morning: "\u0561\u057C\u0561\u057E\u0578\u057F\u0568",
        afternoon: "\u0581\u0565\u0580\u0565\u056F\u0568",
        evening: "\u0565\u0580\u0565\u056F\u0578\u0575\u0561\u0576",
        night: "\u0563\u056B\u0577\u0565\u0580\u0568"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "\u056F\u0565\u057D\u0563\u056B\u0577\u0565\u0580\u056B\u0576",
        noon: "\u056F\u0565\u057D\u0585\u0580\u056B\u0576",
        morning: "\u0561\u057C\u0561\u057E\u0578\u057F\u0568",
        afternoon: "\u0581\u0565\u0580\u0565\u056F\u0568",
        evening: "\u0565\u0580\u0565\u056F\u0578\u0575\u0561\u0576",
        night: "\u0563\u056B\u0577\u0565\u0580\u0568"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "\u056F\u0565\u057D\u0563\u056B\u0577\u0565\u0580\u056B\u0576",
        noon: "\u056F\u0565\u057D\u0585\u0580\u056B\u0576",
        morning: "\u0561\u057C\u0561\u057E\u0578\u057F\u0568",
        afternoon: "\u0581\u0565\u0580\u0565\u056F\u0568",
        evening: "\u0565\u0580\u0565\u056F\u0578\u0575\u0561\u0576",
        night: "\u0563\u056B\u0577\u0565\u0580\u0568"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 < 10) {
        if (rem100 % 10 === 1) {
            return number + "\u058A\u056B\u0576";
        }
    }
    return number + "\u058A\u0580\u0564";
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
// node_modules/date-fns/esm/locale/hy/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)((-|֊)?(ին|րդ))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(Ք|Մ)/i,
    abbreviated: /^(Ք\.?\s?Ա\.?|Մ\.?\s?Թ\.?\s?Ա\.?|Մ\.?\s?Թ\.?|Ք\.?\s?Հ\.?)/i,
    wide: /^(քրիստոսից առաջ|մեր թվարկությունից առաջ|մեր թվարկության|քրիստոսից հետո)/i
};
var parseEraPatterns = {
    any: [/^ք/i, /^մ/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^ք[1234]/i,
    wide: /^[1234]((-|֊)?(ին|րդ)) քառորդ/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[հփմաօսնդ]/i,
    abbreviated: /^(հուն|փետ|մար|ապր|մայ|հուն|հուլ|օգս|սեպ|հոկ|նոյ|դեկ)/i,
    wide: /^(հունվար|փետրվար|մարտ|ապրիլ|մայիս|հունիս|հուլիս|օգոստոս|սեպտեմբեր|հոկտեմբեր|նոյեմբեր|դեկտեմբեր)/i
};
var parseMonthPatterns = {
    narrow: [/^հ/i, /^փ/i, /^մ/i, /^ա/i, /^մ/i, /^հ/i, /^հ/i, /^օ/i, /^ս/i, /^հ/i, /^ն/i, /^դ/i],
    any: [/^հու/i, /^փ/i, /^մար/i, /^ա/i, /^մայ/i, /^հուն/i, /^հուլ/i, /^օ/i, /^ս/i, /^հոկ/i, /^ն/i, /^դ/i]
};
var matchDayPatterns = {
    narrow: /^[եչհոշկ]/i,
    short: /^(կր|եր|եք|չք|հգ|ուր|շբ)/i,
    abbreviated: /^(կիր|երկ|երք|չոր|հնգ|ուրբ|շաբ)/i,
    wide: /^(կիրակի|երկուշաբթի|երեքշաբթի|չորեքշաբթի|հինգշաբթի|ուրբաթ|շաբաթ)/i
};
var parseDayPatterns = {
    narrow: [/^կ/i, /^ե/i, /^ե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i],
    short: [/^կ/i, /^եր/i, /^եք/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i],
    abbreviated: [/^կ/i, /^երկ/i, /^երք/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i],
    wide: [/^կ/i, /^երկ/i, /^երե/i, /^չ/i, /^հ/i, /^(ո|Ո)/, /^շ/i]
};
var matchDayPeriodPatterns = {
    narrow: /^([ap]|կեսգշ|կեսօր|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i,
    any: /^([ap]\.?\s?m\.?|կեսգիշեր(ին)?|կեսօր(ին)?|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /կեսգիշեր/i,
        noon: /կեսօր/i,
        morning: /առավոտ/i,
        afternoon: /ցերեկ/i,
        evening: /երեկո/i,
        night: /գիշեր/i
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
        defaultParseWidth: "wide"
    }),
    dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
var match_default = match;
// node_modules/date-fns/esm/locale/hy/index.js
var locale = {
    code: "hy",
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
var hy_default = locale;
export { hy_default };
