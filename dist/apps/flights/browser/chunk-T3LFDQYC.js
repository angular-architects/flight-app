import { subDays } from "@nf-internal/chunk-YCMM7QYT";
import { isSameDay } from "@nf-internal/chunk-I4PV6TIC";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isYesterday/index.js
function isYesterday(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameDay(dirtyDate, subDays(Date.now(), 1));
}
export { isYesterday };
