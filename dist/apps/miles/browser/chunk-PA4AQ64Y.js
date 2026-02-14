import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/el/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC \u03AD\u03BD\u03B1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF",
        other: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {{count}} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1"
    },
    xSeconds: {
        one: "1 \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF",
        other: "{{count}} \u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1"
    },
    halfAMinute: "\u03BC\u03B9\u03C3\u03CC \u03BB\u03B5\u03C0\u03C4\u03CC",
    lessThanXMinutes: {
        one: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC \u03AD\u03BD\u03B1 \u03BB\u03B5\u03C0\u03C4\u03CC",
        other: "\u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {{count}} \u03BB\u03B5\u03C0\u03C4\u03AC"
    },
    xMinutes: {
        one: "1 \u03BB\u03B5\u03C0\u03C4\u03CC",
        other: "{{count}} \u03BB\u03B5\u03C0\u03C4\u03AC"
    },
    aboutXHours: {
        one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03CE\u03C1\u03B1",
        other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03CE\u03C1\u03B5\u03C2"
    },
    xHours: {
        one: "1 \u03CE\u03C1\u03B1",
        other: "{{count}} \u03CE\u03C1\u03B5\u03C2"
    },
    xDays: {
        one: "1 \u03B7\u03BC\u03AD\u03C1\u03B1",
        other: "{{count}} \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2"
    },
    aboutXWeeks: {
        one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1",
        other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2"
    },
    xWeeks: {
        one: "1 \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B1",
        other: "{{count}} \u03B5\u03B2\u03B4\u03BF\u03BC\u03AC\u03B4\u03B5\u03C2"
    },
    aboutXMonths: {
        one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03BC\u03AE\u03BD\u03B1\u03C2",
        other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03BC\u03AE\u03BD\u03B5\u03C2"
    },
    xMonths: {
        one: "1 \u03BC\u03AE\u03BD\u03B1\u03C2",
        other: "{{count}} \u03BC\u03AE\u03BD\u03B5\u03C2"
    },
    aboutXYears: {
        one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03C7\u03C1\u03CC\u03BD\u03BF",
        other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1"
    },
    xYears: {
        one: "1 \u03C7\u03C1\u03CC\u03BD\u03BF",
        other: "{{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1"
    },
    overXYears: {
        one: "\u03C0\u03AC\u03BD\u03C9 \u03B1\u03C0\u03CC 1 \u03C7\u03C1\u03CC\u03BD\u03BF",
        other: "\u03C0\u03AC\u03BD\u03C9 \u03B1\u03C0\u03CC {{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1"
    },
    almostXYears: {
        one: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 1 \u03C7\u03C1\u03CC\u03BD\u03BF",
        other: "\u03C0\u03B5\u03C1\u03AF\u03C0\u03BF\u03C5 {{count}} \u03C7\u03C1\u03CC\u03BD\u03B9\u03B1"
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
            return "\u03C3\u03B5 " + result;
        }
        else {
            return result + " \u03C0\u03C1\u03B9\u03BD";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/el/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d MMMM y",
    long: "d MMMM y",
    medium: "d MMM y",
    short: "d/M/yy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} - {{time}}",
    long: "{{date}} - {{time}}",
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
// node_modules/date-fns/esm/locale/el/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: function lastWeek(date) {
        switch (date.getUTCDay()) {
            case 6:
                return "'\u03C4\u03BF \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03BF' eeee '\u03C3\u03C4\u03B9\u03C2' p";
            default:
                return "'\u03C4\u03B7\u03BD \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03B7' eeee '\u03C3\u03C4\u03B9\u03C2' p";
        }
    },
    yesterday: "'\u03C7\u03B8\u03B5\u03C2 \u03C3\u03C4\u03B9\u03C2' p",
    today: "'\u03C3\u03AE\u03BC\u03B5\u03C1\u03B1 \u03C3\u03C4\u03B9\u03C2' p",
    tomorrow: "'\u03B1\u03CD\u03C1\u03B9\u03BF \u03C3\u03C4\u03B9\u03C2' p",
    nextWeek: "eeee '\u03C3\u03C4\u03B9\u03C2' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, date) {
    var format = formatRelativeLocale[token];
    if (typeof format === "function")
        return format(date);
    return format;
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/el/_lib/localize/index.js
var eraValues = {
    narrow: ["\u03C0\u03A7", "\u03BC\u03A7"],
    abbreviated: ["\u03C0.\u03A7.", "\u03BC.\u03A7."],
    wide: ["\u03C0\u03C1\u03BF \u03A7\u03C1\u03B9\u03C3\u03C4\u03BF\u03CD", "\u03BC\u03B5\u03C4\u03AC \u03A7\u03C1\u03B9\u03C3\u03C4\u03CC\u03BD"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["\u03A41", "\u03A42", "\u03A43", "\u03A44"],
    wide: ["1\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF", "2\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF", "3\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF", "4\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF"]
};
var monthValues = {
    narrow: ["\u0399", "\u03A6", "\u039C", "\u0391", "\u039C", "\u0399", "\u0399", "\u0391", "\u03A3", "\u039F", "\u039D", "\u0394"],
    abbreviated: ["\u0399\u03B1\u03BD", "\u03A6\u03B5\u03B2", "\u039C\u03AC\u03C1", "\u0391\u03C0\u03C1", "\u039C\u03AC\u03B9", "\u0399\u03BF\u03CD\u03BD", "\u0399\u03BF\u03CD\u03BB", "\u0391\u03CD\u03B3", "\u03A3\u03B5\u03C0", "\u039F\u03BA\u03C4", "\u039D\u03BF\u03AD", "\u0394\u03B5\u03BA"],
    wide: ["\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2", "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2", "\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2", "\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2", "\u039C\u03AC\u03B9\u03BF\u03C2", "\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2", "\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2", "\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2", "\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2", "\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2", "\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2", "\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"]
};
var formattingMonthValues = {
    narrow: ["\u0399", "\u03A6", "\u039C", "\u0391", "\u039C", "\u0399", "\u0399", "\u0391", "\u03A3", "\u039F", "\u039D", "\u0394"],
    abbreviated: ["\u0399\u03B1\u03BD", "\u03A6\u03B5\u03B2", "\u039C\u03B1\u03C1", "\u0391\u03C0\u03C1", "\u039C\u03B1\u0390", "\u0399\u03BF\u03C5\u03BD", "\u0399\u03BF\u03C5\u03BB", "\u0391\u03C5\u03B3", "\u03A3\u03B5\u03C0", "\u039F\u03BA\u03C4", "\u039D\u03BF\u03B5", "\u0394\u03B5\u03BA"],
    wide: ["\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5", "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5", "\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5", "\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5", "\u039C\u03B1\u0390\u03BF\u03C5", "\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5", "\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5", "\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5", "\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5", "\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5", "\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5", "\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5"]
};
var dayValues = {
    narrow: ["\u039A", "\u0394", "T", "\u03A4", "\u03A0", "\u03A0", "\u03A3"],
    short: ["\u039A\u03C5", "\u0394\u03B5", "\u03A4\u03C1", "\u03A4\u03B5", "\u03A0\u03AD", "\u03A0\u03B1", "\u03A3\u03AC"],
    abbreviated: ["\u039A\u03C5\u03C1", "\u0394\u03B5\u03C5", "\u03A4\u03C1\u03AF", "\u03A4\u03B5\u03C4", "\u03A0\u03AD\u03BC", "\u03A0\u03B1\u03C1", "\u03A3\u03AC\u03B2"],
    wide: ["\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE", "\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1", "\u03A4\u03C1\u03AF\u03C4\u03B7", "\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7", "\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7", "\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE", "\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u03C0\u03BC",
        pm: "\u03BC\u03BC",
        midnight: "\u03BC\u03B5\u03C3\u03AC\u03BD\u03C5\u03C7\u03C4\u03B1",
        noon: "\u03BC\u03B5\u03C3\u03B7\u03BC\u03AD\u03C1\u03B9",
        morning: "\u03C0\u03C1\u03C9\u03AF",
        afternoon: "\u03B1\u03C0\u03CC\u03B3\u03B5\u03C5\u03BC\u03B1",
        evening: "\u03B2\u03C1\u03AC\u03B4\u03C5",
        night: "\u03BD\u03CD\u03C7\u03C4\u03B1"
    },
    abbreviated: {
        am: "\u03C0.\u03BC.",
        pm: "\u03BC.\u03BC.",
        midnight: "\u03BC\u03B5\u03C3\u03AC\u03BD\u03C5\u03C7\u03C4\u03B1",
        noon: "\u03BC\u03B5\u03C3\u03B7\u03BC\u03AD\u03C1\u03B9",
        morning: "\u03C0\u03C1\u03C9\u03AF",
        afternoon: "\u03B1\u03C0\u03CC\u03B3\u03B5\u03C5\u03BC\u03B1",
        evening: "\u03B2\u03C1\u03AC\u03B4\u03C5",
        night: "\u03BD\u03CD\u03C7\u03C4\u03B1"
    },
    wide: {
        am: "\u03C0.\u03BC.",
        pm: "\u03BC.\u03BC.",
        midnight: "\u03BC\u03B5\u03C3\u03AC\u03BD\u03C5\u03C7\u03C4\u03B1",
        noon: "\u03BC\u03B5\u03C3\u03B7\u03BC\u03AD\u03C1\u03B9",
        morning: "\u03C0\u03C1\u03C9\u03AF",
        afternoon: "\u03B1\u03C0\u03CC\u03B3\u03B5\u03C5\u03BC\u03B1",
        evening: "\u03B2\u03C1\u03AC\u03B4\u03C5",
        night: "\u03BD\u03CD\u03C7\u03C4\u03B1"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    var unit = options === null || options === void 0 ? void 0 : options.unit;
    var suffix;
    if (unit === "year" || unit === "month") {
        suffix = "\u03BF\u03C2";
    }
    else if (unit === "week" || unit === "dayOfYear" || unit === "day" || unit === "hour" || unit === "date") {
        suffix = "\u03B7";
    }
    else {
        suffix = "\u03BF";
    }
    return number + suffix;
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
        defaultWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/el/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(ος|η|ο)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(πΧ|μΧ)/i,
    abbreviated: /^(π\.?\s?χ\.?|π\.?\s?κ\.?\s?χ\.?|μ\.?\s?χ\.?|κ\.?\s?χ\.?)/i,
    wide: /^(προ Χριστο(ύ|υ)|πριν απ(ό|ο) την Κοιν(ή|η) Χρονολογ(ί|ι)α|μετ(ά|α) Χριστ(ό|ο)ν|Κοιν(ή|η) Χρονολογ(ί|ι)α)/i
};
var parseEraPatterns = {
    any: [/^π/i, /^(μ|κ)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^τ[1234]/i,
    wide: /^[1234]ο? τρ(ί|ι)μηνο/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[ιφμαμιιασονδ]/i,
    abbreviated: /^(ιαν|φεβ|μ[άα]ρ|απρ|μ[άα][ιΐ]|ιο[ύυ]ν|ιο[ύυ]λ|α[ύυ]γ|σεπ|οκτ|νο[έε]|δεκ)/i,
    wide: /^(μ[άα][ιΐ]|α[ύυ]γο[υύ]στ)(ος|ου)|(ιανου[άα]ρ|φεβρου[άα]ρ|μ[άα]ρτ|απρ[ίι]λ|ιο[ύυ]ν|ιο[ύυ]λ|σεπτ[έε]μβρ|οκτ[ώω]βρ|νο[έε]μβρ|δεκ[έε]μβρ)(ιος|ίου)/i
};
var parseMonthPatterns = {
    narrow: [/^ι/i, /^φ/i, /^μ/i, /^α/i, /^μ/i, /^ι/i, /^ι/i, /^α/i, /^σ/i, /^ο/i, /^ν/i, /^δ/i],
    any: [/^ια/i, /^φ/i, /^μ[άα]ρ/i, /^απ/i, /^μ[άα][ιΐ]/i, /^ιο[ύυ]ν/i, /^ιο[ύυ]λ/i, /^α[ύυ]/i, /^σ/i, /^ο/i, /^ν/i, /^δ/i]
};
var matchDayPatterns = {
    narrow: /^[κδτπσ]/i,
    short: /^(κυ|δε|τρ|τε|π[εέ]|π[αά]|σ[αά])/i,
    abbreviated: /^(κυρ|δευ|τρι|τετ|πεμ|παρ|σαβ)/i,
    wide: /^(κυριακ(ή|η)|δευτ(έ|ε)ρα|τρ(ί|ι)τη|τετ(ά|α)ρτη|π(έ|ε)μπτη|παρασκευ(ή|η)|σ(ά|α)ββατο)/i
};
var parseDayPatterns = {
    narrow: [/^κ/i, /^δ/i, /^τ/i, /^τ/i, /^π/i, /^π/i, /^σ/i],
    any: [/^κ/i, /^δ/i, /^τρ/i, /^τε/i, /^π[εέ]/i, /^π[αά]/i, /^σ/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(πμ|μμ|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i,
    any: /^([πμ]\.?\s?μ\.?|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^πμ|π\.\s?μ\./i,
        pm: /^μμ|μ\.\s?μ\./i,
        midnight: /^μεσάν/i,
        noon: /^μεσημ(έ|ε)/i,
        morning: /πρω(ί|ι)/i,
        afternoon: /απ(ό|ο)γευμα/i,
        evening: /βρ(ά|α)δυ/i,
        night: /ν(ύ|υ)χτα/i
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
// node_modules/date-fns/esm/locale/el/index.js
var locale = {
    code: "el",
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
var el_default = locale;
export { el_default };
