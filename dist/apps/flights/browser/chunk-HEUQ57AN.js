import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getHours/index.js
function getHours(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var hours = date.getHours();
    return hours;
}
export { getHours };
