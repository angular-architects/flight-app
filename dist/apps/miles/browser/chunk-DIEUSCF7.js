import { getCurrentInjector, isNotFound, setCurrentInjector } from "@nf-internal/chunk-MLYBON2J";
import { BASE_EFFECT_NODE, SIGNAL, consumerDestroy, createComputed, createLinkedSignal, createSignal, getActiveConsumer, isInNotificationPhase, linkedSignalSetFn, linkedSignalUpdateFn, runEffect, setActiveConsumer, untracked } from "@nf-internal/chunk-FNXOBYAQ";
import { __async, __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/core/fesm2022/root_effect_scheduler.mjs
import { setActiveConsumer as setActiveConsumer2 } from "@angular/core/primitives/signals";
import { isNotFound as isNotFound$1 } from "@angular/core/primitives/di";
import { BehaviorSubject, Observable, Subject, Subscription } from "rxjs";
var Version = class {
    full;
    major;
    minor;
    patch;
    constructor(full) {
        this.full = full;
        const parts = full.split(".");
        this.major = parts[0];
        this.minor = parts[1];
        this.patch = parts.slice(2).join(".");
    }
};
var VERSION = /* @__PURE__ */ new Version("21.0.0-next.5");
var ERROR_DETAILS_PAGE_BASE_URL = (() => {
    const versionSubDomain = VERSION.major !== "0" ? `v${VERSION.major}.` : "";
    return `https://${versionSubDomain}angular.dev/errors`;
})();
var XSS_SECURITY_URL = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss";
var RuntimeError = class extends Error {
    code;
    constructor(code, message) {
        super(formatRuntimeError(code, message));
        this.code = code;
    }
};
function formatRuntimeErrorCode(code) {
    return `NG0${Math.abs(code)}`;
}
function formatRuntimeError(code, message) {
    const fullCode = formatRuntimeErrorCode(code);
    let errorMessage = `${fullCode}${message ? ": " + message : ""}`;
    if (ngDevMode && code < 0) {
        const addPeriodSeparator = !errorMessage.match(/[.,;!?\n]$/);
        const separator = addPeriodSeparator ? "." : "";
        errorMessage = `${errorMessage}${separator} Find more at ${ERROR_DETAILS_PAGE_BASE_URL}/${fullCode}`;
    }
    return errorMessage;
}
var _global = globalThis;
function ngDevModeResetPerfCounters() {
    const locationString = typeof location !== "undefined" ? location.toString() : "";
    const newCounters = {
        hydratedNodes: 0,
        hydratedComponents: 0,
        dehydratedViewsRemoved: 0,
        dehydratedViewsCleanupRuns: 0,
        componentsSkippedHydration: 0,
        deferBlocksWithIncrementalHydration: 0
    };
    const allowNgDevModeTrue = locationString.indexOf("ngDevMode=false") === -1;
    if (!allowNgDevModeTrue) {
        _global["ngDevMode"] = false;
    }
    else {
        if (typeof _global["ngDevMode"] !== "object") {
            _global["ngDevMode"] = {};
        }
        Object.assign(_global["ngDevMode"], newCounters);
    }
    return newCounters;
}
function initNgDevMode() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (typeof ngDevMode !== "object" || Object.keys(ngDevMode).length === 0) {
            ngDevModeResetPerfCounters();
        }
        return typeof ngDevMode !== "undefined" && !!ngDevMode;
    }
    return false;
}
function getClosureSafeProperty(objWithPropertyToExtract) {
    for (let key in objWithPropertyToExtract) {
        if (objWithPropertyToExtract[key] === getClosureSafeProperty) {
            return key;
        }
    }
    throw Error(typeof ngDevMode !== "undefined" && ngDevMode ? "Could not find renamed property on target object." : "");
}
function fillProperties(target, source) {
    for (const key in source) {
        if (source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
}
function stringify(token) {
    if (typeof token === "string") {
        return token;
    }
    if (Array.isArray(token)) {
        return `[${token.map(stringify).join(", ")}]`;
    }
    if (token == null) {
        return "" + token;
    }
    const name = token.overriddenName || token.name;
    if (name) {
        return `${name}`;
    }
    const result = token.toString();
    if (result == null) {
        return "" + result;
    }
    const newLineIndex = result.indexOf("\n");
    return newLineIndex >= 0 ? result.slice(0, newLineIndex) : result;
}
function concatStringsWithSpace(before, after) {
    if (!before)
        return after || "";
    if (!after)
        return before;
    return `${before} ${after}`;
}
function truncateMiddle(str, maxLength = 100) {
    if (!str || maxLength < 1 || str.length <= maxLength)
        return str;
    if (maxLength == 1)
        return str.substring(0, 1) + "...";
    const halfLimit = Math.round(maxLength / 2);
    return str.substring(0, halfLimit) + "..." + str.substring(str.length - halfLimit);
}
var __forward_ref__ = getClosureSafeProperty({
    __forward_ref__: getClosureSafeProperty
});
function forwardRef(forwardRefFn) {
    forwardRefFn.__forward_ref__ = forwardRef;
    forwardRefFn.toString = function () {
        return stringify(this());
    };
    return forwardRefFn;
}
function resolveForwardRef(type) {
    return isForwardRef(type) ? type() : type;
}
function isForwardRef(fn) {
    return typeof fn === "function" && fn.hasOwnProperty(__forward_ref__) && fn.__forward_ref__ === forwardRef;
}
function assertNumber(actual, msg) {
    if (!(typeof actual === "number")) {
        throwError(msg, typeof actual, "number", "===");
    }
}
function assertNumberInRange(actual, minInclusive, maxInclusive) {
    assertNumber(actual, "Expected a number");
    assertLessThanOrEqual(actual, maxInclusive, "Expected number to be less than or equal to");
    assertGreaterThanOrEqual(actual, minInclusive, "Expected number to be greater than or equal to");
}
function assertString(actual, msg) {
    if (!(typeof actual === "string")) {
        throwError(msg, actual === null ? "null" : typeof actual, "string", "===");
    }
}
function assertFunction(actual, msg) {
    if (!(typeof actual === "function")) {
        throwError(msg, actual === null ? "null" : typeof actual, "function", "===");
    }
}
function assertEqual(actual, expected, msg) {
    if (!(actual == expected)) {
        throwError(msg, actual, expected, "==");
    }
}
function assertNotEqual(actual, expected, msg) {
    if (!(actual != expected)) {
        throwError(msg, actual, expected, "!=");
    }
}
function assertSame(actual, expected, msg) {
    if (!(actual === expected)) {
        throwError(msg, actual, expected, "===");
    }
}
function assertNotSame(actual, expected, msg) {
    if (!(actual !== expected)) {
        throwError(msg, actual, expected, "!==");
    }
}
function assertLessThan(actual, expected, msg) {
    if (!(actual < expected)) {
        throwError(msg, actual, expected, "<");
    }
}
function assertLessThanOrEqual(actual, expected, msg) {
    if (!(actual <= expected)) {
        throwError(msg, actual, expected, "<=");
    }
}
function assertGreaterThan(actual, expected, msg) {
    if (!(actual > expected)) {
        throwError(msg, actual, expected, ">");
    }
}
function assertGreaterThanOrEqual(actual, expected, msg) {
    if (!(actual >= expected)) {
        throwError(msg, actual, expected, ">=");
    }
}
function assertNotDefined(actual, msg) {
    if (actual != null) {
        throwError(msg, actual, null, "==");
    }
}
function assertDefined(actual, msg) {
    if (actual == null) {
        throwError(msg, actual, null, "!=");
    }
}
function throwError(msg, actual, expected, comparison) {
    throw new Error(`ASSERTION ERROR: ${msg}` + (comparison == null ? "" : ` [Expected=> ${expected} ${comparison} ${actual} <=Actual]`));
}
function assertDomNode(node) {
    if (!(node instanceof Node)) {
        throwError(`The provided value must be an instance of a DOM Node but got ${stringify(node)}`);
    }
}
function assertElement(node) {
    if (!(node instanceof Element)) {
        throwError(`The provided value must be an element but got ${stringify(node)}`);
    }
}
function assertIndexInRange(arr, index) {
    assertDefined(arr, "Array must be defined.");
    const maxLen = arr.length;
    if (index < 0 || index >= maxLen) {
        throwError(`Index expected to be less than ${maxLen} but got ${index}`);
    }
}
function assertOneOf(value, ...validValues) {
    if (validValues.indexOf(value) !== -1)
        return true;
    throwError(`Expected value to be one of ${JSON.stringify(validValues)} but was ${JSON.stringify(value)}.`);
}
function assertNotReactive(fn) {
    if (getActiveConsumer() !== null) {
        throwError(`${fn}() should never be called in a reactive context.`);
    }
}
function ɵɵdefineInjectable(opts) {
    return {
        token: opts.token,
        providedIn: opts.providedIn || null,
        factory: opts.factory,
        value: void 0
    };
}
function ɵɵdefineInjector(options) {
    return {
        providers: options.providers || [],
        imports: options.imports || []
    };
}
function getInjectableDef(type) {
    return getOwnDefinition(type, NG_PROV_DEF);
}
function isInjectable(type) {
    return getInjectableDef(type) !== null;
}
function getOwnDefinition(type, field) {
    return type.hasOwnProperty(field) && type[field] || null;
}
function getInheritedInjectableDef(type) {
    const def = type?.[NG_PROV_DEF] ?? null;
    if (def) {
        ngDevMode && console.warn(`DEPRECATED: DI is instantiating a token "${type.name}" that inherits its @Injectable decorator but does not provide one itself.
This will become an error in a future version of Angular. Please add @Injectable() to the "${type.name}" class.`);
        return def;
    }
    else {
        return null;
    }
}
function getInjectorDef(type) {
    return type && type.hasOwnProperty(NG_INJ_DEF) ? type[NG_INJ_DEF] : null;
}
var NG_PROV_DEF = getClosureSafeProperty({
    ɵprov: getClosureSafeProperty
});
var NG_INJ_DEF = getClosureSafeProperty({
    ɵinj: getClosureSafeProperty
});
var InjectionToken = class {
    _desc;
    /** @internal */
    ngMetadataName = "InjectionToken";
    ɵprov;
    /**
     * @param _desc   Description for the token,
     *                used only for debugging purposes,
     *                it should but does not need to be unique
     * @param options Options for the token's usage, as described above
     */
    constructor(_desc, options) {
        this._desc = _desc;
        this.ɵprov = void 0;
        if (typeof options == "number") {
            (typeof ngDevMode === "undefined" || ngDevMode) && assertLessThan(options, 0, "Only negative numbers are supported here");
            this.__NG_ELEMENT_ID__ = options;
        }
        else if (options !== void 0) {
            this.ɵprov = ɵɵdefineInjectable({
                token: this,
                providedIn: options.providedIn || "root",
                factory: options.factory
            });
        }
    }
    /**
     * @internal
     */
    get multi() {
        return this;
    }
    toString() {
        return `InjectionToken ${this._desc}`;
    }
};
var _injectorProfilerContext;
function getInjectorProfilerContext() {
    !ngDevMode && throwError("getInjectorProfilerContext should never be called in production mode");
    return _injectorProfilerContext;
}
function setInjectorProfilerContext(context) {
    !ngDevMode && throwError("setInjectorProfilerContext should never be called in production mode");
    const previous = _injectorProfilerContext;
    _injectorProfilerContext = context;
    return previous;
}
var injectorProfilerCallbacks = [];
var NOOP_PROFILER_REMOVAL = () => { };
function removeProfiler(profiler) {
    const profilerIdx = injectorProfilerCallbacks.indexOf(profiler);
    if (profilerIdx !== -1) {
        injectorProfilerCallbacks.splice(profilerIdx, 1);
    }
}
function setInjectorProfiler(injectorProfiler2) {
    !ngDevMode && throwError("setInjectorProfiler should never be called in production mode");
    if (injectorProfiler2 !== null) {
        if (!injectorProfilerCallbacks.includes(injectorProfiler2)) {
            injectorProfilerCallbacks.push(injectorProfiler2);
        }
        return () => removeProfiler(injectorProfiler2);
    }
    else {
        injectorProfilerCallbacks.length = 0;
        return NOOP_PROFILER_REMOVAL;
    }
}
function injectorProfiler(event) {
    !ngDevMode && throwError("Injector profiler should never be called in production mode");
    for (let i = 0; i < injectorProfilerCallbacks.length; i++) {
        const injectorProfilerCallback = injectorProfilerCallbacks[i];
        injectorProfilerCallback(event);
    }
}
function emitProviderConfiguredEvent(eventProvider, isViewProvider = false) {
    !ngDevMode && throwError("Injector profiler should never be called in production mode");
    let token;
    if (typeof eventProvider === "function") {
        token = eventProvider;
    }
    else if (eventProvider instanceof InjectionToken) {
        token = eventProvider;
    }
    else {
        token = resolveForwardRef(eventProvider.provide);
    }
    let provider = eventProvider;
    if (eventProvider instanceof InjectionToken) {
        provider = eventProvider.ɵprov || eventProvider;
    }
    injectorProfiler({
        type: 2,
        context: getInjectorProfilerContext(),
        providerRecord: {
            token,
            provider,
            isViewProvider
        }
    });
}
function emitInjectorToCreateInstanceEvent(token) {
    !ngDevMode && throwError("Injector profiler should never be called in production mode");
    injectorProfiler({
        type: 4,
        context: getInjectorProfilerContext(),
        token
    });
}
function emitInstanceCreatedByInjectorEvent(instance) {
    !ngDevMode && throwError("Injector profiler should never be called in production mode");
    injectorProfiler({
        type: 1,
        context: getInjectorProfilerContext(),
        instance: {
            value: instance
        }
    });
}
function emitInjectEvent(token, value, flags) {
    !ngDevMode && throwError("Injector profiler should never be called in production mode");
    injectorProfiler({
        type: 0,
        context: getInjectorProfilerContext(),
        service: {
            token,
            value,
            flags
        }
    });
}
function emitEffectCreatedEvent(effect2) {
    !ngDevMode && throwError("Injector profiler should never be called in production mode");
    injectorProfiler({
        type: 3,
        context: getInjectorProfilerContext(),
        effect: effect2
    });
}
function runInInjectorProfilerContext(injector, token, callback) {
    !ngDevMode && throwError("runInInjectorProfilerContext should never be called in production mode");
    const prevInjectContext = setInjectorProfilerContext({
        injector,
        token
    });
    try {
        callback();
    }
    finally {
        setInjectorProfilerContext(prevInjectContext);
    }
}
function isEnvironmentProviders(value) {
    return value && !!value.ɵproviders;
}
var NG_COMP_DEF = getClosureSafeProperty({
    ɵcmp: getClosureSafeProperty
});
var NG_DIR_DEF = getClosureSafeProperty({
    ɵdir: getClosureSafeProperty
});
var NG_PIPE_DEF = getClosureSafeProperty({
    ɵpipe: getClosureSafeProperty
});
var NG_MOD_DEF = getClosureSafeProperty({
    ɵmod: getClosureSafeProperty
});
var NG_FACTORY_DEF = getClosureSafeProperty({
    ɵfac: getClosureSafeProperty
});
var NG_ELEMENT_ID = getClosureSafeProperty({
    __NG_ELEMENT_ID__: getClosureSafeProperty
});
var NG_ENV_ID = getClosureSafeProperty({
    __NG_ENV_ID__: getClosureSafeProperty
});
function renderStringify(value) {
    if (typeof value === "string")
        return value;
    if (value == null)
        return "";
    return String(value);
}
function stringifyForError(value) {
    if (typeof value === "function")
        return value.name || value.toString();
    if (typeof value === "object" && value != null && typeof value.type === "function") {
        return value.type.name || value.type.toString();
    }
    return renderStringify(value);
}
var NG_RUNTIME_ERROR_CODE = getClosureSafeProperty({
    "ngErrorCode": getClosureSafeProperty
});
var NG_RUNTIME_ERROR_MESSAGE = getClosureSafeProperty({
    "ngErrorMessage": getClosureSafeProperty
});
var NG_TOKEN_PATH = getClosureSafeProperty({
    "ngTokenPath": getClosureSafeProperty
});
function cyclicDependencyError(token, path) {
    const message = ngDevMode ? `Circular dependency detected for \`${token}\`.` : "";
    return createRuntimeError(message, -200, path);
}
function cyclicDependencyErrorWithDetails(token, path) {
    return augmentRuntimeError(cyclicDependencyError(token, path), null);
}
function throwMixedMultiProviderError() {
    throw new Error(`Cannot mix multi providers and regular providers`);
}
function throwInvalidProviderError(ngModuleType, providers, provider) {
    if (ngModuleType && providers) {
        const providerDetail = providers.map(v => v == provider ? "?" + provider + "?" : "...");
        throw new Error(`Invalid provider for the NgModule '${stringify(ngModuleType)}' - only instances of Provider and Type are allowed, got: [${providerDetail.join(", ")}]`);
    }
    else if (isEnvironmentProviders(provider)) {
        if (provider.ɵfromNgModule) {
            throw new RuntimeError(207, `Invalid providers from 'importProvidersFrom' present in a non-environment injector. 'importProvidersFrom' can't be used for component providers.`);
        }
        else {
            throw new RuntimeError(207, `Invalid providers present in a non-environment injector. 'EnvironmentProviders' can't be used for component providers.`);
        }
    }
    else {
        throw new Error("Invalid provider");
    }
}
function throwProviderNotFoundError(token, injectorName) {
    const errorMessage = ngDevMode && `No provider for ${stringifyForError(token)} found${injectorName ? ` in ${injectorName}` : ""}`;
    throw new RuntimeError(-201, errorMessage);
}
function prependTokenToDependencyPath(error, token) {
    error[NG_TOKEN_PATH] ??= [];
    const currentPath = error[NG_TOKEN_PATH];
    let pathStr;
    if (typeof token === "object" && "multi" in token && token?.multi === true) {
        assertDefined(token.provide, "Token with multi: true should have a provide property");
        pathStr = stringifyForError(token.provide);
    }
    else {
        pathStr = stringifyForError(token);
    }
    if (currentPath[0] !== pathStr) {
        error[NG_TOKEN_PATH].unshift(pathStr);
    }
}
function augmentRuntimeError(error, source) {
    const tokenPath = error[NG_TOKEN_PATH];
    const errorCode = error[NG_RUNTIME_ERROR_CODE];
    const message = error[NG_RUNTIME_ERROR_MESSAGE] || error.message;
    error.message = formatErrorMessage(message, errorCode, tokenPath, source);
    return error;
}
function createRuntimeError(message, code, path) {
    const error = new RuntimeError(code, message);
    error[NG_RUNTIME_ERROR_CODE] = code;
    error[NG_RUNTIME_ERROR_MESSAGE] = message;
    if (path) {
        error[NG_TOKEN_PATH] = path;
    }
    return error;
}
function getRuntimeErrorCode(error) {
    return error[NG_RUNTIME_ERROR_CODE];
}
function formatErrorMessage(text, code, path = [], source = null) {
    let pathDetails = "";
    if (path && path.length > 1) {
        pathDetails = ` Path: ${path.join(" -> ")}.`;
    }
    const sourceDetails = source ? ` Source: ${source}.` : "";
    return formatRuntimeError(code, `${text}${sourceDetails}${pathDetails}`);
}
var _injectImplementation;
function getInjectImplementation() {
    return _injectImplementation;
}
function setInjectImplementation(impl) {
    const previous = _injectImplementation;
    _injectImplementation = impl;
    return previous;
}
function injectRootLimpMode(token, notFoundValue, flags) {
    const injectableDef = getInjectableDef(token);
    if (injectableDef && injectableDef.providedIn == "root") {
        return injectableDef.value === void 0 ? injectableDef.value = injectableDef.factory() : injectableDef.value;
    }
    if (flags & 8)
        return null;
    if (notFoundValue !== void 0)
        return notFoundValue;
    throwProviderNotFoundError(token, "Injector");
}
function assertInjectImplementationNotEqual(fn) {
    ngDevMode && assertNotEqual(_injectImplementation, fn, "Calling \u0275\u0275inject would cause infinite recursion");
}
var _THROW_IF_NOT_FOUND = {};
var THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
var DI_DECORATOR_FLAG = "__NG_DI_FLAG__";
var RetrievingInjector = class {
    injector;
    constructor(injector) {
        this.injector = injector;
    }
    retrieve(token, options) {
        const flags = convertToBitFlags(options) || 0;
        try {
            return this.injector.get(token, 
            // When a dependency is requested with an optional flag, DI returns null as the default value.
            flags & 8 ? null : THROW_IF_NOT_FOUND, flags);
        }
        catch (e) {
            if (isNotFound(e)) {
                return e;
            }
            throw e;
        }
    }
};
function injectInjectorOnly(token, flags = 0) {
    const currentInjector = getCurrentInjector();
    if (currentInjector === void 0) {
        throw new RuntimeError(-203, ngDevMode && `The \`${stringify(token)}\` token injection failed. \`inject()\` function must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with \`runInInjectionContext\`.`);
    }
    else if (currentInjector === null) {
        return injectRootLimpMode(token, void 0, flags);
    }
    else {
        const options = convertToInjectOptions(flags);
        const value = currentInjector.retrieve(token, options);
        ngDevMode && emitInjectEvent(token, value, flags);
        if (isNotFound(value)) {
            if (options.optional) {
                return null;
            }
            throw value;
        }
        return value;
    }
}
function ɵɵinject(token, flags = 0) {
    return (getInjectImplementation() || injectInjectorOnly)(resolveForwardRef(token), flags);
}
function ɵɵinvalidFactoryDep(index) {
    throw new RuntimeError(202, ngDevMode && `This constructor is not compatible with Angular Dependency Injection because its dependency at index ${index} of the parameter list is invalid.
This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.

Please check that 1) the type for the parameter at index ${index} is correct and 2) the correct Angular decorators are defined for this class and its ancestors.`);
}
function inject(token, options) {
    return ɵɵinject(token, convertToBitFlags(options));
}
function convertToBitFlags(flags) {
    if (typeof flags === "undefined" || typeof flags === "number") {
        return flags;
    }
    return 0 | (
    // comment to force a line break in the formatter
    flags.optional && 8) | (flags.host && 1) | (flags.self && 2) | (flags.skipSelf && 4);
}
function convertToInjectOptions(flags) {
    return {
        optional: !!(flags & 8),
        host: !!(flags & 1),
        self: !!(flags & 2),
        skipSelf: !!(flags & 4)
    };
}
function injectArgs(types) {
    const args = [];
    for (let i = 0; i < types.length; i++) {
        const arg = resolveForwardRef(types[i]);
        if (Array.isArray(arg)) {
            if (arg.length === 0) {
                throw new RuntimeError(900, ngDevMode && "Arguments array must have arguments.");
            }
            let type = void 0;
            let flags = 0;
            for (let j = 0; j < arg.length; j++) {
                const meta = arg[j];
                const flag = getInjectFlag(meta);
                if (typeof flag === "number") {
                    if (flag === -1) {
                        type = meta.token;
                    }
                    else {
                        flags |= flag;
                    }
                }
                else {
                    type = meta;
                }
            }
            args.push(ɵɵinject(type, flags));
        }
        else {
            args.push(ɵɵinject(arg));
        }
    }
    return args;
}
function attachInjectFlag(decorator, flag) {
    decorator[DI_DECORATOR_FLAG] = flag;
    decorator.prototype[DI_DECORATOR_FLAG] = flag;
    return decorator;
}
function getInjectFlag(token) {
    return token[DI_DECORATOR_FLAG];
}
function getFactoryDef(type, throwNotFound) {
    const hasFactoryDef = type.hasOwnProperty(NG_FACTORY_DEF);
    if (!hasFactoryDef && throwNotFound === true && ngDevMode) {
        throw new Error(`Type ${stringify(type)} does not have '\u0275fac' property.`);
    }
    return hasFactoryDef ? type[NG_FACTORY_DEF] : null;
}
function arrayEquals(a, b, identityAccessor) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++) {
        let valueA = a[i];
        let valueB = b[i];
        if (identityAccessor) {
            valueA = identityAccessor(valueA);
            valueB = identityAccessor(valueB);
        }
        if (valueB !== valueA) {
            return false;
        }
    }
    return true;
}
function flatten(list) {
    return list.flat(Number.POSITIVE_INFINITY);
}
function deepForEach(input, fn) {
    input.forEach(value => Array.isArray(value) ? deepForEach(value, fn) : fn(value));
}
function addToArray(arr, index, value) {
    if (index >= arr.length) {
        arr.push(value);
    }
    else {
        arr.splice(index, 0, value);
    }
}
function removeFromArray(arr, index) {
    if (index >= arr.length - 1) {
        return arr.pop();
    }
    else {
        return arr.splice(index, 1)[0];
    }
}
function newArray(size, value) {
    const list = [];
    for (let i = 0; i < size; i++) {
        list.push(value);
    }
    return list;
}
function arraySplice(array, index, count) {
    const length = array.length - count;
    while (index < length) {
        array[index] = array[index + count];
        index++;
    }
    while (count--) {
        array.pop();
    }
}
function arrayInsert2(array, index, value1, value2) {
    ngDevMode && assertLessThanOrEqual(index, array.length, "Can't insert past array end.");
    let end = array.length;
    if (end == index) {
        array.push(value1, value2);
    }
    else if (end === 1) {
        array.push(value2, array[0]);
        array[0] = value1;
    }
    else {
        end--;
        array.push(array[end - 1], array[end]);
        while (end > index) {
            const previousEnd = end - 2;
            array[end] = array[previousEnd];
            end--;
        }
        array[index] = value1;
        array[index + 1] = value2;
    }
}
function keyValueArraySet(keyValueArray, key, value) {
    let index = keyValueArrayIndexOf(keyValueArray, key);
    if (index >= 0) {
        keyValueArray[index | 1] = value;
    }
    else {
        index = ~index;
        arrayInsert2(keyValueArray, index, key, value);
    }
    return index;
}
function keyValueArrayGet(keyValueArray, key) {
    const index = keyValueArrayIndexOf(keyValueArray, key);
    if (index >= 0) {
        return keyValueArray[index | 1];
    }
    return void 0;
}
function keyValueArrayIndexOf(keyValueArray, key) {
    return _arrayIndexOfSorted(keyValueArray, key, 1);
}
function _arrayIndexOfSorted(array, value, shift) {
    ngDevMode && assertEqual(Array.isArray(array), true, "Expecting an array");
    let start = 0;
    let end = array.length >> shift;
    while (end !== start) {
        const middle = start + (end - start >> 1);
        const current = array[middle << shift];
        if (value === current) {
            return middle << shift;
        }
        else if (current > value) {
            end = middle;
        }
        else {
            start = middle + 1;
        }
    }
    return ~(end << shift);
}
var EMPTY_OBJ = {};
var EMPTY_ARRAY = [];
if ((typeof ngDevMode === "undefined" || ngDevMode) && initNgDevMode()) {
    Object.freeze(EMPTY_OBJ);
    Object.freeze(EMPTY_ARRAY);
}
var ENVIRONMENT_INITIALIZER = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "ENVIRONMENT_INITIALIZER" : "");
var INJECTOR$1 = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "INJECTOR" : "", 
// Disable tslint because this is const enum which gets inlined not top level prop access.
// tslint:disable-next-line: no-toplevel-property-access
-1
/* InjectorMarkers.Injector */ );
var INJECTOR_DEF_TYPES = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "INJECTOR_DEF_TYPES" : "");
var NullInjector = class {
    get(token, notFoundValue = THROW_IF_NOT_FOUND) {
        if (notFoundValue === THROW_IF_NOT_FOUND) {
            const message = ngDevMode ? `No provider found for \`${stringify(token)}\`.` : "";
            const error = createRuntimeError(message, -201
            /* RuntimeErrorCode.PROVIDER_NOT_FOUND */ );
            error.name = "\u0275NotFound";
            throw error;
        }
        return notFoundValue;
    }
};
function getNgModuleDef(type) {
    return type[NG_MOD_DEF] || null;
}
function getNgModuleDefOrThrow(type) {
    const ngModuleDef = getNgModuleDef(type);
    if (!ngModuleDef) {
        throw new RuntimeError(915, (typeof ngDevMode === "undefined" || ngDevMode) && `Type ${stringify(type)} does not have '\u0275mod' property.`);
    }
    return ngModuleDef;
}
function getComponentDef(type) {
    return type[NG_COMP_DEF] || null;
}
function getDirectiveDefOrThrow(type) {
    const def = getDirectiveDef(type);
    if (!def) {
        throw new RuntimeError(916, (typeof ngDevMode === "undefined" || ngDevMode) && `Type ${stringify(type)} does not have '\u0275dir' property.`);
    }
    return def;
}
function getDirectiveDef(type) {
    return type[NG_DIR_DEF] || null;
}
function getPipeDef(type) {
    return type[NG_PIPE_DEF] || null;
}
function isStandalone(type) {
    const def = getComponentDef(type) || getDirectiveDef(type) || getPipeDef(type);
    return def !== null && def.standalone;
}
function makeEnvironmentProviders(providers) {
    return {
        ɵproviders: providers
    };
}
function provideEnvironmentInitializer(initializerFn) {
    return makeEnvironmentProviders([{
            provide: ENVIRONMENT_INITIALIZER,
            multi: true,
            useValue: initializerFn
        }]);
}
function importProvidersFrom(...sources) {
    return {
        ɵproviders: internalImportProvidersFrom(true, sources),
        ɵfromNgModule: true
    };
}
function internalImportProvidersFrom(checkForStandaloneCmp, ...sources) {
    const providersOut = [];
    const dedup = /* @__PURE__ */ new Set();
    let injectorTypesWithProviders;
    const collectProviders = provider => {
        providersOut.push(provider);
    };
    deepForEach(sources, source => {
        if ((typeof ngDevMode === "undefined" || ngDevMode) && checkForStandaloneCmp) {
            const cmpDef = getComponentDef(source);
            if (cmpDef?.standalone) {
                throw new RuntimeError(800, `Importing providers supports NgModule or ModuleWithProviders but got a standalone component "${stringifyForError(source)}"`);
            }
        }
        const internalSource = source;
        if (walkProviderTree(internalSource, collectProviders, [], dedup)) {
            injectorTypesWithProviders ||= [];
            injectorTypesWithProviders.push(internalSource);
        }
    });
    if (injectorTypesWithProviders !== void 0) {
        processInjectorTypesWithProviders(injectorTypesWithProviders, collectProviders);
    }
    return providersOut;
}
function processInjectorTypesWithProviders(typesWithProviders, visitor) {
    for (let i = 0; i < typesWithProviders.length; i++) {
        const { ngModule, providers } = typesWithProviders[i];
        deepForEachProvider(providers, provider => {
            ngDevMode && validateProvider(provider, providers || EMPTY_ARRAY, ngModule);
            visitor(provider, ngModule);
        });
    }
}
function walkProviderTree(container, visitor, parents, dedup) {
    container = resolveForwardRef(container);
    if (!container)
        return false;
    let defType = null;
    let injDef = getInjectorDef(container);
    const cmpDef = !injDef && getComponentDef(container);
    if (!injDef && !cmpDef) {
        const ngModule = container.ngModule;
        injDef = getInjectorDef(ngModule);
        if (injDef) {
            defType = ngModule;
        }
        else {
            return false;
        }
    }
    else if (cmpDef && !cmpDef.standalone) {
        return false;
    }
    else {
        defType = container;
    }
    if (ngDevMode && parents.indexOf(defType) !== -1) {
        const defName = stringify(defType);
        const path = parents.map(stringify).concat(defName);
        throw cyclicDependencyErrorWithDetails(defName, path);
    }
    const isDuplicate = dedup.has(defType);
    if (cmpDef) {
        if (isDuplicate) {
            return false;
        }
        dedup.add(defType);
        if (cmpDef.dependencies) {
            const deps = typeof cmpDef.dependencies === "function" ? cmpDef.dependencies() : cmpDef.dependencies;
            for (const dep of deps) {
                walkProviderTree(dep, visitor, parents, dedup);
            }
        }
    }
    else if (injDef) {
        if (injDef.imports != null && !isDuplicate) {
            ngDevMode && parents.push(defType);
            dedup.add(defType);
            let importTypesWithProviders;
            try {
                deepForEach(injDef.imports, imported => {
                    if (walkProviderTree(imported, visitor, parents, dedup)) {
                        importTypesWithProviders ||= [];
                        importTypesWithProviders.push(imported);
                    }
                });
            }
            finally {
                ngDevMode && parents.pop();
            }
            if (importTypesWithProviders !== void 0) {
                processInjectorTypesWithProviders(importTypesWithProviders, visitor);
            }
        }
        if (!isDuplicate) {
            const factory = getFactoryDef(defType) || (() => new defType());
            visitor({
                provide: defType,
                useFactory: factory,
                deps: EMPTY_ARRAY
            }, defType);
            visitor({
                provide: INJECTOR_DEF_TYPES,
                useValue: defType,
                multi: true
            }, defType);
            visitor({
                provide: ENVIRONMENT_INITIALIZER,
                useValue: () => ɵɵinject(defType),
                multi: true
            }, defType);
        }
        const defProviders = injDef.providers;
        if (defProviders != null && !isDuplicate) {
            const injectorType = container;
            deepForEachProvider(defProviders, provider => {
                ngDevMode && validateProvider(provider, defProviders, injectorType);
                visitor(provider, injectorType);
            });
        }
    }
    else {
        return false;
    }
    return defType !== container && container.providers !== void 0;
}
function validateProvider(provider, providers, containerType) {
    if (isTypeProvider(provider) || isValueProvider(provider) || isFactoryProvider(provider) || isExistingProvider(provider)) {
        return;
    }
    const classRef = resolveForwardRef(provider && (provider.useClass || provider.provide));
    if (!classRef) {
        throwInvalidProviderError(containerType, providers, provider);
    }
}
function deepForEachProvider(providers, fn) {
    for (let provider of providers) {
        if (isEnvironmentProviders(provider)) {
            provider = provider.ɵproviders;
        }
        if (Array.isArray(provider)) {
            deepForEachProvider(provider, fn);
        }
        else {
            fn(provider);
        }
    }
}
var USE_VALUE = getClosureSafeProperty({
    provide: String,
    useValue: getClosureSafeProperty
});
function isValueProvider(value) {
    return value !== null && typeof value == "object" && USE_VALUE in value;
}
function isExistingProvider(value) {
    return !!(value && value.useExisting);
}
function isFactoryProvider(value) {
    return !!(value && value.useFactory);
}
function isTypeProvider(value) {
    return typeof value === "function";
}
function isClassProvider(value) {
    return !!value.useClass;
}
var INJECTOR_SCOPE = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "Set Injector scope." : "");
var NOT_YET = {};
var CIRCULAR = {};
var NULL_INJECTOR = void 0;
function getNullInjector() {
    if (NULL_INJECTOR === void 0) {
        NULL_INJECTOR = new NullInjector();
    }
    return NULL_INJECTOR;
}
var EnvironmentInjector = class {
};
var R3Injector = class extends EnvironmentInjector {
    parent;
    source;
    scopes;
    /**
     * Map of tokens to records which contain the instances of those tokens.
     * - `null` value implies that we don't have the record. Used by tree-shakable injectors
     * to prevent further searches.
     */
    records = /* @__PURE__ */ new Map();
    /**
     * Set of values instantiated by this injector which contain `ngOnDestroy` lifecycle hooks.
     */
    _ngOnDestroyHooks = /* @__PURE__ */ new Set();
    _onDestroyHooks = [];
    /**
     * Flag indicating that this injector was previously destroyed.
     */
    get destroyed() {
        return this._destroyed;
    }
    _destroyed = false;
    injectorDefTypes;
    constructor(providers, parent, source, scopes) {
        super();
        this.parent = parent;
        this.source = source;
        this.scopes = scopes;
        forEachSingleProvider(providers, provider => this.processProvider(provider));
        this.records.set(INJECTOR$1, makeRecord(void 0, this));
        if (scopes.has("environment")) {
            this.records.set(EnvironmentInjector, makeRecord(void 0, this));
        }
        const record = this.records.get(INJECTOR_SCOPE);
        if (record != null && typeof record.value === "string") {
            this.scopes.add(record.value);
        }
        this.injectorDefTypes = new Set(this.get(INJECTOR_DEF_TYPES, EMPTY_ARRAY, {
            self: true
        }));
    }
    retrieve(token, options) {
        const flags = convertToBitFlags(options) || 0;
        try {
            return this.get(token, 
            // When a dependency is requested with an optional flag, DI returns null as the default value.
            THROW_IF_NOT_FOUND, flags);
        }
        catch (e) {
            if (isNotFound$1(e)) {
                return e;
            }
            throw e;
        }
    }
    /**
     * Destroy the injector and release references to every instance or provider associated with it.
     *
     * Also calls the `OnDestroy` lifecycle hooks of every instance that was created for which a
     * hook was found.
     */
    destroy() {
        assertNotDestroyed(this);
        this._destroyed = true;
        const prevConsumer = setActiveConsumer2(null);
        try {
            for (const service of this._ngOnDestroyHooks) {
                service.ngOnDestroy();
            }
            const onDestroyHooks = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const hook of onDestroyHooks) {
                hook();
            }
        }
        finally {
            this.records.clear();
            this._ngOnDestroyHooks.clear();
            this.injectorDefTypes.clear();
            setActiveConsumer2(prevConsumer);
        }
    }
    onDestroy(callback) {
        assertNotDestroyed(this);
        this._onDestroyHooks.push(callback);
        return () => this.removeOnDestroy(callback);
    }
    runInContext(fn) {
        assertNotDestroyed(this);
        const previousInjector = setCurrentInjector(this);
        const previousInjectImplementation = setInjectImplementation(void 0);
        let prevInjectContext;
        if (ngDevMode) {
            prevInjectContext = setInjectorProfilerContext({
                injector: this,
                token: null
            });
        }
        try {
            return fn();
        }
        finally {
            setCurrentInjector(previousInjector);
            setInjectImplementation(previousInjectImplementation);
            ngDevMode && setInjectorProfilerContext(prevInjectContext);
        }
    }
    get(token, notFoundValue = THROW_IF_NOT_FOUND, options) {
        assertNotDestroyed(this);
        if (token.hasOwnProperty(NG_ENV_ID)) {
            return token[NG_ENV_ID](this);
        }
        const flags = convertToBitFlags(options);
        let prevInjectContext;
        if (ngDevMode) {
            prevInjectContext = setInjectorProfilerContext({
                injector: this,
                token
            });
        }
        const previousInjector = setCurrentInjector(this);
        const previousInjectImplementation = setInjectImplementation(void 0);
        try {
            if (!(flags & 4)) {
                let record = this.records.get(token);
                if (record === void 0) {
                    const def = couldBeInjectableType(token) && getInjectableDef(token);
                    if (def && this.injectableDefInScope(def)) {
                        if (ngDevMode) {
                            runInInjectorProfilerContext(this, token, () => {
                                emitProviderConfiguredEvent(token);
                            });
                        }
                        record = makeRecord(injectableDefOrInjectorDefFactory(token), NOT_YET);
                    }
                    else {
                        record = null;
                    }
                    this.records.set(token, record);
                }
                if (record != null) {
                    return this.hydrate(token, record, flags);
                }
            }
            const nextInjector = !(flags & 2) ? this.parent : getNullInjector();
            notFoundValue = flags & 8 && notFoundValue === THROW_IF_NOT_FOUND ? null : notFoundValue;
            return nextInjector.get(token, notFoundValue);
        }
        catch (error) {
            const errorCode = getRuntimeErrorCode(error);
            if (errorCode === -200 || errorCode === -201) {
                if (ngDevMode) {
                    prependTokenToDependencyPath(error, token);
                    if (previousInjector) {
                        throw error;
                    }
                    else {
                        throw augmentRuntimeError(error, this.source);
                    }
                }
                else {
                    throw new RuntimeError(errorCode, null);
                }
            }
            else {
                throw error;
            }
        }
        finally {
            setInjectImplementation(previousInjectImplementation);
            setCurrentInjector(previousInjector);
            ngDevMode && setInjectorProfilerContext(prevInjectContext);
        }
    }
    /** @internal */
    resolveInjectorInitializers() {
        const prevConsumer = setActiveConsumer2(null);
        const previousInjector = setCurrentInjector(this);
        const previousInjectImplementation = setInjectImplementation(void 0);
        let prevInjectContext;
        if (ngDevMode) {
            prevInjectContext = setInjectorProfilerContext({
                injector: this,
                token: null
            });
        }
        try {
            const initializers = this.get(ENVIRONMENT_INITIALIZER, EMPTY_ARRAY, {
                self: true
            });
            if (ngDevMode && !Array.isArray(initializers)) {
                throw new RuntimeError(-209, `Unexpected type of the \`ENVIRONMENT_INITIALIZER\` token value (expected an array, but got ${typeof initializers}). Please check that the \`ENVIRONMENT_INITIALIZER\` token is configured as a \`multi: true\` provider.`);
            }
            for (const initializer of initializers) {
                initializer();
            }
        }
        finally {
            setCurrentInjector(previousInjector);
            setInjectImplementation(previousInjectImplementation);
            ngDevMode && setInjectorProfilerContext(prevInjectContext);
            setActiveConsumer2(prevConsumer);
        }
    }
    toString() {
        const tokens = [];
        const records = this.records;
        for (const token of records.keys()) {
            tokens.push(stringify(token));
        }
        return `R3Injector[${tokens.join(", ")}]`;
    }
    /**
     * Process a `SingleProvider` and add it.
     */
    processProvider(provider) {
        provider = resolveForwardRef(provider);
        let token = isTypeProvider(provider) ? provider : resolveForwardRef(provider && provider.provide);
        const record = providerToRecord(provider);
        if (ngDevMode) {
            runInInjectorProfilerContext(this, token, () => {
                if (isValueProvider(provider)) {
                    emitInjectorToCreateInstanceEvent(token);
                    emitInstanceCreatedByInjectorEvent(provider.useValue);
                }
                emitProviderConfiguredEvent(provider);
            });
        }
        if (!isTypeProvider(provider) && provider.multi === true) {
            let multiRecord = this.records.get(token);
            if (multiRecord) {
                if (ngDevMode && multiRecord.multi === void 0) {
                    throwMixedMultiProviderError();
                }
            }
            else {
                multiRecord = makeRecord(void 0, NOT_YET, true);
                multiRecord.factory = () => injectArgs(multiRecord.multi);
                this.records.set(token, multiRecord);
            }
            token = provider;
            multiRecord.multi.push(provider);
        }
        else {
            if (ngDevMode) {
                const existing = this.records.get(token);
                if (existing && existing.multi !== void 0) {
                    throwMixedMultiProviderError();
                }
            }
        }
        this.records.set(token, record);
    }
    hydrate(token, record, flags) {
        const prevConsumer = setActiveConsumer2(null);
        try {
            if (record.value === CIRCULAR) {
                throw cyclicDependencyError(stringify(token));
            }
            else if (record.value === NOT_YET) {
                record.value = CIRCULAR;
                if (ngDevMode) {
                    runInInjectorProfilerContext(this, token, () => {
                        emitInjectorToCreateInstanceEvent(token);
                        record.value = record.factory(void 0, flags);
                        emitInstanceCreatedByInjectorEvent(record.value);
                    });
                }
                else {
                    record.value = record.factory(void 0, flags);
                }
            }
            if (typeof record.value === "object" && record.value && hasOnDestroy(record.value)) {
                this._ngOnDestroyHooks.add(record.value);
            }
            return record.value;
        }
        finally {
            setActiveConsumer2(prevConsumer);
        }
    }
    injectableDefInScope(def) {
        if (!def.providedIn) {
            return false;
        }
        const providedIn = resolveForwardRef(def.providedIn);
        if (typeof providedIn === "string") {
            return providedIn === "any" || this.scopes.has(providedIn);
        }
        else {
            return this.injectorDefTypes.has(providedIn);
        }
    }
    removeOnDestroy(callback) {
        const destroyCBIdx = this._onDestroyHooks.indexOf(callback);
        if (destroyCBIdx !== -1) {
            this._onDestroyHooks.splice(destroyCBIdx, 1);
        }
    }
};
function injectableDefOrInjectorDefFactory(token) {
    const injectableDef = getInjectableDef(token);
    const factory = injectableDef !== null ? injectableDef.factory : getFactoryDef(token);
    if (factory !== null) {
        return factory;
    }
    if (token instanceof InjectionToken) {
        throw new RuntimeError(204, ngDevMode && `Token ${stringify(token)} is missing a \u0275prov definition.`);
    }
    if (token instanceof Function) {
        return getUndecoratedInjectableFactory(token);
    }
    throw new RuntimeError(204, ngDevMode && "unreachable");
}
function getUndecoratedInjectableFactory(token) {
    const paramLength = token.length;
    if (paramLength > 0) {
        throw new RuntimeError(204, ngDevMode && `Can't resolve all parameters for ${stringify(token)}: (${newArray(paramLength, "?").join(", ")}).`);
    }
    const inheritedInjectableDef = getInheritedInjectableDef(token);
    if (inheritedInjectableDef !== null) {
        return () => inheritedInjectableDef.factory(token);
    }
    else {
        return () => new token();
    }
}
function providerToRecord(provider) {
    if (isValueProvider(provider)) {
        return makeRecord(void 0, provider.useValue);
    }
    else {
        const factory = providerToFactory(provider);
        return makeRecord(factory, NOT_YET);
    }
}
function providerToFactory(provider, ngModuleType, providers) {
    let factory = void 0;
    if (ngDevMode && isEnvironmentProviders(provider)) {
        throwInvalidProviderError(void 0, providers, provider);
    }
    if (isTypeProvider(provider)) {
        const unwrappedProvider = resolveForwardRef(provider);
        return getFactoryDef(unwrappedProvider) || injectableDefOrInjectorDefFactory(unwrappedProvider);
    }
    else {
        if (isValueProvider(provider)) {
            factory = () => resolveForwardRef(provider.useValue);
        }
        else if (isFactoryProvider(provider)) {
            factory = () => provider.useFactory(...injectArgs(provider.deps || []));
        }
        else if (isExistingProvider(provider)) {
            factory = (_, flags) => ɵɵinject(resolveForwardRef(provider.useExisting), flags !== void 0 && flags & 8 ? 8 : void 0);
        }
        else {
            const classRef = resolveForwardRef(provider && (provider.useClass || provider.provide));
            if (ngDevMode && !classRef) {
                throwInvalidProviderError(ngModuleType, providers, provider);
            }
            if (hasDeps(provider)) {
                factory = () => new classRef(...injectArgs(provider.deps));
            }
            else {
                return getFactoryDef(classRef) || injectableDefOrInjectorDefFactory(classRef);
            }
        }
    }
    return factory;
}
function assertNotDestroyed(injector) {
    if (injector.destroyed) {
        throw new RuntimeError(205, ngDevMode && "Injector has already been destroyed.");
    }
}
function makeRecord(factory, value, multi = false) {
    return {
        factory,
        value,
        multi: multi ? [] : void 0
    };
}
function hasDeps(value) {
    return !!value.deps;
}
function hasOnDestroy(value) {
    return value !== null && typeof value === "object" && typeof value.ngOnDestroy === "function";
}
function couldBeInjectableType(value) {
    return typeof value === "function" || typeof value === "object" && value.ngMetadataName === "InjectionToken";
}
function forEachSingleProvider(providers, fn) {
    for (const provider of providers) {
        if (Array.isArray(provider)) {
            forEachSingleProvider(provider, fn);
        }
        else if (provider && isEnvironmentProviders(provider)) {
            forEachSingleProvider(provider.ɵproviders, fn);
        }
        else {
            fn(provider);
        }
    }
}
function runInInjectionContext(injector, fn) {
    let internalInjector;
    if (injector instanceof R3Injector) {
        assertNotDestroyed(injector);
        internalInjector = injector;
    }
    else {
        internalInjector = new RetrievingInjector(injector);
    }
    let prevInjectorProfilerContext;
    if (ngDevMode) {
        prevInjectorProfilerContext = setInjectorProfilerContext({
            injector,
            token: null
        });
    }
    const prevInjector = setCurrentInjector(internalInjector);
    const previousInjectImplementation = setInjectImplementation(void 0);
    try {
        return fn();
    }
    finally {
        setCurrentInjector(prevInjector);
        ngDevMode && setInjectorProfilerContext(prevInjectorProfilerContext);
        setInjectImplementation(previousInjectImplementation);
    }
}
function isInInjectionContext() {
    return getInjectImplementation() !== void 0 || getCurrentInjector() != null;
}
function assertInInjectionContext(debugFn) {
    if (!isInInjectionContext()) {
        throw new RuntimeError(-203, ngDevMode && debugFn.name + "() can only be used within an injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`");
    }
}
var HOST = 0;
var TVIEW = 1;
var FLAGS = 2;
var PARENT = 3;
var NEXT = 4;
var T_HOST = 5;
var HYDRATION = 6;
var CLEANUP = 7;
var CONTEXT = 8;
var INJECTOR = 9;
var ENVIRONMENT = 10;
var RENDERER = 11;
var CHILD_HEAD = 12;
var CHILD_TAIL = 13;
var DECLARATION_VIEW = 14;
var DECLARATION_COMPONENT_VIEW = 15;
var DECLARATION_LCONTAINER = 16;
var PREORDER_HOOK_FLAGS = 17;
var QUERIES = 18;
var ID = 19;
var EMBEDDED_VIEW_INJECTOR = 20;
var ON_DESTROY_HOOKS = 21;
var EFFECTS_TO_SCHEDULE = 22;
var EFFECTS = 23;
var REACTIVE_TEMPLATE_CONSUMER = 24;
var AFTER_RENDER_SEQUENCES_TO_ADD = 25;
var ANIMATIONS = 26;
var HEADER_OFFSET = 27;
var TYPE = 1;
var DEHYDRATED_VIEWS = 6;
var NATIVE = 7;
var VIEW_REFS = 8;
var MOVED_VIEWS = 9;
var CONTAINER_HEADER_OFFSET = 10;
function isLView(value) {
    return Array.isArray(value) && typeof value[TYPE] === "object";
}
function isLContainer(value) {
    return Array.isArray(value) && value[TYPE] === true;
}
function isContentQueryHost(tNode) {
    return (tNode.flags & 4) !== 0;
}
function isComponentHost(tNode) {
    return tNode.componentOffset > -1;
}
function isDirectiveHost(tNode) {
    return (tNode.flags & 1) === 1;
}
function isComponentDef(def) {
    return !!def.template;
}
function isRootView(target) {
    return (target[FLAGS] & 512) !== 0;
}
function isProjectionTNode(tNode) {
    return (tNode.type & 16) === 16;
}
function hasI18n(lView) {
    return (lView[FLAGS] & 32) === 32;
}
function isDestroyed(lView) {
    return (lView[FLAGS] & 256) === 256;
}
function assertTNodeForLView(tNode, lView) {
    assertTNodeForTView(tNode, lView[TVIEW]);
}
function assertTNodeCreationIndex(lView, index) {
    const adjustedIndex = index + HEADER_OFFSET;
    assertIndexInRange(lView, adjustedIndex);
    assertLessThan(adjustedIndex, lView[TVIEW].bindingStartIndex, "TNodes should be created before any bindings");
}
function assertTNodeForTView(tNode, tView) {
    assertTNode(tNode);
    const tData = tView.data;
    for (let i = HEADER_OFFSET; i < tData.length; i++) {
        if (tData[i] === tNode) {
            return;
        }
    }
    throwError("This TNode does not belong to this TView.");
}
function assertTNode(tNode) {
    assertDefined(tNode, "TNode must be defined");
    if (!(tNode && typeof tNode === "object" && tNode.hasOwnProperty("directiveStylingLast"))) {
        throwError("Not of type TNode, got: " + tNode);
    }
}
function assertTIcu(tIcu) {
    assertDefined(tIcu, "Expected TIcu to be defined");
    if (!(typeof tIcu.currentCaseLViewIndex === "number")) {
        throwError("Object is not of TIcu type.");
    }
}
function assertComponentType(actual, msg = "Type passed in is not ComponentType, it does not have '\u0275cmp' property.") {
    if (!getComponentDef(actual)) {
        throwError(msg);
    }
}
function assertNgModuleType(actual, msg = "Type passed in is not NgModuleType, it does not have '\u0275mod' property.") {
    if (!getNgModuleDef(actual)) {
        throwError(msg);
    }
}
function assertHasParent(tNode) {
    assertDefined(tNode, "currentTNode should exist!");
    assertDefined(tNode.parent, "currentTNode should have a parent");
}
function assertLContainer(value) {
    assertDefined(value, "LContainer must be defined");
    assertEqual(isLContainer(value), true, "Expecting LContainer");
}
function assertLViewOrUndefined(value) {
    value && assertEqual(isLView(value), true, "Expecting LView or undefined or null");
}
function assertLView(value) {
    assertDefined(value, "LView must be defined");
    assertEqual(isLView(value), true, "Expecting LView");
}
function assertFirstCreatePass(tView, errMessage) {
    assertEqual(tView.firstCreatePass, true, errMessage || "Should only be called in first create pass.");
}
function assertFirstUpdatePass(tView, errMessage) {
    assertEqual(tView.firstUpdatePass, true, "Should only be called in first update pass.");
}
function assertDirectiveDef(obj) {
    if (obj.type === void 0 || obj.selectors == void 0 || obj.inputs === void 0) {
        throwError(`Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape.`);
    }
}
function assertIndexInDeclRange(tView, index) {
    assertBetween(HEADER_OFFSET, tView.bindingStartIndex, index);
}
function assertIndexInExpandoRange(lView, index) {
    const tView = lView[1];
    assertBetween(tView.expandoStartIndex, lView.length, index);
}
function assertBetween(lower, upper, index) {
    if (!(lower <= index && index < upper)) {
        throwError(`Index out of range (expecting ${lower} <= ${index} < ${upper})`);
    }
}
function assertProjectionSlots(lView, errMessage) {
    assertDefined(lView[DECLARATION_COMPONENT_VIEW], "Component views should exist.");
    assertDefined(lView[DECLARATION_COMPONENT_VIEW][T_HOST].projection, "Components with projection nodes (<ng-content>) must have projection slots defined.");
}
function assertParentView(lView, errMessage) {
    assertDefined(lView, "Component views should always have a parent view (component's host view)");
}
function assertNodeInjector(lView, injectorIndex) {
    assertIndexInExpandoRange(lView, injectorIndex);
    assertIndexInExpandoRange(lView, injectorIndex + 8
    /* NodeInjectorOffset.PARENT */ );
    assertNumber(lView[injectorIndex + 0], "injectorIndex should point to a bloom filter");
    assertNumber(lView[injectorIndex + 1], "injectorIndex should point to a bloom filter");
    assertNumber(lView[injectorIndex + 2], "injectorIndex should point to a bloom filter");
    assertNumber(lView[injectorIndex + 3], "injectorIndex should point to a bloom filter");
    assertNumber(lView[injectorIndex + 4], "injectorIndex should point to a bloom filter");
    assertNumber(lView[injectorIndex + 5], "injectorIndex should point to a bloom filter");
    assertNumber(lView[injectorIndex + 6], "injectorIndex should point to a bloom filter");
    assertNumber(lView[injectorIndex + 7], "injectorIndex should point to a bloom filter");
    assertNumber(lView[injectorIndex + 8
    /* NodeInjectorOffset.PARENT */ ], "injectorIndex should point to parent injector");
}
var SVG_NAMESPACE = "svg";
var MATH_ML_NAMESPACE = "math";
function unwrapRNode(value) {
    while (Array.isArray(value)) {
        value = value[HOST];
    }
    return value;
}
function unwrapLView(value) {
    while (Array.isArray(value)) {
        if (typeof value[TYPE] === "object")
            return value;
        value = value[HOST];
    }
    return null;
}
function getNativeByIndex(index, lView) {
    ngDevMode && assertIndexInRange(lView, index);
    ngDevMode && assertGreaterThanOrEqual(index, HEADER_OFFSET, "Expected to be past HEADER_OFFSET");
    return unwrapRNode(lView[index]);
}
function getNativeByTNode(tNode, lView) {
    ngDevMode && assertTNodeForLView(tNode, lView);
    ngDevMode && assertIndexInRange(lView, tNode.index);
    const node = unwrapRNode(lView[tNode.index]);
    return node;
}
function getNativeByTNodeOrNull(tNode, lView) {
    const index = tNode === null ? -1 : tNode.index;
    if (index !== -1) {
        ngDevMode && assertTNodeForLView(tNode, lView);
        const node = unwrapRNode(lView[index]);
        return node;
    }
    return null;
}
function getTNode(tView, index) {
    ngDevMode && assertGreaterThan(index, -1, "wrong index for TNode");
    ngDevMode && assertLessThan(index, tView.data.length, "wrong index for TNode");
    const tNode = tView.data[index];
    ngDevMode && tNode !== null && assertTNode(tNode);
    return tNode;
}
function load(view, index) {
    ngDevMode && assertIndexInRange(view, index);
    return view[index];
}
function store(tView, lView, index, value) {
    if (index >= tView.data.length) {
        tView.data[index] = null;
        tView.blueprint[index] = null;
    }
    lView[index] = value;
}
function getComponentLViewByIndex(nodeIndex, hostView) {
    ngDevMode && assertIndexInRange(hostView, nodeIndex);
    const slotValue = hostView[nodeIndex];
    const lView = isLView(slotValue) ? slotValue : slotValue[HOST];
    return lView;
}
function isCreationMode(view) {
    return (view[FLAGS] & 4) === 4;
}
function viewAttachedToChangeDetector(view) {
    return (view[FLAGS] & 128) === 128;
}
function viewAttachedToContainer(view) {
    return isLContainer(view[PARENT]);
}
function getConstant(consts, index) {
    if (index === null || index === void 0)
        return null;
    ngDevMode && assertIndexInRange(consts, index);
    return consts[index];
}
function resetPreOrderHookFlags(lView) {
    lView[PREORDER_HOOK_FLAGS] = 0;
}
function markViewForRefresh(lView) {
    if (lView[FLAGS] & 1024) {
        return;
    }
    lView[FLAGS] |= 1024;
    if (viewAttachedToChangeDetector(lView)) {
        markAncestorsForTraversal(lView);
    }
}
function walkUpViews(nestingLevel, currentView) {
    while (nestingLevel > 0) {
        ngDevMode && assertDefined(currentView[DECLARATION_VIEW], "Declaration view should be defined if nesting level is greater than 0.");
        currentView = currentView[DECLARATION_VIEW];
        nestingLevel--;
    }
    return currentView;
}
function requiresRefreshOrTraversal(lView) {
    return !!(lView[FLAGS] & (1024 | 8192) || lView[REACTIVE_TEMPLATE_CONSUMER]?.dirty);
}
function updateAncestorTraversalFlagsOnAttach(lView) {
    lView[ENVIRONMENT].changeDetectionScheduler?.notify(8
    /* NotificationSource.ViewAttached */ );
    if (lView[FLAGS] & 64) {
        lView[FLAGS] |= 1024;
    }
    if (requiresRefreshOrTraversal(lView)) {
        markAncestorsForTraversal(lView);
    }
}
function markAncestorsForTraversal(lView) {
    lView[ENVIRONMENT].changeDetectionScheduler?.notify(0
    /* NotificationSource.MarkAncestorsForTraversal */ );
    let parent = getLViewParent(lView);
    while (parent !== null) {
        if (parent[FLAGS] & 8192) {
            break;
        }
        parent[FLAGS] |= 8192;
        if (!viewAttachedToChangeDetector(parent)) {
            break;
        }
        parent = getLViewParent(parent);
    }
}
function storeLViewOnDestroy(lView, onDestroyCallback) {
    if (isDestroyed(lView)) {
        throw new RuntimeError(911, ngDevMode && "View has already been destroyed.");
    }
    if (lView[ON_DESTROY_HOOKS] === null) {
        lView[ON_DESTROY_HOOKS] = [];
    }
    lView[ON_DESTROY_HOOKS].push(onDestroyCallback);
}
function removeLViewOnDestroy(lView, onDestroyCallback) {
    if (lView[ON_DESTROY_HOOKS] === null)
        return;
    const destroyCBIdx = lView[ON_DESTROY_HOOKS].indexOf(onDestroyCallback);
    if (destroyCBIdx !== -1) {
        lView[ON_DESTROY_HOOKS].splice(destroyCBIdx, 1);
    }
}
function getLViewParent(lView) {
    ngDevMode && assertLView(lView);
    const parent = lView[PARENT];
    return isLContainer(parent) ? parent[PARENT] : parent;
}
function getOrCreateLViewCleanup(view) {
    return view[CLEANUP] ??= [];
}
function getOrCreateTViewCleanup(tView) {
    return tView.cleanup ??= [];
}
function storeCleanupWithContext(tView, lView, context, cleanupFn) {
    const lCleanup = getOrCreateLViewCleanup(lView);
    ngDevMode && assertDefined(context, "Cleanup context is mandatory when registering framework-level destroy hooks");
    lCleanup.push(context);
    if (tView.firstCreatePass) {
        getOrCreateTViewCleanup(tView).push(cleanupFn, lCleanup.length - 1);
    }
    else {
        if (ngDevMode) {
            Object.freeze(getOrCreateTViewCleanup(tView));
        }
    }
}
var instructionState = {
    lFrame: createLFrame(null),
    bindingsEnabled: true,
    skipHydrationRootTNode: null
};
var CheckNoChangesMode;
(function (CheckNoChangesMode2) {
    CheckNoChangesMode2[CheckNoChangesMode2["Off"] = 0] = "Off";
    CheckNoChangesMode2[CheckNoChangesMode2["Exhaustive"] = 1] = "Exhaustive";
    CheckNoChangesMode2[CheckNoChangesMode2["OnlyDirtyViews"] = 2] = "OnlyDirtyViews";
})(CheckNoChangesMode || (CheckNoChangesMode = {}));
var _checkNoChangesMode = 0;
var _isRefreshingViews = false;
function getElementDepthCount() {
    return instructionState.lFrame.elementDepthCount;
}
function increaseElementDepthCount() {
    instructionState.lFrame.elementDepthCount++;
}
function decreaseElementDepthCount() {
    instructionState.lFrame.elementDepthCount--;
}
function getBindingsEnabled() {
    return instructionState.bindingsEnabled;
}
function isInSkipHydrationBlock() {
    return instructionState.skipHydrationRootTNode !== null;
}
function isSkipHydrationRootTNode(tNode) {
    return instructionState.skipHydrationRootTNode === tNode;
}
function ɵɵenableBindings() {
    instructionState.bindingsEnabled = true;
}
function enterSkipHydrationBlock(tNode) {
    instructionState.skipHydrationRootTNode = tNode;
}
function ɵɵdisableBindings() {
    instructionState.bindingsEnabled = false;
}
function leaveSkipHydrationBlock() {
    instructionState.skipHydrationRootTNode = null;
}
function getLView() {
    return instructionState.lFrame.lView;
}
function getTView() {
    return instructionState.lFrame.tView;
}
function ɵɵrestoreView(viewToRestore) {
    instructionState.lFrame.contextLView = viewToRestore;
    return viewToRestore[CONTEXT];
}
function ɵɵresetView(value) {
    instructionState.lFrame.contextLView = null;
    return value;
}
function getCurrentTNode() {
    let currentTNode = getCurrentTNodePlaceholderOk();
    while (currentTNode !== null && currentTNode.type === 64) {
        currentTNode = currentTNode.parent;
    }
    return currentTNode;
}
function getCurrentTNodePlaceholderOk() {
    return instructionState.lFrame.currentTNode;
}
function getCurrentParentTNode() {
    const lFrame = instructionState.lFrame;
    const currentTNode = lFrame.currentTNode;
    return lFrame.isParent ? currentTNode : currentTNode.parent;
}
function setCurrentTNode(tNode, isParent) {
    ngDevMode && tNode && assertTNodeForTView(tNode, instructionState.lFrame.tView);
    const lFrame = instructionState.lFrame;
    lFrame.currentTNode = tNode;
    lFrame.isParent = isParent;
}
function isCurrentTNodeParent() {
    return instructionState.lFrame.isParent;
}
function setCurrentTNodeAsNotParent() {
    instructionState.lFrame.isParent = false;
}
function getContextLView() {
    const contextLView = instructionState.lFrame.contextLView;
    ngDevMode && assertDefined(contextLView, "contextLView must be defined.");
    return contextLView;
}
function isInCheckNoChangesMode() {
    !ngDevMode && throwError("Must never be called in production mode");
    return _checkNoChangesMode !== CheckNoChangesMode.Off;
}
function isExhaustiveCheckNoChanges() {
    !ngDevMode && throwError("Must never be called in production mode");
    return _checkNoChangesMode === CheckNoChangesMode.Exhaustive;
}
function setIsInCheckNoChangesMode(mode) {
    !ngDevMode && throwError("Must never be called in production mode");
    _checkNoChangesMode = mode;
}
function isRefreshingViews() {
    return _isRefreshingViews;
}
function setIsRefreshingViews(mode) {
    const prev = _isRefreshingViews;
    _isRefreshingViews = mode;
    return prev;
}
function getBindingRoot() {
    const lFrame = instructionState.lFrame;
    let index = lFrame.bindingRootIndex;
    if (index === -1) {
        index = lFrame.bindingRootIndex = lFrame.tView.bindingStartIndex;
    }
    return index;
}
function getBindingIndex() {
    return instructionState.lFrame.bindingIndex;
}
function setBindingIndex(value) {
    return instructionState.lFrame.bindingIndex = value;
}
function nextBindingIndex() {
    return instructionState.lFrame.bindingIndex++;
}
function incrementBindingIndex(count) {
    const lFrame = instructionState.lFrame;
    const index = lFrame.bindingIndex;
    lFrame.bindingIndex = lFrame.bindingIndex + count;
    return index;
}
function isInI18nBlock() {
    return instructionState.lFrame.inI18n;
}
function setInI18nBlock(isInI18nBlock2) {
    instructionState.lFrame.inI18n = isInI18nBlock2;
}
function setBindingRootForHostBindings(bindingRootIndex, currentDirectiveIndex) {
    const lFrame = instructionState.lFrame;
    lFrame.bindingIndex = lFrame.bindingRootIndex = bindingRootIndex;
    setCurrentDirectiveIndex(currentDirectiveIndex);
}
function getCurrentDirectiveIndex() {
    return instructionState.lFrame.currentDirectiveIndex;
}
function setCurrentDirectiveIndex(currentDirectiveIndex) {
    instructionState.lFrame.currentDirectiveIndex = currentDirectiveIndex;
}
function getCurrentDirectiveDef(tData) {
    const currentDirectiveIndex = instructionState.lFrame.currentDirectiveIndex;
    return currentDirectiveIndex === -1 ? null : tData[currentDirectiveIndex];
}
function getCurrentQueryIndex() {
    return instructionState.lFrame.currentQueryIndex;
}
function setCurrentQueryIndex(value) {
    instructionState.lFrame.currentQueryIndex = value;
}
function getDeclarationTNode(lView) {
    const tView = lView[TVIEW];
    if (tView.type === 2) {
        ngDevMode && assertDefined(tView.declTNode, "Embedded TNodes should have declaration parents.");
        return tView.declTNode;
    }
    if (tView.type === 1) {
        return lView[T_HOST];
    }
    return null;
}
function enterDI(lView, tNode, flags) {
    ngDevMode && assertLViewOrUndefined(lView);
    if (flags & 4) {
        ngDevMode && assertTNodeForTView(tNode, lView[TVIEW]);
        let parentTNode = tNode;
        let parentLView = lView;
        while (true) {
            ngDevMode && assertDefined(parentTNode, "Parent TNode should be defined");
            parentTNode = parentTNode.parent;
            if (parentTNode === null && !(flags & 1)) {
                parentTNode = getDeclarationTNode(parentLView);
                if (parentTNode === null)
                    break;
                ngDevMode && assertDefined(parentLView, "Parent LView should be defined");
                parentLView = parentLView[DECLARATION_VIEW];
                if (parentTNode.type & (2 | 8)) {
                    break;
                }
            }
            else {
                break;
            }
        }
        if (parentTNode === null) {
            return false;
        }
        else {
            tNode = parentTNode;
            lView = parentLView;
        }
    }
    ngDevMode && assertTNodeForLView(tNode, lView);
    const lFrame = instructionState.lFrame = allocLFrame();
    lFrame.currentTNode = tNode;
    lFrame.lView = lView;
    return true;
}
function enterView(newView) {
    ngDevMode && assertNotEqual(newView[0], newView[1], "????");
    ngDevMode && assertLViewOrUndefined(newView);
    const newLFrame = allocLFrame();
    if (ngDevMode) {
        assertEqual(newLFrame.isParent, true, "Expected clean LFrame");
        assertEqual(newLFrame.lView, null, "Expected clean LFrame");
        assertEqual(newLFrame.tView, null, "Expected clean LFrame");
        assertEqual(newLFrame.selectedIndex, -1, "Expected clean LFrame");
        assertEqual(newLFrame.elementDepthCount, 0, "Expected clean LFrame");
        assertEqual(newLFrame.currentDirectiveIndex, -1, "Expected clean LFrame");
        assertEqual(newLFrame.currentNamespace, null, "Expected clean LFrame");
        assertEqual(newLFrame.bindingRootIndex, -1, "Expected clean LFrame");
        assertEqual(newLFrame.currentQueryIndex, 0, "Expected clean LFrame");
    }
    const tView = newView[TVIEW];
    instructionState.lFrame = newLFrame;
    ngDevMode && tView.firstChild && assertTNodeForTView(tView.firstChild, tView);
    newLFrame.currentTNode = tView.firstChild;
    newLFrame.lView = newView;
    newLFrame.tView = tView;
    newLFrame.contextLView = newView;
    newLFrame.bindingIndex = tView.bindingStartIndex;
    newLFrame.inI18n = false;
}
function allocLFrame() {
    const currentLFrame = instructionState.lFrame;
    const childLFrame = currentLFrame === null ? null : currentLFrame.child;
    const newLFrame = childLFrame === null ? createLFrame(currentLFrame) : childLFrame;
    return newLFrame;
}
function createLFrame(parent) {
    const lFrame = {
        currentTNode: null,
        isParent: true,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent,
        child: null,
        inI18n: false
    };
    parent !== null && (parent.child = lFrame);
    return lFrame;
}
function leaveViewLight() {
    const oldLFrame = instructionState.lFrame;
    instructionState.lFrame = oldLFrame.parent;
    oldLFrame.currentTNode = null;
    oldLFrame.lView = null;
    return oldLFrame;
}
var leaveDI = leaveViewLight;
function leaveView() {
    const oldLFrame = leaveViewLight();
    oldLFrame.isParent = true;
    oldLFrame.tView = null;
    oldLFrame.selectedIndex = -1;
    oldLFrame.contextLView = null;
    oldLFrame.elementDepthCount = 0;
    oldLFrame.currentDirectiveIndex = -1;
    oldLFrame.currentNamespace = null;
    oldLFrame.bindingRootIndex = -1;
    oldLFrame.bindingIndex = -1;
    oldLFrame.currentQueryIndex = 0;
}
function nextContextImpl(level) {
    const contextLView = instructionState.lFrame.contextLView = walkUpViews(level, instructionState.lFrame.contextLView);
    return contextLView[CONTEXT];
}
function getSelectedIndex() {
    return instructionState.lFrame.selectedIndex;
}
function setSelectedIndex(index) {
    ngDevMode && index !== -1 && assertGreaterThanOrEqual(index, HEADER_OFFSET, "Index must be past HEADER_OFFSET (or -1).");
    ngDevMode && assertLessThan(index, instructionState.lFrame.lView.length, "Can't set index passed end of LView");
    instructionState.lFrame.selectedIndex = index;
}
function getSelectedTNode() {
    const lFrame = instructionState.lFrame;
    return getTNode(lFrame.tView, lFrame.selectedIndex);
}
function ɵɵnamespaceSVG() {
    instructionState.lFrame.currentNamespace = SVG_NAMESPACE;
}
function ɵɵnamespaceMathML() {
    instructionState.lFrame.currentNamespace = MATH_ML_NAMESPACE;
}
function ɵɵnamespaceHTML() {
    namespaceHTMLInternal();
}
function namespaceHTMLInternal() {
    instructionState.lFrame.currentNamespace = null;
}
function getNamespace() {
    return instructionState.lFrame.currentNamespace;
}
var _wasLastNodeCreated = true;
function wasLastNodeCreated() {
    return _wasLastNodeCreated;
}
function lastNodeWasCreated(flag) {
    _wasLastNodeCreated = flag;
}
function createInjector(defType, parent = null, additionalProviders = null, name) {
    const injector = createInjectorWithoutInjectorInstances(defType, parent, additionalProviders, name);
    injector.resolveInjectorInitializers();
    return injector;
}
function createInjectorWithoutInjectorInstances(defType, parent = null, additionalProviders = null, name, scopes = /* @__PURE__ */ new Set()) {
    const providers = [additionalProviders || EMPTY_ARRAY, importProvidersFrom(defType)];
    name = name || (typeof defType === "object" ? void 0 : stringify(defType));
    return new R3Injector(providers, parent || getNullInjector(), name || null, scopes);
}
var Injector = class _Injector {
    static THROW_IF_NOT_FOUND = THROW_IF_NOT_FOUND;
    static NULL = new NullInjector();
    static create(options, parent) {
        if (Array.isArray(options)) {
            return createInjector({
                name: ""
            }, parent, options, "");
        }
        else {
            const name = options.name ?? "";
            return createInjector({
                name
            }, options.parent, options.providers, name);
        }
    }
    /** @nocollapse */
    static ɵprov = ( /** @pureOrBreakMyCode */
    /* @__PURE__ */ ɵɵdefineInjectable({
        token: _Injector,
        providedIn: "any",
        factory: () => ɵɵinject(INJECTOR$1)
    }));
    /**
     * @internal
     * @nocollapse
     */
    static __NG_ELEMENT_ID__ = -1;
};
var DOCUMENT = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "DocumentToken" : "");
var DestroyRef = class {
    /**
     * @internal
     * @nocollapse
     */
    static __NG_ELEMENT_ID__ = injectDestroyRef;
    /**
     * @internal
     * @nocollapse
     */
    static __NG_ENV_ID__ = injector => injector;
};
var NodeInjectorDestroyRef = class extends DestroyRef {
    _lView;
    constructor(_lView) {
        super();
        this._lView = _lView;
    }
    get destroyed() {
        return isDestroyed(this._lView);
    }
    onDestroy(callback) {
        const lView = this._lView;
        storeLViewOnDestroy(lView, callback);
        return () => removeLViewOnDestroy(lView, callback);
    }
};
function injectDestroyRef() {
    return new NodeInjectorDestroyRef(getLView());
}
var SCHEDULE_IN_ROOT_ZONE_DEFAULT = false;
var PendingTasksInternal = class _PendingTasksInternal {
    taskId = 0;
    pendingTasks = /* @__PURE__ */ new Set();
    destroyed = false;
    pendingTask = new BehaviorSubject(false);
    get hasPendingTasks() {
        return this.destroyed ? false : this.pendingTask.value;
    }
    /**
     * In case the service is about to be destroyed, return a self-completing observable.
     * Otherwise, return the observable that emits the current state of pending tasks.
     */
    get hasPendingTasksObservable() {
        if (this.destroyed) {
            return new Observable(subscriber => {
                subscriber.next(false);
                subscriber.complete();
            });
        }
        return this.pendingTask;
    }
    add() {
        if (!this.hasPendingTasks && !this.destroyed) {
            this.pendingTask.next(true);
        }
        const taskId = this.taskId++;
        this.pendingTasks.add(taskId);
        return taskId;
    }
    has(taskId) {
        return this.pendingTasks.has(taskId);
    }
    remove(taskId) {
        this.pendingTasks.delete(taskId);
        if (this.pendingTasks.size === 0 && this.hasPendingTasks) {
            this.pendingTask.next(false);
        }
    }
    ngOnDestroy() {
        this.pendingTasks.clear();
        if (this.hasPendingTasks) {
            this.pendingTask.next(false);
        }
        this.destroyed = true;
        this.pendingTask.unsubscribe();
    }
    /** @nocollapse */
    static ɵprov = ( /** @pureOrBreakMyCode */
    /* @__PURE__ */ ɵɵdefineInjectable({
        token: _PendingTasksInternal,
        providedIn: "root",
        factory: () => new _PendingTasksInternal()
    }));
};
var EventEmitter_ = class extends Subject {
    // tslint:disable-next-line:require-internal-with-underscore
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(isAsync = false) {
        super();
        this.__isAsync = isAsync;
        if (isInInjectionContext()) {
            this.destroyRef = inject(DestroyRef, {
                optional: true
            }) ?? void 0;
            this.pendingTasks = inject(PendingTasksInternal, {
                optional: true
            }) ?? void 0;
        }
    }
    emit(value) {
        const prevConsumer = setActiveConsumer(null);
        try {
            super.next(value);
        }
        finally {
            setActiveConsumer(prevConsumer);
        }
    }
    subscribe(observerOrNext, error, complete) {
        let nextFn = observerOrNext;
        let errorFn = error || (() => null);
        let completeFn = complete;
        if (observerOrNext && typeof observerOrNext === "object") {
            const observer = observerOrNext;
            nextFn = observer.next?.bind(observer);
            errorFn = observer.error?.bind(observer);
            completeFn = observer.complete?.bind(observer);
        }
        if (this.__isAsync) {
            errorFn = this.wrapInTimeout(errorFn);
            if (nextFn) {
                nextFn = this.wrapInTimeout(nextFn);
            }
            if (completeFn) {
                completeFn = this.wrapInTimeout(completeFn);
            }
        }
        const sink = super.subscribe({
            next: nextFn,
            error: errorFn,
            complete: completeFn
        });
        if (observerOrNext instanceof Subscription) {
            observerOrNext.add(sink);
        }
        return sink;
    }
    wrapInTimeout(fn) {
        return value => {
            const taskId = this.pendingTasks?.add();
            setTimeout(() => {
                try {
                    fn(value);
                }
                finally {
                    if (taskId !== void 0) {
                        this.pendingTasks?.remove(taskId);
                    }
                }
            });
        };
    }
};
var EventEmitter = EventEmitter_;
function noop(...args) { }
function scheduleCallbackWithRafRace(callback) {
    let timeoutId;
    let animationFrameId;
    function cleanup() {
        callback = noop;
        try {
            if (animationFrameId !== void 0 && typeof cancelAnimationFrame === "function") {
                cancelAnimationFrame(animationFrameId);
            }
            if (timeoutId !== void 0) {
                clearTimeout(timeoutId);
            }
        }
        catch { }
    }
    timeoutId = setTimeout(() => {
        callback();
        cleanup();
    });
    if (typeof requestAnimationFrame === "function") {
        animationFrameId = requestAnimationFrame(() => {
            callback();
            cleanup();
        });
    }
    return () => cleanup();
}
function scheduleCallbackWithMicrotask(callback) {
    queueMicrotask(() => callback());
    return () => {
        callback = noop;
    };
}
var AsyncStackTaggingZoneSpec = class {
    createTask;
    constructor(namePrefix, consoleAsyncStackTaggingImpl = console) {
        this.name = "asyncStackTagging for " + namePrefix;
        this.createTask = consoleAsyncStackTaggingImpl?.createTask ?? (() => null);
    }
    // ZoneSpec implementation below.
    name;
    onScheduleTask(delegate, _current, target, task) {
        task.consoleTask = this.createTask(`Zone - ${task.source || task.type}`);
        return delegate.scheduleTask(target, task);
    }
    onInvokeTask(delegate, _currentZone, targetZone, task, applyThis, applyArgs) {
        let ret;
        if (task.consoleTask) {
            ret = task.consoleTask.run(() => delegate.invokeTask(targetZone, task, applyThis, applyArgs));
        }
        else {
            ret = delegate.invokeTask(targetZone, task, applyThis, applyArgs);
        }
        return ret;
    }
};
var isAngularZoneProperty = "isAngularZone";
var angularZoneInstanceIdProperty = isAngularZoneProperty + "_ID";
var ngZoneInstanceId = 0;
var NgZone = class _NgZone {
    hasPendingMacrotasks = false;
    hasPendingMicrotasks = false;
    /**
     * Whether there are no outstanding microtasks or macrotasks.
     */
    isStable = true;
    /**
     * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
     */
    onUnstable = new EventEmitter(false);
    /**
     * Notifies when there is no more microtasks enqueued in the current VM Turn.
     * This is a hint for Angular to do change detection, which may enqueue more microtasks.
     * For this reason this event can fire multiple times per VM Turn.
     */
    onMicrotaskEmpty = new EventEmitter(false);
    /**
     * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
     * implies we are about to relinquish VM turn.
     * This event gets called just once.
     */
    onStable = new EventEmitter(false);
    /**
     * Notifies that an error has been delivered.
     */
    onError = new EventEmitter(false);
    constructor(options) {
        const { enableLongStackTrace = false, shouldCoalesceEventChangeDetection = false, shouldCoalesceRunChangeDetection = false, scheduleInRootZone = SCHEDULE_IN_ROOT_ZONE_DEFAULT } = options;
        if (typeof Zone == "undefined") {
            throw new RuntimeError(908, ngDevMode && `In this configuration Angular requires Zone.js`);
        }
        Zone.assertZonePatched();
        const self = this;
        self._nesting = 0;
        self._outer = self._inner = Zone.current;
        if (ngDevMode) {
            self._inner = self._inner.fork(new AsyncStackTaggingZoneSpec("Angular"));
        }
        if (Zone["TaskTrackingZoneSpec"]) {
            self._inner = self._inner.fork(new Zone["TaskTrackingZoneSpec"]());
        }
        if (enableLongStackTrace && Zone["longStackTraceZoneSpec"]) {
            self._inner = self._inner.fork(Zone["longStackTraceZoneSpec"]);
        }
        self.shouldCoalesceEventChangeDetection = !shouldCoalesceRunChangeDetection && shouldCoalesceEventChangeDetection;
        self.shouldCoalesceRunChangeDetection = shouldCoalesceRunChangeDetection;
        self.callbackScheduled = false;
        self.scheduleInRootZone = scheduleInRootZone;
        forkInnerZoneWithAngularBehavior(self);
    }
    /**
      This method checks whether the method call happens within an Angular Zone instance.
    */
    static isInAngularZone() {
        return typeof Zone !== "undefined" && Zone.current.get(isAngularZoneProperty) === true;
    }
    /**
      Assures that the method is called within the Angular Zone, otherwise throws an error.
    */
    static assertInAngularZone() {
        if (!_NgZone.isInAngularZone()) {
            throw new RuntimeError(909, ngDevMode && "Expected to be in Angular Zone, but it is not!");
        }
    }
    /**
      Assures that the method is called outside of the Angular Zone, otherwise throws an error.
    */
    static assertNotInAngularZone() {
        if (_NgZone.isInAngularZone()) {
            throw new RuntimeError(909, ngDevMode && "Expected to not be in Angular Zone, but it is!");
        }
    }
    /**
     * Executes the `fn` function synchronously within the Angular zone and returns value returned by
     * the function.
     *
     * Running functions via `run` allows you to reenter Angular zone from a task that was executed
     * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * within the Angular zone.
     *
     * If a synchronous error happens it will be rethrown and not reported via `onError`.
     */
    run(fn, applyThis, applyArgs) {
        return this._inner.run(fn, applyThis, applyArgs);
    }
    /**
     * Executes the `fn` function synchronously within the Angular zone as a task and returns value
     * returned by the function.
     *
     * Running functions via `runTask` allows you to reenter Angular zone from a task that was executed
     * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * within the Angular zone.
     *
     * If a synchronous error happens it will be rethrown and not reported via `onError`.
     */
    runTask(fn, applyThis, applyArgs, name) {
        const zone = this._inner;
        const task = zone.scheduleEventTask("NgZoneEvent: " + name, fn, EMPTY_PAYLOAD, noop, noop);
        try {
            return zone.runTask(task, applyThis, applyArgs);
        }
        finally {
            zone.cancelTask(task);
        }
    }
    /**
     * Same as `run`, except that synchronous errors are caught and forwarded via `onError` and not
     * rethrown.
     */
    runGuarded(fn, applyThis, applyArgs) {
        return this._inner.runGuarded(fn, applyThis, applyArgs);
    }
    /**
     * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
     * the function.
     *
     * Running functions via {@link #runOutsideAngular} allows you to escape Angular's zone and do
     * work that
     * doesn't trigger Angular change-detection or is subject to Angular's error handling.
     *
     * Any future tasks or microtasks scheduled from within this function will continue executing from
     * outside of the Angular zone.
     *
     * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
     */
    runOutsideAngular(fn) {
        return this._outer.run(fn);
    }
};
var EMPTY_PAYLOAD = {};
function checkStable(zone) {
    if (zone._nesting == 0 && !zone.hasPendingMicrotasks && !zone.isStable) {
        try {
            zone._nesting++;
            zone.onMicrotaskEmpty.emit(null);
        }
        finally {
            zone._nesting--;
            if (!zone.hasPendingMicrotasks) {
                try {
                    zone.runOutsideAngular(() => zone.onStable.emit(null));
                }
                finally {
                    zone.isStable = true;
                }
            }
        }
    }
}
function delayChangeDetectionForEvents(zone) {
    if (zone.isCheckStableRunning || zone.callbackScheduled) {
        return;
    }
    zone.callbackScheduled = true;
    function scheduleCheckStable() {
        scheduleCallbackWithRafRace(() => {
            zone.callbackScheduled = false;
            updateMicroTaskStatus(zone);
            zone.isCheckStableRunning = true;
            checkStable(zone);
            zone.isCheckStableRunning = false;
        });
    }
    if (zone.scheduleInRootZone) {
        Zone.root.run(() => {
            scheduleCheckStable();
        });
    }
    else {
        zone._outer.run(() => {
            scheduleCheckStable();
        });
    }
    updateMicroTaskStatus(zone);
}
function forkInnerZoneWithAngularBehavior(zone) {
    const delayChangeDetectionForEventsDelegate = () => {
        delayChangeDetectionForEvents(zone);
    };
    const instanceId = ngZoneInstanceId++;
    zone._inner = zone._inner.fork({
        name: "angular",
        properties: {
            [isAngularZoneProperty]: true,
            [angularZoneInstanceIdProperty]: instanceId,
            [angularZoneInstanceIdProperty + instanceId]: true
        },
        onInvokeTask: (delegate, current, target, task, applyThis, applyArgs) => {
            if (shouldBeIgnoredByZone(applyArgs)) {
                return delegate.invokeTask(target, task, applyThis, applyArgs);
            }
            try {
                onEnter(zone);
                return delegate.invokeTask(target, task, applyThis, applyArgs);
            }
            finally {
                if (zone.shouldCoalesceEventChangeDetection && task.type === "eventTask" || zone.shouldCoalesceRunChangeDetection) {
                    delayChangeDetectionForEventsDelegate();
                }
                onLeave(zone);
            }
        },
        onInvoke: (delegate, current, target, callback, applyThis, applyArgs, source) => {
            try {
                onEnter(zone);
                return delegate.invoke(target, callback, applyThis, applyArgs, source);
            }
            finally {
                if (zone.shouldCoalesceRunChangeDetection &&
                    // Do not delay change detection when the task is the scheduler's tick.
                    // We need to synchronously trigger the stability logic so that the
                    // zone-based scheduler can prevent a duplicate ApplicationRef.tick
                    // by first checking if the scheduler tick is running. This does seem a bit roundabout,
                    // but we _do_ still want to trigger all the correct events when we exit the zone.run
                    // (`onMicrotaskEmpty` and `onStable` _should_ emit; developers can have code which
                    // relies on these events happening after change detection runs).
                    // Note: `zone.callbackScheduled` is already in delayChangeDetectionForEventsDelegate
                    // but is added here as well to prevent reads of applyArgs when not necessary
                    !zone.callbackScheduled && !isSchedulerTick(applyArgs)) {
                    delayChangeDetectionForEventsDelegate();
                }
                onLeave(zone);
            }
        },
        onHasTask: (delegate, current, target, hasTaskState) => {
            delegate.hasTask(target, hasTaskState);
            if (current === target) {
                if (hasTaskState.change == "microTask") {
                    zone._hasPendingMicrotasks = hasTaskState.microTask;
                    updateMicroTaskStatus(zone);
                    checkStable(zone);
                }
                else if (hasTaskState.change == "macroTask") {
                    zone.hasPendingMacrotasks = hasTaskState.macroTask;
                }
            }
        },
        onHandleError: (delegate, current, target, error) => {
            delegate.handleError(target, error);
            zone.runOutsideAngular(() => zone.onError.emit(error));
            return false;
        }
    });
}
function updateMicroTaskStatus(zone) {
    if (zone._hasPendingMicrotasks || (zone.shouldCoalesceEventChangeDetection || zone.shouldCoalesceRunChangeDetection) && zone.callbackScheduled === true) {
        zone.hasPendingMicrotasks = true;
    }
    else {
        zone.hasPendingMicrotasks = false;
    }
}
function onEnter(zone) {
    zone._nesting++;
    if (zone.isStable) {
        zone.isStable = false;
        zone.onUnstable.emit(null);
    }
}
function onLeave(zone) {
    zone._nesting--;
    checkStable(zone);
}
var NoopNgZone = class {
    hasPendingMicrotasks = false;
    hasPendingMacrotasks = false;
    isStable = true;
    onUnstable = new EventEmitter();
    onMicrotaskEmpty = new EventEmitter();
    onStable = new EventEmitter();
    onError = new EventEmitter();
    run(fn, applyThis, applyArgs) {
        return fn.apply(applyThis, applyArgs);
    }
    runGuarded(fn, applyThis, applyArgs) {
        return fn.apply(applyThis, applyArgs);
    }
    runOutsideAngular(fn) {
        return fn();
    }
    runTask(fn, applyThis, applyArgs, name) {
        return fn.apply(applyThis, applyArgs);
    }
};
function shouldBeIgnoredByZone(applyArgs) {
    return hasApplyArgsData(applyArgs, "__ignore_ng_zone__");
}
function isSchedulerTick(applyArgs) {
    return hasApplyArgsData(applyArgs, "__scheduler_tick__");
}
function hasApplyArgsData(applyArgs, key) {
    if (!Array.isArray(applyArgs)) {
        return false;
    }
    if (applyArgs.length !== 1) {
        return false;
    }
    return applyArgs[0]?.data?.[key] === true;
}
var ErrorHandler = class {
    /**
     * @internal
     */
    _console = console;
    handleError(error) {
        this._console.error("ERROR", error);
    }
};
var INTERNAL_APPLICATION_ERROR_HANDLER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "internal error handler" : "", {
    providedIn: "root",
    factory: () => {
        const zone = inject(NgZone);
        const injector = inject(EnvironmentInjector);
        let userErrorHandler;
        return e => {
            zone.runOutsideAngular(() => {
                if (injector.destroyed && !userErrorHandler) {
                    setTimeout(() => {
                        throw e;
                    });
                }
                else {
                    userErrorHandler ??= injector.get(ErrorHandler);
                    userErrorHandler.handleError(e);
                }
            });
        };
    }
});
var errorHandlerEnvironmentInitializer = {
    provide: ENVIRONMENT_INITIALIZER,
    useValue: () => {
        const handler = inject(ErrorHandler, {
            optional: true
        });
        if ((typeof ngDevMode === "undefined" || ngDevMode) && handler === null) {
            throw new RuntimeError(402, `A required Injectable was not found in the dependency injection tree. If you are bootstrapping an NgModule, make sure that the \`BrowserModule\` is imported.`);
        }
    },
    multi: true
};
var globalErrorListeners = new InjectionToken(typeof ngDevMode !== void 0 && ngDevMode ? "GlobalErrorListeners" : "", {
    providedIn: "root",
    factory: () => {
        if (typeof ngServerMode !== "undefined" && ngServerMode) {
            return;
        }
        const window = inject(DOCUMENT).defaultView;
        if (!window) {
            return;
        }
        const errorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
        const rejectionListener = e => {
            errorHandler(e.reason);
            e.preventDefault();
        };
        const errorListener = e => {
            if (e.error) {
                errorHandler(e.error);
            }
            else {
                errorHandler(new Error(ngDevMode ? `An ErrorEvent with no error occurred. See Error.cause for details: ${e.message}` : e.message, {
                    cause: e
                }));
            }
            e.preventDefault();
        };
        const setupEventListeners = () => {
            window.addEventListener("unhandledrejection", rejectionListener);
            window.addEventListener("error", errorListener);
        };
        if (typeof Zone !== "undefined") {
            Zone.root.run(setupEventListeners);
        }
        else {
            setupEventListeners();
        }
        inject(DestroyRef).onDestroy(() => {
            window.removeEventListener("error", errorListener);
            window.removeEventListener("unhandledrejection", rejectionListener);
        });
    }
});
function provideBrowserGlobalErrorListeners() {
    return makeEnvironmentProviders([provideEnvironmentInitializer(() => void inject(globalErrorListeners))]);
}
function isSignal(value) {
    return typeof value === "function" && value[SIGNAL] !== void 0;
}
function ɵunwrapWritableSignal(value) {
    return null;
}
function signal(initialValue, options) {
    const [get, set, update] = createSignal(initialValue, options?.equal);
    const signalFn = get;
    const node = signalFn[SIGNAL];
    signalFn.set = set;
    signalFn.update = update;
    signalFn.asReadonly = signalAsReadonlyFn.bind(signalFn);
    if (ngDevMode) {
        signalFn.toString = () => `[Signal: ${signalFn()}]`;
        node.debugName = options?.debugName;
    }
    return signalFn;
}
function signalAsReadonlyFn() {
    const node = this[SIGNAL];
    if (node.readonlyFn === void 0) {
        const readonlyFn = () => this();
        readonlyFn[SIGNAL] = node;
        node.readonlyFn = readonlyFn;
    }
    return node.readonlyFn;
}
function isWritableSignal(value) {
    return isSignal(value) && typeof value.set === "function";
}
var ChangeDetectionScheduler = class {
};
var ZONELESS_ENABLED = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "Zoneless enabled" : "", {
    providedIn: "root",
    factory: () => true
});
var PROVIDED_ZONELESS = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "Zoneless provided" : "", {
    providedIn: "root",
    factory: () => false
});
var SCHEDULE_IN_ROOT_ZONE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "run changes outside zone in root" : "");
function assertNotInReactiveContext(debugFn, extraContext) {
    if (getActiveConsumer() !== null) {
        throw new RuntimeError(-602, ngDevMode && `${debugFn.name}() cannot be called from within a reactive context.${extraContext ? ` ${extraContext}` : ""}`);
    }
}
var ViewContext = class {
    view;
    node;
    constructor(view, node) {
        this.view = view;
        this.node = node;
    }
    /**
     * @internal
     * @nocollapse
     */
    static __NG_ELEMENT_ID__ = injectViewContext;
};
function injectViewContext() {
    return new ViewContext(getLView(), getCurrentTNode());
}
var PendingTasks = class _PendingTasks {
    internalPendingTasks = inject(PendingTasksInternal);
    scheduler = inject(ChangeDetectionScheduler);
    errorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
    /**
     * Adds a new task that should block application's stability.
     * @returns A cleanup function that removes a task when called.
     */
    add() {
        const taskId = this.internalPendingTasks.add();
        return () => {
            if (!this.internalPendingTasks.has(taskId)) {
                return;
            }
            this.scheduler.notify(11
            /* NotificationSource.PendingTaskRemoved */ );
            this.internalPendingTasks.remove(taskId);
        };
    }
    /**
     * Runs an asynchronous function and blocks the application's stability until the function completes.
     *
     * ```ts
     * pendingTasks.run(async () => {
     *   const userData = await fetch('/api/user');
     *   this.userData.set(userData);
     * });
     * ```
     *
     * @param fn The asynchronous function to execute
     * @developerPreview 19.0
     */
    run(fn) {
        const removeTask = this.add();
        fn().catch(this.errorHandler).finally(removeTask);
    }
    /** @nocollapse */
    static ɵprov = ( /** @pureOrBreakMyCode */
    /* @__PURE__ */ ɵɵdefineInjectable({
        token: _PendingTasks,
        providedIn: "root",
        factory: () => new _PendingTasks()
    }));
};
var EffectScheduler = class _EffectScheduler {
    /** @nocollapse */
    static ɵprov = ( /** @pureOrBreakMyCode */
    /* @__PURE__ */ ɵɵdefineInjectable({
        token: _EffectScheduler,
        providedIn: "root",
        factory: () => new ZoneAwareEffectScheduler()
    }));
};
var ZoneAwareEffectScheduler = class {
    dirtyEffectCount = 0;
    queues = /* @__PURE__ */ new Map();
    add(handle) {
        this.enqueue(handle);
        this.schedule(handle);
    }
    schedule(handle) {
        if (!handle.dirty) {
            return;
        }
        this.dirtyEffectCount++;
    }
    remove(handle) {
        const zone = handle.zone;
        const queue = this.queues.get(zone);
        if (!queue.has(handle)) {
            return;
        }
        queue.delete(handle);
        if (handle.dirty) {
            this.dirtyEffectCount--;
        }
    }
    enqueue(handle) {
        const zone = handle.zone;
        if (!this.queues.has(zone)) {
            this.queues.set(zone, /* @__PURE__ */ new Set());
        }
        const queue = this.queues.get(zone);
        if (queue.has(handle)) {
            return;
        }
        queue.add(handle);
    }
    /**
     * Run all scheduled effects.
     *
     * Execution order of effects within the same zone is guaranteed to be FIFO, but there is no
     * ordering guarantee between effects scheduled in different zones.
     */
    flush() {
        while (this.dirtyEffectCount > 0) {
            let ranOneEffect = false;
            for (const [zone, queue] of this.queues) {
                if (zone === null) {
                    ranOneEffect ||= this.flushQueue(queue);
                }
                else {
                    ranOneEffect ||= zone.run(() => this.flushQueue(queue));
                }
            }
            if (!ranOneEffect) {
                this.dirtyEffectCount = 0;
            }
        }
    }
    flushQueue(queue) {
        let ranOneEffect = false;
        for (const handle of queue) {
            if (!handle.dirty) {
                continue;
            }
            this.dirtyEffectCount--;
            ranOneEffect = true;
            handle.run();
        }
        return ranOneEffect;
    }
};
// node_modules/@angular/core/fesm2022/resource.mjs
var OutputEmitterRef = class {
    destroyed = false;
    listeners = null;
    errorHandler = inject(ErrorHandler, {
        optional: true
    });
    /** @internal */
    destroyRef = inject(DestroyRef);
    constructor() {
        this.destroyRef.onDestroy(() => {
            this.destroyed = true;
            this.listeners = null;
        });
    }
    subscribe(callback) {
        if (this.destroyed) {
            throw new RuntimeError(953, ngDevMode && "Unexpected subscription to destroyed `OutputRef`. The owning directive/component is destroyed.");
        }
        (this.listeners ??= []).push(callback);
        return {
            unsubscribe: () => {
                const idx = this.listeners?.indexOf(callback);
                if (idx !== void 0 && idx !== -1) {
                    this.listeners?.splice(idx, 1);
                }
            }
        };
    }
    /** Emits a new value to the output. */
    emit(value) {
        if (this.destroyed) {
            console.warn(formatRuntimeError(953, ngDevMode && "Unexpected emit for destroyed `OutputRef`. The owning directive/component is destroyed."));
            return;
        }
        if (this.listeners === null) {
            return;
        }
        const previousConsumer = setActiveConsumer(null);
        try {
            for (const listenerFn of this.listeners) {
                try {
                    listenerFn(value);
                }
                catch (err) {
                    this.errorHandler?.handleError(err);
                }
            }
        }
        finally {
            setActiveConsumer(previousConsumer);
        }
    }
};
function getOutputDestroyRef(ref) {
    return ref.destroyRef;
}
function untracked2(nonReactiveReadsFn) {
    return untracked(nonReactiveReadsFn);
}
function computed(computation, options) {
    const getter = createComputed(computation, options?.equal);
    if (ngDevMode) {
        getter.toString = () => `[Computed: ${getter()}]`;
        getter[SIGNAL].debugName = options?.debugName;
    }
    return getter;
}
var EffectRefImpl = class {
    [SIGNAL];
    constructor(node) {
        this[SIGNAL] = node;
    }
    destroy() {
        this[SIGNAL].destroy();
    }
};
function effect(effectFn, options) {
    ngDevMode && assertNotInReactiveContext(effect, "Call `effect` outside of a reactive context. For example, schedule the effect inside the component constructor.");
    if (ngDevMode && !options?.injector) {
        assertInInjectionContext(effect);
    }
    if (ngDevMode && options?.allowSignalWrites !== void 0) {
        console.warn(`The 'allowSignalWrites' flag is deprecated and no longer impacts effect() (writes are always allowed)`);
    }
    const injector = options?.injector ?? inject(Injector);
    let destroyRef = options?.manualCleanup !== true ? injector.get(DestroyRef) : null;
    let node;
    const viewContext = injector.get(ViewContext, null, {
        optional: true
    });
    const notifier = injector.get(ChangeDetectionScheduler);
    if (viewContext !== null) {
        node = createViewEffect(viewContext.view, notifier, effectFn);
        if (destroyRef instanceof NodeInjectorDestroyRef && destroyRef._lView === viewContext.view) {
            destroyRef = null;
        }
    }
    else {
        node = createRootEffect(effectFn, injector.get(EffectScheduler), notifier);
    }
    node.injector = injector;
    if (destroyRef !== null) {
        node.onDestroyFn = destroyRef.onDestroy(() => node.destroy());
    }
    const effectRef = new EffectRefImpl(node);
    if (ngDevMode) {
        node.debugName = options?.debugName ?? "";
        const prevInjectorProfilerContext = setInjectorProfilerContext({
            injector,
            token: null
        });
        try {
            emitEffectCreatedEvent(effectRef);
        }
        finally {
            setInjectorProfilerContext(prevInjectorProfilerContext);
        }
    }
    return effectRef;
}
var EFFECT_NODE = /* @__PURE__ */ (() => __spreadProps(__spreadValues({}, BASE_EFFECT_NODE), {
    cleanupFns: void 0,
    zone: null,
    onDestroyFn: noop,
    run() {
        if (ngDevMode && isInNotificationPhase()) {
            throw new Error(`Schedulers cannot synchronously execute watches while scheduling.`);
        }
        const prevRefreshingViews = setIsRefreshingViews(false);
        try {
            runEffect(this);
        }
        finally {
            setIsRefreshingViews(prevRefreshingViews);
        }
    },
    cleanup() {
        if (!this.cleanupFns?.length) {
            return;
        }
        const prevConsumer = setActiveConsumer(null);
        try {
            while (this.cleanupFns.length) {
                this.cleanupFns.pop()();
            }
        }
        finally {
            this.cleanupFns = [];
            setActiveConsumer(prevConsumer);
        }
    }
}))();
var ROOT_EFFECT_NODE = /* @__PURE__ */ (() => __spreadProps(__spreadValues({}, EFFECT_NODE), {
    consumerMarkedDirty() {
        this.scheduler.schedule(this);
        this.notifier.notify(12
        /* NotificationSource.RootEffect */ );
    },
    destroy() {
        consumerDestroy(this);
        this.onDestroyFn();
        this.cleanup();
        this.scheduler.remove(this);
    }
}))();
var VIEW_EFFECT_NODE = /* @__PURE__ */ (() => __spreadProps(__spreadValues({}, EFFECT_NODE), {
    consumerMarkedDirty() {
        this.view[FLAGS] |= 8192;
        markAncestorsForTraversal(this.view);
        this.notifier.notify(13
        /* NotificationSource.ViewEffect */ );
    },
    destroy() {
        consumerDestroy(this);
        this.onDestroyFn();
        this.cleanup();
        this.view[EFFECTS]?.delete(this);
    }
}))();
function createViewEffect(view, notifier, fn) {
    const node = Object.create(VIEW_EFFECT_NODE);
    node.view = view;
    node.zone = typeof Zone !== "undefined" ? Zone.current : null;
    node.notifier = notifier;
    node.fn = createEffectFn(node, fn);
    view[EFFECTS] ??= /* @__PURE__ */ new Set();
    view[EFFECTS].add(node);
    node.consumerMarkedDirty(node);
    return node;
}
function createRootEffect(fn, scheduler, notifier) {
    const node = Object.create(ROOT_EFFECT_NODE);
    node.fn = createEffectFn(node, fn);
    node.scheduler = scheduler;
    node.notifier = notifier;
    node.zone = typeof Zone !== "undefined" ? Zone.current : null;
    node.scheduler.add(node);
    node.notifier.notify(12
    /* NotificationSource.RootEffect */ );
    return node;
}
function createEffectFn(node, fn) {
    return () => {
        fn(cleanupFn => (node.cleanupFns ??= []).push(cleanupFn));
    };
}
var identityFn = v => v;
function linkedSignal(optionsOrComputation, options) {
    if (typeof optionsOrComputation === "function") {
        const getter = createLinkedSignal(optionsOrComputation, identityFn, options?.equal);
        return upgradeLinkedSignalGetter(getter, options?.debugName);
    }
    else {
        const getter = createLinkedSignal(optionsOrComputation.source, optionsOrComputation.computation, optionsOrComputation.equal);
        return upgradeLinkedSignalGetter(getter, optionsOrComputation.debugName);
    }
}
function upgradeLinkedSignalGetter(getter, debugName) {
    if (ngDevMode) {
        getter.toString = () => `[LinkedSignal: ${getter()}]`;
        getter[SIGNAL].debugName = debugName;
    }
    const node = getter[SIGNAL];
    const upgradedGetter = getter;
    upgradedGetter.set = newValue => linkedSignalSetFn(node, newValue);
    upgradedGetter.update = updateFn => linkedSignalUpdateFn(node, updateFn);
    upgradedGetter.asReadonly = signalAsReadonlyFn.bind(getter);
    return upgradedGetter;
}
var RESOURCE_VALUE_THROWS_ERRORS_DEFAULT = true;
function resource(options) {
    if (ngDevMode && !options?.injector) {
        assertInInjectionContext(resource);
    }
    const oldNameForParams = options.request;
    const params = options.params ?? oldNameForParams ?? (() => null);
    return new ResourceImpl(params, getLoader(options), options.defaultValue, options.equal ? wrapEqualityFn(options.equal) : void 0, options.injector ?? inject(Injector), RESOURCE_VALUE_THROWS_ERRORS_DEFAULT);
}
var BaseWritableResource = class {
    value;
    constructor(value) {
        this.value = value;
        this.value.set = this.set.bind(this);
        this.value.update = this.update.bind(this);
        this.value.asReadonly = signalAsReadonlyFn;
    }
    isError = computed(() => this.status() === "error");
    update(updateFn) {
        this.set(updateFn(untracked2(this.value)));
    }
    isLoading = computed(() => this.status() === "loading" || this.status() === "reloading");
    // Use a computed here to avoid triggering reactive consumers if the value changes while staying
    // either defined or undefined.
    isValueDefined = computed(() => {
        if (this.isError()) {
            return false;
        }
        return this.value() !== void 0;
    });
    hasValue() {
        return this.isValueDefined();
    }
    asReadonly() {
        return this;
    }
};
var ResourceImpl = class extends BaseWritableResource {
    loaderFn;
    equal;
    pendingTasks;
    /**
     * The current state of the resource. Status, value, and error are derived from this.
     */
    state;
    /**
     * Combines the current request with a reload counter which allows the resource to be reloaded on
     * imperative command.
     */
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = false;
    unregisterOnDestroy;
    constructor(request, loaderFn, defaultValue, equal, injector, throwErrorsFromValue = RESOURCE_VALUE_THROWS_ERRORS_DEFAULT) {
        super(
        // Feed a computed signal for the value to `BaseWritableResource`, which will upgrade it to a
        // `WritableSignal` that delegates to `ResourceImpl.set`.
        computed(() => {
            const streamValue = this.state().stream?.();
            if (!streamValue) {
                return defaultValue;
            }
            if (this.state().status === "loading" && this.error()) {
                return defaultValue;
            }
            if (!isResolved(streamValue)) {
                if (throwErrorsFromValue) {
                    throw new ResourceValueError(this.error());
                }
                else {
                    return defaultValue;
                }
            }
            return streamValue.value;
        }, {
            equal
        }));
        this.loaderFn = loaderFn;
        this.equal = equal;
        this.extRequest = linkedSignal({
            source: request,
            computation: request2 => ({
                request: request2,
                reload: 0
            })
        });
        this.state = linkedSignal({
            // Whenever the request changes,
            source: this.extRequest,
            // Compute the state of the resource given a change in status.
            computation: (extRequest, previous) => {
                const status = extRequest.request === void 0 ? "idle" : "loading";
                if (!previous) {
                    return {
                        extRequest,
                        status,
                        previousStatus: "idle",
                        stream: void 0
                    };
                }
                else {
                    return {
                        extRequest,
                        status,
                        previousStatus: projectStatusOfState(previous.value),
                        // If the request hasn't changed, keep the previous stream.
                        stream: previous.value.extRequest.request === extRequest.request ? previous.value.stream : void 0
                    };
                }
            }
        });
        this.effectRef = effect(this.loadEffect.bind(this), {
            injector,
            manualCleanup: true
        });
        this.pendingTasks = injector.get(PendingTasks);
        this.unregisterOnDestroy = injector.get(DestroyRef).onDestroy(() => this.destroy());
    }
    status = computed(() => projectStatusOfState(this.state()));
    error = computed(() => {
        const stream = this.state().stream?.();
        return stream && !isResolved(stream) ? stream.error : void 0;
    });
    /**
     * Called either directly via `WritableResource.set` or via `.value.set()`.
     */
    set(value) {
        if (this.destroyed) {
            return;
        }
        const error = untracked2(this.error);
        const state = untracked2(this.state);
        if (!error) {
            const current = untracked2(this.value);
            if (state.status === "local" && (this.equal ? this.equal(current, value) : current === value)) {
                return;
            }
        }
        this.state.set({
            extRequest: state.extRequest,
            status: "local",
            previousStatus: "local",
            stream: signal({
                value
            })
        });
        this.abortInProgressLoad();
    }
    reload() {
        const { status } = untracked2(this.state);
        if (status === "idle" || status === "loading") {
            return false;
        }
        this.extRequest.update(({ request, reload }) => ({
            request,
            reload: reload + 1
        }));
        return true;
    }
    destroy() {
        this.destroyed = true;
        this.unregisterOnDestroy();
        this.effectRef.destroy();
        this.abortInProgressLoad();
        this.state.set({
            extRequest: {
                request: void 0,
                reload: 0
            },
            status: "idle",
            previousStatus: "idle",
            stream: void 0
        });
    }
    loadEffect() {
        return __async(this, null, function* () {
            const extRequest = this.extRequest();
            const { status: currentStatus, previousStatus } = untracked2(this.state);
            if (extRequest.request === void 0) {
                return;
            }
            else if (currentStatus !== "loading") {
                return;
            }
            this.abortInProgressLoad();
            let resolvePendingTask = this.resolvePendingTask = this.pendingTasks.add();
            const { signal: abortSignal } = this.pendingController = new AbortController();
            try {
                const stream = yield untracked2(() => {
                    return this.loaderFn({
                        params: extRequest.request,
                        // TODO(alxhub): cleanup after g3 removal of `request` alias.
                        request: extRequest.request,
                        abortSignal,
                        previous: {
                            status: previousStatus
                        }
                    });
                });
                if (abortSignal.aborted || untracked2(this.extRequest) !== extRequest) {
                    return;
                }
                this.state.set({
                    extRequest,
                    status: "resolved",
                    previousStatus: "resolved",
                    stream
                });
            }
            catch (err) {
                if (abortSignal.aborted || untracked2(this.extRequest) !== extRequest) {
                    return;
                }
                this.state.set({
                    extRequest,
                    status: "resolved",
                    previousStatus: "error",
                    stream: signal({
                        error: encapsulateResourceError(err)
                    })
                });
            }
            finally {
                resolvePendingTask?.();
                resolvePendingTask = void 0;
            }
        });
    }
    abortInProgressLoad() {
        untracked2(() => this.pendingController?.abort());
        this.pendingController = void 0;
        this.resolvePendingTask?.();
        this.resolvePendingTask = void 0;
    }
};
function wrapEqualityFn(equal) {
    return (a, b) => a === void 0 || b === void 0 ? a === b : equal(a, b);
}
function getLoader(options) {
    if (isStreamingResourceOptions(options)) {
        return options.stream;
    }
    return params => __async(null, null, function* () {
        try {
            return signal({
                value: yield options.loader(params)
            });
        }
        catch (err) {
            return signal({
                error: encapsulateResourceError(err)
            });
        }
    });
}
function isStreamingResourceOptions(options) {
    return !!options.stream;
}
function projectStatusOfState(state) {
    switch (state.status) {
        case "loading":
            return state.extRequest.reload === 0 ? "loading" : "reloading";
        case "resolved":
            return isResolved(state.stream()) ? "resolved" : "error";
        default:
            return state.status;
    }
}
function isResolved(state) {
    return state.error === void 0;
}
function encapsulateResourceError(error) {
    if (error instanceof Error) {
        return error;
    }
    return new ResourceWrappedError(error);
}
var ResourceValueError = class extends Error {
    constructor(error) {
        super(ngDevMode ? `Resource is currently in an error state (see Error.cause for details): ${error.message}` : error.message, {
            cause: error
        });
    }
};
var ResourceWrappedError = class extends Error {
    constructor(error) {
        super(ngDevMode ? `Resource returned an error that's not an Error instance: ${String(error)}. Check this error's .cause for the actual error.` : String(error), {
            cause: error
        });
    }
};
export { Version, VERSION, XSS_SECURITY_URL, RuntimeError, formatRuntimeError, _global, initNgDevMode, getClosureSafeProperty, fillProperties, stringify, concatStringsWithSpace, truncateMiddle, forwardRef, resolveForwardRef, isForwardRef, assertNumber, assertNumberInRange, assertString, assertFunction, assertEqual, assertNotEqual, assertSame, assertNotSame, assertLessThan, assertGreaterThan, assertGreaterThanOrEqual, assertNotDefined, assertDefined, throwError, assertDomNode, assertElement, assertIndexInRange, assertOneOf, assertNotReactive, ɵɵdefineInjectable, ɵɵdefineInjector, getInjectableDef, isInjectable, getInjectorDef, NG_PROV_DEF, NG_INJ_DEF, InjectionToken, setInjectorProfilerContext, setInjectorProfiler, emitProviderConfiguredEvent, emitInjectorToCreateInstanceEvent, emitInstanceCreatedByInjectorEvent, emitInjectEvent, emitEffectCreatedEvent, runInInjectorProfilerContext, isEnvironmentProviders, NG_COMP_DEF, NG_DIR_DEF, NG_PIPE_DEF, NG_MOD_DEF, NG_FACTORY_DEF, NG_ELEMENT_ID, renderStringify, stringifyForError, cyclicDependencyError, cyclicDependencyErrorWithDetails, throwProviderNotFoundError, setInjectImplementation, injectRootLimpMode, assertInjectImplementationNotEqual, ɵɵinject, ɵɵinvalidFactoryDep, inject, convertToBitFlags, attachInjectFlag, getFactoryDef, arrayEquals, flatten, deepForEach, addToArray, removeFromArray, newArray, arraySplice, arrayInsert2, keyValueArraySet, keyValueArrayGet, keyValueArrayIndexOf, EMPTY_OBJ, EMPTY_ARRAY, ENVIRONMENT_INITIALIZER, INJECTOR$1, INJECTOR_DEF_TYPES, NullInjector, getNgModuleDef, getNgModuleDefOrThrow, getComponentDef, getDirectiveDefOrThrow, getDirectiveDef, getPipeDef, isStandalone, makeEnvironmentProviders, provideEnvironmentInitializer, importProvidersFrom, internalImportProvidersFrom, walkProviderTree, isTypeProvider, isClassProvider, INJECTOR_SCOPE, getNullInjector, EnvironmentInjector, R3Injector, providerToFactory, runInInjectionContext, isInInjectionContext, assertInInjectionContext, HOST, TVIEW, FLAGS, PARENT, NEXT, T_HOST, HYDRATION, CLEANUP, CONTEXT, INJECTOR, ENVIRONMENT, RENDERER, CHILD_HEAD, CHILD_TAIL, DECLARATION_VIEW, DECLARATION_COMPONENT_VIEW, DECLARATION_LCONTAINER, PREORDER_HOOK_FLAGS, QUERIES, ID, EMBEDDED_VIEW_INJECTOR, ON_DESTROY_HOOKS, EFFECTS_TO_SCHEDULE, EFFECTS, REACTIVE_TEMPLATE_CONSUMER, AFTER_RENDER_SEQUENCES_TO_ADD, ANIMATIONS, HEADER_OFFSET, DEHYDRATED_VIEWS, NATIVE, VIEW_REFS, MOVED_VIEWS, CONTAINER_HEADER_OFFSET, isLView, isLContainer, isContentQueryHost, isComponentHost, isDirectiveHost, isComponentDef, isRootView, isProjectionTNode, hasI18n, isDestroyed, assertTNodeForLView, assertTNodeCreationIndex, assertTNodeForTView, assertTNode, assertTIcu, assertComponentType, assertNgModuleType, assertHasParent, assertLContainer, assertLView, assertFirstCreatePass, assertFirstUpdatePass, assertDirectiveDef, assertIndexInDeclRange, assertIndexInExpandoRange, assertProjectionSlots, assertParentView, assertNodeInjector, SVG_NAMESPACE, MATH_ML_NAMESPACE, unwrapRNode, unwrapLView, getNativeByIndex, getNativeByTNode, getNativeByTNodeOrNull, getTNode, load, store, getComponentLViewByIndex, isCreationMode, viewAttachedToChangeDetector, viewAttachedToContainer, getConstant, resetPreOrderHookFlags, markViewForRefresh, walkUpViews, requiresRefreshOrTraversal, updateAncestorTraversalFlagsOnAttach, markAncestorsForTraversal, storeLViewOnDestroy, removeLViewOnDestroy, getLViewParent, getOrCreateLViewCleanup, getOrCreateTViewCleanup, storeCleanupWithContext, CheckNoChangesMode, getElementDepthCount, increaseElementDepthCount, decreaseElementDepthCount, getBindingsEnabled, isInSkipHydrationBlock, isSkipHydrationRootTNode, ɵɵenableBindings, enterSkipHydrationBlock, ɵɵdisableBindings, leaveSkipHydrationBlock, getLView, getTView, ɵɵrestoreView, ɵɵresetView, getCurrentTNode, getCurrentTNodePlaceholderOk, getCurrentParentTNode, setCurrentTNode, isCurrentTNodeParent, setCurrentTNodeAsNotParent, getContextLView, isInCheckNoChangesMode, isExhaustiveCheckNoChanges, setIsInCheckNoChangesMode, isRefreshingViews, setIsRefreshingViews, getBindingRoot, getBindingIndex, setBindingIndex, nextBindingIndex, incrementBindingIndex, isInI18nBlock, setInI18nBlock, setBindingRootForHostBindings, getCurrentDirectiveIndex, setCurrentDirectiveIndex, getCurrentDirectiveDef, getCurrentQueryIndex, setCurrentQueryIndex, enterDI, enterView, leaveDI, leaveView, nextContextImpl, getSelectedIndex, setSelectedIndex, getSelectedTNode, ɵɵnamespaceSVG, ɵɵnamespaceMathML, ɵɵnamespaceHTML, getNamespace, wasLastNodeCreated, lastNodeWasCreated, createInjector, createInjectorWithoutInjectorInstances, Injector, DOCUMENT, DestroyRef, SCHEDULE_IN_ROOT_ZONE_DEFAULT, PendingTasksInternal, EventEmitter, scheduleCallbackWithRafRace, scheduleCallbackWithMicrotask, angularZoneInstanceIdProperty, NgZone, NoopNgZone, ErrorHandler, INTERNAL_APPLICATION_ERROR_HANDLER, errorHandlerEnvironmentInitializer, provideBrowserGlobalErrorListeners, isSignal, ɵunwrapWritableSignal, signal, signalAsReadonlyFn, isWritableSignal, ChangeDetectionScheduler, ZONELESS_ENABLED, PROVIDED_ZONELESS, SCHEDULE_IN_ROOT_ZONE, assertNotInReactiveContext, ViewContext, PendingTasks, EffectScheduler, OutputEmitterRef, getOutputDestroyRef, untracked2 as untracked, computed, effect, linkedSignal, resource, ResourceImpl, encapsulateResourceError };
/*! Bundled license information:

@angular/core/fesm2022/root_effect_scheduler.mjs:
@angular/core/fesm2022/resource.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
