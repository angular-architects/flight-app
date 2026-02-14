import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/eachMonthOfInterval/index.js
function eachMonthOfInterval(dirtyInterval) {
    requiredArgs(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = toDate(interval.start);
    var endDate = toDate(interval.end);
    var endTime = endDate.getTime();
    var dates = [];
    if (!(startDate.getTime() <= endTime)) {
        throw new RangeError("Invalid interval");
    }
    var currentDate = startDate;
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setDate(1);
    while (currentDate.getTime() <= endTime) {
        dates.push(toDate(currentDate));
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    return dates;
}
export { eachMonthOfInterval };
