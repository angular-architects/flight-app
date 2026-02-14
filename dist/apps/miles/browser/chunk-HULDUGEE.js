import { startOfQuarter } from "@nf-internal/chunk-NRQE4ITS";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isSameQuarter/index.js
function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft);
    var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight);
    return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}
export { isSameQuarter };
