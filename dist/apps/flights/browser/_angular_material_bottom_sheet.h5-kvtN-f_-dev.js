import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/bottom-sheet.mjs
import { CdkDialogContainer, Dialog, DialogModule } from "@angular/cdk/dialog";
import { CdkPortalOutlet, PortalModule } from "@angular/cdk/portal";
import * as i0 from "@angular/core";
import { EventEmitter, inject, Component, ChangeDetectionStrategy, ViewEncapsulation, InjectionToken, Injector, Injectable, NgModule } from "@angular/core";
import { BidiModule } from "@angular/cdk/bidi";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { createBlockScrollStrategy, createGlobalPositionStrategy } from "@angular/cdk/overlay";
import { ESCAPE, hasModifierKey } from "@angular/cdk/keycodes";
import { Subject, merge } from "rxjs";
import { filter, take } from "rxjs/operators";
function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) { }
var ENTER_ANIMATION = "_mat-bottom-sheet-enter";
var EXIT_ANIMATION = "_mat-bottom-sheet-exit";
var MatBottomSheetContainer = class _MatBottomSheetContainer extends CdkDialogContainer {
    _breakpointSubscription;
    _animationsDisabled = _animationsDisabled();
    /** The state of the bottom sheet animations. */
    _animationState = "void";
    /** Emits whenever the state of the animation changes. */
    _animationStateChanged = new EventEmitter();
    /** Whether the component has been destroyed. */
    _destroyed;
    constructor() {
        super();
        const breakpointObserver = inject(BreakpointObserver);
        this._breakpointSubscription = breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).subscribe(() => {
            const classList = this._elementRef.nativeElement.classList;
            classList.toggle("mat-bottom-sheet-container-medium", breakpointObserver.isMatched(Breakpoints.Medium));
            classList.toggle("mat-bottom-sheet-container-large", breakpointObserver.isMatched(Breakpoints.Large));
            classList.toggle("mat-bottom-sheet-container-xlarge", breakpointObserver.isMatched(Breakpoints.XLarge));
        });
    }
    /** Begin animation of bottom sheet entrance into view. */
    enter() {
        if (!this._destroyed) {
            this._animationState = "visible";
            this._changeDetectorRef.markForCheck();
            this._changeDetectorRef.detectChanges();
            if (this._animationsDisabled) {
                this._simulateAnimation(ENTER_ANIMATION);
            }
        }
    }
    /** Begin animation of the bottom sheet exiting from view. */
    exit() {
        if (!this._destroyed) {
            this._elementRef.nativeElement.setAttribute("mat-exit", "");
            this._animationState = "hidden";
            this._changeDetectorRef.markForCheck();
            if (this._animationsDisabled) {
                this._simulateAnimation(EXIT_ANIMATION);
            }
        }
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._breakpointSubscription.unsubscribe();
        this._destroyed = true;
    }
    _simulateAnimation(name) {
        this._ngZone.run(() => {
            this._handleAnimationEvent(true, name);
            setTimeout(() => this._handleAnimationEvent(false, name));
        });
    }
    _trapFocus() {
        super._trapFocus({
            preventScroll: true
        });
    }
    _handleAnimationEvent(isStart, animationName) {
        const isEnter = animationName === ENTER_ANIMATION;
        const isExit = animationName === EXIT_ANIMATION;
        if (isEnter || isExit) {
            this._animationStateChanged.emit({
                toState: isEnter ? "visible" : "hidden",
                phase: isStart ? "start" : "done"
            });
        }
    }
    static ɵfac = function MatBottomSheetContainer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatBottomSheetContainer)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatBottomSheetContainer,
        selectors: [["mat-bottom-sheet-container"]],
        hostAttrs: ["tabindex", "-1", 1, "mat-bottom-sheet-container"],
        hostVars: 9,
        hostBindings: function MatBottomSheetContainer_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("animationstart", function MatBottomSheetContainer_animationstart_HostBindingHandler($event) {
                    return ctx._handleAnimationEvent(true, $event.animationName);
                })("animationend", function MatBottomSheetContainer_animationend_HostBindingHandler($event) {
                    return ctx._handleAnimationEvent(false, $event.animationName);
                })("animationcancel", function MatBottomSheetContainer_animationcancel_HostBindingHandler($event) {
                    return ctx._handleAnimationEvent(false, $event.animationName);
                });
            }
            if (rf & 2) {
                i0.ɵɵattribute("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-label", ctx._config.ariaLabel);
                i0.ɵɵclassProp("mat-bottom-sheet-container-animations-enabled", !ctx._animationsDisabled)("mat-bottom-sheet-container-enter", ctx._animationState === "visible")("mat-bottom-sheet-container-exit", ctx._animationState === "hidden");
            }
        },
        features: [i0.ɵɵInheritDefinitionFeature],
        decls: 1,
        vars: 0,
        consts: [["cdkPortalOutlet", ""]],
        template: function MatBottomSheetContainer_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MatBottomSheetContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
            }
        },
        dependencies: [CdkPortalOutlet],
        styles: ["@keyframes _mat-bottom-sheet-enter{from{transform:translateY(100%)}to{transform:none}}@keyframes _mat-bottom-sheet-exit{from{transform:none}to{transform:translateY(100%)}}.mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;position:relative;background:var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));color:var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));font-family:var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));line-height:var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));font-weight:var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking))}@media(forced-colors: active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-animations-enabled{transform:translateY(100%)}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter{animation:_mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit{animation:_mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape, 28px);border-top-right-radius:var(--mat-bottom-sheet-container-shape, 28px)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatBottomSheetContainer, [{
            type: Component,
            args: [{
                    selector: "mat-bottom-sheet-container",
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        "class": "mat-bottom-sheet-container",
                        "[class.mat-bottom-sheet-container-animations-enabled]": "!_animationsDisabled",
                        "[class.mat-bottom-sheet-container-enter]": '_animationState === "visible"',
                        "[class.mat-bottom-sheet-container-exit]": '_animationState === "hidden"',
                        "tabindex": "-1",
                        "[attr.role]": "_config.role",
                        "[attr.aria-modal]": "_config.ariaModal",
                        "[attr.aria-label]": "_config.ariaLabel",
                        "(animationstart)": "_handleAnimationEvent(true, $event.animationName)",
                        "(animationend)": "_handleAnimationEvent(false, $event.animationName)",
                        "(animationcancel)": "_handleAnimationEvent(false, $event.animationName)"
                    },
                    imports: [CdkPortalOutlet],
                    template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
                    styles: ["@keyframes _mat-bottom-sheet-enter{from{transform:translateY(100%)}to{transform:none}}@keyframes _mat-bottom-sheet-exit{from{transform:none}to{transform:translateY(100%)}}.mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;position:relative;background:var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));color:var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));font-family:var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));line-height:var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));font-weight:var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking))}@media(forced-colors: active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-animations-enabled{transform:translateY(100%)}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter{animation:_mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit{animation:_mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape, 28px);border-top-right-radius:var(--mat-bottom-sheet-container-shape, 28px)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"]
                }]
        }], () => [], null);
})();
var MAT_BOTTOM_SHEET_DATA = new InjectionToken("MatBottomSheetData");
var MatBottomSheetConfig = class {
    /** The view container to place the overlay for the bottom sheet into. */
    viewContainerRef;
    /** Extra CSS classes to be added to the bottom sheet container. */
    panelClass;
    /** Text layout direction for the bottom sheet. */
    direction;
    /** Data being injected into the child component. */
    data = null;
    /** Whether the bottom sheet has a backdrop. */
    hasBackdrop = true;
    /** Custom class for the backdrop. */
    backdropClass;
    /** Whether the user can use escape or clicking outside to close the bottom sheet. */
    disableClose = false;
    /** Aria label to assign to the bottom sheet element. */
    ariaLabel = null;
    /**
     * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
     * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
     * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
     */
    ariaModal = false;
    /**
     * Whether the bottom sheet should close when the user goes backwards/forwards in history.
     * Note that this usually doesn't include clicking on links (unless the user is using
     * the `HashLocationStrategy`).
     */
    closeOnNavigation = true;
    /**
     * Where the bottom sheet should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    autoFocus = "first-tabbable";
    /**
     * Whether the bottom sheet should restore focus to the
     * previously-focused element, after it's closed.
     */
    restoreFocus = true;
    /** Scroll strategy to be used for the bottom sheet. */
    scrollStrategy;
    /** Height for the bottom sheet. */
    height = "";
    /** Minimum height for the bottom sheet. If a number is provided, assumes pixel units. */
    minHeight;
    /** Maximum height for the bottom sheet. If a number is provided, assumes pixel units. */
    maxHeight;
};
var MatBottomSheetRef = class {
    _ref;
    /** Instance of the component making up the content of the bottom sheet. */
    get instance() {
        return this._ref.componentInstance;
    }
    /**
     * `ComponentRef` of the component opened into the bottom sheet. Will be
     * null when the bottom sheet is opened using a `TemplateRef`.
     */
    get componentRef() {
        return this._ref.componentRef;
    }
    /**
     * Instance of the component into which the bottom sheet content is projected.
     * @docs-private
     */
    containerInstance;
    /** Whether the user is allowed to close the bottom sheet. */
    disableClose;
    /** Subject for notifying the user that the bottom sheet has opened and appeared. */
    _afterOpened = new Subject();
    /** Result to be passed down to the `afterDismissed` stream. */
    _result;
    /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
    _closeFallbackTimeout;
    constructor(_ref, config, containerInstance) {
        this._ref = _ref;
        this.containerInstance = containerInstance;
        this.disableClose = config.disableClose;
        containerInstance._animationStateChanged.pipe(filter(event => event.phase === "done" && event.toState === "visible"), take(1)).subscribe(() => {
            this._afterOpened.next();
            this._afterOpened.complete();
        });
        containerInstance._animationStateChanged.pipe(filter(event => event.phase === "done" && event.toState === "hidden"), take(1)).subscribe(() => {
            clearTimeout(this._closeFallbackTimeout);
            this._ref.close(this._result);
        });
        _ref.overlayRef.detachments().subscribe(() => {
            this._ref.close(this._result);
        });
        merge(this.backdropClick(), this.keydownEvents().pipe(filter(event => event.keyCode === ESCAPE))).subscribe(event => {
            if (!this.disableClose && (event.type !== "keydown" || !hasModifierKey(event))) {
                event.preventDefault();
                this.dismiss();
            }
        });
    }
    /**
     * Dismisses the bottom sheet.
     * @param result Data to be passed back to the bottom sheet opener.
     */
    dismiss(result) {
        if (!this.containerInstance) {
            return;
        }
        this.containerInstance._animationStateChanged.pipe(filter(event => event.phase === "start"), take(1)).subscribe(() => {
            this._closeFallbackTimeout = setTimeout(() => this._ref.close(this._result), 500);
            this._ref.overlayRef.detachBackdrop();
        });
        this._result = result;
        this.containerInstance.exit();
        this.containerInstance = null;
    }
    /** Gets an observable that is notified when the bottom sheet is finished closing. */
    afterDismissed() {
        return this._ref.closed;
    }
    /** Gets an observable that is notified when the bottom sheet has opened and appeared. */
    afterOpened() {
        return this._afterOpened;
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
};
var MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new InjectionToken("mat-bottom-sheet-default-options");
var MatBottomSheet = class _MatBottomSheet {
    _injector = inject(Injector);
    _parentBottomSheet = inject(_MatBottomSheet, {
        optional: true,
        skipSelf: true
    });
    _animationsDisabled = _animationsDisabled();
    _defaultOptions = inject(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, {
        optional: true
    });
    _bottomSheetRefAtThisLevel = null;
    _dialog = inject(Dialog);
    /** Reference to the currently opened bottom sheet. */
    get _openedBottomSheetRef() {
        const parent = this._parentBottomSheet;
        return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
    }
    set _openedBottomSheetRef(value) {
        if (this._parentBottomSheet) {
            this._parentBottomSheet._openedBottomSheetRef = value;
        }
        else {
            this._bottomSheetRefAtThisLevel = value;
        }
    }
    constructor() { }
    open(componentOrTemplateRef, config) {
        const _config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatBottomSheetConfig()), config);
        let ref;
        this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, _config), {
            // Disable closing since we need to sync it up to the animation ourselves.
            disableClose: true,
            // Disable closing on detachments so that we can sync up the animation.
            closeOnOverlayDetachments: false,
            maxWidth: "100%",
            container: MatBottomSheetContainer,
            scrollStrategy: _config.scrollStrategy || createBlockScrollStrategy(this._injector),
            positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().bottom("0"),
            disableAnimations: this._animationsDisabled,
            templateContext: () => ({
                bottomSheetRef: ref
            }),
            providers: (cdkRef, _cdkConfig, container) => {
                ref = new MatBottomSheetRef(cdkRef, _config, container);
                return [{
                        provide: MatBottomSheetRef,
                        useValue: ref
                    }, {
                        provide: MAT_BOTTOM_SHEET_DATA,
                        useValue: _config.data
                    }];
            }
        }));
        ref.afterDismissed().subscribe(() => {
            if (this._openedBottomSheetRef === ref) {
                this._openedBottomSheetRef = null;
            }
        });
        if (this._openedBottomSheetRef) {
            this._openedBottomSheetRef.afterDismissed().subscribe(() => ref.containerInstance?.enter());
            this._openedBottomSheetRef.dismiss();
        }
        else {
            ref.containerInstance.enter();
        }
        this._openedBottomSheetRef = ref;
        return ref;
    }
    /**
     * Dismisses the currently-visible bottom sheet.
     * @param result Data to pass to the bottom sheet instance.
     */
    dismiss(result) {
        if (this._openedBottomSheetRef) {
            this._openedBottomSheetRef.dismiss(result);
        }
    }
    ngOnDestroy() {
        if (this._bottomSheetRefAtThisLevel) {
            this._bottomSheetRefAtThisLevel.dismiss();
        }
    }
    static ɵfac = function MatBottomSheet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatBottomSheet)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _MatBottomSheet,
        factory: _MatBottomSheet.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatBottomSheet, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var MatBottomSheetModule = class _MatBottomSheetModule {
    static ɵfac = function MatBottomSheetModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatBottomSheetModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatBottomSheetModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        providers: [MatBottomSheet],
        imports: [DialogModule, PortalModule, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatBottomSheetModule, [{
            type: NgModule,
            args: [{
                    imports: [DialogModule, PortalModule, MatBottomSheetContainer],
                    exports: [MatBottomSheetContainer, BidiModule],
                    providers: [MatBottomSheet]
                }]
        }], null, null);
})();
export { MAT_BOTTOM_SHEET_DATA, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheet, MatBottomSheetConfig, MatBottomSheetContainer, MatBottomSheetModule, MatBottomSheetRef };
