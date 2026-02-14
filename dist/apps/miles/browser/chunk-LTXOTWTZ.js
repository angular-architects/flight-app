import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isWithinInterval/index.js
function isWithinInterval(dirtyDate, interval) {
    requiredArgs(2, arguments);
    var time = toDate(dirtyDate).getTime();
    var startTime = toDate(interval.start).getTime();
    var endTime = toDate(interval.end).getTime();
    if (!(startTime <= endTime)) {
        throw new RangeError("Invalid interval");
    }
    return time >= startTime && time <= endTime;
}
export { isWithinInterval };
