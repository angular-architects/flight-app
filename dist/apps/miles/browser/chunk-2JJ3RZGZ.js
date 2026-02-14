import { addISOWeekYears } from "@nf-internal/chunk-6TK2FYMU";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/subISOWeekYears/index.js
function subISOWeekYears(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addISOWeekYears(dirtyDate, -amount);
}
export { subISOWeekYears };
