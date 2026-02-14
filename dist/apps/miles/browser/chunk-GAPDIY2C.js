import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/startOfMinute/index.js
function startOfMinute(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setSeconds(0, 0);
    return date;
}
export { startOfMinute };
