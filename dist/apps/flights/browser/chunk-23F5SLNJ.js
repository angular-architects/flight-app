import { millisecondsInSecond } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/millisecondsToSeconds/index.js
function millisecondsToSeconds(milliseconds) {
    requiredArgs(1, arguments);
    var seconds = milliseconds / millisecondsInSecond;
    return Math.floor(seconds);
}
export { millisecondsToSeconds };
