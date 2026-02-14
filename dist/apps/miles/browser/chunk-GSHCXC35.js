// node_modules/@angular/cdk/fesm2022/directionality.mjs
import * as i0 from "@angular/core";
import { InjectionToken, inject, DOCUMENT, signal, EventEmitter, Injectable } from "@angular/core";
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
    providedIn: "root",
    factory: () => inject(DOCUMENT)
});
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
    const value = rawValue?.toLowerCase() || "";
    if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
        return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
    }
    return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
    /** The current 'ltr' or 'rtl' value. */
    get value() {
        return this.valueSignal();
    }
    /**
     * The current 'ltr' or 'rtl' value.
     */
    valueSignal = signal("ltr", ...(ngDevMode ? [{
            debugName: "valueSignal"
        }] : []));
    /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
    change = new EventEmitter();
    constructor() {
        const _document = inject(DIR_DOCUMENT, {
            optional: true
        });
        if (_document) {
            const bodyDir = _document.body ? _document.body.dir : null;
            const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
        }
    }
    ngOnDestroy() {
        this.change.complete();
    }
    static ɵfac = function Directionality_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Directionality)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _Directionality,
        factory: _Directionality.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Directionality, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
export { DIR_DOCUMENT, _resolveDirectionality, Directionality };
