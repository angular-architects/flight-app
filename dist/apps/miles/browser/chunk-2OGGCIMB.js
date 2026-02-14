import { Platform } from "@nf-internal/chunk-26DDZNO4";
import { coerceArray } from "@nf-internal/chunk-DDFN47J4";
// node_modules/@angular/cdk/fesm2022/breakpoints-observer.mjs
import * as i0 from "@angular/core";
import { inject, CSP_NONCE, Injectable, NgZone } from "@angular/core";
import { Subject, combineLatest, concat, Observable } from "rxjs";
import { take, skip, debounceTime, map, startWith, takeUntil } from "rxjs/operators";
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var MediaMatcher = class _MediaMatcher {
    _platform = inject(Platform);
    _nonce = inject(CSP_NONCE, {
        optional: true
    });
    /** The internal matchMedia method to return back a MediaQueryList like object. */
    _matchMedia;
    constructor() {
        this._matchMedia = this._platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) : noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
    matchMedia(query) {
        if (this._platform.WEBKIT || this._platform.BLINK) {
            createEmptyStyleRule(query, this._nonce);
        }
        return this._matchMedia(query);
    }
    static ɵfac = function MediaMatcher_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MediaMatcher)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _MediaMatcher,
        factory: _MediaMatcher.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediaMatcher, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
function createEmptyStyleRule(query, nonce) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement("style");
            if (nonce) {
                mediaQueryStyleNode.setAttribute("nonce", nonce);
            }
            mediaQueryStyleNode.setAttribute("type", "text/css");
            document.head.appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
function noopMatchMedia(query) {
    return {
        matches: query === "all" || query === "",
        media: query,
        addListener: () => { },
        removeListener: () => { }
    };
}
var BreakpointObserver = class _BreakpointObserver {
    _mediaMatcher = inject(MediaMatcher);
    _zone = inject(NgZone);
    /**  A map of all media queries currently being listened for. */
    _queries = /* @__PURE__ */ new Map();
    /** A subject for all other observables to takeUntil based on. */
    _destroySubject = new Subject();
    constructor() { }
    /** Completes the active subject, signalling to all other observables to complete. */
    ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    isMatched(value) {
        const queries = splitQueries(coerceArray(value));
        return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    observe(value) {
        const queries = splitQueries(coerceArray(value));
        const observables = queries.map(query => this._registerQuery(query).observable);
        let stateObservable = combineLatest(observables);
        stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
        return stateObservable.pipe(map(breakpointStates => {
            const response = {
                matches: false,
                breakpoints: {}
            };
            breakpointStates.forEach(({ matches, query }) => {
                response.matches = response.matches || matches;
                response.breakpoints[query] = matches;
            });
            return response;
        }));
    }
    /** Registers a specific query to be listened for. */
    _registerQuery(query) {
        if (this._queries.has(query)) {
            return this._queries.get(query);
        }
        const mql = this._mediaMatcher.matchMedia(query);
        const queryObservable = new Observable(observer => {
            const handler = e => this._zone.run(() => observer.next(e));
            mql.addListener(handler);
            return () => {
                mql.removeListener(handler);
            };
        }).pipe(startWith(mql), map(({ matches }) => ({
            query,
            matches
        })), takeUntil(this._destroySubject));
        const output = {
            observable: queryObservable,
            mql
        };
        this._queries.set(query, output);
        return output;
    }
    static ɵfac = function BreakpointObserver_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BreakpointObserver)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _BreakpointObserver,
        factory: _BreakpointObserver.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreakpointObserver, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
function splitQueries(queries) {
    return queries.map(query => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map(query => query.trim());
}
export { MediaMatcher, BreakpointObserver };
