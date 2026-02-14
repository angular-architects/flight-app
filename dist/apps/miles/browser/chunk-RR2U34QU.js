import { getTime } from "@nf-internal/chunk-KWCJKPP7";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/getUnixTime/index.js
function getUnixTime(dirtyDate) {
    requiredArgs(1, arguments);
    return Math.floor(getTime(dirtyDate) / 1e3);
}
export { getUnixTime };
