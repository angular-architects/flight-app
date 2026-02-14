import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/startOfYear/index.js
function startOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var cleanDate = toDate(dirtyDate);
    var date = /* @__PURE__ */ new Date(0);
    date.setFullYear(cleanDate.getFullYear(), 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
export { startOfYear };
