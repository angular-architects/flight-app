import { MatFormFieldModule } from "@nf-internal/chunk-PRFT4OOY";
import { MAT_INPUT_VALUE_ACCESSOR } from "@nf-internal/chunk-7FTMHMUE";
import { _ErrorStateTracker } from "@nf-internal/chunk-5UAVXUH3";
import { ErrorStateMatcher } from "@nf-internal/chunk-JH7AURNV";
import { MAT_FORM_FIELD, MatError, MatFormField, MatFormFieldControl, MatHint, MatLabel, MatPrefix, MatSuffix } from "@nf-internal/chunk-PK4EDZ3R";
import "@nf-internal/chunk-C4FVYSZR";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/input.mjs
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { Platform, getSupportedInputTypes } from "@angular/cdk/platform";
import { AutofillMonitor, TextFieldModule } from "@angular/cdk/text-field";
import * as i0 from "@angular/core";
import { InjectionToken, inject, ElementRef, NgZone, Renderer2, isSignal, effect, booleanAttribute, Directive, Input, NgModule } from "@angular/core";
import { _IdGenerator } from "@angular/cdk/a11y";
import { NgControl, Validators, NgForm, FormGroupDirective } from "@angular/forms";
import { Subject } from "rxjs";
import { BidiModule } from "@angular/cdk/bidi";
import "@angular/common";
import "rxjs/operators";
import "@angular/cdk/observers/private";
import "@angular/cdk/layout";
import "@angular/cdk/observers";
function getMatInputUnsupportedTypeError(type) {
    return Error(`Input type "${type}" isn't supported by matInput.`);
}
var MAT_INPUT_INVALID_TYPES = ["button", "checkbox", "file", "hidden", "image", "radio", "range", "reset", "submit"];
var MAT_INPUT_CONFIG = new InjectionToken("MAT_INPUT_CONFIG");
var MatInput = class _MatInput {
    _elementRef = inject(ElementRef);
    _platform = inject(Platform);
    ngControl = inject(NgControl, {
        optional: true,
        self: true
    });
    _autofillMonitor = inject(AutofillMonitor);
    _ngZone = inject(NgZone);
    _formField = inject(MAT_FORM_FIELD, {
        optional: true
    });
    _renderer = inject(Renderer2);
    _uid = inject(_IdGenerator).getId("mat-input-");
    _previousNativeValue;
    _inputValueAccessor;
    _signalBasedValueAccessor;
    _previousPlaceholder;
    _errorStateTracker;
    _config = inject(MAT_INPUT_CONFIG, {
        optional: true
    });
    _cleanupIosKeyup;
    _cleanupWebkitWheel;
    /** Whether the component is being rendered on the server. */
    _isServer;
    /** Whether the component is a native html select. */
    _isNativeSelect;
    /** Whether the component is a textarea. */
    _isTextarea;
    /** Whether the input is inside of a form field. */
    _isInFormField;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    focused = false;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    stateChanges = new Subject();
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    controlType = "mat-input";
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    autofilled = false;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        if (this.focused) {
            this.focused = false;
            this.stateChanges.next();
        }
    }
    _disabled = false;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value || this._uid;
    }
    _id;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    placeholder;
    /**
     * Name of the input.
     * @docs-private
     */
    name;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
    }
    _required;
    /** Input type of the element. */
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value || "text";
        this._validateType();
        if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
            this._elementRef.nativeElement.type = this._type;
        }
    }
    _type = "text";
    /** An object used to control when error messages are shown. */
    get errorStateMatcher() {
        return this._errorStateTracker.matcher;
    }
    set errorStateMatcher(value) {
        this._errorStateTracker.matcher = value;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    userAriaDescribedBy;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get value() {
        return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
    }
    set value(value) {
        if (value !== this.value) {
            if (this._signalBasedValueAccessor) {
                this._signalBasedValueAccessor.value.set(value);
            }
            else {
                this._inputValueAccessor.value = value;
            }
            this.stateChanges.next();
        }
    }
    /** Whether the element is readonly. */
    get readonly() {
        return this._readonly;
    }
    set readonly(value) {
        this._readonly = coerceBooleanProperty(value);
    }
    _readonly = false;
    /** Whether the input should remain interactive when it is disabled. */
    disabledInteractive;
    /** Whether the input is in an error state. */
    get errorState() {
        return this._errorStateTracker.errorState;
    }
    set errorState(value) {
        this._errorStateTracker.errorState = value;
    }
    _neverEmptyInputTypes = ["date", "datetime", "datetime-local", "month", "time", "week"].filter(t => getSupportedInputTypes().has(t));
    constructor() {
        const parentForm = inject(NgForm, {
            optional: true
        });
        const parentFormGroup = inject(FormGroupDirective, {
            optional: true
        });
        const defaultErrorStateMatcher = inject(ErrorStateMatcher);
        const accessor = inject(MAT_INPUT_VALUE_ACCESSOR, {
            optional: true,
            self: true
        });
        const element = this._elementRef.nativeElement;
        const nodeName = element.nodeName.toLowerCase();
        if (accessor) {
            if (isSignal(accessor.value)) {
                this._signalBasedValueAccessor = accessor;
            }
            else {
                this._inputValueAccessor = accessor;
            }
        }
        else {
            this._inputValueAccessor = element;
        }
        this._previousNativeValue = this.value;
        this.id = this.id;
        if (this._platform.IOS) {
            this._ngZone.runOutsideAngular(() => {
                this._cleanupIosKeyup = this._renderer.listen(element, "keyup", this._iOSKeyupListener);
            });
        }
        this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
        this._isServer = !this._platform.isBrowser;
        this._isNativeSelect = nodeName === "select";
        this._isTextarea = nodeName === "textarea";
        this._isInFormField = !!this._formField;
        this.disabledInteractive = this._config?.disabledInteractive || false;
        if (this._isNativeSelect) {
            this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
        }
        if (this._signalBasedValueAccessor) {
            effect(() => {
                this._signalBasedValueAccessor.value();
                this.stateChanges.next();
            });
        }
    }
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(event => {
                this.autofilled = event.isAutofilled;
                this.stateChanges.next();
            });
        }
    }
    ngOnChanges() {
        this.stateChanges.next();
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
        this._cleanupIosKeyup?.();
        this._cleanupWebkitWheel?.();
    }
    ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
            if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
                this.disabled = this.ngControl.disabled;
                this.stateChanges.next();
            }
        }
        this._dirtyCheckNativeValue();
        this._dirtyCheckPlaceholder();
    }
    /** Focuses the input. */
    focus(options) {
        this._elementRef.nativeElement.focus(options);
    }
    /** Refreshes the error state of the input. */
    updateErrorState() {
        this._errorStateTracker.updateErrorState();
    }
    /** Callback for the cases where the focused state of the input changes. */
    _focusChanged(isFocused) {
        if (isFocused === this.focused) {
            return;
        }
        if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
            const element = this._elementRef.nativeElement;
            if (element.type === "number") {
                element.type = "text";
                element.setSelectionRange(0, 0);
                element.type = "number";
            }
            else {
                element.setSelectionRange(0, 0);
            }
        }
        this.focused = isFocused;
        this.stateChanges.next();
    }
    _onInput() { }
    /** Does some manual dirty checking on the native input `value` property. */
    _dirtyCheckNativeValue() {
        const newValue = this._elementRef.nativeElement.value;
        if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this.stateChanges.next();
        }
    }
    /** Does some manual dirty checking on the native input `placeholder` attribute. */
    _dirtyCheckPlaceholder() {
        const placeholder = this._getPlaceholder();
        if (placeholder !== this._previousPlaceholder) {
            const element = this._elementRef.nativeElement;
            this._previousPlaceholder = placeholder;
            placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
        }
    }
    /** Gets the current placeholder of the form field. */
    _getPlaceholder() {
        return this.placeholder || null;
    }
    /** Make sure the input is a supported type. */
    _validateType() {
        if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getMatInputUnsupportedTypeError(this._type);
        }
    }
    /** Checks whether the input type is one of the types that are never empty. */
    _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    }
    /** Checks whether the input is invalid based on the native validation. */
    _isBadInput() {
        let validity = this._elementRef.nativeElement.validity;
        return validity && validity.badInput;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get empty() {
        return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
        if (this._isNativeSelect) {
            const selectElement = this._elementRef.nativeElement;
            const firstOption = selectElement.options[0];
            return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
        }
        else {
            return this.focused && !this.disabled || !this.empty;
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get describedByIds() {
        const element = this._elementRef.nativeElement;
        const existingDescribedBy = element.getAttribute("aria-describedby");
        return existingDescribedBy?.split(" ") || [];
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
        const element = this._elementRef.nativeElement;
        if (ids.length) {
            element.setAttribute("aria-describedby", ids.join(" "));
        }
        else {
            element.removeAttribute("aria-describedby");
        }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick() {
        if (!this.focused) {
            this.focus();
        }
    }
    /** Whether the form control is a native select that is displayed inline. */
    _isInlineSelect() {
        const element = this._elementRef.nativeElement;
        return this._isNativeSelect && (element.multiple || element.size > 1);
    }
    _iOSKeyupListener = event => {
        const el = event.target;
        if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
            el.setSelectionRange(1, 1);
            el.setSelectionRange(0, 0);
        }
    };
    /** Gets the value to set on the `readonly` attribute. */
    _getReadonlyAttribute() {
        if (this._isNativeSelect) {
            return null;
        }
        if (this.readonly || this.disabled && this.disabledInteractive) {
            return "true";
        }
        return null;
    }
    static ɵfac = function MatInput_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatInput)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatInput,
        selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
        hostAttrs: [1, "mat-mdc-input-element"],
        hostVars: 21,
        hostBindings: function MatInput_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("focus", function MatInput_focus_HostBindingHandler() {
                    return ctx._focusChanged(true);
                })("blur", function MatInput_blur_HostBindingHandler() {
                    return ctx._focusChanged(false);
                })("input", function MatInput_input_HostBindingHandler() {
                    return ctx._onInput();
                });
            }
            if (rf & 2) {
                i0.ɵɵdomProperty("id", ctx.id)("disabled", ctx.disabled && !ctx.disabledInteractive)("required", ctx.required);
                i0.ɵɵattribute("name", ctx.name || null)("readonly", ctx._getReadonlyAttribute())("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null)("aria-invalid", ctx.empty && ctx.required ? null : ctx.errorState)("aria-required", ctx.required)("id", ctx.id);
                i0.ɵɵclassProp("mat-input-server", ctx._isServer)("mat-mdc-form-field-textarea-control", ctx._isInFormField && ctx._isTextarea)("mat-mdc-form-field-input-control", ctx._isInFormField)("mat-mdc-input-disabled-interactive", ctx.disabledInteractive)("mdc-text-field__input", ctx._isInFormField)("mat-mdc-native-select-inline", ctx._isInlineSelect());
            }
        },
        inputs: {
            disabled: "disabled",
            id: "id",
            placeholder: "placeholder",
            name: "name",
            required: "required",
            type: "type",
            errorStateMatcher: "errorStateMatcher",
            userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
            value: "value",
            readonly: "readonly",
            disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
        },
        exportAs: ["matInput"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: MatFormFieldControl,
                    useExisting: _MatInput
                }]), i0.ɵɵNgOnChangesFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatInput, [{
            type: Directive,
            args: [{
                    selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
                    exportAs: "matInput",
                    host: {
                        "class": "mat-mdc-input-element",
                        // The BaseMatInput parent class adds `mat-input-element`, `mat-form-field-control` and
                        // `mat-form-field-autofill-control` to the CSS class list, but this should not be added for
                        // this MDC equivalent input.
                        "[class.mat-input-server]": "_isServer",
                        "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
                        "[class.mat-mdc-form-field-input-control]": "_isInFormField",
                        "[class.mat-mdc-input-disabled-interactive]": "disabledInteractive",
                        "[class.mdc-text-field__input]": "_isInFormField",
                        "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
                        // Native input properties that are overwritten by Angular inputs need to be synced with
                        // the native input element. Otherwise property bindings for those don't work.
                        "[id]": "id",
                        "[disabled]": "disabled && !disabledInteractive",
                        "[required]": "required",
                        "[attr.name]": "name || null",
                        "[attr.readonly]": "_getReadonlyAttribute()",
                        "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
                        // Only mark the input as invalid for assistive technology if it has a value since the
                        // state usually overlaps with `aria-required` when the input is empty and can be redundant.
                        "[attr.aria-invalid]": "(empty && required) ? null : errorState",
                        "[attr.aria-required]": "required",
                        // Native input properties that are overwritten by Angular inputs need to be synced with
                        // the native input element. Otherwise property bindings for those don't work.
                        "[attr.id]": "id",
                        "(focus)": "_focusChanged(true)",
                        "(blur)": "_focusChanged(false)",
                        "(input)": "_onInput()"
                    },
                    providers: [{
                            provide: MatFormFieldControl,
                            useExisting: MatInput
                        }]
                }]
        }], () => [], {
        disabled: [{
                type: Input
            }],
        id: [{
                type: Input
            }],
        placeholder: [{
                type: Input
            }],
        name: [{
                type: Input
            }],
        required: [{
                type: Input
            }],
        type: [{
                type: Input
            }],
        errorStateMatcher: [{
                type: Input
            }],
        userAriaDescribedBy: [{
                type: Input,
                args: ["aria-describedby"]
            }],
        value: [{
                type: Input
            }],
        readonly: [{
                type: Input
            }],
        disabledInteractive: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var MatInputModule = class _MatInputModule {
    static ɵfac = function MatInputModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatInputModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatInputModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [MatFormFieldModule, MatFormFieldModule, TextFieldModule, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatInputModule, [{
            type: NgModule,
            args: [{
                    imports: [MatFormFieldModule, MatInput],
                    exports: [MatInput, MatFormFieldModule, TextFieldModule, BidiModule]
                }]
        }], null, null);
})();
export { MAT_INPUT_CONFIG, MAT_INPUT_VALUE_ACCESSOR, MatError, MatFormField, MatHint, MatInput, MatInputModule, MatLabel, MatPrefix, MatSuffix, getMatInputUnsupportedTypeError };
