import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/closestIndexTo/index.js
function closestIndexTo(dirtyDateToCompare, dirtyDatesArray) {
    requiredArgs(2, arguments);
    var dateToCompare = toDate(dirtyDateToCompare);
    if (isNaN(Number(dateToCompare)))
        return NaN;
    var timeToCompare = dateToCompare.getTime();
    var datesArray;
    if (dirtyDatesArray == null) {
        datesArray = [];
    }
    else if (typeof dirtyDatesArray.forEach === "function") {
        datesArray = dirtyDatesArray;
    }
    else {
        datesArray = Array.prototype.slice.call(dirtyDatesArray);
    }
    var result;
    var minDistance;
    datesArray.forEach(function (dirtyDate, index) {
        var currentDate = toDate(dirtyDate);
        if (isNaN(Number(currentDate))) {
            result = NaN;
            minDistance = NaN;
            return;
        }
        var distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result == null || distance < Number(minDistance)) {
            result = index;
            minDistance = distance;
        }
    });
    return result;
}
export { closestIndexTo };
