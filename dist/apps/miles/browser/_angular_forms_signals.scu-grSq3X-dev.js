import { __async, __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/forms/fesm2022/signals.mjs
import { httpResource } from "@angular/common/http";
import * as i0 from "@angular/core";
import { computed, untracked, ɵSIGNAL as _SIGNAL, inject, Injector, Renderer2, signal, ElementRef, effect, afterNextRender, DestroyRef, Directive, Input, reflectComponentType, OutputEmitterRef, EventEmitter, runInInjectionContext, linkedSignal, APP_ID, ɵisPromise as _isPromise, resource } from "@angular/core";
import { Validators, NG_VALUE_ACCESSOR, NgControl } from "@angular/forms";
import { SIGNAL } from "@angular/core/primitives/signals";
function isArray(value) {
    return Array.isArray(value);
}
function isObject(value) {
    return (typeof value === "object" || typeof value === "function") && value != null;
}
function reduceChildren(node, initialValue, fn, shortCircuit) {
    const childrenMap = node.structure.childrenMap();
    if (!childrenMap) {
        return initialValue;
    }
    let value = initialValue;
    for (const child of childrenMap.values()) {
        if (shortCircuit?.(value)) {
            break;
        }
        value = fn(child, value);
    }
    return value;
}
function shortCircuitFalse(value) {
    return !value;
}
function shortCircuitTrue(value) {
    return value;
}
function calculateValidationSelfStatus(state) {
    if (state.errors().length > 0) {
        return "invalid";
    }
    if (state.pending()) {
        return "unknown";
    }
    return "valid";
}
var FieldValidationState = class {
    node;
    constructor(node) {
        this.node = node;
    }
    /**
     * The full set of synchronous tree errors visible to this field. This includes ones that are
     * targeted at a descendant field rather than at this field.
     */
    rawSyncTreeErrors = computed(() => {
        if (this.shouldSkipValidation()) {
            return [];
        }
        return [...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context), ...(this.node.structure.parent?.validationState.rawSyncTreeErrors() ?? [])];
    }, ...(ngDevMode ? [{
            debugName: "rawSyncTreeErrors"
        }] : []));
    /**
     * The full set of synchronous errors for this field, including synchronous tree errors and server
     * errors. Server errors are considered "synchronous" because they are imperatively added. From
     * the perspective of the field state they are either there or not, they are never in a pending
     * state.
     */
    syncErrors = computed(() => {
        if (this.shouldSkipValidation()) {
            return [];
        }
        return [...this.node.logicNode.logic.syncErrors.compute(this.node.context), ...this.syncTreeErrors(), ...normalizeErrors(this.node.submitState.serverErrors())];
    }, ...(ngDevMode ? [{
            debugName: "syncErrors"
        }] : []));
    /**
     * Whether the field is considered valid according solely to its synchronous validators.
     * Errors resulting from a previous submit attempt are also considered for this state.
     */
    syncValid = computed(() => {
        if (this.shouldSkipValidation()) {
            return true;
        }
        return reduceChildren(this.node, this.syncErrors().length === 0, (child, value) => value && child.validationState.syncValid(), shortCircuitFalse);
    }, ...(ngDevMode ? [{
            debugName: "syncValid"
        }] : []));
    /**
     * The synchronous tree errors visible to this field that are specifically targeted at this field
     * rather than a descendant.
     */
    syncTreeErrors = computed(() => this.rawSyncTreeErrors().filter(err => err.field === this.node.fieldProxy), ...(ngDevMode ? [{
            debugName: "syncTreeErrors"
        }] : []));
    /**
     * The full set of asynchronous tree errors visible to this field. This includes ones that are
     * targeted at a descendant field rather than at this field, as well as sentinel 'pending' values
     * indicating that the validator is still running and an error could still occur.
     */
    rawAsyncErrors = computed(() => {
        if (this.shouldSkipValidation()) {
            return [];
        }
        return [
            // TODO: add field in `validateAsync` and remove this map
            ...this.node.logicNode.logic.asyncErrors.compute(this.node.context),
            // TODO: does it make sense to filter this to errors in this subtree?
            ...(this.node.structure.parent?.validationState.rawAsyncErrors() ?? [])
        ];
    }, ...(ngDevMode ? [{
            debugName: "rawAsyncErrors"
        }] : []));
    /**
     * The asynchronous tree errors visible to this field that are specifically targeted at this field
     * rather than a descendant. This also includes all 'pending' sentinel values, since those could
     * theoretically result in errors for this field.
     */
    asyncErrors = computed(() => {
        if (this.shouldSkipValidation()) {
            return [];
        }
        return this.rawAsyncErrors().filter(err => err === "pending" || err.field === this.node.fieldProxy);
    }, ...(ngDevMode ? [{
            debugName: "asyncErrors"
        }] : []));
    /**
     * The combined set of all errors that currently apply to this field.
     */
    errors = computed(() => [...this.syncErrors(), ...this.asyncErrors().filter(err => err !== "pending")], ...(ngDevMode ? [{
            debugName: "errors"
        }] : []));
    errorSummary = computed(() => reduceChildren(this.node, this.errors(), (child, result) => [...result, ...child.errorSummary()]), ...(ngDevMode ? [{
            debugName: "errorSummary"
        }] : []));
    /**
     * Whether this field has any asynchronous validators still pending.
     */
    pending = computed(() => reduceChildren(this.node, this.asyncErrors().includes("pending"), (child, value) => value || child.validationState.asyncErrors().includes("pending")), ...(ngDevMode ? [{
            debugName: "pending"
        }] : []));
    /**
     * The validation status of the field.
     * - The status is 'valid' if neither the field nor any of its children has any errors or pending
     *   validators.
     * - The status is 'invalid' if the field or any of its children has an error
     *   (regardless of pending validators)
     * - The status is 'unknown' if neither the field nor any of its children has any errors,
     *   but the field or any of its children does have a pending validator.
     *
     * A field is considered valid if *all* of the following are true:
     *  - It has no errors or pending validators
     *  - All of its children are considered valid
     * A field is considered invalid if *any* of the following are true:
     *  - It has an error
     *  - Any of its children is considered invalid
     * A field is considered to have unknown validity status if it is not valid or invalid.
     */
    status = computed(() => {
        if (this.shouldSkipValidation()) {
            return "valid";
        }
        let ownStatus = calculateValidationSelfStatus(this);
        return reduceChildren(this.node, ownStatus, (child, value) => {
            if (value === "invalid" || child.validationState.status() === "invalid") {
                return "invalid";
            }
            else if (value === "unknown" || child.validationState.status() === "unknown") {
                return "unknown";
            }
            return "valid";
        }, v => v === "invalid");
    }, ...(ngDevMode ? [{
            debugName: "status"
        }] : []));
    /**
     * Whether the field is considered valid.
     *
     * A field is considered valid if *all* of the following are true:
     *  - It has no errors or pending validators
     *  - All of its children are considered valid
     *
     * Note: `!valid()` is *not* the same as `invalid()`. Both `valid()` and `invalid()` can be false
     * if there are currently no errors, but validators are still pending.
     */
    valid = computed(() => this.status() === "valid", ...(ngDevMode ? [{
            debugName: "valid"
        }] : []));
    /**
     * Whether the field is considered invalid.
     *
     * A field is considered invalid if *any* of the following are true:
     *  - It has an error
     *  - Any of its children is considered invalid
     *
     * Note: `!invalid()` is *not* the same as `valid()`. Both `valid()` and `invalid()` can be false
     * if there are currently no errors, but validators are still pending.
     */
    invalid = computed(() => this.status() === "invalid", ...(ngDevMode ? [{
            debugName: "invalid"
        }] : []));
    /**
     * Indicates whether validation should be skipped for this field because it is hidden, disabled,
     * or readonly.
     */
    shouldSkipValidation = computed(() => this.node.hidden() || this.node.disabled() || this.node.readonly(), ...(ngDevMode ? [{
            debugName: "shouldSkipValidation"
        }] : []));
};
function normalizeErrors(error) {
    if (error === void 0) {
        return [];
    }
    if (isArray(error)) {
        return error;
    }
    return [error];
}
function addDefaultField(errors, field) {
    if (isArray(errors)) {
        for (const error of errors) {
            error.field ??= field;
        }
    }
    else if (errors) {
        errors.field ??= field;
    }
    return errors;
}
var DYNAMIC = Symbol();
var IGNORED = Symbol();
var AbstractLogic = class {
    predicates;
    /** The set of logic functions that contribute to the value of the associated state. */
    fns = [];
    constructor(predicates) {
        this.predicates = predicates;
    }
    /** Registers a logic function with this logic instance. */
    push(logicFn) {
        this.fns.push(wrapWithPredicates(this.predicates, logicFn));
    }
    /**
     * Merges in the logic from another logic instance, subject to the predicates of both the other
     * instance and this instance.
     */
    mergeIn(other) {
        const fns = this.predicates ? other.fns.map(fn => wrapWithPredicates(this.predicates, fn)) : other.fns;
        this.fns.push(...fns);
    }
};
var BooleanOrLogic = class extends AbstractLogic {
    get defaultValue() {
        return false;
    }
    compute(arg) {
        return this.fns.some(f => {
            const result = f(arg);
            return result && result !== IGNORED;
        });
    }
};
var ArrayMergeIgnoreLogic = class _ArrayMergeIgnoreLogic extends AbstractLogic {
    ignore;
    /** Creates an instance of this class that ignores `null` values. */
    static ignoreNull(predicates) {
        return new _ArrayMergeIgnoreLogic(predicates, e => e === null);
    }
    constructor(predicates, ignore) {
        super(predicates);
        this.ignore = ignore;
    }
    get defaultValue() {
        return [];
    }
    compute(arg) {
        return this.fns.reduce((prev, f) => {
            const value = f(arg);
            if (value === void 0 || value === IGNORED) {
                return prev;
            }
            else if (isArray(value)) {
                return [...prev, ...(this.ignore ? value.filter(e => !this.ignore(e)) : value)];
            }
            else {
                if (this.ignore && this.ignore(value)) {
                    return prev;
                }
                return [...prev, value];
            }
        }, []);
    }
};
var ArrayMergeLogic = class extends ArrayMergeIgnoreLogic {
    constructor(predicates) {
        super(predicates, void 0);
    }
};
var AggregatePropertyMergeLogic = class extends AbstractLogic {
    key;
    get defaultValue() {
        return this.key.getInitial();
    }
    constructor(predicates, key) {
        super(predicates);
        this.key = key;
    }
    compute(ctx) {
        if (this.fns.length === 0) {
            return this.key.getInitial();
        }
        let acc = this.key.getInitial();
        for (let i = 0; i < this.fns.length; i++) {
            const item = this.fns[i](ctx);
            if (item !== IGNORED) {
                acc = this.key.reduce(acc, item);
            }
        }
        return acc;
    }
};
function wrapWithPredicates(predicates, logicFn) {
    if (predicates.length === 0) {
        return logicFn;
    }
    return arg => {
        for (const predicate of predicates) {
            let predicateField = arg.stateOf(predicate.path);
            const depthDiff = untracked(predicateField.structure.pathKeys).length - predicate.depth;
            for (let i = 0; i < depthDiff; i++) {
                predicateField = predicateField.structure.parent;
            }
            if (!predicate.fn(predicateField.context)) {
                return IGNORED;
            }
        }
        return logicFn(arg);
    };
}
var LogicContainer = class {
    predicates;
    /** Logic that determines if the field is hidden. */
    hidden;
    /** Logic that determines reasons for the field being disabled. */
    disabledReasons;
    /** Logic that determines if the field is read-only. */
    readonly;
    /** Logic that produces synchronous validation errors for the field. */
    syncErrors;
    /** Logic that produces synchronous validation errors for the field's subtree. */
    syncTreeErrors;
    /** Logic that produces asynchronous validation results (errors or 'pending'). */
    asyncErrors;
    /** A map of aggregate properties to the `AbstractLogic` instances that compute their values. */
    aggregateProperties = /* @__PURE__ */ new Map();
    /** A map of property keys to the factory functions that create their values. */
    propertyFactories = /* @__PURE__ */ new Map();
    /**
     * Constructs a new `Logic` container.
     * @param predicates An array of predicates that must all be true for the logic
     *   functions within this container to be active.
     */
    constructor(predicates) {
        this.predicates = predicates;
        this.hidden = new BooleanOrLogic(predicates);
        this.disabledReasons = new ArrayMergeLogic(predicates);
        this.readonly = new BooleanOrLogic(predicates);
        this.syncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
        this.syncTreeErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
        this.asyncErrors = ArrayMergeIgnoreLogic.ignoreNull(predicates);
    }
    /** Checks whether there is logic for the given aggregate property. */
    hasAggregateProperty(prop) {
        return this.aggregateProperties.has(prop);
    }
    /**
     * Gets an iterable of [aggregate property, logic function] pairs.
     * @returns An iterable of aggregate property entries.
     */
    getAggregatePropertyEntries() {
        return this.aggregateProperties.entries();
    }
    /**
     * Gets an iterable of [property, value factory function] pairs.
     * @returns An iterable of property factory entries.
     */
    getPropertyFactoryEntries() {
        return this.propertyFactories.entries();
    }
    /**
     * Retrieves or creates the `AbstractLogic` for a given aggregate property.
     * @param prop The `AggregateProperty` for which to get the logic.
     * @returns The `AbstractLogic` associated with the key.
     */
    getAggregateProperty(prop) {
        if (!this.aggregateProperties.has(prop)) {
            this.aggregateProperties.set(prop, new AggregatePropertyMergeLogic(this.predicates, prop));
        }
        return this.aggregateProperties.get(prop);
    }
    /**
     * Adds a factory function for a given property.
     * @param prop The `Property` to associate the factory with.
     * @param factory The factory function.
     * @throws If a factory is already defined for the given key.
     */
    addPropertyFactory(prop, factory) {
        if (this.propertyFactories.has(prop)) {
            throw new Error(`Can't define value twice for the same Property`);
        }
        this.propertyFactories.set(prop, factory);
    }
    /**
     * Merges logic from another `Logic` instance into this one.
     * @param other The `Logic` instance to merge from.
     */
    mergeIn(other) {
        this.hidden.mergeIn(other.hidden);
        this.disabledReasons.mergeIn(other.disabledReasons);
        this.readonly.mergeIn(other.readonly);
        this.syncErrors.mergeIn(other.syncErrors);
        this.syncTreeErrors.mergeIn(other.syncTreeErrors);
        this.asyncErrors.mergeIn(other.asyncErrors);
        for (const [prop, propertyLogic] of other.getAggregatePropertyEntries()) {
            this.getAggregateProperty(prop).mergeIn(propertyLogic);
        }
        for (const [prop, propertyFactory] of other.getPropertyFactoryEntries()) {
            this.addPropertyFactory(prop, propertyFactory);
        }
    }
};
var boundPathDepth = 0;
function getBoundPathDepth() {
    return boundPathDepth;
}
function setBoundPathDepthForResolution(fn, depth) {
    return (...args) => {
        try {
            boundPathDepth = depth;
            return fn(...args);
        }
        finally {
            boundPathDepth = 0;
        }
    };
}
var AbstractLogicNodeBuilder = class {
    depth;
    constructor(depth) {
        this.depth = depth;
    }
    /**
     * Builds the `LogicNode` from the accumulated rules and child builders.
     * @returns The constructed `LogicNode`.
     */
    build() {
        return new LeafLogicNode(this, [], 0);
    }
};
var LogicNodeBuilder = class _LogicNodeBuilder extends AbstractLogicNodeBuilder {
    constructor(depth) {
        super(depth);
    }
    /**
     * The current `NonMergeableLogicNodeBuilder` being used to add rules directly to this
     * `LogicNodeBuilder`. Do not use this directly, call `getCurrent()` which will create a current
     * builder if there is none.
     */
    current;
    /**
     * Stores all builders that contribute to this node, along with any predicates
     * that gate their application.
     */
    all = [];
    addHiddenRule(logic) {
        this.getCurrent().addHiddenRule(logic);
    }
    addDisabledReasonRule(logic) {
        this.getCurrent().addDisabledReasonRule(logic);
    }
    addReadonlyRule(logic) {
        this.getCurrent().addReadonlyRule(logic);
    }
    addSyncErrorRule(logic) {
        this.getCurrent().addSyncErrorRule(logic);
    }
    addSyncTreeErrorRule(logic) {
        this.getCurrent().addSyncTreeErrorRule(logic);
    }
    addAsyncErrorRule(logic) {
        this.getCurrent().addAsyncErrorRule(logic);
    }
    addAggregatePropertyRule(key, logic) {
        this.getCurrent().addAggregatePropertyRule(key, logic);
    }
    addPropertyFactory(key, factory) {
        this.getCurrent().addPropertyFactory(key, factory);
    }
    getChild(key) {
        return this.getCurrent().getChild(key);
    }
    hasLogic(builder) {
        if (this === builder) {
            return true;
        }
        return this.all.some(({ builder: subBuilder }) => subBuilder.hasLogic(builder));
    }
    /**
     * Merges logic from another `LogicNodeBuilder` into this one.
     * If a `predicate` is provided, all logic from the `other` builder will only apply
     * when the predicate evaluates to true.
     * @param other The `LogicNodeBuilder` to merge in.
     * @param predicate An optional predicate to gate the merged logic.
     */
    mergeIn(other, predicate) {
        if (predicate) {
            this.all.push({
                builder: other,
                predicate: {
                    fn: setBoundPathDepthForResolution(predicate.fn, this.depth),
                    path: predicate.path
                }
            });
        }
        else {
            this.all.push({
                builder: other
            });
        }
        this.current = void 0;
    }
    /**
     * Gets the current `NonMergeableLogicNodeBuilder` for adding rules directly to this
     * `LogicNodeBuilder`. If no current builder exists, a new one is created.
     * The current builder is cleared whenever `mergeIn` is called to preserve the order
     * of rules when merging separate builder trees.
     * @returns The current `NonMergeableLogicNodeBuilder`.
     */
    getCurrent() {
        if (this.current === void 0) {
            this.current = new NonMergeableLogicNodeBuilder(this.depth);
            this.all.push({
                builder: this.current
            });
        }
        return this.current;
    }
    /**
     * Creates a new root `LogicNodeBuilder`.
     * @returns A new instance of `LogicNodeBuilder`.
     */
    static newRoot() {
        return new _LogicNodeBuilder(0);
    }
};
var NonMergeableLogicNodeBuilder = class extends AbstractLogicNodeBuilder {
    /** The collection of logic rules directly added to this builder. */
    logic = new LogicContainer([]);
    /**
     * A map of child property keys to their corresponding `LogicNodeBuilder` instances.
     * This allows for building a tree of logic.
     */
    children = /* @__PURE__ */ new Map();
    constructor(depth) {
        super(depth);
    }
    addHiddenRule(logic) {
        this.logic.hidden.push(setBoundPathDepthForResolution(logic, this.depth));
    }
    addDisabledReasonRule(logic) {
        this.logic.disabledReasons.push(setBoundPathDepthForResolution(logic, this.depth));
    }
    addReadonlyRule(logic) {
        this.logic.readonly.push(setBoundPathDepthForResolution(logic, this.depth));
    }
    addSyncErrorRule(logic) {
        this.logic.syncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
    }
    addSyncTreeErrorRule(logic) {
        this.logic.syncTreeErrors.push(setBoundPathDepthForResolution(logic, this.depth));
    }
    addAsyncErrorRule(logic) {
        this.logic.asyncErrors.push(setBoundPathDepthForResolution(logic, this.depth));
    }
    addAggregatePropertyRule(key, logic) {
        this.logic.getAggregateProperty(key).push(setBoundPathDepthForResolution(logic, this.depth));
    }
    addPropertyFactory(key, factory) {
        this.logic.addPropertyFactory(key, setBoundPathDepthForResolution(factory, this.depth));
    }
    getChild(key) {
        if (!this.children.has(key)) {
            this.children.set(key, new LogicNodeBuilder(this.depth + 1));
        }
        return this.children.get(key);
    }
    hasLogic(builder) {
        return this === builder;
    }
};
var LeafLogicNode = class _LeafLogicNode {
    builder;
    predicates;
    depth;
    /** The computed logic for this node. */
    logic;
    /**
     * Constructs a `LeafLogicNode`.
     * @param builder The `AbstractLogicNodeBuilder` from which to derive the logic.
     *   If undefined, an empty `Logic` instance is created.
     * @param predicates An array of predicates that gate the logic from the builder.
     */
    constructor(builder, predicates, depth) {
        this.builder = builder;
        this.predicates = predicates;
        this.depth = depth;
        this.logic = builder ? createLogic(builder, predicates, depth) : new LogicContainer([]);
    }
    // TODO: cache here, or just rely on the user of this API to do caching?
    /**
     * Retrieves the `LogicNode` for a child identified by the given property key.
     * @param key The property key of the child.
     * @returns The `LogicNode` for the specified child.
     */
    getChild(key) {
        const childBuilders = this.builder ? getAllChildBuilders(this.builder, key) : [];
        if (childBuilders.length === 0) {
            return new _LeafLogicNode(void 0, [], this.depth + 1);
        }
        else if (childBuilders.length === 1) {
            const { builder, predicates } = childBuilders[0];
            return new _LeafLogicNode(builder, [...this.predicates, ...predicates.map(p => bindLevel(p, this.depth))], this.depth + 1);
        }
        else {
            const builtNodes = childBuilders.map(({ builder, predicates }) => new _LeafLogicNode(builder, [...this.predicates, ...predicates.map(p => bindLevel(p, this.depth))], this.depth + 1));
            return new CompositeLogicNode(builtNodes);
        }
    }
    /**
     * Checks whether the logic from a particular `AbstractLogicNodeBuilder` has been merged into this
     * node.
     * @param builder The builder to check for.
     * @returns True if the builder has been merged, false otherwise.
     */
    hasLogic(builder) {
        return this.builder?.hasLogic(builder) ?? false;
    }
};
var CompositeLogicNode = class _CompositeLogicNode {
    all;
    /** The merged logic from all composed nodes. */
    logic;
    /**
     * Constructs a `CompositeLogicNode`.
     * @param all An array of `LogicNode` instances to compose.
     */
    constructor(all) {
        this.all = all;
        this.logic = new LogicContainer([]);
        for (const node of all) {
            this.logic.mergeIn(node.logic);
        }
    }
    /**
     * Retrieves the child `LogicNode` by composing the results of `getChild` from all
     * underlying `LogicNode` instances.
     * @param key The property key of the child.
     * @returns A `CompositeLogicNode` representing the composed child.
     */
    getChild(key) {
        return new _CompositeLogicNode(this.all.flatMap(child => child.getChild(key)));
    }
    /**
     * Checks whether the logic from a particular `AbstractLogicNodeBuilder` has been merged into this
     * node.
     * @param builder The builder to check for.
     * @returns True if the builder has been merged, false otherwise.
     */
    hasLogic(builder) {
        return this.all.some(node => node.hasLogic(builder));
    }
};
function getAllChildBuilders(builder, key) {
    if (builder instanceof LogicNodeBuilder) {
        return builder.all.flatMap(({ builder: builder2, predicate }) => {
            const children = getAllChildBuilders(builder2, key);
            if (predicate) {
                return children.map(({ builder: builder3, predicates }) => ({
                    builder: builder3,
                    predicates: [...predicates, predicate]
                }));
            }
            return children;
        });
    }
    else if (builder instanceof NonMergeableLogicNodeBuilder) {
        if (builder.children.has(key)) {
            return [{
                    builder: builder.children.get(key),
                    predicates: []
                }];
        }
    }
    else {
        throw new Error("Unknown LogicNodeBuilder type");
    }
    return [];
}
function createLogic(builder, predicates, depth) {
    const logic = new LogicContainer(predicates);
    if (builder instanceof LogicNodeBuilder) {
        const builtNodes = builder.all.map(({ builder: builder2, predicate }) => new LeafLogicNode(builder2, predicate ? [...predicates, bindLevel(predicate, depth)] : predicates, depth));
        for (const node of builtNodes) {
            logic.mergeIn(node.logic);
        }
    }
    else if (builder instanceof NonMergeableLogicNodeBuilder) {
        logic.mergeIn(builder.logic);
    }
    else {
        throw new Error("Unknown LogicNodeBuilder type");
    }
    return logic;
}
function bindLevel(predicate, depth) {
    return __spreadProps(__spreadValues({}, predicate), {
        depth
    });
}
var PATH = Symbol("PATH");
var FieldPathNode = class _FieldPathNode {
    keys;
    logic;
    /** The root path node from which this path node is descended. */
    root;
    /**
     * A map containing all child path nodes that have been created on this path.
     * Child path nodes are created automatically on first access if they do not exist already.
     */
    children = /* @__PURE__ */ new Map();
    /**
     * A proxy that wraps the path node, allowing navigation to its child paths via property access.
     */
    fieldPathProxy = new Proxy(this, FIELD_PATH_PROXY_HANDLER);
    constructor(keys, logic, root) {
        this.keys = keys;
        this.logic = logic;
        this.root = root ?? this;
    }
    /**
     * Gets the special path node containing the per-element logic that applies to *all* children paths.
     */
    get element() {
        return this.getChild(DYNAMIC);
    }
    /**
     * Gets the path node for the given child property key.
     * Child paths are created automatically on first access if they do not exist already.
     */
    getChild(key) {
        if (!this.children.has(key)) {
            this.children.set(key, new _FieldPathNode([...this.keys, key], this.logic.getChild(key), this.root));
        }
        return this.children.get(key);
    }
    /**
     * Merges in logic from another schema to this one.
     * @param other The other schema to merge in the logic from
     * @param predicate A predicate indicating when the merged in logic should be active.
     */
    mergeIn(other, predicate) {
        const path = other.compile();
        this.logic.mergeIn(path.logic, predicate);
    }
    /** Extracts the underlying path node from the given path proxy. */
    static unwrapFieldPath(formPath) {
        return formPath[PATH];
    }
    /** Creates a new root path node to be passed in to a schema function. */
    static newRoot() {
        return new _FieldPathNode([], LogicNodeBuilder.newRoot(), void 0);
    }
};
var FIELD_PATH_PROXY_HANDLER = {
    get(node, property2) {
        if (property2 === PATH) {
            return node;
        }
        return node.getChild(property2).fieldPathProxy;
    }
};
var currentCompilingNode = void 0;
var compiledSchemas = /* @__PURE__ */ new Map();
var SchemaImpl = class _SchemaImpl {
    schemaFn;
    constructor(schemaFn) {
        this.schemaFn = schemaFn;
    }
    /**
     * Compiles this schema within the current root compilation context. If the schema was previously
     * compiled within this context, we reuse the cached FieldPathNode, otherwise we create a new one
     * and cache it in the compilation context.
     */
    compile() {
        if (compiledSchemas.has(this)) {
            return compiledSchemas.get(this);
        }
        const path = FieldPathNode.newRoot();
        compiledSchemas.set(this, path);
        let prevCompilingNode = currentCompilingNode;
        try {
            currentCompilingNode = path;
            this.schemaFn(path.fieldPathProxy);
        }
        finally {
            currentCompilingNode = prevCompilingNode;
        }
        return path;
    }
    /**
     * Creates a SchemaImpl from the given SchemaOrSchemaFn.
     */
    static create(schema2) {
        if (schema2 instanceof _SchemaImpl) {
            return schema2;
        }
        return new _SchemaImpl(schema2);
    }
    /**
     * Compiles the given schema in a fresh compilation context. This clears the cached results of any
     * previous compilations.
     */
    static rootCompile(schema2) {
        try {
            compiledSchemas.clear();
            if (schema2 === void 0) {
                return FieldPathNode.newRoot();
            }
            if (schema2 instanceof _SchemaImpl) {
                return schema2.compile();
            }
            return new _SchemaImpl(schema2).compile();
        }
        finally {
            compiledSchemas.clear();
        }
    }
};
function isSchemaOrSchemaFn(value) {
    return value instanceof SchemaImpl || typeof value === "function";
}
function assertPathIsCurrent(path) {
    if (currentCompilingNode !== FieldPathNode.unwrapFieldPath(path).root) {
        throw new Error(`A FieldPath can only be used directly within the Schema that owns it, **not** outside of it or within a sub-schema.`);
    }
}
var Property = class {
    brand;
    /** Use {@link createProperty}. */
    constructor() { }
};
function createProperty() {
    return new Property();
}
var AggregateProperty = class {
    reduce;
    getInitial;
    brand;
    /** Use {@link reducedProperty}. */
    constructor(reduce, getInitial) {
        this.reduce = reduce;
        this.getInitial = getInitial;
    }
};
function reducedProperty(reduce, getInitial) {
    return new AggregateProperty(reduce, getInitial);
}
function listProperty() {
    return reducedProperty((acc, item) => item === void 0 ? acc : [...acc, item], () => []);
}
function minProperty() {
    return reducedProperty((prev, next) => {
        if (prev === void 0) {
            return next;
        }
        if (next === void 0) {
            return prev;
        }
        return Math.min(prev, next);
    }, () => void 0);
}
function maxProperty() {
    return reducedProperty((prev, next) => {
        if (prev === void 0) {
            return next;
        }
        if (next === void 0) {
            return prev;
        }
        return Math.max(prev, next);
    }, () => void 0);
}
function orProperty() {
    return reducedProperty((prev, next) => prev || next, () => false);
}
function andProperty() {
    return reducedProperty((prev, next) => prev && next, () => true);
}
var REQUIRED = orProperty();
var MIN = maxProperty();
var MAX = minProperty();
var MIN_LENGTH = maxProperty();
var MAX_LENGTH = minProperty();
var PATTERN = listProperty();
function disabled(path, logic) {
    assertPathIsCurrent(path);
    const pathNode = FieldPathNode.unwrapFieldPath(path);
    pathNode.logic.addDisabledReasonRule(ctx => {
        let result = true;
        if (typeof logic === "string") {
            result = logic;
        }
        else if (logic) {
            result = logic(ctx);
        }
        if (typeof result === "string") {
            return {
                field: ctx.field,
                message: result
            };
        }
        return result ? {
            field: ctx.field
        } : void 0;
    });
}
function readonly(path, logic = () => true) {
    assertPathIsCurrent(path);
    const pathNode = FieldPathNode.unwrapFieldPath(path);
    pathNode.logic.addReadonlyRule(logic);
}
function hidden(path, logic) {
    assertPathIsCurrent(path);
    const pathNode = FieldPathNode.unwrapFieldPath(path);
    pathNode.logic.addHiddenRule(logic);
}
function validate(path, logic) {
    assertPathIsCurrent(path);
    const pathNode = FieldPathNode.unwrapFieldPath(path);
    pathNode.logic.addSyncErrorRule(ctx => addDefaultField(logic(ctx), ctx.field));
}
function validateTree(path, logic) {
    assertPathIsCurrent(path);
    const pathNode = FieldPathNode.unwrapFieldPath(path);
    pathNode.logic.addSyncTreeErrorRule(ctx => addDefaultField(logic(ctx), ctx.field));
}
function aggregateProperty(path, prop, logic) {
    assertPathIsCurrent(path);
    const pathNode = FieldPathNode.unwrapFieldPath(path);
    pathNode.logic.addAggregatePropertyRule(prop, logic);
}
function property(path, ...rest) {
    assertPathIsCurrent(path);
    let key;
    let factory;
    if (rest.length === 2) {
        [key, factory] = rest;
    }
    else {
        [factory] = rest;
    }
    key ??= createProperty();
    const pathNode = FieldPathNode.unwrapFieldPath(path);
    pathNode.logic.addPropertyFactory(key, factory);
    return key;
}
function validateAsync(path, opts) {
    assertPathIsCurrent(path);
    const pathNode = FieldPathNode.unwrapFieldPath(path);
    const RESOURCE = property(path, ctx => {
        const params = computed(() => {
            const node = ctx.stateOf(path);
            const validationState = node.validationState;
            if (validationState.shouldSkipValidation() || !validationState.syncValid()) {
                return void 0;
            }
            return opts.params(ctx);
        }, ...(ngDevMode ? [{
                debugName: "params"
            }] : []));
        return opts.factory(params);
    });
    pathNode.logic.addAsyncErrorRule(ctx => {
        const res = ctx.state.property(RESOURCE);
        switch (res.status()) {
            case "idle":
                return void 0;
            case "loading":
            case "reloading":
                return "pending";
            case "resolved":
            case "local":
                if (!res.hasValue()) {
                    return void 0;
                }
                const errors = opts.errors(res.value(), ctx);
                return addDefaultField(errors, ctx.field);
            case "error":
                throw res.error();
        }
    });
}
function validateHttp(path, opts) {
    validateAsync(path, {
        params: opts.request,
        factory: request => httpResource(request, opts.options),
        errors: opts.errors
    });
}
var InteropNgControl = class {
    field;
    constructor(field) {
        this.field = field;
    }
    control = this;
    get value() {
        return this.field().value();
    }
    get valid() {
        return this.field().valid();
    }
    get invalid() {
        return this.field().invalid();
    }
    get pending() {
        return this.field().pending();
    }
    get disabled() {
        return this.field().disabled();
    }
    get enabled() {
        return !this.field().disabled();
    }
    get errors() {
        const errors = this.field().errors();
        if (errors.length === 0) {
            return null;
        }
        const errObj = {};
        for (const error of errors) {
            errObj[error.kind] = error;
        }
        return errObj;
    }
    get pristine() {
        return !this.field().dirty();
    }
    get dirty() {
        return this.field().dirty();
    }
    get touched() {
        return this.field().touched();
    }
    get untouched() {
        return !this.field().touched();
    }
    get status() {
        if (this.field().disabled()) {
            return "DISABLED";
        }
        if (this.field().valid()) {
            return "VALID";
        }
        if (this.field().invalid()) {
            return "INVALID";
        }
        if (this.field().pending()) {
            return "PENDING";
        }
        throw Error("AssertionError: unknown form control status");
    }
    valueAccessor = null;
    hasValidator(validator) {
        if (validator === Validators.required) {
            return this.field().property(REQUIRED)();
        }
        return false;
    }
    updateValueAndValidity() { }
};
function privateGetComponentInstance(injector) {
    assertIsNodeInjector(injector);
    if (injector._tNode.directiveStart === 0 || injector._tNode.componentOffset === -1) {
        return void 0;
    }
    return injector._lView[injector._tNode.directiveStart + injector._tNode.componentOffset];
}
function privateSetComponentInput(inputSignal, value) {
    inputSignal[_SIGNAL].applyValueToInputSignal(inputSignal[_SIGNAL], value);
}
function privateIsSignalInput(value) {
    return isInputSignal(value);
}
function privateIsModelInput(value) {
    return isInputSignal(value) && isObject(value) && "subscribe" in value;
}
function privateRunEffect(ref) {
    ref[_SIGNAL].run();
}
function assertIsNodeInjector(injector) {
    if (!("_tNode" in injector)) {
        throw new Error("Expected a Node Injector");
    }
}
function isInputSignal(value) {
    if (!isObject(value) || !(_SIGNAL in value)) {
        return false;
    }
    const node = value[_SIGNAL];
    return isObject(node) && "applyValueToInputSignal" in node;
}
var Control = class _Control {
    /** The injector for this component. */
    injector = inject(Injector);
    renderer = inject(Renderer2);
    /** Whether state synchronization with the field has been setup yet. */
    initialized = false;
    /** The field that is bound to this control. */
    field = signal(void 0, ...(ngDevMode ? [{
            debugName: "field"
        }] : []));
    // If `[control]` is applied to a custom UI control, it wants to synchronize state in the field w/
    // the inputs of that custom control. This is difficult to do in user-land. We use `effect`, but
    // effects don't run before the lifecycle hooks of the component. This is usually okay, but has
    // one significant issue: the UI control's required inputs won't be set in time for those
    // lifecycle hooks to run.
    //
    // Eventually we can build custom functionality for the `Control` directive into the framework,
    // but for now we work around this limitation with a hack. We use an `@Input` instead of a
    // signal-based `input()` for the `[control]` to hook the exact moment inputs are being set,
    // before the important lifecycle hooks of the UI control. We can then initialize all our effects
    // and force them to run immediately, ensuring all required inputs have values.
    set _field(value) {
        this.field.set(value);
        if (!this.initialized) {
            this.initialize();
        }
    }
    /** The field state of the bound field. */
    state = computed(() => this.field()(), ...(ngDevMode ? [{
            debugName: "state"
        }] : []));
    /** The HTMLElement this directive is attached to. */
    el = inject(ElementRef);
    /** The NG_VALUE_ACCESSOR array for the host component. */
    cvaArray = inject(NG_VALUE_ACCESSOR, {
        optional: true
    });
    /** The Cached value for the lazily created interop NgControl. */
    _ngControl;
    /** A fake NgControl provided for better interop with reactive forms. */
    get ngControl() {
        return this._ngControl ??= new InteropNgControl(() => this.state());
    }
    /** The ControlValueAccessor for the host component. */
    get cva() {
        return this.cvaArray?.[0] ?? this._ngControl?.valueAccessor ?? void 0;
    }
    /** Initializes state synchronization between the field and the host UI control. */
    initialize() {
        this.initialized = true;
        const injector = this.injector;
        const cmp = privateGetComponentInstance(injector);
        if (cmp && isShadowedControlComponent(cmp)) {
            return;
        }
        if (cmp && isFormUiControl(cmp)) {
            this.setupCustomUiControl(cmp);
        }
        else if (this.cva !== void 0) {
            this.setupControlValueAccessor(this.cva);
        }
        else if (this.el.nativeElement instanceof HTMLInputElement || this.el.nativeElement instanceof HTMLTextAreaElement || this.el.nativeElement instanceof HTMLSelectElement) {
            this.setupNativeInput(this.el.nativeElement);
        }
        else {
            throw new Error(`Unhandled control?`);
        }
        effect(onCleanup => {
            const fieldNode = this.state();
            fieldNode.nodeState.controls.update(controls => [...controls, this]);
            onCleanup(() => {
                fieldNode.nodeState.controls.update(controls => controls.filter(c => c !== this));
            });
        }, {
            injector: this.injector
        });
    }
    /**
     * Set up state synchronization between the field and a native <input>, <textarea>, or <select>.
     */
    setupNativeInput(input) {
        const inputType = input instanceof HTMLTextAreaElement ? "text" : input instanceof HTMLSelectElement ? "select" : input.type;
        input.addEventListener("input", () => {
            switch (inputType) {
                case "checkbox":
                    this.state().value.set(input.checked);
                    break;
                case "radio":
                    this.state().value.set(input.value);
                    break;
                case "number":
                case "range":
                case "datetime-local":
                    if (typeof this.state().value() === "number") {
                        this.state().value.set(input.valueAsNumber);
                    }
                    else {
                        this.state().value.set(input.value);
                    }
                    break;
                case "date":
                case "month":
                case "week":
                case "time":
                    if (isDateOrNull(this.state().value())) {
                        this.state().value.set(input.valueAsDate);
                    }
                    else if (typeof this.state().value() === "number") {
                        this.state().value.set(input.valueAsNumber);
                    }
                    else {
                        this.state().value.set(input.value);
                    }
                    break;
                default:
                    this.state().value.set(input.value);
                    break;
            }
            this.state().markAsDirty();
        });
        input.addEventListener("blur", () => this.state().markAsTouched());
        this.maybeSynchronize(() => this.state().readonly(), this.withBooleanAttribute(input, "readonly"));
        this.maybeSynchronize(() => this.state().disabled(), this.withBooleanAttribute(input, "disabled"));
        this.maybeSynchronize(() => this.state().name(), this.withAttribute(input, "name"));
        this.maybeSynchronize(this.propertySource(REQUIRED), this.withBooleanAttribute(input, "required"));
        this.maybeSynchronize(this.propertySource(MIN), this.withAttribute(input, "min"));
        this.maybeSynchronize(this.propertySource(MIN_LENGTH), this.withAttribute(input, "minLength"));
        this.maybeSynchronize(this.propertySource(MAX), this.withAttribute(input, "max"));
        this.maybeSynchronize(this.propertySource(MAX_LENGTH), this.withAttribute(input, "maxLength"));
        switch (inputType) {
            case "checkbox":
                this.maybeSynchronize(() => this.state().value(), value => input.checked = value);
                break;
            case "radio":
                this.maybeSynchronize(() => this.state().value(), value => {
                    input.checked = input.value === value;
                });
                break;
            case "select":
                this.maybeSynchronize(() => this.state().value(), value => {
                    afterNextRender(() => input.value = value, {
                        injector: this.injector
                    });
                });
                break;
            case "number":
            case "range":
            case "datetime-local":
                this.maybeSynchronize(() => this.state().value(), value => {
                    if (typeof value === "number") {
                        input.valueAsNumber = value;
                    }
                    else {
                        input.value = value;
                    }
                });
                break;
            case "date":
            case "month":
            case "week":
            case "time":
                this.maybeSynchronize(() => this.state().value(), value => {
                    if (isDateOrNull(value)) {
                        input.valueAsDate = value;
                    }
                    else if (typeof value === "number") {
                        input.valueAsNumber = value;
                    }
                    else {
                        input.value = value;
                    }
                });
                break;
            default:
                this.maybeSynchronize(() => this.state().value(), value => {
                    input.value = value;
                });
                break;
        }
    }
    /** Set up state synchronization between the field and a ControlValueAccessor. */
    setupControlValueAccessor(cva) {
        cva.registerOnChange(value => this.state().value.set(value));
        cva.registerOnTouched(() => this.state().markAsTouched());
        this.maybeSynchronize(() => this.state().value(), value => cva.writeValue(value));
        if (cva.setDisabledState) {
            this.maybeSynchronize(() => this.state().disabled(), value => cva.setDisabledState(value));
        }
        cva.writeValue(this.state().value());
        cva.setDisabledState?.(this.state().disabled());
    }
    /** Set up state synchronization between the field and a FormUiControl. */
    setupCustomUiControl(cmp) {
        let cleanupValue;
        if (isFormValueControl(cmp)) {
            this.maybeSynchronize(() => this.state().value(), withInput(cmp.value));
            cleanupValue = cmp.value.subscribe(newValue => this.state().value.set(newValue));
        }
        else if (isFormCheckboxControl(cmp)) {
            this.maybeSynchronize(() => this.state().value(), withInput(cmp.checked));
            cleanupValue = cmp.checked.subscribe(newValue => this.state().value.set(newValue));
        }
        else {
            throw new Error(`Unknown custom control subtype`);
        }
        this.maybeSynchronize(() => this.state().name(), withInput(cmp.name));
        this.maybeSynchronize(() => this.state().disabled(), withInput(cmp.disabled));
        this.maybeSynchronize(() => this.state().disabledReasons(), withInput(cmp.disabledReasons));
        this.maybeSynchronize(() => this.state().readonly(), withInput(cmp.readonly));
        this.maybeSynchronize(() => this.state().hidden(), withInput(cmp.hidden));
        this.maybeSynchronize(() => this.state().errors(), withInput(cmp.errors));
        if (privateIsModelInput(cmp.touched) || privateIsSignalInput(cmp.touched)) {
            this.maybeSynchronize(() => this.state().touched(), withInput(cmp.touched));
        }
        this.maybeSynchronize(() => this.state().dirty(), withInput(cmp.dirty));
        this.maybeSynchronize(() => this.state().invalid(), withInput(cmp.invalid));
        this.maybeSynchronize(() => this.state().pending(), withInput(cmp.pending));
        this.maybeSynchronize(this.propertySource(REQUIRED), withInput(cmp.required));
        this.maybeSynchronize(this.propertySource(MIN), withInput(cmp.min));
        this.maybeSynchronize(this.propertySource(MIN_LENGTH), withInput(cmp.minLength));
        this.maybeSynchronize(this.propertySource(MAX), withInput(cmp.max));
        this.maybeSynchronize(this.propertySource(MAX_LENGTH), withInput(cmp.maxLength));
        this.maybeSynchronize(this.propertySource(PATTERN), withInput(cmp.pattern));
        let cleanupTouch;
        let cleanupDefaultTouch;
        if (privateIsModelInput(cmp.touched) || isOutputRef(cmp.touched)) {
            cleanupTouch = cmp.touched.subscribe(() => this.state().markAsTouched());
        }
        else {
            const listener = event => {
                const newActiveEl = event.relatedTarget;
                if (!this.el.nativeElement.contains(newActiveEl)) {
                    this.state().markAsTouched();
                }
            };
            this.el.nativeElement.addEventListener("focusout", listener);
            cleanupDefaultTouch = () => this.el.nativeElement.removeEventListener("focusout", listener);
        }
        this.injector.get(DestroyRef).onDestroy(() => {
            cleanupValue?.unsubscribe();
            cleanupTouch?.unsubscribe();
            cleanupDefaultTouch?.();
        });
    }
    /** Synchronize a value from a reactive source to a given sink. */
    maybeSynchronize(source, sink) {
        if (!sink) {
            return void 0;
        }
        const ref = effect(() => {
            const value = source();
            untracked(() => sink(value));
        }, ...(ngDevMode ? [{
                debugName: "ref",
                injector: this.injector
            }] : [{
                injector: this.injector
            }]));
        privateRunEffect(ref);
    }
    /** Creates a reactive value source by reading the given AggregateProperty from the field. */
    propertySource(key) {
        const metaSource = computed(() => this.state().hasProperty(key) ? this.state().property(key) : key.getInitial, ...(ngDevMode ? [{
                debugName: "metaSource"
            }] : []));
        return () => metaSource()?.();
    }
    /** Creates a (non-boolean) value sync that writes the given attribute of the given element. */
    withAttribute(element, attribute) {
        return value => {
            if (value !== void 0) {
                this.renderer.setAttribute(element, attribute, value.toString());
            }
            else {
                this.renderer.removeAttribute(element, attribute);
            }
        };
    }
    /** Creates a boolean value sync that writes the given attribute of the given element. */
    withBooleanAttribute(element, attribute) {
        return value => {
            if (value) {
                this.renderer.setAttribute(element, attribute, "");
            }
            else {
                this.renderer.removeAttribute(element, attribute);
            }
        };
    }
    static ɵfac = function Control_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Control)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _Control,
        selectors: [["", "control", ""]],
        inputs: {
            _field: [0, "control", "_field"]
        },
        features: [i0.ɵɵProvidersFeature([{
                    provide: NgControl,
                    useFactory: () => inject(_Control).ngControl
                }])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Control, [{
            type: Directive,
            args: [{
                    selector: "[control]",
                    providers: [{
                            provide: NgControl,
                            useFactory: () => inject(Control).ngControl
                        }]
                }]
        }], null, {
        _field: [{
                type: Input,
                args: [{
                        required: true,
                        alias: "control"
                    }]
            }]
    });
})();
function withInput(input) {
    return input ? value => privateSetComponentInput(input, value) : void 0;
}
function isFormUiControl(cmp) {
    const castCmp = cmp;
    return (isFormValueControl(castCmp) || isFormCheckboxControl(castCmp)) && (castCmp.readonly === void 0 || privateIsSignalInput(castCmp.readonly)) && (castCmp.disabled === void 0 || privateIsSignalInput(castCmp.disabled)) && (castCmp.disabledReasons === void 0 || privateIsSignalInput(castCmp.disabledReasons)) && (castCmp.errors === void 0 || privateIsSignalInput(castCmp.errors)) && (castCmp.invalid === void 0 || privateIsSignalInput(castCmp.invalid)) && (castCmp.pending === void 0 || privateIsSignalInput(castCmp.pending)) && (castCmp.touched === void 0 || privateIsModelInput(castCmp.touched) || privateIsSignalInput(castCmp.touched) || isOutputRef(castCmp.touched)) && (castCmp.dirty === void 0 || privateIsSignalInput(castCmp.dirty)) && (castCmp.min === void 0 || privateIsSignalInput(castCmp.min)) && (castCmp.minLength === void 0 || privateIsSignalInput(castCmp.minLength)) && (castCmp.max === void 0 || privateIsSignalInput(castCmp.max)) && (castCmp.maxLength === void 0 || privateIsSignalInput(castCmp.maxLength));
}
function isFormValueControl(cmp) {
    return privateIsModelInput(cmp.value);
}
function isFormCheckboxControl(cmp) {
    return privateIsModelInput(cmp.checked) && cmp.value === void 0;
}
function isShadowedControlComponent(cmp) {
    const mirror = reflectComponentType(cmp.constructor);
    return mirror?.inputs.some(input => input.templateName === "control") ?? false;
}
function isOutputRef(value) {
    return value instanceof OutputEmitterRef || value instanceof EventEmitter;
}
function isDateOrNull(value) {
    return value === null || value instanceof Date;
}
var FieldNodeContext = class {
    node;
    /**
     * Cache of paths that have been resolved for this context.
     *
     * For each resolved path we keep track of a signal of field that it maps to rather than a static
     * field, since it theoretically could change. In practice for the current system it should not
     * actually change, as they only place we currently track fields moving within the parent
     * structure is for arrays, and paths do not currently support array indexing.
     */
    cache = /* @__PURE__ */ new WeakMap();
    constructor(node) {
        this.node = node;
    }
    /**
     * Resolves a target path relative to this context.
     * @param target The path to resolve
     * @returns The field corresponding to the target path.
     */
    resolve(target) {
        if (!this.cache.has(target)) {
            const resolver = computed(() => {
                const targetPathNode = FieldPathNode.unwrapFieldPath(target);
                let field = this.node;
                let stepsRemaining = getBoundPathDepth();
                while (stepsRemaining > 0 || !field.structure.logic.hasLogic(targetPathNode.root.logic)) {
                    stepsRemaining--;
                    field = field.structure.parent;
                    if (field === void 0) {
                        throw new Error("Path is not part of this field tree.");
                    }
                }
                for (let key of targetPathNode.keys) {
                    field = field.structure.getChild(key);
                    if (field === void 0) {
                        throw new Error(`Cannot resolve path .${targetPathNode.keys.join(".")} relative to field ${["<root>", ...this.node.structure.pathKeys()].join(".")}.`);
                    }
                }
                return field.fieldProxy;
            }, ...(ngDevMode ? [{
                    debugName: "resolver"
                }] : []));
            this.cache.set(target, resolver);
        }
        return this.cache.get(target)();
    }
    get field() {
        return this.node.fieldProxy;
    }
    get state() {
        return this.node;
    }
    get value() {
        return this.node.structure.value;
    }
    get key() {
        return this.node.structure.keyInParent;
    }
    index = computed(() => {
        const key = this.key();
        if (!isArray(untracked(this.node.structure.parent.value))) {
            throw new Error(`RuntimeError: cannot access index, parent field is not an array`);
        }
        return Number(key);
    }, ...(ngDevMode ? [{
            debugName: "index"
        }] : []));
    fieldOf = p => this.resolve(p);
    stateOf = p => this.resolve(p)();
    valueOf = p => this.resolve(p)().value();
};
var FieldPropertyState = class {
    node;
    /** A map of all `Property` and `AggregateProperty` that have been defined for this field. */
    properties = /* @__PURE__ */ new Map();
    constructor(node) {
        this.node = node;
        untracked(() => 
        // Property factories are run in the form's injection context so they can create resources
        // and inject DI dependencies.
        runInInjectionContext(this.node.structure.injector, () => {
            for (const [key, factory] of this.node.logicNode.logic.getPropertyFactoryEntries()) {
                this.properties.set(key, factory(this.node.context));
            }
        }));
    }
    /** Gets the value of a `Property` or `AggregateProperty` for the field. */
    get(prop) {
        if (prop instanceof Property) {
            return this.properties.get(prop);
        }
        if (!this.properties.has(prop)) {
            const logic = this.node.logicNode.logic.getAggregateProperty(prop);
            const result = computed(() => logic.compute(this.node.context), ...(ngDevMode ? [{
                    debugName: "result"
                }] : []));
            this.properties.set(prop, result);
        }
        return this.properties.get(prop);
    }
    /**
     * Checks whether the current property state has the given property.
     * @param prop
     * @returns
     */
    has(prop) {
        if (prop instanceof AggregateProperty) {
            return this.node.logicNode.logic.hasAggregateProperty(prop);
        }
        else {
            return this.properties.has(prop);
        }
    }
};
var FIELD_PROXY_HANDLER = {
    get(getTgt, p) {
        const tgt = getTgt();
        const child = tgt.structure.getChild(p);
        if (child !== void 0) {
            return child.fieldProxy;
        }
        const value = untracked(tgt.value);
        if (isArray(value)) {
            if (p === "length") {
                return tgt.value().length;
            }
            if (p === Symbol.iterator) {
                return Array.prototype[p];
            }
        }
        return void 0;
    }
};
function deepSignal(source, prop) {
    const read = computed(() => source()[prop()]);
    read[SIGNAL] = source[SIGNAL];
    read.set = value => {
        source.update(current => valueForWrite(current, value, prop()));
    };
    read.update = fn => {
        read.set(fn(untracked(read)));
    };
    read.asReadonly = () => read;
    return read;
}
function valueForWrite(sourceValue, newPropValue, prop) {
    if (isArray(sourceValue)) {
        const newValue = [...sourceValue];
        newValue[prop] = newPropValue;
        return newValue;
    }
    else {
        return __spreadProps(__spreadValues({}, sourceValue), {
            [prop]: newPropValue
        });
    }
}
var FieldNodeStructure = class {
    logic;
    /** Added to array elements for tracking purposes. */
    // TODO: given that we don't ever let a field move between parents, is it safe to just extract
    // this to a shared symbol for all fields, rather than having a separate one per parent?
    identitySymbol = Symbol();
    /** Lazily initialized injector. Do not access directly, access via `injector` getter instead. */
    _injector = void 0;
    /** Lazily initialized injector. */
    get injector() {
        this._injector ??= Injector.create({
            providers: [],
            parent: this.fieldManager.injector
        });
        return this._injector;
    }
    constructor(logic) {
        this.logic = logic;
    }
    /** Gets the child fields of this field. */
    children() {
        return this.childrenMap()?.values() ?? [];
    }
    /** Retrieve a child `FieldNode` of this node by property key. */
    getChild(key) {
        const map = this.childrenMap();
        const value = this.value();
        if (!map || !isObject(value)) {
            return void 0;
        }
        if (isArray(value)) {
            const childValue = value[key];
            if (isObject(childValue) && childValue.hasOwnProperty(this.identitySymbol)) {
                key = childValue[this.identitySymbol];
            }
        }
        return map.get(typeof key === "number" ? key.toString() : key);
    }
    /** Destroys the field when it is no longer needed. */
    destroy() {
        this.injector.destroy();
    }
};
var RootFieldNodeStructure = class extends FieldNodeStructure {
    node;
    fieldManager;
    value;
    get parent() {
        return void 0;
    }
    get root() {
        return this.node;
    }
    get pathKeys() {
        return ROOT_PATH_KEYS;
    }
    get keyInParent() {
        return ROOT_KEY_IN_PARENT;
    }
    childrenMap;
    /**
     * Creates the structure for the root node of a field tree.
     *
     * @param node The full field node that this structure belongs to
     * @param pathNode The path corresponding to this node in the schema
     * @param logic The logic to apply to this field
     * @param fieldManager The field manager for this field
     * @param value The value signal for this field
     * @param adapter Adapter that knows how to create new fields and appropriate state.
     * @param createChildNode A factory function to create child nodes for this field.
     */
    constructor(node, pathNode, logic, fieldManager, value, adapter, createChildNode) {
        super(logic);
        this.node = node;
        this.fieldManager = fieldManager;
        this.value = value;
        this.childrenMap = makeChildrenMapSignal(node, value, this.identitySymbol, pathNode, logic, adapter, createChildNode);
    }
};
var ChildFieldNodeStructure = class extends FieldNodeStructure {
    parent;
    root;
    pathKeys;
    keyInParent;
    value;
    childrenMap;
    get fieldManager() {
        return this.root.structure.fieldManager;
    }
    /**
     * Creates the structure for a child field node in a field tree.
     *
     * @param node The full field node that this structure belongs to
     * @param pathNode The path corresponding to this node in the schema
     * @param logic The logic to apply to this field
     * @param parent The parent field node for this node
     * @param identityInParent The identity used to track this field in its parent
     * @param initialKeyInParent The key of this field in its parent at the time of creation
     * @param adapter Adapter that knows how to create new fields and appropriate state.
     * @param createChildNode A factory function to create child nodes for this field.
     */
    constructor(node, pathNode, logic, parent, identityInParent, initialKeyInParent, adapter, createChildNode) {
        super(logic);
        this.parent = parent;
        this.root = this.parent.structure.root;
        this.pathKeys = computed(() => [...parent.structure.pathKeys(), this.keyInParent()], ...(ngDevMode ? [{
                debugName: "pathKeys"
            }] : []));
        if (identityInParent === void 0) {
            const key = initialKeyInParent;
            this.keyInParent = computed(() => {
                if (parent.structure.childrenMap()?.get(key) !== node) {
                    throw new Error(`RuntimeError: orphan field, looking for property '${key}' of ${getDebugName(parent)}`);
                }
                return key;
            }, ...(ngDevMode ? [{
                    debugName: "keyInParent"
                }] : []));
        }
        else {
            let lastKnownKey = initialKeyInParent;
            this.keyInParent = computed(() => {
                const parentValue = parent.structure.value();
                if (!isArray(parentValue)) {
                    throw new Error(`RuntimeError: orphan field, expected ${getDebugName(parent)} to be an array`);
                }
                const data = parentValue[lastKnownKey];
                if (isObject(data) && data.hasOwnProperty(parent.structure.identitySymbol) && data[parent.structure.identitySymbol] === identityInParent) {
                    return lastKnownKey;
                }
                for (let i = 0; i < parentValue.length; i++) {
                    const data2 = parentValue[i];
                    if (isObject(data2) && data2.hasOwnProperty(parent.structure.identitySymbol) && data2[parent.structure.identitySymbol] === identityInParent) {
                        return lastKnownKey = i.toString();
                    }
                }
                throw new Error(`RuntimeError: orphan field, can't find element in array ${getDebugName(parent)}`);
            }, ...(ngDevMode ? [{
                    debugName: "keyInParent"
                }] : []));
        }
        this.value = deepSignal(this.parent.structure.value, this.keyInParent);
        this.childrenMap = makeChildrenMapSignal(node, this.value, this.identitySymbol, pathNode, logic, adapter, createChildNode);
        this.fieldManager.structures.add(this);
    }
};
var globalId = 0;
var ROOT_PATH_KEYS = computed(() => [], ...(ngDevMode ? [{
        debugName: "ROOT_PATH_KEYS"
    }] : []));
