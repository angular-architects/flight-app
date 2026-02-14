import { MatTooltipModule } from "@nf-internal/chunk-DL2NN7RD";
import { MatSelect, MatSelectModule } from "@nf-internal/chunk-ASS6ZOPL";
import "@nf-internal/chunk-PRFT4OOY";
import { MatTooltip } from "@nf-internal/chunk-KTI4ILM5";
import "@nf-internal/chunk-5UAVXUH3";
import "@nf-internal/chunk-JH7AURNV";
import "@nf-internal/chunk-PMUPKZSP";
import { MatOption } from "@nf-internal/chunk-WY3OPLEO";
import "@nf-internal/chunk-ALI6I7TC";
import "@nf-internal/chunk-LTTGRATQ";
import { MatFormField } from "@nf-internal/chunk-PK4EDZ3R";
import { MatButtonModule } from "@nf-internal/chunk-PXX7JCO4";
import { MatIconButton } from "@nf-internal/chunk-RASXQWCJ";
import "@nf-internal/chunk-Y3NYZT6H";
import "@nf-internal/chunk-MAEJBUHM";
import "@nf-internal/chunk-YH4D56O7";
import "@nf-internal/chunk-LDHZVRH4";
import "@nf-internal/chunk-C4FVYSZR";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/paginator.mjs
import * as i0 from "@angular/core";
import { Injectable, InjectionToken, inject, ChangeDetectorRef, numberAttribute, EventEmitter, booleanAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from "@angular/core";
import { _IdGenerator } from "@angular/cdk/a11y";
import { Subject, ReplaySubject } from "rxjs";
import "@angular/cdk/bidi";
import "@angular/cdk/coercion";
import "@angular/cdk/platform";
import "@angular/common";
import "rxjs/operators";
import "@angular/cdk/observers/private";
import "@angular/cdk/layout";
import "@angular/cdk/overlay";
import "@angular/cdk/scrolling";
import "@angular/cdk/collections";
import "@angular/cdk/keycodes";
import "@angular/forms";
import "@angular/cdk/private";
import "@angular/cdk/observers";
import "@angular/cdk/portal";
function MatPaginator_Conditional_2_Conditional_3_For_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 17);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const pageSizeOption_r3 = ctx.$implicit;
        i0.ɵɵproperty("value", pageSizeOption_r3);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", pageSizeOption_r3, " ");
    }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-form-field", 14)(1, "mat-select", 16, 0);
        i0.ɵɵlistener("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
            i0.ɵɵrestoreView(_r1);
            const ctx_r1 = i0.ɵɵnextContext(2);
            return i0.ɵɵresetView(ctx_r1._changePageSize($event.value));
        });
        i0.ɵɵrepeaterCreate(3, MatPaginator_Conditional_2_Conditional_3_For_4_Template, 2, 2, "mat-option", 17, i0.ɵɵrepeaterTrackByIdentity);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 18);
        i0.ɵɵlistener("click", function MatPaginator_Conditional_2_Conditional_3_Template_div_click_5_listener() {
            i0.ɵɵrestoreView(_r1);
            const selectRef_r4 = i0.ɵɵreference(2);
            return i0.ɵɵresetView(selectRef_r4.open());
        });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("appearance", ctx_r1._formFieldAppearance)("color", ctx_r1.color);
        i0.ɵɵadvance();
        i0.ɵɵproperty("value", ctx_r1.pageSize)("disabled", ctx_r1.disabled);
        i0.ɵɵariaProperty("aria-labelledby", ctx_r1._pageSizeLabelId);
        i0.ɵɵproperty("panelClass", ctx_r1.selectConfig.panelClass || "")("disableOptionCentering", ctx_r1.selectConfig.disableOptionCentering);
        i0.ɵɵadvance(2);
        i0.ɵɵrepeater(ctx_r1._displayedPageSizeOptions);
    }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 15);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate(ctx_r1.pageSize);
    }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 3)(1, "div", 13);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵconditionalCreate(3, MatPaginator_Conditional_2_Conditional_3_Template, 6, 7, "mat-form-field", 14);
        i0.ɵɵconditionalCreate(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 15);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance();
        i0.ɵɵattribute("id", ctx_r1._pageSizeLabelId);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx_r1._intl.itemsPerPageLabel, " ");
        i0.ɵɵadvance();
        i0.ɵɵconditional(ctx_r1._displayedPageSizeOptions.length > 1 ? 3 : -1);
        i0.ɵɵadvance();
        i0.ɵɵconditional(ctx_r1._displayedPageSizeOptions.length <= 1 ? 4 : -1);
    }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 19);
        i0.ɵɵlistener("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r5);
            const ctx_r1 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r1._buttonClicked(0, ctx_r1._previousButtonsDisabled()));
        });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 8);
        i0.ɵɵelement(2, "path", 20);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("disabled", ctx_r1._previousButtonsDisabled())("tabindex", ctx_r1._previousButtonsDisabled() ? -1 : null);
        i0.ɵɵattribute("aria-label", ctx_r1._intl.firstPageLabel);
    }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 21);
        i0.ɵɵlistener("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
            i0.ɵɵrestoreView(_r6);
            const ctx_r1 = i0.ɵɵnextContext();
            return i0.ɵɵresetView(ctx_r1._buttonClicked(ctx_r1.getNumberOfPages() - 1, ctx_r1._nextButtonsDisabled()));
        });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 8);
        i0.ɵɵelement(2, "path", 22);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("matTooltip", ctx_r1._intl.lastPageLabel)("matTooltipDisabled", ctx_r1._nextButtonsDisabled())("disabled", ctx_r1._nextButtonsDisabled())("tabindex", ctx_r1._nextButtonsDisabled() ? -1 : null);
        i0.ɵɵattribute("aria-label", ctx_r1._intl.lastPageLabel);
    }
}
var MatPaginatorIntl = class _MatPaginatorIntl {
    /**
     * Stream to emit from when labels are changed. Use this to notify components when the labels have
     * changed after initialization.
     */
    changes = new Subject();
    /** A label for the page size selector. */
    itemsPerPageLabel = "Items per page:";
    /** A label for the button that increments the current page. */
    nextPageLabel = "Next page";
    /** A label for the button that decrements the current page. */
    previousPageLabel = "Previous page";
    /** A label for the button that moves to the first page. */
    firstPageLabel = "First page";
    /** A label for the button that moves to the last page. */
    lastPageLabel = "Last page";
    /** A label for the range of items within the current page and the length of the whole list. */
    getRangeLabel = (page, pageSize, length) => {
        if (length == 0 || pageSize == 0) {
            return `0 of ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} \u2013 ${endIndex} of ${length}`;
    };
    static ɵfac = function MatPaginatorIntl_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatPaginatorIntl)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _MatPaginatorIntl,
        factory: _MatPaginatorIntl.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPaginatorIntl, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var DEFAULT_PAGE_SIZE = 50;
var PageEvent = class {
    /** The current page index. */
    pageIndex;
    /**
     * Index of the page that was selected previously.
     * @breaking-change 8.0.0 To be made into a required property.
     */
    previousPageIndex;
    /** The current page size. */
    pageSize;
    /** The current total number of items being paged. */
    length;
};
var MAT_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS");
var MatPaginator = class _MatPaginator {
    _intl = inject(MatPaginatorIntl);
    _changeDetectorRef = inject(ChangeDetectorRef);
    /** If set, styles the "page size" form field with the designated style. */
    _formFieldAppearance;
    /** ID for the DOM node containing the paginator's items per page label. */
    _pageSizeLabelId = inject(_IdGenerator).getId("mat-paginator-page-size-label-");
    _intlChanges;
    _isInitialized = false;
    _initializedStream = new ReplaySubject(1);
    /**
     * Theme color of the underlying form controls. This API is supported in M2
     * themes only,it has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/paginator/styling.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
     */
    color;
    /** The zero-based page index of the displayed list of items. Defaulted to 0. */
    get pageIndex() {
        return this._pageIndex;
    }
    set pageIndex(value) {
        this._pageIndex = Math.max(value || 0, 0);
        this._changeDetectorRef.markForCheck();
    }
    _pageIndex = 0;
    /** The length of the total number of items that are being paginated. Defaulted to 0. */
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value || 0;
        this._changeDetectorRef.markForCheck();
    }
    _length = 0;
    /** Number of items to display on a page. By default set to 50. */
    get pageSize() {
        return this._pageSize;
    }
    set pageSize(value) {
        this._pageSize = Math.max(value || 0, 0);
        this._updateDisplayedPageSizeOptions();
    }
    _pageSize;
    /** The set of provided page size options to display to the user. */
    get pageSizeOptions() {
        return this._pageSizeOptions;
    }
    set pageSizeOptions(value) {
        this._pageSizeOptions = (value || []).map(p => numberAttribute(p, 0));
        this._updateDisplayedPageSizeOptions();
    }
    _pageSizeOptions = [];
    /** Whether to hide the page size selection UI from the user. */
    hidePageSize = false;
    /** Whether to show the first/last buttons UI to the user. */
    showFirstLastButtons = false;
    /** Used to configure the underlying `MatSelect` inside the paginator. */
    selectConfig = {};
    /** Whether the paginator is disabled. */
    disabled = false;
    /** Event emitted when the paginator changes the page size or page index. */
    page = new EventEmitter();
    /** Displayed set of page size options. Will be sorted and include current page size. */
    _displayedPageSizeOptions;
    /** Emits when the paginator is initialized. */
    initialized = this._initializedStream;
    constructor() {
        const _intl = this._intl;
        const defaults = inject(MAT_PAGINATOR_DEFAULT_OPTIONS, {
            optional: true
        });
        this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
        if (defaults) {
            const { pageSize, pageSizeOptions, hidePageSize, showFirstLastButtons } = defaults;
            if (pageSize != null) {
                this._pageSize = pageSize;
            }
            if (pageSizeOptions != null) {
                this._pageSizeOptions = pageSizeOptions;
            }
            if (hidePageSize != null) {
                this.hidePageSize = hidePageSize;
            }
            if (showFirstLastButtons != null) {
                this.showFirstLastButtons = showFirstLastButtons;
            }
        }
        this._formFieldAppearance = defaults?.formFieldAppearance || "outline";
    }
    ngOnInit() {
        this._isInitialized = true;
        this._updateDisplayedPageSizeOptions();
        this._initializedStream.next();
    }
    ngOnDestroy() {
        this._initializedStream.complete();
        this._intlChanges.unsubscribe();
    }
    /** Advances to the next page if it exists. */
    nextPage() {
        if (this.hasNextPage()) {
            this._navigate(this.pageIndex + 1);
        }
    }
    /** Move back to the previous page if it exists. */
    previousPage() {
        if (this.hasPreviousPage()) {
            this._navigate(this.pageIndex - 1);
        }
    }
    /** Move to the first page if not already there. */
    firstPage() {
        if (this.hasPreviousPage()) {
            this._navigate(0);
        }
    }
    /** Move to the last page if not already there. */
    lastPage() {
        if (this.hasNextPage()) {
            this._navigate(this.getNumberOfPages() - 1);
        }
    }
    /** Whether there is a previous page. */
    hasPreviousPage() {
        return this.pageIndex >= 1 && this.pageSize != 0;
    }
    /** Whether there is a next page. */
    hasNextPage() {
        const maxPageIndex = this.getNumberOfPages() - 1;
        return this.pageIndex < maxPageIndex && this.pageSize != 0;
    }
    /** Calculate the number of pages */
    getNumberOfPages() {
        if (!this.pageSize) {
            return 0;
        }
        return Math.ceil(this.length / this.pageSize);
    }
    /**
     * Changes the page size so that the first item displayed on the page will still be
     * displayed using the new page size.
     *
     * For example, if the page size is 10 and on the second page (items indexed 10-19) then
     * switching so that the page size is 5 will set the third page as the current page so
     * that the 10th item will still be displayed.
     */
    _changePageSize(pageSize) {
        const startIndex = this.pageIndex * this.pageSize;
        const previousPageIndex = this.pageIndex;
        this.pageIndex = Math.floor(startIndex / pageSize) || 0;
        this.pageSize = pageSize;
        this._emitPageEvent(previousPageIndex);
    }
    /** Checks whether the buttons for going forwards should be disabled. */
    _nextButtonsDisabled() {
        return this.disabled || !this.hasNextPage();
    }
    /** Checks whether the buttons for going backwards should be disabled. */
    _previousButtonsDisabled() {
        return this.disabled || !this.hasPreviousPage();
    }
    /**
     * Updates the list of page size options to display to the user. Includes making sure that
     * the page size is an option and that the list is sorted.
     */
    _updateDisplayedPageSizeOptions() {
        if (!this._isInitialized) {
            return;
        }
        if (!this.pageSize) {
            this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
        }
        this._displayedPageSizeOptions = this.pageSizeOptions.slice();
        if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
            this._displayedPageSizeOptions.push(this.pageSize);
        }
        this._displayedPageSizeOptions.sort((a, b) => a - b);
        this._changeDetectorRef.markForCheck();
    }
    /** Emits an event notifying that a change of the paginator's properties has been triggered. */
    _emitPageEvent(previousPageIndex) {
        this.page.emit({
            previousPageIndex,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            length: this.length
        });
    }
    /** Navigates to a specific page index. */
    _navigate(index) {
        const previousIndex = this.pageIndex;
        if (index !== previousIndex) {
            this.pageIndex = index;
            this._emitPageEvent(previousIndex);
        }
    }
    /**
     * Callback invoked when one of the navigation buttons is called.
     * @param targetIndex Index to which the paginator should navigate.
     * @param isDisabled Whether the button is disabled.
     */
    _buttonClicked(targetIndex, isDisabled) {
        if (!isDisabled) {
            this._navigate(targetIndex);
        }
    }
    static ɵfac = function MatPaginator_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatPaginator)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatPaginator,
        selectors: [["mat-paginator"]],
        hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
        inputs: {
            color: "color",
            pageIndex: [2, "pageIndex", "pageIndex", numberAttribute],
            length: [2, "length", "length", numberAttribute],
            pageSize: [2, "pageSize", "pageSize", numberAttribute],
            pageSizeOptions: "pageSizeOptions",
            hidePageSize: [2, "hidePageSize", "hidePageSize", booleanAttribute],
            showFirstLastButtons: [2, "showFirstLastButtons", "showFirstLastButtons", booleanAttribute],
            selectConfig: "selectConfig",
            disabled: [2, "disabled", "disabled", booleanAttribute]
        },
        outputs: {
            page: "page"
        },
        exportAs: ["matPaginator"],
        decls: 14,
        vars: 14,
        consts: [["selectRef", ""], [1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], [1, "mat-mdc-paginator-touch-target", 3, "click"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["matIconButton", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "disabled", "tabindex"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
        template: function MatPaginator_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
                i0.ɵɵconditionalCreate(2, MatPaginator_Conditional_2_Template, 5, 4, "div", 3);
                i0.ɵɵelementStart(3, "div", 4)(4, "div", 5);
                i0.ɵɵtext(5);
                i0.ɵɵelementEnd();
                i0.ɵɵconditionalCreate(6, MatPaginator_Conditional_6_Template, 3, 5, "button", 6);
                i0.ɵɵelementStart(7, "button", 7);
                i0.ɵɵlistener("click", function MatPaginator_Template_button_click_7_listener() {
                    return ctx._buttonClicked(ctx.pageIndex - 1, ctx._previousButtonsDisabled());
                });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(8, "svg", 8);
                i0.ɵɵelement(9, "path", 9);
                i0.ɵɵelementEnd()();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(10, "button", 10);
                i0.ɵɵlistener("click", function MatPaginator_Template_button_click_10_listener() {
                    return ctx._buttonClicked(ctx.pageIndex + 1, ctx._nextButtonsDisabled());
                });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(11, "svg", 8);
                i0.ɵɵelement(12, "path", 11);
                i0.ɵɵelementEnd()();
                i0.ɵɵconditionalCreate(13, MatPaginator_Conditional_13_Template, 3, 5, "button", 12);
                i0.ɵɵelementEnd()()();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵconditional(!ctx.hidePageSize ? 2 : -1);
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate1(" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
                i0.ɵɵadvance();
                i0.ɵɵconditional(ctx.showFirstLastButtons ? 6 : -1);
                i0.ɵɵadvance();
                i0.ɵɵproperty("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("disabled", ctx._previousButtonsDisabled())("tabindex", ctx._previousButtonsDisabled() ? -1 : null);
                i0.ɵɵattribute("aria-label", ctx._intl.previousPageLabel);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("disabled", ctx._nextButtonsDisabled())("tabindex", ctx._nextButtonsDisabled() ? -1 : null);
                i0.ɵɵattribute("aria-label", ctx._intl.nextPageLabel);
                i0.ɵɵadvance(3);
                i0.ɵɵconditional(ctx.showFirstLastButtons ? 13 : -1);
            }
        },
        dependencies: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
        styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:var(--mat-paginator-page-size-select-width, 84px)}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:var(--mat-paginator-page-size-select-width, 84px);height:var(--mat-paginator-page-size-select-touch-target-height, 48px);background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPaginator, [{
            type: Component,
            args: [{
                    selector: "mat-paginator",
                    exportAs: "matPaginator",
                    host: {
                        "class": "mat-mdc-paginator",
                        "role": "group"
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
                    template: '<div class="mat-mdc-paginator-outer-container">\n  <div class="mat-mdc-paginator-container">\n    @if (!hidePageSize) {\n      <div class="mat-mdc-paginator-page-size">\n        <div class="mat-mdc-paginator-page-size-label" [attr.id]="_pageSizeLabelId">\n          {{_intl.itemsPerPageLabel}}\n        </div>\n\n        @if (_displayedPageSizeOptions.length > 1) {\n          <mat-form-field\n            [appearance]="_formFieldAppearance!"\n            [color]="color"\n            class="mat-mdc-paginator-page-size-select">\n            <mat-select\n              #selectRef\n              [value]="pageSize"\n              [disabled]="disabled"\n              [aria-labelledby]="_pageSizeLabelId"\n              [panelClass]="selectConfig.panelClass || \'\'"\n              [disableOptionCentering]="selectConfig.disableOptionCentering"\n              (selectionChange)="_changePageSize($event.value)"\n              hideSingleSelectionIndicator>\n              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {\n                <mat-option [value]="pageSizeOption">\n                  {{pageSizeOption}}\n                </mat-option>\n              }\n            </mat-select>\n          <div class="mat-mdc-paginator-touch-target" (click)="selectRef.open()"></div>\n          </mat-form-field>\n        }\n\n        @if (_displayedPageSizeOptions.length <= 1) {\n          <div class="mat-mdc-paginator-page-size-value">{{pageSize}}</div>\n        }\n      </div>\n    }\n\n    <div class="mat-mdc-paginator-range-actions">\n      <div class="mat-mdc-paginator-range-label" aria-live="polite">\n        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}\n      </div>\n\n      <!--\n      The buttons use `disabledInteractive` so that they can retain focus if they become disabled,\n      otherwise focus is moved to the document body. However, users should not be able to navigate\n      into these buttons, so `tabindex` is set to -1 when disabled.\n      -->\n\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-first"\n                (click)="_buttonClicked(0, _previousButtonsDisabled())"\n                [attr.aria-label]="_intl.firstPageLabel"\n                [matTooltip]="_intl.firstPageLabel"\n                [matTooltipDisabled]="_previousButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_previousButtonsDisabled()"\n                [tabindex]="_previousButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>\n          </svg>\n        </button>\n      }\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-previous"\n              (click)="_buttonClicked(pageIndex - 1, _previousButtonsDisabled())"\n              [attr.aria-label]="_intl.previousPageLabel"\n              [matTooltip]="_intl.previousPageLabel"\n              [matTooltipDisabled]="_previousButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_previousButtonsDisabled()"\n              [tabindex]="_previousButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>\n        </svg>\n      </button>\n      <button matIconButton type="button"\n              class="mat-mdc-paginator-navigation-next"\n              (click)="_buttonClicked(pageIndex + 1, _nextButtonsDisabled())"\n              [attr.aria-label]="_intl.nextPageLabel"\n              [matTooltip]="_intl.nextPageLabel"\n              [matTooltipDisabled]="_nextButtonsDisabled()"\n              matTooltipPosition="above"\n              [disabled]="_nextButtonsDisabled()"\n              [tabindex]="_nextButtonsDisabled() ? -1 : null"\n              disabledInteractive>\n        <svg class="mat-mdc-paginator-icon"\n             viewBox="0 0 24 24"\n             focusable="false"\n             aria-hidden="true">\n          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>\n        </svg>\n      </button>\n      @if (showFirstLastButtons) {\n        <button matIconButton type="button"\n                class="mat-mdc-paginator-navigation-last"\n                (click)="_buttonClicked(getNumberOfPages() - 1, _nextButtonsDisabled())"\n                [attr.aria-label]="_intl.lastPageLabel"\n                [matTooltip]="_intl.lastPageLabel"\n                [matTooltipDisabled]="_nextButtonsDisabled()"\n                matTooltipPosition="above"\n                [disabled]="_nextButtonsDisabled()"\n                [tabindex]="_nextButtonsDisabled() ? -1 : null"\n                disabledInteractive>\n          <svg class="mat-mdc-paginator-icon"\n              viewBox="0 0 24 24"\n              focusable="false"\n              aria-hidden="true">\n            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>\n          </svg>\n        </button>\n      }\n    </div>\n  </div>\n</div>\n',
                    styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:var(--mat-paginator-page-size-select-width, 84px)}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled]{color:GrayText}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:var(--mat-paginator-page-size-select-width, 84px);height:var(--mat-paginator-page-size-select-touch-target-height, 48px);background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}\n"]
                }]
        }], () => [], {
        color: [{
                type: Input
            }],
        pageIndex: [{
                type: Input,
                args: [{
                        transform: numberAttribute
                    }]
            }],
        length: [{
                type: Input,
                args: [{
                        transform: numberAttribute
                    }]
            }],
        pageSize: [{
                type: Input,
                args: [{
                        transform: numberAttribute
                    }]
            }],
        pageSizeOptions: [{
                type: Input
            }],
        hidePageSize: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        showFirstLastButtons: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        selectConfig: [{
                type: Input
            }],
        disabled: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        page: [{
                type: Output
            }]
    });
})();
var MatPaginatorModule = class _MatPaginatorModule {
    static ɵfac = function MatPaginatorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatPaginatorModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatPaginatorModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatPaginatorModule, [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
                    exports: [MatPaginator]
                }]
        }], null, null);
})();
export { MAT_PAGINATOR_DEFAULT_OPTIONS, MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent };
