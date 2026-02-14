// node_modules/@angular/core/fesm2022/attribute.mjs
var Attribute = {
    /**
     * The jsaction attribute defines a mapping of a DOM event to a
     * generic event (aka jsaction), to which the actual event handlers
     * that implement the behavior of the application are bound. The
     * value is a semicolon separated list of colon separated pairs of
     * an optional DOM event name and a jsaction name. If the optional
     * DOM event name is omitted, 'click' is assumed. The jsaction names
     * are dot separated pairs of a namespace and a simple jsaction
     * name.
     *
     * See grammar in README.md for expected syntax in the attribute value.
     */
    JSACTION: "jsaction"
};
// node_modules/@angular/core/fesm2022/primitives/event-dispatch.mjs
var Property = {
    /**
     * The parsed value of the jsaction attribute is stored in this
     * property on the DOM node. The parsed value is an Object. The
     * property names of the object are the events; the values are the
     * names of the actions. This property is attached even on nodes
     * that don't have a jsaction attribute as an optimization, because
     * property lookup is faster than attribute access.
     */
    JSACTION: "__jsaction",
    /**
     * The owner property references an a logical owner for a DOM node. JSAction
     * will follow this reference instead of parentNode when traversing the DOM
     * to find jsaction attributes. This allows overlaying a logical structure
     * over a document where the DOM structure can't reflect that structure.
     */
    OWNER: "__owner"
};
var parseCache = {};
function get(element) {
    return element[Property.JSACTION];
}
function getDefaulted(element) {
    const cache = get(element) ?? {};
    set(element, cache);
    return cache;
}
function set(element, actionMap) {
    element[Property.JSACTION] = actionMap;
}
function getParsed(text) {
    return parseCache[text];
}
function setParsed(text, parsed) {
    parseCache[text] = parsed;
}
var EventType = {
    /**
     * Mouse middle click, introduced in Chrome 55 and not yet supported on
     * other browsers.
     */
    AUXCLICK: "auxclick",
    /**
     * The change event fired by browsers when the `value` attribute of input,
     * select, and textarea elements are changed.
     */
    CHANGE: "change",
    /**
     * The click event. In addEvent() refers to all click events, in the
     * jsaction attribute it refers to the unmodified click and Enter/Space
     * keypress events.  In the latter case, a jsaction click will be triggered,
     * for accessibility reasons.  See clickmod and clickonly, below.
     */
    CLICK: "click",
    /**
     * Specifies the jsaction for a modified click event (i.e. a mouse
     * click with the modifier key Cmd/Ctrl pressed). This event isn't
     * separately enabled in addEvent(), because in the DOM, it's just a
     * click event.
     */
    CLICKMOD: "clickmod",
    /**
     * Specifies the jsaction for a click-only event.  Click-only doesn't take
     * into account the case where an element with focus receives an Enter/Space
     * keypress.  This event isn't separately enabled in addEvent().
     */
    CLICKONLY: "clickonly",
    /**
     * The dblclick event.
     */
    DBLCLICK: "dblclick",
    /**
     * Focus doesn't bubble, but you can use it in addEvent() and
     * jsaction anyway. EventContract does the right thing under the
     * hood.
     */
    FOCUS: "focus",
    /**
     * This event only exists in IE. For addEvent() and jsaction, use
     * focus instead; EventContract does the right thing even though
     * focus doesn't bubble.
     */
    FOCUSIN: "focusin",
    /**
     * Analog to focus.
     */
    BLUR: "blur",
    /**
     * Analog to focusin.
     */
    FOCUSOUT: "focusout",
    /**
     * Submit doesn't bubble, so it cannot be used with event
     * contract. However, the browser helpfully fires a click event on
     * the submit button of a form (even if the form is not submitted by
     * a click on the submit button). So you should handle click on the
     * submit button instead.
     */
    SUBMIT: "submit",
    /**
     * The keydown event. In addEvent() and non-click jsaction it represents the
     * regular DOM keydown event. It represents click actions in non-Gecko
     * browsers.
     */
    KEYDOWN: "keydown",
    /**
     * The keypress event. In addEvent() and non-click jsaction it represents the
     * regular DOM keypress event. It represents click actions in Gecko browsers.
     */
    KEYPRESS: "keypress",
    /**
     * The keyup event. In addEvent() and non-click jsaction it represents the
     * regular DOM keyup event. It represents click actions in non-Gecko
     * browsers.
     */
    KEYUP: "keyup",
    /**
     * The mouseup event. Can either be used directly or used implicitly to
     * capture mouseup events. In addEvent(), it represents a regular DOM
     * mouseup event.
     */
    MOUSEUP: "mouseup",
    /**
     * The mousedown event. Can either be used directly or used implicitly to
     * capture mouseenter events. In addEvent(), it represents a regular DOM
     * mouseover event.
     */
    MOUSEDOWN: "mousedown",
    /**
     * The mouseover event. Can either be used directly or used implicitly to
     * capture mouseenter events. In addEvent(), it represents a regular DOM
     * mouseover event.
     */
    MOUSEOVER: "mouseover",
    /**
     * The mouseout event. Can either be used directly or used implicitly to
     * capture mouseover events. In addEvent(), it represents a regular DOM
     * mouseout event.
     */
    MOUSEOUT: "mouseout",
    /**
     * The mouseenter event. Does not bubble and fires individually on each
     * element being entered within a DOM tree.
     */
    MOUSEENTER: "mouseenter",
    /**
     * The mouseleave event. Does not bubble and fires individually on each
     * element being entered within a DOM tree.
     */
    MOUSELEAVE: "mouseleave",
    /**
     * The mousemove event.
     */
    MOUSEMOVE: "mousemove",
    /**
     * The pointerup event. Can either be used directly or used implicitly to
     * capture pointerup events. In addEvent(), it represents a regular DOM
     * pointerup event.
     */
    POINTERUP: "pointerup",
    /**
     * The pointerdown event. Can either be used directly or used implicitly to
     * capture pointerenter events. In addEvent(), it represents a regular DOM
     * mouseover event.
     */
    POINTERDOWN: "pointerdown",
    /**
     * The pointerover event. Can either be used directly or used implicitly to
     * capture pointerenter events. In addEvent(), it represents a regular DOM
     * pointerover event.
     */
    POINTEROVER: "pointerover",
    /**
     * The pointerout event. Can either be used directly or used implicitly to
     * capture pointerover events. In addEvent(), it represents a regular DOM
     * pointerout event.
     */
    POINTEROUT: "pointerout",
    /**
     * The pointerenter event. Does not bubble and fires individually on each
     * element being entered within a DOM tree.
     */
    POINTERENTER: "pointerenter",
    /**
     * The pointerleave event. Does not bubble and fires individually on each
     * element being entered within a DOM tree.
     */
    POINTERLEAVE: "pointerleave",
    /**
     * The pointermove event.
     */
    POINTERMOVE: "pointermove",
    /**
     * The pointercancel event.
     */
    POINTERCANCEL: "pointercancel",
    /**
     * The gotpointercapture event is fired when
     * Element.setPointerCapture(pointerId) is called on a mouse input, or
     * implicitly when a touch input begins.
     */
    GOTPOINTERCAPTURE: "gotpointercapture",
    /**
     * The lostpointercapture event is fired when
     * Element.releasePointerCapture(pointerId) is called, or implicitly after a
     * touch input ends.
     */
    LOSTPOINTERCAPTURE: "lostpointercapture",
    /**
     * The error event. The error event doesn't bubble, but you can use it in
     * addEvent() and jsaction anyway. EventContract does the right thing under
     * the hood (except in IE8 which does not use error events).
     */
    ERROR: "error",
    /**
     * The load event. The load event doesn't bubble, but you can use it in
     * addEvent() and jsaction anyway. EventContract does the right thing
     * under the hood.
     */
    LOAD: "load",
    /**
     * The unload event.
     */
    UNLOAD: "unload",
    /**
     * The touchstart event. Bubbles, will only ever fire in browsers with
     * touch support.
     */
    TOUCHSTART: "touchstart",
    /**
     * The touchend event. Bubbles, will only ever fire in browsers with
     * touch support.
     */
    TOUCHEND: "touchend",
    /**
     * The touchmove event. Bubbles, will only ever fire in browsers with
     * touch support.
     */
    TOUCHMOVE: "touchmove",
    /**
     * The input event.
     */
    INPUT: "input",
    /**
     * The scroll event.
     */
    SCROLL: "scroll",
    /**
     * The toggle event. The toggle event doesn't bubble, but you can use it in
     * addEvent() and jsaction anyway. EventContract does the right thing
     * under the hood.
     */
    TOGGLE: "toggle",
    /**
     * A custom event. The actual custom event type is declared as the 'type'
     * field in the event details. Supported in Firefox 6+, IE 9+, and all Chrome
     * versions.
     *
     * This is an internal name. Users should use jsaction's fireCustomEvent to
     * fire custom events instead of relying on this type to create them.
     */
    CUSTOM: "_custom"
};
var MOUSE_SPECIAL_EVENT_TYPES = [EventType.MOUSEENTER, EventType.MOUSELEAVE, "pointerenter", "pointerleave"];
var BUBBLE_EVENT_TYPES = [EventType.CLICK, EventType.DBLCLICK, EventType.FOCUSIN, EventType.FOCUSOUT, EventType.KEYDOWN, EventType.KEYUP, EventType.KEYPRESS, EventType.MOUSEOVER, EventType.MOUSEOUT, EventType.SUBMIT, EventType.TOUCHSTART, EventType.TOUCHEND, EventType.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture",
    // Video events.
    "ended", "loadedmetadata",
    // Page visibility events.
    "pagehide", "pageshow", "visibilitychange",
    // Content visibility events.
    "beforematch"];
