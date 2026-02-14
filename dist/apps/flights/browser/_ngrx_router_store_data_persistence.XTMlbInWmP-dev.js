import "@nf-internal/chunk-54JPAORE";
// node_modules/@ngrx/router-store/fesm2022/ngrx-router-store-data-persistence.mjs
import { ROUTER_NAVIGATION } from "@ngrx/router-store";
import { isObservable, of } from "rxjs";
import { concatMap, groupBy, mergeMap, switchMap, filter, map, catchError } from "rxjs/operators";
function pessimisticUpdate(opts) {
    return source => {
        return source.pipe(mapActionAndState(), concatMap(runWithErrorHandling(opts.run, opts.onError)));
    };
}
function optimisticUpdate(opts) {
    return source => {
        return source.pipe(mapActionAndState(), concatMap(runWithErrorHandling(opts.run, opts.undoAction)));
    };
}
function fetch(opts) {
    return source => {
        if (opts.id) {
            const groupedFetches = source.pipe(mapActionAndState(), groupBy(([action, ...store]) => {
                return opts.id(action, ...store);
            }));
            return groupedFetches.pipe(mergeMap(pairs => pairs.pipe(switchMap(runWithErrorHandling(opts.run, opts.onError)))));
        }
        return source.pipe(mapActionAndState(), concatMap(runWithErrorHandling(opts.run, opts.onError)));
    };
}
function navigation(component, opts) {
    return source => {
        const nav = source.pipe(mapActionAndState(), filter(([action]) => isStateSnapshot(action)), map(([action, ...slices]) => {
            if (!isStateSnapshot(action)) {
                return;
            }
            return [findSnapshot(component, action.payload.routerState.root), ...slices];
        }), filter(([snapshot]) => !!snapshot));
        return nav.pipe(switchMap(runWithErrorHandling(opts.run, opts.onError)));
    };
}
function isStateSnapshot(action) {
    return action.type === ROUTER_NAVIGATION;
}
function runWithErrorHandling(run, onError) {
    return ([action, ...slices]) => {
        try {
            const r = wrapIntoObservable(run(action, ...slices));
            return r.pipe(catchError(e => wrapIntoObservable(onError(action, e))));
        }
        catch (e) {
            return wrapIntoObservable(onError(action, e));
        }
    };
}
function mapActionAndState() {
    return source => {
        return source.pipe(map(value => normalizeActionAndState(value)));
    };
}
function normalizeActionAndState(args) {
    let action, slices;
    if (args instanceof Array) {
        [action, ...slices] = args;
    }
    else {
        slices = [];
        action = args;
    }
    return [action, ...slices];
}
function findSnapshot(component, s) {
    if (s.routeConfig && s.routeConfig.component === component) {
        return s;
    }
    for (const c of s.children) {
        const ss = findSnapshot(component, c);
        if (ss) {
            return ss;
        }
    }
    return null;
}
function wrapIntoObservable(obj) {
    if (isObservable(obj)) {
        return obj;
    }
    else if (!obj) {
        return of();
    }
    else {
        return of(obj);
    }
}
export { fetch, navigation, optimisticUpdate, pessimisticUpdate };
