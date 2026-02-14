import { MatLine, MatLineModule, setLines } from "@nf-internal/chunk-MI5T5PM2";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/public-api.mjs
var TileCoordinator = class {
    /** Tracking array (see class description). */
    tracker;
    /** Index at which the search for the next gap will start. */
    columnIndex = 0;
    /** The current row index. */
    rowIndex = 0;
    /** Gets the total number of rows occupied by tiles */
    get rowCount() {
        return this.rowIndex + 1;
    }
    /**
     * Gets the total span of rows occupied by tiles.
     * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
     */
    get rowspan() {
        const lastRowMax = Math.max(...this.tracker);
        return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
    }
    /** The computed (row, col) position of each tile (the output). */
    positions;
    /**
     * Updates the tile positions.
     * @param numColumns Amount of columns in the grid.
     * @param tiles Tiles to be positioned.
     */
    update(numColumns, tiles) {
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.tracker = new Array(numColumns);
        this.tracker.fill(0, 0, this.tracker.length);
        this.positions = tiles.map(tile => this._trackTile(tile));
    }
    /** Calculates the row and col position of a tile. */
    _trackTile(tile) {
        const gapStartIndex = this._findMatchingGap(tile.colspan);
        this._markTilePosition(gapStartIndex, tile);
        this.columnIndex = gapStartIndex + tile.colspan;
        return new TilePosition(this.rowIndex, gapStartIndex);
    }
    /** Finds the next available space large enough to fit the tile. */
    _findMatchingGap(tileCols) {
        if (tileCols > this.tracker.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than grid with cols="${this.tracker.length}".`);
        }
        let gapStartIndex = -1;
        let gapEndIndex = -1;
        do {
            if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            if (gapStartIndex == -1) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            this.columnIndex = gapStartIndex + 1;
        } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0);
        return Math.max(gapStartIndex, 0);
    }
    /** Move "down" to the next row. */
    _nextRow() {
        this.columnIndex = 0;
        this.rowIndex++;
        for (let i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
        }
    }
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     */
    _findGapEndIndex(gapStartIndex) {
        for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
                return i;
            }
        }
        return this.tracker.length;
    }
    /** Update the tile tracker to account for the given tile in the given space. */
    _markTilePosition(start, tile) {
        for (let i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
        }
    }
};
var TilePosition = class {
    row;
    col;
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
};
var ɵTileCoordinator = TileCoordinator;
// node_modules/@angular/material/fesm2022/grid-list.mjs
import { Directionality, BidiModule } from "@angular/cdk/bidi";
import * as i0 from "@angular/core";
import { InjectionToken, inject, ElementRef, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ContentChildren, Directive, NgModule } from "@angular/core";
import { coerceNumberProperty } from "@angular/cdk/coercion";
import "rxjs/operators";
var _c0 = ["*"];
var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
var _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n";
var MAT_GRID_LIST = new InjectionToken("MAT_GRID_LIST");
var MatGridTile = class _MatGridTile {
    _element = inject(ElementRef);
    _gridList = inject(MAT_GRID_LIST, {
        optional: true
    });
    _rowspan = 1;
    _colspan = 1;
    constructor() { }
    /** Amount of rows that the grid tile takes up. */
    get rowspan() {
        return this._rowspan;
    }
    set rowspan(value) {
        this._rowspan = Math.round(coerceNumberProperty(value));
    }
    /** Amount of columns that the grid tile takes up. */
    get colspan() {
        return this._colspan;
    }
    set colspan(value) {
        this._colspan = Math.round(coerceNumberProperty(value));
    }
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    _setStyle(property, value) {
        this._element.nativeElement.style[property] = value;
    }
    static ɵfac = function MatGridTile_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatGridTile)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatGridTile,
        selectors: [["mat-grid-tile"]],
        hostAttrs: [1, "mat-grid-tile"],
        hostVars: 2,
        hostBindings: function MatGridTile_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("rowspan", ctx.rowspan)("colspan", ctx.colspan);
            }
        },
        inputs: {
            rowspan: "rowspan",
            colspan: "colspan"
        },
        exportAs: ["matGridTile"],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "mat-grid-tile-content"]],
        template: function MatGridTile_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵdomElementStart(0, "div", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵdomElementEnd();
            }
        },
        styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatGridTile, [{
            type: Component,
            args: [{
                    selector: "mat-grid-tile",
                    exportAs: "matGridTile",
                    host: {
                        "class": "mat-grid-tile",
                        // Ensures that the "rowspan" and "colspan" input value is reflected in
                        // the DOM. This is needed for the grid-tile harness.
                        "[attr.rowspan]": "rowspan",
                        "[attr.colspan]": "colspan"
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<div class="mat-grid-tile-content">\n  <ng-content></ng-content>\n</div>\n',
                    styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"]
                }]
        }], () => [], {
        rowspan: [{
                type: Input
            }],
        colspan: [{
                type: Input
            }]
    });
})();
var MatGridTileText = class _MatGridTileText {
    _element = inject(ElementRef);
    _lines;
    constructor() { }
    ngAfterContentInit() {
        setLines(this._lines, this._element);
    }
    static ɵfac = function MatGridTileText_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatGridTileText)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatGridTileText,
        selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
        contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, MatLine, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._lines = _t);
            }
        },
        ngContentSelectors: _c2,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-grid-list-text"]],
        template: function MatGridTileText_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c1);
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
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatGridTileText, [{
            type: Component,
            args: [{
                    selector: "mat-grid-tile-header, mat-grid-tile-footer",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: '<ng-content select="[mat-grid-avatar], [matGridAvatar]"></ng-content>\n<div class="mat-grid-list-text"><ng-content select="[mat-line], [matLine]"></ng-content></div>\n<ng-content></ng-content>\n'
                }]
        }], () => [], {
        _lines: [{
                type: ContentChildren,
                args: [MatLine, {
                        descendants: true
                    }]
            }]
    });
})();
var MatGridAvatarCssMatStyler = class _MatGridAvatarCssMatStyler {
    static ɵfac = function MatGridAvatarCssMatStyler_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatGridAvatarCssMatStyler)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatGridAvatarCssMatStyler,
        selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
        hostAttrs: [1, "mat-grid-avatar"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatGridAvatarCssMatStyler, [{
            type: Directive,
            args: [{
                    selector: "[mat-grid-avatar], [matGridAvatar]",
                    host: {
                        "class": "mat-grid-avatar"
                    }
                }]
        }], null, null);
})();
var MatGridTileHeaderCssMatStyler = class _MatGridTileHeaderCssMatStyler {
    static ɵfac = function MatGridTileHeaderCssMatStyler_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatGridTileHeaderCssMatStyler)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatGridTileHeaderCssMatStyler,
        selectors: [["mat-grid-tile-header"]],
        hostAttrs: [1, "mat-grid-tile-header"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatGridTileHeaderCssMatStyler, [{
            type: Directive,
            args: [{
                    selector: "mat-grid-tile-header",
                    host: {
                        "class": "mat-grid-tile-header"
                    }
                }]
        }], null, null);
})();
var MatGridTileFooterCssMatStyler = class _MatGridTileFooterCssMatStyler {
    static ɵfac = function MatGridTileFooterCssMatStyler_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatGridTileFooterCssMatStyler)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatGridTileFooterCssMatStyler,
        selectors: [["mat-grid-tile-footer"]],
        hostAttrs: [1, "mat-grid-tile-footer"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatGridTileFooterCssMatStyler, [{
            type: Directive,
            args: [{
                    selector: "mat-grid-tile-footer",
                    host: {
                        "class": "mat-grid-tile-footer"
                    }
                }]
        }], null, null);
})();
var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
var TileStyler = class {
    _gutterSize;
    _rows = 0;
    _rowspan = 0;
    _cols;
    _direction;
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param gutterSize Size of the grid's gutter.
     * @param tracker Instance of the TileCoordinator.
     * @param cols Amount of columns in the grid.
     * @param direction Layout direction of the grid.
     */
    init(gutterSize, tracker, cols, direction) {
        this._gutterSize = normalizeUnits(gutterSize);
        this._rows = tracker.rowCount;
        this._rowspan = tracker.rowspan;
        this._cols = cols;
        this._direction = direction;
    }
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    getBaseTileSize(sizePercent, gutterFraction) {
        return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
    }
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    getTilePosition(baseSize, offset) {
        return offset === 0 ? "0" : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
    }
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    getTileSize(baseSize, span) {
        return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
    }
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param tile Tile to which to apply the styling.
     * @param rowIndex Index of the tile's row.
     * @param colIndex Index of the tile's column.
     */
    setStyle(tile, rowIndex, colIndex) {
        let percentWidthPerTile = 100 / this._cols;
        let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
        this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    }
    /** Sets the horizontal placement of the tile in the list. */
    setColStyles(tile, colIndex, percentWidth, gutterWidth) {
        let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
        let side = this._direction === "rtl" ? "right" : "left";
        tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
        tile._setStyle("width", calc(this.getTileSize(baseTileWidth, tile.colspan)));
    }
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     */
    getGutterSpan() {
        return `${this._gutterSize} * (${this._rowspan} - 1)`;
    }
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param tileHeight Height of the tile.
     */
    getTileSpan(tileHeight) {
        return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
    }
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * @docs-private
     */
    getComputedHeight() {
        return null;
    }
};
var FixedTileStyler = class extends TileStyler {
    fixedRowHeight;
    constructor(fixedRowHeight) {
        super();
        this.fixedRowHeight = fixedRowHeight;
    }
    init(gutterSize, tracker, cols, direction) {
        super.init(gutterSize, tracker, cols, direction);
        this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
        if (!cssCalcAllowedValue.test(this.fixedRowHeight) && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
        }
    }
    setRowStyles(tile, rowIndex) {
        tile._setStyle("top", this.getTilePosition(this.fixedRowHeight, rowIndex));
        tile._setStyle("height", calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return ["height", calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)];
    }
    reset(list) {
        list._setListStyle(["height", null]);
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle("top", null);
                tile._setStyle("height", null);
            });
        }
    }
};
var RatioTileStyler = class extends TileStyler {
    /** Ratio width:height given by user to determine row height. */
    rowHeightRatio;
    baseTileHeight;
    constructor(value) {
        super();
        this._parseRatio(value);
    }
    setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
        let percentHeightPerTile = percentWidth / this.rowHeightRatio;
        this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
        tile._setStyle("marginTop", this.getTilePosition(this.baseTileHeight, rowIndex));
        tile._setStyle("paddingTop", calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return ["paddingBottom", calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)];
    }
    reset(list) {
        list._setListStyle(["paddingBottom", null]);
        list._tiles.forEach(tile => {
            tile._setStyle("marginTop", null);
            tile._setStyle("paddingTop", null);
        });
    }
    _parseRatio(value) {
        const ratioParts = value.split(":");
        if (ratioParts.length !== 2 && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
        }
        this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
    }
};
var FitTileStyler = class extends TileStyler {
    setRowStyles(tile, rowIndex) {
        let percentHeightPerTile = 100 / this._rowspan;
        let gutterHeightPerTile = (this._rows - 1) / this._rows;
        let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
        tile._setStyle("top", this.getTilePosition(baseTileHeight, rowIndex));
        tile._setStyle("height", calc(this.getTileSize(baseTileHeight, tile.rowspan)));
    }
    reset(list) {
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle("top", null);
                tile._setStyle("height", null);
            });
        }
    }
};
function calc(exp) {
    return `calc(${exp})`;
}
function normalizeUnits(value) {
    return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}
var MAT_FIT_MODE = "fit";
var MatGridList = class _MatGridList {
    _element = inject(ElementRef);
    _dir = inject(Directionality, {
        optional: true
    });
    /** Number of columns being rendered. */
    _cols;
    /** Used for determining the position of each tile in the grid. */
    _tileCoordinator;
    /**
     * Row height value passed in by user. This can be one of three types:
     * - Number value (ex: "100px"):  sets a fixed row height to that value
     * - Ratio value (ex: "4:3"): sets the row height based on width:height ratio
     * - "Fit" mode (ex: "fit"): sets the row height to total height divided by number of rows
     */
    _rowHeight;
    /** The amount of space between tiles. This will be something like '5px' or '2em'. */
    _gutter = "1px";
    /** Sets position and size styles for a tile */
    _tileStyler;
    /** Query list of tiles that are being rendered. */
    _tiles;
    constructor() { }
    /** Amount of columns in the grid list. */
    get cols() {
        return this._cols;
    }
    set cols(value) {
        this._cols = Math.max(1, Math.round(coerceNumberProperty(value)));
    }
    /** Size of the grid list's gutter in pixels. */
    get gutterSize() {
        return this._gutter;
    }
    set gutterSize(value) {
        this._gutter = `${value == null ? "" : value}`;
    }
    /** Set internal representation of row height from the user-provided value. */
    get rowHeight() {
        return this._rowHeight;
    }
    set rowHeight(value) {
        const newValue = `${value == null ? "" : value}`;
        if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;
            this._setTileStyler(this._rowHeight);
        }
    }
    ngOnInit() {
        this._checkCols();
        this._checkRowHeight();
    }
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    ngAfterContentChecked() {
        this._layoutTiles();
    }
    /** Throw a friendly error if cols property is missing */
    _checkCols() {
        if (!this.cols && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw Error(`mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">`);
        }
    }
    /** Default to equal width:height if rowHeight property is missing */
    _checkRowHeight() {
        if (!this._rowHeight) {
            this._setTileStyler("1:1");
        }
    }
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    _setTileStyler(rowHeight) {
        if (this._tileStyler) {
            this._tileStyler.reset(this);
        }
        if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
        }
        else if (rowHeight && rowHeight.indexOf(":") > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
        }
        else {
            this._tileStyler = new FixedTileStyler(rowHeight);
        }
    }
    /** Computes and applies the size and position for all children grid tiles. */
    _layoutTiles() {
        if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
        }
        const tracker = this._tileCoordinator;
        const tiles = this._tiles.filter(tile => !tile._gridList || tile._gridList === this);
        const direction = this._dir ? this._dir.value : "ltr";
        this._tileCoordinator.update(this.cols, tiles);
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        tiles.forEach((tile, index) => {
            const pos = tracker.positions[index];
            this._tileStyler.setStyle(tile, pos.row, pos.col);
        });
        this._setListStyle(this._tileStyler.getComputedHeight());
    }
    /** Sets style on the main grid-list element, given the style name and value. */
    _setListStyle(style) {
        if (style) {
            this._element.nativeElement.style[style[0]] = style[1];
        }
    }
    static ɵfac = function MatGridList_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatGridList)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatGridList,
        selectors: [["mat-grid-list"]],
        contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, MatGridTile, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._tiles = _t);
            }
        },
        hostAttrs: [1, "mat-grid-list"],
        hostVars: 1,
        hostBindings: function MatGridList_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("cols", ctx.cols);
            }
        },
        inputs: {
            cols: "cols",
            gutterSize: "gutterSize",
            rowHeight: "rowHeight"
        },
        exportAs: ["matGridList"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: MAT_GRID_LIST,
                    useExisting: _MatGridList
                }])],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        template: function MatGridList_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵdomElementStart(0, "div");
                i0.ɵɵprojection(1);
                i0.ɵɵdomElementEnd();
            }
        },
        styles: [_c3],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatGridList, [{
            type: Component,
            args: [{
                    selector: "mat-grid-list",
                    exportAs: "matGridList",
                    host: {
                        "class": "mat-grid-list",
                        // Ensures that the "cols" input value is reflected in the DOM. This is
                        // needed for the grid-list harness.
                        "[attr.cols]": "cols"
                    },
                    providers: [{
                            provide: MAT_GRID_LIST,
                            useExisting: MatGridList
                        }],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div>\n  <ng-content></ng-content>\n</div>",
                    styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"]
                }]
        }], () => [], {
        _tiles: [{
                type: ContentChildren,
                args: [MatGridTile, {
                        descendants: true
                    }]
            }],
        cols: [{
                type: Input
            }],
        gutterSize: [{
                type: Input
            }],
        rowHeight: [{
                type: Input
            }]
    });
})();
var MatGridListModule = class _MatGridListModule {
    static ɵfac = function MatGridListModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatGridListModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatGridListModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [MatLineModule, BidiModule, MatLineModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatGridListModule, [{
            type: NgModule,
            args: [{
                    imports: [MatLineModule, MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
                    exports: [BidiModule, MatGridList, MatGridTile, MatGridTileText, MatLineModule, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
                }]
        }], null, null);
})();
export { MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, MatLine, ɵTileCoordinator };
