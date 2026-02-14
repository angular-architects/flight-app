import { ArgumentOutOfRangeError, AsyncAction, AsyncScheduler, AsyncSubject, BehaviorSubject, ConnectableObservable, EMPTY, EmptyError, NotFoundError, Notification, NotificationKind, ObjectUnsubscribedError, Observable, ReplaySubject, SafeSubscriber, Scheduler, SequenceError, Subject, Subscriber, Subscription, TimeoutError, UnsubscriptionError, argsArgArrayOrObject, async, asyncScheduler, audit, auditTime, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, combineAll, combineLatest, combineLatestAll, combineLatestWith, concat, concatAll, concatMap, concatMapTo, concatWith, config, connect, count, createObject, createOperatorSubscriber, debounce, debounceTime, defaultIfEmpty, delay, delayWhen, dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, empty, endWith, every, exhaust, exhaustAll, exhaustMap, expand, filter, finalize, find, findIndex, first, flatMap, from, groupBy, identity, ignoreElements, innerFrom, interval, isArrayLike, isEmpty, isFunction, isScheduler, last, map, mapOneOrManyArgs, mapTo, materialize, max, mergeAll, mergeMap, mergeMapTo, mergeScan, mergeWith, min, multicast, noop, not, observable, observeOn, of, onErrorResumeNext, onErrorResumeNextWith, pairwise, pipe, pluck, popNumber, popResultSelector, popScheduler, publish, publishBehavior, publishLast, publishReplay, race, raceWith, reduce, refCount, repeat, repeatWhen, retry, retryWhen, sample, sampleTime, scan, scheduleIterable, scheduled, sequenceEqual, share, shareReplay, single, skip, skipLast, skipUntil, skipWhile, startWith, subscribeOn, switchAll, switchMap, switchMapTo, switchScan, take, takeLast, takeUntil, takeWhile, tap, throttle, throttleTime, throwError, throwIfEmpty, timeInterval, timeout, timeoutWith, timer, timestamp, toArray, window, windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zip, zipAll, zipWith } from "@nf-internal/chunk-DJBSUWM5";
import "@nf-internal/chunk-54JPAORE";
// node_modules/rxjs/dist/esm5/internal/scheduler/performanceTimestampProvider.js
var performanceTimestampProvider = {
    now: function () {
        return (performanceTimestampProvider.delegate || performance).now();
    },
    delegate: void 0
};
// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js
import { __read, __spreadArray } from "tslib";
var animationFrameProvider = {
    schedule: function (callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = animationFrameProvider.delegate;
        if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function (timestamp2) {
            cancel = void 0;
            callback(timestamp2);
        });
        return new Subscription(function () {
            return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
        });
    },
    requestAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    cancelAnimationFrame: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    delegate: void 0
};
// node_modules/rxjs/dist/esm5/internal/observable/dom/animationFrames.js
function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
function animationFramesFactory(timestampProvider) {
    return new Observable(function (subscriber) {
        var provider = timestampProvider || performanceTimestampProvider;
        var start = provider.now();
        var id = 0;
        var run = function () {
            if (!subscriber.closed) {
                id = animationFrameProvider.requestAnimationFrame(function (timestamp2) {
                    id = 0;
                    var now = provider.now();
                    subscriber.next({
                        timestamp: timestampProvider ? now : timestamp2,
                        elapsed: now - start
                    });
                    run();
                });
            }
        };
        run();
        return function () {
            if (id) {
                animationFrameProvider.cancelAnimationFrame(id);
            }
        };
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
// node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js
import { __extends } from "tslib";
// node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js
import { __read as __read2, __spreadArray as __spreadArray2 } from "tslib";
// node_modules/rxjs/dist/esm5/internal/util/Immediate.js
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
            resolved = Promise.resolve();
        }
        resolved.then(function () {
            return findAndClearHandle(handle) && cb();
        });
        return handle;
    },
    clearImmediate: function (handle) {
        findAndClearHandle(handle);
    }
};
// node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js
var setImmediate = Immediate.setImmediate;
var clearImmediate = Immediate.clearImmediate;
var immediateProvider = {
    setImmediate: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray2([], __read2(args)));
    },
    clearImmediate: function (handle) {
        var delegate = immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: void 0
};
// node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js
var AsapAction = function (_super) {
    __extends(AsapAction2, _super);
    function AsapAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction2.prototype.requestAsyncId = function (scheduler, id, delay2) {
        if (delay2 === void 0) {
            delay2 = 0;
        }
        if (delay2 !== null && delay2 > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
    };
    AsapAction2.prototype.recycleAsyncId = function (scheduler, id, delay2) {
        var _a;
        if (delay2 === void 0) {
            delay2 = 0;
        }
        if (delay2 != null ? delay2 > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            immediateProvider.clearImmediate(id);
            if (scheduler._scheduled === id) {
                scheduler._scheduled = void 0;
            }
        }
        return void 0;
    };
    return AsapAction2;
}(AsyncAction);
// node_modules/rxjs/dist/esm5/internal/scheduler/AsapScheduler.js
import { __extends as __extends2 } from "tslib";
var AsapScheduler = function (_super) {
    __extends2(AsapScheduler2, _super);
    function AsapScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler2.prototype.flush = function (action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = void 0;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler2;
}(AsyncScheduler);
// node_modules/rxjs/dist/esm5/internal/scheduler/asap.js
var asapScheduler = new AsapScheduler(AsapAction);
var asap = asapScheduler;
// node_modules/rxjs/dist/esm5/internal/scheduler/QueueAction.js
import { __extends as __extends3 } from "tslib";
var QueueAction = function (_super) {
    __extends3(QueueAction2, _super);
    function QueueAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction2.prototype.schedule = function (state, delay2) {
        if (delay2 === void 0) {
            delay2 = 0;
        }
        if (delay2 > 0) {
            return _super.prototype.schedule.call(this, state, delay2);
        }
        this.delay = delay2;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction2.prototype.execute = function (state, delay2) {
        return delay2 > 0 || this.closed ? _super.prototype.execute.call(this, state, delay2) : this._execute(state, delay2);
    };
    QueueAction2.prototype.requestAsyncId = function (scheduler, id, delay2) {
        if (delay2 === void 0) {
            delay2 = 0;
        }
        if (delay2 != null && delay2 > 0 || delay2 == null && this.delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
        }
        scheduler.flush(this);
        return 0;
    };
    return QueueAction2;
}(AsyncAction);
// node_modules/rxjs/dist/esm5/internal/scheduler/QueueScheduler.js
import { __extends as __extends4 } from "tslib";
var QueueScheduler = function (_super) {
    __extends4(QueueScheduler2, _super);
    function QueueScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler2;
}(AsyncScheduler);
// node_modules/rxjs/dist/esm5/internal/scheduler/queue.js
var queueScheduler = new QueueScheduler(QueueAction);
var queue = queueScheduler;
// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js
import { __extends as __extends5 } from "tslib";
var AnimationFrameAction = function (_super) {
    __extends5(AnimationFrameAction2, _super);
    function AnimationFrameAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction2.prototype.requestAsyncId = function (scheduler, id, delay2) {
        if (delay2 === void 0) {
            delay2 = 0;
        }
        if (delay2 !== null && delay2 > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay2);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(function () {
            return scheduler.flush(void 0);
        }));
    };
    AnimationFrameAction2.prototype.recycleAsyncId = function (scheduler, id, delay2) {
        var _a;
        if (delay2 === void 0) {
            delay2 = 0;
        }
        if (delay2 != null ? delay2 > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay2);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = void 0;
        }
        return void 0;
    };
    return AnimationFrameAction2;
}(AsyncAction);
// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameScheduler.js
import { __extends as __extends6 } from "tslib";
var AnimationFrameScheduler = function (_super) {
    __extends6(AnimationFrameScheduler2, _super);
    function AnimationFrameScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler2.prototype.flush = function (action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = void 0;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
            while ((action = actions[0]) && action.id === flushId && actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler2;
}(AsyncScheduler);
// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js
var animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);
var animationFrame = animationFrameScheduler;
// node_modules/rxjs/dist/esm5/internal/scheduler/VirtualTimeScheduler.js
import { __extends as __extends7 } from "tslib";
var VirtualTimeScheduler = function (_super) {
    __extends7(VirtualTimeScheduler2, _super);
    function VirtualTimeScheduler2(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) {
            schedulerActionCtor = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Infinity;
        }
        var _this = _super.call(this, schedulerActionCtor, function () {
            return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler2.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler2.frameTimeFactor = 10;
    return VirtualTimeScheduler2;
}(AsyncScheduler);
var VirtualAction = function (_super) {
    __extends7(VirtualAction2, _super);
    function VirtualAction2(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction2.prototype.schedule = function (state, delay2) {
        if (delay2 === void 0) {
            delay2 = 0;
        }
        if (Number.isFinite(delay2)) {
            if (!this.id) {
                return _super.prototype.schedule.call(this, state, delay2);
            }
            this.active = false;
            var action = new VirtualAction2(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay2);
        }
        else {
            return Subscription.EMPTY;
        }
    };
    VirtualAction2.prototype.requestAsyncId = function (scheduler, id, delay2) {
        if (delay2 === void 0) {
            delay2 = 0;
        }
        this.delay = scheduler.frame + delay2;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction2.sortActions);
        return 1;
    };
    VirtualAction2.prototype.recycleAsyncId = function (scheduler, id, delay2) {
        if (delay2 === void 0) {
            delay2 = 0;
        }
        return void 0;
    };
    VirtualAction2.prototype._execute = function (state, delay2) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay2);
        }
    };
    VirtualAction2.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction2;
}(AsyncAction);
// node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function isObservable(obj) {
    return !!obj && (obj instanceof Observable || isFunction(obj.lift) && isFunction(obj.subscribe));
}
// node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
function lastValueFrom(source, config2) {
    var hasConfig = typeof config2 === "object";
    return new Promise(function (resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
            next: function (value) {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: function () {
                if (_hasValue) {
                    resolve(_value);
                }
                else if (hasConfig) {
                    resolve(config2.defaultValue);
                }
                else {
                    reject(new EmptyError());
                }
            }
        });
    });
}
// node_modules/rxjs/dist/esm5/internal/firstValueFrom.js
function firstValueFrom(source, config2) {
    var hasConfig = typeof config2 === "object";
    return new Promise(function (resolve, reject) {
        var subscriber = new SafeSubscriber({
            next: function (value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function () {
                if (hasConfig) {
                    resolve(config2.defaultValue);
                }
                else {
                    reject(new EmptyError());
                }
            }
        });
        source.subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm5/internal/observable/bindCallbackInternals.js
import { __read as __read3, __spreadArray as __spreadArray3 } from "tslib";
function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs(resultSelector));
            };
        }
    }
    if (scheduler) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn(scheduler), observeOn(scheduler));
        };
    }
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var subject = new AsyncSubject();
        var uninitialized = true;
        return new Observable(function (subscriber) {
            var subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                var isAsync_1 = false;
                var isComplete_1 = false;
                callbackFunc.apply(_this, __spreadArray3(__spreadArray3([], __read3(args)), [function () {
                        var results = [];
                        for (var _i2 = 0; _i2 < arguments.length; _i2++) {
                            results[_i2] = arguments[_i2];
                        }
                        if (isNodeStyle) {
                            var err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete_1 = true;
                        if (isAsync_1) {
                            subject.complete();
                        }
                    }]));
                if (isComplete_1) {
                    subject.complete();
                }
                isAsync_1 = true;
            }
            return subs;
        });
    };
}
// node_modules/rxjs/dist/esm5/internal/observable/bindCallback.js
function bindCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
}
// node_modules/rxjs/dist/esm5/internal/observable/bindNodeCallback.js
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
}
// node_modules/rxjs/dist/esm5/internal/observable/defer.js
function defer(observableFactory) {
    return new Observable(function (subscriber) {
        innerFrom(observableFactory()).subscribe(subscriber);
    });
}
// node_modules/rxjs/dist/esm5/internal/observable/connectable.js
var DEFAULT_CONFIG = {
    connector: function () {
        return new Subject();
    },
    resetOnDisconnect: true
};
function connectable(source, config2) {
    if (config2 === void 0) {
        config2 = DEFAULT_CONFIG;
    }
    var connection = null;
    var connector = config2.connector, _a = config2.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
    var subject = connector();
    var result = new Observable(function (subscriber) {
        return subject.subscribe(subscriber);
    });
    result.connect = function () {
        if (!connection || connection.closed) {
            connection = defer(function () {
                return source;
            }).subscribe(subject);
            if (resetOnDisconnect) {
                connection.add(function () {
                    return subject = connector();
                });
            }
        }
        return connection;
    };
    return result;
}
// node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js
function forkJoin() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resultSelector = popResultSelector(args);
    var _a = argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
    var result = new Observable(function (subscriber) {
        var length = sources.length;
        if (!length) {
            subscriber.complete();
            return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function (sourceIndex2) {
            var hasValue = false;
            innerFrom(sources[sourceIndex2]).subscribe(createOperatorSubscriber(subscriber, function (value) {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex2] = value;
            }, function () {
                return remainingCompletions--;
            }, void 0, function () {
                if (!remainingCompletions || !hasValue) {
                    if (!remainingEmissions) {
                        subscriber.next(keys ? createObject(keys, values) : values);
                    }
                    subscriber.complete();
                }
            }));
        };
        for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
            _loop_1(sourceIndex);
        }
    });
    return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}
