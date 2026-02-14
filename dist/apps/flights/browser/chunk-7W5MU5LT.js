import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isMonday/index.js
function isMonday(date) {
    requiredArgs(1, arguments);
    return toDate(date).getDay() === 1;
}
export { isMonday };
