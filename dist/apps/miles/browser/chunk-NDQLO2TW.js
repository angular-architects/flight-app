import { addLeadingZeros } from "@nf-internal/chunk-2M5QGZ43";
import { isValid } from "@nf-internal/chunk-HUUVZHQT";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
// node_modules/date-fns/esm/formatISO9075/index.js
function formatISO9075(dirtyDate, options) {
    var _options$format, _options$representati;
    if (arguments.length < 1) {
        throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
    }
    var originalDate = toDate(dirtyDate);
    if (!isValid(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    var format = String((_options$format = options === null || options === void 0 ? void 0 : options.format) !== null && _options$format !== void 0 ? _options$format : "extended");
    var representation = String((_options$representati = options === null || options === void 0 ? void 0 : options.representation) !== null && _options$representati !== void 0 ? _options$representati : "complete");
    if (format !== "extended" && format !== "basic") {
        throw new RangeError("format must be 'extended' or 'basic'");
    }
    if (representation !== "date" && representation !== "time" && representation !== "complete") {
        throw new RangeError("representation must be 'date', 'time', or 'complete'");
    }
    var result = "";
    var dateDelimiter = format === "extended" ? "-" : "";
    var timeDelimiter = format === "extended" ? ":" : "";
    if (representation !== "time") {
        var day = addLeadingZeros(originalDate.getDate(), 2);
        var month = addLeadingZeros(originalDate.getMonth() + 1, 2);
        var year = addLeadingZeros(originalDate.getFullYear(), 4);
        result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
    }
    if (representation !== "date") {
        var hour = addLeadingZeros(originalDate.getHours(), 2);
        var minute = addLeadingZeros(originalDate.getMinutes(), 2);
        var second = addLeadingZeros(originalDate.getSeconds(), 2);
        var separator = result === "" ? "" : " ";
        result = "".concat(result).concat(separator).concat(hour).concat(timeDelimiter).concat(minute).concat(timeDelimiter).concat(second);
    }
    return result;
}
export { formatISO9075 };
