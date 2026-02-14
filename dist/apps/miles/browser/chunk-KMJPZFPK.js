import { addDays } from "@nf-internal/chunk-2SXCWKDP";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/addWeeks/index.js
function addWeeks(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    var days = amount * 7;
    return addDays(dirtyDate, days);
}
export { addWeeks };
