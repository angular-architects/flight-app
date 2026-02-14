import { subMonths } from "@nf-internal/chunk-EBXBZART";
import { subDays } from "@nf-internal/chunk-YCMM7QYT";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { _typeof } from "@nf-internal/chunk-D7ZASVPN";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/sub/index.js
function sub(date, duration) {
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
    var dateWithoutMonths = subMonths(date, months + years * 12);
    var dateWithoutDays = subDays(dateWithoutMonths, days + weeks * 7);
    var minutestoSub = minutes + hours * 60;
    var secondstoSub = seconds + minutestoSub * 60;
    var mstoSub = secondstoSub * 1e3;
    var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
    return finalDate;
}
export { sub };
