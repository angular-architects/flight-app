import { coerceCssPixelValue } from "@nf-internal/chunk-ALX3T2NV";
import { coerceArray } from "@nf-internal/chunk-DDFN47J4";
import { _isNumberValue, coerceElement, coerceNumberProperty } from "@nf-internal/chunk-XODDVZAQ";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/coercion.mjs
import "@angular/core";
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== "false";
}
function coerceStringArray(value, separator = /\s+/) {
    const result = [];
    if (value != null) {
        const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
        for (const sourceValue of sourceValues) {
            const trimmedString = `${sourceValue}`.trim();
            if (trimmedString) {
                result.push(trimmedString);
            }
        }
    }
    return result;
}
export { _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty, coerceStringArray };
