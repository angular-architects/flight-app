import { _VisuallyHiddenLoader } from "@nf-internal/chunk-MQ4NFWON";
import { BreakpointObserver } from "@nf-internal/chunk-2OGGCIMB";
import { CdkMonitorFocus } from "@nf-internal/chunk-AEKGWLZG";
import { ContentObserver, ObserversModule } from "@nf-internal/chunk-2LYN7CWG";
import { _getFocusedElementPierceShadowDom } from "@nf-internal/chunk-KPYFKLQQ";
import { _CdkPrivateStyleLoader } from "@nf-internal/chunk-HRAF4QVP";
import { Platform } from "@nf-internal/chunk-26DDZNO4";
// node_modules/@angular/cdk/fesm2022/a11y-module.mjs
import * as i0 from "@angular/core";
import { inject, Injectable, afterNextRender, NgZone, DOCUMENT, Injector, ElementRef, booleanAttribute, Directive, Input, InjectionToken, NgModule } from "@angular/core";
var IsFocusableConfig = class {
    /**
     * Whether to count an element as focusable even if it is not currently visible.
     */
    ignoreVisibility = false;
};
var InteractivityChecker = class _InteractivityChecker {
    _platform = inject(Platform);
    constructor() { }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    isDisabled(element) {
        return element.hasAttribute("disabled");
    }
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    isVisible(element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
    }
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    isTabbable(element) {
        if (!this._platform.isBrowser) {
            return false;
        }
        const frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            if (!this.isVisible(frameElement)) {
                return false;
            }
        }
        let nodeName = element.nodeName.toLowerCase();
        let tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute("contenteditable")) {
            return tabIndexValue !== -1;
        }
        if (nodeName === "iframe" || nodeName === "object") {
            return false;
        }
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        if (nodeName === "audio") {
            if (!element.hasAttribute("controls")) {
                return false;
            }
            return tabIndexValue !== -1;
        }
        if (nodeName === "video") {
            if (tabIndexValue === -1) {
                return false;
            }
            if (tabIndexValue !== null) {
                return true;
            }
            return this._platform.FIREFOX || element.hasAttribute("controls");
        }
        return element.tabIndex >= 0;
    }
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @param config The config object with options to customize this method's behavior
     * @returns Whether the element is focusable.
     */
    isFocusable(element, config) {
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
    }
    static ɵfac = function InteractivityChecker_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _InteractivityChecker)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _InteractivityChecker,
        factory: _InteractivityChecker.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InteractivityChecker, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
