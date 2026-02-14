import { startOfQuarter } from "@nf-internal/chunk-NRQE4ITS";
import { addQuarters } from "@nf-internal/chunk-KMO57C7Y";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/eachQuarterOfInterval/index.js
function eachQuarterOfInterval(dirtyInterval) {
    requiredArgs(1, arguments);
    var interval = dirtyInterval || {};
    var startDate = toDate(interval.start);
    var endDate = toDate(interval.end);
    var endTime = endDate.getTime();
    if (!(startDate.getTime() <= endTime)) {
        throw new RangeError("Invalid interval");
    }
    var startDateQuarter = startOfQuarter(startDate);
    var endDateQuarter = startOfQuarter(endDate);
    endTime = endDateQuarter.getTime();
    var quarters = [];
    var currentQuarter = startDateQuarter;
    while (currentQuarter.getTime() <= endTime) {
        quarters.push(toDate(currentQuarter));
        currentQuarter = addQuarters(currentQuarter, 1);
    }
    return quarters;
}
export { eachQuarterOfInterval };
