import { isSameUTCWeek } from "@nf-internal/chunk-WGUJHRU3";
import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
// node_modules/date-fns/esm/locale/uk/_lib/formatDistance/index.js
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
                    return "\u0437\u0430 " + declension(scheme.regular, count);
                }
            }
            else {
                if (scheme.past) {
                    return declension(scheme.past, count);
                }
                else {
                    return declension(scheme.regular, count) + " \u0442\u043E\u043C\u0443";
                }
            }
        }
        else {
            return declension(scheme.regular, count);
        }
    };
}
var halfAtMinute = function halfAtMinute2(_, options) {
    if (options && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "\u0437\u0430 \u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
        }
        else {
            return "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443";
        }
    }
    return "\u043F\u0456\u0432\u0445\u0432\u0438\u043B\u0438\u043D\u0438";
};
var formatDistanceLocale = {
    lessThanXSeconds: buildLocalizeTokenFn({
        regular: {
            one: "\u043C\u0435\u043D\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
            singularNominative: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
            singularGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            pluralGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        },
        future: {
            one: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularNominative: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
            pluralGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        }
    }),
    xSeconds: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        },
        past: {
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u0442\u043E\u043C\u0443",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438 \u0442\u043E\u043C\u0443",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0442\u043E\u043C\u0443"
        },
        future: {
            singularNominative: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
            singularGenitive: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
            pluralGenitive: "\u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        }
    }),
    halfAMinute: halfAtMinute,
    lessThanXMinutes: buildLocalizeTokenFn({
        regular: {
            one: "\u043C\u0435\u043D\u0448\u0435 \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
            singularNominative: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
            singularGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D",
            pluralGenitive: "\u043C\u0435\u043D\u0448\u0435 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D"
        },
        future: {
            one: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 \u0445\u0432\u0438\u043B\u0438\u043D\u0443",
            singularNominative: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443",
            singularGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
            pluralGenitive: "\u043C\u0435\u043D\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D"
        }
    }),
    xMinutes: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0430",
            singularGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
            pluralGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D"
        },
        past: {
            singularNominative: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443 \u0442\u043E\u043C\u0443",
            singularGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443",
            pluralGenitive: "{{count}} \u0445\u0432\u0438\u043B\u0438\u043D \u0442\u043E\u043C\u0443"
        },
        future: {
            singularNominative: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0443",
            singularGenitive: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D\u0438",
            pluralGenitive: "\u0437\u0430 {{count}} \u0445\u0432\u0438\u043B\u0438\u043D"
        }
    }),
    aboutXHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
            singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D",
            pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0433\u043E\u0434\u0438\u043D"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D\u0443",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0433\u043E\u0434\u0438\u043D"
        }
    }),
    xHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0443",
            singularGenitive: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
            pluralGenitive: "{{count}} \u0433\u043E\u0434\u0438\u043D"
        }
    }),
    xDays: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0434\u0435\u043D\u044C",
            singularGenitive: "{{count}} \u0434\u043Di",
            pluralGenitive: "{{count}} \u0434\u043D\u0456\u0432"
        }
    }),
    aboutXWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u044F",
            singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u0456\u0432",
            pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0442\u0438\u0436\u043D\u0456\u0432"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u0434\u0435\u043D\u044C",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u043D\u0456",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0442\u0438\u0436\u043D\u0456\u0432"
        }
    }),
    xWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0442\u0438\u0436\u0434\u0435\u043D\u044C",
            singularGenitive: "{{count}} \u0442\u0438\u0436\u043D\u0456",
            pluralGenitive: "{{count}} \u0442\u0438\u0436\u043D\u0456\u0432"
        }
    }),
    aboutXMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u044F",
            singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432",
            pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u044C",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u0456",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432"
        }
    }),
    xMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u043C\u0456\u0441\u044F\u0446\u044C",
            singularGenitive: "{{count}} \u043C\u0456\u0441\u044F\u0446\u0456",
            pluralGenitive: "{{count}} \u043C\u0456\u0441\u044F\u0446\u0456\u0432"
        }
    }),
    aboutXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0443",
            singularGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0456\u0432",
            pluralGenitive: "\u0431\u043B\u0438\u0437\u044C\u043A\u043E {{count}} \u0440\u043E\u043A\u0456\u0432"
        },
        future: {
            singularNominative: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u0456\u043A",
            singularGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438",
            pluralGenitive: "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432"
        }
    }),
    xYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} \u0440\u0456\u043A",
            singularGenitive: "{{count}} \u0440\u043E\u043A\u0438",
            pluralGenitive: "{{count}} \u0440\u043E\u043A\u0456\u0432"
        }
    }),
    overXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0443",
            singularGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432",
            pluralGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432"
        },
        future: {
            singularNominative: "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u0456\u043A",
            singularGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438",
            pluralGenitive: "\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432"
        }
    }),
    almostXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u0456\u043A",
            singularGenitive: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u043E\u043A\u0438",
            pluralGenitive: "\u043C\u0430\u0439\u0436\u0435 {{count}} \u0440\u043E\u043A\u0456\u0432"
        },
        future: {
            singularNominative: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u0456\u043A",
            singularGenitive: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0438",
            pluralGenitive: "\u043C\u0430\u0439\u0436\u0435 \u0437\u0430 {{count}} \u0440\u043E\u043A\u0456\u0432"
        }
    })
};
var formatDistance = function formatDistance2(token, count, options) {
    options = options || {};
    return formatDistanceLocale[token](count, options);
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/uk/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, do MMMM y '\u0440.'",
    long: "do MMMM y '\u0440.'",
    medium: "d MMM y '\u0440.'",
    short: "dd.MM.y"
};
var timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
var dateTimeFormats = {
    full: "{{date}} '\u043E' {{time}}",
    long: "{{date}} '\u043E' {{time}}",
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
// node_modules/date-fns/esm/locale/uk/_lib/formatRelative/index.js
var accusativeWeekdays = ["\u043D\u0435\u0434\u0456\u043B\u044E", "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A", "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A", "\u0441\u0435\u0440\u0435\u0434\u0443", "\u0447\u0435\u0442\u0432\u0435\u0440", "\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E", "\u0441\u0443\u0431\u043E\u0442\u0443"];
function lastWeek(day) {
    var weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 5:
        case 6:
            return "'\u0443 \u043C\u0438\u043D\u0443\u043B\u0443 " + weekday + " \u043E' p";
        case 1:
        case 2:
        case 4:
            return "'\u0443 \u043C\u0438\u043D\u0443\u043B\u0438\u0439 " + weekday + " \u043E' p";
    }
}
function thisWeek(day) {
    var weekday = accusativeWeekdays[day];
    return "'\u0443 " + weekday + " \u043E' p";
}
function nextWeek(day) {
    var weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 5:
        case 6:
            return "'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0443 " + weekday + " \u043E' p";
        case 1:
        case 2:
        case 4:
            return "'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 " + weekday + " \u043E' p";
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
    yesterday: "'\u0432\u0447\u043E\u0440\u0430 \u043E' p",
    today: "'\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u043E' p",
    tomorrow: "'\u0437\u0430\u0432\u0442\u0440\u0430 \u043E' p",
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
// node_modules/date-fns/esm/locale/uk/_lib/localize/index.js
var eraValues = {
    narrow: ["\u0434\u043E \u043D.\u0435.", "\u043D.\u0435."],
    abbreviated: ["\u0434\u043E \u043D. \u0435.", "\u043D. \u0435."],
    wide: ["\u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438", "\u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1-\u0439 \u043A\u0432.", "2-\u0439 \u043A\u0432.", "3-\u0439 \u043A\u0432.", "4-\u0439 \u043A\u0432."],
    wide: ["1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"]
};
var monthValues = {
    // ДСТУ 3582:2013
    narrow: ["\u0421", "\u041B", "\u0411", "\u041A", "\u0422", "\u0427", "\u041B", "\u0421", "\u0412", "\u0416", "\u041B", "\u0413"],
    abbreviated: ["\u0441\u0456\u0447.", "\u043B\u044E\u0442.", "\u0431\u0435\u0440\u0435\u0437.", "\u043A\u0432\u0456\u0442.", "\u0442\u0440\u0430\u0432.", "\u0447\u0435\u0440\u0432.", "\u043B\u0438\u043F.", "\u0441\u0435\u0440\u043F.", "\u0432\u0435\u0440\u0435\u0441.", "\u0436\u043E\u0432\u0442.", "\u043B\u0438\u0441\u0442\u043E\u043F.", "\u0433\u0440\u0443\u0434."],
    wide: ["\u0441\u0456\u0447\u0435\u043D\u044C", "\u043B\u044E\u0442\u0438\u0439", "\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C", "\u043A\u0432\u0456\u0442\u0435\u043D\u044C", "\u0442\u0440\u0430\u0432\u0435\u043D\u044C", "\u0447\u0435\u0440\u0432\u0435\u043D\u044C", "\u043B\u0438\u043F\u0435\u043D\u044C", "\u0441\u0435\u0440\u043F\u0435\u043D\u044C", "\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C", "\u0436\u043E\u0432\u0442\u0435\u043D\u044C", "\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434", "\u0433\u0440\u0443\u0434\u0435\u043D\u044C"]
};
var formattingMonthValues = {
    narrow: ["\u0421", "\u041B", "\u0411", "\u041A", "\u0422", "\u0427", "\u041B", "\u0421", "\u0412", "\u0416", "\u041B", "\u0413"],
    abbreviated: ["\u0441\u0456\u0447.", "\u043B\u044E\u0442.", "\u0431\u0435\u0440\u0435\u0437.", "\u043A\u0432\u0456\u0442.", "\u0442\u0440\u0430\u0432.", "\u0447\u0435\u0440\u0432.", "\u043B\u0438\u043F.", "\u0441\u0435\u0440\u043F.", "\u0432\u0435\u0440\u0435\u0441.", "\u0436\u043E\u0432\u0442.", "\u043B\u0438\u0441\u0442\u043E\u043F.", "\u0433\u0440\u0443\u0434."],
    wide: ["\u0441\u0456\u0447\u043D\u044F", "\u043B\u044E\u0442\u043E\u0433\u043E", "\u0431\u0435\u0440\u0435\u0437\u043D\u044F", "\u043A\u0432\u0456\u0442\u043D\u044F", "\u0442\u0440\u0430\u0432\u043D\u044F", "\u0447\u0435\u0440\u0432\u043D\u044F", "\u043B\u0438\u043F\u043D\u044F", "\u0441\u0435\u0440\u043F\u043D\u044F", "\u0432\u0435\u0440\u0435\u0441\u043D\u044F", "\u0436\u043E\u0432\u0442\u043D\u044F", "\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430", "\u0433\u0440\u0443\u0434\u043D\u044F"]
};
var dayValues = {
    narrow: ["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"],
    short: ["\u043D\u0434", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"],
    abbreviated: ["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0432\u0456\u0432", "\u0441\u0435\u0440", "\u0447\u0442\u0432", "\u043F\u0442\u043D", "\u0441\u0443\u0431"],
    wide: ["\u043D\u0435\u0434\u0456\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A", "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A", "\u0441\u0435\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0435\u0440", "\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F", "\u0441\u0443\u0431\u043E\u0442\u0430"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u0456\u0432\u043D.",
        noon: "\u043F\u043E\u043B.",
        morning: "\u0440\u0430\u043D\u043E\u043A",
        afternoon: "\u0434\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u0456\u0447"
    },
    abbreviated: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u0456\u0432\u043D.",
        noon: "\u043F\u043E\u043B.",
        morning: "\u0440\u0430\u043D\u043E\u043A",
        afternoon: "\u0434\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u0456\u0447"
    },
    wide: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u0456\u0432\u043D\u0456\u0447",
        noon: "\u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",
        morning: "\u0440\u0430\u043D\u043E\u043A",
        afternoon: "\u0434\u0435\u043D\u044C",
        evening: "\u0432\u0435\u0447\u0456\u0440",
        night: "\u043D\u0456\u0447"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u0456\u0432\u043D.",
        noon: "\u043F\u043E\u043B.",
        morning: "\u0440\u0430\u043D\u043A\u0443",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u0456"
    },
    abbreviated: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u0456\u0432\u043D.",
        noon: "\u043F\u043E\u043B.",
        morning: "\u0440\u0430\u043D\u043A\u0443",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u0456"
    },
    wide: {
        am: "\u0414\u041F",
        pm: "\u041F\u041F",
        midnight: "\u043F\u0456\u0432\u043D\u0456\u0447",
        noon: "\u043F\u043E\u043B\u0443\u0434\u0435\u043D\u044C",
        morning: "\u0440\u0430\u043D\u043A\u0443",
        afternoon: "\u0434\u043D\u044F",
        evening: "\u0432\u0435\u0447.",
        night: "\u043D\u043E\u0447\u0456"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var unit = String(options === null || options === void 0 ? void 0 : options.unit);
    var number = Number(dirtyNumber);
    var suffix;
    if (unit === "date") {
        if (number === 3 || number === 23) {
            suffix = "-\u0454";
        }
        else {
            suffix = "-\u0435";
        }
    }
    else if (unit === "minute" || unit === "second" || unit === "hour") {
        suffix = "-\u0430";
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
// node_modules/date-fns/esm/locale/uk/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(-?(е|й|є|а|я))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^((до )?н\.?\s?е\.?)/i,
    abbreviated: /^((до )?н\.?\s?е\.?)/i,
    wide: /^(до нашої ери|нашої ери|наша ера)/i
};
var parseEraPatterns = {
    any: [/^д/i, /^н/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234](-?[иі]?й?)? кв.?/i,
    wide: /^[1234](-?[иі]?й?)? квартал/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[слбктчвжг]/i,
    abbreviated: /^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,
    wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i
};
var parseMonthPatterns = {
    narrow: [/^с/i, /^л/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^л/i, /^с/i, /^в/i, /^ж/i, /^л/i, /^г/i],
    any: [/^сі/i, /^лю/i, /^б/i, /^к/i, /^т/i, /^ч/i, /^лип/i, /^се/i, /^в/i, /^ж/i, /^лис/i, /^г/i]
};
var matchDayPatterns = {
    narrow: /^[нпвсч]/i,
    short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i,
    abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,
    wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i
};
var parseDayPatterns = {
    narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
    any: [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i]
};
var matchDayPeriodPatterns = {
    narrow: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
    abbreviated: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
    wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^дп/i,
        pm: /^пп/i,
        midnight: /^півн/i,
        noon: /^пол/i,
        morning: /^р/i,
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
// node_modules/date-fns/esm/locale/uk/index.js
var locale = {
    code: "uk",
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
var uk_default = locale;
export { uk_default };
