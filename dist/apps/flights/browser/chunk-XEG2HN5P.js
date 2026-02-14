import { startOfISOWeekYear } from "@nf-internal/chunk-QEFBUR3B";
import { differenceInCalendarDays } from "@nf-internal/chunk-OJ4OXMBJ";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setISOWeekYear/index.js
function setISOWeekYear(dirtyDate, dirtyISOWeekYear) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var isoWeekYear = toInteger(dirtyISOWeekYear);
    var diff = differenceInCalendarDays(date, startOfISOWeekYear(date));
    var fourthOfJanuary = /* @__PURE__ */ new Date(0);
    fourthOfJanuary.setFullYear(isoWeekYear, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    date = startOfISOWeekYear(fourthOfJanuary);
    date.setDate(date.getDate() + diff);
    return date;
}
export { setISOWeekYear };
