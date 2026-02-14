import { monthsInYear } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/monthsToYears/index.js
function monthsToYears(months) {
    requiredArgs(1, arguments);
    var years = months / monthsInYear;
    return Math.floor(years);
}
export { monthsToYears };
