import { getTimezoneOffsetInMilliseconds } from "@nf-internal/chunk-OBRWG5KZ";
import { startOfWeek } from "@nf-internal/chunk-YBP42KGB";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInCalendarWeeks/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, options) {
    requiredArgs(2, arguments);
    var startOfWeekLeft = startOfWeek(dirtyDateLeft, options);
    var startOfWeekRight = startOfWeek(dirtyDateRight, options);
    var timestampLeft = startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
    var timestampRight = startOfWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekRight);
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}
export { differenceInCalendarWeeks };
