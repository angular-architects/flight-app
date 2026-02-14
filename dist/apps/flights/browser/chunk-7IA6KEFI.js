import { differenceInDays } from "@nf-internal/chunk-USJ2KYLK";
import { getRoundingMethod } from "@nf-internal/chunk-YFGAE7VT";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInWeeks/index.js
function differenceInWeeks(dateLeft, dateRight, options) {
    requiredArgs(2, arguments);
    var diff = differenceInDays(dateLeft, dateRight) / 7;
    return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
export { differenceInWeeks };
