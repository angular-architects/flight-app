import { formatRelative_default, localize_default, match_default } from "@nf-internal/chunk-MDR3XCW7";
import { buildFormatLongFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/en-CA/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "a second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "a minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about an hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "an hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "a day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about a week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "a week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about a month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "a month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about a year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "a year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over a year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost a year",
        other: "almost {{count}} years"
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
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        }
        else {
            return result + " ago";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/en-CA/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, MMMM do, yyyy",
    long: "MMMM do, yyyy",
    medium: "MMM d, yyyy",
    short: "yyyy-MM-dd"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
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
// node_modules/date-fns/esm/locale/en-CA/index.js
var locale = {
    code: "en-CA",
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
var en_CA_default = locale;
export { en_CA_default };
