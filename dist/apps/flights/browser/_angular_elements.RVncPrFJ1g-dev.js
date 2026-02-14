import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/elements/fesm2022/elements.mjs
import { ComponentFactoryResolver, NgZone, ApplicationRef, ɵChangeDetectionScheduler as _ChangeDetectionScheduler, ɵisViewDirty as _isViewDirty, ɵmarkForRefresh as _markForRefresh, Injector, Version } from "@angular/core";
import { ReplaySubject, merge, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
var scheduler = {
    /**
     * Schedule a callback to be called after some delay.
     *
     * Returns a function that when executed will cancel the scheduled function.
     */
    schedule(taskFn, delay) {
        const id = setTimeout(taskFn, delay);
        return () => clearTimeout(id);
    }
};
function camelToDashCase(input) {
    return input.replace(/[A-Z]/g, char => `-${char.toLowerCase()}`);
}
function isElement(node) {
    return !!node && node.nodeType === Node.ELEMENT_NODE;
}
var _matches;
function matchesSelector(el, selector) {
    if (!_matches) {
        const elProto = Element.prototype;
        _matches = elProto.matches || elProto.matchesSelector || elProto.mozMatchesSelector || elProto.msMatchesSelector || elProto.oMatchesSelector || elProto.webkitMatchesSelector;
    }
    return el.nodeType === Node.ELEMENT_NODE ? _matches.call(el, selector) : false;
}
function getDefaultAttributeToPropertyInputs(inputs) {
    const attributeToPropertyInputs = {};
    inputs.forEach(({ propName, templateName, transform }) => {
        attributeToPropertyInputs[camelToDashCase(templateName)] = [propName, transform];
    });
    return attributeToPropertyInputs;
}
function getComponentInputs(component, injector) {
    const componentFactoryResolver = injector.get(ComponentFactoryResolver);
    const componentFactory = componentFactoryResolver.resolveComponentFactory(component);
    return componentFactory.inputs;
}
function extractProjectableNodes(host, ngContentSelectors) {
    const nodes = host.childNodes;
    const projectableNodes = ngContentSelectors.map(() => []);
    let wildcardIndex = -1;
    ngContentSelectors.some((selector, i) => {
        if (selector === "*") {
            wildcardIndex = i;
            return true;
        }
        return false;
    });
    for (let i = 0, ii = nodes.length; i < ii; ++i) {
        const node = nodes[i];
        const ngContentIndex = findMatchingIndex(node, ngContentSelectors, wildcardIndex);
        if (ngContentIndex !== -1) {
            projectableNodes[ngContentIndex].push(node);
        }
    }
    return projectableNodes;
}
function findMatchingIndex(node, selectors, defaultIndex) {
    let matchingIndex = defaultIndex;
    if (isElement(node)) {
        selectors.some((selector, i) => {
            if (selector !== "*" && matchesSelector(node, selector)) {
                matchingIndex = i;
                return true;
            }
            return false;
        });
    }
    return matchingIndex;
}
var DESTROY_DELAY = 10;
var ComponentNgElementStrategyFactory = class {
    componentFactory;
    inputMap = /* @__PURE__ */ new Map();
    constructor(component, injector) {
        this.componentFactory = injector.get(ComponentFactoryResolver).resolveComponentFactory(component);
        for (const input of this.componentFactory.inputs) {
            this.inputMap.set(input.propName, input.templateName);
        }
    }
    create(injector) {
        return new ComponentNgElementStrategy(this.componentFactory, injector, this.inputMap);
    }
};
var ComponentNgElementStrategy = class {
    componentFactory;
    injector;
    inputMap;
    // Subject of `NgElementStrategyEvent` observables corresponding to the component's outputs.
    eventEmitters = new ReplaySubject(1);
    /** Merged stream of the component's output events. */
    events = this.eventEmitters.pipe(switchMap(emitters => merge(...emitters)));
    /** Reference to the component that was created on connect. */
    componentRef = null;
    /** Callback function that when called will cancel a scheduled destruction on the component. */
    scheduledDestroyFn = null;
    /** Initial input values that were set before the component was created. */
    initialInputValues = /* @__PURE__ */ new Map();
    /** Service for setting zone context. */
    ngZone;
    /** The zone the element was created in or `null` if Zone.js is not loaded. */
    elementZone;
    /**
     * The `ApplicationRef` shared by all instances of this custom element (and potentially others).
     */
    appRef;
    /**
     * Angular's change detection scheduler, which works independently of zone.js.
     */
    cdScheduler;
    constructor(componentFactory, injector, inputMap) {
        this.componentFactory = componentFactory;
        this.injector = injector;
        this.inputMap = inputMap;
        this.ngZone = this.injector.get(NgZone);
        this.appRef = this.injector.get(ApplicationRef);
        this.cdScheduler = injector.get(_ChangeDetectionScheduler);
        this.elementZone = typeof Zone === "undefined" ? null : this.ngZone.run(() => Zone.current);
    }
    /**
     * Initializes a new component if one has not yet been created and cancels any scheduled
     * destruction.
     */
    connect(element) {
        this.runInZone(() => {
            if (this.scheduledDestroyFn !== null) {
                this.scheduledDestroyFn();
                this.scheduledDestroyFn = null;
                return;
            }
            if (this.componentRef === null) {
                this.initializeComponent(element);
            }
        });
    }
    /**
     * Schedules the component to be destroyed after some small delay in case the element is just
     * being moved across the DOM.
     */
    disconnect() {
        this.runInZone(() => {
            if (this.componentRef === null || this.scheduledDestroyFn !== null) {
                return;
            }
            this.scheduledDestroyFn = scheduler.schedule(() => {
                if (this.componentRef !== null) {
                    this.componentRef.destroy();
                    this.componentRef = null;
                }
            }, DESTROY_DELAY);
        });
    }
    /**
     * Returns the component property value. If the component has not yet been created, the value is
     * retrieved from the cached initialization values.
     */
    getInputValue(property) {
        return this.runInZone(() => {
            if (this.componentRef === null) {
                return this.initialInputValues.get(property);
            }
            return this.componentRef.instance[property];
        });
    }
    /**
     * Sets the input value for the property. If the component has not yet been created, the value is
     * cached and set when the component is created.
     */
    setInputValue(property, value) {
        if (this.componentRef === null) {
            this.initialInputValues.set(property, value);
            return;
        }
        this.runInZone(() => {
            this.componentRef.setInput(this.inputMap.get(property) ?? property, value);
            if (_isViewDirty(this.componentRef.hostView)) {
                _markForRefresh(this.componentRef.changeDetectorRef);
                this.cdScheduler.notify(6
                /* NotificationSource.CustomElement */ );
            }
        });
    }
    /**
     * Creates a new component through the component factory with the provided element host and
     * sets up its initial inputs, listens for outputs changes, and runs an initial change detection.
     */
    initializeComponent(element) {
        const childInjector = Injector.create({
            providers: [],
            parent: this.injector
        });
        const projectableNodes = extractProjectableNodes(element, this.componentFactory.ngContentSelectors);
        this.componentRef = this.componentFactory.create(childInjector, projectableNodes, element);
        this.initializeInputs();
        this.initializeOutputs(this.componentRef);
        this.appRef.attachView(this.componentRef.hostView);
        this.componentRef.hostView.detectChanges();
    }
    /** Set any stored initial inputs on the component's properties. */
    initializeInputs() {
        for (const [propName, value] of this.initialInputValues) {
            this.setInputValue(propName, value);
        }
        this.initialInputValues.clear();
    }
    /** Sets up listeners for the component's outputs so that the events stream emits the events. */
    initializeOutputs(componentRef) {
        const eventEmitters = this.componentFactory.outputs.map(({ propName, templateName }) => {
            const emitter = componentRef.instance[propName];
            return new Observable(observer => {
                const sub = emitter.subscribe(value => observer.next({
                    name: templateName,
                    value
                }));
                return () => sub.unsubscribe();
            });
        });
        this.eventEmitters.next(eventEmitters);
    }
    /** Runs in the angular zone, if present. */
    runInZone(fn) {
        return this.elementZone && Zone.current !== this.elementZone ? this.ngZone.run(fn) : fn();
    }
};
var NgElement = class extends HTMLElement {
    /**
     * A subscription to change, connect, and disconnect events in the custom element.
     */
    ngElementEventsSubscription = null;
};
function createCustomElement(component, config) {
    const inputs = getComponentInputs(component, config.injector);
    const strategyFactory = config.strategyFactory || new ComponentNgElementStrategyFactory(component, config.injector);
    const attributeToPropertyInputs = getDefaultAttributeToPropertyInputs(inputs);
    class NgElementImpl extends NgElement {
        injector;
        // Work around a bug in closure typed optimizations(b/79557487) where it is not honoring static
        // field externs. So using quoted access to explicitly prevent renaming.
        static ["observedAttributes"] = Object.keys(attributeToPropertyInputs);
        get ngElementStrategy() {
            if (!this._ngElementStrategy) {
                const strategy = this._ngElementStrategy = strategyFactory.create(this.injector || config.injector);
                inputs.forEach(({ propName, transform }) => {
                    if (!this.hasOwnProperty(propName)) {
                        return;
                    }
                    const value = this[propName];
                    delete this[propName];
                    strategy.setInputValue(propName, value, transform);
                });
            }
            return this._ngElementStrategy;
        }
        _ngElementStrategy;
        constructor(injector) {
            super();
            this.injector = injector;
        }
        attributeChangedCallback(attrName, oldValue, newValue, namespace) {
            const [propName, transform] = attributeToPropertyInputs[attrName];
            this.ngElementStrategy.setInputValue(propName, newValue, transform);
        }
        connectedCallback() {
            let subscribedToEvents = false;
            if (this.ngElementStrategy.events) {
                this.subscribeToEvents();
                subscribedToEvents = true;
            }
            this.ngElementStrategy.connect(this);
            if (!subscribedToEvents) {
                this.subscribeToEvents();
            }
        }
        disconnectedCallback() {
            if (this._ngElementStrategy) {
                this._ngElementStrategy.disconnect();
            }
            if (this.ngElementEventsSubscription) {
                this.ngElementEventsSubscription.unsubscribe();
                this.ngElementEventsSubscription = null;
            }
        }
        subscribeToEvents() {
            this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe(e => {
                const customEvent = new CustomEvent(e.name, {
                    detail: e.value
                });
                this.dispatchEvent(customEvent);
            });
        }
    }
    inputs.forEach(({ propName, transform }) => {
        Object.defineProperty(NgElementImpl.prototype, propName, {
            get() {
                return this.ngElementStrategy.getInputValue(propName);
            },
            set(newValue) {
                this.ngElementStrategy.setInputValue(propName, newValue, transform);
            },
            configurable: true,
            enumerable: true
        });
    });
    return NgElementImpl;
}
var VERSION = new Version("21.0.0-next.5");
export { NgElement, VERSION, createCustomElement };
/*! Bundled license information:

@angular/elements/fesm2022/elements.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
