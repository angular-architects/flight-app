import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/endOfDecade/index.js
function endOfDecade(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getFullYear();
    var decade = 9 + Math.floor(year / 10) * 10;
    date.setFullYear(decade, 11, 31);
    date.setHours(23, 59, 59, 999);
    return date;
}
export { endOfDecade };
