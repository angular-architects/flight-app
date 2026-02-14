import { isSameQuarter } from "@nf-internal/chunk-HULDUGEE";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isThisQuarter/index.js
function isThisQuarter(dirtyDate) {
    requiredArgs(1, arguments);
    return isSameQuarter(Date.now(), dirtyDate);
}
export { isThisQuarter };
