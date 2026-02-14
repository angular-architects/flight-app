import { differenceInCalendarDays } from "@nf-internal/chunk-OJ4OXMBJ";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInDays/index.js
function compareLocalAsc(dateLeft, dateRight) {
    var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
    if (diff < 0) {
        return -1;
    }
    else if (diff > 0) {
        return 1;
    }
    else {
        return diff;
    }
}
function differenceInDays(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var sign = compareLocalAsc(dateLeft, dateRight);
    var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight));
    dateLeft.setDate(dateLeft.getDate() - sign * difference);
    var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
    var result = sign * (difference - isLastDayNotFull);
    return result === 0 ? 0 : result;
}
export { differenceInDays };
