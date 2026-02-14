import { _isTestEnvironment } from "@nf-internal/chunk-ZU6E73RP";
import { DomPortalOutlet, PortalModule, TemplatePortal } from "@nf-internal/chunk-KEAOYMN5";
import { ScrollDispatcher, ScrollingModule, ViewportRuler } from "@nf-internal/chunk-P2TUBJGR";
import { supportsScrollBehavior } from "@nf-internal/chunk-R44VMRSN";
import { _getEventTarget } from "@nf-internal/chunk-KPYFKLQQ";
import { _CdkPrivateStyleLoader } from "@nf-internal/chunk-HRAF4QVP";
import { hasModifierKey } from "@nf-internal/chunk-JD5JPQAG";
import { ESCAPE } from "@nf-internal/chunk-IANTZR4E";
import { Platform } from "@nf-internal/chunk-26DDZNO4";
import { _IdGenerator } from "@nf-internal/chunk-F3H34SIQ";
import { BidiModule } from "@nf-internal/chunk-XABR7MXZ";
import { Directionality } from "@nf-internal/chunk-GSHCXC35";
import { coerceCssPixelValue } from "@nf-internal/chunk-ALX3T2NV";
import { coerceArray } from "@nf-internal/chunk-DDFN47J4";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/overlay-module.mjs
import * as i0 from "@angular/core";
import { DOCUMENT, NgZone, inject, Injector, Injectable, RendererFactory2, Component, ChangeDetectionStrategy, ViewEncapsulation, afterNextRender, ElementRef, ApplicationRef, Renderer2, ANIMATION_MODULE_TYPE, EnvironmentInjector, InjectionToken, Directive, EventEmitter, TemplateRef, ViewContainerRef, booleanAttribute, Input, Output, NgModule } from "@angular/core";
import { Location } from "@angular/common";
import { Subject, Subscription } from "rxjs";
import { filter, takeWhile } from "rxjs/operators";
var scrollBehaviorSupported = supportsScrollBehavior();
function createBlockScrollStrategy(injector) {
    return new BlockScrollStrategy(injector.get(ViewportRuler), injector.get(DOCUMENT));
}
var BlockScrollStrategy = class {
    _viewportRuler;
    _previousHTMLStyles = {
        top: "",
        left: ""
    };
    _previousScrollPosition;
    _isEnabled = false;
    _document;
    constructor(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._document = document;
    }
    /** Attaches this scroll strategy to an overlay. */
    attach() { }
    /** Blocks page-level scroll while the attached overlay is open. */
    enable() {
        if (this._canBeEnabled()) {
            const root = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            this._previousHTMLStyles.left = root.style.left || "";
            this._previousHTMLStyles.top = root.style.top || "";
            root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
            root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
            root.classList.add("cdk-global-scrollblock");
            this._isEnabled = true;
        }
    }
    /** Unblocks page-level scroll while the attached overlay is open. */
    disable() {
        if (this._isEnabled) {
            const html = this._document.documentElement;
            const body = this._document.body;
            const htmlStyle = html.style;
            const bodyStyle = body.style;
            const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "";
            const previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove("cdk-global-scrollblock");
            if (scrollBehaviorSupported) {
                htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto";
            }
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            if (scrollBehaviorSupported) {
                htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
                bodyStyle.scrollBehavior = previousBodyScrollBehavior;
            }
        }
    }
    _canBeEnabled() {
        const html = this._document.documentElement;
        if (html.classList.contains("cdk-global-scrollblock") || this._isEnabled) {
            return false;
        }
        const rootElement = this._document.documentElement;
        const viewport = this._viewportRuler.getViewportSize();
        return rootElement.scrollHeight > viewport.height || rootElement.scrollWidth > viewport.width;
    }
};
function getMatScrollStrategyAlreadyAttachedError() {
    return Error(`Scroll strategy has already been attached.`);
}
function createCloseScrollStrategy(injector, config) {
    return new CloseScrollStrategy(injector.get(ScrollDispatcher), injector.get(NgZone), injector.get(ViewportRuler), config);
}
var CloseScrollStrategy = class {
    _scrollDispatcher;
    _ngZone;
    _viewportRuler;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    _initialScrollPosition;
    constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
    }
    /** Attaches this scroll strategy to an overlay. */
    attach(overlayRef) {
        if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /** Enables the closing of the attached overlay on scroll. */
    enable() {
        if (this._scrollSubscription) {
            return;
        }
        const stream = this._scrollDispatcher.scrolled(0).pipe(filter(scrollable => {
            return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
        }));
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(() => {
                const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
                    this._detach();
                }
                else {
                    this._overlayRef.updatePosition();
                }
            });
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    }
    /** Disables the closing the attached overlay on scroll. */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
    detach() {
        this.disable();
        this._overlayRef = null;
    }
    /** Detaches the overlay ref and disables the scroll strategy. */
    _detach = () => {
        this.disable();
        if (this._overlayRef.hasAttached()) {
            this._ngZone.run(() => this._overlayRef.detach());
        }
    };
};
function createNoopScrollStrategy() {
    return new NoopScrollStrategy();
}
var NoopScrollStrategy = class {
    /** Does nothing, as this scroll strategy is a no-op. */
    enable() { }
    /** Does nothing, as this scroll strategy is a no-op. */
    disable() { }
    /** Does nothing, as this scroll strategy is a no-op. */
    attach() { }
};
function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some(containerBounds => {
        const outsideAbove = element.bottom < containerBounds.top;
        const outsideBelow = element.top > containerBounds.bottom;
        const outsideLeft = element.right < containerBounds.left;
        const outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    });
}
function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some(scrollContainerRect => {
        const clippedAbove = element.top < scrollContainerRect.top;
        const clippedBelow = element.bottom > scrollContainerRect.bottom;
        const clippedLeft = element.left < scrollContainerRect.left;
        const clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    });
}
function createRepositionScrollStrategy(injector, config) {
    return new RepositionScrollStrategy(injector.get(ScrollDispatcher), injector.get(ViewportRuler), injector.get(NgZone), config);
}
var RepositionScrollStrategy = class {
    _scrollDispatcher;
    _viewportRuler;
    _ngZone;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
    }
    /** Attaches this scroll strategy to an overlay. */
    attach(overlayRef) {
        if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    }
    /** Enables repositioning of the attached overlay on scroll. */
    enable() {
        if (!this._scrollSubscription) {
            const throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
                this._overlayRef.updatePosition();
                if (this._config && this._config.autoClose) {
                    const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
                    const { width, height } = this._viewportRuler.getViewportSize();
                    const parentRects = [{
                            width,
                            height,
                            bottom: height,
                            right: width,
                            top: 0,
                            left: 0
                        }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        this.disable();
                        this._ngZone.run(() => this._overlayRef.detach());
                    }
                }
            });
        }
    }
    /** Disables repositioning of the attached overlay on scroll. */
    disable() {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    }
    detach() {
        this.disable();
        this._overlayRef = null;
    }
};
var ScrollStrategyOptions = class _ScrollStrategyOptions {
    _injector = inject(Injector);
    constructor() { }
    /** Do nothing on scroll. */
    noop = () => new NoopScrollStrategy();
    /**
     * Close the overlay as soon as the user scrolls.
     * @param config Configuration to be used inside the scroll strategy.
     */
    close = config => createCloseScrollStrategy(this._injector, config);
    /** Block scrolling. */
    block = () => createBlockScrollStrategy(this._injector);
    /**
     * Update the overlay's position on scroll.
     * @param config Configuration to be used inside the scroll strategy.
     * Allows debouncing the reposition calls.
     */
    reposition = config => createRepositionScrollStrategy(this._injector, config);
    static ɵfac = function ScrollStrategyOptions_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ScrollStrategyOptions)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _ScrollStrategyOptions,
        factory: _ScrollStrategyOptions.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollStrategyOptions, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var OverlayConfig = class {
    /** Strategy with which to position the overlay. */
    positionStrategy;
    /** Strategy to be used when handling scroll events while the overlay is open. */
    scrollStrategy = new NoopScrollStrategy();
    /** Custom class to add to the overlay pane. */
    panelClass = "";
    /** Whether the overlay has a backdrop. */
    hasBackdrop = false;
    /** Custom class to add to the backdrop */
    backdropClass = "cdk-overlay-dark-backdrop";
    /** Whether to disable any built-in animations. */
    disableAnimations;
    /** The width of the overlay panel. If a number is provided, pixel units are assumed. */
    width;
    /** The height of the overlay panel. If a number is provided, pixel units are assumed. */
    height;
    /** The min-width of the overlay panel. If a number is provided, pixel units are assumed. */
    minWidth;
    /** The min-height of the overlay panel. If a number is provided, pixel units are assumed. */
    minHeight;
    /** The max-width of the overlay panel. If a number is provided, pixel units are assumed. */
    maxWidth;
    /** The max-height of the overlay panel. If a number is provided, pixel units are assumed. */
    maxHeight;
    /**
     * Direction of the text in the overlay panel. If a `Directionality` instance
     * is passed in, the overlay will handle changes to its value automatically.
     */
    direction;
    /**
     * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
     * Note that this usually doesn't include clicking on links (unless the user is using
     * the `HashLocationStrategy`).
     */
    disposeOnNavigation = false;
    constructor(config) {
        if (config) {
            const configKeys = Object.keys(config);
            for (const key of configKeys) {
                if (config[key] !== void 0) {
                    this[key] = config[key];
                }
            }
        }
    }
};
var ConnectionPositionPair = class {
    offsetX;
    offsetY;
    panelClass;
    /** X-axis attachment point for connected overlay origin. Can be 'start', 'end', or 'center'. */
    originX;
    /** Y-axis attachment point for connected overlay origin. Can be 'top', 'bottom', or 'center'. */
    originY;
    /** X-axis attachment point for connected overlay. Can be 'start', 'end', or 'center'. */
    overlayX;
    /** Y-axis attachment point for connected overlay. Can be 'top', 'bottom', or 'center'. */
    overlayY;
    constructor(origin, overlay, offsetX, offsetY, panelClass) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
};
var ScrollingVisibility = class {
    isOriginClipped;
    isOriginOutsideView;
    isOverlayClipped;
    isOverlayOutsideView;
};
var ConnectedOverlayPositionChange = class {
    connectionPair;
    scrollableViewProperties;
    constructor(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
};
function validateVerticalPosition(property, value) {
    if (value !== "top" && value !== "bottom" && value !== "center") {
        throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "top", "bottom" or "center".`);
    }
}
function validateHorizontalPosition(property, value) {
    if (value !== "start" && value !== "end" && value !== "center") {
        throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "start", "end" or "center".`);
    }
}
var BaseOverlayDispatcher = class _BaseOverlayDispatcher {
    /** Currently attached overlays in the order they were attached. */
    _attachedOverlays = [];
    _document = inject(DOCUMENT);
    _isAttached;
    constructor() { }
    ngOnDestroy() {
        this.detach();
    }
    /** Add a new overlay to the list of attached overlay refs. */
    add(overlayRef) {
        this.remove(overlayRef);
        this._attachedOverlays.push(overlayRef);
    }
    /** Remove an overlay from the list of attached overlay refs. */
    remove(overlayRef) {
        const index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
            this._attachedOverlays.splice(index, 1);
        }
        if (this._attachedOverlays.length === 0) {
            this.detach();
        }
    }
    static ɵfac = function BaseOverlayDispatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BaseOverlayDispatcher)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _BaseOverlayDispatcher,
        factory: _BaseOverlayDispatcher.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseOverlayDispatcher, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var OverlayKeyboardDispatcher = class _OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
    _ngZone = inject(NgZone);
    _renderer = inject(RendererFactory2).createRenderer(null, null);
    _cleanupKeydown;
    /** Add a new overlay to the list of attached overlay refs. */
    add(overlayRef) {
        super.add(overlayRef);
        if (!this._isAttached) {
            this._ngZone.runOutsideAngular(() => {
                this._cleanupKeydown = this._renderer.listen("body", "keydown", this._keydownListener);
            });
            this._isAttached = true;
        }
    }
    /** Detaches the global keyboard event listener. */
    detach() {
        if (this._isAttached) {
            this._cleanupKeydown?.();
            this._isAttached = false;
        }
    }
    /** Keyboard event listener that will be attached to the body. */
    _keydownListener = event => {
        const overlays = this._attachedOverlays;
        for (let i = overlays.length - 1; i > -1; i--) {
            if (overlays[i]._keydownEvents.observers.length > 0) {
                this._ngZone.run(() => overlays[i]._keydownEvents.next(event));
                break;
            }
        }
    };
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵOverlayKeyboardDispatcher_BaseFactory;
        return function OverlayKeyboardDispatcher_Factory(__ngFactoryType__) {
            return (ɵOverlayKeyboardDispatcher_BaseFactory || (ɵOverlayKeyboardDispatcher_BaseFactory = i0.ɵɵgetInheritedFactory(_OverlayKeyboardDispatcher)))(__ngFactoryType__ || _OverlayKeyboardDispatcher);
        };
    })();
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _OverlayKeyboardDispatcher,
        factory: _OverlayKeyboardDispatcher.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayKeyboardDispatcher, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var OverlayOutsideClickDispatcher = class _OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
    _platform = inject(Platform);
    _ngZone = inject(NgZone);
    _renderer = inject(RendererFactory2).createRenderer(null, null);
    _cursorOriginalValue;
    _cursorStyleIsSet = false;
    _pointerDownEventTarget;
    _cleanups;
    /** Add a new overlay to the list of attached overlay refs. */
    add(overlayRef) {
        super.add(overlayRef);
        if (!this._isAttached) {
            const body = this._document.body;
            const eventOptions = {
                capture: true
            };
            const renderer = this._renderer;
            this._cleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(body, "pointerdown", this._pointerDownListener, eventOptions), renderer.listen(body, "click", this._clickListener, eventOptions), renderer.listen(body, "auxclick", this._clickListener, eventOptions), renderer.listen(body, "contextmenu", this._clickListener, eventOptions)]);
            if (this._platform.IOS && !this._cursorStyleIsSet) {
                this._cursorOriginalValue = body.style.cursor;
                body.style.cursor = "pointer";
                this._cursorStyleIsSet = true;
            }
            this._isAttached = true;
        }
    }
    /** Detaches the global keyboard event listener. */
    detach() {
        if (this._isAttached) {
            this._cleanups?.forEach(cleanup => cleanup());
            this._cleanups = void 0;
            if (this._platform.IOS && this._cursorStyleIsSet) {
                this._document.body.style.cursor = this._cursorOriginalValue;
                this._cursorStyleIsSet = false;
            }
            this._isAttached = false;
        }
    }
    /** Store pointerdown event target to track origin of click. */
    _pointerDownListener = event => {
        this._pointerDownEventTarget = _getEventTarget(event);
    };
    /** Click event listener that will be attached to the body propagate phase. */
    _clickListener = event => {
        const target = _getEventTarget(event);
        const origin = event.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
        this._pointerDownEventTarget = null;
        const overlays = this._attachedOverlays.slice();
        for (let i = overlays.length - 1; i > -1; i--) {
            const overlayRef = overlays[i];
            if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
                continue;
            }
            if (containsPierceShadowDom(overlayRef.overlayElement, target) || containsPierceShadowDom(overlayRef.overlayElement, origin)) {
                break;
            }
            const outsidePointerEvents = overlayRef._outsidePointerEvents;
            if (this._ngZone) {
                this._ngZone.run(() => outsidePointerEvents.next(event));
            }
            else {
                outsidePointerEvents.next(event);
            }
        }
    };
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵOverlayOutsideClickDispatcher_BaseFactory;
        return function OverlayOutsideClickDispatcher_Factory(__ngFactoryType__) {
            return (ɵOverlayOutsideClickDispatcher_BaseFactory || (ɵOverlayOutsideClickDispatcher_BaseFactory = i0.ɵɵgetInheritedFactory(_OverlayOutsideClickDispatcher)))(__ngFactoryType__ || _OverlayOutsideClickDispatcher);
        };
    })();
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _OverlayOutsideClickDispatcher,
        factory: _OverlayOutsideClickDispatcher.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayOutsideClickDispatcher, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
