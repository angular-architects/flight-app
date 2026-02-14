import { Directionality, _resolveDirectionality } from "@nf-internal/chunk-GSHCXC35";
// node_modules/@angular/cdk/fesm2022/bidi.mjs
import * as i0 from "@angular/core";
import { EventEmitter, signal, Directive, Output, Input, NgModule } from "@angular/core";
var Dir = class _Dir {
    /** Whether the `value` has been set to its initial value. */
    _isInitialized = false;
    /** Direction as passed in by the consumer. */
    _rawDir;
    /** Event emitted when the direction changes. */
    change = new EventEmitter();
    /** @docs-private */
    get dir() {
        return this.valueSignal();
    }
    set dir(value) {
        const previousValue = this.valueSignal();
        this.valueSignal.set(_resolveDirectionality(value));
        this._rawDir = value;
        if (previousValue !== this.valueSignal() && this._isInitialized) {
            this.change.emit(this.valueSignal());
        }
    }
    /** Current layout direction of the element. */
    get value() {
        return this.dir;
    }
    valueSignal = signal("ltr", ...(ngDevMode ? [{
            debugName: "valueSignal"
        }] : []));
    /** Initialize once default value has been set. */
    ngAfterContentInit() {
        this._isInitialized = true;
    }
    ngOnDestroy() {
        this.change.complete();
    }
    static ɵfac = function Dir_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Dir)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _Dir,
        selectors: [["", "dir", ""]],
        hostVars: 1,
        hostBindings: function Dir_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("dir", ctx._rawDir);
            }
        },
        inputs: {
            dir: "dir"
        },
        outputs: {
            change: "dirChange"
        },
        exportAs: ["dir"],
        features: [i0.ɵɵProvidersFeature([{
                    provide: Directionality,
                    useExisting: _Dir
                }])]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Dir, [{
            type: Directive,
            args: [{
                    selector: "[dir]",
                    providers: [{
                            provide: Directionality,
                            useExisting: Dir
                        }],
                    host: {
                        "[attr.dir]": "_rawDir"
                    },
                    exportAs: "dir"
                }]
        }], null, {
        change: [{
                type: Output,
                args: ["dirChange"]
            }],
        dir: [{
                type: Input
            }]
    });
})();
var BidiModule = class _BidiModule {
    static ɵfac = function BidiModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _BidiModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _BidiModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({});
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BidiModule, [{
            type: NgModule,
            args: [{
                    imports: [Dir],
                    exports: [Dir]
                }]
        }], null, null);
})();
export { Dir, BidiModule };
