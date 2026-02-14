import "@nf-internal/chunk-54JPAORE";
// node_modules/@ngrx/operators/fesm2022/ngrx-operators.mjs
import { of, EMPTY } from "rxjs";
import { concatMap, withLatestFrom, map, catchError, tap, finalize } from "rxjs/operators";
function concatLatestFrom(observablesFactory) {
    return concatMap(value => {
        const observables = observablesFactory(value);
        const observablesAsArray = Array.isArray(observables) ? observables : [observables];
        return of(value).pipe(withLatestFrom(...observablesAsArray));
    });
}
function mapResponse(observer) {
    return source$ => source$.pipe(map(value => observer.next(value)), catchError(error => of(observer.error(error))));
}
function tapResponse(observerOrNext, error, complete) {
    const observer = typeof observerOrNext === "function" ? {
        next: observerOrNext,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        error,
        complete
    } : observerOrNext;
    return source => source.pipe(tap({
        next: observer.next,
        complete: observer.complete
    }), catchError(error2 => {
        observer.error(error2);
        return EMPTY;
    }), observer.finalize ? finalize(observer.finalize) : source$ => source$);
}
export { concatLatestFrom, mapResponse, tapResponse };