var ROOT_KEY_IN_PARENT = computed(() => {
    throw new Error(`RuntimeError: the top-level field in the form has no parent`);
}, ...(ngDevMode ? [{
        debugName: "ROOT_KEY_IN_PARENT"
    }] : []));
function makeChildrenMapSignal(node, valueSignal, identitySymbol, pathNode, logic, adapter, createChildNode) {
    return linkedSignal({
        source: valueSignal,
        computation: (value, previous) => {
            let childrenMap = previous?.value;
            if (!isObject(value)) {
                return void 0;
            }
            const isValueArray = isArray(value);
            if (childrenMap !== void 0) {
                let oldKeys = void 0;
                if (isValueArray) {
                    oldKeys = new Set(childrenMap.keys());
                    for (let i = 0; i < value.length; i++) {
                        const childValue = value[i];
                        if (isObject(childValue) && childValue.hasOwnProperty(identitySymbol)) {
                            oldKeys.delete(childValue[identitySymbol]);
                        }
                        else {
                            oldKeys.delete(i.toString());
                        }
                    }
                    for (const key of oldKeys) {
                        childrenMap.delete(key);
                    }
                }
                else {
                    for (let key of childrenMap.keys()) {
                        if (!value.hasOwnProperty(key)) {
                            childrenMap.delete(key);
                        }
                    }
                }
            }
            for (let key of Object.keys(value)) {
                let trackingId = void 0;
                const childValue = value[key];
                if (childValue === void 0) {
                    childrenMap?.delete(key);
                    continue;
                }
                if (isValueArray && isObject(childValue)) {
                    trackingId = childValue[identitySymbol] ??= Symbol(ngDevMode ? `id:${globalId++}` : "");
                }
                const identity = trackingId ?? key;
                if (childrenMap?.has(identity)) {
                    continue;
                }
                let childPath;
                let childLogic;
                if (isValueArray) {
                    childPath = pathNode.getChild(DYNAMIC);
                    childLogic = logic.getChild(DYNAMIC);
                }
                else {
                    childPath = pathNode.getChild(key);
                    childLogic = logic.getChild(key);
                }
                childrenMap ??= /* @__PURE__ */ new Map();
                childrenMap.set(identity, createChildNode({
                    kind: "child",
                    parent: node,
                    pathNode: childPath,
                    logic: childLogic,
                    initialKeyInParent: key,
                    identityInParent: trackingId,
                    fieldAdapter: adapter
                }));
            }
            return childrenMap;
        },
        equal: () => false
    });
}
function getDebugName(node) {
    return `<root>.${node.structure.pathKeys().join(".")}`;
}
var FieldSubmitState = class {
    node;
    /**
     * Whether this field was directly submitted (as opposed to indirectly by a parent field being submitted)
     * and is still in the process of submitting.
     */
    selfSubmitting = signal(false, ...(ngDevMode ? [{
            debugName: "selfSubmitting"
        }] : []));
    /** Server errors that are associated with this field. */
    serverErrors;
    constructor(node) {
        this.node = node;
        this.serverErrors = linkedSignal({
            source: this.node.structure.value,
            computation: () => []
        });
    }
    /**
     * Whether this form is currently in the process of being submitted.
     * Either because the field was submitted directly, or because a parent field was submitted.
     */
    submitting = computed(() => {
        return this.selfSubmitting() || (this.node.structure.parent?.submitting() ?? false);
    }, ...(ngDevMode ? [{
            debugName: "submitting"
        }] : []));
};
var FieldNode = class _FieldNode {
    structure;
    validationState;
    propertyState;
    nodeState;
    submitState;
    _context = void 0;
    fieldAdapter;
    get context() {
        return this._context ??= new FieldNodeContext(this);
    }
    /**
     * Proxy to this node which allows navigation of the form graph below it.
     */
    fieldProxy = new Proxy(() => this, FIELD_PROXY_HANDLER);
    constructor(options) {
        this.fieldAdapter = options.fieldAdapter;
        this.structure = this.fieldAdapter.createStructure(this, options);
        this.validationState = this.fieldAdapter.createValidationState(this, options);
        this.nodeState = this.fieldAdapter.createNodeState(this, options);
        this.propertyState = new FieldPropertyState(this);
        this.submitState = new FieldSubmitState(this);
    }
    get logicNode() {
        return this.structure.logic;
    }
    get value() {
        return this.structure.value;
    }
    get keyInParent() {
        return this.structure.keyInParent;
    }
    get errors() {
        return this.validationState.errors;
    }
    get errorSummary() {
        return this.validationState.errorSummary;
    }
    get pending() {
        return this.validationState.pending;
    }
    get valid() {
        return this.validationState.valid;
    }
    get invalid() {
        return this.validationState.invalid;
    }
    get dirty() {
        return this.nodeState.dirty;
    }
    get touched() {
        return this.nodeState.touched;
    }
    get disabled() {
        return this.nodeState.disabled;
    }
    get disabledReasons() {
        return this.nodeState.disabledReasons;
    }
    get hidden() {
        return this.nodeState.hidden;
    }
    get readonly() {
        return this.nodeState.readonly;
    }
    get controls() {
        return this.nodeState.controls;
    }
    get submitting() {
        return this.submitState.submitting;
    }
    get name() {
        return this.nodeState.name;
    }
    property(prop) {
        return this.propertyState.get(prop);
    }
    hasProperty(prop) {
        return this.propertyState.has(prop);
    }
    /**
     * Marks this specific field as touched.
     */
    markAsTouched() {
        this.nodeState.markAsTouched();
    }
    /**
     * Marks this specific field as dirty.
     */
    markAsDirty() {
        this.nodeState.markAsDirty();
    }
    /**
     * Resets the {@link touched} and {@link dirty} state of the field and its descendants.
     *
     * Note this does not change the data model, which can be reset directly if desired.
     */
    reset() {
        this.nodeState.markAsUntouched();
        this.nodeState.markAsPristine();
        for (const child of this.structure.children()) {
            child.reset();
        }
    }
    /**
     * Creates a new root field node for a new form.
     */
    static newRoot(fieldManager, value, pathNode, adapter) {
        return adapter.newRoot(fieldManager, value, pathNode, adapter);
    }
    /**
     * Creates a child field node based on the given options.
     */
    static newChild(options) {
        return options.fieldAdapter.newChild(options);
    }
    createStructure(options) {
        return options.kind === "root" ? new RootFieldNodeStructure(this, options.pathNode, options.logic, options.fieldManager, options.value, options.fieldAdapter, _FieldNode.newChild) : new ChildFieldNodeStructure(this, options.pathNode, options.logic, options.parent, options.identityInParent, options.initialKeyInParent, options.fieldAdapter, _FieldNode.newChild);
    }
};
var FieldNodeState = class {
    node;
    /**
     * Indicates whether this field has been touched directly by the user (as opposed to indirectly by
     * touching a child field).
     *
     * A field is considered directly touched when a user stops editing it for the first time (i.e. on blur)
     */
    selfTouched = signal(false, ...(ngDevMode ? [{
            debugName: "selfTouched"
        }] : []));
    /**
     * Indicates whether this field has been dirtied directly by the user (as opposed to indirectly by
     * dirtying a child field).
     *
     * A field is considered directly dirtied if a user changed the value of the field at least once.
     */
    selfDirty = signal(false, ...(ngDevMode ? [{
            debugName: "selfDirty"
        }] : []));
    /**
     * Marks this specific field as touched.
     */
    markAsTouched() {
        this.selfTouched.set(true);
    }
    /**
     * Marks this specific field as dirty.
     */
    markAsDirty() {
        this.selfDirty.set(true);
    }
    /**
     * Marks this specific field as not dirty.
     */
    markAsPristine() {
        this.selfDirty.set(false);
    }
    /**
     * Marks this specific field as not touched.
     */
    markAsUntouched() {
        this.selfTouched.set(false);
    }
    /** The UI controls the field is currently bound to. */
    controls = signal([], ...(ngDevMode ? [{
            debugName: "controls"
        }] : []));
    constructor(node) {
        this.node = node;
    }
    /**
     * Whether this field is considered dirty.
     *
     * A field is considered dirty if one of the following is true:
     *  - It was directly dirtied and is interactive
     *  - One of its children is considered dirty
     */
    dirty = computed(() => {
        const selfDirtyValue = this.selfDirty() && !this.isNonInteractive();
        return reduceChildren(this.node, selfDirtyValue, (child, value) => value || child.nodeState.dirty(), shortCircuitTrue);
    }, ...(ngDevMode ? [{
            debugName: "dirty"
        }] : []));
    /**
     * Whether this field is considered touched.
     *
     * A field is considered touched if one of the following is true:
     *  - It was directly touched and is interactive
     *  - One of its children is considered touched
     */
    touched = computed(() => {
        const selfTouchedValue = this.selfTouched() && !this.isNonInteractive();
        return reduceChildren(this.node, selfTouchedValue, (child, value) => value || child.nodeState.touched(), shortCircuitTrue);
    }, ...(ngDevMode ? [{
            debugName: "touched"
        }] : []));
    /**
     * The reasons for this field's disablement. This includes disabled reasons for any parent field
     * that may have been disabled, indirectly causing this field to be disabled as well.
     * The `field` property of the `DisabledReason` can be used to determine which field ultimately
     * caused the disablement.
     */
    disabledReasons = computed(() => [...(this.node.structure.parent?.nodeState.disabledReasons() ?? []), ...this.node.logicNode.logic.disabledReasons.compute(this.node.context)], ...(ngDevMode ? [{
            debugName: "disabledReasons"
        }] : []));
    /**
     * Whether this field is considered disabled.
     *
     * A field is considered disabled if one of the following is true:
     * - The schema contains logic that directly disabled it
     * - Its parent field is considered disabled
     */
    disabled = computed(() => !!this.disabledReasons().length, ...(ngDevMode ? [{
            debugName: "disabled"
        }] : []));
    /**
     * Whether this field is considered readonly.
     *
     * A field is considered readonly if one of the following is true:
     * - The schema contains logic that directly made it readonly
     * - Its parent field is considered readonly
     */
    readonly = computed(() => (this.node.structure.parent?.nodeState.readonly() || this.node.logicNode.logic.readonly.compute(this.node.context)) ?? false, ...(ngDevMode ? [{
            debugName: "readonly"
        }] : []));
    /**
     * Whether this field is considered hidden.
     *
     * A field is considered hidden if one of the following is true:
     * - The schema contains logic that directly hides it
     * - Its parent field is considered hidden
     */
    hidden = computed(() => (this.node.structure.parent?.nodeState.hidden() || this.node.logicNode.logic.hidden.compute(this.node.context)) ?? false, ...(ngDevMode ? [{
            debugName: "hidden"
        }] : []));
    name = computed(() => {
        const parent = this.node.structure.parent;
        if (!parent) {
            return this.node.structure.fieldManager.rootName;
        }
        return `${parent.name()}.${this.node.structure.keyInParent()}`;
    }, ...(ngDevMode ? [{
            debugName: "name"
        }] : []));
    /** Whether this field is considered non-interactive.
     *
     * A field is considered non-interactive if one of the following is true:
     * - It is hidden
     * - It is disabled
     * - It is readonly
     */
    isNonInteractive = computed(() => this.hidden() || this.disabled() || this.readonly(), ...(ngDevMode ? [{
            debugName: "isNonInteractive"
        }] : []));
};
var BasicFieldAdapter = class {
    /**
     * Creates a new Root field node.
     * @param fieldManager
     * @param value
     * @param pathNode
     * @param adapter
     */
    newRoot(fieldManager, value, pathNode, adapter) {
        return new FieldNode({
            kind: "root",
            fieldManager,
            value,
            pathNode,
            logic: pathNode.logic.build(),
            fieldAdapter: adapter
        });
    }
    /**
     * Creates a new child field node.
     * @param options
     */
    newChild(options) {
        return new FieldNode(options);
    }
    /**
     * Creates a node state.
     * @param node
     */
    createNodeState(node) {
        return new FieldNodeState(node);
    }
    /**
     * Creates a validation state.
     * @param node
     */
    createValidationState(node) {
        return new FieldValidationState(node);
    }
    /**
     * Creates a node structure.
     * @param node
     * @param options
     */
    createStructure(node, options) {
        return node.createStructure(options);
    }
};
var FormFieldManager = class {
    injector;
    rootName;
    constructor(injector, rootName) {
        this.injector = injector;
        this.rootName = rootName ?? `${this.injector.get(APP_ID)}.form${nextFormId++}`;
    }
    /**
     * Contains all child field structures that have been created as part of the current form.
     * New child structures are automatically added when they are created.
     * Structures are destroyed and removed when they are no longer reachable from the root.
     */
    structures = /* @__PURE__ */ new Set();
    /**
     * Creates an effect that runs when the form's structure changes and checks for structures that
     * have become unreachable to clean up.
     *
     * For example, consider a form wrapped around the following model: `signal([0, 1, 2])`.
     * This form would have 4 nodes as part of its structure tree.
     * One structure for the root array, and one structure for each element of the array.
     * Now imagine the data is updated: `model.set([0])`. In this case the structure for the first
     * element can still be reached from the root, but the structures for the second and third
     * elements are now orphaned and not connected to the root. Thus they will be destroyed.
     *
     * @param root The root field structure.
     */
    createFieldManagementEffect(root) {
        effect(() => {
            const liveStructures = /* @__PURE__ */ new Set();
            this.markStructuresLive(root, liveStructures);
            for (const structure of this.structures) {
                if (!liveStructures.has(structure)) {
                    this.structures.delete(structure);
                    untracked(() => structure.destroy());
                }
            }
        }, {
            injector: this.injector
        });
    }
    /**
     * Collects all structures reachable from the given structure into the given set.
     *
     * @param structure The root structure
     * @param liveStructures The set of reachable structures to populate
     */
    markStructuresLive(structure, liveStructures) {
        liveStructures.add(structure);
        for (const child of structure.children()) {
            this.markStructuresLive(child.structure, liveStructures);
        }
    }
};
var nextFormId = 0;
function normalizeFormArgs(args) {
    let model;
    let schema2;
    let options;
    if (args.length === 3) {
        [model, schema2, options] = args;
    }
    else if (args.length === 2) {
        if (isSchemaOrSchemaFn(args[1])) {
            [model, schema2] = args;
        }
        else {
            [model, options] = args;
        }
    }
    else {
        [model] = args;
    }
    return [model, schema2, options];
}
function form(...args) {
    const [model, schema2, options] = normalizeFormArgs(args);
    const injector = options?.injector ?? inject(Injector);
    const pathNode = runInInjectionContext(injector, () => SchemaImpl.rootCompile(schema2));
    const fieldManager = new FormFieldManager(injector, options?.name);
    const adapter = options?.adapter ?? new BasicFieldAdapter();
    const fieldRoot = FieldNode.newRoot(fieldManager, model, pathNode, adapter);
    fieldManager.createFieldManagementEffect(fieldRoot.structure);
    return fieldRoot.fieldProxy;
}
function applyEach(path, schema2) {
    assertPathIsCurrent(path);
    const elementPath = FieldPathNode.unwrapFieldPath(path).element.fieldPathProxy;
    apply(elementPath, schema2);
}
function apply(path, schema2) {
    assertPathIsCurrent(path);
    const pathNode = FieldPathNode.unwrapFieldPath(path);
    pathNode.mergeIn(SchemaImpl.create(schema2));
}
function applyWhen(path, logic, schema2) {
    assertPathIsCurrent(path);
    const pathNode = FieldPathNode.unwrapFieldPath(path);
    pathNode.mergeIn(SchemaImpl.create(schema2), {
        fn: logic,
        path
    });
}
function applyWhenValue(path, predicate, schema2) {
    applyWhen(path, ({ value }) => predicate(value()), schema2);
}
function submit(form2, action) {
    return __async(this, null, function* () {
        const node = form2();
        markAllAsTouched(node);
        if (node.invalid()) {
            return;
        }
        node.submitState.selfSubmitting.set(true);
        try {
            const errors = yield action(form2);
            errors && setServerErrors(node, errors);
        }
        finally {
            node.submitState.selfSubmitting.set(false);
        }
    });
}
function setServerErrors(submittedField, errors) {
    if (!isArray(errors)) {
        errors = [errors];
    }
    const errorsByField = /* @__PURE__ */ new Map();
    for (const error of errors) {
        const errorWithField = addDefaultField(error, submittedField.fieldProxy);
        const field = errorWithField.field();
        let fieldErrors = errorsByField.get(field);
        if (!fieldErrors) {
            fieldErrors = [];
            errorsByField.set(field, fieldErrors);
        }
        fieldErrors.push(errorWithField);
    }
    for (const [field, fieldErrors] of errorsByField) {
        field.submitState.serverErrors.set(fieldErrors);
    }
}
function schema(fn) {
    return SchemaImpl.create(fn);
}
function markAllAsTouched(node) {
    node.markAsTouched();
    for (const child of node.structure.children()) {
        markAllAsTouched(child);
    }
}
function requiredError(options) {
    return new RequiredValidationError(options);
}
function minError(min2, options) {
    return new MinValidationError(min2, options);
}
function maxError(max2, options) {
    return new MaxValidationError(max2, options);
}
function minLengthError(minLength2, options) {
    return new MinLengthValidationError(minLength2, options);
}
function maxLengthError(maxLength2, options) {
    return new MaxLengthValidationError(maxLength2, options);
}
function patternError(pattern2, options) {
    return new PatternValidationError(pattern2, options);
}
function emailError(options) {
    return new EmailValidationError(options);
}
function standardSchemaError(issue, options) {
    return new StandardSchemaValidationError(issue, options);
}
function customError(obj) {
    return new CustomValidationError(obj);
}
var CustomValidationError = class {
    /** Brand the class to avoid Typescript structural matching */
    __brand = void 0;
    /** Identifies the kind of error. */
    kind = "";
    /** The field associated with this error. */
    field;
    /** Human readable error message. */
    message;
    constructor(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
};
var _NgValidationError = class {
    /** Brand the class to avoid Typescript structural matching */
    __brand = void 0;
    /** Identifies the kind of error. */
    kind = "";
    /** The field associated with this error. */
    field;
    /** Human readable error message. */
    message;
    constructor(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
};
var RequiredValidationError = class extends _NgValidationError {
    kind = "required";
};
var MinValidationError = class extends _NgValidationError {
    min;
    kind = "min";
    constructor(min2, options) {
        super(options);
        this.min = min2;
    }
};
var MaxValidationError = class extends _NgValidationError {
    max;
    kind = "max";
    constructor(max2, options) {
        super(options);
        this.max = max2;
    }
};
var MinLengthValidationError = class extends _NgValidationError {
    minLength;
    kind = "minLength";
    constructor(minLength2, options) {
        super(options);
        this.minLength = minLength2;
    }
};
var MaxLengthValidationError = class extends _NgValidationError {
    maxLength;
    kind = "maxLength";
    constructor(maxLength2, options) {
        super(options);
        this.maxLength = maxLength2;
    }
};
var PatternValidationError = class extends _NgValidationError {
    pattern;
    kind = "pattern";
    constructor(pattern2, options) {
        super(options);
        this.pattern = pattern2;
    }
};
var EmailValidationError = class extends _NgValidationError {
    kind = "email";
};
var StandardSchemaValidationError = class extends _NgValidationError {
    issue;
    kind = "standardSchema";
    constructor(issue, options) {
        super(options);
        this.issue = issue;
    }
};
var NgValidationError = _NgValidationError;
function getLengthOrSize(value) {
    const v = value;
    return typeof v.length === "number" ? v.length : v.size;
}
function getOption(opt, ctx) {
    return opt instanceof Function ? opt(ctx) : opt;
}
function isEmpty(value) {
    if (typeof value === "number") {
        return isNaN(value);
    }
    return value === "" || value === false || value == null;
}
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function email(path, config) {
    validate(path, ctx => {
        if (isEmpty(ctx.value())) {
            return void 0;
        }
        if (!EMAIL_REGEXP.test(ctx.value())) {
            if (config?.error) {
                return getOption(config.error, ctx);
            }
            else {
                return emailError({
                    message: getOption(config?.message, ctx)
                });
            }
        }
        return void 0;
    });
}
function max(path, maxValue, config) {
    const MAX_MEMO = property(path, ctx => computed(() => typeof maxValue === "number" ? maxValue : maxValue(ctx)));
    aggregateProperty(path, MAX, ({ state }) => state.property(MAX_MEMO)());
    validate(path, ctx => {
        if (isEmpty(ctx.value())) {
            return void 0;
        }
        const max2 = ctx.state.property(MAX_MEMO)();
        if (max2 === void 0 || Number.isNaN(max2)) {
            return void 0;
        }
        if (ctx.value() > max2) {
            if (config?.error) {
                return getOption(config.error, ctx);
            }
            else {
                return maxError(max2, {
                    message: getOption(config?.message, ctx)
                });
            }
        }
        return void 0;
    });
}
function maxLength(path, maxLength2, config) {
    const MAX_LENGTH_MEMO = property(path, ctx => computed(() => typeof maxLength2 === "number" ? maxLength2 : maxLength2(ctx)));
    aggregateProperty(path, MAX_LENGTH, ({ state }) => state.property(MAX_LENGTH_MEMO)());
    validate(path, ctx => {
        if (isEmpty(ctx.value())) {
            return void 0;
        }
        const maxLength3 = ctx.state.property(MAX_LENGTH_MEMO)();
        if (maxLength3 === void 0) {
            return void 0;
        }
        if (getLengthOrSize(ctx.value()) > maxLength3) {
            if (config?.error) {
                return getOption(config.error, ctx);
            }
            else {
                return maxLengthError(maxLength3, {
                    message: getOption(config?.message, ctx)
                });
            }
        }
        return void 0;
    });
}
function min(path, minValue, config) {
    const MIN_MEMO = property(path, ctx => computed(() => typeof minValue === "number" ? minValue : minValue(ctx)));
    aggregateProperty(path, MIN, ({ state }) => state.property(MIN_MEMO)());
    validate(path, ctx => {
        if (isEmpty(ctx.value())) {
            return void 0;
        }
        const min2 = ctx.state.property(MIN_MEMO)();
        if (min2 === void 0 || Number.isNaN(min2)) {
            return void 0;
        }
        if (ctx.value() < min2) {
            if (config?.error) {
                return getOption(config.error, ctx);
            }
            else {
                return minError(min2, {
                    message: getOption(config?.message, ctx)
                });
            }
        }
        return void 0;
    });
}
function minLength(path, minLength2, config) {
    const MIN_LENGTH_MEMO = property(path, ctx => computed(() => typeof minLength2 === "number" ? minLength2 : minLength2(ctx)));
    aggregateProperty(path, MIN_LENGTH, ({ state }) => state.property(MIN_LENGTH_MEMO)());
    validate(path, ctx => {
        if (isEmpty(ctx.value())) {
            return void 0;
        }
        const minLength3 = ctx.state.property(MIN_LENGTH_MEMO)();
        if (minLength3 === void 0) {
            return void 0;
        }
        if (getLengthOrSize(ctx.value()) < minLength3) {
            if (config?.error) {
                return getOption(config.error, ctx);
            }
            else {
                return minLengthError(minLength3, {
                    message: getOption(config?.message, ctx)
                });
            }
        }
        return void 0;
    });
}
function pattern(path, pattern2, config) {
    const PATTERN_MEMO = property(path, ctx => computed(() => pattern2 instanceof RegExp ? pattern2 : pattern2(ctx)));
    aggregateProperty(path, PATTERN, ({ state }) => state.property(PATTERN_MEMO)());
    validate(path, ctx => {
        if (isEmpty(ctx.value())) {
            return void 0;
        }
        const pattern3 = ctx.state.property(PATTERN_MEMO)();
        if (pattern3 === void 0) {
            return void 0;
        }
        if (!pattern3.test(ctx.value())) {
            if (config?.error) {
                return getOption(config.error, ctx);
            }
            else {
                return patternError(pattern3, {
                    message: getOption(config?.message, ctx)
                });
            }
        }
        return void 0;
    });
}
function required(path, config) {
    const REQUIRED_MEMO = property(path, ctx => computed(() => config?.when ? config.when(ctx) : true));
    aggregateProperty(path, REQUIRED, ({ state }) => state.property(REQUIRED_MEMO)());
    validate(path, ctx => {
        if (ctx.state.property(REQUIRED_MEMO)() && isEmpty(ctx.value())) {
            if (config?.error) {
                return getOption(config.error, ctx);
            }
            else {
                return requiredError({
                    message: getOption(config?.message, ctx)
                });
            }
        }
        return void 0;
    });
}
function validateStandardSchema(path, schema2) {
    const VALIDATOR_MEMO = property(path, ({ value }) => {
        return computed(() => schema2["~standard"].validate(value()));
    });
    validateTree(path, ({ state, fieldOf }) => {
        const result = state.property(VALIDATOR_MEMO)();
        if (_isPromise(result)) {
            return [];
        }
        return result.issues?.map(issue => standardIssueToFormTreeError(fieldOf(path), issue)) ?? [];
    });
    validateAsync(path, {
        params: ({ state }) => {
            const result = state.property(VALIDATOR_MEMO)();
            return _isPromise(result) ? result : void 0;
        },
        factory: params => {
            return resource({
                params,
                loader: _0 => __async(null, [_0], function* ({ params: params2 }) {
                    return (yield params2)?.issues ?? [];
                })
            });
        },
        errors: (issues, { fieldOf }) => {
            return issues.map(issue => standardIssueToFormTreeError(fieldOf(path), issue));
        }
    });
}
function standardIssueToFormTreeError(field, issue) {
    let target = field;
    for (const pathPart of issue.path ?? []) {
        const pathKey = typeof pathPart === "object" ? pathPart.key : pathPart;
        target = target[pathKey];
    }
    return addDefaultField(standardSchemaError(issue), target);
}
export { AggregateProperty, Control, CustomValidationError, EmailValidationError, MAX, MAX_LENGTH, MIN, MIN_LENGTH, MaxLengthValidationError, MaxValidationError, MinLengthValidationError, MinValidationError, NgValidationError, PATTERN, PatternValidationError, Property, REQUIRED, RequiredValidationError, StandardSchemaValidationError, aggregateProperty, andProperty, apply, applyEach, applyWhen, applyWhenValue, createProperty, customError, disabled, email, emailError, form, hidden, listProperty, max, maxError, maxLength, maxLengthError, maxProperty, min, minError, minLength, minLengthError, minProperty, orProperty, pattern, patternError, property, readonly, reducedProperty, required, requiredError, schema, standardSchemaError, submit, validate, validateAsync, validateHttp, validateStandardSchema, validateTree };
/*! Bundled license information:

@angular/forms/fesm2022/signals.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/ 
