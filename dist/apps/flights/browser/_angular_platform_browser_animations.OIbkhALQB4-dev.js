import { BrowserModule } from "@nf-internal/chunk-H576DX7Q";
import { DomRendererFactory2 } from "@nf-internal/chunk-UP5EALJF";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/platform-browser/fesm2022/animations.mjs
import * as i0 from "@angular/core";
import { Injectable, Inject, ANIMATION_MODULE_TYPE, RendererFactory2, inject, NgZone, NgModule, ɵperformanceMarkFeature as _performanceMarkFeature } from "@angular/core";
import { ANIMATION_MODULE_TYPE as ANIMATION_MODULE_TYPE2 } from "@angular/core";
import * as i1 from "@angular/animations/browser";
import { ɵAnimationEngine as _AnimationEngine, AnimationDriver as AnimationDriver2, NoopAnimationDriver, ɵWebAnimationsDriver as _WebAnimationsDriver, ɵAnimationStyleNormalizer as _AnimationStyleNormalizer, ɵWebAnimationsStyleNormalizer as _WebAnimationsStyleNormalizer, ɵAnimationRendererFactory as _AnimationRendererFactory } from "@angular/animations/browser";
import { DOCUMENT } from "@angular/common";
var InjectableAnimationEngine = class _InjectableAnimationEngine extends _AnimationEngine {
    // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
    // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
    // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
    constructor(doc, driver, normalizer) {
        super(doc, driver, normalizer);
    }
    ngOnDestroy() {
        this.flush();
    }
    static ɵfac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _InjectableAnimationEngine)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(i1.AnimationDriver), i0.ɵɵinject(i1.ɵAnimationStyleNormalizer));
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _InjectableAnimationEngine,
        factory: _InjectableAnimationEngine.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InjectableAnimationEngine, [{
            type: Injectable
        }], () => [{
            type: Document,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }, {
            type: i1.AnimationDriver
        }, {
            type: i1.ɵAnimationStyleNormalizer
        }], null);
})();
function instantiateDefaultStyleNormalizer() {
    return new _WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory() {
    return new _AnimationRendererFactory(inject(DomRendererFactory2), inject(_AnimationEngine), inject(NgZone));
}
var SHARED_ANIMATION_PROVIDERS = [{
        provide: _AnimationStyleNormalizer,
        useFactory: instantiateDefaultStyleNormalizer
    }, {
        provide: _AnimationEngine,
        useClass: InjectableAnimationEngine
    }, {
        provide: RendererFactory2,
        useFactory: instantiateRendererFactory
    }];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
        provide: AnimationDriver2,
        useClass: NoopAnimationDriver
    }, {
        provide: ANIMATION_MODULE_TYPE,
        useValue: "NoopAnimations"
    }, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
    // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
    {
        provide: AnimationDriver2,
        useFactory: () => typeof ngServerMode !== "undefined" && ngServerMode ? new NoopAnimationDriver() : new _WebAnimationsDriver()
    }, {
        provide: ANIMATION_MODULE_TYPE,
        useFactory: () => typeof ngServerMode !== "undefined" && ngServerMode ? "NoopAnimations" : "BrowserAnimations"
    }, ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
    /**
     * Configures the module based on the specified object.
     *
     * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
     * @see {@link BrowserAnimationsModuleConfig}
     *
     * @usageNotes
     * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
     * function as follows:
     * ```ts
     * @NgModule({
     *   imports: [BrowserAnimationsModule.withConfig(config)]
     * })
     * class MyNgModule {}
     * ```
     */
    static withConfig(config) {
        return {
            ngModule: _BrowserAnimationsModule,
            providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
        };
    }
    static ɵfac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BrowserAnimationsModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _BrowserAnimationsModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        providers: BROWSER_ANIMATIONS_PROVIDERS,
        imports: [BrowserModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowserAnimationsModule, [{
            type: NgModule,
            args: [{
                    exports: [BrowserModule],
                    providers: BROWSER_ANIMATIONS_PROVIDERS
                }]
        }], null, null);
})();
function provideAnimations() {
    _performanceMarkFeature("NgEagerAnimations");
    return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
    static ɵfac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _NoopAnimationsModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _NoopAnimationsModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
        imports: [BrowserModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NoopAnimationsModule, [{
            type: NgModule,
            args: [{
                    exports: [BrowserModule],
                    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
                }]
        }], null, null);
})();
function provideNoopAnimations() {
    return [...BROWSER_NOOP_ANIMATIONS_PROVIDERS];
}
export { ANIMATION_MODULE_TYPE2 as ANIMATION_MODULE_TYPE, BrowserAnimationsModule, NoopAnimationsModule, provideAnimations, provideNoopAnimations, InjectableAnimationEngine as ɵInjectableAnimationEngine };
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
