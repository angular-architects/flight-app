import { normalizePassiveListenerOptions } from "@nf-internal/chunk-B6OVJH7J";
import { isFakeMousedownFromScreenReader, isFakeTouchstartFromScreenReader } from "@nf-internal/chunk-CONIAN5D";
import { _getEventTarget, _getShadowRoot } from "@nf-internal/chunk-KPYFKLQQ";
import { ALT, CONTROL, MAC_META, META, SHIFT } from "@nf-internal/chunk-IANTZR4E";
import { Platform } from "@nf-internal/chunk-26DDZNO4";
import { coerceElement } from "@nf-internal/chunk-XODDVZAQ";
import { __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/focus-monitor.mjs
import * as i0 from "@angular/core";
import { InjectionToken, inject, NgZone, DOCUMENT, RendererFactory2, Injectable, ElementRef, EventEmitter, Directive, Output } from "@angular/core";
import { BehaviorSubject, Subject, of } from "rxjs";
import { skip, distinctUntilChanged, takeUntil } from "rxjs/operators";
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
    ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = {
    passive: true,
    capture: true
};
var InputModalityDetector = class _InputModalityDetector {
    _platform = inject(Platform);
    _listenerCleanups;
    /** Emits whenever an input modality is detected. */
    modalityDetected;
    /** Emits when the input modality changes. */
    modalityChanged;
    /** The most recently detected input modality. */
    get mostRecentModality() {
        return this._modality.value;
    }
    /**
     * The most recently detected input modality event target. Is null if no input modality has been
     * detected or if the associated event target is null for some unknown reason.
     */
    _mostRecentTarget = null;
    /** The underlying BehaviorSubject that emits whenever an input modality is detected. */
    _modality = new BehaviorSubject(null);
    /** Options for this InputModalityDetector. */
    _options;
    /**
     * The timestamp of the last touch input modality. Used to determine whether mousedown events
     * should be attributed to mouse or touch.
     */
    _lastTouchMs = 0;
    /**
     * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
     * bound.
     */
    _onKeydown = event => {
        if (this._options?.ignoreKeys?.some(keyCode => keyCode === event.keyCode)) {
            return;
        }
        this._modality.next("keyboard");
        this._mostRecentTarget = _getEventTarget(event);
    };
    /**
     * Handles mousedown events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */
    _onMousedown = event => {
        if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
            return;
        }
        this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
        this._mostRecentTarget = _getEventTarget(event);
    };
    /**
     * Handles touchstart events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */
    _onTouchstart = event => {
        if (isFakeTouchstartFromScreenReader(event)) {
            this._modality.next("keyboard");
            return;
        }
        this._lastTouchMs = Date.now();
        this._modality.next("touch");
        this._mostRecentTarget = _getEventTarget(event);
    };
    constructor() {
        const ngZone = inject(NgZone);
        const document = inject(DOCUMENT);
        const options = inject(INPUT_MODALITY_DETECTOR_OPTIONS, {
            optional: true
        });
        this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
        this.modalityDetected = this._modality.pipe(skip(1));
        this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
        if (this._platform.isBrowser) {
            const renderer = inject(RendererFactory2).createRenderer(null, null);
            this._listenerCleanups = ngZone.runOutsideAngular(() => {
                return [renderer.listen(document, "keydown", this._onKeydown, modalityEventListenerOptions), renderer.listen(document, "mousedown", this._onMousedown, modalityEventListenerOptions), renderer.listen(document, "touchstart", this._onTouchstart, modalityEventListenerOptions)];
            });
        }
    }
    ngOnDestroy() {
        this._modality.complete();
        this._listenerCleanups?.forEach(cleanup => cleanup());
    }
    static ɵfac = function InputModalityDetector_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _InputModalityDetector)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _InputModalityDetector,
        factory: _InputModalityDetector.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputModalityDetector, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var FocusMonitorDetectionMode;
