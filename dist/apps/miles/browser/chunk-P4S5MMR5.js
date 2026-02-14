import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setMilliseconds/index.js
function setMilliseconds(dirtyDate, dirtyMilliseconds) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var milliseconds = toInteger(dirtyMilliseconds);
    date.setMilliseconds(milliseconds);
    return date;
}
export { setMilliseconds };
