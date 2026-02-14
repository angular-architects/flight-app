import { addYears } from "@nf-internal/chunk-EZDCAAOI";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/subYears/index.js
function subYears(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addYears(dirtyDate, -amount);
}
export { subYears };
