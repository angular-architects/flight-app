import { addWeeks } from "@nf-internal/chunk-KMJPZFPK";
import { startOfWeek } from "@nf-internal/chunk-YBP42KGB";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/eachWeekOfInterval/index.js
function eachWeekOfInterval(dirtyInterval, options) {
    requiredArgs(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = toDate(interval.start);
    var endDate = toDate(interval.end);
    var endTime = endDate.getTime();
    if (!(startDate.getTime() <= endTime)) {
        throw new RangeError("Invalid interval");
    }
    var startDateWeek = startOfWeek(startDate, options);
    var endDateWeek = startOfWeek(endDate, options);
    startDateWeek.setHours(15);
    endDateWeek.setHours(15);
    endTime = endDateWeek.getTime();
    var weeks = [];
    var currentWeek = startDateWeek;
    while (currentWeek.getTime() <= endTime) {
        currentWeek.setHours(0);
        weeks.push(toDate(currentWeek));
        currentWeek = addWeeks(currentWeek, 1);
        currentWeek.setHours(15);
    }
    return weeks;
}
export { eachWeekOfInterval };
