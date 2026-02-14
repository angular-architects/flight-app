import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@ngrx/component/fesm2022/ngrx-component.mjs
import * as i0 from "@angular/core";
import { NgZone, inject, Injectable, ChangeDetectorRef as ChangeDetectorRef2, untracked, Directive, Input, Pipe } from "@angular/core";
import { isObservable, combineLatest, from, Observable, ReplaySubject, pipe, Subscription } from "rxjs";
import { distinctUntilChanged, tap, switchMap } from "rxjs/operators";
function isNgZone(zone) {
    return zone instanceof NgZone;
}
var _TickScheduler = class _TickScheduler {
};
_TickScheduler.ɵfac = function TickScheduler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TickScheduler)();
};
_TickScheduler.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _TickScheduler,
    factory: () => (() => {
        const zone = inject(NgZone);
        return isNgZone(zone) ? new NoopTickScheduler() : inject(AnimationFrameTickScheduler);
    })(),
    providedIn: "root"
});
var TickScheduler = _TickScheduler;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TickScheduler, [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                    useFactory: () => {
                        const zone = inject(NgZone);
                        return isNgZone(zone) ? new NoopTickScheduler() : inject(AnimationFrameTickScheduler);
                    }
                }]
        }], null, null);
})();
var _AnimationFrameTickScheduler = class _AnimationFrameTickScheduler extends TickScheduler {
    constructor(appRef) {
        super();
        this.appRef = appRef;
        this.isScheduled = false;
    }
    schedule() {
        if (!this.isScheduled) {
            this.isScheduled = true;
            requestAnimationFrame(() => {
                this.appRef.tick();
                this.isScheduled = false;
            });
        }
    }
};
_AnimationFrameTickScheduler.ɵfac = function AnimationFrameTickScheduler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationFrameTickScheduler)(i0.ɵɵinject(i0.ApplicationRef));
};
_AnimationFrameTickScheduler.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _AnimationFrameTickScheduler,
    factory: _AnimationFrameTickScheduler.ɵfac,
    providedIn: "root"
});
var AnimationFrameTickScheduler = _AnimationFrameTickScheduler;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnimationFrameTickScheduler, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i0.ApplicationRef
        }], null);
})();
var NoopTickScheduler = class extends TickScheduler {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    schedule() { }
};
var _RenderScheduler = class _RenderScheduler {
    constructor(cdRef, tickScheduler) {
        this.cdRef = cdRef;
        this.tickScheduler = tickScheduler;
    }
    /**
     * Marks component and its ancestors as dirty.
     * It also schedules a new change detection cycle in zone-less mode.
     */
    schedule() {
        this.cdRef.markForCheck();
        this.tickScheduler.schedule();
    }
};
_RenderScheduler.ɵfac = function RenderScheduler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RenderScheduler)(i0.ɵɵinject(i0.ChangeDetectorRef), i0.ɵɵinject(TickScheduler));
};
_RenderScheduler.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _RenderScheduler,
    factory: _RenderScheduler.ɵfac
});
var RenderScheduler = _RenderScheduler;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RenderScheduler, [{
            type: Injectable
        }], () => [{
            type: i0.ChangeDetectorRef
        }, {
            type: TickScheduler
        }], null);
})();
function createRenderScheduler() {
    return new RenderScheduler(inject(ChangeDetectorRef2), inject(TickScheduler));
}
function combineRenderEventHandlers(handlers) {
    return event => handlers[event.type]?.(event);
}
function fromPotentialObservable(potentialObservable) {
    if (isObservable(potentialObservable)) {
        return potentialObservable;
    }
    if (isObservableDictionary(potentialObservable)) {
        return combineLatest(toDistinctObsDictionary(potentialObservable));
    }
    if (isPromiseLike(potentialObservable)) {
        return from(potentialObservable);
    }
    return new Observable(subscriber => {
        subscriber.next(potentialObservable);
    });
}
function isPromiseLike(value) {
    return typeof value?.then === "function";
}
function isObservableDictionary(value) {
    return isDictionary(value) && Object.keys(value).length > 0 && Object.values(value).every(isObservable);
}
function isDictionary(value) {
    return !!value && typeof value === "object" && !Array.isArray(value);
}
function toDistinctObsDictionary(obsDictionary) {
    return Object.keys(obsDictionary).reduce((acc, key) => __spreadProps(__spreadValues({}, acc), {
        [key]: obsDictionary[key].pipe(distinctUntilChanged())
    }), {});
}
function createRenderEventManager(handlers) {
    const handleRenderEvent = combineRenderEventHandlers(handlers);
    const potentialObservable$ = new ReplaySubject(1);
    return {
        nextPotentialObservable(potentialObservable) {
            potentialObservable$.next(potentialObservable);
        },
        handlePotentialObservableChanges() {
            return potentialObservable$.pipe(distinctUntilChanged(), switchMapToRenderEvent(), distinctUntilChanged(renderEventComparator), tap(handleRenderEvent));
        }
    };
}
function switchMapToRenderEvent() {
    return pipe(switchMap(potentialObservable => {
        const observable$ = fromPotentialObservable(potentialObservable);
        let reset = true;
        let synchronous = true;
        return new Observable(subscriber => {
            const subscription = untracked(() => observable$.subscribe({
                next(value) {
                    subscriber.next({
                        type: "next",
                        value,
                        reset,
                        synchronous
                    });
                    reset = false;
                },
                error(error) {
                    subscriber.next({
                        type: "error",
                        error,
                        reset,
                        synchronous
                    });
                    reset = false;
                },
                complete() {
                    subscriber.next({
                        type: "complete",
                        reset,
                        synchronous
                    });
                    reset = false;
                }
            }));
            if (reset) {
                subscriber.next({
                    type: "suspense",
                    reset,
                    synchronous: true
                });
                reset = false;
            }
            synchronous = false;
            return subscription;
        });
    }));
}
function renderEventComparator(previous, current) {
    if (previous.type !== current.type || previous.reset !== current.reset) {
        return false;
    }
    if (current.type === "next") {
        return previous.value === current.value;
    }
    if (current.type === "error") {
        return previous.error === current.error;
    }
    return true;
}
var _LetDirective = class _LetDirective {
    set ngrxLet(potentialObservable) {
        this.renderEventManager.nextPotentialObservable(potentialObservable);
    }
    constructor(mainTemplateRef, viewContainerRef, errorHandler, renderScheduler) {
        this.mainTemplateRef = mainTemplateRef;
        this.viewContainerRef = viewContainerRef;
        this.errorHandler = errorHandler;
        this.renderScheduler = renderScheduler;
        this.isMainViewCreated = false;
        this.isSuspenseViewCreated = false;
        this.viewContext = {
            $implicit: void 0,
            ngrxLet: void 0,
            error: void 0,
            complete: false
        };
        this.renderEventManager = createRenderEventManager({
            suspense: () => {
                this.viewContext.$implicit = void 0;
                this.viewContext.ngrxLet = void 0;
                this.viewContext.error = void 0;
                this.viewContext.complete = false;
                this.renderSuspenseView();
            },
            next: event => {
                this.viewContext.$implicit = event.value;
                this.viewContext.ngrxLet = event.value;
                if (event.reset) {
                    this.viewContext.error = void 0;
                    this.viewContext.complete = false;
                }
                this.renderMainView(event.synchronous);
            },
            error: event => {
                this.viewContext.error = event.error;
                if (event.reset) {
                    this.viewContext.$implicit = void 0;
                    this.viewContext.ngrxLet = void 0;
                    this.viewContext.complete = false;
                }
                this.renderMainView(event.synchronous);
                this.errorHandler.handleError(event.error);
            },
            complete: event => {
                this.viewContext.complete = true;
                if (event.reset) {
                    this.viewContext.$implicit = void 0;
                    this.viewContext.ngrxLet = void 0;
                    this.viewContext.error = void 0;
                }
                this.renderMainView(event.synchronous);
            }
        });
        this.subscription = new Subscription();
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    ngOnInit() {
        this.subscription.add(this.renderEventManager.handlePotentialObservableChanges().subscribe());
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    renderMainView(isSyncEvent) {
        if (this.isSuspenseViewCreated) {
            this.isSuspenseViewCreated = false;
            this.viewContainerRef.clear();
        }
        if (!this.isMainViewCreated) {
            this.isMainViewCreated = true;
            this.viewContainerRef.createEmbeddedView(this.mainTemplateRef, this.viewContext);
        }
        if (!isSyncEvent) {
            this.renderScheduler.schedule();
        }
    }
    renderSuspenseView() {
        if (this.isMainViewCreated) {
            this.isMainViewCreated = false;
            this.viewContainerRef.clear();
        }
        if (this.suspenseTemplateRef && !this.isSuspenseViewCreated) {
            this.isSuspenseViewCreated = true;
            this.viewContainerRef.createEmbeddedView(this.suspenseTemplateRef);
        }
    }
};
_LetDirective.ɵfac = function LetDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LetDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ErrorHandler), i0.ɵɵdirectiveInject(RenderScheduler));
};
_LetDirective.ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
    type: _LetDirective,
    selectors: [["", "ngrxLet", ""]],
    inputs: {
        ngrxLet: "ngrxLet",
        suspenseTemplateRef: [0, "ngrxLetSuspenseTpl", "suspenseTemplateRef"]
    },
    features: [i0.ɵɵProvidersFeature([RenderScheduler])]
});
var LetDirective = _LetDirective;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LetDirective, [{
            type: Directive,
            args: [{
                    selector: "[ngrxLet]",
                    providers: [RenderScheduler]
                }]
        }], () => [{
            type: i0.TemplateRef
        }, {
            type: i0.ViewContainerRef
        }, {
            type: i0.ErrorHandler
        }, {
            type: RenderScheduler
        }], {
        ngrxLet: [{
                type: Input
            }],
        suspenseTemplateRef: [{
                type: Input,
                args: ["ngrxLetSuspenseTpl"]
            }]
    });
})();
var _PushPipe = class _PushPipe {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
        this.renderScheduler = createRenderScheduler();
        this.renderEventManager = createRenderEventManager({
            suspense: event => this.setRenderedValue(void 0, event.synchronous),
            next: event => this.setRenderedValue(event.value, event.synchronous),
            error: event => {
                if (event.reset) {
                    this.setRenderedValue(void 0, event.synchronous);
                }
                this.errorHandler.handleError(event.error);
            },
            complete: event => {
                if (event.reset) {
                    this.setRenderedValue(void 0, event.synchronous);
                }
            }
        });
        this.subscription = this.renderEventManager.handlePotentialObservableChanges().subscribe();
    }
    transform(potentialObservable) {
        this.renderEventManager.nextPotentialObservable(potentialObservable);
        return this.renderedValue;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    setRenderedValue(value, isSyncEvent) {
        if (value !== this.renderedValue) {
            this.renderedValue = value;
            if (!isSyncEvent) {
                this.renderScheduler.schedule();
            }
        }
    }
};
_PushPipe.ɵfac = function PushPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PushPipe)(i0.ɵɵdirectiveInject(i0.ErrorHandler, 16));
};
_PushPipe.ɵpipe = /* @__PURE__ */ i0.ɵɵdefinePipe({
    name: "ngrxPush",
    type: _PushPipe,
    pure: false
});
var PushPipe = _PushPipe;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PushPipe, [{
            type: Pipe,
            args: [{
                    name: "ngrxPush",
                    pure: false
                }]
        }], () => [{
            type: i0.ErrorHandler
        }], null);
})();
export { LetDirective, PushPipe, RenderScheduler };
