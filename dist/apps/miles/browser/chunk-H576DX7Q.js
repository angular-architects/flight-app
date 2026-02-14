import { DomRendererFactory2, EVENT_MANAGER_PLUGINS, EventManager, EventManagerPlugin, SharedStylesHost } from "@nf-internal/chunk-UP5EALJF";
import { __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/platform-browser/fesm2022/browser.mjs
import { ɵDomAdapter as _DomAdapter, ɵsetRootDomAdapter as _setRootDomAdapter, ɵparseCookieValue as _parseCookieValue, ɵgetDOM as _getDOM, DOCUMENT, ɵPLATFORM_BROWSER_ID as _PLATFORM_BROWSER_ID, XhrFactory, CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { ɵglobal as _global, ɵRuntimeError as _RuntimeError, Injectable, Inject, ɵresolveComponentResources as _resolveComponentResources, ɵinternalCreateApplication as _internalCreateApplication, PLATFORM_ID, PLATFORM_INITIALIZER, createPlatformFactory, platformCore, InjectionToken, ɵTESTABILITY_GETTER as _TESTABILITY_GETTER, ɵTESTABILITY as _TESTABILITY, Testability, ɵINJECTOR_SCOPE as _INJECTOR_SCOPE, ErrorHandler, RendererFactory2, inject, ApplicationModule, NgModule, ɵsetDocument as _setDocument } from "@angular/core";
var BrowserDomAdapter = class _BrowserDomAdapter extends _DomAdapter {
    supportsDOMEvents = true;
    static makeCurrent() {
        _setRootDomAdapter(new _BrowserDomAdapter());
    }
    onAndCancel(el, evt, listener, options) {
        el.addEventListener(evt, listener, options);
        return () => {
            el.removeEventListener(evt, listener, options);
        };
    }
    dispatchEvent(el, evt) {
        el.dispatchEvent(evt);
    }
    remove(node) {
        node.remove();
    }
    createElement(tagName, doc) {
        doc = doc || this.getDefaultDocument();
        return doc.createElement(tagName);
    }
    createHtmlDocument() {
        return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
        return document;
    }
    isElementNode(node) {
        return node.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(node) {
        return node instanceof DocumentFragment;
    }
    /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
    getGlobalEventTarget(doc, target) {
        if (target === "window") {
            return window;
        }
        if (target === "document") {
            return doc;
        }
        if (target === "body") {
            return doc.body;
        }
        return null;
    }
    getBaseHref(doc) {
        const href = getBaseElementHref();
        return href == null ? null : relativePath(href);
    }
    resetBaseElement() {
        baseElement = null;
    }
    getUserAgent() {
        return window.navigator.userAgent;
    }
    getCookie(name) {
        return _parseCookieValue(document.cookie, name);
    }
};
var baseElement = null;
function getBaseElementHref() {
    baseElement = baseElement || document.head.querySelector("base");
    return baseElement ? baseElement.getAttribute("href") : null;
}
function relativePath(url) {
    return new URL(url, document.baseURI).pathname;
}
var BrowserGetTestability = class {
    addToWindow(registry) {
        _global["getAngularTestability"] = (elem, findInAncestors = true) => {
            const testability = registry.findTestabilityInTree(elem, findInAncestors);
            if (testability == null) {
                throw new _RuntimeError(5103, (typeof ngDevMode === "undefined" || ngDevMode) && "Could not find testability for element.");
            }
            return testability;
        };
        _global["getAllAngularTestabilities"] = () => registry.getAllTestabilities();
        _global["getAllAngularRootElements"] = () => registry.getAllRootElements();
        const whenAllStable = callback => {
            const testabilities = _global["getAllAngularTestabilities"]();
            let count = testabilities.length;
            const decrement = function () {
                count--;
                if (count == 0) {
                    callback();
                }
            };
            testabilities.forEach(testability => {
                testability.whenStable(decrement);
            });
        };
        if (!_global["frameworkStabilizers"]) {
            _global["frameworkStabilizers"] = [];
        }
        _global["frameworkStabilizers"].push(whenAllStable);
    }
    findTestabilityInTree(registry, elem, findInAncestors) {
        if (elem == null) {
            return null;
        }
        const t = registry.getTestability(elem);
        if (t != null) {
            return t;
        }
        else if (!findInAncestors) {
            return null;
        }
        if (_getDOM().isShadowRoot(elem)) {
            return this.findTestabilityInTree(registry, elem.host, true);
        }
        return this.findTestabilityInTree(registry, elem.parentElement, true);
    }
};
var BrowserXhr = class _BrowserXhr {
    build() {
        return new XMLHttpRequest();
    }
    static ɵfac = function BrowserXhr_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BrowserXhr)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _BrowserXhr,
        factory: _BrowserXhr.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowserXhr, [{
            type: Injectable
        }], null, null);
})();
var DomEventsPlugin = class _DomEventsPlugin extends EventManagerPlugin {
    constructor(doc) {
        super(doc);
    }
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    supports(eventName) {
        return true;
    }
    addEventListener(element, eventName, handler, options) {
        element.addEventListener(eventName, handler, options);
        return () => this.removeEventListener(element, eventName, handler, options);
    }
    removeEventListener(target, eventName, callback, options) {
        return target.removeEventListener(eventName, callback, options);
    }
    static ɵfac = function DomEventsPlugin_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DomEventsPlugin)(i0.ɵɵinject(DOCUMENT));
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _DomEventsPlugin,
        factory: _DomEventsPlugin.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomEventsPlugin, [{
            type: Injectable
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }], null);
})();
var MODIFIER_KEYS = ["alt", "control", "meta", "shift"];
var _keyMap = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    "Del": "Delete",
    "Esc": "Escape",
    "Left": "ArrowLeft",
    "Right": "ArrowRight",
    "Up": "ArrowUp",
    "Down": "ArrowDown",
    "Menu": "ContextMenu",
    "Scroll": "ScrollLock",
    "Win": "OS"
};
var MODIFIER_KEY_GETTERS = {
    "alt": event => event.altKey,
    "control": event => event.ctrlKey,
    "meta": event => event.metaKey,
    "shift": event => event.shiftKey
};
var KeyEventsPlugin = class _KeyEventsPlugin extends EventManagerPlugin {
    /**
     * Initializes an instance of the browser plug-in.
     * @param doc The document in which key events will be detected.
     */
    constructor(doc) {
        super(doc);
    }
    /**
     * Reports whether a named key event is supported.
     * @param eventName The event name to query.
     * @return True if the named key event is supported.
     */
    supports(eventName) {
        return _KeyEventsPlugin.parseEventName(eventName) != null;
    }
    /**
     * Registers a handler for a specific element and key event.
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the key event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns The key event that was registered.
     */
    addEventListener(element, eventName, handler, options) {
        const parsedEvent = _KeyEventsPlugin.parseEventName(eventName);
        const outsideHandler = _KeyEventsPlugin.eventCallback(parsedEvent["fullKey"], handler, this.manager.getZone());
        return this.manager.getZone().runOutsideAngular(() => {
            return _getDOM().onAndCancel(element, parsedEvent["domEventName"], outsideHandler, options);
        });
    }
    /**
     * Parses the user provided full keyboard event definition and normalizes it for
     * later internal use. It ensures the string is all lowercase, converts special
     * characters to a standard spelling, and orders all the values consistently.
     *
     * @param eventName The name of the key event to listen for.
     * @returns an object with the full, normalized string, and the dom event name
     * or null in the case when the event doesn't match a keyboard event.
     */
    static parseEventName(eventName) {
        const parts = eventName.toLowerCase().split(".");
        const domEventName = parts.shift();
        if (parts.length === 0 || !(domEventName === "keydown" || domEventName === "keyup")) {
            return null;
        }
        const key = _KeyEventsPlugin._normalizeKey(parts.pop());
        let fullKey = "";
        let codeIX = parts.indexOf("code");
        if (codeIX > -1) {
            parts.splice(codeIX, 1);
            fullKey = "code.";
        }
        MODIFIER_KEYS.forEach(modifierName => {
            const index = parts.indexOf(modifierName);
            if (index > -1) {
                parts.splice(index, 1);
                fullKey += modifierName + ".";
            }
        });
        fullKey += key;
        if (parts.length != 0 || key.length === 0) {
            return null;
        }
        const result = {};
        result["domEventName"] = domEventName;
        result["fullKey"] = fullKey;
        return result;
    }
    /**
     * Determines whether the actual keys pressed match the configured key code string.
     * The `fullKeyCode` event is normalized in the `parseEventName` method when the
     * event is attached to the DOM during the `addEventListener` call. This is unseen
     * by the end user and is normalized for internal consistency and parsing.
     *
     * @param event The keyboard event.
     * @param fullKeyCode The normalized user defined expected key event string
     * @returns boolean.
     */
    static matchEventFullKeyCode(event, fullKeyCode) {
        let keycode = _keyMap[event.key] || event.key;
        let key = "";
        if (fullKeyCode.indexOf("code.") > -1) {
            keycode = event.code;
            key = "code.";
        }
        if (keycode == null || !keycode)
            return false;
        keycode = keycode.toLowerCase();
        if (keycode === " ") {
            keycode = "space";
        }
        else if (keycode === ".") {
            keycode = "dot";
        }
        MODIFIER_KEYS.forEach(modifierName => {
            if (modifierName !== keycode) {
                const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
                if (modifierGetter(event)) {
                    key += modifierName + ".";
                }
            }
        });
        key += keycode;
        return key === fullKeyCode;
    }
    /**
     * Configures a handler callback for a key event.
     * @param fullKey The event name that combines all simultaneous keystrokes.
     * @param handler The function that responds to the key event.
     * @param zone The zone in which the event occurred.
     * @returns A callback function.
     */
    static eventCallback(fullKey, handler, zone) {
        return event => {
            if (_KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
                zone.runGuarded(() => handler(event));
            }
        };
    }
    /** @internal */
    static _normalizeKey(keyName) {
        return keyName === "esc" ? "escape" : keyName;
    }
    static ɵfac = function KeyEventsPlugin_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _KeyEventsPlugin)(i0.ɵɵinject(DOCUMENT));
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _KeyEventsPlugin,
        factory: _KeyEventsPlugin.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KeyEventsPlugin, [{
            type: Injectable
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }], null);
})();
function bootstrapApplication(rootComponent, options, context) {
    const config = __spreadValues({
        rootComponent,
        platformRef: context?.platformRef
    }, createProvidersConfig(options));
    if (false) {
        return _resolveComponentResources(fetch).catch(error => {
            console.error(error);
            return Promise.resolve();
        }).then(() => _internalCreateApplication(config));
    }
    return _internalCreateApplication(config);
}
function createApplication(options) {
    return _internalCreateApplication(createProvidersConfig(options));
}
function createProvidersConfig(options) {
    return {
        appProviders: [...BROWSER_MODULE_PROVIDERS, ...(options?.providers ?? [])],
        platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
    };
}
function provideProtractorTestingSupport() {
    return [...TESTABILITY_PROVIDERS];
}
function initDomAdapter() {
    BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
    return new ErrorHandler();
}
function _document() {
    _setDocument(document);
    return document;
}
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
        provide: PLATFORM_ID,
        useValue: _PLATFORM_BROWSER_ID
    }, {
        provide: PLATFORM_INITIALIZER,
        useValue: initDomAdapter,
        multi: true
    }, {
        provide: DOCUMENT,
        useFactory: _document
    }];
