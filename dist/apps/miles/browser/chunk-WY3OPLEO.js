import { MatPseudoCheckbox } from "@nf-internal/chunk-LTTGRATQ";
import { MatRipple } from "@nf-internal/chunk-YH4D56O7";
import { _StructuralStylesLoader } from "@nf-internal/chunk-LDHZVRH4";
// node_modules/@angular/material/fesm2022/option.mjs
import { _IdGenerator } from "@angular/cdk/a11y";
import { ENTER, SPACE, hasModifierKey } from "@angular/cdk/keycodes";
import * as i0 from "@angular/core";
import { InjectionToken, inject, booleanAttribute, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ElementRef, ChangeDetectorRef, signal, EventEmitter, isSignal, Output, ViewChild } from "@angular/core";
import { Subject } from "rxjs";
import { _CdkPrivateStyleLoader, _VisuallyHiddenLoader } from "@angular/cdk/private";
var _c0 = ["*", [["mat-option"], ["ng-container"]]];
var _c1 = ["*", "mat-option, ng-container"];
var _c2 = ["text"];
var _c3 = [[["mat-icon"]], "*"];
var _c4 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "mat-pseudo-checkbox", 1);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
    }
}
function MatOption_Conditional_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "mat-pseudo-checkbox", 3);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("disabled", ctx_r0.disabled);
    }
}
function MatOption_Conditional_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 4);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1("(", ctx_r0.group.label, ")");
    }
}
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var MatOptgroup = class _MatOptgroup {
    /** Label for the option group. */
    label;
    /** whether the option group is disabled. */
    disabled = false;
    /** Unique id for the underlying label. */
    _labelId = inject(_IdGenerator).getId("mat-optgroup-label-");
    /** Whether the group is in inert a11y mode. */
    _inert;
    constructor() {
        const parent = inject(MAT_OPTION_PARENT_COMPONENT, {
            optional: true
        });
        this._inert = parent?.inertGroups ?? false;
    }
    static ɵfac = function MatOptgroup_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatOptgroup)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatOptgroup,
        selectors: [["mat-optgroup"]],
        hostAttrs: [1, "mat-mdc-optgroup"],
        hostVars: 3,
        hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
            }
        },
        inputs: {
            label: "label",
            disabled: [2, "disabled", "disabled", booleanAttribute]
        },
        exportAs: ["matOptgroup"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: MAT_OPTGROUP,
                    useExisting: _MatOptgroup
                }])],
        ngContentSelectors: _c1,
        decls: 5,
        vars: 4,
        consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]],
        template: function MatOptgroup_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c0);
                i0.ɵɵdomElementStart(0, "span", 0)(1, "span", 1);
                i0.ɵɵtext(2);
                i0.ɵɵprojection(3);
                i0.ɵɵdomElementEnd()();
                i0.ɵɵprojection(4, 1);
            }
            if (rf & 2) {
                i0.ɵɵclassProp("mdc-list-item--disabled", ctx.disabled);
                i0.ɵɵdomProperty("id", ctx._labelId);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("", ctx.label, " ");
            }
        },
        styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatOptgroup, [{
            type: Component,
            args: [{
                    selector: "mat-optgroup",
                    exportAs: "matOptgroup",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        "class": "mat-mdc-optgroup",
                        "[attr.role]": '_inert ? null : "group"',
                        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
                        "[attr.aria-labelledby]": "_inert ? null : _labelId"
                    },
                    providers: [{
                            provide: MAT_OPTGROUP,
                            useExisting: MatOptgroup
                        }],
                    template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
                    styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"]
                }]
        }], () => [], {
        label: [{
                type: Input
            }],
        disabled: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var MatOptionSelectionChange = class {
    source;
    isUserInput;
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
};
var MatOption = class _MatOption {
    _element = inject(ElementRef);
    _changeDetectorRef = inject(ChangeDetectorRef);
    _parent = inject(MAT_OPTION_PARENT_COMPONENT, {
        optional: true
    });
    group = inject(MAT_OPTGROUP, {
        optional: true
    });
    _signalDisableRipple = false;
    _selected = false;
    _active = false;
    _mostRecentViewValue = "";
    /** Whether the wrapping component is in multiple selection mode. */
    get multiple() {
        return this._parent && this._parent.multiple;
    }
    /** Whether or not the option is currently selected. */
    get selected() {
        return this._selected;
    }
    /** The form value of the option. */
    value;
    /** The unique ID of the option. */
    id = inject(_IdGenerator).getId("mat-option-");
    /** Whether the option is disabled. */
    get disabled() {
        return this.group && this.group.disabled || this._disabled();
    }
    set disabled(value) {
        this._disabled.set(value);
    }
    _disabled = signal(false, ...(ngDevMode ? [{
            debugName: "_disabled"
        }] : []));
    /** Whether ripples for the option are disabled. */
    get disableRipple() {
        return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple;
    }
    /** Whether to display checkmark for single-selection. */
    get hideSingleSelectionIndicator() {
        return !!(this._parent && this._parent.hideSingleSelectionIndicator);
    }
    /** Event emitted when the option is selected or deselected. */
    // tslint:disable-next-line:no-output-on-prefix
    onSelectionChange = new EventEmitter();
    /** Element containing the option's text. */
    _text;
    /** Emits when the state of the option changes and any parents have to be notified. */
    _stateChanges = new Subject();
    constructor() {
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_StructuralStylesLoader);
        styleLoader.load(_VisuallyHiddenLoader);
        this._signalDisableRipple = !!this._parent && isSignal(this._parent.disableRipple);
    }
    /**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     */
    get active() {
        return this._active;
    }
    /**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     */
    get viewValue() {
        return (this._text?.nativeElement.textContent || "").trim();
    }
    /** Selects the option. */
    select(emitEvent = true) {
        if (!this._selected) {
            this._selected = true;
            this._changeDetectorRef.markForCheck();
            if (emitEvent) {
                this._emitSelectionChangeEvent();
            }
        }
    }
    /** Deselects the option. */
    deselect(emitEvent = true) {
        if (this._selected) {
            this._selected = false;
            this._changeDetectorRef.markForCheck();
            if (emitEvent) {
                this._emitSelectionChangeEvent();
            }
        }
    }
    /** Sets focus onto this option. */
    focus(_origin, options) {
        const element = this._getHostElement();
        if (typeof element.focus === "function") {
            element.focus(options);
        }
    }
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setActiveStyles() {
        if (!this._active) {
            this._active = true;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    setInactiveStyles() {
        if (this._active) {
            this._active = false;
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel() {
        return this.viewValue;
    }
    /** Ensures the option is selected when activated from the keyboard. */
    _handleKeydown(event) {
        if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
            this._selectViaInteraction();
            event.preventDefault();
        }
    }
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     */
    _selectViaInteraction() {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent(true);
        }
    }
    /** Returns the correct tabindex for the option depending on disabled state. */
    // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
    // That's because `MatLegacyOption` use `MatOption` type in a few places such as
    // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
    _getTabIndex() {
        return this.disabled ? "-1" : "0";
    }
    /** Gets the host DOM element. */
    _getHostElement() {
        return this._element.nativeElement;
    }
    ngAfterViewChecked() {
        if (this._selected) {
            const viewValue = this.viewValue;
            if (viewValue !== this._mostRecentViewValue) {
                if (this._mostRecentViewValue) {
                    this._stateChanges.next();
                }
                this._mostRecentViewValue = viewValue;
            }
        }
    }
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    /** Emits the selection change event. */
    _emitSelectionChangeEvent(isUserInput = false) {
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    }
    static ɵfac = function MatOption_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatOption)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatOption,
        selectors: [["mat-option"]],
        viewQuery: function MatOption_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c2, 7);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._text = _t.first);
            }
        },
        hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
        hostVars: 11,
        hostBindings: function MatOption_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function MatOption_click_HostBindingHandler() {
                    return ctx._selectViaInteraction();
                })("keydown", function MatOption_keydown_HostBindingHandler($event) {
                    return ctx._handleKeydown($event);
                });
            }
            if (rf & 2) {
                i0.ɵɵdomProperty("id", ctx.id);
                i0.ɵɵattribute("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
                i0.ɵɵclassProp("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
            }
        },
        inputs: {
            value: "value",
            id: "id",
            disabled: [2, "disabled", "disabled", booleanAttribute]
        },
        outputs: {
            onSelectionChange: "onSelectionChange"
        },
        exportAs: ["matOption"],
        ngContentSelectors: _c4,
        decls: 8,
        vars: 5,
        consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]],
        template: function MatOption_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c3);
                i0.ɵɵconditionalCreate(0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
                i0.ɵɵprojection(1);
                i0.ɵɵelementStart(2, "span", 2, 0);
                i0.ɵɵprojection(4, 1);
                i0.ɵɵelementEnd();
                i0.ɵɵconditionalCreate(5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3);
                i0.ɵɵconditionalCreate(6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
                i0.ɵɵelement(7, "div", 5);
            }
            if (rf & 2) {
                i0.ɵɵconditional(ctx.multiple ? 0 : -1);
                i0.ɵɵadvance(5);
                i0.ɵɵconditional(!ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
                i0.ɵɵadvance();
                i0.ɵɵconditional(ctx.group && ctx.group._inert ? 6 : -1);
                i0.ɵɵadvance();
                i0.ɵɵproperty("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
            }
        },
        dependencies: [MatPseudoCheckbox, MatRipple],
        styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active,.mat-mdc-option-multiple,:focus,:hover){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active,.mat-mdc-option-multiple,:focus,:hover) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n'],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatOption, [{
            type: Component,
            args: [{
                    selector: "mat-option",
                    exportAs: "matOption",
                    host: {
                        "role": "option",
                        "[class.mdc-list-item--selected]": "selected",
                        "[class.mat-mdc-option-multiple]": "multiple",
                        "[class.mat-mdc-option-active]": "active",
                        "[class.mdc-list-item--disabled]": "disabled",
                        "[id]": "id",
                        // Set aria-selected to false for non-selected items and true for selected items. Conform to
                        // [WAI ARIA Listbox authoring practices guide](
                        //  https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), "If any options are selected, each
                        // selected option has either aria-selected or aria-checked  set to true. All options that are
                        // selectable but not selected have either aria-selected or aria-checked set to false." Align
                        // aria-selected implementation of Chips and List components.
                        //
                        // Set `aria-selected="false"` on not-selected listbox options to fix VoiceOver announcing
                        // every option as "selected" (#21491).
                        "[attr.aria-selected]": "selected",
                        "[attr.aria-disabled]": "disabled.toString()",
                        "(click)": "_selectViaInteraction()",
                        "(keydown)": "_handleKeydown($event)",
                        "class": "mat-mdc-option mdc-list-item"
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [MatPseudoCheckbox, MatRipple],
                    template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
                    styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active,.mat-mdc-option-multiple,:focus,:hover){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active,.mat-mdc-option-multiple,:focus,:hover) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n']
                }]
        }], () => [], {
        value: [{
                type: Input
            }],
        id: [{
                type: Input
            }],
        disabled: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        onSelectionChange: [{
                type: Output
            }],
        _text: [{
                type: ViewChild,
                args: ["text", {
                        static: true
                    }]
            }]
    });
})();
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
    if (optionGroups.length) {
        let optionsArray = options.toArray();
        let groups = optionGroups.toArray();
        let groupCounter = 0;
        for (let i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
                groupCounter++;
            }
        }
        return groupCounter;
    }
    return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
    if (optionOffset < currentScrollPosition) {
        return optionOffset;
    }
    if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
    }
    return currentScrollPosition;
}
export { MAT_OPTION_PARENT_COMPONENT, MAT_OPTGROUP, MatOptgroup, MatOptionSelectionChange, MatOption, _countGroupLabelsBeforeOption, _getOptionScrollPosition };
