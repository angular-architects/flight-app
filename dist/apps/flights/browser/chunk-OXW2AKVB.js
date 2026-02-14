import { _typeof } from "@nf-internal/chunk-D7ZASVPN";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isDate/index.js
function isDate(value) {
    requiredArgs(1, arguments);
    return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
export { isDate };
