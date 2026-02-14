import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleRenderer, defaultRippleAnimationConfig } from "@nf-internal/chunk-YH4D56O7";
import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
// node_modules/@angular/material/fesm2022/ripple-loader.mjs
import * as i0 from "@angular/core";
import { inject, DOCUMENT, NgZone, Injector, RendererFactory2, Injectable } from "@angular/core";
import { Platform, _getEventTarget } from "@angular/cdk/platform";
var eventListenerOptions = {
    capture: true
};
var rippleInteractionEvents = ["focus", "mousedown", "mouseenter", "touchstart"];
var matRippleUninitialized = "mat-ripple-loader-uninitialized";
var matRippleClassName = "mat-ripple-loader-class-name";
var matRippleCentered = "mat-ripple-loader-centered";
var matRippleDisabled = "mat-ripple-loader-disabled";
var MatRippleLoader = class _MatRippleLoader {
    _document = inject(DOCUMENT);
    _animationsDisabled = _animationsDisabled();
    _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
        optional: true
    });
    _platform = inject(Platform);
    _ngZone = inject(NgZone);
    _injector = inject(Injector);
    _eventCleanups;
    _hosts = /* @__PURE__ */ new Map();
    constructor() {
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        this._eventCleanups = this._ngZone.runOutsideAngular(() => rippleInteractionEvents.map(name => renderer.listen(this._document, name, this._onInteraction, eventListenerOptions)));
    }
    ngOnDestroy() {
        const hosts = this._hosts.keys();
        for (const host of hosts) {
            this.destroyRipple(host);
        }
        this._eventCleanups.forEach(cleanup => cleanup());
    }
    /**
     * Configures the ripple that will be rendered by the ripple loader.
     *
     * Stores the given information about how the ripple should be configured on the host
     * element so that it can later be retrived & used when the ripple is actually created.
     */
    configureRipple(host, config) {
        host.setAttribute(matRippleUninitialized, this._globalRippleOptions?.namespace ?? "");
        if (config.className || !host.hasAttribute(matRippleClassName)) {
            host.setAttribute(matRippleClassName, config.className || "");
        }
        if (config.centered) {
            host.setAttribute(matRippleCentered, "");
        }
        if (config.disabled) {
            host.setAttribute(matRippleDisabled, "");
        }
    }
    /** Sets the disabled state on the ripple instance corresponding to the given host element. */
    setDisabled(host, disabled) {
        const ripple = this._hosts.get(host);
        if (ripple) {
            ripple.target.rippleDisabled = disabled;
            if (!disabled && !ripple.hasSetUpEvents) {
                ripple.hasSetUpEvents = true;
                ripple.renderer.setupTriggerEvents(host);
            }
        }
        else if (disabled) {
            host.setAttribute(matRippleDisabled, "");
        }
        else {
            host.removeAttribute(matRippleDisabled);
        }
    }
    /**
     * Handles creating and attaching component internals
     * when a component is initially interacted with.
     */
    _onInteraction = event => {
        const eventTarget = _getEventTarget(event);
        if (eventTarget instanceof HTMLElement) {
            const element = eventTarget.closest(`[${matRippleUninitialized}="${this._globalRippleOptions?.namespace ?? ""}"]`);
            if (element) {
                this._createRipple(element);
            }
        }
    };
    /** Creates a MatRipple and appends it to the given element. */
    _createRipple(host) {
        if (!this._document || this._hosts.has(host)) {
            return;
        }
        host.querySelector(".mat-ripple")?.remove();
        const rippleEl = this._document.createElement("span");
        rippleEl.classList.add("mat-ripple", host.getAttribute(matRippleClassName));
        host.append(rippleEl);
        const globalOptions = this._globalRippleOptions;
        const enterDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.enterDuration ?? defaultRippleAnimationConfig.enterDuration;
        const exitDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.exitDuration ?? defaultRippleAnimationConfig.exitDuration;
        const target = {
            rippleDisabled: this._animationsDisabled || globalOptions?.disabled || host.hasAttribute(matRippleDisabled),
            rippleConfig: {
                centered: host.hasAttribute(matRippleCentered),
                terminateOnPointerUp: globalOptions?.terminateOnPointerUp,
                animation: {
                    enterDuration,
                    exitDuration
                }
            }
        };
        const renderer = new RippleRenderer(target, this._ngZone, rippleEl, this._platform, this._injector);
        const hasSetUpEvents = !target.rippleDisabled;
        if (hasSetUpEvents) {
            renderer.setupTriggerEvents(host);
        }
        this._hosts.set(host, {
            target,
            renderer,
            hasSetUpEvents
        });
        host.removeAttribute(matRippleUninitialized);
    }
    destroyRipple(host) {
        const ripple = this._hosts.get(host);
        if (ripple) {
            ripple.renderer._removeTriggerEvents();
            this._hosts.delete(host);
        }
    }
    static ɵfac = function MatRippleLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatRippleLoader)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _MatRippleLoader,
        factory: _MatRippleLoader.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatRippleLoader, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
export { MatRippleLoader };
