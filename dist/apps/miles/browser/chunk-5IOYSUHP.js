import { getISODay } from "@nf-internal/chunk-RNW6JLMB";
import { addDays } from "@nf-internal/chunk-2SXCWKDP";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setISODay/index.js
function setISODay(dirtyDate, dirtyDay) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var day = toInteger(dirtyDay);
    var currentDay = getISODay(date);
    var diff = day - currentDay;
    return addDays(date, diff);
}
export { setISODay };
