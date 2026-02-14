import { _DisposeViewRepeaterStrategy } from "@nf-internal/chunk-G744C5AJ";
import { ScrollingModule, ViewportRuler } from "@nf-internal/chunk-P2TUBJGR";
import "@nf-internal/chunk-R44VMRSN";
import { Platform } from "@nf-internal/chunk-26DDZNO4";
import "@nf-internal/chunk-XABR7MXZ";
import { Directionality } from "@nf-internal/chunk-GSHCXC35";
import "@nf-internal/chunk-XODDVZAQ";
import { _RecycleViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY, _ViewRepeaterOperation } from "@nf-internal/chunk-AOJKIHRQ";
import { DataSource, isDataSource } from "@nf-internal/chunk-AUAW3OPY";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/table.mjs
import * as i0 from "@angular/core";
import { InjectionToken, inject, TemplateRef, Directive, booleanAttribute, Input, ContentChild, ElementRef, IterableDiffers, ViewContainerRef, Component, ChangeDetectionStrategy, ViewEncapsulation, afterNextRender, ChangeDetectorRef, DOCUMENT, EventEmitter, Injector, HostAttributeToken, Output, ContentChildren, ViewChild, NgModule } from "@angular/core";
import { Subject, BehaviorSubject, isObservable, of } from "rxjs";
import { takeUntil } from "rxjs/operators";
import "@angular/common";
var _c0 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c1 = ["caption", "colgroup, col", "*"];
function CdkTable_Conditional_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵprojection(0, 2);
    }
}
function CdkTable_Conditional_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "thead", 0);
        i0.ɵɵelementContainer(1, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "tbody", 0);
        i0.ɵɵelementContainer(3, 2)(4, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "tfoot", 0);
        i0.ɵɵelementContainer(6, 4);
        i0.ɵɵelementEnd();
    }
}
function CdkTable_Conditional_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0, 1)(1, 2)(2, 3)(3, 4);
    }
}
function CdkTextColumn_th_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 3);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵstyleProp("text-align", ctx_r0.justify);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx_r0.headerText, " ");
    }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 4);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const data_r2 = ctx.$implicit;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵstyleProp("text-align", ctx_r0.justify);
        i0.ɵɵadvance();
        i0.ɵɵtextInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
    }
}
var CDK_TABLE = new InjectionToken("CDK_TABLE");
var TEXT_COLUMN_OPTIONS = new InjectionToken("text-column-options");
var CdkCellDef = class _CdkCellDef {
    /** @docs-private */
    template = inject(TemplateRef);
    constructor() { }
    static ɵfac = function CdkCellDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkCellDef)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkCellDef,
        selectors: [["", "cdkCellDef", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkCellDef, [{
            type: Directive,
            args: [{
                    selector: "[cdkCellDef]"
                }]
        }], () => [], null);
})();
var CdkHeaderCellDef = class _CdkHeaderCellDef {
    /** @docs-private */
    template = inject(TemplateRef);
    constructor() { }
    static ɵfac = function CdkHeaderCellDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkHeaderCellDef)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkHeaderCellDef,
        selectors: [["", "cdkHeaderCellDef", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkHeaderCellDef, [{
            type: Directive,
            args: [{
                    selector: "[cdkHeaderCellDef]"
                }]
        }], () => [], null);
})();
var CdkFooterCellDef = class _CdkFooterCellDef {
    /** @docs-private */
    template = inject(TemplateRef);
    constructor() { }
    static ɵfac = function CdkFooterCellDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkFooterCellDef)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkFooterCellDef,
        selectors: [["", "cdkFooterCellDef", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkFooterCellDef, [{
            type: Directive,
            args: [{
                    selector: "[cdkFooterCellDef]"
                }]
        }], () => [], null);
})();
var CdkColumnDef = class _CdkColumnDef {
    _table = inject(CDK_TABLE, {
        optional: true
    });
    _hasStickyChanged = false;
    /** Unique name for this column. */
    get name() {
        return this._name;
    }
    set name(name) {
        this._setNameInput(name);
    }
    _name;
    /** Whether the cell is sticky. */
    get sticky() {
        return this._sticky;
    }
    set sticky(value) {
        if (value !== this._sticky) {
            this._sticky = value;
            this._hasStickyChanged = true;
        }
    }
    _sticky = false;
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     */
    get stickyEnd() {
        return this._stickyEnd;
    }
    set stickyEnd(value) {
        if (value !== this._stickyEnd) {
            this._stickyEnd = value;
            this._hasStickyChanged = true;
        }
    }
    _stickyEnd = false;
    /** @docs-private */
    cell;
    /** @docs-private */
    headerCell;
    /** @docs-private */
    footerCell;
    /**
     * Transformed version of the column name that can be used as part of a CSS classname. Excludes
     * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
     * do not match are replaced by the '-' character.
     */
    cssClassFriendlyName;
    /**
     * Class name for cells in this column.
     * @docs-private
     */
    _columnCssClassName;
    constructor() { }
    /** Whether the sticky state has changed. */
    hasStickyChanged() {
        const hasStickyChanged = this._hasStickyChanged;
        this.resetStickyChanged();
        return hasStickyChanged;
    }
    /** Resets the sticky changed state. */
    resetStickyChanged() {
        this._hasStickyChanged = false;
    }
    /**
     * Overridable method that sets the css classes that will be added to every cell in this
     * column.
     * In the future, columnCssClassName will change from type string[] to string and this
     * will set a single string value.
     * @docs-private
     */
    _updateColumnCssClassName() {
        this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setNameInput(value) {
        if (value) {
            this._name = value;
            this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, "-");
            this._updateColumnCssClassName();
        }
    }
    static ɵfac = function CdkColumnDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkColumnDef)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkColumnDef,
        selectors: [["", "cdkColumnDef", ""]],
        contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CdkCellDef, 5);
                i0.ɵɵcontentQuery(dirIndex, CdkHeaderCellDef, 5);
                i0.ɵɵcontentQuery(dirIndex, CdkFooterCellDef, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cell = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerCell = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.footerCell = _t.first);
            }
        },
        inputs: {
            name: [0, "cdkColumnDef", "name"],
            sticky: [2, "sticky", "sticky", booleanAttribute],
            stickyEnd: [2, "stickyEnd", "stickyEnd", booleanAttribute]
        },
        features: [i0.ɵɵProvidersFeature([{
                    provide: "MAT_SORT_HEADER_COLUMN_DEF",
                    useExisting: _CdkColumnDef
                }])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkColumnDef, [{
            type: Directive,
            args: [{
                    selector: "[cdkColumnDef]",
                    providers: [{
                            provide: "MAT_SORT_HEADER_COLUMN_DEF",
                            useExisting: CdkColumnDef
                        }]
                }]
        }], () => [], {
        name: [{
                type: Input,
                args: ["cdkColumnDef"]
            }],
        sticky: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        stickyEnd: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        cell: [{
                type: ContentChild,
                args: [CdkCellDef]
            }],
        headerCell: [{
                type: ContentChild,
                args: [CdkHeaderCellDef]
            }],
        footerCell: [{
                type: ContentChild,
                args: [CdkFooterCellDef]
            }]
    });
})();
var BaseCdkCell = class {
    constructor(columnDef, elementRef) {
        elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
    }
};
var CdkHeaderCell = class _CdkHeaderCell extends BaseCdkCell {
    constructor() {
        super(inject(CdkColumnDef), inject(ElementRef));
    }
    static ɵfac = function CdkHeaderCell_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkHeaderCell)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkHeaderCell,
        selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkHeaderCell, [{
            type: Directive,
            args: [{
                    selector: "cdk-header-cell, th[cdk-header-cell]",
                    host: {
                        "class": "cdk-header-cell",
                        "role": "columnheader"
                    }
                }]
        }], () => [], null);
})();
var CdkFooterCell = class _CdkFooterCell extends BaseCdkCell {
    constructor() {
        const columnDef = inject(CdkColumnDef);
        const elementRef = inject(ElementRef);
        super(columnDef, elementRef);
        const role = columnDef._table?._getCellRole();
        if (role) {
            elementRef.nativeElement.setAttribute("role", role);
        }
    }
    static ɵfac = function CdkFooterCell_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkFooterCell)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkFooterCell,
        selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
        hostAttrs: [1, "cdk-footer-cell"],
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkFooterCell, [{
            type: Directive,
            args: [{
                    selector: "cdk-footer-cell, td[cdk-footer-cell]",
                    host: {
                        "class": "cdk-footer-cell"
                    }
                }]
        }], () => [], null);
})();
var CdkCell = class _CdkCell extends BaseCdkCell {
    constructor() {
        const columnDef = inject(CdkColumnDef);
        const elementRef = inject(ElementRef);
        super(columnDef, elementRef);
        const role = columnDef._table?._getCellRole();
        if (role) {
            elementRef.nativeElement.setAttribute("role", role);
        }
    }
    static ɵfac = function CdkCell_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkCell)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkCell,
        selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
        hostAttrs: [1, "cdk-cell"],
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkCell, [{
            type: Directive,
            args: [{
                    selector: "cdk-cell, td[cdk-cell]",
                    host: {
                        "class": "cdk-cell"
                    }
                }]
        }], () => [], null);
})();
var CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var BaseRowDef = class _BaseRowDef {
    template = inject(TemplateRef);
    _differs = inject(IterableDiffers);
    /** The columns to be displayed on this row. */
    columns;
    /** Differ used to check if any changes were made to the columns. */
    _columnsDiffer;
    constructor() { }
    ngOnChanges(changes) {
        if (!this._columnsDiffer) {
            const columns = changes["columns"] && changes["columns"].currentValue || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    getColumnsDiff() {
        return this._columnsDiffer.diff(this.columns);
    }
    /** Gets this row def's relevant cell template from the provided column def. */
    extractCellTemplate(column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    }
    static ɵfac = function BaseRowDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BaseRowDef)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _BaseRowDef,
        features: [i0.ɵɵNgOnChangesFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseRowDef, [{
            type: Directive
        }], () => [], null);
})();
var CdkHeaderRowDef = class _CdkHeaderRowDef extends BaseRowDef {
    _table = inject(CDK_TABLE, {
        optional: true
    });
    _hasStickyChanged = false;
    /** Whether the row is sticky. */
    get sticky() {
        return this._sticky;
    }
    set sticky(value) {
        if (value !== this._sticky) {
            this._sticky = value;
            this._hasStickyChanged = true;
        }
    }
    _sticky = false;
    constructor() {
        super(inject(TemplateRef), inject(IterableDiffers));
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    /** Whether the sticky state has changed. */
    hasStickyChanged() {
        const hasStickyChanged = this._hasStickyChanged;
        this.resetStickyChanged();
        return hasStickyChanged;
    }
    /** Resets the sticky changed state. */
    resetStickyChanged() {
        this._hasStickyChanged = false;
    }
    static ɵfac = function CdkHeaderRowDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkHeaderRowDef)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkHeaderRowDef,
        selectors: [["", "cdkHeaderRowDef", ""]],
        inputs: {
            columns: [0, "cdkHeaderRowDef", "columns"],
            sticky: [2, "cdkHeaderRowDefSticky", "sticky", booleanAttribute]
        },
        features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkHeaderRowDef, [{
            type: Directive,
            args: [{
                    selector: "[cdkHeaderRowDef]",
                    inputs: [{
                            name: "columns",
                            alias: "cdkHeaderRowDef"
                        }]
                }]
        }], () => [], {
        sticky: [{
                type: Input,
                args: [{
                        alias: "cdkHeaderRowDefSticky",
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var CdkFooterRowDef = class _CdkFooterRowDef extends BaseRowDef {
    _table = inject(CDK_TABLE, {
        optional: true
    });
    _hasStickyChanged = false;
    /** Whether the row is sticky. */
    get sticky() {
        return this._sticky;
    }
    set sticky(value) {
        if (value !== this._sticky) {
            this._sticky = value;
            this._hasStickyChanged = true;
        }
    }
    _sticky = false;
    constructor() {
        super(inject(TemplateRef), inject(IterableDiffers));
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    /** Whether the sticky state has changed. */
    hasStickyChanged() {
        const hasStickyChanged = this._hasStickyChanged;
        this.resetStickyChanged();
        return hasStickyChanged;
    }
    /** Resets the sticky changed state. */
    resetStickyChanged() {
        this._hasStickyChanged = false;
    }
    static ɵfac = function CdkFooterRowDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkFooterRowDef)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkFooterRowDef,
        selectors: [["", "cdkFooterRowDef", ""]],
        inputs: {
            columns: [0, "cdkFooterRowDef", "columns"],
            sticky: [2, "cdkFooterRowDefSticky", "sticky", booleanAttribute]
        },
        features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkFooterRowDef, [{
            type: Directive,
            args: [{
                    selector: "[cdkFooterRowDef]",
                    inputs: [{
                            name: "columns",
                            alias: "cdkFooterRowDef"
                        }]
                }]
        }], () => [], {
        sticky: [{
                type: Input,
                args: [{
                        alias: "cdkFooterRowDefSticky",
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var CdkRowDef = class _CdkRowDef extends BaseRowDef {
    _table = inject(CDK_TABLE, {
        optional: true
    });
    /**
     * Function that should return true if this row template should be used for the provided index
     * and row data. If left undefined, this row will be considered the default row template to use
     * when no other when functions return true for the data.
     * For every row, there must be at least one when function that passes or an undefined to default.
     */
    when;
    constructor() {
        super(inject(TemplateRef), inject(IterableDiffers));
    }
    static ɵfac = function CdkRowDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkRowDef)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkRowDef,
        selectors: [["", "cdkRowDef", ""]],
        inputs: {
            columns: [0, "cdkRowDefColumns", "columns"],
            when: [0, "cdkRowDefWhen", "when"]
        },
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkRowDef, [{
            type: Directive,
            args: [{
                    selector: "[cdkRowDef]",
                    inputs: [{
                            name: "columns",
                            alias: "cdkRowDefColumns"
                        }, {
                            name: "when",
                            alias: "cdkRowDefWhen"
                        }]
                }]
        }], () => [], null);
})();
var CdkCellOutlet = class _CdkCellOutlet {
    _viewContainer = inject(ViewContainerRef);
    /** The ordered list of cells to render within this outlet's view container */
    cells;
    /** The data context to be provided to each cell */
    context;
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     */
    static mostRecentCellOutlet = null;
    constructor() {
        _CdkCellOutlet.mostRecentCellOutlet = this;
    }
    ngOnDestroy() {
        if (_CdkCellOutlet.mostRecentCellOutlet === this) {
            _CdkCellOutlet.mostRecentCellOutlet = null;
        }
    }
    static ɵfac = function CdkCellOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkCellOutlet)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkCellOutlet,
        selectors: [["", "cdkCellOutlet", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkCellOutlet, [{
            type: Directive,
            args: [{
                    selector: "[cdkCellOutlet]"
                }]
        }], () => [], null);
})();
var CdkHeaderRow = class _CdkHeaderRow {
    static ɵfac = function CdkHeaderRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkHeaderRow)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _CdkHeaderRow,
        selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-header-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkHeaderRow_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainer(0, 0);
            }
        },
        dependencies: [CdkCellOutlet],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkHeaderRow, [{
            type: Component,
            args: [{
                    selector: "cdk-header-row, tr[cdk-header-row]",
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        "class": "cdk-header-row",
                        "role": "row"
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None,
                    imports: [CdkCellOutlet]
                }]
        }], null, null);
})();
var CdkFooterRow = class _CdkFooterRow {
    static ɵfac = function CdkFooterRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkFooterRow)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _CdkFooterRow,
        selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-footer-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkFooterRow_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainer(0, 0);
            }
        },
        dependencies: [CdkCellOutlet],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkFooterRow, [{
            type: Component,
            args: [{
                    selector: "cdk-footer-row, tr[cdk-footer-row]",
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        "class": "cdk-footer-row",
                        "role": "row"
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None,
                    imports: [CdkCellOutlet]
                }]
        }], null, null);
})();
var CdkRow = class _CdkRow {
    static ɵfac = function CdkRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkRow)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _CdkRow,
        selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
        hostAttrs: ["role", "row", 1, "cdk-row"],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function CdkRow_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainer(0, 0);
            }
        },
        dependencies: [CdkCellOutlet],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkRow, [{
            type: Component,
            args: [{
                    selector: "cdk-row, tr[cdk-row]",
                    template: CDK_ROW_TEMPLATE,
                    host: {
                        "class": "cdk-row",
                        "role": "row"
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None,
                    imports: [CdkCellOutlet]
                }]
        }], null, null);
})();
var CdkNoDataRow = class _CdkNoDataRow {
    templateRef = inject(TemplateRef);
    _contentClassNames = ["cdk-no-data-row", "cdk-row"];
    _cellClassNames = ["cdk-cell", "cdk-no-data-cell"];
    _cellSelector = "td, cdk-cell, [cdk-cell], .cdk-cell";
    constructor() { }
    static ɵfac = function CdkNoDataRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkNoDataRow)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkNoDataRow,
        selectors: [["ng-template", "cdkNoDataRow", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkNoDataRow, [{
            type: Directive,
            args: [{
                    selector: "ng-template[cdkNoDataRow]"
                }]
        }], () => [], null);
})();
var STICKY_DIRECTIONS = ["top", "bottom", "left", "right"];
var StickyStyler = class {
    _isNativeHtmlTable;
    _stickCellCss;
    _isBrowser;
    _needsPositionStickyOnElement;
    direction;
    _positionListener;
    _tableInjector;
    _elemSizeCache = /* @__PURE__ */ new WeakMap();
    _resizeObserver = globalThis?.ResizeObserver ? new globalThis.ResizeObserver(entries => this._updateCachedSizes(entries)) : null;
    _updatedStickyColumnsParamsToReplay = [];
    _stickyColumnsReplayTimeout = null;
    _cachedCellWidths = [];
    _borderCellCss;
    _destroyed = false;
    /**
     * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
     *     that uses the native `<table>` element.
     * @param _stickCellCss The CSS class that will be applied to every row/cell that has
     *     sticky positioning applied.
     * @param direction The directionality context of the table (ltr/rtl); affects column positioning
     *     by reversing left/right positions.
     * @param _isBrowser Whether the table is currently being rendered on the server or the client.
     * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
     *     using inline styles. If false, it is assumed that position: sticky is included in
     *     the component stylesheet for _stickCellCss.
     * @param _positionListener A listener that is notified of changes to sticky rows/columns
     *     and their dimensions.
     * @param _tableInjector The table's Injector.
     */
    constructor(_isNativeHtmlTable, _stickCellCss, _isBrowser = true, _needsPositionStickyOnElement = true, direction, _positionListener, _tableInjector) {
        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this._isBrowser = _isBrowser;
        this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
        this.direction = direction;
        this._positionListener = _positionListener;
        this._tableInjector = _tableInjector;
        this._borderCellCss = {
            "top": `${_stickCellCss}-border-elem-top`,
            "bottom": `${_stickCellCss}-border-elem-bottom`,
            "left": `${_stickCellCss}-border-elem-left`,
            "right": `${_stickCellCss}-border-elem-right`
        };
    }
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param rows The list of rows that should be cleared from sticking in the provided directions
     * @param stickyDirections The directions that should no longer be set as sticky on the rows.
     */
    clearStickyPositioning(rows, stickyDirections) {
        if (stickyDirections.includes("left") || stickyDirections.includes("right")) {
            this._removeFromStickyColumnReplayQueue(rows);
        }
        const elementsToClear = [];
        for (const row of rows) {
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            elementsToClear.push(row, ...Array.from(row.children));
        }
        afterNextRender({
            write: () => {
                for (const element of elementsToClear) {
                    this._removeStickyStyle(element, stickyDirections);
                }
            }
        }, {
            injector: this._tableInjector
        });
    }
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param rows The rows that should have its set of cells stuck according to the sticky states.
     * @param stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
     *     column cell. If `false` cached widths will be used instead.
     * @param replay Whether to enqueue this call for replay after a ResizeObserver update.
     */
    updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true, replay = true) {
        if (!rows.length || !this._isBrowser || !(stickyStartStates.some(state => state) || stickyEndStates.some(state => state))) {
            this._positionListener?.stickyColumnsUpdated({
                sizes: []
            });
            this._positionListener?.stickyEndColumnsUpdated({
                sizes: []
            });
            return;
        }
        const firstRow = rows[0];
        const numCells = firstRow.children.length;
        const isRtl = this.direction === "rtl";
        const start = isRtl ? "right" : "left";
        const end = isRtl ? "left" : "right";
        const lastStickyStart = stickyStartStates.lastIndexOf(true);
        const firstStickyEnd = stickyEndStates.indexOf(true);
        let cellWidths;
        let startPositions;
        let endPositions;
        if (replay) {
            this._updateStickyColumnReplayQueue({
                rows: [...rows],
                stickyStartStates: [...stickyStartStates],
                stickyEndStates: [...stickyEndStates]
            });
        }
        afterNextRender({
            earlyRead: () => {
                cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
                startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
                endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
            },
            write: () => {
                for (const row of rows) {
                    for (let i = 0; i < numCells; i++) {
                        const cell = row.children[i];
                        if (stickyStartStates[i]) {
                            this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
                        }
                        if (stickyEndStates[i]) {
                            this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
                        }
                    }
                }
                if (this._positionListener && cellWidths.some(w => !!w)) {
                    this._positionListener.stickyColumnsUpdated({
                        sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
                    });
                    this._positionListener.stickyEndColumnsUpdated({
                        sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
                    });
                }
            }
        }, {
            injector: this._tableInjector
        });
    }
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     */
    stickRows(rowsToStick, stickyStates, position) {
        if (!this._isBrowser) {
            return;
        }
        const rows = position === "bottom" ? rowsToStick.slice().reverse() : rowsToStick;
        const states = position === "bottom" ? stickyStates.slice().reverse() : stickyStates;
        const stickyOffsets = [];
        const stickyCellHeights = [];
        const elementsToStick = [];
        afterNextRender({
            earlyRead: () => {
                for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
                    if (!states[rowIndex]) {
                        continue;
                    }
                    stickyOffsets[rowIndex] = stickyOffset;
                    const row = rows[rowIndex];
                    elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
                    const height = this._retrieveElementSize(row).height;
                    stickyOffset += height;
                    stickyCellHeights[rowIndex] = height;
                }
            },
            write: () => {
                const borderedRowIndex = states.lastIndexOf(true);
                for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                    if (!states[rowIndex]) {
                        continue;
                    }
                    const offset = stickyOffsets[rowIndex];
                    const isBorderedRowIndex = rowIndex === borderedRowIndex;
                    for (const element of elementsToStick[rowIndex]) {
                        this._addStickyStyle(element, position, offset, isBorderedRowIndex);
                    }
                }
                if (position === "top") {
                    this._positionListener?.stickyHeaderRowsUpdated({
                        sizes: stickyCellHeights,
                        offsets: stickyOffsets,
                        elements: elementsToStick
                    });
                }
                else {
                    this._positionListener?.stickyFooterRowsUpdated({
                        sizes: stickyCellHeights,
                        offsets: stickyOffsets,
                        elements: elementsToStick
                    });
                }
            }
        }, {
            injector: this._tableInjector
        });
    }
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     */
    updateStickyFooterContainer(tableElement, stickyStates) {
        if (!this._isNativeHtmlTable) {
            return;
        }
        afterNextRender({
            write: () => {
                const tfoot = tableElement.querySelector("tfoot");
                if (tfoot) {
                    if (stickyStates.some(state => !state)) {
                        this._removeStickyStyle(tfoot, ["bottom"]);
                    }
                    else {
                        this._addStickyStyle(tfoot, "bottom", 0, false);
                    }
                }
            }
        }, {
            injector: this._tableInjector
        });
    }
    /** Triggered by the table's OnDestroy hook. */
    destroy() {
        if (this._stickyColumnsReplayTimeout) {
            clearTimeout(this._stickyColumnsReplayTimeout);
        }
        this._resizeObserver?.disconnect();
        this._destroyed = true;
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     */
    _removeStickyStyle(element, stickyDirections) {
        if (!element.classList.contains(this._stickCellCss)) {
            return;
        }
        for (const dir of stickyDirections) {
            element.style[dir] = "";
            element.classList.remove(this._borderCellCss[dir]);
        }
        const hasDirection = STICKY_DIRECTIONS.some(dir => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
        if (hasDirection) {
            element.style.zIndex = this._getCalculatedZIndex(element);
        }
        else {
            element.style.zIndex = "";
            if (this._needsPositionStickyOnElement) {
                element.style.position = "";
            }
            element.classList.remove(this._stickCellCss);
        }
    }
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     */
    _addStickyStyle(element, dir, dirValue, isBorderElement) {
        element.classList.add(this._stickCellCss);
        if (isBorderElement) {
            element.classList.add(this._borderCellCss[dir]);
        }
        element.style[dir] = `${dirValue}px`;
        element.style.zIndex = this._getCalculatedZIndex(element);
        if (this._needsPositionStickyOnElement) {
            element.style.cssText += "position: -webkit-sticky; position: sticky; ";
        }
    }
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     */
    _getCalculatedZIndex(element) {
        const zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1
        };
        let zIndex = 0;
        for (const dir of STICKY_DIRECTIONS) {
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? `${zIndex}` : "";
    }
    /** Gets the widths for each cell in the provided row. */
    _getCellWidths(row, recalculateCellWidths = true) {
        if (!recalculateCellWidths && this._cachedCellWidths.length) {
            return this._cachedCellWidths;
        }
        const cellWidths = [];
        const firstRowCells = row.children;
        for (let i = 0; i < firstRowCells.length; i++) {
            const cell = firstRowCells[i];
            cellWidths.push(this._retrieveElementSize(cell).width);
        }
        this._cachedCellWidths = cellWidths;
        return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    _getStickyStartColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    _getStickyEndColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Retreives the most recently observed size of the specified element from the cache, or
     * meaures it directly if not yet cached.
     */
    _retrieveElementSize(element) {
        const cachedSize = this._elemSizeCache.get(element);
        if (cachedSize) {
            return cachedSize;
        }
        const clientRect = element.getBoundingClientRect();
        const size = {
            width: clientRect.width,
            height: clientRect.height
        };
        if (!this._resizeObserver) {
            return size;
        }
        this._elemSizeCache.set(element, size);
        this._resizeObserver.observe(element, {
            box: "border-box"
        });
        return size;
    }
    /**
     * Conditionally enqueue the requested sticky update and clear previously queued updates
     * for the same rows.
     */
    _updateStickyColumnReplayQueue(params) {
        this._removeFromStickyColumnReplayQueue(params.rows);
        if (!this._stickyColumnsReplayTimeout) {
            this._updatedStickyColumnsParamsToReplay.push(params);
        }
    }
    /** Remove updates for the specified rows from the queue. */
    _removeFromStickyColumnReplayQueue(rows) {
        const rowsSet = new Set(rows);
        for (const update of this._updatedStickyColumnsParamsToReplay) {
            update.rows = update.rows.filter(row => !rowsSet.has(row));
        }
        this._updatedStickyColumnsParamsToReplay = this._updatedStickyColumnsParamsToReplay.filter(update => !!update.rows.length);
    }
    /** Update _elemSizeCache with the observed sizes. */
    _updateCachedSizes(entries) {
        let needsColumnUpdate = false;
        for (const entry of entries) {
            const newEntry = entry.borderBoxSize?.length ? {
                width: entry.borderBoxSize[0].inlineSize,
                height: entry.borderBoxSize[0].blockSize
            } : {
                width: entry.contentRect.width,
                height: entry.contentRect.height
            };
            if (newEntry.width !== this._elemSizeCache.get(entry.target)?.width && isCell(entry.target)) {
                needsColumnUpdate = true;
            }
            this._elemSizeCache.set(entry.target, newEntry);
        }
        if (needsColumnUpdate && this._updatedStickyColumnsParamsToReplay.length) {
            if (this._stickyColumnsReplayTimeout) {
                clearTimeout(this._stickyColumnsReplayTimeout);
            }
            this._stickyColumnsReplayTimeout = setTimeout(() => {
                if (this._destroyed) {
                    return;
                }
                for (const update of this._updatedStickyColumnsParamsToReplay) {
                    this.updateStickyColumns(update.rows, update.stickyStartStates, update.stickyEndStates, true, false);
                }
                this._updatedStickyColumnsParamsToReplay = [];
                this._stickyColumnsReplayTimeout = null;
            }, 0);
        }
    }
};
function isCell(element) {
    return ["cdk-cell", "cdk-header-cell", "cdk-footer-cell"].some(klass => element.classList.contains(klass));
}
function getTableUnknownColumnError(id) {
    return Error(`Could not find column with id "${id}".`);
}
function getTableDuplicateColumnNameError(name) {
    return Error(`Duplicate column definition name provided: "${name}".`);
}
function getTableMultipleDefaultRowDefsError() {
    return Error(`There can only be one default row without a when predicate function. Or set \`multiTemplateDataRows\`.`);
}
function getTableMissingMatchingRowDefError(data) {
    return Error(`Could not find a matching row definition for the provided row data: ${JSON.stringify(data)}`);
}
function getTableMissingRowDefsError() {
    return Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");
}
function getTableUnknownDataSourceError() {
    return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
function getTableTextColumnMissingParentTableError() {
    return Error(`Text column could not find a parent table for registration.`);
}
function getTableTextColumnMissingNameError() {
    return Error(`Table text column must have a name.`);
}
var STICKY_POSITIONING_LISTENER = new InjectionToken("CDK_SPL");
var CdkRecycleRows = class _CdkRecycleRows {
    static ɵfac = function CdkRecycleRows_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkRecycleRows)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkRecycleRows,
        selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
        features: [i0.ɵɵProvidersFeature([{
                    provide: _VIEW_REPEATER_STRATEGY,
                    useClass: _RecycleViewRepeaterStrategy
                }])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkRecycleRows, [{
            type: Directive,
            args: [{
                    selector: "cdk-table[recycleRows], table[cdk-table][recycleRows]",
                    providers: [{
                            provide: _VIEW_REPEATER_STRATEGY,
                            useClass: _RecycleViewRepeaterStrategy
                        }]
                }]
        }], null, null);
})();
var DataRowOutlet = class _DataRowOutlet {
    viewContainer = inject(ViewContainerRef);
    elementRef = inject(ElementRef);
    constructor() {
        const table = inject(CDK_TABLE);
        table._rowOutlet = this;
        table._outletAssigned();
    }
    static ɵfac = function DataRowOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _DataRowOutlet)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _DataRowOutlet,
        selectors: [["", "rowOutlet", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataRowOutlet, [{
            type: Directive,
            args: [{
                    selector: "[rowOutlet]"
                }]
        }], () => [], null);
})();
var HeaderRowOutlet = class _HeaderRowOutlet {
    viewContainer = inject(ViewContainerRef);
    elementRef = inject(ElementRef);
    constructor() {
        const table = inject(CDK_TABLE);
        table._headerRowOutlet = this;
        table._outletAssigned();
    }
    static ɵfac = function HeaderRowOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _HeaderRowOutlet)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _HeaderRowOutlet,
        selectors: [["", "headerRowOutlet", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeaderRowOutlet, [{
            type: Directive,
            args: [{
                    selector: "[headerRowOutlet]"
                }]
        }], () => [], null);
})();
var FooterRowOutlet = class _FooterRowOutlet {
    viewContainer = inject(ViewContainerRef);
    elementRef = inject(ElementRef);
    constructor() {
        const table = inject(CDK_TABLE);
        table._footerRowOutlet = this;
        table._outletAssigned();
    }
    static ɵfac = function FooterRowOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _FooterRowOutlet)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _FooterRowOutlet,
        selectors: [["", "footerRowOutlet", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterRowOutlet, [{
            type: Directive,
            args: [{
                    selector: "[footerRowOutlet]"
                }]
        }], () => [], null);
})();
var NoDataRowOutlet = class _NoDataRowOutlet {
    viewContainer = inject(ViewContainerRef);
    elementRef = inject(ElementRef);
    constructor() {
        const table = inject(CDK_TABLE);
        table._noDataRowOutlet = this;
        table._outletAssigned();
    }
    static ɵfac = function NoDataRowOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _NoDataRowOutlet)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _NoDataRowOutlet,
        selectors: [["", "noDataRowOutlet", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NoDataRowOutlet, [{
            type: Directive,
            args: [{
                    selector: "[noDataRowOutlet]"
                }]
        }], () => [], null);
})();
var CdkTable = class _CdkTable {
    _differs = inject(IterableDiffers);
    _changeDetectorRef = inject(ChangeDetectorRef);
    _elementRef = inject(ElementRef);
    _dir = inject(Directionality, {
        optional: true
    });
    _platform = inject(Platform);
    _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
    _viewportRuler = inject(ViewportRuler);
    _stickyPositioningListener = inject(STICKY_POSITIONING_LISTENER, {
        optional: true,
        skipSelf: true
    });
    _document = inject(DOCUMENT);
    /** Latest data provided by the data source. */
    _data;
    /** Subject that emits when the component has been destroyed. */
    _onDestroy = new Subject();
    /** List of the rendered rows as identified by their `RenderRow` object. */
    _renderRows;
    /** Subscription that listens for the data provided by the data source. */
    _renderChangeSubscription;
    /**
     * Map of all the user's defined columns (header, data, and footer cell template) identified by
     * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
     * any custom column definitions added to `_customColumnDefs`.
     */
    _columnDefsByName = /* @__PURE__ */ new Map();
    /**
     * Set of all row definitions that can be used by this table. Populated by the rows gathered by
     * using `ContentChildren` as well as any custom row definitions added to `_customRowDefs`.
     */
    _rowDefs;
    /**
     * Set of all header row definitions that can be used by this table. Populated by the rows
     * gathered by using `ContentChildren` as well as any custom row definitions added to
     * `_customHeaderRowDefs`.
     */
    _headerRowDefs;
    /**
     * Set of all row definitions that can be used by this table. Populated by the rows gathered by
     * using `ContentChildren` as well as any custom row definitions added to
     * `_customFooterRowDefs`.
     */
    _footerRowDefs;
    /** Differ used to find the changes in the data provided by the data source. */
    _dataDiffer;
    /** Stores the row definition that does not have a when predicate. */
    _defaultRowDef;
    /**
     * Column definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * column definitions as *its* content child.
     */
    _customColumnDefs = /* @__PURE__ */ new Set();
    /**
     * Data row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in data rows as *its* content child.
     */
    _customRowDefs = /* @__PURE__ */ new Set();
    /**
     * Header row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has
     * built-in header rows as *its* content child.
     */
    _customHeaderRowDefs = /* @__PURE__ */ new Set();
    /**
     * Footer row definitions that were defined outside of the direct content children of the table.
     * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
     * built-in footer row as *its* content child.
     */
    _customFooterRowDefs = /* @__PURE__ */ new Set();
    /** No data row that was defined outside of the direct content children of the table. */
    _customNoDataRow;
    /**
     * Whether the header row definition has been changed. Triggers an update to the header row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     */
    _headerRowDefChanged = true;
    /**
     * Whether the footer row definition has been changed. Triggers an update to the footer row after
     * content is checked. Initialized as true so that the table renders the initial set of rows.
     */
    _footerRowDefChanged = true;
    /**
     * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
     * change.
     */
    _stickyColumnStylesNeedReset = true;
    /**
     * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
     * `false`, cached values will be used instead. This is only applicable to tables with
     * `_fixedLayout` enabled. For other tables, cell widths will always be recalculated.
     */
    _forceRecalculateCellWidths = true;
    /**
     * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
     * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
     * the cached `RenderRow` objects when possible, the row identity is preserved when the data
     * and row template matches, which allows the `IterableDiffer` to check rows by reference
     * and understand which rows are added/moved/removed.
     *
     * Implemented as a map of maps where the first key is the `data: T` object and the second is the
     * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
     * contains an array of created pairs. The array is necessary to handle cases where the data
     * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
     * stored.
     */
    _cachedRenderRowsMap = /* @__PURE__ */ new Map();
    /** Whether the table is applied to a native `<table>`. */
    _isNativeHtmlTable;
    /**
     * Utility class that is responsible for applying the appropriate sticky positioning styles to
     * the table's rows and cells.
     */
    _stickyStyler;
    /**
     * CSS class added to any row or cell that has sticky positioning applied. May be overridden by
     * table subclasses.
     */
    stickyCssClass = "cdk-table-sticky";
    /**
     * Whether to manually add position: sticky to all sticky cell elements. Not needed if
     * the position is set in a selector associated with the value of stickyCssClass. May be
     * overridden by table subclasses
     */
    needsPositionStickyOnElement = true;
    /** Whether the component is being rendered on the server. */
    _isServer;
    /** Whether the no data row is currently showing anything. */
    _isShowingNoDataRow = false;
    /** Whether the table has rendered out all the outlets for the first time. */
    _hasAllOutlets = false;
    /** Whether the table is done initializing. */
    _hasInitialized = false;
    /** Aria role to apply to the table's cells based on the table's own role. */
    _getCellRole() {
        if (this._cellRoleInternal === void 0) {
            const tableRole = this._elementRef.nativeElement.getAttribute("role");
            return tableRole === "grid" || tableRole === "treegrid" ? "gridcell" : "cell";
        }
        return this._cellRoleInternal;
    }
    _cellRoleInternal = void 0;
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    get trackBy() {
        return this._trackByFn;
    }
    set trackBy(fn) {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    _trackByFn;
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     */
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    _dataSource;
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     */
    get multiTemplateDataRows() {
        return this._multiTemplateDataRows;
    }
    set multiTemplateDataRows(value) {
        this._multiTemplateDataRows = value;
        if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
            this.updateStickyColumnStyles();
        }
    }
    _multiTemplateDataRows = false;
    /**
     * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
     * and optimize rendering sticky styles for native tables. No-op for flex tables.
     */
    get fixedLayout() {
        return this._fixedLayout;
    }
    set fixedLayout(value) {
        this._fixedLayout = value;
        this._forceRecalculateCellWidths = true;
        this._stickyColumnStylesNeedReset = true;
    }
    _fixedLayout = false;
    /**
     * Emits when the table completes rendering a set of data rows based on the latest data from the
     * data source, even if the set of rows is empty.
     */
    contentChanged = new EventEmitter();
    // TODO(andrewseguin): Remove max value as the end index
    //   and instead calculate the view on init and scroll.
    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     *
     * @docs-private
     */
    viewChange = new BehaviorSubject({
        start: 0,
        end: Number.MAX_VALUE
    });
    // Outlets in the table's template where the header, data rows, and footer will be inserted.
    _rowOutlet;
    _headerRowOutlet;
    _footerRowOutlet;
    _noDataRowOutlet;
    /**
     * The column definitions provided by the user that contain what the header, data, and footer
     * cells should render for each column.
     */
    _contentColumnDefs;
    /** Set of data row definitions that were provided to the table as content children. */
    _contentRowDefs;
    /** Set of header row definitions that were provided to the table as content children. */
    _contentHeaderRowDefs;
    /** Set of footer row definitions that were provided to the table as content children. */
    _contentFooterRowDefs;
    /** Row definition that will only be rendered if there's no data in the table. */
    _noDataRow;
    _injector = inject(Injector);
    constructor() {
        const role = inject(new HostAttributeToken("role"), {
            optional: true
        });
        if (!role) {
            this._elementRef.nativeElement.setAttribute("role", "table");
        }
        this._isServer = !this._platform.isBrowser;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === "TABLE";
        this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
            return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        });
    }
    ngOnInit() {
        this._setupStickyStyler();
        this._viewportRuler.change().pipe(takeUntil(this._onDestroy)).subscribe(() => {
            this._forceRecalculateCellWidths = true;
        });
    }
    ngAfterContentInit() {
        this._hasInitialized = true;
    }
    ngAfterContentChecked() {
        if (this._canRender()) {
            this._render();
        }
    }
    ngOnDestroy() {
        this._stickyStyler?.destroy();
        [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach(def => {
            def?.clear();
        });
        this._headerRowDefs = [];
        this._footerRowDefs = [];
        this._defaultRowDef = null;
        this._onDestroy.next();
        this._onDestroy.complete();
        if (isDataSource(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */
    renderRows() {
        this._renderRows = this._getAllRenderRows();
        const changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            this._updateNoDataRow();
            this.contentChanged.next();
            return;
        }
        const viewContainer = this._rowOutlet.viewContainer;
        this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), record => record.item.data, change => {
            if (change.operation === _ViewRepeaterOperation.INSERTED && change.context) {
                this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
            }
        });
        this._updateRowIndexContext();
        changes.forEachIdentityChange(record => {
            const rowView = viewContainer.get(record.currentIndex);
            rowView.context.$implicit = record.item.data;
        });
        this._updateNoDataRow();
        this.contentChanged.next();
        this.updateStickyColumnStyles();
    }
    /** Adds a column definition that was not included as part of the content children. */
    addColumnDef(columnDef) {
        this._customColumnDefs.add(columnDef);
    }
    /** Removes a column definition that was not included as part of the content children. */
    removeColumnDef(columnDef) {
        this._customColumnDefs.delete(columnDef);
    }
    /** Adds a row definition that was not included as part of the content children. */
    addRowDef(rowDef) {
        this._customRowDefs.add(rowDef);
    }
    /** Removes a row definition that was not included as part of the content children. */
    removeRowDef(rowDef) {
        this._customRowDefs.delete(rowDef);
    }
    /** Adds a header row definition that was not included as part of the content children. */
    addHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /** Removes a header row definition that was not included as part of the content children. */
    removeHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /** Adds a footer row definition that was not included as part of the content children. */
    addFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /** Removes a footer row definition that was not included as part of the content children. */
    removeFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /** Sets a no data row definition that was not included as a part of the content children. */
    setNoDataRow(noDataRow) {
        this._customNoDataRow = noDataRow;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyHeaderRowStyles() {
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        if (this._isNativeHtmlTable) {
            const thead = closestTableSection(this._headerRowOutlet, "thead");
            if (thead) {
                thead.style.display = headerRows.length ? "" : "none";
            }
        }
        const stickyStates = this._headerRowDefs.map(def => def.sticky);
        this._stickyStyler.clearStickyPositioning(headerRows, ["top"]);
        this._stickyStyler.stickRows(headerRows, stickyStates, "top");
        this._headerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyFooterRowStyles() {
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        if (this._isNativeHtmlTable) {
            const tfoot = closestTableSection(this._footerRowOutlet, "tfoot");
            if (tfoot) {
                tfoot.style.display = footerRows.length ? "" : "none";
            }
        }
        const stickyStates = this._footerRowDefs.map(def => def.sticky);
        this._stickyStyler.clearStickyPositioning(footerRows, ["bottom"]);
        this._stickyStyler.stickRows(footerRows, stickyStates, "bottom");
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        this._footerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */
    updateStickyColumnStyles() {
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        const dataRows = this._getRenderedRows(this._rowOutlet);
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
            this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ["left", "right"]);
            this._stickyColumnStylesNeedReset = false;
        }
        headerRows.forEach((headerRow, i) => {
            this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
        });
        this._rowDefs.forEach(rowDef => {
            const rows = [];
            for (let i = 0; i < dataRows.length; i++) {
                if (this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            this._addStickyColumnStyles(rows, rowDef);
        });
        footerRows.forEach((footerRow, i) => {
            this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
        });
        Array.from(this._columnDefsByName.values()).forEach(def => def.resetStickyChanged());
    }
    /** Invoked whenever an outlet is created and has been assigned to the table. */
    _outletAssigned() {
        if (!this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet) {
            this._hasAllOutlets = true;
            if (this._canRender()) {
                this._render();
            }
        }
    }
    /** Whether the table has all the information to start rendering. */
    _canRender() {
        return this._hasAllOutlets && this._hasInitialized;
    }
    /** Renders the table if its state has changed. */
    _render() {
        this._cacheRowDefs();
        this._cacheColumnDefs();
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getTableMissingRowDefsError();
        }
        const columnsChanged = this._renderUpdatedColumns();
        const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
        this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
        this._forceRecalculateCellWidths = rowDefsChanged;
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        else if (this._stickyColumnStylesNeedReset) {
            this.updateStickyColumnStyles();
        }
        this._checkStickyStates();
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */
    _getAllRenderRows() {
        const renderRows = [];
        const prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
        if (!this._data) {
            return renderRows;
        }
        for (let i = 0; i < this._data.length; i++) {
            let data = this._data[i];
            const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, /* @__PURE__ */ new WeakMap());
            }
            for (let j = 0; j < renderRowsForData.length; j++) {
                let renderRow = renderRowsForData[j];
                const cache = this._cachedRenderRowsMap.get(renderRow.data);
                if (cache.has(renderRow.rowDef)) {
                    cache.get(renderRow.rowDef).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */
    _getRenderRowsForData(data, dataIndex, cache) {
        const rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map(rowDef => {
            const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];
            if (cachedRenderRows.length) {
                const dataRow = cachedRenderRows.shift();
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return {
                    data,
                    rowDef,
                    dataIndex
                };
            }
        });
    }
    /** Update the map containing the content's column definitions. */
    _cacheColumnDefs() {
        this._columnDefsByName.clear();
        const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
        columnDefs.forEach(columnDef => {
            if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === "undefined" || ngDevMode)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            this._columnDefsByName.set(columnDef.name, columnDef);
        });
    }
    /** Update the list of all available row definitions that can be used. */
    _cacheRowDefs() {
        this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
        this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
        this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
        const defaultRowDefs = this._rowDefs.filter(def => !def.when);
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */
    _renderUpdatedColumns() {
        const columnsDiffReducer = (acc, def) => {
            const diff = !!def.getColumnsDiff();
            return acc || diff;
        };
        const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
        if (dataColumnsChanged) {
            this._forceRenderDataRows();
        }
        const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
        if (headerColumnsChanged) {
            this._forceRenderHeaderRows();
        }
        const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
        if (footerColumnsChanged) {
            this._forceRenderFooterRows();
        }
        return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */
    _switchDataSource(dataSource) {
        this._data = [];
        if (isDataSource(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            if (this._rowOutlet) {
                this._rowOutlet.viewContainer.clear();
            }
        }
        this._dataSource = dataSource;
    }
    /** Set up a subscription for the data provided by the data source. */
    _observeRenderChanges() {
        if (!this.dataSource) {
            return;
        }
        let dataStream;
        if (isDataSource(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
        }
        else if (isObservable(this.dataSource)) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = of(this.dataSource);
        }
        if (dataStream === void 0 && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream.pipe(takeUntil(this._onDestroy)).subscribe(data => {
            this._data = data || [];
            this.renderRows();
        });
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */
    _forceRenderHeaderRows() {
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
        this.updateStickyHeaderRowStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */
    _forceRenderFooterRows() {
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
        this.updateStickyFooterRowStyles();
    }
    /** Adds the sticky column styles for the rows according to the columns' stick states. */
    _addStickyColumnStyles(rows, rowDef) {
        const columnDefs = Array.from(rowDef?.columns || []).map(columnName => {
            const columnDef = this._columnDefsByName.get(columnName);
            if (!columnDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
                throw getTableUnknownColumnError(columnName);
            }
            return columnDef;
        });
        const stickyStartStates = columnDefs.map(columnDef => columnDef.sticky);
        const stickyEndStates = columnDefs.map(columnDef => columnDef.stickyEnd);
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
    }
    /** Gets the list of rows that have been rendered in the row outlet. */
    _getRenderedRows(rowOutlet) {
        const renderedRows = [];
        for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
            const viewRef = rowOutlet.viewContainer.get(i);
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */
    _getRowDefs(data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        let rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(def => !def.when || def.when(dataIndex, data));
        }
        else {
            let rowDef = this._rowDefs.find(def => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    }
    _getEmbeddedViewArgs(renderRow, index) {
        const rowDef = renderRow.rowDef;
        const context = {
            $implicit: renderRow.data
        };
        return {
            templateRef: rowDef.template,
            context,
            index
        };
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */
    _renderRow(outlet, rowDef, index, context = {}) {
        const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        this._renderCellTemplateForItem(rowDef, context);
        return view;
    }
    _renderCellTemplateForItem(rowDef, context) {
        for (let cellTemplate of this._getCellTemplates(rowDef)) {
            if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    _updateRowIndexContext() {
        const viewContainer = this._rowOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            const viewRef = viewContainer.get(renderIndex);
            const context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    }
    /** Gets the column definitions for the provided row def. */
    _getCellTemplates(rowDef) {
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, columnId => {
            const column = this._columnDefsByName.get(columnId);
            if (!column && (typeof ngDevMode === "undefined" || ngDevMode)) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        });
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */
    _forceRenderDataRows() {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */
    _checkStickyStates() {
        const stickyCheckReducer = (acc, d) => {
            return acc || d.hasStickyChanged();
        };
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this._stickyColumnStylesNeedReset = true;
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */
    _setupStickyStyler() {
        const direction = this._dir ? this._dir.value : "ltr";
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, this._platform.isBrowser, this.needsPositionStickyOnElement, direction, this._stickyPositioningListener, this._injector);
        (this._dir ? this._dir.change : of()).pipe(takeUntil(this._onDestroy)).subscribe(value => {
            this._stickyStyler.direction = value;
            this.updateStickyColumnStyles();
        });
    }
    /** Filters definitions that belong to this table from a QueryList. */
    _getOwnDefs(items) {
        return items.filter(item => !item._table || item._table === this);
    }
    /** Creates or removes the no data row, depending on whether any data is being shown. */
    _updateNoDataRow() {
        const noDataRow = this._customNoDataRow || this._noDataRow;
        if (!noDataRow) {
            return;
        }
        const shouldShow = this._rowOutlet.viewContainer.length === 0;
        if (shouldShow === this._isShowingNoDataRow) {
            return;
        }
        const container = this._noDataRowOutlet.viewContainer;
        if (shouldShow) {
            const view = container.createEmbeddedView(noDataRow.templateRef);
            const rootNode = view.rootNodes[0];
            if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
                rootNode.setAttribute("role", "row");
                rootNode.classList.add(...noDataRow._contentClassNames);
                const cells = rootNode.querySelectorAll(noDataRow._cellSelector);
                for (let i = 0; i < cells.length; i++) {
                    cells[i].classList.add(...noDataRow._cellClassNames);
                }
            }
        }
        else {
            container.clear();
        }
        this._isShowingNoDataRow = shouldShow;
        this._changeDetectorRef.markForCheck();
    }
    static ɵfac = function CdkTable_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTable)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _CdkTable,
        selectors: [["cdk-table"], ["table", "cdk-table", ""]],
        contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CdkNoDataRow, 5);
                i0.ɵɵcontentQuery(dirIndex, CdkColumnDef, 5);
                i0.ɵɵcontentQuery(dirIndex, CdkRowDef, 5);
                i0.ɵɵcontentQuery(dirIndex, CdkHeaderRowDef, 5);
                i0.ɵɵcontentQuery(dirIndex, CdkFooterRowDef, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._noDataRow = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._contentColumnDefs = _t);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._contentRowDefs = _t);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._contentHeaderRowDefs = _t);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._contentFooterRowDefs = _t);
            }
        },
        hostAttrs: [1, "cdk-table"],
        hostVars: 2,
        hostBindings: function CdkTable_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("cdk-table-fixed-layout", ctx.fixedLayout);
            }
        },
        inputs: {
            trackBy: "trackBy",
            dataSource: "dataSource",
            multiTemplateDataRows: [2, "multiTemplateDataRows", "multiTemplateDataRows", booleanAttribute],
            fixedLayout: [2, "fixedLayout", "fixedLayout", booleanAttribute]
        },
        outputs: {
            contentChanged: "contentChanged"
        },
        exportAs: ["cdkTable"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CDK_TABLE,
                    useExisting: _CdkTable
                }, {
                    provide: _VIEW_REPEATER_STRATEGY,
                    useClass: _DisposeViewRepeaterStrategy
                },
                // Prevent nested tables from seeing this table's StickyPositioningListener.
                {
                    provide: STICKY_POSITIONING_LISTENER,
                    useValue: null
                }])],
        ngContentSelectors: _c1,
        decls: 5,
        vars: 2,
        consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function CdkTable_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c0);
                i0.ɵɵprojection(0);
                i0.ɵɵprojection(1, 1);
                i0.ɵɵconditionalCreate(2, CdkTable_Conditional_2_Template, 1, 0);
                i0.ɵɵconditionalCreate(3, CdkTable_Conditional_3_Template, 7, 0)(4, CdkTable_Conditional_4_Template, 4, 0);
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵconditional(ctx._isServer ? 2 : -1);
                i0.ɵɵadvance();
                i0.ɵɵconditional(ctx._isNativeHtmlTable ? 3 : 4);
            }
        },
        dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
        styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTable, [{
            type: Component,
            args: [{
                    selector: "cdk-table, table[cdk-table]",
                    exportAs: "cdkTable",
                    template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
                    host: {
                        "class": "cdk-table",
                        "[class.cdk-table-fixed-layout]": "fixedLayout"
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.Default,
                    providers: [{
                            provide: CDK_TABLE,
                            useExisting: CdkTable
                        }, {
                            provide: _VIEW_REPEATER_STRATEGY,
                            useClass: _DisposeViewRepeaterStrategy
                        },
                        // Prevent nested tables from seeing this table's StickyPositioningListener.
                        {
                            provide: STICKY_POSITIONING_LISTENER,
                            useValue: null
                        }],
                    imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
                    styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"]
                }]
        }], () => [], {
        trackBy: [{
                type: Input
            }],
        dataSource: [{
                type: Input
            }],
        multiTemplateDataRows: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        fixedLayout: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        contentChanged: [{
                type: Output
            }],
        _contentColumnDefs: [{
                type: ContentChildren,
                args: [CdkColumnDef, {
                        descendants: true
                    }]
            }],
        _contentRowDefs: [{
                type: ContentChildren,
                args: [CdkRowDef, {
                        descendants: true
                    }]
            }],
        _contentHeaderRowDefs: [{
                type: ContentChildren,
                args: [CdkHeaderRowDef, {
                        descendants: true
                    }]
            }],
        _contentFooterRowDefs: [{
                type: ContentChildren,
                args: [CdkFooterRowDef, {
                        descendants: true
                    }]
            }],
        _noDataRow: [{
                type: ContentChild,
                args: [CdkNoDataRow]
            }]
    });
})();
function mergeArrayAndSet(array, set) {
    return array.concat(Array.from(set));
}
function closestTableSection(outlet, section) {
    const uppercaseSection = section.toUpperCase();
    let current = outlet.viewContainer.element.nativeElement;
    while (current) {
        const nodeName = current.nodeType === 1 ? current.nodeName : null;
        if (nodeName === uppercaseSection) {
            return current;
        }
        else if (nodeName === "TABLE") {
            break;
        }
        current = current.parentNode;
    }
    return null;
}
var CdkTextColumn = class _CdkTextColumn {
    _table = inject(CdkTable, {
        optional: true
    });
    _options = inject(TEXT_COLUMN_OPTIONS, {
        optional: true
    });
    /** Column name that should be used to reference this column. */
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        this._syncColumnDefName();
    }
    _name;
    /**
     * Text label that should be used for the column header. If this property is not
     * set, the header text will default to the column name with its first letter capitalized.
     */
    headerText;
    /**
     * Accessor function to retrieve the data rendered for each cell. If this
     * property is not set, the data cells will render the value found in the data's property matching
     * the column's name. For example, if the column is named `id`, then the rendered value will be
     * value defined by the data's `id` property.
     */
    dataAccessor;
    /** Alignment of the cell values. */
    justify = "start";
    /** @docs-private */
    columnDef;
    /**
     * The column cell is provided to the column during `ngOnInit` with a static query.
     * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
     * column definition was provided in the same view as the table, which is not the case with this
     * component.
     * @docs-private
     */
    cell;
    /**
     * The column headerCell is provided to the column during `ngOnInit` with a static query.
     * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
     * column definition was provided in the same view as the table, which is not the case with this
     * component.
     * @docs-private
     */
    headerCell;
    constructor() {
        this._options = this._options || {};
    }
    ngOnInit() {
        this._syncColumnDefName();
        if (this.headerText === void 0) {
            this.headerText = this._createDefaultHeaderText();
        }
        if (!this.dataAccessor) {
            this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
        }
        if (this._table) {
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;
            this._table.addColumnDef(this.columnDef);
        }
        else if (typeof ngDevMode === "undefined" || ngDevMode) {
            throw getTableTextColumnMissingParentTableError();
        }
    }
    ngOnDestroy() {
        if (this._table) {
            this._table.removeColumnDef(this.columnDef);
        }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */
    _createDefaultHeaderText() {
        const name = this.name;
        if (!name && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getTableTextColumnMissingNameError();
        }
        if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
        }
        return name[0].toUpperCase() + name.slice(1);
    }
    /** Synchronizes the column definition name with the text column name. */
    _syncColumnDefName() {
        if (this.columnDef) {
            this.columnDef.name = this.name;
        }
    }
    static ɵfac = function CdkTextColumn_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTextColumn)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _CdkTextColumn,
        selectors: [["cdk-text-column"]],
        viewQuery: function CdkTextColumn_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(CdkColumnDef, 7);
                i0.ɵɵviewQuery(CdkCellDef, 7);
                i0.ɵɵviewQuery(CdkHeaderCellDef, 7);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnDef = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cell = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerCell = _t.first);
            }
        },
        inputs: {
            name: "name",
            headerText: "headerText",
            dataAccessor: "dataAccessor",
            justify: "justify"
        },
        decls: 3,
        vars: 0,
        consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
        template: function CdkTextColumn_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, CdkTextColumn_th_1_Template, 2, 3, "th", 1)(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
                i0.ɵɵelementContainerEnd();
            }
        },
        dependencies: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTextColumn, [{
            type: Component,
            args: [{
                    selector: "cdk-text-column",
                    template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                    encapsulation: ViewEncapsulation.None,
                    // Change detection is intentionally not set to OnPush. This component's template will be provided
                    // to the table to be inserted into its view. This is problematic when change detection runs since
                    // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                    // mean's the template in the table's view will not have the updated value (and in fact will cause
                    // an ExpressionChangedAfterItHasBeenCheckedError).
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    imports: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell]
                }]
        }], () => [], {
        name: [{
                type: Input
            }],
        headerText: [{
                type: Input
            }],
        dataAccessor: [{
                type: Input
            }],
        justify: [{
                type: Input
            }],
        columnDef: [{
                type: ViewChild,
                args: [CdkColumnDef, {
                        static: true
                    }]
            }],
        cell: [{
                type: ViewChild,
                args: [CdkCellDef, {
                        static: true
                    }]
            }],
        headerCell: [{
                type: ViewChild,
                args: [CdkHeaderCellDef, {
                        static: true
                    }]
            }]
    });
})();
var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
var CdkTableModule = class _CdkTableModule {
    static ɵfac = function CdkTableModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTableModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _CdkTableModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [ScrollingModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTableModule, [{
            type: NgModule,
            args: [{
                    exports: EXPORTED_DECLARATIONS,
                    imports: [ScrollingModule, ...EXPORTED_DECLARATIONS]
                }]
        }], null, null);
})();
export { BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkNoDataRow, CdkRecycleRows, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, DataSource, FooterRowOutlet, HeaderRowOutlet, NoDataRowOutlet, STICKY_POSITIONING_LISTENER, TEXT_COLUMN_OPTIONS };
