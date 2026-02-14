import { addMilliseconds } from "@nf-internal/chunk-53UYSIZU";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/addSeconds/index.js
function addSeconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, amount * 1e3);
}
export { addSeconds };
