import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/milliseconds/index.js
var daysInYear = 365.2425;
function milliseconds(_ref) {
    var years = _ref.years, months = _ref.months, weeks = _ref.weeks, days = _ref.days, hours = _ref.hours, minutes = _ref.minutes, seconds = _ref.seconds;
    requiredArgs(1, arguments);
    var totalDays = 0;
    if (years)
        totalDays += years * daysInYear;
    if (months)
        totalDays += months * (daysInYear / 12);
    if (weeks)
        totalDays += weeks * 7;
    if (days)
        totalDays += days;
    var totalSeconds = totalDays * 24 * 60 * 60;
    if (hours)
        totalSeconds += hours * 60 * 60;
    if (minutes)
        totalSeconds += minutes * 60;
    if (seconds)
        totalSeconds += seconds;
    return Math.round(totalSeconds * 1e3);
}
export { milliseconds };
