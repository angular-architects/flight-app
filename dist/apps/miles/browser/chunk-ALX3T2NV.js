// node_modules/@angular/cdk/fesm2022/css-pixel-value.mjs
function coerceCssPixelValue(value) {
    if (value == null) {
        return "";
    }
    return typeof value === "string" ? value : `${value}px`;
}
export { coerceCssPixelValue };
