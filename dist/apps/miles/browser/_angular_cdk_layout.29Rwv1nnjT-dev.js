import { BreakpointObserver, MediaMatcher } from "@nf-internal/chunk-2OGGCIMB";
import "@nf-internal/chunk-26DDZNO4";
import "@nf-internal/chunk-DDFN47J4";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/layout.mjs
import * as i0 from "@angular/core";
import { NgModule } from "@angular/core";
import "rxjs";
import "rxjs/operators";
import "@angular/common";
var LayoutModule = class _LayoutModule {
    static ɵfac = function LayoutModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _LayoutModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _LayoutModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({});
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutModule, [{
            type: NgModule,
            args: [{}]
        }], null, null);
})();
var Breakpoints = {
    XSmall: "(max-width: 599.98px)",
    Small: "(min-width: 600px) and (max-width: 959.98px)",
    Medium: "(min-width: 960px) and (max-width: 1279.98px)",
    Large: "(min-width: 1280px) and (max-width: 1919.98px)",
    XLarge: "(min-width: 1920px)",
    Handset: "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
    Tablet: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
    Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
    HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
    TabletPortrait: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
    WebPortrait: "(min-width: 840px) and (orientation: portrait)",
    HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
    TabletLandscape: "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
    WebLandscape: "(min-width: 1280px) and (orientation: landscape)"
};
export { BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher };
