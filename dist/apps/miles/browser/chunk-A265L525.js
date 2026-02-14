import { startOfHour } from "@nf-internal/chunk-IS6PLRVX";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isSameHour/index.js
function isSameHour(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeftStartOfHour = startOfHour(dirtyDateLeft);
    var dateRightStartOfHour = startOfHour(dirtyDateRight);
    return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime();
}
export { isSameHour };
