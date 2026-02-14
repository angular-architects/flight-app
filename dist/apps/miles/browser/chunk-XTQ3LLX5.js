import { setMonth } from "@nf-internal/chunk-3LC4SHP7";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { _typeof } from "@nf-internal/chunk-D7ZASVPN";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/set/index.js
function set(dirtyDate, values) {
    requiredArgs(2, arguments);
    if (_typeof(values) !== "object" || values === null) {
        throw new RangeError("values parameter must be an object");
    }
    var date = toDate(dirtyDate);
    if (isNaN(date.getTime())) {
        return /* @__PURE__ */ new Date(NaN);
    }
    if (values.year != null) {
        date.setFullYear(values.year);
    }
    if (values.month != null) {
        date = setMonth(date, values.month);
    }
    if (values.date != null) {
        date.setDate(toInteger(values.date));
    }
    if (values.hours != null) {
        date.setHours(toInteger(values.hours));
    }
    if (values.minutes != null) {
        date.setMinutes(toInteger(values.minutes));
    }
    if (values.seconds != null) {
        date.setSeconds(toInteger(values.seconds));
    }
    if (values.milliseconds != null) {
        date.setMilliseconds(toInteger(values.milliseconds));
    }
    return date;
}
export { set };
