import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/areIntervalsOverlapping/index.js
function areIntervalsOverlapping(intervalLeft, intervalRight, options) {
    requiredArgs(2, arguments);
    var leftStartTime = toDate(intervalLeft === null || intervalLeft === void 0 ? void 0 : intervalLeft.start).getTime();
    var leftEndTime = toDate(intervalLeft === null || intervalLeft === void 0 ? void 0 : intervalLeft.end).getTime();
    var rightStartTime = toDate(intervalRight === null || intervalRight === void 0 ? void 0 : intervalRight.start).getTime();
    var rightEndTime = toDate(intervalRight === null || intervalRight === void 0 ? void 0 : intervalRight.end).getTime();
    if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
        throw new RangeError("Invalid interval");
    }
    if (options !== null && options !== void 0 && options.inclusive) {
        return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
    }
    return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}
export { areIntervalsOverlapping };
