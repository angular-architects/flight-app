import { eachDayOfInterval } from "@nf-internal/chunk-3N3FGIOZ";
import { isSunday } from "@nf-internal/chunk-RUQN2ATR";
import { isWeekend } from "@nf-internal/chunk-BEHTZGQS";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/eachWeekendOfInterval/index.js
function eachWeekendOfInterval(interval) {
    requiredArgs(1, arguments);
    var dateInterval = eachDayOfInterval(interval);
    var weekends = [];
    var index = 0;
    while (index < dateInterval.length) {
        var date = dateInterval[index++];
        if (isWeekend(date)) {
            weekends.push(date);
            if (isSunday(date))
                index = index + 5;
        }
    }
    return weekends;
}
export { eachWeekendOfInterval };
