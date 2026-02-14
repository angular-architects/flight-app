import { differenceInSeconds } from "@nf-internal/chunk-YLR5VCFG";
import { differenceInYears } from "@nf-internal/chunk-3QGPNAQK";
import { differenceInDays } from "@nf-internal/chunk-USJ2KYLK";
import { differenceInHours } from "@nf-internal/chunk-YOBEW7IO";
import { differenceInMinutes } from "@nf-internal/chunk-W3K7TW4A";
import { differenceInMonths } from "@nf-internal/chunk-IESKAHMY";
import { compareAsc } from "@nf-internal/chunk-WHFO7FND";
import { add } from "@nf-internal/chunk-WEFAI47M";
import { toDate } from "@nf-internal/chunk-FP3WEKKQ";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/intervalToDuration/index.js
function intervalToDuration(interval) {
    requiredArgs(1, arguments);
    var start = toDate(interval.start);
    var end = toDate(interval.end);
    if (isNaN(start.getTime()))
        throw new RangeError("Start Date is invalid");
    if (isNaN(end.getTime()))
        throw new RangeError("End Date is invalid");
    var duration = {};
    duration.years = Math.abs(differenceInYears(end, start));
    var sign = compareAsc(end, start);
    var remainingMonths = add(start, {
        years: sign * duration.years
    });
    duration.months = Math.abs(differenceInMonths(end, remainingMonths));
    var remainingDays = add(remainingMonths, {
        months: sign * duration.months
    });
    duration.days = Math.abs(differenceInDays(end, remainingDays));
    var remainingHours = add(remainingDays, {
        days: sign * duration.days
    });
    duration.hours = Math.abs(differenceInHours(end, remainingHours));
    var remainingMinutes = add(remainingHours, {
        hours: sign * duration.hours
    });
    duration.minutes = Math.abs(differenceInMinutes(end, remainingMinutes));
    var remainingSeconds = add(remainingMinutes, {
        minutes: sign * duration.minutes
    });
    duration.seconds = Math.abs(differenceInSeconds(end, remainingSeconds));
    return duration;
}
export { intervalToDuration };
