import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/lastDayOfDecade/index.js
function lastDayOfDecade(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getFullYear();
    var decade = 9 + Math.floor(year / 10) * 10;
    date.setFullYear(decade + 1, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date;
}
export { lastDayOfDecade };
