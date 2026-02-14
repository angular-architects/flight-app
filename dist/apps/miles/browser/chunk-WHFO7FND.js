import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/compareAsc/index.js
function compareAsc(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var diff = dateLeft.getTime() - dateRight.getTime();
    if (diff < 0) {
        return -1;
    }
    else if (diff > 0) {
        return 1;
    }
    else {
        return diff;
    }
}
export { compareAsc };
