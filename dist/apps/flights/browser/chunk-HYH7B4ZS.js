import { addMilliseconds } from "@nf-internal/chunk-53UYSIZU";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/addHours/index.js
var MILLISECONDS_IN_HOUR = 36e5;
function addHours(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}
export { addHours };
