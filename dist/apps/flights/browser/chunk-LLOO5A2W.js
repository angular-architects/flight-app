import { getDefaultOptions, setDefaultOptions } from "@nf-internal/chunk-M2CTTFQ2";
import { requiredArgs } from "@nf-internal/chunk-Z43A42SM";
// node_modules/date-fns/esm/setDefaultOptions/index.js
function setDefaultOptions2(newOptions) {
    requiredArgs(1, arguments);
    var result = {};
    var defaultOptions = getDefaultOptions();
    for (var property in defaultOptions) {
        if (Object.prototype.hasOwnProperty.call(defaultOptions, property)) {
            ;
            result[property] = defaultOptions[property];
        }
    }
    for (var _property in newOptions) {
        if (Object.prototype.hasOwnProperty.call(newOptions, _property)) {
            if (newOptions[_property] === void 0) {
                delete result[_property];
            }
            else {
                ;
                result[_property] = newOptions[_property];
            }
        }
    }
    setDefaultOptions(result);
}
export { setDefaultOptions2 as setDefaultOptions };
