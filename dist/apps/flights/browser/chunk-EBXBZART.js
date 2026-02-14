import { addMonths } from "@nf-internal/chunk-A27RGXBO";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/subMonths/index.js
function subMonths(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMonths(dirtyDate, -amount);
}
export { subMonths };
