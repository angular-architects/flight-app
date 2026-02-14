import { _StructuralStylesLoader } from "@nf-internal/chunk-LDHZVRH4";
import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/sort.mjs
import { BidiModule } from "@angular/cdk/bidi";
import * as i0 from "@angular/core";
import { InjectionToken, EventEmitter, booleanAttribute, Directive, Optional, Inject, Input, Output, Injectable, inject, ChangeDetectorRef, ElementRef, signal, Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule } from "@angular/core";
import { FocusMonitor, AriaDescriber } from "@angular/cdk/a11y";
import { SPACE, ENTER } from "@angular/cdk/keycodes";
import { ReplaySubject, Subject, merge } from "rxjs";
import { _CdkPrivateStyleLoader } from "@angular/cdk/private";
import "@angular/cdk/layout";
var _c0 = ["mat-sort-header", ""];
var _c1 = ["*"];
function MatSortHeader_Conditional_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵdomElementStart(0, "div", 2);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵdomElementStart(1, "svg", 3);
        i0.ɵɵdomElement(2, "path", 4);
        i0.ɵɵdomElementEnd()();
    }
}
function getSortDuplicateSortableIdError(id) {
    return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
function getSortHeaderNotContainedWithinSortError() {
    return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
function getSortHeaderMissingIdError() {
    return Error(`MatSortHeader must be provided with a unique id.`);
}
function getSortInvalidDirectionError(direction) {
    return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}
var MAT_SORT_DEFAULT_OPTIONS = new InjectionToken("MAT_SORT_DEFAULT_OPTIONS");
var MatSort = class _MatSort {
    _defaultOptions;
    _initializedStream = new ReplaySubject(1);
    /** Collection of all registered sortables that this directive manages. */
    sortables = /* @__PURE__ */ new Map();
    /** Used to notify any child components listening to state changes. */
    _stateChanges = new Subject();
    /** The id of the most recently sorted MatSortable. */
    active;
    /**
     * The direction to set when an MatSortable is initially sorted.
     * May be overridden by the MatSortable's sort start.
     */
    start = "asc";
    /** The sort direction of the currently active MatSortable. */
    get direction() {
        return this._direction;
    }
    set direction(direction) {
        if (direction && direction !== "asc" && direction !== "desc" && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getSortInvalidDirectionError(direction);
        }
        this._direction = direction;
    }
    _direction = "";
    /**
     * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
     * May be overridden by the MatSortable's disable clear input.
     */
    disableClear;
    /** Whether the sortable is disabled. */
    disabled = false;
    /** Event emitted when the user changes either the active sort or sort direction. */
    sortChange = new EventEmitter();
    /** Emits when the paginator is initialized. */
    initialized = this._initializedStream;
    constructor(_defaultOptions) {
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Register function to be used by the contained MatSortables. Adds the MatSortable to the
     * collection of MatSortables.
     */
    register(sortable) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            if (!sortable.id) {
                throw getSortHeaderMissingIdError();
            }
            if (this.sortables.has(sortable.id)) {
                throw getSortDuplicateSortableIdError(sortable.id);
            }
        }
        this.sortables.set(sortable.id, sortable);
    }
    /**
     * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
     * collection of contained MatSortables.
     */
    deregister(sortable) {
        this.sortables.delete(sortable.id);
    }
    /** Sets the active sort id and determines the new sort direction. */
    sort(sortable) {
        if (this.active != sortable.id) {
            this.active = sortable.id;
            this.direction = sortable.start ? sortable.start : this.start;
        }
        else {
            this.direction = this.getNextSortDirection(sortable);
        }
        this.sortChange.emit({
            active: this.active,
            direction: this.direction
        });
    }
    /** Returns the next sort direction of the active sortable, checking for potential overrides. */
    getNextSortDirection(sortable) {
        if (!sortable) {
            return "";
        }
        const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
        let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
        let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
        if (nextDirectionIndex >= sortDirectionCycle.length) {
            nextDirectionIndex = 0;
        }
        return sortDirectionCycle[nextDirectionIndex];
    }
    ngOnInit() {
        this._initializedStream.next();
    }
    ngOnChanges() {
        this._stateChanges.next();
    }
    ngOnDestroy() {
        this._stateChanges.complete();
        this._initializedStream.complete();
    }
    static ɵfac = function MatSort_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatSort)(i0.ɵɵdirectiveInject(MAT_SORT_DEFAULT_OPTIONS, 8));
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatSort,
        selectors: [["", "matSort", ""]],
        hostAttrs: [1, "mat-sort"],
        inputs: {
            active: [0, "matSortActive", "active"],
            start: [0, "matSortStart", "start"],
            direction: [0, "matSortDirection", "direction"],
            disableClear: [2, "matSortDisableClear", "disableClear", booleanAttribute],
            disabled: [2, "matSortDisabled", "disabled", booleanAttribute]
        },
        outputs: {
            sortChange: "matSortChange"
        },
        exportAs: ["matSort"],
        features: [i0.ɵɵNgOnChangesFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSort, [{
            type: Directive,
            args: [{
                    selector: "[matSort]",
                    exportAs: "matSort",
                    host: {
                        "class": "mat-sort"
                    }
                }]
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_SORT_DEFAULT_OPTIONS]
                }]
        }], {
        active: [{
                type: Input,
                args: ["matSortActive"]
            }],
        start: [{
                type: Input,
                args: ["matSortStart"]
            }],
        direction: [{
                type: Input,
                args: ["matSortDirection"]
            }],
        disableClear: [{
                type: Input,
                args: [{
                        alias: "matSortDisableClear",
                        transform: booleanAttribute
                    }]
            }],
        disabled: [{
                type: Input,
                args: [{
                        alias: "matSortDisabled",
                        transform: booleanAttribute
                    }]
            }],
        sortChange: [{
                type: Output,
                args: ["matSortChange"]
            }]
    });
})();
function getSortDirectionCycle(start, disableClear) {
    let sortOrder = ["asc", "desc"];
    if (start == "desc") {
        sortOrder.reverse();
    }
    if (!disableClear) {
        sortOrder.push("");
    }
    return sortOrder;
}
var MatSortHeaderIntl = class _MatSortHeaderIntl {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    changes = new Subject();
    static ɵfac = function MatSortHeaderIntl_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatSortHeaderIntl)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _MatSortHeaderIntl,
        factory: _MatSortHeaderIntl.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSortHeaderIntl, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var MatSortHeader = class _MatSortHeader {
    _intl = inject(MatSortHeaderIntl);
    _sort = inject(MatSort, {
        optional: true
    });
    _columnDef = inject("MAT_SORT_HEADER_COLUMN_DEF", {
        optional: true
    });
    _changeDetectorRef = inject(ChangeDetectorRef);
    _focusMonitor = inject(FocusMonitor);
    _elementRef = inject(ElementRef);
    _ariaDescriber = inject(AriaDescriber, {
        optional: true
    });
    _renderChanges;
    _animationsDisabled = _animationsDisabled();
    /**
     * Indicates which state was just cleared from the sort header.
     * Will be reset on the next interaction. Used for coordinating animations.
     */
    _recentlyCleared = signal(null, ...(ngDevMode ? [{
            debugName: "_recentlyCleared"
        }] : []));
    /**
     * The element with role="button" inside this component's view. We need this
     * in order to apply a description with AriaDescriber.
     */
    _sortButton;
    /**
     * ID of this sort header. If used within the context of a CdkColumnDef, this will default to
     * the column's name.
     */
    id;
    /** Sets the position of the arrow that displays when sorted. */
    arrowPosition = "after";
    /** Overrides the sort start value of the containing MatSort for this MatSortable. */
    start;
    /** whether the sort header is disabled. */
    disabled = false;
    /**
     * Description applied to MatSortHeader's button element with aria-describedby. This text should
     * describe the action that will occur when the user clicks the sort header.
     */
    get sortActionDescription() {
        return this._sortActionDescription;
    }
    set sortActionDescription(value) {
        this._updateSortActionDescription(value);
    }
    // Default the action description to "Sort" because it's better than nothing.
    // Without a description, the button's label comes from the sort header text content,
    // which doesn't give any indication that it performs a sorting operation.
    _sortActionDescription = "Sort";
    /** Overrides the disable clear value of the containing MatSort for this MatSortable. */
    disableClear;
    constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const defaultOptions = inject(MAT_SORT_DEFAULT_OPTIONS, {
            optional: true
        });
        if (!this._sort && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getSortHeaderNotContainedWithinSortError();
        }
        if (defaultOptions?.arrowPosition) {
            this.arrowPosition = defaultOptions?.arrowPosition;
        }
    }
    ngOnInit() {
        if (!this.id && this._columnDef) {
            this.id = this._columnDef.name;
        }
        this._sort.register(this);
        this._renderChanges = merge(this._sort._stateChanges, this._sort.sortChange).subscribe(() => this._changeDetectorRef.markForCheck());
        this._sortButton = this._elementRef.nativeElement.querySelector(".mat-sort-header-container");
        this._updateSortActionDescription(this._sortActionDescription);
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true).subscribe(() => {
            Promise.resolve().then(() => this._recentlyCleared.set(null));
        });
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._sort.deregister(this);
        this._renderChanges?.unsubscribe();
        if (this._sortButton) {
            this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
        }
    }
    /** Triggers the sort on this sort header and removes the indicator hint. */
    _toggleOnInteraction() {
        if (!this._isDisabled()) {
            const wasSorted = this._isSorted();
            const prevDirection = this._sort.direction;
            this._sort.sort(this);
            this._recentlyCleared.set(wasSorted && !this._isSorted() ? prevDirection : null);
        }
    }
    _handleKeydown(event) {
        if (event.keyCode === SPACE || event.keyCode === ENTER) {
            event.preventDefault();
            this._toggleOnInteraction();
        }
    }
    /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
    _isSorted() {
        return this._sort.active == this.id && (this._sort.direction === "asc" || this._sort.direction === "desc");
    }
    _isDisabled() {
        return this._sort.disabled || this.disabled;
    }
    /**
     * Gets the aria-sort attribute that should be applied to this sort header. If this header
     * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
     * says that the aria-sort property should only be present on one header at a time, so removing
     * ensures this is true.
     */
    _getAriaSortAttribute() {
        if (!this._isSorted()) {
            return "none";
        }
        return this._sort.direction == "asc" ? "ascending" : "descending";
    }
    /** Whether the arrow inside the sort header should be rendered. */
    _renderArrow() {
        return !this._isDisabled() || this._isSorted();
    }
    _updateSortActionDescription(newDescription) {
        if (this._sortButton) {
            this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
            this._ariaDescriber?.describe(this._sortButton, newDescription);
        }
        this._sortActionDescription = newDescription;
    }
    static ɵfac = function MatSortHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatSortHeader)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatSortHeader,
        selectors: [["", "mat-sort-header", ""]],
        hostAttrs: [1, "mat-sort-header"],
        hostVars: 3,
        hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function MatSortHeader_click_HostBindingHandler() {
                    return ctx._toggleOnInteraction();
                })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
                    return ctx._handleKeydown($event);
                })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
                    return ctx._recentlyCleared.set(null);
                });
            }
            if (rf & 2) {
                i0.ɵɵattribute("aria-sort", ctx._getAriaSortAttribute());
                i0.ɵɵclassProp("mat-sort-header-disabled", ctx._isDisabled());
            }
        },
        inputs: {
            id: [0, "mat-sort-header", "id"],
            arrowPosition: "arrowPosition",
            start: "start",
            disabled: [2, "disabled", "disabled", booleanAttribute],
            sortActionDescription: "sortActionDescription",
            disableClear: [2, "disableClear", "disableClear", booleanAttribute]
        },
        exportAs: ["matSortHeader"],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 17,
        consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], ["viewBox", "0 -960 960 960", "focusable", "false", "aria-hidden", "true"], ["d", "M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],
        template: function MatSortHeader_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1);
                i0.ɵɵprojection(2);
                i0.ɵɵdomElementEnd();
                i0.ɵɵconditionalCreate(3, MatSortHeader_Conditional_3_Template, 3, 0, "div", 2);
                i0.ɵɵdomElementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before")("mat-sort-header-descending", ctx._sort.direction === "desc")("mat-sort-header-ascending", ctx._sort.direction === "asc")("mat-sort-header-recently-cleared-ascending", ctx._recentlyCleared() === "asc")("mat-sort-header-recently-cleared-descending", ctx._recentlyCleared() === "desc")("mat-sort-header-animations-disabled", ctx._animationsDisabled);
                i0.ɵɵattribute("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
                i0.ɵɵadvance(3);
                i0.ɵɵconditional(ctx._renderArrow() ? 3 : -1);
            }
        },
        styles: [".mat-sort-header{cursor:pointer}.mat-sort-header-disabled{cursor:default}.mat-sort-header-container{display:flex;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}@keyframes _mat-sort-header-recently-cleared-ascending{from{transform:translateY(0);opacity:1}to{transform:translateY(-25%);opacity:0}}@keyframes _mat-sort-header-recently-cleared-descending{from{transform:translateY(0) rotate(180deg);opacity:1}to{transform:translateY(25%) rotate(180deg);opacity:0}}.mat-sort-header-arrow{height:12px;width:12px;position:relative;transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1),opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;overflow:visible;color:var(--mat-sort-arrow-color, var(--mat-sys-on-surface))}.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow,.mat-sort-header.cdk-program-focused .mat-sort-header-arrow,.mat-sort-header:hover .mat-sort-header-arrow{opacity:.54}.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow{opacity:1}.mat-sort-header-descending .mat-sort-header-arrow{transform:rotate(180deg)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transform:translateY(-25%)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-animations-disabled .mat-sort-header-arrow{transition-duration:0ms;animation-duration:0ms}.mat-sort-header-arrow svg{width:24px;height:24px;fill:currentColor;position:absolute;top:50%;left:50%;margin:-12px 0 0 -12px;transform:translateZ(0)}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSortHeader, [{
            type: Component,
            args: [{
                    selector: "[mat-sort-header]",
                    exportAs: "matSortHeader",
                    host: {
                        "class": "mat-sort-header",
                        "(click)": "_toggleOnInteraction()",
                        "(keydown)": "_handleKeydown($event)",
                        "(mouseleave)": "_recentlyCleared.set(null)",
                        "[attr.aria-sort]": "_getAriaSortAttribute()",
                        "[class.mat-sort-header-disabled]": "_isDisabled()"
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `<!--
  We set the \`tabindex\` on an element inside the table header, rather than the header itself,
  because of a bug in NVDA where having a \`tabindex\` on a \`th\` breaks keyboard navigation in the
  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both
  be focusable, and have screen readers read out its \`aria-sort\` state. We prefer this approach
  over having a button with an \`aria-label\` inside the header, because the button's \`aria-label\`
  will be read out as the user is navigating the table's cell (see #13012).

  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid
-->
<div class="mat-sort-header-container mat-focus-indicator"
     [class.mat-sort-header-sorted]="_isSorted()"
     [class.mat-sort-header-position-before]="arrowPosition === 'before'"
     [class.mat-sort-header-descending]="this._sort.direction === 'desc'"
     [class.mat-sort-header-ascending]="this._sort.direction === 'asc'"
     [class.mat-sort-header-recently-cleared-ascending]="_recentlyCleared() === 'asc'"
     [class.mat-sort-header-recently-cleared-descending]="_recentlyCleared() === 'desc'"
     [class.mat-sort-header-animations-disabled]="_animationsDisabled"
     [attr.tabindex]="_isDisabled() ? null : 0"
     [attr.role]="_isDisabled() ? null : 'button'">

  <!--
    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large
    number of screenshot diff failures. It should be removed eventually. Note that the difference
    isn't visible with a shorter header, but once it breaks up into multiple lines, this element
    causes it to be center-aligned, whereas removing it will keep the text to the left.
  -->
  <div class="mat-sort-header-content">
    <ng-content></ng-content>
  </div>

  <!-- Disable animations while a current animation is running -->
  @if (_renderArrow()) {
    <div class="mat-sort-header-arrow">
      <svg viewBox="0 -960 960 960" focusable="false" aria-hidden="true">
        <path d="M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"/>
      </svg>
    </div>
  }
</div>
`,
                    styles: [".mat-sort-header{cursor:pointer}.mat-sort-header-disabled{cursor:default}.mat-sort-header-container{display:flex;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}@keyframes _mat-sort-header-recently-cleared-ascending{from{transform:translateY(0);opacity:1}to{transform:translateY(-25%);opacity:0}}@keyframes _mat-sort-header-recently-cleared-descending{from{transform:translateY(0) rotate(180deg);opacity:1}to{transform:translateY(25%) rotate(180deg);opacity:0}}.mat-sort-header-arrow{height:12px;width:12px;position:relative;transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1),opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;overflow:visible;color:var(--mat-sort-arrow-color, var(--mat-sys-on-surface))}.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow,.mat-sort-header.cdk-program-focused .mat-sort-header-arrow,.mat-sort-header:hover .mat-sort-header-arrow{opacity:.54}.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow{opacity:1}.mat-sort-header-descending .mat-sort-header-arrow{transform:rotate(180deg)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transform:translateY(-25%)}.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow{transition:none;animation:_mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards}.mat-sort-header-animations-disabled .mat-sort-header-arrow{transition-duration:0ms;animation-duration:0ms}.mat-sort-header-arrow svg{width:24px;height:24px;fill:currentColor;position:absolute;top:50%;left:50%;margin:-12px 0 0 -12px;transform:translateZ(0)}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}\n"]
                }]
        }], () => [], {
        id: [{
                type: Input,
                args: ["mat-sort-header"]
            }],
        arrowPosition: [{
                type: Input
            }],
        start: [{
                type: Input
            }],
        disabled: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        sortActionDescription: [{
                type: Input
            }],
        disableClear: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var MatSortModule = class _MatSortModule {
    static ɵfac = function MatSortModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatSortModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatSortModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatSortModule, [{
            type: NgModule,
            args: [{
                    imports: [MatSort, MatSortHeader],
                    exports: [MatSort, MatSortHeader, BidiModule]
                }]
        }], null, null);
})();
export { MAT_SORT_DEFAULT_OPTIONS, MatSort, MatSortHeader, MatSortHeaderIntl, MatSortModule };
