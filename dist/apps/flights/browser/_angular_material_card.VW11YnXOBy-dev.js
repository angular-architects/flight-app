import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/card.mjs
import * as i0 from "@angular/core";
import { InjectionToken, inject, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Directive, NgModule } from "@angular/core";
import { BidiModule } from "@angular/cdk/bidi";
var _c0 = ["*"];
var _c1 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
var _c2 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
var _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
var _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
var MAT_CARD_CONFIG = new InjectionToken("MAT_CARD_CONFIG");
var MatCard = class _MatCard {
    appearance;
    constructor() {
        const config = inject(MAT_CARD_CONFIG, {
            optional: true
        });
        this.appearance = config?.appearance || "raised";
    }
    static ɵfac = function MatCard_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCard)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatCard,
        selectors: [["mat-card"]],
        hostAttrs: [1, "mat-mdc-card", "mdc-card"],
        hostVars: 8,
        hostBindings: function MatCard_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined")("mat-mdc-card-filled", ctx.appearance === "filled")("mdc-card--filled", ctx.appearance === "filled");
            }
        },
        inputs: {
            appearance: "appearance"
        },
        exportAs: ["matCard"],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatCard_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        },
        styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n'],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCard, [{
            type: Component,
            args: [{
                    selector: "mat-card",
                    host: {
                        "class": "mat-mdc-card mdc-card",
                        "[class.mat-mdc-card-outlined]": 'appearance === "outlined"',
                        "[class.mdc-card--outlined]": 'appearance === "outlined"',
                        "[class.mat-mdc-card-filled]": 'appearance === "filled"',
                        "[class.mdc-card--filled]": 'appearance === "filled"'
                    },
                    exportAs: "matCard",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-content></ng-content>\n",
                    styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n']
                }]
        }], () => [], {
        appearance: [{
                type: Input
            }]
    });
})();
var MatCardTitle = class _MatCardTitle {
    static ɵfac = function MatCardTitle_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardTitle)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCardTitle,
        selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
        hostAttrs: [1, "mat-mdc-card-title"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardTitle, [{
            type: Directive,
            args: [{
                    selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
                    host: {
                        "class": "mat-mdc-card-title"
                    }
                }]
        }], null, null);
})();
var MatCardTitleGroup = class _MatCardTitleGroup {
    static ɵfac = function MatCardTitleGroup_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardTitleGroup)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatCardTitleGroup,
        selectors: [["mat-card-title-group"]],
        hostAttrs: [1, "mat-mdc-card-title-group"],
        ngContentSelectors: _c2,
        decls: 4,
        vars: 0,
        template: function MatCardTitleGroup_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c1);
                i0.ɵɵdomElementStart(0, "div");
                i0.ɵɵprojection(1);
                i0.ɵɵdomElementEnd();
                i0.ɵɵprojection(2, 1);
                i0.ɵɵprojection(3, 2);
            }
        },
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardTitleGroup, [{
            type: Component,
            args: [{
                    selector: "mat-card-title-group",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        "class": "mat-mdc-card-title-group"
                    },
                    template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n'
                }]
        }], null, null);
})();
var MatCardContent = class _MatCardContent {
    static ɵfac = function MatCardContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardContent)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCardContent,
        selectors: [["mat-card-content"]],
        hostAttrs: [1, "mat-mdc-card-content"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardContent, [{
            type: Directive,
            args: [{
                    selector: "mat-card-content",
                    host: {
                        "class": "mat-mdc-card-content"
                    }
                }]
        }], null, null);
})();
var MatCardSubtitle = class _MatCardSubtitle {
    static ɵfac = function MatCardSubtitle_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardSubtitle)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCardSubtitle,
        selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
        hostAttrs: [1, "mat-mdc-card-subtitle"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardSubtitle, [{
            type: Directive,
            args: [{
                    selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
                    host: {
                        "class": "mat-mdc-card-subtitle"
                    }
                }]
        }], null, null);
})();
var MatCardActions = class _MatCardActions {
    // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
    // as to not conflict with the native `align` attribute.
    /** Position of the actions inside the card. */
    align = "start";
    static ɵfac = function MatCardActions_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardActions)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCardActions,
        selectors: [["mat-card-actions"]],
        hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
        hostVars: 2,
        hostBindings: function MatCardActions_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mat-mdc-card-actions-align-end", ctx.align === "end");
            }
        },
        inputs: {
            align: "align"
        },
        exportAs: ["matCardActions"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardActions, [{
            type: Directive,
            args: [{
                    selector: "mat-card-actions",
                    exportAs: "matCardActions",
                    host: {
                        "class": "mat-mdc-card-actions mdc-card__actions",
                        "[class.mat-mdc-card-actions-align-end]": 'align === "end"'
                    }
                }]
        }], null, {
        align: [{
                type: Input
            }]
    });
})();
var MatCardHeader = class _MatCardHeader {
    static ɵfac = function MatCardHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardHeader)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatCardHeader,
        selectors: [["mat-card-header"]],
        hostAttrs: [1, "mat-mdc-card-header"],
        ngContentSelectors: _c4,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-mdc-card-header-text"]],
        template: function MatCardHeader_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c3);
                i0.ɵɵprojection(0);
                i0.ɵɵdomElementStart(1, "div", 0);
                i0.ɵɵprojection(2, 1);
                i0.ɵɵdomElementEnd();
                i0.ɵɵprojection(3, 2);
            }
        },
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardHeader, [{
            type: Component,
            args: [{
                    selector: "mat-card-header",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        "class": "mat-mdc-card-header"
                    },
                    template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n'
                }]
        }], null, null);
})();
var MatCardFooter = class _MatCardFooter {
    static ɵfac = function MatCardFooter_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardFooter)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCardFooter,
        selectors: [["mat-card-footer"]],
        hostAttrs: [1, "mat-mdc-card-footer"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardFooter, [{
            type: Directive,
            args: [{
                    selector: "mat-card-footer",
                    host: {
                        "class": "mat-mdc-card-footer"
                    }
                }]
        }], null, null);
})();
var MatCardImage = class _MatCardImage {
    static ɵfac = function MatCardImage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardImage)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCardImage,
        selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
        hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardImage, [{
            type: Directive,
            args: [{
                    selector: "[mat-card-image], [matCardImage]",
                    host: {
                        "class": "mat-mdc-card-image mdc-card__media"
                    }
                }]
        }], null, null);
})();
var MatCardSmImage = class _MatCardSmImage {
    static ɵfac = function MatCardSmImage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardSmImage)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCardSmImage,
        selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
        hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardSmImage, [{
            type: Directive,
            args: [{
                    selector: "[mat-card-sm-image], [matCardImageSmall]",
                    host: {
                        "class": "mat-mdc-card-sm-image mdc-card__media"
                    }
                }]
        }], null, null);
})();
var MatCardMdImage = class _MatCardMdImage {
    static ɵfac = function MatCardMdImage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardMdImage)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCardMdImage,
        selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
        hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardMdImage, [{
            type: Directive,
            args: [{
                    selector: "[mat-card-md-image], [matCardImageMedium]",
                    host: {
                        "class": "mat-mdc-card-md-image mdc-card__media"
                    }
                }]
        }], null, null);
})();
var MatCardLgImage = class _MatCardLgImage {
    static ɵfac = function MatCardLgImage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardLgImage)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCardLgImage,
        selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
        hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardLgImage, [{
            type: Directive,
            args: [{
                    selector: "[mat-card-lg-image], [matCardImageLarge]",
                    host: {
                        "class": "mat-mdc-card-lg-image mdc-card__media"
                    }
                }]
        }], null, null);
})();
var MatCardXlImage = class _MatCardXlImage {
    static ɵfac = function MatCardXlImage_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardXlImage)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCardXlImage,
        selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
        hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardXlImage, [{
            type: Directive,
            args: [{
                    selector: "[mat-card-xl-image], [matCardImageXLarge]",
                    host: {
                        "class": "mat-mdc-card-xl-image mdc-card__media"
                    }
                }]
        }], null, null);
})();
var MatCardAvatar = class _MatCardAvatar {
    static ɵfac = function MatCardAvatar_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardAvatar)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCardAvatar,
        selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
        hostAttrs: [1, "mat-mdc-card-avatar"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardAvatar, [{
            type: Directive,
            args: [{
                    selector: "[mat-card-avatar], [matCardAvatar]",
                    host: {
                        "class": "mat-mdc-card-avatar"
                    }
                }]
        }], null, null);
})();
var CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
var MatCardModule = class _MatCardModule {
    static ɵfac = function MatCardModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCardModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatCardModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCardModule, [{
            type: NgModule,
            args: [{
                    imports: CARD_DIRECTIVES,
                    exports: [CARD_DIRECTIVES, BidiModule]
                }]
        }], null, null);
})();
export { MAT_CARD_CONFIG, MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardModule, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage };
