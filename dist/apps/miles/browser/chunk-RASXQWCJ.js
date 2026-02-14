import { MatRippleLoader } from "@nf-internal/chunk-Y3NYZT6H";
import { _StructuralStylesLoader } from "@nf-internal/chunk-LDHZVRH4";
import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
// node_modules/@angular/material/fesm2022/icon-button.mjs
import * as i0 from "@angular/core";
import { InjectionToken, inject, ElementRef, NgZone, Renderer2, booleanAttribute, Directive, Input, numberAttribute, Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";
import { FocusMonitor } from "@angular/cdk/a11y";
import { _CdkPrivateStyleLoader } from "@angular/cdk/private";
var _c0 = ["mat-icon-button", ""];
var _c1 = ["*"];
var MAT_BUTTON_CONFIG = new InjectionToken("MAT_BUTTON_CONFIG");
function transformTabIndex(value) {
    return value == null ? void 0 : numberAttribute(value);
}
var MatButtonBase = class _MatButtonBase {
    _elementRef = inject(ElementRef);
    _ngZone = inject(NgZone);
    _animationsDisabled = _animationsDisabled();
    _config = inject(MAT_BUTTON_CONFIG, {
        optional: true
    });
    _focusMonitor = inject(FocusMonitor);
    _cleanupClick;
    _renderer = inject(Renderer2);
    /**
     * Handles the lazy creation of the MatButton ripple.
     * Used to improve initial load time of large applications.
     */
    _rippleLoader = inject(MatRippleLoader);
    /** Whether the button is set on an anchor node. */
    _isAnchor;
    /** Whether this button is a FAB. Used to apply the correct class on the ripple. */
    _isFab = false;
    /**
     * Theme color of the button. This API is supported in M2 themes only, it has
     * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/button/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    /** Whether the ripple effect is disabled or not. */
    get disableRipple() {
        return this._disableRipple;
    }
    set disableRipple(value) {
        this._disableRipple = value;
        this._updateRippleDisabled();
    }
    _disableRipple = false;
    /** Whether the button is disabled. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this._updateRippleDisabled();
    }
    _disabled = false;
    /** `aria-disabled` value of the button. */
    ariaDisabled;
    /**
     * Natively disabled buttons prevent focus and any pointer events from reaching the button.
     * In some scenarios this might not be desirable, because it can prevent users from finding out
     * why the button is disabled (e.g. via tooltip). This is also useful for buttons that may
     * become disabled when activated, which would cause focus to be transferred to the document
     * body instead of remaining on the button.
     *
     * Enabling this input will change the button so that it is styled to be disabled and will be
     * marked as `aria-disabled`, but it will allow the button to receive events and focus.
     *
     * Note that by enabling this, you need to set the `tabindex` yourself if the button isn't
     * meant to be tabbable and you have to prevent the button action (e.g. form submissions).
     */
    disabledInteractive;
    /** Tab index for the button. */
    tabIndex;
    /**
     * Backwards-compatibility input that handles pre-existing `[tabindex]` bindings.
     * @docs-private
     */
    set _tabindex(value) {
        this.tabIndex = value;
    }
    constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const element = this._elementRef.nativeElement;
        this._isAnchor = element.tagName === "A";
        this.disabledInteractive = this._config?.disabledInteractive ?? false;
        this.color = this._config?.color ?? null;
        this._rippleLoader?.configureRipple(element, {
            className: "mat-mdc-button-ripple"
        });
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
        if (this._isAnchor) {
            this._setupAsAnchor();
        }
    }
    ngOnDestroy() {
        this._cleanupClick?.();
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
    }
    /** Focuses the button. */
    focus(origin = "program", options) {
        if (origin) {
            this._focusMonitor.focusVia(this._elementRef.nativeElement, origin, options);
        }
        else {
            this._elementRef.nativeElement.focus(options);
        }
    }
    _getAriaDisabled() {
        if (this.ariaDisabled != null) {
            return this.ariaDisabled;
        }
        if (this._isAnchor) {
            return this.disabled || null;
        }
        return this.disabled && this.disabledInteractive ? true : null;
    }
    _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : true;
    }
    _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(this._elementRef.nativeElement, this.disableRipple || this.disabled);
    }
    _getTabIndex() {
        if (this._isAnchor) {
            return this.disabled && !this.disabledInteractive ? -1 : this.tabIndex;
        }
        return this.tabIndex;
    }
    _setupAsAnchor() {
        this._cleanupClick = this._ngZone.runOutsideAngular(() => this._renderer.listen(this._elementRef.nativeElement, "click", event => {
            if (this.disabled) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        }));
    }
    static ɵfac = function MatButtonBase_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatButtonBase)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatButtonBase,
        hostAttrs: [1, "mat-mdc-button-base"],
        hostVars: 13,
        hostBindings: function MatButtonBase_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("disabled", ctx._getDisabledAttribute())("aria-disabled", ctx._getAriaDisabled())("tabindex", ctx._getTabIndex());
                i0.ɵɵclassMap(ctx.color ? "mat-" + ctx.color : "");
                i0.ɵɵclassProp("mat-mdc-button-disabled", ctx.disabled)("mat-mdc-button-disabled-interactive", ctx.disabledInteractive)("mat-unthemed", !ctx.color)("_mat-animation-noopable", ctx._animationsDisabled);
            }
        },
        inputs: {
            color: "color",
            disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
            disabled: [2, "disabled", "disabled", booleanAttribute],
            ariaDisabled: [2, "aria-disabled", "ariaDisabled", booleanAttribute],
            disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
            tabIndex: [2, "tabIndex", "tabIndex", transformTabIndex],
            _tabindex: [2, "tabindex", "_tabindex", transformTabIndex]
        }
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatButtonBase, [{
            type: Directive,
            args: [{
                    host: {
                        // Add a class that applies to all buttons. This makes it easier to target if somebody
                        // wants to target all Material buttons.
                        "class": "mat-mdc-button-base",
                        "[class]": 'color ? "mat-" + color : ""',
                        "[attr.disabled]": "_getDisabledAttribute()",
                        "[attr.aria-disabled]": "_getAriaDisabled()",
                        "[attr.tabindex]": "_getTabIndex()",
                        "[class.mat-mdc-button-disabled]": "disabled",
                        "[class.mat-mdc-button-disabled-interactive]": "disabledInteractive",
                        "[class.mat-unthemed]": "!color",
                        "[class._mat-animation-noopable]": "_animationsDisabled"
                    }
                }]
        }], () => [], {
        color: [{
                type: Input
            }],
        disableRipple: [{
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
        ariaDisabled: [{
                type: Input,
                args: [{
                        transform: booleanAttribute,
                        alias: "aria-disabled"
                    }]
            }],
        disabledInteractive: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        tabIndex: [{
                type: Input,
                args: [{
                        transform: transformTabIndex
                    }]
            }],
        _tabindex: [{
                type: Input,
                args: [{
                        alias: "tabindex",
                        transform: transformTabIndex
                    }]
            }]
    });
})();
var MatIconButton = class _MatIconButton extends MatButtonBase {
    constructor() {
        super();
        this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
            centered: true
        });
    }
    static ɵfac = function MatIconButton_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatIconButton)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatIconButton,
        selectors: [["button", "mat-icon-button", ""], ["a", "mat-icon-button", ""], ["button", "matIconButton", ""], ["a", "matIconButton", ""]],
        hostAttrs: [1, "mdc-icon-button", "mat-mdc-icon-button"],
        exportAs: ["matButton", "matAnchor"],
        features: [i0.ɵɵInheritDefinitionFeature],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"], [1, "mat-focus-indicator"], [1, "mat-mdc-button-touch-target"]],
        template: function MatIconButton_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵdomElement(0, "span", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵdomElement(2, "span", 1)(3, "span", 2);
            }
        },
        styles: ['.mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));flex-shrink:0;text-align:center;width:var(--mat-icon-button-state-layer-size, 40px);height:var(--mat-icon-button-state-layer-size, 40px);padding:calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);font-size:var(--mat-icon-button-icon-size, 24px);color:var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-icon-button:focus>.mat-focus-indicator::before{content:"";border-radius:inherit}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-icon-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-icon-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-icon-button-touch-target-size, 48px);display:var(--mat-icon-button-touch-target-display, block);left:50%;width:var(--mat-icon-button-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mat-icon-button-icon-size, 24px);height:var(--mat-icon-button-icon-size, 24px);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%))}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}\n', "@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatIconButton, [{
            type: Component,
            args: [{
                    selector: `button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]`,
                    host: {
                        "class": "mdc-icon-button mat-mdc-icon-button"
                    },
                    exportAs: "matButton, matAnchor",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `<span class="mat-mdc-button-persistent-ripple mdc-icon-button__ripple"></span>

<ng-content></ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`,
                    styles: ['.mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));flex-shrink:0;text-align:center;width:var(--mat-icon-button-state-layer-size, 40px);height:var(--mat-icon-button-state-layer-size, 40px);padding:calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);font-size:var(--mat-icon-button-icon-size, 24px);color:var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-icon-button:focus>.mat-focus-indicator::before{content:"";border-radius:inherit}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-icon-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-icon-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-icon-button-touch-target-size, 48px);display:var(--mat-icon-button-touch-target-display, block);left:50%;width:var(--mat-icon-button-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mat-icon-button-icon-size, 24px);height:var(--mat-icon-button-icon-size, 24px);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%))}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}\n', "@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}\n"]
                }]
        }], () => [], null);
})();
var MatIconAnchor = MatIconButton;
export { MAT_BUTTON_CONFIG, MatButtonBase, MatIconButton, MatIconAnchor };