var platformBrowser = createPlatformFactory(platformCore, "browser", INTERNAL_BROWSER_PLATFORM_PROVIDERS);
var BROWSER_MODULE_PROVIDERS_MARKER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "BrowserModule Providers Marker" : "");
var TESTABILITY_PROVIDERS = [{
        provide: _TESTABILITY_GETTER,
        useClass: BrowserGetTestability
    }, {
        provide: _TESTABILITY,
        useClass: Testability
    }, {
        provide: Testability,
        // Also provide as `Testability` for backwards-compatibility.
        useClass: Testability
    }];
var BROWSER_MODULE_PROVIDERS = [{
        provide: _INJECTOR_SCOPE,
        useValue: "root"
    }, {
        provide: ErrorHandler,
        useFactory: errorHandler
    }, {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: DomEventsPlugin,
        multi: true
    }, {
        provide: EVENT_MANAGER_PLUGINS,
        useClass: KeyEventsPlugin,
        multi: true
    }, DomRendererFactory2, SharedStylesHost, EventManager, {
        provide: RendererFactory2,
        useExisting: DomRendererFactory2
    }, {
        provide: XhrFactory,
        useClass: BrowserXhr
    }, typeof ngDevMode === "undefined" || ngDevMode ? {
        provide: BROWSER_MODULE_PROVIDERS_MARKER,
        useValue: true
    } : []];
var BrowserModule = class _BrowserModule {
    constructor() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            const providersAlreadyPresent = inject(BROWSER_MODULE_PROVIDERS_MARKER, {
                optional: true,
                skipSelf: true
            });
            if (providersAlreadyPresent) {
                throw new _RuntimeError(5100, `Providers from the \`BrowserModule\` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
            }
        }
    }
    static ɵfac = function BrowserModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BrowserModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _BrowserModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
        imports: [CommonModule, ApplicationModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowserModule, [{
            type: NgModule,
            args: [{
                    providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
                    exports: [CommonModule, ApplicationModule]
                }]
        }], () => [], null);
})();
export { BrowserDomAdapter, BrowserGetTestability, DomEventsPlugin, KeyEventsPlugin, bootstrapApplication, createApplication, provideProtractorTestingSupport, platformBrowser, BrowserModule };
/*! Bundled license information:

@angular/platform-browser/fesm2022/browser.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
