// node_modules/@angular/cdk/fesm2022/passive-listeners.mjs
var supportsPassiveEvents;
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== "undefined") {
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: () => supportsPassiveEvents = true
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}
export { supportsPassiveEventListeners, normalizePassiveListenerOptions };
