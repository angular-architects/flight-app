import { FocusKeyManager } from "@nf-internal/chunk-VAERC7YI";
import "@nf-internal/chunk-7WHZXMUH";
import "@nf-internal/chunk-TNW5MULF";
import { UniqueSelectionDispatcher } from "@nf-internal/chunk-IELVTILQ";
import { OverlayConfig, OverlayModule, STANDARD_DROPDOWN_ADJACENT_POSITIONS, STANDARD_DROPDOWN_BELOW_POSITIONS, createFlexibleConnectedPositionStrategy, createOverlayRef, createRepositionScrollStrategy } from "@nf-internal/chunk-HXLYKRS5";
import "@nf-internal/chunk-ZU6E73RP";
import { TemplatePortal } from "@nf-internal/chunk-KEAOYMN5";
import "@nf-internal/chunk-P2TUBJGR";
import "@nf-internal/chunk-R44VMRSN";
import { FocusMonitor, InputModalityDetector } from "@nf-internal/chunk-AEKGWLZG";
import "@nf-internal/chunk-B6OVJH7J";
import "@nf-internal/chunk-CONIAN5D";
import { _getEventTarget } from "@nf-internal/chunk-KPYFKLQQ";
import "@nf-internal/chunk-HRAF4QVP";
import { hasModifierKey } from "@nf-internal/chunk-JD5JPQAG";
import { DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, SPACE, TAB, UP_ARROW } from "@nf-internal/chunk-IANTZR4E";
import "@nf-internal/chunk-26DDZNO4";
import { _IdGenerator } from "@nf-internal/chunk-F3H34SIQ";
import "@nf-internal/chunk-XABR7MXZ";
import { Directionality } from "@nf-internal/chunk-GSHCXC35";
import "@nf-internal/chunk-ALX3T2NV";
import "@nf-internal/chunk-DDFN47J4";
import "@nf-internal/chunk-XODDVZAQ";
import "@nf-internal/chunk-AOJKIHRQ";
import "@nf-internal/chunk-AUAW3OPY";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/menu.mjs
import * as i0 from "@angular/core";
import { Directive, InjectionToken, inject, Injectable, Injector, ViewContainerRef, EventEmitter, NgZone, RendererFactory2, ElementRef, ChangeDetectorRef, Renderer2, booleanAttribute, Input, Output, QueryList, signal, computed, ContentChildren, NgModule } from "@angular/core";
import { startWith, debounceTime, distinctUntilChanged, takeUntil, mergeMap, mapTo, mergeAll, switchMap, skipWhile, skip } from "rxjs/operators";
import { Subject, merge, partition } from "rxjs";
import "@angular/common";
var CdkMenuGroup = class _CdkMenuGroup {
    static ɵfac = function CdkMenuGroup_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkMenuGroup)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkMenuGroup,
        selectors: [["", "cdkMenuGroup", ""]],
        hostAttrs: ["role", "group", 1, "cdk-menu-group"],
        exportAs: ["cdkMenuGroup"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: UniqueSelectionDispatcher,
                    useClass: UniqueSelectionDispatcher
                }])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuGroup, [{
            type: Directive,
            args: [{
                    selector: "[cdkMenuGroup]",
                    exportAs: "cdkMenuGroup",
                    host: {
                        "role": "group",
                        "class": "cdk-menu-group"
                    },
                    providers: [{
                            provide: UniqueSelectionDispatcher,
                            useClass: UniqueSelectionDispatcher
                        }]
                }]
        }], null, null);
})();
var CDK_MENU = new InjectionToken("cdk-menu");
var FocusNext;
(function (FocusNext2) {
    FocusNext2[FocusNext2["nextItem"] = 0] = "nextItem";
    FocusNext2[FocusNext2["previousItem"] = 1] = "previousItem";
    FocusNext2[FocusNext2["currentItem"] = 2] = "currentItem";
})(FocusNext || (FocusNext = {}));
var MENU_STACK = new InjectionToken("cdk-menu-stack");
var PARENT_OR_NEW_MENU_STACK_PROVIDER = {
    provide: MENU_STACK,
    useFactory: () => inject(MENU_STACK, {
        optional: true,
        skipSelf: true
    }) || new MenuStack()
};
var PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER = orientation => ({
    provide: MENU_STACK,
    useFactory: () => inject(MENU_STACK, {
        optional: true,
        skipSelf: true
    }) || MenuStack.inline(orientation)
});
var MenuStack = class _MenuStack {
    /** The ID of this menu stack. */
    id = inject(_IdGenerator).getId("cdk-menu-stack-");
    /** All MenuStackItems tracked by this MenuStack. */
    _elements = [];
    /** Emits the element which was popped off of the stack when requested by a closer. */
    _close = new Subject();
    /** Emits once the MenuStack has become empty after popping off elements. */
    _empty = new Subject();
    /** Emits whether any menu in the menu stack has focus. */
    _hasFocus = new Subject();
    /** Observable which emits the MenuStackItem which has been requested to close. */
    closed = this._close;
    /** Observable which emits whether any menu in the menu stack has focus. */
    hasFocus = this._hasFocus.pipe(startWith(false), debounceTime(0), distinctUntilChanged());
    /**
     * Observable which emits when the MenuStack is empty after popping off the last element. It
     * emits a FocusNext event which specifies the action the closer has requested the listener
     * perform.
     */
    emptied = this._empty;
    /**
     * Whether the inline menu associated with this menu stack is vertical or horizontal.
     * `null` indicates there is no inline menu associated with this menu stack.
     */
    _inlineMenuOrientation = null;
    /** Creates a menu stack that originates from an inline menu. */
    static inline(orientation) {
        const stack = new _MenuStack();
        stack._inlineMenuOrientation = orientation;
        return stack;
    }
    /**
     * Adds an item to the menu stack.
     * @param menu the MenuStackItem to put on the stack.
     */
    push(menu) {
        this._elements.push(menu);
    }
    /**
     * Pop items off of the stack up to and including `lastItem` and emit each on the close
     * observable. If the stack is empty or `lastItem` is not on the stack it does nothing.
     * @param lastItem the last item to pop off the stack.
     * @param options Options that configure behavior on close.
     */
    close(lastItem, options) {
        const { focusNextOnEmpty, focusParentTrigger } = __spreadValues({}, options);
        if (this._elements.indexOf(lastItem) >= 0) {
            let poppedElement;
            do {
                poppedElement = this._elements.pop();
                this._close.next({
                    item: poppedElement,
                    focusParentTrigger
                });
            } while (poppedElement !== lastItem);
            if (this.isEmpty()) {
                this._empty.next(focusNextOnEmpty);
            }
        }
    }
    /**
     * Pop items off of the stack up to but excluding `lastItem` and emit each on the close
     * observable. If the stack is empty or `lastItem` is not on the stack it does nothing.
     * @param lastItem the element which should be left on the stack
     * @return whether or not an item was removed from the stack
     */
    closeSubMenuOf(lastItem) {
        let removed = false;
        if (this._elements.indexOf(lastItem) >= 0) {
            removed = this.peek() !== lastItem;
            while (this.peek() !== lastItem) {
                this._close.next({
                    item: this._elements.pop()
                });
            }
        }
        return removed;
    }
    /**
     * Pop off all MenuStackItems and emit each one on the `close` observable one by one.
     * @param options Options that configure behavior on close.
     */
    closeAll(options) {
        const { focusNextOnEmpty, focusParentTrigger } = __spreadValues({}, options);
        if (!this.isEmpty()) {
            while (!this.isEmpty()) {
                const menuStackItem = this._elements.pop();
                if (menuStackItem) {
                    this._close.next({
                        item: menuStackItem,
                        focusParentTrigger
                    });
                }
            }
            this._empty.next(focusNextOnEmpty);
        }
    }
    /** Return true if this stack is empty. */
    isEmpty() {
        return !this._elements.length;
    }
    /** Return the length of the stack. */
    length() {
        return this._elements.length;
    }
    /** Get the top most element on the stack. */
    peek() {
        return this._elements[this._elements.length - 1];
    }
    /** Whether the menu stack is associated with an inline menu. */
    hasInlineMenu() {
        return this._inlineMenuOrientation != null;
    }
    /** The orientation of the associated inline menu. */
    inlineMenuOrientation() {
        return this._inlineMenuOrientation;
    }
    /** Sets whether the menu stack contains the focused element. */
    setHasFocus(hasFocus) {
        this._hasFocus.next(hasFocus);
    }
    static ɵfac = function MenuStack_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MenuStack)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _MenuStack,
        factory: _MenuStack.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuStack, [{
            type: Injectable
        }], null, null);
})();
var MENU_TRIGGER = new InjectionToken("cdk-menu-trigger");
var MENU_SCROLL_STRATEGY = new InjectionToken("cdk-menu-scroll-strategy", {
    providedIn: "root",
    factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector);
    }
});
var MenuTracker = class _MenuTracker {
    /** The last open menu trigger. */
    static _openMenuTrigger;
    /**
     * Close the previous open menu and set the given one as being open.
     * @param trigger The trigger for the currently open Menu.
     */
    update(trigger) {
        if (_MenuTracker._openMenuTrigger !== trigger) {
            _MenuTracker._openMenuTrigger?.close();
            _MenuTracker._openMenuTrigger = trigger;
        }
    }
    static ɵfac = function MenuTracker_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MenuTracker)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _MenuTracker,
        factory: _MenuTracker.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuTracker, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var CdkMenuTriggerBase = class _CdkMenuTriggerBase {
    /** The DI injector for this component. */
    injector = inject(Injector);
    /** The view container ref for this component */
    viewContainerRef = inject(ViewContainerRef);
    /** The menu stack in which this menu resides. */
    menuStack = inject(MENU_STACK);
    /** Function used to configure the scroll strategy for the menu. */
    menuScrollStrategy = inject(MENU_SCROLL_STRATEGY);
    /**
     * A list of preferred menu positions to be used when constructing the
     * `FlexibleConnectedPositionStrategy` for this trigger's menu.
     */
    menuPosition;
    /** Emits when the attached menu is requested to open */
    opened = new EventEmitter();
    /** Emits when the attached menu is requested to close */
    closed = new EventEmitter();
    /** Template reference variable to the menu this trigger opens */
    menuTemplateRef;
    /** Context data to be passed along to the menu template */
    menuData;
    /** A reference to the overlay which manages the triggered menu */
    overlayRef = null;
    /** Emits when this trigger is destroyed. */
    destroyed = new Subject();
    /** Emits when the outside pointer events listener on the overlay should be stopped. */
    stopOutsideClicksListener = merge(this.closed, this.destroyed);
    /** The child menu opened by this trigger. */
    childMenu;
    /** The content of the menu panel opened by this trigger. */
    _menuPortal;
    /** The injector to use for the child menu opened by this trigger. */
    _childMenuInjector;
    ngOnDestroy() {
        this._destroyOverlay();
        this.destroyed.next();
        this.destroyed.complete();
    }
    /** Whether the attached menu is open. */
    isOpen() {
        return !!this.overlayRef?.hasAttached();
    }
    /** Registers a child menu as having been opened by this trigger. */
    registerChildMenu(child) {
        this.childMenu = child;
    }
    /**
     * Get the portal to be attached to the overlay which contains the menu. Allows for the menu
     * content to change dynamically and be reflected in the application.
     */
    getMenuContentPortal() {
        const hasMenuContentChanged = this.menuTemplateRef !== this._menuPortal?.templateRef;
        if (this.menuTemplateRef && (!this._menuPortal || hasMenuContentChanged)) {
            this._menuPortal = new TemplatePortal(this.menuTemplateRef, this.viewContainerRef, this.menuData, this._getChildMenuInjector());
        }
        return this._menuPortal;
    }
    /**
     * Whether the given element is inside the scope of this trigger's menu stack.
     * @param element The element to check.
     * @return Whether the element is inside the scope of this trigger's menu stack.
     */
    isElementInsideMenuStack(element) {
        for (let el = element; el; el = el?.parentElement ?? null) {
            if (el.getAttribute("data-cdk-menu-stack-id") === this.menuStack.id) {
                return true;
            }
        }
        return false;
    }
    /** Destroy and unset the overlay reference it if exists */
    _destroyOverlay() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    /** Gets the injector to use when creating a child menu. */
    _getChildMenuInjector() {
        this._childMenuInjector = this._childMenuInjector || Injector.create({
            providers: [{
                    provide: MENU_TRIGGER,
                    useValue: this
                }, {
                    provide: MENU_STACK,
                    useValue: this.menuStack
                }],
            parent: this.injector
        });
        return this._childMenuInjector;
    }
    static ɵfac = function CdkMenuTriggerBase_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkMenuTriggerBase)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkMenuTriggerBase,
        hostVars: 2,
        hostBindings: function CdkMenuTriggerBase_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("aria-controls", ctx.childMenu == null ? null : ctx.childMenu.id)("data-cdk-menu-stack-id", ctx.menuStack.id);
            }
        }
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuTriggerBase, [{
            type: Directive,
            args: [{
                    host: {
                        "[attr.aria-controls]": "childMenu?.id",
                        "[attr.data-cdk-menu-stack-id]": "menuStack.id"
                    }
                }]
        }], null, null);
})();
function throwMissingPointerFocusTracker() {
    throw Error("expected an instance of PointerFocusTracker to be provided");
}
function throwMissingMenuReference() {
    throw Error("expected a reference to the parent menu");
}
var MENU_AIM = new InjectionToken("cdk-menu-aim");
var MOUSE_MOVE_SAMPLE_FREQUENCY = 3;
var NUM_POINTS = 5;
var CLOSE_DELAY = 300;
function getSlope(a, b) {
    return (b.y - a.y) / (b.x - a.x);
}
function getYIntercept(point, slope) {
    return point.y - slope * point.x;
}
function isWithinSubmenu(submenuPoints, m, b) {
    const { left, right, top, bottom } = submenuPoints;
    return m * left + b >= top && m * left + b <= bottom || m * right + b >= top && m * right + b <= bottom || (top - b) / m >= left && (top - b) / m <= right || (bottom - b) / m >= left && (bottom - b) / m <= right;
}
var TargetMenuAim = class _TargetMenuAim {
    _ngZone = inject(NgZone);
    _renderer = inject(RendererFactory2).createRenderer(null, null);
    _cleanupMousemove;
    /** The last NUM_POINTS mouse move events. */
    _points = [];
    /** Reference to the root menu in which we are tracking mouse moves. */
    _menu;
    /** Reference to the root menu's mouse manager. */
    _pointerTracker;
    /** The id associated with the current timeout call waiting to resolve. */
    _timeoutId;
    /** Emits when this service is destroyed. */
    _destroyed = new Subject();
    ngOnDestroy() {
        this._cleanupMousemove?.();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Set the Menu and its PointerFocusTracker.
     * @param menu The menu that this menu aim service controls.
     * @param pointerTracker The `PointerFocusTracker` for the given menu.
     */
    initialize(menu, pointerTracker) {
        this._menu = menu;
        this._pointerTracker = pointerTracker;
        this._subscribeToMouseMoves();
    }
    /**
     * Calls the `doToggle` callback when it is deemed that the user is not moving towards
     * the submenu.
     * @param doToggle the function called when the user is not moving towards the submenu.
     */
    toggle(doToggle) {
        if (this._menu.orientation === "horizontal") {
            doToggle();
        }
        this._checkConfigured();
        const siblingItemIsWaiting = !!this._timeoutId;
        const hasPoints = this._points.length > 1;
        if (hasPoints && !siblingItemIsWaiting) {
            if (this._isMovingToSubmenu()) {
                this._startTimeout(doToggle);
            }
            else {
                doToggle();
            }
        }
        else if (!siblingItemIsWaiting) {
            doToggle();
        }
    }
    /**
     * Start the delayed toggle handler if one isn't running already.
     *
     * The delayed toggle handler executes the `doToggle` callback after some period of time iff the
     * users mouse is on an item in the current menu.
     *
     * @param doToggle the function called when the user is not moving towards the submenu.
     */
    _startTimeout(doToggle) {
        const timeoutId = setTimeout(() => {
            if (this._pointerTracker.activeElement && timeoutId === this._timeoutId) {
                doToggle();
            }
            this._timeoutId = null;
        }, CLOSE_DELAY);
        this._timeoutId = timeoutId;
    }
    /** Whether the user is heading towards the open submenu. */
    _isMovingToSubmenu() {
        const submenuPoints = this._getSubmenuBounds();
        if (!submenuPoints) {
            return false;
        }
        let numMoving = 0;
        const currPoint = this._points[this._points.length - 1];
        for (let i = this._points.length - 2; i >= 0; i--) {
            const previous = this._points[i];
            const slope = getSlope(currPoint, previous);
            if (isWithinSubmenu(submenuPoints, slope, getYIntercept(currPoint, slope))) {
                numMoving++;
            }
        }
        return numMoving >= Math.floor(NUM_POINTS / 2);
    }
    /** Get the bounding DOMRect for the open submenu. */
    _getSubmenuBounds() {
        return this._pointerTracker?.previousElement?.getMenu()?.nativeElement.getBoundingClientRect();
    }
    /**
     * Check if a reference to the PointerFocusTracker and menu element is provided.
     * @throws an error if neither reference is provided.
     */
    _checkConfigured() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            if (!this._pointerTracker) {
                throwMissingPointerFocusTracker();
            }
            if (!this._menu) {
                throwMissingMenuReference();
            }
        }
    }
    /** Subscribe to the root menus mouse move events and update the tracked mouse points. */
    _subscribeToMouseMoves() {
        this._cleanupMousemove?.();
        this._cleanupMousemove = this._ngZone.runOutsideAngular(() => {
            let eventIndex = 0;
            return this._renderer.listen(this._menu.nativeElement, "mousemove", event => {
                if (eventIndex % MOUSE_MOVE_SAMPLE_FREQUENCY === 0) {
                    this._points.push({
                        x: event.clientX,
                        y: event.clientY
                    });
                    if (this._points.length > NUM_POINTS) {
                        this._points.shift();
                    }
                }
                eventIndex++;
            });
        });
    }
    static ɵfac = function TargetMenuAim_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _TargetMenuAim)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _TargetMenuAim,
        factory: _TargetMenuAim.ɵfac
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TargetMenuAim, [{
            type: Injectable
        }], null, null);
})();
var CdkTargetMenuAim = class _CdkTargetMenuAim {
    static ɵfac = function CdkTargetMenuAim_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTargetMenuAim)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkTargetMenuAim,
        selectors: [["", "cdkTargetMenuAim", ""]],
        exportAs: ["cdkTargetMenuAim"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: MENU_AIM,
                    useClass: TargetMenuAim
                }])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTargetMenuAim, [{
            type: Directive,
            args: [{
                    selector: "[cdkTargetMenuAim]",
                    exportAs: "cdkTargetMenuAim",
                    providers: [{
                            provide: MENU_AIM,
                            useClass: TargetMenuAim
                        }]
                }]
        }], null, null);
})();
function eventDispatchesNativeClick(elementRef, event) {
    if (!event.isTrusted) {
        return false;
    }
    const el = elementRef.nativeElement;
    const keyCode = event.keyCode;
    if (el.nodeName === "BUTTON" && !el.disabled) {
        return keyCode === ENTER || keyCode === SPACE;
    }
    if (el.nodeName === "A") {
        return keyCode === ENTER;
    }
    return false;
}
var CdkMenuTrigger = class _CdkMenuTrigger extends CdkMenuTriggerBase {
    _elementRef = inject(ElementRef);
    _ngZone = inject(NgZone);
    _changeDetectorRef = inject(ChangeDetectorRef);
    _inputModalityDetector = inject(InputModalityDetector);
    _directionality = inject(Directionality, {
        optional: true
    });
    _renderer = inject(Renderer2);
    _injector = inject(Injector);
    _cleanupMouseenter;
    /** The app's menu tracking registry */
    _menuTracker = inject(MenuTracker);
    /** The parent menu this trigger belongs to. */
    _parentMenu = inject(CDK_MENU, {
        optional: true
    });
    /** The menu aim service used by this menu. */
    _menuAim = inject(MENU_AIM, {
        optional: true
    });
    constructor() {
        super();
        this._setRole();
        this._registerCloseHandler();
        this._subscribeToMenuStackClosed();
        this._subscribeToMouseEnter();
        this._subscribeToMenuStackHasFocus();
        this._setType();
    }
    /** Toggle the attached menu. */
    toggle() {
        this.isOpen() ? this.close() : this.open();
    }
    /** Open the attached menu. */
    open() {
        if (!this._parentMenu) {
            this._menuTracker.update(this);
        }
        if (!this.isOpen() && this.menuTemplateRef != null) {
            this.opened.next();
            this.overlayRef = this.overlayRef || createOverlayRef(this._injector, this._getOverlayConfig());
            this.overlayRef.attach(this.getMenuContentPortal());
            this._changeDetectorRef.markForCheck();
            this._subscribeToOutsideClicks();
        }
    }
    /** Close the opened menu. */
    close() {
        if (this.isOpen()) {
            this.closed.next();
            this.overlayRef.detach();
            this._changeDetectorRef.markForCheck();
        }
        this._closeSiblingTriggers();
    }
    /**
     * Get a reference to the rendered Menu if the Menu is open and rendered in the DOM.
     */
    getMenu() {
        return this.childMenu;
    }
    ngOnChanges(changes) {
        if (changes["menuPosition"] && this.overlayRef) {
            this.overlayRef.updatePositionStrategy(this._getOverlayPositionStrategy());
        }
    }
    ngOnDestroy() {
        this._cleanupMouseenter();
        super.ngOnDestroy();
    }
    /**
     * Handles keyboard events for the menu item.
     * @param event The keyboard event to handle
     */
    _toggleOnKeydown(event) {
        const isParentVertical = this._parentMenu?.orientation === "vertical";
        switch (event.keyCode) {
            case SPACE:
            case ENTER:
                if (!hasModifierKey(event) && !eventDispatchesNativeClick(this._elementRef, event)) {
                    this.toggle();
                    this.childMenu?.focusFirstItem("keyboard");
                }
                break;
            case RIGHT_ARROW:
                if (!hasModifierKey(event)) {
                    if (this._parentMenu && isParentVertical && this._directionality?.value !== "rtl") {
                        event.preventDefault();
                        this.open();
                        this.childMenu?.focusFirstItem("keyboard");
                    }
                }
                break;
            case LEFT_ARROW:
                if (!hasModifierKey(event)) {
                    if (this._parentMenu && isParentVertical && this._directionality?.value === "rtl") {
                        event.preventDefault();
                        this.open();
                        this.childMenu?.focusFirstItem("keyboard");
                    }
                }
                break;
            case DOWN_ARROW:
            case UP_ARROW:
                if (!hasModifierKey(event)) {
                    if (!isParentVertical) {
                        event.preventDefault();
                        this.open();
                        event.keyCode === DOWN_ARROW ? this.childMenu?.focusFirstItem("keyboard") : this.childMenu?.focusLastItem("keyboard");
                    }
                }
                break;
        }
    }
    /** Handles clicks on the menu trigger. */
    _handleClick() {
        this.toggle();
        this.childMenu?.focusFirstItem("mouse");
    }
    /**
     * Sets whether the trigger's menu stack has focus.
     * @param hasFocus Whether the menu stack has focus.
     */
    _setHasFocus(hasFocus) {
        if (!this._parentMenu) {
            this.menuStack.setHasFocus(hasFocus);
        }
    }
    /**
     * Subscribe to the mouseenter events and close any sibling menu items if this element is moused
     * into.
     */
    _subscribeToMouseEnter() {
        this._cleanupMouseenter = this._ngZone.runOutsideAngular(() => {
            return this._renderer.listen(this._elementRef.nativeElement, "mouseenter", () => {
                if (
                // Skip fake `mouseenter` events dispatched by touch devices.
                this._inputModalityDetector.mostRecentModality !== "touch" && !this.menuStack.isEmpty() && !this.isOpen()) {
                    const toggleMenus = () => this._ngZone.run(() => {
                        this._closeSiblingTriggers();
                        this.open();
                    });
                    if (this._menuAim) {
                        this._menuAim.toggle(toggleMenus);
                    }
                    else {
                        toggleMenus();
                    }
                }
            });
        });
    }
    /** Close out any sibling menu trigger menus. */
    _closeSiblingTriggers() {
        if (this._parentMenu) {
            const isParentMenuBar = !this.menuStack.closeSubMenuOf(this._parentMenu) && this.menuStack.peek() !== this._parentMenu;
            if (isParentMenuBar) {
                this.menuStack.closeAll();
            }
        }
        else {
            this.menuStack.closeAll();
        }
    }
    /** Get the configuration object used to create the overlay. */
    _getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this._getOverlayPositionStrategy(),
            scrollStrategy: this.menuScrollStrategy(),
            direction: this._directionality || void 0
        });
    }
    /** Build the position strategy for the overlay which specifies where to place the menu. */
    _getOverlayPositionStrategy() {
        return createFlexibleConnectedPositionStrategy(this._injector, this._elementRef).withLockedPosition().withFlexibleDimensions(false).withPositions(this._getOverlayPositions());
    }
    /** Get the preferred positions for the opened menu relative to the menu item. */
    _getOverlayPositions() {
        return this.menuPosition ?? (!this._parentMenu || this._parentMenu.orientation === "horizontal" ? STANDARD_DROPDOWN_BELOW_POSITIONS : STANDARD_DROPDOWN_ADJACENT_POSITIONS);
    }
    /**
     * Subscribe to the MenuStack close events if this is a standalone trigger and close out the menu
     * this triggers when requested.
     */
    _registerCloseHandler() {
        if (!this._parentMenu) {
            this.menuStack.closed.pipe(takeUntil(this.destroyed)).subscribe(({ item }) => {
                if (item === this.childMenu) {
                    this.close();
                }
            });
        }
    }
    /**
     * Subscribe to the overlays outside pointer events stream and handle closing out the stack if a
     * click occurs outside the menus.
     */
    _subscribeToOutsideClicks() {
        if (this.overlayRef) {
            this.overlayRef.outsidePointerEvents().pipe(takeUntil(this.stopOutsideClicksListener)).subscribe(event => {
                const target = _getEventTarget(event);
                const element = this._elementRef.nativeElement;
                if (target !== element && !element.contains(target)) {
                    if (!this.isElementInsideMenuStack(target)) {
                        this.menuStack.closeAll();
                    }
                    else {
                        this._closeSiblingTriggers();
                    }
                }
            });
        }
    }
    /** Subscribe to the MenuStack hasFocus events. */
    _subscribeToMenuStackHasFocus() {
        if (!this._parentMenu) {
            this.menuStack.hasFocus.pipe(takeUntil(this.destroyed)).subscribe(hasFocus => {
                if (!hasFocus) {
                    this.menuStack.closeAll();
                }
            });
        }
    }
    /** Subscribe to the MenuStack closed events. */
    _subscribeToMenuStackClosed() {
        if (!this._parentMenu) {
            this.menuStack.closed.subscribe(({ focusParentTrigger }) => {
                if (focusParentTrigger && !this.menuStack.length()) {
                    this._elementRef.nativeElement.focus();
                }
            });
        }
    }
    /** Sets the role attribute for this trigger if needed. */
    _setRole() {
        if (!this._parentMenu) {
            this._elementRef.nativeElement.setAttribute("role", "button");
        }
    }
    /** Sets thte `type` attribute of the trigger. */
    _setType() {
        const element = this._elementRef.nativeElement;
        if (element.nodeName === "BUTTON" && !element.getAttribute("type")) {
            element.setAttribute("type", "button");
        }
    }
    static ɵfac = function CdkMenuTrigger_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkMenuTrigger)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkMenuTrigger,
        selectors: [["", "cdkMenuTriggerFor", ""]],
        hostAttrs: [1, "cdk-menu-trigger"],
        hostVars: 2,
        hostBindings: function CdkMenuTrigger_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("focusin", function CdkMenuTrigger_focusin_HostBindingHandler() {
                    return ctx._setHasFocus(true);
                })("focusout", function CdkMenuTrigger_focusout_HostBindingHandler() {
                    return ctx._setHasFocus(false);
                })("keydown", function CdkMenuTrigger_keydown_HostBindingHandler($event) {
                    return ctx._toggleOnKeydown($event);
                })("click", function CdkMenuTrigger_click_HostBindingHandler() {
                    return ctx._handleClick();
                });
            }
            if (rf & 2) {
                i0.ɵɵattribute("aria-haspopup", ctx.menuTemplateRef ? "menu" : null)("aria-expanded", ctx.menuTemplateRef == null ? null : ctx.isOpen());
            }
        },
        inputs: {
            menuTemplateRef: [0, "cdkMenuTriggerFor", "menuTemplateRef"],
            menuPosition: [0, "cdkMenuPosition", "menuPosition"],
            menuData: [0, "cdkMenuTriggerData", "menuData"]
        },
        outputs: {
            opened: "cdkMenuOpened",
            closed: "cdkMenuClosed"
        },
        exportAs: ["cdkMenuTriggerFor"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: MENU_TRIGGER,
                    useExisting: _CdkMenuTrigger
                }, PARENT_OR_NEW_MENU_STACK_PROVIDER]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuTrigger, [{
            type: Directive,
            args: [{
                    selector: "[cdkMenuTriggerFor]",
                    exportAs: "cdkMenuTriggerFor",
                    host: {
                        "class": "cdk-menu-trigger",
                        "[attr.aria-haspopup]": 'menuTemplateRef ? "menu" : null',
                        "[attr.aria-expanded]": "menuTemplateRef == null ? null : isOpen()",
                        "(focusin)": "_setHasFocus(true)",
                        "(focusout)": "_setHasFocus(false)",
                        "(keydown)": "_toggleOnKeydown($event)",
                        "(click)": "_handleClick()"
                    },
                    inputs: [{
                            name: "menuTemplateRef",
                            alias: "cdkMenuTriggerFor"
                        }, {
                            name: "menuPosition",
                            alias: "cdkMenuPosition"
                        }, {
                            name: "menuData",
                            alias: "cdkMenuTriggerData"
                        }],
                    outputs: ["opened: cdkMenuOpened", "closed: cdkMenuClosed"],
                    providers: [{
                            provide: MENU_TRIGGER,
                            useExisting: CdkMenuTrigger
                        }, PARENT_OR_NEW_MENU_STACK_PROVIDER]
                }]
        }], () => [], null);
})();
var CdkMenuItem = class _CdkMenuItem {
    _dir = inject(Directionality, {
        optional: true
    });
    _elementRef = inject(ElementRef);
    _ngZone = inject(NgZone);
    _inputModalityDetector = inject(InputModalityDetector);
    _renderer = inject(Renderer2);
    _cleanupMouseEnter;
    /** The menu aim service used by this menu. */
    _menuAim = inject(MENU_AIM, {
        optional: true
    });
    /** The stack of menus this menu belongs to. */
    _menuStack = inject(MENU_STACK);
    /** The parent menu in which this menuitem resides. */
    _parentMenu = inject(CDK_MENU, {
        optional: true
    });
    /** Reference to the CdkMenuItemTrigger directive if one is added to the same element */
    _menuTrigger = inject(CdkMenuTrigger, {
        optional: true,
        self: true
    });
    /**  Whether the CdkMenuItem is disabled - defaults to false */
    disabled = false;
    /**
     * The text used to locate this item during menu typeahead. If not specified,
     * the `textContent` of the item will be used.
     */
    typeaheadLabel;
    /**
     * If this MenuItem is a regular MenuItem, outputs when it is triggered by a keyboard or mouse
     * event.
     */
    triggered = new EventEmitter();
    /** Whether the menu item opens a menu. */
    get hasMenu() {
        return this._menuTrigger?.menuTemplateRef != null;
    }
    /**
     * The tabindex for this menu item managed internally and used for implementing roving a
     * tab index.
     */
    _tabindex = -1;
    /** Whether the item should close the menu if triggered by the spacebar. */
    closeOnSpacebarTrigger = true;
    /** Emits when the menu item is destroyed. */
    destroyed = new Subject();
    constructor() {
        this._setupMouseEnter();
        this._setType();
        if (this._isStandaloneItem()) {
            this._tabindex = 0;
        }
    }
    ngOnDestroy() {
        this._cleanupMouseEnter?.();
        this.destroyed.next();
        this.destroyed.complete();
    }
    /** Place focus on the element. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    /**
     * If the menu item is not disabled and the element does not have a menu trigger attached, emit
     * on the cdkMenuItemTriggered emitter and close all open menus.
     * @param options Options the configure how the item is triggered
     *   - keepOpen: specifies that the menu should be kept open after triggering the item.
     */
    trigger(options) {
        const { keepOpen } = __spreadValues({}, options);
        if (!this.disabled && !this.hasMenu) {
            this.triggered.next();
            if (!keepOpen) {
                this._menuStack.closeAll({
                    focusParentTrigger: true
                });
            }
        }
    }
    /** Return true if this MenuItem has an attached menu and it is open. */
    isMenuOpen() {
        return !!this._menuTrigger?.isOpen();
    }
    /**
     * Get a reference to the rendered Menu if the Menu is open and it is visible in the DOM.
     * @return the menu if it is open, otherwise undefined.
     */
    getMenu() {
        return this._menuTrigger?.getMenu();
    }
    /** Get the CdkMenuTrigger associated with this element. */
    getMenuTrigger() {
        return this._menuTrigger;
    }
    /** Get the label for this element which is required by the FocusableOption interface. */
    getLabel() {
        return this.typeaheadLabel || this._elementRef.nativeElement.textContent?.trim() || "";
    }
    /** Reset the tabindex to -1. */
    _resetTabIndex() {
        if (!this._isStandaloneItem()) {
            this._tabindex = -1;
        }
    }
    /**
     * Set the tab index to 0 if not disabled and it's a focus event, or a mouse enter if this element
     * is not in a menu bar.
     */
    _setTabIndex(event) {
        if (this.disabled) {
            return;
        }
        if (!event || !this._menuStack.isEmpty()) {
            this._tabindex = 0;
        }
    }
    /** Handles click events on the item. */
    _handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            this.trigger();
        }
    }
    /**
     * Handles keyboard events for the menu item, specifically either triggering the user defined
     * callback or opening/closing the current menu based on whether the left or right arrow key was
     * pressed.
     * @param event the keyboard event to handle
     */
    _onKeydown(event) {
        switch (event.keyCode) {
            case SPACE:
            case ENTER:
                if (!hasModifierKey(event) && !eventDispatchesNativeClick(this._elementRef, event)) {
                    const nodeName = this._elementRef.nativeElement.nodeName;
                    if (nodeName !== "A" && nodeName !== "BUTTON") {
                        event.preventDefault();
                    }
                    this.trigger({
                        keepOpen: event.keyCode === SPACE && !this.closeOnSpacebarTrigger
                    });
                }
                break;
            case RIGHT_ARROW:
                if (!hasModifierKey(event)) {
                    if (this._parentMenu && this._isParentVertical()) {
                        if (this._dir?.value !== "rtl") {
                            this._forwardArrowPressed(event);
                        }
                        else {
                            this._backArrowPressed(event);
                        }
                    }
                }
                break;
            case LEFT_ARROW:
                if (!hasModifierKey(event)) {
                    if (this._parentMenu && this._isParentVertical()) {
                        if (this._dir?.value !== "rtl") {
                            this._backArrowPressed(event);
                        }
                        else {
                            this._forwardArrowPressed(event);
                        }
                    }
                }
                break;
        }
    }
    /** Whether this menu item is standalone or within a menu or menu bar. */
    _isStandaloneItem() {
        return !this._parentMenu;
    }
    /**
     * Handles the user pressing the back arrow key.
     * @param event The keyboard event.
     */
    _backArrowPressed(event) {
        const parentMenu = this._parentMenu;
        if (this._menuStack.hasInlineMenu() || this._menuStack.length() > 1) {
            event.preventDefault();
            this._menuStack.close(parentMenu, {
                focusNextOnEmpty: this._menuStack.inlineMenuOrientation() === "horizontal" ? FocusNext.previousItem : FocusNext.currentItem,
                focusParentTrigger: true
            });
        }
    }
    /**
     * Handles the user pressing the forward arrow key.
     * @param event The keyboard event.
     */
    _forwardArrowPressed(event) {
        if (!this.hasMenu && this._menuStack.inlineMenuOrientation() === "horizontal") {
            event.preventDefault();
            this._menuStack.closeAll({
                focusNextOnEmpty: FocusNext.nextItem,
                focusParentTrigger: true
            });
        }
    }
    /**
     * Subscribe to the mouseenter events and close any sibling menu items if this element is moused
     * into.
     */
    _setupMouseEnter() {
        if (!this._isStandaloneItem()) {
            const closeOpenSiblings = () => this._ngZone.run(() => this._menuStack.closeSubMenuOf(this._parentMenu));
            this._cleanupMouseEnter = this._ngZone.runOutsideAngular(() => this._renderer.listen(this._elementRef.nativeElement, "mouseenter", () => {
                if (this._inputModalityDetector.mostRecentModality !== "touch" && !this._menuStack.isEmpty() && !this.hasMenu) {
                    if (this._menuAim) {
                        this._menuAim.toggle(closeOpenSiblings);
                    }
                    else {
                        closeOpenSiblings();
                    }
                }
            }));
        }
    }
    /**
     * Return true if the enclosing parent menu is configured in a horizontal orientation, false
     * otherwise or if no parent.
     */
    _isParentVertical() {
        return this._parentMenu?.orientation === "vertical";
    }
    /** Sets the `type` attribute of the menu item. */
    _setType() {
        const element = this._elementRef.nativeElement;
        if (element.nodeName === "BUTTON" && !element.getAttribute("type")) {
            element.setAttribute("type", "button");
        }
    }
    static ɵfac = function CdkMenuItem_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkMenuItem)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkMenuItem,
        selectors: [["", "cdkMenuItem", ""]],
        hostAttrs: ["role", "menuitem", 1, "cdk-menu-item"],
        hostVars: 4,
        hostBindings: function CdkMenuItem_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("blur", function CdkMenuItem_blur_HostBindingHandler() {
                    return ctx._resetTabIndex();
                })("focus", function CdkMenuItem_focus_HostBindingHandler() {
                    return ctx._setTabIndex();
                })("click", function CdkMenuItem_click_HostBindingHandler($event) {
                    return ctx._handleClick($event);
                })("keydown", function CdkMenuItem_keydown_HostBindingHandler($event) {
                    return ctx._onKeydown($event);
                });
            }
            if (rf & 2) {
                i0.ɵɵdomProperty("tabIndex", ctx._tabindex);
                i0.ɵɵattribute("aria-disabled", ctx.disabled || null);
                i0.ɵɵclassProp("cdk-menu-item-disabled", ctx.disabled);
            }
        },
        inputs: {
            disabled: [2, "cdkMenuItemDisabled", "disabled", booleanAttribute],
            typeaheadLabel: [0, "cdkMenuitemTypeaheadLabel", "typeaheadLabel"]
        },
        outputs: {
            triggered: "cdkMenuItemTriggered"
        },
        exportAs: ["cdkMenuItem"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuItem, [{
            type: Directive,
            args: [{
                    selector: "[cdkMenuItem]",
                    exportAs: "cdkMenuItem",
                    host: {
                        "role": "menuitem",
                        "class": "cdk-menu-item",
                        "[class.cdk-menu-item-disabled]": "disabled",
                        "[tabindex]": "_tabindex",
                        "[attr.aria-disabled]": "disabled || null",
                        "(blur)": "_resetTabIndex()",
                        "(focus)": "_setTabIndex()",
                        "(click)": "_handleClick($event)",
                        "(keydown)": "_onKeydown($event)"
                    }
                }]
        }], () => [], {
        disabled: [{
                type: Input,
                args: [{
                        alias: "cdkMenuItemDisabled",
                        transform: booleanAttribute
                    }]
            }],
        typeaheadLabel: [{
                type: Input,
                args: ["cdkMenuitemTypeaheadLabel"]
            }],
        triggered: [{
                type: Output,
                args: ["cdkMenuItemTriggered"]
            }]
    });
})();
var PointerFocusTracker = class {
    _renderer;
    _items;
    _eventCleanups;
    _itemsSubscription;
    /** Emits when an element is moused into. */
    entered = new Subject();
    /** Emits when an element is moused out. */
    exited = new Subject();
    /** The element currently under mouse focus. */
    activeElement;
    /** The element previously under mouse focus. */
    previousElement;
    constructor(_renderer, _items) {
        this._renderer = _renderer;
        this._items = _items;
        this._bindEvents();
        this.entered.subscribe(element => this.activeElement = element);
        this.exited.subscribe(() => {
            this.previousElement = this.activeElement;
            this.activeElement = void 0;
        });
    }
    /** Stop the managers listeners. */
    destroy() {
        this._cleanupEvents();
        this._itemsSubscription?.unsubscribe();
    }
    /** Binds the enter/exit events on all the items. */
    _bindEvents() {
        this._itemsSubscription = this._items.changes.pipe(startWith(this._items)).subscribe(() => {
            this._cleanupEvents();
            this._eventCleanups = [];
            this._items.forEach(item => {
                const element = item._elementRef.nativeElement;
                this._eventCleanups.push(this._renderer.listen(element, "mouseenter", () => {
                    this.entered.next(item);
                }), this._renderer.listen(element, "mouseout", () => {
                    this.exited.next(item);
                }));
            });
        });
    }
    /** Cleans up the currently-bound events. */
    _cleanupEvents() {
        this._eventCleanups?.forEach(cleanup => cleanup());
        this._eventCleanups = void 0;
    }
};
var CdkMenuBase = class _CdkMenuBase extends CdkMenuGroup {
    _focusMonitor = inject(FocusMonitor);
    ngZone = inject(NgZone);
    _renderer = inject(Renderer2);
    /** The menu's native DOM host element. */
    nativeElement = inject(ElementRef).nativeElement;
    /** The stack of menus this menu belongs to. */
    menuStack = inject(MENU_STACK);
    /** The menu aim service used by this menu. */
    menuAim = inject(MENU_AIM, {
        optional: true,
        self: true
    });
    /** The directionality (text direction) of the current page. */
    dir = inject(Directionality, {
        optional: true
    });
    /** All items inside the menu, including ones that belong to other menus. */
    _allItems;
    /** The id of the menu's host element. */
    id = inject(_IdGenerator).getId("cdk-menu-");
    /** All child MenuItem elements belonging to this Menu. */
    items = new QueryList();
    /** The direction items in the menu flow. */
    orientation = "vertical";
    /**
     * Whether the menu is displayed inline (i.e. always present vs a conditional popup that the
     * user triggers with a trigger element).
     */
    isInline = false;
    /** Handles keyboard events for the menu. */
    keyManager;
    /** Emits when the MenuBar is destroyed. */
    destroyed = new Subject();
    /** The Menu Item which triggered the open submenu. */
    triggerItem;
    /** Tracks the users mouse movements over the menu. */
    pointerTracker;
    /** Whether this menu's menu stack has focus. */
    _menuStackHasFocus = signal(false, ...(ngDevMode ? [{
            debugName: "_menuStackHasFocus"
        }] : []));
    _tabIndexSignal = computed(() => {
        const tabindexIfInline = this._menuStackHasFocus() ? -1 : 0;
        return this.isInline ? tabindexIfInline : null;
    }, ...(ngDevMode ? [{
            debugName: "_tabIndexSignal"
        }] : []));
    ngAfterContentInit() {
        if (!this.isInline) {
            this.menuStack.push(this);
        }
        this._setItems();
        this._setKeyManager();
        this._handleFocus();
        this._subscribeToMenuStackHasFocus();
        this._subscribeToMenuOpen();
        this._subscribeToMenuStackClosed();
        this._setUpPointerTracker();
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this.nativeElement);
        this.keyManager?.destroy();
        this.destroyed.next();
        this.destroyed.complete();
        this.pointerTracker?.destroy();
    }
    /**
     * Place focus on the first MenuItem in the menu and set the focus origin.
     * @param focusOrigin The origin input mode of the focus event.
     */
    focusFirstItem(focusOrigin = "program") {
        this.keyManager.setFocusOrigin(focusOrigin);
        this.keyManager.setFirstItemActive();
    }
    /**
     * Place focus on the last MenuItem in the menu and set the focus origin.
     * @param focusOrigin The origin input mode of the focus event.
     */
    focusLastItem(focusOrigin = "program") {
        this.keyManager.setFocusOrigin(focusOrigin);
        this.keyManager.setLastItemActive();
    }
    /**
     * Sets the active item to the item at the specified index and focuses the newly active item.
     * @param item The index of the item to be set as active, or the CdkMenuItem instance.
     */
    setActiveMenuItem(item) {
        this.keyManager?.setActiveItem(item);
    }
    /** Gets the tabindex for this menu. */
    _getTabIndex() {
        return this._tabIndexSignal();
    }
    /**
     * Close the open menu if the current active item opened the requested MenuStackItem.
     * @param menu The menu requested to be closed.
     * @param options Options to configure the behavior on close.
     *   - `focusParentTrigger` Whether to focus the parent trigger after closing the menu.
     */
    closeOpenMenu(menu, options) {
        const { focusParentTrigger } = __spreadValues({}, options);
        const keyManager = this.keyManager;
        const trigger = this.triggerItem;
        if (menu === trigger?.getMenuTrigger()?.getMenu()) {
            trigger?.getMenuTrigger()?.close();
            if (focusParentTrigger) {
                if (trigger) {
                    keyManager.setActiveItem(trigger);
                }
                else {
                    keyManager.setFirstItemActive();
                }
            }
        }
    }
    /** Sets up the subscription that keeps the items list in sync. */
    _setItems() {
        this._allItems.changes.pipe(startWith(this._allItems), takeUntil(this.destroyed)).subscribe(items => {
            this.items.reset(items.filter(item => item._parentMenu === this));
            this.items.notifyOnChanges();
        });
    }
    /** Setup the FocusKeyManager with the correct orientation for the menu. */
    _setKeyManager() {
        this.keyManager = new FocusKeyManager(this.items).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(() => false);
        if (this.orientation === "horizontal") {
            this.keyManager.withHorizontalOrientation(this.dir?.value || "ltr");
        }
        else {
            this.keyManager.withVerticalOrientation();
        }
    }
    /**
     * Subscribe to the menu trigger's open events in order to track the trigger which opened the menu
     * and stop tracking it when the menu is closed.
     */
    _subscribeToMenuOpen() {
        const exitCondition = merge(this.items.changes, this.destroyed);
        this.items.changes.pipe(startWith(this.items), mergeMap(list => list.filter(item => item.hasMenu).map(item => item.getMenuTrigger().opened.pipe(mapTo(item), takeUntil(exitCondition)))), mergeAll(), switchMap(item => {
            this.triggerItem = item;
            return item.getMenuTrigger().closed;
        }), takeUntil(this.destroyed)).subscribe(() => this.triggerItem = void 0);
    }
    /** Subscribe to the MenuStack close events. */
    _subscribeToMenuStackClosed() {
        this.menuStack.closed.pipe(takeUntil(this.destroyed)).subscribe(({ item, focusParentTrigger }) => this.closeOpenMenu(item, {
            focusParentTrigger
        }));
    }
    /** Subscribe to the MenuStack hasFocus events. */
    _subscribeToMenuStackHasFocus() {
        if (this.isInline) {
            this.menuStack.hasFocus.pipe(takeUntil(this.destroyed)).subscribe(hasFocus => {
                this._menuStackHasFocus.set(hasFocus);
            });
        }
    }
    /**
     * Set the PointerFocusTracker and ensure that when mouse focus changes the key manager is updated
     * with the latest menu item under mouse focus.
     */
    _setUpPointerTracker() {
        if (this.menuAim) {
            this.ngZone.runOutsideAngular(() => {
                this.pointerTracker = new PointerFocusTracker(this._renderer, this.items);
            });
            this.menuAim.initialize(this, this.pointerTracker);
        }
    }
    /** Handles focus landing on the host element of the menu. */
    _handleFocus() {
        this._focusMonitor.monitor(this.nativeElement, false).pipe(takeUntil(this.destroyed)).subscribe(origin => {
            if (origin !== null && origin !== "mouse") {
                this.focusFirstItem(origin);
            }
        });
    }
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵCdkMenuBase_BaseFactory;
        return function CdkMenuBase_Factory(__ngFactoryType__) {
            return (ɵCdkMenuBase_BaseFactory || (ɵCdkMenuBase_BaseFactory = i0.ɵɵgetInheritedFactory(_CdkMenuBase)))(__ngFactoryType__ || _CdkMenuBase);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkMenuBase,
        contentQueries: function CdkMenuBase_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CdkMenuItem, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._allItems = _t);
            }
        },
        hostAttrs: ["role", "menu"],
        hostVars: 4,
        hostBindings: function CdkMenuBase_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("focusin", function CdkMenuBase_focusin_HostBindingHandler() {
                    return ctx.menuStack.setHasFocus(true);
                })("focusout", function CdkMenuBase_focusout_HostBindingHandler() {
                    return ctx.menuStack.setHasFocus(false);
                });
            }
            if (rf & 2) {
                i0.ɵɵdomProperty("tabIndex", ctx._getTabIndex())("id", ctx.id);
                i0.ɵɵattribute("aria-orientation", ctx.orientation)("data-cdk-menu-stack-id", ctx.menuStack.id);
            }
        },
        inputs: {
            id: "id"
        },
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuBase, [{
            type: Directive,
            args: [{
                    host: {
                        "role": "menu",
                        "class": "",
                        // reset the css class added by the super-class
                        "[tabindex]": "_getTabIndex()",
                        "[id]": "id",
                        "[attr.aria-orientation]": "orientation",
                        "[attr.data-cdk-menu-stack-id]": "menuStack.id",
                        "(focusin)": "menuStack.setHasFocus(true)",
                        "(focusout)": "menuStack.setHasFocus(false)"
                    }
                }]
        }], null, {
        _allItems: [{
                type: ContentChildren,
                args: [CdkMenuItem, {
                        descendants: true
                    }]
            }],
        id: [{
                type: Input
            }]
    });
})();
var CdkMenu = class _CdkMenu extends CdkMenuBase {
    _parentTrigger = inject(MENU_TRIGGER, {
        optional: true
    });
    /** Event emitted when the menu is closed. */
    closed = new EventEmitter();
    /** The direction items in the menu flow. */
    orientation = "vertical";
    /** Whether the menu is displayed inline (i.e. always present vs a conditional popup that the user triggers with a trigger element). */
    isInline = !this._parentTrigger;
    constructor() {
        super();
        this.destroyed.subscribe(this.closed);
        this._parentTrigger?.registerChildMenu(this);
    }
    ngAfterContentInit() {
        super.ngAfterContentInit();
        this._subscribeToMenuStackEmptied();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.closed.complete();
    }
    /**
     * Handle keyboard events for the Menu.
     * @param event The keyboard event to be handled.
     */
    _handleKeyEvent(event) {
        const keyManager = this.keyManager;
        switch (event.keyCode) {
            case LEFT_ARROW:
            case RIGHT_ARROW:
                if (!hasModifierKey(event)) {
                    event.preventDefault();
                    keyManager.setFocusOrigin("keyboard");
                    keyManager.onKeydown(event);
                }
                break;
            case ESCAPE:
                if (!hasModifierKey(event)) {
                    event.preventDefault();
                    this.menuStack.close(this, {
                        focusNextOnEmpty: FocusNext.currentItem,
                        focusParentTrigger: true
                    });
                }
                break;
            case TAB:
                if (!hasModifierKey(event, "altKey", "metaKey", "ctrlKey")) {
                    this.menuStack.closeAll({
                        focusParentTrigger: true
                    });
                }
                break;
            default:
                keyManager.onKeydown(event);
        }
    }
    /**
     * Set focus the either the current, previous or next item based on the FocusNext event.
     * @param focusNext The element to focus.
     */
    _toggleMenuFocus(focusNext) {
        const keyManager = this.keyManager;
        switch (focusNext) {
            case FocusNext.nextItem:
                keyManager.setFocusOrigin("keyboard");
                keyManager.setNextItemActive();
                break;
            case FocusNext.previousItem:
                keyManager.setFocusOrigin("keyboard");
                keyManager.setPreviousItemActive();
                break;
            case FocusNext.currentItem:
                if (keyManager.activeItem) {
                    keyManager.setFocusOrigin("keyboard");
                    keyManager.setActiveItem(keyManager.activeItem);
                }
                break;
        }
    }
    /** Subscribe to the MenuStack emptied events. */
    _subscribeToMenuStackEmptied() {
        this.menuStack.emptied.pipe(takeUntil(this.destroyed)).subscribe(event => this._toggleMenuFocus(event));
    }
    static ɵfac = function CdkMenu_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkMenu)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkMenu,
        selectors: [["", "cdkMenu", ""]],
        hostAttrs: ["role", "menu", 1, "cdk-menu"],
        hostVars: 2,
        hostBindings: function CdkMenu_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function CdkMenu_keydown_HostBindingHandler($event) {
                    return ctx._handleKeyEvent($event);
                });
            }
            if (rf & 2) {
                i0.ɵɵclassProp("cdk-menu-inline", ctx.isInline);
            }
        },
        outputs: {
            closed: "closed"
        },
        exportAs: ["cdkMenu"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkMenuGroup,
                    useExisting: _CdkMenu
                }, {
                    provide: CDK_MENU,
                    useExisting: _CdkMenu
                }, PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER("vertical")]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenu, [{
            type: Directive,
            args: [{
                    selector: "[cdkMenu]",
                    exportAs: "cdkMenu",
                    host: {
                        "role": "menu",
                        "class": "cdk-menu",
                        "[class.cdk-menu-inline]": "isInline",
                        "(keydown)": "_handleKeyEvent($event)"
                    },
                    providers: [{
                            provide: CdkMenuGroup,
                            useExisting: CdkMenu
                        }, {
                            provide: CDK_MENU,
                            useExisting: CdkMenu
                        }, PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER("vertical")]
                }]
        }], () => [], {
        closed: [{
                type: Output
            }]
    });
})();
var CdkMenuBar = class _CdkMenuBar extends CdkMenuBase {
    /** The direction items in the menu flow. */
    orientation = "horizontal";
    /** Whether the menu is displayed inline (i.e. always present vs a conditional popup that the user triggers with a trigger element). */
    isInline = true;
    ngAfterContentInit() {
        super.ngAfterContentInit();
        this._subscribeToMenuStackEmptied();
    }
    /**
     * Handle keyboard events for the Menu.
     * @param event The keyboard event to be handled.
     */
    _handleKeyEvent(event) {
        const keyManager = this.keyManager;
        switch (event.keyCode) {
            case UP_ARROW:
            case DOWN_ARROW:
            case LEFT_ARROW:
            case RIGHT_ARROW:
                if (!hasModifierKey(event)) {
                    const horizontalArrows = event.keyCode === LEFT_ARROW || event.keyCode === RIGHT_ARROW;
                    if (horizontalArrows) {
                        event.preventDefault();
                        const prevIsOpen = keyManager.activeItem?.isMenuOpen();
                        keyManager.activeItem?.getMenuTrigger()?.close();
                        keyManager.setFocusOrigin("keyboard");
                        keyManager.onKeydown(event);
                        if (prevIsOpen) {
                            keyManager.activeItem?.getMenuTrigger()?.open();
                        }
                    }
                }
                break;
            case ESCAPE:
                if (!hasModifierKey(event)) {
                    event.preventDefault();
                    keyManager.activeItem?.getMenuTrigger()?.close();
                }
                break;
            case TAB:
                if (!hasModifierKey(event, "altKey", "metaKey", "ctrlKey")) {
                    keyManager.activeItem?.getMenuTrigger()?.close();
                }
                break;
            default:
                keyManager.onKeydown(event);
        }
    }
    /**
     * Set focus to either the current, previous or next item based on the FocusNext event, then
     * open the previous or next item.
     * @param focusNext The element to focus.
     */
    _toggleOpenMenu(focusNext) {
        const keyManager = this.keyManager;
        switch (focusNext) {
            case FocusNext.nextItem:
                keyManager.setFocusOrigin("keyboard");
                keyManager.setNextItemActive();
                keyManager.activeItem?.getMenuTrigger()?.open();
                break;
            case FocusNext.previousItem:
                keyManager.setFocusOrigin("keyboard");
                keyManager.setPreviousItemActive();
                keyManager.activeItem?.getMenuTrigger()?.open();
                break;
            case FocusNext.currentItem:
                if (keyManager.activeItem) {
                    keyManager.setFocusOrigin("keyboard");
                    keyManager.setActiveItem(keyManager.activeItem);
                }
                break;
        }
    }
    /** Subscribe to the MenuStack emptied events. */
    _subscribeToMenuStackEmptied() {
        this.menuStack?.emptied.pipe(takeUntil(this.destroyed)).subscribe(event => this._toggleOpenMenu(event));
    }
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵCdkMenuBar_BaseFactory;
        return function CdkMenuBar_Factory(__ngFactoryType__) {
            return (ɵCdkMenuBar_BaseFactory || (ɵCdkMenuBar_BaseFactory = i0.ɵɵgetInheritedFactory(_CdkMenuBar)))(__ngFactoryType__ || _CdkMenuBar);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkMenuBar,
        selectors: [["", "cdkMenuBar", ""]],
        hostAttrs: ["role", "menubar", 1, "cdk-menu-bar"],
        hostBindings: function CdkMenuBar_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function CdkMenuBar_keydown_HostBindingHandler($event) {
                    return ctx._handleKeyEvent($event);
                });
            }
        },
        exportAs: ["cdkMenuBar"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkMenuGroup,
                    useExisting: _CdkMenuBar
                }, {
                    provide: CDK_MENU,
                    useExisting: _CdkMenuBar
                }, {
                    provide: MENU_STACK,
                    useFactory: () => MenuStack.inline("horizontal")
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuBar, [{
            type: Directive,
            args: [{
                    selector: "[cdkMenuBar]",
                    exportAs: "cdkMenuBar",
                    host: {
                        "role": "menubar",
                        "class": "cdk-menu-bar",
                        "(keydown)": "_handleKeyEvent($event)"
                    },
                    providers: [{
                            provide: CdkMenuGroup,
                            useExisting: CdkMenuBar
                        }, {
                            provide: CDK_MENU,
                            useExisting: CdkMenuBar
                        }, {
                            provide: MENU_STACK,
                            useFactory: () => MenuStack.inline("horizontal")
                        }]
                }]
        }], null, null);
})();
var CdkMenuItemSelectable = class _CdkMenuItemSelectable extends CdkMenuItem {
    /** Whether the element is checked */
    checked = false;
    /** Whether the item should close the menu if triggered by the spacebar. */
    closeOnSpacebarTrigger = false;
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵCdkMenuItemSelectable_BaseFactory;
        return function CdkMenuItemSelectable_Factory(__ngFactoryType__) {
            return (ɵCdkMenuItemSelectable_BaseFactory || (ɵCdkMenuItemSelectable_BaseFactory = i0.ɵɵgetInheritedFactory(_CdkMenuItemSelectable)))(__ngFactoryType__ || _CdkMenuItemSelectable);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkMenuItemSelectable,
        hostVars: 2,
        hostBindings: function CdkMenuItemSelectable_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("aria-checked", !!ctx.checked)("aria-disabled", ctx.disabled || null);
            }
        },
        inputs: {
            checked: [2, "cdkMenuItemChecked", "checked", booleanAttribute]
        },
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuItemSelectable, [{
            type: Directive,
            args: [{
                    host: {
                        "[attr.aria-checked]": "!!checked",
                        "[attr.aria-disabled]": "disabled || null"
                    }
                }]
        }], null, {
        checked: [{
                type: Input,
                args: [{
                        alias: "cdkMenuItemChecked",
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var CdkMenuItemRadio = class _CdkMenuItemRadio extends CdkMenuItemSelectable {
    /** The unique selection dispatcher for this radio's `CdkMenuGroup`. */
    _selectionDispatcher = inject(UniqueSelectionDispatcher);
    /** An ID to identify this radio item to the `UniqueSelectionDispatcher`. */
    _id = inject(_IdGenerator).getId("cdk-menu-item-radio-");
    /** Function to unregister the selection dispatcher */
    _removeDispatcherListener;
    constructor() {
        super();
        this._registerDispatcherListener();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._removeDispatcherListener();
    }
    /**
     * Toggles the checked state of the radio-button.
     * @param options Options the configure how the item is triggered
     *   - keepOpen: specifies that the menu should be kept open after triggering the item.
     */
    trigger(options) {
        super.trigger(options);
        if (!this.disabled) {
            this._selectionDispatcher.notify(this._id, "");
        }
    }
    /** Configure the unique selection dispatcher listener in order to toggle the checked state  */
    _registerDispatcherListener() {
        this._removeDispatcherListener = this._selectionDispatcher.listen(id => {
            this.checked = this._id === id;
        });
    }
    static ɵfac = function CdkMenuItemRadio_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkMenuItemRadio)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkMenuItemRadio,
        selectors: [["", "cdkMenuItemRadio", ""]],
        hostAttrs: ["role", "menuitemradio"],
        hostVars: 2,
        hostBindings: function CdkMenuItemRadio_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("cdk-menu-item-radio", true);
            }
        },
        exportAs: ["cdkMenuItemRadio"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkMenuItemSelectable,
                    useExisting: _CdkMenuItemRadio
                }, {
                    provide: CdkMenuItem,
                    useExisting: CdkMenuItemSelectable
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuItemRadio, [{
            type: Directive,
            args: [{
                    selector: "[cdkMenuItemRadio]",
                    exportAs: "cdkMenuItemRadio",
                    host: {
                        "role": "menuitemradio",
                        "[class.cdk-menu-item-radio]": "true"
                    },
                    providers: [{
                            provide: CdkMenuItemSelectable,
                            useExisting: CdkMenuItemRadio
                        }, {
                            provide: CdkMenuItem,
                            useExisting: CdkMenuItemSelectable
                        }]
                }]
        }], () => [], null);
})();
var CdkMenuItemCheckbox = class _CdkMenuItemCheckbox extends CdkMenuItemSelectable {
    /**
     * Toggle the checked state of the checkbox.
     * @param options Options the configure how the item is triggered
     *   - keepOpen: specifies that the menu should be kept open after triggering the item.
     */
    trigger(options) {
        super.trigger(options);
        if (!this.disabled) {
            this.checked = !this.checked;
        }
    }
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵCdkMenuItemCheckbox_BaseFactory;
        return function CdkMenuItemCheckbox_Factory(__ngFactoryType__) {
            return (ɵCdkMenuItemCheckbox_BaseFactory || (ɵCdkMenuItemCheckbox_BaseFactory = i0.ɵɵgetInheritedFactory(_CdkMenuItemCheckbox)))(__ngFactoryType__ || _CdkMenuItemCheckbox);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkMenuItemCheckbox,
        selectors: [["", "cdkMenuItemCheckbox", ""]],
        hostAttrs: ["role", "menuitemcheckbox"],
        hostVars: 2,
        hostBindings: function CdkMenuItemCheckbox_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("cdk-menu-item-checkbox", true);
            }
        },
        exportAs: ["cdkMenuItemCheckbox"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkMenuItemSelectable,
                    useExisting: _CdkMenuItemCheckbox
                }, {
                    provide: CdkMenuItem,
                    useExisting: CdkMenuItemSelectable
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuItemCheckbox, [{
            type: Directive,
            args: [{
                    selector: "[cdkMenuItemCheckbox]",
                    exportAs: "cdkMenuItemCheckbox",
                    host: {
                        "role": "menuitemcheckbox",
                        "[class.cdk-menu-item-checkbox]": "true"
                    },
                    providers: [{
                            provide: CdkMenuItemSelectable,
                            useExisting: CdkMenuItemCheckbox
                        }, {
                            provide: CdkMenuItem,
                            useExisting: CdkMenuItemSelectable
                        }]
                }]
        }], null, null);
})();
var CONTEXT_MENU_POSITIONS = STANDARD_DROPDOWN_BELOW_POSITIONS.map(position => {
    const offsetX = position.overlayX === "start" ? 2 : -2;
    const offsetY = position.overlayY === "top" ? 2 : -2;
    return __spreadProps(__spreadValues({}, position), {
        offsetX,
        offsetY
    });
});
var CdkContextMenuTrigger = class _CdkContextMenuTrigger extends CdkMenuTriggerBase {
    _injector = inject(Injector);
    _directionality = inject(Directionality, {
        optional: true
    });
    /** The app's menu tracking registry */
    _menuTracker = inject(MenuTracker);
    _changeDetectorRef = inject(ChangeDetectorRef);
    /** Whether the context menu is disabled. */
    disabled = false;
    constructor() {
        super();
        this._setMenuStackCloseListener();
    }
    /**
     * Open the attached menu at the specified location.
     * @param coordinates where to open the context menu
     */
    open(coordinates) {
        this._open(null, coordinates);
        this._changeDetectorRef.markForCheck();
    }
    /** Close the currently opened context menu. */
    close() {
        this.menuStack.closeAll();
    }
    /**
     * Open the context menu and closes any previously open menus.
     * @param event the mouse event which opens the context menu.
     */
    _openOnContextMenu(event) {
        if (!this.disabled) {
            event.preventDefault();
            event.stopPropagation();
            this._menuTracker.update(this);
            this._open(event, {
                x: event.clientX,
                y: event.clientY
            });
            if (event.button === 2) {
                this.childMenu?.focusFirstItem("mouse");
            }
            else if (event.button === 0) {
                this.childMenu?.focusFirstItem("keyboard");
            }
            else {
                this.childMenu?.focusFirstItem("program");
            }
        }
    }
    /**
     * Get the configuration object used to create the overlay.
     * @param coordinates the location to place the opened menu
     */
    _getOverlayConfig(coordinates) {
        return new OverlayConfig({
            positionStrategy: this._getOverlayPositionStrategy(coordinates),
            scrollStrategy: this.menuScrollStrategy(),
            direction: this._directionality || void 0
        });
    }
    /**
     * Get the position strategy for the overlay which specifies where to place the menu.
     * @param coordinates the location to place the opened menu
     */
    _getOverlayPositionStrategy(coordinates) {
        return createFlexibleConnectedPositionStrategy(this._injector, coordinates).withLockedPosition().withGrowAfterOpen().withPositions(this.menuPosition ?? CONTEXT_MENU_POSITIONS);
    }
    /** Subscribe to the menu stack close events and close this menu when requested. */
    _setMenuStackCloseListener() {
        this.menuStack.closed.pipe(takeUntil(this.destroyed)).subscribe(({ item }) => {
            if (item === this.childMenu && this.isOpen()) {
                this.closed.next();
                this.overlayRef.detach();
                this.childMenu = void 0;
                this._changeDetectorRef.markForCheck();
            }
        });
    }
    /**
     * Subscribe to the overlays outside pointer events stream and handle closing out the stack if a
     * click occurs outside the menus.
     * @param userEvent User-generated event that opened the menu.
     */
    _subscribeToOutsideClicks(userEvent) {
        if (this.overlayRef) {
            let outsideClicks = this.overlayRef.outsidePointerEvents();
            if (userEvent) {
                const [auxClicks, nonAuxClicks] = partition(outsideClicks, ({ type }) => type === "auxclick");
                outsideClicks = merge(
                // Using a mouse, the `contextmenu` event can fire either when pressing the right button
                // or left button + control. Most browsers won't dispatch a `click` event right after
                // a `contextmenu` event triggered by left button + control, but Safari will (see #27832).
                // This closes the menu immediately. To work around it, we check that both the triggering
                // event and the current outside click event both had the control key pressed, and that
                // that this is the first outside click event.
                nonAuxClicks.pipe(skipWhile((event, index) => userEvent.ctrlKey && index === 0 && event.ctrlKey)), 
                // If the menu was triggered by the `contextmenu` event, skip the first `auxclick` event
                // because it fires when the mouse is released on the same click that opened the menu.
                auxClicks.pipe(skip(1)));
            }
            outsideClicks.pipe(takeUntil(this.stopOutsideClicksListener)).subscribe(event => {
                if (!this.isElementInsideMenuStack(_getEventTarget(event))) {
                    this.menuStack.closeAll();
                }
            });
        }
    }
    /**
     * Open the attached menu at the specified location.
     * @param userEvent User-generated event that opened the menu
     * @param coordinates where to open the context menu
     */
    _open(userEvent, coordinates) {
        if (this.disabled) {
            return;
        }
        if (this.isOpen()) {
            this.menuStack.closeSubMenuOf(this.childMenu);
            this.overlayRef.getConfig().positionStrategy.setOrigin(coordinates);
            this.overlayRef.updatePosition();
        }
        else {
            this.opened.next();
            if (this.overlayRef) {
                this.overlayRef.getConfig().positionStrategy.setOrigin(coordinates);
                this.overlayRef.updatePosition();
            }
            else {
                this.overlayRef = createOverlayRef(this._injector, this._getOverlayConfig(coordinates));
            }
            this.overlayRef.attach(this.getMenuContentPortal());
            this._subscribeToOutsideClicks(userEvent);
        }
    }
    static ɵfac = function CdkContextMenuTrigger_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkContextMenuTrigger)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkContextMenuTrigger,
        selectors: [["", "cdkContextMenuTriggerFor", ""]],
        hostVars: 1,
        hostBindings: function CdkContextMenuTrigger_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("contextmenu", function CdkContextMenuTrigger_contextmenu_HostBindingHandler($event) {
                    return ctx._openOnContextMenu($event);
                });
            }
            if (rf & 2) {
                i0.ɵɵattribute("data-cdk-menu-stack-id", null);
            }
        },
        inputs: {
            menuTemplateRef: [0, "cdkContextMenuTriggerFor", "menuTemplateRef"],
            menuPosition: [0, "cdkContextMenuPosition", "menuPosition"],
            menuData: [0, "cdkContextMenuTriggerData", "menuData"],
            disabled: [2, "cdkContextMenuDisabled", "disabled", booleanAttribute]
        },
        outputs: {
            opened: "cdkContextMenuOpened",
            closed: "cdkContextMenuClosed"
        },
        exportAs: ["cdkContextMenuTriggerFor"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: MENU_TRIGGER,
                    useExisting: _CdkContextMenuTrigger
                }, {
                    provide: MENU_STACK,
                    useClass: MenuStack
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkContextMenuTrigger, [{
            type: Directive,
            args: [{
                    selector: "[cdkContextMenuTriggerFor]",
                    exportAs: "cdkContextMenuTriggerFor",
                    host: {
                        "[attr.data-cdk-menu-stack-id]": "null",
                        "(contextmenu)": "_openOnContextMenu($event)"
                    },
                    inputs: [{
                            name: "menuTemplateRef",
                            alias: "cdkContextMenuTriggerFor"
                        }, {
                            name: "menuPosition",
                            alias: "cdkContextMenuPosition"
                        }, {
                            name: "menuData",
                            alias: "cdkContextMenuTriggerData"
                        }],
                    outputs: ["opened: cdkContextMenuOpened", "closed: cdkContextMenuClosed"],
                    providers: [{
                            provide: MENU_TRIGGER,
                            useExisting: CdkContextMenuTrigger
                        }, {
                            provide: MENU_STACK,
                            useClass: MenuStack
                        }]
                }]
        }], () => [], {
        disabled: [{
                type: Input,
                args: [{
                        alias: "cdkContextMenuDisabled",
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var MENU_DIRECTIVES = [CdkMenuBar, CdkMenu, CdkMenuItem, CdkMenuItemRadio, CdkMenuItemCheckbox, CdkMenuTrigger, CdkMenuGroup, CdkContextMenuTrigger, CdkTargetMenuAim];
var CdkMenuModule = class _CdkMenuModule {
    static ɵfac = function CdkMenuModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkMenuModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _CdkMenuModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [OverlayModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuModule, [{
            type: NgModule,
            args: [{
                    imports: [OverlayModule, ...MENU_DIRECTIVES],
                    exports: MENU_DIRECTIVES
                }]
        }], null, null);
})();
export { CDK_MENU, CdkContextMenuTrigger, CdkMenu, CdkMenuBar, CdkMenuBase, CdkMenuGroup, CdkMenuItem, CdkMenuItemCheckbox, CdkMenuItemRadio, CdkMenuItemSelectable, CdkMenuModule, CdkMenuTrigger, CdkMenuTriggerBase, CdkTargetMenuAim, MenuTracker as ContextMenuTracker, FocusNext, MENU_AIM, MENU_SCROLL_STRATEGY, MENU_STACK, MENU_TRIGGER, MenuStack, MenuTracker, PARENT_OR_NEW_INLINE_MENU_STACK_PROVIDER, PARENT_OR_NEW_MENU_STACK_PROVIDER, PointerFocusTracker, TargetMenuAim };
