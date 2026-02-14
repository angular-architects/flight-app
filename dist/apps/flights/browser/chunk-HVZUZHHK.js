import { secondsInHour } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/hoursToSeconds/index.js
function hoursToSeconds(hours) {
    requiredArgs(1, arguments);
    return Math.floor(hours * secondsInHour);
}
export { hoursToSeconds };
