import { FocusKeyManager } from "@nf-internal/chunk-VAERC7YI";
import "@nf-internal/chunk-7WHZXMUH";
import "@nf-internal/chunk-TNW5MULF";
import { _getFocusedElementPierceShadowDom } from "@nf-internal/chunk-KPYFKLQQ";
import { hasModifierKey } from "@nf-internal/chunk-JD5JPQAG";
import { ENTER, SPACE } from "@nf-internal/chunk-IANTZR4E";
import { _IdGenerator } from "@nf-internal/chunk-F3H34SIQ";
import { BidiModule } from "@nf-internal/chunk-XABR7MXZ";
import { Directionality } from "@nf-internal/chunk-GSHCXC35";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/stepper.mjs
import * as i0 from "@angular/core";
import { inject, ElementRef, Directive, TemplateRef, InjectionToken, signal, EventEmitter, computed, booleanAttribute, Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChild, ContentChildren, ViewChild, Input, Output, ChangeDetectorRef, QueryList, numberAttribute, NgModule } from "@angular/core";
import { ControlContainer } from "@angular/forms";
import { Subject, of } from "rxjs";
import { startWith, takeUntil } from "rxjs/operators";
var _c0 = ["*"];
function CdkStep_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵprojection(0);
    }
}
var CdkStepHeader = class _CdkStepHeader {
    _elementRef = inject(ElementRef);
    constructor() { }
    /** Focuses the step header. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    static ɵfac = function CdkStepHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkStepHeader)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkStepHeader,
        selectors: [["", "cdkStepHeader", ""]],
        hostAttrs: ["role", "tab"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkStepHeader, [{
            type: Directive,
            args: [{
                    selector: "[cdkStepHeader]",
                    host: {
                        "role": "tab"
                    }
                }]
        }], () => [], null);
})();
var CdkStepLabel = class _CdkStepLabel {
    template = inject(TemplateRef);
    constructor() { }
    static ɵfac = function CdkStepLabel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkStepLabel)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkStepLabel,
        selectors: [["", "cdkStepLabel", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkStepLabel, [{
            type: Directive,
            args: [{
                    selector: "[cdkStepLabel]"
                }]
        }], () => [], null);
})();
var StepperSelectionEvent = class {
    /** Index of the step now selected. */
    selectedIndex;
    /** Index of the step previously selected. */
    previouslySelectedIndex;
    /** The step instance now selected. */
    selectedStep;
    /** The step instance previously selected. */
    previouslySelectedStep;
};
var STEP_STATE = {
    NUMBER: "number",
    EDIT: "edit",
    DONE: "done",
    ERROR: "error"
};
var STEPPER_GLOBAL_OPTIONS = new InjectionToken("STEPPER_GLOBAL_OPTIONS");
var CdkStep = class _CdkStep {
    _stepperOptions;
    _stepper = inject(CdkStepper);
    _displayDefaultIndicatorType;
    /** Template for step label if it exists. */
    stepLabel;
    /** Forms that have been projected into the step. */
    _childForms;
    /** Template for step content. */
    content;
    /** The top level abstract control of the step. */
    stepControl;
    /** Whether user has attempted to move away from the step. */
    get interacted() {
        return this._interacted();
    }
    set interacted(value) {
        this._interacted.set(value);
    }
    _interacted = signal(false, ...(ngDevMode ? [{
            debugName: "_interacted"
        }] : []));
    /** Emits when the user has attempted to move away from the step. */
    interactedStream = new EventEmitter();
    /** Plain text label of the step. */
    label;
    /** Error message to display when there's an error. */
    errorMessage;
    /** Aria label for the tab. */
    ariaLabel;
    /**
     * Reference to the element that the tab is labelled by.
     * Will be cleared if `aria-label` is set at the same time.
     */
    ariaLabelledby;
    /** State of the step. */
    get state() {
        return this._state();
    }
    set state(value) {
        this._state.set(value);
    }
    _state = signal(void 0, ...(ngDevMode ? [{
            debugName: "_state"
        }] : []));
    /** Whether the user can return to this step once it has been marked as completed. */
    get editable() {
        return this._editable();
    }
    set editable(value) {
        this._editable.set(value);
    }
    _editable = signal(true, ...(ngDevMode ? [{
            debugName: "_editable"
        }] : []));
    /** Whether the completion of step is optional. */
    optional = false;
    /** Whether step is marked as completed. */
    get completed() {
        const override = this._completedOverride();
        const interacted = this._interacted();
        if (override != null) {
            return override;
        }
        return interacted && (!this.stepControl || this.stepControl.valid);
    }
    set completed(value) {
        this._completedOverride.set(value);
    }
    _completedOverride = signal(null, ...(ngDevMode ? [{
            debugName: "_completedOverride"
        }] : []));
    /** Current index of the step within the stepper. */
    index = signal(-1, ...(ngDevMode ? [{
            debugName: "index"
        }] : []));
    /** Whether the step is selected. */
    isSelected = computed(() => this._stepper.selectedIndex === this.index(), ...(ngDevMode ? [{
            debugName: "isSelected"
        }] : []));
    /** Type of indicator that should be shown for the step. */
    indicatorType = computed(() => {
        const selected = this.isSelected();
        const completed = this.completed;
        const defaultState = this._state() ?? STEP_STATE.NUMBER;
        const editable = this._editable();
        if (this._showError() && this.hasError && !selected) {
            return STEP_STATE.ERROR;
        }
        if (this._displayDefaultIndicatorType) {
            if (!completed || selected) {
                return STEP_STATE.NUMBER;
            }
            return editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
        }
        else {
            if (completed && !selected) {
                return STEP_STATE.DONE;
            }
            else if (completed && selected) {
                return defaultState;
            }
            return editable && selected ? STEP_STATE.EDIT : defaultState;
        }
    }, ...(ngDevMode ? [{
            debugName: "indicatorType"
        }] : []));
    /** Whether the user can navigate to the step. */
    isNavigable = computed(() => {
        const isSelected = this.isSelected();
        const isCompleted = this.completed;
        return isCompleted || isSelected || !this._stepper.linear;
    }, ...(ngDevMode ? [{
            debugName: "isNavigable"
        }] : []));
    /** Whether step has an error. */
    get hasError() {
        const customError = this._customError();
        return customError == null ? this._getDefaultError() : customError;
    }
    set hasError(value) {
        this._customError.set(value);
    }
    _customError = signal(null, ...(ngDevMode ? [{
            debugName: "_customError"
        }] : []));
    _getDefaultError() {
        return this.interacted && !!this.stepControl?.invalid;
    }
    constructor() {
        const stepperOptions = inject(STEPPER_GLOBAL_OPTIONS, {
            optional: true
        });
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
    }
    /** Selects this step component. */
    select() {
        this._stepper.selected = this;
    }
    /** Resets the step to its initial state. Note that this includes resetting form data. */
    reset() {
        this._interacted.set(false);
        if (this._completedOverride() != null) {
            this._completedOverride.set(false);
        }
        if (this._customError() != null) {
            this._customError.set(false);
        }
        if (this.stepControl) {
            this._childForms?.forEach(form => form.resetForm?.());
            this.stepControl.reset();
        }
    }
    ngOnChanges() {
        this._stepper._stateChanged();
    }
    _markAsInteracted() {
        if (!this._interacted()) {
            this._interacted.set(true);
            this.interactedStream.emit(this);
        }
    }
    /** Determines whether the error state can be shown. */
    _showError() {
        return this._stepperOptions.showError ?? this._customError() != null;
    }
    static ɵfac = function CdkStep_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkStep)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _CdkStep,
        selectors: [["cdk-step"]],
        contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CdkStepLabel, 5);
                i0.ɵɵcontentQuery(dirIndex, 
                // Note: we look for `ControlContainer` here, because both `NgForm` and `FormGroupDirective`
                // provides themselves as such, but we don't want to have a concrete reference to both of
                // the directives. The type is marked as `Partial` in case we run into a class that provides
                // itself as `ControlContainer` but doesn't have the same interface as the directives.
                ControlContainer, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.stepLabel = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._childForms = _t);
            }
        },
        viewQuery: function CdkStep_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(TemplateRef, 7);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
            }
        },
        inputs: {
            stepControl: "stepControl",
            label: "label",
            errorMessage: "errorMessage",
            ariaLabel: [0, "aria-label", "ariaLabel"],
            ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
            state: "state",
            editable: [2, "editable", "editable", booleanAttribute],
            optional: [2, "optional", "optional", booleanAttribute],
            completed: [2, "completed", "completed", booleanAttribute],
            hasError: [2, "hasError", "hasError", booleanAttribute]
        },
        outputs: {
            interactedStream: "interacted"
        },
        exportAs: ["cdkStep"],
        features: [i0.ɵɵNgOnChangesFeature],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function CdkStep_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵdomTemplate(0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
            }
        },
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkStep, [{
            type: Component,
            args: [{
                    selector: "cdk-step",
                    exportAs: "cdkStep",
                    template: "<ng-template><ng-content/></ng-template>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], () => [], {
        stepLabel: [{
                type: ContentChild,
                args: [CdkStepLabel]
            }],
        _childForms: [{
                type: ContentChildren,
                args: [
                    // Note: we look for `ControlContainer` here, because both `NgForm` and `FormGroupDirective`
                    // provides themselves as such, but we don't want to have a concrete reference to both of
                    // the directives. The type is marked as `Partial` in case we run into a class that provides
                    // itself as `ControlContainer` but doesn't have the same interface as the directives.
                    ControlContainer, {
                        descendants: true
                    }
                ]
            }],
        content: [{
                type: ViewChild,
                args: [TemplateRef, {
                        static: true
                    }]
            }],
        stepControl: [{
                type: Input
            }],
        interactedStream: [{
                type: Output,
                args: ["interacted"]
            }],
        label: [{
                type: Input
            }],
        errorMessage: [{
                type: Input
            }],
        ariaLabel: [{
                type: Input,
                args: ["aria-label"]
            }],
        ariaLabelledby: [{
                type: Input,
                args: ["aria-labelledby"]
            }],
        state: [{
                type: Input
            }],
        editable: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        optional: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        completed: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        hasError: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var CdkStepper = class _CdkStepper {
    _dir = inject(Directionality, {
        optional: true
    });
    _changeDetectorRef = inject(ChangeDetectorRef);
    _elementRef = inject(ElementRef);
    /** Emits when the component is destroyed. */
    _destroyed = new Subject();
    /** Used for managing keyboard focus. */
    _keyManager;
    /** Full list of steps inside the stepper, including inside nested steppers. */
    _steps;
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */
    steps = new QueryList();
    /** The list of step headers of the steps in the stepper. */
    _stepHeader;
    /** List of step headers sorted based on their DOM order. */
    _sortedHeaders = new QueryList();
    /** Whether the validity of previous steps should be checked or not. */
    linear = false;
    /** The index of the selected step. */
    get selectedIndex() {
        return this._selectedIndex();
    }
    set selectedIndex(index) {
        if (this._steps) {
            if (!this._isValidIndex(index) && (typeof ngDevMode === "undefined" || ngDevMode)) {
                throw Error("cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.");
            }
            if (this.selectedIndex !== index) {
                this.selected?._markAsInteracted();
                if (!this._anyControlsInvalidOrPending(index) && (index >= this.selectedIndex || this.steps.toArray()[index].editable)) {
                    this._updateSelectedItemIndex(index);
                }
            }
        }
        else {
            this._selectedIndex.set(index);
        }
    }
    _selectedIndex = signal(0, ...(ngDevMode ? [{
            debugName: "_selectedIndex"
        }] : []));
    /** The step that is selected. */
    get selected() {
        return this.steps ? this.steps.toArray()[this.selectedIndex] : void 0;
    }
    set selected(step) {
        this.selectedIndex = step && this.steps ? this.steps.toArray().indexOf(step) : -1;
    }
    /** Event emitted when the selected step has changed. */
    selectionChange = new EventEmitter();
    /** Output to support two-way binding on `[(selectedIndex)]` */
    selectedIndexChange = new EventEmitter();
    /** Used to track unique ID for each stepper component. */
    _groupId = inject(_IdGenerator).getId("cdk-stepper-");
    /** Orientation of the stepper. */
    get orientation() {
        return this._orientation;
    }
    set orientation(value) {
        this._orientation = value;
        if (this._keyManager) {
            this._keyManager.withVerticalOrientation(value === "vertical");
        }
    }
    _orientation = "horizontal";
    constructor() { }
    ngAfterContentInit() {
        this._steps.changes.pipe(startWith(this._steps), takeUntil(this._destroyed)).subscribe(steps => {
            this.steps.reset(steps.filter(step => step._stepper === this));
            this.steps.forEach((step, index) => step.index.set(index));
            this.steps.notifyOnChanges();
        });
    }
    ngAfterViewInit() {
        this._stepHeader.changes.pipe(startWith(this._stepHeader), takeUntil(this._destroyed)).subscribe(headers => {
            this._sortedHeaders.reset(headers.toArray().sort((a, b) => {
                const documentPosition = a._elementRef.nativeElement.compareDocumentPosition(b._elementRef.nativeElement);
                return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
            }));
            this._sortedHeaders.notifyOnChanges();
        });
        this._keyManager = new FocusKeyManager(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation === "vertical");
        this._keyManager.updateActiveItem(this.selectedIndex);
        (this._dir ? this._dir.change : of()).pipe(startWith(this._layoutDirection()), takeUntil(this._destroyed)).subscribe(direction => this._keyManager?.withHorizontalOrientation(direction));
        this._keyManager.updateActiveItem(this.selectedIndex);
        this.steps.changes.subscribe(() => {
            if (!this.selected) {
                this._selectedIndex.set(Math.max(this.selectedIndex - 1, 0));
            }
        });
        if (!this._isValidIndex(this.selectedIndex)) {
            this._selectedIndex.set(0);
        }
        if (this.linear && this.selectedIndex > 0) {
            const visitedSteps = this.steps.toArray().slice(0, this._selectedIndex());
            for (const step of visitedSteps) {
                step._markAsInteracted();
            }
        }
    }
    ngOnDestroy() {
        this._keyManager?.destroy();
        this.steps.destroy();
        this._sortedHeaders.destroy();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Selects and focuses the next step in list. */
    next() {
        this.selectedIndex = Math.min(this._selectedIndex() + 1, this.steps.length - 1);
    }
    /** Selects and focuses the previous step in list. */
    previous() {
        this.selectedIndex = Math.max(this._selectedIndex() - 1, 0);
    }
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */
    reset() {
        this._updateSelectedItemIndex(0);
        this.steps.forEach(step => step.reset());
        this._stateChanged();
    }
    /** Returns a unique id for each step label element. */
    _getStepLabelId(i) {
        return `${this._groupId}-label-${i}`;
    }
    /** Returns unique id for each step content element. */
    _getStepContentId(i) {
        return `${this._groupId}-content-${i}`;
    }
    /** Marks the component to be change detected. */
    _stateChanged() {
        this._changeDetectorRef.markForCheck();
    }
    /** Returns position state of the step with the given index. */
    _getAnimationDirection(index) {
        const position = index - this._selectedIndex();
        if (position < 0) {
            return this._layoutDirection() === "rtl" ? "next" : "previous";
        }
        else if (position > 0) {
            return this._layoutDirection() === "rtl" ? "previous" : "next";
        }
        return "current";
    }
    /** Returns the index of the currently-focused step header. */
    _getFocusIndex() {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex();
    }
    _updateSelectedItemIndex(newIndex) {
        const stepsArray = this.steps.toArray();
        const selectedIndex = this._selectedIndex();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[selectedIndex]
        });
        if (this._keyManager) {
            this._containsFocus() ? this._keyManager.setActiveItem(newIndex) : this._keyManager.updateActiveItem(newIndex);
        }
        this._selectedIndex.set(newIndex);
        this.selectedIndexChange.emit(newIndex);
        this._stateChanged();
    }
    _onKeydown(event) {
        const hasModifier = hasModifierKey(event);
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        if (manager?.activeItemIndex != null && !hasModifier && (keyCode === SPACE || keyCode === ENTER)) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
        }
        else {
            manager?.setFocusOrigin("keyboard").onKeydown(event);
        }
    }
    _anyControlsInvalidOrPending(index) {
        if (this.linear && index >= 0) {
            return this.steps.toArray().slice(0, index).some(step => {
                const control = step.stepControl;
                const isIncomplete = control ? control.invalid || control.pending || !step.interacted : !step.completed;
                return isIncomplete && !step.optional && !step._completedOverride();
            });
        }
        return false;
    }
    _layoutDirection() {
        return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
    }
    /** Checks whether the stepper contains the focused element. */
    _containsFocus() {
        const stepperElement = this._elementRef.nativeElement;
        const focusedElement = _getFocusedElementPierceShadowDom();
        return stepperElement === focusedElement || stepperElement.contains(focusedElement);
    }
    /** Checks whether the passed-in index is a valid step index. */
    _isValidIndex(index) {
        return index > -1 && (!this.steps || index < this.steps.length);
    }
    static ɵfac = function CdkStepper_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkStepper)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkStepper,
        selectors: [["", "cdkStepper", ""]],
        contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CdkStep, 5);
                i0.ɵɵcontentQuery(dirIndex, CdkStepHeader, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._steps = _t);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._stepHeader = _t);
            }
        },
        inputs: {
            linear: [2, "linear", "linear", booleanAttribute],
            selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute],
            selected: "selected",
            orientation: "orientation"
        },
        outputs: {
            selectionChange: "selectionChange",
            selectedIndexChange: "selectedIndexChange"
        },
        exportAs: ["cdkStepper"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkStepper, [{
            type: Directive,
            args: [{
                    selector: "[cdkStepper]",
                    exportAs: "cdkStepper"
                }]
        }], () => [], {
        _steps: [{
                type: ContentChildren,
                args: [CdkStep, {
                        descendants: true
                    }]
            }],
        _stepHeader: [{
                type: ContentChildren,
                args: [CdkStepHeader, {
                        descendants: true
                    }]
            }],
        linear: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        selectedIndex: [{
                type: Input,
                args: [{
                        transform: numberAttribute
                    }]
            }],
        selected: [{
                type: Input
            }],
        selectionChange: [{
                type: Output
            }],
        selectedIndexChange: [{
                type: Output
            }],
        orientation: [{
                type: Input
            }]
    });
})();
var CdkStepperNext = class _CdkStepperNext {
    _stepper = inject(CdkStepper);
    /** Type of the next button. Defaults to "submit" if not specified. */
    type = "submit";
    constructor() { }
    static ɵfac = function CdkStepperNext_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkStepperNext)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkStepperNext,
        selectors: [["button", "cdkStepperNext", ""]],
        hostVars: 1,
        hostBindings: function CdkStepperNext_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function CdkStepperNext_click_HostBindingHandler() {
                    return ctx._stepper.next();
                });
            }
            if (rf & 2) {
                i0.ɵɵdomProperty("type", ctx.type);
            }
        },
        inputs: {
            type: "type"
        }
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkStepperNext, [{
            type: Directive,
            args: [{
                    selector: "button[cdkStepperNext]",
                    host: {
                        "[type]": "type",
                        "(click)": "_stepper.next()"
                    }
                }]
        }], () => [], {
        type: [{
                type: Input
            }]
    });
})();
var CdkStepperPrevious = class _CdkStepperPrevious {
    _stepper = inject(CdkStepper);
    /** Type of the previous button. Defaults to "button" if not specified. */
    type = "button";
    constructor() { }
    static ɵfac = function CdkStepperPrevious_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkStepperPrevious)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkStepperPrevious,
        selectors: [["button", "cdkStepperPrevious", ""]],
        hostVars: 1,
        hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function CdkStepperPrevious_click_HostBindingHandler() {
                    return ctx._stepper.previous();
                });
            }
            if (rf & 2) {
                i0.ɵɵdomProperty("type", ctx.type);
            }
        },
        inputs: {
            type: "type"
        }
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkStepperPrevious, [{
            type: Directive,
            args: [{
                    selector: "button[cdkStepperPrevious]",
                    host: {
                        "[type]": "type",
                        "(click)": "_stepper.previous()"
                    }
                }]
        }], () => [], {
        type: [{
                type: Input
            }]
    });
})();
var CdkStepperModule = class _CdkStepperModule {
    static ɵfac = function CdkStepperModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkStepperModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _CdkStepperModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkStepperModule, [{
            type: NgModule,
            args: [{
                    imports: [BidiModule, CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
                    exports: [CdkStep, CdkStepper, CdkStepHeader, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
                }]
        }], null, null);
})();
export { CdkStep, CdkStepHeader, CdkStepLabel, CdkStepper, CdkStepperModule, CdkStepperNext, CdkStepperPrevious, STEPPER_GLOBAL_OPTIONS, STEP_STATE, StepperSelectionEvent };
