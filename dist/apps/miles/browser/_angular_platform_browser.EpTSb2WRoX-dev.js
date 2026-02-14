import { BrowserDomAdapter, BrowserGetTestability, BrowserModule, DomEventsPlugin, KeyEventsPlugin, bootstrapApplication, createApplication, platformBrowser, provideProtractorTestingSupport } from "@nf-internal/chunk-H576DX7Q";
import { DomRendererFactory2, EVENT_MANAGER_PLUGINS, EventManager, EventManagerPlugin, REMOVE_STYLES_ON_COMPONENT_DESTROY, SharedStylesHost } from "@nf-internal/chunk-UP5EALJF";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
import { ɵgetDOM as _getDOM, DOCUMENT } from "@angular/common";
import { ɵgetDOM } from "@angular/common";
import * as i0 from "@angular/core";
import { Injectable, Inject, ɵglobal as _global, ApplicationRef, InjectionToken, ɵConsole as _Console, Optional, Injector as Injector2, NgModule, forwardRef, ɵRuntimeError as _RuntimeError, ɵXSS_SECURITY_URL as _XSS_SECURITY_URL, SecurityContext, ɵallowSanitizationBypassAndThrow as _allowSanitizationBypassAndThrow, ɵunwrapSafeValue as _unwrapSafeValue, ɵ_sanitizeUrl as __sanitizeUrl, ɵ_sanitizeHtml as __sanitizeHtml, ɵbypassSanitizationTrustHtml as _bypassSanitizationTrustHtml, ɵbypassSanitizationTrustStyle as _bypassSanitizationTrustStyle, ɵbypassSanitizationTrustScript as _bypassSanitizationTrustScript, ɵbypassSanitizationTrustUrl as _bypassSanitizationTrustUrl, ɵbypassSanitizationTrustResourceUrl as _bypassSanitizationTrustResourceUrl, ɵwithI18nSupport as _withI18nSupport, ɵwithEventReplay as _withEventReplay, ɵwithIncrementalHydration as _withIncrementalHydration, makeEnvironmentProviders, ɵwithDomHydration as _withDomHydration, ENVIRONMENT_INITIALIZER, inject, ɵIS_ENABLED_BLOCKING_INITIAL_NAVIGATION as _IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, ɵformatRuntimeError as _formatRuntimeError, Version } from "@angular/core";
import { ɵwithHttpTransferCache as _withHttpTransferCache } from "@angular/common/http";
var Meta = class _Meta {
    _doc;
    _dom;
    constructor(_doc) {
        this._doc = _doc;
        this._dom = _getDOM();
    }
    /**
     * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
     * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
     * values in the provided tag definition, and verifies that all other attribute values are equal.
     * If an existing element is found, it is returned and is not modified in any way.
     * @param tag The definition of a `<meta>` element to match or create.
     * @param forceCreation True to create a new element without checking whether one already exists.
     * @returns The existing element with the same attributes and values if found,
     * the new element if no match is found, or `null` if the tag parameter is not defined.
     */
    addTag(tag, forceCreation = false) {
        if (!tag)
            return null;
        return this._getOrCreateElement(tag, forceCreation);
    }
    /**
     * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
     * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
     * values in the provided tag definition, and verifies that all other attribute values are equal.
     * @param tags An array of tag definitions to match or create.
     * @param forceCreation True to create new elements without checking whether they already exist.
     * @returns The matching elements if found, or the new elements.
     */
    addTags(tags, forceCreation = false) {
        if (!tags)
            return [];
        return tags.reduce((result, tag) => {
            if (tag) {
                result.push(this._getOrCreateElement(tag, forceCreation));
            }
            return result;
        }, []);
    }
    /**
     * Retrieves a `<meta>` tag element in the current HTML document.
     * @param attrSelector The tag attribute and value to match against, in the format
     * `"tag_attribute='value string'"`.
     * @returns The matching element, if any.
     */
    getTag(attrSelector) {
        if (!attrSelector)
            return null;
        return this._doc.querySelector(`meta[${attrSelector}]`) || null;
    }
    /**
     * Retrieves a set of `<meta>` tag elements in the current HTML document.
     * @param attrSelector The tag attribute and value to match against, in the format
     * `"tag_attribute='value string'"`.
     * @returns The matching elements, if any.
     */
    getTags(attrSelector) {
        if (!attrSelector)
            return [];
        const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
        return list ? [].slice.call(list) : [];
    }
    /**
     * Modifies an existing `<meta>` tag element in the current HTML document.
     * @param tag The tag description with which to replace the existing tag content.
     * @param selector A tag attribute and value to match against, to identify
     * an existing tag. A string in the format `"tag_attribute=`value string`"`.
     * If not supplied, matches a tag with the same `name` or `property` attribute value as the
     * replacement tag.
     * @return The modified element.
     */
    updateTag(tag, selector) {
        if (!tag)
            return null;
        selector = selector || this._parseSelector(tag);
        const meta = this.getTag(selector);
        if (meta) {
            return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
    }
    /**
     * Removes an existing `<meta>` tag element from the current HTML document.
     * @param attrSelector A tag attribute and value to match against, to identify
     * an existing tag. A string in the format `"tag_attribute=`value string`"`.
     */
    removeTag(attrSelector) {
        this.removeTagElement(this.getTag(attrSelector));
    }
    /**
     * Removes an existing `<meta>` tag element from the current HTML document.
     * @param meta The tag definition to match against to identify an existing tag.
     */
    removeTagElement(meta) {
        if (meta) {
            this._dom.remove(meta);
        }
    }
    _getOrCreateElement(meta, forceCreation = false) {
        if (!forceCreation) {
            const selector = this._parseSelector(meta);
            const elem = this.getTags(selector).filter(elem2 => this._containsAttributes(meta, elem2))[0];
            if (elem !== void 0)
                return elem;
        }
        const element = this._dom.createElement("meta");
        this._setMetaElementAttributes(meta, element);
        const head = this._doc.getElementsByTagName("head")[0];
        head.appendChild(element);
        return element;
    }
    _setMetaElementAttributes(tag, el) {
        Object.keys(tag).forEach(prop => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
        return el;
    }
    _parseSelector(tag) {
        const attr = tag.name ? "name" : "property";
        return `${attr}="${tag[attr]}"`;
    }
    _containsAttributes(tag, elem) {
        return Object.keys(tag).every(key => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
    }
    _getMetaKeyMap(prop) {
        return META_KEYS_MAP[prop] || prop;
    }
    static ɵfac = function Meta_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Meta)(i0.ɵɵinject(DOCUMENT));
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _Meta,
        factory: _Meta.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Meta, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }], null);
})();
var META_KEYS_MAP = {
    httpEquiv: "http-equiv"
};
var Title = class _Title {
    _doc;
    constructor(_doc) {
        this._doc = _doc;
    }
    /**
     * Get the title of the current HTML document.
     */
    getTitle() {
        return this._doc.title;
    }
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */
    setTitle(newTitle) {
        this._doc.title = newTitle || "";
    }
    static ɵfac = function Title_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Title)(i0.ɵɵinject(DOCUMENT));
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _Title,
        factory: _Title.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Title, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }], null);
})();
function exportNgVar(name, value) {
    if (typeof COMPILED === "undefined" || !COMPILED) {
        const ng = _global["ng"] = _global["ng"] || {};
        ng[name] = value;
    }
}
var ChangeDetectionPerfRecord = class {
    msPerTick;
    numTicks;
    constructor(msPerTick, numTicks) {
        this.msPerTick = msPerTick;
        this.numTicks = numTicks;
    }
};
var AngularProfiler = class {
    appRef;
    constructor(ref) {
        this.appRef = ref.injector.get(ApplicationRef);
    }
    // tslint:disable:no-console
    /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```ts
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     */
    timeChangeDetection(config) {
        const record = config && config["record"];
        const profileName = "Change Detection";
        if (record && "profile" in console && typeof console.profile === "function") {
            console.profile(profileName);
        }
        const start = performance.now();
        let numTicks = 0;
        while (numTicks < 5 || performance.now() - start < 500) {
            this.appRef.tick();
            numTicks++;
        }
        const end = performance.now();
        if (record && "profileEnd" in console && typeof console.profileEnd === "function") {
            console.profileEnd(profileName);
        }
        const msPerTick = (end - start) / numTicks;
        console.log(`ran ${numTicks} change detection cycles`);
        console.log(`${msPerTick.toFixed(2)} ms per check`);
        return new ChangeDetectionPerfRecord(msPerTick, numTicks);
    }
};
var PROFILER_GLOBAL_NAME = "profiler";
function enableDebugTools(ref) {
    exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
    return ref;
}
function disableDebugTools() {
    exportNgVar(PROFILER_GLOBAL_NAME, null);
}
var By = class {
    /**
     * Match all nodes.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
     */
    static all() {
        return () => true;
    }
    /**
     * Match elements by the given CSS selector.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
     */
    static css(selector) {
        return debugElement => {
            return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
        };
    }
    /**
     * Match nodes that have the given directive present.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
     */
    static directive(type) {
        return debugNode => debugNode.providerTokens.indexOf(type) !== -1;
    }
};
function elementMatches(n, selector) {
    if (_getDOM().isElementNode(n)) {
        return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
    }
    return false;
}
var EVENT_NAMES = {
    // pan
    "pan": true,
    "panstart": true,
    "panmove": true,
    "panend": true,
    "pancancel": true,
    "panleft": true,
    "panright": true,
    "panup": true,
    "pandown": true,
    // pinch
    "pinch": true,
    "pinchstart": true,
    "pinchmove": true,
    "pinchend": true,
    "pinchcancel": true,
    "pinchin": true,
    "pinchout": true,
    // press
    "press": true,
    "pressup": true,
    // rotate
    "rotate": true,
    "rotatestart": true,
    "rotatemove": true,
    "rotateend": true,
    "rotatecancel": true,
    // swipe
    "swipe": true,
    "swipeleft": true,
    "swiperight": true,
    "swipeup": true,
    "swipedown": true,
    // tap
    "tap": true,
    "doubletap": true
};
var HAMMER_GESTURE_CONFIG = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerGestureConfig" : "");
var HAMMER_LOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerLoader" : "");
var HammerGestureConfig = class _HammerGestureConfig {
    /**
     * A set of supported event names for gestures to be used in Angular.
     * Angular supports all built-in recognizers, as listed in
     * [HammerJS documentation](https://hammerjs.github.io/).
     */
    events = [];
    /**
     * Maps gesture event names to a set of configuration options
     * that specify overrides to the default values for specific properties.
     *
     * The key is a supported event name to be configured,
     * and the options object contains a set of properties, with override values
     * to be applied to the named recognizer event.
     * For example, to disable recognition of the rotate event, specify
     *  `{"rotate": {"enable": false}}`.
     *
     * Properties that are not present take the HammerJS default values.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](https://hammerjs.github.io/).
     *
     */
    overrides = {};
    /**
     * Properties whose default values can be overridden for a given event.
     * Different sets of properties apply to different events.
     * For information about which properties are supported for which events,
     * and their allowed and default values, see
     * [HammerJS documentation](https://hammerjs.github.io/).
     */
    options;
    /**
     * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
     * and attaches it to a given HTML element.
     * @param element The element that will recognize gestures.
     * @returns A HammerJS event-manager object.
     */
    buildHammer(element) {
        const mc = new Hammer(element, this.options);
        mc.get("pinch").set({
            enable: true
        });
        mc.get("rotate").set({
            enable: true
        });
        for (const eventName in this.overrides) {
            mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
    }
    static ɵfac = function HammerGestureConfig_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _HammerGestureConfig)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _HammerGestureConfig,
        factory: _HammerGestureConfig.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HammerGestureConfig, [{
            type: Injectable
        }], null, null);
})();
var HammerGesturesPlugin = class _HammerGesturesPlugin extends EventManagerPlugin {
    _config;
    _injector;
    loader;
    _loaderPromise = null;
    constructor(doc, _config, _injector, loader) {
        super(doc);
        this._config = _config;
        this._injector = _injector;
        this.loader = loader;
    }
    supports(eventName) {
        if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
            return false;
        }
        if (!window.Hammer && !this.loader) {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
                const _console = this._injector.get(_Console);
                _console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
            }
            return false;
        }
        return true;
    }
    addEventListener(element, eventName, handler) {
        const zone = this.manager.getZone();
        eventName = eventName.toLowerCase();
        if (!window.Hammer && this.loader) {
            this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
            let cancelRegistration = false;
            let deregister = () => {
                cancelRegistration = true;
            };
            zone.runOutsideAngular(() => this._loaderPromise.then(() => {
                if (!window.Hammer) {
                    if (typeof ngDevMode === "undefined" || ngDevMode) {
                        const _console = this._injector.get(_Console);
                        _console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
                    }
                    deregister = () => { };
                    return;
                }
                if (!cancelRegistration) {
                    deregister = this.addEventListener(element, eventName, handler);
                }
            }).catch(() => {
                if (typeof ngDevMode === "undefined" || ngDevMode) {
                    const _console = this._injector.get(_Console);
                    _console.warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
                }
                deregister = () => { };
            }));
            return () => {
                deregister();
            };
        }
        return zone.runOutsideAngular(() => {
            const mc = this._config.buildHammer(element);
            const callback = function (eventObj) {
                zone.runGuarded(function () {
                    handler(eventObj);
                });
            };
            mc.on(eventName, callback);
            return () => {
                mc.off(eventName, callback);
                if (typeof mc.destroy === "function") {
                    mc.destroy();
                }
            };
        });
    }
    isCustomEvent(eventName) {
        return this._config.events.indexOf(eventName) > -1;
    }
    static ɵfac = function HammerGesturesPlugin_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _HammerGesturesPlugin)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(HAMMER_GESTURE_CONFIG), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(HAMMER_LOADER, 8));
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _HammerGesturesPlugin,
        factory: _HammerGesturesPlugin.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HammerGesturesPlugin, [{
            type: Injectable
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }, {
            type: HammerGestureConfig,
            decorators: [{
                    type: Inject,
                    args: [HAMMER_GESTURE_CONFIG]
                }]
        }, {
            type: i0.Injector
        }, {
            type: void 0,
            decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [HAMMER_LOADER]
                }]
        }], null);
})();
var HammerModule = class _HammerModule {
    static ɵfac = function HammerModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _HammerModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _HammerModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        providers: [{
                provide: EVENT_MANAGER_PLUGINS,
                useClass: HammerGesturesPlugin,
                multi: true,
                deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector2, [new Optional(), HAMMER_LOADER]]
            }, {
                provide: HAMMER_GESTURE_CONFIG,
                useClass: HammerGestureConfig
            }]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HammerModule, [{
            type: NgModule,
            args: [{
                    providers: [{
                            provide: EVENT_MANAGER_PLUGINS,
                            useClass: HammerGesturesPlugin,
                            multi: true,
                            deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector2, [new Optional(), HAMMER_LOADER]]
                        }, {
                            provide: HAMMER_GESTURE_CONFIG,
                            useClass: HammerGestureConfig
                        }]
                }]
        }], null, null);
})();
var DomSanitizer = class _DomSanitizer {
    static ɵfac = function DomSanitizer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DomSanitizer)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _DomSanitizer,
        factory: function DomSanitizer_Factory(__ngFactoryType__) {
            let __ngConditionalFactory__ = null;
            if (__ngFactoryType__) {
                __ngConditionalFactory__ = new (__ngFactoryType__ || _DomSanitizer)();
            }
            else {
                __ngConditionalFactory__ = i0.ɵɵinject(DomSanitizerImpl);
            }
            return __ngConditionalFactory__;
        },
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomSanitizer, [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                    useExisting: forwardRef(() => DomSanitizerImpl)
                }]
        }], null, null);
})();
var DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
    _doc;
    constructor(_doc) {
        super();
        this._doc = _doc;
    }
    sanitize(ctx, value) {
        if (value == null)
            return null;
        switch (ctx) {
            case SecurityContext.NONE:
                return value;
            case SecurityContext.HTML:
                if (_allowSanitizationBypassAndThrow(value, "HTML"
                /* BypassType.Html */ )) {
                    return _unwrapSafeValue(value);
                }
                return __sanitizeHtml(this._doc, String(value)).toString();
            case SecurityContext.STYLE:
                if (_allowSanitizationBypassAndThrow(value, "Style"
                /* BypassType.Style */ )) {
                    return _unwrapSafeValue(value);
                }
                return value;
            case SecurityContext.SCRIPT:
                if (_allowSanitizationBypassAndThrow(value, "Script"
                /* BypassType.Script */ )) {
                    return _unwrapSafeValue(value);
                }
                throw new _RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
            case SecurityContext.URL:
                if (_allowSanitizationBypassAndThrow(value, "URL"
                /* BypassType.Url */ )) {
                    return _unwrapSafeValue(value);
                }
                return __sanitizeUrl(String(value));
            case SecurityContext.RESOURCE_URL:
                if (_allowSanitizationBypassAndThrow(value, "ResourceURL"
                /* BypassType.ResourceUrl */ )) {
                    return _unwrapSafeValue(value);
                }
                throw new _RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${_XSS_SECURITY_URL})`);
            default:
                throw new _RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${_XSS_SECURITY_URL})`);
        }
    }
    bypassSecurityTrustHtml(value) {
        return _bypassSanitizationTrustHtml(value);
    }
    bypassSecurityTrustStyle(value) {
        return _bypassSanitizationTrustStyle(value);
    }
    bypassSecurityTrustScript(value) {
        return _bypassSanitizationTrustScript(value);
    }
    bypassSecurityTrustUrl(value) {
        return _bypassSanitizationTrustUrl(value);
    }
    bypassSecurityTrustResourceUrl(value) {
        return _bypassSanitizationTrustResourceUrl(value);
    }
    static ɵfac = function DomSanitizerImpl_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DomSanitizerImpl)(i0.ɵɵinject(DOCUMENT));
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _DomSanitizerImpl,
        factory: _DomSanitizerImpl.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomSanitizerImpl, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }], null);
})();
var HydrationFeatureKind;
(function (HydrationFeatureKind2) {
    HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
    HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
    HydrationFeatureKind2[HydrationFeatureKind2["I18nSupport"] = 2] = "I18nSupport";
    HydrationFeatureKind2[HydrationFeatureKind2["EventReplay"] = 3] = "EventReplay";
    HydrationFeatureKind2[HydrationFeatureKind2["IncrementalHydration"] = 4] = "IncrementalHydration";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));
function hydrationFeature(ɵkind, ɵproviders = [], ɵoptions = {}) {
    return {
        ɵkind,
        ɵproviders
    };
}
function withNoHttpTransferCache() {
    return hydrationFeature(HydrationFeatureKind.NoHttpTransferCache);
}
function withHttpTransferCacheOptions(options) {
    return hydrationFeature(HydrationFeatureKind.HttpTransferCacheOptions, _withHttpTransferCache(options));
}
function withI18nSupport() {
    return hydrationFeature(HydrationFeatureKind.I18nSupport, _withI18nSupport());
}
function withEventReplay() {
    return hydrationFeature(HydrationFeatureKind.EventReplay, _withEventReplay());
}
function withIncrementalHydration() {
    return hydrationFeature(HydrationFeatureKind.IncrementalHydration, _withIncrementalHydration());
}
function provideEnabledBlockingInitialNavigationDetector() {
    return [{
            provide: ENVIRONMENT_INITIALIZER,
            useValue: () => {
                const isEnabledBlockingInitialNavigation = inject(_IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, {
                    optional: true
                });
                if (isEnabledBlockingInitialNavigation) {
                    const console2 = inject(_Console);
                    const message = _formatRuntimeError(5001, "Configuration error: found both hydration and enabledBlocking initial navigation in the same application, which is a contradiction.");
                    console2.warn(message);
                }
            },
            multi: true
        }];
}
function provideClientHydration(...features) {
    const providers = [];
    const featuresKind = /* @__PURE__ */ new Set();
    for (const { ɵproviders, ɵkind } of features) {
        featuresKind.add(ɵkind);
        if (ɵproviders.length) {
            providers.push(ɵproviders);
        }
    }
    const hasHttpTransferCacheOptions = featuresKind.has(HydrationFeatureKind.HttpTransferCacheOptions);
    if (typeof ngDevMode !== "undefined" && ngDevMode && featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) && hasHttpTransferCacheOptions) {
        throw new _RuntimeError(5001, "Configuration error: found both withHttpTransferCacheOptions() and withNoHttpTransferCache() in the same call to provideClientHydration(), which is a contradiction.");
    }
    return makeEnvironmentProviders([typeof ngDevMode !== "undefined" && ngDevMode ? provideEnabledBlockingInitialNavigationDetector() : [], _withDomHydration(), featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) || hasHttpTransferCacheOptions ? [] : _withHttpTransferCache({}), providers]);
}
var VERSION = new Version("21.0.0-next.5");
export { BrowserModule, By, DomSanitizer, EVENT_MANAGER_PLUGINS, EventManager, EventManagerPlugin, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerGestureConfig, HammerModule, HydrationFeatureKind, Meta, REMOVE_STYLES_ON_COMPONENT_DESTROY, Title, VERSION, bootstrapApplication, createApplication, disableDebugTools, enableDebugTools, platformBrowser, provideClientHydration, provideProtractorTestingSupport, withEventReplay, withHttpTransferCacheOptions, withI18nSupport, withIncrementalHydration, withNoHttpTransferCache, BrowserDomAdapter as ɵBrowserDomAdapter, BrowserGetTestability as ɵBrowserGetTestability, DomEventsPlugin as ɵDomEventsPlugin, DomRendererFactory2 as ɵDomRendererFactory2, DomSanitizerImpl as ɵDomSanitizerImpl, HammerGesturesPlugin as ɵHammerGesturesPlugin, KeyEventsPlugin as ɵKeyEventsPlugin, SharedStylesHost as ɵSharedStylesHost, ɵgetDOM };
/*! Bundled license information:

@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/ 
