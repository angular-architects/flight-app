import { __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@ngrx/store/fesm2022/ngrx-store-testing.mjs
import * as i0 from "@angular/core";
import { Injectable, InjectionToken, Inject, Injector } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { BehaviorSubject } from "rxjs";
import * as i2 from "@ngrx/store";
import { Store, createSelector, INITIAL_STATE, setNgrxMockEnvironment, ActionsSubject as ActionsSubject2, StateObservable, ReducerManager as ReducerManager2 } from "@ngrx/store";
var _MockState = class _MockState extends BehaviorSubject {
    constructor() {
        super({});
        this.state = toSignal(this, {
            manualCleanup: true,
            requireSync: true
        });
    }
};
_MockState.ɵfac = function MockState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MockState)();
};
_MockState.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _MockState,
    factory: _MockState.ɵfac
});
var MockState = _MockState;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MockState, [{
            type: Injectable
        }], () => [], null);
})();
var MOCK_SELECTORS = new InjectionToken("@ngrx/store Mock Selectors");
var _MockStore = class _MockStore extends Store {
    constructor(state$, actionsObserver, reducerManager, initialState, mockSelectors = []) {
        super(state$, actionsObserver, reducerManager);
        this.state$ = state$;
        this.initialState = initialState;
        this.selectors = /* @__PURE__ */ new Map();
        this.resetSelectors();
        this.setState(this.initialState);
        this.scannedActions$ = actionsObserver.asObservable();
        for (const mockSelector of mockSelectors) {
            this.overrideSelector(mockSelector.selector, mockSelector.value);
        }
    }
    setState(nextState) {
        this.state$.next(nextState);
        this.lastState = nextState;
    }
    overrideSelector(selector, value) {
        this.selectors.set(selector, value);
        const resultSelector = typeof selector === "string" ? createSelector(() => { }, () => value) : selector;
        resultSelector.setResult(value);
        return resultSelector;
    }
    resetSelectors() {
        for (const selector of this.selectors.keys()) {
            if (typeof selector !== "string") {
                selector.release();
                selector.clearResult();
            }
        }
        this.selectors.clear();
    }
    select(selector, prop) {
        if (typeof selector === "string" && this.selectors.has(selector)) {
            return new BehaviorSubject(this.selectors.get(selector)).asObservable();
        }
        return super.select(selector, prop);
    }
    addReducer() { }
    removeReducer() { }
    /**
     * Refreshes the existing state.
     */
    refreshState() {
        if (this.lastState)
            this.setState(__spreadValues({}, this.lastState));
    }
};
_MockStore.ɵfac = function MockStore_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MockStore)(i0.ɵɵinject(MockState), i0.ɵɵinject(i2.ActionsSubject), i0.ɵɵinject(i2.ReducerManager), i0.ɵɵinject(INITIAL_STATE), i0.ɵɵinject(MOCK_SELECTORS));
};
_MockStore.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _MockStore,
    factory: _MockStore.ɵfac
});
var MockStore = _MockStore;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MockStore, [{
            type: Injectable
        }], () => [{
            type: MockState
        }, {
            type: i2.ActionsSubject
        }, {
            type: i2.ReducerManager
        }, {
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [INITIAL_STATE]
                }]
        }, {
            type: void 0,
            decorators: [{
                    type: Inject,
                    args: [MOCK_SELECTORS]
                }]
        }], null);
})();
var _MockReducerManager = class _MockReducerManager extends BehaviorSubject {
    constructor() {
        super(() => void 0);
    }
    addFeature(feature) { }
    addFeatures(feature) { }
    removeFeature(feature) { }
    removeFeatures(features) { }
    addReducer(key, reducer) { }
    addReducers(reducers) { }
    removeReducer(featureKey) { }
    removeReducers(featureKeys) { }
};
_MockReducerManager.ɵfac = function MockReducerManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MockReducerManager)();
};
_MockReducerManager.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _MockReducerManager,
    factory: _MockReducerManager.ɵfac
});
var MockReducerManager = _MockReducerManager;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MockReducerManager, [{
            type: Injectable
        }], () => [], null);
})();
function provideMockStore(config = {}) {
    setNgrxMockEnvironment(true);
    return [{
            provide: ActionsSubject2,
            useFactory: () => new ActionsSubject2(),
            deps: []
        }, {
            provide: MockState,
            useFactory: () => new MockState(),
            deps: []
        }, {
            provide: MockReducerManager,
            useFactory: () => new MockReducerManager(),
            deps: []
        }, {
            provide: INITIAL_STATE,
            useValue: config.initialState || {}
        }, {
            provide: MOCK_SELECTORS,
            useValue: config.selectors
        }, {
            provide: StateObservable,
            useExisting: MockState
        }, {
            provide: ReducerManager2,
            useExisting: MockReducerManager
        }, {
            provide: MockStore,
            useFactory: mockStoreFactory,
            deps: [MockState, ActionsSubject2, ReducerManager2, INITIAL_STATE, MOCK_SELECTORS]
        }, {
            provide: Store,
            useExisting: MockStore
        }];
}
function mockStoreFactory(mockState, actionsSubject, reducerManager, initialState, mockSelectors) {
    return new MockStore(mockState, actionsSubject, reducerManager, initialState, mockSelectors);
}
function createMockStore(config = {}) {
    const injector = Injector.create({
        providers: provideMockStore(config)
    });
    return injector.get(MockStore);
}
export { MockReducerManager, MockState, MockStore, createMockStore, provideMockStore };
