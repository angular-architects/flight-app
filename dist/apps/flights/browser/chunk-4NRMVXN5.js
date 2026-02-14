import { minutesInHour } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/minutesToHours/index.js
function minutesToHours(minutes) {
    requiredArgs(1, arguments);
    var hours = minutes / minutesInHour;
    return Math.floor(hours);
}
export { minutesToHours };
