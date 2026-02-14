import { startOfISOWeek } from "@nf-internal/chunk-CKVZFPX6";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getISOWeekYear/index.js
function getISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getFullYear();
    var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    }
    else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    }
    else {
        return year - 1;
    }
}
export { getISOWeekYear };
