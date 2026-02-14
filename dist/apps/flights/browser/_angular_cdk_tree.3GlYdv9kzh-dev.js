import { TREE_KEY_MANAGER } from "@nf-internal/chunk-WA6QHYV5";
import "@nf-internal/chunk-TNW5MULF";
import { coerceObservable } from "@nf-internal/chunk-VQE6KSYC";
import { SelectionModel } from "@nf-internal/chunk-GJF35VKF";
import "@nf-internal/chunk-IANTZR4E";
import { Directionality } from "@nf-internal/chunk-GSHCXC35";
import { isDataSource } from "@nf-internal/chunk-AUAW3OPY";
import { __spreadProps, __spreadValues } from "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/tree.mjs
import { isObservable, Subject, BehaviorSubject, of, combineLatest, EMPTY, concat } from "rxjs";
import { take, filter, takeUntil, startWith, tap, switchMap, map, reduce, concatMap, distinctUntilChanged } from "rxjs/operators";
import * as i0 from "@angular/core";
import { InjectionToken, inject, ViewContainerRef, Directive, TemplateRef, IterableDiffers, ChangeDetectorRef, ElementRef, Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ViewChild, ContentChildren, EventEmitter, booleanAttribute, Output, numberAttribute, NgModule } from "@angular/core";
var BaseTreeControl = class {
    /** Saved data node for `expandAll` action. */
    dataNodes;
    /** A selection model with multi-selection to track expansion status. */
    expansionModel = new SelectionModel(true);
    /**
     * Returns the identifier by which a dataNode should be tracked, should its
     * reference change.
     *
     * Similar to trackBy for *ngFor
     */
    trackBy;
    /** Get depth of a given data node, return the level number. This is for flat tree node. */
    getLevel;
    /**
     * Whether the data node is expandable. Returns true if expandable.
     * This is for flat tree node.
     */
    isExpandable;
    /** Gets a stream that emits whenever the given data node's children change. */
    getChildren;
    /** Toggles one single data node's expanded/collapsed state. */
    toggle(dataNode) {
        this.expansionModel.toggle(this._trackByValue(dataNode));
    }
    /** Expands one single data node. */
    expand(dataNode) {
        this.expansionModel.select(this._trackByValue(dataNode));
    }
    /** Collapses one single data node. */
    collapse(dataNode) {
        this.expansionModel.deselect(this._trackByValue(dataNode));
    }
    /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */
    isExpanded(dataNode) {
        return this.expansionModel.isSelected(this._trackByValue(dataNode));
    }
    /** Toggles a subtree rooted at `node` recursively. */
    toggleDescendants(dataNode) {
        this.expansionModel.isSelected(this._trackByValue(dataNode)) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
    }
    /** Collapse all dataNodes in the tree. */
    collapseAll() {
        this.expansionModel.clear();
    }
    /** Expands a subtree rooted at given data node recursively. */
    expandDescendants(dataNode) {
        let toBeProcessed = [dataNode];
        toBeProcessed.push(...this.getDescendants(dataNode));
        this.expansionModel.select(...toBeProcessed.map(value => this._trackByValue(value)));
    }
    /** Collapses a subtree rooted at given data node recursively. */
    collapseDescendants(dataNode) {
        let toBeProcessed = [dataNode];
        toBeProcessed.push(...this.getDescendants(dataNode));
        this.expansionModel.deselect(...toBeProcessed.map(value => this._trackByValue(value)));
    }
    _trackByValue(value) {
        return this.trackBy ? this.trackBy(value) : value;
    }
};
var FlatTreeControl = class extends BaseTreeControl {
    getLevel;
    isExpandable;
    options;
    /** Construct with flat tree data node functions getLevel and isExpandable. */
    constructor(getLevel, isExpandable, options) {
        super();
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.options = options;
        if (this.options) {
            this.trackBy = this.options.trackBy;
        }
    }
    /**
     * Gets a list of the data node's subtree of descendent data nodes.
     *
     * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
     * with correct levels.
     */
    getDescendants(dataNode) {
        const startIndex = this.dataNodes.indexOf(dataNode);
        const results = [];
        for (let i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
            results.push(this.dataNodes[i]);
        }
        return results;
    }
    /**
     * Expands all data nodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
     * data nodes of the tree.
     */
    expandAll() {
        this.expansionModel.select(...this.dataNodes.map(node => this._trackByValue(node)));
    }
};
var NestedTreeControl = class extends BaseTreeControl {
    getChildren;
    options;
    /** Construct with nested tree function getChildren. */
    constructor(getChildren, options) {
        super();
        this.getChildren = getChildren;
        this.options = options;
        if (this.options) {
            this.trackBy = this.options.trackBy;
        }
        if (this.options?.isExpandable) {
            this.isExpandable = this.options.isExpandable;
        }
    }
    /**
     * Expands all dataNodes in the tree.
     *
     * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
     * data nodes of the tree.
     */
    expandAll() {
        this.expansionModel.clear();
        const allNodes = this.dataNodes.reduce((accumulator, dataNode) => [...accumulator, ...this.getDescendants(dataNode), dataNode], []);
        this.expansionModel.select(...allNodes.map(node => this._trackByValue(node)));
    }
    /** Gets a list of descendant dataNodes of a subtree rooted at given data node recursively. */
    getDescendants(dataNode) {
        const descendants = [];
        this._getDescendants(descendants, dataNode);
        return descendants.splice(1);
    }
    /** A helper function to get descendants recursively. */
    _getDescendants(descendants, dataNode) {
        descendants.push(dataNode);
        const childrenNodes = this.getChildren(dataNode);
        if (Array.isArray(childrenNodes)) {
            childrenNodes.forEach(child => this._getDescendants(descendants, child));
        }
        else if (isObservable(childrenNodes)) {
            childrenNodes.pipe(take(1), filter(Boolean)).subscribe(children => {
                for (const child of children) {
                    this._getDescendants(descendants, child);
                }
            });
        }
    }
};
var CDK_TREE_NODE_OUTLET_NODE = new InjectionToken("CDK_TREE_NODE_OUTLET_NODE");
var CdkTreeNodeOutlet = class _CdkTreeNodeOutlet {
    viewContainer = inject(ViewContainerRef);
    _node = inject(CDK_TREE_NODE_OUTLET_NODE, {
        optional: true
    });
    constructor() { }
    static ɵfac = function CdkTreeNodeOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTreeNodeOutlet)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkTreeNodeOutlet,
        selectors: [["", "cdkTreeNodeOutlet", ""]]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTreeNodeOutlet, [{
            type: Directive,
            args: [{
                    selector: "[cdkTreeNodeOutlet]"
                }]
        }], () => [], null);
})();
var CdkTreeNodeOutletContext = class {
    /** Data for the node. */
    $implicit;
    /** Depth of the node. */
    level;
    /** Index location of the node. */
    index;
    /** Length of the number of total dataNodes. */
    count;
    constructor(data) {
        this.$implicit = data;
    }
};
var CdkTreeNodeDef = class _CdkTreeNodeDef {
    /** @docs-private */
    template = inject(TemplateRef);
    /**
     * Function that should return true if this node template should be used for the provided node
     * data and index. If left undefined, this node will be considered the default node template to
     * use when no other when functions return true for the data.
     * For every node, there must be at least one when function that passes or an undefined to
     * default.
     */
    when;
    constructor() { }
    static ɵfac = function CdkTreeNodeDef_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTreeNodeDef)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkTreeNodeDef,
        selectors: [["", "cdkTreeNodeDef", ""]],
        inputs: {
            when: [0, "cdkTreeNodeDefWhen", "when"]
        }
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTreeNodeDef, [{
            type: Directive,
            args: [{
                    selector: "[cdkTreeNodeDef]",
                    inputs: [{
                            name: "when",
                            alias: "cdkTreeNodeDefWhen"
                        }]
                }]
        }], () => [], null);
})();
function getTreeNoValidDataSourceError() {
    return Error(`A valid data source must be provided.`);
}
function getTreeMultipleDefaultNodeDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
function getTreeMissingMatchingNodeDefError() {
    return Error(`Could not find a matching node definition for the provided node data.`);
}
function getTreeControlMissingError() {
    return Error(`Could not find a tree control, levelAccessor, or childrenAccessor for the tree.`);
}
function getMultipleTreeControlsError() {
    return Error(`More than one of tree control, levelAccessor, or childrenAccessor were provided.`);
}
var CdkTree = class _CdkTree {
    _differs = inject(IterableDiffers);
    _changeDetectorRef = inject(ChangeDetectorRef);
    _elementRef = inject(ElementRef);
    _dir = inject(Directionality);
    /** Subject that emits when the component has been destroyed. */
    _onDestroy = new Subject();
    /** Differ used to find the changes in the data provided by the data source. */
    _dataDiffer;
    /** Stores the node definition that does not have a when predicate. */
    _defaultNodeDef;
    /** Data subscription */
    _dataSubscription;
    /** Level of nodes */
    _levels = /* @__PURE__ */ new Map();
    /** The immediate parents for a node. This is `null` if there is no parent. */
    _parents = /* @__PURE__ */ new Map();
    /**
     * Nodes grouped into each set, which is a list of nodes displayed together in the DOM.
     *
     * Lookup key is the parent of a set. Root nodes have key of null.
     *
     * Values is a 'set' of tree nodes. Each tree node maps to a treeitem element. Sets are in the
     * order that it is rendered. Each set maps directly to aria-posinset and aria-setsize attributes.
     */
    _ariaSets = /* @__PURE__ */ new Map();
    /**
     * Provides a stream containing the latest data array to render. Influenced by the tree's
     * stream of view window (what dataNodes are currently on screen).
     * Data source can be an observable of data array, or a data array to render.
     */
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    _dataSource;
    /**
     * The tree controller
     *
     * @deprecated Use one of `levelAccessor` or `childrenAccessor` instead. To be removed in a
     * future version.
     * @breaking-change 21.0.0
     */
    treeControl;
    /**
     * Given a data node, determines what tree level the node is at.
     *
     * One of levelAccessor or childrenAccessor must be specified, not both.
     * This is enforced at run-time.
     */
    levelAccessor;
    /**
     * Given a data node, determines what the children of that node are.
     *
     * One of levelAccessor or childrenAccessor must be specified, not both.
     * This is enforced at run-time.
     */
    childrenAccessor;
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize node operations by identifying a node based on its data
     * relative to the function to know if a node should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    trackBy;
    /**
     * Given a data node, determines the key by which we determine whether or not this node is expanded.
     */
    expansionKey;
    // Outlets within the tree's template where the dataNodes will be inserted.
    _nodeOutlet;
    /** The tree node template for the tree */
    _nodeDefs;
    // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
    //     Remove the MAX_VALUE in viewChange
    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     */
    viewChange = new BehaviorSubject({
        start: 0,
        end: Number.MAX_VALUE
    });
    /** Keep track of which nodes are expanded. */
    _expansionModel;
    /**
     * Maintain a synchronous cache of flattened data nodes. This will only be
     * populated after initial render, and in certain cases, will be delayed due to
     * relying on Observable `getChildren` calls.
     */
    _flattenedNodes = new BehaviorSubject([]);
    /** The automatically determined node type for the tree. */
    _nodeType = new BehaviorSubject(null);
    /** The mapping between data and the node that is rendered. */
    _nodes = new BehaviorSubject(/* @__PURE__ */ new Map());
    /**
     * Synchronous cache of nodes for the `TreeKeyManager`. This is separate
     * from `_flattenedNodes` so they can be independently updated at different
     * times.
     */
    _keyManagerNodes = new BehaviorSubject([]);
    _keyManagerFactory = inject(TREE_KEY_MANAGER);
    /** The key manager for this tree. Handles focus and activation based on user keyboard input. */
    _keyManager;
    _viewInit = false;
    constructor() { }
    ngAfterContentInit() {
        this._initializeKeyManager();
    }
    ngAfterContentChecked() {
        this._updateDefaultNodeDefinition();
        this._subscribeToDataChanges();
    }
    ngOnDestroy() {
        this._nodeOutlet.viewContainer.clear();
        this._nodes.complete();
        this._keyManagerNodes.complete();
        this._nodeType.complete();
        this._flattenedNodes.complete();
        this.viewChange.complete();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (this._dataSource && typeof this._dataSource.disconnect === "function") {
            this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
        this._keyManager?.destroy();
    }
    ngOnInit() {
        this._checkTreeControlUsage();
        this._initializeDataDiffer();
    }
    ngAfterViewInit() {
        this._viewInit = true;
    }
    _updateDefaultNodeDefinition() {
        const defaultNodeDefs = this._nodeDefs.filter(def => !def.when);
        if (defaultNodeDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getTreeMultipleDefaultNodeDefsError();
        }
        this._defaultNodeDef = defaultNodeDefs[0];
    }
    /**
     * Sets the node type for the tree, if it hasn't been set yet.
     *
     * This will be called by the first node that's rendered in order for the tree
     * to determine what data transformations are required.
     */
    _setNodeTypeIfUnset(newType) {
        const currentType = this._nodeType.value;
        if (currentType === null) {
            this._nodeType.next(newType);
        }
        else if ((typeof ngDevMode === "undefined" || ngDevMode) && currentType !== newType) {
            console.warn(`Tree is using conflicting node types which can cause unexpected behavior. Please use tree nodes of the same type (e.g. only flat or only nested). Current node type: "${currentType}", new node type "${newType}".`);
        }
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the node outlet. Otherwise start listening for new data.
     */
    _switchDataSource(dataSource) {
        if (this._dataSource && typeof this._dataSource.disconnect === "function") {
            this.dataSource.disconnect(this);
        }
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
        if (!dataSource) {
            this._nodeOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
        if (this._nodeDefs) {
            this._subscribeToDataChanges();
        }
    }
    _getExpansionModel() {
        if (!this.treeControl) {
            this._expansionModel ??= new SelectionModel(true);
            return this._expansionModel;
        }
        return this.treeControl.expansionModel;
    }
    /** Set up a subscription for the data provided by the data source. */
    _subscribeToDataChanges() {
        if (this._dataSubscription) {
            return;
        }
        let dataStream;
        if (isDataSource(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
        }
        else if (isObservable(this._dataSource)) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = of(this._dataSource);
        }
        if (!dataStream) {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
                throw getTreeNoValidDataSourceError();
            }
            return;
        }
        this._dataSubscription = this._getRenderData(dataStream).pipe(takeUntil(this._onDestroy)).subscribe(renderingData => {
            this._renderDataChanges(renderingData);
        });
    }
    /** Given an Observable containing a stream of the raw data, returns an Observable containing the RenderingData */
    _getRenderData(dataStream) {
        const expansionModel = this._getExpansionModel();
        return combineLatest([dataStream, this._nodeType,
            // We don't use the expansion data directly, however we add it here to essentially
            // trigger data rendering when expansion changes occur.
            expansionModel.changed.pipe(startWith(null), tap(expansionChanges => {
                this._emitExpansionChanges(expansionChanges);
            }))]).pipe(switchMap(([data, nodeType]) => {
            if (nodeType === null) {
                return of({
                    renderNodes: data,
                    flattenedNodes: null,
                    nodeType
                });
            }
            return this._computeRenderingData(data, nodeType).pipe(map(convertedData => __spreadProps(__spreadValues({}, convertedData), {
                nodeType
            })));
        }));
    }
    _renderDataChanges(data) {
        if (data.nodeType === null) {
            this.renderNodeChanges(data.renderNodes);
            return;
        }
        this._updateCachedData(data.flattenedNodes);
        this.renderNodeChanges(data.renderNodes);
        this._updateKeyManagerItems(data.flattenedNodes);
    }
    _emitExpansionChanges(expansionChanges) {
        if (!expansionChanges) {
            return;
        }
        const nodes = this._nodes.value;
        for (const added of expansionChanges.added) {
            const node = nodes.get(added);
            node?._emitExpansionState(true);
        }
        for (const removed of expansionChanges.removed) {
            const node = nodes.get(removed);
            node?._emitExpansionState(false);
        }
    }
    _initializeKeyManager() {
        const items = combineLatest([this._keyManagerNodes, this._nodes]).pipe(map(([keyManagerNodes, renderNodes]) => keyManagerNodes.reduce((items2, data) => {
            const node = renderNodes.get(this._getExpansionKey(data));
            if (node) {
                items2.push(node);
            }
            return items2;
        }, [])));
        const keyManagerOptions = {
            trackBy: node => this._getExpansionKey(node.data),
            skipPredicate: node => !!node.isDisabled,
            typeAheadDebounceInterval: true,
            horizontalOrientation: this._dir.value
        };
        this._keyManager = this._keyManagerFactory(items, keyManagerOptions);
    }
    _initializeDataDiffer() {
        const trackBy = this.trackBy ?? ((_index, item) => this._getExpansionKey(item));
        this._dataDiffer = this._differs.find([]).create(trackBy);
    }
    _checkTreeControlUsage() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            let numTreeControls = 0;
            if (this.treeControl) {
                numTreeControls++;
            }
            if (this.levelAccessor) {
                numTreeControls++;
            }
            if (this.childrenAccessor) {
                numTreeControls++;
            }
            if (!numTreeControls) {
                throw getTreeControlMissingError();
            }
            else if (numTreeControls > 1) {
                throw getMultipleTreeControlsError();
            }
        }
    }
    /** Check for changes made in the data and render each change (node added/removed/moved). */
    renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
        const changes = dataDiffer.diff(data);
        if (!changes && !this._viewInit) {
            return;
        }
        changes?.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
            if (item.previousIndex == null) {
                this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                const view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        changes?.forEachIdentityChange(record => {
            const newData = record.item;
            if (record.currentIndex != void 0) {
                const view = viewContainer.get(record.currentIndex);
                view.context.$implicit = newData;
            }
        });
        if (parentData) {
            this._changeDetectorRef.markForCheck();
        }
        else {
            this._changeDetectorRef.detectChanges();
        }
    }
    /**
     * Finds the matching node definition that should be used for this node data. If there is only
     * one node definition, it is returned. Otherwise, find the node definition that has a when
     * predicate that returns true with the data. If none return true, return the default node
     * definition.
     */
    _getNodeDef(data, i) {
        if (this._nodeDefs.length === 1) {
            return this._nodeDefs.first;
        }
        const nodeDef = this._nodeDefs.find(def => def.when && def.when(i, data)) || this._defaultNodeDef;
        if (!nodeDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getTreeMissingMatchingNodeDefError();
        }
        return nodeDef;
    }
    /**
     * Create the embedded view for the data node template and place it in the correct index location
     * within the data node view container.
     */
    insertNode(nodeData, index, viewContainer, parentData) {
        const levelAccessor = this._getLevelAccessor();
        const node = this._getNodeDef(nodeData, index);
        const key = this._getExpansionKey(nodeData);
        const context = new CdkTreeNodeOutletContext(nodeData);
        context.index = index;
        parentData ??= this._parents.get(key) ?? void 0;
        if (levelAccessor) {
            context.level = levelAccessor(nodeData);
        }
        else if (parentData !== void 0 && this._levels.has(this._getExpansionKey(parentData))) {
            context.level = this._levels.get(this._getExpansionKey(parentData)) + 1;
        }
        else {
            context.level = 0;
        }
        this._levels.set(key, context.level);
        const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
        container.createEmbeddedView(node.template, context, index);
        if (CdkTreeNode.mostRecentTreeNode) {
            CdkTreeNode.mostRecentTreeNode.data = nodeData;
        }
    }
    /** Whether the data node is expanded or collapsed. Returns true if it's expanded. */
    isExpanded(dataNode) {
        return !!(this.treeControl?.isExpanded(dataNode) || this._expansionModel?.isSelected(this._getExpansionKey(dataNode)));
    }
    /** If the data node is currently expanded, collapse it. Otherwise, expand it. */
    toggle(dataNode) {
        if (this.treeControl) {
            this.treeControl.toggle(dataNode);
        }
        else if (this._expansionModel) {
            this._expansionModel.toggle(this._getExpansionKey(dataNode));
        }
    }
    /** Expand the data node. If it is already expanded, does nothing. */
    expand(dataNode) {
        if (this.treeControl) {
            this.treeControl.expand(dataNode);
        }
        else if (this._expansionModel) {
            this._expansionModel.select(this._getExpansionKey(dataNode));
        }
    }
    /** Collapse the data node. If it is already collapsed, does nothing. */
    collapse(dataNode) {
        if (this.treeControl) {
            this.treeControl.collapse(dataNode);
        }
        else if (this._expansionModel) {
            this._expansionModel.deselect(this._getExpansionKey(dataNode));
        }
    }
    /**
     * If the data node is currently expanded, collapse it and all its descendants.
     * Otherwise, expand it and all its descendants.
     */
    toggleDescendants(dataNode) {
        if (this.treeControl) {
            this.treeControl.toggleDescendants(dataNode);
        }
        else if (this._expansionModel) {
            if (this.isExpanded(dataNode)) {
                this.collapseDescendants(dataNode);
            }
            else {
                this.expandDescendants(dataNode);
            }
        }
    }
    /**
     * Expand the data node and all its descendants. If they are already expanded, does nothing.
     */
    expandDescendants(dataNode) {
        if (this.treeControl) {
            this.treeControl.expandDescendants(dataNode);
        }
        else if (this._expansionModel) {
            const expansionModel = this._expansionModel;
            expansionModel.select(this._getExpansionKey(dataNode));
            this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe(children => {
                expansionModel.select(...children.map(child => this._getExpansionKey(child)));
            });
        }
    }
    /** Collapse the data node and all its descendants. If it is already collapsed, does nothing. */
    collapseDescendants(dataNode) {
        if (this.treeControl) {
            this.treeControl.collapseDescendants(dataNode);
        }
        else if (this._expansionModel) {
            const expansionModel = this._expansionModel;
            expansionModel.deselect(this._getExpansionKey(dataNode));
            this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe(children => {
                expansionModel.deselect(...children.map(child => this._getExpansionKey(child)));
            });
        }
    }
    /** Expands all data nodes in the tree. */
    expandAll() {
        if (this.treeControl) {
            this.treeControl.expandAll();
        }
        else if (this._expansionModel) {
            this._forEachExpansionKey(keys => this._expansionModel?.select(...keys));
        }
    }
    /** Collapse all data nodes in the tree. */
    collapseAll() {
        if (this.treeControl) {
            this.treeControl.collapseAll();
        }
        else if (this._expansionModel) {
            this._forEachExpansionKey(keys => this._expansionModel?.deselect(...keys));
        }
    }
    /** Level accessor, used for compatibility between the old Tree and new Tree */
    _getLevelAccessor() {
        return this.treeControl?.getLevel?.bind(this.treeControl) ?? this.levelAccessor;
    }
    /** Children accessor, used for compatibility between the old Tree and new Tree */
    _getChildrenAccessor() {
        return this.treeControl?.getChildren?.bind(this.treeControl) ?? this.childrenAccessor;
    }
    /**
     * Gets the direct children of a node; used for compatibility between the old tree and the
     * new tree.
     */
    _getDirectChildren(dataNode) {
        const levelAccessor = this._getLevelAccessor();
        const expansionModel = this._expansionModel ?? this.treeControl?.expansionModel;
        if (!expansionModel) {
            return of([]);
        }
        const key = this._getExpansionKey(dataNode);
        const isExpanded = expansionModel.changed.pipe(switchMap(changes => {
            if (changes.added.includes(key)) {
                return of(true);
            }
            else if (changes.removed.includes(key)) {
                return of(false);
            }
            return EMPTY;
        }), startWith(this.isExpanded(dataNode)));
        if (levelAccessor) {
            return combineLatest([isExpanded, this._flattenedNodes]).pipe(map(([expanded, flattenedNodes]) => {
                if (!expanded) {
                    return [];
                }
                return this._findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, 1);
            }));
        }
        const childrenAccessor = this._getChildrenAccessor();
        if (childrenAccessor) {
            return coerceObservable(childrenAccessor(dataNode) ?? []);
        }
        throw getTreeControlMissingError();
    }
    /**
     * Given the list of flattened nodes, the level accessor, and the level range within
     * which to consider children, finds the children for a given node.
     *
     * For example, for direct children, `levelDelta` would be 1. For all descendants,
     * `levelDelta` would be Infinity.
     */
    _findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, levelDelta) {
        const key = this._getExpansionKey(dataNode);
        const startIndex = flattenedNodes.findIndex(node => this._getExpansionKey(node) === key);
        const dataNodeLevel = levelAccessor(dataNode);
        const expectedLevel = dataNodeLevel + levelDelta;
        const results = [];
        for (let i = startIndex + 1; i < flattenedNodes.length; i++) {
            const currentLevel = levelAccessor(flattenedNodes[i]);
            if (currentLevel <= dataNodeLevel) {
                break;
            }
            if (currentLevel <= expectedLevel) {
                results.push(flattenedNodes[i]);
            }
        }
        return results;
    }
    /**
     * Adds the specified node component to the tree's internal registry.
     *
     * This primarily facilitates keyboard navigation.
     */
    _registerNode(node) {
        this._nodes.value.set(this._getExpansionKey(node.data), node);
        this._nodes.next(this._nodes.value);
    }
    /** Removes the specified node component from the tree's internal registry. */
    _unregisterNode(node) {
        this._nodes.value.delete(this._getExpansionKey(node.data));
        this._nodes.next(this._nodes.value);
    }
    /**
     * For the given node, determine the level where this node appears in the tree.
     *
     * This is intended to be used for `aria-level` but is 0-indexed.
     */
    _getLevel(node) {
        return this._levels.get(this._getExpansionKey(node));
    }
    /**
     * For the given node, determine the size of the parent's child set.
     *
     * This is intended to be used for `aria-setsize`.
     */
    _getSetSize(dataNode) {
        const set = this._getAriaSet(dataNode);
        return set.length;
    }
    /**
     * For the given node, determine the index (starting from 1) of the node in its parent's child set.
     *
     * This is intended to be used for `aria-posinset`.
     */
    _getPositionInSet(dataNode) {
        const set = this._getAriaSet(dataNode);
        const key = this._getExpansionKey(dataNode);
        return set.findIndex(node => this._getExpansionKey(node) === key) + 1;
    }
    /** Given a CdkTreeNode, gets the node that renders that node's parent's data. */
    _getNodeParent(node) {
        const parent = this._parents.get(this._getExpansionKey(node.data));
        return parent && this._nodes.value.get(this._getExpansionKey(parent));
    }
    /** Given a CdkTreeNode, gets the nodes that renders that node's child data. */
    _getNodeChildren(node) {
        return this._getDirectChildren(node.data).pipe(map(children => children.reduce((nodes, child) => {
            const value = this._nodes.value.get(this._getExpansionKey(child));
            if (value) {
                nodes.push(value);
            }
            return nodes;
        }, [])));
    }
    /** `keydown` event handler; this just passes the event to the `TreeKeyManager`. */
    _sendKeydownToKeyManager(event) {
        if (event.target === this._elementRef.nativeElement) {
            this._keyManager.onKeydown(event);
        }
        else {
            const nodes = this._nodes.getValue();
            for (const [, node] of nodes) {
                if (event.target === node._elementRef.nativeElement) {
                    this._keyManager.onKeydown(event);
                    break;
                }
            }
        }
    }
    /** Gets all nested descendants of a given node. */
    _getDescendants(dataNode) {
        if (this.treeControl) {
            return of(this.treeControl.getDescendants(dataNode));
        }
        if (this.levelAccessor) {
            const results = this._findChildrenByLevel(this.levelAccessor, this._flattenedNodes.value, dataNode, Infinity);
            return of(results);
        }
        if (this.childrenAccessor) {
            return this._getAllChildrenRecursively(dataNode).pipe(reduce((allChildren, nextChildren) => {
                allChildren.push(...nextChildren);
                return allChildren;
            }, []));
        }
        throw getTreeControlMissingError();
    }
    /**
     * Gets all children and sub-children of the provided node.
     *
     * This will emit multiple times, in the order that the children will appear
     * in the tree, and can be combined with a `reduce` operator.
     */
    _getAllChildrenRecursively(dataNode) {
        if (!this.childrenAccessor) {
            return of([]);
        }
        return coerceObservable(this.childrenAccessor(dataNode)).pipe(take(1), switchMap(children => {
            for (const child of children) {
                this._parents.set(this._getExpansionKey(child), dataNode);
            }
            return of(...children).pipe(concatMap(child => concat(of([child]), this._getAllChildrenRecursively(child))));
        }));
    }
    _getExpansionKey(dataNode) {
        return this.expansionKey?.(dataNode) ?? dataNode;
    }
    _getAriaSet(node) {
        const key = this._getExpansionKey(node);
        const parent = this._parents.get(key);
        const parentKey = parent ? this._getExpansionKey(parent) : null;
        const set = this._ariaSets.get(parentKey);
        return set ?? [node];
    }
    /**
     * Finds the parent for the given node. If this is a root node, this
     * returns null. If we're unable to determine the parent, for example,
     * if we don't have cached node data, this returns undefined.
     */
    _findParentForNode(node, index, cachedNodes) {
        if (!cachedNodes.length) {
            return null;
        }
        const currentLevel = this._levels.get(this._getExpansionKey(node)) ?? 0;
        for (let parentIndex = index - 1; parentIndex >= 0; parentIndex--) {
            const parentNode = cachedNodes[parentIndex];
            const parentLevel = this._levels.get(this._getExpansionKey(parentNode)) ?? 0;
            if (parentLevel < currentLevel) {
                return parentNode;
            }
        }
        return null;
    }
    /**
     * Given a set of root nodes and the current node level, flattens any nested
     * nodes into a single array.
     *
     * If any nodes are not expanded, then their children will not be added into the array.
     * This will still traverse all nested children in order to build up our internal data
     * models, but will not include them in the returned array.
     */
    _flattenNestedNodesWithExpansion(nodes, level = 0) {
        const childrenAccessor = this._getChildrenAccessor();
        if (!childrenAccessor) {
            return of([...nodes]);
        }
        return of(...nodes).pipe(concatMap(node => {
            const parentKey = this._getExpansionKey(node);
            if (!this._parents.has(parentKey)) {
                this._parents.set(parentKey, null);
            }
            this._levels.set(parentKey, level);
            const children = coerceObservable(childrenAccessor(node));
            return concat(of([node]), children.pipe(take(1), tap(childNodes => {
                this._ariaSets.set(parentKey, [...(childNodes ?? [])]);
                for (const child of childNodes ?? []) {
                    const childKey = this._getExpansionKey(child);
                    this._parents.set(childKey, node);
                    this._levels.set(childKey, level + 1);
                }
            }), switchMap(childNodes => {
                if (!childNodes) {
                    return of([]);
                }
                return this._flattenNestedNodesWithExpansion(childNodes, level + 1).pipe(map(nestedNodes => this.isExpanded(node) ? nestedNodes : []));
            })));
        }), reduce((results, children) => {
            results.push(...children);
            return results;
        }, []));
    }
    /**
     * Converts children for certain tree configurations.
     *
     * This also computes parent, level, and group data.
     */
    _computeRenderingData(nodes, nodeType) {
        if (this.childrenAccessor && nodeType === "flat") {
            this._clearPreviousCache();
            this._ariaSets.set(null, [...nodes]);
            return this._flattenNestedNodesWithExpansion(nodes).pipe(map(flattenedNodes => ({
                renderNodes: flattenedNodes,
                flattenedNodes
            })));
        }
        else if (this.levelAccessor && nodeType === "nested") {
            const levelAccessor = this.levelAccessor;
            return of(nodes.filter(node => levelAccessor(node) === 0)).pipe(map(rootNodes => ({
                renderNodes: rootNodes,
                flattenedNodes: nodes
            })), tap(({ flattenedNodes }) => {
                this._calculateParents(flattenedNodes);
            }));
        }
        else if (nodeType === "flat") {
            return of({
                renderNodes: nodes,
                flattenedNodes: nodes
            }).pipe(tap(({ flattenedNodes }) => {
                this._calculateParents(flattenedNodes);
            }));
        }
        else {
            this._clearPreviousCache();
            this._ariaSets.set(null, [...nodes]);
            return this._flattenNestedNodesWithExpansion(nodes).pipe(map(flattenedNodes => ({
                renderNodes: nodes,
                flattenedNodes
            })));
        }
    }
    _updateCachedData(flattenedNodes) {
        this._flattenedNodes.next(flattenedNodes);
    }
    _updateKeyManagerItems(flattenedNodes) {
        this._keyManagerNodes.next(flattenedNodes);
    }
    /** Traverse the flattened node data and compute parents, levels, and group data. */
    _calculateParents(flattenedNodes) {
        const levelAccessor = this._getLevelAccessor();
        if (!levelAccessor) {
            return;
        }
        this._clearPreviousCache();
        for (let index = 0; index < flattenedNodes.length; index++) {
            const dataNode = flattenedNodes[index];
            const key = this._getExpansionKey(dataNode);
            this._levels.set(key, levelAccessor(dataNode));
            const parent = this._findParentForNode(dataNode, index, flattenedNodes);
            this._parents.set(key, parent);
            const parentKey = parent ? this._getExpansionKey(parent) : null;
            const group = this._ariaSets.get(parentKey) ?? [];
            group.splice(index, 0, dataNode);
            this._ariaSets.set(parentKey, group);
        }
    }
    /** Invokes a callback with all node expansion keys. */
    _forEachExpansionKey(callback) {
        const toToggle = [];
        const observables = [];
        this._nodes.value.forEach(node => {
            toToggle.push(this._getExpansionKey(node.data));
            observables.push(this._getDescendants(node.data));
        });
        if (observables.length > 0) {
            combineLatest(observables).pipe(take(1), takeUntil(this._onDestroy)).subscribe(results => {
                results.forEach(inner => inner.forEach(r => toToggle.push(this._getExpansionKey(r))));
                callback(toToggle);
            });
        }
        else {
            callback(toToggle);
        }
    }
    /** Clears the maps we use to store parents, level & aria-sets in. */
    _clearPreviousCache() {
        this._parents.clear();
        this._levels.clear();
        this._ariaSets.clear();
    }
    static ɵfac = function CdkTree_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTree)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _CdkTree,
        selectors: [["cdk-tree"]],
        contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CdkTreeNodeDef, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._nodeDefs = _t);
            }
        },
        viewQuery: function CdkTree_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(CdkTreeNodeOutlet, 7);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._nodeOutlet = _t.first);
            }
        },
        hostAttrs: ["role", "tree", 1, "cdk-tree"],
        hostBindings: function CdkTree_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function CdkTree_keydown_HostBindingHandler($event) {
                    return ctx._sendKeydownToKeyManager($event);
                });
            }
        },
        inputs: {
            dataSource: "dataSource",
            treeControl: "treeControl",
            levelAccessor: "levelAccessor",
            childrenAccessor: "childrenAccessor",
            trackBy: "trackBy",
            expansionKey: "expansionKey"
        },
        exportAs: ["cdkTree"],
        decls: 1,
        vars: 0,
        consts: [["cdkTreeNodeOutlet", ""]],
        template: function CdkTree_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainer(0, 0);
            }
        },
        dependencies: [CdkTreeNodeOutlet],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTree, [{
            type: Component,
            args: [{
                    selector: "cdk-tree",
                    exportAs: "cdkTree",
                    template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
                    host: {
                        "class": "cdk-tree",
                        "role": "tree",
                        "(keydown)": "_sendKeydownToKeyManager($event)"
                    },
                    encapsulation: ViewEncapsulation.None,
                    // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
                    // The view for `CdkTree` consists entirely of templates declared in other views. As they are
                    // declared elsewhere, they are checked when their declaration points are checked.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: ChangeDetectionStrategy.Default,
                    imports: [CdkTreeNodeOutlet]
                }]
        }], () => [], {
        dataSource: [{
                type: Input
            }],
        treeControl: [{
                type: Input
            }],
        levelAccessor: [{
                type: Input
            }],
        childrenAccessor: [{
                type: Input
            }],
        trackBy: [{
                type: Input
            }],
        expansionKey: [{
                type: Input
            }],
        _nodeOutlet: [{
                type: ViewChild,
                args: [CdkTreeNodeOutlet, {
                        static: true
                    }]
            }],
        _nodeDefs: [{
                type: ContentChildren,
                args: [CdkTreeNodeDef, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    }]
            }]
    });
})();
var CdkTreeNode = class _CdkTreeNode {
    _elementRef = inject(ElementRef);
    _tree = inject(CdkTree);
    _tabindex = -1;
    _type = "flat";
    /**
     * The role of the tree node.
     *
     * @deprecated This will be ignored; the tree will automatically determine the appropriate role
     * for tree node. This input will be removed in a future version.
     * @breaking-change 21.0.0
     */
    get role() {
        return "treeitem";
    }
    set role(_role) { }
    /**
     * Whether or not this node is expandable.
     *
     * If not using `FlatTreeControl`, or if `isExpandable` is not provided to
     * `NestedTreeControl`, this should be provided for correct node a11y.
     */
    get isExpandable() {
        return this._isExpandable();
    }
    set isExpandable(isExpandable) {
        this._inputIsExpandable = isExpandable;
        if (this.data && !this._isExpandable || !this._inputIsExpandable) {
            return;
        }
        if (this._inputIsExpanded) {
            this.expand();
        }
        else if (this._inputIsExpanded === false) {
            this.collapse();
        }
    }
    get isExpanded() {
        return this._tree.isExpanded(this._data);
    }
    set isExpanded(isExpanded) {
        this._inputIsExpanded = isExpanded;
        if (isExpanded) {
            this.expand();
        }
        else {
            this.collapse();
        }
    }
    /**
     * Whether or not this node is disabled. If it's disabled, then the user won't be able to focus
     * or activate this node.
     */
    isDisabled;
    /**
     * The text used to locate this item during typeahead. If not specified, the `textContent` will
     * will be used.
     */
    typeaheadLabel;
    getLabel() {
        return this.typeaheadLabel || this._elementRef.nativeElement.textContent?.trim() || "";
    }
    /** This emits when the node has been programatically activated or activated by keyboard. */
    activation = new EventEmitter();
    /** This emits when the node's expansion status has been changed. */
    expandedChange = new EventEmitter();
    /**
     * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
     * in `CdkTree` and set the data to it.
     */
    static mostRecentTreeNode = null;
    /** Subject that emits when the component has been destroyed. */
    _destroyed = new Subject();
    /** Emits when the node's data has changed. */
    _dataChanges = new Subject();
    _inputIsExpandable = false;
    _inputIsExpanded = void 0;
    /**
     * Flag used to determine whether or not we should be focusing the actual element based on
     * some user interaction (click or focus). On click, we don't forcibly focus the element
     * since the click could trigger some other component that wants to grab its own focus
     * (e.g. menu, dialog).
     */
    _shouldFocus = true;
    _parentNodeAriaLevel;
    /** The tree node's data. */
    get data() {
        return this._data;
    }
    set data(value) {
        if (value !== this._data) {
            this._data = value;
            this._dataChanges.next();
        }
    }
    _data;
    /* If leaf node, return true to not assign aria-expanded attribute */
    get isLeafNode() {
        if (this._tree.treeControl?.isExpandable !== void 0 && !this._tree.treeControl.isExpandable(this._data)) {
            return true;
        }
        else if (this._tree.treeControl?.isExpandable === void 0 && this._tree.treeControl?.getDescendants(this._data).length === 0) {
            return true;
        }
        return false;
    }
    get level() {
        return this._tree._getLevel(this._data) ?? this._parentNodeAriaLevel;
    }
    /** Determines if the tree node is expandable. */
    _isExpandable() {
        if (this._tree.treeControl) {
            if (this.isLeafNode) {
                return false;
            }
            return true;
        }
        return this._inputIsExpandable;
    }
    /**
     * Determines the value for `aria-expanded`.
     *
     * For non-expandable nodes, this is `null`.
     */
    _getAriaExpanded() {
        if (!this._isExpandable()) {
            return null;
        }
        return String(this.isExpanded);
    }
    /**
     * Determines the size of this node's parent's child set.
     *
     * This is intended to be used for `aria-setsize`.
     */
    _getSetSize() {
        return this._tree._getSetSize(this._data);
    }
    /**
     * Determines the index (starting from 1) of this node in its parent's child set.
     *
     * This is intended to be used for `aria-posinset`.
     */
    _getPositionInSet() {
        return this._tree._getPositionInSet(this._data);
    }
    _changeDetectorRef = inject(ChangeDetectorRef);
    constructor() {
        _CdkTreeNode.mostRecentTreeNode = this;
    }
    ngOnInit() {
        this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);
        this._tree._getExpansionModel().changed.pipe(map(() => this.isExpanded), distinctUntilChanged(), takeUntil(this._destroyed)).pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
        this._tree._setNodeTypeIfUnset(this._type);
        this._tree._registerNode(this);
    }
    ngOnDestroy() {
        if (_CdkTreeNode.mostRecentTreeNode === this) {
            _CdkTreeNode.mostRecentTreeNode = null;
        }
        this._dataChanges.complete();
        this._destroyed.next();
        this._destroyed.complete();
    }
    getParent() {
        return this._tree._getNodeParent(this) ?? null;
    }
    getChildren() {
        return this._tree._getNodeChildren(this);
    }
    /** Focuses this data node. Implemented for TreeKeyManagerItem. */
    focus() {
        this._tabindex = 0;
        if (this._shouldFocus) {
            this._elementRef.nativeElement.focus();
        }
        this._changeDetectorRef.markForCheck();
    }
    /** Defocus this data node. */
    unfocus() {
        this._tabindex = -1;
        this._changeDetectorRef.markForCheck();
    }
    /** Emits an activation event. Implemented for TreeKeyManagerItem. */
    activate() {
        if (this.isDisabled) {
            return;
        }
        this.activation.next(this._data);
    }
    /** Collapses this data node. Implemented for TreeKeyManagerItem. */
    collapse() {
        if (this.isExpandable) {
            this._tree.collapse(this._data);
        }
    }
    /** Expands this data node. Implemented for TreeKeyManagerItem. */
    expand() {
        if (this.isExpandable) {
            this._tree.expand(this._data);
        }
    }
    /** Makes the node focusable. Implemented for TreeKeyManagerItem. */
    makeFocusable() {
        this._tabindex = 0;
        this._changeDetectorRef.markForCheck();
    }
    _focusItem() {
        if (this.isDisabled) {
            return;
        }
        this._tree._keyManager.focusItem(this);
    }
    _setActiveItem() {
        if (this.isDisabled) {
            return;
        }
        this._shouldFocus = false;
        this._tree._keyManager.focusItem(this);
        this._shouldFocus = true;
    }
    _emitExpansionState(expanded) {
        this.expandedChange.emit(expanded);
    }
    static ɵfac = function CdkTreeNode_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTreeNode)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkTreeNode,
        selectors: [["cdk-tree-node"]],
        hostAttrs: ["role", "treeitem", 1, "cdk-tree-node"],
        hostVars: 5,
        hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function CdkTreeNode_click_HostBindingHandler() {
                    return ctx._setActiveItem();
                })("focus", function CdkTreeNode_focus_HostBindingHandler() {
                    return ctx._focusItem();
                });
            }
            if (rf & 2) {
                i0.ɵɵdomProperty("tabIndex", ctx._tabindex);
                i0.ɵɵattribute("aria-expanded", ctx._getAriaExpanded())("aria-level", ctx.level + 1)("aria-posinset", ctx._getPositionInSet())("aria-setsize", ctx._getSetSize());
            }
        },
        inputs: {
            role: "role",
            isExpandable: [2, "isExpandable", "isExpandable", booleanAttribute],
            isExpanded: "isExpanded",
            isDisabled: [2, "isDisabled", "isDisabled", booleanAttribute],
            typeaheadLabel: [0, "cdkTreeNodeTypeaheadLabel", "typeaheadLabel"]
        },
        outputs: {
            activation: "activation",
            expandedChange: "expandedChange"
        },
        exportAs: ["cdkTreeNode"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTreeNode, [{
            type: Directive,
            args: [{
                    selector: "cdk-tree-node",
                    exportAs: "cdkTreeNode",
                    host: {
                        "class": "cdk-tree-node",
                        "[attr.aria-expanded]": "_getAriaExpanded()",
                        "[attr.aria-level]": "level + 1",
                        "[attr.aria-posinset]": "_getPositionInSet()",
                        "[attr.aria-setsize]": "_getSetSize()",
                        "[tabindex]": "_tabindex",
                        "role": "treeitem",
                        "(click)": "_setActiveItem()",
                        "(focus)": "_focusItem()"
                    }
                }]
        }], () => [], {
        role: [{
                type: Input
            }],
        isExpandable: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        isExpanded: [{
                type: Input
            }],
        isDisabled: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        typeaheadLabel: [{
                type: Input,
                args: ["cdkTreeNodeTypeaheadLabel"]
            }],
        activation: [{
                type: Output
            }],
        expandedChange: [{
                type: Output
            }]
    });
})();
function getParentNodeAriaLevel(nodeElement) {
    let parent = nodeElement.parentElement;
    while (parent && !isNodeElement(parent)) {
        parent = parent.parentElement;
    }
    if (!parent) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            throw Error("Incorrect tree structure containing detached node.");
        }
        else {
            return -1;
        }
    }
    else if (parent.classList.contains("cdk-nested-tree-node")) {
        return numberAttribute(parent.getAttribute("aria-level"));
    }
    else {
        return 0;
    }
}
function isNodeElement(element) {
    const classList = element.classList;
    return !!(classList?.contains("cdk-nested-tree-node") || classList?.contains("cdk-tree"));
}
var CdkNestedTreeNode = class _CdkNestedTreeNode extends CdkTreeNode {
    _type = "nested";
    _differs = inject(IterableDiffers);
    /** Differ used to find the changes in the data provided by the data source. */
    _dataDiffer;
    /** The children data dataNodes of current node. They will be placed in `CdkTreeNodeOutlet`. */
    _children;
    /** The children node placeholder. */
    nodeOutlet;
    constructor() {
        super();
    }
    ngAfterContentInit() {
        this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
        this._tree._getDirectChildren(this.data).pipe(takeUntil(this._destroyed)).subscribe(result => this.updateChildrenNodes(result));
        this.nodeOutlet.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this.updateChildrenNodes());
    }
    ngOnDestroy() {
        this._clear();
        super.ngOnDestroy();
    }
    /** Add children dataNodes to the NodeOutlet */
    updateChildrenNodes(children) {
        const outlet = this._getNodeOutlet();
        if (children) {
            this._children = children;
        }
        if (outlet && this._children) {
            const viewContainer = outlet.viewContainer;
            this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
        }
        else {
            this._dataDiffer.diff([]);
        }
    }
    /** Clear the children dataNodes. */
    _clear() {
        const outlet = this._getNodeOutlet();
        if (outlet) {
            outlet.viewContainer.clear();
            this._dataDiffer.diff([]);
        }
    }
    /** Gets the outlet for the current node. */
    _getNodeOutlet() {
        const outlets = this.nodeOutlet;
        return outlets && outlets.find(outlet => !outlet._node || outlet._node === this);
    }
    static ɵfac = function CdkNestedTreeNode_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkNestedTreeNode)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkNestedTreeNode,
        selectors: [["cdk-nested-tree-node"]],
        contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CdkTreeNodeOutlet, 5);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nodeOutlet = _t);
            }
        },
        hostAttrs: [1, "cdk-nested-tree-node"],
        exportAs: ["cdkNestedTreeNode"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkTreeNode,
                    useExisting: _CdkNestedTreeNode
                }, {
                    provide: CDK_TREE_NODE_OUTLET_NODE,
                    useExisting: _CdkNestedTreeNode
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkNestedTreeNode, [{
            type: Directive,
            args: [{
                    selector: "cdk-nested-tree-node",
                    exportAs: "cdkNestedTreeNode",
                    providers: [{
                            provide: CdkTreeNode,
                            useExisting: CdkNestedTreeNode
                        }, {
                            provide: CDK_TREE_NODE_OUTLET_NODE,
                            useExisting: CdkNestedTreeNode
                        }],
                    host: {
                        "class": "cdk-nested-tree-node"
                    }
                }]
        }], () => [], {
        nodeOutlet: [{
                type: ContentChildren,
                args: [CdkTreeNodeOutlet, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    }]
            }]
    });
})();
var cssUnitPattern = /([A-Za-z%]+)$/;
var CdkTreeNodePadding = class _CdkTreeNodePadding {
    _treeNode = inject(CdkTreeNode);
    _tree = inject(CdkTree);
    _element = inject(ElementRef);
    _dir = inject(Directionality, {
        optional: true
    });
    /** Current padding value applied to the element. Used to avoid unnecessarily hitting the DOM. */
    _currentPadding;
    /** Subject that emits when the component has been destroyed. */
    _destroyed = new Subject();
    /** CSS units used for the indentation value. */
    indentUnits = "px";
    /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
    get level() {
        return this._level;
    }
    set level(value) {
        this._setLevelInput(value);
    }
    _level;
    /**
     * The indent for each level. Can be a number or a CSS string.
     * Default number 40px from material design menu sub-menu spec.
     */
    get indent() {
        return this._indent;
    }
    set indent(indent) {
        this._setIndentInput(indent);
    }
    _indent = 40;
    constructor() {
        this._setPadding();
        this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => this._setPadding(true));
        this._treeNode._dataChanges.subscribe(() => this._setPadding());
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
    _paddingIndent() {
        const nodeLevel = (this._treeNode.data && this._tree._getLevel(this._treeNode.data)) ?? null;
        const level = this._level == null ? nodeLevel : this._level;
        return typeof level === "number" ? `${level * this._indent}${this.indentUnits}` : null;
    }
    _setPadding(forceChange = false) {
        const padding = this._paddingIndent();
        if (padding !== this._currentPadding || forceChange) {
            const element = this._element.nativeElement;
            const paddingProp = this._dir && this._dir.value === "rtl" ? "paddingRight" : "paddingLeft";
            const resetProp = paddingProp === "paddingLeft" ? "paddingRight" : "paddingLeft";
            element.style[paddingProp] = padding || "";
            element.style[resetProp] = "";
            this._currentPadding = padding;
        }
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setLevelInput(value) {
        this._level = isNaN(value) ? null : value;
        this._setPadding();
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setIndentInput(indent) {
        let value = indent;
        let units = "px";
        if (typeof indent === "string") {
            const parts = indent.split(cssUnitPattern);
            value = parts[0];
            units = parts[1] || units;
        }
        this.indentUnits = units;
        this._indent = numberAttribute(value);
        this._setPadding();
    }
    static ɵfac = function CdkTreeNodePadding_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTreeNodePadding)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkTreeNodePadding,
        selectors: [["", "cdkTreeNodePadding", ""]],
        inputs: {
            level: [2, "cdkTreeNodePadding", "level", numberAttribute],
            indent: [0, "cdkTreeNodePaddingIndent", "indent"]
        }
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTreeNodePadding, [{
            type: Directive,
            args: [{
                    selector: "[cdkTreeNodePadding]"
                }]
        }], () => [], {
        level: [{
                type: Input,
                args: [{
                        alias: "cdkTreeNodePadding",
                        transform: numberAttribute
                    }]
            }],
        indent: [{
                type: Input,
                args: ["cdkTreeNodePaddingIndent"]
            }]
    });
})();
var CdkTreeNodeToggle = class _CdkTreeNodeToggle {
    _tree = inject(CdkTree);
    _treeNode = inject(CdkTreeNode);
    /** Whether expand/collapse the node recursively. */
    recursive = false;
    constructor() { }
    // Toggle the expanded or collapsed state of this node.
    //
    // Focus this node with expanding or collapsing it. This ensures that the active node will always
    // be visible when expanding and collapsing.
    _toggle() {
        this.recursive ? this._tree.toggleDescendants(this._treeNode.data) : this._tree.toggle(this._treeNode.data);
        this._tree._keyManager.focusItem(this._treeNode);
    }
    static ɵfac = function CdkTreeNodeToggle_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTreeNodeToggle)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkTreeNodeToggle,
        selectors: [["", "cdkTreeNodeToggle", ""]],
        hostAttrs: ["tabindex", "-1"],
        hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
                    ctx._toggle();
                    return $event.stopPropagation();
                })("keydown.Enter", function CdkTreeNodeToggle_keydown_Enter_HostBindingHandler($event) {
                    ctx._toggle();
                    return $event.preventDefault();
                })("keydown.Space", function CdkTreeNodeToggle_keydown_Space_HostBindingHandler($event) {
                    ctx._toggle();
                    return $event.preventDefault();
                });
            }
        },
        inputs: {
            recursive: [2, "cdkTreeNodeToggleRecursive", "recursive", booleanAttribute]
        }
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTreeNodeToggle, [{
            type: Directive,
            args: [{
                    selector: "[cdkTreeNodeToggle]",
                    host: {
                        "(click)": "_toggle(); $event.stopPropagation();",
                        "(keydown.Enter)": "_toggle(); $event.preventDefault();",
                        "(keydown.Space)": "_toggle(); $event.preventDefault();",
                        "tabindex": "-1"
                    }
                }]
        }], () => [], {
        recursive: [{
                type: Input,
                args: [{
                        alias: "cdkTreeNodeToggleRecursive",
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];
var CdkTreeModule = class _CdkTreeModule {
    static ɵfac = function CdkTreeModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkTreeModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _CdkTreeModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({});
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkTreeModule, [{
            type: NgModule,
            args: [{
                    imports: EXPORTED_DECLARATIONS,
                    exports: EXPORTED_DECLARATIONS
                }]
        }], null, null);
})();
export { BaseTreeControl, CDK_TREE_NODE_OUTLET_NODE, CdkNestedTreeNode, CdkTree, CdkTreeModule, CdkTreeNode, CdkTreeNodeDef, CdkTreeNodeOutlet, CdkTreeNodeOutletContext, CdkTreeNodePadding, CdkTreeNodeToggle, FlatTreeControl, NestedTreeControl, getMultipleTreeControlsError, getTreeControlMissingError, getTreeMissingMatchingNodeDefError, getTreeMultipleDefaultNodeDefsError, getTreeNoValidDataSourceError };
