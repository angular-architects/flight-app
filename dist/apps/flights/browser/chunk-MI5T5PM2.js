// node_modules/@angular/material/fesm2022/line.mjs
import { BidiModule } from "@angular/cdk/bidi";
import * as i0 from "@angular/core";
import { Directive, NgModule } from "@angular/core";
import { startWith } from "rxjs/operators";
var MatLine = class _MatLine {
    static ɵfac = function MatLine_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatLine)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _MatLine,
        selectors: [["", "mat-line", ""], ["", "matLine", ""]],
        hostAttrs: [1, "mat-line"]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatLine, [{
            type: Directive,
            args: [{
                    selector: "[mat-line], [matLine]",
                    host: {
                        "class": "mat-line"
                    }
                }]
        }], null, null);
})();
function setLines(lines, element, prefix = "mat") {
    lines.changes.pipe(startWith(lines)).subscribe(({ length }) => {
        setClass(element, `${prefix}-2-line`, false);
        setClass(element, `${prefix}-3-line`, false);
        setClass(element, `${prefix}-multi-line`, false);
        if (length === 2 || length === 3) {
            setClass(element, `${prefix}-${length}-line`, true);
        }
        else if (length > 3) {
            setClass(element, `${prefix}-multi-line`, true);
        }
    });
}
function setClass(element, className, isAdd) {
    element.nativeElement.classList.toggle(className, isAdd);
}
var MatLineModule = class _MatLineModule {
    static ɵfac = function MatLineModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatLineModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _MatLineModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({
        imports: [BidiModule]
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MatLineModule, [{
            type: NgModule,
            args: [{
                    imports: [MatLine],
                    exports: [MatLine, BidiModule]
                }]
        }], null, null);
})();
export { MatLine, setLines, MatLineModule };
