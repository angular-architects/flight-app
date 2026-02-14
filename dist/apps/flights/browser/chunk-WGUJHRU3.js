import { startOfUTCWeek } from "@nf-internal/chunk-BGDVF36W";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js
function isSameUTCWeek(dirtyDateLeft, dirtyDateRight, options) {
    requiredArgs(2, arguments);
    var dateLeftStartOfWeek = startOfUTCWeek(dirtyDateLeft, options);
    var dateRightStartOfWeek = startOfUTCWeek(dirtyDateRight, options);
    return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}
export { isSameUTCWeek };
