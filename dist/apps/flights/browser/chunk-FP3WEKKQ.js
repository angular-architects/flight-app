import { _typeof } from "@nf-internal/chunk-D7ZASVPN";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/toDate/index.js
function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
        return new Date(argument.getTime());
    }
    else if (typeof argument === "number" || argStr === "[object Number]") {
        return new Date(argument);
    }
    else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
            console.warn(new Error().stack);
        }
        return /* @__PURE__ */ new Date(NaN);
    }
}
export { toDate };
