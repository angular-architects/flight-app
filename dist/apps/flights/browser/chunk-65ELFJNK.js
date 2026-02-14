import { startOfYear } from "@nf-internal/chunk-KX4EVPLU";
import { endOfYear } from "@nf-internal/chunk-6DGO7N32";
import { eachWeekendOfInterval } from "@nf-internal/chunk-6VSZ5ADD";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/eachWeekendOfYear/index.js
function eachWeekendOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var startDate = startOfYear(dirtyDate);
    var endDate = endOfYear(dirtyDate);
    return eachWeekendOfInterval({
        start: startDate,
        end: endDate
    });
}
export { eachWeekendOfYear };
