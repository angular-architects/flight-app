import { setISOWeekYear } from "@nf-internal/chunk-XEG2HN5P";
import { getISOWeekYear } from "@nf-internal/chunk-RE4UM5WB";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/addISOWeekYears/index.js
function addISOWeekYears(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return setISOWeekYear(dirtyDate, getISOWeekYear(dirtyDate) + amount);
}
export { addISOWeekYears };
