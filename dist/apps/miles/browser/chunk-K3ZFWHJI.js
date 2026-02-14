import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/ta/_lib/formatDistance/index.js
function isPluralType(val) {
    return val.one !== void 0;
}
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: {
            default: "\u0B92\u0BB0\u0BC1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BC1 \u0B95\u0BC1\u0BB1\u0BC8\u0BB5\u0BBE\u0B95",
            in: "\u0B92\u0BB0\u0BC1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BC1\u0BB3\u0BCD",
            ago: "\u0B92\u0BB0\u0BC1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "{{count}} \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0B95\u0BC1\u0BB1\u0BC8\u0BB5\u0BBE\u0B95",
            in: "{{count}} \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BB3\u0BCD",
            ago: "{{count}} \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    xSeconds: {
        one: {
            default: "1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF",
            in: "1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD",
            ago: "1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "{{count}} \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BCD",
            in: "{{count}} \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "{{count}} \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    halfAMinute: {
        default: "\u0B85\u0BB0\u0BC8 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD",
        in: "\u0B85\u0BB0\u0BC8 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
        ago: "\u0B85\u0BB0\u0BC8 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    lessThanXMinutes: {
        one: {
            default: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0B95\u0BC1\u0BB1\u0BC8\u0BB5\u0BBE\u0B95",
            in: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BB3\u0BCD",
            ago: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0B95\u0BC1\u0BB1\u0BC8\u0BB5\u0BBE\u0B95",
            in: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BB3\u0BCD",
            ago: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    xMinutes: {
        one: {
            default: "1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD",
            in: "1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
            ago: "1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
            in: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    aboutXHours: {
        one: {
            default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
            in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
            ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
            in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1",
            ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD"
        }
    },
    xHours: {
        one: {
            default: "1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
            in: "1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
            ago: "1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "{{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
            in: "{{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
            ago: "{{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    xDays: {
        one: {
            default: "1 \u0BA8\u0BBE\u0BB3\u0BCD",
            in: "1 \u0BA8\u0BBE\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "1 \u0BA8\u0BBE\u0BB3\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "{{count}} \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
            in: "{{count}} \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "{{count}} \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    aboutXWeeks: {
        one: {
            default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD",
            in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BB5\u0BBE\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
            ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
            in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    xWeeks: {
        one: {
            default: "1 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD",
            in: "1 \u0BB5\u0BBE\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
            ago: "1 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "{{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
            in: "{{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "{{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    aboutXMonths: {
        one: {
            default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BBE\u0BA4\u0BAE\u0BCD",
            in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BBE\u0BA4\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
            ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BBE\u0BA4\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
            in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    xMonths: {
        one: {
            default: "1 \u0BAE\u0BBE\u0BA4\u0BAE\u0BCD",
            in: "1 \u0BAE\u0BBE\u0BA4\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
            ago: "1 \u0BAE\u0BBE\u0BA4\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "{{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
            in: "{{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "{{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    aboutXYears: {
        one: {
            default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD",
            in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0B86\u0BA3\u0BCD\u0B9F\u0BBF\u0BB2\u0BCD",
            ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
            in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    xYears: {
        one: {
            default: "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD",
            in: "1 \u0B86\u0BA3\u0BCD\u0B9F\u0BBF\u0BB2\u0BCD",
            ago: "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
            in: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    overXYears: {
        one: {
            default: "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC7\u0BB2\u0BCD",
            in: "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BAE\u0BC7\u0BB2\u0BBE\u0B95",
            ago: "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BAE\u0BC7\u0BB2\u0BBE\u0B95",
            in: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    },
    almostXYears: {
        one: {
            default: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F 1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD",
            in: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F 1 \u0B86\u0BA3\u0BCD\u0B9F\u0BBF\u0BB2\u0BCD",
            ago: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F 1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        },
        other: {
            default: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
            in: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
            ago: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
        }
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var tense = options !== null && options !== void 0 && options.addSuffix ? options.comparison && options.comparison > 0 ? "in" : "ago" : "default";
    var tokenValue = formatDistanceLocale[token];
    if (!isPluralType(tokenValue))
        return tokenValue[tense];
    if (count === 1) {
        return tokenValue.one[tense];
    }
    else {
        return tokenValue.other[tense].replace("{{count}}", String(count));
    }
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/ta/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d MMMM, y",
    long: "d MMMM, y",
    medium: "d MMM, y",
    short: "d/M/yy"
};
var timeFormats = {
    full: "a h:mm:ss zzzz",
    long: "a h:mm:ss z",
    medium: "a h:mm:ss",
    short: "a h:mm"
};
var dateTimeFormats = {
    full: "{{date}} {{time}}",
    long: "{{date}} {{time}}",
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
// node_modules/date-fns/esm/locale/ta/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\u0B95\u0B9F\u0BA8\u0BCD\u0BA4' eeee p '\u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1'",
    yesterday: "'\u0BA8\u0BC7\u0BB1\u0BCD\u0BB1\u0BC1 ' p '\u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1'",
    today: "'\u0B87\u0BA9\u0BCD\u0BB1\u0BC1 ' p '\u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1'",
    tomorrow: "'\u0BA8\u0BBE\u0BB3\u0BC8 ' p '\u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1'",
    nextWeek: "eeee p '\u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1'",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/ta/_lib/localize/index.js
var eraValues = {
    narrow: ["\u0B95\u0BBF.\u0BAE\u0BC1.", "\u0B95\u0BBF.\u0BAA\u0BBF."],
    abbreviated: ["\u0B95\u0BBF.\u0BAE\u0BC1.", "\u0B95\u0BBF.\u0BAA\u0BBF."],
    // CLDR #1624, #1626
    wide: ["\u0B95\u0BBF\u0BB1\u0BBF\u0BB8\u0BCD\u0BA4\u0BC1\u0BB5\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "\u0B85\u0BA9\u0BCD\u0BA9\u0BCB \u0B9F\u0BCB\u0BAE\u0BBF\u0BA9\u0BBF"]
    // CLDR #1620, #1622
};
var quarterValues = {
    // CLDR #1644 - #1647
    narrow: ["1", "2", "3", "4"],
    // CLDR #1636 - #1639
    abbreviated: ["\u0B95\u0BBE\u0BB2\u0BBE.1", "\u0B95\u0BBE\u0BB2\u0BBE.2", "\u0B95\u0BBE\u0BB2\u0BBE.3", "\u0B95\u0BBE\u0BB2\u0BBE.4"],
    // CLDR #1628 - #1631
    wide: ["\u0B92\u0BA9\u0BCD\u0BB1\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1", "\u0B87\u0BB0\u0BA3\u0BCD\u0B9F\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1", "\u0BAE\u0BC2\u0BA9\u0BCD\u0BB1\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1", "\u0BA8\u0BBE\u0BA9\u0BCD\u0B95\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1"]
};
var monthValues = {
    // CLDR #700 - #711
    narrow: ["\u0B9C", "\u0BAA\u0BBF", "\u0BAE\u0BBE", "\u0B8F", "\u0BAE\u0BC7", "\u0B9C\u0BC2", "\u0B9C\u0BC2", "\u0B86", "\u0B9A\u0BC6", "\u0B85", "\u0BA8", "\u0B9F\u0BBF"],
    // CLDR #1676 - #1687
    abbreviated: ["\u0B9C\u0BA9.", "\u0BAA\u0BBF\u0BAA\u0BCD.", "\u0BAE\u0BBE\u0BB0\u0BCD.", "\u0B8F\u0BAA\u0BCD.", "\u0BAE\u0BC7", "\u0B9C\u0BC2\u0BA9\u0BCD", "\u0B9C\u0BC2\u0BB2\u0BC8", "\u0B86\u0B95.", "\u0B9A\u0BC6\u0BAA\u0BCD.", "\u0B85\u0B95\u0BCD.", "\u0BA8\u0BB5.", "\u0B9F\u0BBF\u0B9A."],
    // CLDR #1652 - #1663
    wide: ["\u0B9C\u0BA9\u0BB5\u0BB0\u0BBF",
        // January
        "\u0BAA\u0BBF\u0BAA\u0BCD\u0BB0\u0BB5\u0BB0\u0BBF",
        // February
        "\u0BAE\u0BBE\u0BB0\u0BCD\u0B9A\u0BCD",
        // March
        "\u0B8F\u0BAA\u0BCD\u0BB0\u0BB2\u0BCD",
        // April
        "\u0BAE\u0BC7",
        // May
        "\u0B9C\u0BC2\u0BA9\u0BCD",
        // June
        "\u0B9C\u0BC2\u0BB2\u0BC8",
        // July
        "\u0B86\u0B95\u0BB8\u0BCD\u0B9F\u0BCD",
        // August
        "\u0B9A\u0BC6\u0BAA\u0BCD\u0B9F\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD",
        // September
        "\u0B85\u0B95\u0BCD\u0B9F\u0BCB\u0BAA\u0BB0\u0BCD",
        // October
        "\u0BA8\u0BB5\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD",
        // November
        "\u0B9F\u0BBF\u0B9A\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD"
        // December
    ]
};
var dayValues = {
    // CLDR #1766 - #1772
    narrow: ["\u0B9E\u0BBE", "\u0BA4\u0BBF", "\u0B9A\u0BC6", "\u0BAA\u0BC1", "\u0BB5\u0BBF", "\u0BB5\u0BC6", "\u0B9A"],
    // CLDR #1752 - #1758
    short: ["\u0B9E\u0BBE", "\u0BA4\u0BBF", "\u0B9A\u0BC6", "\u0BAA\u0BC1", "\u0BB5\u0BBF", "\u0BB5\u0BC6", "\u0B9A"],
    // CLDR #1738 - #1744
    abbreviated: ["\u0B9E\u0BBE\u0BAF\u0BBF.", "\u0BA4\u0BBF\u0B99\u0BCD.", "\u0B9A\u0BC6\u0BB5\u0BCD.", "\u0BAA\u0BC1\u0BA4.", "\u0BB5\u0BBF\u0BAF\u0BBE.", "\u0BB5\u0BC6\u0BB3\u0BCD.", "\u0B9A\u0BA9\u0BBF"],
    // CLDR #1724 - #1730
    wide: ["\u0B9E\u0BBE\u0BAF\u0BBF\u0BB1\u0BC1",
        // Sunday
        "\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
        // Monday
        "\u0B9A\u0BC6\u0BB5\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD",
        // Tuesday
        "\u0BAA\u0BC1\u0BA4\u0BA9\u0BCD",
        // Wednesday
        "\u0BB5\u0BBF\u0BAF\u0BBE\u0BB4\u0BA9\u0BCD",
        // Thursday
        "\u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF",
        // Friday
        "\u0B9A\u0BA9\u0BBF"
        // Saturday
    ]
};
var dayPeriodValues = {
    narrow: {
        am: "\u0BAE\u0BC1.\u0BAA",
        pm: "\u0BAA\u0BBF.\u0BAA",
        midnight: "\u0BA8\u0BB3\u0BCD.",
        noon: "\u0BA8\u0BA3\u0BCD.",
        morning: "\u0B95\u0BBE.",
        afternoon: "\u0BAE\u0BA4\u0BBF.",
        evening: "\u0BAE\u0BBE.",
        night: "\u0B87\u0BB0."
    },
    abbreviated: {
        am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1",
        noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        morning: "\u0B95\u0BBE\u0BB2\u0BC8",
        afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD",
        evening: "\u0BAE\u0BBE\u0BB2\u0BC8",
        night: "\u0B87\u0BB0\u0BB5\u0BC1"
    },
    wide: {
        am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1",
        noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        morning: "\u0B95\u0BBE\u0BB2\u0BC8",
        afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD",
        evening: "\u0BAE\u0BBE\u0BB2\u0BC8",
        night: "\u0B87\u0BB0\u0BB5\u0BC1"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u0BAE\u0BC1.\u0BAA",
        pm: "\u0BAA\u0BBF.\u0BAA",
        midnight: "\u0BA8\u0BB3\u0BCD.",
        noon: "\u0BA8\u0BA3\u0BCD.",
        morning: "\u0B95\u0BBE.",
        afternoon: "\u0BAE\u0BA4\u0BBF.",
        evening: "\u0BAE\u0BBE.",
        night: "\u0B87\u0BB0."
    },
    abbreviated: {
        am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1",
        noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        morning: "\u0B95\u0BBE\u0BB2\u0BC8",
        afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD",
        evening: "\u0BAE\u0BBE\u0BB2\u0BC8",
        night: "\u0B87\u0BB0\u0BB5\u0BC1"
    },
    wide: {
        am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1",
        noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
        morning: "\u0B95\u0BBE\u0BB2\u0BC8",
        afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD",
        evening: "\u0BAE\u0BBE\u0BB2\u0BC8",
        night: "\u0B87\u0BB0\u0BB5\u0BC1"
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
// node_modules/date-fns/esm/locale/ta/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(வது)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(கி.மு.|கி.பி.)/i,
    abbreviated: /^(கி\.?\s?மு\.?|கி\.?\s?பி\.?)/,
    wide: /^(கிறிஸ்துவுக்கு\sமுன்|அன்னோ\sடோமினி)/i
};
var parseEraPatterns = {
    any: [/கி\.?\s?மு\.?/, /கி\.?\s?பி\.?/]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^காலா.[1234]/i,
    wide: /^(ஒன்றாம்|இரண்டாம்|மூன்றாம்|நான்காம்) காலாண்டு/i
};
var parseQuarterPatterns = {
    narrow: [/1/i, /2/i, /3/i, /4/i],
    any: [/(1|காலா.1|ஒன்றாம்)/i, /(2|காலா.2|இரண்டாம்)/i, /(3|காலா.3|மூன்றாம்)/i, /(4|காலா.4|நான்காம்)/i]
};
var matchMonthPatterns = {
    narrow: /^(ஜ|பி|மா|ஏ|மே|ஜூ|ஆ|செ|அ|ந|டி)$/i,
    abbreviated: /^(ஜன.|பிப்.|மார்.|ஏப்.|மே|ஜூன்|ஜூலை|ஆக.|செப்.|அக்.|நவ.|டிச.)/i,
    wide: /^(ஜனவரி|பிப்ரவரி|மார்ச்|ஏப்ரல்|மே|ஜூன்|ஜூலை|ஆகஸ்ட்|செப்டம்பர்|அக்டோபர்|நவம்பர்|டிசம்பர்)/i
};
var parseMonthPatterns = {
    narrow: [/^ஜ$/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூ/i, /^ஜூ/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i],
    any: [/^ஜன/i, /^பி/i, /^மா/i, /^ஏ/i, /^மே/i, /^ஜூன்/i, /^ஜூலை/i, /^ஆ/i, /^செ/i, /^அ/i, /^ந/i, /^டி/i]
};
var matchDayPatterns = {
    narrow: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
    short: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
    abbreviated: /^(ஞாயி.|திங்.|செவ்.|புத.|வியா.|வெள்.|சனி)/i,
    wide: /^(ஞாயிறு|திங்கள்|செவ்வாய்|புதன்|வியாழன்|வெள்ளி|சனி)/i
};
var parseDayPatterns = {
    narrow: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i],
    any: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(மு.ப|பி.ப|நள்|நண்|காலை|மதியம்|மாலை|இரவு)/i,
    any: /^(மு.ப|பி.ப|முற்பகல்|பிற்பகல்|நள்ளிரவு|நண்பகல்|காலை|மதியம்|மாலை|இரவு)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^மு/i,
        pm: /^பி/i,
        midnight: /^நள்/i,
        noon: /^நண்/i,
        morning: /காலை/i,
        afternoon: /மதியம்/i,
        evening: /மாலை/i,
        night: /இரவு/i
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
// node_modules/date-fns/esm/locale/ta/index.js
var locale = {
    code: "ta",
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
var ta_default = locale;
export { ta_default };
