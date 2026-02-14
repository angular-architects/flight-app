import { addLeadingZeros } from "@nf-internal/chunk-2M5QGZ43";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/formatISO/index.js
function formatISO(date, options) {
    var _options$format, _options$representati;
    requiredArgs(1, arguments);
    var originalDate = toDate(date);
    if (isNaN(originalDate.getTime())) {
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
    var tzOffset = "";
    var dateDelimiter = format === "extended" ? "-" : "";
    var timeDelimiter = format === "extended" ? ":" : "";
    if (representation !== "time") {
        var day = addLeadingZeros(originalDate.getDate(), 2);
        var month = addLeadingZeros(originalDate.getMonth() + 1, 2);
        var year = addLeadingZeros(originalDate.getFullYear(), 4);
        result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
    }
    if (representation !== "date") {
        var offset = originalDate.getTimezoneOffset();
        if (offset !== 0) {
            var absoluteOffset = Math.abs(offset);
            var hourOffset = addLeadingZeros(Math.floor(absoluteOffset / 60), 2);
            var minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
            var sign = offset < 0 ? "+" : "-";
            tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
        }
        else {
            tzOffset = "Z";
        }
        var hour = addLeadingZeros(originalDate.getHours(), 2);
        var minute = addLeadingZeros(originalDate.getMinutes(), 2);
        var second = addLeadingZeros(originalDate.getSeconds(), 2);
        var separator = result === "" ? "" : "T";
        var time = [hour, minute, second].join(timeDelimiter);
        result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
    }
    return result;
}
export { formatISO };
