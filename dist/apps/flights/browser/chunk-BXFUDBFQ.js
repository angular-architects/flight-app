import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getDaysInMonth/index.js
function getDaysInMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getFullYear();
    var monthIndex = date.getMonth();
    var lastDayOfMonth = /* @__PURE__ */ new Date(0);
    lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
    lastDayOfMonth.setHours(0, 0, 0, 0);
    return lastDayOfMonth.getDate();
}
export { getDaysInMonth };
