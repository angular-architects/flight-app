import { quartersInYear } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/quartersToYears/index.js
function quartersToYears(quarters) {
    requiredArgs(1, arguments);
    var years = quarters / quartersInYear;
    return Math.floor(years);
}
export { quartersToYears };
