// libs/util-auth/src/lib/util-auth/util-auth.component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
var _UtilAuthComponent = class _UtilAuthComponent {
};
_UtilAuthComponent.\u0275fac = function UtilAuthComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UtilAuthComponent)();
};
_UtilAuthComponent.\u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _UtilAuthComponent, selectors: [["flight-demo-util-auth"]], decls: 2, vars: 0, template: function UtilAuthComponent_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275domElementStart(0, "p");
    i0.\u0275\u0275text(1, "util-auth works!");
    i0.\u0275\u0275domElementEnd();
  }
}, dependencies: [CommonModule], encapsulation: 2 });
var UtilAuthComponent = _UtilAuthComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(UtilAuthComponent, { className: "UtilAuthComponent", filePath: "libs/util-auth/src/lib/util-auth/util-auth.component.ts", lineNumber: 11 });
})();

// libs/util-auth/src/lib/auth.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as i02 from "@angular/core";
var _AuthService = class _AuthService {
  constructor() {
    this.userName = new BehaviorSubject("");
  }
  login(userName) {
    this.userName.next(userName);
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)();
};
_AuthService.\u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
export {
  AuthService,
  UtilAuthComponent
};
//# sourceMappingURL=_flight_demo_util_auth.js.map
