import { startOfWeek } from "@nf-internal/chunk-YBP42KGB";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isSameWeek/index.js
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
    requiredArgs(2, arguments);
    var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, options);
    var dateRightStartOfWeek = startOfWeek(dirtyDateRight, options);
    return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}
export { isSameWeek };
