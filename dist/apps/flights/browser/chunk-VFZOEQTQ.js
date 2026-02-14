import { addLeadingZeros } from "@nf-internal/chunk-2M5QGZ43";
// node_modules/date-fns/esm/_lib/format/lightFormatters/index.js
var formatters = {
    // Year
    y: function y(date, token) {
        var signedYear = date.getUTCFullYear();
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M: function M(date, token) {
        var month = date.getUTCMonth();
        return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    // Day of the month
    d: function d(date, token) {
        return addLeadingZeros(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function a(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (token) {
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h: function h(date, token) {
        return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function H(date, token) {
        return addLeadingZeros(date.getUTCHours(), token.length);
    },
    // Minute
    m: function m(date, token) {
        return addLeadingZeros(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function s(date, token) {
        return addLeadingZeros(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function S(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return addLeadingZeros(fractionalSeconds, token.length);
    }
};
var lightFormatters_default = formatters;
export { lightFormatters_default };
