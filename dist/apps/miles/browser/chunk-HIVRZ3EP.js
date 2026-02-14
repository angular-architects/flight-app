import { startOfMinute } from "@nf-internal/chunk-GAPDIY2C";
import { addMinutes } from "@nf-internal/chunk-DBE7IVC6";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/eachMinuteOfInterval/index.js
function eachMinuteOfInterval(interval, options) {
    var _options$step;
    requiredArgs(1, arguments);
    var startDate = startOfMinute(toDate(interval.start));
    var endDate = toDate(interval.end);
    var startTime = startDate.getTime();
    var endTime = endDate.getTime();
    if (startTime >= endTime) {
        throw new RangeError("Invalid interval");
    }
    var dates = [];
    var currentDate = startDate;
    var step = Number((_options$step = options === null || options === void 0 ? void 0 : options.step) !== null && _options$step !== void 0 ? _options$step : 1);
    if (step < 1 || isNaN(step))
        throw new RangeError("`options.step` must be a number equal to or greater than 1");
    while (currentDate.getTime() <= endTime) {
        dates.push(toDate(currentDate));
        currentDate = addMinutes(currentDate, step);
    }
    return dates;
}
export { eachMinuteOfInterval };
