import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getMinutes/index.js
function getMinutes(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var minutes = date.getMinutes();
    return minutes;
}
export { getMinutes };
