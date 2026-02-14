import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getDay/index.js
function getDay(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var day = date.getDay();
    return day;
}
export { getDay };
