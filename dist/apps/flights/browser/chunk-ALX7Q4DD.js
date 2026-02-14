import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/ro/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "mai pu\u021Bin de o secund\u0103",
        other: "mai pu\u021Bin de {{count}} secunde"
    },
    xSeconds: {
        one: "1 secund\u0103",
        other: "{{count}} secunde"
    },
    halfAMinute: "jum\u0103tate de minut",
    lessThanXMinutes: {
        one: "mai pu\u021Bin de un minut",
        other: "mai pu\u021Bin de {{count}} minute"
    },
    xMinutes: {
        one: "1 minut",
        other: "{{count}} minute"
    },
    aboutXHours: {
        one: "circa 1 or\u0103",
        other: "circa {{count}} ore"
    },
    xHours: {
        one: "1 or\u0103",
        other: "{{count}} ore"
    },
    xDays: {
        one: "1 zi",
        other: "{{count}} zile"
    },
    aboutXWeeks: {
        one: "circa o s\u0103pt\u0103m\xE2n\u0103",
        other: "circa {{count}} s\u0103pt\u0103m\xE2ni"
    },
    xWeeks: {
        one: "1 s\u0103pt\u0103m\xE2n\u0103",
        other: "{{count}} s\u0103pt\u0103m\xE2ni"
    },
    aboutXMonths: {
        one: "circa 1 lun\u0103",
        other: "circa {{count}} luni"
    },
    xMonths: {
        one: "1 lun\u0103",
        other: "{{count}} luni"
    },
    aboutXYears: {
        one: "circa 1 an",
        other: "circa {{count}} ani"
    },
    xYears: {
        one: "1 an",
        other: "{{count}} ani"
    },
    overXYears: {
        one: "peste 1 an",
        other: "peste {{count}} ani"
    },
    almostXYears: {
        one: "aproape 1 an",
        other: "aproape {{count}} ani"
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
            return "\xEEn " + result;
        }
        else {
            return result + " \xEEn urm\u0103";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/ro/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d MMMM yyyy",
    long: "d MMMM yyyy",
    medium: "d MMM yyyy",
    short: "dd.MM.yyyy"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'la' {{time}}",
    long: "{{date}} 'la' {{time}}",
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
// node_modules/date-fns/esm/locale/ro/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "eeee 'trecut\u0103 la' p",
    yesterday: "'ieri la' p",
    today: "'ast\u0103zi la' p",
    tomorrow: "'m\xE2ine la' p",
    nextWeek: "eeee 'viitoare la' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/ro/_lib/localize/index.js
var eraValues = {
    narrow: ["\xCE", "D"],
    abbreviated: ["\xCE.d.C.", "D.C."],
    wide: ["\xCEnainte de Cristos", "Dup\u0103 Cristos"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["primul trimestru", "al doilea trimestru", "al treilea trimestru", "al patrulea trimestru"]
};
var monthValues = {
    narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
    abbreviated: ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"],
    wide: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"]
};
var dayValues = {
    narrow: ["d", "l", "m", "m", "j", "v", "s"],
    short: ["du", "lu", "ma", "mi", "jo", "vi", "s\xE2"],
    abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "s\xE2m"],
    wide: ["duminic\u0103", "luni", "mar\u021Bi", "miercuri", "joi", "vineri", "s\xE2mb\u0103t\u0103"]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "ami",
        morning: "dim",
        afternoon: "da",
        evening: "s",
        night: "n"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "miezul nop\u021Bii",
        noon: "amiaz\u0103",
        morning: "diminea\u021B\u0103",
        afternoon: "dup\u0103-amiaz\u0103",
        evening: "sear\u0103",
        night: "noapte"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "miezul nop\u021Bii",
        noon: "amiaz\u0103",
        morning: "diminea\u021B\u0103",
        afternoon: "dup\u0103-amiaz\u0103",
        evening: "sear\u0103",
        night: "noapte"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "amiaz\u0103",
        morning: "diminea\u021B\u0103",
        afternoon: "dup\u0103-amiaz\u0103",
        evening: "sear\u0103",
        night: "noapte"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "miezul nop\u021Bii",
        noon: "amiaz\u0103",
        morning: "diminea\u021B\u0103",
        afternoon: "dup\u0103-amiaz\u0103",
        evening: "sear\u0103",
        night: "noapte"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "miezul nop\u021Bii",
        noon: "amiaz\u0103",
        morning: "diminea\u021B\u0103",
        afternoon: "dup\u0103-amiaz\u0103",
        evening: "sear\u0103",
        night: "noapte"
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
// node_modules/date-fns/esm/locale/ro/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(Î|D)/i,
    abbreviated: /^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,
    wide: /^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i
};
var parseEraPatterns = {
    any: [/^ÎC/i, /^DC/i],
    wide: [/^(Înainte de Cristos|Înaintea erei noastre)/i, /^(După Cristos|Era noastră)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^T[1234]/i,
    wide: /^trimestrul [1234]/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[ifmaasond]/i,
    abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,
    wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i
};
var parseMonthPatterns = {
    narrow: [/^i/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ia/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^iun/i, /^iul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
    narrow: /^[dlmjvs]/i,
    short: /^(d|l|ma|mi|j|v|s)/i,
    abbreviated: /^(dum|lun|mar|mie|jo|vi|sâ)/i,
    wide: /^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i
};
var parseDayPatterns = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
    any: [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,
    any: /^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mn/i,
        noon: /amiaza/i,
        morning: /dimineaţa/i,
        afternoon: /după-amiaza/i,
        evening: /seara/i,
        night: /noaptea/i
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
// node_modules/date-fns/esm/locale/ro/index.js
var locale = {
    code: "ro",
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
var ro_default = locale;
export { ro_default };
