import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/sidenav.mjs
import { FocusTrapFactory, FocusMonitor, InteractivityChecker } from "@angular/cdk/a11y";
import { Directionality, BidiModule } from "@angular/cdk/bidi";
import { coerceBooleanProperty, coerceNumberProperty } from "@angular/cdk/coercion";
import { ESCAPE, hasModifierKey } from "@angular/cdk/keycodes";
import { Platform } from "@angular/cdk/platform";
import { CdkScrollable, ScrollDispatcher, ViewportRuler, CdkScrollableModule } from "@angular/cdk/scrolling";
import * as i0 from "@angular/core";
import { InjectionToken, inject, ChangeDetectorRef, ElementRef, NgZone, Component, ChangeDetectionStrategy, ViewEncapsulation, Renderer2, DOCUMENT, signal, EventEmitter, Injector, afterNextRender, Input, Output, ViewChild, QueryList, ContentChildren, ContentChild, NgModule } from "@angular/core";
import { Subject, fromEvent, merge } from "rxjs";
import { filter, map, mapTo, takeUntil, take, startWith, debounceTime } from "rxjs/operators";
import "@angular/cdk/layout";
var _c0 = ["*"];
var _c1 = ["content"];
var _c2 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
var _c3 = ["mat-drawer", "mat-drawer-content", "*"];
function MatDrawerContainer_Conditional_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 1);
        i0.ɵɵlistener("click", function MatDrawerContainer_Conditional_0_Template_div_click_0_listener() {
            i0.ɵɵrestoreView(_r1);
            const ctx_r1 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r1._onBackdropClicked());
        });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
    }
}
function MatDrawerContainer_Conditional_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-drawer-content");
        i0.ɵɵprojection(1, 2);
        i0.ɵɵelementEnd();
    }
}
var _c4 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
var _c5 = ["mat-sidenav", "mat-sidenav-content", "*"];
function MatSidenavContainer_Conditional_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 1);
        i0.ɵɵlistener("click", function MatSidenavContainer_Conditional_0_Template_div_click_0_listener() {
            i0.ɵɵrestoreView(_r1);
            const ctx_r1 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r1._onBackdropClicked());
        });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("mat-drawer-shown", ctx_r1._isShowingBackdrop());
    }
}
function MatSidenavContainer_Conditional_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-sidenav-content");
        i0.ɵɵprojection(1, 2);
        i0.ɵɵelementEnd();
    }
}
var _c6 = ".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n";
function throwMatDuplicatedDrawerError(position) {
    throw Error(`A drawer was already declared for 'position="${position}"'`);
}
var MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE", {
    providedIn: "root",
    factory: () => false
});
var MAT_DRAWER_CONTAINER = new InjectionToken("MAT_DRAWER_CONTAINER");
var MatDrawerContent = class _MatDrawerContent extends CdkScrollable {
    _platform = inject(Platform);
    _changeDetectorRef = inject(ChangeDetectorRef);
    _container = inject(MatDrawerContainer);
    constructor() {
        const elementRef = inject(ElementRef);
        const scrollDispatcher = inject(ScrollDispatcher);
        const ngZone = inject(NgZone);
        super(elementRef, scrollDispatcher, ngZone);
    }
    ngAfterContentInit() {
        this._container._contentMarginChanges.subscribe(() => {
            this._changeDetectorRef.markForCheck();
        });
    }
    /** Determines whether the content element should be hidden from the user. */
    _shouldBeHidden() {
        if (this._platform.isBrowser) {
            return false;
        }
        const { start, end } = this._container;
        return start != null && start.mode !== "over" && start.opened || end != null && end.mode !== "over" && end.opened;
    }
    static ɵfac = function MatDrawerContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatDrawerContent)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatDrawerContent,
        selectors: [["mat-drawer-content"]],
        hostAttrs: [1, "mat-drawer-content"],
        hostVars: 6,
        hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵstyleProp("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
                i0.ɵɵclassProp("mat-drawer-content-hidden", ctx._shouldBeHidden());
            }
        },
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkScrollable,
                    useExisting: _MatDrawerContent
                }]), i0.ɵɵInheritDefinitionFeature],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatDrawerContent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        },
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDrawerContent, [{
            type: Component,
            args: [{
                    selector: "mat-drawer-content",
                    template: "<ng-content></ng-content>",
                    host: {
                        "class": "mat-drawer-content",
                        "[style.margin-left.px]": "_container._contentMargins.left",
                        "[style.margin-right.px]": "_container._contentMargins.right",
                        "[class.mat-drawer-content-hidden]": "_shouldBeHidden()"
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [{
                            provide: CdkScrollable,
                            useExisting: MatDrawerContent
                        }]
                }]
        }], () => [], null);
})();
var MatDrawer = class _MatDrawer {
    _elementRef = inject(ElementRef);
    _focusTrapFactory = inject(FocusTrapFactory);
    _focusMonitor = inject(FocusMonitor);
    _platform = inject(Platform);
    _ngZone = inject(NgZone);
    _renderer = inject(Renderer2);
    _interactivityChecker = inject(InteractivityChecker);
    _doc = inject(DOCUMENT);
    _container = inject(MAT_DRAWER_CONTAINER, {
        optional: true
    });
    _focusTrap = null;
    _elementFocusedBeforeDrawerWasOpened = null;
    _eventCleanups;
    /** Whether the view of the component has been attached. */
    _isAttached;
    /** Anchor node used to restore the drawer to its initial position. */
    _anchor;
    /** The side that the drawer is attached to. */
    get position() {
        return this._position;
    }
    set position(value) {
        value = value === "end" ? "end" : "start";
        if (value !== this._position) {
            if (this._isAttached) {
                this._updatePositionInParent(value);
            }
            this._position = value;
            this.onPositionChanged.emit();
        }
    }
    _position = "start";
    /** Mode of the drawer; one of 'over', 'push' or 'side'. */
    get mode() {
        return this._mode;
    }
    set mode(value) {
        this._mode = value;
        this._updateFocusTrapState();
        this._modeChanged.next();
    }
    _mode = "over";
    /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
    get disableClose() {
        return this._disableClose;
    }
    set disableClose(value) {
        this._disableClose = coerceBooleanProperty(value);
    }
    _disableClose = false;
    /**
     * Whether the drawer should focus the first focusable element automatically when opened.
     * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
     * enabled, focus will be moved into the sidenav in `side` mode as well.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or AutoFocusTarget
     * instead.
     */
    get autoFocus() {
        const value = this._autoFocus;
        if (value == null) {
            if (this.mode === "side") {
                return "dialog";
            }
            else {
                return "first-tabbable";
            }
        }
        return value;
    }
    set autoFocus(value) {
        if (value === "true" || value === "false" || value == null) {
            value = coerceBooleanProperty(value);
        }
        this._autoFocus = value;
    }
    _autoFocus;
    /**
     * Whether the drawer is opened. We overload this because we trigger an event when it
     * starts or end.
     */
    get opened() {
        return this._opened();
    }
    set opened(value) {
        this.toggle(coerceBooleanProperty(value));
    }
    _opened = signal(false, ...(ngDevMode ? [{
            debugName: "_opened"
        }] : []));
    /** How the sidenav was opened (keypress, mouse click etc.) */
    _openedVia;
    /** Emits whenever the drawer has started animating. */
    _animationStarted = new Subject();
    /** Emits whenever the drawer is done animating. */
    _animationEnd = new Subject();
    /** Event emitted when the drawer open state is changed. */
    openedChange = 
    // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
    new EventEmitter(/* isAsync */ true);
    /** Event emitted when the drawer has been opened. */
    _openedStream = this.openedChange.pipe(filter(o => o), map(() => { }));
    /** Event emitted when the drawer has started opening. */
    openedStart = this._animationStarted.pipe(filter(() => this.opened), mapTo(void 0));
    /** Event emitted when the drawer has been closed. */
    _closedStream = this.openedChange.pipe(filter(o => !o), map(() => { }));
    /** Event emitted when the drawer has started closing. */
    closedStart = this._animationStarted.pipe(filter(() => !this.opened), mapTo(void 0));
    /** Emits when the component is destroyed. */
    _destroyed = new Subject();
    /** Event emitted when the drawer's position changes. */
    // tslint:disable-next-line:no-output-on-prefix
    onPositionChanged = new EventEmitter();
    /** Reference to the inner element that contains all the content. */
    _content;
    /**
     * An observable that emits when the drawer mode changes. This is used by the drawer container to
     * to know when to when the mode changes so it can adapt the margins on the content.
     */
    _modeChanged = new Subject();
    _injector = inject(Injector);
    _changeDetectorRef = inject(ChangeDetectorRef);
    constructor() {
        this.openedChange.pipe(takeUntil(this._destroyed)).subscribe(opened => {
            if (opened) {
                this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
                this._takeFocus();
            }
            else if (this._isFocusWithinDrawer()) {
                this._restoreFocus(this._openedVia || "program");
            }
        });
        this._ngZone.runOutsideAngular(() => {
            const element = this._elementRef.nativeElement;
            fromEvent(element, "keydown").pipe(filter(event => {
                return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
            }), takeUntil(this._destroyed)).subscribe(event => this._ngZone.run(() => {
                this.close();
                event.stopPropagation();
                event.preventDefault();
            }));
            this._eventCleanups = [this._renderer.listen(element, "transitionrun", this._handleTransitionEvent), this._renderer.listen(element, "transitionend", this._handleTransitionEvent), this._renderer.listen(element, "transitioncancel", this._handleTransitionEvent)];
        });
        this._animationEnd.subscribe(() => {
            this.openedChange.emit(this.opened);
        });
    }
    /**
     * Focuses the provided element. If the element is not focusable, it will add a tabIndex
     * attribute to forcefully focus it. The attribute is removed after focus is moved.
     * @param element The element to focus.
     */
    _forceFocus(element, options) {
        if (!this._interactivityChecker.isFocusable(element)) {
            element.tabIndex = -1;
            this._ngZone.runOutsideAngular(() => {
                const callback = () => {
                    cleanupBlur();
                    cleanupMousedown();
                    element.removeAttribute("tabindex");
                };
                const cleanupBlur = this._renderer.listen(element, "blur", callback);
                const cleanupMousedown = this._renderer.listen(element, "mousedown", callback);
            });
        }
        element.focus(options);
    }
    /**
     * Focuses the first element that matches the given selector within the focus trap.
     * @param selector The CSS selector for the element to set focus to.
     */
    _focusByCssSelector(selector, options) {
        let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
        if (elementToFocus) {
            this._forceFocus(elementToFocus, options);
        }
    }
    /**
     * Moves focus into the drawer. Note that this works even if
     * the focus trap is disabled in `side` mode.
     */
    _takeFocus() {
        if (!this._focusTrap) {
            return;
        }
        const element = this._elementRef.nativeElement;
        switch (this.autoFocus) {
            case false:
            case "dialog":
                return;
            case true:
            case "first-tabbable":
                afterNextRender(() => {
                    const hasMovedFocus = this._focusTrap.focusInitialElement();
                    if (!hasMovedFocus && typeof element.focus === "function") {
                        element.focus();
                    }
                }, {
                    injector: this._injector
                });
                break;
            case "first-heading":
                this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
                break;
            default:
                this._focusByCssSelector(this.autoFocus);
                break;
        }
    }
    /**
     * Restores focus to the element that was originally focused when the drawer opened.
     * If no element was focused at that time, the focus will be restored to the drawer.
     */
    _restoreFocus(focusOrigin) {
        if (this.autoFocus === "dialog") {
            return;
        }
        if (this._elementFocusedBeforeDrawerWasOpened) {
            this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
        }
        else {
            this._elementRef.nativeElement.blur();
        }
        this._elementFocusedBeforeDrawerWasOpened = null;
    }
    /** Whether focus is currently within the drawer. */
    _isFocusWithinDrawer() {
        const activeEl = this._doc.activeElement;
        return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
    }
    ngAfterViewInit() {
        this._isAttached = true;
        if (this._position === "end") {
            this._updatePositionInParent("end");
        }
        if (this._platform.isBrowser) {
            this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
            this._updateFocusTrapState();
        }
    }
    ngOnDestroy() {
        this._eventCleanups.forEach(cleanup => cleanup());
        this._focusTrap?.destroy();
        this._anchor?.remove();
        this._anchor = null;
        this._animationStarted.complete();
        this._animationEnd.complete();
        this._modeChanged.complete();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Open the drawer.
     * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     */
    open(openedVia) {
        return this.toggle(true, openedVia);
    }
    /** Close the drawer. */
    close() {
        return this.toggle(false);
    }
    /** Closes the drawer with context that the backdrop was clicked. */
    _closeViaBackdropClick() {
        return this._setOpen(/* isOpen */ false, /* restoreFocus */ true, "mouse");
    }
    /**
     * Toggle this drawer.
     * @param isOpen Whether the drawer should be open.
     * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     */
    toggle(isOpen = !this.opened, openedVia) {
        if (isOpen && openedVia) {
            this._openedVia = openedVia;
        }
        const result = this._setOpen(isOpen, /* restoreFocus */ !isOpen && this._isFocusWithinDrawer(), this._openedVia || "program");
        if (!isOpen) {
            this._openedVia = null;
        }
        return result;
    }
    /**
     * Toggles the opened state of the drawer.
     * @param isOpen Whether the drawer should open or close.
     * @param restoreFocus Whether focus should be restored on close.
     * @param focusOrigin Origin to use when restoring focus.
     */
    _setOpen(isOpen, restoreFocus, focusOrigin) {
        if (isOpen === this.opened) {
            return Promise.resolve(isOpen ? "open" : "close");
        }
        this._opened.set(isOpen);
        if (this._container?._transitionsEnabled) {
            this._setIsAnimating(true);
        }
        else {
            setTimeout(() => {
                this._animationStarted.next();
                this._animationEnd.next();
            });
        }
        this._elementRef.nativeElement.classList.toggle("mat-drawer-opened", isOpen);
        if (!isOpen && restoreFocus) {
            this._restoreFocus(focusOrigin);
        }
        this._changeDetectorRef.markForCheck();
        this._updateFocusTrapState();
        return new Promise(resolve => {
            this.openedChange.pipe(take(1)).subscribe(open => resolve(open ? "open" : "close"));
        });
    }
    /** Toggles whether the drawer is currently animating. */
    _setIsAnimating(isAnimating) {
        this._elementRef.nativeElement.classList.toggle("mat-drawer-animating", isAnimating);
    }
    _getWidth() {
        return this._elementRef.nativeElement.offsetWidth || 0;
    }
    /** Updates the enabled state of the focus trap. */
    _updateFocusTrapState() {
        if (this._focusTrap) {
            this._focusTrap.enabled = !!this._container?.hasBackdrop && this.opened;
        }
    }
    /**
     * Updates the position of the drawer in the DOM. We need to move the element around ourselves
     * when it's in the `end` position so that it comes after the content and the visual order
     * matches the tab order. We also need to be able to move it back to `start` if the sidenav
     * started off as `end` and was changed to `start`.
     */
    _updatePositionInParent(newPosition) {
        if (!this._platform.isBrowser) {
            return;
        }
        const element = this._elementRef.nativeElement;
        const parent = element.parentNode;
        if (newPosition === "end") {
            if (!this._anchor) {
                this._anchor = this._doc.createComment("mat-drawer-anchor");
                parent.insertBefore(this._anchor, element);
            }
            parent.appendChild(element);
        }
        else if (this._anchor) {
            this._anchor.parentNode.insertBefore(element, this._anchor);
        }
    }
    /** Event handler for animation events. */
    _handleTransitionEvent = event => {
        const element = this._elementRef.nativeElement;
        if (event.target === element) {
            this._ngZone.run(() => {
                if (event.type === "transitionrun") {
                    this._animationStarted.next(event);
                }
                else {
                    if (event.type === "transitionend") {
                        this._setIsAnimating(false);
                    }
                    this._animationEnd.next(event);
                }
            });
        }
    };
    static ɵfac = function MatDrawer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatDrawer)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatDrawer,
        selectors: [["mat-drawer"]],
        viewQuery: function MatDrawer_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c1, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._content = _t.first);
            }
        },
        hostAttrs: [1, "mat-drawer"],
        hostVars: 12,
        hostBindings: function MatDrawer_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("align", null)("tabIndex", ctx.mode !== "side" ? "-1" : null);
                i0.ɵɵstyleProp("visibility", !ctx._container && !ctx.opened ? "hidden" : null);
                i0.ɵɵclassProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side");
            }
        },
        inputs: {
            position: "position",
            mode: "mode",
            disableClose: "disableClose",
            autoFocus: "autoFocus",
            opened: "opened"
        },
        outputs: {
            openedChange: "openedChange",
            _openedStream: "opened",
            openedStart: "openedStart",
            _closedStream: "closed",
            closedStart: "closedStart",
            onPositionChanged: "positionChanged"
        },
        exportAs: ["matDrawer"],
        ngContentSelectors: _c0,
        decls: 3,
        vars: 0,
        consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
        template: function MatDrawer_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 1, 0);
                i0.ɵɵprojection(2);
                i0.ɵɵelementEnd();
            }
        },
        dependencies: [CdkScrollable],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDrawer, [{
            type: Component,
            args: [{
                    selector: "mat-drawer",
                    exportAs: "matDrawer",
                    host: {
                        "class": "mat-drawer",
                        // must prevent the browser from aligning text based on value
                        "[attr.align]": "null",
                        "[class.mat-drawer-end]": 'position === "end"',
                        "[class.mat-drawer-over]": 'mode === "over"',
                        "[class.mat-drawer-push]": 'mode === "push"',
                        "[class.mat-drawer-side]": 'mode === "side"',
                        // The styles that render the sidenav off-screen come from the drawer container. Prior to #30235
                        // this was also done by the animations module which some internal tests seem to depend on.
                        // Simulate it by toggling the `hidden` attribute instead.
                        "[style.visibility]": '(!_container && !opened) ? "hidden" : null',
                        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
                        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
                        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [CdkScrollable],
                    template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
                }]
        }], () => [], {
        position: [{
                type: Input
            }],
        mode: [{
                type: Input
            }],
        disableClose: [{
                type: Input
            }],
        autoFocus: [{
                type: Input
            }],
        opened: [{
                type: Input
            }],
        openedChange: [{
                type: Output
            }],
        _openedStream: [{
                type: Output,
                args: ["opened"]
            }],
        openedStart: [{
                type: Output
            }],
        _closedStream: [{
                type: Output,
                args: ["closed"]
            }],
        closedStart: [{
                type: Output
            }],
        onPositionChanged: [{
                type: Output,
                args: ["positionChanged"]
            }],
        _content: [{
                type: ViewChild,
                args: ["content"]
            }]
    });
})();
var MatDrawerContainer = class _MatDrawerContainer {
    _dir = inject(Directionality, {
        optional: true
    });
    _element = inject(ElementRef);
    _ngZone = inject(NgZone);
    _changeDetectorRef = inject(ChangeDetectorRef);
    _animationDisabled = _animationsDisabled();
    _transitionsEnabled = false;
    /** All drawers in the container. Includes drawers from inside nested containers. */
    _allDrawers;
    /** Drawers that belong to this container. */
    _drawers = new QueryList();
    _content;
    _userContent;
    /** The drawer child with the `start` position. */
    get start() {
        return this._start;
    }
    /** The drawer child with the `end` position. */
    get end() {
        return this._end;
    }
    /**
     * Whether to automatically resize the container whenever
     * the size of any of its drawers changes.
     *
     * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
     * the drawers on every change detection cycle. Can be configured globally via the
     * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
     */
    get autosize() {
        return this._autosize;
    }
    set autosize(value) {
        this._autosize = coerceBooleanProperty(value);
    }
    _autosize = inject(MAT_DRAWER_DEFAULT_AUTOSIZE);
    /**
     * Whether the drawer container should have a backdrop while one of the sidenavs is open.
     * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
     * mode as well.
     */
    get hasBackdrop() {
        return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
    }
    set hasBackdrop(value) {
        this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
    }
    _backdropOverride;
    /** Event emitted when the drawer backdrop is clicked. */
    backdropClick = new EventEmitter();
    /** The drawer at the start/end position, independent of direction. */
    _start;
    _end;
    /**
     * The drawer at the left/right. When direction changes, these will change as well.
     * They're used as aliases for the above to set the left/right style properly.
     * In LTR, _left == _start and _right == _end.
     * In RTL, _left == _end and _right == _start.
     */
    _left;
    _right;
    /** Emits when the component is destroyed. */
    _destroyed = new Subject();
    /** Emits on every ngDoCheck. Used for debouncing reflows. */
    _doCheckSubject = new Subject();
    /**
     * Margins to be applied to the content. These are used to push / shrink the drawer content when a
     * drawer is open. We use margin rather than transform even for push mode because transform breaks
     * fixed position elements inside of the transformed element.
     */
    _contentMargins = {
        left: null,
        right: null
    };
    _contentMarginChanges = new Subject();
    /** Reference to the CdkScrollable instance that wraps the scrollable content. */
    get scrollable() {
        return this._userContent || this._content;
    }
    _injector = inject(Injector);
    constructor() {
        const platform = inject(Platform);
        const viewportRuler = inject(ViewportRuler);
        this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
            this._validateDrawers();
            this.updateContentMargins();
        });
        viewportRuler.change().pipe(takeUntil(this._destroyed)).subscribe(() => this.updateContentMargins());
        if (!this._animationDisabled && platform.isBrowser) {
            this._ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    this._element.nativeElement.classList.add("mat-drawer-transition");
                    this._transitionsEnabled = true;
                }, 200);
            });
        }
    }
    ngAfterContentInit() {
        this._allDrawers.changes.pipe(startWith(this._allDrawers), takeUntil(this._destroyed)).subscribe(drawer => {
            this._drawers.reset(drawer.filter(item => !item._container || item._container === this));
            this._drawers.notifyOnChanges();
        });
        this._drawers.changes.pipe(startWith(null)).subscribe(() => {
            this._validateDrawers();
            this._drawers.forEach(drawer => {
                this._watchDrawerToggle(drawer);
                this._watchDrawerPosition(drawer);
                this._watchDrawerMode(drawer);
            });
            if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
                this.updateContentMargins();
            }
            this._changeDetectorRef.markForCheck();
        });
        this._ngZone.runOutsideAngular(() => {
            this._doCheckSubject.pipe(debounceTime(10), 
            // Arbitrary debounce time, less than a frame at 60fps
            takeUntil(this._destroyed)).subscribe(() => this.updateContentMargins());
        });
    }
    ngOnDestroy() {
        this._contentMarginChanges.complete();
        this._doCheckSubject.complete();
        this._drawers.destroy();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Calls `open` of both start and end drawers */
    open() {
        this._drawers.forEach(drawer => drawer.open());
    }
    /** Calls `close` of both start and end drawers */
    close() {
        this._drawers.forEach(drawer => drawer.close());
    }
    /**
     * Recalculates and updates the inline styles for the content. Note that this should be used
     * sparingly, because it causes a reflow.
     */
    updateContentMargins() {
        let left = 0;
        let right = 0;
        if (this._left && this._left.opened) {
            if (this._left.mode == "side") {
                left += this._left._getWidth();
            }
            else if (this._left.mode == "push") {
                const width = this._left._getWidth();
                left += width;
                right -= width;
            }
        }
        if (this._right && this._right.opened) {
            if (this._right.mode == "side") {
                right += this._right._getWidth();
            }
            else if (this._right.mode == "push") {
                const width = this._right._getWidth();
                right += width;
                left -= width;
            }
        }
        left = left || null;
        right = right || null;
        if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
            this._contentMargins = {
                left,
                right
            };
            this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
        }
    }
    ngDoCheck() {
        if (this._autosize && this._isPushed()) {
            this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
        }
    }
    /**
     * Subscribes to drawer events in order to set a class on the main container element when the
     * drawer is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     */
    _watchDrawerToggle(drawer) {
        drawer._animationStarted.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
            this.updateContentMargins();
            this._changeDetectorRef.markForCheck();
        });
        if (drawer.mode !== "side") {
            drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
        }
    }
    /**
     * Subscribes to drawer onPositionChanged event in order to
     * re-validate drawers when the position changes.
     */
    _watchDrawerPosition(drawer) {
        drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
            afterNextRender({
                read: () => this._validateDrawers()
            }, {
                injector: this._injector
            });
        });
    }
    /** Subscribes to changes in drawer mode so we can run change detection. */
    _watchDrawerMode(drawer) {
        drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed))).subscribe(() => {
            this.updateContentMargins();
            this._changeDetectorRef.markForCheck();
        });
    }
    /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
    _setContainerClass(isAdd) {
        const classList = this._element.nativeElement.classList;
        const className = "mat-drawer-container-has-open";
        if (isAdd) {
            classList.add(className);
        }
        else {
            classList.remove(className);
        }
    }
    /** Validate the state of the drawer children components. */
    _validateDrawers() {
        this._start = this._end = null;
        this._drawers.forEach(drawer => {
            if (drawer.position == "end") {
                if (this._end != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
                    throwMatDuplicatedDrawerError("end");
                }
                this._end = drawer;
            }
            else {
                if (this._start != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
                    throwMatDuplicatedDrawerError("start");
                }
                this._start = drawer;
            }
        });
        this._right = this._left = null;
        if (this._dir && this._dir.value === "rtl") {
            this._left = this._end;
            this._right = this._start;
        }
        else {
            this._left = this._start;
            this._right = this._end;
        }
    }
    /** Whether the container is being pushed to the side by one of the drawers. */
    _isPushed() {
        return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over";
    }
    _onBackdropClicked() {
        this.backdropClick.emit();
        this._closeModalDrawersViaBackdrop();
    }
    _closeModalDrawersViaBackdrop() {
        [this._start, this._end].filter(drawer => drawer && !drawer.disableClose && this._drawerHasBackdrop(drawer)).forEach(drawer => drawer._closeViaBackdropClick());
    }
    _isShowingBackdrop() {
        return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end);
    }
    _isDrawerOpen(drawer) {
        return drawer != null && drawer.opened;
    }
    // Whether argument drawer should have a backdrop when it opens
    _drawerHasBackdrop(drawer) {
        if (this._backdropOverride == null) {
            return !!drawer && drawer.mode !== "side";
        }
        return this._backdropOverride;
    }
    static ɵfac = function MatDrawerContainer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatDrawerContainer)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatDrawerContainer,
        selectors: [["mat-drawer-container"]],
        contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, MatDrawerContent, 5);
                i0.ɵɵcontentQuery(dirIndex, MatDrawer, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._content = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._allDrawers = _t);
            }
        },
        viewQuery: function MatDrawerContainer_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(MatDrawerContent, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._userContent = _t.first);
            }
        },
        hostAttrs: [1, "mat-drawer-container"],
        hostVars: 2,
        hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
            }
        },
        inputs: {
            autosize: "autosize",
            hasBackdrop: "hasBackdrop"
        },
        outputs: {
            backdropClick: "backdropClick"
        },
        exportAs: ["matDrawerContainer"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: MAT_DRAWER_CONTAINER,
                    useExisting: _MatDrawerContainer
                }])],
        ngContentSelectors: _c3,
        decls: 4,
        vars: 2,
        consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
        template: function MatDrawerContainer_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c2);
                i0.ɵɵconditionalCreate(0, MatDrawerContainer_Conditional_0_Template, 1, 2, "div", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵprojection(2, 1);
                i0.ɵɵconditionalCreate(3, MatDrawerContainer_Conditional_3_Template, 2, 0, "mat-drawer-content");
            }
            if (rf & 2) {
                i0.ɵɵconditional(ctx.hasBackdrop ? 0 : -1);
                i0.ɵɵadvance(3);
                i0.ɵɵconditional(!ctx._content ? 3 : -1);
            }
        },
        dependencies: [MatDrawerContent],
        styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatDrawerContainer, [{
            type: Component,
            args: [{
                    selector: "mat-drawer-container",
                    exportAs: "matDrawerContainer",
                    host: {
                        "class": "mat-drawer-container",
                        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [{
                            provide: MAT_DRAWER_CONTAINER,
                            useExisting: MatDrawerContainer
                        }],
                    imports: [MatDrawerContent],
                    template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer"></ng-content>\n\n<ng-content select="mat-drawer-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-drawer-content>\n    <ng-content></ng-content>\n  </mat-drawer-content>\n}\n',
                    styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"]
                }]
        }], () => [], {
        _allDrawers: [{
                type: ContentChildren,
                args: [MatDrawer, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    }]
            }],
        _content: [{
                type: ContentChild,
                args: [MatDrawerContent]
            }],
        _userContent: [{
                type: ViewChild,
                args: [MatDrawerContent]
            }],
        autosize: [{
                type: Input
            }],
        hasBackdrop: [{
                type: Input
            }],
        backdropClick: [{
                type: Output
            }]
    });
})();
var MatSidenavContent = class _MatSidenavContent extends MatDrawerContent {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatSidenavContent_BaseFactory;
        return function MatSidenavContent_Factory(__ngFactoryType__) {
            return (ɵMatSidenavContent_BaseFactory || (ɵMatSidenavContent_BaseFactory = i0.ɵɵgetInheritedFactory(_MatSidenavContent)))(__ngFactoryType__ || _MatSidenavContent);
        };
    })();
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatSidenavContent,
        selectors: [["mat-sidenav-content"]],
        hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkScrollable,
                    useExisting: _MatSidenavContent
                }]), i0.ɵɵInheritDefinitionFeature],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatSidenavContent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        },
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSidenavContent, [{
            type: Component,
            args: [{
                    selector: "mat-sidenav-content",
                    template: "<ng-content></ng-content>",
                    host: {
                        "class": "mat-drawer-content mat-sidenav-content"
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [{
                            provide: CdkScrollable,
                            useExisting: MatSidenavContent
                        }]
                }]
        }], null, null);
})();
var MatSidenav = class _MatSidenav extends MatDrawer {
    /** Whether the sidenav is fixed in the viewport. */
    get fixedInViewport() {
        return this._fixedInViewport;
    }
    set fixedInViewport(value) {
        this._fixedInViewport = coerceBooleanProperty(value);
    }
    _fixedInViewport = false;
    /**
     * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
     * mode.
     */
    get fixedTopGap() {
        return this._fixedTopGap;
    }
    set fixedTopGap(value) {
        this._fixedTopGap = coerceNumberProperty(value);
    }
    _fixedTopGap = 0;
    /**
     * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
     * fixed mode.
     */
    get fixedBottomGap() {
        return this._fixedBottomGap;
    }
    set fixedBottomGap(value) {
        this._fixedBottomGap = coerceNumberProperty(value);
    }
    _fixedBottomGap = 0;
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatSidenav_BaseFactory;
        return function MatSidenav_Factory(__ngFactoryType__) {
            return (ɵMatSidenav_BaseFactory || (ɵMatSidenav_BaseFactory = i0.ɵɵgetInheritedFactory(_MatSidenav)))(__ngFactoryType__ || _MatSidenav);
        };
    })();
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatSidenav,
        selectors: [["mat-sidenav"]],
        hostAttrs: [1, "mat-drawer", "mat-sidenav"],
        hostVars: 16,
        hostBindings: function MatSidenav_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("tabIndex", ctx.mode !== "side" ? "-1" : null)("align", null);
                i0.ɵɵstyleProp("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
                i0.ɵɵclassProp("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-sidenav-fixed", ctx.fixedInViewport);
            }
        },
        inputs: {
            fixedInViewport: "fixedInViewport",
            fixedTopGap: "fixedTopGap",
            fixedBottomGap: "fixedBottomGap"
        },
        exportAs: ["matSidenav"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: MatDrawer,
                    useExisting: _MatSidenav
                }]), i0.ɵɵInheritDefinitionFeature],
        ngContentSelectors: _c0,
        decls: 3,
        vars: 0,
        consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
        template: function MatSidenav_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 1, 0);
                i0.ɵɵprojection(2);
                i0.ɵɵelementEnd();
            }
        },
        dependencies: [CdkScrollable],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSidenav, [{
            type: Component,
            args: [{
                    selector: "mat-sidenav",
                    exportAs: "matSidenav",
                    host: {
                        "class": "mat-drawer mat-sidenav",
                        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
                        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
                        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null',
                        // must prevent the browser from aligning text based on value
                        "[attr.align]": "null",
                        "[class.mat-drawer-end]": 'position === "end"',
                        "[class.mat-drawer-over]": 'mode === "over"',
                        "[class.mat-drawer-push]": 'mode === "push"',
                        "[class.mat-drawer-side]": 'mode === "side"',
                        "[class.mat-sidenav-fixed]": "fixedInViewport",
                        "[style.top.px]": "fixedInViewport ? fixedTopGap : null",
                        "[style.bottom.px]": "fixedInViewport ? fixedBottomGap : null"
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [CdkScrollable],
                    providers: [{
                            provide: MatDrawer,
                            useExisting: MatSidenav
                        }],
                    template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n'
                }]
        }], null, {
        fixedInViewport: [{
                type: Input
            }],
        fixedTopGap: [{
                type: Input
            }],
        fixedBottomGap: [{
                type: Input
            }]
    });
})();
var MatSidenavContainer = class _MatSidenavContainer extends MatDrawerContainer {
    _allDrawers = void 0;
    // We need an initializer here to avoid a TS error.
    _content = void 0;
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatSidenavContainer_BaseFactory;
        return function MatSidenavContainer_Factory(__ngFactoryType__) {
            return (ɵMatSidenavContainer_BaseFactory || (ɵMatSidenavContainer_BaseFactory = i0.ɵɵgetInheritedFactory(_MatSidenavContainer)))(__ngFactoryType__ || _MatSidenavContainer);
        };
    })();
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatSidenavContainer,
        selectors: [["mat-sidenav-container"]],
        contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, MatSidenavContent, 5);
                i0.ɵɵcontentQuery(dirIndex, MatSidenav, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._content = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._allDrawers = _t);
            }
        },
        hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
        hostVars: 2,
        hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
            }
        },
        exportAs: ["matSidenavContainer"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: MAT_DRAWER_CONTAINER,
                    useExisting: _MatSidenavContainer
                }, {
                    provide: MatDrawerContainer,
                    useExisting: _MatSidenavContainer
                }]), i0.ɵɵInheritDefinitionFeature],
        ngContentSelectors: _c5,
        decls: 4,
        vars: 2,
        consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
        template: function MatSidenavContainer_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c4);
                i0.ɵɵconditionalCreate(0, MatSidenavContainer_Conditional_0_Template, 1, 2, "div", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵprojection(2, 1);
                i0.ɵɵconditionalCreate(3, MatSidenavContainer_Conditional_3_Template, 2, 0, "mat-sidenav-content");
            }
            if (rf & 2) {
                i0.ɵɵconditional(ctx.hasBackdrop ? 0 : -1);
                i0.ɵɵadvance(3);
                i0.ɵɵconditional(!ctx._content ? 3 : -1);
            }
        },
        dependencies: [MatSidenavContent],
        styles: [_c6],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSidenavContainer, [{
            type: Component,
            args: [{
                    selector: "mat-sidenav-container",
                    exportAs: "matSidenavContainer",
                    host: {
                        "class": "mat-drawer-container mat-sidenav-container",
                        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [{
                            provide: MAT_DRAWER_CONTAINER,
                            useExisting: MatSidenavContainer
                        }, {
                            provide: MatDrawerContainer,
                            useExisting: MatSidenavContainer
                        }],
                    imports: [MatSidenavContent],
                    template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-sidenav"></ng-content>\n\n<ng-content select="mat-sidenav-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n}\n',
                    styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"]
                }]
        }], null, {
        _allDrawers: [{
                type: ContentChildren,
                args: [MatSidenav, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    }]
            }],
        _content: [{
                type: ContentChild,
                args: [MatSidenavContent]
            }]
    });
})();
var MatSidenavModule = class _MatSidenavModule {
    static ɵfac = function MatSidenavModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatSidenavModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatSidenavModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [CdkScrollableModule, BidiModule, CdkScrollableModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSidenavModule, [{
            type: NgModule,
            args: [{
                    imports: [CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
                    exports: [BidiModule, CdkScrollableModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
                }]
        }], null, null);
})();
export { MAT_DRAWER_DEFAULT_AUTOSIZE, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule, throwMatDuplicatedDrawerError };
