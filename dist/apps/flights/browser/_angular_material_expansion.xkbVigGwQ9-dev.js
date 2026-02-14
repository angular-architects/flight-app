import { _StructuralStylesLoader } from "@nf-internal/chunk-LDHZVRH4";
import { _animationsDisabled } from "@nf-internal/chunk-C4FVYSZR";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/expansion.mjs
import * as i0 from "@angular/core";
import { InjectionToken, inject, TemplateRef, Directive, ViewContainerRef, DOCUMENT, NgZone, ElementRef, Renderer2, EventEmitter, booleanAttribute, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, ContentChild, ViewChild, ChangeDetectorRef, HostAttributeToken, numberAttribute, QueryList, ContentChildren, NgModule } from "@angular/core";
import { BidiModule } from "@angular/cdk/bidi";
import { CdkAccordionItem, CdkAccordion, CdkAccordionModule } from "@angular/cdk/accordion";
import { TemplatePortal, CdkPortalOutlet, PortalModule } from "@angular/cdk/portal";
import { _IdGenerator, FocusMonitor, FocusKeyManager } from "@angular/cdk/a11y";
import { startWith, filter, take } from "rxjs/operators";
import { ENTER, hasModifierKey, SPACE } from "@angular/cdk/keycodes";
import { Subject, Subscription, EMPTY, merge } from "rxjs";
import { UniqueSelectionDispatcher } from "@angular/cdk/collections";
import { _CdkPrivateStyleLoader } from "@angular/cdk/private";
import "@angular/cdk/layout";
var _c0 = ["body"];
var _c1 = ["bodyWrapper"];
var _c2 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
var _c3 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanel_ng_template_7_Template(rf, ctx) { }
var _c4 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
var _c5 = ["mat-panel-title", "mat-panel-description", "*"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵdomElementStart(0, "span", 1);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵdomElementStart(1, "svg", 2);
        i0.ɵɵdomElement(2, "path", 3);
        i0.ɵɵdomElementEnd()();
    }
}
var MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
var MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
var MatExpansionPanelContent = class _MatExpansionPanelContent {
    _template = inject(TemplateRef);
    _expansionPanel = inject(MAT_EXPANSION_PANEL, {
        optional: true
    });
    constructor() { }
    static ɵfac = function MatExpansionPanelContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatExpansionPanelContent)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatExpansionPanelContent,
        selectors: [["ng-template", "matExpansionPanelContent", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanelContent, [{
            type: Directive,
            args: [{
                    selector: "ng-template[matExpansionPanelContent]"
                }]
        }], () => [], null);
})();
var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
var MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
    _viewContainerRef = inject(ViewContainerRef);
    _animationsDisabled = _animationsDisabled();
    _document = inject(DOCUMENT);
    _ngZone = inject(NgZone);
    _elementRef = inject(ElementRef);
    _renderer = inject(Renderer2);
    _cleanupTransitionEnd;
    /** Whether the toggle indicator should be hidden. */
    get hideToggle() {
        return this._hideToggle || this.accordion && this.accordion.hideToggle;
    }
    set hideToggle(value) {
        this._hideToggle = value;
    }
    _hideToggle = false;
    /** The position of the expansion indicator. */
    get togglePosition() {
        return this._togglePosition || this.accordion && this.accordion.togglePosition;
    }
    set togglePosition(value) {
        this._togglePosition = value;
    }
    _togglePosition;
    /** An event emitted after the body's expansion animation happens. */
    afterExpand = new EventEmitter();
    /** An event emitted after the body's collapse animation happens. */
    afterCollapse = new EventEmitter();
    /** Stream that emits for changes in `@Input` properties. */
    _inputChanges = new Subject();
    /** Optionally defined accordion the expansion panel belongs to. */
    accordion = inject(MAT_ACCORDION, {
        optional: true,
        skipSelf: true
    });
    /** Content that will be rendered lazily. */
    _lazyContent;
    /** Element containing the panel's user-provided content. */
    _body;
    /** Element wrapping the panel body. */
    _bodyWrapper;
    /** Portal holding the user's content. */
    _portal;
    /** ID for the associated header element. Used for a11y labelling. */
    _headerId = inject(_IdGenerator).getId("mat-expansion-panel-header-");
    constructor() {
        super();
        const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
            optional: true
        });
        this._expansionDispatcher = inject(UniqueSelectionDispatcher);
        if (defaultOptions) {
            this.hideToggle = defaultOptions.hideToggle;
        }
    }
    /** Determines whether the expansion panel should have spacing between it and its siblings. */
    _hasSpacing() {
        if (this.accordion) {
            return this.expanded && this.accordion.displayMode === "default";
        }
        return false;
    }
    /** Gets the expanded state string. */
    _getExpandedState() {
        return this.expanded ? "expanded" : "collapsed";
    }
    /** Toggles the expanded state of the expansion panel. */
    toggle() {
        this.expanded = !this.expanded;
    }
    /** Sets the expanded state of the expansion panel to false. */
    close() {
        this.expanded = false;
    }
    /** Sets the expanded state of the expansion panel to true. */
    open() {
        this.expanded = true;
    }
    ngAfterContentInit() {
        if (this._lazyContent && this._lazyContent._expansionPanel === this) {
            this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
                this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
            });
        }
        this._setupAnimationEvents();
    }
    ngOnChanges(changes) {
        this._inputChanges.next(changes);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._cleanupTransitionEnd?.();
        this._inputChanges.complete();
    }
    /** Checks whether the expansion panel's content contains the currently-focused element. */
    _containsFocus() {
        if (this._body) {
            const focusedElement = this._document.activeElement;
            const bodyElement = this._body.nativeElement;
            return focusedElement === bodyElement || bodyElement.contains(focusedElement);
        }
        return false;
    }
    _transitionEndListener = ({ target, propertyName }) => {
        if (target === this._bodyWrapper?.nativeElement && propertyName === "grid-template-rows") {
            this._ngZone.run(() => {
                if (this.expanded) {
                    this.afterExpand.emit();
                }
                else {
                    this.afterCollapse.emit();
                }
            });
        }
    };
    _setupAnimationEvents() {
        this._ngZone.runOutsideAngular(() => {
            if (this._animationsDisabled) {
                this.opened.subscribe(() => this._ngZone.run(() => this.afterExpand.emit()));
                this.closed.subscribe(() => this._ngZone.run(() => this.afterCollapse.emit()));
            }
            else {
                setTimeout(() => {
                    const element = this._elementRef.nativeElement;
                    this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this._transitionEndListener);
                    element.classList.add("mat-expansion-panel-animations-enabled");
                }, 200);
            }
        });
    }
    static ɵfac = function MatExpansionPanel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatExpansionPanel)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatExpansionPanel,
        selectors: [["mat-expansion-panel"]],
        contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, MatExpansionPanelContent, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._lazyContent = _t.first);
            }
        },
        viewQuery: function MatExpansionPanel_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 5);
                i0.ɵɵviewQuery(_c1, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._body = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._bodyWrapper = _t.first);
            }
        },
        hostAttrs: [1, "mat-expansion-panel"],
        hostVars: 4,
        hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mat-expanded", ctx.expanded)("mat-expansion-panel-spacing", ctx._hasSpacing());
            }
        },
        inputs: {
            hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
            togglePosition: "togglePosition"
        },
        outputs: {
            afterExpand: "afterExpand",
            afterCollapse: "afterCollapse"
        },
        exportAs: ["matExpansionPanel"],
        features: [i0.ɵɵProvidersFeature([
                // Provide MatAccordion as undefined to prevent nested expansion panels from registering
                // to the same accordion.
                {
                    provide: MAT_ACCORDION,
                    useValue: void 0
                }, {
                    provide: MAT_EXPANSION_PANEL,
                    useExisting: _MatExpansionPanel
                }
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature],
        ngContentSelectors: _c3,
        decls: 9,
        vars: 4,
        consts: [["bodyWrapper", ""], ["body", ""], [1, "mat-expansion-panel-content-wrapper"], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
        template: function MatExpansionPanel_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c2);
                i0.ɵɵprojection(0);
                i0.ɵɵelementStart(1, "div", 2, 0)(3, "div", 3, 1)(5, "div", 4);
                i0.ɵɵprojection(6, 1);
                i0.ɵɵtemplate(7, MatExpansionPanel_ng_template_7_Template, 0, 0, "ng-template", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵprojection(8, 2);
                i0.ɵɵelementEnd()();
            }
            if (rf & 2) {
                i0.ɵɵadvance();
                i0.ɵɵattribute("inert", ctx.expanded ? null : "");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("id", ctx.id);
                i0.ɵɵattribute("aria-labelledby", ctx._headerId);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("cdkPortalOutlet", ctx._portal);
            }
        },
        dependencies: [CdkPortalOutlet],
        styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanel, [{
            type: Component,
            args: [{
                    selector: "mat-expansion-panel",
                    exportAs: "matExpansionPanel",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
                        // to the same accordion.
                        {
                            provide: MAT_ACCORDION,
                            useValue: void 0
                        }, {
                            provide: MAT_EXPANSION_PANEL,
                            useExisting: MatExpansionPanel
                        }
                    ],
                    host: {
                        "class": "mat-expansion-panel",
                        "[class.mat-expanded]": "expanded",
                        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
                    },
                    imports: [CdkPortalOutlet],
                    template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`,
                    styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
                }]
        }], () => [], {
        hideToggle: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        togglePosition: [{
                type: Input
            }],
        afterExpand: [{
                type: Output
            }],
        afterCollapse: [{
                type: Output
            }],
        _lazyContent: [{
                type: ContentChild,
                args: [MatExpansionPanelContent]
            }],
        _body: [{
                type: ViewChild,
                args: ["body"]
            }],
        _bodyWrapper: [{
                type: ViewChild,
                args: ["bodyWrapper"]
            }]
    });
})();
var MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
    static ɵfac = function MatExpansionPanelActionRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatExpansionPanelActionRow)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatExpansionPanelActionRow,
        selectors: [["mat-action-row"]],
        hostAttrs: [1, "mat-action-row"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanelActionRow, [{
            type: Directive,
            args: [{
                    selector: "mat-action-row",
                    host: {
                        class: "mat-action-row"
                    }
                }]
        }], null, null);
})();
var MatExpansionPanelHeader = class _MatExpansionPanelHeader {
    panel = inject(MatExpansionPanel, {
        host: true
    });
    _element = inject(ElementRef);
    _focusMonitor = inject(FocusMonitor);
    _changeDetectorRef = inject(ChangeDetectorRef);
    _parentChangeSubscription = Subscription.EMPTY;
    constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const panel = this.panel;
        const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
            optional: true
        });
        const tabIndex = inject(new HostAttributeToken("tabindex"), {
            optional: true
        });
        const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter(changes => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
        this.tabIndex = parseInt(tabIndex || "") || 0;
        this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter(changes => {
            return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
        }))).subscribe(() => this._changeDetectorRef.markForCheck());
        panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => this._focusMonitor.focusVia(this._element, "program"));
        if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
        }
    }
    /** Height of the header while the panel is expanded. */
    expandedHeight;
    /** Height of the header while the panel is collapsed. */
    collapsedHeight;
    /** Tab index of the header. */
    tabIndex = 0;
    /**
     * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
     * @docs-private
     */
    get disabled() {
        return this.panel.disabled;
    }
    /** Toggles the expanded state of the panel. */
    _toggle() {
        if (!this.disabled) {
            this.panel.toggle();
        }
    }
    /** Gets whether the panel is expanded. */
    _isExpanded() {
        return this.panel.expanded;
    }
    /** Gets the expanded state string of the panel. */
    _getExpandedState() {
        return this.panel._getExpandedState();
    }
    /** Gets the panel id. */
    _getPanelId() {
        return this.panel.id;
    }
    /** Gets the toggle position for the header. */
    _getTogglePosition() {
        return this.panel.togglePosition;
    }
    /** Gets whether the expand indicator should be shown. */
    _showToggle() {
        return !this.panel.hideToggle && !this.panel.disabled;
    }
    /**
     * Gets the current height of the header. Null if no custom height has been
     * specified, and if the default height from the stylesheet should be used.
     */
    _getHeaderHeight() {
        const isExpanded = this._isExpanded();
        if (isExpanded && this.expandedHeight) {
            return this.expandedHeight;
        }
        else if (!isExpanded && this.collapsedHeight) {
            return this.collapsedHeight;
        }
        return null;
    }
    /** Handle keydown event calling to toggle() if appropriate. */
    _keydown(event) {
        switch (event.keyCode) {
            // Toggle for space and enter keys.
            case SPACE:
            case ENTER:
                if (!hasModifierKey(event)) {
                    event.preventDefault();
                    this._toggle();
                }
                break;
            default:
                if (this.panel.accordion) {
                    this.panel.accordion._handleHeaderKeydown(event);
                }
                return;
        }
    }
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * @param origin Origin of the action that triggered the focus.
     * @docs-private
     */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._element, origin, options);
        }
        else {
            this._element.nativeElement.focus(options);
        }
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._element).subscribe(origin => {
            if (origin && this.panel.accordion) {
                this.panel.accordion._handleHeaderFocus(this);
            }
        });
    }
    ngOnDestroy() {
        this._parentChangeSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element);
    }
    static ɵfac = function MatExpansionPanelHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatExpansionPanelHeader)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatExpansionPanelHeader,
        selectors: [["mat-expansion-panel-header"]],
        hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
        hostVars: 13,
        hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
                    return ctx._toggle();
                })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
                    return ctx._keydown($event);
                });
            }
            if (rf & 2) {
                i0.ɵɵattribute("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
                i0.ɵɵstyleProp("height", ctx._getHeaderHeight());
                i0.ɵɵclassProp("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
            }
        },
        inputs: {
            expandedHeight: "expandedHeight",
            collapsedHeight: "collapsedHeight",
            tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? 0 : numberAttribute(value)]
        },
        ngContentSelectors: _c5,
        decls: 5,
        vars: 3,
        consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
        template: function MatExpansionPanelHeader_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c4);
                i0.ɵɵdomElementStart(0, "span", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵprojection(2, 1);
                i0.ɵɵprojection(3, 2);
                i0.ɵɵdomElementEnd();
                i0.ɵɵconditionalCreate(4, MatExpansionPanelHeader_Conditional_4_Template, 3, 0, "span", 1);
            }
            if (rf & 2) {
                i0.ɵɵclassProp("mat-content-hide-toggle", !ctx._showToggle());
                i0.ɵɵadvance(4);
                i0.ɵɵconditional(ctx._showToggle() ? 4 : -1);
            }
        },
        styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n'],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanelHeader, [{
            type: Component,
            args: [{
                    selector: "mat-expansion-panel-header",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        "class": "mat-expansion-panel-header mat-focus-indicator",
                        "role": "button",
                        "[attr.id]": "panel._headerId",
                        "[attr.tabindex]": "disabled ? -1 : tabIndex",
                        "[attr.aria-controls]": "_getPanelId()",
                        "[attr.aria-expanded]": "_isExpanded()",
                        "[attr.aria-disabled]": "panel.disabled",
                        "[class.mat-expanded]": "_isExpanded()",
                        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
                        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
                        "[style.height]": "_getHeaderHeight()",
                        "(click)": "_toggle()",
                        "(keydown)": "_keydown($event)"
                    },
                    template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n',
                    styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header::before{border-radius:inherit}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}\n']
                }]
        }], () => [], {
        expandedHeight: [{
                type: Input
            }],
        collapsedHeight: [{
                type: Input
            }],
        tabIndex: [{
                type: Input,
                args: [{
                        transform: value => value == null ? 0 : numberAttribute(value)
                    }]
            }]
    });
})();
var MatExpansionPanelDescription = class _MatExpansionPanelDescription {
    static ɵfac = function MatExpansionPanelDescription_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatExpansionPanelDescription)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatExpansionPanelDescription,
        selectors: [["mat-panel-description"]],
        hostAttrs: [1, "mat-expansion-panel-header-description"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanelDescription, [{
            type: Directive,
            args: [{
                    selector: "mat-panel-description",
                    host: {
                        class: "mat-expansion-panel-header-description"
                    }
                }]
        }], null, null);
})();
var MatExpansionPanelTitle = class _MatExpansionPanelTitle {
    static ɵfac = function MatExpansionPanelTitle_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatExpansionPanelTitle)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatExpansionPanelTitle,
        selectors: [["mat-panel-title"]],
        hostAttrs: [1, "mat-expansion-panel-header-title"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionPanelTitle, [{
            type: Directive,
            args: [{
                    selector: "mat-panel-title",
                    host: {
                        class: "mat-expansion-panel-header-title"
                    }
                }]
        }], null, null);
})();
var MatAccordion = class _MatAccordion extends CdkAccordion {
    _keyManager;
    /** Headers belonging to this accordion. */
    _ownHeaders = new QueryList();
    /** All headers inside the accordion. Includes headers inside nested accordions. */
    _headers;
    /** Whether the expansion indicator should be hidden. */
    hideToggle = false;
    /**
     * Display mode used for all expansion panels in the accordion. Currently two display
     * modes exist:
     *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
     *     panel at a different elevation from the rest of the accordion.
     *  flat - no spacing is placed around expanded panels, showing all panels at the same
     *     elevation.
     */
    displayMode = "default";
    /** The position of the expansion indicator. */
    togglePosition = "after";
    ngAfterContentInit() {
        this._headers.changes.pipe(startWith(this._headers)).subscribe(headers => {
            this._ownHeaders.reset(headers.filter(header => header.panel.accordion === this));
            this._ownHeaders.notifyOnChanges();
        });
        this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
    }
    /** Handles keyboard events coming in from the panel headers. */
    _handleHeaderKeydown(event) {
        this._keyManager.onKeydown(event);
    }
    _handleHeaderFocus(header) {
        this._keyManager.updateActiveItem(header);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._keyManager?.destroy();
        this._ownHeaders.destroy();
    }
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatAccordion_BaseFactory;
        return function MatAccordion_Factory(__ngFactoryType__) {
            return (ɵMatAccordion_BaseFactory || (ɵMatAccordion_BaseFactory = i0.ɵɵgetInheritedFactory(_MatAccordion)))(__ngFactoryType__ || _MatAccordion);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatAccordion,
        selectors: [["mat-accordion"]],
        contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, MatExpansionPanelHeader, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._headers = _t);
            }
        },
        hostAttrs: [1, "mat-accordion"],
        hostVars: 2,
        hostBindings: function MatAccordion_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mat-accordion-multi", ctx.multi);
            }
        },
        inputs: {
            hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
            displayMode: "displayMode",
            togglePosition: "togglePosition"
        },
        exportAs: ["matAccordion"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: MAT_ACCORDION,
                    useExisting: _MatAccordion
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatAccordion, [{
            type: Directive,
            args: [{
                    selector: "mat-accordion",
                    exportAs: "matAccordion",
                    providers: [{
                            provide: MAT_ACCORDION,
                            useExisting: MatAccordion
                        }],
                    host: {
                        class: "mat-accordion",
                        // Class binding which is only used by the test harness as there is no other
                        // way for the harness to detect if multiple panel support is enabled.
                        "[class.mat-accordion-multi]": "this.multi"
                    }
                }]
        }], null, {
        _headers: [{
                type: ContentChildren,
                args: [MatExpansionPanelHeader, {
                        descendants: true
                    }]
            }],
        hideToggle: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        displayMode: [{
                type: Input
            }],
        togglePosition: [{
                type: Input
            }]
    });
})();
var MatExpansionModule = class _MatExpansionModule {
    static ɵfac = function MatExpansionModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatExpansionModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatExpansionModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [CdkAccordionModule, PortalModule, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatExpansionModule, [{
            type: NgModule,
            args: [{
                    imports: [CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
                    exports: [BidiModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
                }]
        }], null, null);
})();
export { MAT_ACCORDION, MAT_EXPANSION_PANEL, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelContent, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle };
