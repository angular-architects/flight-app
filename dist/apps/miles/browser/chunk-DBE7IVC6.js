import { addMilliseconds } from "@nf-internal/chunk-53UYSIZU";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/addMinutes/index.js
var MILLISECONDS_IN_MINUTE = 6e4;
function addMinutes(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}
export { addMinutes };
