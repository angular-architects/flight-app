import { MAT_INPUT_VALUE_ACCESSOR } from "@nf-internal/chunk-7FTMHMUE";
import { DateAdapter, MAT_DATE_FORMATS } from "@nf-internal/chunk-M74XWT6A";
import { MAT_OPTION_PARENT_COMPONENT, MatOption } from "@nf-internal/chunk-WY3OPLEO";
import "@nf-internal/chunk-LTTGRATQ";
import { MAT_FORM_FIELD } from "@nf-internal/chunk-PK4EDZ3R";
import { MatIconButton } from "@nf-internal/chunk-RASXQWCJ";
import "@nf-internal/chunk-Y3NYZT6H";
import "@nf-internal/chunk-YH4D56O7";
import "@nf-internal/chunk-LDHZVRH4";
import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/timepicker.mjs
import * as i0 from "@angular/core";
import { InjectionToken, inject, Injector, ViewContainerRef, signal, viewChild, viewChildren, input, output, booleanAttribute, computed, effect, ElementRef, afterNextRender, untracked, Component, ChangeDetectionStrategy, ViewEncapsulation, model, Renderer2, Directive, HostAttributeToken, NgModule } from "@angular/core";
import { Directionality } from "@angular/cdk/bidi";
import { createRepositionScrollStrategy, createFlexibleConnectedPositionStrategy, createOverlayRef } from "@angular/cdk/overlay";
import { TemplatePortal } from "@angular/cdk/portal";
import { _getEventTarget, _getFocusedElementPierceShadowDom } from "@angular/cdk/platform";
import { TAB, ESCAPE, hasModifierKey, ENTER, DOWN_ARROW, UP_ARROW } from "@angular/cdk/keycodes";
import { ActiveDescendantKeyManager, _IdGenerator } from "@angular/cdk/a11y";
import { Validators, NG_VALUE_ACCESSOR, NG_VALIDATORS } from "@angular/forms";
import { CdkScrollableModule } from "@angular/cdk/scrolling";
import "rxjs";
import "@angular/cdk/layout";
import "@angular/cdk/coercion";
import "@angular/cdk/private";
import "@angular/common";
import "rxjs/operators";
import "@angular/cdk/observers/private";
var _c0 = ["panelTemplate"];
var _forTrack0 = ($index, $item) => $item.value;
function MatTimepicker_ng_template_0_For_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-option", 3);
        i0.ɵɵlistener("onSelectionChange", function MatTimepicker_ng_template_0_For_2_Template_mat_option_onSelectionChange_0_listener($event) {
            i0.ɵɵrestoreView(_r3);
            const ctx_r1 = i0.ɵɵnextContext(2);
            return i0.ɵɵresetView(ctx_r1._selectValue($event.source));
        });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const option_r4 = ctx.$implicit;
        i0.ɵɵproperty("value", option_r4.value);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(option_r4.label);
    }
}
function MatTimepicker_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 1);
        i0.ɵɵlistener("animationend", function MatTimepicker_ng_template_0_Template_div_animationend_0_listener($event) {
            i0.ɵɵrestoreView(_r1);
            const ctx_r1 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r1._handleAnimationEnd($event));
        });
        i0.ɵɵrepeaterCreate(1, MatTimepicker_ng_template_0_For_2_Template, 2, 2, "mat-option", 2, _forTrack0);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("mat-timepicker-panel-animations-enabled", !ctx_r1._animationsDisabled)("mat-timepicker-panel-exit", !ctx_r1.isOpen());
        i0.ɵɵproperty("id", ctx_r1.panelId);
        i0.ɵɵattribute("aria-label", ctx_r1.ariaLabel() || null)("aria-labelledby", ctx_r1._getAriaLabelledby());
        i0.ɵɵadvance();
        i0.ɵɵrepeater(ctx_r1._timeOptions);
    }
}
var _c1 = [[["", "matTimepickerToggleIcon", ""]]];
var _c2 = ["[matTimepickerToggleIcon]"];
function MatTimepickerToggle_ProjectionFallback_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 1);
        i0.ɵɵelement(1, "path", 2);
        i0.ɵɵelementEnd();
    }
}
var INTERVAL_PATTERN = /^(\d*\.?\d+)\s*(h|hour|hours|m|min|minute|minutes|s|second|seconds)?$/i;
var MAT_TIMEPICKER_CONFIG = new InjectionToken("MAT_TIMEPICKER_CONFIG");
function parseInterval(value) {
    let result;
    if (value === null) {
        return null;
    }
    else if (typeof value === "number") {
        result = value;
    }
    else {
        if (value.trim().length === 0) {
            return null;
        }
        const parsed = value.match(INTERVAL_PATTERN);
        const amount = parsed ? parseFloat(parsed[1]) : null;
        const unit = parsed?.[2]?.toLowerCase() || null;
        if (!parsed || amount === null || isNaN(amount)) {
            return null;
        }
        if (unit === "h" || unit === "hour" || unit === "hours") {
            result = amount * 3600;
        }
        else if (unit === "m" || unit === "min" || unit === "minute" || unit === "minutes") {
            result = amount * 60;
        }
        else {
            result = amount;
        }
    }
    return result;
}
function generateOptions(adapter, formats, min, max, interval) {
    const options = [];
    let current = adapter.compareTime(min, max) < 1 ? min : max;
    while (adapter.sameDate(current, min) && adapter.compareTime(current, max) < 1 && adapter.isValid(current)) {
        options.push({
            value: current,
            label: adapter.format(current, formats.display.timeOptionLabel)
        });
        current = adapter.addSeconds(current, interval);
    }
    return options;
}
function validateAdapter(adapter, formats) {
    function missingAdapterError(provider) {
        return Error(`MatTimepicker: No provider found for ${provider}. You must add one of the following to your app config: provideNativeDateAdapter, provideDateFnsAdapter, provideLuxonDateAdapter, provideMomentDateAdapter, or provide a custom implementation.`);
    }
    if (!adapter) {
        throw missingAdapterError("DateAdapter");
    }
    if (!formats) {
        throw missingAdapterError("MAT_DATE_FORMATS");
    }
    if (formats.display.timeInput === void 0 || formats.display.timeOptionLabel === void 0 || formats.parse.timeInput === void 0) {
        throw new Error("MatTimepicker: Incomplete `MAT_DATE_FORMATS` has been provided. `MAT_DATE_FORMATS` must provide `display.timeInput`, `display.timeOptionLabel` and `parse.timeInput` formats in order to be compatible with MatTimepicker.");
    }
}
var MAT_TIMEPICKER_SCROLL_STRATEGY = new InjectionToken("MAT_TIMEPICKER_SCROLL_STRATEGY", {
    providedIn: "root",
    factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector);
    }
});
var MatTimepicker = class _MatTimepicker {
    _dir = inject(Directionality, {
        optional: true
    });
    _viewContainerRef = inject(ViewContainerRef);
    _injector = inject(Injector);
    _defaultConfig = inject(MAT_TIMEPICKER_CONFIG, {
        optional: true
    });
    _dateAdapter = inject(DateAdapter, {
        optional: true
    });
    _dateFormats = inject(MAT_DATE_FORMATS, {
        optional: true
    });
    _scrollStrategyFactory = inject(MAT_TIMEPICKER_SCROLL_STRATEGY);
    _animationsDisabled = _animationsDisabled();
    _isOpen = signal(false, ...(ngDevMode ? [{
            debugName: "_isOpen"
        }] : []));
    _activeDescendant = signal(null, ...(ngDevMode ? [{
            debugName: "_activeDescendant"
        }] : []));
    _input = signal(null, ...(ngDevMode ? [{
            debugName: "_input"
        }] : []));
    _overlayRef = null;
    _portal = null;
    _optionsCacheKey = null;
    _localeChanges;
    _onOpenRender = null;
    _panelTemplate = viewChild.required("panelTemplate");
    _timeOptions = [];
    _options = viewChildren(MatOption, ...(ngDevMode ? [{
            debugName: "_options"
        }] : []));
    _keyManager = new ActiveDescendantKeyManager(this._options, this._injector).withHomeAndEnd(true).withPageUpDown(true).withVerticalOrientation(true);
    /**
     * Interval between each option in the timepicker. The value can either be an amount of
     * seconds (e.g. 90) or a number with a unit (e.g. 45m). Supported units are `s` for seconds,
     * `m` for minutes or `h` for hours.
     */
    interval = input(parseInterval(this._defaultConfig?.interval || null), ...(ngDevMode ? [{
            debugName: "interval",
            transform: parseInterval
        }] : [{
            transform: parseInterval
        }]));
    /**
     * Array of pre-defined options that the user can select from, as an alternative to using the
     * `interval` input. An error will be thrown if both `options` and `interval` are specified.
     */
    options = input(null, ...(ngDevMode ? [{
            debugName: "options"
        }] : []));
    /** Whether the timepicker is open. */
    isOpen = this._isOpen.asReadonly();
    /** Emits when the user selects a time. */
    selected = output();
    /** Emits when the timepicker is opened. */
    opened = output();
    /** Emits when the timepicker is closed. */
    closed = output();
    /** ID of the active descendant option. */
    activeDescendant = this._activeDescendant.asReadonly();
    /** Unique ID of the timepicker's panel */
    panelId = inject(_IdGenerator).getId("mat-timepicker-panel-");
    /** Whether ripples within the timepicker should be disabled. */
    disableRipple = input(this._defaultConfig?.disableRipple ?? false, ...(ngDevMode ? [{
            debugName: "disableRipple",
            transform: booleanAttribute
        }] : [{
            transform: booleanAttribute
        }]));
    /** ARIA label for the timepicker panel. */
    ariaLabel = input(null, ...(ngDevMode ? [{
            debugName: "ariaLabel",
            alias: "aria-label"
        }] : [{
            alias: "aria-label"
        }]));
    /** ID of the label element for the timepicker panel. */
    ariaLabelledby = input(null, ...(ngDevMode ? [{
            debugName: "ariaLabelledby",
            alias: "aria-labelledby"
        }] : [{
            alias: "aria-labelledby"
        }]));
    /** Whether the timepicker is currently disabled. */
    disabled = computed(() => !!this._input()?.disabled(), ...(ngDevMode ? [{
            debugName: "disabled"
        }] : []));
    constructor() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            validateAdapter(this._dateAdapter, this._dateFormats);
            effect(() => {
                const options = this.options();
                const interval = this.interval();
                if (options !== null && interval !== null) {
                    throw new Error("Cannot specify both the `options` and `interval` inputs at the same time");
                }
                else if (options?.length === 0) {
                    throw new Error("Value of `options` input cannot be an empty array");
                }
            });
        }
        const element = inject(ElementRef);
        element.nativeElement.setAttribute("mat-timepicker-panel-id", this.panelId);
        this._handleLocaleChanges();
        this._handleInputStateChanges();
        this._keyManager.change.subscribe(() => this._activeDescendant.set(this._keyManager.activeItem?.id || null));
    }
    /** Opens the timepicker. */
    open() {
        const input2 = this._input();
        if (!input2) {
            return;
        }
        input2.focus();
        if (this._isOpen()) {
            return;
        }
        this._isOpen.set(true);
        this._generateOptions();
        const overlayRef = this._getOverlayRef();
        overlayRef.updateSize({
            width: input2.getOverlayOrigin().nativeElement.offsetWidth
        });
        this._portal ??= new TemplatePortal(this._panelTemplate(), this._viewContainerRef);
        if (!overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
        }
        this._onOpenRender?.destroy();
        this._onOpenRender = afterNextRender(() => {
            const options = this._options();
            this._syncSelectedState(input2.value(), options, options[0]);
            this._onOpenRender = null;
        }, {
            injector: this._injector
        });
        this.opened.emit();
    }
    /** Closes the timepicker. */
    close() {
        if (this._isOpen()) {
            this._isOpen.set(false);
            this.closed.emit();
            if (this._animationsDisabled) {
                this._overlayRef?.detach();
            }
        }
    }
    /** Registers an input with the timepicker. */
    registerInput(input2) {
        const currentInput = this._input();
        if (currentInput && input2 !== currentInput && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw new Error("MatTimepicker can only be registered with one input at a time");
        }
        this._input.set(input2);
    }
    ngOnDestroy() {
        this._keyManager.destroy();
        this._localeChanges.unsubscribe();
        this._onOpenRender?.destroy();
        this._overlayRef?.dispose();
    }
    /** Selects a specific time value. */
    _selectValue(option) {
        this.close();
        this._keyManager.setActiveItem(option);
        this._options().forEach(current => {
            if (current !== option) {
                current.deselect(false);
            }
        });
        this.selected.emit({
            value: option.value,
            source: this
        });
        this._input()?.focus();
    }
    /** Gets the value of the `aria-labelledby` attribute. */
    _getAriaLabelledby() {
        if (this.ariaLabel()) {
            return null;
        }
        return this.ariaLabelledby() || this._input()?._getLabelId() || null;
    }
    /** Handles animation events coming from the panel. */
    _handleAnimationEnd(event) {
        if (event.animationName === "_mat-timepicker-exit") {
            this._overlayRef?.detach();
        }
    }
    /** Creates an overlay reference for the timepicker panel. */
    _getOverlayRef() {
        if (this._overlayRef) {
            return this._overlayRef;
        }
        const positionStrategy = createFlexibleConnectedPositionStrategy(this._injector, this._input().getOverlayOrigin()).withFlexibleDimensions(false).withPush(false).withTransformOriginOn(".mat-timepicker-panel").withPositions([{
                originX: "start",
                originY: "bottom",
                overlayX: "start",
                overlayY: "top"
            }, {
                originX: "start",
                originY: "top",
                overlayX: "start",
                overlayY: "bottom",
                panelClass: "mat-timepicker-above"
            }]);
        this._overlayRef = createOverlayRef(this._injector, {
            positionStrategy,
            scrollStrategy: this._scrollStrategyFactory(),
            direction: this._dir || "ltr",
            hasBackdrop: false,
            disableAnimations: this._animationsDisabled
        });
        this._overlayRef.detachments().subscribe(() => this.close());
        this._overlayRef.keydownEvents().subscribe(event => this._handleKeydown(event));
        this._overlayRef.outsidePointerEvents().subscribe(event => {
            const target = _getEventTarget(event);
            const origin = this._input()?.getOverlayOrigin().nativeElement;
            if (target && origin && target !== origin && !origin.contains(target)) {
                this.close();
            }
        });
        return this._overlayRef;
    }
    /** Generates the list of options from which the user can select.. */
    _generateOptions() {
        const interval = this.interval() ?? 30 * 60;
        const options = this.options();
        if (options !== null) {
            this._timeOptions = options;
        }
        else {
            const input2 = this._input();
            const adapter = this._dateAdapter;
            const timeFormat = this._dateFormats.display.timeInput;
            const min = input2?.min() || adapter.setTime(adapter.today(), 0, 0, 0);
            const max = input2?.max() || adapter.setTime(adapter.today(), 23, 59, 0);
            const cacheKey = interval + "/" + adapter.format(min, timeFormat) + "/" + adapter.format(max, timeFormat);
            if (cacheKey !== this._optionsCacheKey) {
                this._optionsCacheKey = cacheKey;
                this._timeOptions = generateOptions(adapter, this._dateFormats, min, max, interval);
            }
        }
    }
    /**
     * Synchronizes the internal state of the component based on a specific selected date.
     * @param value Currently selected date.
     * @param options Options rendered out in the timepicker.
     * @param fallback Option to set as active if no option is selected.
     */
    _syncSelectedState(value, options, fallback) {
        let hasSelected = false;
        for (const option of options) {
            if (value && this._dateAdapter.sameTime(option.value, value)) {
                option.select(false);
                scrollOptionIntoView(option, "center");
                untracked(() => this._keyManager.setActiveItem(option));
                hasSelected = true;
            }
            else {
                option.deselect(false);
            }
        }
        if (!hasSelected) {
            if (fallback) {
                untracked(() => this._keyManager.setActiveItem(fallback));
                scrollOptionIntoView(fallback, "center");
            }
            else {
                untracked(() => this._keyManager.setActiveItem(-1));
            }
        }
    }
    /** Handles keyboard events while the overlay is open. */
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        if (keyCode === TAB) {
            this.close();
        }
        else if (keyCode === ESCAPE && !hasModifierKey(event)) {
            event.preventDefault();
            this.close();
        }
        else if (keyCode === ENTER) {
            event.preventDefault();
            if (this._keyManager.activeItem) {
                this._selectValue(this._keyManager.activeItem);
            }
            else {
                this.close();
            }
        }
        else {
            const previousActive = this._keyManager.activeItem;
            this._keyManager.onKeydown(event);
            const currentActive = this._keyManager.activeItem;
            if (currentActive && currentActive !== previousActive) {
                scrollOptionIntoView(currentActive, "nearest");
            }
        }
    }
    /** Sets up the logic that updates the timepicker when the locale changes. */
    _handleLocaleChanges() {
        this._localeChanges = this._dateAdapter.localeChanges.subscribe(() => {
            this._optionsCacheKey = null;
            if (this.isOpen()) {
                this._generateOptions();
            }
        });
    }
    /**
     * Sets up the logic that updates the timepicker when the state of the connected input changes.
     */
    _handleInputStateChanges() {
        effect(() => {
            const input2 = this._input();
            const options = this._options();
            if (this._isOpen() && input2) {
                this._syncSelectedState(input2.value(), options, null);
            }
        });
    }
    static ɵfac = function MatTimepicker_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatTimepicker)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatTimepicker,
        selectors: [["mat-timepicker"]],
        viewQuery: function MatTimepicker_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuerySignal(ctx._panelTemplate, _c0, 5);
                i0.ɵɵviewQuerySignal(ctx._options, MatOption, 5);
            }
            if (rf & 2) {
                i0.ɵɵqueryAdvance(2);
            }
        },
        inputs: {
            interval: [1, "interval"],
            options: [1, "options"],
            disableRipple: [1, "disableRipple"],
            ariaLabel: [1, "aria-label", "ariaLabel"],
            ariaLabelledby: [1, "aria-labelledby", "ariaLabelledby"]
        },
        outputs: {
            selected: "selected",
            opened: "opened",
            closed: "closed"
        },
        exportAs: ["matTimepicker"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: MAT_OPTION_PARENT_COMPONENT,
                    useExisting: _MatTimepicker
                }])],
        decls: 2,
        vars: 0,
        consts: [["panelTemplate", ""], ["role", "listbox", 1, "mat-timepicker-panel", 3, "animationend", "id"], [3, "value"], [3, "onSelectionChange", "value"]],
        template: function MatTimepicker_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MatTimepicker_ng_template_0_Template, 3, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            }
        },
        dependencies: [MatOption],
        styles: ["@keyframes _mat-timepicker-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-timepicker-exit{from{opacity:1}to{opacity:0}}mat-timepicker{display:none}.mat-timepicker-panel{width:100%;max-height:256px;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-bottom-left-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-timepicker-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-timepicker-container-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){.mat-timepicker-panel{outline:solid 1px}}.mat-timepicker-above .mat-timepicker-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small))}.mat-timepicker-panel-animations-enabled{animation:_mat-timepicker-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-timepicker-panel-animations-enabled.mat-timepicker-panel-exit{animation:_mat-timepicker-exit 100ms linear}.mat-timepicker-input[readonly]{cursor:pointer}@media(forced-colors: active){.mat-timepicker-toggle-default-icon{color:CanvasText}}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTimepicker, [{
            type: Component,
            args: [{
                    selector: "mat-timepicker",
                    exportAs: "matTimepicker",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [MatOption],
                    providers: [{
                            provide: MAT_OPTION_PARENT_COMPONENT,
                            useExisting: MatTimepicker
                        }],
                    template: '<ng-template #panelTemplate>\n  <div\n    role="listbox"\n    class="mat-timepicker-panel"\n    [class.mat-timepicker-panel-animations-enabled]="!_animationsDisabled"\n    [class.mat-timepicker-panel-exit]="!isOpen()"\n    [attr.aria-label]="ariaLabel() || null"\n    [attr.aria-labelledby]="_getAriaLabelledby()"\n    [id]="panelId"\n    (animationend)="_handleAnimationEnd($event)">\n    @for (option of _timeOptions; track option.value) {\n      <mat-option\n        [value]="option.value"\n        (onSelectionChange)="_selectValue($event.source)">{{option.label}}</mat-option>\n    }\n  </div>\n</ng-template>\n',
                    styles: ["@keyframes _mat-timepicker-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-timepicker-exit{from{opacity:1}to{opacity:0}}mat-timepicker{display:none}.mat-timepicker-panel{width:100%;max-height:256px;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:relative;border-bottom-left-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-timepicker-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-timepicker-container-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){.mat-timepicker-panel{outline:solid 1px}}.mat-timepicker-above .mat-timepicker-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-timepicker-container-shape, var(--mat-sys-corner-extra-small))}.mat-timepicker-panel-animations-enabled{animation:_mat-timepicker-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-timepicker-panel-animations-enabled.mat-timepicker-panel-exit{animation:_mat-timepicker-exit 100ms linear}.mat-timepicker-input[readonly]{cursor:pointer}@media(forced-colors: active){.mat-timepicker-toggle-default-icon{color:CanvasText}}\n"]
                }]
        }], () => [], null);
})();
function scrollOptionIntoView(option, position) {
    option._getHostElement().scrollIntoView({
        block: position,
        inline: position
    });
}
var MatTimepickerInput = class _MatTimepickerInput {
    _elementRef = inject(ElementRef);
    _dateAdapter = inject(DateAdapter, {
        optional: true
    });
    _dateFormats = inject(MAT_DATE_FORMATS, {
        optional: true
    });
    _formField = inject(MAT_FORM_FIELD, {
        optional: true
    });
    _onChange;
    _onTouched;
    _validatorOnChange;
    _cleanupClick;
    _accessorDisabled = signal(false, ...(ngDevMode ? [{
            debugName: "_accessorDisabled"
        }] : []));
    _localeSubscription;
    _timepickerSubscription;
    _validator;
    _lastValueValid = true;
    _lastValidDate = null;
    /** Value of the `aria-activedescendant` attribute. */
    _ariaActiveDescendant = computed(() => {
        const timepicker = this.timepicker();
        const isOpen = timepicker.isOpen();
        const activeDescendant = timepicker.activeDescendant();
        return isOpen && activeDescendant ? activeDescendant : null;
    }, ...(ngDevMode ? [{
            debugName: "_ariaActiveDescendant"
        }] : []));
    /** Value of the `aria-expanded` attribute. */
    _ariaExpanded = computed(() => this.timepicker().isOpen() + "", ...(ngDevMode ? [{
            debugName: "_ariaExpanded"
        }] : []));
    /** Value of the `aria-controls` attribute. */
    _ariaControls = computed(() => {
        const timepicker = this.timepicker();
        return timepicker.isOpen() ? timepicker.panelId : null;
    }, ...(ngDevMode ? [{
            debugName: "_ariaControls"
        }] : []));
    /** Current value of the input. */
    value = model(null, ...(ngDevMode ? [{
            debugName: "value"
        }] : []));
    /** Timepicker that the input is associated with. */
    timepicker = input.required(...(ngDevMode ? [{
            debugName: "timepicker",
            alias: "matTimepicker"
        }] : [{
            alias: "matTimepicker"
        }]));
    /**
     * Minimum time that can be selected or typed in. Can be either
     * a date object (only time will be used) or a valid time string.
     */
    min = input(null, ...(ngDevMode ? [{
            debugName: "min",
            alias: "matTimepickerMin",
            transform: value => this._transformDateInput(value)
        }] : [{
            alias: "matTimepickerMin",
            transform: value => this._transformDateInput(value)
        }]));
    /**
     * Maximum time that can be selected or typed in. Can be either
     * a date object (only time will be used) or a valid time string.
     */
    max = input(null, ...(ngDevMode ? [{
            debugName: "max",
            alias: "matTimepickerMax",
            transform: value => this._transformDateInput(value)
        }] : [{
            alias: "matTimepickerMax",
            transform: value => this._transformDateInput(value)
        }]));
    /**
     * Whether to open the timepicker overlay when clicking on the input. Enabled by default.
     * Note that when disabling this option, you'll have to provide your own logic for opening
     * the overlay.
     */
    openOnClick = input(true, ...(ngDevMode ? [{
            debugName: "openOnClick",
            alias: "matTimepickerOpenOnClick",
            transform: booleanAttribute
        }] : [{
            alias: "matTimepickerOpenOnClick",
            transform: booleanAttribute
        }]));
    /** Whether the input is disabled. */
    disabled = computed(() => this.disabledInput() || this._accessorDisabled(), ...(ngDevMode ? [{
            debugName: "disabled"
        }] : []));
    /**
     * Whether the input should be disabled through the template.
     * @docs-private
     */
    disabledInput = input(false, ...(ngDevMode ? [{
            debugName: "disabledInput",
            transform: booleanAttribute,
            alias: "disabled"
        }] : [{
            transform: booleanAttribute,
            alias: "disabled"
        }]));
    constructor() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            validateAdapter(this._dateAdapter, this._dateFormats);
        }
        const renderer = inject(Renderer2);
        this._validator = this._getValidator();
        this._respondToValueChanges();
        this._respondToMinMaxChanges();
        this._registerTimepicker();
        this._localeSubscription = this._dateAdapter.localeChanges.subscribe(() => {
            if (!this._hasFocus()) {
                this._formatValue(this.value());
            }
        });
        this._cleanupClick = renderer.listen(this.getOverlayOrigin().nativeElement, "click", this._handleClick);
    }
    /**
     * Implemented as a part of `ControlValueAccessor`.
     * @docs-private
     */
    writeValue(value) {
        const deserialized = this._dateAdapter.deserialize(value);
        this.value.set(this._dateAdapter.getValidDateOrNull(deserialized));
    }
    /**
     * Implemented as a part of `ControlValueAccessor`.
     * @docs-private
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Implemented as a part of `ControlValueAccessor`.
     * @docs-private
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Implemented as a part of `ControlValueAccessor`.
     * @docs-private
     */
    setDisabledState(isDisabled) {
        this._accessorDisabled.set(isDisabled);
    }
    /**
     * Implemented as a part of `Validator`.
     * @docs-private
     */
    validate(control) {
        return this._validator(control);
    }
    /**
     * Implemented as a part of `Validator`.
     * @docs-private
     */
    registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
    }
    /** Gets the element to which the timepicker popup should be attached. */
    getOverlayOrigin() {
        return this._formField?.getConnectedOverlayOrigin() || this._elementRef;
    }
    /** Focuses the input. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    ngOnDestroy() {
        this._cleanupClick();
        this._timepickerSubscription?.unsubscribe();
        this._localeSubscription.unsubscribe();
    }
    /** Gets the ID of the input's label. */
    _getLabelId() {
        return this._formField?.getLabelId() || null;
    }
    /** Handles clicks on the input or the containing form field. */
    _handleClick = () => {
        if (!this.disabled() && this.openOnClick()) {
            this.timepicker().open();
        }
    };
    /** Handles the `input` event. */
    _handleInput(event) {
        const value = event.target.value;
        const currentValue = this.value();
        const date = this._dateAdapter.parseTime(value, this._dateFormats.parse.timeInput);
        const hasChanged = !this._dateAdapter.sameTime(date, currentValue);
        if (!date || hasChanged || !!(value && !currentValue)) {
            this._assignUserSelection(date, true);
        }
        else {
            this._validatorOnChange?.();
        }
    }
    /** Handles the `blur` event. */
    _handleBlur() {
        const value = this.value();
        if (value && this._isValid(value)) {
            this._formatValue(value);
        }
        if (!this.timepicker().isOpen()) {
            this._onTouched?.();
        }
    }
    /** Handles the `keydown` event. */
    _handleKeydown(event) {
        if (this.timepicker().isOpen() || this.disabled()) {
            return;
        }
        if (event.keyCode === ESCAPE && !hasModifierKey(event) && this.value() !== null) {
            event.preventDefault();
            this.value.set(null);
            this._formatValue(null);
        }
        else if (event.keyCode === DOWN_ARROW || event.keyCode === UP_ARROW) {
            event.preventDefault();
            this.timepicker().open();
        }
    }
    /** Sets up the code that watches for changes in the value and adjusts the input. */
    _respondToValueChanges() {
        effect(() => {
            const value = this._dateAdapter.deserialize(this.value());
            const wasValid = this._lastValueValid;
            this._lastValueValid = this._isValid(value);
            if (!this._hasFocus()) {
                this._formatValue(value);
            }
            if (value && this._lastValueValid) {
                this._lastValidDate = value;
            }
            if (wasValid !== this._lastValueValid) {
                this._validatorOnChange?.();
            }
        });
    }
    /** Sets up the logic that registers the input with the timepicker. */
    _registerTimepicker() {
        effect(() => {
            const timepicker = this.timepicker();
            timepicker.registerInput(this);
            timepicker.closed.subscribe(() => this._onTouched?.());
            timepicker.selected.subscribe(({ value }) => {
                if (!this._dateAdapter.sameTime(value, this.value())) {
                    this._assignUserSelection(value, true);
                    this._formatValue(value);
                }
            });
        });
    }
    /** Sets up the logic that adjusts the input if the min/max changes. */
    _respondToMinMaxChanges() {
        effect(() => {
            this.min();
            this.max();
            this._validatorOnChange?.();
        });
    }
    /**
     * Assigns a value set by the user to the input's model.
     * @param selection Time selected by the user that should be assigned.
     * @param propagateToAccessor Whether the value should be propagated to the ControlValueAccessor.
     */
    _assignUserSelection(selection, propagateToAccessor) {
        if (selection == null || !this._isValid(selection)) {
            this.value.set(selection);
        }
        else {
            const adapter = this._dateAdapter;
            const target = adapter.getValidDateOrNull(this._lastValidDate || this.value());
            const hours = adapter.getHours(selection);
            const minutes = adapter.getMinutes(selection);
            const seconds = adapter.getSeconds(selection);
            this.value.set(target ? adapter.setTime(target, hours, minutes, seconds) : selection);
        }
        if (propagateToAccessor) {
            this._onChange?.(this.value());
        }
    }
    /** Formats the current value and assigns it to the input. */
    _formatValue(value) {
        value = this._dateAdapter.getValidDateOrNull(value);
        this._elementRef.nativeElement.value = value == null ? "" : this._dateAdapter.format(value, this._dateFormats.display.timeInput);
    }
    /** Checks whether a value is valid. */
    _isValid(value) {
        return !value || this._dateAdapter.isValid(value);
    }
    /** Transforms an arbitrary value into a value that can be assigned to a date-based input. */
    _transformDateInput(value) {
        const date = typeof value === "string" ? this._dateAdapter.parseTime(value, this._dateFormats.parse.timeInput) : this._dateAdapter.deserialize(value);
        return date && this._dateAdapter.isValid(date) ? date : null;
    }
    /** Whether the input is currently focused. */
    _hasFocus() {
        return _getFocusedElementPierceShadowDom() === this._elementRef.nativeElement;
    }
    /** Gets a function that can be used to validate the input. */
    _getValidator() {
        return Validators.compose([() => this._lastValueValid ? null : {
                "matTimepickerParse": {
                    "text": this._elementRef.nativeElement.value
                }
            }, control => {
                const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
                const min = this.min();
                return !min || !controlValue || this._dateAdapter.compareTime(min, controlValue) <= 0 ? null : {
                    "matTimepickerMin": {
                        "min": min,
                        "actual": controlValue
                    }
                };
            }, control => {
                const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
                const max = this.max();
                return !max || !controlValue || this._dateAdapter.compareTime(max, controlValue) >= 0 ? null : {
                    "matTimepickerMax": {
                        "max": max,
                        "actual": controlValue
                    }
                };
            }]);
    }
    static ɵfac = function MatTimepickerInput_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatTimepickerInput)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatTimepickerInput,
        selectors: [["input", "matTimepicker", ""]],
        hostAttrs: ["role", "combobox", "type", "text", "aria-haspopup", "listbox", 1, "mat-timepicker-input"],
        hostVars: 5,
        hostBindings: function MatTimepickerInput_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("blur", function MatTimepickerInput_blur_HostBindingHandler() {
                    return ctx._handleBlur();
                })("input", function MatTimepickerInput_input_HostBindingHandler($event) {
                    return ctx._handleInput($event);
                })("keydown", function MatTimepickerInput_keydown_HostBindingHandler($event) {
                    return ctx._handleKeydown($event);
                });
            }
            if (rf & 2) {
                let tmp_4_0;
                i0.ɵɵdomProperty("disabled", ctx.disabled());
                i0.ɵɵattribute("aria-activedescendant", ctx._ariaActiveDescendant())("aria-expanded", ctx._ariaExpanded())("aria-controls", ctx._ariaControls())("mat-timepicker-id", (tmp_4_0 = ctx.timepicker()) == null ? null : tmp_4_0.panelId);
            }
        },
        inputs: {
            value: [1, "value"],
            timepicker: [1, "matTimepicker", "timepicker"],
            min: [1, "matTimepickerMin", "min"],
            max: [1, "matTimepickerMax", "max"],
            openOnClick: [1, "matTimepickerOpenOnClick", "openOnClick"],
            disabledInput: [1, "disabled", "disabledInput"]
        },
        outputs: {
            value: "valueChange"
        },
        exportAs: ["matTimepickerInput"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: _MatTimepickerInput,
                    multi: true
                }, {
                    provide: NG_VALIDATORS,
                    useExisting: _MatTimepickerInput,
                    multi: true
                }, {
                    provide: MAT_INPUT_VALUE_ACCESSOR,
                    useExisting: _MatTimepickerInput
                }])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTimepickerInput, [{
            type: Directive,
            args: [{
                    selector: "input[matTimepicker]",
                    exportAs: "matTimepickerInput",
                    host: {
                        "class": "mat-timepicker-input",
                        "role": "combobox",
                        "type": "text",
                        "aria-haspopup": "listbox",
                        "[attr.aria-activedescendant]": "_ariaActiveDescendant()",
                        "[attr.aria-expanded]": "_ariaExpanded()",
                        "[attr.aria-controls]": "_ariaControls()",
                        "[attr.mat-timepicker-id]": "timepicker()?.panelId",
                        "[disabled]": "disabled()",
                        "(blur)": "_handleBlur()",
                        "(input)": "_handleInput($event)",
                        "(keydown)": "_handleKeydown($event)"
                    },
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: MatTimepickerInput,
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: MatTimepickerInput,
                            multi: true
                        }, {
                            provide: MAT_INPUT_VALUE_ACCESSOR,
                            useExisting: MatTimepickerInput
                        }]
                }]
        }], () => [], null);
})();
var MatTimepickerToggle = class _MatTimepickerToggle {
    _defaultConfig = inject(MAT_TIMEPICKER_CONFIG, {
        optional: true
    });
    _defaultTabIndex = (() => {
        const value = inject(new HostAttributeToken("tabindex"), {
            optional: true
        });
        const parsed = Number(value);
        return isNaN(parsed) ? null : parsed;
    })();
    _isDisabled = computed(() => {
        const timepicker = this.timepicker();
        return this.disabled() || timepicker.disabled();
    }, ...(ngDevMode ? [{
            debugName: "_isDisabled"
        }] : []));
    /** Timepicker instance that the button will toggle. */
    timepicker = input.required(...(ngDevMode ? [{
            debugName: "timepicker",
            alias: "for"
        }] : [{
            alias: "for"
        }]));
    /** Screen-reader label for the button. */
    ariaLabel = input(void 0, ...(ngDevMode ? [{
            debugName: "ariaLabel",
            alias: "aria-label"
        }] : [{
            alias: "aria-label"
        }]));
    /** Screen-reader labelled by id for the button. */
    ariaLabelledby = input(void 0, ...(ngDevMode ? [{
            debugName: "ariaLabelledby",
            alias: "aria-labelledby"
        }] : [{
            alias: "aria-labelledby"
        }]));
    /** Default aria-label for the toggle if none is provided. */
    _defaultAriaLabel = "Open timepicker options";
    /** Whether the toggle button is disabled. */
    disabled = input(false, ...(ngDevMode ? [{
            debugName: "disabled",
            transform: booleanAttribute,
            alias: "disabled"
        }] : [{
            transform: booleanAttribute,
            alias: "disabled"
        }]));
    /** Tabindex for the toggle. */
    tabIndex = input(this._defaultTabIndex, ...(ngDevMode ? [{
            debugName: "tabIndex"
        }] : []));
    /** Whether ripples on the toggle should be disabled. */
    disableRipple = input(this._defaultConfig?.disableRipple ?? false, ...(ngDevMode ? [{
            debugName: "disableRipple",
            transform: booleanAttribute
        }] : [{
            transform: booleanAttribute
        }]));
    /** Opens the connected timepicker. */
    _open(event) {
        if (this.timepicker() && !this._isDisabled()) {
            this.timepicker().open();
            event.stopPropagation();
        }
    }
    /**
     * Checks for ariaLabelledby and if empty uses custom
     * aria-label or defaultAriaLabel if neither is provided.
     */
    getAriaLabel() {
        return this.ariaLabelledby() ? null : this.ariaLabel() || this._defaultAriaLabel;
    }
    static ɵfac = function MatTimepickerToggle_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatTimepickerToggle)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatTimepickerToggle,
        selectors: [["mat-timepicker-toggle"]],
        hostAttrs: [1, "mat-timepicker-toggle"],
        hostVars: 1,
        hostBindings: function MatTimepickerToggle_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function MatTimepickerToggle_click_HostBindingHandler($event) {
                    return ctx._open($event);
                });
            }
            if (rf & 2) {
                i0.ɵɵattribute("tabindex", null);
            }
        },
        inputs: {
            timepicker: [1, "for", "timepicker"],
            ariaLabel: [1, "aria-label", "ariaLabel"],
            ariaLabelledby: [1, "aria-labelledby", "ariaLabelledby"],
            disabled: [1, "disabled"],
            tabIndex: [1, "tabIndex"],
            disableRipple: [1, "disableRipple"]
        },
        exportAs: ["matTimepickerToggle"],
        ngContentSelectors: _c2,
        decls: 3,
        vars: 6,
        consts: [["matIconButton", "", "type", "button", "aria-haspopup", "listbox", 3, "tabIndex", "disabled", "disableRipple"], ["height", "24px", "width", "24px", "viewBox", "0 -960 960 960", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-timepicker-toggle-default-icon"], ["d", "m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"]],
        template: function MatTimepickerToggle_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c1);
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵprojection(1, 0, null, MatTimepickerToggle_ProjectionFallback_1_Template, 2, 0);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("tabIndex", ctx._isDisabled() ? -1 : ctx.tabIndex())("disabled", ctx._isDisabled())("disableRipple", ctx.disableRipple());
                i0.ɵɵattribute("aria-label", ctx.getAriaLabel())("aria-labelledby", ctx.ariaLabelledby())("aria-expanded", ctx.timepicker().isOpen());
            }
        },
        dependencies: [MatIconButton],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTimepickerToggle, [{
            type: Component,
            args: [{
                    selector: "mat-timepicker-toggle",
                    host: {
                        "class": "mat-timepicker-toggle",
                        "[attr.tabindex]": "null",
                        // Bind the `click` on the host, rather than the inner `button`, so that we can call
                        // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
                        // it so that the input doesn't get focused automatically by the form field (See #21836).
                        "(click)": "_open($event)"
                    },
                    exportAs: "matTimepickerToggle",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [MatIconButton],
                    template: '<button\n  matIconButton\n  type="button"\n  aria-haspopup="listbox"\n  [attr.aria-label]="getAriaLabel()"\n  [attr.aria-labelledby]="ariaLabelledby()"\n  [attr.aria-expanded]="timepicker().isOpen()"\n  [tabIndex]="_isDisabled() ? -1 : tabIndex()"\n  [disabled]="_isDisabled()"\n  [disableRipple]="disableRipple()">\n\n  <ng-content select="[matTimepickerToggleIcon]">\n    <svg\n      class="mat-timepicker-toggle-default-icon"\n      height="24px"\n      width="24px"\n      viewBox="0 -960 960 960"\n      fill="currentColor"\n      focusable="false"\n      aria-hidden="true">\n      <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>\n    </svg>\n  </ng-content>\n</button>\n'
                }]
        }], null, null);
})();
var MatTimepickerModule = class _MatTimepickerModule {
    static ɵfac = function MatTimepickerModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatTimepickerModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatTimepickerModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [MatTimepicker, MatTimepickerToggle, CdkScrollableModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTimepickerModule, [{
            type: NgModule,
            args: [{
                    imports: [MatTimepicker, MatTimepickerInput, MatTimepickerToggle],
                    exports: [CdkScrollableModule, MatTimepicker, MatTimepickerInput, MatTimepickerToggle]
                }]
        }], null, null);
})();
export { MAT_TIMEPICKER_CONFIG, MAT_TIMEPICKER_SCROLL_STRATEGY, MatTimepicker, MatTimepickerInput, MatTimepickerModule, MatTimepickerToggle };
