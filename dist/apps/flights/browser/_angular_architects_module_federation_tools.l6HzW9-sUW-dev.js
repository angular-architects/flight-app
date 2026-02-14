import { init_angular_architects_module_federation_runtime, loadRemoteModule } from "@nf-internal/chunk-GID6LQOQ";
import { __async } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular-architects/module-federation-tools/fesm2022/angular-architects-module-federation-tools.mjs
init_angular_architects_module_federation_runtime();
import * as i0 from "@angular/core";
import { ElementRef, Input, ViewChild, Component, NgModule, PlatformRef, VERSION, enableProdMode, NgZone } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as i1 from "@angular/router";
import { Router } from "@angular/router";
import { platformBrowser } from "@angular/platform-browser";
var _c0 = ["vc"];
var _WebComponentWrapper = class _WebComponentWrapper {
    constructor(route) {
        this.route = route;
    }
    ngOnChanges() {
        if (!this.element)
            return;
        this.populateProps();
    }
    populateProps() {
        for (const prop in this.props) {
            this.element[prop] = this.props[prop];
        }
    }
    setupEvents() {
        for (const event in this.events) {
            this.element.addEventListener(event, this.events[event]);
        }
    }
    ngAfterContentInit() {
        return __async(this, null, function* () {
            const options = this.options ?? this.route.snapshot.data;
            try {
                yield loadRemoteModule(options);
                this.element = document.createElement(options.elementName);
                this.populateProps();
                this.setupEvents();
                this.vc.nativeElement.appendChild(this.element);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
};
_WebComponentWrapper.ɵfac = function WebComponentWrapper_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WebComponentWrapper)(i0.ɵɵdirectiveInject(i1.ActivatedRoute));
};
_WebComponentWrapper.ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
    type: _WebComponentWrapper,
    selectors: [["mft-wc-wrapper"]],
    viewQuery: function WebComponentWrapper_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7, ElementRef);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.vc = _t.first);
        }
    },
    inputs: {
        options: "options",
        props: "props",
        events: "events"
    },
    standalone: false,
    features: [i0.ɵɵNgOnChangesFeature],
    decls: 2,
    vars: 0,
    consts: [["vc", ""]],
    template: function WebComponentWrapper_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", null, 0);
        }
    },
    encapsulation: 2
});
var WebComponentWrapper = _WebComponentWrapper;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WebComponentWrapper, [{
            type: Component,
            args: [{
                    // eslint-disable-next-line @angular-eslint/component-selector
                    selector: "mft-wc-wrapper",
                    template: "<div #vc></div>",
                    standalone: false
                }]
        }], () => [{
            type: i1.ActivatedRoute
        }], {
        vc: [{
                type: ViewChild,
                args: ["vc", {
                        read: ElementRef,
                        static: true
                    }]
            }],
        options: [{
                type: Input
            }],
        props: [{
                type: Input
            }],
        events: [{
                type: Input
            }]
    });
})();
var _ModuleFederationToolsModule = class _ModuleFederationToolsModule {
};
_ModuleFederationToolsModule.ɵfac = function ModuleFederationToolsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleFederationToolsModule)();
};
_ModuleFederationToolsModule.ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
    type: _ModuleFederationToolsModule
});
_ModuleFederationToolsModule.ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
    imports: [CommonModule]
});
var ModuleFederationToolsModule = _ModuleFederationToolsModule;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleFederationToolsModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [WebComponentWrapper],
                    exports: [WebComponentWrapper]
                }]
        }], null, null);
})();
var packageNamespace = "@angular-architects/module-federation-tools";
function getGlobalState() {
    const globalState = window;
    globalState[packageNamespace] = globalState[packageNamespace] || {};
    return globalState[packageNamespace];
}
function getGlobalStateSlice(selector) {
    const globalState = getGlobalState();
    return selector ? selector(globalState) : globalState;
}
function setGlobalStateSlice(slice) {
    return Object.assign(getGlobalState(), slice);
}
function startsWith(prefix) {
    return url => {
        const fullUrl = url.map(u => u.path).join("/");
        if (fullUrl.startsWith(prefix)) {
            return {
                consumed: url
            };
        }
        return null;
    };
}
function endsWith(prefix) {
    return url => {
        const fullUrl = url.map(u => u.path).join("/");
        if (fullUrl.endsWith(prefix)) {
            return {
                consumed: url
            };
        }
        return null;
    };
}
function connectRouter(router, useHash = false) {
    let url;
    if (!useHash) {
        url = `${location.pathname.substring(1)}${location.search}`;
        router.navigateByUrl(url);
        window.addEventListener("popstate", () => {
            router.navigateByUrl(url);
        });
    }
    else {
        url = `${location.hash.substring(1)}${location.search}`;
        router.navigateByUrl(url);
        window.addEventListener("hashchange", () => {
            router.navigateByUrl(url);
        });
    }
}
var ngZoneSharing = true;
var platformSharing = true;
var legacyMode = true;
function getMajor(version) {
    const pre = version.match(/\d+/)[0];
    const post = version.match(/-.*/);
    if (!pre) {
        throw new Error("Cound not identify major version: " + version);
    }
    if (post) {
        return pre + post[0];
    }
    return pre;
}
function getLegacyPlatformCache() {
    const platformCache = window;
    platformCache.platform = platformCache.platform || {};
    return platformCache;
}
function getLegacyPlatform(key) {
    const platform = getLegacyPlatformCache().platform[key];
    return platform instanceof PlatformRef ? platform : null;
}
function setLegacyPlatform(key, platform) {
    getLegacyPlatformCache().platform[key] = platform;
}
function getLegacyNgZone() {
    return window["ngZone"];
}
function setLegacyNgZone(zone) {
    window["ngZone"] = zone;
}
function getPlatformCache() {
    return getGlobalStateSlice(state => state.platformCache) || setGlobalStateSlice({
        platformCache: /* @__PURE__ */ new Map()
    }).platformCache;
}
function setPlatform(version, platform) {
    if (platformSharing) {
        legacyMode && setLegacyPlatform(version.full, platform);
        getPlatformCache().set(version, platform);
    }
}
function getPlatform(options) {
    if (!platformSharing) {
        return options.platformFactory();
    }
    const versionResult = options.version();
    const version = versionResult === VERSION.full ? VERSION : versionResult;
    const versionKey = typeof version === "string" ? version : version.full;
    let platform = getPlatformCache().get(version) || legacyMode && getLegacyPlatform(versionKey);
    if (!platform) {
        platform = options.platformFactory();
        setPlatform(VERSION, platform);
        options.production && enableProdMode();
    }
    return platform;
}
function getNgZone() {
    return getGlobalStateSlice(state => state.ngZone) || getLegacyNgZone();
}
function shareNgZone(zone) {
    if (ngZoneSharing) {
        legacyMode && setLegacyNgZone(zone);
        setGlobalStateSlice({
            ngZone: zone
        });
    }
}
function bootstrap(module, options) {
    ngZoneSharing = options.ngZoneSharing !== false;
    platformSharing = options.platformSharing !== false;
    legacyMode = options.activeLegacyMode !== false;
    options.platformFactory = options.platformFactory || (() => platformBrowser());
    options.version = options.version || (() => VERSION);
    if (ngZoneSharing && !options.compilerOptions?.ngZone) {
        options.compilerOptions = options.compilerOptions || {};
        options.compilerOptions.ngZone = getNgZone();
    }
    return getPlatform(options).bootstrapModule(module, options.compilerOptions).then(ref => {
        if (options.appType === "shell") {
            shareShellZone(ref.injector);
        }
        else if (options.appType === "microfrontend") {
            connectMicroFrontendRouter(ref.injector);
        }
        return ref;
    });
}
function shareShellZone(injector) {
    const ngZone = injector.get(NgZone, null);
    if (!ngZone) {
        console.warn("No NgZone to share found");
        return;
    }
    shareNgZone(ngZone);
}
function connectMicroFrontendRouter(injector) {
    const router = injector.get(Router);
    const useHash = location.href.includes("#");
    if (!router) {
        console.warn("No router to connect found");
        return;
    }
    connectRouter(router, useHash);
}
export { ModuleFederationToolsModule, WebComponentWrapper, bootstrap, connectRouter, endsWith, getMajor, shareNgZone, startsWith };
