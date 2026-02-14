import "@nf-internal/chunk-54JPAORE";
// node_modules/@ngrx/signals/fesm2022/ngrx-signals-rxjs-interop.mjs
import { assertInInjectionContext, inject, Injector, DestroyRef, isSignal, effect, untracked } from "@angular/core";
import { Subject, noop, isObservable } from "rxjs";
function rxMethod(generator, config) {
    if (!config?.injector) {
        assertInInjectionContext(rxMethod);
    }
    const sourceInjector = config?.injector ?? inject(Injector);
    const source$ = new Subject();
    const sourceSub = generator(source$).subscribe();
    sourceInjector.get(DestroyRef).onDestroy(() => sourceSub.unsubscribe());
    const rxMethodFn = (input, config2) => {
        if (isStatic(input)) {
            source$.next(input);
            return {
                destroy: noop
            };
        }
        const callerInjector = getCallerInjector();
        if (typeof ngDevMode !== "undefined" && ngDevMode && config2?.injector === void 0 && callerInjector === void 0) {
            console.warn("@ngrx/signals/rxjs-interop: The reactive method was called outside", "the injection context with a signal or observable. This may lead to", "a memory leak. Make sure to call it within the injection context", "(e.g. in a constructor or field initializer) or pass an injector", "explicitly via the config parameter.\n\nFor more information, see:", "https://ngrx.io/guide/signals/rxjs-integration#reactive-methods-and-injector-hierarchies");
        }
        const instanceInjector = config2?.injector ?? callerInjector ?? sourceInjector;
        if (isSignal(input)) {
            const watcher = effect(() => {
                const value = input();
                untracked(() => source$.next(value));
            }, {
                injector: instanceInjector
            });
            sourceSub.add({
                unsubscribe: () => watcher.destroy()
            });
            return watcher;
        }
        const instanceSub = input.subscribe(value => source$.next(value));
        sourceSub.add(instanceSub);
        if (instanceInjector !== sourceInjector) {
            instanceInjector.get(DestroyRef).onDestroy(() => instanceSub.unsubscribe());
        }
        return {
            destroy: () => instanceSub.unsubscribe()
        };
    };
    rxMethodFn.destroy = sourceSub.unsubscribe.bind(sourceSub);
    return rxMethodFn;
}
function isStatic(value) {
    return !isSignal(value) && !isObservable(value);
}
function getCallerInjector() {
    try {
        return inject(Injector);
    }
    catch {
        return void 0;
    }
}
export { rxMethod };
