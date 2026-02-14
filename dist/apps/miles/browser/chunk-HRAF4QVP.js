// node_modules/@angular/cdk/fesm2022/style-loader.mjs
import * as i0 from "@angular/core";
import { inject, Injector, EnvironmentInjector, ApplicationRef, createComponent, Injectable } from "@angular/core";
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
    _appRef;
    _injector = inject(Injector);
    _environmentInjector = inject(EnvironmentInjector);
    /**
     * Loads a set of styles.
     * @param loader Component which will be instantiated to load the styles.
     */
    load(loader) {
        const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
        let data = appsWithLoaders.get(appRef);
        if (!data) {
            data = {
                loaders: /* @__PURE__ */ new Set(),
                refs: []
            };
            appsWithLoaders.set(appRef, data);
            appRef.onDestroy(() => {
                appsWithLoaders.get(appRef)?.refs.forEach(ref => ref.destroy());
                appsWithLoaders.delete(appRef);
            });
        }
        if (!data.loaders.has(loader)) {
            data.loaders.add(loader);
            data.refs.push(createComponent(loader, {
                environmentInjector: this._environmentInjector
            }));
        }
    }
    static ɵfac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || __CdkPrivateStyleLoader)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: __CdkPrivateStyleLoader,
        factory: __CdkPrivateStyleLoader.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(_CdkPrivateStyleLoader, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
export { _CdkPrivateStyleLoader };
