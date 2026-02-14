import { subDays } from "@nf-internal/chunk-YCMM7QYT";
import { getDay } from "@nf-internal/chunk-4XXWAMMB";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/previousDay/index.js
function previousDay(date, day) {
    requiredArgs(2, arguments);
    var delta = getDay(date) - day;
    if (delta <= 0)
        delta += 7;
    return subDays(date, delta);
}
export { previousDay };