// node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
import { __read as __read4 } from "tslib";
var nodeEventEmitterMethods = ["addListener", "removeListener"];
var eventTargetMethods = ["addEventListener", "removeEventListener"];
var jqueryMethods = ["on", "off"];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
        resultSelector = options;
        options = void 0;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
    }
    var _a = __read4(isEventTarget(target) ? eventTargetMethods.map(function (methodName) {
        return function (handler) {
            return target[methodName](eventName, handler, options);
        };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike(target)) {
            return mergeMap(function (subTarget) {
                return fromEvent(subTarget, eventName, options);
            })(innerFrom(target));
        }
    }
    if (!add) {
        throw new TypeError("Invalid event target");
    }
    return new Observable(function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () {
            return remove(handler);
        };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) {
        return function (handler) {
            return target[methodName](eventName, handler);
        };
    };
}
function isNodeStyleEventEmitter(target) {
    return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
// node_modules/rxjs/dist/esm5/internal/observable/fromEventPattern.js
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs(resultSelector));
    }
    return new Observable(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return isFunction(removeHandler) ? function () {
            return removeHandler(handler, retValue);
        } : void 0;
    });
}
// node_modules/rxjs/dist/esm5/internal/observable/generate.js
import { __generator } from "tslib";
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    var _a, _b;
    var resultSelector;
    var initialState;
    if (arguments.length === 1) {
        _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity : _b, scheduler = _a.scheduler;
    }
    else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler(resultSelectorOrScheduler)) {
            resultSelector = identity;
            scheduler = resultSelectorOrScheduler;
        }
        else {
            resultSelector = resultSelectorOrScheduler;
        }
    }
    function gen() {
        var state;
        return __generator(this, function (_a2) {
            switch (_a2.label) {
                case 0:
                    state = initialState;
                    _a2.label = 1;
                case 1:
                    if (!(!condition || condition(state)))
                        return [3, 4];
                    return [4, resultSelector(state)];
                case 2:
                    _a2.sent();
                    _a2.label = 3;
                case 3:
                    state = iterate(state);
                    return [3, 1];
                case 4:
                    return [2];
            }
        });
    }
    return defer(scheduler ? function () {
        return scheduleIterable(gen(), scheduler);
    } : gen);
}
// node_modules/rxjs/dist/esm5/internal/observable/iif.js
function iif(condition, trueResult, falseResult) {
    return defer(function () {
        return condition() ? trueResult : falseResult;
    });
}
// node_modules/rxjs/dist/esm5/internal/observable/merge.js
function merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    var concurrent = popNumber(args, Infinity);
    var sources = args;
    return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}
