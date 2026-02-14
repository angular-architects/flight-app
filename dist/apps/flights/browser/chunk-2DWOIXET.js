import { addQuarters } from "@nf-internal/chunk-KMO57C7Y";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/subQuarters/index.js
function subQuarters(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addQuarters(dirtyDate, -amount);
}
export { subQuarters };
