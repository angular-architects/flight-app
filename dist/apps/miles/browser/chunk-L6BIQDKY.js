import { startOfWeekYear } from "@nf-internal/chunk-2PWASH4J";
import { startOfWeek } from "@nf-internal/chunk-YBP42KGB";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getWeek/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function getWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
export { getWeek };
