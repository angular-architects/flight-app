import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/eachDayOfInterval/index.js
function eachDayOfInterval(dirtyInterval, options) {
    var _options$step;
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
    var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
    if (step < 1 || isNaN(step))
        throw new RangeError("`options.step` must be a number greater than 1");
    while (currentDate.getTime() <= endTime) {
        dates.push(toDate(currentDate));
        currentDate.setDate(currentDate.getDate() + step);
        currentDate.setHours(0, 0, 0, 0);
    }
    return dates;
}
export { eachDayOfInterval };
