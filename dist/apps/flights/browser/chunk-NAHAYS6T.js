import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/th/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 1 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
        other: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35"
    },
    xSeconds: {
        one: "1 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
        other: "{{count}} \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35"
    },
    halfAMinute: "\u0E04\u0E23\u0E36\u0E48\u0E07\u0E19\u0E32\u0E17\u0E35",
    lessThanXMinutes: {
        one: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 1 \u0E19\u0E32\u0E17\u0E35",
        other: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E19\u0E32\u0E17\u0E35"
    },
    xMinutes: {
        one: "1 \u0E19\u0E32\u0E17\u0E35",
        other: "{{count}} \u0E19\u0E32\u0E17\u0E35"
    },
    aboutXHours: {
        one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
        other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"
    },
    xHours: {
        one: "1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",
        other: "{{count}} \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"
    },
    xDays: {
        one: "1 \u0E27\u0E31\u0E19",
        other: "{{count}} \u0E27\u0E31\u0E19"
    },
    aboutXWeeks: {
        one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
        other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C"
    },
    xWeeks: {
        one: "1 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C",
        other: "{{count}} \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C"
    },
    aboutXMonths: {
        one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E40\u0E14\u0E37\u0E2D\u0E19",
        other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E40\u0E14\u0E37\u0E2D\u0E19"
    },
    xMonths: {
        one: "1 \u0E40\u0E14\u0E37\u0E2D\u0E19",
        other: "{{count}} \u0E40\u0E14\u0E37\u0E2D\u0E19"
    },
    aboutXYears: {
        one: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 1 \u0E1B\u0E35",
        other: "\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 {{count}} \u0E1B\u0E35"
    },
    xYears: {
        one: "1 \u0E1B\u0E35",
        other: "{{count}} \u0E1B\u0E35"
    },
    overXYears: {
        one: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 1 \u0E1B\u0E35",
        other: "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E1B\u0E35"
    },
    almostXYears: {
        one: "\u0E40\u0E01\u0E37\u0E2D\u0E1A 1 \u0E1B\u0E35",
        other: "\u0E40\u0E01\u0E37\u0E2D\u0E1A {{count}} \u0E1B\u0E35"
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
            if (token === "halfAMinute") {
                return "\u0E43\u0E19" + result;
            }
            else {
                return "\u0E43\u0E19 " + result;
            }
        }
        else {
            return result + "\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E21\u0E32";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/th/_lib/formatLong/index.js
var dateFormats = {
    full: "\u0E27\u0E31\u0E19EEEE\u0E17\u0E35\u0E48 do MMMM y",
    long: "do MMMM y",
    medium: "d MMM y",
    short: "dd/MM/yyyy"
};
var timeFormats = {
    full: "H:mm:ss \u0E19. zzzz",
    long: "H:mm:ss \u0E19. z",
    medium: "H:mm:ss \u0E19.",
    short: "H:mm \u0E19."
};
var dateTimeFormats = {
    full: "{{date}} '\u0E40\u0E27\u0E25\u0E32' {{time}}",
    long: "{{date}} '\u0E40\u0E27\u0E25\u0E32' {{time}}",
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
        defaultWidth: "medium"
    }),
    dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
var formatLong_default = formatLong;
// node_modules/date-fns/esm/locale/th/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "eeee'\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27\u0E40\u0E27\u0E25\u0E32' p",
    yesterday: "'\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19\u0E19\u0E35\u0E49\u0E40\u0E27\u0E25\u0E32' p",
    today: "'\u0E27\u0E31\u0E19\u0E19\u0E35\u0E49\u0E40\u0E27\u0E25\u0E32' p",
    tomorrow: "'\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49\u0E40\u0E27\u0E25\u0E32' p",
    nextWeek: "eeee '\u0E40\u0E27\u0E25\u0E32' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/th/_lib/localize/index.js
