import { addBusinessDays } from "@nf-internal/chunk-CZWMGMP7";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/subBusinessDays/index.js
function subBusinessDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addBusinessDays(dirtyDate, -amount);
}
export { subBusinessDays };
