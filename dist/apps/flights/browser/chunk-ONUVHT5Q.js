import { format } from "@nf-internal/chunk-QYORHOZW";
import { subMilliseconds } from "@nf-internal/chunk-34CO6RNN";
import { defaultLocale_default } from "@nf-internal/chunk-2ZVJI4RB";
import { differenceInCalendarDays } from "@nf-internal/chunk-OJ4OXMBJ";
import { getTimezoneOffsetInMilliseconds } from "@nf-internal/chunk-OBRWG5KZ";
import { getDefaultOptions } from "@nf-internal/chunk-M2CTTFQ2";
import { toInteger } from "@nf-internal/chunk-SQMTRHET";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/formatRelative/index.js
function formatRelative(dirtyDate, dirtyBaseDate, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$weekStartsOn, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var baseDate = toDate(dirtyBaseDate);
    var defaultOptions = getDefaultOptions();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
    var weekStartsOn = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.weekStartsOn) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : 0);
    if (!locale.localize) {
        throw new RangeError("locale must contain localize property");
    }
    if (!locale.formatLong) {
        throw new RangeError("locale must contain formatLong property");
    }
    if (!locale.formatRelative) {
        throw new RangeError("locale must contain formatRelative property");
    }
    var diff = differenceInCalendarDays(date, baseDate);
    if (isNaN(diff)) {
        throw new RangeError("Invalid time value");
    }
    var token;
    if (diff < -6) {
        token = "other";
    }
    else if (diff < -1) {
        token = "lastWeek";
    }
    else if (diff < 0) {
        token = "yesterday";
    }
    else if (diff < 1) {
        token = "today";
    }
    else if (diff < 2) {
        token = "tomorrow";
    }
    else if (diff < 7) {
        token = "nextWeek";
    }
    else {
        token = "other";
    }
    var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
    var utcBaseDate = subMilliseconds(baseDate, getTimezoneOffsetInMilliseconds(baseDate));
    var formatStr = locale.formatRelative(token, utcDate, utcBaseDate, {
        locale,
        weekStartsOn
    });
    return format(date, formatStr, {
        locale,
        weekStartsOn
    });
}
export { formatRelative };
