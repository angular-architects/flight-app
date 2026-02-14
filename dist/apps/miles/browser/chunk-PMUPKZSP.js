import { MatOptgroup, MatOption } from "@nf-internal/chunk-WY3OPLEO";
import { MatPseudoCheckboxModule } from "@nf-internal/chunk-ALI6I7TC";
import { MatRippleModule } from "@nf-internal/chunk-MAEJBUHM";
// node_modules/@angular/material/fesm2022/option-module.mjs
import { BidiModule } from "@angular/cdk/bidi";
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
var MatOptionModule = class _MatOptionModule {
    static ɵfac = function MatOptionModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatOptionModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatOptionModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [MatRippleModule, MatPseudoCheckboxModule, MatOption, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatOptionModule, [{
            type: NgModule,
            args: [{
                    imports: [MatRippleModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
                    exports: [MatOption, MatOptgroup, BidiModule]
                }]
        }], null, null);
})();
export { MatOptionModule };
