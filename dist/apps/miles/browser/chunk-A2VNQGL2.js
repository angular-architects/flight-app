import { isSameDay } from "@nf-internal/chunk-I4PV6TIC";
import { isValid } from "@nf-internal/chunk-HUUVZHQT";
import { isWeekend } from "@nf-internal/chunk-BEHTZGQS";
import { differenceInCalendarDays } from "@nf-internal/chunk-OJ4OXMBJ";
import { addDays } from "@nf-internal/chunk-2SXCWKDP";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInBusinessDays/index.js
function differenceInBusinessDays(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    if (!isValid(dateLeft) || !isValid(dateRight))
        return NaN;
    var calendarDifference = differenceInCalendarDays(dateLeft, dateRight);
    var sign = calendarDifference < 0 ? -1 : 1;
    var weeks = toInteger(calendarDifference / 7);
    var result = weeks * 5;
    dateRight = addDays(dateRight, weeks * 7);
    while (!isSameDay(dateLeft, dateRight)) {
        result += isWeekend(dateRight) ? 0 : sign;
        dateRight = addDays(dateRight, sign);
    }
    return result === 0 ? 0 : result;
}
export { differenceInBusinessDays };
