import { MatIcon, MatIconModule } from "@nf-internal/chunk-QGXHWEJI";
import { ErrorStateMatcher } from "@nf-internal/chunk-JH7AURNV";
import { MatRippleModule } from "@nf-internal/chunk-MAEJBUHM";
import { MatRipple } from "@nf-internal/chunk-YH4D56O7";
import { _StructuralStylesLoader } from "@nf-internal/chunk-LDHZVRH4";
import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/stepper.mjs
import { BidiModule } from "@angular/cdk/bidi";
import { TemplatePortal, CdkPortalOutlet, PortalModule } from "@angular/cdk/portal";
import { CdkStepLabel, CdkStepHeader, CdkStep, CdkStepper, CdkStepperNext, CdkStepperPrevious, CdkStepperModule } from "@angular/cdk/stepper";
import * as i0 from "@angular/core";
import { Directive, Injectable, inject, ChangeDetectorRef, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, TemplateRef, ViewContainerRef, ContentChild, NgZone, Renderer2, signal, QueryList, EventEmitter, ElementRef, ViewChildren, ContentChildren, Output, NgModule } from "@angular/core";
import { FocusMonitor } from "@angular/cdk/a11y";
import { Subject, Subscription } from "rxjs";
import { NgTemplateOutlet } from "@angular/common";
import { _CdkPrivateStyleLoader, _VisuallyHiddenLoader } from "@angular/cdk/private";
import { Platform } from "@angular/cdk/platform";
import { switchMap, map, startWith, takeUntil } from "rxjs/operators";
import "@angular/common/http";
import "@angular/platform-browser";
import "@angular/cdk/coercion";
import "@angular/cdk/layout";
var _c0 = (a0, a1, a2) => ({
    index: a0,
    active: a1,
    optional: a2
});
function MatStepHeader_Conditional_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0, 2);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c0, ctx_r0.index, ctx_r0.active, ctx_r0.optional));
    }
}
function MatStepHeader_Conditional_4_Case_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 7);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
    }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(ctx_r0._intl.completedLabel);
    }
}
function MatStepHeader_Conditional_4_Case_1_Conditional_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(ctx_r0._intl.editableLabel);
    }
}
function MatStepHeader_Conditional_4_Case_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵconditionalCreate(0, MatStepHeader_Conditional_4_Case_1_Conditional_0_Template, 2, 1, "span", 8)(1, MatStepHeader_Conditional_4_Case_1_Conditional_1_Template, 2, 1, "span", 8);
        i0.ɵɵelementStart(2, "mat-icon", 7);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext(2);
        i0.ɵɵconditional(ctx_r0.state === "done" ? 0 : ctx_r0.state === "edit" ? 1 : -1);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx_r0._getDefaultTextForState(ctx_r0.state));
    }
}
function MatStepHeader_Conditional_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵconditionalCreate(0, MatStepHeader_Conditional_4_Case_0_Template, 2, 1, "span", 7)(1, MatStepHeader_Conditional_4_Case_1_Template, 4, 2);
    }
    if (rf & 2) {
        let tmp_1_0;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵconditional((tmp_1_0 = ctx_r0.state) === "number" ? 0 : 1);
    }
}
function MatStepHeader_Conditional_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 4);
        i0.ɵɵelementContainer(1, 9);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", ctx.template);
    }
}
function MatStepHeader_Conditional_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 4);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(ctx_r0.label);
    }
}
function MatStepHeader_Conditional_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 5);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(ctx_r0._intl.optionalLabel);
    }
}
function MatStepHeader_Conditional_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 6);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(ctx_r0.errorMessage);
    }
}
var _c1 = ["*"];
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) { }
function MatStep_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵprojection(0);
        i0.ɵɵtemplate(1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵproperty("cdkPortalOutlet", ctx_r0._portal);
    }
}
var _c2 = ["animatedContainer"];
var _c3 = a0 => ({
    step: a0
});
function MatStepper_Conditional_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵprojection(0);
    }
}
function MatStepper_Case_1_For_3_Conditional_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 8);
    }
}
function MatStepper_Case_1_For_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0, 7);
        i0.ɵɵconditionalCreate(1, MatStepper_Case_1_For_3_Conditional_1_Template, 1, 0, "div", 8);
    }
    if (rf & 2) {
        const step_r1 = ctx.$implicit;
        const ɵ$index_8_r2 = ctx.$index;
        const ɵ$count_8_r3 = ctx.$count;
        i0.ɵɵnextContext(2);
        const stepTemplate_r4 = i0.ɵɵreference(4);
        i0.ɵɵproperty("ngTemplateOutlet", stepTemplate_r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c3, step_r1));
        i0.ɵɵadvance();
        i0.ɵɵconditional(!(ɵ$index_8_r2 === ɵ$count_8_r3 - 1) ? 1 : -1);
    }
}
function MatStepper_Case_1_For_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 9, 1);
        i0.ɵɵelementContainer(2, 10);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const step_r5 = ctx.$implicit;
        const $index_r6 = ctx.$index;
        const ctx_r6 = i0.ɵɵnextContext(2);
        i0.ɵɵclassMap("mat-horizontal-stepper-content-" + ctx_r6._getAnimationDirection($index_r6));
        i0.ɵɵproperty("id", ctx_r6._getStepContentId($index_r6));
        i0.ɵɵattribute("aria-labelledby", ctx_r6._getStepLabelId($index_r6))("inert", ctx_r6.selectedIndex === $index_r6 ? null : "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", step_r5.content);
    }
}
function MatStepper_Case_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 2)(1, "div", 4);
        i0.ɵɵrepeaterCreate(2, MatStepper_Case_1_For_3_Template, 2, 5, null, null, i0.ɵɵrepeaterTrackByIdentity);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 5);
        i0.ɵɵrepeaterCreate(5, MatStepper_Case_1_For_6_Template, 3, 6, "div", 6, i0.ɵɵrepeaterTrackByIdentity);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵrepeater(ctx_r6.steps);
        i0.ɵɵadvance(3);
        i0.ɵɵrepeater(ctx_r6.steps);
    }
}
function MatStepper_Case_2_For_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 11);
        i0.ɵɵelementContainer(1, 7);
        i0.ɵɵelementStart(2, "div", 12, 1)(4, "div", 13)(5, "div", 14);
        i0.ɵɵelementContainer(6, 10);
        i0.ɵɵelementEnd()()()();
    }
    if (rf & 2) {
        const step_r8 = ctx.$implicit;
        const $index_r9 = ctx.$index;
        const ɵ$index_24_r10 = ctx.$index;
        const ɵ$count_24_r11 = ctx.$count;
        const ctx_r6 = i0.ɵɵnextContext(2);
        const stepTemplate_r4 = i0.ɵɵreference(4);
        i0.ɵɵadvance();
        i0.ɵɵproperty("ngTemplateOutlet", stepTemplate_r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(10, _c3, step_r8));
        i0.ɵɵadvance();
        i0.ɵɵclassProp("mat-stepper-vertical-line", !(ɵ$index_24_r10 === ɵ$count_24_r11 - 1))("mat-vertical-content-container-active", ctx_r6.selectedIndex === $index_r9);
        i0.ɵɵattribute("inert", ctx_r6.selectedIndex === $index_r9 ? null : "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("id", ctx_r6._getStepContentId($index_r9));
        i0.ɵɵattribute("aria-labelledby", ctx_r6._getStepLabelId($index_r9));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", step_r8.content);
    }
}
function MatStepper_Case_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 3);
        i0.ɵɵrepeaterCreate(1, MatStepper_Case_2_For_2_Template, 7, 12, "div", 11, i0.ɵɵrepeaterTrackByIdentity);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r6 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵrepeater(ctx_r6.steps);
    }
}
function MatStepper_ng_template_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-step-header", 15);
        i0.ɵɵlistener("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() {
            const step_r13 = i0.ɵɵrestoreView(_r12).step;
            return i0.ɵɵresetView(step_r13.select());
        })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) {
            i0.ɵɵrestoreView(_r12);
            const ctx_r6 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r6._onKeydown($event));
        });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const step_r13 = ctx.step;
        const ctx_r6 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("mat-horizontal-stepper-header", ctx_r6.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r6.orientation === "vertical");
        i0.ɵɵproperty("tabIndex", ctx_r6._getFocusIndex() === step_r13.index() ? 0 : -1)("id", ctx_r6._getStepLabelId(step_r13.index()))("index", step_r13.index())("state", step_r13.indicatorType())("label", step_r13.stepLabel || step_r13.label)("selected", step_r13.isSelected())("active", step_r13.isNavigable())("optional", step_r13.optional)("errorMessage", step_r13.errorMessage)("iconOverrides", ctx_r6._iconOverrides)("disableRipple", ctx_r6.disableRipple || !step_r13.isNavigable())("color", step_r13.color || ctx_r6.color);
        i0.ɵɵattribute("role", ctx_r6.orientation === "horizontal" ? "tab" : "button")("aria-posinset", ctx_r6.orientation === "horizontal" ? step_r13.index() + 1 : null)("aria-setsize", ctx_r6.orientation === "horizontal" ? ctx_r6.steps.length : null)("aria-selected", ctx_r6.orientation === "horizontal" ? step_r13.isSelected() : null)("aria-current", ctx_r6.orientation === "vertical" && step_r13.isSelected() ? "step" : null)("aria-disabled", ctx_r6.orientation === "vertical" && step_r13.isSelected() ? "true" : null)("aria-expanded", ctx_r6.orientation === "vertical" ? step_r13.isSelected() : null)("aria-controls", ctx_r6._getStepContentId(step_r13.index()))("aria-label", step_r13.ariaLabel || null)("aria-labelledby", !step_r13.ariaLabel && step_r13.ariaLabelledby ? step_r13.ariaLabelledby : null)("aria-disabled", step_r13.isNavigable() ? null : true);
    }
}
var MatStepLabel = class _MatStepLabel extends CdkStepLabel {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatStepLabel_BaseFactory;
        return function MatStepLabel_Factory(__ngFactoryType__) {
            return (ɵMatStepLabel_BaseFactory || (ɵMatStepLabel_BaseFactory = i0.ɵɵgetInheritedFactory(_MatStepLabel)))(__ngFactoryType__ || _MatStepLabel);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatStepLabel,
        selectors: [["", "matStepLabel", ""]],
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepLabel, [{
            type: Directive,
            args: [{
                    selector: "[matStepLabel]"
                }]
        }], null, null);
})();
var MatStepperIntl = class _MatStepperIntl {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    changes = new Subject();
    /** Label that is rendered below optional steps. */
    optionalLabel = "Optional";
    /** Label that is used to indicate step as completed to screen readers. */
    completedLabel = "Completed";
    /** Label that is used to indicate step as editable to screen readers. */
    editableLabel = "Editable";
    static ɵfac = function MatStepperIntl_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatStepperIntl)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _MatStepperIntl,
        factory: _MatStepperIntl.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepperIntl, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var MatStepHeader = class _MatStepHeader extends CdkStepHeader {
    _intl = inject(MatStepperIntl);
    _focusMonitor = inject(FocusMonitor);
    _intlSubscription;
    /** State of the given step. */
    state;
    /** Label of the given step. */
    label;
    /** Error message to display when there's an error. */
    errorMessage;
    /** Overrides for the header icons, passed in via the stepper. */
    iconOverrides;
    /** Index of the given step. */
    index;
    /** Whether the given step is selected. */
    selected;
    /** Whether the given step label is active. */
    active;
    /** Whether the given step is optional. */
    optional;
    /** Whether the ripple should be disabled. */
    disableRipple;
    /**
     * Theme color of the step header. This API is supported in M2 themes only, it
     * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    constructor() {
        super();
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_StructuralStylesLoader);
        styleLoader.load(_VisuallyHiddenLoader);
        const changeDetectorRef = inject(ChangeDetectorRef);
        this._intlSubscription = this._intl.changes.subscribe(() => changeDetectorRef.markForCheck());
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
    }
    ngOnDestroy() {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Focuses the step header. */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._elementRef, origin, options);
        }
        else {
            this._elementRef.nativeElement.focus(options);
        }
    }
    /** Returns string label of given step if it is a text label. */
    _stringLabel() {
        return this.label instanceof MatStepLabel ? null : this.label;
    }
    /** Returns MatStepLabel if the label of given step is a template label. */
    _templateLabel() {
        return this.label instanceof MatStepLabel ? this.label : null;
    }
    /** Returns the host HTML element. */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    _getDefaultTextForState(state) {
        if (state == "number") {
            return `${this.index + 1}`;
        }
        if (state == "edit") {
            return "create";
        }
        if (state == "error") {
            return "warning";
        }
        return state;
    }
    _hasEmptyLabel() {
        return !this._stringLabel() && !this._templateLabel() && !this._hasOptionalLabel() && !this._hasErrorLabel();
    }
    _hasOptionalLabel() {
        return this.optional && this.state !== "error";
    }
    _hasErrorLabel() {
        return this.state === "error";
    }
    static ɵfac = function MatStepHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatStepHeader)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatStepHeader,
        selectors: [["mat-step-header"]],
        hostAttrs: ["role", "", 1, "mat-step-header"],
        hostVars: 4,
        hostBindings: function MatStepHeader_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassMap("mat-" + (ctx.color || "primary"));
                i0.ɵɵclassProp("mat-step-header-empty-label", ctx._hasEmptyLabel());
            }
        },
        inputs: {
            state: "state",
            label: "label",
            errorMessage: "errorMessage",
            iconOverrides: "iconOverrides",
            index: "index",
            selected: "selected",
            active: "active",
            optional: "optional",
            disableRipple: "disableRipple",
            color: "color"
        },
        features: [i0.ɵɵInheritDefinitionFeature],
        decls: 10,
        vars: 17,
        consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-step-label"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"], ["aria-hidden", "true"], [1, "cdk-visually-hidden"], [3, "ngTemplateOutlet"]],
        template: function MatStepHeader_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0);
                i0.ɵɵelementStart(1, "div")(2, "div", 1);
                i0.ɵɵconditionalCreate(3, MatStepHeader_Conditional_3_Template, 1, 6, "ng-container", 2)(4, MatStepHeader_Conditional_4_Template, 2, 1);
                i0.ɵɵelementEnd()();
                i0.ɵɵelementStart(5, "div", 3);
                i0.ɵɵconditionalCreate(6, MatStepHeader_Conditional_6_Template, 2, 1, "div", 4)(7, MatStepHeader_Conditional_7_Template, 2, 1, "div", 4);
                i0.ɵɵconditionalCreate(8, MatStepHeader_Conditional_8_Template, 2, 1, "div", 5);
                i0.ɵɵconditionalCreate(9, MatStepHeader_Conditional_9_Template, 2, 1, "div", 6);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                let tmp_8_0;
                i0.ɵɵproperty("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
                i0.ɵɵadvance();
                i0.ɵɵclassMap(i0.ɵɵinterpolate1("mat-step-icon-state-", ctx.state, " mat-step-icon"));
                i0.ɵɵclassProp("mat-step-icon-selected", ctx.selected);
                i0.ɵɵadvance(2);
                i0.ɵɵconditional(ctx.iconOverrides && ctx.iconOverrides[ctx.state] ? 3 : 4);
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
                i0.ɵɵadvance();
                i0.ɵɵconditional((tmp_8_0 = ctx._templateLabel()) ? 6 : ctx._stringLabel() ? 7 : -1, tmp_8_0);
                i0.ɵɵadvance(2);
                i0.ɵɵconditional(ctx._hasOptionalLabel() ? 8 : -1);
                i0.ɵɵadvance();
                i0.ɵɵconditional(ctx._hasErrorLabel() ? 9 : -1);
            }
        },
        dependencies: [MatRipple, NgTemplateOutlet, MatIcon],
        styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-header-empty-label .mat-step-label{min-width:0}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}\n'],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepHeader, [{
            type: Component,
            args: [{
                    selector: "mat-step-header",
                    host: {
                        "class": "mat-step-header",
                        "[class.mat-step-header-empty-label]": "_hasEmptyLabel()",
                        "[class]": '"mat-" + (color || "primary")',
                        "role": ""
                        // ignore cdk role in favor of setting appropriately in html
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [MatRipple, NgTemplateOutlet, MatIcon],
                    template: `<div class="mat-step-header-ripple mat-focus-indicator" matRipple
     [matRippleTrigger]="_getHostElement()"
     [matRippleDisabled]="disableRipple"></div>

<div class="mat-step-icon-state-{{state}} mat-step-icon" [class.mat-step-icon-selected]="selected">
  <div class="mat-step-icon-content">
    @if (iconOverrides && iconOverrides[state]) {
      <ng-container
        [ngTemplateOutlet]="iconOverrides[state]"
        [ngTemplateOutletContext]="{index, active, optional}"></ng-container>
    } @else {
      @switch (state) {
        @case ('number') {
          <span aria-hidden="true">{{_getDefaultTextForState(state)}}</span>
        }

        @default {
          @if (state === 'done') {
            <span class="cdk-visually-hidden">{{_intl.completedLabel}}</span>
          } @else if (state === 'edit') {
            <span class="cdk-visually-hidden">{{_intl.editableLabel}}</span>
          }

          <mat-icon aria-hidden="true">{{_getDefaultTextForState(state)}}</mat-icon>
        }
      }
    }
  </div>
</div>
<div class="mat-step-label"
     [class.mat-step-label-active]="active"
     [class.mat-step-label-selected]="selected"
     [class.mat-step-label-error]="state == 'error'">
  @if (_templateLabel(); as templateLabel) {
    <!-- If there is a label template, use it. -->
    <div class="mat-step-text-label">
      <ng-container [ngTemplateOutlet]="templateLabel.template"></ng-container>
    </div>
  } @else if (_stringLabel()) {
    <!-- If there is no label template, fall back to the text label. -->
    <div class="mat-step-text-label">{{label}}</div>
  }

  @if (_hasOptionalLabel()) {
    <div class="mat-step-optional">{{_intl.optionalLabel}}</div>
  }

  @if (_hasErrorLabel()) {
    <div class="mat-step-sub-label-error">{{errorMessage}}</div>
  }
</div>

`,
                    styles: ['.mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-step-header:focus .mat-focus-indicator::before{content:""}.mat-step-header:hover[aria-disabled=true]{cursor:default}.mat-step-header:hover:not([aria-disabled]),.mat-step-header:hover[aria-disabled=false]{background-color:var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium))}.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused{background-color:var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));border-radius:var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium))}@media(hover: none){.mat-step-header:hover{background:none}}@media(forced-colors: active){.mat-step-header{outline:solid 1px}.mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-header[aria-disabled=true]{outline-color:GrayText}.mat-step-header[aria-disabled=true] .mat-step-label,.mat-step-header[aria-disabled=true] .mat-step-icon,.mat-step-header[aria-disabled=true] .mat-step-optional{color:GrayText}}.mat-step-optional{font-size:12px;color:var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-sub-label-error{font-size:12px;font-weight:normal}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative;color:var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));background-color:var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant))}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error{background-color:var(--mat-stepper-header-error-state-icon-background-color, transparent);color:var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error))}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle;font-family:var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));color:var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-active{color:var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant))}.mat-step-label.mat-step-label-error{color:var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));font-size:var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size))}.mat-step-label.mat-step-label-selected{font-size:var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));font-weight:var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight))}.mat-step-header-empty-label .mat-step-label{min-width:0}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-step-icon-selected{background-color:var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-done{background-color:var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary))}.mat-step-icon-state-edit{background-color:var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));color:var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary))}\n']
                }]
        }], () => [], {
        state: [{
                type: Input
            }],
        label: [{
                type: Input
            }],
        errorMessage: [{
                type: Input
            }],
        iconOverrides: [{
                type: Input
            }],
        index: [{
                type: Input
            }],
        selected: [{
                type: Input
            }],
        active: [{
                type: Input
            }],
        optional: [{
                type: Input
            }],
        disableRipple: [{
                type: Input
            }],
        color: [{
                type: Input
            }]
    });
})();
var MatStepperIcon = class _MatStepperIcon {
    templateRef = inject(TemplateRef);
    /** Name of the icon to be overridden. */
    name;
    constructor() { }
    static ɵfac = function MatStepperIcon_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatStepperIcon)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatStepperIcon,
        selectors: [["ng-template", "matStepperIcon", ""]],
        inputs: {
            name: [0, "matStepperIcon", "name"]
        }
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepperIcon, [{
            type: Directive,
            args: [{
                    selector: "ng-template[matStepperIcon]"
                }]
        }], () => [], {
        name: [{
                type: Input,
                args: ["matStepperIcon"]
            }]
    });
})();
var MatStepContent = class _MatStepContent {
    _template = inject(TemplateRef);
    constructor() { }
    static ɵfac = function MatStepContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatStepContent)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatStepContent,
        selectors: [["ng-template", "matStepContent", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepContent, [{
            type: Directive,
            args: [{
                    selector: "ng-template[matStepContent]"
                }]
        }], () => [], null);
})();
var MatStep = class _MatStep extends CdkStep {
    _errorStateMatcher = inject(ErrorStateMatcher, {
        skipSelf: true
    });
    _viewContainerRef = inject(ViewContainerRef);
    _isSelected = Subscription.EMPTY;
    /** Content for step label given by `<ng-template matStepLabel>`. */
    // We need an initializer here to avoid a TS error.
    stepLabel = void 0;
    /**
     * Theme color for the particular step. This API is supported in M2 themes
     * only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    /** Content that will be rendered lazily. */
    _lazyContent;
    /** Currently-attached portal containing the lazy content. */
    _portal;
    ngAfterContentInit() {
        this._isSelected = this._stepper.steps.changes.pipe(switchMap(() => {
            return this._stepper.selectionChange.pipe(map(event => event.selectedStep === this), startWith(this._stepper.selected === this));
        })).subscribe(isSelected => {
            if (isSelected && this._lazyContent && !this._portal) {
                this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
            }
        });
    }
    ngOnDestroy() {
        this._isSelected.unsubscribe();
    }
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    isErrorState(control, form) {
        const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        const customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    }
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatStep_BaseFactory;
        return function MatStep_Factory(__ngFactoryType__) {
            return (ɵMatStep_BaseFactory || (ɵMatStep_BaseFactory = i0.ɵɵgetInheritedFactory(_MatStep)))(__ngFactoryType__ || _MatStep);
        };
    })();
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatStep,
        selectors: [["mat-step"]],
        contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, MatStepLabel, 5);
                i0.ɵɵcontentQuery(dirIndex, MatStepContent, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.stepLabel = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._lazyContent = _t.first);
            }
        },
        hostAttrs: ["hidden", ""],
        inputs: {
            color: "color"
        },
        exportAs: ["matStep"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: ErrorStateMatcher,
                    useExisting: _MatStep
                }, {
                    provide: CdkStep,
                    useExisting: _MatStep
                }]), i0.ɵɵInheritDefinitionFeature],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        consts: [[3, "cdkPortalOutlet"]],
        template: function MatStep_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
            }
        },
        dependencies: [CdkPortalOutlet],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStep, [{
            type: Component,
            args: [{
                    selector: "mat-step",
                    providers: [{
                            provide: ErrorStateMatcher,
                            useExisting: MatStep
                        }, {
                            provide: CdkStep,
                            useExisting: MatStep
                        }],
                    encapsulation: ViewEncapsulation.None,
                    exportAs: "matStep",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [CdkPortalOutlet],
                    host: {
                        "hidden": ""
                        // Hide the steps so they don't affect the layout.
                    },
                    template: '<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]="_portal"></ng-template>\n</ng-template>\n'
                }]
        }], null, {
        stepLabel: [{
                type: ContentChild,
                args: [MatStepLabel]
            }],
        color: [{
                type: Input
            }],
        _lazyContent: [{
                type: ContentChild,
                args: [MatStepContent, {
                        static: false
                    }]
            }]
    });
})();
var MatStepper = class _MatStepper extends CdkStepper {
    _ngZone = inject(NgZone);
    _renderer = inject(Renderer2);
    _animationsDisabled = _animationsDisabled();
    _cleanupTransition;
    _isAnimating = signal(false, ...(ngDevMode ? [{
            debugName: "_isAnimating"
        }] : []));
    /** The list of step headers of the steps in the stepper. */
    _stepHeader = void 0;
    /** Elements hosting the step animations. */
    _animatedContainers;
    /** Full list of steps inside the stepper, including inside nested steppers. */
    _steps = void 0;
    /** Steps that belong to the current stepper, excluding ones from nested steppers. */
    steps = new QueryList();
    /** Custom icon overrides passed in by the consumer. */
    _icons;
    /** Event emitted when the current step is done transitioning in. */
    animationDone = new EventEmitter();
    /** Whether ripples should be disabled for the step headers. */
    disableRipple;
    /**
     * Theme color for all of the steps in stepper. This API is supported in M2
     * themes only, it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/stepper/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    /**
     * Whether the label should display in bottom or end position.
     * Only applies in the `horizontal` orientation.
     */
    labelPosition = "end";
    /**
     * Position of the stepper's header.
     * Only applies in the `horizontal` orientation.
     */
    headerPosition = "top";
    /** Consumer-specified template-refs to be used to override the header icons. */
    _iconOverrides = {};
    /** Duration for the animation. Will be normalized to milliseconds if no units are set. */
    get animationDuration() {
        return this._animationDuration;
    }
    set animationDuration(value) {
        this._animationDuration = /^\d+$/.test(value) ? value + "ms" : value;
    }
    _animationDuration = "";
    /** Whether the stepper is rendering on the server. */
    _isServer = !inject(Platform).isBrowser;
    constructor() {
        super();
        const elementRef = inject(ElementRef);
        const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
        this.orientation = nodeName === "mat-vertical-stepper" ? "vertical" : "horizontal";
    }
    ngAfterContentInit() {
        super.ngAfterContentInit();
        this._icons.forEach(({ name, templateRef }) => this._iconOverrides[name] = templateRef);
        this.steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this._stateChanged());
        this.selectedIndexChange.pipe(takeUntil(this._destroyed)).subscribe(() => {
            const duration = this._getAnimationDuration();
            if (duration === "0ms" || duration === "0s") {
                this._onAnimationDone();
            }
            else {
                this._isAnimating.set(true);
            }
        });
        this._ngZone.runOutsideAngular(() => {
            if (!this._animationsDisabled) {
                setTimeout(() => {
                    this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled");
                    this._cleanupTransition = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionend);
                }, 200);
            }
        });
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (typeof queueMicrotask === "function") {
            let hasEmittedInitial = false;
            this._animatedContainers.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => queueMicrotask(() => {
                if (!hasEmittedInitial) {
                    hasEmittedInitial = true;
                    this.animationDone.emit();
                }
                this._stateChanged();
            }));
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._cleanupTransition?.();
    }
    _getAnimationDuration() {
        if (this._animationsDisabled) {
            return "0ms";
        }
        if (this.animationDuration) {
            return this.animationDuration;
        }
        return this.orientation === "horizontal" ? "500ms" : "225ms";
    }
    _handleTransitionend = event => {
        const target = event.target;
        if (!target) {
            return;
        }
        const isHorizontalActiveElement = this.orientation === "horizontal" && event.propertyName === "transform" && target.classList.contains("mat-horizontal-stepper-content-current");
        const isVerticalActiveElement = this.orientation === "vertical" && event.propertyName === "grid-template-rows" && target.classList.contains("mat-vertical-content-container-active");
        const shouldEmit = (isHorizontalActiveElement || isVerticalActiveElement) && this._animatedContainers.find(ref => ref.nativeElement === target);
        if (shouldEmit) {
            this._onAnimationDone();
        }
    };
    _onAnimationDone() {
        this._isAnimating.set(false);
        this.animationDone.emit();
    }
    static ɵfac = function MatStepper_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatStepper)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatStepper,
        selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]],
        contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, MatStep, 5);
                i0.ɵɵcontentQuery(dirIndex, MatStepperIcon, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._steps = _t);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._icons = _t);
            }
        },
        viewQuery: function MatStepper_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(MatStepHeader, 5);
                i0.ɵɵviewQuery(_c2, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._stepHeader = _t);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._animatedContainers = _t);
            }
        },
        hostVars: 14,
        hostBindings: function MatStepper_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵstyleProp("--mat-stepper-animation-duration", ctx._getAnimationDuration());
                i0.ɵɵclassProp("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom")("mat-stepper-header-position-bottom", ctx.headerPosition === "bottom")("mat-stepper-animating", ctx._isAnimating());
            }
        },
        inputs: {
            disableRipple: "disableRipple",
            color: "color",
            labelPosition: "labelPosition",
            headerPosition: "headerPosition",
            animationDuration: "animationDuration"
        },
        outputs: {
            animationDone: "animationDone"
        },
        exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkStepper,
                    useExisting: _MatStepper
                }]), i0.ɵɵInheritDefinitionFeature],
        ngContentSelectors: _c1,
        decls: 5,
        vars: 2,
        consts: [["stepTemplate", ""], ["animatedContainer", ""], [1, "mat-horizontal-stepper-wrapper"], [1, "mat-vertical-stepper-wrapper"], ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-horizontal-stepper-header-container"], [1, "mat-horizontal-content-container"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id", "class"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "region", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "click", "keydown", "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color"]],
        template: function MatStepper_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵconditionalCreate(0, MatStepper_Conditional_0_Template, 1, 0);
                i0.ɵɵconditionalCreate(1, MatStepper_Case_1_Template, 7, 0, "div", 2)(2, MatStepper_Case_2_Template, 3, 0, "div", 3);
                i0.ɵɵtemplate(3, MatStepper_ng_template_3_Template, 1, 27, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                let tmp_2_0;
                i0.ɵɵconditional(ctx._isServer ? 0 : -1);
                i0.ɵɵadvance();
                i0.ɵɵconditional((tmp_2_0 = ctx.orientation) === "horizontal" ? 1 : tmp_2_0 === "vertical" ? 2 : -1);
            }
        },
        dependencies: [NgTemplateOutlet, MatStepHeader],
        styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon{margin:0}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}\n'],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepper, [{
            type: Component,
            args: [{
                    selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]",
                    exportAs: "matStepper, matVerticalStepper, matHorizontalStepper",
                    host: {
                        "[class.mat-stepper-horizontal]": 'orientation === "horizontal"',
                        "[class.mat-stepper-vertical]": 'orientation === "vertical"',
                        "[class.mat-stepper-label-position-end]": 'orientation === "horizontal" && labelPosition == "end"',
                        "[class.mat-stepper-label-position-bottom]": 'orientation === "horizontal" && labelPosition == "bottom"',
                        "[class.mat-stepper-header-position-bottom]": 'headerPosition === "bottom"',
                        "[class.mat-stepper-animating]": "_isAnimating()",
                        "[style.--mat-stepper-animation-duration]": "_getAnimationDuration()"
                    },
                    providers: [{
                            provide: CdkStepper,
                            useExisting: MatStepper
                        }],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [NgTemplateOutlet, MatStepHeader],
                    template: `<!--
  We need to project the content somewhere to avoid hydration errors. Some observations:
  1. This is only necessary on the server.
  2. We get a hydration error if there aren't any nodes after the \`ng-content\`.
  3. We get a hydration error if \`ng-content\` is wrapped in another element.
-->
@if (_isServer) {
  <ng-content/>
}

@switch (orientation) {
  @case ('horizontal') {
    <div class="mat-horizontal-stepper-wrapper">
      <div 
        aria-orientation="horizontal"
        class="mat-horizontal-stepper-header-container" 
        role="tablist">
        @for (step of steps; track step) {
          <ng-container
            [ngTemplateOutlet]="stepTemplate"
            [ngTemplateOutletContext]="{step}"/>
          @if (!$last) {
            <div class="mat-stepper-horizontal-line"></div>
          }
        }
      </div>

      <div class="mat-horizontal-content-container">
        @for (step of steps; track step) {
          <div
            #animatedContainer
            class="mat-horizontal-stepper-content"
            role="tabpanel"
            [id]="_getStepContentId($index)"
            [attr.aria-labelledby]="_getStepLabelId($index)"
            [class]="'mat-horizontal-stepper-content-' + _getAnimationDirection($index)"
            [attr.inert]="selectedIndex === $index ? null : ''">
            <ng-container [ngTemplateOutlet]="step.content"/>
          </div>
        }
      </div>
    </div>
  }

  @case ('vertical') {
    <div class="mat-vertical-stepper-wrapper">
      @for (step of steps; track step) {
        <div class="mat-step">
          <ng-container
            [ngTemplateOutlet]="stepTemplate"
            [ngTemplateOutletContext]="{step}"/>
          <div
            #animatedContainer
            class="mat-vertical-content-container"
            [class.mat-stepper-vertical-line]="!$last"
            [class.mat-vertical-content-container-active]="selectedIndex === $index"
            [attr.inert]="selectedIndex === $index ? null : ''">
            <div 
              class="mat-vertical-stepper-content"
              role="region"
              [id]="_getStepContentId($index)"
              [attr.aria-labelledby]="_getStepLabelId($index)">
              <div class="mat-vertical-content">
                <ng-container [ngTemplateOutlet]="step.content"/>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  }
}

<!-- Common step templating -->
<ng-template let-step="step" #stepTemplate>
  <mat-step-header
    [class.mat-horizontal-stepper-header]="orientation === 'horizontal'"
    [class.mat-vertical-stepper-header]="orientation === 'vertical'"
    (click)="step.select()"
    (keydown)="_onKeydown($event)"
    [tabIndex]="_getFocusIndex() === step.index() ? 0 : -1"
    [id]="_getStepLabelId(step.index())"
    [attr.role]="orientation === 'horizontal' ? 'tab' : 'button'"
    [attr.aria-posinset]="orientation === 'horizontal' ? step.index() + 1 : null"
    [attr.aria-setsize]="orientation === 'horizontal' ? steps.length : null"
    [attr.aria-selected]="orientation === 'horizontal' ? step.isSelected() : null"
    [attr.aria-current]="orientation === 'vertical' && step.isSelected() ? 'step' : null"
    [attr.aria-disabled]="orientation === 'vertical' && step.isSelected() ? 'true' : null"
    [attr.aria-expanded]="orientation === 'vertical' ? step.isSelected() : null"
    [attr.aria-controls]="_getStepContentId(step.index())"
    [attr.aria-label]="step.ariaLabel || null"
    [attr.aria-labelledby]="(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null"
    [attr.aria-disabled]="step.isNavigable() ? null : true"
    [index]="step.index()"
    [state]="step.indicatorType()"
    [label]="step.stepLabel || step.label"
    [selected]="step.isSelected()"
    [active]="step.isNavigable()"
    [optional]="step.optional"
    [errorMessage]="step.errorMessage"
    [iconOverrides]="_iconOverrides"
    [disableRipple]="disableRipple || !step.isNavigable()"
    [color]="step.color || color"/>
</ng-template>
`,
                    styles: ['.mat-stepper-vertical,.mat-stepper-horizontal{display:block;font-family:var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));background:var(--mat-stepper-container-color, var(--mat-sys-surface))}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px;border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;overflow:hidden;align-items:center;padding:0 24px;height:var(--mat-stepper-header-height, 72px)}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon{margin:0}.mat-horizontal-stepper-header::before,.mat-horizontal-stepper-header::after{border-top-color:var(--mat-stepper-line-color, var(--mat-sys-outline))}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after{top:calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px)}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px;padding:calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{visibility:hidden;overflow:hidden;outline:0;height:0}.mat-stepper-animations-enabled .mat-horizontal-stepper-content{transition:transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous{transform:translate3d(-100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next{transform:translate3d(100%, 0, 0)}.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{visibility:visible;transform:none;height:auto}.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current{overflow:visible}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}@media(forced-colors: active){.mat-horizontal-content-container{outline:solid 1px}}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{display:grid;grid-template-rows:0fr;grid-template-columns:100%;margin-left:36px;border:0;position:relative}.mat-stepper-animations-enabled .mat-vertical-content-container{transition:grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1)}.mat-vertical-content-container.mat-vertical-content-container-active{grid-template-rows:1fr}.mat-step:last-child .mat-vertical-content-container{border:none}@media(forced-colors: active){.mat-vertical-content-container{outline:solid 1px}}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}@supports not (grid-template-rows: 0fr){.mat-vertical-content-container{height:0}.mat-vertical-content-container.mat-vertical-content-container-active{height:auto}}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid;border-left-color:var(--mat-stepper-line-color, var(--mat-sys-outline));top:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));bottom:calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2))}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0;visibility:hidden}.mat-stepper-animations-enabled .mat-vertical-stepper-content{transition:visibility var(--mat-stepper-animation-duration, 0) linear}.mat-vertical-content-container-active>.mat-vertical-stepper-content{visibility:visible}.mat-vertical-content{padding:0 24px 24px 24px}\n']
                }]
        }], () => [], {
        _stepHeader: [{
                type: ViewChildren,
                args: [MatStepHeader]
            }],
        _animatedContainers: [{
                type: ViewChildren,
                args: ["animatedContainer"]
            }],
        _steps: [{
                type: ContentChildren,
                args: [MatStep, {
                        descendants: true
                    }]
            }],
        _icons: [{
                type: ContentChildren,
                args: [MatStepperIcon, {
                        descendants: true
                    }]
            }],
        animationDone: [{
                type: Output
            }],
        disableRipple: [{
                type: Input
            }],
        color: [{
                type: Input
            }],
        labelPosition: [{
                type: Input
            }],
        headerPosition: [{
                type: Input
            }],
        animationDuration: [{
                type: Input
            }]
    });
})();
var MatStepperNext = class _MatStepperNext extends CdkStepperNext {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatStepperNext_BaseFactory;
        return function MatStepperNext_Factory(__ngFactoryType__) {
            return (ɵMatStepperNext_BaseFactory || (ɵMatStepperNext_BaseFactory = i0.ɵɵgetInheritedFactory(_MatStepperNext)))(__ngFactoryType__ || _MatStepperNext);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatStepperNext,
        selectors: [["button", "matStepperNext", ""]],
        hostAttrs: [1, "mat-stepper-next"],
        hostVars: 1,
        hostBindings: function MatStepperNext_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵdomProperty("type", ctx.type);
            }
        },
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepperNext, [{
            type: Directive,
            args: [{
                    selector: "button[matStepperNext]",
                    host: {
                        "class": "mat-stepper-next",
                        "[type]": "type"
                    }
                }]
        }], null, null);
})();
var MatStepperPrevious = class _MatStepperPrevious extends CdkStepperPrevious {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatStepperPrevious_BaseFactory;
        return function MatStepperPrevious_Factory(__ngFactoryType__) {
            return (ɵMatStepperPrevious_BaseFactory || (ɵMatStepperPrevious_BaseFactory = i0.ɵɵgetInheritedFactory(_MatStepperPrevious)))(__ngFactoryType__ || _MatStepperPrevious);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatStepperPrevious,
        selectors: [["button", "matStepperPrevious", ""]],
        hostAttrs: [1, "mat-stepper-previous"],
        hostVars: 1,
        hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵdomProperty("type", ctx.type);
            }
        },
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepperPrevious, [{
            type: Directive,
            args: [{
                    selector: "button[matStepperPrevious]",
                    host: {
                        "class": "mat-stepper-previous",
                        "[type]": "type"
                    }
                }]
        }], null, null);
})();
var MatStepperModule = class _MatStepperModule {
    static ɵfac = function MatStepperModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatStepperModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatStepperModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        providers: [ErrorStateMatcher],
        imports: [PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStepper, MatStepHeader, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatStepperModule, [{
            type: NgModule,
            args: [{
                    imports: [PortalModule, CdkStepperModule, MatIconModule, MatRippleModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
                    exports: [BidiModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent],
                    providers: [ErrorStateMatcher]
                }]
        }], null, null);
})();
export { MatStep, MatStepContent, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious };
