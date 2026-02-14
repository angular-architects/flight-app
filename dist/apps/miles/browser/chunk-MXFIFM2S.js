import { differenceInSeconds } from "@nf-internal/chunk-YLR5VCFG";
import { differenceInCalendarWeeks } from "@nf-internal/chunk-PSBB4PMX";
import { differenceInCalendarYears } from "@nf-internal/chunk-POTOETVP";
import { differenceInHours } from "@nf-internal/chunk-YOBEW7IO";
import { differenceInMinutes } from "@nf-internal/chunk-W3K7TW4A";
import { secondsInDay, secondsInHour, secondsInMinute, secondsInMonth, secondsInQuarter, secondsInWeek, secondsInYear } from "@nf-internal/chunk-UH44DGCM";
import { differenceInCalendarMonths } from "@nf-internal/chunk-WMYSWSJD";
import { differenceInCalendarQuarters } from "@nf-internal/chunk-DMQGKYIZ";
import { differenceInCalendarDays } from "@nf-internal/chunk-OJ4OXMBJ";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/intlFormatDistance/index.js
function intlFormatDistance(date, baseDate, options) {
    requiredArgs(2, arguments);
    var value = 0;
    var unit;
    var dateLeft = toDate(date);
    var dateRight = toDate(baseDate);
    if (!(options !== null && options !== void 0 && options.unit)) {
        var diffInSeconds = differenceInSeconds(dateLeft, dateRight);
        if (Math.abs(diffInSeconds) < secondsInMinute) {
            value = differenceInSeconds(dateLeft, dateRight);
            unit = "second";
        }
        else if (Math.abs(diffInSeconds) < secondsInHour) {
            value = differenceInMinutes(dateLeft, dateRight);
            unit = "minute";
        }
        else if (Math.abs(diffInSeconds) < secondsInDay && Math.abs(differenceInCalendarDays(dateLeft, dateRight)) < 1) {
            value = differenceInHours(dateLeft, dateRight);
            unit = "hour";
        }
        else if (Math.abs(diffInSeconds) < secondsInWeek && (value = differenceInCalendarDays(dateLeft, dateRight)) && Math.abs(value) < 7) {
            unit = "day";
        }
        else if (Math.abs(diffInSeconds) < secondsInMonth) {
            value = differenceInCalendarWeeks(dateLeft, dateRight);
            unit = "week";
        }
        else if (Math.abs(diffInSeconds) < secondsInQuarter) {
            value = differenceInCalendarMonths(dateLeft, dateRight);
            unit = "month";
        }
        else if (Math.abs(diffInSeconds) < secondsInYear) {
            if (differenceInCalendarQuarters(dateLeft, dateRight) < 4) {
                value = differenceInCalendarQuarters(dateLeft, dateRight);
                unit = "quarter";
            }
            else {
                value = differenceInCalendarYears(dateLeft, dateRight);
                unit = "year";
            }
        }
        else {
            value = differenceInCalendarYears(dateLeft, dateRight);
            unit = "year";
        }
    }
    else {
        unit = options === null || options === void 0 ? void 0 : options.unit;
        if (unit === "second") {
            value = differenceInSeconds(dateLeft, dateRight);
        }
        else if (unit === "minute") {
            value = differenceInMinutes(dateLeft, dateRight);
        }
        else if (unit === "hour") {
            value = differenceInHours(dateLeft, dateRight);
        }
        else if (unit === "day") {
            value = differenceInCalendarDays(dateLeft, dateRight);
        }
        else if (unit === "week") {
            value = differenceInCalendarWeeks(dateLeft, dateRight);
        }
        else if (unit === "month") {
            value = differenceInCalendarMonths(dateLeft, dateRight);
        }
        else if (unit === "quarter") {
            value = differenceInCalendarQuarters(dateLeft, dateRight);
        }
        else if (unit === "year") {
            value = differenceInCalendarYears(dateLeft, dateRight);
        }
    }
    var rtf = new Intl.RelativeTimeFormat(options === null || options === void 0 ? void 0 : options.locale, {
        localeMatcher: options === null || options === void 0 ? void 0 : options.localeMatcher,
        numeric: (options === null || options === void 0 ? void 0 : options.numeric) || "auto",
        style: options === null || options === void 0 ? void 0 : options.style
    });
    return rtf.format(value, unit);
}
export { intlFormatDistance };
