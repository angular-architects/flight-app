import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/platform-browser/fesm2022/dom_renderer.mjs
import { DOCUMENT, ɵgetDOM as _getDOM } from "@angular/common";
import * as i0 from "@angular/core";
import { InjectionToken, ɵRuntimeError as _RuntimeError, Injectable, Inject, APP_ID, CSP_NONCE, PLATFORM_ID, Optional, ViewEncapsulation, ɵTracingService as _TracingService, RendererStyleFlags2, ɵallLeavingAnimations as _allLeavingAnimations } from "@angular/core";
var EVENT_MANAGER_PLUGINS = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "EventManagerPlugins" : "");
var EventManager = class _EventManager {
    _zone;
    _plugins;
    _eventNameToPlugin = /* @__PURE__ */ new Map();
    /**
     * Initializes an instance of the event-manager service.
     */
    constructor(plugins, _zone) {
        this._zone = _zone;
        plugins.forEach(plugin => {
            plugin.manager = this;
        });
        this._plugins = plugins.slice().reverse();
    }
    /**
     * Registers a handler for a specific element and event.
     *
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @param options Options that configure how the event listener is bound.
     * @returns  A callback function that can be used to remove the handler.
     */
    addEventListener(element, eventName, handler, options) {
        const plugin = this._findPluginFor(eventName);
        return plugin.addEventListener(element, eventName, handler, options);
    }
    /**
     * Retrieves the compilation zone in which event listeners are registered.
     */
    getZone() {
        return this._zone;
    }
    /** @internal */
    _findPluginFor(eventName) {
        let plugin = this._eventNameToPlugin.get(eventName);
        if (plugin) {
            return plugin;
        }
        const plugins = this._plugins;
        plugin = plugins.find(plugin2 => plugin2.supports(eventName));
        if (!plugin) {
            throw new _RuntimeError(5101, (typeof ngDevMode === "undefined" || ngDevMode) && `No event manager plugin found for event ${eventName}`);
        }
        this._eventNameToPlugin.set(eventName, plugin);
        return plugin;
    }
    static ɵfac = function EventManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _EventManager)(i0.ɵɵinject(EVENT_MANAGER_PLUGINS), i0.ɵɵinject(i0.NgZone));
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _EventManager,
        factory: _EventManager.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventManager, [{
            type: Injectable
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [EVENT_MANAGER_PLUGINS]
                }]
        }, {
            type: i0.NgZone
        }], null);
})();
var EventManagerPlugin = class {
    _doc;
    // TODO: remove (has some usage in G3)
    constructor(_doc) {
        this._doc = _doc;
    }
    // Using non-null assertion because it's set by EventManager's constructor
    manager;
};
var APP_ID_ATTRIBUTE_NAME = "ng-app-id";
function removeElements(elements) {
    for (const element of elements) {
        element.remove();
    }
}
function createStyleElement(style, doc) {
    const styleElement = doc.createElement("style");
    styleElement.textContent = style;
    return styleElement;
}
function addServerStyles(doc, appId, inline, external) {
    const elements = doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${appId}"],link[${APP_ID_ATTRIBUTE_NAME}="${appId}"]`);
    if (elements) {
        for (const styleElement of elements) {
            styleElement.removeAttribute(APP_ID_ATTRIBUTE_NAME);
            if (styleElement instanceof HTMLLinkElement) {
                external.set(styleElement.href.slice(styleElement.href.lastIndexOf("/") + 1), {
                    usage: 0,
                    elements: [styleElement]
                });
            }
            else if (styleElement.textContent) {
                inline.set(styleElement.textContent, {
                    usage: 0,
                    elements: [styleElement]
                });
            }
        }
    }
}
function createLinkElement(url, doc) {
    const linkElement = doc.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("href", url);
    return linkElement;
}
var SharedStylesHost = class _SharedStylesHost {
    doc;
    appId;
    nonce;
    /**
     * Provides usage information for active inline style content and associated HTML <style> elements.
     * Embedded styles typically originate from the `styles` metadata of a rendered component.
     */
    inline = /* @__PURE__ */ new Map();
    /**
     * Provides usage information for active external style URLs and the associated HTML <link> elements.
     * External styles typically originate from the `ɵɵExternalStylesFeature` of a rendered component.
     */
    external = /* @__PURE__ */ new Map();
    /**
     * Set of host DOM nodes that will have styles attached.
     */
    hosts = /* @__PURE__ */ new Set();
    constructor(doc, appId, nonce, platformId = {}) {
        this.doc = doc;
        this.appId = appId;
        this.nonce = nonce;
        addServerStyles(doc, appId, this.inline, this.external);
        this.hosts.add(doc.head);
    }
    /**
     * Adds embedded styles to the DOM via HTML `style` elements.
     * @param styles An array of style content strings.
     */
    addStyles(styles, urls) {
        for (const value of styles) {
            this.addUsage(value, this.inline, createStyleElement);
        }
        urls?.forEach(value => this.addUsage(value, this.external, createLinkElement));
    }
    /**
     * Removes embedded styles from the DOM that were added as HTML `style` elements.
     * @param styles An array of style content strings.
     */
    removeStyles(styles, urls) {
        for (const value of styles) {
            this.removeUsage(value, this.inline);
        }
        urls?.forEach(value => this.removeUsage(value, this.external));
    }
    addUsage(value, usages, creator) {
        const record = usages.get(value);
        if (record) {
            if ((typeof ngDevMode === "undefined" || ngDevMode) && record.usage === 0) {
                record.elements.forEach(element => element.setAttribute("ng-style-reused", ""));
            }
            record.usage++;
        }
        else {
            usages.set(value, {
                usage: 1,
                elements: [...this.hosts].map(host => this.addElement(host, creator(value, this.doc)))
            });
        }
    }
    removeUsage(value, usages) {
        const record = usages.get(value);
        if (record) {
            record.usage--;
            if (record.usage <= 0) {
                removeElements(record.elements);
                usages.delete(value);
            }
        }
    }
    ngOnDestroy() {
        for (const [, { elements }] of [...this.inline, ...this.external]) {
            removeElements(elements);
        }
        this.hosts.clear();
    }
    /**
     * Adds a host node to the set of style hosts and adds all existing style usage to
     * the newly added host node.
     *
     * This is currently only used for Shadow DOM encapsulation mode.
     */
    addHost(hostNode) {
        this.hosts.add(hostNode);
        for (const [style, { elements }] of this.inline) {
            elements.push(this.addElement(hostNode, createStyleElement(style, this.doc)));
        }
        for (const [url, { elements }] of this.external) {
            elements.push(this.addElement(hostNode, createLinkElement(url, this.doc)));
        }
    }
    removeHost(hostNode) {
        this.hosts.delete(hostNode);
    }
    addElement(host, element) {
        if (this.nonce) {
            element.setAttribute("nonce", this.nonce);
        }
        if (typeof ngServerMode !== "undefined" && ngServerMode) {
            element.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
        }
        return host.appendChild(element);
    }
    static ɵfac = function SharedStylesHost_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _SharedStylesHost)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(APP_ID), i0.ɵɵinject(CSP_NONCE, 8), i0.ɵɵinject(PLATFORM_ID));
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _SharedStylesHost,
        factory: _SharedStylesHost.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedStylesHost, [{
            type: Injectable
        }], () => [{
            type: Document,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }, {
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [APP_ID]
                }]
        }, {
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [CSP_NONCE]
                }, {
                    type: Optional
                }]
        }, {
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }]
        }], null);
})();
var NAMESPACE_URIS = {
    "svg": "http://www.w3.org/2000/svg",
    "xhtml": "http://www.w3.org/1999/xhtml",
    "xlink": "http://www.w3.org/1999/xlink",
    "xml": "http://www.w3.org/XML/1998/namespace",
    "xmlns": "http://www.w3.org/2000/xmlns/",
    "math": "http://www.w3.org/1998/Math/MathML"
};
var COMPONENT_REGEX = /%COMP%/g;
var SOURCEMAP_URL_REGEXP = /\/\*#\s*sourceMappingURL=(.+?)\s*\*\//;
var PROTOCOL_REGEXP = /^https?:/;
var COMPONENT_VARIABLE = "%COMP%";
var HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
var CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
var REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
var REMOVE_STYLES_ON_COMPONENT_DESTROY = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "RemoveStylesOnCompDestroy" : "", {
    providedIn: "root",
    factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
    return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
    return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
    return styles.map(s => s.replace(COMPONENT_REGEX, compId));
}
function addBaseHrefToCssSourceMap(baseHref, styles) {
    if (!baseHref) {
        return styles;
    }
    const absoluteBaseHrefUrl = new URL(baseHref, "http://localhost");
    return styles.map(cssContent => {
        if (!cssContent.includes("sourceMappingURL=")) {
            return cssContent;
        }
        return cssContent.replace(SOURCEMAP_URL_REGEXP, (_, sourceMapUrl) => {
            if (sourceMapUrl[0] === "/" || sourceMapUrl.startsWith("data:") || PROTOCOL_REGEXP.test(sourceMapUrl)) {
                return `/*# sourceMappingURL=${sourceMapUrl} */`;
            }
            const { pathname: resolvedSourceMapUrl } = new URL(sourceMapUrl, absoluteBaseHrefUrl);
            return `/*# sourceMappingURL=${resolvedSourceMapUrl} */`;
        });
    });
}
var DomRendererFactory2 = class _DomRendererFactory2 {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    platformId;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = /* @__PURE__ */ new Map();
    defaultRenderer;
    platformIsServer;
    constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, platformId, ngZone, nonce = null, tracingService = null) {
        this.eventManager = eventManager;
        this.sharedStylesHost = sharedStylesHost;
        this.appId = appId;
        this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
        this.doc = doc;
        this.platformId = platformId;
        this.ngZone = ngZone;
        this.nonce = nonce;
        this.tracingService = tracingService;
        this.platformIsServer = typeof ngServerMode !== "undefined" && ngServerMode;
        this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer, this.tracingService);
    }
    createRenderer(element, type) {
        if (!element || !type) {
            return this.defaultRenderer;
        }
        if (typeof ngServerMode !== "undefined" && ngServerMode && (type.encapsulation === ViewEncapsulation.ShadowDom || type.encapsulation === ViewEncapsulation.IsolatedShadowDom)) {
            type = __spreadProps(__spreadValues({}, type), {
                encapsulation: ViewEncapsulation.Emulated
            });
        }
        const renderer = this.getOrCreateRenderer(element, type);
        if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
            renderer.applyToHost(element);
        }
        else if (renderer instanceof NoneEncapsulationDomRenderer) {
            renderer.applyStyles();
        }
        return renderer;
    }
    getOrCreateRenderer(element, type) {
        const rendererByCompId = this.rendererByCompId;
        let renderer = rendererByCompId.get(type.id);
        if (!renderer) {
            const doc = this.doc;
            const ngZone = this.ngZone;
            const eventManager = this.eventManager;
            const sharedStylesHost = this.sharedStylesHost;
            const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
            const platformIsServer = this.platformIsServer;
            const tracingService = this.tracingService;
            switch (type.encapsulation) {
                case ViewEncapsulation.Emulated:
                    renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService);
                    break;
                case ViewEncapsulation.ShadowDom:
                    return new ShadowDomRenderer(eventManager, element, type, doc, ngZone, this.nonce, platformIsServer, tracingService, sharedStylesHost);
                case ViewEncapsulation.IsolatedShadowDom:
                    return new ShadowDomRenderer(eventManager, element, type, doc, ngZone, this.nonce, platformIsServer, tracingService);
                default:
                    renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService);
                    break;
            }
            rendererByCompId.set(type.id, renderer);
        }
        return renderer;
    }
    ngOnDestroy() {
        this.rendererByCompId.clear();
    }
    /**
     * Used during HMR to clear any cached data about a component.
     * @param componentId ID of the component that is being replaced.
     */
    componentReplaced(componentId) {
        this.rendererByCompId.delete(componentId);
    }
    static ɵfac = function DomRendererFactory2_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DomRendererFactory2)(i0.ɵɵinject(EventManager), i0.ɵɵinject(SharedStylesHost), i0.ɵɵinject(APP_ID), i0.ɵɵinject(REMOVE_STYLES_ON_COMPONENT_DESTROY), i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(CSP_NONCE), i0.ɵɵinject(_TracingService, 8));
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _DomRendererFactory2,
        factory: _DomRendererFactory2.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DomRendererFactory2, [{
            type: Injectable
        }], () => [{
            type: EventManager
        }, {
            type: SharedStylesHost
        }, {
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [APP_ID]
                }]
        }, {
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
                }]
        }, {
            type: Document,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }, {
            type: Object,
            decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }]
        }, {
            type: i0.NgZone
        }, {
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [CSP_NONCE]
                }]
        }, {
            type: i0.ɵTracingService,
            decorators: [{
                    type: Inject,
                    args: [_TracingService]
                }, {
                    type: Optional
                }]
        }], null);
})();
var DefaultDomRenderer2 = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = /* @__PURE__ */ Object.create(null);
    /**
     * By default this renderer throws when encountering synthetic properties
     * This can be disabled for example by the AsyncAnimationRendererFactory
     */
    throwOnSyntheticProps = true;
    constructor(eventManager, doc, ngZone, platformIsServer, tracingService) {
        this.eventManager = eventManager;
        this.doc = doc;
        this.ngZone = ngZone;
        this.platformIsServer = platformIsServer;
        this.tracingService = tracingService;
    }
    destroy() { }
    destroyNode = null;
    createElement(name, namespace) {
        if (namespace) {
            return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
        }
        return this.doc.createElement(name);
    }
    createComment(value) {
        return this.doc.createComment(value);
    }
    createText(value) {
        return this.doc.createTextNode(value);
    }
    appendChild(parent, newChild) {
        const targetParent = isTemplateNode(parent) ? parent.content : parent;
        targetParent.appendChild(newChild);
    }
    insertBefore(parent, newChild, refChild) {
        if (parent) {
            const targetParent = isTemplateNode(parent) ? parent.content : parent;
            targetParent.insertBefore(newChild, refChild);
        }
    }
    removeChild(_parent, oldChild) {
        oldChild.remove();
    }
    selectRootElement(selectorOrNode, preserveContent) {
        let el = typeof selectorOrNode === "string" ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
        if (!el) {
            throw new _RuntimeError(-5104, (typeof ngDevMode === "undefined" || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
        }
        if (!preserveContent) {
            el.textContent = "";
        }
        return el;
    }
    parentNode(node) {
        return node.parentNode;
    }
    nextSibling(node) {
        return node.nextSibling;
    }
    setAttribute(el, name, value, namespace) {
        if (namespace) {
            name = namespace + ":" + name;
            const namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.setAttributeNS(namespaceUri, name, value);
            }
            else {
                el.setAttribute(name, value);
            }
        }
        else {
            el.setAttribute(name, value);
        }
    }
    removeAttribute(el, name, namespace) {
        if (namespace) {
            const namespaceUri = NAMESPACE_URIS[namespace];
            if (namespaceUri) {
                el.removeAttributeNS(namespaceUri, name);
            }
            else {
                el.removeAttribute(`${namespace}:${name}`);
            }
        }
        else {
            el.removeAttribute(name);
        }
    }
    addClass(el, name) {
        el.classList.add(name);
    }
    removeClass(el, name) {
        el.classList.remove(name);
    }
    setStyle(el, style, value, flags) {
        if (flags & (RendererStyleFlags2.DashCase | RendererStyleFlags2.Important)) {
            el.style.setProperty(style, value, flags & RendererStyleFlags2.Important ? "important" : "");
        }
        else {
            el.style[style] = value;
        }
    }
    removeStyle(el, style, flags) {
        if (flags & RendererStyleFlags2.DashCase) {
            el.style.removeProperty(style);
        }
        else {
            el.style[style] = "";
        }
    }
    setProperty(el, name, value) {
        if (el == null) {
            return;
        }
        (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, "property");
        el[name] = value;
    }
    setValue(node, value) {
        node.nodeValue = value;
    }
    listen(target, event, callback, options) {
        (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, "listener");
        if (typeof target === "string") {
            target = _getDOM().getGlobalEventTarget(this.doc, target);
            if (!target) {
                throw new _RuntimeError(5102, (typeof ngDevMode === "undefined" || ngDevMode) && `Unsupported event target ${target} for event ${event}`);
            }
        }
        let wrappedCallback = this.decoratePreventDefault(callback);
        if (this.tracingService?.wrapEventListener) {
            wrappedCallback = this.tracingService.wrapEventListener(target, event, wrappedCallback);
        }
        return this.eventManager.addEventListener(target, event, wrappedCallback, options);
    }
    decoratePreventDefault(eventHandler) {
        return event => {
            if (event === "__ngUnwrap__") {
                return eventHandler;
            }
            const allowDefaultBehavior = typeof ngServerMode !== "undefined" && ngServerMode ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
            if (allowDefaultBehavior === false) {
                event.preventDefault();
            }
            return void 0;
        };
    }
};
var AT_CHARCODE = (() => "@".charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
    if (name.charCodeAt(0) === AT_CHARCODE) {
        throw new _RuntimeError(5105, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Make sure \`provideAnimationsAsync()\`, \`provideAnimations()\` or \`provideNoopAnimations()\` call was added to a list of providers used to bootstrap an application.
  - There is a corresponding animation configuration named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.dev/api/core/Component#animations).`);
    }
}
function isTemplateNode(node) {
    return node.tagName === "TEMPLATE" && node.content !== void 0;
}
var ShadowDomRenderer = class extends DefaultDomRenderer2 {
    hostEl;
    sharedStylesHost;
    shadowRoot;
    constructor(eventManager, hostEl, component, doc, ngZone, nonce, platformIsServer, tracingService, sharedStylesHost) {
        super(eventManager, doc, ngZone, platformIsServer, tracingService);
        this.hostEl = hostEl;
        this.sharedStylesHost = sharedStylesHost;
        this.shadowRoot = hostEl.attachShadow({
            mode: "open"
        });
        if (this.sharedStylesHost) {
            this.sharedStylesHost.addHost(this.shadowRoot);
        }
        let styles = component.styles;
        if (ngDevMode) {
            const baseHref = _getDOM().getBaseHref(doc) ?? "";
            styles = addBaseHrefToCssSourceMap(baseHref, styles);
        }
        styles = shimStylesContent(component.id, styles);
        for (const style of styles) {
            const styleEl = document.createElement("style");
            if (nonce) {
                styleEl.setAttribute("nonce", nonce);
            }
            styleEl.textContent = style;
            this.shadowRoot.appendChild(styleEl);
        }
        const styleUrls = component.getExternalStyles?.();
        if (styleUrls) {
            for (const styleUrl of styleUrls) {
                const linkEl = createLinkElement(styleUrl, doc);
                if (nonce) {
                    linkEl.setAttribute("nonce", nonce);
                }
                this.shadowRoot.appendChild(linkEl);
            }
        }
    }
    nodeOrShadowRoot(node) {
        return node === this.hostEl ? this.shadowRoot : node;
    }
    appendChild(parent, newChild) {
        return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
    }
    insertBefore(parent, newChild, refChild) {
        return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
    }
    removeChild(_parent, oldChild) {
        return super.removeChild(null, oldChild);
    }
    parentNode(node) {
        return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
    }
    destroy() {
        if (this.sharedStylesHost) {
            this.sharedStylesHost.removeHost(this.shadowRoot);
        }
    }
};
var NoneEncapsulationDomRenderer = class extends DefaultDomRenderer2 {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService, compId) {
        super(eventManager, doc, ngZone, platformIsServer, tracingService);
        this.sharedStylesHost = sharedStylesHost;
        this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
        let styles = component.styles;
        if (ngDevMode) {
            const baseHref = _getDOM().getBaseHref(doc) ?? "";
            styles = addBaseHrefToCssSourceMap(baseHref, styles);
        }
        this.styles = compId ? shimStylesContent(compId, styles) : styles;
        this.styleUrls = component.getExternalStyles?.(compId);
    }
    applyStyles() {
        this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
    }
    destroy() {
        if (!this.removeStylesOnCompDestroy) {
            return;
        }
        if (_allLeavingAnimations.size === 0) {
            this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
        }
    }
};
var EmulatedEncapsulationDomRenderer2 = class extends NoneEncapsulationDomRenderer {
    contentAttr;
    hostAttr;
    constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService) {
        const compId = appId + "-" + component.id;
        super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService, compId);
        this.contentAttr = shimContentAttribute(compId);
        this.hostAttr = shimHostAttribute(compId);
    }
    applyToHost(element) {
        this.applyStyles();
        this.setAttribute(element, this.hostAttr, "");
    }
    createElement(parent, name) {
        const el = super.createElement(parent, name);
        super.setAttribute(el, this.contentAttr, "");
        return el;
    }
};
export { EVENT_MANAGER_PLUGINS, EventManager, EventManagerPlugin, SharedStylesHost, REMOVE_STYLES_ON_COMPONENT_DESTROY, DomRendererFactory2 };
/*! Bundled license information:

@angular/platform-browser/fesm2022/dom_renderer.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/ 
