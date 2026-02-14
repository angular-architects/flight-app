import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/addDays/index.js
function addDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger(dirtyAmount);
    if (isNaN(amount)) {
        return /* @__PURE__ */ new Date(NaN);
    }
    if (!amount) {
        return date;
    }
    date.setDate(date.getDate() + amount);
    return date;
}
export { addDays };
