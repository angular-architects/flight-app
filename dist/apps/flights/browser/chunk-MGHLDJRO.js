import { nextDay } from "@nf-internal/chunk-CPEA2DWK";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/nextFriday/index.js
function nextFriday(date) {
    requiredArgs(1, arguments);
    return nextDay(date, 5);
}
export { nextFriday };
