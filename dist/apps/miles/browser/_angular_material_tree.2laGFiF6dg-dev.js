import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/material/fesm2022/tree.mjs
import { CdkTreeNode, CdkTreeNodeDef, CdkNestedTreeNode, CDK_TREE_NODE_OUTLET_NODE, CdkTreeNodePadding, CdkTreeNodeOutlet, CdkTree, CdkTreeNodeToggle, CdkTreeModule } from "@angular/cdk/tree";
import * as i0 from "@angular/core";
import { inject, HostAttributeToken, numberAttribute, booleanAttribute, Directive, Input, ViewContainerRef, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, NgModule } from "@angular/core";
import { BidiModule } from "@angular/cdk/bidi";
import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, merge } from "rxjs";
import { take, map } from "rxjs/operators";
function isNoopTreeKeyManager(keyManager) {
    return !!keyManager._isNoopTreeKeyManager;
}
var MatTreeNode = class _MatTreeNode extends CdkTreeNode {
    /**
     * The tabindex of the tree node.
     *
     * @deprecated By default MatTreeNode manages focus using TreeKeyManager instead of tabIndex.
     *   Recommend to avoid setting tabIndex directly to prevent TreeKeyManager form getting into
     *   an unexpected state. Tabindex to be removed in a future version.
     * @breaking-change 21.0.0 Remove this attribute.
     */
    get tabIndexInputBinding() {
        return this._tabIndexInputBinding;
    }
    set tabIndexInputBinding(value) {
        this._tabIndexInputBinding = value;
    }
    _tabIndexInputBinding;
    /**
     * The default tabindex of the tree node.
     *
     * @deprecated By default MatTreeNode manages focus using TreeKeyManager instead of tabIndex.
     *   Recommend to avoid setting tabIndex directly to prevent TreeKeyManager form getting into
     *   an unexpected state. Tabindex to be removed in a future version.
     * @breaking-change 21.0.0 Remove this attribute.
     */
    defaultTabIndex = 0;
    _getTabindexAttribute() {
        if (isNoopTreeKeyManager(this._tree._keyManager)) {
            return this.tabIndexInputBinding;
        }
        return this._tabindex;
    }
    /**
     * Whether the component is disabled.
     *
     * @deprecated This is an alias for `isDisabled`.
     * @breaking-change 21.0.0 Remove this input
     */
    get disabled() {
        return this.isDisabled;
    }
    set disabled(value) {
        this.isDisabled = value;
    }
    constructor() {
        super();
        const tabIndex = inject(new HostAttributeToken("tabindex"), {
            optional: true
        });
        this.tabIndexInputBinding = Number(tabIndex) || this.defaultTabIndex;
    }
    // This is a workaround for https://github.com/angular/angular/issues/23091
    // In aot mode, the lifecycle hooks from parent class are not called.
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    static ɵfac = function MatTreeNode_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatTreeNode)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatTreeNode,
        selectors: [["mat-tree-node"]],
        hostAttrs: [1, "mat-tree-node"],
        hostVars: 5,
        hostBindings: function MatTreeNode_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function MatTreeNode_click_HostBindingHandler() {
                    return ctx._focusItem();
                });
            }
            if (rf & 2) {
                i0.ɵɵdomProperty("tabIndex", ctx._getTabindexAttribute());
                i0.ɵɵattribute("aria-expanded", ctx._getAriaExpanded())("aria-level", ctx.level + 1)("aria-posinset", ctx._getPositionInSet())("aria-setsize", ctx._getSetSize());
            }
        },
        inputs: {
            tabIndexInputBinding: [2, "tabIndex", "tabIndexInputBinding", value => value == null ? 0 : numberAttribute(value)],
            disabled: [2, "disabled", "disabled", booleanAttribute]
        },
        outputs: {
            activation: "activation",
            expandedChange: "expandedChange"
        },
        exportAs: ["matTreeNode"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkTreeNode,
                    useExisting: _MatTreeNode
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTreeNode, [{
            type: Directive,
            args: [{
                    selector: "mat-tree-node",
                    exportAs: "matTreeNode",
                    outputs: ["activation", "expandedChange"],
                    providers: [{
                            provide: CdkTreeNode,
                            useExisting: MatTreeNode
                        }],
                    host: {
                        "class": "mat-tree-node",
                        "[attr.aria-expanded]": "_getAriaExpanded()",
                        "[attr.aria-level]": "level + 1",
                        "[attr.aria-posinset]": "_getPositionInSet()",
                        "[attr.aria-setsize]": "_getSetSize()",
                        "(click)": "_focusItem()",
                        "[tabindex]": "_getTabindexAttribute()"
                    }
                }]
        }], () => [], {
        tabIndexInputBinding: [{
                type: Input,
                args: [{
                        transform: value => value == null ? 0 : numberAttribute(value),
                        alias: "tabIndex"
                    }]
            }],
        disabled: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }]
    });
})();
var MatTreeNodeDef = class _MatTreeNodeDef extends CdkTreeNodeDef {
    data;
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatTreeNodeDef_BaseFactory;
        return function MatTreeNodeDef_Factory(__ngFactoryType__) {
            return (ɵMatTreeNodeDef_BaseFactory || (ɵMatTreeNodeDef_BaseFactory = i0.ɵɵgetInheritedFactory(_MatTreeNodeDef)))(__ngFactoryType__ || _MatTreeNodeDef);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatTreeNodeDef,
        selectors: [["", "matTreeNodeDef", ""]],
        inputs: {
            when: [0, "matTreeNodeDefWhen", "when"],
            data: [0, "matTreeNode", "data"]
        },
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkTreeNodeDef,
                    useExisting: _MatTreeNodeDef
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTreeNodeDef, [{
            type: Directive,
            args: [{
                    selector: "[matTreeNodeDef]",
                    inputs: [{
                            name: "when",
                            alias: "matTreeNodeDefWhen"
                        }],
                    providers: [{
                            provide: CdkTreeNodeDef,
                            useExisting: MatTreeNodeDef
                        }]
                }]
        }], null, {
        data: [{
                type: Input,
                args: ["matTreeNode"]
            }]
    });
})();
var MatNestedTreeNode = class _MatNestedTreeNode extends CdkNestedTreeNode {
    node;
    /**
     * Whether the node is disabled.
     *
     * @deprecated This is an alias for `isDisabled`.
     * @breaking-change 21.0.0 Remove this input
     */
    get disabled() {
        return this.isDisabled;
    }
    set disabled(value) {
        this.isDisabled = value;
    }
    /** Tabindex of the node. */
    get tabIndex() {
        return this.isDisabled ? -1 : this._tabIndex;
    }
    set tabIndex(value) {
        this._tabIndex = value;
    }
    _tabIndex;
    // This is a workaround for https://github.com/angular/angular/issues/19145
    // In aot mode, the lifecycle hooks from parent class are not called.
    // TODO(tinayuangao): Remove when the angular issue #19145 is fixed
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterContentInit() {
        super.ngAfterContentInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatNestedTreeNode_BaseFactory;
        return function MatNestedTreeNode_Factory(__ngFactoryType__) {
            return (ɵMatNestedTreeNode_BaseFactory || (ɵMatNestedTreeNode_BaseFactory = i0.ɵɵgetInheritedFactory(_MatNestedTreeNode)))(__ngFactoryType__ || _MatNestedTreeNode);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatNestedTreeNode,
        selectors: [["mat-nested-tree-node"]],
        hostAttrs: [1, "mat-nested-tree-node"],
        inputs: {
            node: [0, "matNestedTreeNode", "node"],
            disabled: [2, "disabled", "disabled", booleanAttribute],
            tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? 0 : numberAttribute(value)]
        },
        outputs: {
            activation: "activation",
            expandedChange: "expandedChange"
        },
        exportAs: ["matNestedTreeNode"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkNestedTreeNode,
                    useExisting: _MatNestedTreeNode
                }, {
                    provide: CdkTreeNode,
                    useExisting: _MatNestedTreeNode
                }, {
                    provide: CDK_TREE_NODE_OUTLET_NODE,
                    useExisting: _MatNestedTreeNode
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatNestedTreeNode, [{
            type: Directive,
            args: [{
                    selector: "mat-nested-tree-node",
                    exportAs: "matNestedTreeNode",
                    outputs: ["activation", "expandedChange"],
                    providers: [{
                            provide: CdkNestedTreeNode,
                            useExisting: MatNestedTreeNode
                        }, {
                            provide: CdkTreeNode,
                            useExisting: MatNestedTreeNode
                        }, {
                            provide: CDK_TREE_NODE_OUTLET_NODE,
                            useExisting: MatNestedTreeNode
                        }],
                    host: {
                        "class": "mat-nested-tree-node"
                    }
                }]
        }], null, {
        node: [{
                type: Input,
                args: ["matNestedTreeNode"]
            }],
        disabled: [{
                type: Input,
                args: [{
                        transform: booleanAttribute
                    }]
            }],
        tabIndex: [{
                type: Input,
                args: [{
                        transform: value => value == null ? 0 : numberAttribute(value)
                    }]
            }]
    });
})();
var MatTreeNodePadding = class _MatTreeNodePadding extends CdkTreeNodePadding {
    /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
    get level() {
        return this._level;
    }
    set level(value) {
        this._setLevelInput(value);
    }
    /** The indent for each level. Default number 40px from material design menu sub-menu spec. */
    get indent() {
        return this._indent;
    }
    set indent(indent) {
        this._setIndentInput(indent);
    }
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatTreeNodePadding_BaseFactory;
        return function MatTreeNodePadding_Factory(__ngFactoryType__) {
            return (ɵMatTreeNodePadding_BaseFactory || (ɵMatTreeNodePadding_BaseFactory = i0.ɵɵgetInheritedFactory(_MatTreeNodePadding)))(__ngFactoryType__ || _MatTreeNodePadding);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatTreeNodePadding,
        selectors: [["", "matTreeNodePadding", ""]],
        inputs: {
            level: [2, "matTreeNodePadding", "level", numberAttribute],
            indent: [0, "matTreeNodePaddingIndent", "indent"]
        },
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkTreeNodePadding,
                    useExisting: _MatTreeNodePadding
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTreeNodePadding, [{
            type: Directive,
            args: [{
                    selector: "[matTreeNodePadding]",
                    providers: [{
                            provide: CdkTreeNodePadding,
                            useExisting: MatTreeNodePadding
                        }]
                }]
        }], null, {
        level: [{
                type: Input,
                args: [{
                        alias: "matTreeNodePadding",
                        transform: numberAttribute
                    }]
            }],
        indent: [{
                type: Input,
                args: ["matTreeNodePaddingIndent"]
            }]
    });
})();
var MatTreeNodeOutlet = class _MatTreeNodeOutlet {
    viewContainer = inject(ViewContainerRef);
    _node = inject(CDK_TREE_NODE_OUTLET_NODE, {
        optional: true
    });
    static ɵfac = function MatTreeNodeOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatTreeNodeOutlet)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatTreeNodeOutlet,
        selectors: [["", "matTreeNodeOutlet", ""]],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkTreeNodeOutlet,
                    useExisting: _MatTreeNodeOutlet
                }])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTreeNodeOutlet, [{
            type: Directive,
            args: [{
                    selector: "[matTreeNodeOutlet]",
                    providers: [{
                            provide: CdkTreeNodeOutlet,
                            useExisting: MatTreeNodeOutlet
                        }]
                }]
        }], null, null);
})();
var MatTree = class _MatTree extends CdkTree {
    // Outlets within the tree's template where the dataNodes will be inserted.
    // We need an initializer here to avoid a TS error. The value will be set in `ngAfterViewInit`.
    _nodeOutlet = void 0;
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatTree_BaseFactory;
        return function MatTree_Factory(__ngFactoryType__) {
            return (ɵMatTree_BaseFactory || (ɵMatTree_BaseFactory = i0.ɵɵgetInheritedFactory(_MatTree)))(__ngFactoryType__ || _MatTree);
        };
    })();
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: _MatTree,
        selectors: [["mat-tree"]],
        viewQuery: function MatTree_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(MatTreeNodeOutlet, 7);
            }
            if (rf & 2) {
                let _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._nodeOutlet = _t.first);
            }
        },
        hostAttrs: [1, "mat-tree"],
        exportAs: ["matTree"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkTree,
                    useExisting: _MatTree
                }]), i0.ɵɵInheritDefinitionFeature],
        decls: 1,
        vars: 0,
        consts: [["matTreeNodeOutlet", ""]],
        template: function MatTree_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementContainer(0, 0);
            }
        },
        dependencies: [MatTreeNodeOutlet],
        styles: [".mat-tree{display:block;background-color:var(--mat-tree-container-background-color, var(--mat-sys-surface))}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color, var(--mat-sys-on-surface));font-family:var(--mat-tree-node-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-tree-node-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-tree-node-text-weight, var(--mat-sys-body-large-weight))}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height, 48px)}.mat-nested-tree-node{border-bottom-width:0}\n"],
        encapsulation: 2
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTree, [{
            type: Component,
            args: [{
                    selector: "mat-tree",
                    exportAs: "matTree",
                    template: `<ng-container matTreeNodeOutlet></ng-container>`,
                    host: {
                        "class": "mat-tree"
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.Default,
                    providers: [{
                            provide: CdkTree,
                            useExisting: MatTree
                        }],
                    imports: [MatTreeNodeOutlet],
                    styles: [".mat-tree{display:block;background-color:var(--mat-tree-container-background-color, var(--mat-sys-surface))}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color, var(--mat-sys-on-surface));font-family:var(--mat-tree-node-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-tree-node-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-tree-node-text-weight, var(--mat-sys-body-large-weight))}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height, 48px)}.mat-nested-tree-node{border-bottom-width:0}\n"]
                }]
        }], null, {
        _nodeOutlet: [{
                type: ViewChild,
                args: [MatTreeNodeOutlet, {
                        static: true
                    }]
            }]
    });
})();
var MatTreeNodeToggle = class _MatTreeNodeToggle extends CdkTreeNodeToggle {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵMatTreeNodeToggle_BaseFactory;
        return function MatTreeNodeToggle_Factory(__ngFactoryType__) {
            return (ɵMatTreeNodeToggle_BaseFactory || (ɵMatTreeNodeToggle_BaseFactory = i0.ɵɵgetInheritedFactory(_MatTreeNodeToggle)))(__ngFactoryType__ || _MatTreeNodeToggle);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatTreeNodeToggle,
        selectors: [["", "matTreeNodeToggle", ""]],
        inputs: {
            recursive: [0, "matTreeNodeToggleRecursive", "recursive"]
        },
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkTreeNodeToggle,
                    useExisting: _MatTreeNodeToggle
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTreeNodeToggle, [{
            type: Directive,
            args: [{
                    selector: "[matTreeNodeToggle]",
                    providers: [{
                            provide: CdkTreeNodeToggle,
                            useExisting: MatTreeNodeToggle
                        }],
                    inputs: [{
                            name: "recursive",
                            alias: "matTreeNodeToggleRecursive"
                        }]
                }]
        }], null, null);
})();
var MAT_TREE_DIRECTIVES = [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];
var MatTreeModule = class _MatTreeModule {
    static ɵfac = function MatTreeModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatTreeModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatTreeModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [CdkTreeModule, BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatTreeModule, [{
            type: NgModule,
            args: [{
                    imports: [CdkTreeModule, ...MAT_TREE_DIRECTIVES],
                    exports: [BidiModule, MAT_TREE_DIRECTIVES]
                }]
        }], null, null);
})();
var MatTreeFlattener = class {
    transformFunction;
    getLevel;
    isExpandable;
    getChildren;
    constructor(transformFunction, getLevel, isExpandable, getChildren) {
        this.transformFunction = transformFunction;
        this.getLevel = getLevel;
        this.isExpandable = isExpandable;
        this.getChildren = getChildren;
    }
    _flattenNode(node, level, resultNodes, parentMap) {
        const flatNode = this.transformFunction(node, level);
        resultNodes.push(flatNode);
        if (this.isExpandable(flatNode)) {
            const childrenNodes = this.getChildren(node);
            if (childrenNodes) {
                if (Array.isArray(childrenNodes)) {
                    this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
                }
                else {
                    childrenNodes.pipe(take(1)).subscribe(children => {
                        this._flattenChildren(children, level, resultNodes, parentMap);
                    });
                }
            }
        }
        return resultNodes;
    }
    _flattenChildren(children, level, resultNodes, parentMap) {
        children.forEach((child, index) => {
            let childParentMap = parentMap.slice();
            childParentMap.push(index != children.length - 1);
            this._flattenNode(child, level + 1, resultNodes, childParentMap);
        });
    }
    /**
     * Flatten a list of node type T to flattened version of node F.
     * Please note that type T may be nested, and the length of `structuredData` may be different
     * from that of returned list `F[]`.
     */
    flattenNodes(structuredData) {
        let resultNodes = [];
        structuredData.forEach(node => this._flattenNode(node, 0, resultNodes, []));
        return resultNodes;
    }
    /**
     * Expand flattened node with current expansion status.
     * The returned list may have different length.
     */
    expandFlattenedNodes(nodes, treeControl) {
        let results = [];
        let currentExpand = [];
        currentExpand[0] = true;
        nodes.forEach(node => {
            let expand = true;
            for (let i = 0; i <= this.getLevel(node); i++) {
                expand = expand && currentExpand[i];
            }
            if (expand) {
                results.push(node);
            }
            if (this.isExpandable(node)) {
                currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
            }
        });
        return results;
    }
};
var MatTreeFlatDataSource = class extends DataSource {
    _treeControl;
    _treeFlattener;
    _flattenedData = new BehaviorSubject([]);
    _expandedData = new BehaviorSubject([]);
    get data() {
        return this._data.value;
    }
    set data(value) {
        this._data.next(value);
        this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));
        this._treeControl.dataNodes = this._flattenedData.value;
    }
    _data = new BehaviorSubject([]);
    constructor(_treeControl, _treeFlattener, initialData) {
        super();
        this._treeControl = _treeControl;
        this._treeFlattener = _treeFlattener;
        if (initialData) {
            this.data = initialData;
        }
    }
    connect(collectionViewer) {
        return merge(collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData).pipe(map(() => {
            this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));
            return this._expandedData.value;
        }));
    }
    disconnect() { }
};
var MatTreeNestedDataSource = class extends DataSource {
    /**
     * Data for the nested tree
     */
    get data() {
        return this._data.value;
    }
    set data(value) {
        this._data.next(value);
    }
    _data = new BehaviorSubject([]);
    connect(collectionViewer) {
        return merge(...[collectionViewer.viewChange, this._data]).pipe(map(() => this.data));
    }
    disconnect() { }
};
export { MatNestedTreeNode, MatTree, MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNestedDataSource, MatTreeNode, MatTreeNodeDef, MatTreeNodeOutlet, MatTreeNodePadding, MatTreeNodeToggle };
