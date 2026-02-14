import { getTimezoneOffsetInMilliseconds } from "@nf-internal/chunk-OBRWG5KZ";
import { startOfISOWeek } from "@nf-internal/chunk-CKVZFPX6";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInCalendarISOWeeks/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft);
    var startOfISOWeekRight = startOfISOWeek(dirtyDateRight);
    var timestampLeft = startOfISOWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfISOWeekLeft);
    var timestampRight = startOfISOWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfISOWeekRight);
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}
export { differenceInCalendarISOWeeks };
