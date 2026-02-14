import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setDate/index.js
function setDate(dirtyDate, dirtyDayOfMonth) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var dayOfMonth = toInteger(dirtyDayOfMonth);
    date.setDate(dayOfMonth);
    return date;
}
export { setDate };
