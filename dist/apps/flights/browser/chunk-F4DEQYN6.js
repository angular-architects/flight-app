import { startOfISOWeekYear } from "@nf-internal/chunk-QEFBUR3B";
import { startOfISOWeek } from "@nf-internal/chunk-CKVZFPX6";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getISOWeek/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function getISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
export { getISOWeek };
