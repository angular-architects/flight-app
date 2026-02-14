import { __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@ngrx/component-store/fesm2022/ngrx-component-store.mjs
import { Observable, Subscription, asapScheduler, ReplaySubject, isObservable, of, queueScheduler, EMPTY, throwError, scheduled, combineLatest, Subject } from "rxjs";
import { take, takeUntil, observeOn, tap, withLatestFrom, map, catchError, distinctUntilChanged, shareReplay } from "rxjs/operators";
import * as i0 from "@angular/core";
import { InjectionToken, inject, computed, isDevMode, Injectable, Optional, Inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
function debounceSync() {
    return source => new Observable(observer => {
        let actionSubscription;
        let actionValue;
        const rootSubscription = new Subscription();
        rootSubscription.add(source.subscribe({
            complete: () => {
                if (actionSubscription) {
                    observer.next(actionValue);
                }
                observer.complete();
            },
            error: error => {
                observer.error(error);
            },
            next: value => {
                actionValue = value;
                if (!actionSubscription) {
                    actionSubscription = asapScheduler.schedule(() => {
                        observer.next(actionValue);
                        actionSubscription = void 0;
                    });
                    rootSubscription.add(actionSubscription);
                }
            }
        }));
        return rootSubscription;
    });
}
function isOnStoreInitDefined(cs) {
    return typeof cs.ngrxOnStoreInit === "function";
}
function isOnStateInitDefined(cs) {
    return typeof cs.ngrxOnStateInit === "function";
}
function provideComponentStore(componentStoreClass) {
    const CS_WITH_HOOKS = new InjectionToken("@ngrx/component-store ComponentStore with Hooks");
    return [{
            provide: CS_WITH_HOOKS,
            useClass: componentStoreClass
        }, {
            provide: componentStoreClass,
            useFactory: () => {
                const componentStore = inject(CS_WITH_HOOKS);
                componentStore["\u0275hasProvider"] = true;
                if (isOnStoreInitDefined(componentStore)) {
                    componentStore.ngrxOnStoreInit();
                }
                if (isOnStateInitDefined(componentStore)) {
                    componentStore.state$.pipe(take(1)).subscribe(() => componentStore.ngrxOnStateInit());
                }
                return componentStore;
            }
        }];
}
var INITIAL_STATE_TOKEN = new InjectionToken("@ngrx/component-store Initial State");
var _ComponentStore = class _ComponentStore {
    constructor(defaultState) {
        this.destroySubject$ = new ReplaySubject(1);
        this.destroy$ = this.destroySubject$.asObservable();
        this.stateSubject$ = new ReplaySubject(1);
        this.isInitialized = false;
        this.state$ = this.select(s => s);
        this.state = toSignal(this.stateSubject$.pipe(takeUntil(this.destroy$)), {
            requireSync: false,
            manualCleanup: true
        });
        this.ɵhasProvider = false;
        if (defaultState) {
            this.initState(defaultState);
        }
        this.checkProviderForHooks();
    }
    /** Completes all relevant Observable streams. */
    ngOnDestroy() {
        this.stateSubject$.complete();
        this.destroySubject$.next();
    }
    /**
     * Creates an updater.
     *
     * Throws an error if updater is called with synchronous values (either
     * imperative value or Observable that is synchronous) before ComponentStore
     * is initialized. If called with async Observable before initialization then
     * state will not be updated and subscription would be closed.
     *
     * @param updaterFn A static updater function that takes 2 parameters (the
     * current state and an argument object) and returns a new instance of the
     * state.
     * @return A function that accepts one argument which is forwarded as the
     *     second argument to `updaterFn`. Every time this function is called
     *     subscribers will be notified of the state change.
     */
    updater(updaterFn) {
        return observableOrValue => {
            let isSyncUpdate = true;
            let syncError;
            const observable$ = isObservable(observableOrValue) ? observableOrValue : of(observableOrValue);
            const subscription = observable$.pipe(
            // Push the value into queueScheduler
            observeOn(queueScheduler), 
            // If the state is not initialized yet, we'll throw an error.
            tap(() => this.assertStateIsInitialized()), withLatestFrom(this.stateSubject$), 
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            map(([value, currentState]) => updaterFn(currentState, value)), tap(newState => this.stateSubject$.next(newState)), catchError(error => {
                if (isSyncUpdate) {
                    syncError = error;
                    return EMPTY;
                }
                return throwError(error);
            }), takeUntil(this.destroy$)).subscribe();
            if (syncError) {
                throw syncError;
            }
            isSyncUpdate = false;
            return subscription;
        };
    }
    /**
     * Initializes state. If it was already initialized then it resets the
     * state.
     */
    initState(state) {
        scheduled([state], queueScheduler).subscribe(s => {
            this.isInitialized = true;
            this.stateSubject$.next(s);
        });
    }
    /**
     * Sets the state specific value.
     * @param stateOrUpdaterFn object of the same type as the state or an
     * updaterFn, returning such object.
     */
    setState(stateOrUpdaterFn) {
        if (typeof stateOrUpdaterFn !== "function") {
            this.initState(stateOrUpdaterFn);
        }
        else {
            this.updater(stateOrUpdaterFn)();
        }
    }
    /**
     * Patches the state with provided partial state.
     *
     * @param partialStateOrUpdaterFn a partial state or a partial updater
     * function that accepts the state and returns the partial state.
     * @throws Error if the state is not initialized.
     */
    patchState(partialStateOrUpdaterFn) {
        const patchedState = typeof partialStateOrUpdaterFn === "function" ? partialStateOrUpdaterFn(this.get()) : partialStateOrUpdaterFn;
        this.updater((state, partialState) => __spreadValues(__spreadValues({}, state), partialState))(patchedState);
    }
    get(projector) {
        this.assertStateIsInitialized();
        let value;
        this.stateSubject$.pipe(take(1)).subscribe(state => {
            value = projector ? projector(state) : state;
        });
        return value;
    }
    select(...args) {
        const { observablesOrSelectorsObject, projector, config } = processSelectorArgs(args);
        const source$ = hasProjectFnOnly(observablesOrSelectorsObject, projector) ? this.stateSubject$ : combineLatest(observablesOrSelectorsObject);
        return source$.pipe(config.debounce ? debounceSync() : noopOperator(), projector ? map(projectorArgs => 
        // projectorArgs could be an Array in case where the entire state is an Array, so adding this check
        observablesOrSelectorsObject.length > 0 && Array.isArray(projectorArgs) ? projector(...projectorArgs) : projector(projectorArgs)) : noopOperator(), distinctUntilChanged(config.equal), shareReplay({
            refCount: true,
            bufferSize: 1
        }), takeUntil(this.destroy$));
    }
    selectSignal(...args) {
        const selectSignalArgs = [...args];
        const options = typeof selectSignalArgs[args.length - 1] === "object" ? selectSignalArgs.pop() : {};
        const projector = selectSignalArgs.pop();
        const signals = selectSignalArgs;
        const computation = signals.length === 0 ? () => projector(this.state()) : () => {
            const values = signals.map(signal => signal());
            return projector(...values);
        };
        return computed(computation, options);
    }
    /**
     * Creates an effect.
     *
     * This effect is subscribed to throughout the lifecycle of the ComponentStore.
     * @param generator A function that takes an origin Observable input and
     *     returns an Observable. The Observable that is returned will be
     *     subscribed to for the life of the component.
     * @return A function that, when called, will trigger the origin Observable.
     */
    effect(generator) {
        const origin$ = new Subject();
        generator(origin$).pipe(takeUntil(this.destroy$)).subscribe();
        return observableOrValue => {
            const observable$ = isObservable(observableOrValue) ? observableOrValue : of(observableOrValue);
            return observable$.pipe(takeUntil(this.destroy$)).subscribe(value => {
                origin$.next(value);
            });
        };
    }
    /**
     * Used to check if lifecycle hooks are defined
     * but not used with provideComponentStore()
     */
    checkProviderForHooks() {
        asapScheduler.schedule(() => {
            if (isDevMode() && (isOnStoreInitDefined(this) || isOnStateInitDefined(this)) && !this.ɵhasProvider) {
                const warnings = [isOnStoreInitDefined(this) ? "OnStoreInit" : "", isOnStateInitDefined(this) ? "OnStateInit" : ""].filter(defined => defined);
                console.warn(`@ngrx/component-store: ${this.constructor.name} has the ${warnings.join(" and ")} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`);
            }
        });
    }
    assertStateIsInitialized() {
        if (!this.isInitialized) {
            throw new Error(`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`);
        }
    }
};
_ComponentStore.ɵfac = function ComponentStore_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComponentStore)(i0.ɵɵinject(INITIAL_STATE_TOKEN, 8));
};
_ComponentStore.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _ComponentStore,
    factory: _ComponentStore.ɵfac
});
var ComponentStore = _ComponentStore;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentStore, [{
            type: Injectable
        }], () => [{
            type: void 0,
            decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [INITIAL_STATE_TOKEN]
                }]
        }], null);
})();
function processSelectorArgs(args) {
    const selectorArgs = Array.from(args);
    const defaultEqualityFn = (previous, current) => previous === current;
    let config = {
        debounce: false,
        equal: defaultEqualityFn
    };
    if (isSelectConfig(selectorArgs[selectorArgs.length - 1])) {
        config = __spreadValues(__spreadValues({}, config), selectorArgs.pop());
    }
    if (selectorArgs.length === 1 && typeof selectorArgs[0] !== "function") {
        return {
            observablesOrSelectorsObject: selectorArgs[0],
            projector: void 0,
            config
        };
    }
    const projector = selectorArgs.pop();
    const observables = selectorArgs;
    return {
        observablesOrSelectorsObject: observables,
        projector,
        config
    };
}
function isSelectConfig(arg) {
    const typedArg = arg;
    return typeof typedArg.debounce !== "undefined" || typeof typedArg.equal !== "undefined";
}
function hasProjectFnOnly(observablesOrSelectorsObject, projector) {
    return Array.isArray(observablesOrSelectorsObject) && observablesOrSelectorsObject.length === 0 && projector;
}
function noopOperator() {
    return source$ => source$;
}
export { ComponentStore, INITIAL_STATE_TOKEN, provideComponentStore };
/*! Bundled license information:

@ngrx/component-store/fesm2022/ngrx-component-store.mjs:
  (**
   * @license MIT License
   *
   * Copyright (c) 2017-2020 Nicholas Jamieson and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *)
*/ 
