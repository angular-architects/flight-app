import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isLeapYear/index.js
function isLeapYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getFullYear();
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
export { isLeapYear };
