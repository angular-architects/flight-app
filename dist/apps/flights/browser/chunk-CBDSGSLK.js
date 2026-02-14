import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isFirstDayOfMonth/index.js
function isFirstDayOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    return toDate(dirtyDate).getDate() === 1;
}
export { isFirstDayOfMonth };
