import { addMonths } from "@nf-internal/chunk-A27RGXBO";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/addQuarters/index.js
function addQuarters(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    var months = amount * 3;
    return addMonths(dirtyDate, months);
}
export { addQuarters };
