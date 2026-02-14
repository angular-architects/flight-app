import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/core/fesm2022/signal.mjs
function defaultEquals(a, b) {
    return Object.is(a, b);
}
var activeConsumer = null;
var inNotificationPhase = false;
var epoch = 1;
var postProducerCreatedFn = null;
var SIGNAL = /* @__PURE__ */ Symbol("SIGNAL");
function setActiveConsumer(consumer) {
    const prev = activeConsumer;
    activeConsumer = consumer;
    return prev;
}
function getActiveConsumer() {
    return activeConsumer;
}
function isInNotificationPhase() {
    return inNotificationPhase;
}
function isReactive(value) {
    return value[SIGNAL] !== void 0;
}
var REACTIVE_NODE = {
    version: 0,
    lastCleanEpoch: 0,
    dirty: false,
    producers: void 0,
    producersTail: void 0,
    consumers: void 0,
    consumersTail: void 0,
    recomputing: false,
    consumerAllowSignalWrites: false,
    consumerIsAlwaysLive: false,
    kind: "unknown",
    producerMustRecompute: () => false,
    producerRecomputeValue: () => { },
    consumerMarkedDirty: () => { },
    consumerOnSignalRead: () => { }
};
function producerAccessed(node) {
    if (inNotificationPhase) {
        throw new Error(typeof ngDevMode !== "undefined" && ngDevMode ? `Assertion error: signal read during notification phase` : "");
    }
    if (activeConsumer === null) {
        return;
    }
    activeConsumer.consumerOnSignalRead(node);
    const prevProducerLink = activeConsumer.producersTail;
    if (prevProducerLink !== void 0 && prevProducerLink.producer === node) {
        return;
    }
    let nextProducerLink = void 0;
    const isRecomputing = activeConsumer.recomputing;
    if (isRecomputing) {
        nextProducerLink = prevProducerLink !== void 0 ? prevProducerLink.nextProducer : activeConsumer.producers;
        if (nextProducerLink !== void 0 && nextProducerLink.producer === node) {
            activeConsumer.producersTail = nextProducerLink;
            nextProducerLink.lastReadVersion = node.version;
            return;
        }
    }
    const prevConsumerLink = node.consumersTail;
    if (prevConsumerLink !== void 0 && prevConsumerLink.consumer === activeConsumer && (
    // However, we have to make sure that the link we've discovered isn't from a node that is incrementally rebuilding its producer list
    !isRecomputing || isValidLink(prevConsumerLink, activeConsumer))) {
        return;
    }
    const isLive = consumerIsLive(activeConsumer);
    const newLink = {
        producer: node,
        consumer: activeConsumer,
        // instead of eagerly destroying the previous link, we delay until we've finished recomputing
        // the producers list, so that we can destroy all of the old links at once.
        nextProducer: nextProducerLink,
        prevConsumer: prevConsumerLink,
        lastReadVersion: node.version,
        nextConsumer: void 0
    };
    activeConsumer.producersTail = newLink;
    if (prevProducerLink !== void 0) {
        prevProducerLink.nextProducer = newLink;
    }
    else {
        activeConsumer.producers = newLink;
    }
    if (isLive) {
        producerAddLiveConsumer(node, newLink);
    }
}
function producerIncrementEpoch() {
    epoch++;
}
function producerUpdateValueVersion(node) {
    if (consumerIsLive(node) && !node.dirty) {
        return;
    }
    if (!node.dirty && node.lastCleanEpoch === epoch) {
        return;
    }
    if (!node.producerMustRecompute(node) && !consumerPollProducersForChange(node)) {
        producerMarkClean(node);
        return;
    }
    node.producerRecomputeValue(node);
    producerMarkClean(node);
}
function producerNotifyConsumers(node) {
    if (node.consumers === void 0) {
        return;
    }
    const prev = inNotificationPhase;
    inNotificationPhase = true;
    try {
        for (let link = node.consumers; link !== void 0; link = link.nextConsumer) {
            const consumer = link.consumer;
            if (!consumer.dirty) {
                consumerMarkDirty(consumer);
            }
        }
    }
    finally {
        inNotificationPhase = prev;
    }
}
function producerUpdatesAllowed() {
    return activeConsumer?.consumerAllowSignalWrites !== false;
}
function consumerMarkDirty(node) {
    node.dirty = true;
    producerNotifyConsumers(node);
    node.consumerMarkedDirty?.(node);
}
function producerMarkClean(node) {
    node.dirty = false;
    node.lastCleanEpoch = epoch;
}
function consumerBeforeComputation(node) {
    if (node)
        resetConsumerBeforeComputation(node);
    return setActiveConsumer(node);
}
function resetConsumerBeforeComputation(node) {
    node.producersTail = void 0;
    node.recomputing = true;
}
function consumerAfterComputation(node, prevConsumer) {
    setActiveConsumer(prevConsumer);
    if (node)
        finalizeConsumerAfterComputation(node);
}
function finalizeConsumerAfterComputation(node) {
    node.recomputing = false;
    const producersTail = node.producersTail;
    let toRemove = producersTail !== void 0 ? producersTail.nextProducer : node.producers;
    if (toRemove !== void 0) {
        if (consumerIsLive(node)) {
            do {
                toRemove = producerRemoveLiveConsumerLink(toRemove);
            } while (toRemove !== void 0);
        }
        if (producersTail !== void 0) {
            producersTail.nextProducer = void 0;
        }
        else {
            node.producers = void 0;
        }
    }
}
function consumerPollProducersForChange(node) {
    for (let link = node.producers; link !== void 0; link = link.nextProducer) {
        const producer = link.producer;
        const seenVersion = link.lastReadVersion;
        if (seenVersion !== producer.version) {
            return true;
        }
        producerUpdateValueVersion(producer);
        if (seenVersion !== producer.version) {
            return true;
        }
    }
    return false;
}
function consumerDestroy(node) {
    if (consumerIsLive(node)) {
        let link = node.producers;
        while (link !== void 0) {
            link = producerRemoveLiveConsumerLink(link);
        }
    }
    node.producers = void 0;
    node.producersTail = void 0;
    node.consumers = void 0;
    node.consumersTail = void 0;
}
function producerAddLiveConsumer(node, link) {
    const consumersTail = node.consumersTail;
    const wasLive = consumerIsLive(node);
    if (consumersTail !== void 0) {
        link.nextConsumer = consumersTail.nextConsumer;
        consumersTail.nextConsumer = link;
    }
    else {
        link.nextConsumer = void 0;
        node.consumers = link;
    }
    link.prevConsumer = consumersTail;
    node.consumersTail = link;
    if (!wasLive) {
        for (let link2 = node.producers; link2 !== void 0; link2 = link2.nextProducer) {
            producerAddLiveConsumer(link2.producer, link2);
        }
    }
}
function producerRemoveLiveConsumerLink(link) {
    const producer = link.producer;
    const nextProducer = link.nextProducer;
    const nextConsumer = link.nextConsumer;
    const prevConsumer = link.prevConsumer;
    link.nextConsumer = void 0;
    link.prevConsumer = void 0;
    if (nextConsumer !== void 0) {
        nextConsumer.prevConsumer = prevConsumer;
    }
    else {
        producer.consumersTail = prevConsumer;
    }
    if (prevConsumer !== void 0) {
        prevConsumer.nextConsumer = nextConsumer;
    }
    else {
        producer.consumers = nextConsumer;
        if (!consumerIsLive(producer)) {
            let producerLink = producer.producers;
            while (producerLink !== void 0) {
                producerLink = producerRemoveLiveConsumerLink(producerLink);
            }
        }
    }
    return nextProducer;
}
function consumerIsLive(node) {
    return node.consumerIsAlwaysLive || node.consumers !== void 0;
}
function runPostProducerCreatedFn(node) {
    postProducerCreatedFn?.(node);
}
function setPostProducerCreatedFn(fn) {
    const prev = postProducerCreatedFn;
    postProducerCreatedFn = fn;
    return prev;
}
function isValidLink(checkLink, consumer) {
    const producersTail = consumer.producersTail;
    if (producersTail !== void 0) {
        let link = consumer.producers;
        do {
            if (link === checkLink) {
                return true;
            }
            if (link === producersTail) {
                break;
            }
            link = link.nextProducer;
        } while (link !== void 0);
    }
    return false;
}
function createComputed(computation, equal) {
    const node = Object.create(COMPUTED_NODE);
    node.computation = computation;
    if (equal !== void 0) {
        node.equal = equal;
    }
    const computed = () => {
        producerUpdateValueVersion(node);
        producerAccessed(node);
        if (node.value === ERRORED) {
            throw node.error;
        }
        return node.value;
    };
    computed[SIGNAL] = node;
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
        const debugName = node.debugName ? " (" + node.debugName + ")" : "";
        computed.toString = () => `[Computed${debugName}: ${node.value}]`;
    }
    runPostProducerCreatedFn(node);
    return computed;
}
var UNSET = /* @__PURE__ */ Symbol("UNSET");
var COMPUTING = /* @__PURE__ */ Symbol("COMPUTING");
var ERRORED = /* @__PURE__ */ Symbol("ERRORED");
var COMPUTED_NODE = /* @__PURE__ */ (() => {
    return __spreadProps(__spreadValues({}, REACTIVE_NODE), {
        value: UNSET,
        dirty: true,
        error: null,
        equal: defaultEquals,
        kind: "computed",
        producerMustRecompute(node) {
            return node.value === UNSET || node.value === COMPUTING;
        },
        producerRecomputeValue(node) {
            if (node.value === COMPUTING) {
                throw new Error(typeof ngDevMode !== "undefined" && ngDevMode ? "Detected cycle in computations." : "");
            }
            const oldValue = node.value;
            node.value = COMPUTING;
            const prevConsumer = consumerBeforeComputation(node);
            let newValue;
            let wasEqual = false;
            try {
                newValue = node.computation();
                setActiveConsumer(null);
                wasEqual = oldValue !== UNSET && oldValue !== ERRORED && newValue !== ERRORED && node.equal(oldValue, newValue);
            }
            catch (err) {
                newValue = ERRORED;
                node.error = err;
            }
            finally {
                consumerAfterComputation(node, prevConsumer);
            }
            if (wasEqual) {
                node.value = oldValue;
                return;
            }
            node.value = newValue;
            node.version++;
        }
    });
})();
function defaultThrowError() {
    throw new Error();
}
var throwInvalidWriteToSignalErrorFn = defaultThrowError;
function throwInvalidWriteToSignalError(node) {
    throwInvalidWriteToSignalErrorFn(node);
}
function setThrowInvalidWriteToSignalError(fn) {
    throwInvalidWriteToSignalErrorFn = fn;
}
var postSignalSetFn = null;
function createSignal(initialValue, equal) {
    const node = Object.create(SIGNAL_NODE);
    node.value = initialValue;
    if (equal !== void 0) {
        node.equal = equal;
    }
    const getter = () => signalGetFn(node);
    getter[SIGNAL] = node;
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
        const debugName = node.debugName ? " (" + node.debugName + ")" : "";
        getter.toString = () => `[Signal${debugName}: ${node.value}]`;
    }
    runPostProducerCreatedFn(node);
    const set = newValue => signalSetFn(node, newValue);
    const update = updateFn => signalUpdateFn(node, updateFn);
    return [getter, set, update];
}
function setPostSignalSetFn(fn) {
    const prev = postSignalSetFn;
    postSignalSetFn = fn;
    return prev;
}
function signalGetFn(node) {
    producerAccessed(node);
    return node.value;
}
function signalSetFn(node, newValue) {
    if (!producerUpdatesAllowed()) {
        throwInvalidWriteToSignalError(node);
    }
    if (!node.equal(node.value, newValue)) {
        node.value = newValue;
        signalValueChanged(node);
    }
}
function signalUpdateFn(node, updater) {
    if (!producerUpdatesAllowed()) {
        throwInvalidWriteToSignalError(node);
    }
    signalSetFn(node, updater(node.value));
}
function runPostSignalSetFn(node) {
    postSignalSetFn?.(node);
}
var SIGNAL_NODE = /* @__PURE__ */ (() => {
    return __spreadProps(__spreadValues({}, REACTIVE_NODE), {
        equal: defaultEquals,
        value: void 0,
        kind: "signal"
    });
})();
function signalValueChanged(node) {
    node.version++;
    producerIncrementEpoch();
    producerNotifyConsumers(node);
    postSignalSetFn?.(node);
}
// node_modules/@angular/core/fesm2022/effect.mjs
function createLinkedSignal(sourceFn, computationFn, equalityFn) {
    const node = Object.create(LINKED_SIGNAL_NODE);
    node.source = sourceFn;
    node.computation = computationFn;
    if (equalityFn != void 0) {
        node.equal = equalityFn;
    }
    const linkedSignalGetter = () => {
        producerUpdateValueVersion(node);
        producerAccessed(node);
        if (node.value === ERRORED) {
            throw node.error;
        }
        return node.value;
    };
    const getter = linkedSignalGetter;
    getter[SIGNAL] = node;
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
        const debugName = node.debugName ? " (" + node.debugName + ")" : "";
        getter.toString = () => `[LinkedSignal${debugName}: ${node.value}]`;
    }
    runPostProducerCreatedFn(node);
    return getter;
}
function linkedSignalSetFn(node, newValue) {
    producerUpdateValueVersion(node);
    signalSetFn(node, newValue);
    producerMarkClean(node);
}
function linkedSignalUpdateFn(node, updater) {
    producerUpdateValueVersion(node);
    signalUpdateFn(node, updater);
    producerMarkClean(node);
}
var LINKED_SIGNAL_NODE = /* @__PURE__ */ (() => {
    return __spreadProps(__spreadValues({}, REACTIVE_NODE), {
        value: UNSET,
        dirty: true,
        error: null,
        equal: defaultEquals,
        kind: "linkedSignal",
        producerMustRecompute(node) {
            return node.value === UNSET || node.value === COMPUTING;
        },
        producerRecomputeValue(node) {
            if (node.value === COMPUTING) {
                throw new Error(typeof ngDevMode !== "undefined" && ngDevMode ? "Detected cycle in computations." : "");
            }
            const oldValue = node.value;
            node.value = COMPUTING;
            const prevConsumer = consumerBeforeComputation(node);
            let newValue;
            try {
                const newSourceValue = node.source();
                const prev = oldValue === UNSET || oldValue === ERRORED ? void 0 : {
                    source: node.sourceValue,
                    value: oldValue
                };
                newValue = node.computation(newSourceValue, prev);
                node.sourceValue = newSourceValue;
            }
            catch (err) {
                newValue = ERRORED;
                node.error = err;
            }
            finally {
                consumerAfterComputation(node, prevConsumer);
            }
            if (oldValue !== UNSET && newValue !== ERRORED && node.equal(oldValue, newValue)) {
                node.value = oldValue;
                return;
            }
            node.value = newValue;
            node.version++;
        }
    });
})();
function untracked(nonReactiveReadsFn) {
    const prevConsumer = setActiveConsumer(null);
    try {
        return nonReactiveReadsFn();
    }
    finally {
        setActiveConsumer(prevConsumer);
    }
}
var BASE_EFFECT_NODE = /* @__PURE__ */ (() => __spreadProps(__spreadValues({}, REACTIVE_NODE), {
    consumerIsAlwaysLive: true,
    consumerAllowSignalWrites: true,
    dirty: true,
    kind: "effect"
}))();
function runEffect(node) {
    node.dirty = false;
    if (node.version > 0 && !consumerPollProducersForChange(node)) {
        return;
    }
    node.version++;
    const prevNode = consumerBeforeComputation(node);
    try {
        node.cleanup();
        node.fn();
    }
    finally {
        consumerAfterComputation(node, prevNode);
    }
}
export { defaultEquals, SIGNAL, setActiveConsumer, getActiveConsumer, isInNotificationPhase, isReactive, REACTIVE_NODE, producerAccessed, producerIncrementEpoch, producerUpdateValueVersion, producerNotifyConsumers, producerUpdatesAllowed, consumerMarkDirty, producerMarkClean, consumerBeforeComputation, resetConsumerBeforeComputation, consumerAfterComputation, finalizeConsumerAfterComputation, consumerPollProducersForChange, consumerDestroy, runPostProducerCreatedFn, setPostProducerCreatedFn, createComputed, setThrowInvalidWriteToSignalError, createSignal, setPostSignalSetFn, signalGetFn, signalSetFn, signalUpdateFn, runPostSignalSetFn, SIGNAL_NODE, createLinkedSignal, linkedSignalSetFn, linkedSignalUpdateFn, untracked, BASE_EFFECT_NODE, runEffect };
/*! Bundled license information:

@angular/core/fesm2022/signal.mjs:
@angular/core/fesm2022/effect.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/ 
