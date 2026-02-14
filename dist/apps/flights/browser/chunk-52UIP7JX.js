import { millisecondsInMinute } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/millisecondsToMinutes/index.js
function millisecondsToMinutes(milliseconds) {
    requiredArgs(1, arguments);
    var minutes = milliseconds / millisecondsInMinute;
    return Math.floor(minutes);
}
export { millisecondsToMinutes };
