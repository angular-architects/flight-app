import { nextDay } from "@nf-internal/chunk-CPEA2DWK";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/nextSaturday/index.js
function nextSaturday(date) {
    requiredArgs(1, arguments);
    return nextDay(date, 6);
}
export { nextSaturday };
