import { monthsInQuarter } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/monthsToQuarters/index.js
function monthsToQuarters(months) {
    requiredArgs(1, arguments);
    var quarters = months / monthsInQuarter;
    return Math.floor(quarters);
}
export { monthsToQuarters };
