import { formatDistance_default, formatLong_default, formatRelative_default, match_default } from "@nf-internal/chunk-FHNGMHL7";
import { buildLocalizeFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/de-AT/_lib/localize/index.js
var eraValues = {
    narrow: ["v.Chr.", "n.Chr."],
    abbreviated: ["v.Chr.", "n.Chr."],
    wide: ["vor Christus", "nach Christus"]
};
var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
};
var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["J\xE4n", "Feb", "M\xE4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    wide: ["J\xE4nner", "Februar", "M\xE4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
};
var formattingMonthValues = {
    narrow: monthValues.narrow,
    abbreviated: ["J\xE4n.", "Feb.", "M\xE4rz", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
    wide: monthValues.wide
};
var dayValues = {
    narrow: ["S", "M", "D", "M", "D", "F", "S"],
    short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
    wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
};
var dayPeriodValues = {
    narrow: {
        am: "vm.",
        pm: "nm.",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "Morgen",
        afternoon: "Nachm.",
        evening: "Abend",
        night: "Nacht"
    },
    abbreviated: {
        am: "vorm.",
        pm: "nachm.",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "Morgen",
        afternoon: "Nachmittag",
        evening: "Abend",
        night: "Nacht"
    },
    wide: {
        am: "vormittags",
        pm: "nachmittags",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "Morgen",
        afternoon: "Nachmittag",
        evening: "Abend",
        night: "Nacht"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "vm.",
        pm: "nm.",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "morgens",
        afternoon: "nachm.",
        evening: "abends",
        night: "nachts"
    },
    abbreviated: {
        am: "vorm.",
        pm: "nachm.",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "morgens",
        afternoon: "nachmittags",
        evening: "abends",
        night: "nachts"
    },
    wide: {
        am: "vormittags",
        pm: "nachmittags",
        midnight: "Mitternacht",
        noon: "Mittag",
        morning: "morgens",
        afternoon: "nachmittags",
        evening: "abends",
        night: "nachts"
    }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber) {
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
        formattingValues: formattingMonthValues,
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
// node_modules/date-fns/esm/locale/de-AT/index.js
var locale = {
    code: "de-AT",
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
var de_AT_default = locale;
export { de_AT_default };
