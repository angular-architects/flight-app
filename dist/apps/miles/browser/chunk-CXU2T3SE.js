import { setMonth } from "@nf-internal/chunk-3LC4SHP7";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setQuarter/index.js
function setQuarter(dirtyDate, dirtyQuarter) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var quarter = toInteger(dirtyQuarter);
    var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
    var diff = quarter - oldQuarter;
    return setMonth(date, date.getMonth() + diff * 3);
}
export { setQuarter };
