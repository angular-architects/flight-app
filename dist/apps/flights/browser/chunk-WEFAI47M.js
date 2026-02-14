import { addDays } from "@nf-internal/chunk-2SXCWKDP";
import { addMonths } from "@nf-internal/chunk-A27RGXBO";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { _typeof } from "@nf-internal/chunk-D7ZASVPN";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/add/index.js
function add(dirtyDate, duration) {
    requiredArgs(2, arguments);
    if (!duration || _typeof(duration) !== "object")
        return /* @__PURE__ */ new Date(NaN);
    var years = duration.years ? toInteger(duration.years) : 0;
    var months = duration.months ? toInteger(duration.months) : 0;
    var weeks = duration.weeks ? toInteger(duration.weeks) : 0;
    var days = duration.days ? toInteger(duration.days) : 0;
    var hours = duration.hours ? toInteger(duration.hours) : 0;
    var minutes = duration.minutes ? toInteger(duration.minutes) : 0;
    var seconds = duration.seconds ? toInteger(duration.seconds) : 0;
    var date = toDate(dirtyDate);
    var dateWithMonths = months || years ? addMonths(date, months + years * 12) : date;
    var dateWithDays = days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths;
    var minutesToAdd = minutes + hours * 60;
    var secondsToAdd = seconds + minutesToAdd * 60;
    var msToAdd = secondsToAdd * 1e3;
    var finalDate = new Date(dateWithDays.getTime() + msToAdd);
    return finalDate;
}
export { add };
