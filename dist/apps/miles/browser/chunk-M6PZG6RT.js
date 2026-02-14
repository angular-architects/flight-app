import { secondsInMinute } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/minutesToSeconds/index.js
function minutesToSeconds(minutes) {
    requiredArgs(1, arguments);
    return Math.floor(minutes * secondsInMinute);
}
export { minutesToSeconds };
