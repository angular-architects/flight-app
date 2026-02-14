import { _getAnimationsState } from "@nf-internal/chunk-C4FVYSZR";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/progress-spinner.mjs
import * as i0 from "@angular/core";
import { InjectionToken, inject, ElementRef, numberAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ViewChild, NgModule } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { BidiModule } from "@angular/cdk/bidi";
import "@angular/cdk/layout";
var _c0 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 11);
        i0.ɵɵelement(1, "circle", 12);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵattribute("viewBox", ctx_r0._viewBox());
        i0.ɵɵadvance();
        i0.ɵɵstyleProp("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
        i0.ɵɵattribute("r", ctx_r0._circleRadius());
    }
}
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
    providedIn: "root",
    factory: () => ({
        diameter: BASE_SIZE
    })
});
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var MatProgressSpinner = class _MatProgressSpinner {
    _elementRef = inject(ElementRef);
    /** Whether the _mat-animation-noopable class should be applied, disabling animations.  */
    _noopAnimations;
    // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
    /**
     * Theme color of the progress spinner. This API is supported in M2 themes only, it
     * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/progress-spinner/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    get color() {
        return this._color || this._defaultColor;
    }
    set color(value) {
        this._color = value;
    }
    _color;
    _defaultColor = "primary";
    /** The element of the determinate spinner. */
    _determinateCircle;
    constructor() {
        const defaults = inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS);
        const animationsState = _getAnimationsState();
        const element = this._elementRef.nativeElement;
        this._noopAnimations = animationsState === "di-disabled" && !!defaults && !defaults._forceAnimations;
        this.mode = element.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
        if (!this._noopAnimations && animationsState === "reduced-motion") {
            element.classList.add("mat-progress-spinner-reduced-motion");
        }
        if (defaults) {
            if (defaults.color) {
                this.color = this._defaultColor = defaults.color;
            }
            if (defaults.diameter) {
                this.diameter = defaults.diameter;
            }
            if (defaults.strokeWidth) {
                this.strokeWidth = defaults.strokeWidth;
            }
        }
    }
    /**
     * Mode of the progress bar.
     *
     * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
     * 'determinate'.
     * Mirrored to mode attribute.
     */
    mode;
    /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
    get value() {
        return this.mode === "determinate" ? this._value : 0;
    }
    set value(v) {
        this._value = Math.max(0, Math.min(100, v || 0));
    }
    _value = 0;
    /** The diameter of the progress spinner (will set width and height of svg). */
    get diameter() {
        return this._diameter;
    }
    set diameter(size) {
        this._diameter = size || 0;
    }
    _diameter = BASE_SIZE;
    /** Stroke width of the progress spinner. */
    get strokeWidth() {
        return this._strokeWidth ?? this.diameter / 10;
    }
    set strokeWidth(value) {
        this._strokeWidth = value || 0;
    }
    _strokeWidth;
    /** The radius of the spinner, adjusted for stroke width. */
    _circleRadius() {
        return (this.diameter - BASE_STROKE_WIDTH) / 2;
    }
    /** The view box of the spinner's svg element. */
    _viewBox() {
        const viewBox = this._circleRadius() * 2 + this.strokeWidth;
        return `0 0 ${viewBox} ${viewBox}`;
    }
    /** The stroke circumference of the svg circle. */
    _strokeCircumference() {
        return 2 * Math.PI * this._circleRadius();
    }
    /** The dash offset of the svg circle. */
    _strokeDashOffset() {
        if (this.mode === "determinate") {
            return this._strokeCircumference() * (100 - this._value) / 100;
        }
        return null;
    }
    /** Stroke width of the circle in percent. */
    _circleStrokeWidth() {
        return this.strokeWidth / this.diameter * 100;
    }
    static ɵfac = function MatProgressSpinner_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatProgressSpinner)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatProgressSpinner,
        selectors: [["mat-progress-spinner"], ["mat-spinner"]],
        viewQuery: function MatProgressSpinner_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._determinateCircle = _t.first);
            }
        },
        hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
        hostVars: 18,
        hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
                i0.ɵɵclassMap("mat-" + ctx.color);
                i0.ɵɵstyleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--mat-progress-spinner-size", ctx.diameter + "px")("--mat-progress-spinner-active-indicator-width", ctx.diameter + "px");
                i0.ɵɵclassProp("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
            }
        },
        inputs: {
            color: "color",
            mode: "mode",
            value: [2, "value", "value", numberAttribute],
            diameter: [2, "diameter", "diameter", numberAttribute],
            strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute]
        },
        exportAs: ["matProgressSpinner"],
        decls: 14,
        vars: 11,
        consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
        template: function MatProgressSpinner_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵelementStart(2, "div", 2, 1);
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(4, "svg", 3);
                i0.ɵɵelement(5, "circle", 4);
                i0.ɵɵelementEnd()();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
                i0.ɵɵelementContainer(9, 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "div", 9);
                i0.ɵɵelementContainer(11, 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "div", 10);
                i0.ɵɵelementContainer(13, 8);
                i0.ɵɵelementEnd()()();
            }
            if (rf & 2) {
                const circle_r2 = i0.ɵɵreference(1);
                i0.ɵɵadvance(4);
                i0.ɵɵattribute("viewBox", ctx._viewBox());
                i0.ɵɵadvance();
                i0.ɵɵstyleProp("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
                i0.ɵɵattribute("r", ctx._circleRadius());
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngTemplateOutlet", circle_r2);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngTemplateOutlet", circle_r2);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngTemplateOutlet", circle_r2);
            }
        },
        dependencies: [NgTemplateOutlet],
        styles: [".mat-mdc-progress-spinner{--mat-progress-spinner-animation-multiplier: 1;display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mat-progress-spinner-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mat-progress-spinner-reduced-motion{--mat-progress-spinner-animation-multiplier: 1.25}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate calc(1568.2352941176ms*var(--mat-progress-spinner-animation-multiplier)) linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate calc(5332ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatProgressSpinner, [{
            type: Component,
            args: [{
                    selector: "mat-progress-spinner, mat-spinner",
                    exportAs: "matProgressSpinner",
                    host: {
                        "role": "progressbar",
                        "class": "mat-mdc-progress-spinner mdc-circular-progress",
                        // set tab index to -1 so screen readers will read the aria-label
                        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
                        "tabindex": "-1",
                        "[class]": '"mat-" + color',
                        "[class._mat-animation-noopable]": `_noopAnimations`,
                        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
                        "[style.width.px]": "diameter",
                        "[style.height.px]": "diameter",
                        "[style.--mat-progress-spinner-size]": 'diameter + "px"',
                        "[style.--mat-progress-spinner-active-indicator-width]": 'diameter + "px"',
                        "[attr.aria-valuemin]": "0",
                        "[attr.aria-valuemax]": "100",
                        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
                        "[attr.mode]": "mode"
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NgTemplateOutlet],
                    template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
                    styles: [".mat-mdc-progress-spinner{--mat-progress-spinner-animation-multiplier: 1;display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mat-progress-spinner-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mat-progress-spinner-reduced-motion{--mat-progress-spinner-animation-multiplier: 1.25}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate calc(1568.2352941176ms*var(--mat-progress-spinner-animation-multiplier)) linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate calc(5332ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"]
                }]
        }], () => [], {
        color: [{
                type: Input
            }],
        _determinateCircle: [{
                type: ViewChild,
                args: ["determinateSpinner"]
            }],
        mode: [{
                type: Input
            }],
        value: [{
                type: Input,
                args: [{
                        transform: numberAttribute
                    }]
            }],
        diameter: [{
                type: Input,
                args: [{
                        transform: numberAttribute
                    }]
            }],
        strokeWidth: [{
                type: Input,
                args: [{
                        transform: numberAttribute
                    }]
            }]
    });
})();
var MatSpinner = MatProgressSpinner;
var MatProgressSpinnerModule = class _MatProgressSpinnerModule {
    static ɵfac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatProgressSpinnerModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatProgressSpinnerModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatProgressSpinnerModule, [{
            type: NgModule,
            args: [{
                    imports: [MatProgressSpinner, MatSpinner],
                    exports: [MatProgressSpinner, MatSpinner, BidiModule]
                }]
        }], null, null);
})();
export { MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MatProgressSpinner, MatProgressSpinnerModule, MatSpinner };
