import { getQuarter } from "@nf-internal/chunk-QXYOKRAP";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInCalendarQuarters/index.js
function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
    var quarterDiff = getQuarter(dateLeft) - getQuarter(dateRight);
    return yearDiff * 4 + quarterDiff;
}
export { differenceInCalendarQuarters };
