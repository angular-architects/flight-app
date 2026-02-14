import { startOfMinute } from "@nf-internal/chunk-GAPDIY2C";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isSameMinute/index.js
function isSameMinute(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft);
    var dateRightStartOfMinute = startOfMinute(dirtyDateRight);
    return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
}
export { isSameMinute };
