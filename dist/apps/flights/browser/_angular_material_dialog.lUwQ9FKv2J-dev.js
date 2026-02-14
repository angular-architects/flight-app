import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/dialog.mjs
import * as i0 from "@angular/core";
import { EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, InjectionToken, inject, Injector, Injectable, ElementRef, Directive, Input, NgModule } from "@angular/core";
import { _IdGenerator } from "@angular/cdk/a11y";
import * as i1 from "@angular/cdk/scrolling";
import { CdkScrollable as CdkScrollable2 } from "@angular/cdk/scrolling";
import { createBlockScrollStrategy, createGlobalPositionStrategy, OverlayModule } from "@angular/cdk/overlay";
import { CdkDialogContainer, Dialog, DialogConfig, DialogModule } from "@angular/cdk/dialog";
import { coerceNumberProperty } from "@angular/cdk/coercion";
import { CdkPortalOutlet, PortalModule } from "@angular/cdk/portal";
import { Subject, merge, defer } from "rxjs";
import { filter, take, startWith } from "rxjs/operators";
import { ESCAPE, hasModifierKey } from "@angular/cdk/keycodes";
import { BidiModule } from "@angular/cdk/bidi";
import "@angular/cdk/layout";
function MatDialogContainer_ng_template_2_Template(rf, ctx) { }
var MatDialogConfig = class {
    /**
     * Where the attached component should live in Angular's *logical* component tree.
     * This affects what is available for injection and the change detection order for the
     * component instantiated inside of the dialog. This does not affect where the dialog
     * content will be rendered.
     */
    viewContainerRef;
    /**
     * Injector used for the instantiation of the component to be attached. If provided,
     * takes precedence over the injector indirectly provided by `ViewContainerRef`.
     */
    injector;
    /** ID for the dialog. If omitted, a unique one will be generated. */
    id;
    /** The ARIA role of the dialog element. */
    role = "dialog";
    /** Custom class for the overlay pane. */
    panelClass = "";
    /** Whether the dialog has a backdrop. */
    hasBackdrop = true;
    /** Custom class for the backdrop. */
    backdropClass = "";
    /** Whether the user can use escape or clicking on the backdrop to close the modal. */
    disableClose = false;
    /** Function used to determine whether the dialog is allowed to close. */
    closePredicate;
    /** Width of the dialog. */
    width = "";
    /** Height of the dialog. */
    height = "";
    /** Min-width of the dialog. If a number is provided, assumes pixel units. */
    minWidth;
    /** Min-height of the dialog. If a number is provided, assumes pixel units. */
    minHeight;
    /** Max-width of the dialog. If a number is provided, assumes pixel units. */
    maxWidth;
    /** Max-height of the dialog. If a number is provided, assumes pixel units. */
    maxHeight;
    /** Position overrides. */
    position;
    /** Data being injected into the child component. */
    data = null;
    /** Layout direction for the dialog's content. */
    direction;
    /** ID of the element that describes the dialog. */
    ariaDescribedBy = null;
    /** ID of the element that labels the dialog. */
    ariaLabelledBy = null;
    /** Aria label to assign to the dialog element. */
    ariaLabel = null;
    /**
     * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
     * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
     * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
     */
    ariaModal = false;
    /**
     * Where the dialog should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    autoFocus = "first-tabbable";
    /**
     * Whether the dialog should restore focus to the
     * previously-focused element, after it's closed.
     */
    restoreFocus = true;
    /** Whether to wait for the opening animation to finish before trapping focus. */
    delayFocusTrap = true;
    /** Scroll strategy to be used for the dialog. */
    scrollStrategy;
    /**
     * Whether the dialog should close when the user goes backwards/forwards in history.
     * Note that this usually doesn't include clicking on links (unless the user is using
     * the `HashLocationStrategy`).
     */
    closeOnNavigation = true;
    /**
     * Duration of the enter animation in ms.
     * Should be a number, string type is deprecated.
     * @breaking-change 17.0.0 Remove string signature.
     */
    enterAnimationDuration;
    /**
     * Duration of the exit animation in ms.
     * Should be a number, string type is deprecated.
     * @breaking-change 17.0.0 Remove string signature.
     */
    exitAnimationDuration;
};
var OPEN_CLASS = "mdc-dialog--open";
var OPENING_CLASS = "mdc-dialog--opening";
var CLOSING_CLASS = "mdc-dialog--closing";
var OPEN_ANIMATION_DURATION = 150;
var CLOSE_ANIMATION_DURATION = 75;
var MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
    /** Emits when an animation state changes. */
    _animationStateChanged = new EventEmitter();
    /** Whether animations are enabled. */
    _animationsEnabled = !_animationsDisabled();
    /** Number of actions projected in the dialog. */
    _actionSectionCount = 0;
    /** Host element of the dialog container component. */
    _hostElement = this._elementRef.nativeElement;
    /** Duration of the dialog open animation. */
    _enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
    /** Duration of the dialog close animation. */
    _exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
    /** Current timer for dialog animations. */
    _animationTimer = null;
    _contentAttached() {
        super._contentAttached();
        this._startOpenAnimation();
    }
    /** Starts the dialog open animation if enabled. */
    _startOpenAnimation() {
        this._animationStateChanged.emit({
            state: "opening",
            totalTime: this._enterAnimationDuration
        });
        if (this._animationsEnabled) {
            this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
            this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
            this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
        }
        else {
            this._hostElement.classList.add(OPEN_CLASS);
            Promise.resolve().then(() => this._finishDialogOpen());
        }
    }
    /**
     * Starts the exit animation of the dialog if enabled. This method is
     * called by the dialog ref.
     */
    _startExitAnimation() {
        this._animationStateChanged.emit({
            state: "closing",
            totalTime: this._exitAnimationDuration
        });
        this._hostElement.classList.remove(OPEN_CLASS);
        if (this._animationsEnabled) {
            this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
            this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
            this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
        }
        else {
            Promise.resolve().then(() => this._finishDialogClose());
        }
    }
    /**
     * Updates the number action sections.
     * @param delta Increase/decrease in the number of sections.
     */
    _updateActionSectionCount(delta) {
        this._actionSectionCount += delta;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Completes the dialog open by clearing potential animation classes, trapping
     * focus and emitting an opened event.
     */
    _finishDialogOpen = () => {
        this._clearAnimationClasses();
        this._openAnimationDone(this._enterAnimationDuration);
    };
    /**
     * Completes the dialog close by clearing potential animation classes, restoring
     * focus and emitting a closed event.
     */
    _finishDialogClose = () => {
        this._clearAnimationClasses();
        this._animationStateChanged.emit({
            state: "closed",
            totalTime: this._exitAnimationDuration
        });
    };
    /** Clears all dialog animation classes. */
    _clearAnimationClasses() {
        this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
    }
    _waitForAnimationToComplete(duration, callback) {
        if (this._animationTimer !== null) {
            clearTimeout(this._animationTimer);
        }
        this._animationTimer = setTimeout(callback, duration);
    }
    /** Runs a callback in `requestAnimationFrame`, if available. */
    _requestAnimationFrame(callback) {
        this._ngZone.runOutsideAngular(() => {
            if (typeof requestAnimationFrame === "function") {
                requestAnimationFrame(callback);
            }
            else {
                callback();
            }
        });
    }
    _captureInitialFocus() {
        if (!this._config.delayFocusTrap) {
            this._trapFocus();
        }
    }
    /**
     * Callback for when the open dialog animation has finished. Intended to
     * be called by sub-classes that use different animation implementations.
     */
    _openAnimationDone(totalTime) {
        if (this._config.delayFocusTrap) {
            this._trapFocus();
        }
        this._animationStateChanged.next({
            state: "opened",
            totalTime
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this._animationTimer !== null) {
            clearTimeout(this._animationTimer);
        }
    }
    attachComponentPortal(portal) {
        const ref = super.attachComponentPortal(portal);
        ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
        return ref;
    }
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatDialogContainer_BaseFactory;
        return function MatDialogContainer_Factory(__ngFactoryType__) {
            return (ɵMatDialogContainer_BaseFactory || (ɵMatDialogContainer_BaseFactory = i0.ɵɵgetInheritedFactory(_MatDialogContainer)))(__ngFactoryType__ || _MatDialogContainer);
        };
    })();
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatDialogContainer,
        selectors: [["mat-dialog-container"]],
        hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
        hostVars: 10,
        hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵdomProperty("id", ctx._config.id);
                i0.ɵɵattribute("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
                i0.ɵɵclassProp("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
            }
        },
        features: [i0.ɵɵInheritDefinitionFeature],
        decls: 3,
        vars: 0,
        consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
        template: function MatDialogContainer_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
                i0.ɵɵtemplate(2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
                i0.ɵɵelementEnd()();
            }
        },
        dependencies: [CdkPortalOutlet],
        styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n'],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDialogContainer, [{
            type: Component,
            args: [{
                    selector: "mat-dialog-container",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.Default,
                    imports: [CdkPortalOutlet],
                    host: {
                        "class": "mat-mdc-dialog-container mdc-dialog",
                        "tabindex": "-1",
                        "[attr.aria-modal]": "_config.ariaModal",
                        "[id]": "_config.id",
                        "[attr.role]": "_config.role",
                        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
                        "[attr.aria-label]": "_config.ariaLabel",
                        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
                        "[class._mat-animation-noopable]": "!_animationsEnabled",
                        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
                    },
                    template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
                    styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}\n']
                }]
        }], null, null);
})();
var TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
function parseCssTime(time) {
    if (time == null) {
        return null;
    }
    if (typeof time === "number") {
        return time;
    }
    if (time.endsWith("ms")) {
        return coerceNumberProperty(time.substring(0, time.length - 2));
    }
    if (time.endsWith("s")) {
        return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
    }
    if (time === "0") {
        return 0;
    }
    return null;
}
var MatDialogState;
(function (MatDialogState2) {
    MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
    MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
    MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
var MatDialogRef = class {
    _ref;
    _config;
    _containerInstance;
    /** The instance of component opened into the dialog. */
    componentInstance;
    /**
     * `ComponentRef` of the component opened into the dialog. Will be
     * null when the dialog is opened using a `TemplateRef`.
     */
    componentRef;
    /** Whether the user is allowed to close the dialog. */
    disableClose;
    /** Unique ID for the dialog. */
    id;
    /** Subject for notifying the user that the dialog has finished opening. */
    _afterOpened = new Subject();
    /** Subject for notifying the user that the dialog has started closing. */
    _beforeClosed = new Subject();
    /** Result to be passed to afterClosed. */
    _result;
    /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
    _closeFallbackTimeout;
    /** Current state of the dialog. */
    _state = MatDialogState.OPEN;
    // TODO(crisbeto): we shouldn't have to declare this property, because `DialogRef.close`
    // already has a second `options` parameter that we can use. The problem is that internal tests
    // have assertions like `expect(MatDialogRef.close).toHaveBeenCalledWith(foo)` which will break,
    // because it'll be called with two arguments by things like `MatDialogClose`.
    /** Interaction that caused the dialog to close. */
    _closeInteractionType;
    constructor(_ref, _config, _containerInstance) {
        this._ref = _ref;
        this._config = _config;
        this._containerInstance = _containerInstance;
        this.disableClose = _config.disableClose;
        this.id = _ref.id;
        _ref.addPanelClass("mat-mdc-dialog-panel");
        _containerInstance._animationStateChanged.pipe(filter(event => event.state === "opened"), take(1)).subscribe(() => {
            this._afterOpened.next();
            this._afterOpened.complete();
        });
        _containerInstance._animationStateChanged.pipe(filter(event => event.state === "closed"), take(1)).subscribe(() => {
            clearTimeout(this._closeFallbackTimeout);
            this._finishDialogClose();
        });
        _ref.overlayRef.detachments().subscribe(() => {
            this._beforeClosed.next(this._result);
            this._beforeClosed.complete();
            this._finishDialogClose();
        });
        merge(this.backdropClick(), this.keydownEvents().pipe(filter(event => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe(event => {
            if (!this.disableClose) {
                event.preventDefault();
                _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
            }
        });
    }
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    close(dialogResult) {
        const closePredicate = this._config.closePredicate;
        if (closePredicate && !closePredicate(dialogResult, this._config, this.componentInstance)) {
            return;
        }
        this._result = dialogResult;
        this._containerInstance._animationStateChanged.pipe(filter(event => event.state === "closing"), take(1)).subscribe(event => {
            this._beforeClosed.next(dialogResult);
            this._beforeClosed.complete();
            this._ref.overlayRef.detachBackdrop();
            this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
        });
        this._state = MatDialogState.CLOSING;
        this._containerInstance._startExitAnimation();
    }
    /**
     * Gets an observable that is notified when the dialog is finished opening.
     */
    afterOpened() {
        return this._afterOpened;
    }
    /**
     * Gets an observable that is notified when the dialog is finished closing.
     */
    afterClosed() {
        return this._ref.closed;
    }
    /**
     * Gets an observable that is notified when the dialog has started closing.
     */
    beforeClosed() {
        return this._beforeClosed;
    }
    /**
     * Gets an observable that emits when the overlay's backdrop has been clicked.
     */
    backdropClick() {
        return this._ref.backdropClick;
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    keydownEvents() {
        return this._ref.keydownEvents;
    }
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */
    updatePosition(position) {
        let strategy = this._ref.config.positionStrategy;
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        this._ref.updatePosition();
        return this;
    }
    /**
     * Updates the dialog's width and height.
     * @param width New width of the dialog.
     * @param height New height of the dialog.
     */
    updateSize(width = "", height = "") {
        this._ref.updateSize(width, height);
        return this;
    }
    /** Add a CSS class or an array of classes to the overlay pane. */
    addPanelClass(classes) {
        this._ref.addPanelClass(classes);
        return this;
    }
    /** Remove a CSS class or an array of classes from the overlay pane. */
    removePanelClass(classes) {
        this._ref.removePanelClass(classes);
        return this;
    }
    /** Gets the current state of the dialog's lifecycle. */
    getState() {
        return this._state;
    }
    /**
     * Finishes the dialog close by updating the state of the dialog
     * and disposing the overlay.
     */
    _finishDialogClose() {
        this._state = MatDialogState.CLOSED;
        this._ref.close(this._result, {
            focusOrigin: this._closeInteractionType
        });
        this.componentInstance = null;
    }
};
function _closeDialogVia(ref, interactionType, result) {
    ref._closeInteractionType = interactionType;
    return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
    providedIn: "root",
    factory: () => {
        const injector = inject(Injector);
        return () => createBlockScrollStrategy(injector);
    }
});
var MatDialog = class _MatDialog {
    _defaultOptions = inject(MAT_DIALOG_DEFAULT_OPTIONS, {
        optional: true
    });
    _scrollStrategy = inject(MAT_DIALOG_SCROLL_STRATEGY);
    _parentDialog = inject(_MatDialog, {
        optional: true,
        skipSelf: true
    });
    _idGenerator = inject(_IdGenerator);
    _injector = inject(Injector);
    _dialog = inject(Dialog);
    _animationsDisabled = _animationsDisabled();
    _openDialogsAtThisLevel = [];
    _afterAllClosedAtThisLevel = new Subject();
    _afterOpenedAtThisLevel = new Subject();
    dialogConfigClass = MatDialogConfig;
    _dialogRefConstructor;
    _dialogContainerType;
    _dialogDataToken;
    /** Keeps track of the currently-open dialogs. */
    get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }
    /** Stream that emits when a dialog has been opened. */
    get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }
    _getAfterAllClosed() {
        const parent = this._parentDialog;
        return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
    }
    /**
     * Stream that emits when all open dialog have finished closing.
     * Will emit on subscribe if there are no open dialogs to begin with.
     */
    afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
    constructor() {
        this._dialogRefConstructor = MatDialogRef;
        this._dialogContainerType = MatDialogContainer;
        this._dialogDataToken = MAT_DIALOG_DATA;
    }
    open(componentOrTemplateRef, config) {
        let dialogRef;
        config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
        config.id = config.id || this._idGenerator.getId("mat-mdc-dialog-");
        config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
        const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
            positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().centerVertically(),
            // Disable closing since we need to sync it up to the animation ourselves.
            disableClose: true,
            // Closing is tied to our animation so the close predicate has to be implemented separately.
            closePredicate: void 0,
            // Disable closing on destroy, because this service cleans up its open dialogs as well.
            // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
            // the dialogs immediately whereas we want it to wait for the animations to finish.
            closeOnDestroy: false,
            // Disable closing on detachments so that we can sync up the animation.
            // The Material dialog ref handles this manually.
            closeOnOverlayDetachments: false,
            disableAnimations: this._animationsDisabled || config.enterAnimationDuration?.toLocaleString() === "0" || config.exitAnimationDuration?.toString() === "0",
            container: {
                type: this._dialogContainerType,
                providers: () => [
                    // Provide our config as the CDK config as well since it has the same interface as the
                    // CDK one, but it contains the actual values passed in by the user for things like
                    // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
                    {
                        provide: this.dialogConfigClass,
                        useValue: config
                    }, {
                        provide: DialogConfig,
                        useValue: config
                    }
                ]
            },
            templateContext: () => ({
                dialogRef
            }),
            providers: (ref, cdkConfig, dialogContainer) => {
                dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
                dialogRef.updatePosition(config?.position);
                return [{
                        provide: this._dialogContainerType,
                        useValue: dialogContainer
                    }, {
                        provide: this._dialogDataToken,
                        useValue: cdkConfig.data
                    }, {
                        provide: this._dialogRefConstructor,
                        useValue: dialogRef
                    }];
            }
        }));
        dialogRef.componentRef = cdkRef.componentRef;
        dialogRef.componentInstance = cdkRef.componentInstance;
        this.openDialogs.push(dialogRef);
        this.afterOpened.next(dialogRef);
        dialogRef.afterClosed().subscribe(() => {
            const index = this.openDialogs.indexOf(dialogRef);
            if (index > -1) {
                this.openDialogs.splice(index, 1);
                if (!this.openDialogs.length) {
                    this._getAfterAllClosed().next();
                }
            }
        });
        return dialogRef;
    }
    /**
     * Closes all of the currently-open dialogs.
     */
    closeAll() {
        this._closeDialogs(this.openDialogs);
    }
    /**
     * Finds an open dialog by its id.
     * @param id ID to use when looking up the dialog.
     */
    getDialogById(id) {
        return this.openDialogs.find(dialog => dialog.id === id);
    }
    ngOnDestroy() {
        this._closeDialogs(this._openDialogsAtThisLevel);
        this._afterAllClosedAtThisLevel.complete();
        this._afterOpenedAtThisLevel.complete();
    }
    _closeDialogs(dialogs) {
        let i = dialogs.length;
        while (i--) {
            dialogs[i].close();
        }
    }
    static ɵfac = function MatDialog_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatDialog)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _MatDialog,
        factory: _MatDialog.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDialog, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var MatDialogClose = class _MatDialogClose {
    dialogRef = inject(MatDialogRef, {
        optional: true
    });
    _elementRef = inject(ElementRef);
    _dialog = inject(MatDialog);
    /** Screen-reader label for the button. */
    ariaLabel;
    /** Default to "button" to prevents accidental form submits. */
    type = "button";
    /** Dialog close input. */
    dialogResult;
    _matDialogClose;
    constructor() { }
    ngOnInit() {
        if (!this.dialogRef) {
            this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
    }
    ngOnChanges(changes) {
        const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    }
    _onButtonClick(event) {
        _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
    }
    static ɵfac = function MatDialogClose_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatDialogClose)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatDialogClose,
        selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
        hostVars: 2,
        hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function MatDialogClose_click_HostBindingHandler($event) {
                    return ctx._onButtonClick($event);
                });
            }
            if (rf & 2) {
                i0.ɵɵattribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
            }
        },
        inputs: {
            ariaLabel: [0, "aria-label", "ariaLabel"],
            type: "type",
            dialogResult: [0, "mat-dialog-close", "dialogResult"],
            _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
        },
        exportAs: ["matDialogClose"],
        features: [i0.ɵɵNgOnChangesFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDialogClose, [{
            type: Directive,
            args: [{
                    selector: "[mat-dialog-close], [matDialogClose]",
                    exportAs: "matDialogClose",
                    host: {
                        "(click)": "_onButtonClick($event)",
                        "[attr.aria-label]": "ariaLabel || null",
                        "[attr.type]": "type"
                    }
                }]
        }], () => [], {
        ariaLabel: [{
                type: Input,
                args: ["aria-label"]
            }],
        type: [{
                type: Input
            }],
        dialogResult: [{
                type: Input,
                args: ["mat-dialog-close"]
            }],
        _matDialogClose: [{
                type: Input,
                args: ["matDialogClose"]
            }]
    });
})();
var MatDialogLayoutSection = class _MatDialogLayoutSection {
    _dialogRef = inject(MatDialogRef, {
        optional: true
    });
    _elementRef = inject(ElementRef);
    _dialog = inject(MatDialog);
    constructor() { }
    ngOnInit() {
        if (!this._dialogRef) {
            this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
        }
        if (this._dialogRef) {
            Promise.resolve().then(() => {
                this._onAdd();
            });
        }
    }
    ngOnDestroy() {
        const instance = this._dialogRef?._containerInstance;
        if (instance) {
            Promise.resolve().then(() => {
                this._onRemove();
            });
        }
    }
    static ɵfac = function MatDialogLayoutSection_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatDialogLayoutSection)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatDialogLayoutSection
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDialogLayoutSection, [{
            type: Directive
        }], () => [], null);
})();
var MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
    id = inject(_IdGenerator).getId("mat-mdc-dialog-title-");
    _onAdd() {
        this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
    }
    _onRemove() {
        this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
    }
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatDialogTitle_BaseFactory;
        return function MatDialogTitle_Factory(__ngFactoryType__) {
            return (ɵMatDialogTitle_BaseFactory || (ɵMatDialogTitle_BaseFactory = i0.ɵɵgetInheritedFactory(_MatDialogTitle)))(__ngFactoryType__ || _MatDialogTitle);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatDialogTitle,
        selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
        hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
        hostVars: 1,
        hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵdomProperty("id", ctx.id);
            }
        },
        inputs: {
            id: "id"
        },
        exportAs: ["matDialogTitle"],
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDialogTitle, [{
            type: Directive,
            args: [{
                    selector: "[mat-dialog-title], [matDialogTitle]",
                    exportAs: "matDialogTitle",
                    host: {
                        "class": "mat-mdc-dialog-title mdc-dialog__title",
                        "[id]": "id"
                    }
                }]
        }], null, {
        id: [{
                type: Input
            }]
    });
})();
var MatDialogContent = class _MatDialogContent {
    static ɵfac = function MatDialogContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatDialogContent)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatDialogContent,
        selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
        hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
        features: [i0.ɵɵHostDirectivesFeature([i1.CdkScrollable])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDialogContent, [{
            type: Directive,
            args: [{
                    selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
                    host: {
                        "class": "mat-mdc-dialog-content mdc-dialog__content"
                    },
                    hostDirectives: [CdkScrollable2]
                }]
        }], null, null);
})();
var MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
    /**
     * Horizontal alignment of action buttons.
     */
    align;
    _onAdd() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
    }
    _onRemove() {
        this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
    }
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatDialogActions_BaseFactory;
        return function MatDialogActions_Factory(__ngFactoryType__) {
            return (ɵMatDialogActions_BaseFactory || (ɵMatDialogActions_BaseFactory = i0.ɵɵgetInheritedFactory(_MatDialogActions)))(__ngFactoryType__ || _MatDialogActions);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatDialogActions,
        selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
        hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
        hostVars: 6,
        hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
            }
        },
        inputs: {
            align: "align"
        },
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDialogActions, [{
            type: Directive,
            args: [{
                    selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
                    host: {
                        "class": "mat-mdc-dialog-actions mdc-dialog__actions",
                        "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
                        "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
                        "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
                    }
                }]
        }], null, {
        align: [{
                type: Input
            }]
    });
})();
function getClosestDialog(element, openDialogs) {
    let parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
        parent = parent.parentElement;
    }
    return parent ? openDialogs.find(dialog => dialog.id === parent.id) : null;
}
var DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
var MatDialogModule = class _MatDialogModule {
    static ɵfac = function MatDialogModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatDialogModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatDialogModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        providers: [MatDialog],
        imports: [DialogModule, OverlayModule, PortalModule, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDialogModule, [{
            type: NgModule,
            args: [{
                    imports: [DialogModule, OverlayModule, PortalModule, ...DIRECTIVES],
                    exports: [BidiModule, ...DIRECTIVES],
                    providers: [MatDialog]
                }]
        }], null, null);
})();
export { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_SCROLL_STRATEGY, MatDialog, MatDialogActions, MatDialogClose, MatDialogConfig, MatDialogContainer, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogState, MatDialogTitle, _closeDialogVia };
