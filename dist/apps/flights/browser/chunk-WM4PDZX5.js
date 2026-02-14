import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/eachYearOfInterval/index.js
function eachYearOfInterval(dirtyInterval) {
    requiredArgs(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = toDate(interval.start);
    var endDate = toDate(interval.end);
    var endTime = endDate.getTime();
    if (!(startDate.getTime() <= endTime)) {
        throw new RangeError("Invalid interval");
    }
    var dates = [];
    var currentDate = startDate;
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setMonth(0, 1);
    while (currentDate.getTime() <= endTime) {
        dates.push(toDate(currentDate));
        currentDate.setFullYear(currentDate.getFullYear() + 1);
    }
    return dates;
}
export { eachYearOfInterval };
