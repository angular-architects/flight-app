import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular-architects/ngrx-toolkit/fesm2022/angular-architects-ngrx-toolkit-redux-connector.mjs
import * as i0 from "@angular/core";
import { Injectable, inject, makeEnvironmentProviders, provideEnvironmentInitializer, Injector } from "@angular/core";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, tap, map } from "rxjs";
function isUnsubscribable(fn) {
    return !!fn?.unsubscribe;
}
function capitalize(str) {
    return str ? str[0].toUpperCase() + str.substring(1) : str;
}
function isActionCreator(action) {
    return Boolean(typeof action === "function" && action && "type" in action && action.type && typeof action.type === "string");
}
var _SignalReduxStore = class _SignalReduxStore {
    constructor() {
        this.mapperDict = {};
        this.dispatch = rxMethod(pipe(tap(action => {
            const callbacks = this.mapperDict[action.type];
            if (callbacks?.storeMethod) {
                if (isUnsubscribable(callbacks.storeMethod) && callbacks.resultMethod) {
                    return callbacks.storeMethod(action, a => {
                        const resultAction = callbacks.resultMethod?.(a);
                        this.dispatch(resultAction);
                    });
                }
                return callbacks?.storeMethod(action);
            }
            return;
        })));
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    connectFeatureStore(mappers) {
        mappers.forEach(mapper => mapper.types.forEach(action => this.mapperDict[action] = {
            storeMethod: mapper.storeMethod,
            resultMethod: mapper.resultMethod
        }));
    }
};
_SignalReduxStore.ɵfac = function SignalReduxStore_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignalReduxStore)();
};
_SignalReduxStore.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _SignalReduxStore,
    factory: _SignalReduxStore.ɵfac,
    providedIn: "root"
});
var SignalReduxStore = _SignalReduxStore;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignalReduxStore, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
function injectReduxDispatch() {
    return inject(SignalReduxStore).dispatch;
}
function mapAction(...args) {
    let resultMethod = args.pop();
    let storeMethod = args.pop();
    if (isActionCreator(storeMethod)) {
        args.push(storeMethod);
        storeMethod = resultMethod || storeMethod;
        resultMethod = void 0;
    }
    const types = args.map(creator => creator.type);
    return {
        types,
        storeMethod,
        resultMethod
    };
}
function withActionMappers(...mappers) {
    return mappers;
}
function createReduxState(storeName, signalStore, withActionMappers2) {
    const isRootProvider = signalStore?.ɵprov?.providedIn === "root";
    return {
        [`provide${capitalize(storeName)}Store`]: (connectReduxDevtools = false) => makeEnvironmentProviders([isRootProvider ? [] : signalStore, provideEnvironmentInitializer(() => {
                const initializerFn = ((signalReduxStore = inject(SignalReduxStore), store = inject(signalStore)) => () => {
                    if (connectReduxDevtools) { }
                    signalReduxStore.connectFeatureStore(withActionMappers2(store));
                })();
                return initializerFn();
            })]),
        [`inject${capitalize(storeName)}Store`]: () => Object.assign(inject(signalStore), {
            dispatch: injectReduxDispatch()
        })
    };
}
function reduxMethod(generator, resultMethodOrConfig, config) {
    const injector = inject(Injector);
    if (typeof resultMethodOrConfig === "function") {
        let unsubscribable;
        const inputResultFn = (input, resultMethod = resultMethodOrConfig) => {
            const rxMethodWithResult = rxMethod(pipe(generator, map(resultMethod)), __spreadProps(__spreadValues({}, config || {}), {
                injector: config?.injector || injector
            }));
            const rxWithInput = rxMethodWithResult(input);
            unsubscribable = {
                unsubscribe: rxWithInput.destroy.bind(rxWithInput)
            };
            return rxWithInput;
        };
        inputResultFn.destroy = () => unsubscribable?.unsubscribe();
        return inputResultFn;
    }
    return rxMethod(generator, resultMethodOrConfig);
}
export { createReduxState, mapAction, reduxMethod, withActionMappers };
