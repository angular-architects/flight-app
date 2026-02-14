import { getISOWeekYear } from "@nf-internal/chunk-RE4UM5WB";
import { startOfISOWeek } from "@nf-internal/chunk-CKVZFPX6";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/endOfISOWeekYear/index.js
function endOfISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getISOWeekYear(dirtyDate);
    var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var date = startOfISOWeek(fourthOfJanuaryOfNextYear);
    date.setMilliseconds(date.getMilliseconds() - 1);
    return date;
}
export { endOfISOWeekYear };
