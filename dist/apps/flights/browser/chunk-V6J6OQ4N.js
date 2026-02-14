import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/hi/_lib/localize/index.js
var numberValues = {
    locale: {
        "1": "\u0967",
        "2": "\u0968",
        "3": "\u0969",
        "4": "\u096A",
        "5": "\u096B",
        "6": "\u096C",
        "7": "\u096D",
        "8": "\u096E",
        "9": "\u096F",
        "0": "\u0966"
    },
    number: {
        "\u0967": "1",
        "\u0968": "2",
        "\u0969": "3",
        "\u096A": "4",
        "\u096B": "5",
        "\u096C": "6",
        "\u096D": "7",
        "\u096E": "8",
        "\u096F": "9",
        "\u0966": "0"
    }
};
var eraValues = {
    narrow: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u094D\u0935\u0940"],
    abbreviated: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u094D\u0935\u0940"],
    wide: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u0935\u0940 \u0938\u0928"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["\u0924\u093F1", "\u0924\u093F2", "\u0924\u093F3", "\u0924\u093F4"],
    wide: ["\u092A\u0939\u0932\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u0926\u0942\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u091A\u094C\u0925\u0940 \u0924\u093F\u092E\u093E\u0939\u0940"]
};
var monthValues = {
    narrow: ["\u091C", "\u092B\u093C", "\u092E\u093E", "\u0905", "\u092E\u0908", "\u091C\u0942", "\u091C\u0941", "\u0905\u0917", "\u0938\u093F", "\u0905\u0915\u094D\u091F\u0942", "\u0928", "\u0926\u093F"],
    abbreviated: ["\u091C\u0928", "\u092B\u093C\u0930", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930\u0948\u0932", "\u092E\u0908", "\u091C\u0942\u0928", "\u091C\u0941\u0932", "\u0905\u0917", "\u0938\u093F\u0924", "\u0905\u0915\u094D\u091F\u0942", "\u0928\u0935", "\u0926\u093F\u0938"],
    wide: ["\u091C\u0928\u0935\u0930\u0940", "\u092B\u093C\u0930\u0935\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u0905\u092A\u094D\u0930\u0948\u0932", "\u092E\u0908", "\u091C\u0942\u0928", "\u091C\u0941\u0932\u093E\u0908", "\u0905\u0917\u0938\u094D\u0924", "\u0938\u093F\u0924\u0902\u092C\u0930", "\u0905\u0915\u094D\u091F\u0942\u092C\u0930", "\u0928\u0935\u0902\u092C\u0930", "\u0926\u093F\u0938\u0902\u092C\u0930"]
};
var dayValues = {
    narrow: ["\u0930", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u0917\u0941", "\u0936\u0941", "\u0936"],
    short: ["\u0930", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u0917\u0941", "\u0936\u0941", "\u0936"],
    abbreviated: ["\u0930\u0935\u093F", "\u0938\u094B\u092E", "\u092E\u0902\u0917\u0932", "\u092C\u0941\u0927", "\u0917\u0941\u0930\u0941", "\u0936\u0941\u0915\u094D\u0930", "\u0936\u0928\u093F"],
    wide: ["\u0930\u0935\u093F\u0935\u093E\u0930", "\u0938\u094B\u092E\u0935\u093E\u0930", "\u092E\u0902\u0917\u0932\u0935\u093E\u0930", "\u092C\u0941\u0927\u0935\u093E\u0930", "\u0917\u0941\u0930\u0941\u0935\u093E\u0930", "\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930", "\u0936\u0928\u093F\u0935\u093E\u0930"]
};
var dayPeriodValues = {
    narrow: {
        am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
        pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
        midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
        noon: "\u0926\u094B\u092A\u0939\u0930",
        morning: "\u0938\u0941\u092C\u0939",
        afternoon: "\u0926\u094B\u092A\u0939\u0930",
        evening: "\u0936\u093E\u092E",
        night: "\u0930\u093E\u0924"
    },
    abbreviated: {
        am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
        pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
        midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
        noon: "\u0926\u094B\u092A\u0939\u0930",
        morning: "\u0938\u0941\u092C\u0939",
        afternoon: "\u0926\u094B\u092A\u0939\u0930",
        evening: "\u0936\u093E\u092E",
        night: "\u0930\u093E\u0924"
    },
    wide: {
        am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
        pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
        midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
        noon: "\u0926\u094B\u092A\u0939\u0930",
        morning: "\u0938\u0941\u092C\u0939",
        afternoon: "\u0926\u094B\u092A\u0939\u0930",
        evening: "\u0936\u093E\u092E",
        night: "\u0930\u093E\u0924"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
        pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
        midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
        noon: "\u0926\u094B\u092A\u0939\u0930",
        morning: "\u0938\u0941\u092C\u0939",
        afternoon: "\u0926\u094B\u092A\u0939\u0930",
        evening: "\u0936\u093E\u092E",
        night: "\u0930\u093E\u0924"
    },
    abbreviated: {
        am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
        pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
        midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
        noon: "\u0926\u094B\u092A\u0939\u0930",
        morning: "\u0938\u0941\u092C\u0939",
        afternoon: "\u0926\u094B\u092A\u0939\u0930",
        evening: "\u0936\u093E\u092E",
        night: "\u0930\u093E\u0924"
    },
    wide: {
        am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
        pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
        midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
        noon: "\u0926\u094B\u092A\u0939\u0930",
        morning: "\u0938\u0941\u092C\u0939",
        afternoon: "\u0926\u094B\u092A\u0939\u0930",
        evening: "\u0936\u093E\u092E",
        night: "\u0930\u093E\u0924"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    return numberToLocale(number);
};
function localeToNumber(locale2) {
    var enNumber = locale2.toString().replace(/[१२३४५६७८९०]/g, function (match2) {
        return numberValues.number[match2];
    });
    return Number(enNumber);
}
function numberToLocale(enNumber) {
    return enNumber.toString().replace(/\d/g, function (match2) {
        return numberValues.locale[match2];
    });
}
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
// node_modules/date-fns/esm/locale/hi/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "\u0967 \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092E",
        // CLDR #1310
        other: "{{count}} \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092E"
    },
    xSeconds: {
        one: "\u0967 \u0938\u0947\u0915\u0902\u0921",
        other: "{{count}} \u0938\u0947\u0915\u0902\u0921"
    },
    halfAMinute: "\u0906\u0927\u093E \u092E\u093F\u0928\u091F",
    lessThanXMinutes: {
        one: "\u0967 \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E",
        other: "{{count}} \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E"
    },
    xMinutes: {
        one: "\u0967 \u092E\u093F\u0928\u091F",
        // CLDR #1307
        other: "{{count}} \u092E\u093F\u0928\u091F"
    },
    aboutXHours: {
        one: "\u0932\u0917\u092D\u0917 \u0967 \u0918\u0902\u091F\u093E",
        other: "\u0932\u0917\u092D\u0917 {{count}} \u0918\u0902\u091F\u0947"
    },
    xHours: {
        one: "\u0967 \u0918\u0902\u091F\u093E",
        // CLDR #1304
        other: "{{count}} \u0918\u0902\u091F\u0947"
        // CLDR #4467
    },
    xDays: {
        one: "\u0967 \u0926\u093F\u0928",
        // CLDR #1286
        other: "{{count}} \u0926\u093F\u0928"
    },
    aboutXWeeks: {
        one: "\u0932\u0917\u092D\u0917 \u0967 \u0938\u092A\u094D\u0924\u093E\u0939",
        other: "\u0932\u0917\u092D\u0917 {{count}} \u0938\u092A\u094D\u0924\u093E\u0939"
    },
    xWeeks: {
        one: "\u0967 \u0938\u092A\u094D\u0924\u093E\u0939",
        other: "{{count}} \u0938\u092A\u094D\u0924\u093E\u0939"
    },
    aboutXMonths: {
        one: "\u0932\u0917\u092D\u0917 \u0967 \u092E\u0939\u0940\u0928\u093E",
        other: "\u0932\u0917\u092D\u0917 {{count}} \u092E\u0939\u0940\u0928\u0947"
    },
    xMonths: {
        one: "\u0967 \u092E\u0939\u0940\u0928\u093E",
        other: "{{count}} \u092E\u0939\u0940\u0928\u0947"
    },
    aboutXYears: {
        one: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937",
        other: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937"
        // CLDR #4823
    },
    xYears: {
        one: "\u0967 \u0935\u0930\u094D\u0937",
        other: "{{count}} \u0935\u0930\u094D\u0937"
    },
    overXYears: {
        one: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915",
        other: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915"
    },
    almostXYears: {
        one: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937",
        other: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937"
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
        result = tokenValue.other.replace("{{count}}", numberToLocale(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return result + "\u092E\u0947 ";
        }
        else {
            return result + " \u092A\u0939\u0932\u0947";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/hi/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, do MMMM, y",
    // CLDR #1787
    long: "do MMMM, y",
    // CLDR #1788
    medium: "d MMM, y",
    // CLDR #1789
    short: "dd/MM/yyyy"
    // CLDR #1790
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    // CLDR #1791
    long: "h:mm:ss a z",
    // CLDR #1792
    medium: "h:mm:ss a",
    // CLDR #1793
    short: "h:mm a"
    // CLDR #1794
};
var dateTimeFormats = {
    full: "{{date}} '\u0915\u094B' {{time}}",
    // CLDR #1795
    long: "{{date}} '\u0915\u094B' {{time}}",
    // CLDR #1796
    medium: "{{date}}, {{time}}",
    // CLDR #1797
    short: "{{date}}, {{time}}"
    // CLDR #1798
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
// node_modules/date-fns/esm/locale/hi/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'\u092A\u093F\u091B\u0932\u0947' eeee p",
    yesterday: "'\u0915\u0932' p",
    today: "'\u0906\u091C' p",
    tomorrow: "'\u0915\u0932' p",
    nextWeek: "eeee '\u0915\u094B' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/hi/_lib/match/index.js
var matchOrdinalNumberPattern = /^[०१२३४५६७८९]+/i;
var parseOrdinalNumberPattern = /^[०१२३४५६७८९]+/i;
var matchEraPatterns = {
    narrow: /^(ईसा-पूर्व|ईस्वी)/i,
    abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i,
    wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i
};
var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^ति[1234]/i,
    wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    // eslint-disable-next-line no-misleading-character-class
    narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i,
    abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i,
    wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i
};
var parseMonthPatterns = {
    narrow: [/^ज/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^न/i, /^दि/i],
    any: [/^जन/i, /^फ़/i, /^मा/i, /^अप्/i, /^मई/i, /^जू/i, /^जु/i, /^अग/i, /^सि/i, /^अक्तू/i, /^नव/i, /^दिस/i]
};
var matchDayPatterns = {
    // eslint-disable-next-line no-misleading-character-class
    narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i,
    short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
    abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
    wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i
};
var parseDayPatterns = {
    narrow: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i],
    any: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i,
    any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^पूर्वाह्न/i,
        pm: /^अपराह्न/i,
        midnight: /^मध्य/i,
        noon: /^दो/i,
        morning: /सु/i,
        afternoon: /दो/i,
        evening: /शा/i,
        night: /रा/i
    }
};
var match = {
    ordinalNumber: buildMatchPatternFn({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: localeToNumber
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
        valueCallback: function valueCallback(index) {
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
// node_modules/date-fns/esm/locale/hi/index.js
var locale = {
    code: "hi",
    formatDistance: formatDistance_default,
    formatLong: formatLong_default,
    formatRelative: formatRelative_default,
    localize: localize_default,
    match: match_default,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 4
    }
};
var hi_default = locale;
export { hi_default };
