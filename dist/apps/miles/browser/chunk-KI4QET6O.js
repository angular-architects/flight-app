import { lastDayOfWeek } from "@nf-internal/chunk-SCF2OSDG";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/lastDayOfISOWeek/index.js
function lastDayOfISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    return lastDayOfWeek(dirtyDate, {
        weekStartsOn: 1
    });
}
export { lastDayOfISOWeek };