(function (FocusMonitorDetectionMode2) {
    FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
    FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
    passive: true,
    capture: true
});
var FocusMonitor = class _FocusMonitor {
    _ngZone = inject(NgZone);
    _platform = inject(Platform);
    _inputModalityDetector = inject(InputModalityDetector);
    /** The focus origin that the next focus event is a result of. */
    _origin = null;
    /** The FocusOrigin of the last focus event tracked by the FocusMonitor. */
    _lastFocusOrigin;
    /** Whether the window has just been focused. */
    _windowFocused = false;
    /** The timeout id of the window focus timeout. */
    _windowFocusTimeoutId;
    /** The timeout id of the origin clearing timeout. */
    _originTimeoutId;
    /**
     * Whether the origin was determined via a touch interaction. Necessary as properly attributing
     * focus events to touch interactions requires special logic.
     */
    _originFromTouchInteraction = false;
    /** Map of elements being monitored to their info. */
    _elementInfo = /* @__PURE__ */ new Map();
    /** The number of elements currently being monitored. */
    _monitoredElementCount = 0;
    /**
     * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
     * as well as the number of monitored elements that they contain. We have to treat focus/blur
     * handlers differently from the rest of the events, because the browser won't emit events
     * to the document when focus moves inside of a shadow root.
     */
    _rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
    /**
     * The specified detection mode, used for attributing the origin of a focus
     * event.
     */
    _detectionMode;
    /**
     * Event listener for `focus` events on the window.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    _windowFocusListener = () => {
        this._windowFocused = true;
        this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
    };
    /** Used to reference correct document/window */
    _document = inject(DOCUMENT);
    /** Subject for stopping our InputModalityDetector subscription. */
    _stopInputModalityDetector = new Subject();
    constructor() {
        const options = inject(FOCUS_MONITOR_DEFAULT_OPTIONS, {
            optional: true
        });
        this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
    }
    /**
     * Event listener for `focus` and 'blur' events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */
    _rootNodeFocusAndBlurListener = event => {
        const target = _getEventTarget(event);
        for (let element = target; element; element = element.parentElement) {
            if (event.type === "focus") {
                this._onFocus(event, element);
            }
            else {
                this._onBlur(event, element);
            }
        }
    };
    monitor(element, checkChildren = false) {
        const nativeElement = coerceElement(element);
        if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
            return of();
        }
        const rootNode = _getShadowRoot(nativeElement) || this._document;
        const cachedInfo = this._elementInfo.get(nativeElement);
        if (cachedInfo) {
            if (checkChildren) {
                cachedInfo.checkChildren = true;
            }
            return cachedInfo.subject;
        }
        const info = {
            checkChildren,
            subject: new Subject(),
            rootNode
        };
        this._elementInfo.set(nativeElement, info);
        this._registerGlobalListeners(info);
        return info.subject;
    }
    stopMonitoring(element) {
        const nativeElement = coerceElement(element);
        const elementInfo = this._elementInfo.get(nativeElement);
        if (elementInfo) {
            elementInfo.subject.complete();
            this._setClasses(nativeElement);
            this._elementInfo.delete(nativeElement);
            this._removeGlobalListeners(elementInfo);
        }
    }
    focusVia(element, origin, options) {
        const nativeElement = coerceElement(element);
        const focusedElement = this._document.activeElement;
        if (nativeElement === focusedElement) {
            this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
        }
        else {
            this._setOrigin(origin);
            if (typeof nativeElement.focus === "function") {
                nativeElement.focus(options);
            }
        }
    }
    ngOnDestroy() {
        this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        return this._document.defaultView || window;
    }
    _getFocusOrigin(focusEventTarget) {
        if (this._origin) {
            if (this._originFromTouchInteraction) {
                return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
            }
            else {
                return this._origin;
            }
        }
        if (this._windowFocused && this._lastFocusOrigin) {
            return this._lastFocusOrigin;
        }
        if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
            return "mouse";
        }
        return "program";
    }
    /**
     * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
     * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
     * handle a focus event following a touch interaction, we need to determine whether (1) the focus
     * event was directly caused by the touch interaction or (2) the focus event was caused by a
     * subsequent programmatic focus call triggered by the touch interaction.
     * @param focusEventTarget The target of the focus event under examination.
     */
    _shouldBeAttributedToTouch(focusEventTarget) {
        return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
    }
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param element The element to update the classes on.
     * @param origin The focus origin.
     */
    _setClasses(element, origin) {
        element.classList.toggle("cdk-focused", !!origin);
        element.classList.toggle("cdk-touch-focused", origin === "touch");
        element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
        element.classList.toggle("cdk-mouse-focused", origin === "mouse");
        element.classList.toggle("cdk-program-focused", origin === "program");
    }
    /**
     * Updates the focus origin. If we're using immediate detection mode, we schedule an async
     * function to clear the origin at the end of a timeout. The duration of the timeout depends on
     * the origin being set.
     * @param origin The origin to set.
     * @param isFromInteraction Whether we are setting the origin from an interaction event.
     */
    _setOrigin(origin, isFromInteraction = false) {
        this._ngZone.runOutsideAngular(() => {
            this._origin = origin;
            this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
            if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
                clearTimeout(this._originTimeoutId);
                const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
                this._originTimeoutId = setTimeout(() => this._origin = null, ms);
            }
        });
    }
    /**
     * Handles focus events on a registered element.
     * @param event The focus event.
     * @param element The monitored element.
     */
    _onFocus(event, element) {
        const elementInfo = this._elementInfo.get(element);
        const focusEventTarget = _getEventTarget(event);
        if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
            return;
        }
        this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
    }
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    _onBlur(event, element) {
        const elementInfo = this._elementInfo.get(element);
        if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
            return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo, null);
    }
    _emitOrigin(info, origin) {
        if (info.subject.observers.length) {
            this._ngZone.run(() => info.subject.next(origin));
        }
    }
    _registerGlobalListeners(elementInfo) {
        if (!this._platform.isBrowser) {
            return;
        }
        const rootNode = elementInfo.rootNode;
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
        if (!rootNodeFocusListeners) {
            this._ngZone.runOutsideAngular(() => {
                rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            });
        }
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
        if (++this._monitoredElementCount === 1) {
            this._ngZone.runOutsideAngular(() => {
                const window2 = this._getWindow();
                window2.addEventListener("focus", this._windowFocusListener);
            });
            this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe(modality => {
                this._setOrigin(modality, true
                /* isFromInteraction */ );
            });
        }
    }
    _removeGlobalListeners(elementInfo) {
        const rootNode = elementInfo.rootNode;
        if (this._rootNodeFocusListenerCount.has(rootNode)) {
            const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
            if (rootNodeFocusListeners > 1) {
                this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
            }
            else {
                rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                this._rootNodeFocusListenerCount.delete(rootNode);
            }
        }
        if (!--this._monitoredElementCount) {
            const window2 = this._getWindow();
            window2.removeEventListener("focus", this._windowFocusListener);
            this._stopInputModalityDetector.next();
            clearTimeout(this._windowFocusTimeoutId);
            clearTimeout(this._originTimeoutId);
        }
    }
    /** Updates all the state on an element once its focus origin has changed. */
    _originChanged(element, origin, elementInfo) {
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo, origin);
        this._lastFocusOrigin = origin;
    }
    /**
     * Collects the `MonitoredElementInfo` of a particular element and
     * all of its ancestors that have enabled `checkChildren`.
     * @param element Element from which to start the search.
     */
    _getClosestElementsInfo(element) {
        const results = [];
        this._elementInfo.forEach((info, currentElement) => {
            if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
                results.push([currentElement, info]);
            }
        });
        return results;
    }
    /**
     * Returns whether an interaction is likely to have come from the user clicking the `label` of
     * an `input` or `textarea` in order to focus it.
     * @param focusEventTarget Target currently receiving focus.
     */
    _isLastInteractionFromInputLabel(focusEventTarget) {
        const { _mostRecentTarget: mostRecentTarget, mostRecentModality } = this._inputModalityDetector;
        if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
            return false;
        }
        const labels = focusEventTarget.labels;
        if (labels) {
            for (let i = 0; i < labels.length; i++) {
                if (labels[i].contains(mostRecentTarget)) {
                    return true;
                }
            }
        }
        return false;
    }
    static ɵfac = function FocusMonitor_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _FocusMonitor)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _FocusMonitor,
        factory: _FocusMonitor.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FocusMonitor, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var CdkMonitorFocus = class _CdkMonitorFocus {
    _elementRef = inject(ElementRef);
    _focusMonitor = inject(FocusMonitor);
    _monitorSubscription;
    _focusOrigin = null;
    cdkFocusChange = new EventEmitter();
    constructor() { }
    get focusOrigin() {
        return this._focusOrigin;
    }
    ngAfterViewInit() {
        const element = this._elementRef.nativeElement;
        this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(origin => {
            this._focusOrigin = origin;
            this.cdkFocusChange.emit(origin);
        });
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        if (this._monitorSubscription) {
            this._monitorSubscription.unsubscribe();
        }
    }
    static ɵfac = function CdkMonitorFocus_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkMonitorFocus)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkMonitorFocus,
        selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
        outputs: {
            cdkFocusChange: "cdkFocusChange"
        },
        exportAs: ["cdkMonitorFocus"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMonitorFocus, [{
            type: Directive,
            args: [{
                    selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
                    exportAs: "cdkMonitorFocus"
                }]
        }], () => [], {
        cdkFocusChange: [{
                type: Output
            }]
    });
})();
export { INPUT_MODALITY_DETECTOR_OPTIONS, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, InputModalityDetector, FocusMonitorDetectionMode, FOCUS_MONITOR_DEFAULT_OPTIONS, FocusMonitor, CdkMonitorFocus };
