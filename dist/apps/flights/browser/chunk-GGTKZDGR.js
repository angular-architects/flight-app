import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { _typeof } from "@nf-internal/chunk-D7ZASVPN";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/max/index.js
function max(dirtyDatesArray) {
    requiredArgs(1, arguments);
    var datesArray;
    if (dirtyDatesArray && typeof dirtyDatesArray.forEach === "function") {
        datesArray = dirtyDatesArray;
    }
    else if (_typeof(dirtyDatesArray) === "object" && dirtyDatesArray !== null) {
        datesArray = Array.prototype.slice.call(dirtyDatesArray);
    }
    else {
        return /* @__PURE__ */ new Date(NaN);
    }
    var result;
    datesArray.forEach(function (dirtyDate) {
        var currentDate = toDate(dirtyDate);
        if (result === void 0 || result < currentDate || isNaN(Number(currentDate))) {
            result = currentDate;
        }
    });
    return result || /* @__PURE__ */ new Date(NaN);
}
export { max };
