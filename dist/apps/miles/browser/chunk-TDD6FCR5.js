import { daysInWeek } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/weeksToDays/index.js
function weeksToDays(weeks) {
    requiredArgs(1, arguments);
    return Math.floor(weeks * daysInWeek);
}
export { weeksToDays };