var CAPTURE_EVENT_TYPES = [EventType.FOCUS, EventType.BLUR, EventType.ERROR, EventType.LOAD, EventType.TOGGLE];
var isCaptureEventType = eventType => CAPTURE_EVENT_TYPES.indexOf(eventType) >= 0;
var EARLY_EVENT_TYPES = BUBBLE_EVENT_TYPES.concat(CAPTURE_EVENT_TYPES);
var isEarlyEventType = eventType => EARLY_EVENT_TYPES.indexOf(eventType) >= 0;
function getBrowserEventType(eventType) {
    if (eventType === EventType.MOUSEENTER) {
        return EventType.MOUSEOVER;
    }
    else if (eventType === EventType.MOUSELEAVE) {
        return EventType.MOUSEOUT;
    }
    else if (eventType === EventType.POINTERENTER) {
        return EventType.POINTEROVER;
    }
    else if (eventType === EventType.POINTERLEAVE) {
        return EventType.POINTEROUT;
    }
    return eventType;
}
function addEventListener(element, eventType, handler, passive) {
    let capture = false;
    if (isCaptureEventType(eventType)) {
        capture = true;
    }
    const options = typeof passive === "boolean" ? {
        capture,
        passive
    } : capture;
    element.addEventListener(eventType, handler, options);
    return {
        eventType,
        handler,
        capture,
        passive
    };
}
function removeEventListener(element, info) {
    if (element.removeEventListener) {
        const options = typeof info.passive === "boolean" ? {
            capture: info.capture
        } : info.capture;
        element.removeEventListener(info.eventType, info.handler, options);
    }
    else if (element.detachEvent) {
        element.detachEvent(`on${info.eventType}`, info.handler);
    }
}
function preventDefault(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
}
var isMac = typeof navigator !== "undefined" && /Macintosh/.test(navigator.userAgent);
function isMiddleClick(e) {
    return (
    // `which` is an old DOM API.
    e.which === 2 ||
        // `which` is an old DOM API.
        e.which == null &&
            // `button` is an old DOM API.
            e.button === 4);
}
function isModifiedClickEvent(e) {
    return (
    // `metaKey` is an old DOM API.
    isMac && e.metaKey ||
        // `ctrlKey` is an old DOM API.
        !isMac && e.ctrlKey || isMiddleClick(e) ||
        // `shiftKey` is an old DOM API.
        e.shiftKey);
}
function isMouseSpecialEvent(e, type, element) {
    const related = e.relatedTarget;
    return (e.type === EventType.MOUSEOVER && type === EventType.MOUSEENTER || e.type === EventType.MOUSEOUT && type === EventType.MOUSELEAVE || e.type === EventType.POINTEROVER && type === EventType.POINTERENTER || e.type === EventType.POINTEROUT && type === EventType.POINTERLEAVE) && (!related || related !== element && !element.contains(related));
}
function createMouseSpecialEvent(e, target) {
    const copy = {};
    for (const property in e) {
        if (property === "srcElement" || property === "target") {
            continue;
        }
        const key = property;
        const value = e[key];
        if (typeof value === "function") {
            continue;
        }
        copy[key] = value;
    }
    if (e.type === EventType.MOUSEOVER) {
        copy["type"] = EventType.MOUSEENTER;
    }
    else if (e.type === EventType.MOUSEOUT) {
        copy["type"] = EventType.MOUSELEAVE;
    }
    else if (e.type === EventType.POINTEROVER) {
        copy["type"] = EventType.POINTERENTER;
    }
    else {
        copy["type"] = EventType.POINTERLEAVE;
    }
    copy["target"] = copy["srcElement"] = target;
    copy["bubbles"] = false;
    copy["_originalEvent"] = e;
    return copy;
}
var isIos = typeof navigator !== "undefined" && /iPhone|iPad|iPod/.test(navigator.userAgent);
var EventContractContainer = class {
    element;
    /**
     * Array of event handlers and their corresponding event types that are
     * installed on this container.
     *
     */
    handlerInfos = [];
    /**
     * @param element The container Element.
     */
    constructor(element) {
        this.element = element;
    }
    /**
     * Installs the provided installer on the element owned by this container,
     * and maintains a reference to resulting handler in order to remove it
     * later if desired.
     */
    addEventListener(eventType, getHandler, passive) {
        if (isIos) {
            this.element.style.cursor = "pointer";
        }
        this.handlerInfos.push(addEventListener(this.element, eventType, getHandler(this.element), passive));
    }
    /**
     * Removes all the handlers installed on this container.
     */
    cleanUp() {
        for (let i = 0; i < this.handlerInfos.length; i++) {
            removeEventListener(this.element, this.handlerInfos[i]);
        }
        this.handlerInfos = [];
    }
};
var Char = {
    /**
     * The separator between the namespace and the action name in the
     * jsaction attribute value.
     */
    NAMESPACE_ACTION_SEPARATOR: ".",
    /**
     * The separator between the event name and action in the jsaction
     * attribute value.
     */
    EVENT_ACTION_SEPARATOR: ":"
};
function getEventType(eventInfo) {
    return eventInfo.eventType;
}
function setEventType(eventInfo, eventType) {
    eventInfo.eventType = eventType;
}
function getEvent(eventInfo) {
    return eventInfo.event;
}
function setEvent(eventInfo, event) {
    eventInfo.event = event;
}
function getTargetElement(eventInfo) {
    return eventInfo.targetElement;
}
function setTargetElement(eventInfo, targetElement) {
    eventInfo.targetElement = targetElement;
}
function getContainer(eventInfo) {
    return eventInfo.eic;
}
function setContainer(eventInfo, container) {
    eventInfo.eic = container;
}
function getTimestamp(eventInfo) {
    return eventInfo.timeStamp;
}
function setTimestamp(eventInfo, timestamp) {
    eventInfo.timeStamp = timestamp;
}
function getAction(eventInfo) {
    return eventInfo.eia;
}
function setAction(eventInfo, actionName, actionElement) {
    eventInfo.eia = [actionName, actionElement];
}
function unsetAction(eventInfo) {
    eventInfo.eia = void 0;
}
function getActionElement(actionInfo) {
    return actionInfo[1];
}
function getIsReplay(eventInfo) {
    return eventInfo.eirp;
}
function setIsReplay(eventInfo, replay) {
    eventInfo.eirp = replay;
}
function getResolved(eventInfo) {
    return eventInfo.eir;
}
function setResolved(eventInfo, resolved) {
    eventInfo.eir = resolved;
}
function cloneEventInfo(eventInfo) {
    return {
        eventType: eventInfo.eventType,
        event: eventInfo.event,
        targetElement: eventInfo.targetElement,
        eic: eventInfo.eic,
        eia: eventInfo.eia,
        timeStamp: eventInfo.timeStamp,
        eirp: eventInfo.eirp,
        eiack: eventInfo.eiack,
        eir: eventInfo.eir
    };
}
function createEventInfoFromParameters(eventType, event, targetElement, container, timestamp, action, isReplay, a11yClickKey) {
    return {
        eventType,
        event,
        targetElement,
        eic: container,
        timeStamp: timestamp,
        eia: action,
        eirp: isReplay,
        eiack: a11yClickKey
    };
}
var EventInfoWrapper = class _EventInfoWrapper {
    eventInfo;
    constructor(eventInfo) {
        this.eventInfo = eventInfo;
    }
    getEventType() {
        return getEventType(this.eventInfo);
    }
    setEventType(eventType) {
        setEventType(this.eventInfo, eventType);
    }
    getEvent() {
        return getEvent(this.eventInfo);
    }
    setEvent(event) {
        setEvent(this.eventInfo, event);
    }
    getTargetElement() {
        return getTargetElement(this.eventInfo);
    }
    setTargetElement(targetElement) {
        setTargetElement(this.eventInfo, targetElement);
    }
    getContainer() {
        return getContainer(this.eventInfo);
    }
    setContainer(container) {
        setContainer(this.eventInfo, container);
    }
    getTimestamp() {
        return getTimestamp(this.eventInfo);
    }
    setTimestamp(timestamp) {
        setTimestamp(this.eventInfo, timestamp);
    }
    getAction() {
        const action = getAction(this.eventInfo);
        if (!action)
            return void 0;
        return {
            name: action[0],
            element: action[1]
        };
    }
    setAction(action) {
        if (!action) {
            unsetAction(this.eventInfo);
            return;
        }
        setAction(this.eventInfo, action.name, action.element);
    }
    getIsReplay() {
        return getIsReplay(this.eventInfo);
    }
    setIsReplay(replay) {
        setIsReplay(this.eventInfo, replay);
    }
    getResolved() {
        return getResolved(this.eventInfo);
    }
    setResolved(resolved) {
        setResolved(this.eventInfo, resolved);
    }
    clone() {
        return new _EventInfoWrapper(cloneEventInfo(this.eventInfo));
    }
};
var EMPTY_ACTION_MAP = {};
var REGEXP_SEMICOLON = /\s*;\s*/;
var DEFAULT_EVENT_TYPE = EventType.CLICK;
var ActionResolver = class {
    a11yClickSupport = false;
    clickModSupport = true;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport = false, clickModSupport = true } = {}) {
        this.syntheticMouseEventSupport = syntheticMouseEventSupport;
        this.clickModSupport = clickModSupport;
    }
    resolveEventType(eventInfo) {
        if (this.clickModSupport && getEventType(eventInfo) === EventType.CLICK && isModifiedClickEvent(getEvent(eventInfo))) {
            setEventType(eventInfo, EventType.CLICKMOD);
        }
        else if (this.a11yClickSupport) {
            this.updateEventInfoForA11yClick(eventInfo);
        }
    }
    resolveAction(eventInfo) {
        if (getResolved(eventInfo)) {
            return;
        }
        this.populateAction(eventInfo, getTargetElement(eventInfo));
        setResolved(eventInfo, true);
    }
    resolveParentAction(eventInfo) {
        const action = getAction(eventInfo);
        const actionElement = action && getActionElement(action);
        unsetAction(eventInfo);
        const parentNode = actionElement && this.getParentNode(actionElement);
        if (!parentNode) {
            return;
        }
        this.populateAction(eventInfo, parentNode);
    }
    /**
     * Searches for a jsaction that the DOM event maps to and creates an
     * object containing event information used for dispatching by
     * jsaction.Dispatcher. This method populates the `action` and `actionElement`
     * fields of the EventInfo object passed in by finding the first
     * jsaction attribute above the target Node of the event, and below
     * the container Node, that specifies a jsaction for the event
     * type. If no such jsaction is found, then action is undefined.
     *
     * @param eventInfo `EventInfo` to set `action` and `actionElement` if an
     *    action is found on any `Element` in the path of the `Event`.
     */
    populateAction(eventInfo, currentTarget) {
        let actionElement = currentTarget;
        while (actionElement && actionElement !== getContainer(eventInfo)) {
            if (actionElement.nodeType === Node.ELEMENT_NODE) {
                this.populateActionOnElement(actionElement, eventInfo);
            }
            if (getAction(eventInfo)) {
                break;
            }
            actionElement = this.getParentNode(actionElement);
        }
        const action = getAction(eventInfo);
        if (!action) {
            return;
        }
        if (this.a11yClickSupport) {
            this.preventDefaultForA11yClick(eventInfo);
        }
        if (this.syntheticMouseEventSupport) {
            if (getEventType(eventInfo) === EventType.MOUSEENTER || getEventType(eventInfo) === EventType.MOUSELEAVE || getEventType(eventInfo) === EventType.POINTERENTER || getEventType(eventInfo) === EventType.POINTERLEAVE) {
                if (isMouseSpecialEvent(getEvent(eventInfo), getEventType(eventInfo), getActionElement(action))) {
                    const copiedEvent = createMouseSpecialEvent(getEvent(eventInfo), getActionElement(action));
                    setEvent(eventInfo, copiedEvent);
                    setTargetElement(eventInfo, getActionElement(action));
                }
                else {
                    unsetAction(eventInfo);
                }
            }
        }
    }
    /**
     * Walk to the parent node, unless the node has a different owner in
     * which case we walk to the owner. Attempt to walk to host of a
     * shadow root if needed.
     */
    getParentNode(element) {
        const owner = element[Property.OWNER];
        if (owner) {
            return owner;
        }
        const parentNode = element.parentNode;
        if (parentNode?.nodeName === "#document-fragment") {
            return parentNode?.host ?? null;
        }
        return parentNode;
    }
    /**
     * Accesses the jsaction map on a node and retrieves the name of the
     * action the given event is mapped to, if any. It parses the
     * attribute value and stores it in a property on the node for
     * subsequent retrieval without re-parsing and re-accessing the
     * attribute.
     *
     * @param actionElement The DOM node to retrieve the jsaction map from.
     * @param eventInfo `EventInfo` to set `action` and `actionElement` if an
     *    action is found on the `actionElement`.
     */
    populateActionOnElement(actionElement, eventInfo) {
        const actionMap = this.parseActions(actionElement);
        const actionName = actionMap[getEventType(eventInfo)];
        if (actionName !== void 0) {
            setAction(eventInfo, actionName, actionElement);
        }
        if (this.a11yClickSupport) {
            this.populateClickOnlyAction(actionElement, eventInfo, actionMap);
        }
    }
    /**
     * Parses and caches an element's jsaction element into a map.
     *
     * This is primarily for internal use.
     *
     * @param actionElement The DOM node to retrieve the jsaction map from.
     * @return Map from event to qualified name of the jsaction bound to it.
     */
    parseActions(actionElement) {
        let actionMap = get(actionElement);
        if (!actionMap) {
            const jsactionAttribute = actionElement.getAttribute(Attribute.JSACTION);
            if (!jsactionAttribute) {
                actionMap = EMPTY_ACTION_MAP;
                set(actionElement, actionMap);
            }
            else {
                actionMap = getParsed(jsactionAttribute);
                if (!actionMap) {
                    actionMap = {};
                    const values = jsactionAttribute.split(REGEXP_SEMICOLON);
                    for (let idx = 0; idx < values.length; idx++) {
                        const value = values[idx];
                        if (!value) {
                            continue;
                        }
                        const colon = value.indexOf(Char.EVENT_ACTION_SEPARATOR);
                        const hasColon = colon !== -1;
                        const type = hasColon ? value.substr(0, colon).trim() : DEFAULT_EVENT_TYPE;
                        const action = hasColon ? value.substr(colon + 1).trim() : value;
                        actionMap[type] = action;
                    }
                    setParsed(jsactionAttribute, actionMap);
                }
                set(actionElement, actionMap);
            }
        }
        return actionMap;
    }
    addA11yClickSupport(updateEventInfoForA11yClick, preventDefaultForA11yClick, populateClickOnlyAction) {
        this.a11yClickSupport = true;
        this.updateEventInfoForA11yClick = updateEventInfoForA11yClick;
        this.preventDefaultForA11yClick = preventDefaultForA11yClick;
        this.populateClickOnlyAction = populateClickOnlyAction;
    }
};
var Restriction;
(function (Restriction2) {
    Restriction2[Restriction2["I_AM_THE_JSACTION_FRAMEWORK"] = 0] = "I_AM_THE_JSACTION_FRAMEWORK";
})(Restriction || (Restriction = {}));
var Dispatcher = class {
    dispatchDelegate;
    // The ActionResolver to use to resolve actions.
    actionResolver;
    /** The replayer function to be called when there are queued events. */
    eventReplayer;
    /** Whether the event replay is scheduled. */
    eventReplayScheduled = false;
    /** The queue of events. */
    replayEventInfoWrappers = [];
    /**
     * Options are:
     *   - `eventReplayer`: When the event contract dispatches replay events
     *      to the Dispatcher, the Dispatcher collects them and in the next tick
     *      dispatches them to the `eventReplayer`. Defaults to dispatching to `dispatchDelegate`.
     * @param dispatchDelegate A function that should handle dispatching an `EventInfoWrapper` to handlers.
     */
    constructor(dispatchDelegate, { actionResolver, eventReplayer } = {}) {
        this.dispatchDelegate = dispatchDelegate;
        this.actionResolver = actionResolver;
        this.eventReplayer = eventReplayer;
    }
    /**
     * Receives an event or the event queue from the EventContract. The event
     * queue is copied and it attempts to replay.
     * If event info is passed in it looks for an action handler that can handle
     * the given event.  If there is no handler registered queues the event and
     * checks if a loader is registered for the given namespace. If so, calls it.
     *
     * Alternatively, if in global dispatch mode, calls all registered global
     * handlers for the appropriate event type.
     *
     * The three functionalities of this call are deliberately not split into
     * three methods (and then declared as an abstract interface), because the
     * interface is used by EventContract, which lives in a different jsbinary.
     * Therefore the interface between the three is defined entirely in terms that
     * are invariant under jscompiler processing (Function and Array, as opposed
     * to a custom type with method names).
     *
     * @param eventInfo The info for the event that triggered this call or the
     *     queue of events from EventContract.
     */
    dispatch(eventInfo) {
        const eventInfoWrapper = new EventInfoWrapper(eventInfo);
        this.actionResolver?.resolveEventType(eventInfo);
        this.actionResolver?.resolveAction(eventInfo);
        const action = eventInfoWrapper.getAction();
        if (action && shouldPreventDefaultBeforeDispatching(action.element, eventInfoWrapper)) {
            preventDefault(eventInfoWrapper.getEvent());
        }
        if (this.eventReplayer && eventInfoWrapper.getIsReplay()) {
            this.scheduleEventInfoWrapperReplay(eventInfoWrapper);
            return;
        }
        this.dispatchDelegate(eventInfoWrapper);
    }
    /**
     * Schedules an `EventInfoWrapper` for replay. The replaying will happen in its own
     * stack once the current flow cedes control. This is done to mimic
     * browser event handling.
     */
    scheduleEventInfoWrapperReplay(eventInfoWrapper) {
        this.replayEventInfoWrappers.push(eventInfoWrapper);
        if (this.eventReplayScheduled) {
            return;
        }
        this.eventReplayScheduled = true;
        Promise.resolve().then(() => {
            this.eventReplayScheduled = false;
            this.eventReplayer(this.replayEventInfoWrappers);
        });
    }
};
function shouldPreventDefaultBeforeDispatching(actionElement, eventInfoWrapper) {
    return actionElement.tagName === "A" && (eventInfoWrapper.getEventType() === EventType.CLICK || eventInfoWrapper.getEventType() === EventType.CLICKMOD);
}
var PROPAGATION_STOPPED_SYMBOL = /* @__PURE__ */ Symbol.for("propagationStopped");
var EventPhase = {
    REPLAY: 101
};
var PREVENT_DEFAULT_ERROR_MESSAGE_DETAILS = " Because event replay occurs after browser dispatch, `preventDefault` would have no effect. You can check whether an event is being replayed by accessing the event phase: `event.eventPhase === EventPhase.REPLAY`.";
var PREVENT_DEFAULT_ERROR_MESSAGE = `\`preventDefault\` called during event replay.`;
var COMPOSED_PATH_ERROR_MESSAGE_DETAILS = " Because event replay occurs after browser dispatch, `composedPath()` will be empty. Iterate parent nodes from `event.target` or `event.currentTarget` if you need to check elements in the event path.";
var COMPOSED_PATH_ERROR_MESSAGE = `\`composedPath\` called during event replay.`;
var EventDispatcher = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(dispatchDelegate, clickModSupport = true) {
        this.dispatchDelegate = dispatchDelegate;
        this.clickModSupport = clickModSupport;
        this.actionResolver = new ActionResolver({
            clickModSupport
        });
        this.dispatcher = new Dispatcher(eventInfoWrapper => {
            this.dispatchToDelegate(eventInfoWrapper);
        }, {
            actionResolver: this.actionResolver
        });
    }
    /**
     * The entrypoint for the `EventContract` dispatch.
     */
    dispatch(eventInfo) {
        this.dispatcher.dispatch(eventInfo);
    }
    /** Internal method that does basic disaptching. */
    dispatchToDelegate(eventInfoWrapper) {
        if (eventInfoWrapper.getIsReplay()) {
            prepareEventForReplay(eventInfoWrapper);
        }
        prepareEventForBubbling(eventInfoWrapper);
        while (eventInfoWrapper.getAction()) {
            prepareEventForDispatch(eventInfoWrapper);
            if (isCaptureEventType(eventInfoWrapper.getEventType()) && eventInfoWrapper.getAction().element !== eventInfoWrapper.getTargetElement()) {
                return;
            }
            this.dispatchDelegate(eventInfoWrapper.getEvent(), eventInfoWrapper.getAction().name);
            if (propagationStopped(eventInfoWrapper)) {
                return;
            }
            this.actionResolver.resolveParentAction(eventInfoWrapper.eventInfo);
        }
    }
};
function prepareEventForBubbling(eventInfoWrapper) {
    const event = eventInfoWrapper.getEvent();
    const originalStopPropagation = eventInfoWrapper.getEvent().stopPropagation.bind(event);
    const stopPropagation = () => {
        event[PROPAGATION_STOPPED_SYMBOL] = true;
        originalStopPropagation();
    };
    patchEventInstance(event, "stopPropagation", stopPropagation);
    patchEventInstance(event, "stopImmediatePropagation", stopPropagation);
}
function propagationStopped(eventInfoWrapper) {
    const event = eventInfoWrapper.getEvent();
    return !!event[PROPAGATION_STOPPED_SYMBOL];
}
function prepareEventForReplay(eventInfoWrapper) {
    const event = eventInfoWrapper.getEvent();
    const target = eventInfoWrapper.getTargetElement();
    const originalPreventDefault = event.preventDefault.bind(event);
    patchEventInstance(event, "target", target);
    patchEventInstance(event, "eventPhase", EventPhase.REPLAY);
    patchEventInstance(event, "preventDefault", () => {
        originalPreventDefault();
        throw new Error(PREVENT_DEFAULT_ERROR_MESSAGE + (ngDevMode ? PREVENT_DEFAULT_ERROR_MESSAGE_DETAILS : ""));
    });
    patchEventInstance(event, "composedPath", () => {
        throw new Error(COMPOSED_PATH_ERROR_MESSAGE + (ngDevMode ? COMPOSED_PATH_ERROR_MESSAGE_DETAILS : ""));
    });
}
function prepareEventForDispatch(eventInfoWrapper) {
    const event = eventInfoWrapper.getEvent();
    const currentTarget = eventInfoWrapper.getAction()?.element;
    if (currentTarget) {
        patchEventInstance(event, "currentTarget", currentTarget, {
            // `currentTarget` is going to get reassigned every dispatch.
            configurable: true
        });
    }
}
function patchEventInstance(event, property, value, { configurable = false } = {}) {
    Object.defineProperty(event, property, {
        value,
        configurable
    });
}
function registerDispatcher$1(eventContract, dispatcher) {
    eventContract.ecrd(eventInfo => {
        dispatcher.dispatch(eventInfo);
    }, Restriction.I_AM_THE_JSACTION_FRAMEWORK);
}
function createEarlyJsactionData(container) {
    const q = [];
    const d = eventInfo => {
        q.push(eventInfo);
    };
    const h = event => {
        d(createEventInfoFromParameters(event.type, event, event.target, container, Date.now()));
    };
    return {
        c: container,
        q,
        et: [],
        etc: [],
        d,
        h
    };
}
function addEvents(earlyJsactionData, types, capture) {
    for (let i = 0; i < types.length; i++) {
        const eventType = types[i];
        const eventTypes = capture ? earlyJsactionData.etc : earlyJsactionData.et;
        eventTypes.push(eventType);
        earlyJsactionData.c.addEventListener(eventType, earlyJsactionData.h, capture);
    }
}
function getQueuedEventInfos(earlyJsactionData) {
    return earlyJsactionData?.q ?? [];
}
function registerDispatcher(earlyJsactionData, dispatcher) {
    if (!earlyJsactionData) {
        return;
    }
    earlyJsactionData.d = dispatcher;
}
function removeAllEventListeners(earlyJsactionData) {
    if (!earlyJsactionData) {
        return;
    }
    removeEventListeners(earlyJsactionData.c, earlyJsactionData.et, earlyJsactionData.h);
    removeEventListeners(earlyJsactionData.c, earlyJsactionData.etc, earlyJsactionData.h, true);
}
function removeEventListeners(container, eventTypes, earlyEventHandler, capture) {
    for (let i = 0; i < eventTypes.length; i++) {
        container.removeEventListener(eventTypes[i], earlyEventHandler, /* useCapture */ capture);
    }
}
var MOUSE_SPECIAL_SUPPORT = false;
var EventContract = class _EventContract {
    static MOUSE_SPECIAL_SUPPORT = MOUSE_SPECIAL_SUPPORT;
    containerManager;
    /**
     * The DOM events which this contract covers. Used to prevent double
     * registration of event types. The value of the map is the
     * internally created DOM event handler function that handles the
     * DOM events. See addEvent().
     *
     */
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    /**
     * The dispatcher function. Events are passed to this function for
     * handling once it was set using the registerDispatcher() method. This is
     * done because the function is passed from another jsbinary, so passing the
     * instance and invoking the method here would require to leave the method
     * unobfuscated.
     */
    dispatcher = null;
    /**
     * The list of suspended `EventInfo` that will be dispatched
     * as soon as the `Dispatcher` is registered.
     */
    queuedEventInfos = [];
    constructor(containerManager) {
        this.containerManager = containerManager;
    }
    handleEvent(eventType, event, container) {
        const eventInfo = createEventInfoFromParameters(/* eventType= */ eventType, /* event= */ event, /* targetElement= */ event.target, /* container= */ container, /* timestamp= */ Date.now());
        this.handleEventInfo(eventInfo);
    }
    /**
     * Handle an `EventInfo`.
     */
    handleEventInfo(eventInfo) {
        if (!this.dispatcher) {
            setIsReplay(eventInfo, true);
            this.queuedEventInfos?.push(eventInfo);
            return;
        }
        this.dispatcher(eventInfo);
    }
    /**
     * Enables jsaction handlers to be called for the event type given by
     * name.
     *
     * If the event is already registered, this does nothing.
     *
     * @param prefixedEventType If supplied, this event is used in
     *     the actual browser event registration instead of the name that is
     *     exposed to jsaction. Use this if you e.g. want users to be able
     *     to subscribe to jsaction="transitionEnd:foo" while the underlying
     *     event is webkitTransitionEnd in one browser and mozTransitionEnd
     *     in another.
     *
     * @param passive A boolean value that, if `true`, indicates that the event
     *     handler will never call `preventDefault()`.
     */
    addEvent(eventType, prefixedEventType, passive) {
        if (eventType in this.eventHandlers || !this.containerManager) {
            return;
        }
        if (!_EventContract.MOUSE_SPECIAL_SUPPORT && MOUSE_SPECIAL_EVENT_TYPES.indexOf(eventType) >= 0) {
            return;
        }
        const eventHandler = (eventType2, event, container) => {
            this.handleEvent(eventType2, event, container);
        };
        this.eventHandlers[eventType] = eventHandler;
        const browserEventType = getBrowserEventType(prefixedEventType || eventType);
        if (browserEventType !== eventType) {
            const eventTypes = this.browserEventTypeToExtraEventTypes[browserEventType] || [];
            eventTypes.push(eventType);
            this.browserEventTypeToExtraEventTypes[browserEventType] = eventTypes;
        }
        this.containerManager.addEventListener(browserEventType, element => {
            return event => {
                eventHandler(eventType, event, element);
            };
        }, passive);
    }
    /**
     * Gets the queued early events and replay them using the appropriate handler
     * in the provided event contract. Once all the events are replayed, it cleans
     * up the early contract.
     */
    replayEarlyEvents(earlyJsactionData = window._ejsa) {
        if (!earlyJsactionData) {
            return;
        }
        this.replayEarlyEventInfos(earlyJsactionData.q);
        removeAllEventListeners(earlyJsactionData);
        delete window._ejsa;
    }
    /**
     * Replays all the early `EventInfo` objects, dispatching them through the normal
     * `EventContract` flow.
     */
    replayEarlyEventInfos(earlyEventInfos) {
        for (let i = 0; i < earlyEventInfos.length; i++) {
            const earlyEventInfo = earlyEventInfos[i];
            const eventTypes = this.getEventTypesForBrowserEventType(earlyEventInfo.eventType);
            for (let j = 0; j < eventTypes.length; j++) {
                const eventInfo = cloneEventInfo(earlyEventInfo);
                setEventType(eventInfo, eventTypes[j]);
                this.handleEventInfo(eventInfo);
            }
        }
    }
    /**
     * Returns all JSAction event types that have been registered for a given
     * browser event type.
     */
    getEventTypesForBrowserEventType(browserEventType) {
        const eventTypes = [];
        if (this.eventHandlers[browserEventType]) {
            eventTypes.push(browserEventType);
        }
        if (this.browserEventTypeToExtraEventTypes[browserEventType]) {
            eventTypes.push(...this.browserEventTypeToExtraEventTypes[browserEventType]);
        }
        return eventTypes;
    }
    /**
     * Returns the event handler function for a given event type.
     */
    handler(eventType) {
        return this.eventHandlers[eventType];
    }
    /**
     * Cleans up the event contract. This resets all of the `EventContract`'s
     * internal state. Users are responsible for not using this `EventContract`
     * after it has been cleaned up.
     */
    cleanUp() {
        this.containerManager?.cleanUp();
        this.containerManager = null;
        this.eventHandlers = {};
        this.browserEventTypeToExtraEventTypes = {};
        this.dispatcher = null;
        this.queuedEventInfos = [];
    }
    /**
     * Register a dispatcher function. Event info of each event mapped to
     * a jsaction is passed for handling to this callback. The queued
     * events are passed as well to the dispatcher for later replaying
     * once the dispatcher is registered. Clears the event queue to null.
     *
     * @param dispatcher The dispatcher function.
     * @param restriction
     */
    registerDispatcher(dispatcher, restriction) {
        this.ecrd(dispatcher, restriction);
    }
    /**
     * Unrenamed alias for registerDispatcher. Necessary for any codebases that
     * split the `EventContract` and `Dispatcher` code into different compilation
     * units.
     */
    ecrd(dispatcher, restriction) {
        this.dispatcher = dispatcher;
        if (this.queuedEventInfos?.length) {
            for (let i = 0; i < this.queuedEventInfos.length; i++) {
                this.handleEventInfo(this.queuedEventInfos[i]);
            }
            this.queuedEventInfos = null;
        }
    }
};
function bootstrapAppScopedEarlyEventContract(container, appId, bubbleEventTypes, captureEventTypes, dataContainer = window) {
    const earlyJsactionData = createEarlyJsactionData(container);
    if (!dataContainer._ejsas) {
        dataContainer._ejsas = {};
    }
    dataContainer._ejsas[appId] = earlyJsactionData;
    addEvents(earlyJsactionData, bubbleEventTypes);
    addEvents(earlyJsactionData, captureEventTypes, /* capture= */ true);
}
function getAppScopedQueuedEventInfos(appId, dataContainer = window) {
    return getQueuedEventInfos(dataContainer._ejsas?.[appId]);
}
function registerAppScopedDispatcher(restriction, appId, dispatcher, dataContainer = window) {
    registerDispatcher(dataContainer._ejsas?.[appId], dispatcher);
}
function removeAllAppScopedEventListeners(appId, dataContainer = window) {
    removeAllEventListeners(dataContainer._ejsas?.[appId]);
}
function clearAppScopedEarlyEventContract(appId, dataContainer = window) {
    if (!dataContainer._ejsas) {
        return;
    }
    dataContainer._ejsas[appId] = void 0;
}
export { Attribute, getDefaulted, isCaptureEventType, isEarlyEventType, EventContractContainer, EventInfoWrapper, EventPhase, EventDispatcher, registerDispatcher$1, EventContract, bootstrapAppScopedEarlyEventContract, getAppScopedQueuedEventInfos, registerAppScopedDispatcher, removeAllAppScopedEventListeners, clearAppScopedEarlyEventContract };
/*! Bundled license information:

@angular/core/fesm2022/attribute.mjs:
@angular/core/fesm2022/primitives/event-dispatch.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/ 
