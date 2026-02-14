import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/endOfQuarter/index.js
function endOfQuarter(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var currentMonth = date.getMonth();
    var month = currentMonth - currentMonth % 3 + 3;
    date.setMonth(month, 0);
    date.setHours(23, 59, 59, 999);
    return date;
}
export { endOfQuarter };
