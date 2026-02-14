import { daysInWeek } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/daysToWeeks/index.js
function daysToWeeks(days) {
    requiredArgs(1, arguments);
    var weeks = days / daysInWeek;
    return Math.floor(weeks);
}
export { daysToWeeks };
