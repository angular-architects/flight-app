import { getDay } from "@nf-internal/chunk-4XXWAMMB";
import { addDays } from "@nf-internal/chunk-2SXCWKDP";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/nextDay/index.js
function nextDay(date, day) {
    requiredArgs(2, arguments);
    var delta = day - getDay(date);
    if (delta <= 0)
        delta += 7;
    return addDays(date, delta);
}
export { nextDay };
