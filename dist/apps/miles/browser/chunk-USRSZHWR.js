import { parse } from "@nf-internal/chunk-B7YNLPCH";
import { isValid } from "@nf-internal/chunk-HUUVZHQT";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/isMatch/index.js
function isMatch(dateString, formatString, options) {
    requiredArgs(2, arguments);
    return isValid(parse(dateString, formatString, /* @__PURE__ */ new Date(), options));
}
export { isMatch };
