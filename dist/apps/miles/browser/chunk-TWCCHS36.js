import { formatDistance_default, localize_default, match_default } from "@nf-internal/chunk-RUGE5WZD";
import { buildFormatLongFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/fr-CH/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE d MMMM y",
    long: "d MMMM y",
    medium: "d MMM y",
    short: "dd.MM.y"
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
// node_modules/date-fns/esm/locale/fr-CH/_lib/formatRelative/index.js
var formatRelativeLocale = {
    lastWeek: "eeee 'la semaine derni\xE8re \xE0' p",
    yesterday: "'hier \xE0' p",
    today: "'aujourd\u2019hui \xE0' p",
    tomorrow: "'demain \xE0' p'",
    nextWeek: "eeee 'la semaine prochaine \xE0' p",
    other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;
// node_modules/date-fns/esm/locale/fr-CH/index.js
var locale = {
    code: "fr-CH",
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
var fr_CH_default = locale;
export { fr_CH_default };
