import { millisecondsInHour } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/millisecondsToHours/index.js
function millisecondsToHours(milliseconds) {
    requiredArgs(1, arguments);
    var hours = milliseconds / millisecondsInHour;
    return Math.floor(hours);
}
export { millisecondsToHours };
