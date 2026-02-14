import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isEqual/index.js
function isEqual(dirtyLeftDate, dirtyRightDate) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyLeftDate);
    var dateRight = toDate(dirtyRightDate);
    return dateLeft.getTime() === dateRight.getTime();
}
export { isEqual };
