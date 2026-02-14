import { TREE_KEY_MANAGER, TreeKeyManager } from "@nf-internal/chunk-WA6QHYV5";
import { ActiveDescendantKeyManager } from "@nf-internal/chunk-TGWKUTZ6";
import { FocusKeyManager } from "@nf-internal/chunk-VAERC7YI";
import { ListKeyManager } from "@nf-internal/chunk-7WHZXMUH";
import "@nf-internal/chunk-TNW5MULF";
import "@nf-internal/chunk-VQE6KSYC";
import { A11yModule, CdkAriaLive, CdkTrapFocus, FocusTrap, FocusTrapFactory, HighContrastMode, HighContrastModeDetector, InteractivityChecker, IsFocusableConfig, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LIVE_ANNOUNCER_ELEMENT_TOKEN, LiveAnnouncer } from "@nf-internal/chunk-GYVBRE2P";
import { _VisuallyHiddenLoader } from "@nf-internal/chunk-MQ4NFWON";
import "@nf-internal/chunk-2OGGCIMB";
import { CdkMonitorFocus, FOCUS_MONITOR_DEFAULT_OPTIONS, FocusMonitor, FocusMonitorDetectionMode, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, INPUT_MODALITY_DETECTOR_OPTIONS, InputModalityDetector } from "@nf-internal/chunk-AEKGWLZG";
import "@nf-internal/chunk-B6OVJH7J";
import { isFakeMousedownFromScreenReader, isFakeTouchstartFromScreenReader } from "@nf-internal/chunk-CONIAN5D";
import "@nf-internal/chunk-2LYN7CWG";
import "@nf-internal/chunk-KPYFKLQQ";
import { _CdkPrivateStyleLoader } from "@nf-internal/chunk-HRAF4QVP";
import "@nf-internal/chunk-JD5JPQAG";
import "@nf-internal/chunk-IANTZR4E";
import { Platform } from "@nf-internal/chunk-26DDZNO4";
import { _IdGenerator } from "@nf-internal/chunk-F3H34SIQ";
import "@nf-internal/chunk-DDFN47J4";
import "@nf-internal/chunk-XODDVZAQ";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/a11y.mjs
import * as i0 from "@angular/core";
import { inject, DOCUMENT, APP_ID, Injectable, InjectionToken, NgZone, Injector } from "@angular/core";
import { Subject } from "rxjs";
import "rxjs/operators";
import "@angular/common";
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
    const ids = getAriaReferenceIds(el, attr);
    id = id.trim();
    if (ids.some(existingId => existingId.trim() === id)) {
        return;
    }
    ids.push(id);
    el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
    const ids = getAriaReferenceIds(el, attr);
    id = id.trim();
    const filteredIds = ids.filter(val => val !== id);
    if (filteredIds.length) {
        el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
    }
    else {
        el.removeAttribute(attr);
    }
}
function getAriaReferenceIds(el, attr) {
    const attrValue = el.getAttribute(attr);
    return attrValue?.match(/\S+/g) ?? [];
}
var MESSAGES_CONTAINER_ID = "cdk-describedby-message-container";
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var AriaDescriber = class _AriaDescriber {
    _platform = inject(Platform);
    _document = inject(DOCUMENT);
    /** Map of all registered message elements that have been placed into the document. */
    _messageRegistry = /* @__PURE__ */ new Map();
    /** Container for all registered messages. */
    _messagesContainer = null;
    /** Unique ID for the service. */
    _id = `${nextId++}`;
    constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
        this._id = inject(APP_ID) + "-" + nextId++;
    }
    describe(hostElement, message, role) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        const key = getKey(message, role);
        if (typeof message !== "string") {
            setMessageId(message, this._id);
            this._messageRegistry.set(key, {
                messageElement: message,
                referenceCount: 0
            });
        }
        else if (!this._messageRegistry.has(key)) {
            this._createMessageElement(message, role);
        }
        if (!this._isElementDescribedByMessage(hostElement, key)) {
            this._addMessageReference(hostElement, key);
        }
    }
    removeDescription(hostElement, message, role) {
        if (!message || !this._isElementNode(hostElement)) {
            return;
        }
        const key = getKey(message, role);
        if (this._isElementDescribedByMessage(hostElement, key)) {
            this._removeMessageReference(hostElement, key);
        }
        if (typeof message === "string") {
            const registeredMessage = this._messageRegistry.get(key);
            if (registeredMessage && registeredMessage.referenceCount === 0) {
                this._deleteMessageElement(key);
            }
        }
        if (this._messagesContainer?.childNodes.length === 0) {
            this._messagesContainer.remove();
            this._messagesContainer = null;
        }
    }
    /** Unregisters all created message elements and removes the message container. */
    ngOnDestroy() {
        const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
        for (let i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);
            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        this._messagesContainer?.remove();
        this._messagesContainer = null;
        this._messageRegistry.clear();
    }
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     */
    _createMessageElement(message, role) {
        const messageElement = this._document.createElement("div");
        setMessageId(messageElement, this._id);
        messageElement.textContent = message;
        if (role) {
            messageElement.setAttribute("role", role);
        }
        this._createMessagesContainer();
        this._messagesContainer.appendChild(messageElement);
        this._messageRegistry.set(getKey(message, role), {
            messageElement,
            referenceCount: 0
        });
    }
    /** Deletes the message element from the global messages container. */
    _deleteMessageElement(key) {
        this._messageRegistry.get(key)?.messageElement?.remove();
        this._messageRegistry.delete(key);
    }
    /** Creates the global container for all aria-describedby messages. */
    _createMessagesContainer() {
        if (this._messagesContainer) {
            return;
        }
        const containerClassName = "cdk-describedby-message-container";
        const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
        for (let i = 0; i < serverContainers.length; i++) {
            serverContainers[i].remove();
        }
        const messagesContainer = this._document.createElement("div");
        messagesContainer.style.visibility = "hidden";
        messagesContainer.classList.add(containerClassName);
        messagesContainer.classList.add("cdk-visually-hidden");
        if (!this._platform.isBrowser) {
            messagesContainer.setAttribute("platform", "server");
        }
        this._document.body.appendChild(messagesContainer);
        this._messagesContainer = messagesContainer;
    }
    /** Removes all cdk-describedby messages that are hosted through the element. */
    _removeCdkDescribedByReferenceIds(element) {
        const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
        element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
    }
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     */
    _addMessageReference(element, key) {
        const registeredMessage = this._messageRegistry.get(key);
        addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
        registeredMessage.referenceCount++;
    }
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     */
    _removeMessageReference(element, key) {
        const registeredMessage = this._messageRegistry.get(key);
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    /** Returns true if the element has been described by the provided message ID. */
    _isElementDescribedByMessage(element, key) {
        const referenceIds = getAriaReferenceIds(element, "aria-describedby");
        const registeredMessage = this._messageRegistry.get(key);
        const messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
    }
    /** Determines whether a message can be described on a particular element. */
    _canBeDescribed(element, message) {
        if (!this._isElementNode(element)) {
            return false;
        }
        if (message && typeof message === "object") {
            return true;
        }
        const trimmedMessage = message == null ? "" : `${message}`.trim();
        const ariaLabel = element.getAttribute("aria-label");
        return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
    }
    /** Checks whether a node is an Element node. */
    _isElementNode(element) {
        return element.nodeType === this._document.ELEMENT_NODE;
    }
    static ɵfac = function AriaDescriber_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _AriaDescriber)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _AriaDescriber,
        factory: _AriaDescriber.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AriaDescriber, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
