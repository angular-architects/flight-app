import { startOfWeek } from "@nf-internal/chunk-YBP42KGB";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/startOfISOWeek/index.js
function startOfISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    return startOfWeek(dirtyDate, {
        weekStartsOn: 1
    });
}
export { startOfISOWeek };
