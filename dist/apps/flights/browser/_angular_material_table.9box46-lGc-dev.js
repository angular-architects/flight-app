import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/table.mjs
import * as i0 from "@angular/core";
import { Directive, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, booleanAttribute, NgModule } from "@angular/core";
import { CdkTable, CDK_TABLE, STICKY_POSITIONING_LISTENER, HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet, CdkCellDef, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkHeaderCell, CdkFooterCell, CdkCell, CdkHeaderRowDef, CdkFooterRowDef, CdkRowDef, CdkHeaderRow, CdkCellOutlet, CdkFooterRow, CdkRow, CdkNoDataRow, CdkTextColumn, CdkTableModule } from "@angular/cdk/table";
import { _VIEW_REPEATER_STRATEGY, _RecycleViewRepeaterStrategy, _DisposeViewRepeaterStrategy, DataSource } from "@angular/cdk/collections";
import { BidiModule } from "@angular/cdk/bidi";
import { BehaviorSubject, Subject, merge, of, combineLatest } from "rxjs";
import { _isNumberValue } from "@angular/cdk/coercion";
import { map } from "rxjs/operators";
var _c0 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c1 = ["caption", "colgroup, col", "*"];
function MatTable_Conditional_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵprojection(0, 2);
    }
}
function MatTable_Conditional_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "thead", 0);
        i0.ɵɵelementContainer(1, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "tbody", 2);
        i0.ɵɵelementContainer(3, 3)(4, 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "tfoot", 0);
        i0.ɵɵelementContainer(6, 5);
        i0.ɵɵelementEnd();
    }
}
function MatTable_Conditional_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0, 1)(1, 3)(2, 4)(3, 5);
    }
}
function MatTextColumn_th_1_Template(rf, ctx) {
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
function MatTextColumn_td_2_Template(rf, ctx) {
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
var MatRecycleRows = class _MatRecycleRows {
    static ɵfac = function MatRecycleRows_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatRecycleRows)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatRecycleRows,
        selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
        features: [i0.ɵɵProvidersFeature([{
                    provide: _VIEW_REPEATER_STRATEGY,
                    useClass: _RecycleViewRepeaterStrategy
                }])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatRecycleRows, [{
            type: Directive,
            args: [{
                    selector: "mat-table[recycleRows], table[mat-table][recycleRows]",
                    providers: [{
                            provide: _VIEW_REPEATER_STRATEGY,
                            useClass: _RecycleViewRepeaterStrategy
                        }]
                }]
        }], null, null);
})();
var MatTable = class _MatTable extends CdkTable {
    /** Overrides the sticky CSS class set by the `CdkTable`. */
    stickyCssClass = "mat-mdc-table-sticky";
    /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
    needsPositionStickyOnElement = false;
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatTable_BaseFactory;
        return function MatTable_Factory(__ngFactoryType__) {
            return (ɵMatTable_BaseFactory || (ɵMatTable_BaseFactory = i0.ɵɵgetInheritedFactory(_MatTable)))(__ngFactoryType__ || _MatTable);
        };
    })();
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatTable,
        selectors: [["mat-table"], ["table", "mat-table", ""]],
        hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
        hostVars: 2,
        hostBindings: function MatTable_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mdc-table-fixed-layout", ctx.fixedLayout);
            }
        },
        exportAs: ["matTable"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkTable,
                    useExisting: _MatTable
                }, {
                    provide: CDK_TABLE,
                    useExisting: _MatTable
                },
                // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
                //  is only included in the build if used.
                {
                    provide: _VIEW_REPEATER_STRATEGY,
                    useClass: _DisposeViewRepeaterStrategy
                },
                // Prevent nested tables from seeing this table's StickyPositioningListener.
                {
                    provide: STICKY_POSITIONING_LISTENER,
                    useValue: null
                }]), i0.ɵɵInheritDefinitionFeature],
        ngContentSelectors: _c1,
        decls: 5,
        vars: 2,
        consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
        template: function MatTable_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c0);
                i0.ɵɵprojection(0);
                i0.ɵɵprojection(1, 1);
                i0.ɵɵconditionalCreate(2, MatTable_Conditional_2_Template, 1, 0);
                i0.ɵɵconditionalCreate(3, MatTable_Conditional_3_Template, 7, 0)(4, MatTable_Conditional_4_Template, 4, 0);
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵconditional(ctx._isServer ? 2 : -1);
                i0.ɵɵadvance();
                i0.ɵɵconditional(ctx._isNativeHtmlTable ? 3 : 4);
            }
        },
        dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
        styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:var(--mat-table-header-container-height, 56px)}mat-row{min-height:var(--mat-table-row-item-container-height, 52px)}mat-footer-row{min-height:var(--mat-table-footer-container-height, 52px)}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-sys-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mdc-data-table__row:last-child>.mat-mdc-header-cell{border-bottom:none}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child>.mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}\n"],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTable, [{
            type: Component,
            args: [{
                    selector: "mat-table, table[mat-table]",
                    exportAs: "matTable",
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
      <tbody class="mdc-data-table__content" role="rowgroup">
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
                        "class": "mat-mdc-table mdc-data-table__table",
                        "[class.mdc-table-fixed-layout]": "fixedLayout"
                    },
                    providers: [{
                            provide: CdkTable,
                            useExisting: MatTable
                        }, {
                            provide: CDK_TABLE,
                            useExisting: MatTable
                        },
                        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
                        //  is only included in the build if used.
                        {
                            provide: _VIEW_REPEATER_STRATEGY,
                            useClass: _DisposeViewRepeaterStrategy
                        },
                        // Prevent nested tables from seeing this table's StickyPositioningListener.
                        {
                            provide: STICKY_POSITIONING_LISTENER,
                            useValue: null
                        }],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.Default,
                    imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
                    styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:var(--mat-table-header-container-height, 56px)}mat-row{min-height:var(--mat-table-row-item-container-height, 52px)}mat-footer-row{min-height:var(--mat-table-footer-container-height, 52px)}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-sys-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mdc-data-table__row:last-child>.mat-mdc-header-cell{border-bottom:none}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child>.mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}\n"]
                }]
        }], null, null);
})();
var MatCellDef = class _MatCellDef extends CdkCellDef {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatCellDef_BaseFactory;
        return function MatCellDef_Factory(__ngFactoryType__) {
            return (ɵMatCellDef_BaseFactory || (ɵMatCellDef_BaseFactory = i0.ɵɵgetInheritedFactory(_MatCellDef)))(__ngFactoryType__ || _MatCellDef);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCellDef,
        selectors: [["", "matCellDef", ""]],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkCellDef,
                    useExisting: _MatCellDef
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCellDef, [{
            type: Directive,
            args: [{
                    selector: "[matCellDef]",
                    providers: [{
                            provide: CdkCellDef,
                            useExisting: MatCellDef
                        }]
                }]
        }], null, null);
})();
var MatHeaderCellDef = class _MatHeaderCellDef extends CdkHeaderCellDef {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatHeaderCellDef_BaseFactory;
        return function MatHeaderCellDef_Factory(__ngFactoryType__) {
            return (ɵMatHeaderCellDef_BaseFactory || (ɵMatHeaderCellDef_BaseFactory = i0.ɵɵgetInheritedFactory(_MatHeaderCellDef)))(__ngFactoryType__ || _MatHeaderCellDef);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatHeaderCellDef,
        selectors: [["", "matHeaderCellDef", ""]],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkHeaderCellDef,
                    useExisting: _MatHeaderCellDef
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatHeaderCellDef, [{
            type: Directive,
            args: [{
                    selector: "[matHeaderCellDef]",
                    providers: [{
                            provide: CdkHeaderCellDef,
                            useExisting: MatHeaderCellDef
                        }]
                }]
        }], null, null);
})();
var MatFooterCellDef = class _MatFooterCellDef extends CdkFooterCellDef {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatFooterCellDef_BaseFactory;
        return function MatFooterCellDef_Factory(__ngFactoryType__) {
            return (ɵMatFooterCellDef_BaseFactory || (ɵMatFooterCellDef_BaseFactory = i0.ɵɵgetInheritedFactory(_MatFooterCellDef)))(__ngFactoryType__ || _MatFooterCellDef);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatFooterCellDef,
        selectors: [["", "matFooterCellDef", ""]],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkFooterCellDef,
                    useExisting: _MatFooterCellDef
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatFooterCellDef, [{
            type: Directive,
            args: [{
                    selector: "[matFooterCellDef]",
                    providers: [{
                            provide: CdkFooterCellDef,
                            useExisting: MatFooterCellDef
                        }]
                }]
        }], null, null);
})();
var MatColumnDef = class _MatColumnDef extends CdkColumnDef {
    /** Unique name for this column. */
    get name() {
        return this._name;
    }
    set name(name) {
        this._setNameInput(name);
    }
    /**
     * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
     * In the future, this will only add "mat-column-" and columnCssClassName
     * will change from type string[] to string.
     * @docs-private
     */
    _updateColumnCssClassName() {
        super._updateColumnCssClassName();
        this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
    }
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatColumnDef_BaseFactory;
        return function MatColumnDef_Factory(__ngFactoryType__) {
            return (ɵMatColumnDef_BaseFactory || (ɵMatColumnDef_BaseFactory = i0.ɵɵgetInheritedFactory(_MatColumnDef)))(__ngFactoryType__ || _MatColumnDef);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatColumnDef,
        selectors: [["", "matColumnDef", ""]],
        inputs: {
            name: [0, "matColumnDef", "name"]
        },
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkColumnDef,
                    useExisting: _MatColumnDef
                }, {
                    provide: "MAT_SORT_HEADER_COLUMN_DEF",
                    useExisting: _MatColumnDef
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatColumnDef, [{
            type: Directive,
            args: [{
                    selector: "[matColumnDef]",
                    providers: [{
                            provide: CdkColumnDef,
                            useExisting: MatColumnDef
                        }, {
                            provide: "MAT_SORT_HEADER_COLUMN_DEF",
                            useExisting: MatColumnDef
                        }]
                }]
        }], null, {
        name: [{
                type: Input,
                args: ["matColumnDef"]
            }]
    });
})();
var MatHeaderCell = class _MatHeaderCell extends CdkHeaderCell {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatHeaderCell_BaseFactory;
        return function MatHeaderCell_Factory(__ngFactoryType__) {
            return (ɵMatHeaderCell_BaseFactory || (ɵMatHeaderCell_BaseFactory = i0.ɵɵgetInheritedFactory(_MatHeaderCell)))(__ngFactoryType__ || _MatHeaderCell);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatHeaderCell,
        selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
        hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatHeaderCell, [{
            type: Directive,
            args: [{
                    selector: "mat-header-cell, th[mat-header-cell]",
                    host: {
                        "class": "mat-mdc-header-cell mdc-data-table__header-cell",
                        "role": "columnheader"
                    }
                }]
        }], null, null);
})();
var MatFooterCell = class _MatFooterCell extends CdkFooterCell {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatFooterCell_BaseFactory;
        return function MatFooterCell_Factory(__ngFactoryType__) {
            return (ɵMatFooterCell_BaseFactory || (ɵMatFooterCell_BaseFactory = i0.ɵɵgetInheritedFactory(_MatFooterCell)))(__ngFactoryType__ || _MatFooterCell);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatFooterCell,
        selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
        hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatFooterCell, [{
            type: Directive,
            args: [{
                    selector: "mat-footer-cell, td[mat-footer-cell]",
                    host: {
                        "class": "mat-mdc-footer-cell mdc-data-table__cell"
                    }
                }]
        }], null, null);
})();
var MatCell = class _MatCell extends CdkCell {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatCell_BaseFactory;
        return function MatCell_Factory(__ngFactoryType__) {
            return (ɵMatCell_BaseFactory || (ɵMatCell_BaseFactory = i0.ɵɵgetInheritedFactory(_MatCell)))(__ngFactoryType__ || _MatCell);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatCell,
        selectors: [["mat-cell"], ["td", "mat-cell", ""]],
        hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatCell, [{
            type: Directive,
            args: [{
                    selector: "mat-cell, td[mat-cell]",
                    host: {
                        "class": "mat-mdc-cell mdc-data-table__cell"
                    }
                }]
        }], null, null);
})();
var ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var MatHeaderRowDef = class _MatHeaderRowDef extends CdkHeaderRowDef {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatHeaderRowDef_BaseFactory;
        return function MatHeaderRowDef_Factory(__ngFactoryType__) {
            return (ɵMatHeaderRowDef_BaseFactory || (ɵMatHeaderRowDef_BaseFactory = i0.ɵɵgetInheritedFactory(_MatHeaderRowDef)))(__ngFactoryType__ || _MatHeaderRowDef);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatHeaderRowDef,
        selectors: [["", "matHeaderRowDef", ""]],
        inputs: {
            columns: [0, "matHeaderRowDef", "columns"],
            sticky: [2, "matHeaderRowDefSticky", "sticky", booleanAttribute]
        },
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkHeaderRowDef,
                    useExisting: _MatHeaderRowDef
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatHeaderRowDef, [{
            type: Directive,
            args: [{
                    selector: "[matHeaderRowDef]",
                    providers: [{
                            provide: CdkHeaderRowDef,
                            useExisting: MatHeaderRowDef
                        }],
                    inputs: [{
                            name: "columns",
                            alias: "matHeaderRowDef"
                        }, {
                            name: "sticky",
                            alias: "matHeaderRowDefSticky",
                            transform: booleanAttribute
                        }]
                }]
        }], null, null);
})();
var MatFooterRowDef = class _MatFooterRowDef extends CdkFooterRowDef {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatFooterRowDef_BaseFactory;
        return function MatFooterRowDef_Factory(__ngFactoryType__) {
            return (ɵMatFooterRowDef_BaseFactory || (ɵMatFooterRowDef_BaseFactory = i0.ɵɵgetInheritedFactory(_MatFooterRowDef)))(__ngFactoryType__ || _MatFooterRowDef);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatFooterRowDef,
        selectors: [["", "matFooterRowDef", ""]],
        inputs: {
            columns: [0, "matFooterRowDef", "columns"],
            sticky: [2, "matFooterRowDefSticky", "sticky", booleanAttribute]
        },
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkFooterRowDef,
                    useExisting: _MatFooterRowDef
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatFooterRowDef, [{
            type: Directive,
            args: [{
                    selector: "[matFooterRowDef]",
                    providers: [{
                            provide: CdkFooterRowDef,
                            useExisting: MatFooterRowDef
                        }],
                    inputs: [{
                            name: "columns",
                            alias: "matFooterRowDef"
                        }, {
                            name: "sticky",
                            alias: "matFooterRowDefSticky",
                            transform: booleanAttribute
                        }]
                }]
        }], null, null);
})();
var MatRowDef = class _MatRowDef extends CdkRowDef {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatRowDef_BaseFactory;
        return function MatRowDef_Factory(__ngFactoryType__) {
            return (ɵMatRowDef_BaseFactory || (ɵMatRowDef_BaseFactory = i0.ɵɵgetInheritedFactory(_MatRowDef)))(__ngFactoryType__ || _MatRowDef);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatRowDef,
        selectors: [["", "matRowDef", ""]],
        inputs: {
            columns: [0, "matRowDefColumns", "columns"],
            when: [0, "matRowDefWhen", "when"]
        },
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkRowDef,
                    useExisting: _MatRowDef
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatRowDef, [{
            type: Directive,
            args: [{
                    selector: "[matRowDef]",
                    providers: [{
                            provide: CdkRowDef,
                            useExisting: MatRowDef
                        }],
                    inputs: [{
                            name: "columns",
                            alias: "matRowDefColumns"
                        }, {
                            name: "when",
                            alias: "matRowDefWhen"
                        }]
                }]
        }], null, null);
})();
var MatHeaderRow = class _MatHeaderRow extends CdkHeaderRow {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatHeaderRow_BaseFactory;
        return function MatHeaderRow_Factory(__ngFactoryType__) {
            return (ɵMatHeaderRow_BaseFactory || (ɵMatHeaderRow_BaseFactory = i0.ɵɵgetInheritedFactory(_MatHeaderRow)))(__ngFactoryType__ || _MatHeaderRow);
        };
    })();
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatHeaderRow,
        selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
        exportAs: ["matHeaderRow"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkHeaderRow,
                    useExisting: _MatHeaderRow
                }]), i0.ɵɵInheritDefinitionFeature],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatHeaderRow_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainer(0, 0);
            }
        },
        dependencies: [CdkCellOutlet],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatHeaderRow, [{
            type: Component,
            args: [{
                    selector: "mat-header-row, tr[mat-header-row]",
                    template: ROW_TEMPLATE,
                    host: {
                        "class": "mat-mdc-header-row mdc-data-table__header-row",
                        "role": "row"
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None,
                    exportAs: "matHeaderRow",
                    providers: [{
                            provide: CdkHeaderRow,
                            useExisting: MatHeaderRow
                        }],
                    imports: [CdkCellOutlet]
                }]
        }], null, null);
})();
var MatFooterRow = class _MatFooterRow extends CdkFooterRow {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatFooterRow_BaseFactory;
        return function MatFooterRow_Factory(__ngFactoryType__) {
            return (ɵMatFooterRow_BaseFactory || (ɵMatFooterRow_BaseFactory = i0.ɵɵgetInheritedFactory(_MatFooterRow)))(__ngFactoryType__ || _MatFooterRow);
        };
    })();
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatFooterRow,
        selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
        exportAs: ["matFooterRow"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkFooterRow,
                    useExisting: _MatFooterRow
                }]), i0.ɵɵInheritDefinitionFeature],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatFooterRow_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainer(0, 0);
            }
        },
        dependencies: [CdkCellOutlet],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatFooterRow, [{
            type: Component,
            args: [{
                    selector: "mat-footer-row, tr[mat-footer-row]",
                    template: ROW_TEMPLATE,
                    host: {
                        "class": "mat-mdc-footer-row mdc-data-table__row",
                        "role": "row"
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None,
                    exportAs: "matFooterRow",
                    providers: [{
                            provide: CdkFooterRow,
                            useExisting: MatFooterRow
                        }],
                    imports: [CdkCellOutlet]
                }]
        }], null, null);
})();
var MatRow = class _MatRow extends CdkRow {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatRow_BaseFactory;
        return function MatRow_Factory(__ngFactoryType__) {
            return (ɵMatRow_BaseFactory || (ɵMatRow_BaseFactory = i0.ɵɵgetInheritedFactory(_MatRow)))(__ngFactoryType__ || _MatRow);
        };
    })();
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatRow,
        selectors: [["mat-row"], ["tr", "mat-row", ""]],
        hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
        exportAs: ["matRow"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkRow,
                    useExisting: _MatRow
                }]), i0.ɵɵInheritDefinitionFeature],
        decls: 1,
        vars: 0,
        consts: [["cdkCellOutlet", ""]],
        template: function MatRow_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainer(0, 0);
            }
        },
        dependencies: [CdkCellOutlet],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatRow, [{
            type: Component,
            args: [{
                    selector: "mat-row, tr[mat-row]",
                    template: ROW_TEMPLATE,
                    host: {
                        "class": "mat-mdc-row mdc-data-table__row",
                        "role": "row"
                    },
                    // See note on CdkTable for explanation on why this uses the default change detection strategy.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    encapsulation: ViewEncapsulation.None,
                    exportAs: "matRow",
                    providers: [{
                            provide: CdkRow,
                            useExisting: MatRow
                        }],
                    imports: [CdkCellOutlet]
                }]
        }], null, null);
})();
var MatNoDataRow = class _MatNoDataRow extends CdkNoDataRow {
    _cellSelector = "td, mat-cell, [mat-cell], .mat-cell";
    constructor() {
        super();
        this._contentClassNames.push("mat-mdc-no-data-row", "mat-mdc-row", "mdc-data-table__row");
        this._cellClassNames.push("mat-mdc-cell", "mdc-data-table__cell", "mat-no-data-cell");
    }
    static ɵfac = function MatNoDataRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatNoDataRow)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatNoDataRow,
        selectors: [["ng-template", "matNoDataRow", ""]],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkNoDataRow,
                    useExisting: _MatNoDataRow
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatNoDataRow, [{
            type: Directive,
            args: [{
                    selector: "ng-template[matNoDataRow]",
                    providers: [{
                            provide: CdkNoDataRow,
                            useExisting: MatNoDataRow
                        }]
                }]
        }], () => [], null);
})();
var MatTextColumn = class _MatTextColumn extends CdkTextColumn {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatTextColumn_BaseFactory;
        return function MatTextColumn_Factory(__ngFactoryType__) {
            return (ɵMatTextColumn_BaseFactory || (ɵMatTextColumn_BaseFactory = i0.ɵɵgetInheritedFactory(_MatTextColumn)))(__ngFactoryType__ || _MatTextColumn);
        };
    })();
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatTextColumn,
        selectors: [["mat-text-column"]],
        features: [i0.ɵɵInheritDefinitionFeature],
        decls: 3,
        vars: 0,
        consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
        template: function MatTextColumn_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainerStart(0, 0);
                i0.ɵɵtemplate(1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
                i0.ɵɵelementContainerEnd();
            }
        },
        dependencies: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTextColumn, [{
            type: Component,
            args: [{
                    selector: "mat-text-column",
                    template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
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
                    imports: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell]
                }]
        }], null, null);
})();
var EXPORTED_DECLARATIONS = [
    // Table
    MatTable, MatRecycleRows,
    // Template defs
    MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef,
    // Cell directives
    MatHeaderCell, MatCell, MatFooterCell,
    // Row directives
    MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn
];
var MatTableModule = class _MatTableModule {
    static ɵfac = function MatTableModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatTableModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatTableModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [CdkTableModule, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTableModule, [{
            type: NgModule,
            args: [{
                    imports: [CdkTableModule, ...EXPORTED_DECLARATIONS],
                    exports: [BidiModule, EXPORTED_DECLARATIONS]
                }]
        }], null, null);
})();
var MAX_SAFE_INTEGER = 9007199254740991;
var MatTableDataSource = class extends DataSource {
    /** Stream that emits when a new data array is set on the data source. */
    _data;
    /** Stream emitting render data to the table (depends on ordered data changes). */
    _renderData = new BehaviorSubject([]);
    /** Stream that emits when a new filter string is set on the data source. */
    _filter = new BehaviorSubject("");
    /** Used to react to internal changes of the paginator that are made by the data source itself. */
    _internalPageChanges = new Subject();
    /**
     * Subscription to the changes that should trigger an update to the table's rendered rows, such
     * as filtering, sorting, pagination, or base data changes.
     */
    _renderChangesSubscription = null;
    /**
     * The filtered set of data that has been matched by the filter string, or all the data if there
     * is no filter. Useful for knowing the set of data the table represents.
     * For example, a 'selectAll()' function would likely want to select the set of filtered data
     * shown to the user rather than all the data.
     */
    filteredData;
    /** Array of data that should be rendered by the table, where each object represents one row. */
    get data() {
        return this._data.value;
    }
    set data(data) {
        data = Array.isArray(data) ? data : [];
        this._data.next(data);
        if (!this._renderChangesSubscription) {
            this._filterData(data);
        }
    }
    /**
     * Filter term that should be used to filter out objects from the data array. To override how
     * data objects match to this filter string, provide a custom function for filterPredicate.
     */
    get filter() {
        return this._filter.value;
    }
    set filter(filter) {
        this._filter.next(filter);
        if (!this._renderChangesSubscription) {
            this._filterData(this.data);
        }
    }
    /**
     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
     * emitted by the MatSort will trigger an update to the table's rendered data.
     */
    get sort() {
        return this._sort;
    }
    set sort(sort) {
        this._sort = sort;
        this._updateChangeSubscription();
    }
    _sort;
    /**
     * Instance of the paginator component used by the table to control what page of the data is
     * displayed. Page changes emitted by the paginator will trigger an update to the
     * table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
     * initialized before assigning it to this data source.
     */
    get paginator() {
        return this._paginator;
    }
    set paginator(paginator) {
        this._paginator = paginator;
        this._updateChangeSubscription();
    }
    _paginator;
    /**
     * Data accessor function that is used for accessing data properties for sorting through
     * the default sortData function.
     * This default function assumes that the sort header IDs (which defaults to the column name)
     * matches the data's properties (e.g. column Xyz represents data['Xyz']).
     * May be set to a custom function for different behavior.
     * @param data Data object that is being accessed.
     * @param sortHeaderId The name of the column that represents the data.
     */
    sortingDataAccessor = (data, sortHeaderId) => {
        const value = data[sortHeaderId];
        if (_isNumberValue(value)) {
            const numberValue = Number(value);
            return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
        }
        return value;
    };
    /**
     * Gets a sorted copy of the data array based on the state of the MatSort. Called
     * after changes are made to the filtered data or when sort changes are emitted from MatSort.
     * By default, the function retrieves the active sort and its direction and compares data
     * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
     * of data ordering.
     * @param data The array of data that should be sorted.
     * @param sort The connected MatSort that holds the current sort state.
     */
    sortData = (data, sort) => {
        const active = sort.active;
        const direction = sort.direction;
        if (!active || direction == "") {
            return data;
        }
        return data.sort((a, b) => {
            let valueA = this.sortingDataAccessor(a, active);
            let valueB = this.sortingDataAccessor(b, active);
            const valueAType = typeof valueA;
            const valueBType = typeof valueB;
            if (valueAType !== valueBType) {
                if (valueAType === "number") {
                    valueA += "";
                }
                if (valueBType === "number") {
                    valueB += "";
                }
            }
            let comparatorResult = 0;
            if (valueA != null && valueB != null) {
                if (valueA > valueB) {
                    comparatorResult = 1;
                }
                else if (valueA < valueB) {
                    comparatorResult = -1;
                }
            }
            else if (valueA != null) {
                comparatorResult = 1;
            }
            else if (valueB != null) {
                comparatorResult = -1;
            }
            return comparatorResult * (direction == "asc" ? 1 : -1);
        });
    };
    /**
     * Checks if a data object matches the data source's filter string. By default, each data object
     * is converted to a string of its properties and returns true if the filter has
     * at least one occurrence in that string. By default, the filter string has its whitespace
     * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
     * filter matching.
     * @param data Data object used to check against the filter.
     * @param filter Filter string that has been set on the data source.
     * @returns Whether the filter matches against the data
     */
    filterPredicate = (data, filter) => {
        const transformedFilter = filter.trim().toLowerCase();
        return Object.values(data).some(value => `${value}`.toLowerCase().includes(transformedFilter));
    };
    constructor(initialData = []) {
        super();
        this._data = new BehaviorSubject(initialData);
        this._updateChangeSubscription();
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */
    _updateChangeSubscription() {
        const sortChange = this._sort ? merge(this._sort.sortChange, this._sort.initialized) : of(null);
        const pageChange = this._paginator ? merge(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : of(null);
        const dataStream = this._data;
        const filteredData = combineLatest([dataStream, this._filter]).pipe(map(([data]) => this._filterData(data)));
        const orderedData = combineLatest([filteredData, sortChange]).pipe(map(([data]) => this._orderData(data)));
        const paginatedData = combineLatest([orderedData, pageChange]).pipe(map(([data]) => this._pageData(data)));
        this._renderChangesSubscription?.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
    }
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterPredicate function. If no filter is set, returns the data array
     * as provided.
     */
    _filterData(data) {
        this.filteredData = this.filter == null || this.filter === "" ? data : data.filter(obj => this.filterPredicate(obj, this.filter));
        if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
        }
        return this.filteredData;
    }
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     */
    _orderData(data) {
        if (!this.sort) {
            return data;
        }
        return this.sortData(data.slice(), this.sort);
    }
    /**
     * Returns a paged slice of the provided data array according to the provided paginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     */
    _pageData(data) {
        if (!this.paginator) {
            return data;
        }
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice(startIndex, startIndex + this.paginator.pageSize);
    }
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     */
    _updatePaginator(filteredDataLength) {
        Promise.resolve().then(() => {
            const paginator = this.paginator;
            if (!paginator) {
                return;
            }
            paginator.length = filteredDataLength;
            if (paginator.pageIndex > 0) {
                const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
                if (newPageIndex !== paginator.pageIndex) {
                    paginator.pageIndex = newPageIndex;
                    this._internalPageChanges.next();
                }
            }
        });
    }
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * @docs-private
     */
    connect() {
        if (!this._renderChangesSubscription) {
            this._updateChangeSubscription();
        }
        return this._renderData;
    }
    /**
     * Used by the MatTable. Called when it disconnects from the data source.
     * @docs-private
     */
    disconnect() {
        this._renderChangesSubscription?.unsubscribe();
        this._renderChangesSubscription = null;
    }
};
export { MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRecycleRows, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn };
