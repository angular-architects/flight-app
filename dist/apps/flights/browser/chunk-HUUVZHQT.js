import { isDate } from "@nf-internal/chunk-OXW2AKVB";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isValid/index.js
function isValid(dirtyDate) {
    requiredArgs(1, arguments);
    if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
        return false;
    }
    var date = toDate(dirtyDate);
    return !isNaN(Number(date));
}
export { isValid };
