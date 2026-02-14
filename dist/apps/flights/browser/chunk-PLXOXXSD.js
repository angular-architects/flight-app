import { isSameWeek } from "@nf-internal/chunk-FUUBBM63";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isThisWeek/index.js
function isThisWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    return isSameWeek(dirtyDate, Date.now(), options);
}
export { isThisWeek };
