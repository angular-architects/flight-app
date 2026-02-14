var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = msg => {
    throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
    for (var prop in b ||= {})
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __require = /* @__PURE__ */ (x => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function (x) {
    if (typeof require !== "undefined")
        return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
});
var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
        if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
            target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(source)) {
            if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
                target[prop] = source[prop];
        }
    return target;
};
var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
        exports: {}
    }).exports, mod), mod.exports;
};
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, {
            get: all[name],
            enumerable: true
        });
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
    }
    return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
    value: true
}), mod);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateWrapper = (obj, member, setter, getter) => ({
    set _(value) {
        __privateSet(obj, member, value, setter);
    },
    get _() {
        return __privateGet(obj, member, getter);
    }
});
var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
        var fulfilled = value => {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var rejected = value => {
            try {
                step(generator.throw(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
export { __spreadValues, __spreadProps, __require, __objRest, __esm, __commonJS, __export, __toCommonJS, __privateGet, __privateAdd, __privateSet, __privateWrapper, __async };
