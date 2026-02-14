import { isLeapYear } from "@nf-internal/chunk-WHR2Z34S";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getDaysInYear/index.js
function getDaysInYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    if (String(new Date(date)) === "Invalid Date") {
        return NaN;
    }
    return isLeapYear(date) ? 366 : 365;
}
export { getDaysInYear };
