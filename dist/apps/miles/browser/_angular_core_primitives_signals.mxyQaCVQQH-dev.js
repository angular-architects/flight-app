import { setAlternateWeakRefImpl } from "@nf-internal/chunk-5MAAGWED";
import { BASE_EFFECT_NODE, REACTIVE_NODE, SIGNAL, SIGNAL_NODE, consumerAfterComputation, consumerBeforeComputation, consumerDestroy, consumerMarkDirty, consumerPollProducersForChange, createComputed, createLinkedSignal, createSignal, defaultEquals, finalizeConsumerAfterComputation, getActiveConsumer, isInNotificationPhase, isReactive, linkedSignalSetFn, linkedSignalUpdateFn, producerAccessed, producerIncrementEpoch, producerMarkClean, producerNotifyConsumers, producerUpdateValueVersion, producerUpdatesAllowed, resetConsumerBeforeComputation, runEffect, runPostProducerCreatedFn, runPostSignalSetFn, setActiveConsumer, setPostProducerCreatedFn, setPostSignalSetFn, setThrowInvalidWriteToSignalError, signalGetFn, signalSetFn, signalUpdateFn, untracked } from "@nf-internal/chunk-FNXOBYAQ";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/core/fesm2022/primitives/signals.mjs
function createWatch(fn, schedule, allowSignalWrites) {
    const node = Object.create(WATCH_NODE);
    if (allowSignalWrites) {
        node.consumerAllowSignalWrites = true;
    }
    node.fn = fn;
    node.schedule = schedule;
    const registerOnCleanup = cleanupFn => {
        node.cleanupFn = cleanupFn;
    };
    function isWatchNodeDestroyed(node2) {
        return node2.fn === null && node2.schedule === null;
    }
    function destroyWatchNode(node2) {
        if (!isWatchNodeDestroyed(node2)) {
            consumerDestroy(node2);
            node2.cleanupFn();
            node2.fn = null;
            node2.schedule = null;
            node2.cleanupFn = NOOP_CLEANUP_FN;
        }
    }
    const run = () => {
        if (node.fn === null) {
            return;
        }
        if (isInNotificationPhase()) {
            throw new Error(typeof ngDevMode !== "undefined" && ngDevMode ? "Schedulers cannot synchronously execute watches while scheduling." : "");
        }
        node.dirty = false;
        if (node.version > 0 && !consumerPollProducersForChange(node)) {
            return;
        }
        node.version++;
        const prevConsumer = consumerBeforeComputation(node);
        try {
            node.cleanupFn();
            node.cleanupFn = NOOP_CLEANUP_FN;
            node.fn(registerOnCleanup);
        }
        finally {
            consumerAfterComputation(node, prevConsumer);
        }
    };
    node.ref = {
        notify: () => consumerMarkDirty(node),
        run,
        cleanup: () => node.cleanupFn(),
        destroy: () => destroyWatchNode(node),
        [SIGNAL]: node
    };
    return node.ref;
}
var NOOP_CLEANUP_FN = () => { };
var WATCH_NODE = /* @__PURE__ */ (() => {
    return __spreadProps(__spreadValues({}, REACTIVE_NODE), {
        consumerIsAlwaysLive: true,
        consumerAllowSignalWrites: false,
        consumerMarkedDirty: node => {
            if (node.schedule !== null) {
                node.schedule(node.ref);
            }
        },
        cleanupFn: NOOP_CLEANUP_FN
    });
})();
export { BASE_EFFECT_NODE, REACTIVE_NODE, SIGNAL, SIGNAL_NODE, consumerAfterComputation, consumerBeforeComputation, consumerDestroy, consumerMarkDirty, consumerPollProducersForChange, createComputed, createLinkedSignal, createSignal, createWatch, defaultEquals, finalizeConsumerAfterComputation, getActiveConsumer, isInNotificationPhase, isReactive, linkedSignalSetFn, linkedSignalUpdateFn, producerAccessed, producerIncrementEpoch, producerMarkClean, producerNotifyConsumers, producerUpdateValueVersion, producerUpdatesAllowed, resetConsumerBeforeComputation, runEffect, runPostProducerCreatedFn, runPostSignalSetFn, setActiveConsumer, setAlternateWeakRefImpl, setPostProducerCreatedFn, setPostSignalSetFn, setThrowInvalidWriteToSignalError, signalGetFn, signalSetFn, signalUpdateFn, untracked };
/*! Bundled license information:

@angular/core/fesm2022/primitives/signals.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/ 
