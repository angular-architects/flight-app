import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/differenceInMilliseconds/index.js
function differenceInMilliseconds(dateLeft, dateRight) {
    requiredArgs(2, arguments);
    return toDate(dateLeft).getTime() - toDate(dateRight).getTime();
}
export { differenceInMilliseconds };
