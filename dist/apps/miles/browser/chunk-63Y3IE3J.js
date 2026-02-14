import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getOverlappingDaysInIntervals/index.js
var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1e3;
function getOverlappingDaysInIntervals(dirtyIntervalLeft, dirtyIntervalRight) {
    requiredArgs(2, arguments);
    var intervalLeft = dirtyIntervalLeft || {};
    var intervalRight = dirtyIntervalRight || {};
    var leftStartTime = toDate(intervalLeft.start).getTime();
    var leftEndTime = toDate(intervalLeft.end).getTime();
    var rightStartTime = toDate(intervalRight.start).getTime();
    var rightEndTime = toDate(intervalRight.end).getTime();
    if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
        throw new RangeError("Invalid interval");
    }
    var isOverlapping = leftStartTime < rightEndTime && rightStartTime < leftEndTime;
    if (!isOverlapping) {
        return 0;
    }
    var overlapStartDate = rightStartTime < leftStartTime ? leftStartTime : rightStartTime;
    var overlapEndDate = rightEndTime > leftEndTime ? leftEndTime : rightEndTime;
    var differenceInMs = overlapEndDate - overlapStartDate;
    return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY);
}
export { getOverlappingDaysInIntervals };
