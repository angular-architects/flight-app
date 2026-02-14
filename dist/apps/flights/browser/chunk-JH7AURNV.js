// node_modules/@angular/material/fesm2022/error-options.mjs
import * as i0 from "@angular/core";
import { Injectable } from "@angular/core";
var ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || form && form.submitted));
    }
    static ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ShowOnDirtyErrorStateMatcher)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _ShowOnDirtyErrorStateMatcher,
        factory: _ShowOnDirtyErrorStateMatcher.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShowOnDirtyErrorStateMatcher, [{
            type: Injectable
        }], null, null);
})();
var ErrorStateMatcher = class _ErrorStateMatcher {
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.touched || form && form.submitted));
    }
    static ɵfac = function ErrorStateMatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ErrorStateMatcher)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _ErrorStateMatcher,
        factory: _ErrorStateMatcher.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ErrorStateMatcher, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
export { ShowOnDirtyErrorStateMatcher, ErrorStateMatcher };
