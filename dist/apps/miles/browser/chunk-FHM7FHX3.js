import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/vi/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "d\u01B0\u1EDBi 1 gi\xE2y",
        other: "d\u01B0\u1EDBi {{count}} gi\xE2y"
    },
    xSeconds: {
        one: "1 gi\xE2y",
        other: "{{count}} gi\xE2y"
    },
    halfAMinute: "n\u1EEDa ph\xFAt",
    lessThanXMinutes: {
        one: "d\u01B0\u1EDBi 1 ph\xFAt",
        other: "d\u01B0\u1EDBi {{count}} ph\xFAt"
    },
    xMinutes: {
        one: "1 ph\xFAt",
        other: "{{count}} ph\xFAt"
    },
    aboutXHours: {
        one: "kho\u1EA3ng 1 gi\u1EDD",
        other: "kho\u1EA3ng {{count}} gi\u1EDD"
    },
    xHours: {
        one: "1 gi\u1EDD",
        other: "{{count}} gi\u1EDD"
    },
    xDays: {
        one: "1 ng\xE0y",
        other: "{{count}} ng\xE0y"
    },
    aboutXWeeks: {
        one: "kho\u1EA3ng 1 tu\u1EA7n",
        other: "kho\u1EA3ng {{count}} tu\u1EA7n"
    },
    xWeeks: {
        one: "1 tu\u1EA7n",
        other: "{{count}} tu\u1EA7n"
    },
    aboutXMonths: {
        one: "kho\u1EA3ng 1 th\xE1ng",
        other: "kho\u1EA3ng {{count}} th\xE1ng"
    },
    xMonths: {
        one: "1 th\xE1ng",
        other: "{{count}} th\xE1ng"
    },
    aboutXYears: {
        one: "kho\u1EA3ng 1 n\u0103m",
        other: "kho\u1EA3ng {{count}} n\u0103m"
    },
    xYears: {
        one: "1 n\u0103m",
        other: "{{count}} n\u0103m"
    },
    overXYears: {
        one: "h\u01A1n 1 n\u0103m",
        other: "h\u01A1n {{count}} n\u0103m"
    },
    almostXYears: {
        one: "g\u1EA7n 1 n\u0103m",
        other: "g\u1EA7n {{count}} n\u0103m"
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
        if (options.comparison && options.comparison > 0) {
            return result + " n\u1EEFa";
        }
        else {
            return result + " tr\u01B0\u1EDBc";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/vi/_lib/formatLong/index.js
var dateFormats = {
    // thứ Sáu, ngày 25 tháng 08 năm 2017
    full: "EEEE, 'ng\xE0y' d MMMM 'n\u0103m' y",
    // ngày 25 tháng 08 năm 2017
    long: "'ng\xE0y' d MMMM 'n\u0103m' y",
    // 25 thg 08 năm 2017
    medium: "d MMM 'n\u0103m' y",
    // 25/08/2017
    short: "dd/MM/y"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    // thứ Sáu, ngày 25 tháng 08 năm 2017 23:25:59
    full: "{{date}} {{time}}",
    // ngày 25 tháng 08 năm 2017 23:25
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
// node_modules/date-fns/esm/locale/vi/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "eeee 'tu\u1EA7n tr\u01B0\u1EDBc v\xE0o l\xFAc' p",
    yesterday: "'h\xF4m qua v\xE0o l\xFAc' p",
    today: "'h\xF4m nay v\xE0o l\xFAc' p",
    tomorrow: "'ng\xE0y mai v\xE0o l\xFAc' p",
    nextWeek: "eeee 't\u1EDBi v\xE0o l\xFAc' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/vi/_lib/localize/index.js
var eraValues = {
    narrow: ["TCN", "SCN"],
    abbreviated: ["tr\u01B0\u1EDBc CN", "sau CN"],
    wide: ["tr\u01B0\u1EDBc C\xF4ng Nguy\xEAn", "sau C\xF4ng Nguy\xEAn"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["Qu\xFD 1", "Qu\xFD 2", "Qu\xFD 3", "Qu\xFD 4"]
};
var formattingQuarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    // I notice many news outlet use this "quý II/2018"
    wide: ["qu\xFD I", "qu\xFD II", "qu\xFD III", "qu\xFD IV"]
};
var monthValues = {
    narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    abbreviated: ["Thg 1", "Thg 2", "Thg 3", "Thg 4", "Thg 5", "Thg 6", "Thg 7", "Thg 8", "Thg 9", "Thg 10", "Thg 11", "Thg 12"],
    wide: ["Th\xE1ng M\u1ED9t", "Th\xE1ng Hai", "Th\xE1ng Ba", "Th\xE1ng T\u01B0", "Th\xE1ng N\u0103m", "Th\xE1ng S\xE1u", "Th\xE1ng B\u1EA3y", "Th\xE1ng T\xE1m", "Th\xE1ng Ch\xEDn", "Th\xE1ng M\u01B0\u1EDDi", "Th\xE1ng M\u01B0\u1EDDi M\u1ED9t", "Th\xE1ng M\u01B0\u1EDDi Hai"]
};
var formattingMonthValues = {
    narrow: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    abbreviated: ["thg 1", "thg 2", "thg 3", "thg 4", "thg 5", "thg 6", "thg 7", "thg 8", "thg 9", "thg 10", "thg 11", "thg 12"],
    wide: ["th\xE1ng 01", "th\xE1ng 02", "th\xE1ng 03", "th\xE1ng 04", "th\xE1ng 05", "th\xE1ng 06", "th\xE1ng 07", "th\xE1ng 08", "th\xE1ng 09", "th\xE1ng 10", "th\xE1ng 11", "th\xE1ng 12"]
};
var dayValues = {
    narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
    short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
    abbreviated: ["CN", "Th\u1EE9 2", "Th\u1EE9 3", "Th\u1EE9 4", "Th\u1EE9 5", "Th\u1EE9 6", "Th\u1EE9 7"],
    wide: ["Ch\u1EE7 Nh\u1EADt", "Th\u1EE9 Hai", "Th\u1EE9 Ba", "Th\u1EE9 T\u01B0", "Th\u1EE9 N\u0103m", "Th\u1EE9 S\xE1u", "Th\u1EE9 B\u1EA3y"]
};
var dayPeriodValues = {
    // narrow date period is extremely rare in Vietnamese
    // I used abbreviated form for noon, morning and afternoon
    // which are regconizable by Vietnamese, others cannot be any shorter
    narrow: {
        am: "am",
        pm: "pm",
        midnight: "n\u1EEDa \u0111\xEAm",
        noon: "tr",
        morning: "sg",
        afternoon: "ch",
        evening: "t\u1ED1i",
        night: "\u0111\xEAm"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "n\u1EEDa \u0111\xEAm",
        noon: "tr\u01B0a",
        morning: "s\xE1ng",
        afternoon: "chi\u1EC1u",
        evening: "t\u1ED1i",
        night: "\u0111\xEAm"
    },
    wide: {
        am: "SA",
        pm: "CH",
        midnight: "n\u1EEDa \u0111\xEAm",
        noon: "tr\u01B0a",
        morning: "s\xE1ng",
        afternoon: "chi\u1EC1u",
        evening: "t\u1ED1i",
        night: "\u0111\xEAm"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "am",
        pm: "pm",
        midnight: "n\u1EEDa \u0111\xEAm",
        noon: "tr",
        morning: "sg",
        afternoon: "ch",
        evening: "t\u1ED1i",
        night: "\u0111\xEAm"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "n\u1EEDa \u0111\xEAm",
        noon: "tr\u01B0a",
        morning: "s\xE1ng",
        afternoon: "chi\u1EC1u",
        evening: "t\u1ED1i",
        night: "\u0111\xEAm"
    },
    wide: {
        am: "SA",
        pm: "CH",
        midnight: "n\u1EEDa \u0111\xEAm",
        noon: "gi\u1EEFa tr\u01B0a",
        morning: "v\xE0o bu\u1ED5i s\xE1ng",
        afternoon: "v\xE0o bu\u1ED5i chi\u1EC1u",
        evening: "v\xE0o bu\u1ED5i t\u1ED1i",
        night: "v\xE0o ban \u0111\xEAm"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, options) {
    var number = Number(dirtyNumber);
    var unit = options === null || options === void 0 ? void 0 : options.unit;
    if (unit === "quarter") {
        switch (number) {
            case 1:
                return "I";
            case 2:
                return "II";
            case 3:
                return "III";
            case 4:
                return "IV";
        }
    }
    else if (unit === "day") {
        switch (number) {
            case 1:
                return "th\u1EE9 2";
            // meaning 2nd day but it's the first day of the week :D
            case 2:
                return "th\u1EE9 3";
            // meaning 3rd day
            case 3:
                return "th\u1EE9 4";
            // meaning 4th day and so on
            case 4:
                return "th\u1EE9 5";
            case 5:
                return "th\u1EE9 6";
            case 6:
                return "th\u1EE9 7";
            case 7:
                return "ch\u1EE7 nh\u1EADt";
        }
    }
    else if (unit === "week") {
        if (number === 1) {
            return "th\u1EE9 nh\u1EA5t";
        }
        else {
            return "th\u1EE9 " + number;
        }
    }
    else if (unit === "dayOfYear") {
        if (number === 1) {
            return "\u0111\u1EA7u ti\xEAn";
        }
        else {
            return "th\u1EE9 " + number;
        }
    }
    return String(number);
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
        formattingValues: formattingQuarterValues,
        defaultFormattingWidth: "wide",
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
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
var localize_default = localize;
// node_modules/date-fns/esm/locale/vi/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(tcn|scn)/i,
    abbreviated: /^(trước CN|sau CN)/i,
    wide: /^(trước Công Nguyên|sau Công Nguyên)/i
};
var parseEraPatterns = {
    any: [/^t/i, /^s/i]
};
var matchQuarterPatterns = {
    narrow: /^([1234]|i{1,3}v?)/i,
    abbreviated: /^q([1234]|i{1,3}v?)/i,
    wide: /^quý ([1234]|i{1,3}v?)/i
};
var parseQuarterPatterns = {
    any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]
};
var matchMonthPatterns = {
    // month number may contain leading 0, 'thg' prefix may have space, underscore or empty before number
    // note the order of '1' since it is a sub-string of '10', so must be lower priority
    narrow: /^(0?[2-9]|10|11|12|0?1)/i,
    // note the order of 'thg 1' since it is sub-string of 'thg 10', so must be lower priority
    abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
    // note the order of 'Mười' since it is sub-string of Mười Một, so must be lower priority
    wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i
};
var parseMonthPatterns = {
    narrow: [/0?1$/i, /0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/],
    abbreviated: [/^thg[ _]?0?1(?!\d)/i, /^thg[ _]?0?2/i, /^thg[ _]?0?3/i, /^thg[ _]?0?4/i, /^thg[ _]?0?5/i, /^thg[ _]?0?6/i, /^thg[ _]?0?7/i, /^thg[ _]?0?8/i, /^thg[ _]?0?9/i, /^thg[ _]?10/i, /^thg[ _]?11/i, /^thg[ _]?12/i],
    wide: [/^tháng ?(Một|0?1(?!\d))/i, /^tháng ?(Hai|0?2)/i, /^tháng ?(Ba|0?3)/i, /^tháng ?(Tư|0?4)/i, /^tháng ?(Năm|0?5)/i, /^tháng ?(Sáu|0?6)/i, /^tháng ?(Bảy|0?7)/i, /^tháng ?(Tám|0?8)/i, /^tháng ?(Chín|0?9)/i, /^tháng ?(Mười|10)/i, /^tháng ?(Mười ?Một|11)/i, /^tháng ?(Mười ?Hai|12)/i]
};
var matchDayPatterns = {
    narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
    short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
    abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
    wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
};
var parseDayPatterns = {
    narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
    short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
    abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
    wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
    abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
    wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^(a|sa)/i,
        pm: /^(p|ch[^i]*)/i,
        midnight: /nửa đêm/i,
        noon: /trưa/i,
        morning: /sáng/i,
        afternoon: /chiều/i,
        evening: /tối/i,
        night: /^đêm/i
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
        defaultParseWidth: "wide"
    }),
    day: buildMatchFn({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "wide"
    }),
    dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
var match_default = match;
// node_modules/date-fns/esm/locale/vi/index.js
var locale = {
    code: "vi",
    formatDistance: formatDistance_default,
    formatLong: formatLong_default,
    formatRelative: formatRelative_default,
    localize: localize_default,
    match: match_default,
    options: {
        weekStartsOn: 1,
        firstWeekContainsDate: 1
        /* First week of new year contains Jan 1st  */
    }
};
var vi_default = locale;
export { vi_default };
