import { MatTooltip, TooltipComponent } from "@nf-internal/chunk-KTI4ILM5";
// node_modules/@angular/material/fesm2022/tooltip.mjs
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
import { A11yModule } from "@angular/cdk/a11y";
import { BidiModule } from "@angular/cdk/bidi";
import { OverlayModule } from "@angular/cdk/overlay";
import { CdkScrollableModule } from "@angular/cdk/scrolling";
import "rxjs/operators";
import "@angular/cdk/coercion";
import "@angular/cdk/keycodes";
import "@angular/common";
import "@angular/cdk/platform";
import "@angular/cdk/portal";
import "rxjs";
import "@angular/cdk/layout";
var MatTooltipModule = class _MatTooltipModule {
    static ɵfac = function MatTooltipModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatTooltipModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatTooltipModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [A11yModule, OverlayModule, BidiModule, CdkScrollableModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTooltipModule, [{
            type: NgModule,
            args: [{
                    imports: [A11yModule, OverlayModule, MatTooltip, TooltipComponent],
                    exports: [MatTooltip, TooltipComponent, BidiModule, CdkScrollableModule]
                }]
        }], null, null);
})();
export { MatTooltipModule };
