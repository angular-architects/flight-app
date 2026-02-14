import { addLeadingZeros } from "@nf-internal/chunk-2M5QGZ43";
import { isValid } from "@nf-internal/chunk-HUUVZHQT";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
// node_modules/date-fns/esm/formatRFC3339/index.js
function formatRFC3339(dirtyDate, options) {
    var _options$fractionDigi;
    if (arguments.length < 1) {
        throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    }
    var originalDate = toDate(dirtyDate);
    if (!isValid(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    var fractionDigits = Number((_options$fractionDigi = options === null || options === void 0 ? void 0 : options.fractionDigits) !== null && _options$fractionDigi !== void 0 ? _options$fractionDigi : 0);
    if (!(fractionDigits >= 0 && fractionDigits <= 3)) {
        throw new RangeError("fractionDigits must be between 0 and 3 inclusively");
    }
    var day = addLeadingZeros(originalDate.getDate(), 2);
    var month = addLeadingZeros(originalDate.getMonth() + 1, 2);
    var year = originalDate.getFullYear();
    var hour = addLeadingZeros(originalDate.getHours(), 2);
    var minute = addLeadingZeros(originalDate.getMinutes(), 2);
    var second = addLeadingZeros(originalDate.getSeconds(), 2);
    var fractionalSecond = "";
    if (fractionDigits > 0) {
        var milliseconds = originalDate.getMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, fractionDigits - 3));
        fractionalSecond = "." + addLeadingZeros(fractionalSeconds, fractionDigits);
    }
    var offset = "";
    var tzOffset = originalDate.getTimezoneOffset();
    if (tzOffset !== 0) {
        var absoluteOffset = Math.abs(tzOffset);
        var hourOffset = addLeadingZeros(toInteger(absoluteOffset / 60), 2);
        var minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
        var sign = tzOffset < 0 ? "+" : "-";
        offset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    }
    else {
        offset = "Z";
    }
    return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second).concat(fractionalSecond).concat(offset);
}
export { formatRFC3339 };
