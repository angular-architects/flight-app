import { addDays } from "@nf-internal/chunk-2SXCWKDP";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/subDays/index.js
function subDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addDays(dirtyDate, -amount);
}
export { subDays };
