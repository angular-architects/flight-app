import { getRoundingMethod } from "@nf-internal/chunk-YFGAE7VT";
import { differenceInMilliseconds } from "@nf-internal/chunk-MIX5445P";
import { millisecondsInHour } from "@nf-internal/chunk-UH44DGCM";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInHours/index.js
function differenceInHours(dateLeft, dateRight, options) {
    requiredArgs(2, arguments);
    var diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInHour;
    return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
export { differenceInHours };
