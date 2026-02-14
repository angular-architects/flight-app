import { startOfSecond } from "@nf-internal/chunk-2HIRIQT3";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isSameSecond/index.js
function isSameSecond(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft);
    var dateRightStartOfSecond = startOfSecond(dirtyDateRight);
    return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
}
export { isSameSecond };
