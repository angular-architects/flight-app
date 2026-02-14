import { monthsInQuarter } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/quartersToMonths/index.js
function quartersToMonths(quarters) {
    requiredArgs(1, arguments);
    return Math.floor(quarters * monthsInQuarter);
}
export { quartersToMonths };
