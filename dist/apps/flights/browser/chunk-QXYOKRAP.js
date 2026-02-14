import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getQuarter/index.js
function getQuarter(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var quarter = Math.floor(date.getMonth() / 3) + 1;
    return quarter;
}
export { getQuarter };
