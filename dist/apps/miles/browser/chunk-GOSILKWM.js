import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getSeconds/index.js
function getSeconds(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var seconds = date.getSeconds();
    return seconds;
}
export { getSeconds };
