import { getISOWeekYear } from "@nf-internal/chunk-RE4UM5WB";
import { startOfISOWeek } from "@nf-internal/chunk-CKVZFPX6";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/startOfISOWeekYear/index.js
function startOfISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getISOWeekYear(dirtyDate);
    var fourthOfJanuary = /* @__PURE__ */ new Date(0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    var date = startOfISOWeek(fourthOfJanuary);
    return date;
}
export { startOfISOWeekYear };