// node_modules/rxjs/dist/esm5/internal/observable/never.js
var NEVER = new Observable(noop);
function never() {
    return NEVER;
}
// node_modules/rxjs/dist/esm5/internal/observable/pairs.js
function pairs(obj, scheduler) {
    return from(Object.entries(obj), scheduler);
}
// node_modules/rxjs/dist/esm5/internal/observable/partition.js
function partition(source, predicate, thisArg) {
    return [filter(predicate, thisArg)(innerFrom(source)), filter(not(predicate, thisArg))(innerFrom(source))];
}
// node_modules/rxjs/dist/esm5/internal/observable/range.js
function range(start, count2, scheduler) {
    if (count2 == null) {
        count2 = start;
        start = 0;
    }
    if (count2 <= 0) {
        return EMPTY;
    }
    var end = count2 + start;
    return new Observable(scheduler ? function (subscriber) {
        var n = start;
        return scheduler.schedule(function () {
            if (n < end) {
                subscriber.next(n++);
                this.schedule();
            }
            else {
                subscriber.complete();
            }
        });
    } : function (subscriber) {
        var n = start;
        while (n < end && !subscriber.closed) {
            subscriber.next(n++);
        }
        subscriber.complete();
    });
}
// node_modules/rxjs/dist/esm5/internal/observable/using.js
function using(resourceFactory, observableFactory) {
    return new Observable(function (subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? innerFrom(result) : EMPTY;
        source.subscribe(subscriber);
        return function () {
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
export { ArgumentOutOfRangeError, AsyncSubject, BehaviorSubject, ConnectableObservable, EMPTY, EmptyError, NEVER, NotFoundError, Notification, NotificationKind, ObjectUnsubscribedError, Observable, ReplaySubject, Scheduler, SequenceError, Subject, Subscriber, Subscription, TimeoutError, UnsubscriptionError, VirtualAction, VirtualTimeScheduler, animationFrame, animationFrameScheduler, animationFrames, asap, asapScheduler, async, asyncScheduler, audit, auditTime, bindCallback, bindNodeCallback, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, combineAll, combineLatest, combineLatestAll, combineLatestWith, concat, concatAll, concatMap, concatMapTo, concatWith, config, connect, connectable, count, debounce, debounceTime, defaultIfEmpty, defer, delay, delayWhen, dematerialize, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, empty, endWith, every, exhaust, exhaustAll, exhaustMap, expand, filter, finalize, find, findIndex, first, firstValueFrom, flatMap, forkJoin, from, fromEvent, fromEventPattern, generate, groupBy, identity, ignoreElements, iif, interval, isEmpty, isObservable, last, lastValueFrom, map, mapTo, materialize, max, merge, mergeAll, mergeMap, mergeMapTo, mergeScan, mergeWith, min, multicast, never, noop, observable, observeOn, of, onErrorResumeNext, onErrorResumeNextWith, pairs, pairwise, partition, pipe, pluck, publish, publishBehavior, publishLast, publishReplay, queue, queueScheduler, race, raceWith, range, reduce, refCount, repeat, repeatWhen, retry, retryWhen, sample, sampleTime, scan, scheduled, sequenceEqual, share, shareReplay, single, skip, skipLast, skipUntil, skipWhile, startWith, subscribeOn, switchAll, switchMap, switchMapTo, switchScan, take, takeLast, takeUntil, takeWhile, tap, throttle, throttleTime, throwError, throwIfEmpty, timeInterval, timeout, timeoutWith, timer, timestamp, toArray, using, window, windowCount, windowTime, windowToggle, windowWhen, withLatestFrom, zip, zipAll, zipWith };
