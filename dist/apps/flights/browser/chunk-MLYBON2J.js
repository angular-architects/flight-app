// node_modules/@angular/core/fesm2022/not_found.mjs
var _currentInjector = void 0;
function getCurrentInjector() {
    return _currentInjector;
}
function setCurrentInjector(injector) {
    const former = _currentInjector;
    _currentInjector = injector;
    return former;
}
function inject(token, options) {
    const currentInjector = getCurrentInjector();
    if (!currentInjector) {
        throw new Error("Current injector is not set.");
    }
    if (!token.ɵprov) {
        throw new Error("Token is not an injectable");
    }
    return currentInjector.retrieve(token, options);
}
var NOT_FOUND = Symbol("NotFound");
var NotFoundError = class extends Error {
    name = "\u0275NotFound";
    constructor(message) {
        super(message);
    }
};
function isNotFound(e) {
    return e === NOT_FOUND || e?.name === "\u0275NotFound";
}
export { getCurrentInjector, setCurrentInjector, inject, NOT_FOUND, NotFoundError, isNotFound };
/*! Bundled license information:

@angular/core/fesm2022/not_found.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/ 
