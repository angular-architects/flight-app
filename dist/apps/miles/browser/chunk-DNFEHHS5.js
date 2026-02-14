import { getWeek } from "@nf-internal/chunk-L6BIQDKY";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setWeek/index.js
function setWeek(dirtyDate, dirtyWeek, options) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var week = toInteger(dirtyWeek);
    var diff = getWeek(date, options) - week;
    date.setDate(date.getDate() - diff * 7);
    return date;
}
export { setWeek };
