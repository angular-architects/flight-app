import { addHours } from "@nf-internal/chunk-HYH7B4ZS";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/subHours/index.js
function subHours(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addHours(dirtyDate, -amount);
}
export { subHours };
