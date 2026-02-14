import { millisecondsInHour } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/hoursToMilliseconds/index.js
function hoursToMilliseconds(hours) {
    requiredArgs(1, arguments);
    return Math.floor(hours * millisecondsInHour);
}
export { hoursToMilliseconds };
