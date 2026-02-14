import { millisecondsInMinute } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/minutesToMilliseconds/index.js
function minutesToMilliseconds(minutes) {
    requiredArgs(1, arguments);
    return Math.floor(minutes * millisecondsInMinute);
}
export { minutesToMilliseconds };
