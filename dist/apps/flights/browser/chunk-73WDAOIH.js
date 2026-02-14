import { minutesInHour } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/hoursToMinutes/index.js
function hoursToMinutes(hours) {
    requiredArgs(1, arguments);
    return Math.floor(hours * minutesInHour);
}
export { hoursToMinutes };
