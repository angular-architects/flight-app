// node_modules/@angular/cdk/fesm2022/private.mjs
import * as i0 from "@angular/core";
import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core";
var _VisuallyHiddenLoader = class __VisuallyHiddenLoader {
    static ɵfac = function _VisuallyHiddenLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || __VisuallyHiddenLoader)();
    };
    static ɵcmp = /* @__PURE__ */ i0.ɵɵdefineComponent({
        type: __VisuallyHiddenLoader,
        selectors: [["ng-component"]],
        exportAs: ["cdkVisuallyHidden"],
        decls: 0,
        vars: 0,
        template: function _VisuallyHiddenLoader_Template(rf, ctx) { },
        styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"],
        encapsulation: 2,
        changeDetection: 0
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(_VisuallyHiddenLoader, [{
            type: Component,
            args: [{
                    exportAs: "cdkVisuallyHidden",
                    encapsulation: ViewEncapsulation.None,
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"]
                }]
        }], null, null);
})();
export { _VisuallyHiddenLoader };
