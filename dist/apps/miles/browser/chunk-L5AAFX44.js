import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/fromUnixTime/index.js
function fromUnixTime(dirtyUnixTime) {
    requiredArgs(1, arguments);
    var unixTime = toInteger(dirtyUnixTime);
    return toDate(unixTime * 1e3);
}
export { fromUnixTime };
