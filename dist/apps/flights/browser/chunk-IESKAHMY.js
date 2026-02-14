import { isLastDayOfMonth } from "@nf-internal/chunk-KS6JHVJ5";
import { differenceInCalendarMonths } from "@nf-internal/chunk-WMYSWSJD";
import { compareAsc } from "@nf-internal/chunk-WHFO7FND";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInMonths/index.js
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var sign = compareAsc(dateLeft, dateRight);
    var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
    var result;
    if (difference < 1) {
        result = 0;
    }
    else {
        if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
            dateLeft.setDate(30);
        }
        dateLeft.setMonth(dateLeft.getMonth() - sign * difference);
        var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;
        if (isLastDayOfMonth(toDate(dirtyDateLeft)) && difference === 1 && compareAsc(dirtyDateLeft, dateRight) === 1) {
            isLastMonthNotFull = false;
        }
        result = sign * (difference - Number(isLastMonthNotFull));
    }
    return result === 0 ? 0 : result;
}
export { differenceInMonths };
