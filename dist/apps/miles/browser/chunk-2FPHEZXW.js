// node_modules/date-fns/esm/isExists/index.js
function isExists(year, month, day) {
    if (arguments.length < 3) {
        throw new TypeError("3 argument required, but only " + arguments.length + " present");
    }
    var date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}
export { isExists };
