// node_modules/@angular/cdk/fesm2022/test-environment.mjs
function _isTestEnvironment() {
    return (
    // @ts-ignore
    typeof __karma__ !== "undefined" && !!__karma__ ||
        // @ts-ignore
        typeof jasmine !== "undefined" && !!jasmine ||
        // @ts-ignore
        typeof jest !== "undefined" && !!jest ||
        // @ts-ignore
        typeof Mocha !== "undefined" && !!Mocha);
}
export { _isTestEnvironment };
