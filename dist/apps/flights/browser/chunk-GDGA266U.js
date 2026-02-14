import { startOfYear } from "@nf-internal/chunk-KX4EVPLU";
import { differenceInCalendarDays } from "@nf-internal/chunk-OJ4OXMBJ";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getDayOfYear/index.js
function getDayOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = differenceInCalendarDays(date, startOfYear(date));
    var dayOfYear = diff + 1;
    return dayOfYear;
}
export { getDayOfYear };
