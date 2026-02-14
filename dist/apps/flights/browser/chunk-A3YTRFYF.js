import { isSameDay } from "@nf-internal/chunk-I4PV6TIC";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isToday/index.js
function isToday(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameDay(dirtyDate, Date.now());
}
export { isToday };
