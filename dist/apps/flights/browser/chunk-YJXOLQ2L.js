import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isAfter/index.js
function isAfter(dirtyDate, dirtyDateToCompare) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var dateToCompare = toDate(dirtyDateToCompare);
    return date.getTime() > dateToCompare.getTime();
}
export { isAfter };
