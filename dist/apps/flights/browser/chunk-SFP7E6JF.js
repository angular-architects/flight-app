import { addWeeks } from "@nf-internal/chunk-KMJPZFPK";
import { startOfISOWeekYear } from "@nf-internal/chunk-QEFBUR3B";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getISOWeeksInYear/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function getISOWeeksInYear(dirtyDate) {
    requiredArgs(1, arguments);
    var thisYear = startOfISOWeekYear(dirtyDate);
    var nextYear = startOfISOWeekYear(addWeeks(thisYear, 60));
    var diff = nextYear.valueOf() - thisYear.valueOf();
    return Math.round(diff / MILLISECONDS_IN_WEEK);
}
export { getISOWeeksInYear };
