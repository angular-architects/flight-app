import { cloneObject } from "@nf-internal/chunk-DNKVZWLO";
import { assign } from "@nf-internal/chunk-FPKNQFRY";
import { defaultLocale_default } from "@nf-internal/chunk-2ZVJI4RB";
import { differenceInSeconds } from "@nf-internal/chunk-YLR5VCFG";
import { differenceInMonths } from "@nf-internal/chunk-IESKAHMY";
import { compareAsc } from "@nf-internal/chunk-WHFO7FND";
import { getTimezoneOffsetInMilliseconds } from "@nf-internal/chunk-OBRWG5KZ";
import { getDefaultOptions } from "@nf-internal/chunk-M2CTTFQ2";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/formatDistance/index.js
var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
function formatDistance(dirtyDate, dirtyBaseDate, options) {
    var _ref, _options$locale;
    requiredArgs(2, arguments);
    var defaultOptions = getDefaultOptions();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
    if (!locale.formatDistance) {
        throw new RangeError("locale must contain formatDistance property");
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
    var seconds = differenceInSeconds(dateRight, dateLeft);
    var offsetInSeconds = (getTimezoneOffsetInMilliseconds(dateRight) - getTimezoneOffsetInMilliseconds(dateLeft)) / 1e3;
    var minutes = Math.round((seconds - offsetInSeconds) / 60);
    var months;
    if (minutes < 2) {
        if (options !== null && options !== void 0 && options.includeSeconds) {
            if (seconds < 5) {
                return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
            }
            else if (seconds < 10) {
                return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
            }
            else if (seconds < 20) {
                return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
            }
            else if (seconds < 40) {
                return locale.formatDistance("halfAMinute", 0, localizeOptions);
            }
            else if (seconds < 60) {
                return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            }
            else {
                return locale.formatDistance("xMinutes", 1, localizeOptions);
            }
        }
        else {
            if (minutes === 0) {
                return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            }
            else {
                return locale.formatDistance("xMinutes", minutes, localizeOptions);
            }
        }
    }
    else if (minutes < 45) {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
    }
    else if (minutes < 90) {
        return locale.formatDistance("aboutXHours", 1, localizeOptions);
    }
    else if (minutes < MINUTES_IN_DAY) {
        var hours = Math.round(minutes / 60);
        return locale.formatDistance("aboutXHours", hours, localizeOptions);
    }
    else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
        return locale.formatDistance("xDays", 1, localizeOptions);
    }
    else if (minutes < MINUTES_IN_MONTH) {
        var days = Math.round(minutes / MINUTES_IN_DAY);
        return locale.formatDistance("xDays", days, localizeOptions);
    }
    else if (minutes < MINUTES_IN_TWO_MONTHS) {
        months = Math.round(minutes / MINUTES_IN_MONTH);
        return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = differenceInMonths(dateRight, dateLeft);
    if (months < 12) {
        var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
        return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
    }
    else {
        var monthsSinceStartOfYear = months % 12;
        var years = Math.floor(months / 12);
        if (monthsSinceStartOfYear < 3) {
            return locale.formatDistance("aboutXYears", years, localizeOptions);
        }
        else if (monthsSinceStartOfYear < 9) {
            return locale.formatDistance("overXYears", years, localizeOptions);
        }
        else {
            return locale.formatDistance("almostXYears", years + 1, localizeOptions);
        }
    }
}
export { formatDistance };
