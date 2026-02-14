import { startOfDay } from "@nf-internal/chunk-Z24DTH4O";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isSameDay/index.js
function isSameDay(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
    var dateRightStartOfDay = startOfDay(dirtyDateRight);
    return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}
export { isSameDay };
