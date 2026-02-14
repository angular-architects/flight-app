import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getISODay/index.js
function getISODay(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var day = date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day;
}
export { getISODay };
