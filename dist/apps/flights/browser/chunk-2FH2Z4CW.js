import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setDayOfYear/index.js
function setDayOfYear(dirtyDate, dirtyDayOfYear) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var dayOfYear = toInteger(dirtyDayOfYear);
    date.setMonth(0);
    date.setDate(dayOfYear);
    return date;
}
export { setDayOfYear };