function getKey(message, role) {
    return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
    if (!element.id) {
        element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
    }
}
var NoopTreeKeyManager = class {
    _isNoopTreeKeyManager = true;
    // Provide change as required by TreeKeyManagerStrategy. NoopTreeKeyManager is a "noop"
    // implementation that does not emit to streams.
    change = new Subject();
    destroy() {
        this.change.complete();
    }
    onKeydown() { }
    getActiveItemIndex() {
        return null;
    }
    getActiveItem() {
        return null;
    }
    focusItem() { }
};
var NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER = {
    provide: TREE_KEY_MANAGER,
    useFactory: () => () => new NoopTreeKeyManager()
};
var ConfigurableFocusTrap = class extends FocusTrap {
    _focusTrapManager;
    _inertStrategy;
    /** Whether the FocusTrap is enabled. */
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._enabled = value;
        if (this._enabled) {
            this._focusTrapManager.register(this);
        }
        else {
            this._focusTrapManager.deregister(this);
        }
    }
    constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
        super(_element, _checker, _ngZone, _document, config.defer, injector);
        this._focusTrapManager = _focusTrapManager;
        this._inertStrategy = _inertStrategy;
        this._focusTrapManager.register(this);
    }
    /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
    destroy() {
        this._focusTrapManager.deregister(this);
        super.destroy();
    }
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    _enable() {
        this._inertStrategy.preventFocus(this);
        this.toggleAnchors(true);
    }
    /** @docs-private Implemented as part of ManagedFocusTrap. */
    _disable() {
        this._inertStrategy.allowFocus(this);
        this.toggleAnchors(false);
    }
};
var EventListenerFocusTrapInertStrategy = class {
    /** Focus event handler. */
    _listener = null;
    /** Adds a document event listener that keeps focus inside the FocusTrap. */
    preventFocus(focusTrap) {
        if (this._listener) {
            focusTrap._document.removeEventListener("focus", this._listener, true);
        }
        this._listener = e => this._trapFocus(focusTrap, e);
        focusTrap._ngZone.runOutsideAngular(() => {
            focusTrap._document.addEventListener("focus", this._listener, true);
        });
    }
    /** Removes the event listener added in preventFocus. */
    allowFocus(focusTrap) {
        if (!this._listener) {
            return;
        }
        focusTrap._document.removeEventListener("focus", this._listener, true);
        this._listener = null;
    }
    /**
     * Refocuses the first element in the FocusTrap if the focus event target was outside
     * the FocusTrap.
     *
     * This is an event listener callback. The event listener is added in runOutsideAngular,
     * so all this code runs outside Angular as well.
     */
    _trapFocus(focusTrap, event) {
        const target = event.target;
        const focusTrapRoot = focusTrap._element;
        if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
            setTimeout(() => {
                if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                    focusTrap.focusFirstTabbableElement();
                }
            });
        }
    }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var FocusTrapManager = class _FocusTrapManager {
    // A stack of the FocusTraps on the page. Only the FocusTrap at the
    // top of the stack is active.
    _focusTrapStack = [];
    /**
     * Disables the FocusTrap at the top of the stack, and then pushes
     * the new FocusTrap onto the stack.
     */
    register(focusTrap) {
        this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
        let stack = this._focusTrapStack;
        if (stack.length) {
            stack[stack.length - 1]._disable();
        }
        stack.push(focusTrap);
        focusTrap._enable();
    }
    /**
     * Removes the FocusTrap from the stack, and activates the
     * FocusTrap that is the new top of the stack.
     */
    deregister(focusTrap) {
        focusTrap._disable();
        const stack = this._focusTrapStack;
        const i = stack.indexOf(focusTrap);
        if (i !== -1) {
            stack.splice(i, 1);
            if (stack.length) {
                stack[stack.length - 1]._enable();
            }
        }
    }
    static ɵfac = function FocusTrapManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _FocusTrapManager)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _FocusTrapManager,
        factory: _FocusTrapManager.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FocusTrapManager, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], null, null);
})();
var ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
    _checker = inject(InteractivityChecker);
    _ngZone = inject(NgZone);
    _focusTrapManager = inject(FocusTrapManager);
    _document = inject(DOCUMENT);
    _inertStrategy;
    _injector = inject(Injector);
    constructor() {
        const inertStrategy = inject(FOCUS_TRAP_INERT_STRATEGY, {
            optional: true
        });
        this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
    }
    create(element, config = {
        defer: false
    }) {
        let configObject;
        if (typeof config === "boolean") {
            configObject = {
                defer: config
            };
        }
        else {
            configObject = config;
        }
        return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
    }
    static ɵfac = function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ConfigurableFocusTrapFactory)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _ConfigurableFocusTrapFactory,
        factory: _ConfigurableFocusTrapFactory.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigurableFocusTrapFactory, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
export { A11yModule, ActiveDescendantKeyManager, AriaDescriber, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, CDK_DESCRIBEDBY_ID_PREFIX, CdkAriaLive, CdkMonitorFocus, CdkTrapFocus, ConfigurableFocusTrap, ConfigurableFocusTrapFactory, EventListenerFocusTrapInertStrategy, FOCUS_MONITOR_DEFAULT_OPTIONS, FOCUS_TRAP_INERT_STRATEGY, FocusKeyManager, FocusMonitor, FocusMonitorDetectionMode, FocusTrap, FocusTrapFactory, HighContrastMode, HighContrastModeDetector, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, INPUT_MODALITY_DETECTOR_OPTIONS, InputModalityDetector, InteractivityChecker, IsFocusableConfig, LIVE_ANNOUNCER_DEFAULT_OPTIONS, LIVE_ANNOUNCER_ELEMENT_TOKEN, ListKeyManager, LiveAnnouncer, MESSAGES_CONTAINER_ID, NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER, NoopTreeKeyManager, TREE_KEY_MANAGER, TreeKeyManager, _IdGenerator, addAriaReferencedId, getAriaReferenceIds, isFakeMousedownFromScreenReader, isFakeTouchstartFromScreenReader, removeAriaReferencedId };
