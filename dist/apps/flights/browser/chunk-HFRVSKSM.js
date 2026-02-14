import { addWeeks } from "@nf-internal/chunk-KMJPZFPK";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/subWeeks/index.js
function subWeeks(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addWeeks(dirtyDate, -amount);
}
export { subWeeks };
