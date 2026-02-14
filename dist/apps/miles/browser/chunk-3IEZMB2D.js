import { isSameUTCWeek } from "@nf-internal/chunk-WGUJHRU3";
import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/kk/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        regular: {
            one: "1 \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u0430\u0437",
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u0430\u0437",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u0430\u0437",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u0430\u0437"
        },
        future: {
            one: "\u0431\u0456\u0440 \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
        }
    },
    xSeconds: {
        regular: {
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
        },
        past: {
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0431\u04B1\u0440\u044B\u043D",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0431\u04B1\u0440\u044B\u043D",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0431\u04B1\u0440\u044B\u043D"
        },
        future: {
            singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
        }
    },
    halfAMinute: function halfAMinute(options) {
        if (options !== null && options !== void 0 && options.addSuffix) {
            if (options.comparison && options.comparison > 0) {
                return "\u0436\u0430\u0440\u0442\u044B \u043C\u0438\u043D\u0443\u0442 \u0456\u0448\u0456\u043D\u0434\u0435";
            }
            else {
                return "\u0436\u0430\u0440\u0442\u044B \u043C\u0438\u043D\u0443\u0442 \u0431\u04B1\u0440\u044B\u043D";
            }
        }
        return "\u0436\u0430\u0440\u0442\u044B \u043C\u0438\u043D\u0443\u0442";
    },
    lessThanXMinutes: {
        regular: {
            one: "1 \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u0430\u0437",
            singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u0430\u0437",
            singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u0430\u0437",
            pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u0430\u0437"
        },
        future: {
            one: "\u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u043C ",
            singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u043C",
            singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u043C",
            pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u043C"
        }
    },
    xMinutes: {
        regular: {
            singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442",
            singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442",
            pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442"
        },
        past: {
            singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u0431\u04B1\u0440\u044B\u043D",
            singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u0431\u04B1\u0440\u044B\u043D",
            pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u0431\u04B1\u0440\u044B\u043D"
        },
        future: {
            singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
        }
    },
    aboutXHours: {
        regular: {
            singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442",
            singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442",
            pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442"
        },
        future: {
            singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
        }
    },
    xHours: {
        regular: {
            singularNominative: "{{count}} \u0441\u0430\u0493\u0430\u0442",
            singularGenitive: "{{count}} \u0441\u0430\u0493\u0430\u0442",
            pluralGenitive: "{{count}} \u0441\u0430\u0493\u0430\u0442"
        }
    },
    xDays: {
        regular: {
            singularNominative: "{{count}} \u043A\u04AF\u043D",
            singularGenitive: "{{count}} \u043A\u04AF\u043D",
            pluralGenitive: "{{count}} \u043A\u04AF\u043D"
        },
        future: {
            singularNominative: "{{count}} \u043A\u04AF\u043D\u043D\u0435\u043D \u043A\u0435\u0439\u0456\u043D",
            singularGenitive: "{{count}} \u043A\u04AF\u043D\u043D\u0435\u043D \u043A\u0435\u0439\u0456\u043D",
            pluralGenitive: "{{count}} \u043A\u04AF\u043D\u043D\u0435\u043D \u043A\u0435\u0439\u0456\u043D"
        }
    },
    aboutXWeeks: {
        type: "weeks",
        one: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D 1 \u0430\u043F\u0442\u0430",
        other: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u043F\u0442\u0430"
    },
    xWeeks: {
        type: "weeks",
        one: "1 \u0430\u043F\u0442\u0430",
        other: "{{count}} \u0430\u043F\u0442\u0430"
    },
    aboutXMonths: {
        regular: {
            singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439",
            singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439",
            pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439"
        },
        future: {
            singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
        }
    },
    xMonths: {
        regular: {
            singularNominative: "{{count}} \u0430\u0439",
            singularGenitive: "{{count}} \u0430\u0439",
            pluralGenitive: "{{count}} \u0430\u0439"
        }
    },
    aboutXYears: {
        regular: {
            singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B",
            singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B",
            pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B"
        },
        future: {
            singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
        }
    },
    xYears: {
        regular: {
            singularNominative: "{{count}} \u0436\u044B\u043B",
            singularGenitive: "{{count}} \u0436\u044B\u043B",
            pluralGenitive: "{{count}} \u0436\u044B\u043B"
        },
        future: {
            singularNominative: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            singularGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            pluralGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
        }
    },
    overXYears: {
        regular: {
            singularNominative: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C",
            singularGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C",
            pluralGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C"
        },
        future: {
            singularNominative: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C",
            singularGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C",
            pluralGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C"
        }
    },
    almostXYears: {
        regular: {
            singularNominative: "{{count}} \u0436\u044B\u043B\u0493\u0430 \u0436\u0430\u049B\u044B\u043D",
            singularGenitive: "{{count}} \u0436\u044B\u043B\u0493\u0430 \u0436\u0430\u049B\u044B\u043D",
            pluralGenitive: "{{count}} \u0436\u044B\u043B\u0493\u0430 \u0436\u0430\u049B\u044B\u043D"
        },
        future: {
            singularNominative: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            singularGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
            pluralGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
        }
    }
};
function declension(scheme, count) {
    if (scheme.one && count === 1)
        return scheme.one;
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
var formatDistance = function formatDistance2(token, count, options) {
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "function")
        return tokenValue(options);
    if (tokenValue.type === "weeks") {
        return count === 1 ? tokenValue.one : tokenValue.other.replace("{{count}}", String(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            if (tokenValue.future) {
                return declension(tokenValue.future, count);
            }
            else {
                return declension(tokenValue.regular, count) + " \u043A\u0435\u0439\u0456\u043D";
            }
        }
        else {
            if (tokenValue.past) {
                return declension(tokenValue.past, count);
            }
            else {
                return declension(tokenValue.regular, count) + " \u0431\u04B1\u0440\u044B\u043D";
            }
        }
    }
    else {
        return declension(tokenValue.regular, count);
    }
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/kk/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, do MMMM y '\u0436.'",
    long: "do MMMM y '\u0436.'",
    medium: "d MMM y '\u0436.'",
    short: "dd.MM.yyyy"
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
// node_modules/date-fns/esm/locale/kk/_lib/formatRelative/index.js
var accusativeWeekdays = ["\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456\u0434\u0435", "\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456\u0434\u0435", "\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456\u0434\u0435", "\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456\u0434\u0435", "\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456\u0434\u0435", "\u0436\u04B1\u043C\u0430\u0434\u0430", "\u0441\u0435\u043D\u0431\u0456\u0434\u0435"];
function _lastWeek(day) {
    var weekday = accusativeWeekdays[day];
    return "'\u04E9\u0442\u043A\u0435\u043D " + weekday + " \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'";
}
function thisWeek(day) {
    var weekday = accusativeWeekdays[day];
    return "'" + weekday + " \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'";
}
function _nextWeek(day) {
    var weekday = accusativeWeekdays[day];
    return "'\u043A\u0435\u043B\u0435\u0441\u0456 " + weekday + " \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'";
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
    yesterday: "'\u043A\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",
    today: "'\u0431\u04AF\u0433\u0456\u043D \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",
    tomorrow: "'\u0435\u0440\u0442\u0435\u04A3 \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",
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
// node_modules/date-fns/esm/locale/kk/_lib/localize/index.js
var eraValues = {
    narrow: ["\u0431.\u0437.\u0434.", "\u0431.\u0437."],
    abbreviated: ["\u0431.\u0437.\u0434.", "\u0431.\u0437."],
    wide: ["\u0431\u0456\u0437\u0434\u0456\u04A3 \u0437\u0430\u043C\u0430\u043D\u044B\u043C\u044B\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043D", "\u0431\u0456\u0437\u0434\u0456\u04A3 \u0437\u0430\u043C\u0430\u043D\u044B\u043C\u044B\u0437"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1-\u0448\u0456 \u0442\u043E\u049B.", "2-\u0448\u0456 \u0442\u043E\u049B.", "3-\u0448\u0456 \u0442\u043E\u049B.", "4-\u0448\u0456 \u0442\u043E\u049B."],
    wide: ["1-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D", "2-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D", "3-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D", "4-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D"]
};
var monthValues = {
    narrow: ["\u049A", "\u0410", "\u041D", "\u0421", "\u041C", "\u041C", "\u0428", "\u0422", "\u049A", "\u049A", "\u049A", "\u0416"],
    abbreviated: ["\u049B\u0430\u04A3", "\u0430\u049B\u043F", "\u043D\u0430\u0443", "\u0441\u04D9\u0443", "\u043C\u0430\u043C", "\u043C\u0430\u0443", "\u0448\u0456\u043B", "\u0442\u0430\u043C", "\u049B\u044B\u0440", "\u049B\u0430\u0437", "\u049B\u0430\u0440", "\u0436\u0435\u043B"],
    wide: ["\u049B\u0430\u04A3\u0442\u0430\u0440", "\u0430\u049B\u043F\u0430\u043D", "\u043D\u0430\u0443\u0440\u044B\u0437", "\u0441\u04D9\u0443\u0456\u0440", "\u043C\u0430\u043C\u044B\u0440", "\u043C\u0430\u0443\u0441\u044B\u043C", "\u0448\u0456\u043B\u0434\u0435", "\u0442\u0430\u043C\u044B\u0437", "\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A", "\u049B\u0430\u0437\u0430\u043D", "\u049B\u0430\u0440\u0430\u0448\u0430", "\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"]
};
var formattingMonthValues = {
    narrow: ["\u049A", "\u0410", "\u041D", "\u0421", "\u041C", "\u041C", "\u0428", "\u0422", "\u049A", "\u049A", "\u049A", "\u0416"],
    abbreviated: ["\u049B\u0430\u04A3", "\u0430\u049B\u043F", "\u043D\u0430\u0443", "\u0441\u04D9\u0443", "\u043C\u0430\u043C", "\u043C\u0430\u0443", "\u0448\u0456\u043B", "\u0442\u0430\u043C", "\u049B\u044B\u0440", "\u049B\u0430\u0437", "\u049B\u0430\u0440", "\u0436\u0435\u043B"],
    wide: ["\u049B\u0430\u04A3\u0442\u0430\u0440", "\u0430\u049B\u043F\u0430\u043D", "\u043D\u0430\u0443\u0440\u044B\u0437", "\u0441\u04D9\u0443\u0456\u0440", "\u043C\u0430\u043C\u044B\u0440", "\u043C\u0430\u0443\u0441\u044B\u043C", "\u0448\u0456\u043B\u0434\u0435", "\u0442\u0430\u043C\u044B\u0437", "\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A", "\u049B\u0430\u0437\u0430\u043D", "\u049B\u0430\u0440\u0430\u0448\u0430", "\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"]
};
var dayValues = {
    narrow: ["\u0416", "\u0414", "\u0421", "\u0421", "\u0411", "\u0416", "\u0421"],
    short: ["\u0436\u0441", "\u0434\u0441", "\u0441\u0441", "\u0441\u0440", "\u0431\u0441", "\u0436\u043C", "\u0441\u0431"],
    abbreviated: ["\u0436\u0441", "\u0434\u0441", "\u0441\u0441", "\u0441\u0440", "\u0431\u0441", "\u0436\u043C", "\u0441\u0431"],
    wide: ["\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456", "\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456", "\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456", "\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456", "\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456", "\u0436\u04B1\u043C\u0430", "\u0441\u0435\u043D\u0431\u0456"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u0422\u0414",
        pm: "\u0422\u041A",
        midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B",
        noon: "\u0442\u04AF\u0441",
        morning: "\u0442\u0430\u04A3",
        afternoon: "\u043A\u04AF\u043D\u0434\u0456\u0437",
        evening: "\u043A\u0435\u0448",
        night: "\u0442\u04AF\u043D"
    },
    wide: {
        am: "\u0422\u0414",
        pm: "\u0422\u041A",
        midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B",
        noon: "\u0442\u04AF\u0441",
        morning: "\u0442\u0430\u04A3",
        afternoon: "\u043A\u04AF\u043D\u0434\u0456\u0437",
        evening: "\u043A\u0435\u0448",
        night: "\u0442\u04AF\u043D"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u0422\u0414",
        pm: "\u0422\u041A",
        midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B\u043D\u0434\u0430",
        noon: "\u0442\u04AF\u0441",
        morning: "\u0442\u0430\u04A3",
        afternoon: "\u043A\u04AF\u043D",
        evening: "\u043A\u0435\u0448",
        night: "\u0442\u04AF\u043D"
    },
    wide: {
        am: "\u0422\u0414",
        pm: "\u0422\u041A",
        midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B\u043D\u0434\u0430",
        noon: "\u0442\u04AF\u0441\u0442\u0435",
        morning: "\u0442\u0430\u04A3\u0435\u0440\u0442\u0435\u04A3",
        afternoon: "\u043A\u04AF\u043D\u0434\u0456\u0437",
        evening: "\u043A\u0435\u0448\u0442\u0435",
        night: "\u0442\u04AF\u043D\u0434\u0435"
    }
};
var suffixes = {
    0: "-\u0448\u0456",
    1: "-\u0448\u0456",
    2: "-\u0448\u0456",
    3: "-\u0448\u0456",
    4: "-\u0448\u0456",
    5: "-\u0448\u0456",
    6: "-\u0448\u044B",
    7: "-\u0448\u0456",
    8: "-\u0448\u0456",
    9: "-\u0448\u044B",
    10: "-\u0448\u044B",
    20: "-\u0448\u044B",
    30: "-\u0448\u044B",
    40: "-\u0448\u044B",
    50: "-\u0448\u0456",
    60: "-\u0448\u044B",
    70: "-\u0448\u0456",
    80: "-\u0448\u0456",
    90: "-\u0448\u044B",
    100: "-\u0448\u0456"
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var mod10 = number % 10;
    var b = number >= 100 ? 100 : null;
    var suffix = suffixes[number] || suffixes[mod10] || b && suffixes[b] || "";
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
// node_modules/date-fns/esm/locale/kk/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(-?(ші|шы))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^((б )?з\.?\s?д\.?)/i,
    abbreviated: /^((б )?з\.?\s?д\.?)/i,
    wide: /^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i
};
var parseEraPatterns = {
    any: [/^б/i, /^з/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234](-?ші)? тоқ.?/i,
    wide: /^[1234](-?ші)? тоқсан/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i,
    abbreviated: /^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,
    wide: /^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i
};
var parseMonthPatterns = {
    narrow: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i],
    abbreviated: [/^қаң/i, /^ақп/i, /^нау/i, /^сәу/i, /^мам/i, /^мау/i, /^шіл/i, /^там/i, /^қыр/i, /^қаз/i, /^қар/i, /^жел/i],
    any: [/^қ/i, /^а/i, /^н/i, /^с/i, /^м/i, /^м/i, /^ш/i, /^т/i, /^қ/i, /^қ/i, /^қ/i, /^ж/i]
};
var matchDayPatterns = {
    narrow: /^(ж|д|с|с|б|ж|с)/i,
    short: /^(жс|дс|сс|ср|бс|жм|сб)/i,
    wide: /^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i
};
var parseDayPatterns = {
    narrow: [/^ж/i, /^д/i, /^с/i, /^с/i, /^б/i, /^ж/i, /^с/i],
    short: [/^жс/i, /^дс/i, /^сс/i, /^ср/i, /^бс/i, /^жм/i, /^сб/i],
    any: [/^ж[ек]/i, /^д[үй]/i, /^сe[й]/i, /^сә[р]/i, /^б[ей]/i, /^ж[ұм]/i, /^се[н]/i]
};
var matchDayPeriodPatterns = {
    narrow: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
    wide: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
    any: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^ТД/i,
        pm: /^ТК/i,
        midnight: /^түн орта/i,
        noon: /^күндіз/i,
        morning: /таң/i,
        afternoon: /түс/i,
        evening: /кеш/i,
        night: /түн/i
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
// node_modules/date-fns/esm/locale/kk/index.js
var locale = {
    code: "kk",
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
var kk_default = locale;
export { kk_default };
