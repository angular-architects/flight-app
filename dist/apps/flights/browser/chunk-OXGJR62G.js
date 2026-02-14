import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/te/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        standalone: {
            one: "\u0C38\u0C46\u0C15\u0C28\u0C41 \u0C15\u0C28\u0C4D\u0C28\u0C3E \u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35",
            other: "{{count}} \u0C38\u0C46\u0C15\u0C28\u0C4D\u0C32 \u0C15\u0C28\u0C4D\u0C28\u0C3E \u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35"
        },
        withPreposition: {
            one: "\u0C38\u0C46\u0C15\u0C28\u0C41",
            other: "{{count}} \u0C38\u0C46\u0C15\u0C28\u0C4D\u0C32"
        }
    },
    xSeconds: {
        standalone: {
            one: "\u0C12\u0C15 \u0C38\u0C46\u0C15\u0C28\u0C41",
            // CLDR #1314
            other: "{{count}} \u0C38\u0C46\u0C15\u0C28\u0C4D\u0C32"
        },
        withPreposition: {
            one: "\u0C12\u0C15 \u0C38\u0C46\u0C15\u0C28\u0C41",
            other: "{{count}} \u0C38\u0C46\u0C15\u0C28\u0C4D\u0C32"
        }
    },
    halfAMinute: {
        standalone: "\u0C05\u0C30 \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C02",
        withPreposition: "\u0C05\u0C30 \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C02"
    },
    lessThanXMinutes: {
        standalone: {
            one: "\u0C12\u0C15 \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C02 \u0C15\u0C28\u0C4D\u0C28\u0C3E \u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35",
            other: "{{count}} \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C3E\u0C32 \u0C15\u0C28\u0C4D\u0C28\u0C3E \u0C24\u0C15\u0C4D\u0C15\u0C41\u0C35"
        },
        withPreposition: {
            one: "\u0C12\u0C15 \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C02",
            other: "{{count}} \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C3E\u0C32"
        }
    },
    xMinutes: {
        standalone: {
            one: "\u0C12\u0C15 \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C02",
            // CLDR #1311
            other: "{{count}} \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C3E\u0C32\u0C41"
        },
        withPreposition: {
            one: "\u0C12\u0C15 \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C02",
            // CLDR #1311
            other: "{{count}} \u0C28\u0C3F\u0C2E\u0C3F\u0C37\u0C3E\u0C32"
        }
    },
    aboutXHours: {
        standalone: {
            one: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 \u0C12\u0C15 \u0C17\u0C02\u0C1F",
            other: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {{count}} \u0C17\u0C02\u0C1F\u0C32\u0C41"
        },
        withPreposition: {
            one: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 \u0C12\u0C15 \u0C17\u0C02\u0C1F",
            other: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {{count}} \u0C17\u0C02\u0C1F\u0C32"
        }
    },
    xHours: {
        standalone: {
            one: "\u0C12\u0C15 \u0C17\u0C02\u0C1F",
            // CLDR #1308
            other: "{{count}} \u0C17\u0C02\u0C1F\u0C32\u0C41"
        },
        withPreposition: {
            one: "\u0C12\u0C15 \u0C17\u0C02\u0C1F",
            other: "{{count}} \u0C17\u0C02\u0C1F\u0C32"
        }
    },
    xDays: {
        standalone: {
            one: "\u0C12\u0C15 \u0C30\u0C4B\u0C1C\u0C41",
            // CLDR #1292
            other: "{{count}} \u0C30\u0C4B\u0C1C\u0C41\u0C32\u0C41"
        },
        withPreposition: {
            one: "\u0C12\u0C15 \u0C30\u0C4B\u0C1C\u0C41",
            other: "{{count}} \u0C30\u0C4B\u0C1C\u0C41\u0C32"
        }
    },
    aboutXWeeks: {
        standalone: {
            one: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 \u0C12\u0C15 \u0C35\u0C3E\u0C30\u0C02",
            other: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {{count}} \u0C35\u0C3E\u0C30\u0C3E\u0C32\u0C41"
        },
        withPreposition: {
            one: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 \u0C12\u0C15 \u0C35\u0C3E\u0C30\u0C02",
            other: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {{count}} \u0C35\u0C3E\u0C30\u0C3E\u0C32\u0C32"
        }
    },
    xWeeks: {
        standalone: {
            one: "\u0C12\u0C15 \u0C35\u0C3E\u0C30\u0C02",
            other: "{{count}} \u0C35\u0C3E\u0C30\u0C3E\u0C32\u0C41"
        },
        withPreposition: {
            one: "\u0C12\u0C15 \u0C35\u0C3E\u0C30\u0C02",
            other: "{{count}} \u0C35\u0C3E\u0C30\u0C3E\u0C32\u0C32"
        }
    },
    aboutXMonths: {
        standalone: {
            one: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 \u0C12\u0C15 \u0C28\u0C46\u0C32",
            other: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {{count}} \u0C28\u0C46\u0C32\u0C32\u0C41"
        },
        withPreposition: {
            one: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 \u0C12\u0C15 \u0C28\u0C46\u0C32",
            other: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {{count}} \u0C28\u0C46\u0C32\u0C32"
        }
    },
    xMonths: {
        standalone: {
            one: "\u0C12\u0C15 \u0C28\u0C46\u0C32",
            // CLDR #1281
            other: "{{count}} \u0C28\u0C46\u0C32\u0C32\u0C41"
        },
        withPreposition: {
            one: "\u0C12\u0C15 \u0C28\u0C46\u0C32",
            other: "{{count}} \u0C28\u0C46\u0C32\u0C32"
        }
    },
    aboutXYears: {
        standalone: {
            one: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 \u0C12\u0C15 \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C02",
            other: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {{count}} \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C3E\u0C32\u0C41"
        },
        withPreposition: {
            one: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 \u0C12\u0C15 \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C02",
            other: "\u0C38\u0C41\u0C2E\u0C3E\u0C30\u0C41 {{count}} \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C3E\u0C32"
        }
    },
    xYears: {
        standalone: {
            one: "\u0C12\u0C15 \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C02",
            // CLDR #1275
            other: "{{count}} \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C3E\u0C32\u0C41"
        },
        withPreposition: {
            one: "\u0C12\u0C15 \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C02",
            other: "{{count}} \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C3E\u0C32"
        }
    },
    overXYears: {
        standalone: {
            one: "\u0C12\u0C15 \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C02 \u0C2A\u0C48\u0C17\u0C3E",
            other: "{{count}} \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C3E\u0C32\u0C15\u0C41 \u0C2A\u0C48\u0C17\u0C3E"
        },
        withPreposition: {
            one: "\u0C12\u0C15 \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C02",
            other: "{{count}} \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C3E\u0C32"
        }
    },
    almostXYears: {
        standalone: {
            one: "\u0C26\u0C3E\u0C26\u0C3E\u0C2A\u0C41 \u0C12\u0C15 \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C02",
            other: "\u0C26\u0C3E\u0C26\u0C3E\u0C2A\u0C41 {{count}} \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C3E\u0C32\u0C41"
        },
        withPreposition: {
            one: "\u0C26\u0C3E\u0C26\u0C3E\u0C2A\u0C41 \u0C12\u0C15 \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C02",
            other: "\u0C26\u0C3E\u0C26\u0C3E\u0C2A\u0C41 {{count}} \u0C38\u0C02\u0C35\u0C24\u0C4D\u0C38\u0C30\u0C3E\u0C32"
        }
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var result;
    var tokenValue = options !== null && options !== void 0 && options.addSuffix ? formatDistanceLocale[token].withPreposition : formatDistanceLocale[token].standalone;
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
            return result + "\u0C32\u0C4B";
        }
        else {
            return result + " \u0C15\u0C4D\u0C30\u0C3F\u0C24\u0C02";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/te/_lib/formatLong/index.js
var dateFormats = {
    full: "d, MMMM y, EEEE",
    long: "d MMMM, y",
    medium: "d MMM, y",
    short: "dd-MM-yy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} {{time}}'\u0C15\u0C3F'",
    long: "{{date}} {{time}}'\u0C15\u0C3F'",
    medium: "{{date}} {{time}}",
    short: "{{date}} {{time}}"
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
// node_modules/date-fns/esm/locale/te/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\u0C17\u0C24' eeee p",
    // CLDR #1384
    yesterday: "'\u0C28\u0C3F\u0C28\u0C4D\u0C28' p",
    // CLDR #1393
    today: "'\u0C08 \u0C30\u0C4B\u0C1C\u0C41' p",
    // CLDR #1394
    tomorrow: "'\u0C30\u0C47\u0C2A\u0C41' p",
    // CLDR #1395
    nextWeek: "'\u0C24\u0C26\u0C41\u0C2A\u0C30\u0C3F' eeee p",
    // CLDR #1386
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/te/_lib/localize/index.js
var eraValues = {
    narrow: ["\u0C15\u0C4D\u0C30\u0C40.\u0C2A\u0C42.", "\u0C15\u0C4D\u0C30\u0C40.\u0C36."],
    abbreviated: ["\u0C15\u0C4D\u0C30\u0C40.\u0C2A\u0C42.", "\u0C15\u0C4D\u0C30\u0C40.\u0C36."],
    wide: ["\u0C15\u0C4D\u0C30\u0C40\u0C38\u0C4D\u0C24\u0C41 \u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C02", "\u0C15\u0C4D\u0C30\u0C40\u0C38\u0C4D\u0C24\u0C41\u0C36\u0C15\u0C02"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["\u0C24\u0C4D\u0C30\u0C481", "\u0C24\u0C4D\u0C30\u0C482", "\u0C24\u0C4D\u0C30\u0C483", "\u0C24\u0C4D\u0C30\u0C484"],
    wide: ["1\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02", "2\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02", "3\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02", "4\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02"]
};
var monthValues = {
    narrow: ["\u0C1C", "\u0C2B\u0C3F", "\u0C2E\u0C3E", "\u0C0F", "\u0C2E\u0C47", "\u0C1C\u0C42", "\u0C1C\u0C41", "\u0C06", "\u0C38\u0C46", "\u0C05", "\u0C28", "\u0C21\u0C3F"],
    abbreviated: ["\u0C1C\u0C28", "\u0C2B\u0C3F\u0C2C\u0C4D\u0C30", "\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C3F", "\u0C0F\u0C2A\u0C4D\u0C30\u0C3F", "\u0C2E\u0C47", "\u0C1C\u0C42\u0C28\u0C4D", "\u0C1C\u0C41\u0C32\u0C48", "\u0C06\u0C17", "\u0C38\u0C46\u0C2A\u0C4D\u0C1F\u0C46\u0C02", "\u0C05\u0C15\u0C4D\u0C1F\u0C4B", "\u0C28\u0C35\u0C02", "\u0C21\u0C3F\u0C38\u0C46\u0C02"],
    wide: ["\u0C1C\u0C28\u0C35\u0C30\u0C3F", "\u0C2B\u0C3F\u0C2C\u0C4D\u0C30\u0C35\u0C30\u0C3F", "\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C3F", "\u0C0F\u0C2A\u0C4D\u0C30\u0C3F\u0C32\u0C4D", "\u0C2E\u0C47", "\u0C1C\u0C42\u0C28\u0C4D", "\u0C1C\u0C41\u0C32\u0C48", "\u0C06\u0C17\u0C38\u0C4D\u0C1F\u0C41", "\u0C38\u0C46\u0C2A\u0C4D\u0C1F\u0C46\u0C02\u0C2C\u0C30\u0C4D", "\u0C05\u0C15\u0C4D\u0C1F\u0C4B\u0C2C\u0C30\u0C4D", "\u0C28\u0C35\u0C02\u0C2C\u0C30\u0C4D", "\u0C21\u0C3F\u0C38\u0C46\u0C02\u0C2C\u0C30\u0C4D"]
};
var dayValues = {
    narrow: ["\u0C06", "\u0C38\u0C4B", "\u0C2E", "\u0C2C\u0C41", "\u0C17\u0C41", "\u0C36\u0C41", "\u0C36"],
    short: ["\u0C06\u0C26\u0C3F", "\u0C38\u0C4B\u0C2E", "\u0C2E\u0C02\u0C17\u0C33", "\u0C2C\u0C41\u0C27", "\u0C17\u0C41\u0C30\u0C41", "\u0C36\u0C41\u0C15\u0C4D\u0C30", "\u0C36\u0C28\u0C3F"],
    abbreviated: ["\u0C06\u0C26\u0C3F", "\u0C38\u0C4B\u0C2E", "\u0C2E\u0C02\u0C17\u0C33", "\u0C2C\u0C41\u0C27", "\u0C17\u0C41\u0C30\u0C41", "\u0C36\u0C41\u0C15\u0C4D\u0C30", "\u0C36\u0C28\u0C3F"],
    wide: ["\u0C06\u0C26\u0C3F\u0C35\u0C3E\u0C30\u0C02", "\u0C38\u0C4B\u0C2E\u0C35\u0C3E\u0C30\u0C02", "\u0C2E\u0C02\u0C17\u0C33\u0C35\u0C3E\u0C30\u0C02", "\u0C2C\u0C41\u0C27\u0C35\u0C3E\u0C30\u0C02", "\u0C17\u0C41\u0C30\u0C41\u0C35\u0C3E\u0C30\u0C02", "\u0C36\u0C41\u0C15\u0C4D\u0C30\u0C35\u0C3E\u0C30\u0C02", "\u0C36\u0C28\u0C3F\u0C35\u0C3E\u0C30\u0C02"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F",
        noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        morning: "\u0C09\u0C26\u0C2F\u0C02",
        afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02",
        night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F"
    },
    abbreviated: {
        am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F",
        noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        morning: "\u0C09\u0C26\u0C2F\u0C02",
        afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02",
        night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F"
    },
    wide: {
        am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F",
        noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        morning: "\u0C09\u0C26\u0C2F\u0C02",
        afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02",
        night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F",
        noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        morning: "\u0C09\u0C26\u0C2F\u0C02",
        afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02",
        night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F"
    },
    abbreviated: {
        am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F",
        noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        morning: "\u0C09\u0C26\u0C2F\u0C02",
        afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02",
        night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F"
    },
    wide: {
        am: "\u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        pm: "\u0C05\u0C2A\u0C30\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        midnight: "\u0C05\u0C30\u0C4D\u0C27\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F",
        noon: "\u0C2E\u0C3F\u0C1F\u0C4D\u0C1F\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        morning: "\u0C09\u0C26\u0C2F\u0C02",
        afternoon: "\u0C2E\u0C27\u0C4D\u0C2F\u0C3E\u0C39\u0C4D\u0C28\u0C02",
        evening: "\u0C38\u0C3E\u0C2F\u0C02\u0C24\u0C4D\u0C30\u0C02",
        night: "\u0C30\u0C3E\u0C24\u0C4D\u0C30\u0C3F"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    return number + "\u0C35";
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
// node_modules/date-fns/esm/locale/te/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(వ)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(క్రీ\.పూ\.|క్రీ\.శ\.)/i,
    abbreviated: /^(క్రీ\.?\s?పూ\.?|ప్ర\.?\s?శ\.?\s?పూ\.?|క్రీ\.?\s?శ\.?|సా\.?\s?శ\.?)/i,
    wide: /^(క్రీస్తు పూర్వం|ప్రస్తుత శకానికి పూర్వం|క్రీస్తు శకం|ప్రస్తుత శకం)/i
};
var parseEraPatterns = {
    any: [/^(పూ|శ)/i, /^సా/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^త్రై[1234]/i,
    wide: /^[1234](వ)? త్రైమాసికం/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^(జూ|జు|జ|ఫి|మా|ఏ|మే|ఆ|సె|అ|న|డి)/i,
    abbreviated: /^(జన|ఫిబ్ర|మార్చి|ఏప్రి|మే|జూన్|జులై|ఆగ|సెప్|అక్టో|నవ|డిసె)/i,
    wide: /^(జనవరి|ఫిబ్రవరి|మార్చి|ఏప్రిల్|మే|జూన్|జులై|ఆగస్టు|సెప్టెంబర్|అక్టోబర్|నవంబర్|డిసెంబర్)/i
};
var parseMonthPatterns = {
    narrow: [/^జ/i, /^ఫి/i, /^మా/i, /^ఏ/i, /^మే/i, /^జూ/i, /^జు/i, /^ఆ/i, /^సె/i, /^అ/i, /^న/i, /^డి/i],
    any: [/^జన/i, /^ఫి/i, /^మా/i, /^ఏ/i, /^మే/i, /^జూన్/i, /^జులై/i, /^ఆగ/i, /^సె/i, /^అ/i, /^న/i, /^డి/i]
};
var matchDayPatterns = {
    narrow: /^(ఆ|సో|మ|బు|గు|శు|శ)/i,
    short: /^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,
    abbreviated: /^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,
    wide: /^(ఆదివారం|సోమవారం|మంగళవారం|బుధవారం|గురువారం|శుక్రవారం|శనివారం)/i
};
var parseDayPatterns = {
    narrow: [/^ఆ/i, /^సో/i, /^మ/i, /^బు/i, /^గు/i, /^శు/i, /^శ/i],
    any: [/^ఆది/i, /^సోమ/i, /^మం/i, /^బుధ/i, /^గురు/i, /^శుక్ర/i, /^శని/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i,
    any: /^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^పూర్వాహ్నం/i,
        pm: /^అపరాహ్నం/i,
        midnight: /^అర్ధ/i,
        noon: /^మిట్ట/i,
        morning: /ఉదయం/i,
        afternoon: /మధ్యాహ్నం/i,
        evening: /సాయంత్రం/i,
        night: /రాత్రి/i
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
// node_modules/date-fns/esm/locale/te/index.js
var locale = {
    code: "te",
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
var te_default = locale;
export { te_default };
