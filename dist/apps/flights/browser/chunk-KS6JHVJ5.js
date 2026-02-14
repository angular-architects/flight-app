import { endOfMonth } from "@nf-internal/chunk-CNCZIJK5";
import { endOfDay } from "@nf-internal/chunk-NVIY7SLE";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isLastDayOfMonth/index.js
function isLastDayOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    return endOfDay(date).getTime() === endOfMonth(date).getTime();
}
export { isLastDayOfMonth };
