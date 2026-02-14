import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/ca/_lib/formatDistance/index.js
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "menys d'un segon",
        eleven: "menys d'onze segons",
        other: "menys de {{count}} segons"
    },
    xSeconds: {
        one: "1 segon",
        other: "{{count}} segons"
    },
    halfAMinute: "mig minut",
    lessThanXMinutes: {
        one: "menys d'un minut",
        eleven: "menys d'onze minuts",
        other: "menys de {{count}} minuts"
    },
    xMinutes: {
        one: "1 minut",
        other: "{{count}} minuts"
    },
    aboutXHours: {
        one: "aproximadament una hora",
        other: "aproximadament {{count}} hores"
    },
    xHours: {
        one: "1 hora",
        other: "{{count}} hores"
    },
    xDays: {
        one: "1 dia",
        other: "{{count}} dies"
    },
    aboutXWeeks: {
        one: "aproximadament una setmana",
        other: "aproximadament {{count}} setmanes"
    },
    xWeeks: {
        one: "1 setmana",
        other: "{{count}} setmanes"
    },
    aboutXMonths: {
        one: "aproximadament un mes",
        other: "aproximadament {{count}} mesos"
    },
    xMonths: {
        one: "1 mes",
        other: "{{count}} mesos"
    },
    aboutXYears: {
        one: "aproximadament un any",
        other: "aproximadament {{count}} anys"
    },
    xYears: {
        one: "1 any",
        other: "{{count}} anys"
    },
    overXYears: {
        one: "m\xE9s d'un any",
        eleven: "m\xE9s d'onze anys",
        other: "m\xE9s de {{count}} anys"
    },
    almostXYears: {
        one: "gaireb\xE9 un any",
        other: "gaireb\xE9 {{count}} anys"
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
    else if (count === 11 && tokenValue.eleven) {
        result = tokenValue.eleven;
    }
    else {
        result = tokenValue.other.replace("{{count}}", String(count));
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "en " + result;
        }
        else {
            return "fa " + result;
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/ca/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, d 'de' MMMM y",
    long: "d 'de' MMMM y",
    medium: "d MMM y",
    short: "dd/MM/y"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'a les' {{time}}",
    long: "{{date}} 'a les' {{time}}",
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
// node_modules/date-fns/esm/locale/ca/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'el' eeee 'passat a la' LT",
    yesterday: "'ahir a la' p",
    today: "'avui a la' p",
    tomorrow: "'dem\xE0 a la' p",
    nextWeek: "eeee 'a la' p",
    other: "P"
};
var formatRelativeLocalePlural = {
    lastWeek: "'el' eeee 'passat a les' p",
    yesterday: "'ahir a les' p",
    today: "'avui a les' p",
    tomorrow: "'dem\xE0 a les' p",
    nextWeek: "eeee 'a les' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, date, _baseDate, _options) {
    if (date.getUTCHours() !== 1) {
        return formatRelativeLocalePlural[token];
    }
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/ca/_lib/localize/index.js
var eraValues = {
    narrow: ["aC", "dC"],
    abbreviated: ["a. de C.", "d. de C."],
    wide: ["abans de Crist", "despr\xE9s de Crist"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1r trimestre", "2n trimestre", "3r trimestre", "4t trimestre"]
};
var monthValues = {
    narrow: ["GN", "FB", "M\xC7", "AB", "MG", "JN", "JL", "AG", "ST", "OC", "NV", "DS"],
    /**
     * Les abreviatures dels mesos de l'any es formen seguint una de les normes generals de formació d'abreviatures.
     * S'escriu la primera síl·laba i les consonants de la síl·laba següent anteriors a la primera vocal.
     * Els mesos de març, maig i juny no s'abreugen perquè són paraules d'una sola síl·laba.
     */
    abbreviated: ["gen.", "febr.", "mar\xE7", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."],
    wide: ["gener", "febrer", "mar\xE7", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"]
};
var dayValues = {
    narrow: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
    short: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
    abbreviated: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
    wide: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"]
};
var dayPeriodValues = {
    narrow: {
        am: "am",
        pm: "pm",
        midnight: "mitjanit",
        noon: "migdia",
        morning: "mat\xED",
        afternoon: "tarda",
        evening: "vespre",
        night: "nit"
    },
    abbreviated: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "mitjanit",
        noon: "migdia",
        morning: "mat\xED",
        afternoon: "tarda",
        evening: "vespre",
        night: "nit"
    },
    wide: {
        am: "ante meridiem",
        pm: "post meridiem",
        midnight: "mitjanit",
        noon: "migdia",
        morning: "mat\xED",
        afternoon: "tarda",
        evening: "vespre",
        night: "nit"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "am",
        pm: "pm",
        midnight: "de la mitjanit",
        noon: "del migdia",
        morning: "del mat\xED",
        afternoon: "de la tarda",
        evening: "del vespre",
        night: "de la nit"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "de la mitjanit",
        noon: "del migdia",
        morning: "del mat\xED",
        afternoon: "de la tarda",
        evening: "del vespre",
        night: "de la nit"
    },
    wide: {
        am: "ante meridiem",
        pm: "post meridiem",
        midnight: "de la mitjanit",
        noon: "del migdia",
        morning: "del mat\xED",
        afternoon: "de la tarda",
        evening: "del vespre",
        night: "de la nit"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
            case 1:
                return number + "r";
            case 2:
                return number + "n";
            case 3:
                return number + "r";
            case 4:
                return number + "t";
        }
    }
    return number + "\xE8";
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
// node_modules/date-fns/esm/locale/ca/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(è|r|n|r|t)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(aC|dC)/i,
    abbreviated: /^(a. de C.|d. de C.)/i,
    wide: /^(abans de Crist|despr[eé]s de Crist)/i
};
var parseEraPatterns = {
    narrow: [/^aC/i, /^dC/i],
    abbreviated: [/^(a. de C.)/i, /^(d. de C.)/i],
    wide: [/^(abans de Crist)/i, /^(despr[eé]s de Crist)/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^T[1234]/i,
    wide: /^[1234](è|r|n|r|t)? trimestre/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,
    abbreviated: /^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,
    wide: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i
};
var parseMonthPatterns = {
    narrow: [/^GN/i, /^FB/i, /^MÇ/i, /^AB/i, /^MG/i, /^JN/i, /^JL/i, /^AG/i, /^ST/i, /^OC/i, /^NV/i, /^DS/i],
    abbreviated: [/^gen./i, /^febr./i, /^març/i, /^abr./i, /^maig/i, /^juny/i, /^jul./i, /^ag./i, /^set./i, /^oct./i, /^nov./i, /^des./i],
    wide: [/^gener/i, /^febrer/i, /^març/i, /^abril/i, /^maig/i, /^juny/i, /^juliol/i, /^agost/i, /^setembre/i, /^octubre/i, /^novembre/i, /^desembre/i]
};
var matchDayPatterns = {
    narrow: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
    short: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
    abbreviated: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
    wide: /^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i
};
var parseDayPatterns = {
    narrow: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],
    abbreviated: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],
    wide: [/^diumenge/i, /^dilluns/i, /^dimarts/i, /^dimecres/i, /^dijous/i, /^divendres/i, /^disssabte/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,
    abbreviated: /^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,
    wide: /^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mitjanit/i,
        noon: /^migdia/i,
        morning: /matí/i,
        afternoon: /tarda/i,
        evening: /vespre/i,
        night: /nit/i
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
        defaultParseWidth: "wide"
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
// node_modules/date-fns/esm/locale/ca/index.js
var locale = {
    code: "ca",
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
var ca_default = locale;
export { ca_default };
