import { isSameHour } from "@nf-internal/chunk-A265L525";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isThisHour/index.js
function isThisHour(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameHour(Date.now(), dirtyDate);
}
export { isThisHour };
