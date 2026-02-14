import { isSameUTCWeek } from "@nf-internal/chunk-WGUJHRU3";
import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/ru/_lib/formatDistance/index.js
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
        if (options !== null && options !== void 0 && options.addSuffix) {
            if (options.comparison && options.comparison > 0) {
                if (scheme.future) {
                    return declension(scheme.future, count);
                }
                else {
                    return "\u0447\u0435\u0440\u0435\u0437 " + declension(scheme.regular, count);
                }
            }
            else {
                if (scheme.past) {
                    return declension(scheme.past, count);
                }
                else {
                    return declension(scheme.regular, count) + " \u043D\u0430\u0437\u0430\u0434";
                }
            }
        }
        else {
            return declension(scheme.regular, count);
        }
    };
}
var formatDistanceLocale = {
    lessThanXSeconds: buildLocalizeTokenFn({
        regular: {
            one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        },
        future: {
            one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        }
    }),
    xSeconds: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        },
        past: {
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u043D\u0430\u0437\u0430\u0434",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434"
        },
        future: {
            singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
            pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        }
    }),
    halfAMinute: function halfAMinute(_count, options) {
        if (options !== null && options !== void 0 && options.addSuffix) {
            if (options.comparison && options.comparison > 0) {
                return "\u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
            }
            else {
                return "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434";
            }
        }
        return "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
    },
    lessThanXMinutes: buildLocalizeTokenFn({
        regular: {
            one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0443\u0442\u044B",
            singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
            singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442",
            pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442"
        },
        future: {
            one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u043C\u0438\u043D\u0443\u0442\u0443",
            singularNominative: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443",
            singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
            pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442"
        }
    }),
    xMinutes: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0430",
            singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
            pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442"
        },
        past: {
            singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0443 \u043D\u0430\u0437\u0430\u0434",
            singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434",
            pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434"
        },
        future: {
            singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443",
            singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
            pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442"
        }
    }),
    aboutXHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u0430",
            singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432",
            pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u0430",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u043E\u0432"
        }
    }),
    xHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0447\u0430\u0441",
            singularGenitive: "{{count}} \u0447\u0430\u0441\u0430",
            pluralGenitive: "{{count}} \u0447\u0430\u0441\u043E\u0432"
        }
    }),
    xDays: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0434\u0435\u043D\u044C",
            singularGenitive: "{{count}} \u0434\u043D\u044F",
            pluralGenitive: "{{count}} \u0434\u043D\u0435\u0439"
        }
    }),
    aboutXWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
            singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C",
            pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044E",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044C"
        }
    }),
    xWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044F",
            singularGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
            pluralGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044C"
        }
    }),
    aboutXMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
            singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432",
            pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432"
        }
    }),
    xMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446",
            singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
            pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432"
        }
    }),
    aboutXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0433\u043E\u0434\u0430",
            singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442",
            pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442"
        }
    }),
    xYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0433\u043E\u0434",
            singularGenitive: "{{count}} \u0433\u043E\u0434\u0430",
            pluralGenitive: "{{count}} \u043B\u0435\u0442"
        }
    }),
    overXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u0433\u043E\u0434\u0430",
            singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442",
            pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442"
        },
        future: {
            singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
            pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442"
        }
    }),
    almostXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434\u0430",
            pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u043B\u0435\u0442"
        },
        future: {
            singularNominative: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
            singularGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
            pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442"
        }
    })
};
var formatDistance = function formatDistance2(token, count, options) {
    return formatDistanceLocale[token](count, options);
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/ru/_lib/formatLong/index.js
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
// node_modules/date-fns/esm/locale/ru/_lib/formatRelative/index.js
var accusativeWeekdays = ["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0443", "\u0447\u0435\u0442\u0432\u0435\u0440\u0433", "\u043F\u044F\u0442\u043D\u0438\u0446\u0443", "\u0441\u0443\u0431\u0431\u043E\u0442\u0443"];
function _lastWeek(day) {
    var weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
            return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u0435 " + weekday + " \u0432' p";
        case 1:
        case 2:
        case 4:
            return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u044B\u0439 " + weekday + " \u0432' p";
        case 3:
        case 5:
        case 6:
            return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u0443\u044E " + weekday + " \u0432' p";
    }
}
function thisWeek(day) {
    var weekday = accusativeWeekdays[day];
    if (day === 2) {
        return "'\u0432\u043E " + weekday + " \u0432' p";
    }
    else {
        return "'\u0432 " + weekday + " \u0432' p";
    }
}
function _nextWeek(day) {
    var weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
            return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 " + weekday + " \u0432' p";
        case 1:
        case 2:
        case 4:
            return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 " + weekday + " \u0432' p";
        case 3:
        case 5:
        case 6:
            return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E " + weekday + " \u0432' p";
    }
}
var formatRelativeLocale = {
    lastWeek: function lastWeek(date, baseDate, options) {
        var day = date.getUTCDay();
        if (isSameUTCWeek(date, baseDate, options)) {
            return thisWeek(day);
        }
        else {
            return _lastWeek(day);
        }
    },
    yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
    today: "'\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0432' p",
    tomorrow: "'\u0437\u0430\u0432\u0442\u0440\u0430 \u0432' p",
    nextWeek: function nextWeek(date, baseDate, options) {
        var day = date.getUTCDay();
        if (isSameUTCWeek(date, baseDate, options)) {
            return thisWeek(day);
        }
        else {
            return _nextWeek(day);
        }
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
// node_modules/date-fns/esm/locale/ru/_lib/localize/index.js
var eraValues = {
    narrow: ["\u0434\u043E \u043D.\u044D.", "\u043D.\u044D."],
    abbreviated: ["\u0434\u043E \u043D. \u044D.", "\u043D. \u044D."],
    wide: ["\u0434\u043E \u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B", "\u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1-\u0439 \u043A\u0432.", "2-\u0439 \u043A\u0432.", "3-\u0439 \u043A\u0432.", "4-\u0439 \u043A\u0432."],
    wide: ["1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"]
};
var monthValues = {
    narrow: ["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"],
    abbreviated: ["\u044F\u043D\u0432.", "\u0444\u0435\u0432.", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440.", "\u043C\u0430\u0439", "\u0438\u044E\u043D\u044C", "\u0438\u044E\u043B\u044C", "\u0430\u0432\u0433.", "\u0441\u0435\u043D\u0442.", "\u043E\u043A\u0442.", "\u043D\u043E\u044F\u0431.", "\u0434\u0435\u043A."],
    wide: ["\u044F\u043D\u0432\u0430\u0440\u044C", "\u0444\u0435\u0432\u0440\u0430\u043B\u044C", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0435\u043B\u044C", "\u043C\u0430\u0439", "\u0438\u044E\u043D\u044C", "\u0438\u044E\u043B\u044C", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u043E\u043A\u0442\u044F\u0431\u0440\u044C", "\u043D\u043E\u044F\u0431\u0440\u044C", "\u0434\u0435\u043A\u0430\u0431\u0440\u044C"]
};
var formattingMonthValues = {
    narrow: ["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"],
    abbreviated: ["\u044F\u043D\u0432.", "\u0444\u0435\u0432.", "\u043C\u0430\u0440.", "\u0430\u043F\u0440.", "\u043C\u0430\u044F", "\u0438\u044E\u043D.", "\u0438\u044E\u043B.", "\u0430\u0432\u0433.", "\u0441\u0435\u043D\u0442.", "\u043E\u043A\u0442.", "\u043D\u043E\u044F\u0431.", "\u0434\u0435\u043A."],
    wide: ["\u044F\u043D\u0432\u0430\u0440\u044F", "\u0444\u0435\u0432\u0440\u0430\u043B\u044F", "\u043C\u0430\u0440\u0442\u0430", "\u0430\u043F\u0440\u0435\u043B\u044F", "\u043C\u0430\u044F", "\u0438\u044E\u043D\u044F", "\u0438\u044E\u043B\u044F", "\u0430\u0432\u0433\u0443\u0441\u0442\u0430", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F", "\u043E\u043A\u0442\u044F\u0431\u0440\u044F", "\u043D\u043E\u044F\u0431\u0440\u044F", "\u0434\u0435\u043A\u0430\u0431\u0440\u044F"]
};
var dayValues = {
    narrow: ["\u0412", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"],
    short: ["\u0432\u0441", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"],
    abbreviated: ["\u0432\u0441\u043A", "\u043F\u043D\u0434", "\u0432\u0442\u0440", "\u0441\u0440\u0434", "\u0447\u0442\u0432", "\u043F\u0442\u043D", "\u0441\u0443\u0431"],
    wide: ["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0435\u0440\u0433", "\u043F\u044F\u0442\u043D\u0438\u0446\u0430", "\u0441\u0443\u0431\u0431\u043E\u0442\u0430"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D.",
        noon: "\u043F\u043E\u043B\u0434.",
        morning: "\u0443\u0442\u0440\u043E",
        afternoon: "\u0434\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u044C"
    },
    abbreviated: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D.",
        noon: "\u043F\u043E\u043B\u0434.",
        morning: "\u0443\u0442\u0440\u043E",
        afternoon: "\u0434\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u044C"
    },
    wide: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C",
        noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C",
        morning: "\u0443\u0442\u0440\u043E",
        afternoon: "\u0434\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447\u0435\u0440",
        night: "\u043D\u043E\u0447\u044C"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D.",
        noon: "\u043F\u043E\u043B\u0434.",
        morning: "\u0443\u0442\u0440\u0430",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u0438"
    },
    abbreviated: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D.",
        noon: "\u043F\u043E\u043B\u0434.",
        morning: "\u0443\u0442\u0440\u0430",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u0438"
    },
    wide: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C",
        noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C",
        morning: "\u0443\u0442\u0440\u0430",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447\u0435\u0440\u0430",
        night: "\u043D\u043E\u0447\u0438"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    var unit = options === null || options === void 0 ? void 0 : options.unit;
    var suffix;
    if (unit === "date") {
        suffix = "-\u0435";
    }
    else if (unit === "week" || unit === "minute" || unit === "second") {
        suffix = "-\u044F";
    }
    else {
        suffix = "-\u0439";
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
// node_modules/date-fns/esm/locale/ru/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^((до )?н\.?\s?э\.?)/i,
    abbreviated: /^((до )?н\.?\s?э\.?)/i,
    wide: /^(до нашей эры|нашей эры|наша эра)/i
};
var parseEraPatterns = {
    any: [/^д/i, /^н/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
    wide: /^[1234](-?[ыои]?й?)? квартал/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[яфмаисонд]/i,
    abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
    wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
};
var parseMonthPatterns = {
    narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i],
    any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i]
};
var matchDayPatterns = {
    narrow: /^[впсч]/i,
    short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
    abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
    wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
};
var parseDayPatterns = {
    narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
    any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
};
var matchDayPeriodPatterns = {
    narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
    abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
    wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^дп/i,
        pm: /^пп/i,
        midnight: /^полн/i,
        noon: /^полд/i,
        morning: /^у/i,
        afternoon: /^д[ен]/i,
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
// node_modules/date-fns/esm/locale/ru/index.js
var locale = {
    code: "ru",
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
var ru_default = locale;
export { ru_default };
