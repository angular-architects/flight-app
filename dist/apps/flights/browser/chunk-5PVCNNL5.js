import { getRoundingMethod } from "@nf-internal/chunk-YFGAE7VT";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
// node_modules/date-fns/esm/roundToNearestMinutes/index.js
function roundToNearestMinutes(dirtyDate, options) {
    var _options$nearestTo;
    if (arguments.length < 1) {
        throw new TypeError("1 argument required, but only none provided present");
    }
    var nearestTo = toInteger((_options$nearestTo = options === null || options === void 0 ? void 0 : options.nearestTo) !== null && _options$nearestTo !== void 0 ? _options$nearestTo : 1);
    if (nearestTo < 1 || nearestTo > 30) {
        throw new RangeError("`options.nearestTo` must be between 1 and 30");
    }
    var date = toDate(dirtyDate);
    var seconds = date.getSeconds();
    var minutes = date.getMinutes() + seconds / 60;
    var roundingMethod = getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod);
    var roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
    var remainderMinutes = minutes % nearestTo;
    var addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), roundedMinutes + addedMinutes);
}
export { roundToNearestMinutes };
