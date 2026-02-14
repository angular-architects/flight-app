import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getMilliseconds/index.js
function getMilliseconds(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var milliseconds = date.getMilliseconds();
    return milliseconds;
}
export { getMilliseconds };
