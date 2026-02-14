import { getISOWeekYear } from "@nf-internal/chunk-RE4UM5WB";
import { startOfISOWeek } from "@nf-internal/chunk-CKVZFPX6";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/lastDayOfISOWeekYear/index.js
function lastDayOfISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getISOWeekYear(dirtyDate);
    var fourthOfJanuary = /* @__PURE__ */ new Date(0);
    fourthOfJanuary.setFullYear(year + 1, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    var date = startOfISOWeek(fourthOfJanuary);
    date.setDate(date.getDate() - 1);
    return date;
}
export { lastDayOfISOWeekYear };
