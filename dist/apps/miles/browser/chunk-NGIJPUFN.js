import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/mn/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u0441\u0435\u043A\u0443\u043D\u0434 \u0445\u04AF\u0440\u044D\u0445\u0433\u04AF\u0439",
        other: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0445\u04AF\u0440\u044D\u0445\u0433\u04AF\u0439"
    },
    xSeconds: {
        one: "1 \u0441\u0435\u043A\u0443\u043D\u0434",
        other: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
    },
    halfAMinute: "\u0445\u0430\u0433\u0430\u0441 \u043C\u0438\u043D\u0443\u0442",
    lessThanXMinutes: {
        one: "\u043C\u0438\u043D\u0443\u0442 \u0445\u04AF\u0440\u044D\u0445\u0433\u04AF\u0439",
        other: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u0445\u04AF\u0440\u044D\u0445\u0433\u04AF\u0439"
    },
    xMinutes: {
        one: "1 \u043C\u0438\u043D\u0443\u0442",
        other: "{{count}} \u043C\u0438\u043D\u0443\u0442"
    },
    aboutXHours: {
        one: "\u043E\u0439\u0440\u043E\u043B\u0446\u043E\u043E\u0433\u043E\u043E\u0440 1 \u0446\u0430\u0433",
        other: "\u043E\u0439\u0440\u043E\u043B\u0446\u043E\u043E\u0433\u043E\u043E\u0440 {{count}} \u0446\u0430\u0433"
    },
    xHours: {
        one: "1 \u0446\u0430\u0433",
        other: "{{count}} \u0446\u0430\u0433"
    },
    xDays: {
        one: "1 \u04E9\u0434\u04E9\u0440",
        other: "{{count}} \u04E9\u0434\u04E9\u0440"
    },
    aboutXWeeks: {
        one: "\u043E\u0439\u0440\u043E\u043B\u0446\u043E\u043E\u0433\u043E\u043E\u0440 1 \u0434\u043E\u043B\u043E\u043E \u0445\u043E\u043D\u043E\u0433",
        other: "\u043E\u0439\u0440\u043E\u043B\u0446\u043E\u043E\u0433\u043E\u043E\u0440 {{count}} \u0434\u043E\u043B\u043E\u043E \u0445\u043E\u043D\u043E\u0433"
    },
    xWeeks: {
        one: "1 \u0434\u043E\u043B\u043E\u043E \u0445\u043E\u043D\u043E\u0433",
        other: "{{count}} \u0434\u043E\u043B\u043E\u043E \u0445\u043E\u043D\u043E\u0433"
    },
    aboutXMonths: {
        one: "\u043E\u0439\u0440\u043E\u043B\u0446\u043E\u043E\u0433\u043E\u043E\u0440 1 \u0441\u0430\u0440",
        other: "\u043E\u0439\u0440\u043E\u043B\u0446\u043E\u043E\u0433\u043E\u043E\u0440 {{count}} \u0441\u0430\u0440"
    },
    xMonths: {
        one: "1 \u0441\u0430\u0440",
        other: "{{count}} \u0441\u0430\u0440"
    },
    aboutXYears: {
        one: "\u043E\u0439\u0440\u043E\u043B\u0446\u043E\u043E\u0433\u043E\u043E\u0440 1 \u0436\u0438\u043B",
        other: "\u043E\u0439\u0440\u043E\u043B\u0446\u043E\u043E\u0433\u043E\u043E\u0440 {{count}} \u0436\u0438\u043B"
    },
    xYears: {
        one: "1 \u0436\u0438\u043B",
        other: "{{count}} \u0436\u0438\u043B"
    },
    overXYears: {
        one: "1 \u0436\u0438\u043B \u0433\u0430\u0440\u0430\u043D",
        other: "{{count}} \u0436\u0438\u043B \u0433\u0430\u0440\u0430\u043D"
    },
    almostXYears: {
        one: "\u0431\u0430\u0440\u0430\u0433 1 \u0436\u0438\u043B",
        other: "\u0431\u0430\u0440\u0430\u0433 {{count}} \u0436\u0438\u043B"
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
        var words = result.split(" ");
        var lastword = words.pop();
        result = words.join(" ");
        switch (lastword) {
            case "\u0441\u0435\u043A\u0443\u043D\u0434":
                result += " \u0441\u0435\u043A\u0443\u043D\u0434\u0438\u0439\u043D";
                break;
            case "\u043C\u0438\u043D\u0443\u0442":
                result += " \u043C\u0438\u043D\u0443\u0442\u044B\u043D";
                break;
            case "\u0446\u0430\u0433":
                result += " \u0446\u0430\u0433\u0438\u0439\u043D";
                break;
            case "\u04E9\u0434\u04E9\u0440":
                result += " \u04E9\u0434\u0440\u0438\u0439\u043D";
                break;
            case "\u0441\u0430\u0440":
                result += " \u0441\u0430\u0440\u044B\u043D";
                break;
            case "\u0436\u0438\u043B":
                result += " \u0436\u0438\u043B\u0438\u0439\u043D";
                break;
            case "\u0445\u043E\u043D\u043E\u0433":
                result += " \u0445\u043E\u043D\u043E\u0433\u0438\u0439\u043D";
                break;
            case "\u0433\u0430\u0440\u0430\u043D":
                result += " \u0433\u0430\u0440\u0430\u043D\u044B";
                break;
            case "\u0445\u04AF\u0440\u044D\u0445\u0433\u04AF\u0439":
                result += " \u0445\u04AF\u0440\u044D\u0445\u0433\u04AF\u0439 \u0445\u0443\u0433\u0430\u0446\u0430\u0430\u043D\u044B";
                break;
            default:
                result += lastword + "-\u043D";
        }
        if (options.comparison && options.comparison > 0) {
            return result + " \u0434\u0430\u0440\u0430\u0430";
        }
        else {
            return result + " \u04E9\u043C\u043D\u04E9";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/mn/_lib/formatLong/index.js
var dateFormats = {
    full: "y '\u043E\u043D\u044B' MMMM'\u044B\u043D' d, EEEE '\u0433\u0430\u0440\u0430\u0433'",
    long: "y '\u043E\u043D\u044B' MMMM'\u044B\u043D' d",
    medium: "y '\u043E\u043D\u044B' MMM'\u044B\u043D' d",
    short: "y.MM.dd"
};
var timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
var dateTimeFormats = {
    full: "{{date}} {{time}}",
    long: "{{date}} {{time}}",
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
// node_modules/date-fns/esm/locale/mn/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\u04E9\u043D\u0433\u04E9\u0440\u0441\u04E9\u043D' eeee '\u0433\u0430\u0440\u0430\u0433\u0438\u0439\u043D' p '\u0446\u0430\u0433\u0442'",
    yesterday: "'\u04E9\u0447\u0438\u0433\u0434\u04E9\u0440' p '\u0446\u0430\u0433\u0442'",
    today: "'\u04E9\u043D\u04E9\u04E9\u0434\u04E9\u0440' p '\u0446\u0430\u0433\u0442'",
    tomorrow: "'\u043C\u0430\u0440\u0433\u0430\u0430\u0448' p '\u0446\u0430\u0433\u0442'",
    nextWeek: "'\u0438\u0440\u044D\u0445' eeee '\u0433\u0430\u0440\u0430\u0433\u0438\u0439\u043D' p '\u0446\u0430\u0433\u0442'",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/mn/_lib/localize/index.js
var eraValues = {
    narrow: ["\u041D\u0422\u04E8", "\u041D\u0422"],
    abbreviated: ["\u041D\u0422\u04E8", "\u041D\u0422"],
    wide: ["\u043D\u0438\u0439\u0442\u0438\u0439\u043D \u0442\u043E\u043E\u043B\u043B\u044B\u043D \u04E9\u043C\u043D\u04E9\u0445", "\u043D\u0438\u0439\u0442\u0438\u0439\u043D \u0442\u043E\u043E\u043B\u043B\u044B\u043D"]
};
var quarterValues = {
    narrow: ["I", "II", "III", "IV"],
    abbreviated: ["I \u0443\u043B\u0438\u0440\u0430\u043B", "II \u0443\u043B\u0438\u0440\u0430\u043B", "III \u0443\u043B\u0438\u0440\u0430\u043B", "IV \u0443\u043B\u0438\u0440\u0430\u043B"],
    wide: ["1-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B", "2-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B", "3-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B", "4-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B"]
};
var monthValues = {
    narrow: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"],
    abbreviated: ["1-\u0440 \u0441\u0430\u0440", "2-\u0440 \u0441\u0430\u0440", "3-\u0440 \u0441\u0430\u0440", "4-\u0440 \u0441\u0430\u0440", "5-\u0440 \u0441\u0430\u0440", "6-\u0440 \u0441\u0430\u0440", "7-\u0440 \u0441\u0430\u0440", "8-\u0440 \u0441\u0430\u0440", "9-\u0440 \u0441\u0430\u0440", "10-\u0440 \u0441\u0430\u0440", "11-\u0440 \u0441\u0430\u0440", "12-\u0440 \u0441\u0430\u0440"],
    wide: ["\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0414\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0417\u0443\u0440\u0433\u0430\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0414\u043E\u043B\u043E\u043E\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u041D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0415\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0432\u0430\u043D\u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0432\u0430\u043D \u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440"]
};
var formattingMonthValues = {
    narrow: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"],
    abbreviated: ["1-\u0440 \u0441\u0430\u0440", "2-\u0440 \u0441\u0430\u0440", "3-\u0440 \u0441\u0430\u0440", "4-\u0440 \u0441\u0430\u0440", "5-\u0440 \u0441\u0430\u0440", "6-\u0440 \u0441\u0430\u0440", "7-\u0440 \u0441\u0430\u0440", "8-\u0440 \u0441\u0430\u0440", "9-\u0440 \u0441\u0430\u0440", "10-\u0440 \u0441\u0430\u0440", "11-\u0440 \u0441\u0430\u0440", "12-\u0440 \u0441\u0430\u0440"],
    wide: ["\u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0433\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0434\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0442\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0437\u0443\u0440\u0433\u0430\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0434\u043E\u043B\u043E\u043E\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u043D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0435\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0430\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0430\u0440\u0432\u0430\u043D\u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0430\u0440\u0432\u0430\u043D \u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440"]
};
var dayValues = {
    narrow: ["\u041D", "\u0414", "\u041C", "\u041B", "\u041F", "\u0411", "\u0411"],
    short: ["\u041D\u044F", "\u0414\u0430", "\u041C\u044F", "\u041B\u0445", "\u041F\u04AF", "\u0411\u0430", "\u0411\u044F"],
    abbreviated: ["\u041D\u044F\u043C", "\u0414\u0430\u0432", "\u041C\u044F\u0433", "\u041B\u0445\u0430", "\u041F\u04AF\u0440", "\u0411\u0430\u0430", "\u0411\u044F\u043C"],
    wide: ["\u041D\u044F\u043C", "\u0414\u0430\u0432\u0430\u0430", "\u041C\u044F\u0433\u043C\u0430\u0440", "\u041B\u0445\u0430\u0433\u0432\u0430", "\u041F\u04AF\u0440\u044D\u0432", "\u0411\u0430\u0430\u0441\u0430\u043D", "\u0411\u044F\u043C\u0431\u0430"]
};
var formattingDayValues = {
    narrow: ["\u041D", "\u0414", "\u041C", "\u041B", "\u041F", "\u0411", "\u0411"],
    short: ["\u041D\u044F", "\u0414\u0430", "\u041C\u044F", "\u041B\u0445", "\u041F\u04AF", "\u0411\u0430", "\u0411\u044F"],
    abbreviated: ["\u041D\u044F\u043C", "\u0414\u0430\u0432", "\u041C\u044F\u0433", "\u041B\u0445\u0430", "\u041F\u04AF\u0440", "\u0411\u0430\u0430", "\u0411\u044F\u043C"],
    wide: ["\u043D\u044F\u043C", "\u0434\u0430\u0432\u0430\u0430", "\u043C\u044F\u0433\u043C\u0430\u0440", "\u043B\u0445\u0430\u0433\u0432\u0430", "\u043F\u04AF\u0440\u044D\u0432", "\u0431\u0430\u0430\u0441\u0430\u043D", "\u0431\u044F\u043C\u0431\u0430"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u04AF.\u04E9.",
        pm: "\u04AF.\u0445.",
        midnight: "\u0448\u04E9\u043D\u04E9 \u0434\u0443\u043D\u0434",
        noon: "\u04AF\u0434 \u0434\u0443\u043D\u0434",
        morning: "\u04E9\u0433\u043B\u04E9\u04E9",
        afternoon: "\u04E9\u0434\u04E9\u0440",
        evening: "\u043E\u0440\u043E\u0439",
        night: "\u0448\u04E9\u043D\u04E9"
    },
    abbreviated: {
        am: "\u04AF.\u04E9.",
        pm: "\u04AF.\u0445.",
        midnight: "\u0448\u04E9\u043D\u04E9 \u0434\u0443\u043D\u0434",
        noon: "\u04AF\u0434 \u0434\u0443\u043D\u0434",
        morning: "\u04E9\u0433\u043B\u04E9\u04E9",
        afternoon: "\u04E9\u0434\u04E9\u0440",
        evening: "\u043E\u0440\u043E\u0439",
        night: "\u0448\u04E9\u043D\u04E9"
    },
    wide: {
        am: "\u04AF.\u04E9.",
        pm: "\u04AF.\u0445.",
        midnight: "\u0448\u04E9\u043D\u04E9 \u0434\u0443\u043D\u0434",
        noon: "\u04AF\u0434 \u0434\u0443\u043D\u0434",
        morning: "\u04E9\u0433\u043B\u04E9\u04E9",
        afternoon: "\u04E9\u0434\u04E9\u0440",
        evening: "\u043E\u0440\u043E\u0439",
        night: "\u0448\u04E9\u043D\u04E9"
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
        defaultWidth: "wide",
        formattingValues: formattingMonthValues,
        defaultFormattingWidth: "wide"
    }),
    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: "wide",
        formattingValues: formattingDayValues,
        defaultFormattingWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/mn/_lib/match/index.js
var matchOrdinalNumberPattern = /\d+/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(нтө|нт)/i,
    abbreviated: /^(нтө|нт)/i,
    wide: /^(нийтийн тооллын өмнө|нийтийн тооллын)/i
};
var parseEraPatterns = {
    any: [/^(нтө|нийтийн тооллын өмнө)/i, /^(нт|нийтийн тооллын)/i]
};
var matchQuarterPatterns = {
    narrow: /^(iv|iii|ii|i)/i,
    abbreviated: /^(iv|iii|ii|i) улирал/i,
    wide: /^[1-4]-р улирал/i
};
var parseQuarterPatterns = {
    any: [/^(i(\s|$)|1)/i, /^(ii(\s|$)|2)/i, /^(iii(\s|$)|3)/i, /^(iv(\s|$)|4)/i]
};
var matchMonthPatterns = {
    narrow: /^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i,
    abbreviated: /^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i,
    wide: /^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i
};
var parseMonthPatterns = {
    narrow: [/^i$/i, /^ii$/i, /^iii$/i, /^iv$/i, /^v$/i, /^vi$/i, /^vii$/i, /^viii$/i, /^ix$/i, /^x$/i, /^xi$/i, /^xii$/i],
    any: [/^(1|нэгдүгээр)/i, /^(2|хоёрдугаар)/i, /^(3|гуравдугаар)/i, /^(4|дөрөвдүгээр)/i, /^(5|тавдугаар)/i, /^(6|зургаадугаар)/i, /^(7|долоодугаар)/i, /^(8|наймдугаар)/i, /^(9|есдүгээр)/i, /^(10|аравдугаар)/i, /^(11|арван нэгдүгээр)/i, /^(12|арван хоёрдугаар)/i]
};
var matchDayPatterns = {
    narrow: /^[ндмлпбб]/i,
    short: /^(ня|да|мя|лх|пү|ба|бя)/i,
    abbreviated: /^(ням|дав|мяг|лха|пүр|баа|бям)/i,
    wide: /^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i
};
var parseDayPatterns = {
    narrow: [/^н/i, /^д/i, /^м/i, /^л/i, /^п/i, /^б/i, /^б/i],
    any: [/^ня/i, /^да/i, /^мя/i, /^лх/i, /^пү/i, /^ба/i, /^бя/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i,
    any: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^ү\.ө\./i,
        pm: /^ү\.х\./i,
        midnight: /^шөнө дунд/i,
        noon: /^үд дунд/i,
        morning: /өглөө/i,
        afternoon: /өдөр/i,
        evening: /орой/i,
        night: /шөнө/i
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
// node_modules/date-fns/esm/locale/mn/index.js
var locale = {
    code: "mn",
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
var mn_default = locale;
export { mn_default };
