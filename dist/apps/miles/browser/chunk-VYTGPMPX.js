import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/uz/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "sekunddan kam",
        other: "{{count}} sekunddan kam"
    },
    xSeconds: {
        one: "1 sekund",
        other: "{{count}} sekund"
    },
    halfAMinute: "yarim minut",
    lessThanXMinutes: {
        one: "bir minutdan kam",
        other: "{{count}} minutdan kam"
    },
    xMinutes: {
        one: "1 minut",
        other: "{{count}} minut"
    },
    aboutXHours: {
        one: "tahminan 1 soat",
        other: "tahminan {{count}} soat"
    },
    xHours: {
        one: "1 soat",
        other: "{{count}} soat"
    },
    xDays: {
        one: "1 kun",
        other: "{{count}} kun"
    },
    aboutXWeeks: {
        one: "tahminan 1 hafta",
        other: "tahminan {{count}} hafta"
    },
    xWeeks: {
        one: "1 hafta",
        other: "{{count}} hafta"
    },
    aboutXMonths: {
        one: "tahminan 1 oy",
        other: "tahminan {{count}} oy"
    },
    xMonths: {
        one: "1 oy",
        other: "{{count}} oy"
    },
    aboutXYears: {
        one: "tahminan 1 yil",
        other: "tahminan {{count}} yil"
    },
    xYears: {
        one: "1 yil",
        other: "{{count}} yil"
    },
    overXYears: {
        one: "1 yildan ko'p",
        other: "{{count}} yildan ko'p"
    },
    almostXYears: {
        one: "deyarli 1 yil",
        other: "deyarli {{count}} yil"
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
            return result + " dan keyin";
        }
        else {
            return result + " oldin";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/uz/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, do MMMM, y",
    long: "do MMMM, y",
    medium: "d MMM, y",
    short: "dd/MM/yyyy"
};
var timeFormats = {
    full: "h:mm:ss zzzz",
    long: "h:mm:ss z",
    medium: "h:mm:ss",
    short: "h:mm"
};
var dateTimeFormats = {
    any: "{{date}}, {{time}}"
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
        defaultWidth: "any"
    })
};
var formatLong_default = formatLong;
// node_modules/date-fns/esm/locale/uz/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'oldingi' eeee p 'da'",
    yesterday: "'kecha' p 'da'",
    today: "'bugun' p 'da'",
    tomorrow: "'ertaga' p 'da'",
    nextWeek: "eeee p 'da'",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/uz/_lib/localize/index.js
var eraValues = {
    narrow: ["M.A", "M."],
    abbreviated: ["M.A", "M."],
    wide: ["Miloddan Avvalgi", "Milodiy"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["CH.1", "CH.2", "CH.3", "CH.4"],
    wide: ["1-chi chorak", "2-chi chorak", "3-chi chorak", "4-chi chorak"]
};
var monthValues = {
    narrow: ["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
    abbreviated: ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"],
    wide: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
};
var dayValues = {
    narrow: ["Y", "D", "S", "CH", "P", "J", "SH"],
    short: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
    abbreviated: ["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"],
    wide: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "y.t",
        noon: "p.",
        morning: "ertalab",
        afternoon: "tushdan keyin",
        evening: "kechqurun",
        night: "tun"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "yarim tun",
        noon: "peshin",
        morning: "ertalab",
        afternoon: "tushdan keyin",
        evening: "kechqurun",
        night: "tun"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "yarim tun",
        noon: "peshin",
        morning: "ertalab",
        afternoon: "tushdan keyin",
        evening: "kechqurun",
        night: "tun"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "y.t",
        noon: "p.",
        morning: "ertalab",
        afternoon: "tushdan keyin",
        evening: "kechqurun",
        night: "tun"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "yarim tun",
        noon: "peshin",
        morning: "ertalab",
        afternoon: "tushdan keyin",
        evening: "kechqurun",
        night: "tun"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "yarim tun",
        noon: "peshin",
        morning: "ertalab",
        afternoon: "tushdan keyin",
        evening: "kechqurun",
        night: "tun"
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
// node_modules/date-fns/esm/locale/uz/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(chi)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(m\.a|m\.)/i,
    abbreviated: /^(m\.a\.?\s?m\.?)/i,
    wide: /^(miloddan avval|miloddan keyin)/i
};
var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](chi)? chorak/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[yfmasond]/i,
    abbreviated: /^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i,
    wide: /^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i
};
var parseMonthPatterns = {
    narrow: [/^y/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ya/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^iyun/i, /^iyul/i, /^av/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[ydschj]/i,
    short: /^(ya|du|se|cho|pa|ju|sha)/i,
    abbreviated: /^(yak|dush|sesh|chor|pay|jum|shan)/i,
    wide: /^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i
};
var parseDayPatterns = {
    narrow: [/^y/i, /^d/i, /^s/i, /^ch/i, /^p/i, /^j/i, /^sh/i],
    any: [/^ya/i, /^d/i, /^se/i, /^ch/i, /^p/i, /^j/i, /^sh/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i,
    any: /^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^y\.t/i,
        noon: /^pe/i,
        morning: /ertalab/i,
        afternoon: /tushdan keyin/i,
        evening: /kechqurun/i,
        night: /tun/i
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
// node_modules/date-fns/esm/locale/uz/index.js
var locale = {
    code: "uz",
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
var uz_default = locale;
export { uz_default };
