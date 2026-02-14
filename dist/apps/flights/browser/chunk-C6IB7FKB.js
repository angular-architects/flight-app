// node_modules/date-fns/esm/endOfYesterday/index.js
function endOfYesterday() {
    var now = /* @__PURE__ */ new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var date = /* @__PURE__ */ new Date(0);
    date.setFullYear(year, month, day - 1);
    date.setHours(23, 59, 59, 999);
    return date;
}
export { endOfYesterday };
