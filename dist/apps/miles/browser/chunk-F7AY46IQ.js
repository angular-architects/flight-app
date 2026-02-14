import { isSameMonth } from "@nf-internal/chunk-SUKTKSJ4";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isThisMonth/index.js
function isThisMonth(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameMonth(Date.now(), dirtyDate);
}
export { isThisMonth };
