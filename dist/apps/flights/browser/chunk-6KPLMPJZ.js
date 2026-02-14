import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/kn/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: {
            default: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
            future: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
            past: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6"
        },
        other: {
            default: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
            future: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
            past: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6"
        }
    },
    xSeconds: {
        one: {
            default: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD",
            future: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0CA8\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        },
        other: {
            default: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CC1\u0C97\u0CB3\u0CC1",
            future: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        }
    },
    halfAMinute: {
        other: {
            default: "\u0C85\u0CB0\u0CCD\u0CA7 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7",
            future: "\u0C85\u0CB0\u0CCD\u0CA7 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "\u0C85\u0CB0\u0CCD\u0CA7 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0CA6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        }
    },
    lessThanXMinutes: {
        one: {
            default: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
            future: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
            past: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6"
        },
        other: {
            default: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
            future: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
            past: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6"
        }
    },
    xMinutes: {
        one: {
            default: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7",
            future: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0CA6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        },
        other: {
            default: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C97\u0CB3\u0CC1",
            future: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        }
    },
    aboutXHours: {
        one: {
            default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0C97\u0C82\u0C9F\u0CC6",
            future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0C97\u0C82\u0C9F\u0CC6\u0CAF\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0C97\u0C82\u0C9F\u0CC6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        },
        other: {
            default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3\u0CC1",
            future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        }
    },
    xHours: {
        one: {
            default: "1 \u0C97\u0C82\u0C9F\u0CC6",
            future: "1 \u0C97\u0C82\u0C9F\u0CC6\u0CAF\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "1 \u0C97\u0C82\u0C9F\u0CC6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        },
        other: {
            default: "{{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3\u0CC1",
            future: "{{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "{{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        }
    },
    xDays: {
        one: {
            default: "1 \u0CA6\u0CBF\u0CA8",
            future: "1 \u0CA6\u0CBF\u0CA8\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "1 \u0CA6\u0CBF\u0CA8\u0CA6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        },
        other: {
            default: "{{count}} \u0CA6\u0CBF\u0CA8\u0C97\u0CB3\u0CC1",
            future: "{{count}} \u0CA6\u0CBF\u0CA8\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "{{count}} \u0CA6\u0CBF\u0CA8\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        }
    },
    // TODO
    // aboutXWeeks: {},
    // TODO
    // xWeeks: {},
    aboutXMonths: {
        one: {
            default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
            future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        },
        other: {
            default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
            future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        }
    },
    xMonths: {
        one: {
            default: "1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
            future: "1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        },
        other: {
            default: "{{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
            future: "{{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "{{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        }
    },
    aboutXYears: {
        one: {
            default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CB5\u0CB0\u0CCD\u0CB7",
            future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        },
        other: {
            default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CC1",
            future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        }
    },
    xYears: {
        one: {
            default: "1 \u0CB5\u0CB0\u0CCD\u0CB7",
            future: "1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        },
        other: {
            default: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CC1",
            future: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
        }
    },
    overXYears: {
        one: {
            default: "1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6 \u0CAE\u0CC7\u0CB2\u0CC6",
            future: "1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6 \u0CAE\u0CC7\u0CB2\u0CC6",
            past: "1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6 \u0CAE\u0CC7\u0CB2\u0CC6"
        },
        other: {
            default: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3 \u0CAE\u0CC7\u0CB2\u0CC6",
            future: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3 \u0CAE\u0CC7\u0CB2\u0CC6",
            past: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3 \u0CAE\u0CC7\u0CB2\u0CC6"
        }
    },
    almostXYears: {
        one: {
            default: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
            future: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF"
        },
        other: {
            default: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            future: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
            past: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF"
        }
    }
};
function getResultByTense(parentToken, options) {
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return parentToken.future;
        }
        else {
            return parentToken.past;
        }
    }
    return parentToken.default;
}
var formatDistance = function formatDistance2(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (tokenValue.one && count === 1) {
        result = getResultByTense(tokenValue.one, options);
    }
    else {
        result = getResultByTense(tokenValue.other, options);
    }
    return result.replace("{{count}}", String(count));
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/kn/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, MMMM d, y",
    // CLDR 1816
    long: "MMMM d, y",
    // CLDR 1817
    medium: "MMM d, y",
    // CLDR 1818
    short: "d/M/yy"
    // CLDR 1819
};
var timeFormats = {
    full: "hh:mm:ss a zzzz",
    // CLDR 1820
    long: "hh:mm:ss a z",
    // CLDR 1821
    medium: "hh:mm:ss a",
    // CLDR 1822
    short: "hh:mm a"
    // CLDR 1823
};
var dateTimeFormats = {
    full: "{{date}} {{time}}",
    // CLDR 1824
    long: "{{date}} {{time}}",
    // CLDR 1825
    medium: "{{date}} {{time}}",
    // CLDR 1826
    short: "{{date}} {{time}}"
    // CLDR 1827
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
// node_modules/date-fns/esm/locale/kn/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\u0C95\u0CB3\u0CC6\u0CA6' eeee p '\u0C95\u0CCD\u0C95\u0CC6'",
    yesterday: "'\u0CA8\u0CBF\u0CA8\u0CCD\u0CA8\u0CC6' p '\u0C95\u0CCD\u0C95\u0CC6'",
    today: "'\u0C87\u0C82\u0CA6\u0CC1' p '\u0C95\u0CCD\u0C95\u0CC6'",
    tomorrow: "'\u0CA8\u0CBE\u0CB3\u0CC6' p '\u0C95\u0CCD\u0C95\u0CC6'",
    nextWeek: "eeee p '\u0C95\u0CCD\u0C95\u0CC6'",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/kn/_lib/localize/index.js
var eraValues = {
    narrow: ["\u0C95\u0CCD\u0CB0\u0CBF.\u0CAA\u0CC2", "\u0C95\u0CCD\u0CB0\u0CBF.\u0CB6"],
    abbreviated: ["\u0C95\u0CCD\u0CB0\u0CBF.\u0CAA\u0CC2", "\u0C95\u0CCD\u0CB0\u0CBF.\u0CB6"],
    // CLDR #1618, #1620
    wide: ["\u0C95\u0CCD\u0CB0\u0CBF\u0CB8\u0CCD\u0CA4 \u0CAA\u0CC2\u0CB0\u0CCD\u0CB5", "\u0C95\u0CCD\u0CB0\u0CBF\u0CB8\u0CCD\u0CA4 \u0CB6\u0C95"]
    // CLDR #1614, #1616
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["\u0CA4\u0CCD\u0CB0\u0CC8 1", "\u0CA4\u0CCD\u0CB0\u0CC8 2", "\u0CA4\u0CCD\u0CB0\u0CC8 3", "\u0CA4\u0CCD\u0CB0\u0CC8 4"],
    // CLDR #1630 - #1638
    wide: ["1\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "2\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "3\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "4\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95"]
    // CLDR #1622 - #1629
};
var monthValues = {
    narrow: ["\u0C9C", "\u0CAB\u0CC6", "\u0CAE\u0CBE", "\u0C8F", "\u0CAE\u0CC7", "\u0C9C\u0CC2", "\u0C9C\u0CC1", "\u0C86", "\u0CB8\u0CC6", "\u0C85", "\u0CA8", "\u0CA1\u0CBF"],
    abbreviated: ["\u0C9C\u0CA8", "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0", "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD", "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF", "\u0CAE\u0CC7", "\u0C9C\u0CC2\u0CA8\u0CCD", "\u0C9C\u0CC1\u0CB2\u0CC8", "\u0C86\u0C97", "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82", "\u0C85\u0C95\u0CCD\u0C9F\u0CCB", "\u0CA8\u0CB5\u0CC6\u0C82", "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82"],
    wide: ["\u0C9C\u0CA8\u0CB5\u0CB0\u0CBF", "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0\u0CB5\u0CB0\u0CBF", "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD", "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD", "\u0CAE\u0CC7", "\u0C9C\u0CC2\u0CA8\u0CCD", "\u0C9C\u0CC1\u0CB2\u0CC8", "\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD", "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82\u0CAC\u0CB0\u0CCD", "\u0C85\u0C95\u0CCD\u0C9F\u0CCB\u0CAC\u0CB0\u0CCD", "\u0CA8\u0CB5\u0CC6\u0C82\u0CAC\u0CB0\u0CCD", "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82\u0CAC\u0CB0\u0CCD"]
};
var dayValues = {
    narrow: ["\u0CAD\u0CBE", "\u0CB8\u0CCB", "\u0CAE\u0C82", "\u0CAC\u0CC1", "\u0C97\u0CC1", "\u0CB6\u0CC1", "\u0CB6"],
    short: ["\u0CAD\u0CBE\u0CA8\u0CC1", "\u0CB8\u0CCB\u0CAE", "\u0CAE\u0C82\u0C97\u0CB3", "\u0CAC\u0CC1\u0CA7", "\u0C97\u0CC1\u0CB0\u0CC1", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0", "\u0CB6\u0CA8\u0CBF"],
    abbreviated: ["\u0CAD\u0CBE\u0CA8\u0CC1", "\u0CB8\u0CCB\u0CAE", "\u0CAE\u0C82\u0C97\u0CB3", "\u0CAC\u0CC1\u0CA7", "\u0C97\u0CC1\u0CB0\u0CC1", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0", "\u0CB6\u0CA8\u0CBF"],
    wide: ["\u0CAD\u0CBE\u0CA8\u0CC1\u0CB5\u0CBE\u0CB0", "\u0CB8\u0CCB\u0CAE\u0CB5\u0CBE\u0CB0", "\u0CAE\u0C82\u0C97\u0CB3\u0CB5\u0CBE\u0CB0", "\u0CAC\u0CC1\u0CA7\u0CB5\u0CBE\u0CB0", "\u0C97\u0CC1\u0CB0\u0CC1\u0CB5\u0CBE\u0CB0", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0\u0CB5\u0CBE\u0CB0", "\u0CB6\u0CA8\u0CBF\u0CB5\u0CBE\u0CB0"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8",
        pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8",
        midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
        noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8",
        morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
        afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8",
        evening: "\u0CB8\u0C82\u0C9C\u0CC6",
        night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
    },
    abbreviated: {
        am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8",
        pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8",
        midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
        noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
        morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
        afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
        evening: "\u0CB8\u0C82\u0C9C\u0CC6",
        night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
    },
    wide: {
        am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8",
        pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8",
        midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
        noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
        morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
        afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
        evening: "\u0CB8\u0C82\u0C9C\u0CC6",
        night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u0CAA\u0CC2",
        pm: "\u0C85",
        midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
        noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
        morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
        afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
        evening: "\u0CB8\u0C82\u0C9C\u0CC6",
        night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
    },
    abbreviated: {
        am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8",
        pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8",
        midnight: "\u0CAE\u0CA7\u0CCD\u0CAF \u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
        noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
        morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
        afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
        evening: "\u0CB8\u0C82\u0C9C\u0CC6",
        night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
    },
    wide: {
        am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8",
        pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8",
        midnight: "\u0CAE\u0CA7\u0CCD\u0CAF \u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
        noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
        morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
        afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
        evening: "\u0CB8\u0C82\u0C9C\u0CC6",
        night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    return number + "\u0CA8\u0CC7";
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
// node_modules/date-fns/esm/locale/kn/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(ನೇ|ನೆ)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(ಕ್ರಿ.ಪೂ|ಕ್ರಿ.ಶ)/i,
    abbreviated: /^(ಕ್ರಿ\.?\s?ಪೂ\.?|ಕ್ರಿ\.?\s?ಶ\.?|ಪ್ರ\.?\s?ಶ\.?)/i,
    wide: /^(ಕ್ರಿಸ್ತ ಪೂರ್ವ|ಕ್ರಿಸ್ತ ಶಕ|ಪ್ರಸಕ್ತ ಶಕ)/i
};
var parseEraPatterns = {
    any: [/^ಪೂ/i, /^(ಶ|ಪ್ರ)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^ತ್ರೈ[1234]|ತ್ರೈ [1234]| [1234]ತ್ರೈ/i,
    wide: /^[1234](ನೇ)? ತ್ರೈಮಾಸಿಕ/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^(ಜೂ|ಜು|ಜ|ಫೆ|ಮಾ|ಏ|ಮೇ|ಆ|ಸೆ|ಅ|ನ|ಡಿ)/i,
    abbreviated: /^(ಜನ|ಫೆಬ್ರ|ಮಾರ್ಚ್|ಏಪ್ರಿ|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗ|ಸೆಪ್ಟೆಂ|ಅಕ್ಟೋ|ನವೆಂ|ಡಿಸೆಂ)/i,
    wide: /^(ಜನವರಿ|ಫೆಬ್ರವರಿ|ಮಾರ್ಚ್|ಏಪ್ರಿಲ್|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗಸ್ಟ್|ಸೆಪ್ಟೆಂಬರ್|ಅಕ್ಟೋಬರ್|ನವೆಂಬರ್|ಡಿಸೆಂಬರ್)/i
};
var parseMonthPatterns = {
    narrow: [/^ಜ$/i, /^ಫೆ/i, /^ಮಾ/i, /^ಏ/i, /^ಮೇ/i, /^ಜೂ/i, /^ಜು$/i, /^ಆ/i, /^ಸೆ/i, /^ಅ/i, /^ನ/i, /^ಡಿ/i],
    any: [/^ಜನ/i, /^ಫೆ/i, /^ಮಾ/i, /^ಏ/i, /^ಮೇ/i, /^ಜೂನ್/i, /^ಜುಲೈ/i, /^ಆ/i, /^ಸೆ/i, /^ಅ/i, /^ನ/i, /^ಡಿ/i]
};
var matchDayPatterns = {
    narrow: /^(ಭಾ|ಸೋ|ಮ|ಬು|ಗು|ಶು|ಶ)/i,
    short: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,
    abbreviated: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,
    wide: /^(ಭಾನುವಾರ|ಸೋಮವಾರ|ಮಂಗಳವಾರ|ಬುಧವಾರ|ಗುರುವಾರ|ಶುಕ್ರವಾರ|ಶನಿವಾರ)/i
};
var parseDayPatterns = {
    narrow: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i],
    any: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(ಪೂ|ಅ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i,
    any: /^(ಪೂರ್ವಾಹ್ನ|ಅಪರಾಹ್ನ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^ಪೂ/i,
        pm: /^ಅ/i,
        midnight: /ಮಧ್ಯರಾತ್ರಿ/i,
        noon: /ಮಧ್ಯಾನ್ಹ/i,
        morning: /ಬೆಳಗ್ಗೆ/i,
        afternoon: /ಮಧ್ಯಾನ್ಹ/i,
        evening: /ಸಂಜೆ/i,
        night: /ರಾತ್ರಿ/i
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
// node_modules/date-fns/esm/locale/kn/index.js
var locale = {
    code: "kn",
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
var kn_default = locale;
export { kn_default };
