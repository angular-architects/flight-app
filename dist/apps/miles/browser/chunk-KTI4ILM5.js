import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
import { __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/tooltip2.mjs
import { takeUntil } from "rxjs/operators";
import { coerceBooleanProperty, coerceNumberProperty } from "@angular/cdk/coercion";
import { ESCAPE, hasModifierKey } from "@angular/cdk/keycodes";
import * as i0 from "@angular/core";
import { InjectionToken, inject, Injector, ElementRef, NgZone, ViewContainerRef, afterNextRender, DOCUMENT, Directive, Input, ChangeDetectorRef, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { NgClass } from "@angular/common";
import { normalizePassiveListenerOptions, Platform } from "@angular/cdk/platform";
import { AriaDescriber, FocusMonitor } from "@angular/cdk/a11y";
import { Directionality } from "@angular/cdk/bidi";
import { createRepositionScrollStrategy, ScrollDispatcher, createFlexibleConnectedPositionStrategy, createOverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Subject } from "rxjs";
var _c0 = ["tooltip"];
var SCROLL_THROTTLE_MS = 20;
function getMatTooltipInvalidPositionError(position) {
    return Error(`Tooltip position "${position}" is invalid.`);
}
var MAT_TOOLTIP_SCROLL_STRATEGY = new InjectionToken("mat-tooltip-scroll-strategy", {
    providedIn: "root",
    factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector, {
            scrollThrottle: SCROLL_THROTTLE_MS
        });
    }
});
var MAT_TOOLTIP_DEFAULT_OPTIONS = new InjectionToken("mat-tooltip-default-options", {
    providedIn: "root",
    factory: () => ({
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500
    })
});
var TOOLTIP_PANEL_CLASS = "mat-mdc-tooltip-panel";
var PANEL_CLASS = "tooltip-panel";
var passiveListenerOptions = normalizePassiveListenerOptions({
    passive: true
});
var MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
var UNBOUNDED_ANCHOR_GAP = 8;
var MIN_HEIGHT = 24;
var MAX_WIDTH = 200;
var MatTooltip = class _MatTooltip {
    _elementRef = inject(ElementRef);
    _ngZone = inject(NgZone);
    _platform = inject(Platform);
    _ariaDescriber = inject(AriaDescriber);
    _focusMonitor = inject(FocusMonitor);
    _dir = inject(Directionality);
    _injector = inject(Injector);
    _viewContainerRef = inject(ViewContainerRef);
    _animationsDisabled = _animationsDisabled();
    _defaultOptions = inject(MAT_TOOLTIP_DEFAULT_OPTIONS, {
        optional: true
    });
    _overlayRef;
    _tooltipInstance;
    _overlayPanelClass;
    // Used for styling internally.
    _portal;
    _position = "below";
    _positionAtOrigin = false;
    _disabled = false;
    _tooltipClass;
    _viewInitialized = false;
    _pointerExitEventsInitialized = false;
    _tooltipComponent = TooltipComponent;
    _viewportMargin = 8;
    _currentPosition;
    _cssClassPrefix = "mat-mdc";
    _ariaDescriptionPending;
    _dirSubscribed = false;
    /** Allows the user to define the position of the tooltip relative to the parent element */
    get position() {
        return this._position;
    }
    set position(value) {
        if (value !== this._position) {
            this._position = value;
            if (this._overlayRef) {
                this._updatePosition(this._overlayRef);
                this._tooltipInstance?.show(0);
                this._overlayRef.updatePosition();
            }
        }
    }
    /**
     * Whether tooltip should be relative to the click or touch origin
     * instead of outside the element bounding box.
     */
    get positionAtOrigin() {
        return this._positionAtOrigin;
    }
    set positionAtOrigin(value) {
        this._positionAtOrigin = coerceBooleanProperty(value);
        this._detach();
        this._overlayRef = null;
    }
    /** Disables the display of the tooltip. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        const isDisabled = coerceBooleanProperty(value);
        if (this._disabled !== isDisabled) {
            this._disabled = isDisabled;
            if (isDisabled) {
                this.hide(0);
            }
            else {
                this._setupPointerEnterEventsIfNeeded();
            }
            this._syncAriaDescription(this.message);
        }
    }
    /** The default delay in ms before showing the tooltip after show is called */
    get showDelay() {
        return this._showDelay;
    }
    set showDelay(value) {
        this._showDelay = coerceNumberProperty(value);
    }
    _showDelay;
    /** The default delay in ms before hiding the tooltip after hide is called */
    get hideDelay() {
        return this._hideDelay;
    }
    set hideDelay(value) {
        this._hideDelay = coerceNumberProperty(value);
        if (this._tooltipInstance) {
            this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
        }
    }
    _hideDelay;
    /**
     * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
     * uses a long press gesture to show and hide, however it can conflict with the native browser
     * gestures. To work around the conflict, Angular Material disables native gestures on the
     * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
     * elements). The different values for this option configure the touch event handling as follows:
     * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
     *   browser gestures on particular elements. In particular, it allows text selection on inputs
     *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
     * - `on` - Enables touch gestures for all elements and disables native
     *   browser gestures with no exceptions.
     * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
     *   showing on touch devices.
     */
    touchGestures = "auto";
    /** The message to be displayed in the tooltip */
    get message() {
        return this._message;
    }
    set message(value) {
        const oldMessage = this._message;
        this._message = value != null ? String(value).trim() : "";
        if (!this._message && this._isTooltipVisible()) {
            this.hide(0);
        }
        else {
            this._setupPointerEnterEventsIfNeeded();
            this._updateTooltipMessage();
        }
        this._syncAriaDescription(oldMessage);
    }
    _message = "";
    /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
    get tooltipClass() {
        return this._tooltipClass;
    }
    set tooltipClass(value) {
        this._tooltipClass = value;
        if (this._tooltipInstance) {
            this._setTooltipClass(this._tooltipClass);
        }
    }
    /** Manually-bound passive event listeners. */
    _passiveListeners = [];
    /** Timer started at the last `touchstart` event. */
    _touchstartTimeout = null;
    /** Emits when the component is destroyed. */
    _destroyed = new Subject();
    /** Whether ngOnDestroyed has been called. */
    _isDestroyed = false;
    constructor() {
        const defaultOptions = this._defaultOptions;
        if (defaultOptions) {
            this._showDelay = defaultOptions.showDelay;
            this._hideDelay = defaultOptions.hideDelay;
            if (defaultOptions.position) {
                this.position = defaultOptions.position;
            }
            if (defaultOptions.positionAtOrigin) {
                this.positionAtOrigin = defaultOptions.positionAtOrigin;
            }
            if (defaultOptions.touchGestures) {
                this.touchGestures = defaultOptions.touchGestures;
            }
            if (defaultOptions.tooltipClass) {
                this.tooltipClass = defaultOptions.tooltipClass;
            }
        }
        this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
    }
    ngAfterViewInit() {
        this._viewInitialized = true;
        this._setupPointerEnterEventsIfNeeded();
        this._focusMonitor.monitor(this._elementRef).pipe(takeUntil(this._destroyed)).subscribe(origin => {
            if (!origin) {
                this._ngZone.run(() => this.hide(0));
            }
            else if (origin === "keyboard") {
                this._ngZone.run(() => this.show());
            }
        });
    }
    /**
     * Dispose the tooltip when destroyed.
     */
    ngOnDestroy() {
        const nativeElement = this._elementRef.nativeElement;
        if (this._touchstartTimeout) {
            clearTimeout(this._touchstartTimeout);
        }
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._tooltipInstance = null;
        }
        this._passiveListeners.forEach(([event, listener]) => {
            nativeElement.removeEventListener(event, listener, passiveListenerOptions);
        });
        this._passiveListeners.length = 0;
        this._destroyed.next();
        this._destroyed.complete();
        this._isDestroyed = true;
        this._ariaDescriber.removeDescription(nativeElement, this.message, "tooltip");
        this._focusMonitor.stopMonitoring(nativeElement);
    }
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
    show(delay = this.showDelay, origin) {
        if (this.disabled || !this.message || this._isTooltipVisible()) {
            this._tooltipInstance?._cancelPendingAnimations();
            return;
        }
        const overlayRef = this._createOverlay(origin);
        this._detach();
        this._portal = this._portal || new ComponentPortal(this._tooltipComponent, this._viewContainerRef);
        const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
        instance._triggerElement = this._elementRef.nativeElement;
        instance._mouseLeaveHideDelay = this._hideDelay;
        instance.afterHidden().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
        this._setTooltipClass(this._tooltipClass);
        this._updateTooltipMessage();
        instance.show(delay);
    }
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
    hide(delay = this.hideDelay) {
        const instance = this._tooltipInstance;
        if (instance) {
            if (instance.isVisible()) {
                instance.hide(delay);
            }
            else {
                instance._cancelPendingAnimations();
                this._detach();
            }
        }
    }
    /** Shows/hides the tooltip */
    toggle(origin) {
        this._isTooltipVisible() ? this.hide() : this.show(void 0, origin);
    }
    /** Returns true if the tooltip is currently visible to the user */
    _isTooltipVisible() {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    }
    /** Create the overlay config and position strategy */
    _createOverlay(origin) {
        if (this._overlayRef) {
            const existingStrategy = this._overlayRef.getConfig().positionStrategy;
            if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof ElementRef) {
                return this._overlayRef;
            }
            this._detach();
        }
        const scrollableAncestors = this._injector.get(ScrollDispatcher).getAncestorScrollContainers(this._elementRef);
        const panelClass = `${this._cssClassPrefix}-${PANEL_CLASS}`;
        const strategy = createFlexibleConnectedPositionStrategy(this._injector, this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
        strategy.positionChanges.pipe(takeUntil(this._destroyed)).subscribe(change => {
            this._updateCurrentPositionClass(change.connectionPair);
            if (this._tooltipInstance) {
                if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
                    this._ngZone.run(() => this.hide(0));
                }
            }
        });
        this._overlayRef = createOverlayRef(this._injector, {
            direction: this._dir,
            positionStrategy: strategy,
            panelClass: this._overlayPanelClass ? [...this._overlayPanelClass, panelClass] : panelClass,
            scrollStrategy: this._injector.get(MAT_TOOLTIP_SCROLL_STRATEGY)(),
            disableAnimations: this._animationsDisabled
        });
        this._updatePosition(this._overlayRef);
        this._overlayRef.detachments().pipe(takeUntil(this._destroyed)).subscribe(() => this._detach());
        this._overlayRef.outsidePointerEvents().pipe(takeUntil(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
        this._overlayRef.keydownEvents().pipe(takeUntil(this._destroyed)).subscribe(event => {
            if (this._isTooltipVisible() && event.keyCode === ESCAPE && !hasModifierKey(event)) {
                event.preventDefault();
                event.stopPropagation();
                this._ngZone.run(() => this.hide(0));
            }
        });
        if (this._defaultOptions?.disableTooltipInteractivity) {
            this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
        }
        if (!this._dirSubscribed) {
            this._dirSubscribed = true;
            this._dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
                if (this._overlayRef) {
                    this._updatePosition(this._overlayRef);
                }
            });
        }
        return this._overlayRef;
    }
    /** Detaches the currently-attached tooltip. */
    _detach() {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
        this._tooltipInstance = null;
    }
    /** Updates the position of the current tooltip. */
    _updatePosition(overlayRef) {
        const position = overlayRef.getConfig().positionStrategy;
        const origin = this._getOrigin();
        const overlay = this._getOverlayPosition();
        position.withPositions([this._addOffset(__spreadValues(__spreadValues({}, origin.main), overlay.main)), this._addOffset(__spreadValues(__spreadValues({}, origin.fallback), overlay.fallback))]);
    }
    /** Adds the configured offset to a position. Used as a hook for child classes. */
    _addOffset(position) {
        const offset = UNBOUNDED_ANCHOR_GAP;
        const isLtr = !this._dir || this._dir.value == "ltr";
        if (position.originY === "top") {
            position.offsetY = -offset;
        }
        else if (position.originY === "bottom") {
            position.offsetY = offset;
        }
        else if (position.originX === "start") {
            position.offsetX = isLtr ? -offset : offset;
        }
        else if (position.originX === "end") {
            position.offsetX = isLtr ? offset : -offset;
        }
        return position;
    }
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     */
    _getOrigin() {
        const isLtr = !this._dir || this._dir.value == "ltr";
        const position = this.position;
        let originPosition;
        if (position == "above" || position == "below") {
            originPosition = {
                originX: "center",
                originY: position == "above" ? "top" : "bottom"
            };
        }
        else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
            originPosition = {
                originX: "start",
                originY: "center"
            };
        }
        else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
            originPosition = {
                originX: "end",
                originY: "center"
            };
        }
        else if (typeof ngDevMode === "undefined" || ngDevMode) {
            throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(originPosition.originX, originPosition.originY);
        return {
            main: originPosition,
            fallback: {
                originX: x,
                originY: y
            }
        };
    }
    /** Returns the overlay position and a fallback position based on the user's preference */
    _getOverlayPosition() {
        const isLtr = !this._dir || this._dir.value == "ltr";
        const position = this.position;
        let overlayPosition;
        if (position == "above") {
            overlayPosition = {
                overlayX: "center",
                overlayY: "bottom"
            };
        }
        else if (position == "below") {
            overlayPosition = {
                overlayX: "center",
                overlayY: "top"
            };
        }
        else if (position == "before" || position == "left" && isLtr || position == "right" && !isLtr) {
            overlayPosition = {
                overlayX: "end",
                overlayY: "center"
            };
        }
        else if (position == "after" || position == "right" && isLtr || position == "left" && !isLtr) {
            overlayPosition = {
                overlayX: "start",
                overlayY: "center"
            };
        }
        else if (typeof ngDevMode === "undefined" || ngDevMode) {
            throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
        return {
            main: overlayPosition,
            fallback: {
                overlayX: x,
                overlayY: y
            }
        };
    }
    /** Updates the tooltip message and repositions the overlay according to the new message length */
    _updateTooltipMessage() {
        if (this._tooltipInstance) {
            this._tooltipInstance.message = this.message;
            this._tooltipInstance._markForCheck();
            afterNextRender(() => {
                if (this._tooltipInstance) {
                    this._overlayRef.updatePosition();
                }
            }, {
                injector: this._injector
            });
        }
    }
    /** Updates the tooltip class */
    _setTooltipClass(tooltipClass) {
        if (this._tooltipInstance) {
            this._tooltipInstance.tooltipClass = tooltipClass;
            this._tooltipInstance._markForCheck();
        }
    }
    /** Inverts an overlay position. */
    _invertPosition(x, y) {
        if (this.position === "above" || this.position === "below") {
            if (y === "top") {
                y = "bottom";
            }
            else if (y === "bottom") {
                y = "top";
            }
        }
        else {
            if (x === "end") {
                x = "start";
            }
            else if (x === "start") {
                x = "end";
            }
        }
        return {
            x,
            y
        };
    }
    /** Updates the class on the overlay panel based on the current position of the tooltip. */
    _updateCurrentPositionClass(connectionPair) {
        const { overlayY, originX, originY } = connectionPair;
        let newPosition;
        if (overlayY === "center") {
            if (this._dir && this._dir.value === "rtl") {
                newPosition = originX === "end" ? "left" : "right";
            }
            else {
                newPosition = originX === "start" ? "left" : "right";
            }
        }
        else {
            newPosition = overlayY === "bottom" && originY === "top" ? "above" : "below";
        }
        if (newPosition !== this._currentPosition) {
            const overlayRef = this._overlayRef;
            if (overlayRef) {
                const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
                overlayRef.removePanelClass(classPrefix + this._currentPosition);
                overlayRef.addPanelClass(classPrefix + newPosition);
            }
            this._currentPosition = newPosition;
        }
    }
    /** Binds the pointer events to the tooltip trigger. */
    _setupPointerEnterEventsIfNeeded() {
        if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
            return;
        }
        if (this._platformSupportsMouseEvents()) {
            this._passiveListeners.push(["mouseenter", event => {
                    this._setupPointerExitEventsIfNeeded();
                    let point = void 0;
                    if (event.x !== void 0 && event.y !== void 0) {
                        point = event;
                    }
                    this.show(void 0, point);
                }]);
        }
        else if (this.touchGestures !== "off") {
            this._disableNativeGesturesIfNecessary();
            this._passiveListeners.push(["touchstart", event => {
                    const touch = event.targetTouches?.[0];
                    const origin = touch ? {
                        x: touch.clientX,
                        y: touch.clientY
                    } : void 0;
                    this._setupPointerExitEventsIfNeeded();
                    if (this._touchstartTimeout) {
                        clearTimeout(this._touchstartTimeout);
                    }
                    const DEFAULT_LONGPRESS_DELAY = 500;
                    this._touchstartTimeout = setTimeout(() => {
                        this._touchstartTimeout = null;
                        this.show(void 0, origin);
                    }, this._defaultOptions?.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
                }]);
        }
        this._addListeners(this._passiveListeners);
    }
    _setupPointerExitEventsIfNeeded() {
        if (this._pointerExitEventsInitialized) {
            return;
        }
        this._pointerExitEventsInitialized = true;
        const exitListeners = [];
        if (this._platformSupportsMouseEvents()) {
            exitListeners.push(["mouseleave", event => {
                    const newTarget = event.relatedTarget;
                    if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
                        this.hide();
                    }
                }], ["wheel", event => this._wheelListener(event)]);
        }
        else if (this.touchGestures !== "off") {
            this._disableNativeGesturesIfNecessary();
            const touchendListener = () => {
                if (this._touchstartTimeout) {
                    clearTimeout(this._touchstartTimeout);
                }
                this.hide(this._defaultOptions?.touchendHideDelay);
            };
            exitListeners.push(["touchend", touchendListener], ["touchcancel", touchendListener]);
        }
        this._addListeners(exitListeners);
        this._passiveListeners.push(...exitListeners);
    }
    _addListeners(listeners) {
        listeners.forEach(([event, listener]) => {
            this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
        });
    }
    _platformSupportsMouseEvents() {
        return !this._platform.IOS && !this._platform.ANDROID;
    }
    /** Listener for the `wheel` event on the element. */
    _wheelListener(event) {
        if (this._isTooltipVisible()) {
            const elementUnderPointer = this._injector.get(DOCUMENT).elementFromPoint(event.clientX, event.clientY);
            const element = this._elementRef.nativeElement;
            if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
                this.hide();
            }
        }
    }
    /** Disables the native browser gestures, based on how the tooltip has been configured. */
    _disableNativeGesturesIfNecessary() {
        const gestures = this.touchGestures;
        if (gestures !== "off") {
            const element = this._elementRef.nativeElement;
            const style = element.style;
            if (gestures === "on" || element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA") {
                style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = "none";
            }
            if (gestures === "on" || !element.draggable) {
                style.webkitUserDrag = "none";
            }
            style.touchAction = "none";
            style.webkitTapHighlightColor = "transparent";
        }
    }
    /** Updates the tooltip's ARIA description based on it current state. */
    _syncAriaDescription(oldMessage) {
        if (this._ariaDescriptionPending) {
            return;
        }
        this._ariaDescriptionPending = true;
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, "tooltip");
        if (!this._isDestroyed) {
            afterNextRender({
                write: () => {
                    this._ariaDescriptionPending = false;
                    if (this.message && !this.disabled) {
                        this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, "tooltip");
                    }
                }
            }, {
                injector: this._injector
            });
        }
    }
    static ɵfac = function MatTooltip_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatTooltip)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatTooltip,
        selectors: [["", "matTooltip", ""]],
        hostAttrs: [1, "mat-mdc-tooltip-trigger"],
        hostVars: 2,
        hostBindings: function MatTooltip_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mat-mdc-tooltip-disabled", ctx.disabled);
            }
        },
        inputs: {
            position: [0, "matTooltipPosition", "position"],
            positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"],
            disabled: [0, "matTooltipDisabled", "disabled"],
            showDelay: [0, "matTooltipShowDelay", "showDelay"],
            hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
            touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
            message: [0, "matTooltip", "message"],
            tooltipClass: [0, "matTooltipClass", "tooltipClass"]
        },
        exportAs: ["matTooltip"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTooltip, [{
            type: Directive,
            args: [{
                    selector: "[matTooltip]",
                    exportAs: "matTooltip",
                    host: {
                        "class": "mat-mdc-tooltip-trigger",
                        "[class.mat-mdc-tooltip-disabled]": "disabled"
                    }
                }]
        }], () => [], {
        position: [{
                type: Input,
                args: ["matTooltipPosition"]
            }],
        positionAtOrigin: [{
                type: Input,
                args: ["matTooltipPositionAtOrigin"]
            }],
        disabled: [{
                type: Input,
                args: ["matTooltipDisabled"]
            }],
        showDelay: [{
                type: Input,
                args: ["matTooltipShowDelay"]
            }],
        hideDelay: [{
                type: Input,
                args: ["matTooltipHideDelay"]
            }],
        touchGestures: [{
                type: Input,
                args: ["matTooltipTouchGestures"]
            }],
        message: [{
                type: Input,
                args: ["matTooltip"]
            }],
        tooltipClass: [{
                type: Input,
                args: ["matTooltipClass"]
            }]
    });
})();
var TooltipComponent = class _TooltipComponent {
    _changeDetectorRef = inject(ChangeDetectorRef);
    _elementRef = inject(ElementRef);
    /* Whether the tooltip text overflows to multiple lines */
    _isMultiline = false;
    /** Message to display in the tooltip */
    message;
    /** Classes to be added to the tooltip. Supports the same syntax as `ngClass`. */
    tooltipClass;
    /** The timeout ID of any current timer set to show the tooltip */
    _showTimeoutId;
    /** The timeout ID of any current timer set to hide the tooltip */
    _hideTimeoutId;
    /** Element that caused the tooltip to open. */
    _triggerElement;
    /** Amount of milliseconds to delay the closing sequence. */
    _mouseLeaveHideDelay;
    /** Whether animations are currently disabled. */
    _animationsDisabled = _animationsDisabled();
    /** Reference to the internal tooltip element. */
    _tooltip;
    /** Whether interactions on the page should close the tooltip */
    _closeOnInteraction = false;
    /** Whether the tooltip is currently visible. */
    _isVisible = false;
    /** Subject for notifying that the tooltip has been hidden from the view */
    _onHide = new Subject();
    /** Name of the show animation and the class that toggles it. */
    _showAnimation = "mat-mdc-tooltip-show";
    /** Name of the hide animation and the class that toggles it. */
    _hideAnimation = "mat-mdc-tooltip-hide";
    constructor() { }
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param delay Amount of milliseconds to the delay showing the tooltip.
     */
    show(delay) {
        if (this._hideTimeoutId != null) {
            clearTimeout(this._hideTimeoutId);
        }
        this._showTimeoutId = setTimeout(() => {
            this._toggleVisibility(true);
            this._showTimeoutId = void 0;
        }, delay);
    }
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */
    hide(delay) {
        if (this._showTimeoutId != null) {
            clearTimeout(this._showTimeoutId);
        }
        this._hideTimeoutId = setTimeout(() => {
            this._toggleVisibility(false);
            this._hideTimeoutId = void 0;
        }, delay);
    }
    /** Returns an observable that notifies when the tooltip has been hidden from view. */
    afterHidden() {
        return this._onHide;
    }
    /** Whether the tooltip is being displayed. */
    isVisible() {
        return this._isVisible;
    }
    ngOnDestroy() {
        this._cancelPendingAnimations();
        this._onHide.complete();
        this._triggerElement = null;
    }
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     */
    _handleBodyInteraction() {
        if (this._closeOnInteraction) {
            this.hide(0);
        }
    }
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     */
    _markForCheck() {
        this._changeDetectorRef.markForCheck();
    }
    _handleMouseLeave({ relatedTarget }) {
        if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
            if (this.isVisible()) {
                this.hide(this._mouseLeaveHideDelay);
            }
            else {
                this._finalizeAnimation(false);
            }
        }
    }
    /**
     * Callback for when the timeout in this.show() gets completed.
     * This method is only needed by the mdc-tooltip, and so it is only implemented
     * in the mdc-tooltip, not here.
     */
    _onShow() {
        this._isMultiline = this._isTooltipMultiline();
        this._markForCheck();
    }
    /** Whether the tooltip text has overflown to the next line */
    _isTooltipMultiline() {
        const rect = this._elementRef.nativeElement.getBoundingClientRect();
        return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
    }
    /** Event listener dispatched when an animation on the tooltip finishes. */
    _handleAnimationEnd({ animationName }) {
        if (animationName === this._showAnimation || animationName === this._hideAnimation) {
            this._finalizeAnimation(animationName === this._showAnimation);
        }
    }
    /** Cancels any pending animation sequences. */
    _cancelPendingAnimations() {
        if (this._showTimeoutId != null) {
            clearTimeout(this._showTimeoutId);
        }
        if (this._hideTimeoutId != null) {
            clearTimeout(this._hideTimeoutId);
        }
        this._showTimeoutId = this._hideTimeoutId = void 0;
    }
    /** Handles the cleanup after an animation has finished. */
    _finalizeAnimation(toVisible) {
        if (toVisible) {
            this._closeOnInteraction = true;
        }
        else if (!this.isVisible()) {
            this._onHide.next();
        }
    }
    /** Toggles the visibility of the tooltip element. */
    _toggleVisibility(isVisible) {
        const tooltip = this._tooltip.nativeElement;
        const showClass = this._showAnimation;
        const hideClass = this._hideAnimation;
        tooltip.classList.remove(isVisible ? hideClass : showClass);
        tooltip.classList.add(isVisible ? showClass : hideClass);
        if (this._isVisible !== isVisible) {
            this._isVisible = isVisible;
            this._changeDetectorRef.markForCheck();
        }
        if (isVisible && !this._animationsDisabled && typeof getComputedStyle === "function") {
            const styles = getComputedStyle(tooltip);
            if (styles.getPropertyValue("animation-duration") === "0s" || styles.getPropertyValue("animation-name") === "none") {
                this._animationsDisabled = true;
            }
        }
        if (isVisible) {
            this._onShow();
        }
        if (this._animationsDisabled) {
            tooltip.classList.add("_mat-animation-noopable");
            this._finalizeAnimation(isVisible);
        }
    }
    static ɵfac = function TooltipComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _TooltipComponent)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _TooltipComponent,
        selectors: [["mat-tooltip-component"]],
        viewQuery: function TooltipComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 7);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._tooltip = _t.first);
            }
        },
        hostAttrs: ["aria-hidden", "true"],
        hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
                    return ctx._handleMouseLeave($event);
                });
            }
        },
        decls: 4,
        vars: 4,
        consts: [["tooltip", ""], [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend", "ngClass"], [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]],
        template: function TooltipComponent_Template(rf, ctx) {
            if (rf & 1) {
                const _r1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "div", 1, 0);
                i0.ɵɵlistener("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
                    i0.ɵɵrestoreView(_r1);
                    return i0.ɵɵresetView(ctx._handleAnimationEnd($event));
                });
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵtext(3);
                i0.ɵɵelementEnd()();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("mdc-tooltip--multiline", ctx._isMultiline);
                i0.ɵɵproperty("ngClass", ctx.tooltipClass);
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(ctx.message);
            }
        },
        dependencies: [NgClass],
        styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n'],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipComponent, [{
            type: Component,
            args: [{
                    selector: "mat-tooltip-component",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        "(mouseleave)": "_handleMouseLeave($event)",
                        "aria-hidden": "true"
                    },
                    imports: [NgClass],
                    template: '<div\n  #tooltip\n  class="mdc-tooltip mat-mdc-tooltip"\n  [ngClass]="tooltipClass"\n  (animationend)="_handleAnimationEnd($event)"\n  [class.mdc-tooltip--multiline]="_isMultiline">\n  <div class="mat-mdc-tooltip-surface mdc-tooltip__surface">{{message}}</div>\n</div>\n',
                    styles: ['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel{line-height:normal}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}\n']
                }]
        }], () => [], {
        _tooltip: [{
                type: ViewChild,
                args: ["tooltip", {
                        // Use a static query here since we interact directly with
                        // the DOM which can happen before `ngAfterViewInit`.
                        static: true
                    }]
            }]
    });
})();
export { SCROLL_THROTTLE_MS, getMatTooltipInvalidPositionError, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_DEFAULT_OPTIONS, TOOLTIP_PANEL_CLASS, MatTooltip, TooltipComponent };
