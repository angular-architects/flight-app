import { defaultLocale_default } from "@nf-internal/chunk-2ZVJI4RB";
import { getDefaultOptions } from "@nf-internal/chunk-M2CTTFQ2";
// node_modules/date-fns/esm/formatDuration/index.js
var defaultFormat = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];
function formatDuration(duration, options) {
    var _ref, _options$locale, _options$format, _options$zero, _options$delimiter;
    if (arguments.length < 1) {
        throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
    }
    var defaultOptions = getDefaultOptions();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
    var format = (_options$format = options === null || options === void 0 ? void 0 : options.format) !== null && _options$format !== void 0 ? _options$format : defaultFormat;
    var zero = (_options$zero = options === null || options === void 0 ? void 0 : options.zero) !== null && _options$zero !== void 0 ? _options$zero : false;
    var delimiter = (_options$delimiter = options === null || options === void 0 ? void 0 : options.delimiter) !== null && _options$delimiter !== void 0 ? _options$delimiter : " ";
    if (!locale.formatDistance) {
        return "";
    }
    var result = format.reduce(function (acc, unit) {
        var token = "x".concat(unit.replace(/(^.)/, function (m) {
            return m.toUpperCase();
        }));
        var value = duration[unit];
        if (typeof value === "number" && (zero || duration[unit])) {
            return acc.concat(locale.formatDistance(token, value));
        }
        return acc;
    }, []).join(delimiter);
    return result;
}
export { formatDuration };
