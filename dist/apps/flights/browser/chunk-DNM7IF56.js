import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isTuesday/index.js
function isTuesday(dirtyDate) {
    requiredArgs(1, arguments);
    return toDate(dirtyDate).getDay() === 2;
}
export { isTuesday };
