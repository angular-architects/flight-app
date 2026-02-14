import {
  MilesComponent
} from "./chunk-MJNGFXV7.js";

// apps/miles/src/app/home/home.component.ts
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
var _HomeComponent = class _HomeComponent {
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeComponent)();
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["flight-demo-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275domElementStart(0, "h2");
    i0.\u0275\u0275text(1, "Welcome!");
    i0.\u0275\u0275domElementEnd();
  }
}, dependencies: [CommonModule], encapsulation: 2 });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "apps/miles/src/app/home/home.component.ts", lineNumber: 11 });
})();

// apps/miles/src/app/next-level/next-level.component.ts
import { Component as Component2 } from "@angular/core";
import { CommonModule as CommonModule2 } from "@angular/common";
import * as i02 from "@angular/core";
var _NextLevelComponent = class _NextLevelComponent {
};
_NextLevelComponent.\u0275fac = function NextLevelComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NextLevelComponent)();
};
_NextLevelComponent.\u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _NextLevelComponent, selectors: [["flight-demo-next-level"]], decls: 3, vars: 0, template: function NextLevelComponent_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275domElementStart(0, "h2");
    i02.\u0275\u0275text(1, "Next Level");
    i02.\u0275\u0275domElementEnd();
    i02.\u0275\u0275text(2, " You need 20,000 more miles to become a senator!\n");
  }
}, dependencies: [CommonModule2], encapsulation: 2 });
var NextLevelComponent = _NextLevelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(NextLevelComponent, { className: "NextLevelComponent", filePath: "apps/miles/src/app/next-level/next-level.component.ts", lineNumber: 11 });
})();

// apps/miles/src/app/app.routes.ts
var APP_ROUTES = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "miles-list",
    component: MilesComponent
  },
  {
    path: "next-level",
    component: NextLevelComponent
  }
];
var app_routes_default = APP_ROUTES;
export {
  APP_ROUTES,
  app_routes_default as default
};
//# sourceMappingURL=Routes.js.map
