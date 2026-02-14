import { getDaysInMonth } from "@nf-internal/chunk-BXFUDBFQ";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setMonth/index.js
function setMonth(dirtyDate, dirtyMonth) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var month = toInteger(dirtyMonth);
    var year = date.getFullYear();
    var day = date.getDate();
    var dateWithDesiredMonth = /* @__PURE__ */ new Date(0);
    dateWithDesiredMonth.setFullYear(year, month, 15);
    dateWithDesiredMonth.setHours(0, 0, 0, 0);
    var daysInMonth = getDaysInMonth(dateWithDesiredMonth);
    date.setMonth(month, Math.min(day, daysInMonth));
    return date;
}
export { setMonth };
