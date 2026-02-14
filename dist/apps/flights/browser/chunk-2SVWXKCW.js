import { addMinutes } from "@nf-internal/chunk-DBE7IVC6";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/subMinutes/index.js
function subMinutes(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMinutes(dirtyDate, -amount);
}
export { subMinutes };
