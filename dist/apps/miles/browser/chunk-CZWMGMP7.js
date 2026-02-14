import { isSaturday } from "@nf-internal/chunk-YBDIF6PN";
import { isSunday } from "@nf-internal/chunk-RUQN2ATR";
import { isWeekend } from "@nf-internal/chunk-BEHTZGQS";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/addBusinessDays/index.js
function addBusinessDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var startedOnWeekend = isWeekend(date);
    var amount = toInteger(dirtyAmount);
    if (isNaN(amount))
        return /* @__PURE__ */ new Date(NaN);
    var hours = date.getHours();
    var sign = amount < 0 ? -1 : 1;
    var fullWeeks = toInteger(amount / 5);
    date.setDate(date.getDate() + fullWeeks * 7);
    var restDays = Math.abs(amount % 5);
    while (restDays > 0) {
        date.setDate(date.getDate() + sign);
        if (!isWeekend(date))
            restDays -= 1;
    }
    if (startedOnWeekend && isWeekend(date) && amount !== 0) {
        if (isSaturday(date))
            date.setDate(date.getDate() + (sign < 0 ? 2 : -1));
        if (isSunday(date))
            date.setDate(date.getDate() + (sign < 0 ? 1 : -2));
    }
    date.setHours(hours);
    return date;
}
export { addBusinessDays };
