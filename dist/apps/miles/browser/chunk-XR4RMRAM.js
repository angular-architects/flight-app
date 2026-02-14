import { formatDistance_default } from "@nf-internal/chunk-TVB6VXYN";
import { formatRelative_default, localize_default, match_default } from "@nf-internal/chunk-MDR3XCW7";
import { buildFormatLongFn } from "@nf-internal/chunk-ILKXEUEW";
// node_modules/date-fns/esm/locale/en-ZA/_lib/formatLong/index.js
var dateFormats = {
    full: "EEEE, dd MMMM yyyy",
    long: "dd MMMM yyyy",
    medium: "dd MMM yyyy",
    short: "yyyy/MM/dd"
};
var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
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
// node_modules/date-fns/esm/locale/en-ZA/index.js
var locale = {
    code: "en-ZA",
    formatDistance: formatDistance_default,
    formatLong: formatLong_default,
    formatRelative: formatRelative_default,
    localize: localize_default,
    match: match_default,
    options: {
        weekStartsOn: 0,
        // Sunday is the first day of the week.
        firstWeekContainsDate: 1
        // The week that contains Jan 1st is the first week of the year.
    }
};
var en_ZA_default = locale;
export { en_ZA_default };
