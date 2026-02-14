import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/endOfSecond/index.js
function endOfSecond(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setMilliseconds(999);
    return date;
}
export { endOfSecond };
