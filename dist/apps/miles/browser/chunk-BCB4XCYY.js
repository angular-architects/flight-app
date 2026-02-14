import { addSeconds } from "@nf-internal/chunk-7T4RNMNF";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/subSeconds/index.js
function subSeconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addSeconds(dirtyDate, -amount);
}
export { subSeconds };
