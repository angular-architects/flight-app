import { startOfMonth } from "@nf-internal/chunk-TY72SU3X";
import { eachWeekendOfInterval } from "@nf-internal/chunk-6VSZ5ADD";
import { endOfMonth } from "@nf-internal/chunk-CNCZIJK5";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/eachWeekendOfMonth/index.js
function eachWeekendOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var startDate = startOfMonth(dirtyDate);
    if (isNaN(startDate.getTime()))
        throw new RangeError("The passed date is invalid");
    var endDate = endOfMonth(dirtyDate);
    return eachWeekendOfInterval({
        start: startDate,
        end: endDate
    });
}
export { eachWeekendOfMonth };
