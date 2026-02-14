// node_modules/@angular/cdk/fesm2022/data-source.mjs
import { ConnectableObservable } from "rxjs";
var DataSource = class {
};
function isDataSource(value) {
    return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
export { DataSource, isDataSource };
