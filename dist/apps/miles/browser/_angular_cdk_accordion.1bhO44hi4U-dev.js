import { UniqueSelectionDispatcher } from "@nf-internal/chunk-IELVTILQ";
import { _IdGenerator } from "@nf-internal/chunk-F3H34SIQ";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/accordion.mjs
import * as i0 from "@angular/core";
import { InjectionToken, inject, booleanAttribute, Directive, Input, ChangeDetectorRef, EventEmitter, signal, Output, NgModule } from "@angular/core";
import { Subject, Subscription } from "rxjs";
var CDK_ACCORDION = new InjectionToken("CdkAccordion");
var CdkAccordion = class _CdkAccordion {
    /** Emits when the state of the accordion changes */
    _stateChanges = new Subject();
    /** Stream that emits true/false when openAll/closeAll is triggered. */
    _openCloseAllActions = new Subject();
    /** A readonly id value to use for unique selection coordination. */
    id = inject(_IdGenerator).getId("cdk-accordion-");
    /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
    multi = false;
    /** Opens all enabled accordion items in an accordion where multi is enabled. */
    openAll() {
        if (this.multi) {
            this._openCloseAllActions.next(true);
        }
    }
    /** Closes all enabled accordion items. */
    closeAll() {
        this._openCloseAllActions.next(false);
    }
    ngOnChanges(changes) {
        this._stateChanges.next(changes);
    }
    ngOnDestroy() {
        this._stateChanges.complete();
        this._openCloseAllActions.complete();
    }
    static ɵfac = function CdkAccordion_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkAccordion)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkAccordion,
        selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
        inputs: {
            multi: [2, "multi", "multi", booleanAttribute]
        },
        exportAs: ["cdkAccordion"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CDK_ACCORDION,
                    useExisting: _CdkAccordion
                }]), i0.ɵɵNgOnChangesFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkAccordion, [{
            type: Directive,
            args: [{
                    selector: "cdk-accordion, [cdkAccordion]",
                    exportAs: "cdkAccordion",
                    providers: [{
                            provide: CDK_ACCORDION,
                            useExisting: CdkAccordion
                        }]
                }]
        }], null, {
        multi: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var CdkAccordionItem = class _CdkAccordionItem {
    accordion = inject(CDK_ACCORDION, {
        optional: true,
        skipSelf: true
    });
    _changeDetectorRef = inject(ChangeDetectorRef);
    _expansionDispatcher = inject(UniqueSelectionDispatcher);
    /** Subscription to openAll/closeAll events. */
    _openCloseAllSubscription = Subscription.EMPTY;
    /** Event emitted every time the AccordionItem is closed. */
    closed = new EventEmitter();
    /** Event emitted every time the AccordionItem is opened. */
    opened = new EventEmitter();
    /** Event emitted when the AccordionItem is destroyed. */
    destroyed = new EventEmitter();
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     * @docs-private
     */
    expandedChange = new EventEmitter();
    /** The unique AccordionItem id. */
    id = inject(_IdGenerator).getId("cdk-accordion-child-");
    /** Whether the AccordionItem is expanded. */
    get expanded() {
        return this._expanded;
    }
    set expanded(expanded) {
        if (this._expanded !== expanded) {
            this._expanded = expanded;
            this.expandedChange.emit(expanded);
            if (expanded) {
                this.opened.emit();
                const accordionId = this.accordion ? this.accordion.id : this.id;
                this._expansionDispatcher.notify(this.id, accordionId);
            }
            else {
                this.closed.emit();
            }
            this._changeDetectorRef.markForCheck();
        }
    }
    _expanded = false;
    /** Whether the AccordionItem is disabled. */
    get disabled() {
        return this._disabled();
    }
    set disabled(value) {
        this._disabled.set(value);
    }
    _disabled = signal(false, ...(ngDevMode ? [{
            debugName: "_disabled"
        }] : []));
    /** Unregister function for _expansionDispatcher. */
    _removeUniqueSelectionListener = () => { };
    constructor() { }
    ngOnInit() {
        this._removeUniqueSelectionListener = this._expansionDispatcher.listen((id, accordionId) => {
            if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
                this.expanded = false;
            }
        });
        if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
    }
    /** Emits an event for the accordion item being destroyed. */
    ngOnDestroy() {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
    }
    /** Toggles the expanded state of the accordion item. */
    toggle() {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    }
    /** Sets the expanded state of the accordion item to false. */
    close() {
        if (!this.disabled) {
            this.expanded = false;
        }
    }
    /** Sets the expanded state of the accordion item to true. */
    open() {
        if (!this.disabled) {
            this.expanded = true;
        }
    }
    _subscribeToOpenCloseAllActions() {
        return this.accordion._openCloseAllActions.subscribe(expanded => {
            if (!this.disabled) {
                this.expanded = expanded;
            }
        });
    }
    static ɵfac = function CdkAccordionItem_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkAccordionItem)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkAccordionItem,
        selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
        inputs: {
            expanded: [2, "expanded", "expanded", booleanAttribute],
            disabled: [2, "disabled", "disabled", booleanAttribute]
        },
        outputs: {
            closed: "closed",
            opened: "opened",
            destroyed: "destroyed",
            expandedChange: "expandedChange"
        },
        exportAs: ["cdkAccordionItem"],
        features: [i0.ɵɵProvidersFeature([
                // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
                // registering to the same accordion.
                {
                    provide: CDK_ACCORDION,
                    useValue: void 0
                }
            ])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkAccordionItem, [{
            type: Directive,
            args: [{
                    selector: "cdk-accordion-item, [cdkAccordionItem]",
                    exportAs: "cdkAccordionItem",
                    providers: [
                        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
                        // registering to the same accordion.
                        {
                            provide: CDK_ACCORDION,
                            useValue: void 0
                        }
                    ]
                }]
        }], () => [], {
        closed: [{
                type: Output
            }],
        opened: [{
                type: Output
            }],
        destroyed: [{
                type: Output
            }],
        expandedChange: [{
                type: Output
            }],
        expanded: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        disabled: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var CdkAccordionModule = class _CdkAccordionModule {
    static ɵfac = function CdkAccordionModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkAccordionModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _CdkAccordionModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({});
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkAccordionModule, [{
            type: NgModule,
            args: [{
                    imports: [CdkAccordion, CdkAccordionItem],
                    exports: [CdkAccordion, CdkAccordionItem]
                }]
        }], null, null);
})();
export { CDK_ACCORDION, CdkAccordion, CdkAccordionItem, CdkAccordionModule };
