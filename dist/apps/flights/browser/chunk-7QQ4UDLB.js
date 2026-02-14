// node_modules/date-fns/esm/startOfYesterday/index.js
function startOfYesterday() {
    var now = /* @__PURE__ */ new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var date = /* @__PURE__ */ new Date(0);
    date.setFullYear(year, month, day - 1);
    date.setHours(0, 0, 0, 0);
    return date;
}
export { startOfYesterday };
