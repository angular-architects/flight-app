import { endOfWeek } from "@nf-internal/chunk-3X3PRYOO";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/endOfISOWeek/index.js
function endOfISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    return endOfWeek(dirtyDate, {
        weekStartsOn: 1
    });
}
export { endOfISOWeek };
