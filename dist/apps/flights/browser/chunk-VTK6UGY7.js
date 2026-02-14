import { subISOWeekYears } from "@nf-internal/chunk-2JJ3RZGZ";
import { differenceInCalendarISOWeekYears } from "@nf-internal/chunk-VVR2DV3R";
import { compareAsc } from "@nf-internal/chunk-WHFO7FND";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInISOWeekYears/index.js
function differenceInISOWeekYears(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var sign = compareAsc(dateLeft, dateRight);
    var difference = Math.abs(differenceInCalendarISOWeekYears(dateLeft, dateRight));
    dateLeft = subISOWeekYears(dateLeft, sign * difference);
    var isLastISOWeekYearNotFull = Number(compareAsc(dateLeft, dateRight) === -sign);
    var result = sign * (difference - isLastISOWeekYearNotFull);
    return result === 0 ? 0 : result;
}
export { differenceInISOWeekYears };
