import { addLeadingZeros } from "@nf-internal/chunk-2M5QGZ43";
import { isValid } from "@nf-internal/chunk-HUUVZHQT";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
// node_modules/date-fns/esm/formatRFC7231/index.js
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function formatRFC7231(dirtyDate) {
    if (arguments.length < 1) {
        throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
    }
    var originalDate = toDate(dirtyDate);
    if (!isValid(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    var dayName = days[originalDate.getUTCDay()];
    var dayOfMonth = addLeadingZeros(originalDate.getUTCDate(), 2);
    var monthName = months[originalDate.getUTCMonth()];
    var year = originalDate.getUTCFullYear();
    var hour = addLeadingZeros(originalDate.getUTCHours(), 2);
    var minute = addLeadingZeros(originalDate.getUTCMinutes(), 2);
    var second = addLeadingZeros(originalDate.getUTCSeconds(), 2);
    return "".concat(dayName, ", ").concat(dayOfMonth, " ").concat(monthName, " ").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(second, " GMT");
}
export { formatRFC7231 };
