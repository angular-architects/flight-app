import { min } from "@nf-internal/chunk-NTOCGOFP";
import { max } from "@nf-internal/chunk-GGTKZDGR";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/clamp/index.js
function clamp(date, _ref) {
    var start = _ref.start, end = _ref.end;
    requiredArgs(2, arguments);
    return min([max([date, start]), end]);
}
export { clamp };