function containsPierceShadowDom(parent, child) {
    const supportsShadowRoot = typeof ShadowRoot !== "undefined" && ShadowRoot;
    let current = child;
    while (current) {
        if (current === parent) {
            return true;
        }
        current = supportsShadowRoot && current instanceof ShadowRoot ? current.host : current.parentNode;
    }
    return false;
}
var _CdkOverlayStyleLoader = class __CdkOverlayStyleLoader {
    static ɵfac = function _CdkOverlayStyleLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || __CdkOverlayStyleLoader)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: __CdkOverlayStyleLoader,
        selectors: [["ng-component"]],
        hostAttrs: ["cdk-overlay-style-loader", ""],
        decls: 0,
        vars: 0,
        template: function _CdkOverlayStyleLoader_Template(rf, ctx) { },
        styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(_CdkOverlayStyleLoader, [{
            type: Component,
            args: [{
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        "cdk-overlay-style-loader": ""
                    },
                    styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n"]
                }]
        }], null, null);
})();
var OverlayContainer = class _OverlayContainer {
    _platform = inject(Platform);
    _containerElement;
    _document = inject(DOCUMENT);
    _styleLoader = inject(_CdkPrivateStyleLoader);
    constructor() { }
    ngOnDestroy() {
        this._containerElement?.remove();
    }
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    getContainerElement() {
        this._loadStyles();
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    }
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    _createContainer() {
        const containerClass = "cdk-overlay-container";
        if (this._platform.isBrowser || _isTestEnvironment()) {
            const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], .${containerClass}[platform="test"]`);
            for (let i = 0; i < oppositePlatformContainers.length; i++) {
                oppositePlatformContainers[i].remove();
            }
        }
        const container = this._document.createElement("div");
        container.classList.add(containerClass);
        if (_isTestEnvironment()) {
            container.setAttribute("platform", "test");
        }
        else if (!this._platform.isBrowser) {
            container.setAttribute("platform", "server");
        }
        this._document.body.appendChild(container);
        this._containerElement = container;
    }
    /** Loads the structural styles necessary for the overlay to work. */
    _loadStyles() {
        this._styleLoader.load(_CdkOverlayStyleLoader);
    }
    static ɵfac = function OverlayContainer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _OverlayContainer)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _OverlayContainer,
        factory: _OverlayContainer.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayContainer, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var BackdropRef = class {
    _renderer;
    _ngZone;
    element;
    _cleanupClick;
    _cleanupTransitionEnd;
    _fallbackTimeout;
    constructor(document, _renderer, _ngZone, onClick) {
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this.element = document.createElement("div");
        this.element.classList.add("cdk-overlay-backdrop");
        this._cleanupClick = _renderer.listen(this.element, "click", onClick);
    }
    detach() {
        this._ngZone.runOutsideAngular(() => {
            const element = this.element;
            clearTimeout(this._fallbackTimeout);
            this._cleanupTransitionEnd?.();
            this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this.dispose);
            this._fallbackTimeout = setTimeout(this.dispose, 500);
            element.style.pointerEvents = "none";
            element.classList.remove("cdk-overlay-backdrop-showing");
        });
    }
    dispose = () => {
        clearTimeout(this._fallbackTimeout);
        this._cleanupClick?.();
        this._cleanupTransitionEnd?.();
        this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0;
        this.element.remove();
    };
};
var OverlayRef = class {
    _portalOutlet;
    _host;
    _pane;
    _config;
    _ngZone;
    _keyboardDispatcher;
    _document;
    _location;
    _outsideClickDispatcher;
    _animationsDisabled;
    _injector;
    _renderer;
    _backdropClick = new Subject();
    _attachments = new Subject();
    _detachments = new Subject();
    _positionStrategy;
    _scrollStrategy;
    _locationChanges = Subscription.EMPTY;
    _backdropRef = null;
    _detachContentMutationObserver;
    _detachContentAfterRenderRef;
    /**
     * Reference to the parent of the `_host` at the time it was detached. Used to restore
     * the `_host` to its original position in the DOM when it gets re-attached.
     */
    _previousHostParent;
    /** Stream of keydown events dispatched to this overlay. */
    _keydownEvents = new Subject();
    /** Stream of mouse outside events dispatched to this overlay. */
    _outsidePointerEvents = new Subject();
    /** Reference to the currently-running `afterNextRender` call. */
    _afterNextRenderRef;
    constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled = false, _injector, _renderer) {
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._outsideClickDispatcher = _outsideClickDispatcher;
        this._animationsDisabled = _animationsDisabled;
        this._injector = _injector;
        this._renderer = _renderer;
        if (_config.scrollStrategy) {
            this._scrollStrategy = _config.scrollStrategy;
            this._scrollStrategy.attach(this);
        }
        this._positionStrategy = _config.positionStrategy;
    }
    /** The overlay's HTML element */
    get overlayElement() {
        return this._pane;
    }
    /** The overlay's backdrop HTML element. */
    get backdropElement() {
        return this._backdropRef?.element || null;
    }
    /**
     * Wrapper around the panel element. Can be used for advanced
     * positioning where a wrapper with specific styling is
     * required around the overlay pane.
     */
    get hostElement() {
        return this._host;
    }
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    attach(portal) {
        if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
        }
        const attachResult = this._portalOutlet.attach(portal);
        if (this._positionStrategy) {
            this._positionStrategy.attach(this);
        }
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._scrollStrategy) {
            this._scrollStrategy.enable();
        }
        this._afterNextRenderRef?.destroy();
        this._afterNextRenderRef = afterNextRender(() => {
            if (this.hasAttached()) {
                this.updatePosition();
            }
        }, {
            injector: this._injector
        });
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        this._attachments.next();
        this._completeDetachContent();
        this._keyboardDispatcher.add(this);
        if (this._config.disposeOnNavigation) {
            this._locationChanges = this._location.subscribe(() => this.dispose());
        }
        this._outsideClickDispatcher.add(this);
        if (typeof attachResult?.onDestroy === "function") {
            attachResult.onDestroy(() => {
                if (this.hasAttached()) {
                    this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
                }
            });
        }
        return attachResult;
    }
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    detach() {
        if (!this.hasAttached()) {
            return;
        }
        this.detachBackdrop();
        this._togglePointerEvents(false);
        if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
        }
        if (this._scrollStrategy) {
            this._scrollStrategy.disable();
        }
        const detachmentResult = this._portalOutlet.detach();
        this._detachments.next();
        this._completeDetachContent();
        this._keyboardDispatcher.remove(this);
        this._detachContentWhenEmpty();
        this._locationChanges.unsubscribe();
        this._outsideClickDispatcher.remove(this);
        return detachmentResult;
    }
    /** Cleans up the overlay from the DOM. */
    dispose() {
        const isAttached = this.hasAttached();
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._disposeScrollStrategy();
        this._backdropRef?.dispose();
        this._locationChanges.unsubscribe();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        this._outsidePointerEvents.complete();
        this._outsideClickDispatcher.remove(this);
        this._host?.remove();
        this._afterNextRenderRef?.destroy();
        this._previousHostParent = this._pane = this._host = this._backdropRef = null;
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
        this._completeDetachContent();
    }
    /** Whether the overlay has attached content. */
    hasAttached() {
        return this._portalOutlet.hasAttached();
    }
    /** Gets an observable that emits when the backdrop has been clicked. */
    backdropClick() {
        return this._backdropClick;
    }
    /** Gets an observable that emits when the overlay has been attached. */
    attachments() {
        return this._attachments;
    }
    /** Gets an observable that emits when the overlay has been detached. */
    detachments() {
        return this._detachments;
    }
    /** Gets an observable of keydown events targeted to this overlay. */
    keydownEvents() {
        return this._keydownEvents;
    }
    /** Gets an observable of pointer events targeted outside this overlay. */
    outsidePointerEvents() {
        return this._outsidePointerEvents;
    }
    /** Gets the current overlay configuration, which is immutable. */
    getConfig() {
        return this._config;
    }
    /** Updates the position of the overlay based on the position strategy. */
    updatePosition() {
        if (this._positionStrategy) {
            this._positionStrategy.apply();
        }
    }
    /** Switches to a new position strategy and updates the overlay position. */
    updatePositionStrategy(strategy) {
        if (strategy === this._positionStrategy) {
            return;
        }
        if (this._positionStrategy) {
            this._positionStrategy.dispose();
        }
        this._positionStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
        }
    }
    /** Update the size properties of the overlay. */
    updateSize(sizeConfig) {
        this._config = __spreadValues(__spreadValues({}, this._config), sizeConfig);
        this._updateElementSize();
    }
    /** Sets the LTR/RTL direction for the overlay. */
    setDirection(dir) {
        this._config = __spreadProps(__spreadValues({}, this._config), {
            direction: dir
        });
        this._updateElementDirection();
    }
    /** Add a CSS class or an array of classes to the overlay pane. */
    addPanelClass(classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
        }
    }
    /** Remove a CSS class or an array of classes from the overlay pane. */
    removePanelClass(classes) {
        if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
        }
    }
    /**
     * Returns the layout direction of the overlay panel.
     */
    getDirection() {
        const direction = this._config.direction;
        if (!direction) {
            return "ltr";
        }
        return typeof direction === "string" ? direction : direction.value;
    }
    /** Switches to a new scroll strategy. */
    updateScrollStrategy(strategy) {
        if (strategy === this._scrollStrategy) {
            return;
        }
        this._disposeScrollStrategy();
        this._scrollStrategy = strategy;
        if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
        }
    }
    /** Updates the text direction of the overlay panel. */
    _updateElementDirection() {
        this._host.setAttribute("dir", this.getDirection());
    }
    /** Updates the size of the overlay element based on the overlay config. */
    _updateElementSize() {
        if (!this._pane) {
            return;
        }
        const style = this._pane.style;
        style.width = coerceCssPixelValue(this._config.width);
        style.height = coerceCssPixelValue(this._config.height);
        style.minWidth = coerceCssPixelValue(this._config.minWidth);
        style.minHeight = coerceCssPixelValue(this._config.minHeight);
        style.maxWidth = coerceCssPixelValue(this._config.maxWidth);
        style.maxHeight = coerceCssPixelValue(this._config.maxHeight);
    }
    /** Toggles the pointer events for the overlay pane element. */
    _togglePointerEvents(enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? "" : "none";
    }
    /** Attaches a backdrop for this overlay. */
    _attachBackdrop() {
        const showingClass = "cdk-overlay-backdrop-showing";
        this._backdropRef?.dispose();
        this._backdropRef = new BackdropRef(this._document, this._renderer, this._ngZone, event => {
            this._backdropClick.next(event);
        });
        if (this._animationsDisabled) {
            this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation");
        }
        if (this._config.backdropClass) {
            this._toggleClasses(this._backdropRef.element, this._config.backdropClass, true);
        }
        this._host.parentElement.insertBefore(this._backdropRef.element, this._host);
        if (!this._animationsDisabled && typeof requestAnimationFrame !== "undefined") {
            this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => this._backdropRef?.element.classList.add(showingClass));
            });
        }
        else {
            this._backdropRef.element.classList.add(showingClass);
        }
    }
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     */
    _updateStackingOrder() {
        if (this._host.nextSibling) {
            this._host.parentNode.appendChild(this._host);
        }
    }
    /** Detaches the backdrop (if any) associated with the overlay. */
    detachBackdrop() {
        if (this._animationsDisabled) {
            this._backdropRef?.dispose();
            this._backdropRef = null;
        }
        else {
            this._backdropRef?.detach();
        }
    }
    /** Toggles a single CSS class or an array of classes on an element. */
    _toggleClasses(element, cssClasses, isAdd) {
        const classes = coerceArray(cssClasses || []).filter(c => !!c);
        if (classes.length) {
            isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
        }
    }
    /** Detaches the overlay once the content finishes animating and is removed from the DOM. */
    _detachContentWhenEmpty() {
        let rethrow = false;
        try {
            this._detachContentAfterRenderRef = afterNextRender(() => {
                rethrow = true;
                this._detachContent();
            }, {
                injector: this._injector
            });
        }
        catch (e) {
            if (rethrow) {
                throw e;
            }
            this._detachContent();
        }
        if (globalThis.MutationObserver && this._pane) {
            this._detachContentMutationObserver ||= new globalThis.MutationObserver(() => {
                this._detachContent();
            });
            this._detachContentMutationObserver.observe(this._pane, {
                childList: true
            });
        }
    }
    _detachContent() {
        if (!this._pane || !this._host || this._pane.children.length === 0) {
            if (this._pane && this._config.panelClass) {
                this._toggleClasses(this._pane, this._config.panelClass, false);
            }
            if (this._host && this._host.parentElement) {
                this._previousHostParent = this._host.parentElement;
                this._host.remove();
            }
            this._completeDetachContent();
        }
    }
    _completeDetachContent() {
        this._detachContentAfterRenderRef?.destroy();
        this._detachContentAfterRenderRef = void 0;
        this._detachContentMutationObserver?.disconnect();
    }
    /** Disposes of a scroll strategy. */
    _disposeScrollStrategy() {
        const scrollStrategy = this._scrollStrategy;
        scrollStrategy?.disable();
        scrollStrategy?.detach?.();
    }
};
var boundingBoxClass = "cdk-overlay-connected-position-bounding-box";
var cssUnitPattern = /([A-Za-z%]+)$/;
function createFlexibleConnectedPositionStrategy(injector, origin) {
    return new FlexibleConnectedPositionStrategy(origin, injector.get(ViewportRuler), injector.get(DOCUMENT), injector.get(Platform), injector.get(OverlayContainer));
}
var FlexibleConnectedPositionStrategy = class {
    _viewportRuler;
    _document;
    _platform;
    _overlayContainer;
    /** The overlay to which this strategy is attached. */
    _overlayRef;
    /** Whether we're performing the very first positioning of the overlay. */
    _isInitialRender;
    /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */
    _lastBoundingBoxSize = {
        width: 0,
        height: 0
    };
    /** Whether the overlay was pushed in a previous positioning. */
    _isPushed = false;
    /** Whether the overlay can be pushed on-screen on the initial open. */
    _canPush = true;
    /** Whether the overlay can grow via flexible width/height after the initial open. */
    _growAfterOpen = false;
    /** Whether the overlay's width and height can be constrained to fit within the viewport. */
    _hasFlexibleDimensions = true;
    /** Whether the overlay position is locked. */
    _positionLocked = false;
    /** Cached origin dimensions */
    _originRect;
    /** Cached overlay dimensions */
    _overlayRect;
    /** Cached viewport dimensions */
    _viewportRect;
    /** Cached container dimensions */
    _containerRect;
    /** Amount of space that must be maintained between the overlay and the edge of the viewport. */
    _viewportMargin = 0;
    /** The Scrollable containers used to check scrollable view properties on position change. */
    _scrollables = [];
    /** Ordered list of preferred positions, from most to least desirable. */
    _preferredPositions = [];
    /** The origin element against which the overlay will be positioned. */
    _origin;
    /** The overlay pane element. */
    _pane;
    /** Whether the strategy has been disposed of already. */
    _isDisposed;
    /**
     * Parent element for the overlay panel used to constrain the overlay panel's size to fit
     * within the viewport.
     */
    _boundingBox;
    /** The last position to have been calculated as the best fit position. */
    _lastPosition;
    /** The last calculated scroll visibility. Only tracked  */
    _lastScrollVisibility;
    /** Subject that emits whenever the position changes. */
    _positionChanges = new Subject();
    /** Subscription to viewport size changes. */
    _resizeSubscription = Subscription.EMPTY;
    /** Default offset for the overlay along the x axis. */
    _offsetX = 0;
    /** Default offset for the overlay along the y axis. */
    _offsetY = 0;
    /** Selector to be used when finding the elements on which to set the transform origin. */
    _transformOriginSelector;
    /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */
    _appliedPanelClasses = [];
    /** Amount by which the overlay was pushed in each axis during the last time it was positioned. */
    _previousPushAmount;
    /** Observable sequence of position changes. */
    positionChanges = this._positionChanges;
    /** Ordered list of preferred positions, from most to least desirable. */
    get positions() {
        return this._preferredPositions;
    }
    constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        this.setOrigin(connectedTo);
    }
    /** Attaches this position strategy to an overlay. */
    attach(overlayRef) {
        if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw Error("This position strategy is already attached to an overlay");
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add(boundingBoxClass);
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._isDisposed = false;
        this._isInitialRender = true;
        this._lastPosition = null;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
            this._isInitialRender = true;
            this.apply();
        });
    }
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satisfies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * @docs-private
     */
    apply() {
        if (this._isDisposed || !this._platform.isBrowser) {
            return;
        }
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
        }
        this._clearPanelClasses();
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._getOriginRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
        const originRect = this._originRect;
        const overlayRect = this._overlayRect;
        const viewportRect = this._viewportRect;
        const containerRect = this._containerRect;
        const flexibleFits = [];
        let fallback;
        for (let pos of this._preferredPositions) {
            let originPoint = this._getOriginPoint(originRect, containerRect, pos);
            let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
            let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
            if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;
                this._applyPosition(pos, originPoint);
                return;
            }
            if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
            }
            if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = {
                    overlayFit,
                    overlayPoint,
                    originPoint,
                    position: pos,
                    overlayRect
                };
            }
        }
        if (flexibleFits.length) {
            let bestFit = null;
            let bestScore = -1;
            for (const fit of flexibleFits) {
                const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
                if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit;
                }
            }
            this._isPushed = false;
            this._applyPosition(bestFit.position, bestFit.origin);
            return;
        }
        if (this._canPush) {
            this._isPushed = true;
            this._applyPosition(fallback.position, fallback.originPoint);
            return;
        }
        this._applyPosition(fallback.position, fallback.originPoint);
    }
    detach() {
        this._clearPanelClasses();
        this._lastPosition = null;
        this._previousPushAmount = null;
        this._resizeSubscription.unsubscribe();
    }
    /** Cleanup after the element gets destroyed. */
    dispose() {
        if (this._isDisposed) {
            return;
        }
        if (this._boundingBox) {
            extendStyles(this._boundingBox.style, {
                top: "",
                left: "",
                right: "",
                bottom: "",
                height: "",
                width: "",
                alignItems: "",
                justifyContent: ""
            });
        }
        if (this._pane) {
            this._resetOverlayElementStyles();
        }
        if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
        }
        this.detach();
        this._positionChanges.complete();
        this._overlayRef = this._boundingBox = null;
        this._isDisposed = true;
    }
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    reapplyLastPosition() {
        if (this._isDisposed || !this._platform.isBrowser) {
            return;
        }
        const lastPosition = this._lastPosition;
        if (lastPosition) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
            const originPoint = this._getOriginPoint(this._originRect, this._containerRect, lastPosition);
            this._applyPosition(lastPosition, originPoint);
        }
        else {
            this.apply();
        }
    }
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    withScrollableContainers(scrollables) {
        this._scrollables = scrollables;
        return this;
    }
    /**
     * Adds new preferred positions.
     * @param positions List of positions options for this overlay.
     */
    withPositions(positions) {
        this._preferredPositions = positions;
        if (positions.indexOf(this._lastPosition) === -1) {
            this._lastPosition = null;
        }
        this._validatePositions();
        return this;
    }
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param margin Required margin between the overlay and the viewport edge in pixels.
     */
    withViewportMargin(margin) {
        this._viewportMargin = margin;
        return this;
    }
    /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
    withFlexibleDimensions(flexibleDimensions = true) {
        this._hasFlexibleDimensions = flexibleDimensions;
        return this;
    }
    /** Sets whether the overlay can grow after the initial open via flexible width/height. */
    withGrowAfterOpen(growAfterOpen = true) {
        this._growAfterOpen = growAfterOpen;
        return this;
    }
    /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
    withPush(canPush = true) {
        this._canPush = canPush;
        return this;
    }
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    withLockedPosition(isLocked = true) {
        this._positionLocked = isLocked;
        return this;
    }
    /**
     * Sets the origin, relative to which to position the overlay.
     * Using an element origin is useful for building components that need to be positioned
     * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
     * used for cases like contextual menus which open relative to the user's pointer.
     * @param origin Reference to the new origin.
     */
    setOrigin(origin) {
        this._origin = origin;
        return this;
    }
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param offset New offset in the X axis.
     */
    withDefaultOffsetX(offset) {
        this._offsetX = offset;
        return this;
    }
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param offset New offset in the Y axis.
     */
    withDefaultOffsetY(offset) {
        this._offsetY = offset;
        return this;
    }
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     */
    withTransformOriginOn(selector) {
        this._transformOriginSelector = selector;
        return this;
    }
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     */
    _getOriginPoint(originRect, containerRect, pos) {
        let x;
        if (pos.originX == "center") {
            x = originRect.left + originRect.width / 2;
        }
        else {
            const startX = this._isRtl() ? originRect.right : originRect.left;
            const endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == "start" ? startX : endX;
        }
        if (containerRect.left < 0) {
            x -= containerRect.left;
        }
        let y;
        if (pos.originY == "center") {
            y = originRect.top + originRect.height / 2;
        }
        else {
            y = pos.originY == "top" ? originRect.top : originRect.bottom;
        }
        if (containerRect.top < 0) {
            y -= containerRect.top;
        }
        return {
            x,
            y
        };
    }
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     */
    _getOverlayPoint(originPoint, overlayRect, pos) {
        let overlayStartX;
        if (pos.overlayX == "center") {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === "start") {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        let overlayStartY;
        if (pos.overlayY == "center") {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == "top" ? 0 : -overlayRect.height;
        }
        return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY
        };
    }
    /** Gets how well an overlay at the given point will fit within the viewport. */
    _getOverlayFit(point, rawOverlayRect, viewport, position) {
        const overlay = getRoundedBoundingClientRect(rawOverlayRect);
        let { x, y } = point;
        let offsetX = this._getOffset(position, "x");
        let offsetY = this._getOffset(position, "y");
        if (offsetX) {
            x += offsetX;
        }
        if (offsetY) {
            y += offsetY;
        }
        let leftOverflow = 0 - x;
        let rightOverflow = x + overlay.width - viewport.width;
        let topOverflow = 0 - y;
        let bottomOverflow = y + overlay.height - viewport.height;
        let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        let visibleArea = visibleWidth * visibleHeight;
        return {
            visibleArea,
            isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width
        };
    }
    /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param fit How well the overlay fits in the viewport at some position.
     * @param point The (x, y) coordinates of the overlay at some position.
     * @param viewport The geometry of the viewport.
     */
    _canFitWithFlexibleDimensions(fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
            const availableHeight = viewport.bottom - point.y;
            const availableWidth = viewport.right - point.x;
            const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
            const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
            const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
            const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
            return verticalFit && horizontalFit;
        }
        return false;
    }
    /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occurring on the
     * right and bottom).
     *
     * @param start Starting point from which the overlay is pushed.
     * @param rawOverlayRect Dimensions of the overlay.
     * @param scrollPosition Current viewport scroll position.
     * @returns The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
        if (this._previousPushAmount && this._positionLocked) {
            return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
            };
        }
        const overlay = getRoundedBoundingClientRect(rawOverlayRect);
        const viewport = this._viewportRect;
        const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
        const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
        const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
        const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
        let pushX = 0;
        let pushY = 0;
        if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
        }
        else {
            pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
        }
        if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
        }
        else {
            pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
        }
        this._previousPushAmount = {
            x: pushX,
            y: pushY
        };
        return {
            x: start.x + pushX,
            y: start.y + pushY
        };
    }
    /**
     * Applies a computed position to the overlay and emits a position change.
     * @param position The position preference
     * @param originPoint The point on the origin element where the overlay is connected.
     */
    _applyPosition(position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
        }
        if (this._positionChanges.observers.length) {
            const scrollVisibility = this._getScrollVisibility();
            if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
                const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
                this._positionChanges.next(changeEvent);
            }
            this._lastScrollVisibility = scrollVisibility;
        }
        this._lastPosition = position;
        this._isInitialRender = false;
    }
    /** Sets the transform origin based on the configured selector and the passed-in position.  */
    _setTransformOrigin(position) {
        if (!this._transformOriginSelector) {
            return;
        }
        const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
        let xOrigin;
        let yOrigin = position.overlayY;
        if (position.overlayX === "center") {
            xOrigin = "center";
        }
        else if (this._isRtl()) {
            xOrigin = position.overlayX === "start" ? "right" : "left";
        }
        else {
            xOrigin = position.overlayX === "start" ? "left" : "right";
        }
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
        }
    }
    /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     */
    _calculateBoundingBoxRect(origin, position) {
        const viewport = this._viewportRect;
        const isRtl = this._isRtl();
        let height, top, bottom;
        if (position.overlayY === "top") {
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
        }
        else if (position.overlayY === "bottom") {
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
        }
        else {
            const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            const previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;
            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - previousHeight / 2;
            }
        }
        const isBoundedByRightViewportEdge = position.overlayX === "start" && !isRtl || position.overlayX === "end" && isRtl;
        const isBoundedByLeftViewportEdge = position.overlayX === "end" && !isRtl || position.overlayX === "start" && isRtl;
        let width, left, right;
        if (isBoundedByLeftViewportEdge) {
            right = viewport.width - origin.x + this._viewportMargin * 2;
            width = origin.x - this._viewportMargin;
        }
        else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
        }
        else {
            const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
            const previousWidth = this._lastBoundingBoxSize.width;
            width = smallestDistanceToViewportEdge * 2;
            left = origin.x - smallestDistanceToViewportEdge;
            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - previousWidth / 2;
            }
        }
        return {
            top,
            left,
            bottom,
            right,
            width,
            height
        };
    }
    /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stretches to the bounds of the viewport.
     *
     * @param origin The point on the origin element where the overlay is connected.
     * @param position The position preference
     */
    _setBoundingBoxStyles(origin, position) {
        const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        const styles = {};
        if (this._hasExactPosition()) {
            styles.top = styles.left = "0";
            styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = "";
            styles.width = styles.height = "100%";
        }
        else {
            const maxHeight = this._overlayRef.getConfig().maxHeight;
            const maxWidth = this._overlayRef.getConfig().maxWidth;
            styles.height = coerceCssPixelValue(boundingBoxRect.height);
            styles.top = coerceCssPixelValue(boundingBoxRect.top);
            styles.bottom = coerceCssPixelValue(boundingBoxRect.bottom);
            styles.width = coerceCssPixelValue(boundingBoxRect.width);
            styles.left = coerceCssPixelValue(boundingBoxRect.left);
            styles.right = coerceCssPixelValue(boundingBoxRect.right);
            if (position.overlayX === "center") {
                styles.alignItems = "center";
            }
            else {
                styles.alignItems = position.overlayX === "end" ? "flex-end" : "flex-start";
            }
            if (position.overlayY === "center") {
                styles.justifyContent = "center";
            }
            else {
                styles.justifyContent = position.overlayY === "bottom" ? "flex-end" : "flex-start";
            }
            if (maxHeight) {
                styles.maxHeight = coerceCssPixelValue(maxHeight);
            }
            if (maxWidth) {
                styles.maxWidth = coerceCssPixelValue(maxWidth);
            }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles(this._boundingBox.style, styles);
    }
    /** Resets the styles for the bounding box so that a new positioning can be computed. */
    _resetBoundingBoxStyles() {
        extendStyles(this._boundingBox.style, {
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: ""
        });
    }
    /** Resets the styles for the overlay pane so that a new positioning can be computed. */
    _resetOverlayElementStyles() {
        extendStyles(this._pane.style, {
            top: "",
            left: "",
            bottom: "",
            right: "",
            position: "",
            transform: ""
        });
    }
    /** Sets positioning styles to the overlay element. */
    _setOverlayElementStyles(originPoint, position) {
        const styles = {};
        const hasExactPosition = this._hasExactPosition();
        const hasFlexibleDimensions = this._hasFlexibleDimensions;
        const config = this._overlayRef.getConfig();
        if (hasExactPosition) {
            const scrollPosition = this._viewportRuler.getViewportScrollPosition();
            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
        }
        else {
            styles.position = "static";
        }
        let transformString = "";
        let offsetX = this._getOffset(position, "x");
        let offsetY = this._getOffset(position, "y");
        if (offsetX) {
            transformString += `translateX(${offsetX}px) `;
        }
        if (offsetY) {
            transformString += `translateY(${offsetY}px)`;
        }
        styles.transform = transformString.trim();
        if (config.maxHeight) {
            if (hasExactPosition) {
                styles.maxHeight = coerceCssPixelValue(config.maxHeight);
            }
            else if (hasFlexibleDimensions) {
                styles.maxHeight = "";
            }
        }
        if (config.maxWidth) {
            if (hasExactPosition) {
                styles.maxWidth = coerceCssPixelValue(config.maxWidth);
            }
            else if (hasFlexibleDimensions) {
                styles.maxWidth = "";
            }
        }
        extendStyles(this._pane.style, styles);
    }
    /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
    _getExactOverlayY(position, originPoint, scrollPosition) {
        let styles = {
            top: "",
            bottom: ""
        };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        if (position.overlayY === "bottom") {
            const documentHeight = this._document.documentElement.clientHeight;
            styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
        }
        else {
            styles.top = coerceCssPixelValue(overlayPoint.y);
        }
        return styles;
    }
    /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
    _getExactOverlayX(position, originPoint, scrollPosition) {
        let styles = {
            left: "",
            right: ""
        };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        let horizontalStyleProperty;
        if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === "end" ? "left" : "right";
        }
        else {
            horizontalStyleProperty = position.overlayX === "end" ? "right" : "left";
        }
        if (horizontalStyleProperty === "right") {
            const documentWidth = this._document.documentElement.clientWidth;
            styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
        }
        else {
            styles.left = coerceCssPixelValue(overlayPoint.x);
        }
        return styles;
    }
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     */
    _getScrollVisibility() {
        const originBounds = this._getOriginRect();
        const overlayBounds = this._pane.getBoundingClientRect();
        const scrollContainerBounds = this._scrollables.map(scrollable => {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });
        return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
        };
    }
    /** Subtracts the amount that an element is overflowing on an axis from its length. */
    _subtractOverflows(length, ...overflows) {
        return overflows.reduce((currentValue, currentOverflow) => {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    }
    /** Narrows the given viewport rect by the current _viewportMargin. */
    _getNarrowedViewportRect() {
        const width = this._document.documentElement.clientWidth;
        const height = this._document.documentElement.clientHeight;
        const scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - 2 * this._viewportMargin,
            height: height - 2 * this._viewportMargin
        };
    }
    /** Whether the we're dealing with an RTL context */
    _isRtl() {
        return this._overlayRef.getDirection() === "rtl";
    }
    /** Determines whether the overlay uses exact or flexible positioning. */
    _hasExactPosition() {
        return !this._hasFlexibleDimensions || this._isPushed;
    }
    /** Retrieves the offset of a position along the x or y axis. */
    _getOffset(position, axis) {
        if (axis === "x") {
            return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
    }
    /** Validates that the current position match the expected values. */
    _validatePositions() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            if (!this._preferredPositions.length) {
                throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
            }
            this._preferredPositions.forEach(pair => {
                validateHorizontalPosition("originX", pair.originX);
                validateVerticalPosition("originY", pair.originY);
                validateHorizontalPosition("overlayX", pair.overlayX);
                validateVerticalPosition("overlayY", pair.overlayY);
            });
        }
    }
    /** Adds a single CSS class or an array of classes on the overlay panel. */
    _addPanelClasses(cssClasses) {
        if (this._pane) {
            coerceArray(cssClasses).forEach(cssClass => {
                if (cssClass !== "" && this._appliedPanelClasses.indexOf(cssClass) === -1) {
                    this._appliedPanelClasses.push(cssClass);
                    this._pane.classList.add(cssClass);
                }
            });
        }
    }
    /** Clears the classes that the position strategy has applied from the overlay panel. */
    _clearPanelClasses() {
        if (this._pane) {
            this._appliedPanelClasses.forEach(cssClass => {
                this._pane.classList.remove(cssClass);
            });
            this._appliedPanelClasses = [];
        }
    }
    /** Returns the DOMRect of the current origin. */
    _getOriginRect() {
        const origin = this._origin;
        if (origin instanceof ElementRef) {
            return origin.nativeElement.getBoundingClientRect();
        }
        if (origin instanceof Element) {
            return origin.getBoundingClientRect();
        }
        const width = origin.width || 0;
        const height = origin.height || 0;
        return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height,
            width
        };
    }
};
function extendStyles(destination, source) {
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            destination[key] = source[key];
        }
    }
    return destination;
}
function getPixelValue(input) {
    if (typeof input !== "number" && input != null) {
        const [value, units] = input.split(cssUnitPattern);
        return !units || units === "px" ? parseFloat(value) : null;
    }
    return input || null;
}
function getRoundedBoundingClientRect(clientRect) {
    return {
        top: Math.floor(clientRect.top),
        right: Math.floor(clientRect.right),
        bottom: Math.floor(clientRect.bottom),
        left: Math.floor(clientRect.left),
        width: Math.floor(clientRect.width),
        height: Math.floor(clientRect.height)
    };
}
function compareScrollVisibility(a, b) {
    if (a === b) {
        return true;
    }
    return a.isOriginClipped === b.isOriginClipped && a.isOriginOutsideView === b.isOriginOutsideView && a.isOverlayClipped === b.isOverlayClipped && a.isOverlayOutsideView === b.isOverlayOutsideView;
}
var STANDARD_DROPDOWN_BELOW_POSITIONS = [{
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
    }, {
        originX: "start",
        originY: "top",
        overlayX: "start",
        overlayY: "bottom"
    }, {
        originX: "end",
        originY: "bottom",
        overlayX: "end",
        overlayY: "top"
    }, {
        originX: "end",
        originY: "top",
        overlayX: "end",
        overlayY: "bottom"
    }];
var STANDARD_DROPDOWN_ADJACENT_POSITIONS = [{
        originX: "end",
        originY: "top",
        overlayX: "start",
        overlayY: "top"
    }, {
        originX: "end",
        originY: "bottom",
        overlayX: "start",
        overlayY: "bottom"
    }, {
        originX: "start",
        originY: "top",
        overlayX: "end",
        overlayY: "top"
    }, {
        originX: "start",
        originY: "bottom",
        overlayX: "end",
        overlayY: "bottom"
    }];
var wrapperClass = "cdk-global-overlay-wrapper";
function createGlobalPositionStrategy(_injector) {
    return new GlobalPositionStrategy();
}
var GlobalPositionStrategy = class {
    /** The overlay to which this strategy is attached. */
    _overlayRef;
    _cssPosition = "static";
    _topOffset = "";
    _bottomOffset = "";
    _alignItems = "";
    _xPosition = "";
    _xOffset = "";
    _width = "";
    _height = "";
    _isDisposed = false;
    attach(overlayRef) {
        const config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({
                width: this._width
            });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({
                height: this._height
            });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
    }
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    top(value = "") {
        this._bottomOffset = "";
        this._topOffset = value;
        this._alignItems = "flex-start";
        return this;
    }
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    left(value = "") {
        this._xOffset = value;
        this._xPosition = "left";
        return this;
    }
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    bottom(value = "") {
        this._topOffset = "";
        this._bottomOffset = value;
        this._alignItems = "flex-end";
        return this;
    }
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    right(value = "") {
        this._xOffset = value;
        this._xPosition = "right";
        return this;
    }
    /**
     * Sets the overlay to the start of the viewport, depending on the overlay direction.
     * This will be to the left in LTR layouts and to the right in RTL.
     * @param offset Offset from the edge of the screen.
     */
    start(value = "") {
        this._xOffset = value;
        this._xPosition = "start";
        return this;
    }
    /**
     * Sets the overlay to the end of the viewport, depending on the overlay direction.
     * This will be to the right in LTR layouts and to the left in RTL.
     * @param offset Offset from the edge of the screen.
     */
    end(value = "") {
        this._xOffset = value;
        this._xPosition = "end";
        return this;
    }
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    width(value = "") {
        if (this._overlayRef) {
            this._overlayRef.updateSize({
                width: value
            });
        }
        else {
            this._width = value;
        }
        return this;
    }
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @breaking-change 8.0.0
     */
    height(value = "") {
        if (this._overlayRef) {
            this._overlayRef.updateSize({
                height: value
            });
        }
        else {
            this._height = value;
        }
        return this;
    }
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    centerHorizontally(offset = "") {
        this.left(offset);
        this._xPosition = "center";
        return this;
    }
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    centerVertically(offset = "") {
        this.top(offset);
        this._alignItems = "center";
        return this;
    }
    /**
     * Apply the position to the element.
     * @docs-private
     */
    apply() {
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parentStyles = this._overlayRef.hostElement.style;
        const config = this._overlayRef.getConfig();
        const { width, height, maxWidth, maxHeight } = config;
        const shouldBeFlushHorizontally = (width === "100%" || width === "100vw") && (!maxWidth || maxWidth === "100%" || maxWidth === "100vw");
        const shouldBeFlushVertically = (height === "100%" || height === "100vh") && (!maxHeight || maxHeight === "100%" || maxHeight === "100vh");
        const xPosition = this._xPosition;
        const xOffset = this._xOffset;
        const isRtl = this._overlayRef.getConfig().direction === "rtl";
        let marginLeft = "";
        let marginRight = "";
        let justifyContent = "";
        if (shouldBeFlushHorizontally) {
            justifyContent = "flex-start";
        }
        else if (xPosition === "center") {
            justifyContent = "center";
            if (isRtl) {
                marginRight = xOffset;
            }
            else {
                marginLeft = xOffset;
            }
        }
        else if (isRtl) {
            if (xPosition === "left" || xPosition === "end") {
                justifyContent = "flex-end";
                marginLeft = xOffset;
            }
            else if (xPosition === "right" || xPosition === "start") {
                justifyContent = "flex-start";
                marginRight = xOffset;
            }
        }
        else if (xPosition === "left" || xPosition === "start") {
            justifyContent = "flex-start";
            marginLeft = xOffset;
        }
        else if (xPosition === "right" || xPosition === "end") {
            justifyContent = "flex-end";
            marginRight = xOffset;
        }
        styles.position = this._cssPosition;
        styles.marginLeft = shouldBeFlushHorizontally ? "0" : marginLeft;
        styles.marginTop = shouldBeFlushVertically ? "0" : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = shouldBeFlushHorizontally ? "0" : marginRight;
        parentStyles.justifyContent = justifyContent;
        parentStyles.alignItems = shouldBeFlushVertically ? "flex-start" : this._alignItems;
    }
    /**
     * Cleans up the DOM changes from the position strategy.
     * @docs-private
     */
    dispose() {
        if (this._isDisposed || !this._overlayRef) {
            return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parent = this._overlayRef.hostElement;
        const parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = "";
        this._overlayRef = null;
        this._isDisposed = true;
    }
};
var OverlayPositionBuilder = class _OverlayPositionBuilder {
    _injector = inject(Injector);
    constructor() { }
    /**
     * Creates a global position strategy.
     */
    global() {
        return createGlobalPositionStrategy();
    }
    /**
     * Creates a flexible position strategy.
     * @param origin Origin relative to which to position the overlay.
     */
    flexibleConnectedTo(origin) {
        return createFlexibleConnectedPositionStrategy(this._injector, origin);
    }
    static ɵfac = function OverlayPositionBuilder_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _OverlayPositionBuilder)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _OverlayPositionBuilder,
        factory: _OverlayPositionBuilder.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayPositionBuilder, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
function createOverlayRef(injector, config) {
    injector.get(_CdkPrivateStyleLoader).load(_CdkOverlayStyleLoader);
    const overlayContainer = injector.get(OverlayContainer);
    const doc = injector.get(DOCUMENT);
    const idGenerator = injector.get(_IdGenerator);
    const appRef = injector.get(ApplicationRef);
    const directionality = injector.get(Directionality);
    const host = doc.createElement("div");
    const pane = doc.createElement("div");
    pane.id = idGenerator.getId("cdk-overlay-");
    pane.classList.add("cdk-overlay-pane");
    host.appendChild(pane);
    overlayContainer.getContainerElement().appendChild(host);
    const portalOutlet = new DomPortalOutlet(pane, appRef, injector);
    const overlayConfig = new OverlayConfig(config);
    const renderer = injector.get(Renderer2, null, {
        optional: true
    }) || injector.get(RendererFactory2).createRenderer(null, null);
    overlayConfig.direction = overlayConfig.direction || directionality.value;
    return new OverlayRef(portalOutlet, host, pane, overlayConfig, injector.get(NgZone), injector.get(OverlayKeyboardDispatcher), doc, injector.get(Location), injector.get(OverlayOutsideClickDispatcher), config?.disableAnimations ?? injector.get(ANIMATION_MODULE_TYPE, null, {
        optional: true
    }) === "NoopAnimations", injector.get(EnvironmentInjector), renderer);
}
var Overlay = class _Overlay {
    scrollStrategies = inject(ScrollStrategyOptions);
    _positionBuilder = inject(OverlayPositionBuilder);
    _injector = inject(Injector);
    constructor() { }
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    create(config) {
        return createOverlayRef(this._injector, config);
    }
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    position() {
        return this._positionBuilder;
    }
    static ɵfac = function Overlay_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Overlay)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _Overlay,
        factory: _Overlay.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Overlay, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var defaultPositionList = [{
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
    }, {
        originX: "start",
        originY: "top",
        overlayX: "start",
        overlayY: "bottom"
    }, {
        originX: "end",
        originY: "top",
        overlayX: "end",
        overlayY: "bottom"
    }, {
        originX: "end",
        originY: "bottom",
        overlayX: "end",
        overlayY: "top"
    }];
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken("cdk-connected-overlay-scroll-strategy", {
    providedIn: "root",
    factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector);
    }
});
var CdkOverlayOrigin = class _CdkOverlayOrigin {
    elementRef = inject(ElementRef);
    constructor() { }
    static ɵfac = function CdkOverlayOrigin_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkOverlayOrigin)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkOverlayOrigin,
        selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
        exportAs: ["cdkOverlayOrigin"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkOverlayOrigin, [{
            type: Directive,
            args: [{
                    selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]",
                    exportAs: "cdkOverlayOrigin"
                }]
        }], () => [], null);
})();
var CdkConnectedOverlay = class _CdkConnectedOverlay {
    _dir = inject(Directionality, {
        optional: true
    });
    _injector = inject(Injector);
    _overlayRef;
    _templatePortal;
    _backdropSubscription = Subscription.EMPTY;
    _attachSubscription = Subscription.EMPTY;
    _detachSubscription = Subscription.EMPTY;
    _positionSubscription = Subscription.EMPTY;
    _offsetX;
    _offsetY;
    _position;
    _scrollStrategyFactory = inject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY);
    _disposeOnNavigation = false;
    _ngZone = inject(NgZone);
    /** Origin for the connected overlay. */
    origin;
    /** Registered connected position pairs. */
    positions;
    /**
     * This input overrides the positions input if specified. It lets users pass
     * in arbitrary positioning strategies.
     */
    positionStrategy;
    /** The offset in pixels for the overlay connection point on the x-axis */
    get offsetX() {
        return this._offsetX;
    }
    set offsetX(offsetX) {
        this._offsetX = offsetX;
        if (this._position) {
            this._updatePositionStrategy(this._position);
        }
    }
    /** The offset in pixels for the overlay connection point on the y-axis */
    get offsetY() {
        return this._offsetY;
    }
    set offsetY(offsetY) {
        this._offsetY = offsetY;
        if (this._position) {
            this._updatePositionStrategy(this._position);
        }
    }
    /** The width of the overlay panel. */
    width;
    /** The height of the overlay panel. */
    height;
    /** The min width of the overlay panel. */
    minWidth;
    /** The min height of the overlay panel. */
    minHeight;
    /** The custom class to be set on the backdrop element. */
    backdropClass;
    /** The custom class to add to the overlay pane element. */
    panelClass;
    /** Margin between the overlay and the viewport edges. */
    viewportMargin = 0;
    /** Strategy to be used when handling scroll events while the overlay is open. */
    scrollStrategy;
    /** Whether the overlay is open. */
    open = false;
    /** Whether the overlay can be closed by user interaction. */
    disableClose = false;
    /** CSS selector which to set the transform origin. */
    transformOriginSelector;
    /** Whether or not the overlay should attach a backdrop. */
    hasBackdrop = false;
    /** Whether or not the overlay should be locked when scrolling. */
    lockPosition = false;
    /** Whether the overlay's width and height can be constrained to fit within the viewport. */
    flexibleDimensions = false;
    /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
    growAfterOpen = false;
    /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
    push = false;
    /** Whether the overlay should be disposed of when the user goes backwards/forwards in history. */
    get disposeOnNavigation() {
        return this._disposeOnNavigation;
    }
    set disposeOnNavigation(value) {
        this._disposeOnNavigation = value;
    }
    /** Event emitted when the backdrop is clicked. */
    backdropClick = new EventEmitter();
    /** Event emitted when the position has changed. */
    positionChange = new EventEmitter();
    /** Event emitted when the overlay has been attached. */
    attach = new EventEmitter();
    /** Event emitted when the overlay has been detached. */
    detach = new EventEmitter();
    /** Emits when there are keyboard events that are targeted at the overlay. */
    overlayKeydown = new EventEmitter();
    /** Emits when there are mouse outside click events that are targeted at the overlay. */
    overlayOutsideClick = new EventEmitter();
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    constructor() {
        const templateRef = inject(TemplateRef);
        const viewContainerRef = inject(ViewContainerRef);
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
        this.scrollStrategy = this._scrollStrategyFactory();
    }
    /** The associated overlay reference. */
    get overlayRef() {
        return this._overlayRef;
    }
    /** The element's layout direction. */
    get dir() {
        return this._dir ? this._dir.value : "ltr";
    }
    ngOnDestroy() {
        this._attachSubscription.unsubscribe();
        this._detachSubscription.unsubscribe();
        this._backdropSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
        this._overlayRef?.dispose();
    }
    ngOnChanges(changes) {
        if (this._position) {
            this._updatePositionStrategy(this._position);
            this._overlayRef?.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight
            });
            if (changes["origin"] && this.open) {
                this._position.apply();
            }
        }
        if (changes["open"]) {
            this.open ? this.attachOverlay() : this.detachOverlay();
        }
    }
    /** Creates an overlay */
    _createOverlay() {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        const overlayRef = this._overlayRef = createOverlayRef(this._injector, this._buildConfig());
        this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
        this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
        overlayRef.keydownEvents().subscribe(event => {
            this.overlayKeydown.next(event);
            if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
                event.preventDefault();
                this.detachOverlay();
            }
        });
        this._overlayRef.outsidePointerEvents().subscribe(event => {
            const origin = this._getOriginElement();
            const target = _getEventTarget(event);
            if (!origin || origin !== target && !origin.contains(target)) {
                this.overlayOutsideClick.next(event);
            }
        });
    }
    /** Builds the overlay config based on the directive's inputs */
    _buildConfig() {
        const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
        const overlayConfig = new OverlayConfig({
            direction: this._dir || "ltr",
            positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop,
            disposeOnNavigation: this.disposeOnNavigation
        });
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        if (this.panelClass) {
            overlayConfig.panelClass = this.panelClass;
        }
        return overlayConfig;
    }
    /** Updates the state of a position strategy, based on the values of the directive inputs. */
    _updatePositionStrategy(positionStrategy) {
        const positions = this.positions.map(currentPosition => ({
            originX: currentPosition.originX,
            originY: currentPosition.originY,
            overlayX: currentPosition.overlayX,
            overlayY: currentPosition.overlayY,
            offsetX: currentPosition.offsetX || this.offsetX,
            offsetY: currentPosition.offsetY || this.offsetY,
            panelClass: currentPosition.panelClass || void 0
        }));
        return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
    }
    /** Returns the position strategy of the overlay to be set on the overlay config */
    _createPositionStrategy() {
        const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getOrigin());
        this._updatePositionStrategy(strategy);
        return strategy;
    }
    _getOrigin() {
        if (this.origin instanceof CdkOverlayOrigin) {
            return this.origin.elementRef;
        }
        else {
            return this.origin;
        }
    }
    _getOriginElement() {
        if (this.origin instanceof CdkOverlayOrigin) {
            return this.origin.elementRef.nativeElement;
        }
        if (this.origin instanceof ElementRef) {
            return this.origin.nativeElement;
        }
        if (typeof Element !== "undefined" && this.origin instanceof Element) {
            return this.origin;
        }
        return null;
    }
    /** Attaches the overlay. */
    attachOverlay() {
        if (!this._overlayRef) {
            this._createOverlay();
        }
        else {
            this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
        }
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(event => {
                this.backdropClick.emit(event);
            });
        }
        else {
            this._backdropSubscription.unsubscribe();
        }
        this._positionSubscription.unsubscribe();
        if (this.positionChange.observers.length > 0) {
            this._positionSubscription = this._position.positionChanges.pipe(takeWhile(() => this.positionChange.observers.length > 0)).subscribe(position => {
                this._ngZone.run(() => this.positionChange.emit(position));
                if (this.positionChange.observers.length === 0) {
                    this._positionSubscription.unsubscribe();
                }
            });
        }
        this.open = true;
    }
    /** Detaches the overlay. */
    detachOverlay() {
        this._overlayRef?.detach();
        this._backdropSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
        this.open = false;
    }
    static ɵfac = function CdkConnectedOverlay_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkConnectedOverlay)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkConnectedOverlay,
        selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
        inputs: {
            origin: [0, "cdkConnectedOverlayOrigin", "origin"],
            positions: [0, "cdkConnectedOverlayPositions", "positions"],
            positionStrategy: [0, "cdkConnectedOverlayPositionStrategy", "positionStrategy"],
            offsetX: [0, "cdkConnectedOverlayOffsetX", "offsetX"],
            offsetY: [0, "cdkConnectedOverlayOffsetY", "offsetY"],
            width: [0, "cdkConnectedOverlayWidth", "width"],
            height: [0, "cdkConnectedOverlayHeight", "height"],
            minWidth: [0, "cdkConnectedOverlayMinWidth", "minWidth"],
            minHeight: [0, "cdkConnectedOverlayMinHeight", "minHeight"],
            backdropClass: [0, "cdkConnectedOverlayBackdropClass", "backdropClass"],
            panelClass: [0, "cdkConnectedOverlayPanelClass", "panelClass"],
            viewportMargin: [0, "cdkConnectedOverlayViewportMargin", "viewportMargin"],
            scrollStrategy: [0, "cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
            open: [0, "cdkConnectedOverlayOpen", "open"],
            disableClose: [0, "cdkConnectedOverlayDisableClose", "disableClose"],
            transformOriginSelector: [0, "cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"],
            hasBackdrop: [2, "cdkConnectedOverlayHasBackdrop", "hasBackdrop", booleanAttribute],
            lockPosition: [2, "cdkConnectedOverlayLockPosition", "lockPosition", booleanAttribute],
            flexibleDimensions: [2, "cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", booleanAttribute],
            growAfterOpen: [2, "cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", booleanAttribute],
            push: [2, "cdkConnectedOverlayPush", "push", booleanAttribute],
            disposeOnNavigation: [2, "cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", booleanAttribute]
        },
        outputs: {
            backdropClick: "backdropClick",
            positionChange: "positionChange",
            attach: "attach",
            detach: "detach",
            overlayKeydown: "overlayKeydown",
            overlayOutsideClick: "overlayOutsideClick"
        },
        exportAs: ["cdkConnectedOverlay"],
        features: [i0.ɵɵNgOnChangesFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkConnectedOverlay, [{
            type: Directive,
            args: [{
                    selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
                    exportAs: "cdkConnectedOverlay"
                }]
        }], () => [], {
        origin: [{
                type: Input,
                args: ["cdkConnectedOverlayOrigin"]
            }],
        positions: [{
                type: Input,
                args: ["cdkConnectedOverlayPositions"]
            }],
        positionStrategy: [{
                type: Input,
                args: ["cdkConnectedOverlayPositionStrategy"]
            }],
        offsetX: [{
                type: Input,
                args: ["cdkConnectedOverlayOffsetX"]
            }],
        offsetY: [{
                type: Input,
                args: ["cdkConnectedOverlayOffsetY"]
            }],
        width: [{
                type: Input,
                args: ["cdkConnectedOverlayWidth"]
            }],
        height: [{
                type: Input,
                args: ["cdkConnectedOverlayHeight"]
            }],
        minWidth: [{
                type: Input,
                args: ["cdkConnectedOverlayMinWidth"]
            }],
        minHeight: [{
                type: Input,
                args: ["cdkConnectedOverlayMinHeight"]
            }],
        backdropClass: [{
                type: Input,
                args: ["cdkConnectedOverlayBackdropClass"]
            }],
        panelClass: [{
                type: Input,
                args: ["cdkConnectedOverlayPanelClass"]
            }],
        viewportMargin: [{
                type: Input,
                args: ["cdkConnectedOverlayViewportMargin"]
            }],
        scrollStrategy: [{
                type: Input,
                args: ["cdkConnectedOverlayScrollStrategy"]
            }],
        open: [{
                type: Input,
                args: ["cdkConnectedOverlayOpen"]
            }],
        disableClose: [{
                type: Input,
                args: ["cdkConnectedOverlayDisableClose"]
            }],
        transformOriginSelector: [{
                type: Input,
                args: ["cdkConnectedOverlayTransformOriginOn"]
            }],
        hasBackdrop: [{
                type: Input,
                args: [{
                        alias: "cdkConnectedOverlayHasBackdrop",
                        transform: booleanAttribute
                    }]
            }],
        lockPosition: [{
                type: Input,
                args: [{
                        alias: "cdkConnectedOverlayLockPosition",
                        transform: booleanAttribute
                    }]
            }],
        flexibleDimensions: [{
                type: Input,
                args: [{
                        alias: "cdkConnectedOverlayFlexibleDimensions",
                        transform: booleanAttribute
                    }]
            }],
        growAfterOpen: [{
                type: Input,
                args: [{
                        alias: "cdkConnectedOverlayGrowAfterOpen",
                        transform: booleanAttribute
                    }]
            }],
        push: [{
                type: Input,
                args: [{
                        alias: "cdkConnectedOverlayPush",
                        transform: booleanAttribute
                    }]
            }],
        disposeOnNavigation: [{
                type: Input,
                args: [{
                        alias: "cdkConnectedOverlayDisposeOnNavigation",
                        transform: booleanAttribute
                    }]
            }],
        backdropClick: [{
                type: Output
            }],
        positionChange: [{
                type: Output
            }],
        attach: [{
                type: Output
            }],
        detach: [{
                type: Output
            }],
        overlayKeydown: [{
                type: Output
            }],
        overlayOutsideClick: [{
                type: Output
            }]
    });
})();
var OverlayModule = class _OverlayModule {
    static ɵfac = function OverlayModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _OverlayModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _OverlayModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        providers: [Overlay],
        imports: [BidiModule, PortalModule, ScrollingModule, ScrollingModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OverlayModule, [{
            type: NgModule,
            args: [{
                    imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin],
                    exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule],
                    providers: [Overlay]
                }]
        }], null, null);
})();
export { createBlockScrollStrategy, BlockScrollStrategy, createCloseScrollStrategy, CloseScrollStrategy, createNoopScrollStrategy, NoopScrollStrategy, createRepositionScrollStrategy, RepositionScrollStrategy, ScrollStrategyOptions, OverlayConfig, ConnectionPositionPair, ScrollingVisibility, ConnectedOverlayPositionChange, validateVerticalPosition, validateHorizontalPosition, OverlayKeyboardDispatcher, OverlayOutsideClickDispatcher, OverlayContainer, OverlayRef, createFlexibleConnectedPositionStrategy, FlexibleConnectedPositionStrategy, STANDARD_DROPDOWN_BELOW_POSITIONS, STANDARD_DROPDOWN_ADJACENT_POSITIONS, createGlobalPositionStrategy, GlobalPositionStrategy, OverlayPositionBuilder, createOverlayRef, Overlay, CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule };
