import { _CdkPrivateStyleLoader } from "@nf-internal/chunk-HRAF4QVP";
import { Platform } from "@nf-internal/chunk-26DDZNO4";
import { coerceElement, coerceNumberProperty } from "@nf-internal/chunk-XODDVZAQ";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/text-field.mjs
import * as i0 from "@angular/core";
import { Component, ChangeDetectionStrategy, ViewEncapsulation, inject, NgZone, RendererFactory2, Injectable, ElementRef, EventEmitter, Directive, Output, Renderer2, DOCUMENT, booleanAttribute, Input, NgModule } from "@angular/core";
import { EMPTY, Subject } from "rxjs";
import { auditTime } from "rxjs/operators";
import "@angular/common";
var _CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
    static ɵfac = function _CdkTextFieldStyleLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || __CdkTextFieldStyleLoader)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: __CdkTextFieldStyleLoader,
        selectors: [["ng-component"]],
        hostAttrs: ["cdk-text-field-style-loader", ""],
        decls: 0,
        vars: 0,
        template: function _CdkTextFieldStyleLoader_Template(rf, ctx) { },
        styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(_CdkTextFieldStyleLoader, [{
            type: Component,
            args: [{
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        "cdk-text-field-style-loader": ""
                    },
                    styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"]
                }]
        }], null, null);
})();
var listenerOptions = {
    passive: true
};
var AutofillMonitor = class _AutofillMonitor {
    _platform = inject(Platform);
    _ngZone = inject(NgZone);
    _renderer = inject(RendererFactory2).createRenderer(null, null);
    _styleLoader = inject(_CdkPrivateStyleLoader);
    _monitoredElements = /* @__PURE__ */ new Map();
    constructor() { }
    monitor(elementOrRef) {
        if (!this._platform.isBrowser) {
            return EMPTY;
        }
        this._styleLoader.load(_CdkTextFieldStyleLoader);
        const element = coerceElement(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
            return info.subject;
        }
        const subject = new Subject();
        const cssClass = "cdk-text-field-autofilled";
        const listener = event => {
            if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);
                this._ngZone.run(() => subject.next({
                    target: event.target,
                    isAutofilled: true
                }));
            }
            else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);
                this._ngZone.run(() => subject.next({
                    target: event.target,
                    isAutofilled: false
                }));
            }
        };
        const unlisten = this._ngZone.runOutsideAngular(() => {
            element.classList.add("cdk-text-field-autofill-monitored");
            return this._renderer.listen(element, "animationstart", listener, listenerOptions);
        });
        this._monitoredElements.set(element, {
            subject,
            unlisten
        });
        return subject;
    }
    stopMonitoring(elementOrRef) {
        const element = coerceElement(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove("cdk-text-field-autofill-monitored");
            element.classList.remove("cdk-text-field-autofilled");
            this._monitoredElements.delete(element);
        }
    }
    ngOnDestroy() {
        this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
    }
    static ɵfac = function AutofillMonitor_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _AutofillMonitor)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _AutofillMonitor,
        factory: _AutofillMonitor.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutofillMonitor, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var CdkAutofill = class _CdkAutofill {
    _elementRef = inject(ElementRef);
    _autofillMonitor = inject(AutofillMonitor);
    /** Emits when the autofill state of the element changes. */
    cdkAutofill = new EventEmitter();
    constructor() { }
    ngOnInit() {
        this._autofillMonitor.monitor(this._elementRef).subscribe(event => this.cdkAutofill.emit(event));
    }
    ngOnDestroy() {
        this._autofillMonitor.stopMonitoring(this._elementRef);
    }
    static ɵfac = function CdkAutofill_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkAutofill)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkAutofill,
        selectors: [["", "cdkAutofill", ""]],
        outputs: {
            cdkAutofill: "cdkAutofill"
        }
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkAutofill, [{
            type: Directive,
            args: [{
                    selector: "[cdkAutofill]"
                }]
        }], () => [], {
        cdkAutofill: [{
                type: Output
            }]
    });
})();
var CdkTextareaAutosize = class _CdkTextareaAutosize {
    _elementRef = inject(ElementRef);
    _platform = inject(Platform);
    _ngZone = inject(NgZone);
    _renderer = inject(Renderer2);
    _resizeEvents = new Subject();
    /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
    _previousValue;
    _initialHeight;
    _destroyed = new Subject();
    _listenerCleanups;
    _minRows;
    _maxRows;
    _enabled = true;
    /**
     * Value of minRows as of last resize. If the minRows has decreased, the
     * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
     * does not have the same problem because it does not affect the textarea's scrollHeight.
     */
    _previousMinRows = -1;
    _textareaElement;
    /** Minimum amount of rows in the textarea. */
    get minRows() {
        return this._minRows;
    }
    set minRows(value) {
        this._minRows = coerceNumberProperty(value);
        this._setMinHeight();
    }
    /** Maximum amount of rows in the textarea. */
    get maxRows() {
        return this._maxRows;
    }
    set maxRows(value) {
        this._maxRows = coerceNumberProperty(value);
        this._setMaxHeight();
    }
    /** Whether autosizing is enabled or not */
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        if (this._enabled !== value) {
            (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
        }
    }
    get placeholder() {
        return this._textareaElement.placeholder;
    }
    set placeholder(value) {
        this._cachedPlaceholderHeight = void 0;
        if (value) {
            this._textareaElement.setAttribute("placeholder", value);
        }
        else {
            this._textareaElement.removeAttribute("placeholder");
        }
        this._cacheTextareaPlaceholderHeight();
    }
    /** Cached height of a textarea with a single row. */
    _cachedLineHeight;
    /** Cached height of a textarea with only the placeholder. */
    _cachedPlaceholderHeight;
    /** Cached scroll top of a textarea */
    _cachedScrollTop;
    /** Used to reference correct document/window */
    _document = inject(DOCUMENT);
    _hasFocus;
    _isViewInited = false;
    constructor() {
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_CdkTextFieldStyleLoader);
        this._textareaElement = this._elementRef.nativeElement;
    }
    /** Sets the minimum height of the textarea as determined by minRows. */
    _setMinHeight() {
        const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
        if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
        }
    }
    /** Sets the maximum height of the textarea as determined by maxRows. */
    _setMaxHeight() {
        const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
        if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
        }
    }
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();
            this._ngZone.runOutsideAngular(() => {
                this._listenerCleanups = [this._renderer.listen("window", "resize", () => this._resizeEvents.next()), this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent), this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)];
                this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
                    this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
                    this.resizeToFitContent(true);
                });
            });
            this._isViewInited = true;
            this.resizeToFitContent(true);
        }
    }
    ngOnDestroy() {
        this._listenerCleanups?.forEach(cleanup => cleanup());
        this._resizeEvents.complete();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    _cacheTextareaLineHeight() {
        if (this._cachedLineHeight) {
            return;
        }
        const textareaClone = this._textareaElement.cloneNode(false);
        const cloneStyles = textareaClone.style;
        textareaClone.rows = 1;
        cloneStyles.position = "absolute";
        cloneStyles.visibility = "hidden";
        cloneStyles.border = "none";
        cloneStyles.padding = "0";
        cloneStyles.height = "";
        cloneStyles.minHeight = "";
        cloneStyles.maxHeight = "";
        cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
        cloneStyles.overflow = "hidden";
        this._textareaElement.parentNode.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight;
        textareaClone.remove();
        this._setMinHeight();
        this._setMaxHeight();
    }
    _measureScrollHeight() {
        const element = this._textareaElement;
        const previousMargin = element.style.marginBottom || "";
        const isFirefox = this._platform.FIREFOX;
        const needsMarginFiller = isFirefox && this._hasFocus;
        const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
        if (needsMarginFiller) {
            element.style.marginBottom = `${element.clientHeight}px`;
        }
        element.classList.add(measuringClass);
        const scrollHeight = element.scrollHeight - 4;
        element.classList.remove(measuringClass);
        if (needsMarginFiller) {
            element.style.marginBottom = previousMargin;
        }
        return scrollHeight;
    }
    _cacheTextareaPlaceholderHeight() {
        if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
            return;
        }
        if (!this.placeholder) {
            this._cachedPlaceholderHeight = 0;
            return;
        }
        const value = this._textareaElement.value;
        this._textareaElement.value = this._textareaElement.placeholder;
        this._cachedPlaceholderHeight = this._measureScrollHeight();
        this._textareaElement.value = value;
    }
    /** Handles `focus` and `blur` events. */
    _handleFocusEvent = event => {
        this._hasFocus = event.type === "focus";
    };
    ngDoCheck() {
        if (this._platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */
    resizeToFitContent(force = false) {
        if (!this._enabled) {
            return;
        }
        this._cacheTextareaLineHeight();
        this._cacheTextareaPlaceholderHeight();
        this._cachedScrollTop = this._textareaElement.scrollTop;
        if (!this._cachedLineHeight) {
            return;
        }
        const textarea = this._elementRef.nativeElement;
        const value = textarea.value;
        if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
            return;
        }
        const scrollHeight = this._measureScrollHeight();
        const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
        textarea.style.height = `${height}px`;
        this._ngZone.runOutsideAngular(() => {
            if (typeof requestAnimationFrame !== "undefined") {
                requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
            }
            else {
                setTimeout(() => this._scrollToCaretPosition(textarea));
            }
        });
        this._previousValue = value;
        this._previousMinRows = this._minRows;
    }
    /**
     * Resets the textarea to its original size
     */
    reset() {
        if (this._initialHeight !== void 0) {
            this._textareaElement.style.height = this._initialHeight;
        }
    }
    _noopInputHandler() { }
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */
    _scrollToCaretPosition(textarea) {
        const { selectionStart, selectionEnd } = textarea;
        if (!this._destroyed.isStopped && this._hasFocus) {
            textarea.setSelectionRange(selectionStart, selectionEnd);
            textarea.scrollTop = this._cachedScrollTop;
        }
    }
    static ɵfac = function CdkTextareaAutosize_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTextareaAutosize)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkTextareaAutosize,
        selectors: [["textarea", "cdkTextareaAutosize", ""]],
        hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
        hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("input", function CdkTextareaAutosize_input_HostBindingHandler() {
                    return ctx._noopInputHandler();
                });
            }
        },
        inputs: {
            minRows: [0, "cdkAutosizeMinRows", "minRows"],
            maxRows: [0, "cdkAutosizeMaxRows", "maxRows"],
            enabled: [2, "cdkTextareaAutosize", "enabled", booleanAttribute],
            placeholder: "placeholder"
        },
        exportAs: ["cdkTextareaAutosize"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTextareaAutosize, [{
            type: Directive,
            args: [{
                    selector: "textarea[cdkTextareaAutosize]",
                    exportAs: "cdkTextareaAutosize",
                    host: {
                        "class": "cdk-textarea-autosize",
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        "rows": "1",
                        "(input)": "_noopInputHandler()"
                    }
                }]
        }], () => [], {
        minRows: [{
                type: Input,
                args: ["cdkAutosizeMinRows"]
            }],
        maxRows: [{
                type: Input,
                args: ["cdkAutosizeMaxRows"]
            }],
        enabled: [{
                type: Input,
                args: [{
                        alias: "cdkTextareaAutosize",
                        transform: booleanAttribute
                    }]
            }],
        placeholder: [{
                type: Input
            }]
    });
})();
var TextFieldModule = class _TextFieldModule {
    static ɵfac = function TextFieldModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _TextFieldModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _TextFieldModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({});
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFieldModule, [{
            type: NgModule,
            args: [{
                    imports: [CdkAutofill, CdkTextareaAutosize],
                    exports: [CdkAutofill, CdkTextareaAutosize]
                }]
        }], null, null);
})();
export { AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule };
