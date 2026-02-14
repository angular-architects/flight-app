import { isSameSecond } from "@nf-internal/chunk-3KUKPWVX";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isThisSecond/index.js
function isThisSecond(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameSecond(Date.now(), dirtyDate);
}
export { isThisSecond };
