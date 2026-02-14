import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isFuture/index.js
function isFuture(dirtyDate) {
    requiredArgs(1, arguments);
    return toDate(dirtyDate).getTime() > Date.now();
}
export { isFuture };
