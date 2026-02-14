import { secondsInHour } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/secondsToHours/index.js
function secondsToHours(seconds) {
    requiredArgs(1, arguments);
    var hours = seconds / secondsInHour;
    return Math.floor(hours);
}
export { secondsToHours };
