import { startOfISOWeekYear } from "@nf-internal/chunk-QEFBUR3B";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isSameISOWeekYear/index.js
function isSameISOWeekYear(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeftStartOfYear = startOfISOWeekYear(dirtyDateLeft);
    var dateRightStartOfYear = startOfISOWeekYear(dirtyDateRight);
    return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime();
}
export { isSameISOWeekYear };
