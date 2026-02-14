import { coerceElement, coerceNumberProperty } from "@nf-internal/chunk-XODDVZAQ";
// node_modules/@angular/cdk/fesm2022/observers.mjs
import * as i0 from "@angular/core";
import { Injectable, inject, NgZone, ElementRef, EventEmitter, booleanAttribute, Directive, Output, Input, NgModule } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map, filter, debounceTime } from "rxjs/operators";
function shouldIgnoreRecord(record) {
    if (record.type === "characterData" && record.target instanceof Comment) {
        return true;
    }
    if (record.type === "childList") {
        for (let i = 0; i < record.addedNodes.length; i++) {
            if (!(record.addedNodes[i] instanceof Comment)) {
                return false;
            }
        }
        for (let i = 0; i < record.removedNodes.length; i++) {
            if (!(record.removedNodes[i] instanceof Comment)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
var MutationObserverFactory = class _MutationObserverFactory {
    create(callback) {
        return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
    }
    static ɵfac = function MutationObserverFactory_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MutationObserverFactory)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _MutationObserverFactory,
        factory: _MutationObserverFactory.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MutationObserverFactory, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var ContentObserver = class _ContentObserver {
    _mutationObserverFactory = inject(MutationObserverFactory);
    /** Keeps track of the existing MutationObservers so they can be reused. */
    _observedElements = /* @__PURE__ */ new Map();
    _ngZone = inject(NgZone);
    constructor() { }
    ngOnDestroy() {
        this._observedElements.forEach((_, element) => this._cleanupObserver(element));
    }
    observe(elementOrRef) {
        const element = coerceElement(elementOrRef);
        return new Observable(observer => {
            const stream = this._observeElement(element);
            const subscription = stream.pipe(map(records => records.filter(record => !shouldIgnoreRecord(record))), filter(records => !!records.length)).subscribe(records => {
                this._ngZone.run(() => {
                    observer.next(records);
                });
            });
            return () => {
                subscription.unsubscribe();
                this._unobserveElement(element);
            };
        });
    }
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     */
    _observeElement(element) {
        return this._ngZone.runOutsideAngular(() => {
            if (!this._observedElements.has(element)) {
                const stream = new Subject();
                const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));
                if (observer) {
                    observer.observe(element, {
                        characterData: true,
                        childList: true,
                        subtree: true
                    });
                }
                this._observedElements.set(element, {
                    observer,
                    stream,
                    count: 1
                });
            }
            else {
                this._observedElements.get(element).count++;
            }
            return this._observedElements.get(element).stream;
        });
    }
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     */
    _unobserveElement(element) {
        if (this._observedElements.has(element)) {
            this._observedElements.get(element).count--;
            if (!this._observedElements.get(element).count) {
                this._cleanupObserver(element);
            }
        }
    }
    /** Clean up the underlying MutationObserver for the specified element. */
    _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
            const { observer, stream } = this._observedElements.get(element);
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    }
    static ɵfac = function ContentObserver_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ContentObserver)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _ContentObserver,
        factory: _ContentObserver.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentObserver, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var CdkObserveContent = class _CdkObserveContent {
    _contentObserver = inject(ContentObserver);
    _elementRef = inject(ElementRef);
    /** Event emitted for each change in the element's content. */
    event = new EventEmitter();
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        this._disabled ? this._unsubscribe() : this._subscribe();
    }
    _disabled = false;
    /** Debounce interval for emitting the changes. */
    get debounce() {
        return this._debounce;
    }
    set debounce(value) {
        this._debounce = coerceNumberProperty(value);
        this._subscribe();
    }
    _debounce;
    _currentSubscription = null;
    constructor() { }
    ngAfterContentInit() {
        if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
        }
    }
    ngOnDestroy() {
        this._unsubscribe();
    }
    _subscribe() {
        this._unsubscribe();
        const stream = this._contentObserver.observe(this._elementRef);
        this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
    }
    _unsubscribe() {
        this._currentSubscription?.unsubscribe();
    }
    static ɵfac = function CdkObserveContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkObserveContent)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkObserveContent,
        selectors: [["", "cdkObserveContent", ""]],
        inputs: {
            disabled: [2, "cdkObserveContentDisabled", "disabled", booleanAttribute],
            debounce: "debounce"
        },
        outputs: {
            event: "cdkObserveContent"
        },
        exportAs: ["cdkObserveContent"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkObserveContent, [{
            type: Directive,
            args: [{
                    selector: "[cdkObserveContent]",
                    exportAs: "cdkObserveContent"
                }]
        }], () => [], {
        event: [{
                type: Output,
                args: ["cdkObserveContent"]
            }],
        disabled: [{
                type: Input,
                args: [{
                        alias: "cdkObserveContentDisabled",
                        transform: booleanAttribute
                    }]
            }],
        debounce: [{
                type: Input
            }]
    });
})();
var ObserversModule = class _ObserversModule {
    static ɵfac = function ObserversModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ObserversModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _ObserversModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        providers: [MutationObserverFactory]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ObserversModule, [{
            type: NgModule,
            args: [{
                    imports: [CdkObserveContent],
                    exports: [CdkObserveContent],
                    providers: [MutationObserverFactory]
                }]
        }], null, null);
})();
export { MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule };
