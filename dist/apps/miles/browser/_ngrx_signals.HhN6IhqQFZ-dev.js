import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@ngrx/signals/fesm2022/ngrx-signals.mjs
import * as i0 from "@angular/core";
import { untracked, isSignal, computed, assertInInjectionContext, inject, Injector, effect, DestroyRef, signal, Injectable, linkedSignal } from "@angular/core";
var DEEP_SIGNAL = Symbol("DEEP_SIGNAL");
function toDeepSignal(signal2) {
    return new Proxy(signal2, {
        has(target, prop) {
            return !!this.get(target, prop, void 0);
        },
        get(target, prop) {
            const value = untracked(target);
            if (!isRecord(value) || !(prop in value)) {
                if (isSignal(target[prop]) && target[prop][DEEP_SIGNAL]) {
                    delete target[prop];
                }
                return target[prop];
            }
            if (!isSignal(target[prop])) {
                Object.defineProperty(target, prop, {
                    value: computed(() => target()[prop]),
                    configurable: true
                });
                target[prop][DEEP_SIGNAL] = true;
            }
            return toDeepSignal(target[prop]);
        }
    });
}
var nonRecords = [WeakSet, WeakMap, Promise, Date, Error, RegExp, ArrayBuffer, DataView, Function];
function isRecord(value) {
    if (value === null || typeof value !== "object" || isIterable(value)) {
        return false;
    }
    let proto = Object.getPrototypeOf(value);
    if (proto === Object.prototype) {
        return true;
    }
    while (proto && proto !== Object.prototype) {
        if (nonRecords.includes(proto.constructor)) {
            return false;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return proto === Object.prototype;
}
function isIterable(value) {
    return typeof value?.[Symbol.iterator] === "function";
}
function deepComputed(computation) {
    return toDeepSignal(computed(computation));
}
function signalMethod(processingFn, config) {
    if (!config?.injector) {
        assertInInjectionContext(signalMethod);
    }
    const watchers = [];
    const sourceInjector = config?.injector ?? inject(Injector);
    const signalMethodFn = (input, config2) => {
        if (isSignal(input)) {
            const callerInjector = getCallerInjector();
            if (typeof ngDevMode !== "undefined" && ngDevMode && config2?.injector === void 0 && callerInjector === void 0) {
                console.warn("@ngrx/signals: The function returned by signalMethod was called", "outside the injection context with a signal. This may lead to", "a memory leak. Make sure to call it within the injection context", "(e.g. in a constructor or field initializer) or pass an injector", "explicitly via the config parameter.\n\nFor more information, see:", "https://ngrx.io/guide/signals/signal-method#automatic-cleanup");
            }
            const instanceInjector = config2?.injector ?? callerInjector ?? sourceInjector;
            const watcher = effect(() => {
                const value = input();
                untracked(() => processingFn(value));
            }, {
                injector: instanceInjector
            });
            watchers.push(watcher);
            instanceInjector.get(DestroyRef).onDestroy(() => {
                const ix = watchers.indexOf(watcher);
                if (ix !== -1) {
                    watchers.splice(ix, 1);
                }
            });
            return watcher;
        }
        else {
            processingFn(input);
            return {
                destroy: () => void 0
            };
        }
    };
    signalMethodFn.destroy = () => watchers.forEach(watcher => watcher.destroy());
    return signalMethodFn;
}
function getCallerInjector() {
    try {
        return inject(Injector);
    }
    catch {
        return void 0;
    }
}
var STATE_WATCHERS = /* @__PURE__ */ new WeakMap();
var STATE_SOURCE = Symbol("STATE_SOURCE");
function isWritableSignal(value) {
    return isSignal(value) && "set" in value && "update" in value && typeof value.set === "function" && typeof value.update === "function";
}
function isWritableStateSource(stateSource) {
    const signals = stateSource[STATE_SOURCE];
    return Reflect.ownKeys(stateSource[STATE_SOURCE]).every(key => {
        return isWritableSignal(signals[key]);
    });
}
function patchState(stateSource, ...updaters) {
    const currentState = untracked(() => getState(stateSource));
    const newState = updaters.reduce((nextState, updater) => __spreadValues(__spreadValues({}, nextState), typeof updater === "function" ? updater(nextState) : updater), currentState);
    const signals = stateSource[STATE_SOURCE];
    const stateKeys = Reflect.ownKeys(stateSource[STATE_SOURCE]);
    for (const key of Reflect.ownKeys(newState)) {
        if (stateKeys.includes(key)) {
            const signalKey = key;
            if (currentState[signalKey] !== newState[signalKey]) {
                signals[signalKey].set(newState[signalKey]);
            }
        }
        else if (typeof ngDevMode !== "undefined" && ngDevMode) {
            console.warn(`@ngrx/signals: patchState was called with an unknown state slice '${String(key)}'.`, "Ensure that all state properties are explicitly defined in the initial state.", "Updates to properties not present in the initial state will be ignored.");
        }
    }
    notifyWatchers(stateSource);
}
function getState(stateSource) {
    const signals = stateSource[STATE_SOURCE];
    return Reflect.ownKeys(stateSource[STATE_SOURCE]).reduce((state, key) => {
        const value = signals[key]();
        return __spreadProps(__spreadValues({}, state), {
            [key]: value
        });
    }, {});
}
function watchState(stateSource, watcher, config) {
    if (!config?.injector) {
        assertInInjectionContext(watchState);
    }
    const injector = config?.injector ?? inject(Injector);
    const destroyRef = injector.get(DestroyRef);
    addWatcher(stateSource, watcher);
    watcher(getState(stateSource));
    const destroy = () => removeWatcher(stateSource, watcher);
    destroyRef.onDestroy(destroy);
    return {
        destroy
    };
}
function getWatchers(stateSource) {
    return STATE_WATCHERS.get(stateSource[STATE_SOURCE]) || [];
}
function notifyWatchers(stateSource) {
    const watchers = getWatchers(stateSource);
    for (const watcher of watchers) {
        const state = untracked(() => getState(stateSource));
        watcher(state);
    }
}
function addWatcher(stateSource, watcher) {
    const watchers = getWatchers(stateSource);
    STATE_WATCHERS.set(stateSource[STATE_SOURCE], [...watchers, watcher]);
}
function removeWatcher(stateSource, watcher) {
    const watchers = getWatchers(stateSource);
    STATE_WATCHERS.set(stateSource[STATE_SOURCE], watchers.filter(w => w !== watcher));
}
function signalState(initialState) {
    const stateKeys = Reflect.ownKeys(initialState);
    const stateSource = stateKeys.reduce((signalsDict, key) => __spreadProps(__spreadValues({}, signalsDict), {
        [key]: signal(initialState[key])
    }), {});
    const signalState2 = computed(() => stateKeys.reduce((state, key) => __spreadProps(__spreadValues({}, state), {
        [key]: stateSource[key]()
    }), {}));
    Object.defineProperty(signalState2, STATE_SOURCE, {
        value: stateSource
    });
    for (const key of stateKeys) {
        Object.defineProperty(signalState2, key, {
            value: toDeepSignal(stateSource[key])
        });
    }
    return signalState2;
}
function signalStore(...args) {
    const signalStoreArgs = [...args];
    const config = typeof signalStoreArgs[0] === "function" ? {} : signalStoreArgs.shift();
    const features = signalStoreArgs;
    class SignalStore {
        constructor() {
            const innerStore = features.reduce((store, feature) => feature(store), getInitialInnerStore());
            const { stateSignals, props, methods, hooks } = innerStore;
            const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, stateSignals), props), methods);
            this[STATE_SOURCE] = innerStore[STATE_SOURCE];
            for (const key of Reflect.ownKeys(storeMembers)) {
                this[key] = storeMembers[key];
            }
            const { onInit, onDestroy } = hooks;
            if (onInit) {
                onInit();
            }
            if (onDestroy) {
                inject(DestroyRef).onDestroy(onDestroy);
            }
        }
        /** @nocollapse */
        static ɵfac = function SignalStore_Factory(__ngFactoryType__) {
            return new (__ngFactoryType__ || SignalStore)();
        };
        /** @nocollapse */
        static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
            token: SignalStore,
            factory: SignalStore.ɵfac,
            providedIn: config.providedIn || null
        });
    }
    (() => {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignalStore, [{
                type: Injectable,
                args: [{
                        providedIn: config.providedIn || null
                    }]
            }], () => [], null);
    })();
    return SignalStore;
}
function getInitialInnerStore() {
    return {
        [STATE_SOURCE]: {},
        stateSignals: {},
        props: {},
        methods: {},
        hooks: {}
    };
}
function signalStoreFeature(...args) {
    const features = typeof args[0] === "function" ? args : args.slice(1);
    return inputStore => features.reduce((store, feature) => feature(store), inputStore);
}
function type() {
    return void 0;
}
function assertUniqueStoreMembers(store, newMemberKeys) {
    if (typeof ngDevMode === "undefined" || !ngDevMode) {
        return;
    }
    const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, store.stateSignals), store.props), store.methods);
    const overriddenKeys = Reflect.ownKeys(storeMembers).filter(memberKey => newMemberKeys.includes(memberKey));
    if (overriddenKeys.length > 0) {
        console.warn("@ngrx/signals: SignalStore members cannot be overridden.", "Trying to override:", overriddenKeys.map(key => String(key)).join(", "));
    }
}
function withProps(propsFactory) {
    return store => {
        const props = propsFactory(__spreadValues(__spreadValues(__spreadValues({
            [STATE_SOURCE]: store[STATE_SOURCE]
        }, store.stateSignals), store.props), store.methods));
        assertUniqueStoreMembers(store, Reflect.ownKeys(props));
        return __spreadProps(__spreadValues({}, store), {
            props: __spreadValues(__spreadValues({}, store.props), props)
        });
    };
}
function withComputed(computedFactory) {
    return withProps(store => {
        const computedResult = computedFactory(store);
        const computedResultKeys = Reflect.ownKeys(computedResult);
        return computedResultKeys.reduce((prev, key) => {
            const signalOrComputation = computedResult[key];
            return __spreadProps(__spreadValues({}, prev), {
                [key]: isSignal(signalOrComputation) ? signalOrComputation : computed(signalOrComputation)
            });
        }, {});
    });
}
function withFeature(featureFactory) {
    return store => {
        const storeForFactory = __spreadValues(__spreadValues(__spreadValues({
            [STATE_SOURCE]: store[STATE_SOURCE]
        }, store["stateSignals"]), store["props"]), store["methods"]);
        return featureFactory(storeForFactory)(store);
    };
}
function withHooks(hooksOrFactory) {
    return store => {
        const storeMembers = __spreadValues(__spreadValues(__spreadValues({
            [STATE_SOURCE]: store[STATE_SOURCE]
        }, store.stateSignals), store.props), store.methods);
        const hooks = typeof hooksOrFactory === "function" ? hooksOrFactory(storeMembers) : hooksOrFactory;
        const createHook = name => {
            const hook = hooks[name];
            const currentHook = store.hooks[name];
            return hook ? () => {
                if (currentHook) {
                    currentHook();
                }
                hook(storeMembers);
            } : currentHook;
        };
        return __spreadProps(__spreadValues({}, store), {
            hooks: {
                onInit: createHook("onInit"),
                onDestroy: createHook("onDestroy")
            }
        });
    };
}
function withLinkedState(linkedStateFactory) {
    return store => {
        const linkedState = linkedStateFactory(__spreadValues(__spreadValues({}, store.stateSignals), store.props));
        const stateKeys = Reflect.ownKeys(linkedState);
        const stateSource = store[STATE_SOURCE];
        const stateSignals = {};
        for (const key of stateKeys) {
            const signalOrComputationFn = linkedState[key];
            stateSource[key] = isWritableSignal(signalOrComputationFn) ? signalOrComputationFn : linkedSignal(signalOrComputationFn);
            stateSignals[key] = toDeepSignal(stateSource[key]);
        }
        return __spreadProps(__spreadValues({}, store), {
            stateSignals: __spreadValues(__spreadValues({}, store.stateSignals), stateSignals)
        });
    };
}
function withMethods(methodsFactory) {
    return store => {
        const methods = methodsFactory(__spreadValues(__spreadValues(__spreadValues({
            [STATE_SOURCE]: store[STATE_SOURCE]
        }, store.stateSignals), store.props), store.methods));
        assertUniqueStoreMembers(store, Reflect.ownKeys(methods));
        return __spreadProps(__spreadValues({}, store), {
            methods: __spreadValues(__spreadValues({}, store.methods), methods)
        });
    };
}
function withState(stateOrFactory) {
    return store => {
        const state = typeof stateOrFactory === "function" ? stateOrFactory() : stateOrFactory;
        const stateKeys = Reflect.ownKeys(state);
        assertUniqueStoreMembers(store, stateKeys);
        const stateSource = store[STATE_SOURCE];
        const stateSignals = {};
        for (const key of stateKeys) {
            stateSource[key] = signal(state[key]);
            stateSignals[key] = toDeepSignal(stateSource[key]);
        }
        return __spreadProps(__spreadValues({}, store), {
            stateSignals: __spreadValues(__spreadValues({}, store.stateSignals), stateSignals)
        });
    };
}
export { deepComputed, getState, isWritableStateSource, patchState, signalMethod, signalState, signalStore, signalStoreFeature, type, watchState, withComputed, withFeature, withHooks, withLinkedState, withMethods, withProps, withState };
