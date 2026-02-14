import { isSameYear } from "@nf-internal/chunk-KLYAJZPX";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isThisYear/index.js
function isThisYear(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameYear(dirtyDate, Date.now());
}
export { isThisYear };
