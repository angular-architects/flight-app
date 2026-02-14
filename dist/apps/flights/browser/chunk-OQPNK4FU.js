import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setYear/index.js
function setYear(dirtyDate, dirtyYear) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var year = toInteger(dirtyYear);
    if (isNaN(date.getTime())) {
        return /* @__PURE__ */ new Date(NaN);
    }
    date.setFullYear(year);
    return date;
}
export { setYear };
