import { buildFormatLongFn, buildLocalizeFn, buildMatchFn, buildMatchPatternFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/fi/_lib/formatDistance/index.js
function futureSeconds(text) {
    return text.replace(/sekuntia?/, "sekunnin");
}
function futureMinutes(text) {
    return text.replace(/minuuttia?/, "minuutin");
}
function futureHours(text) {
    return text.replace(/tuntia?/, "tunnin");
}
function futureDays(text) {
    return text.replace(/päivää?/, "p\xE4iv\xE4n");
}
function futureWeeks(text) {
    return text.replace(/(viikko|viikkoa)/, "viikon");
}
function futureMonths(text) {
    return text.replace(/(kuukausi|kuukautta)/, "kuukauden");
}
function futureYears(text) {
    return text.replace(/(vuosi|vuotta)/, "vuoden");
}
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "alle sekunti",
        other: "alle {{count}} sekuntia",
        futureTense: futureSeconds
    },
    xSeconds: {
        one: "sekunti",
        other: "{{count}} sekuntia",
        futureTense: futureSeconds
    },
    halfAMinute: {
        one: "puoli minuuttia",
        other: "puoli minuuttia",
        futureTense: function futureTense(_text) {
            return "puolen minuutin";
        }
    },
    lessThanXMinutes: {
        one: "alle minuutti",
        other: "alle {{count}} minuuttia",
        futureTense: futureMinutes
    },
    xMinutes: {
        one: "minuutti",
        other: "{{count}} minuuttia",
        futureTense: futureMinutes
    },
    aboutXHours: {
        one: "noin tunti",
        other: "noin {{count}} tuntia",
        futureTense: futureHours
    },
    xHours: {
        one: "tunti",
        other: "{{count}} tuntia",
        futureTense: futureHours
    },
    xDays: {
        one: "p\xE4iv\xE4",
        other: "{{count}} p\xE4iv\xE4\xE4",
        futureTense: futureDays
    },
    aboutXWeeks: {
        one: "noin viikko",
        other: "noin {{count}} viikkoa",
        futureTense: futureWeeks
    },
    xWeeks: {
        one: "viikko",
        other: "{{count}} viikkoa",
        futureTense: futureWeeks
    },
    aboutXMonths: {
        one: "noin kuukausi",
        other: "noin {{count}} kuukautta",
        futureTense: futureMonths
    },
    xMonths: {
        one: "kuukausi",
        other: "{{count}} kuukautta",
        futureTense: futureMonths
    },
    aboutXYears: {
        one: "noin vuosi",
        other: "noin {{count}} vuotta",
        futureTense: futureYears
    },
    xYears: {
        one: "vuosi",
        other: "{{count}} vuotta",
        futureTense: futureYears
    },
    overXYears: {
        one: "yli vuosi",
        other: "yli {{count}} vuotta",
        futureTense: futureYears
    },
    almostXYears: {
        one: "l\xE4hes vuosi",
        other: "l\xE4hes {{count}} vuotta",
        futureTense: futureYears
    }
};
var formatDistance = function formatDistance2(token, count, options) {
    var tokenValue = formatDistanceLocale[token];
    var result = count === 1 ? tokenValue.one : tokenValue.other.replace("{{count}}", String(count));
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return tokenValue.futureTense(result) + " kuluttua";
        }
        else {
            return result + " sitten";
        }
    }
    return result;
};
var formatDistance_default = formatDistance;
// node_modules/date-fns/esm/locale/fi/_lib/formatLong/index.js
var dateFormats = {
    full: "eeee d. MMMM y",
    long: "d. MMMM y",
    medium: "d. MMM y",
    short: "d.M.y"
};
var timeFormats = {
    full: "HH.mm.ss zzzz",
    long: "HH.mm.ss z",
    medium: "HH.mm.ss",
    short: "HH.mm"
};
var dateTimeFormats = {
    full: "{{date}} 'klo' {{time}}",
    long: "{{date}} 'klo' {{time}}",
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
// node_modules/date-fns/esm/locale/fi/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "'viime' eeee 'klo' p",
    yesterday: "'eilen klo' p",
    today: "'t\xE4n\xE4\xE4n klo' p",
    tomorrow: "'huomenna klo' p",
    nextWeek: "'ensi' eeee 'klo' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/fi/_lib/localize/index.js
var eraValues = {
    narrow: ["eaa.", "jaa."],
    abbreviated: ["eaa.", "jaa."],
    wide: ["ennen ajanlaskun alkua", "j\xE4lkeen ajanlaskun alun"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1. kvartaali", "2. kvartaali", "3. kvartaali", "4. kvartaali"]
};
var monthValues = {
    narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
    abbreviated: ["tammi", "helmi", "maalis", "huhti", "touko", "kes\xE4", "hein\xE4", "elo", "syys", "loka", "marras", "joulu"],
    wide: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kes\xE4kuu", "hein\xE4kuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"]
};
var formattingMonthValues = {
    narrow: monthValues.narrow,
    abbreviated: monthValues.abbreviated,
    wide: ["tammikuuta", "helmikuuta", "maaliskuuta", "huhtikuuta", "toukokuuta", "kes\xE4kuuta", "hein\xE4kuuta", "elokuuta", "syyskuuta", "lokakuuta", "marraskuuta", "joulukuuta"]
};
var dayValues = {
    narrow: ["S", "M", "T", "K", "T", "P", "L"],
    short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
    abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"],
    wide: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
};
var formattingDayValues = {
    narrow: dayValues.narrow,
    short: dayValues.short,
    abbreviated: dayValues.abbreviated,
    wide: ["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"]
};
var dayPeriodValues = {
    narrow: {
        am: "ap",
        pm: "ip",
        midnight: "keskiy\xF6",
        noon: "keskip\xE4iv\xE4",
        morning: "ap",
        afternoon: "ip",
        evening: "illalla",
        night: "y\xF6ll\xE4"
    },
    abbreviated: {
        am: "ap",
        pm: "ip",
        midnight: "keskiy\xF6",
        noon: "keskip\xE4iv\xE4",
        morning: "ap",
        afternoon: "ip",
        evening: "illalla",
        night: "y\xF6ll\xE4"
    },
    wide: {
        am: "ap",
        pm: "ip",
        midnight: "keskiy\xF6ll\xE4",
        noon: "keskip\xE4iv\xE4ll\xE4",
        morning: "aamup\xE4iv\xE4ll\xE4",
        afternoon: "iltap\xE4iv\xE4ll\xE4",
        evening: "illalla",
        night: "y\xF6ll\xE4"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    return number + ".";
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
// node_modules/date-fns/esm/locale/fi/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(\.)/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(e|j)/i,
    abbreviated: /^(eaa.|jaa.)/i,
    wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i
};
var parseEraPatterns = {
    any: [/^e/i, /^j/i]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234]\.? kvartaali/i
};
var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
    narrow: /^[thmkeslj]/i,
    abbreviated: /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,
    wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i
};
var parseMonthPatterns = {
    narrow: [/^t/i, /^h/i, /^m/i, /^h/i, /^t/i, /^k/i, /^h/i, /^e/i, /^s/i, /^l/i, /^m/i, /^j/i],
    any: [/^ta/i, /^hel/i, /^maa/i, /^hu/i, /^to/i, /^k/i, /^hei/i, /^e/i, /^s/i, /^l/i, /^mar/i, /^j/i]
};
var matchDayPatterns = {
    narrow: /^[smtkpl]/i,
    short: /^(su|ma|ti|ke|to|pe|la)/i,
    abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
    wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i
};
var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i],
    any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i]
};
var matchDayPeriodPatterns = {
    narrow: /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
    any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^ap/i,
        pm: /^ip/i,
        midnight: /^keskiyö/i,
        noon: /^keskipäivä/i,
        morning: /aamupäivällä/i,
        afternoon: /iltapäivällä/i,
        evening: /illalla/i,
        night: /yöllä/i
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
// node_modules/date-fns/esm/locale/fi/index.js
var locale = {
    code: "fi",
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
var fi_default = locale;
export { fi_default };
