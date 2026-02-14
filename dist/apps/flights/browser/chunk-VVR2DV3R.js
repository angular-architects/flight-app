import { getISOWeekYear } from "@nf-internal/chunk-RE4UM5WB";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInCalendarISOWeekYears/index.js
function differenceInCalendarISOWeekYears(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    return getISOWeekYear(dirtyDateLeft) - getISOWeekYear(dirtyDateRight);
}
export { differenceInCalendarISOWeekYears };
