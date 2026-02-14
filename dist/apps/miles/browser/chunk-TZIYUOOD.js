import { lastDayOfMonth } from "@nf-internal/chunk-JZ2BW2IH";
import { startOfMonth } from "@nf-internal/chunk-TY72SU3X";
import { differenceInCalendarWeeks } from "@nf-internal/chunk-PSBB4PMX";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getWeeksInMonth/index.js
function getWeeksInMonth(date, options) {
    requiredArgs(1, arguments);
    return differenceInCalendarWeeks(lastDayOfMonth(date), startOfMonth(date), options) + 1;
}
export { getWeeksInMonth };
