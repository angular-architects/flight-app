import { isSameISOWeek } from "@nf-internal/chunk-T6RDHQCQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isThisISOWeek/index.js
function isThisISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameISOWeek(dirtyDate, Date.now());
}
export { isThisISOWeek };