function getFrameElement(window2) {
    try {
        return window2.frameElement;
    }
    catch {
        return null;
    }
}
function hasGeometry(element) {
    return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
    let nodeName = element.nodeName.toLowerCase();
    return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
    return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
    return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
    if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
        return false;
    }
    let tabIndex = element.getAttribute("tabindex");
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
    let nodeName = element.nodeName.toLowerCase();
    let inputType = nodeName === "input" && element.type;
    return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
    _element;
    _checker;
    _ngZone;
    _document;
    _injector;
    _startAnchor;
    _endAnchor;
    _hasAttached = false;
    // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
    startAnchorListener = () => this.focusLastTabbableElement();
    endAnchorListener = () => this.focusFirstTabbableElement();
    /** Whether the focus trap is active. */
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._enabled = value;
        if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(value, this._startAnchor);
            this._toggleAnchorTabIndex(value, this._endAnchor);
        }
    }
    _enabled = true;
    constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._injector = _injector;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    /** Destroys the focus trap by cleaning up the anchors. */
    destroy() {
        const startAnchor = this._startAnchor;
        const endAnchor = this._endAnchor;
        if (startAnchor) {
            startAnchor.removeEventListener("focus", this.startAnchorListener);
            startAnchor.remove();
        }
        if (endAnchor) {
            endAnchor.removeEventListener("focus", this.endAnchorListener);
            endAnchor.remove();
        }
        this._startAnchor = this._endAnchor = null;
        this._hasAttached = false;
    }
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @returns Whether the focus trap managed to attach successfully. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    attachAnchors() {
        if (this._hasAttached) {
            return true;
        }
        this._ngZone.runOutsideAngular(() => {
            if (!this._startAnchor) {
                this._startAnchor = this._createAnchor();
                this._startAnchor.addEventListener("focus", this.startAnchorListener);
            }
            if (!this._endAnchor) {
                this._endAnchor = this._createAnchor();
                this._endAnchor.addEventListener("focus", this.endAnchorListener);
            }
        });
        if (this._element.parentNode) {
            this._element.parentNode.insertBefore(this._startAnchor, this._element);
            this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
            this._hasAttached = true;
        }
        return this._hasAttached;
    }
    /**
     * Waits for the zone to stabilize, then focuses the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */
    focusInitialElementWhenReady(options) {
        return new Promise(resolve => {
            this._executeOnStable(() => resolve(this.focusInitialElement(options)));
        });
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */
    focusFirstTabbableElementWhenReady(options) {
        return new Promise(resolve => {
            this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
        });
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfully.
     */
    focusLastTabbableElementWhenReady(options) {
        return new Promise(resolve => {
            this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
        });
    }
    /**
     * Get the specified boundary element of the trapped region.
     * @param bound The boundary to get (start or end of trapped region).
     * @returns The boundary element.
     */
    _getRegionBoundary(bound) {
        const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            for (let i = 0; i < markers.length; i++) {
                if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
                    console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
                }
                else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
                    console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
                }
            }
        }
        if (bound == "start") {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    }
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfully.
     */
    focusInitialElement(options) {
        const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
        if (redirectToElement) {
            if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
            }
            if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
                console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
            }
            if (!this._checker.isFocusable(redirectToElement)) {
                const focusableChild = this._getFirstTabbableElement(redirectToElement);
                focusableChild?.focus(options);
                return !!focusableChild;
            }
            redirectToElement.focus(options);
            return true;
        }
        return this.focusFirstTabbableElement(options);
    }
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfully.
     */
    focusFirstTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary("start");
        if (redirectToElement) {
            redirectToElement.focus(options);
        }
        return !!redirectToElement;
    }
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfully.
     */
    focusLastTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary("end");
        if (redirectToElement) {
            redirectToElement.focus(options);
        }
        return !!redirectToElement;
    }
    /**
     * Checks whether the focus trap has successfully been attached.
     */
    hasAttached() {
        return this._hasAttached;
    }
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    _getFirstTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        const children = root.children;
        for (let i = 0; i < children.length; i++) {
            const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    _getLastTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        const children = root.children;
        for (let i = children.length - 1; i >= 0; i--) {
            const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /** Creates an anchor element. */
    _createAnchor() {
        const anchor = this._document.createElement("div");
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add("cdk-visually-hidden");
        anchor.classList.add("cdk-focus-trap-anchor");
        anchor.setAttribute("aria-hidden", "true");
        return anchor;
    }
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @param isEnabled Whether the focus trap is enabled.
     * @param anchor Anchor on which to toggle the tabindex.
     */
    _toggleAnchorTabIndex(isEnabled, anchor) {
        isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
    }
    /**
     * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
     * @param enabled: Whether the anchors should trap Tab.
     */
    toggleAnchors(enabled) {
        if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(enabled, this._startAnchor);
            this._toggleAnchorTabIndex(enabled, this._endAnchor);
        }
    }
    /** Executes a function when the zone is stable. */
    _executeOnStable(fn) {
        if (this._injector) {
            afterNextRender(fn, {
                injector: this._injector
            });
        }
        else {
            setTimeout(fn);
        }
    }
};
var FocusTrapFactory = class _FocusTrapFactory {
    _checker = inject(InteractivityChecker);
    _ngZone = inject(NgZone);
    _document = inject(DOCUMENT);
    _injector = inject(Injector);
    constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    create(element, deferCaptureElements = false) {
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
    }
    static ɵfac = function FocusTrapFactory_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _FocusTrapFactory)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _FocusTrapFactory,
        factory: _FocusTrapFactory.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FocusTrapFactory, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var CdkTrapFocus = class _CdkTrapFocus {
    _elementRef = inject(ElementRef);
    _focusTrapFactory = inject(FocusTrapFactory);
    /** Underlying FocusTrap instance. */
    focusTrap;
    /** Previously focused element to restore focus to upon destroy when using autoCapture. */
    _previouslyFocusedElement = null;
    /** Whether the focus trap is active. */
    get enabled() {
        return this.focusTrap?.enabled || false;
    }
    set enabled(value) {
        if (this.focusTrap) {
            this.focusTrap.enabled = value;
        }
    }
    /**
     * Whether the directive should automatically move focus into the trapped region upon
     * initialization and return focus to the previous activeElement upon destruction.
     */
    autoCapture;
    constructor() {
        const platform = inject(Platform);
        if (platform.isBrowser) {
            this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
        }
    }
    ngOnDestroy() {
        this.focusTrap?.destroy();
        if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();
            this._previouslyFocusedElement = null;
        }
    }
    ngAfterContentInit() {
        this.focusTrap?.attachAnchors();
        if (this.autoCapture) {
            this._captureFocus();
        }
    }
    ngDoCheck() {
        if (this.focusTrap && !this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
        }
    }
    ngOnChanges(changes) {
        const autoCaptureChange = changes["autoCapture"];
        if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
            this._captureFocus();
        }
    }
    _captureFocus() {
        this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
        this.focusTrap?.focusInitialElementWhenReady();
    }
    static ɵfac = function CdkTrapFocus_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTrapFocus)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkTrapFocus,
        selectors: [["", "cdkTrapFocus", ""]],
        inputs: {
            enabled: [2, "cdkTrapFocus", "enabled", booleanAttribute],
            autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
        },
        exportAs: ["cdkTrapFocus"],
        features: [i0.ɵɵNgOnChangesFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTrapFocus, [{
            type: Directive,
            args: [{
                    selector: "[cdkTrapFocus]",
                    exportAs: "cdkTrapFocus"
                }]
        }], () => [], {
        enabled: [{
                type: Input,
                args: [{
                        alias: "cdkTrapFocus",
                        transform: booleanAttribute
                    }]
            }],
        autoCapture: [{
                type: Input,
                args: [{
                        alias: "cdkTrapFocusAutoCapture",
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
    providedIn: "root",
    factory: () => null
});
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var LiveAnnouncer = class _LiveAnnouncer {
    _ngZone = inject(NgZone);
    _defaultOptions = inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, {
        optional: true
    });
    _liveElement;
    _document = inject(DOCUMENT);
    _previousTimeout;
    _currentPromise;
    _currentResolve;
    constructor() {
        const elementToken = inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, {
            optional: true
        });
        this._liveElement = elementToken || this._createLiveElement();
    }
    announce(message, ...args) {
        const defaultOptions = this._defaultOptions;
        let politeness;
        let duration;
        if (args.length === 1 && typeof args[0] === "number") {
            duration = args[0];
        }
        else {
            [politeness, duration] = args;
        }
        this.clear();
        clearTimeout(this._previousTimeout);
        if (!politeness) {
            politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
        }
        if (duration == null && defaultOptions) {
            duration = defaultOptions.duration;
        }
        this._liveElement.setAttribute("aria-live", politeness);
        if (this._liveElement.id) {
            this._exposeAnnouncerToModals(this._liveElement.id);
        }
        return this._ngZone.runOutsideAngular(() => {
            if (!this._currentPromise) {
                this._currentPromise = new Promise(resolve => this._currentResolve = resolve);
            }
            clearTimeout(this._previousTimeout);
            this._previousTimeout = setTimeout(() => {
                this._liveElement.textContent = message;
                if (typeof duration === "number") {
                    this._previousTimeout = setTimeout(() => this.clear(), duration);
                }
                this._currentResolve?.();
                this._currentPromise = this._currentResolve = void 0;
            }, 100);
            return this._currentPromise;
        });
    }
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     */
    clear() {
        if (this._liveElement) {
            this._liveElement.textContent = "";
        }
    }
    ngOnDestroy() {
        clearTimeout(this._previousTimeout);
        this._liveElement?.remove();
        this._liveElement = null;
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
    }
    _createLiveElement() {
        const elementClass = "cdk-live-announcer-element";
        const previousElements = this._document.getElementsByClassName(elementClass);
        const liveEl = this._document.createElement("div");
        for (let i = 0; i < previousElements.length; i++) {
            previousElements[i].remove();
        }
        liveEl.classList.add(elementClass);
        liveEl.classList.add("cdk-visually-hidden");
        liveEl.setAttribute("aria-atomic", "true");
        liveEl.setAttribute("aria-live", "polite");
        liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
        this._document.body.appendChild(liveEl);
        return liveEl;
    }
    /**
     * Some browsers won't expose the accessibility node of the live announcer element if there is an
     * `aria-modal` and the live announcer is outside of it. This method works around the issue by
     * pointing the `aria-owns` of all modals to the live announcer element.
     */
    _exposeAnnouncerToModals(id) {
        const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
        for (let i = 0; i < modals.length; i++) {
            const modal = modals[i];
            const ariaOwns = modal.getAttribute("aria-owns");
            if (!ariaOwns) {
                modal.setAttribute("aria-owns", id);
            }
            else if (ariaOwns.indexOf(id) === -1) {
                modal.setAttribute("aria-owns", ariaOwns + " " + id);
            }
        }
    }
    static ɵfac = function LiveAnnouncer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _LiveAnnouncer)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _LiveAnnouncer,
        factory: _LiveAnnouncer.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LiveAnnouncer, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var CdkAriaLive = class _CdkAriaLive {
    _elementRef = inject(ElementRef);
    _liveAnnouncer = inject(LiveAnnouncer);
    _contentObserver = inject(ContentObserver);
    _ngZone = inject(NgZone);
    /** The aria-live politeness level to use when announcing messages. */
    get politeness() {
        return this._politeness;
    }
    set politeness(value) {
        this._politeness = value === "off" || value === "assertive" ? value : "polite";
        if (this._politeness === "off") {
            if (this._subscription) {
                this._subscription.unsubscribe();
                this._subscription = null;
            }
        }
        else if (!this._subscription) {
            this._subscription = this._ngZone.runOutsideAngular(() => {
                return this._contentObserver.observe(this._elementRef).subscribe(() => {
                    const elementText = this._elementRef.nativeElement.textContent;
                    if (elementText !== this._previousAnnouncedText) {
                        this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
                        this._previousAnnouncedText = elementText;
                    }
                });
            });
        }
    }
    _politeness = "polite";
    /** Time in milliseconds after which to clear out the announcer element. */
    duration;
    _previousAnnouncedText;
    _subscription;
    constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    static ɵfac = function CdkAriaLive_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkAriaLive)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkAriaLive,
        selectors: [["", "cdkAriaLive", ""]],
        inputs: {
            politeness: [0, "cdkAriaLive", "politeness"],
            duration: [0, "cdkAriaLiveDuration", "duration"]
        },
        exportAs: ["cdkAriaLive"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkAriaLive, [{
            type: Directive,
            args: [{
                    selector: "[cdkAriaLive]",
                    exportAs: "cdkAriaLive"
                }]
        }], () => [], {
        politeness: [{
                type: Input,
                args: ["cdkAriaLive"]
            }],
        duration: [{
                type: Input,
                args: ["cdkAriaLiveDuration"]
            }]
    });
})();
var HighContrastMode;
(function (HighContrastMode2) {
    HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
    HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
    HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var HighContrastModeDetector = class _HighContrastModeDetector {
    _platform = inject(Platform);
    /**
     * Figuring out the high contrast mode and adding the body classes can cause
     * some expensive layouts. This flag is used to ensure that we only do it once.
     */
    _hasCheckedHighContrastMode;
    _document = inject(DOCUMENT);
    _breakpointSubscription;
    constructor() {
        this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
            if (this._hasCheckedHighContrastMode) {
                this._hasCheckedHighContrastMode = false;
                this._applyBodyHighContrastModeCssClasses();
            }
        });
    }
    /** Gets the current high-contrast-mode for the page. */
    getHighContrastMode() {
        if (!this._platform.isBrowser) {
            return HighContrastMode.NONE;
        }
        const testElement = this._document.createElement("div");
        testElement.style.backgroundColor = "rgb(1,2,3)";
        testElement.style.position = "absolute";
        this._document.body.appendChild(testElement);
        const documentWindow = this._document.defaultView || window;
        const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
        const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
        testElement.remove();
        switch (computedColor) {
            // Pre Windows 11 dark theme.
            case "rgb(0,0,0)":
            // Windows 11 dark themes.
            case "rgb(45,50,54)":
            case "rgb(32,32,32)":
                return HighContrastMode.WHITE_ON_BLACK;
            // Pre Windows 11 light theme.
            case "rgb(255,255,255)":
            // Windows 11 light theme.
            case "rgb(255,250,239)":
                return HighContrastMode.BLACK_ON_WHITE;
        }
        return HighContrastMode.NONE;
    }
    ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
    }
    /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
    _applyBodyHighContrastModeCssClasses() {
        if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
            const bodyClasses = this._document.body.classList;
            bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
            this._hasCheckedHighContrastMode = true;
            const mode = this.getHighContrastMode();
            if (mode === HighContrastMode.BLACK_ON_WHITE) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
            }
            else if (mode === HighContrastMode.WHITE_ON_BLACK) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
            }
        }
    }
    static ɵfac = function HighContrastModeDetector_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _HighContrastModeDetector)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _HighContrastModeDetector,
        factory: _HighContrastModeDetector.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HighContrastModeDetector, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var A11yModule = class _A11yModule {
    constructor() {
        inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
    }
    static ɵfac = function A11yModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _A11yModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _A11yModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [ObserversModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(A11yModule, [{
            type: NgModule,
            args: [{
                    imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                    exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
                }]
        }], () => [], null);
})();
export { IsFocusableConfig, InteractivityChecker, FocusTrap, FocusTrapFactory, CdkTrapFocus, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LiveAnnouncer, CdkAriaLive, HighContrastMode, HighContrastModeDetector, A11yModule };
