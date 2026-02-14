import { isSameUTCWeek } from "@nf-internal/chunk-WGUJHRU3";
import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
// node_modules/date-fns/esm/locale/be-tarask/_lib/formatDistance/index.js
function declension(scheme, count) {
    if (scheme.one !== void 0 && count === 1) {
        return scheme.one;
    }
    var rem10 = count % 10;
    var rem100 = count % 100;
    if (rem10 === 1 && rem100 !== 11) {
        return scheme.singularNominative.replace("{{count}}", String(count));
    }
    else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {
        return scheme.singularGenitive.replace("{{count}}", String(count));
    }
    else {
        return scheme.pluralGenitive.replace("{{count}}", String(count));
    }
}
function buildLocalizeTokenFn(scheme) {
    return function (count, options) {
        if (options && options.addSuffix) {
            if (options.comparison && options.comparison > 0) {
                if (scheme.future) {
                    return declension(scheme.future, count);
                }
                else {
                    return "\u043F\u0440\u0430\u0437 " + declension(scheme.regular, count);
                }
            }
            else {
                if (scheme.past) {
                    return declension(scheme.past, count);
                }
                else {
                    return declension(scheme.regular, count) + " \u0442\u0430\u043C\u0443";
                }
            }
        }
        else {
            return declension(scheme.regular, count);
        }
    };
}
var halfAMinute = function halfAMinute2(_, options) {
    if (options && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "\u043F\u0440\u0430\u0437 \u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B";
        }
        else {
            return "\u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B \u0442\u0430\u043C\u0443";
        }
    }
    return "\u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B";
};
var formatDistanceLocale = {
    lessThanXSeconds: buildLocalizeTokenFn({
        regular: {
            one: "\u043C\u0435\u043D\u0448 \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularNominative: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            pluralGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        },
        future: {
            one: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularNominative: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            pluralGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        }
    }),
    xSeconds: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        },
        past: {
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u0442\u0430\u043C\u0443",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u0442\u0430\u043C\u0443",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0442\u0430\u043C\u0443"
        },
        future: {
            singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        }
    }),
    halfAMinute,
    lessThanXMinutes: buildLocalizeTokenFn({
        regular: {
            one: "\u043C\u0435\u043D\u0448 \u0437\u0430 \u0445\u0432\u0456\u043B\u0456\u043D\u0443",
            singularNominative: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443",
            singularGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B",
            pluralGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D"
        },
        future: {
            one: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 \u0445\u0432\u0456\u043B\u0456\u043D\u0443",
            singularNominative: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443",
            singularGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B",
            pluralGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D"
        }
    }),
    xMinutes: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0430",
            singularGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B",
            pluralGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D"
        },
        past: {
            singularNominative: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443 \u0442\u0430\u043C\u0443",
            singularGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B \u0442\u0430\u043C\u0443",
            pluralGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D \u0442\u0430\u043C\u0443"
        },
        future: {
            singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443",
            singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B",
            pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D"
        }
    }),
    aboutXHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B",
            singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D",
            pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D"
        },
        future: {
            singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443",
            singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B",
            pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D"
        }
    }),
    xHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0430",
            singularGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B",
            pluralGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D"
        },
        past: {
            singularNominative: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443 \u0442\u0430\u043C\u0443",
            singularGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B \u0442\u0430\u043C\u0443",
            pluralGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D \u0442\u0430\u043C\u0443"
        },
        future: {
            singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443",
            singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B",
            pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D"
        }
    }),
    xDays: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0434\u0437\u0435\u043D\u044C",
            singularGenitive: "{{count}} \u0434\u043D\u0456",
            pluralGenitive: "{{count}} \u0434\u0437\u0451\u043D"
        }
    }),
    aboutXWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
            // TODO
            singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E",
            // TODO
            pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E"
            // TODO
        },
        future: {
            singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446",
            // TODO
            singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u044B",
            // TODO
            pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E"
            // TODO
        }
    }),
    xWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446",
            singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u044B",
            pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E"
        }
    }),
    aboutXMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
            singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E",
            pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E"
        },
        future: {
            singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446",
            singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u044B",
            pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E"
        }
    }),
    xMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446",
            singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u044B",
            pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E"
        }
    }),
    aboutXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u0433\u043E\u0434\u0430",
            singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u043E\u045E",
            pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u043E\u045E"
        },
        future: {
            singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B",
            pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E"
        }
    }),
    xYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0433\u043E\u0434",
            singularGenitive: "{{count}} \u0433\u0430\u0434\u044B",
            pluralGenitive: "{{count}} \u0433\u0430\u0434\u043E\u045E"
        }
    }),
    overXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u044B",
            pluralGenitive: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u043E\u045E"
        },
        future: {
            singularNominative: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B",
            pluralGenitive: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E"
        }
    }),
    almostXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u0430\u0434\u044B",
            pluralGenitive: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u0430\u0434\u043E\u045E"
        },
        future: {
            singularNominative: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B",
            pluralGenitive: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E"
        }
    })
};
var formatDistance = function formatDistance2(token, count, options) {
    options = options || {};
    return formatDistanceLocale[token](count, options);
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/be-tarask/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d MMMM y '\u0433.'",
    long: "d MMMM y '\u0433.'",
    medium: "d MMM y '\u0433.'",
    short: "dd.MM.y"
};
var timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
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
// node_modules/date-fns/esm/locale/be-tarask/_lib/formatRelative/index.js
var accusativeWeekdays = ["\u043D\u044F\u0434\u0437\u0435\u043B\u044E", "\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A", "\u0430\u045E\u0442\u043E\u0440\u0430\u043A", "\u0441\u0435\u0440\u0430\u0434\u0443", "\u0447\u0430\u0446\u044C\u0432\u0435\u0440", "\u043F\u044F\u0442\u043D\u0456\u0446\u0443", "\u0441\u0443\u0431\u043E\u0442\u0443"];
function lastWeek(day) {
    var weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 5:
        case 6:
            return "'\u0443 \u043C\u0456\u043D\u0443\u043B\u0443\u044E " + weekday + " \u0430' p";
        case 1:
        case 2:
        case 4:
            return "'\u0443 \u043C\u0456\u043D\u0443\u043B\u044B " + weekday + " \u0430' p";
    }
}
function thisWeek(day) {
    var weekday = accusativeWeekdays[day];
    return "'\u0443 " + weekday + " \u0430' p";
}
function nextWeek(day) {
    var weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 5:
        case 6:
            return "'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0443\u044E " + weekday + " \u0430' p";
        case 1:
        case 2:
        case 4:
            return "'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u044B " + weekday + " \u0430' p";
    }
}
var lastWeekFormat = function lastWeekFormat2(dirtyDate, baseDate, options) {
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    if (isSameUTCWeek(date, baseDate, options)) {
        return thisWeek(day);
    }
    else {
        return lastWeek(day);
    }
};
var nextWeekFormat = function nextWeekFormat2(dirtyDate, baseDate, options) {
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    if (isSameUTCWeek(date, baseDate, options)) {
        return thisWeek(day);
    }
    else {
        return nextWeek(day);
    }
};
var formatRelativeLocale = {
    lastWeek: lastWeekFormat,
    yesterday: "'\u0443\u0447\u043E\u0440\u0430 \u0430' p",
    today: "'\u0441\u0451\u043D\u044C\u043D\u044F \u0430' p",
    tomorrow: "'\u0437\u0430\u045E\u0442\u0440\u0430 \u0430' p",
    nextWeek: nextWeekFormat,
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
// node_modules/date-fns/esm/locale/be-tarask/_lib/localize/index.js
var eraValues = {
    narrow: ["\u0434\u0430 \u043D.\u044D.", "\u043D.\u044D."],
    abbreviated: ["\u0434\u0430 \u043D. \u044D.", "\u043D. \u044D."],
    wide: ["\u0434\u0430 \u043D\u0430\u0448\u0430\u0439 \u044D\u0440\u044B", "\u043D\u0430\u0448\u0430\u0439 \u044D\u0440\u044B"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1-\u044B \u043A\u0432.", "2-\u0456 \u043A\u0432.", "3-\u0456 \u043A\u0432.", "4-\u044B \u043A\u0432."],
    wide: ["1-\u044B \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0456 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0456 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u044B \u043A\u0432\u0430\u0440\u0442\u0430\u043B"]
};
var monthValues = {
    narrow: ["\u0421", "\u041B", "\u0421", "\u041A", "\u0422", "\u0427", "\u041B", "\u0416", "\u0412", "\u041A", "\u041B", "\u0421"],
    abbreviated: ["\u0441\u0442\u0443\u0434\u0437.", "\u043B\u044E\u0442.", "\u0441\u0430\u043A.", "\u043A\u0440\u0430\u0441.", "\u0442\u0440\u0430\u0432.", "\u0447\u044D\u0440\u0432.", "\u043B\u0456\u043F.", "\u0436\u043D.", "\u0432\u0435\u0440.", "\u043A\u0430\u0441\u0442\u0440.", "\u043B\u0456\u0441\u0442.", "\u0441\u044C\u043D\u0435\u0436."],
    wide: ["\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044C", "\u043B\u044E\u0442\u044B", "\u0441\u0430\u043A\u0430\u0432\u0456\u043A", "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A", "\u0442\u0440\u0430\u0432\u0435\u043D\u044C", "\u0447\u044D\u0440\u0432\u0435\u043D\u044C", "\u043B\u0456\u043F\u0435\u043D\u044C", "\u0436\u043D\u0456\u0432\u0435\u043D\u044C", "\u0432\u0435\u0440\u0430\u0441\u0435\u043D\u044C", "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A", "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434", "\u0441\u044C\u043D\u0435\u0436\u0430\u043D\u044C"]
};
var formattingMonthValues = {
    narrow: ["\u0421", "\u041B", "\u0421", "\u041A", "\u0422", "\u0427", "\u041B", "\u0416", "\u0412", "\u041A", "\u041B", "\u0421"],
    abbreviated: ["\u0441\u0442\u0443\u0434\u0437.", "\u043B\u044E\u0442.", "\u0441\u0430\u043A.", "\u043A\u0440\u0430\u0441.", "\u0442\u0440\u0430\u0432.", "\u0447\u044D\u0440\u0432.", "\u043B\u0456\u043F.", "\u0436\u043D.", "\u0432\u0435\u0440.", "\u043A\u0430\u0441\u0442\u0440.", "\u043B\u0456\u0441\u0442.", "\u0441\u044C\u043D\u0435\u0436."],
    wide: ["\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044F", "\u043B\u044E\u0442\u0430\u0433\u0430", "\u0441\u0430\u043A\u0430\u0432\u0456\u043A\u0430", "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A\u0430", "\u0442\u0440\u0430\u045E\u043D\u044F", "\u0447\u044D\u0440\u0432\u0435\u043D\u044F", "\u043B\u0456\u043F\u0435\u043D\u044F", "\u0436\u043D\u0456\u045E\u043D\u044F", "\u0432\u0435\u0440\u0430\u0441\u043D\u044F", "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A\u0430", "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434\u0430", "\u0441\u044C\u043D\u0435\u0436\u043D\u044F"]
};
var dayValues = {
    narrow: ["\u041D", "\u041F", "\u0410", "\u0421", "\u0427", "\u041F", "\u0421"],
    short: ["\u043D\u0434", "\u043F\u043D", "\u0430\u045E", "\u0441\u0440", "\u0447\u0446", "\u043F\u0442", "\u0441\u0431"],
    abbreviated: ["\u043D\u044F\u0434\u0437", "\u043F\u0430\u043D", "\u0430\u045E\u0442", "\u0441\u0435\u0440", "\u0447\u0430\u0446\u044C", "\u043F\u044F\u0442", "\u0441\u0443\u0431"],
    wide: ["\u043D\u044F\u0434\u0437\u0435\u043B\u044F", "\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A", "\u0430\u045E\u0442\u043E\u0440\u0430\u043A", "\u0441\u0435\u0440\u0430\u0434\u0430", "\u0447\u0430\u0446\u044C\u0432\u0435\u0440", "\u043F\u044F\u0442\u043D\u0456\u0446\u0430", "\u0441\u0443\u0431\u043E\u0442\u0430"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u045E\u043D.",
        noon: "\u043F\u043E\u045E\u0434.",
        morning: "\u0440\u0430\u043D.",
        afternoon: "\u0434\u0437\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447"
    },
    abbreviated: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u045E\u043D.",
        noon: "\u043F\u043E\u045E\u0434.",
        morning: "\u0440\u0430\u043D.",
        afternoon: "\u0434\u0437\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447"
    },
    wide: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u045E\u043D\u0430\u0447",
        noon: "\u043F\u043E\u045E\u0434\u0437\u0435\u043D\u044C",
        morning: "\u0440\u0430\u043D\u0456\u0446\u0430",
        afternoon: "\u0434\u0437\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447\u0430\u0440",
        night: "\u043D\u043E\u0447"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u045E\u043D.",
        noon: "\u043F\u043E\u045E\u0434.",
        morning: "\u0440\u0430\u043D.",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u044B"
    },
    abbreviated: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u045E\u043D.",
        noon: "\u043F\u043E\u045E\u0434.",
        morning: "\u0440\u0430\u043D.",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u044B"
    },
    wide: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u045E\u043D\u0430\u0447",
        noon: "\u043F\u043E\u045E\u0434\u0437\u0435\u043D\u044C",
        morning: "\u0440\u0430\u043D\u0456\u0446\u044B",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447\u0430\u0440\u0430",
        night: "\u043D\u043E\u0447\u044B"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var unit = String(options === null || options === void 0 ? void 0 : options.unit);
    var number = Number(dirtyNumber);
    var suffix;
    if (unit === "date") {
        suffix = "-\u0433\u0430";
    }
    else if (unit === "hour" || unit === "minute" || unit === "second") {
        suffix = "-\u044F";
    }
    else {
        suffix = (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? "-\u0456" : "-\u044B";
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
        defaultWidth: "any",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/be-tarask/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^((да )?н\.?\s?э\.?)/i,
    abbreviated: /^((да )?н\.?\s?э\.?)/i,
    wide: /^(да нашай эры|нашай эры|наша эра)/i
};
var parseEraPatterns = {
    any: [/^д/i, /^н/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234](-?[ыі]?)? кв.?/i,
    wide: /^[1234](-?[ыі]?)? квартал/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[слкмчжв]/i,
    abbreviated: /^(студз|лют|сак|крас|тр(ав)?|чэрв|ліп|жн|вер|кастр|ліст|сьнеж)\.?/i,
    wide: /^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|тра(вень|ўня)|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|сьнеж(ань|ня))/i
};
var parseMonthPatterns = {
    narrow: [/^с/i, /^л/i, /^с/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^ж/i, /^в/i, /^к/i, /^л/i, /^с/i],
    any: [/^ст/i, /^лю/i, /^са/i, /^кр/i, /^тр/i, /^ч/i, /^ліп/i, /^ж/i, /^в/i, /^ка/i, /^ліс/i, /^сн/i]
};
var matchDayPatterns = {
    narrow: /^[нпасч]/i,
    short: /^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,
    abbreviated: /^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцьв|чаць|птн|пят|суб).?/i,
    wide: /^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацьв(ер|ярга)|пятніц[аы]|субот[аы])/i
};
var parseDayPatterns = {
    narrow: [/^н/i, /^п/i, /^а/i, /^с/i, /^ч/i, /^п/i, /^с/i],
    any: [/^н/i, /^п[ан]/i, /^а/i, /^с[ер]/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
};
var matchDayPeriodPatterns = {
    narrow: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,
    abbreviated: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,
    wide: /^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^дп/i,
        pm: /^пп/i,
        midnight: /^поўн/i,
        noon: /^поўд/i,
        morning: /^р/i,
        afternoon: /^д[зн]/i,
        evening: /^в/i,
        night: /^н/i
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
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
var match_default = match;
// node_modules/date-fns/esm/locale/be-tarask/index.js
var locale = {
    code: "be-tarask",
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
var be_tarask_default = locale;
export { be_tarask_default };
