import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setSeconds/index.js
function setSeconds(dirtyDate, dirtySeconds) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var seconds = toInteger(dirtySeconds);
    date.setSeconds(seconds);
    return date;
}
export { setSeconds };
