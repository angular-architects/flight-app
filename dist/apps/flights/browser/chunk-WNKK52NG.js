import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setHours/index.js
function setHours(dirtyDate, dirtyHours) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var hours = toInteger(dirtyHours);
    date.setHours(hours);
    return date;
}
export { setHours };
