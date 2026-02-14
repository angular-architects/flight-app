import { MatError, MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix } from "@nf-internal/chunk-PK4EDZ3R";
// node_modules/@angular/material/fesm2022/form-field.mjs
import { BidiModule } from "@angular/cdk/bidi";
import { ObserversModule } from "@angular/cdk/observers";
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
import "@angular/cdk/a11y";
import "@angular/cdk/coercion";
import "@angular/cdk/platform";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
import "@angular/cdk/observers/private";
import "@angular/cdk/layout";
var MatFormFieldModule = class _MatFormFieldModule {
    static ɵfac = function MatFormFieldModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatFormFieldModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatFormFieldModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [ObserversModule, MatFormField, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatFormFieldModule, [{
            type: NgModule,
            args: [{
                    imports: [ObserversModule, MatFormField, MatLabel, MatError, MatHint, MatPrefix, MatSuffix],
                    exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, BidiModule]
                }]
        }], null, null);
})();
export { MatFormFieldModule };
