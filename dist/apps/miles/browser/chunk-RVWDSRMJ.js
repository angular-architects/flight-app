import { formatRelative_default } from "@nf-internal/chunk-G7U66OQ7";
import { formatDistance_default, localize_default, match_default } from "@nf-internal/chunk-RUGE5WZD";
import { buildFormatLongFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/fr/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE d MMMM y",
    long: "d MMMM y",
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
    full: "{{date}} '\xE0' {{time}}",
    long: "{{date}} '\xE0' {{time}}",
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
// node_modules/date-fns/esm/locale/fr/index.js
var locale = {
    code: "fr",
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
var fr_default = locale;
export { fr_default };
