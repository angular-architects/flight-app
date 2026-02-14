import { cloneObject } from "@nf-internal/chunk-DNKVZWLO";
import { assign } from "@nf-internal/chunk-FPKNQFRY";
import { defaultLocale_default } from "@nf-internal/chunk-2ZVJI4RB";
import { compareAsc } from "@nf-internal/chunk-WHFO7FND";
import { getTimezoneOffsetInMilliseconds } from "@nf-internal/chunk-OBRWG5KZ";
import { getDefaultOptions } from "@nf-internal/chunk-M2CTTFQ2";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/formatDistanceStrict/index.js
var MILLISECONDS_IN_MINUTE = 1e3 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;
function formatDistanceStrict(dirtyDate, dirtyBaseDate, options) {
    var _ref, _options$locale, _options$roundingMeth;
    requiredArgs(2, arguments);
    var defaultOptions = getDefaultOptions();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
    if (!locale.formatDistance) {
        throw new RangeError("locale must contain localize.formatDistance property");
    }
    var comparison = compareAsc(dirtyDate, dirtyBaseDate);
    if (isNaN(comparison)) {
        throw new RangeError("Invalid time value");
    }
    var localizeOptions = assign(cloneObject(options), {
        addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
        comparison
    });
    var dateLeft;
    var dateRight;
    if (comparison > 0) {
        dateLeft = toDate(dirtyBaseDate);
        dateRight = toDate(dirtyDate);
    }
    else {
        dateLeft = toDate(dirtyDate);
        dateRight = toDate(dirtyBaseDate);
    }
    var roundingMethod = String((_options$roundingMeth = options === null || options === void 0 ? void 0 : options.roundingMethod) !== null && _options$roundingMeth !== void 0 ? _options$roundingMeth : "round");
    var roundingMethodFn;
    if (roundingMethod === "floor") {
        roundingMethodFn = Math.floor;
    }
    else if (roundingMethod === "ceil") {
        roundingMethodFn = Math.ceil;
    }
    else if (roundingMethod === "round") {
        roundingMethodFn = Math.round;
    }
    else {
        throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
    }
    var milliseconds = dateRight.getTime() - dateLeft.getTime();
    var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
    var timezoneOffset = getTimezoneOffsetInMilliseconds(dateRight) - getTimezoneOffsetInMilliseconds(dateLeft);
    var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
    var defaultUnit = options === null || options === void 0 ? void 0 : options.unit;
    var unit;
    if (!defaultUnit) {
        if (minutes < 1) {
            unit = "second";
        }
        else if (minutes < 60) {
            unit = "minute";
        }
        else if (minutes < MINUTES_IN_DAY) {
            unit = "hour";
        }
        else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {
            unit = "day";
        }
        else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {
            unit = "month";
        }
        else {
            unit = "year";
        }
    }
    else {
        unit = String(defaultUnit);
    }
    if (unit === "second") {
        var seconds = roundingMethodFn(milliseconds / 1e3);
        return locale.formatDistance("xSeconds", seconds, localizeOptions);
    }
    else if (unit === "minute") {
        var roundedMinutes = roundingMethodFn(minutes);
        return locale.formatDistance("xMinutes", roundedMinutes, localizeOptions);
    }
    else if (unit === "hour") {
        var hours = roundingMethodFn(minutes / 60);
        return locale.formatDistance("xHours", hours, localizeOptions);
    }
    else if (unit === "day") {
        var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
        return locale.formatDistance("xDays", days, localizeOptions);
    }
    else if (unit === "month") {
        var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
        return months === 12 && defaultUnit !== "month" ? locale.formatDistance("xYears", 1, localizeOptions) : locale.formatDistance("xMonths", months, localizeOptions);
    }
    else if (unit === "year") {
        var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
        return locale.formatDistance("xYears", years, localizeOptions);
    }
    throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
export { formatDistanceStrict };
