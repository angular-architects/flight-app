import { secondsInMinute } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/secondsToMinutes/index.js
function secondsToMinutes(seconds) {
    requiredArgs(1, arguments);
    var minutes = seconds / secondsInMinute;
    return Math.floor(minutes);
}
export { secondsToMinutes };
