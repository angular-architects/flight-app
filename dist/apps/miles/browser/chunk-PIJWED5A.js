import { getISOWeek } from "@nf-internal/chunk-F4DEQYN6";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setISOWeek/index.js
function setISOWeek(dirtyDate, dirtyISOWeek) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var isoWeek = toInteger(dirtyISOWeek);
    var diff = getISOWeek(date) - isoWeek;
    date.setDate(date.getDate() - diff * 7);
    return date;
}
export { setISOWeek };
