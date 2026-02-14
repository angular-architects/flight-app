import { startOfDay } from "@nf-internal/chunk-Z24DTH4O";
import { getTimezoneOffsetInMilliseconds } from "@nf-internal/chunk-OBRWG5KZ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInCalendarDays/index.js
var MILLISECONDS_IN_DAY = 864e5;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var startOfDayLeft = startOfDay(dirtyDateLeft);
    var startOfDayRight = startOfDay(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
    var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight);
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
export { differenceInCalendarDays };
