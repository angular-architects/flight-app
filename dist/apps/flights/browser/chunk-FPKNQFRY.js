// node_modules/date-fns/esm/_lib/assign/index.js
function assign(target, object) {
    if (target == null) {
        throw new TypeError("assign requires that input parameter not be null or undefined");
    }
    for (var property in object) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
            ;
            target[property] = object[property];
        }
    }
    return target;
}
export { assign };
