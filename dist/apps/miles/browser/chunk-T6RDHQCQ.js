import { isSameWeek } from "@nf-internal/chunk-FUUBBM63";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isSameISOWeek/index.js
function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    return isSameWeek(dirtyDateLeft, dirtyDateRight, {
        weekStartsOn: 1
    });
}
export { isSameISOWeek };
