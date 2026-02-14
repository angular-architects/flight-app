import { monthsInYear } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/yearsToMonths/index.js
function yearsToMonths(years) {
    requiredArgs(1, arguments);
    return Math.floor(years * monthsInYear);
}
export { yearsToMonths };
