import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getDate/index.js
function getDate(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var dayOfMonth = date.getDate();
    return dayOfMonth;
}
export { getDate };
