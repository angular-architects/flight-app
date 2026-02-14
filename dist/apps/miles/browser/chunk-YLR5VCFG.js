import { getRoundingMethod } from "@nf-internal/chunk-YFGAE7VT";
import { differenceInMilliseconds } from "@nf-internal/chunk-MIX5445P";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInSeconds/index.js
function differenceInSeconds(dateLeft, dateRight, options) {
    requiredArgs(2, arguments);
    var diff = differenceInMilliseconds(dateLeft, dateRight) / 1e3;
    return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
export { differenceInSeconds };
