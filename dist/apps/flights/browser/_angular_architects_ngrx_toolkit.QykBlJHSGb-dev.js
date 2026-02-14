import { __async, __privateAdd, __privateGet, __privateSet, __privateWrapper, __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular-architects/ngrx-toolkit/fesm2022/angular-architects-ngrx-toolkit.mjs
import * as i0 from "@angular/core";
import { Injectable, InjectionToken, signal, effect, inject, PLATFORM_ID, computed, isSignal, untracked, isDevMode as isDevMode$1, DestroyRef } from "@angular/core";
import { watchState, getState, signalStoreFeature, withMethods, withHooks, patchState as patchState$1, withState, withComputed, withProps, withLinkedState } from "@ngrx/signals";
import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { Subject, switchMap, mergeMap, concatMap, exhaustMap, defer, tap, catchError, EMPTY, finalize, filter, map } from "rxjs";
import { removeEntity, setAllEntities, updateEntity, addEntity } from "@ngrx/signals/entities";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { HttpClient, HttpEventType, HttpResponse } from "@angular/common/http";
var DEVTOOLS_FEATURE = Symbol("DEVTOOLS_FEATURE");
function createDevtoolsFeature(options) {
    return __spreadValues({
        [DEVTOOLS_FEATURE]: true
    }, options);
}
function withDisabledNameIndices() {
    return createDevtoolsFeature({
        indexNames: false
    });
}
function throwIfNull(obj) {
    if (obj === null || obj === void 0) {
        throw new Error("");
    }
    return obj;
}
var _stores, _callback;
var _GlitchTrackerService = class _GlitchTrackerService {
    constructor() {
        __privateAdd(this, _stores, {});
        __privateAdd(this, _callback);
    }
    get stores() {
        return Object.entries(__privateGet(this, _stores)).reduce((acc, [id, { store }]) => {
            acc[id] = store;
            return acc;
        }, {});
    }
    onChange(callback) {
        __privateSet(this, _callback, callback);
    }
    removeStore(id) {
        __privateSet(this, _stores, Object.entries(__privateGet(this, _stores)).reduce((newStore, [storeId, value]) => {
            if (storeId !== id) {
                newStore[storeId] = value;
            }
            else {
                value.destroyWatcher();
            }
            return newStore;
        }, {}));
        throwIfNull(__privateGet(this, _callback))({});
    }
    track(id, store) {
        const watcher = watchState(store, state => {
            throwIfNull(__privateGet(this, _callback))({
                [id]: state
            });
        });
        __privateGet(this, _stores)[id] = {
            destroyWatcher: watcher.destroy,
            store
        };
    }
    notifyRenamedStore(id) {
        if (Object.keys(__privateGet(this, _stores)).includes(id) && __privateGet(this, _callback)) {
            __privateGet(this, _callback).call(this, {
                [id]: getState(__privateGet(this, _stores)[id].store)
            });
        }
    }
};
_stores = new WeakMap();
_callback = new WeakMap();
_GlitchTrackerService.ɵfac = function GlitchTrackerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlitchTrackerService)();
};
_GlitchTrackerService.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _GlitchTrackerService,
    factory: _GlitchTrackerService.ɵfac,
    providedIn: "root"
});
var GlitchTrackerService = _GlitchTrackerService;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlitchTrackerService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
function withGlitchTracking() {
    return createDevtoolsFeature({
        tracker: GlitchTrackerService
    });
}
function withMapper(map2) {
    return createDevtoolsFeature({
        map: map2
    });
}
function provideDevtoolsConfig(config) {
    return {
        provide: REDUX_DEVTOOLS_CONFIG,
        useValue: config
    };
}
var REDUX_DEVTOOLS_CONFIG = new InjectionToken("ReduxDevtoolsConfig");
var _stores2, _trackCallback, _trackingEffect;
var _DefaultTracker = class _DefaultTracker {
    constructor() {
        __privateAdd(this, _stores2, signal({}, ...(ngDevMode ? [{
                debugName: "#stores"
            }] : [])));
        __privateAdd(this, _trackCallback);
        __privateAdd(this, _trackingEffect, effect(() => {
            if (__privateGet(this, _trackCallback) === void 0) {
                throw new Error("no callback function defined");
            }
            const stores = __privateGet(this, _stores2).call(this);
            const fullState = Object.entries(stores).reduce((acc, [id, store]) => {
                return __spreadProps(__spreadValues({}, acc), {
                    [id]: getState(store)
                });
            }, {});
            __privateGet(this, _trackCallback).call(this, fullState);
        }, ...(ngDevMode ? [{
                debugName: "#trackingEffect"
            }] : [])));
    }
    get stores() {
        return __privateGet(this, _stores2).call(this);
    }
    track(id, store) {
        __privateGet(this, _stores2).update(value => __spreadProps(__spreadValues({}, value), {
            [id]: store
        }));
    }
    onChange(callback) {
        __privateSet(this, _trackCallback, callback);
    }
    removeStore(id) {
        __privateGet(this, _stores2).update(stores => Object.entries(stores).reduce((newStore, [storeId, state]) => {
            if (storeId !== id) {
                newStore[storeId] = state;
            }
            return newStore;
        }, {}));
    }
    notifyRenamedStore(id) {
        if (__privateGet(this, _stores2).call(this)[id]) {
            __privateGet(this, _stores2).update(stores => {
                return __spreadValues({}, stores);
            });
        }
    }
};
_stores2 = new WeakMap();
_trackCallback = new WeakMap();
_trackingEffect = new WeakMap();
_DefaultTracker.ɵfac = function DefaultTracker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultTracker)();
};
_DefaultTracker.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _DefaultTracker,
    factory: _DefaultTracker.ɵfac,
    providedIn: "root"
});
var DefaultTracker = _DefaultTracker;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultTracker, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var currentActionNames = /* @__PURE__ */ new Set();
var dummyConnection = {
    send: () => void 0
};
var _stores3, _isBrowser, _trackers, _devtoolsConfig, _currentState, _currentId, _connection;
var _DevtoolsSyncer = class _DevtoolsSyncer {
    constructor() {
        /**
         * Stores all SignalStores that are connected to the
         * DevTools along their options, names and id.
         */
        __privateAdd(this, _stores3, {});
        __privateAdd(this, _isBrowser, isPlatformBrowser(inject(PLATFORM_ID)));
        __privateAdd(this, _trackers, []);
        __privateAdd(this, _devtoolsConfig, __spreadValues({
            name: "NgRx SignalStore"
        }, inject(REDUX_DEVTOOLS_CONFIG, {
            optional: true
        })));
        /**
         * Maintains the current states of all stores to avoid conflicts
         * between glitch-free and glitched trackers when used simultaneously.
         *
         * The challenge lies in ensuring that glitched trackers do not
         * interfere with the synchronization process of glitch-free trackers.
         * Specifically, glitched trackers could cause the synchronization to
         * read the current state of stores managed by glitch-free trackers.
         *
         * Therefore, the synchronization process doesn't read the state from
         * each store, but relies on #currentState.
         *
         * Please note, that here the key is the name and not the id.
         */
        __privateAdd(this, _currentState, {});
        __privateAdd(this, _currentId, 1);
        __privateAdd(this, _connection, __privateGet(this, _isBrowser) ? window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__.connect(__privateGet(this, _devtoolsConfig)) : dummyConnection : dummyConnection);
        if (!__privateGet(this, _isBrowser)) {
            return;
        }
    }
    ngOnDestroy() {
        currentActionNames.clear();
    }
    syncToDevTools(changedStatePerId) {
        const mappedChangedStatePerName = Object.entries(changedStatePerId).reduce((acc, [id, store]) => {
            const { options, name } = __privateGet(this, _stores3)[id];
            acc[name] = options.map(store);
            return acc;
        }, {});
        __privateSet(this, _currentState, __spreadValues(__spreadValues({}, __privateGet(this, _currentState)), mappedChangedStatePerName));
        const names = Array.from(currentActionNames);
        const type = names.length ? names.join(", ") : "Store Update";
        currentActionNames.clear();
        __privateGet(this, _connection).send({
            type
        }, __privateGet(this, _currentState));
    }
    getNextId() {
        return String(__privateWrapper(this, _currentId)._++);
    }
    /**
     * Consumer provides the id. That is because we can only start
     * tracking the store in the init hook.
     * Unfortunately, methods for renaming having the final id
     * need to be defined already before.
     * That's why `withDevtools` requests first the id and
     * then registers itself later.
     */
    addStore(id, name, store, options) {
        let storeName2 = name;
        const names = Object.values(__privateGet(this, _stores3)).map(store2 => store2.name);
        if (names.includes(storeName2)) {
            if (!options.indexNames) {
                throw new Error(`An instance of the store ${storeName2} already exists. Enable automatic indexing via withDevTools('${storeName2}', { indexNames: true }), or rename it upon instantiation.`);
            }
        }
        for (let i = 1; names.includes(storeName2); i++) {
            storeName2 = `${name}-${i}`;
        }
        __privateGet(this, _stores3)[id] = {
            name: storeName2,
            options
        };
        const tracker = options.tracker;
        if (!__privateGet(this, _trackers).includes(tracker)) {
            __privateGet(this, _trackers).push(tracker);
        }
        tracker.onChange(changedState => this.syncToDevTools(changedState));
        tracker.track(id, store);
    }
    removeStore(id) {
        const name = __privateGet(this, _stores3)[id].name;
        __privateSet(this, _stores3, Object.entries(__privateGet(this, _stores3)).reduce((newStore, [storeId, value]) => {
            if (storeId !== id) {
                newStore[storeId] = value;
            }
            return newStore;
        }, {}));
        __privateSet(this, _currentState, Object.entries(__privateGet(this, _currentState)).reduce((newState, [storeName2, state]) => {
            if (storeName2 !== name) {
                newState[storeName2] = state;
            }
            return newState;
        }, {}));
        for (const tracker of __privateGet(this, _trackers)) {
            tracker.removeStore(id);
        }
    }
    /**
     * Renames a store identified by its internal id. If the store has already
     * been removed (e.g. due to component destruction), this is a no-op.
     */
    renameStore(id, newName) {
        const storeEntry = __privateGet(this, _stores3)[id];
        if (!storeEntry) {
            return;
        }
        const oldName = storeEntry.name;
        if (oldName === newName) {
            return;
        }
        const otherStoreNames = Object.entries(__privateGet(this, _stores3)).filter(([entryId]) => entryId !== id).map(([, s]) => s.name);
        if (otherStoreNames.includes(newName)) {
            throw new Error(`NgRx Toolkit/DevTools: cannot rename from ${oldName} to ${newName}. ${newName} is already assigned to another SignalStore instance.`);
        }
        __privateSet(this, _stores3, Object.entries(__privateGet(this, _stores3)).reduce((newStore, [entryId, value]) => {
            if (entryId === id) {
                newStore[entryId] = __spreadProps(__spreadValues({}, value), {
                    name: newName
                });
            }
            else {
                newStore[entryId] = value;
            }
            return newStore;
        }, {}));
        __privateSet(this, _currentState, Object.entries(__privateGet(this, _currentState)).reduce((newState, [storeName2, state]) => {
            if (storeName2 !== oldName) {
                newState[storeName2] = state;
            }
            return newState;
        }, {}));
        __privateGet(this, _trackers).forEach(tracker => tracker.notifyRenamedStore(id));
    }
};
_stores3 = new WeakMap();
_isBrowser = new WeakMap();
_trackers = new WeakMap();
_devtoolsConfig = new WeakMap();
_currentState = new WeakMap();
_currentId = new WeakMap();
_connection = new WeakMap();
_DevtoolsSyncer.ɵfac = function DevtoolsSyncer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DevtoolsSyncer)();
};
_DevtoolsSyncer.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _DevtoolsSyncer,
    factory: _DevtoolsSyncer.ɵfac,
    providedIn: "root"
});
var DevtoolsSyncer = _DevtoolsSyncer;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DevtoolsSyncer, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var renameDevtoolsMethodName = "___renameDevtoolsName";
var uniqueDevtoolsId = "___uniqueDevtoolsId";
var EXISTING_NAMES = new InjectionToken("Array contain existing names for the signal stores", {
    factory: () => [],
    providedIn: "root"
});
function withDevtools(name, ...features) {
    return signalStoreFeature(withMethods(() => {
        const syncer = inject(DevtoolsSyncer);
        const id = syncer.getNextId();
        return {
            [renameDevtoolsMethodName]: newName => {
                syncer.renameStore(id, newName);
            },
            [uniqueDevtoolsId]: () => id
        };
    }), withHooks(store => {
        const syncer = inject(DevtoolsSyncer);
        const id = String(store[uniqueDevtoolsId]());
        return {
            onInit() {
                const id2 = String(store[uniqueDevtoolsId]());
                const finalOptions = {
                    indexNames: !features.some(f => f.indexNames === false),
                    map: features.find(f => f.map)?.map ?? (state => state),
                    tracker: inject(features.find(f => f.tracker)?.tracker || DefaultTracker)
                };
                syncer.addStore(id2, name, store, finalOptions);
            },
            onDestroy() {
                syncer.removeStore(id);
            }
        };
    }));
}
function renameDevtoolsName(store, newName) {
    const renameMethod = store[renameDevtoolsMethodName];
    if (!renameMethod) {
        throw new Error("Devtools extensions haven't been added to this store.");
    }
    renameMethod(newName);
}
var patchState = (state, action, ...rest) => {
    updateState(state, action, ...rest);
};
function updateState(stateSource, action, ...updaters) {
    currentActionNames.add(action);
    return patchState$1(stateSource, ...updaters);
}
var withDevToolsStub = () => store => store;
function assertActionFnSpecs(obj) {
    if (!obj || typeof obj !== "object") {
        throw new Error("%o is not an Action Specification");
    }
}
function payload() {
    return {};
}
var noPayload = {};
function createReducer(reducerFactory) {
    return reducerFactory;
}
function createEffects(actions, effectsFactory) {
    return effectsFactory;
}
function createActionFns(actionFnSpecs, reducerRegistry, effectsRegistry, state) {
    const actionFns = {};
    for (const type in actionFnSpecs) {
        const actionFn = payload2 => {
            const fullPayload = __spreadProps(__spreadValues({}, payload2), {
                type
            });
            const reducer = reducerRegistry[type];
            if (reducer) {
                reducer(state, fullPayload);
            }
            const effectSubjects = effectsRegistry[type];
            if (effectSubjects?.length) {
                for (const effectSubject of effectSubjects) {
                    effectSubject.next(fullPayload);
                }
            }
            return fullPayload;
        };
        actionFn.type = type.toString();
        actionFns[type] = actionFn;
    }
    return actionFns;
}
function createPublicAndAllActionsFns(actionFnSpecs, reducerRegistry, effectsRegistry, state) {
    if ("public" in actionFnSpecs || "private" in actionFnSpecs) {
        const privates = actionFnSpecs["private"] || {};
        const publics = actionFnSpecs["public"] || {};
        assertActionFnSpecs(privates);
        assertActionFnSpecs(publics);
        const privateActionFns = createActionFns(privates, reducerRegistry, effectsRegistry, state);
        const publicActionFns = createActionFns(publics, reducerRegistry, effectsRegistry, state);
        return {
            all: __spreadValues(__spreadValues({}, privateActionFns), publicActionFns),
            publics: publicActionFns
        };
    }
    const actionFns = createActionFns(actionFnSpecs, reducerRegistry, effectsRegistry, state);
    return {
        all: actionFns,
        publics: actionFns
    };
}
function fillReducerRegistry(reducer, actionFns, reducerRegistry) {
    function on(action, reducerFn) {
        reducerRegistry[action.type] = reducerFn;
    }
    reducer(actionFns, on);
    return reducerRegistry;
}
function fillEffects(effects, actionFns, effectsRegistry = {}) {
    function create(action) {
        const subject = new Subject();
        if (!(action.type in effectsRegistry)) {
            effectsRegistry[action.type] = [];
        }
        effectsRegistry[action.type].push(subject);
        return subject.asObservable();
    }
    const effectObservables = effects(actionFns, create);
    return Object.values(effectObservables);
}
function startSubscriptions(observables) {
    return observables.map(observable => observable.subscribe());
}
function processRedux(actionFnSpecs, reducer, effects, store) {
    const reducerRegistry = {};
    const effectsRegistry = {};
    const actionsMap = createPublicAndAllActionsFns(actionFnSpecs, reducerRegistry, effectsRegistry, store);
    const actionFns = actionsMap.all;
    const publicActionsFns = actionsMap.publics;
    fillReducerRegistry(reducer, actionFns, reducerRegistry);
    const effectObservables = fillEffects(effects, actionFns, effectsRegistry);
    const subscriptions = startSubscriptions(effectObservables);
    return {
        methods: publicActionsFns,
        subscriptions
    };
}
function withRedux(redux) {
    return store => {
        const { methods } = processRedux(redux.actions, redux.reducer, redux.effects, store);
        return __spreadProps(__spreadValues({}, store), {
            methods: __spreadValues(__spreadValues({}, store.methods), methods)
        });
    };
}
function deriveCallStateKeys(collection) {
    return {
        callStateKey: collection ? `${collection}CallState` : "callState",
        loadingKey: collection ? `${collection}Loading` : "loading",
        loadedKey: collection ? `${collection}Loaded` : "loaded",
        errorKey: collection ? `${collection}Error` : "error"
    };
}
function getCallStateKeys(config) {
    const prop = config?.collection;
    return deriveCallStateKeys(prop);
}
function getCollectionArray(config) {
    return "collections" in config ? config.collections : "collection" in config && config.collection ? [config.collection] : void 0;
}
function withCallState(config) {
    return signalStoreFeature(withState(() => {
        if (!config) {
            return {
                callState: "init"
            };
        }
        const collections = getCollectionArray(config);
        if (collections) {
            return collections.reduce((acc, cur) => __spreadValues(__spreadValues({}, acc), {
                [cur ? `${cur}CallState` : "callState"]: "init"
            }), {});
        }
        return {
            callState: "init"
        };
    }), withComputed(state => {
        if (config) {
            const collections = getCollectionArray(config);
            if (collections) {
                return collections.reduce((acc, cur) => {
                    const { callStateKey: callStateKey2, errorKey: errorKey2, loadedKey: loadedKey2, loadingKey: loadingKey2 } = deriveCallStateKeys(cur);
                    const callState2 = state[callStateKey2];
                    return __spreadProps(__spreadValues({}, acc), {
                        [loadingKey2]: computed(() => callState2() === "loading"),
                        [loadedKey2]: computed(() => callState2() === "loaded"),
                        [errorKey2]: computed(() => {
                            const v = callState2();
                            return typeof v === "object" ? v.error : null;
                        })
                    });
                }, {});
            }
        }
        const { callStateKey, errorKey, loadedKey, loadingKey } = deriveCallStateKeys();
        const callState = state[callStateKey];
        return {
            [loadingKey]: computed(() => callState() === "loading"),
            [loadedKey]: computed(() => callState() === "loaded"),
            [errorKey]: computed(() => {
                const v = callState();
                return typeof v === "object" ? v.error : null;
            })
        };
    }));
}
function setLoading(prop) {
    if (prop) {
        return {
            [`${prop}CallState`]: "loading"
        };
    }
    return {
        callState: "loading"
    };
}
function setLoaded(prop) {
    if (prop) {
        return {
            [`${prop}CallState`]: "loaded"
        };
    }
    else {
        return {
            callState: "loaded"
        };
    }
}
function setError(error, prop) {
    let errorMessage;
    if (!error) {
        errorMessage = "";
    }
    else if (typeof error === "object" && "message" in error) {
        errorMessage = String(error.message);
    }
    else {
        errorMessage = String(error);
    }
    if (prop) {
        return {
            [`${prop}CallState`]: {
                error: errorMessage
            }
        };
    }
    else {
        return {
            callState: {
                error: errorMessage
            }
        };
    }
}
function capitalize(str) {
    return str ? str[0].toUpperCase() + str.substring(1) : str;
}
function getDataServiceKeys(options) {
    const filterKey = options.collection ? `${options.collection}Filter` : "filter";
    const selectedIdsKey = options.collection ? `selected${capitalize(options.collection)}Ids` : "selectedIds";
    const selectedEntitiesKey = options.collection ? `selected${capitalize(options.collection)}Entities` : "selectedEntities";
    const updateFilterKey = options.collection ? `update${capitalize(options.collection)}Filter` : "updateFilter";
    const updateSelectedKey = options.collection ? `updateSelected${capitalize(options.collection)}Entities` : "updateSelected";
    const loadKey = options.collection ? `load${capitalize(options.collection)}Entities` : "load";
    const currentKey = options.collection ? `current${capitalize(options.collection)}` : "current";
    const loadByIdKey = options.collection ? `load${capitalize(options.collection)}ById` : "loadById";
    const setCurrentKey = options.collection ? `setCurrent${capitalize(options.collection)}` : "setCurrent";
    const createKey = options.collection ? `create${capitalize(options.collection)}` : "create";
    const updateKey = options.collection ? `update${capitalize(options.collection)}` : "update";
    const updateAllKey = options.collection ? `updateAll${capitalize(options.collection)}` : "updateAll";
    const deleteKey = options.collection ? `delete${capitalize(options.collection)}` : "delete";
    const entitiesKey = options.collection ? `${options.collection}Entities` : "entities";
    const entityMapKey = options.collection ? `${options.collection}EntityMap` : "entityMap";
    const idsKey = options.collection ? `${options.collection}Ids` : "ids";
    return {
        filterKey,
        selectedIdsKey,
        selectedEntitiesKey,
        updateFilterKey,
        updateSelectedKey,
        loadKey,
        entitiesKey,
        entityMapKey,
        idsKey,
        currentKey,
        loadByIdKey,
        setCurrentKey,
        createKey,
        updateKey,
        updateAllKey,
        deleteKey
    };
}
function withDataService(options) {
    const { dataServiceType, filter: filter2, collection: prefix } = options;
    const { entitiesKey, filterKey, loadKey, selectedEntitiesKey, selectedIdsKey, updateFilterKey, updateSelectedKey, currentKey, createKey, updateKey, updateAllKey, deleteKey, loadByIdKey, setCurrentKey } = getDataServiceKeys(options);
    const { callStateKey } = getCallStateKeys({
        collection: prefix
    });
    return signalStoreFeature(withState(() => ({
        [filterKey]: filter2,
        [selectedIdsKey]: {},
        [currentKey]: void 0
    })), withComputed(store => {
        const entities = store[entitiesKey];
        const selectedIds = store[selectedIdsKey];
        return {
            [selectedEntitiesKey]: computed(() => entities().filter(e => selectedIds()[e.id]))
        };
    }), withMethods(store => {
        const dataService = inject(dataServiceType);
        return {
            [updateFilterKey]: filter3 => {
                patchState$1(store, {
                    [filterKey]: filter3
                });
            },
            [updateSelectedKey]: (id, selected) => {
                patchState$1(store, state => ({
                    [selectedIdsKey]: __spreadProps(__spreadValues({}, state[selectedIdsKey]), {
                        [id]: selected
                    })
                }));
            },
            [loadKey]: () => __async(null, null, function* () {
                const filter3 = store[filterKey];
                (() => store[callStateKey] && patchState$1(store, setLoading(prefix)))();
                try {
                    const result = yield dataService.load(filter3());
                    patchState$1(store, prefix ? setAllEntities(result, {
                        collection: prefix
                    }) : setAllEntities(result));
                    (() => store[callStateKey] && patchState$1(store, setLoaded(prefix)))();
                }
                catch (e) {
                    (() => store[callStateKey] && patchState$1(store, setError(e, prefix)))();
                    throw e;
                }
            }),
            [loadByIdKey]: id => __async(null, null, function* () {
                (() => store[callStateKey] && patchState$1(store, setLoading(prefix)))();
                try {
                    const current = yield dataService.loadById(id);
                    (() => store[callStateKey] && patchState$1(store, setLoaded(prefix)))();
                    patchState$1(store, {
                        [currentKey]: current
                    });
                }
                catch (e) {
                    (() => store[callStateKey] && patchState$1(store, setError(e, prefix)))();
                    throw e;
                }
            }),
            [setCurrentKey]: current => {
                patchState$1(store, {
                    [currentKey]: current
                });
            },
            [createKey]: entity => __async(null, null, function* () {
                patchState$1(store, {
                    [currentKey]: entity
                });
                (() => store[callStateKey] && patchState$1(store, setLoading(prefix)))();
                try {
                    const created = yield dataService.create(entity);
                    patchState$1(store, {
                        [currentKey]: created
                    });
                    patchState$1(store, prefix ? addEntity(created, {
                        collection: prefix
                    }) : addEntity(created));
                    (() => store[callStateKey] && patchState$1(store, setLoaded(prefix)))();
                }
                catch (e) {
                    (() => store[callStateKey] && patchState$1(store, setError(e, prefix)))();
                    throw e;
                }
            }),
            [updateKey]: entity => __async(null, null, function* () {
                patchState$1(store, {
                    [currentKey]: entity
                });
                (() => store[callStateKey] && patchState$1(store, setLoading(prefix)))();
                try {
                    const updated = yield dataService.update(entity);
                    patchState$1(store, {
                        [currentKey]: updated
                    });
                    const updateArg = {
                        id: updated.id,
                        changes: updated
                    };
                    const updater = collection => updateEntity(updateArg, {
                        collection
                    });
                    patchState$1(store, prefix ? updater(prefix) : updateEntity(updateArg));
                    (() => store[callStateKey] && patchState$1(store, setLoaded(prefix)))();
                }
                catch (e) {
                    (() => store[callStateKey] && patchState$1(store, setError(e, prefix)))();
                    throw e;
                }
            }),
            [updateAllKey]: entities => __async(null, null, function* () {
                (() => store[callStateKey] && patchState$1(store, setLoading(prefix)))();
                try {
                    const result = yield dataService.updateAll(entities);
                    patchState$1(store, prefix ? setAllEntities(result, {
                        collection: prefix
                    }) : setAllEntities(result));
                    (() => store[callStateKey] && patchState$1(store, setLoaded(prefix)))();
                }
                catch (e) {
                    (() => store[callStateKey] && patchState$1(store, setError(e, prefix)))();
                    throw e;
                }
            }),
            [deleteKey]: entity => __async(null, null, function* () {
                patchState$1(store, {
                    [currentKey]: entity
                });
                (() => store[callStateKey] && patchState$1(store, setLoading(prefix)))();
                try {
                    yield dataService.delete(entity);
                    patchState$1(store, {
                        [currentKey]: void 0
                    });
                    patchState$1(store, prefix ? removeEntity(entity.id, {
                        collection: prefix
                    }) : removeEntity(entity.id));
                    (() => store[callStateKey] && patchState$1(store, setLoaded(prefix)))();
                }
                catch (e) {
                    (() => store[callStateKey] && patchState$1(store, setError(e, prefix)))();
                    throw e;
                }
            })
        };
    }));
}
function withPagination(options) {
    const { pageKey, pageSizeKey, entitiesKey, selectedPageEntitiesKey, totalCountKey, pageCountKey, pageNavigationArrayMaxKey, pageNavigationArrayKey, hasNextPageKey, hasPreviousPageKey } = createPaginationKeys(options);
    return signalStoreFeature(withState({
        [pageKey]: 0,
        [pageSizeKey]: 10,
        [pageNavigationArrayMaxKey]: 7
    }), withComputed(store => {
        const entities = store[entitiesKey];
        const page = store[pageKey];
        const pageSize = store[pageSizeKey];
        const pageNavigationArrayMax = store[pageNavigationArrayMaxKey];
        return {
            // The derived enitites which are displayed on the current page
            [selectedPageEntitiesKey]: computed(() => {
                const pageSizeValue = pageSize();
                const pageValue = page();
                return entities().slice(pageValue * pageSizeValue, (pageValue + 1) * pageSizeValue);
            }),
            [totalCountKey]: computed(() => entities().length),
            [pageCountKey]: computed(() => {
                const totalCountValue = entities().length;
                const pageSizeValue = pageSize();
                if (totalCountValue === 0) {
                    return 0;
                }
                return Math.ceil(totalCountValue / pageSizeValue);
            }),
            [pageNavigationArrayKey]: computed(() => createPageArray(page(), pageSize(), entities().length, pageNavigationArrayMax())),
            [hasNextPageKey]: computed(() => {
                return page() < pageSize();
            }),
            [hasPreviousPageKey]: computed(() => {
                return page() > 1;
            })
        };
    }));
}
function gotoPage(page, options) {
    const { pageKey } = createPaginationKeys(options);
    return {
        [pageKey]: page
    };
}
function setPageSize(pageSize, options) {
    const { pageSizeKey } = createPaginationKeys(options);
    return {
        [pageSizeKey]: pageSize
    };
}
function nextPage(options) {
    const { pageKey } = createPaginationKeys(options);
    return state => {
        const currentPage = state[pageKey];
        return {
            [pageKey]: currentPage + 1
        };
    };
}
function previousPage(options) {
    const { pageKey } = createPaginationKeys(options);
    return state => {
        const currentPage = state[pageKey];
        return {
            [pageKey]: currentPage - 1
        };
    };
}
function firstPage(options) {
    const { pageKey } = createPaginationKeys(options);
    return {
        [pageKey]: 0
    };
}
function setMaxPageNavigationArrayItems(maxPageNavigationArrayItems, options) {
    const { pageNavigationArrayMaxKey } = createPaginationKeys(options);
    return {
        [pageNavigationArrayMaxKey]: maxPageNavigationArrayItems
    };
}
function createPaginationKeys(options) {
    const entitiesKey = options?.collection ? `${options.collection}Entities` : "entities";
    const selectedPageEntitiesKey = options?.collection ? `selectedPage${capitalize(options?.collection)}Entities` : "selectedPageEntities";
    const pageKey = options?.collection ? `${options.collection}CurrentPage` : "currentPage";
    const pageSizeKey = options?.collection ? `${options.collection}PageSize` : "pageSize";
    const totalCountKey = options?.collection ? `${options.collection}TotalCount` : "totalCount";
    const pageCountKey = options?.collection ? `${options.collection}PageCount` : "pageCount";
    const pageNavigationArrayMaxKey = options?.collection ? `${options.collection}PageNavigationArrayMax` : "pageNavigationArrayMax";
    const pageNavigationArrayKey = options?.collection ? `${options.collection}PageNavigationArray` : "pageNavigationArray";
    const hasNextPageKey = options?.collection ? `hasNext${capitalize(options.collection)}Page` : "hasNextPage";
    const hasPreviousPageKey = options?.collection ? `hasPrevious${capitalize(options.collection)}Page` : "hasPreviousPage";
    return {
        pageKey,
        pageSizeKey,
        entitiesKey,
        selectedPageEntitiesKey,
        totalCountKey,
        pageCountKey,
        pageNavigationArrayKey,
        pageNavigationArrayMaxKey,
        hasNextPageKey,
        hasPreviousPageKey
    };
}
function createPageArray(currentPage, itemsPerPage, totalItems, paginationRange) {
    paginationRange = +paginationRange;
    const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
    const halfWay = Math.ceil(paginationRange / 2);
    const isStart = currentPage <= halfWay;
    const isEnd = totalPages - halfWay < currentPage;
    const isMiddle = !isStart && !isEnd;
    const ellipsesNeeded = paginationRange < totalPages;
    const pages = [];
    for (let i = 1; i <= totalPages && i <= paginationRange; i++) {
        let pageNumber = i;
        if (i === paginationRange) {
            pageNumber = totalPages;
        }
        else if (ellipsesNeeded) {
            if (isEnd) {
                pageNumber = totalPages - paginationRange + i;
            }
            else if (isMiddle) {
                pageNumber = currentPage - halfWay + i;
            }
        }
        const openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
        const closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);
        const label = ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded) ? "..." : pageNumber;
        pages.push({
            label,
            value: pageNumber
        });
    }
    return pages;
}
function withReset() {
    return signalStoreFeature(withProps(() => ({
        _resetState: {
            value: {}
        }
    })), withMethods(store => {
        const methods = {
            resetState() {
                patchState$1(store, store._resetState.value);
            },
            __setResetState__(state) {
                store._resetState.value = state;
            }
        };
        return methods;
    }), withHooks(store => ({
        onInit() {
            store._resetState.value = getState(store);
        }
    })));
}
function setResetState(store, state) {
    if (!("__setResetState__" in store)) {
        throw new Error("Cannot set reset state, since store is not configured with withReset()");
    }
    store.__setResetState__(state);
}
var defaultOptions = {
    maxStackSize: 100,
    keys: [],
    skip: 0
};
function getUndoRedoKeys(collections) {
    if (collections) {
        return collections.flatMap(c => [`${c}EntityMap`, `${c}Ids`, `selected${capitalize(c)}Ids`, `${c}Filter`]);
    }
    return ["entityMap", "ids", "selectedIds", "filter"];
}
function withUndoRedo(options) {
    let previous = null;
    let skipOnce = false;
    const normalized = __spreadValues(__spreadValues({}, defaultOptions), options);
    const undoStack = [];
    const redoStack = [];
    const canUndo = signal(false, ...(ngDevMode ? [{
            debugName: "canUndo"
        }] : []));
    const canRedo = signal(false, ...(ngDevMode ? [{
            debugName: "canRedo"
        }] : []));
    const updateInternal = () => {
        canUndo.set(undoStack.length !== 0);
        canRedo.set(redoStack.length !== 0);
    };
    const keys = [...getUndoRedoKeys(normalized.collections), ...normalized.keys];
    return signalStoreFeature(withComputed(() => ({
        canUndo: canUndo.asReadonly(),
        canRedo: canRedo.asReadonly()
    })), withMethods(store => ({
        undo() {
            const item = undoStack.pop();
            if (item && previous) {
                redoStack.push(previous);
            }
            if (item) {
                skipOnce = true;
                patchState$1(store, item);
                previous = item;
            }
            updateInternal();
        },
        redo() {
            const item = redoStack.pop();
            if (item && previous) {
                undoStack.push(previous);
            }
            if (item) {
                skipOnce = true;
                patchState$1(store, item);
                previous = item;
            }
            updateInternal();
        },
        clearStack() {
            undoStack.splice(0);
            redoStack.splice(0);
            previous = null;
            updateInternal();
        }
    })), withHooks({
        onInit(store) {
            watchState(store, () => {
                const cand = keys.reduce((acc, key) => {
                    const s = store[key];
                    if (s && isSignal(s)) {
                        return __spreadProps(__spreadValues({}, acc), {
                            [key]: s()
                        });
                    }
                    return acc;
                }, {});
                if (normalized.skip > 0) {
                    normalized.skip--;
                    return;
                }
                if (skipOnce) {
                    skipOnce = false;
                    return;
                }
                if (JSON.stringify(cand) === JSON.stringify(previous)) {
                    return;
                }
                redoStack.splice(0);
                if (previous) {
                    undoStack.push(previous);
                }
                if (redoStack.length > normalized.maxStackSize) {
                    undoStack.unshift();
                }
                previous = cand;
                untracked(() => updateInternal());
            });
        }
    }));
}
function deepFreeze(target, propertyNamesToBeFrozen, isRoot = true) {
    const runPropertyNameCheck = propertyNamesToBeFrozen.length > 0;
    for (const key of Reflect.ownKeys(target)) {
        if (runPropertyNameCheck && !propertyNamesToBeFrozen.includes(key)) {
            continue;
        }
        const propValue = target[key];
        if (isRecordLike(propValue) && !Object.isFrozen(propValue)) {
            Object.freeze(propValue);
            deepFreeze(propValue, [], false);
        }
        else if (isRoot) {
            Object.defineProperty(target, key, {
                value: propValue,
                writable: false,
                configurable: false
            });
        }
    }
}
function isRecordLike(target) {
    return typeof target === "object" && target !== null;
}
function isDevMode() {
    return isDevMode$1();
}
function withImmutableState(stateOrFactory, options) {
    const immutableState = typeof stateOrFactory === "function" ? stateOrFactory() : stateOrFactory;
    const stateKeys = Reflect.ownKeys(immutableState);
    const applyFreezing = isDevMode() || options?.enableInProduction === true;
    return signalStoreFeature(withState(immutableState), withHooks(store => ({
        onInit() {
            if (!applyFreezing) {
                return;
            }
            deepFreeze(getState(store), stateKeys);
            watchState(store, state => {
                deepFreeze(state, stateKeys);
            });
        }
    })));
}
var keyPath = "ngrxToolkitKeyPath";
var dbName = "ngrxToolkitDb";
var storeName = "ngrxToolkitStore";
var VERSION = 1;
var _IndexedDBService = class _IndexedDBService {
    /**
     * write to indexedDB
     * @param key
     * @param data
     */
    setItem(key, data) {
        return __async(this, null, function* () {
            const db = yield this.openDB();
            const tx = db.transaction(storeName, "readwrite");
            const store = tx.objectStore(storeName);
            store.put({
                [keyPath]: key,
                value: data
            });
            return new Promise((resolve, reject) => {
                tx.oncomplete = () => {
                    db.close();
                    resolve();
                };
                tx.onerror = () => {
                    db.close();
                    reject();
                };
            });
        });
    }
    /**
     * read from indexedDB
     * @param key
     */
    getItem(key) {
        return __async(this, null, function* () {
            const db = yield this.openDB();
            const tx = db.transaction(storeName, "readonly");
            const store = tx.objectStore(storeName);
            const request = store.get(key);
            return new Promise((resolve, reject) => {
                request.onsuccess = () => {
                    db.close();
                    if (request.result === void 0) {
                        resolve(null);
                    }
                    resolve(request.result?.["value"]);
                };
                request.onerror = () => {
                    db.close();
                    reject();
                };
            });
        });
    }
    /**
     * delete indexedDB
     * @param key
     */
    clear(key) {
        return __async(this, null, function* () {
            const db = yield this.openDB();
            const tx = db.transaction(storeName, "readwrite");
            const store = tx.objectStore(storeName);
            const request = store.delete(key);
            return new Promise((resolve, reject) => {
                request.onsuccess = () => {
                    db.close();
                    resolve();
                };
                request.onerror = () => {
                    db.close();
                    reject();
                };
            });
        });
    }
    /**
     * open indexedDB
     */
    openDB() {
        return __async(this, null, function* () {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open(dbName, VERSION);
                request.onupgradeneeded = () => {
                    const db = request.result;
                    if (!db.objectStoreNames.contains(storeName)) {
                        db.createObjectStore(storeName, {
                            keyPath
                        });
                    }
                };
                request.onsuccess = () => {
                    resolve(request.result);
                };
                request.onerror = () => {
                    reject(request.error);
                };
            });
        });
    }
};
_IndexedDBService.ɵfac = function IndexedDBService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IndexedDBService)();
};
_IndexedDBService.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _IndexedDBService,
    factory: _IndexedDBService.ɵfac,
    providedIn: "root"
});
var IndexedDBService = _IndexedDBService;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IndexedDBService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var SYNC_STATUS = Symbol("SYNC_STATUS");
function withIndexedDB() {
    function factory({ key, parse, select, stringify }, store, useStubs) {
        if (useStubs) {
            return {
                clearStorage: () => Promise.resolve(),
                readFromStorage: () => Promise.resolve(),
                writeToStorage: () => Promise.resolve()
            };
        }
        const indexeddbService = inject(IndexedDBService);
        function warnOnSyncing(mode) {
            if (store[SYNC_STATUS]() === "syncing") {
                const prettyMode = mode === "read" ? "Reading" : "Writing";
                console.warn(`${prettyMode} to Store (${key}) happened during an ongoing synchronization process.`, "Please ensure that the store is not in syncing state via `store.whenSynced()`.", "Alternatively, you can disable the autoSync by passing `autoSync: false` in the config.");
            }
        }
        return {
            /**
             * Removes the item stored in storage.
             */
            clearStorage() {
                return __async(this, null, function* () {
                    warnOnSyncing("write");
                    store[SYNC_STATUS].set("syncing");
                    patchState$1(store, {});
                    yield indexeddbService.clear(key);
                    store[SYNC_STATUS].set("synced");
                });
            },
            /**
             * Reads item from storage and patches the state.
             */
            readFromStorage() {
                return __async(this, null, function* () {
                    warnOnSyncing("read");
                    store[SYNC_STATUS].set("syncing");
                    const stateString = yield indexeddbService.getItem(key);
                    if (stateString) {
                        patchState$1(store, parse(stateString));
                    }
                    store[SYNC_STATUS].set("synced");
                });
            },
            /**
             * Writes selected portion to storage.
             */
            writeToStorage() {
                return __async(this, null, function* () {
                    warnOnSyncing("write");
                    store[SYNC_STATUS].set("syncing");
                    const slicedState = select(getState(store));
                    yield indexeddbService.setItem(key, stringify(slicedState));
                    store[SYNC_STATUS].set("synced");
                });
            }
        };
    }
    factory.type = "async";
    return factory;
}
var _LocalStorageService = class _LocalStorageService {
    getItem(key) {
        return localStorage.getItem(key);
    }
    setItem(key, data) {
        return localStorage.setItem(key, data);
    }
    clear(key) {
        return localStorage.removeItem(key);
    }
};
_LocalStorageService.ɵfac = function LocalStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocalStorageService)();
};
_LocalStorageService.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _LocalStorageService,
    factory: _LocalStorageService.ɵfac,
    providedIn: "root"
});
var LocalStorageService = _LocalStorageService;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocalStorageService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var _SessionStorageService = class _SessionStorageService {
    getItem(key) {
        return sessionStorage.getItem(key);
    }
    setItem(key, data) {
        return sessionStorage.setItem(key, data);
    }
    clear(key) {
        return sessionStorage.removeItem(key);
    }
};
_SessionStorageService.ɵfac = function SessionStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SessionStorageService)();
};
_SessionStorageService.ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
    token: _SessionStorageService,
    factory: _SessionStorageService.ɵfac,
    providedIn: "root"
});
var SessionStorageService = _SessionStorageService;
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SessionStorageService, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
function withLocalStorage() {
    return createSyncMethods(LocalStorageService);
}
function withSessionStorage() {
    return createSyncMethods(SessionStorageService);
}
function createSyncMethods(Storage) {
    function factory({ key, parse, select, stringify }, store, useStubs) {
        if (useStubs) {
            return {
                clearStorage: () => void 0,
                readFromStorage: () => void 0,
                writeToStorage: () => void 0
            };
        }
        const storage = inject(Storage);
        return {
            clearStorage() {
                storage.clear(key);
            },
            readFromStorage() {
                const stateString = storage.getItem(key);
                if (stateString) {
                    patchState$1(store, parse(stateString));
                }
            },
            writeToStorage() {
                const slicedState = select(getState(store));
                storage.setItem(key, stringify(slicedState));
            }
        };
    }
    factory.type = "sync";
    return factory;
}
function withStorageSync(configOrKey, storageStrategy) {
    if (typeof configOrKey !== "string" && configOrKey.storage && storageStrategy) {
        throw new Error("You can either pass a storage strategy or a config with storage, but not both.");
    }
    const config = __spreadValues({
        autoSync: true,
        select: state => state,
        parse: JSON.parse,
        stringify: JSON.stringify,
        storage: () => localStorage
    }, typeof configOrKey === "string" ? {
        key: configOrKey
    } : configOrKey);
    const factory = storageStrategy ?? (config.storage() === localStorage ? withLocalStorage() : withSessionStorage());
    if (factory.type === "sync") {
        return createSyncStorageSync(factory, config);
    }
    else {
        return createAsyncStorageSync(factory, config);
    }
}
function createSyncStorageSync(factory, config) {
    return signalStoreFeature(withMethods((store, platformId = inject(PLATFORM_ID)) => {
        return factory(config, store, isPlatformServer(platformId));
    }), withHooks({
        onInit(store, platformId = inject(PLATFORM_ID)) {
            if (isPlatformServer(platformId)) {
                return;
            }
            if (config.autoSync) {
                store.readFromStorage();
                watchState(store, () => store.writeToStorage());
            }
        }
    }));
}
function createAsyncStorageSync(factory, config) {
    return signalStoreFeature(withProps(() => {
        const props = {
            /*
            // we need to have that as property (and not state)
            // Otherwise the state watcher fires when updating the sync status
            */
            [SYNC_STATUS]: signal("idle")
        };
        const resolves = [];
        effect(() => {
            const syncStatus = props[SYNC_STATUS]();
            if (syncStatus === "synced") {
                resolves.forEach(resolve => resolve());
                resolves.splice(0, resolves.length);
            }
        });
        return __spreadProps(__spreadValues({}, props), {
            isSynced: computed(() => props[SYNC_STATUS]() === "synced"),
            whenSynced: () => new Promise(resolve => {
                if (props[SYNC_STATUS]() === "synced") {
                    resolve();
                }
                else {
                    resolves.push(resolve);
                }
            })
        });
    }), withMethods((store, platformId = inject(PLATFORM_ID)) => {
        return factory(config, store, isPlatformServer(platformId));
    }), withHooks({
        onInit(_0) {
            return __async(this, arguments, function* (store, platformId = inject(PLATFORM_ID)) {
                if (isPlatformServer(platformId)) {
                    return;
                }
                const initialState = JSON.stringify(getState(store));
                if (config.autoSync) {
                    let startWatching = false;
                    watchState(store, () => {
                        if (!startWatching) {
                            const currentState = JSON.stringify(getState(store));
                            if (currentState === initialState) {
                                return;
                            }
                            console.warn(`Writing to Store (${config.key}) happened before the state was initially read from storage.`, "Please ensure that the store is not in syncing state via `store.whenSynced()` before writing to the state.", "Alternatively, you can disable autoSync by passing `autoSync: false` in the config.");
                            return;
                        }
                        return store.writeToStorage();
                    });
                    yield store.readFromStorage();
                    startWatching = true;
                }
            });
        }
    }));
}
function withConditional(condition, featureIfTrue, featureIfFalse) {
    return store => {
        const conditionStore = __spreadValues(__spreadValues(__spreadValues({}, store["stateSignals"]), store["props"]), store["methods"]);
        return condition(conditionStore) ? featureIfTrue(store) : featureIfFalse(store);
    };
}
var emptyFeature = signalStoreFeature(withState({}));
function withFeatureFactory(factoryFn) {
    return store => {
        const storeForFactory = __spreadValues(__spreadValues(__spreadValues({}, store["stateSignals"]), store["props"]), store["methods"]);
        const feature = factoryFn(storeForFactory);
        return feature(store);
    };
}
var switchOp = {
    rxJsOperator: switchMap,
    exhaustSemantics: false
};
var mergeOp = {
    rxJsOperator: mergeMap,
    exhaustSemantics: false
};
var concatOp = {
    rxJsOperator: concatMap,
    exhaustSemantics: false
};
var exhaustOp = {
    rxJsOperator: exhaustMap,
    exhaustSemantics: true
};
function rxMutation(optionsOrOperation) {
    const inputSubject = new Subject();
    const options = typeof optionsOrOperation === "function" ? {
        operation: optionsOrOperation
    } : optionsOrOperation;
    const flatteningOp = options.operator ?? concatOp;
    const destroyRef = options.injector?.get(DestroyRef) ?? inject(DestroyRef);
    const callCount = signal(0, ...(ngDevMode ? [{
            debugName: "callCount"
        }] : []));
    const errorSignal = signal(void 0, ...(ngDevMode ? [{
            debugName: "errorSignal"
        }] : []));
    const idle = signal(true, ...(ngDevMode ? [{
            debugName: "idle"
        }] : []));
    const isPending = computed(() => callCount() > 0, ...(ngDevMode ? [{
            debugName: "isPending"
        }] : []));
    const value = signal(void 0, ...(ngDevMode ? [{
            debugName: "value"
        }] : []));
    const isSuccess = computed(() => !idle() && !isPending() && !errorSignal(), ...(ngDevMode ? [{
            debugName: "isSuccess"
        }] : []));
    const hasValue = function () {
        return typeof value() !== "undefined";
    };
    const status = computed(() => {
        if (idle()) {
            return "idle";
        }
        if (callCount() > 0) {
            return "pending";
        }
        if (errorSignal()) {
            return "error";
        }
        return "success";
    }, ...(ngDevMode ? [{
            debugName: "status"
        }] : []));
    const initialInnerStatus = "idle";
    let innerStatus = initialInnerStatus;
    inputSubject.pipe(flatteningOp.rxJsOperator(input => defer(() => {
        callCount.update(c => c + 1);
        idle.set(false);
        return options.operation(input.param).pipe(tap(result => {
            options.onSuccess?.(result, input.param);
            innerStatus = "success";
            errorSignal.set(void 0);
            value.set(result);
        }), catchError(error => {
            options.onError?.(error, input.param);
            errorSignal.set(error);
            value.set(void 0);
            innerStatus = "error";
            return EMPTY;
        }), finalize(() => {
            callCount.update(c => c - 1);
            if (innerStatus === "success") {
                input.resolve({
                    status: "success",
                    value: value()
                });
            }
            else if (innerStatus === "error") {
                input.resolve({
                    status: "error",
                    error: errorSignal()
                });
            }
            else {
                input.resolve({
                    status: "aborted"
                });
            }
            innerStatus = initialInnerStatus;
        }));
    })), takeUntilDestroyed(destroyRef)).subscribe();
    const mutationFn = param => {
        return new Promise(resolve => {
            if (callCount() > 0 && flatteningOp.exhaustSemantics) {
                resolve({
                    status: "aborted"
                });
            }
            else {
                inputSubject.next({
                    param,
                    resolve
                });
            }
        });
    };
    const mutation = mutationFn;
    mutation.status = status;
    mutation.isPending = isPending;
    mutation.error = errorSignal;
    mutation.value = value;
    mutation.hasValue = hasValue;
    mutation.isSuccess = isSuccess;
    return mutation;
}
function withMutations(mutationsFactory) {
    return store => {
        const source = store;
        const mutations = mutationsFactory(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, source), store.props), store.methods), store.stateSignals));
        const feature = createMutationsFeature(mutations);
        return feature(store);
    };
}
function createMutationsFeature(mutations) {
    const keys = Object.keys(mutations);
    const feature = signalStoreFeature(withMethods(() => keys.reduce((acc, key) => __spreadProps(__spreadValues({}, acc), {
        [key]: params => __async(null, null, function* () {
            const mutation = mutations[key];
            if (!mutation) {
                throw new Error(`Mutation ${key} not found`);
            }
            const result = yield mutation(params);
            return result;
        })
    }), {})), withComputed(() => keys.reduce((acc, key) => __spreadProps(__spreadValues({}, acc), {
        [`${key}IsPending`]: mutations[key].isPending,
        [`${key}Status`]: mutations[key].status,
        [`${key}Error`]: mutations[key].error
    }), {})));
    return feature;
}
function withResource(resourceFactory) {
    return store => {
        const resourceOrDictionary = resourceFactory(__spreadValues(__spreadValues(__spreadValues({}, store.stateSignals), store.props), store.methods));
        if (isResourceRef(resourceOrDictionary)) {
            return createUnnamedResource(resourceOrDictionary)(store);
        }
        else {
            return createNamedResource(resourceOrDictionary)(store);
        }
    };
}
function createUnnamedResource(resource) {
    function hasValue() {
        return resource.hasValue();
    }
    return signalStoreFeature(withLinkedState(() => ({
        value: resource.value
    })), withProps(() => ({
        status: resource.status,
        error: resource.error,
        isLoading: resource.isLoading
    })), withMethods(() => ({
        hasValue,
        _reload: () => resource.reload()
    })));
}
function createNamedResource(dictionary) {
    const keys = Object.keys(dictionary);
    const state = keys.reduce((state2, resourceName) => __spreadProps(__spreadValues({}, state2), {
        [`${resourceName}Value`]: dictionary[resourceName].value
    }), {});
    const props = keys.reduce((props2, resourceName) => __spreadProps(__spreadValues({}, props2), {
        [`${resourceName}Status`]: dictionary[resourceName].status,
        [`${resourceName}Error`]: dictionary[resourceName].error,
        [`${resourceName}IsLoading`]: dictionary[resourceName].isLoading
    }), {});
    const methods = keys.reduce((methods2, resourceName) => {
        return __spreadProps(__spreadValues({}, methods2), {
            [`${resourceName}HasValue`]: () => dictionary[resourceName].hasValue(),
            [`_${resourceName}Reload`]: () => dictionary[resourceName].reload()
        });
    }, {});
    return signalStoreFeature(withLinkedState(() => state), withProps(() => props), withMethods(() => methods));
}
function isResourceRef(value) {
    return value !== null && typeof value === "object" && "value" in value && isSignal(value.value) && "status" in value && "error" in value && "isLoading" in value && "hasValue" in value && "reload" in value;
}
function mapToResource(store, name) {
    const resourceName = String(name);
    function hasValue() {
        return store[`${resourceName}HasValue`]();
    }
    return {
        value: store[`${resourceName}Value`],
        status: store[`${resourceName}Status`],
        error: store[`${resourceName}Error`],
        isLoading: store[`${resourceName}IsLoading`],
        hasValue
    };
}
function httpMutation(optionsOrRequest) {
    const httpClient = inject(HttpClient);
    const options = typeof optionsOrRequest === "function" ? {
        request: optionsOrRequest
    } : optionsOrRequest;
    const parse = options.parse ?? (raw => raw);
    const uploadProgress = signal(void 0, ...(ngDevMode ? [{
            debugName: "uploadProgress"
        }] : []));
    const downloadProgress = signal(void 0, ...(ngDevMode ? [{
            debugName: "downloadProgress"
        }] : []));
    const headers = signal(void 0, ...(ngDevMode ? [{
            debugName: "headers"
        }] : []));
    const statusCode = signal(void 0, ...(ngDevMode ? [{
            debugName: "statusCode"
        }] : []));
    const mutation = rxMutation(__spreadProps(__spreadValues({}, options), {
        operation: param => {
            const httpRequest = options.request(param);
            return defer(() => {
                uploadProgress.set(void 0);
                downloadProgress.set(void 0);
                headers.set(void 0);
                statusCode.set(void 0);
                return httpClient.request(httpRequest.method, httpRequest.url, __spreadProps(__spreadValues({}, httpRequest), {
                    observe: "events",
                    responseType: "json"
                })).pipe(tap(response => {
                    if (response.type === HttpEventType.UploadProgress) {
                        uploadProgress.set(response);
                    }
                    else if (response.type === HttpEventType.DownloadProgress) {
                        downloadProgress.set(response);
                    }
                }), filter(event => event instanceof HttpResponse), tap(response => {
                    headers.set(response.headers);
                    statusCode.set(response.status.toString());
                }), map(event => parse(event.body)));
            });
        }
    }));
    mutation.uploadProgress = uploadProgress;
    mutation.downloadProgress = downloadProgress;
    mutation.statusCode = statusCode;
    mutation.headers = headers;
    return mutation;
}
export { capitalize, concatOp, createEffects, createPageArray, createReducer, deriveCallStateKeys, emptyFeature, exhaustOp, firstPage, getCallStateKeys, getCollectionArray, getDataServiceKeys, getUndoRedoKeys, gotoPage, httpMutation, mapToResource, mergeOp, nextPage, noPayload, patchState, payload, previousPage, provideDevtoolsConfig, renameDevtoolsName, rxMutation, setError, setLoaded, setLoading, setMaxPageNavigationArrayItems, setPageSize, setResetState, switchOp, updateState, withCallState, withConditional, withDataService, withDevToolsStub, withDevtools, withDisabledNameIndices, withFeatureFactory, withGlitchTracking, withImmutableState, withIndexedDB, withIndexedDB as withIndexeddb, withLocalStorage, withMapper, withMutations, withPagination, withRedux, withReset, withResource, withSessionStorage, withStorageSync, withUndoRedo };