var eraValues = {
    narrow: ["B", "\u0E04\u0E28"],
    abbreviated: ["BC", "\u0E04.\u0E28."],
    wide: ["\u0E1B\u0E35\u0E01\u0E48\u0E2D\u0E19\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E01\u0E32\u0E25", "\u0E04\u0E23\u0E34\u0E2A\u0E15\u0E4C\u0E28\u0E31\u0E01\u0E23\u0E32\u0E0A"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E41\u0E23\u0E01", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21", "\u0E44\u0E15\u0E23\u0E21\u0E32\u0E2A\u0E17\u0E35\u0E48\u0E2A\u0E35\u0E48"]
};
var dayValues = {
    narrow: ["\u0E2D\u0E32.", "\u0E08.", "\u0E2D.", "\u0E1E.", "\u0E1E\u0E24.", "\u0E28.", "\u0E2A."],
    short: ["\u0E2D\u0E32.", "\u0E08.", "\u0E2D.", "\u0E1E.", "\u0E1E\u0E24.", "\u0E28.", "\u0E2A."],
    abbreviated: ["\u0E2D\u0E32.", "\u0E08.", "\u0E2D.", "\u0E1E.", "\u0E1E\u0E24.", "\u0E28.", "\u0E2A."],
    wide: ["\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C", "\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C", "\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23", "\u0E1E\u0E38\u0E18", "\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35", "\u0E28\u0E38\u0E01\u0E23\u0E4C", "\u0E40\u0E2A\u0E32\u0E23\u0E4C"]
};
var monthValues = {
    narrow: ["\u0E21.\u0E04.", "\u0E01.\u0E1E.", "\u0E21\u0E35.\u0E04.", "\u0E40\u0E21.\u0E22.", "\u0E1E.\u0E04.", "\u0E21\u0E34.\u0E22.", "\u0E01.\u0E04.", "\u0E2A.\u0E04.", "\u0E01.\u0E22.", "\u0E15.\u0E04.", "\u0E1E.\u0E22.", "\u0E18.\u0E04."],
    abbreviated: ["\u0E21.\u0E04.", "\u0E01.\u0E1E.", "\u0E21\u0E35.\u0E04.", "\u0E40\u0E21.\u0E22.", "\u0E1E.\u0E04.", "\u0E21\u0E34.\u0E22.", "\u0E01.\u0E04.", "\u0E2A.\u0E04.", "\u0E01.\u0E22.", "\u0E15.\u0E04.", "\u0E1E.\u0E22.", "\u0E18.\u0E04."],
    wide: ["\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21", "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C", "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21", "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19", "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21", "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19", "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21", "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21", "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19", "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21", "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19", "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
        noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        morning: "\u0E40\u0E0A\u0E49\u0E32",
        afternoon: "\u0E1A\u0E48\u0E32\u0E22",
        evening: "\u0E40\u0E22\u0E47\u0E19",
        night: "\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19"
    },
    abbreviated: {
        am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
        noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        morning: "\u0E40\u0E0A\u0E49\u0E32",
        afternoon: "\u0E1A\u0E48\u0E32\u0E22",
        evening: "\u0E40\u0E22\u0E47\u0E19",
        night: "\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19"
    },
    wide: {
        am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
        noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        morning: "\u0E40\u0E0A\u0E49\u0E32",
        afternoon: "\u0E1A\u0E48\u0E32\u0E22",
        evening: "\u0E40\u0E22\u0E47\u0E19",
        night: "\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
        noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        morning: "\u0E15\u0E2D\u0E19\u0E40\u0E0A\u0E49\u0E32",
        afternoon: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19",
        evening: "\u0E15\u0E2D\u0E19\u0E40\u0E22\u0E47\u0E19",
        night: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19"
    },
    abbreviated: {
        am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
        noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        morning: "\u0E15\u0E2D\u0E19\u0E40\u0E0A\u0E49\u0E32",
        afternoon: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19",
        evening: "\u0E15\u0E2D\u0E19\u0E40\u0E22\u0E47\u0E19",
        night: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19"
    },
    wide: {
        am: "\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        pm: "\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        midnight: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07\u0E04\u0E37\u0E19",
        noon: "\u0E40\u0E17\u0E35\u0E48\u0E22\u0E07",
        morning: "\u0E15\u0E2D\u0E19\u0E40\u0E0A\u0E49\u0E32",
        afternoon: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19",
        evening: "\u0E15\u0E2D\u0E19\u0E40\u0E22\u0E47\u0E19",
        night: "\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19"
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
// node_modules/date-fns/esm/locale/th/_lib/match/index.js
var matchOrdinalNumberPattern = /^\d+/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^([bB]|[aA]|คศ)/i,
    abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,
    wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i
};
var parseEraPatterns = {
    any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^ไตรมาส(ที่)? ?[1234]/i
};
var parseQuarterPatterns = {
    any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i]
};
var matchMonthPatterns = {
    narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,
    abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,
    wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i
};
var parseMonthPatterns = {
    wide: [/^มก/i, /^กุม/i, /^มี/i, /^เม/i, /^พฤษ/i, /^มิ/i, /^กรก/i, /^ส/i, /^กัน/i, /^ต/i, /^พฤศ/i, /^ธ/i],
    any: [/^ม\.?ค\.?/i, /^ก\.?พ\.?/i, /^มี\.?ค\.?/i, /^เม\.?ย\.?/i, /^พ\.?ค\.?/i, /^มิ\.?ย\.?/i, /^ก\.?ค\.?/i, /^ส\.?ค\.?/i, /^ก\.?ย\.?/i, /^ต\.?ค\.?/i, /^พ\.?ย\.?/i, /^ธ\.?ค\.?/i]
};
var matchDayPatterns = {
    narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
    short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
    abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
    wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i
};
var parseDayPatterns = {
    wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i],
    any: [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i]
};
var matchDayPeriodPatterns = {
    any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^ก่อนเที่ยง/i,
        pm: /^หลังเที่ยง/i,
        midnight: /^เที่ยงคืน/i,
        noon: /^เที่ยง/i,
        morning: /เช้า/i,
        afternoon: /บ่าย/i,
        evening: /เย็น/i,
        night: /กลางคืน/i
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
// node_modules/date-fns/esm/locale/th/index.js
var locale = {
    code: "th",
    formatDistance: formatDistance_default,
    formatLong: formatLong_default,
    formatRelative: formatRelative_default,
    localize: localize_default,
    match: match_default,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
var th_default = locale;
export { th_default };
