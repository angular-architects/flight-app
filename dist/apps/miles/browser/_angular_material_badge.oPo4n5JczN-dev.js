import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/badge.mjs
import { AriaDescriber, _IdGenerator, InteractivityChecker, A11yModule } from "@angular/cdk/a11y";
import * as i0 from "@angular/core";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject, NgZone, ElementRef, Renderer2, DOCUMENT, HOST_TAG_NAME, booleanAttribute, Directive, Input, NgModule } from "@angular/core";
import { _CdkPrivateStyleLoader, _VisuallyHiddenLoader } from "@angular/cdk/private";
import { BidiModule } from "@angular/cdk/bidi";
import "@angular/cdk/layout";
var BADGE_CONTENT_CLASS = "mat-badge-content";
var _MatBadgeStyleLoader = class __MatBadgeStyleLoader {
    static ɵfac = function _MatBadgeStyleLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || __MatBadgeStyleLoader)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: __MatBadgeStyleLoader,
        selectors: [["ng-component"]],
        decls: 0,
        vars: 0,
        template: function _MatBadgeStyleLoader_Template(rf, ctx) { },
        styles: [".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color, var(--mat-sys-error));color:var(--mat-badge-text-color, var(--mat-sys-on-error));font-family:var(--mat-badge-text-font, var(--mat-sys-label-small-font));font-weight:var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));border-radius:var(--mat-badge-container-shape, var(--mat-sys-corner-full))}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}@media(forced-colors: active){.mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));color:var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error))}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, 6px);min-height:var(--mat-badge-small-size-container-size, 6px);line-height:var(--mat-badge-small-size-line-height, 6px);padding:var(--mat-badge-small-size-container-padding, 0);font-size:var(--mat-badge-small-size-text-size, 0);margin:var(--mat-badge-small-size-container-offset, -6px 0)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset, -6px)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, 16px);min-height:var(--mat-badge-container-size, 16px);line-height:var(--mat-badge-line-height, 16px);padding:var(--mat-badge-container-padding, 0 4px);font-size:var(--mat-badge-text-size, var(--mat-sys-label-small-size));margin:var(--mat-badge-container-offset, -12px 0)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset, -12px)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, 16px);min-height:var(--mat-badge-large-size-container-size, 16px);line-height:var(--mat-badge-large-size-line-height, 16px);padding:var(--mat-badge-large-size-container-padding, 0 4px);font-size:var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));margin:var(--mat-badge-large-size-container-offset, -12px 0)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset, -12px)}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(_MatBadgeStyleLoader, [{
            type: Component,
            args: [{
                    encapsulation: ViewEncapsulation.None,
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color, var(--mat-sys-error));color:var(--mat-badge-text-color, var(--mat-sys-on-error));font-family:var(--mat-badge-text-font, var(--mat-sys-label-small-font));font-weight:var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));border-radius:var(--mat-badge-container-shape, var(--mat-sys-corner-full))}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}@media(forced-colors: active){.mat-badge-content{outline:solid 1px;border-radius:0}}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));color:var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error))}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, 6px);min-height:var(--mat-badge-small-size-container-size, 6px);line-height:var(--mat-badge-small-size-line-height, 6px);padding:var(--mat-badge-small-size-container-padding, 0);font-size:var(--mat-badge-small-size-text-size, 0);margin:var(--mat-badge-small-size-container-offset, -6px 0)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset, -6px)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, 16px);min-height:var(--mat-badge-container-size, 16px);line-height:var(--mat-badge-line-height, 16px);padding:var(--mat-badge-container-padding, 0 4px);font-size:var(--mat-badge-text-size, var(--mat-sys-label-small-size));margin:var(--mat-badge-container-offset, -12px 0)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset, -12px)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, 16px);min-height:var(--mat-badge-large-size-container-size, 16px);line-height:var(--mat-badge-large-size-line-height, 16px);padding:var(--mat-badge-large-size-container-padding, 0 4px);font-size:var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));margin:var(--mat-badge-large-size-container-offset, -12px 0)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset, -12px)}\n"]
                }]
        }], null, null);
})();
var MatBadge = class _MatBadge {
    _ngZone = inject(NgZone);
    _elementRef = inject(ElementRef);
    _ariaDescriber = inject(AriaDescriber);
    _renderer = inject(Renderer2);
    _animationsDisabled = _animationsDisabled();
    _idGenerator = inject(_IdGenerator);
    /**
     * Theme color of the badge. This API is supported in M2 themes only, it
     * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/badge/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    get color() {
        return this._color;
    }
    set color(value) {
        this._setColor(value);
        this._color = value;
    }
    _color = "primary";
    /** Whether the badge should overlap its contents or not */
    overlap = true;
    /** Whether the badge is disabled. */
    disabled;
    /**
     * Position the badge should reside.
     * Accepts any combination of 'above'|'below' and 'before'|'after'
     */
    position = "above after";
    /** The content for the badge */
    get content() {
        return this._content;
    }
    set content(newContent) {
        this._updateRenderedContent(newContent);
    }
    _content;
    /** Message used to describe the decorated element via aria-describedby */
    get description() {
        return this._description;
    }
    set description(newDescription) {
        this._updateDescription(newDescription);
    }
    _description;
    /** Size of the badge. Can be 'small', 'medium', or 'large'. */
    size = "medium";
    /** Whether the badge is hidden. */
    hidden;
    /** Visible badge element. */
    _badgeElement;
    /** Inline badge description. Used when the badge is applied to non-interactive host elements. */
    _inlineBadgeDescription;
    /** Whether the OnInit lifecycle hook has run yet */
    _isInitialized = false;
    /** InteractivityChecker to determine if the badge host is focusable. */
    _interactivityChecker = inject(InteractivityChecker);
    _document = inject(DOCUMENT);
    constructor() {
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_MatBadgeStyleLoader);
        styleLoader.load(_VisuallyHiddenLoader);
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            const nativeElement = this._elementRef.nativeElement;
            if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
                throw Error("matBadge must be attached to an element node.");
            }
            const tagName = inject(HOST_TAG_NAME);
            if (tagName.toLowerCase() === "mat-icon" && nativeElement.getAttribute("aria-hidden") === "true") {
                console.warn(`Detected a matBadge on an "aria-hidden" "<mat-icon>". Consider setting aria-hidden="false" in order to surface the information assistive technology.
${nativeElement.outerHTML}`);
            }
        }
    }
    /** Whether the badge is above the host or not */
    isAbove() {
        return this.position.indexOf("below") === -1;
    }
    /** Whether the badge is after the host or not */
    isAfter() {
        return this.position.indexOf("before") === -1;
    }
    /**
     * Gets the element into which the badge's content is being rendered. Undefined if the element
     * hasn't been created (e.g. if the badge doesn't have content).
     */
    getBadgeElement() {
        return this._badgeElement;
    }
    ngOnInit() {
        this._clearExistingBadges();
        if (this.content && !this._badgeElement) {
            this._badgeElement = this._createBadgeElement();
            this._updateRenderedContent(this.content);
        }
        this._isInitialized = true;
    }
    ngOnDestroy() {
        if (this._renderer.destroyNode) {
            this._renderer.destroyNode(this._badgeElement);
            this._inlineBadgeDescription?.remove();
        }
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
    }
    /** Gets whether the badge's host element is interactive. */
    _isHostInteractive() {
        return this._interactivityChecker.isFocusable(this._elementRef.nativeElement, {
            ignoreVisibility: true
        });
    }
    /** Creates the badge element */
    _createBadgeElement() {
        const badgeElement = this._renderer.createElement("span");
        const activeClass = "mat-badge-active";
        badgeElement.setAttribute("id", this._idGenerator.getId("mat-badge-content-"));
        badgeElement.setAttribute("aria-hidden", "true");
        badgeElement.classList.add(BADGE_CONTENT_CLASS);
        if (this._animationsDisabled) {
            badgeElement.classList.add("_mat-animation-noopable");
        }
        this._elementRef.nativeElement.appendChild(badgeElement);
        if (typeof requestAnimationFrame === "function" && !this._animationsDisabled) {
            this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => {
                    badgeElement.classList.add(activeClass);
                });
            });
        }
        else {
            badgeElement.classList.add(activeClass);
        }
        return badgeElement;
    }
    /** Update the text content of the badge element in the DOM, creating the element if necessary. */
    _updateRenderedContent(newContent) {
        const newContentNormalized = `${newContent ?? ""}`.trim();
        if (this._isInitialized && newContentNormalized && !this._badgeElement) {
            this._badgeElement = this._createBadgeElement();
        }
        if (this._badgeElement) {
            this._badgeElement.textContent = newContentNormalized;
        }
        this._content = newContentNormalized;
    }
    /** Updates the host element's aria description via AriaDescriber. */
    _updateDescription(newDescription) {
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
        if (!newDescription || this._isHostInteractive()) {
            this._removeInlineDescription();
        }
        this._description = newDescription;
        if (this._isHostInteractive()) {
            this._ariaDescriber.describe(this._elementRef.nativeElement, newDescription);
        }
        else {
            this._updateInlineDescription();
        }
    }
    _updateInlineDescription() {
        if (!this._inlineBadgeDescription) {
            this._inlineBadgeDescription = this._document.createElement("span");
            this._inlineBadgeDescription.classList.add("cdk-visually-hidden");
        }
        this._inlineBadgeDescription.textContent = this.description;
        this._badgeElement?.appendChild(this._inlineBadgeDescription);
    }
    _removeInlineDescription() {
        this._inlineBadgeDescription?.remove();
        this._inlineBadgeDescription = void 0;
    }
    /** Adds css theme class given the color to the component host */
    _setColor(colorPalette) {
        const classList = this._elementRef.nativeElement.classList;
        classList.remove(`mat-badge-${this._color}`);
        if (colorPalette) {
            classList.add(`mat-badge-${colorPalette}`);
        }
    }
    /** Clears any existing badges that might be left over from server-side rendering. */
    _clearExistingBadges() {
        const badges = this._elementRef.nativeElement.querySelectorAll(`:scope > .${BADGE_CONTENT_CLASS}`);
        for (const badgeElement of Array.from(badges)) {
            if (badgeElement !== this._badgeElement) {
                badgeElement.remove();
            }
        }
    }
    static ɵfac = function MatBadge_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatBadge)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatBadge,
        selectors: [["", "matBadge", ""]],
        hostAttrs: [1, "mat-badge"],
        hostVars: 20,
        hostBindings: function MatBadge_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx.content)("mat-badge-disabled", ctx.disabled);
            }
        },
        inputs: {
            color: [0, "matBadgeColor", "color"],
            overlap: [2, "matBadgeOverlap", "overlap", booleanAttribute],
            disabled: [2, "matBadgeDisabled", "disabled", booleanAttribute],
            position: [0, "matBadgePosition", "position"],
            content: [0, "matBadge", "content"],
            description: [0, "matBadgeDescription", "description"],
            size: [0, "matBadgeSize", "size"],
            hidden: [2, "matBadgeHidden", "hidden", booleanAttribute]
        }
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatBadge, [{
            type: Directive,
            args: [{
                    selector: "[matBadge]",
                    host: {
                        "class": "mat-badge",
                        "[class.mat-badge-overlap]": "overlap",
                        "[class.mat-badge-above]": "isAbove()",
                        "[class.mat-badge-below]": "!isAbove()",
                        "[class.mat-badge-before]": "!isAfter()",
                        "[class.mat-badge-after]": "isAfter()",
                        "[class.mat-badge-small]": 'size === "small"',
                        "[class.mat-badge-medium]": 'size === "medium"',
                        "[class.mat-badge-large]": 'size === "large"',
                        "[class.mat-badge-hidden]": "hidden || !content",
                        "[class.mat-badge-disabled]": "disabled"
                    }
                }]
        }], () => [], {
        color: [{
                type: Input,
                args: ["matBadgeColor"]
            }],
        overlap: [{
                type: Input,
                args: [{
                        alias: "matBadgeOverlap",
                        transform: booleanAttribute
                    }]
            }],
        disabled: [{
                type: Input,
                args: [{
                        alias: "matBadgeDisabled",
                        transform: booleanAttribute
                    }]
            }],
        position: [{
                type: Input,
                args: ["matBadgePosition"]
            }],
        content: [{
                type: Input,
                args: ["matBadge"]
            }],
        description: [{
                type: Input,
                args: ["matBadgeDescription"]
            }],
        size: [{
                type: Input,
                args: ["matBadgeSize"]
            }],
        hidden: [{
                type: Input,
                args: [{
                        alias: "matBadgeHidden",
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var MatBadgeModule = class _MatBadgeModule {
    static ɵfac = function MatBadgeModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatBadgeModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatBadgeModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [A11yModule, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatBadgeModule, [{
            type: NgModule,
            args: [{
                    // Note: we _shouldn't_ have to import `_MatBadgeStyleLoader`,
                    // but it seems to be necessary for tests.
                    imports: [A11yModule, MatBadge, _MatBadgeStyleLoader],
                    exports: [MatBadge, BidiModule]
                }]
        }], null, null);
})();
export { MatBadge, MatBadgeModule };
