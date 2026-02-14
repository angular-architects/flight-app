import { isSameMinute } from "@nf-internal/chunk-3HFOQWZG";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isThisMinute/index.js
function isThisMinute(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameMinute(Date.now(), dirtyDate);
}
export { isThisMinute };
