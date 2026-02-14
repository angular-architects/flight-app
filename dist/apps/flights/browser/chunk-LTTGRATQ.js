import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
// node_modules/@angular/material/fesm2022/pseudo-checkbox.mjs
import * as i0 from "@angular/core";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from "@angular/core";
var MatPseudoCheckbox = class _MatPseudoCheckbox {
    _animationsDisabled = _animationsDisabled();
    /** Display state of the checkbox. */
    state = "unchecked";
    /** Whether the checkbox is disabled. */
    disabled = false;
    /**
     * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
     * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
     */
    appearance = "full";
    constructor() { }
    static ɵfac = function MatPseudoCheckbox_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatPseudoCheckbox)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatPseudoCheckbox,
        selectors: [["mat-pseudo-checkbox"]],
        hostAttrs: [1, "mat-pseudo-checkbox"],
        hostVars: 12,
        hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationsDisabled);
            }
        },
        inputs: {
            state: "state",
            disabled: "disabled",
            appearance: "appearance"
        },
        decls: 0,
        vars: 0,
        template: function MatPseudoCheckbox_Template(rf, ctx) { },
        styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPseudoCheckbox, [{
            type: Component,
            args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: "mat-pseudo-checkbox",
                    template: "",
                    host: {
                        "class": "mat-pseudo-checkbox",
                        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
                        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
                        "[class.mat-pseudo-checkbox-disabled]": "disabled",
                        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
                        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
                        "[class._mat-animation-noopable]": "_animationsDisabled"
                    },
                    styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n']
                }]
        }], () => [], {
        state: [{
                type: Input
            }],
        disabled: [{
                type: Input
            }],
        appearance: [{
                type: Input
            }]
    });
})();
export { MatPseudoCheckbox };
