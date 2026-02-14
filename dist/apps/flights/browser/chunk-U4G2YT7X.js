import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/intlFormat/index.js
function intlFormat(date, formatOrLocale, localeOptions) {
    var _localeOptions;
    requiredArgs(1, arguments);
    var formatOptions;
    if (isFormatOptions(formatOrLocale)) {
        formatOptions = formatOrLocale;
    }
    else {
        localeOptions = formatOrLocale;
    }
    return new Intl.DateTimeFormat((_localeOptions = localeOptions) === null || _localeOptions === void 0 ? void 0 : _localeOptions.locale, formatOptions).format(date);
}
function isFormatOptions(opts) {
    return opts !== void 0 && !("locale" in opts);
}
export { intlFormat };
