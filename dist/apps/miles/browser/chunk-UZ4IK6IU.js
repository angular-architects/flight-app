import { getRoundingMethod } from "@nf-internal/chunk-YFGAE7VT";
import { differenceInMonths } from "@nf-internal/chunk-IESKAHMY";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInQuarters/index.js
function differenceInQuarters(dateLeft, dateRight, options) {
    requiredArgs(2, arguments);
    var diff = differenceInMonths(dateLeft, dateRight) / 3;
    return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
export { differenceInQuarters };
