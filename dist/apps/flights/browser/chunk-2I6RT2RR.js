import { formatDistanceStrict } from "@nf-internal/chunk-SIQU324K";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/formatDistanceToNowStrict/index.js
function formatDistanceToNowStrict(dirtyDate, options) {
    requiredArgs(1, arguments);
    return formatDistanceStrict(dirtyDate, Date.now(), options);
}
export { formatDistanceToNowStrict };
