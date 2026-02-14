import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setMinutes/index.js
function setMinutes(dirtyDate, dirtyMinutes) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var minutes = toInteger(dirtyMinutes);
    date.setMinutes(minutes);
    return date;
}
export { setMinutes };
