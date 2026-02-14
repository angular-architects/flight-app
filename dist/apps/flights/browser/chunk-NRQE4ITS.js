import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/startOfQuarter/index.js
function startOfQuarter(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var currentMonth = date.getMonth();
    var month = currentMonth - currentMonth % 3;
    date.setMonth(month, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
export { startOfQuarter };
