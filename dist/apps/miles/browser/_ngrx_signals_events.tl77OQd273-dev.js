import { __objRest, __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@ngrx/signals/fesm2022/ngrx-signals-events.mjs
import * as i0 from "@angular/core";
import { Injectable, inject, assertInInjectionContext, Injector, untracked } from "@angular/core";
import { Subject, filter, map, queueScheduler, tap, merge } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { signalStoreFeature, type, withHooks, getState, patchState } from "@ngrx/signals";
function on(...args) {
    const reducer = args.pop();
    const events = args;
    return {
        reducer,
        events
    };
}
var EVENTS = Symbol();
var SOURCE_TYPE = Symbol();
var BaseEvents = class {
    /**
     * @internal
     */
    [EVENTS] = new Subject();
    on(...events) {
        return this[EVENTS].pipe(filterByType(events), withSourceType());
    }
};
var Events = class _Events extends BaseEvents {
    /** @nocollapse */
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵEvents_BaseFactory;
        return function Events_Factory(__ngFactoryType__) {
            return (ɵEvents_BaseFactory || (ɵEvents_BaseFactory = i0.ɵɵgetInheritedFactory(_Events)))(__ngFactoryType__ || _Events);
        };
    })();
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _Events,
        factory: _Events.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Events, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var ReducerEvents = class _ReducerEvents extends BaseEvents {
    /** @nocollapse */
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵReducerEvents_BaseFactory;
        return function ReducerEvents_Factory(__ngFactoryType__) {
            return (ɵReducerEvents_BaseFactory || (ɵReducerEvents_BaseFactory = i0.ɵɵgetInheritedFactory(_ReducerEvents)))(__ngFactoryType__ || _ReducerEvents);
        };
    })();
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _ReducerEvents,
        factory: _ReducerEvents.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReducerEvents, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
function filterByType(events) {
    if (events.length === 0) {
        return source$ => source$;
    }
    const eventMap = toEventCreatorMap(events);
    return filter(({ type: type2 }) => !!eventMap[type2]);
}
function toEventCreatorMap(events) {
    return events.reduce((acc, event2) => __spreadProps(__spreadValues({}, acc), {
        [event2.type]: event2
    }), {});
}
function withSourceType() {
    return map(_a => {
        var event2 = __objRest(_a, []);
        Object.defineProperty(event2, SOURCE_TYPE, {
            value: event2.type
        });
        return event2;
    });
}
var Dispatcher = class _Dispatcher {
    reducerEvents = inject(ReducerEvents);
    events = inject(Events);
    dispatch(event2) {
        this.reducerEvents[EVENTS].next(event2);
        queueScheduler.schedule(() => this.events[EVENTS].next(event2));
    }
    /** @nocollapse */
    static ɵfac = function Dispatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Dispatcher)();
    };
    /** @nocollapse */
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _Dispatcher,
        factory: _Dispatcher.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dispatcher, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
function event(type2) {
    const creator = payload => ({
        type: type2,
        payload
    });
    creator.type = type2;
    return creator;
}
function eventGroup(config) {
    return Object.entries(config.events).reduce((acc, [eventName]) => {
        const eventType = `[${config.source}] ${eventName}`;
        return __spreadProps(__spreadValues({}, acc), {
            [eventName]: event(eventType)
        });
    }, {});
}
function injectDispatch(events, config) {
    if (!config?.injector) {
        assertInInjectionContext(injectDispatch);
    }
    const injector = config?.injector ?? inject(Injector);
    const dispatcher = injector.get(Dispatcher);
    return Object.entries(events).reduce((acc, [eventName, eventCreator]) => __spreadProps(__spreadValues({}, acc), {
        [eventName]: payload => untracked(() => dispatcher.dispatch(eventCreator(payload)))
    }), {});
}
function isEventInstance(value) {
    return typeof value === "object" && value !== null && "type" in value;
}
function withEffects(effectsFactory) {
    return signalStoreFeature(type(), withHooks({
        onInit(store, dispatcher = inject(Dispatcher)) {
            const effectSources = effectsFactory(store);
            const effects = Object.values(effectSources).map(effectSource$ => effectSource$.pipe(tap(value => {
                if (isEventInstance(value) && !(SOURCE_TYPE in value)) {
                    dispatcher.dispatch(value);
                }
            })));
            merge(...effects).pipe(takeUntilDestroyed()).subscribe();
        }
    }));
}
function withReducer(...caseReducers) {
    return signalStoreFeature({
        state: type()
    }, withHooks({
        onInit(store, events = inject(ReducerEvents)) {
            const updates = caseReducers.map(caseReducer => events.on(...caseReducer.events).pipe(tap(event2 => {
                const state = untracked(() => getState(store));
                const result = caseReducer.reducer(event2, state);
                const updaters = Array.isArray(result) ? result : [result];
                patchState(store, ...updaters);
            })));
            merge(...updates).pipe(takeUntilDestroyed()).subscribe();
        }
    }));
}
export { Dispatcher, Events, event, eventGroup, injectDispatch, on, withEffects, withReducer };
