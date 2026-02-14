import { _MatInternalFormField } from "@nf-internal/chunk-KAYNP57H";
import { MatRipple } from "@nf-internal/chunk-YH4D56O7";
import { _StructuralStylesLoader } from "@nf-internal/chunk-LDHZVRH4";
import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/checkbox.mjs
import * as i0 from "@angular/core";
import { InjectionToken, inject, ElementRef, ChangeDetectorRef, NgZone, EventEmitter, HostAttributeToken, signal, booleanAttribute, numberAttribute, forwardRef, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, ViewChild, NgModule } from "@angular/core";
import { _IdGenerator } from "@angular/cdk/a11y";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from "@angular/forms";
import { _CdkPrivateStyleLoader } from "@angular/cdk/private";
import { BidiModule } from "@angular/cdk/bidi";
import "@angular/cdk/layout";
import "@angular/cdk/platform";
import "@angular/cdk/coercion";
var _c0 = ["input"];
var _c1 = ["label"];
var _c2 = ["*"];
var checkboxDefaults = {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: false
};
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
    providedIn: "root",
    factory: () => checkboxDefaults
});
var TransitionCheckState;
(function (TransitionCheckState2) {
    TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
    TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
    TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
    TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MatCheckboxChange = class {
    /** The source checkbox of the event. */
    source;
    /** The new `checked` value of the checkbox. */
    checked;
};
var MatCheckbox = class _MatCheckbox {
    _elementRef = inject(ElementRef);
    _changeDetectorRef = inject(ChangeDetectorRef);
    _ngZone = inject(NgZone);
    _animationsDisabled = _animationsDisabled();
    _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
        optional: true
    });
    /** Focuses the checkbox. */
    focus() {
        this._inputElement.nativeElement.focus();
    }
    /** Creates the change event that will be emitted by the checkbox. */
    _createChangeEvent(isChecked) {
        const event = new MatCheckboxChange();
        event.source = this;
        event.checked = isChecked;
        return event;
    }
    /** Gets the element on which to add the animation CSS classes. */
    _getAnimationTargetElement() {
        return this._inputElement?.nativeElement;
    }
    /** CSS classes to add when transitioning between the different checkbox states. */
    _animationClasses = {
        uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
        uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
        checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
        checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
        indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
        indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
    };
    /**
     * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
     * take precedence so this may be omitted.
     */
    ariaLabel = "";
    /**
     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
     */
    ariaLabelledby = null;
    /** The 'aria-describedby' attribute is read after the element's label and field type. */
    ariaDescribedby;
    /**
     * Users can specify the `aria-expanded` attribute which will be forwarded to the input element
     */
    ariaExpanded;
    /**
     * Users can specify the `aria-controls` attribute which will be forwarded to the input element
     */
    ariaControls;
    /** Users can specify the `aria-owns` attribute which will be forwarded to the input element */
    ariaOwns;
    _uniqueId;
    /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
    id;
    /** Returns the unique id for the visual hidden input. */
    get inputId() {
        return `${this.id || this._uniqueId}-input`;
    }
    /** Whether the checkbox is required. */
    required;
    /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
    labelPosition = "after";
    /** Name value will be applied to the input element if present */
    name = null;
    /** Event emitted when the checkbox's `checked` value changes. */
    change = new EventEmitter();
    /** Event emitted when the checkbox's `indeterminate` value changes. */
    indeterminateChange = new EventEmitter();
    /** The value attribute of the native input element */
    value;
    /** Whether the checkbox has a ripple. */
    disableRipple;
    /** The native `<input type="checkbox">` element */
    _inputElement;
    /** The native `<label>` element */
    _labelElement;
    /** Tabindex for the checkbox. */
    tabIndex;
    // TODO(crisbeto): this should be a ThemePalette, but some internal apps were abusing
    // the lack of type checking previously and assigning random strings.
    /**
     * Theme color of the checkbox. This API is supported in M2 themes only, it
     * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/checkbox/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    /** Whether the checkbox should remain interactive when it is disabled. */
    disabledInteractive;
    /**
     * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
     * @docs-private
     */
    _onTouched = () => { };
    _currentAnimationClass = "";
    _currentCheckState = TransitionCheckState.Init;
    _controlValueAccessorChangeFn = () => { };
    _validatorChangeFn = () => { };
    constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const tabIndex = inject(new HostAttributeToken("tabindex"), {
            optional: true
        });
        this._options = this._options || checkboxDefaults;
        this.color = this._options.color || checkboxDefaults.color;
        this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
        this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
        this.disabledInteractive = this._options?.disabledInteractive ?? false;
    }
    ngOnChanges(changes) {
        if (changes["required"]) {
            this._validatorChangeFn();
        }
    }
    ngAfterViewInit() {
        this._syncIndeterminate(this.indeterminate);
    }
    /** Whether the checkbox is checked. */
    get checked() {
        return this._checked;
    }
    set checked(value) {
        if (value != this.checked) {
            this._checked = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    _checked = false;
    /** Whether the checkbox is disabled. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (value !== this.disabled) {
            this._disabled = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    _disabled = false;
    /**
     * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
     * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
     * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
     * set to false.
     */
    get indeterminate() {
        return this._indeterminate();
    }
    set indeterminate(value) {
        const changed = value != this._indeterminate();
        this._indeterminate.set(value);
        if (changed) {
            if (value) {
                this._transitionCheckState(TransitionCheckState.Indeterminate);
            }
            else {
                this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
            }
            this.indeterminateChange.emit(value);
        }
        this._syncIndeterminate(value);
    }
    _indeterminate = signal(false, ...(ngDevMode ? [{
            debugName: "_indeterminate"
        }] : []));
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    /** Method being called whenever the label text changes. */
    _onLabelTextChange() {
        this._changeDetectorRef.detectChanges();
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        this.checked = !!value;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    // Implemented as a part of Validator.
    validate(control) {
        return this.required && control.value !== true ? {
            "required": true
        } : null;
    }
    // Implemented as a part of Validator.
    registerOnValidatorChange(fn) {
        this._validatorChangeFn = fn;
    }
    _transitionCheckState(newState) {
        let oldState = this._currentCheckState;
        let element = this._getAnimationTargetElement();
        if (oldState === newState || !element) {
            return;
        }
        if (this._currentAnimationClass) {
            element.classList.remove(this._currentAnimationClass);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
            element.classList.add(this._currentAnimationClass);
            const animationClass = this._currentAnimationClass;
            this._ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    element.classList.remove(animationClass);
                }, 1e3);
            });
        }
    }
    _emitChangeEvent() {
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(this._createChangeEvent(this.checked));
        if (this._inputElement) {
            this._inputElement.nativeElement.checked = this.checked;
        }
    }
    /** Toggles the `checked` state of the checkbox. */
    toggle() {
        this.checked = !this.checked;
        this._controlValueAccessorChangeFn(this.checked);
    }
    _handleInputClick() {
        const clickAction = this._options?.clickAction;
        if (!this.disabled && clickAction !== "noop") {
            if (this.indeterminate && clickAction !== "check") {
                Promise.resolve().then(() => {
                    this._indeterminate.set(false);
                    this.indeterminateChange.emit(false);
                });
            }
            this._checked = !this._checked;
            this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
            this._emitChangeEvent();
        }
        else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
            this._inputElement.nativeElement.checked = this.checked;
            this._inputElement.nativeElement.indeterminate = this.indeterminate;
        }
    }
    _onInteractionEvent(event) {
        event.stopPropagation();
    }
    _onBlur() {
        Promise.resolve().then(() => {
            this._onTouched();
            this._changeDetectorRef.markForCheck();
        });
    }
    _getAnimationClassForCheckStateTransition(oldState, newState) {
        if (this._animationsDisabled) {
            return "";
        }
        switch (oldState) {
            case TransitionCheckState.Init:
                if (newState === TransitionCheckState.Checked) {
                    return this._animationClasses.uncheckedToChecked;
                }
                else if (newState == TransitionCheckState.Indeterminate) {
                    return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
                }
                break;
            case TransitionCheckState.Unchecked:
                return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
            case TransitionCheckState.Checked:
                return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
            case TransitionCheckState.Indeterminate:
                return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
        }
        return "";
    }
    /**
     * Syncs the indeterminate value with the checkbox DOM node.
     *
     * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
     * property is supported on an element boils down to `if (propName in element)`. Domino's
     * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
     * server-side rendering.
     */
    _syncIndeterminate(value) {
        const nativeCheckbox = this._inputElement;
        if (nativeCheckbox) {
            nativeCheckbox.nativeElement.indeterminate = value;
        }
    }
    _onInputClick() {
        this._handleInputClick();
    }
    _onTouchTargetClick() {
        this._handleInputClick();
        if (!this.disabled) {
            this._inputElement.nativeElement.focus();
        }
    }
    /**
     *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
     *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
     *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
     *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
     *  bubbles when the label is clicked.
     */
    _preventBubblingFromLabel(event) {
        if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
            event.stopPropagation();
        }
    }
    static ɵfac = function MatCheckbox_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCheckbox)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatCheckbox,
        selectors: [["mat-checkbox"]],
        viewQuery: function MatCheckbox_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 5);
                i0.ɵɵviewQuery(_c1, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._inputElement = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._labelElement = _t.first);
            }
        },
        hostAttrs: [1, "mat-mdc-checkbox"],
        hostVars: 16,
        hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵdomProperty("id", ctx.id);
                i0.ɵɵattribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
                i0.ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
                i0.ɵɵclassProp("_mat-animation-noopable", ctx._animationsDisabled)("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
            }
        },
        inputs: {
            ariaLabel: [0, "aria-label", "ariaLabel"],
            ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
            ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
            ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
            ariaControls: [0, "aria-controls", "ariaControls"],
            ariaOwns: [0, "aria-owns", "ariaOwns"],
            id: "id",
            required: [2, "required", "required", booleanAttribute],
            labelPosition: "labelPosition",
            name: "name",
            value: "value",
            disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
            tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? void 0 : numberAttribute(value)],
            color: "color",
            disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
            checked: [2, "checked", "checked", booleanAttribute],
            disabled: [2, "disabled", "disabled", booleanAttribute],
            indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
        },
        outputs: {
            change: "change",
            indeterminateChange: "indeterminateChange"
        },
        exportAs: ["matCheckbox"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => _MatCheckbox),
                    multi: true
                }, {
                    provide: NG_VALIDATORS,
                    useExisting: _MatCheckbox,
                    multi: true
                }]), i0.ɵɵNgOnChangesFeature],
        ngContentSelectors: _c2,
        decls: 15,
        vars: 23,
        consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
        template: function MatCheckbox_Template(rf, ctx) {
            if (rf & 1) {
                const _r1 = i0.ɵɵgetCurrentView();
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 3);
                i0.ɵɵlistener("click", function MatCheckbox_Template_div_click_0_listener($event) {
                    i0.ɵɵrestoreView(_r1);
                    return i0.ɵɵresetView(ctx._preventBubblingFromLabel($event));
                });
                i0.ɵɵelementStart(1, "div", 4, 0)(3, "div", 5);
                i0.ɵɵlistener("click", function MatCheckbox_Template_div_click_3_listener() {
                    i0.ɵɵrestoreView(_r1);
                    return i0.ɵɵresetView(ctx._onTouchTargetClick());
                });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "input", 6, 1);
                i0.ɵɵlistener("blur", function MatCheckbox_Template_input_blur_4_listener() {
                    i0.ɵɵrestoreView(_r1);
                    return i0.ɵɵresetView(ctx._onBlur());
                })("click", function MatCheckbox_Template_input_click_4_listener() {
                    i0.ɵɵrestoreView(_r1);
                    return i0.ɵɵresetView(ctx._onInputClick());
                })("change", function MatCheckbox_Template_input_change_4_listener($event) {
                    i0.ɵɵrestoreView(_r1);
                    return i0.ɵɵresetView(ctx._onInteractionEvent($event));
                });
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "div", 7);
                i0.ɵɵelementStart(7, "div", 8);
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(8, "svg", 9);
                i0.ɵɵelement(9, "path", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelement(10, "div", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(11, "div", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "label", 13, 2);
                i0.ɵɵprojection(14);
                i0.ɵɵelementEnd()();
            }
            if (rf & 2) {
                const checkbox_r2 = i0.ɵɵreference(2);
                i0.ɵɵproperty("labelPosition", ctx.labelPosition);
                i0.ɵɵadvance(4);
                i0.ɵɵclassProp("mdc-checkbox--selected", ctx.checked);
                i0.ɵɵproperty("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
                i0.ɵɵattribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
                i0.ɵɵadvance();
                i0.ɵɵproperty("for", ctx.inputId);
            }
        },
        dependencies: [MatRipple, _MatInternalFormField],
        styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n'],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCheckbox, [{
            type: Component,
            args: [{
                    selector: "mat-checkbox",
                    host: {
                        "class": "mat-mdc-checkbox",
                        "[attr.tabindex]": "null",
                        "[attr.aria-label]": "null",
                        "[attr.aria-labelledby]": "null",
                        "[class._mat-animation-noopable]": "_animationsDisabled",
                        "[class.mdc-checkbox--disabled]": "disabled",
                        "[id]": "id",
                        // Add classes that users can use to more easily target disabled or checked checkboxes.
                        "[class.mat-mdc-checkbox-disabled]": "disabled",
                        "[class.mat-mdc-checkbox-checked]": "checked",
                        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
                        "[class]": 'color ? "mat-" + color : "mat-accent"'
                    },
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => MatCheckbox),
                            multi: true
                        }, {
                            provide: NG_VALIDATORS,
                            useExisting: MatCheckbox,
                            multi: true
                        }],
                    exportAs: "matCheckbox",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    imports: [MatRipple, _MatInternalFormField],
                    template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
                    styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}\n']
                }]
        }], () => [], {
        ariaLabel: [{
                type: Input,
                args: ["aria-label"]
            }],
        ariaLabelledby: [{
                type: Input,
                args: ["aria-labelledby"]
            }],
        ariaDescribedby: [{
                type: Input,
                args: ["aria-describedby"]
            }],
        ariaExpanded: [{
                type: Input,
                args: [{
                        alias: "aria-expanded",
                        transform: booleanAttribute
                    }]
            }],
        ariaControls: [{
                type: Input,
                args: ["aria-controls"]
            }],
        ariaOwns: [{
                type: Input,
                args: ["aria-owns"]
            }],
        id: [{
                type: Input
            }],
        required: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        labelPosition: [{
                type: Input
            }],
        name: [{
                type: Input
            }],
        change: [{
                type: Output
            }],
        indeterminateChange: [{
                type: Output
            }],
        value: [{
                type: Input
            }],
        disableRipple: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        _inputElement: [{
                type: ViewChild,
                args: ["input"]
            }],
        _labelElement: [{
                type: ViewChild,
                args: ["label"]
            }],
        tabIndex: [{
                type: Input,
                args: [{
                        transform: value => value == null ? void 0 : numberAttribute(value)
                    }]
            }],
        color: [{
                type: Input
            }],
        disabledInteractive: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        checked: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        disabled: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        indeterminate: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var MatCheckboxModule = class _MatCheckboxModule {
    static ɵfac = function MatCheckboxModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCheckboxModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatCheckboxModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [MatCheckbox, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCheckboxModule, [{
            type: NgModule,
            args: [{
                    imports: [MatCheckbox],
                    exports: [MatCheckbox, BidiModule]
                }]
        }], null, null);
})();
export { MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckbox, MatCheckboxChange, MatCheckboxModule, TransitionCheckState };
