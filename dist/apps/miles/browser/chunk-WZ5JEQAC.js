import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getYear/index.js
function getYear(dirtyDate) {
    requiredArgs(1, arguments);
    return toDate(dirtyDate).getFullYear();
}
export { getYear };
