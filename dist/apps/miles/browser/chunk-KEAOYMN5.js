// node_modules/@angular/cdk/fesm2022/portal.mjs
import * as i0 from "@angular/core";
import { ElementRef, NgModuleRef, EnvironmentInjector, createComponent, Injector, inject, TemplateRef, ViewContainerRef, Directive, DOCUMENT, EventEmitter, Input, Output, NgModule } from "@angular/core";
function throwNullPortalError() {
    throw Error("Must provide a portal to attach");
}
function throwPortalAlreadyAttachedError() {
    throw Error("Host already has a portal attached");
}
function throwPortalOutletAlreadyDisposedError() {
    throw Error("This PortalOutlet has already been disposed");
}
function throwUnknownPortalTypeError() {
    throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.");
}
function throwNullPortalOutletError() {
    throw Error("Attempting to attach a portal to a null PortalOutlet");
}
function throwNoPortalAttachedError() {
    throw Error("Attempting to detach a portal that is not attached to a host");
}
var Portal = class {
    _attachedHost;
    /** Attach this portal to a host. */
    attach(host) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            if (host == null) {
                throwNullPortalOutletError();
            }
            if (host.hasAttached()) {
                throwPortalAlreadyAttachedError();
            }
        }
        this._attachedHost = host;
        return host.attach(this);
    }
    /** Detach this portal from its host */
    detach() {
        let host = this._attachedHost;
        if (host != null) {
            this._attachedHost = null;
            host.detach();
        }
        else if (typeof ngDevMode === "undefined" || ngDevMode) {
            throwNoPortalAttachedError();
        }
    }
    /** Whether this portal is attached to a host. */
    get isAttached() {
        return this._attachedHost != null;
    }
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    setAttachedHost(host) {
        this._attachedHost = host;
    }
};
var ComponentPortal = class extends Portal {
    /** The type of the component that will be instantiated for attachment. */
    component;
    /**
     * Where the attached component should live in Angular's *logical* component tree.
     * This is different from where the component *renders*, which is determined by the PortalOutlet.
     * The origin is necessary when the host is outside of the Angular application context.
     */
    viewContainerRef;
    /** Injector used for the instantiation of the component. */
    injector;
    /**
     * List of DOM nodes that should be projected through `<ng-content>` of the attached component.
     */
    projectableNodes;
    constructor(component, viewContainerRef, injector, projectableNodes) {
        super();
        this.component = component;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.projectableNodes = projectableNodes;
    }
};
var TemplatePortal = class extends Portal {
    templateRef;
    viewContainerRef;
    context;
    injector;
    constructor(templateRef, viewContainerRef, context, injector) {
        super();
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.context = context;
        this.injector = injector;
    }
    get origin() {
        return this.templateRef.elementRef;
    }
    /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    attach(host, context = this.context) {
        this.context = context;
        return super.attach(host);
    }
    detach() {
        this.context = void 0;
        return super.detach();
    }
};
var DomPortal = class extends Portal {
    /** DOM node hosting the portal's content. */
    element;
    constructor(element) {
        super();
        this.element = element instanceof ElementRef ? element.nativeElement : element;
    }
};
var BasePortalOutlet = class {
    /** The portal currently attached to the host. */
    _attachedPortal;
    /** A function that will permanently dispose this host. */
    _disposeFn;
    /** Whether this host has already been permanently disposed. */
    _isDisposed = false;
    /** Whether this host has an attached portal. */
    hasAttached() {
        return !!this._attachedPortal;
    }
    /** Attaches a portal. */
    attach(portal) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            if (!portal) {
                throwNullPortalError();
            }
            if (this.hasAttached()) {
                throwPortalAlreadyAttachedError();
            }
            if (this._isDisposed) {
                throwPortalOutletAlreadyDisposedError();
            }
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        else if (this.attachDomPortal && portal instanceof DomPortal) {
            this._attachedPortal = portal;
            return this.attachDomPortal(portal);
        }
        if (typeof ngDevMode === "undefined" || ngDevMode) {
            throwUnknownPortalTypeError();
        }
    }
    // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.
    attachDomPortal = null;
    /** Detaches a previously attached portal. */
    detach() {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    }
    /** Permanently dispose of this portal host. */
    dispose() {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    }
    /** @docs-private */
    setDisposeFn(fn) {
        this._disposeFn = fn;
    }
    _invokeDisposeFn() {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    }
};
var DomPortalOutlet = class extends BasePortalOutlet {
    outletElement;
    _appRef;
    _defaultInjector;
    /**
     * @param outletElement Element into which the content is projected.
     * @param _appRef Reference to the application. Only used in component portals when there
     *   is no `ViewContainerRef` available.
     * @param _defaultInjector Injector to use as a fallback when the portal being attached doesn't
     *   have one. Only used for component portals.
     */
    constructor(outletElement, _appRef, _defaultInjector) {
        super();
        this.outletElement = outletElement;
        this._appRef = _appRef;
        this._defaultInjector = _defaultInjector;
    }
    /**
     * Attach the given ComponentPortal to DOM element.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    attachComponentPortal(portal) {
        let componentRef;
        if (portal.viewContainerRef) {
            const injector = portal.injector || portal.viewContainerRef.injector;
            const ngModuleRef = injector.get(NgModuleRef, null, {
                optional: true
            }) || void 0;
            componentRef = portal.viewContainerRef.createComponent(portal.component, {
                index: portal.viewContainerRef.length,
                injector,
                ngModuleRef,
                projectableNodes: portal.projectableNodes || void 0
            });
            this.setDisposeFn(() => componentRef.destroy());
        }
        else {
            if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._appRef) {
                throw Error("Cannot attach component portal to outlet without an ApplicationRef.");
            }
            const appRef = this._appRef;
            const elementInjector = portal.injector || this._defaultInjector || Injector.NULL;
            const environmentInjector = elementInjector.get(EnvironmentInjector, appRef.injector);
            componentRef = createComponent(portal.component, {
                elementInjector,
                environmentInjector,
                projectableNodes: portal.projectableNodes || void 0
            });
            appRef.attachView(componentRef.hostView);
            this.setDisposeFn(() => {
                if (appRef.viewCount > 0) {
                    appRef.detachView(componentRef.hostView);
                }
                componentRef.destroy();
            });
        }
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        this._attachedPortal = portal;
        return componentRef;
    }
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    attachTemplatePortal(portal) {
        let viewContainer = portal.viewContainerRef;
        let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
            injector: portal.injector
        });
        viewRef.rootNodes.forEach(rootNode => this.outletElement.appendChild(rootNode));
        viewRef.detectChanges();
        this.setDisposeFn(() => {
            let index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        });
        this._attachedPortal = portal;
        return viewRef;
    }
    /**
     * Attaches a DOM portal by transferring its content into the outlet.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */
    attachDomPortal = portal => {
        const element = portal.element;
        if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw Error("DOM portal content must be attached to a parent node.");
        }
        const anchorNode = this.outletElement.ownerDocument.createComment("dom-portal");
        element.parentNode.insertBefore(anchorNode, element);
        this.outletElement.appendChild(element);
        this._attachedPortal = portal;
        super.setDisposeFn(() => {
            if (anchorNode.parentNode) {
                anchorNode.parentNode.replaceChild(element, anchorNode);
            }
        });
    };
    /**
     * Clears out a portal from the DOM.
     */
    dispose() {
        super.dispose();
        this.outletElement.remove();
    }
    /** Gets the root HTMLElement for an instantiated component. */
    _getComponentRootNode(componentRef) {
        return componentRef.hostView.rootNodes[0];
    }
};
var CdkPortal = class _CdkPortal extends TemplatePortal {
    constructor() {
        const templateRef = inject(TemplateRef);
        const viewContainerRef = inject(ViewContainerRef);
        super(templateRef, viewContainerRef);
    }
    static ɵfac = function CdkPortal_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkPortal)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkPortal,
        selectors: [["", "cdkPortal", ""]],
        exportAs: ["cdkPortal"],
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPortal, [{
            type: Directive,
            args: [{
                    selector: "[cdkPortal]",
                    exportAs: "cdkPortal"
                }]
        }], () => [], null);
})();
var TemplatePortalDirective = class _TemplatePortalDirective extends CdkPortal {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵTemplatePortalDirective_BaseFactory;
        return function TemplatePortalDirective_Factory(__ngFactoryType__) {
            return (ɵTemplatePortalDirective_BaseFactory || (ɵTemplatePortalDirective_BaseFactory = i0.ɵɵgetInheritedFactory(_TemplatePortalDirective)))(__ngFactoryType__ || _TemplatePortalDirective);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _TemplatePortalDirective,
        selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
        exportAs: ["cdkPortal"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkPortal,
                    useExisting: _TemplatePortalDirective
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TemplatePortalDirective, [{
            type: Directive,
            args: [{
                    selector: "[cdk-portal], [portal]",
                    exportAs: "cdkPortal",
                    providers: [{
                            provide: CdkPortal,
                            useExisting: TemplatePortalDirective
                        }]
                }]
        }], null, null);
})();
var CdkPortalOutlet = class _CdkPortalOutlet extends BasePortalOutlet {
    _moduleRef = inject(NgModuleRef, {
        optional: true
    });
    _document = inject(DOCUMENT);
    _viewContainerRef = inject(ViewContainerRef);
    /** Whether the portal component is initialized. */
    _isInitialized = false;
    /** Reference to the currently-attached component/view ref. */
    _attachedRef;
    constructor() {
        super();
    }
    /** Portal associated with the Portal outlet. */
    get portal() {
        return this._attachedPortal;
    }
    set portal(portal) {
        if (this.hasAttached() && !portal && !this._isInitialized) {
            return;
        }
        if (this.hasAttached()) {
            super.detach();
        }
        if (portal) {
            super.attach(portal);
        }
        this._attachedPortal = portal || null;
    }
    /** Emits when a portal is attached to the outlet. */
    attached = new EventEmitter();
    /** Component or view reference that is attached to the portal. */
    get attachedRef() {
        return this._attachedRef;
    }
    ngOnInit() {
        this._isInitialized = true;
    }
    ngOnDestroy() {
        super.dispose();
        this._attachedRef = this._attachedPortal = null;
    }
    /**
     * Attach the given ComponentPortal to this PortalOutlet.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    attachComponentPortal(portal) {
        portal.setAttachedHost(this);
        const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
        const ref = viewContainerRef.createComponent(portal.component, {
            index: viewContainerRef.length,
            injector: portal.injector || viewContainerRef.injector,
            projectableNodes: portal.projectableNodes || void 0,
            ngModuleRef: this._moduleRef || void 0
        });
        if (viewContainerRef !== this._viewContainerRef) {
            this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
        }
        super.setDisposeFn(() => ref.destroy());
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    }
    /**
     * Attach the given TemplatePortal to this PortalHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    attachTemplatePortal(portal) {
        portal.setAttachedHost(this);
        const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
            injector: portal.injector
        });
        super.setDisposeFn(() => this._viewContainerRef.clear());
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    }
    /**
     * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */
    attachDomPortal = portal => {
        const element = portal.element;
        if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw Error("DOM portal content must be attached to a parent node.");
        }
        const anchorNode = this._document.createComment("dom-portal");
        portal.setAttachedHost(this);
        element.parentNode.insertBefore(anchorNode, element);
        this._getRootNode().appendChild(element);
        this._attachedPortal = portal;
        super.setDisposeFn(() => {
            if (anchorNode.parentNode) {
                anchorNode.parentNode.replaceChild(element, anchorNode);
            }
        });
    };
    /** Gets the root node of the portal outlet. */
    _getRootNode() {
        const nativeElement = this._viewContainerRef.element.nativeElement;
        return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
    }
    static ɵfac = function CdkPortalOutlet_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkPortalOutlet)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkPortalOutlet,
        selectors: [["", "cdkPortalOutlet", ""]],
        inputs: {
            portal: [0, "cdkPortalOutlet", "portal"]
        },
        outputs: {
            attached: "attached"
        },
        exportAs: ["cdkPortalOutlet"],
        features: [i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPortalOutlet, [{
            type: Directive,
            args: [{
                    selector: "[cdkPortalOutlet]",
                    exportAs: "cdkPortalOutlet"
                }]
        }], () => [], {
        portal: [{
                type: Input,
                args: ["cdkPortalOutlet"]
            }],
        attached: [{
                type: Output
            }]
    });
})();
var PortalHostDirective = class _PortalHostDirective extends CdkPortalOutlet {
    static ɵfac = /* @__PURE__ */ (() => {
        let ɵPortalHostDirective_BaseFactory;
        return function PortalHostDirective_Factory(__ngFactoryType__) {
            return (ɵPortalHostDirective_BaseFactory || (ɵPortalHostDirective_BaseFactory = i0.ɵɵgetInheritedFactory(_PortalHostDirective)))(__ngFactoryType__ || _PortalHostDirective);
        };
    })();
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _PortalHostDirective,
        selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
        inputs: {
            portal: [0, "cdkPortalHost", "portal"]
        },
        exportAs: ["cdkPortalHost"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: CdkPortalOutlet,
                    useExisting: _PortalHostDirective
                }]), i0.ɵɵInheritDefinitionFeature]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PortalHostDirective, [{
            type: Directive,
            args: [{
                    selector: "[cdkPortalHost], [portalHost]",
                    exportAs: "cdkPortalHost",
                    inputs: [{
                            name: "portal",
                            alias: "cdkPortalHost"
                        }],
                    providers: [{
                            provide: CdkPortalOutlet,
                            useExisting: PortalHostDirective
                        }]
                }]
        }], null, null);
})();
var PortalModule = class _PortalModule {
    static ɵfac = function PortalModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _PortalModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _PortalModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({});
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PortalModule, [{
            type: NgModule,
            args: [{
                    imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
                    exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
                }]
        }], null, null);
})();
export { Portal, ComponentPortal, TemplatePortal, DomPortal, BasePortalOutlet, DomPortalOutlet, CdkPortal, TemplatePortalDirective, CdkPortalOutlet, PortalHostDirective, PortalModule };
