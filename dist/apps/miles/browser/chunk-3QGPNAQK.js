import { differenceInCalendarYears } from "@nf-internal/chunk-POTOETVP";
import { compareAsc } from "@nf-internal/chunk-WHFO7FND";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInYears/index.js
function differenceInYears(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var sign = compareAsc(dateLeft, dateRight);
    var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight));
    dateLeft.setFullYear(1584);
    dateRight.setFullYear(1584);
    var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign;
    var result = sign * (difference - Number(isLastYearNotFull));
    return result === 0 ? 0 : result;
}
export { differenceInYears };
