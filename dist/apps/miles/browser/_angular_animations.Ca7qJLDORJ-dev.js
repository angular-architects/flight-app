import { AUTO_STYLE, AnimationGroupPlayer, AnimationMetadataType, NoopAnimationPlayer, animate, animateChild, animation, group, keyframes, query, sequence, stagger, state, style, transition, trigger, useAnimation, ɵPRE_STYLE } from "@nf-internal/chunk-ECJ5AUNR";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/animations/fesm2022/animations.mjs
import * as i0 from "@angular/core";
import { inject, Injectable, ANIMATION_MODULE_TYPE, ɵRuntimeError as _RuntimeError, DOCUMENT, Inject, ViewEncapsulation } from "@angular/core";
var AnimationBuilder = class _AnimationBuilder {
    static ɵfac = function AnimationBuilder_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _AnimationBuilder)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _AnimationBuilder,
        factory: () => (() => inject(BrowserAnimationBuilder))(),
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnimationBuilder, [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                    useFactory: () => inject(BrowserAnimationBuilder)
                }]
        }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
    animationModuleType = inject(ANIMATION_MODULE_TYPE, {
        optional: true
    });
    _nextAnimationId = 0;
    _renderer;
    constructor(rootRenderer, doc) {
        super();
        const typeData = {
            id: "0",
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {
                animation: []
            }
        };
        this._renderer = rootRenderer.createRenderer(doc.body, typeData);
        if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
            throw new _RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
        }
    }
    build(animation2) {
        const id = this._nextAnimationId;
        this._nextAnimationId++;
        const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
        issueAnimationCommand(this._renderer, null, id, "register", [entry]);
        return new BrowserAnimationFactory(id, this._renderer);
    }
    static ɵfac = function BrowserAnimationBuilder_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BrowserAnimationBuilder)(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(DOCUMENT));
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _BrowserAnimationBuilder,
        factory: _BrowserAnimationBuilder.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BrowserAnimationBuilder, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [{
            type: i0.RendererFactory2
        }, {
            type: Document,
            decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }]
        }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
    _id;
    _renderer;
    constructor(_id, _renderer) {
        super();
        this._id = _id;
        this._renderer = _renderer;
    }
    create(element, options) {
        return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
    }
};
var RendererAnimationPlayer = class {
    id;
    element;
    _renderer;
    parentPlayer = null;
    _started = false;
    constructor(id, element, options, _renderer) {
        this.id = id;
        this.element = element;
        this._renderer = _renderer;
        this._command("create", options);
    }
    _listen(eventName, callback) {
        return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
    }
    _command(command, ...args) {
        issueAnimationCommand(this._renderer, this.element, this.id, command, args);
    }
    onDone(fn) {
        this._listen("done", fn);
    }
    onStart(fn) {
        this._listen("start", fn);
    }
    onDestroy(fn) {
        this._listen("destroy", fn);
    }
    init() {
        this._command("init");
    }
    hasStarted() {
        return this._started;
    }
    play() {
        this._command("play");
        this._started = true;
    }
    pause() {
        this._command("pause");
    }
    restart() {
        this._command("restart");
    }
    finish() {
        this._command("finish");
    }
    destroy() {
        this._command("destroy");
    }
    reset() {
        this._command("reset");
        this._started = false;
    }
    setPosition(p) {
        this._command("setPosition", p);
    }
    getPosition() {
        return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
    }
    totalTime = 0;
};
function issueAnimationCommand(renderer, element, id, command, args) {
    renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
    const type = renderer.ɵtype;
    if (type === 0) {
        return renderer;
    }
    else if (type === 1) {
        return renderer.animationRenderer;
    }
    return null;
}
function isAnimationRenderer(renderer) {
    const type = renderer.ɵtype;
    return type === 0 || type === 1;
}
export { AUTO_STYLE, AnimationBuilder, AnimationFactory, AnimationMetadataType, NoopAnimationPlayer, animate, animateChild, animation, group, keyframes, query, sequence, stagger, state, style, transition, trigger, useAnimation, AnimationGroupPlayer as ɵAnimationGroupPlayer, BrowserAnimationBuilder as ɵBrowserAnimationBuilder, ɵPRE_STYLE };
/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v21.0.0-next.5
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/ 
