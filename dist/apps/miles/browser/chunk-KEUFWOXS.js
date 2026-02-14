import { isSameUTCWeek } from "@nf-internal/chunk-WGUJHRU3";
import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/lv/_lib/formatDistance/index.js
function buildLocalizeTokenFn(schema) {
    return function (count, options) {
        if (count === 1) {
            if (options !== null && options !== void 0 && options.addSuffix) {
                return schema.one[0].replace("{{time}}", schema.one[2]);
            }
            else {
                return schema.one[0].replace("{{time}}", schema.one[1]);
            }
        }
        else {
            var rem = count % 10 === 1 && count % 100 !== 11;
            if (options !== null && options !== void 0 && options.addSuffix) {
                return schema.other[0].replace("{{time}}", rem ? schema.other[3] : schema.other[4]).replace("{{count}}", String(count));
            }
            else {
                return schema.other[0].replace("{{time}}", rem ? schema.other[1] : schema.other[2]).replace("{{count}}", String(count));
            }
        }
    };
}
var formatDistanceLocale = {
    lessThanXSeconds: buildLocalizeTokenFn({
        one: ["maz\u0101k par {{time}}", "sekundi", "sekundi"],
        other: ["maz\u0101k nek\u0101 {{count}} {{time}}", "sekunde", "sekundes", "sekundes", "sekund\u0113m"]
    }),
    xSeconds: buildLocalizeTokenFn({
        one: ["1 {{time}}", "sekunde", "sekundes"],
        other: ["{{count}} {{time}}", "sekunde", "sekundes", "sekundes", "sekund\u0113m"]
    }),
    halfAMinute: function halfAMinute(_count, options) {
        if (options !== null && options !== void 0 && options.addSuffix) {
            return "pusmin\u016Btes";
        }
        else {
            return "pusmin\u016Bte";
        }
    },
    lessThanXMinutes: buildLocalizeTokenFn({
        one: ["maz\u0101k par {{time}}", "min\u016Bti", "min\u016Bti"],
        other: ["maz\u0101k nek\u0101 {{count}} {{time}}", "min\u016Bte", "min\u016Btes", "min\u016Btes", "min\u016Bt\u0113m"]
    }),
    xMinutes: buildLocalizeTokenFn({
        one: ["1 {{time}}", "min\u016Bte", "min\u016Btes"],
        other: ["{{count}} {{time}}", "min\u016Bte", "min\u016Btes", "min\u016Btes", "min\u016Bt\u0113m"]
    }),
    aboutXHours: buildLocalizeTokenFn({
        one: ["apm\u0113ram 1 {{time}}", "stunda", "stundas"],
        other: ["apm\u0113ram {{count}} {{time}}", "stunda", "stundas", "stundas", "stund\u0101m"]
    }),
    xHours: buildLocalizeTokenFn({
        one: ["1 {{time}}", "stunda", "stundas"],
        other: ["{{count}} {{time}}", "stunda", "stundas", "stundas", "stund\u0101m"]
    }),
    xDays: buildLocalizeTokenFn({
        one: ["1 {{time}}", "diena", "dienas"],
        other: ["{{count}} {{time}}", "diena", "dienas", "dienas", "dien\u0101m"]
    }),
    aboutXWeeks: buildLocalizeTokenFn({
        one: ["apm\u0113ram 1 {{time}}", "ned\u0113\u013Ca", "ned\u0113\u013Cas"],
        other: ["apm\u0113ram {{count}} {{time}}", "ned\u0113\u013Ca", "ned\u0113\u013Cu", "ned\u0113\u013Cas", "ned\u0113\u013C\u0101m"]
    }),
    xWeeks: buildLocalizeTokenFn({
        one: ["1 {{time}}", "ned\u0113\u013Ca", "ned\u0113\u013Cas"],
        other: ["{{count}} {{time}}",
            // TODO
            "ned\u0113\u013Ca", "ned\u0113\u013Cu", "ned\u0113\u013Cas", "ned\u0113\u013C\u0101m"]
    }),
    aboutXMonths: buildLocalizeTokenFn({
        one: ["apm\u0113ram 1 {{time}}", "m\u0113nesis", "m\u0113ne\u0161a"],
        other: ["apm\u0113ram {{count}} {{time}}", "m\u0113nesis", "m\u0113ne\u0161i", "m\u0113ne\u0161a", "m\u0113ne\u0161iem"]
    }),
    xMonths: buildLocalizeTokenFn({
        one: ["1 {{time}}", "m\u0113nesis", "m\u0113ne\u0161a"],
        other: ["{{count}} {{time}}", "m\u0113nesis", "m\u0113ne\u0161i", "m\u0113ne\u0161a", "m\u0113ne\u0161iem"]
    }),
    aboutXYears: buildLocalizeTokenFn({
        one: ["apm\u0113ram 1 {{time}}", "gads", "gada"],
        other: ["apm\u0113ram {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
    }),
    xYears: buildLocalizeTokenFn({
        one: ["1 {{time}}", "gads", "gada"],
        other: ["{{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
    }),
    overXYears: buildLocalizeTokenFn({
        one: ["ilg\u0101k par 1 {{time}}", "gadu", "gadu"],
        other: ["vair\u0101k nek\u0101 {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
    }),
    almostXYears: buildLocalizeTokenFn({
        one: ["gandr\u012Bz 1 {{time}}", "gads", "gada"],
        other: ["vair\u0101k nek\u0101 {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
    })
};
var formatDistance = function formatDistance2(token, count, options) {
    var result = formatDistanceLocale[token](count, options);
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "p\u0113c " + result;
        }
        else {
            return "pirms " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/lv/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, y. 'gada' d. MMMM",
    long: "y. 'gada' d. MMMM",
    medium: "dd.MM.y.",
    short: "dd.MM.y."
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'plkst.' {{time}}",
    long: "{{date}} 'plkst.' {{time}}",
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
// node_modules/date-fns/esm/locale/lv/_lib/formatRelative/index.js
var weekdays = ["sv\u0113tdien\u0101", "pirmdien\u0101", "otrdien\u0101", "tre\u0161dien\u0101", "ceturtdien\u0101", "piektdien\u0101", "sestdien\u0101"];
var formatRelativeLocale = {
    lastWeek: function lastWeek(date, baseDate, options) {
        if (isSameUTCWeek(date, baseDate, options)) {
            return "eeee 'plkst.' p";
        }
        var weekday = weekdays[date.getUTCDay()];
        return "'Pag\u0101ju\u0161\u0101 " + weekday + " plkst.' p";
    },
    yesterday: "'Vakar plkst.' p",
    today: "'\u0160odien plkst.' p",
    tomorrow: "'R\u012Bt plkst.' p",
    nextWeek: function nextWeek(date, baseDate, options) {
        if (isSameUTCWeek(date, baseDate, options)) {
            return "eeee 'plkst.' p";
        }
        var weekday = weekdays[date.getUTCDay()];
        return "'N\u0101kamaj\u0101 " + weekday + " plkst.' p";
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
// node_modules/date-fns/esm/locale/lv/_lib/localize/index.js
var eraValues = {
    narrow: ["p.m.\u0113", "m.\u0113"],
    abbreviated: ["p. m. \u0113.", "m. \u0113."],
    wide: ["pirms m\u016Bsu \u0113ras", "m\u016Bsu \u0113r\u0101"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."],
    wide: ["pirmais ceturksnis", "otrais ceturksnis", "tre\u0161ais ceturksnis", "ceturtais ceturksnis"]
};
var formattingQuarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."],
    wide: ["pirmaj\u0101 ceturksn\u012B", "otraj\u0101 ceturksn\u012B", "tre\u0161aj\u0101 ceturksn\u012B", "ceturtaj\u0101 ceturksn\u012B"]
};
var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["janv.", "febr.", "marts", "apr.", "maijs", "j\u016Bn.", "j\u016Bl.", "aug.", "sept.", "okt.", "nov.", "dec."],
    wide: ["janv\u0101ris", "febru\u0101ris", "marts", "apr\u012Blis", "maijs", "j\u016Bnijs", "j\u016Blijs", "augusts", "septembris", "oktobris", "novembris", "decembris"]
};
var formattingMonthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["janv.", "febr.", "mart\u0101", "apr.", "maijs", "j\u016Bn.", "j\u016Bl.", "aug.", "sept.", "okt.", "nov.", "dec."],
    wide: ["janv\u0101r\u012B", "febru\u0101r\u012B", "mart\u0101", "apr\u012Bl\u012B", "maij\u0101", "j\u016Bnij\u0101", "j\u016Blij\u0101", "august\u0101", "septembr\u012B", "oktobr\u012B", "novembr\u012B", "decembr\u012B"]
};
var dayValues = {
    narrow: ["S", "P", "O", "T", "C", "P", "S"],
    short: ["Sv", "P", "O", "T", "C", "Pk", "S"],
    abbreviated: ["sv\u0113td.", "pirmd.", "otrd.", "tre\u0161d.", "ceturtd.", "piektd.", "sestd."],
    wide: ["sv\u0113tdiena", "pirmdiena", "otrdiena", "tre\u0161diena", "ceturtdiena", "piektdiena", "sestdiena"]
};
var formattingDayValues = {
    narrow: ["S", "P", "O", "T", "C", "P", "S"],
    short: ["Sv", "P", "O", "T", "C", "Pk", "S"],
    abbreviated: ["sv\u0113td.", "pirmd.", "otrd.", "tre\u0161d.", "ceturtd.", "piektd.", "sestd."],
    wide: ["sv\u0113tdien\u0101", "pirmdien\u0101", "otrdien\u0101", "tre\u0161dien\u0101", "ceturtdien\u0101", "piektdien\u0101", "sestdien\u0101"]
};
var dayPeriodValues = {
    narrow: {
        am: "am",
        pm: "pm",
        midnight: "pusn.",
        noon: "pusd.",
        morning: "r\u012Bts",
        afternoon: "diena",
        evening: "vakars",
        night: "nakts"
    },
    abbreviated: {
        am: "am",
        pm: "pm",
        midnight: "pusn.",
        noon: "pusd.",
        morning: "r\u012Bts",
        afternoon: "p\u0113cpusd.",
        evening: "vakars",
        night: "nakts"
    },
    wide: {
        am: "am",
        pm: "pm",
        midnight: "pusnakts",
        noon: "pusdienlaiks",
        morning: "r\u012Bts",
        afternoon: "p\u0113cpusdiena",
        evening: "vakars",
        night: "nakts"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "am",
        pm: "pm",
        midnight: "pusn.",
        noon: "pusd.",
        morning: "r\u012Bt\u0101",
        afternoon: "dien\u0101",
        evening: "vakar\u0101",
        night: "nakt\u012B"
    },
    abbreviated: {
        am: "am",
        pm: "pm",
        midnight: "pusn.",
        noon: "pusd.",
        morning: "r\u012Bt\u0101",
        afternoon: "p\u0113cpusd.",
        evening: "vakar\u0101",
        night: "nakt\u012B"
    },
    wide: {
        am: "am",
        pm: "pm",
        midnight: "pusnakt\u012B",
        noon: "pusdienlaik\u0101",
        morning: "r\u012Bt\u0101",
        afternoon: "p\u0113cpusdien\u0101",
        evening: "vakar\u0101",
        night: "nakt\u012B"
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
        formattingValues: formattingQuarterValues,
        defaultFormattingWidth: "wide",
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
        defaultWidth: "wide",
        formattingValues: formattingDayValues,
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
// node_modules/date-fns/esm/locale/lv/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(p\.m\.ē|m\.ē)/i,
    abbreviated: /^(p\. m\. ē\.|m\. ē\.)/i,
    wide: /^(pirms mūsu ēras|mūsu ērā)/i
};
var parseEraPatterns = {
    any: [/^p/i, /^m/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234](\. cet\.)/i,
    wide: /^(pirma(is|jā)|otra(is|jā)|treša(is|jā)|ceturta(is|jā)) ceturksn(is|ī)/i
};
var parseQuarterPatterns = {
    narrow: [/^1/i, /^2/i, /^3/i, /^4/i],
    abbreviated: [/^1/i, /^2/i, /^3/i, /^4/i],
    wide: [/^p/i, /^o/i, /^t/i, /^c/i]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(janv\.|febr\.|marts|apr\.|maijs|jūn\.|jūl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,
    wide: /^(janvār(is|ī)|februār(is|ī)|mart[sā]|aprīl(is|ī)|maij[sā]|jūnij[sā]|jūlij[sā]|august[sā]|septembr(is|ī)|oktobr(is|ī)|novembr(is|ī)|decembr(is|ī))/i
};
var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^jūn/i, /^jūl/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[spotc]/i,
    short: /^(sv|pi|o|t|c|pk|s)/i,
    abbreviated: /^(svētd\.|pirmd\.|otrd.\|trešd\.|ceturtd\.|piektd\.|sestd\.)/i,
    wide: /^(svētdien(a|ā)|pirmdien(a|ā)|otrdien(a|ā)|trešdien(a|ā)|ceturtdien(a|ā)|piektdien(a|ā)|sestdien(a|ā))/i
};
var parseDayPatterns = {
    narrow: [/^s/i, /^p/i, /^o/i, /^t/i, /^c/i, /^p/i, /^s/i],
    any: [/^sv/i, /^pi/i, /^o/i, /^t/i, /^c/i, /^p/i, /^se/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|dien(a|ā)|vakar(s|ā)|nakt(s|ī))/,
    abbreviated: /^(am|pm|pusn\.|pusd\.|rīt(s|ā)|pēcpusd\.|vakar(s|ā)|nakt(s|ī))/,
    wide: /^(am|pm|pusnakt(s|ī)|pusdienlaik(s|ā)|rīt(s|ā)|pēcpusdien(a|ā)|vakar(s|ā)|nakt(s|ī))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^am/i,
        pm: /^pm/i,
        midnight: /^pusn/i,
        noon: /^pusd/i,
        morning: /^r/i,
        afternoon: /^(d|pēc)/i,
        evening: /^v/i,
        night: /^n/i
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
        defaultParseWidth: "wide",
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
// node_modules/date-fns/esm/locale/lv/index.js
var locale = {
    code: "lv",
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
var lv_default = locale;
export { lv_default };
