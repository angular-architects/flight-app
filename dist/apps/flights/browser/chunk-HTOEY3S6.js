import { isSameDay } from "@nf-internal/chunk-I4PV6TIC";
import { addDays } from "@nf-internal/chunk-2SXCWKDP";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isTomorrow/index.js
function isTomorrow(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameDay(dirtyDate, addDays(Date.now(), 1));
}
export { isTomorrow };
