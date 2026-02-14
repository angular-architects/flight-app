import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isWednesday/index.js
function isWednesday(dirtyDate) {
    requiredArgs(1, arguments);
    return toDate(dirtyDate).getDay() === 3;
}
export { isWednesday };
