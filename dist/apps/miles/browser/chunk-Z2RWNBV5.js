import { formatDistance } from "@nf-internal/chunk-HMQ5VRVS";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/formatDistanceToNow/index.js
function formatDistanceToNow(dirtyDate, options) {
    requiredArgs(1, arguments);
    return formatDistance(dirtyDate, Date.now(), options);
}
export { formatDistanceToNow };
