// node_modules/@angular/material/fesm2022/animation.mjs
import { MediaMatcher } from "@angular/cdk/layout";
import { InjectionToken, inject, ANIMATION_MODULE_TYPE } from "@angular/core";
var MATERIAL_ANIMATIONS = new InjectionToken("MATERIAL_ANIMATIONS");
var AnimationCurves = class {
    static STANDARD_CURVE = "cubic-bezier(0.4,0.0,0.2,1)";
    static DECELERATION_CURVE = "cubic-bezier(0.0,0.0,0.2,1)";
    static ACCELERATION_CURVE = "cubic-bezier(0.4,0.0,1,1)";
    static SHARP_CURVE = "cubic-bezier(0.4,0.0,0.6,1)";
};
var AnimationDurations = class {
    static COMPLEX = "375ms";
    static ENTERING = "225ms";
    static EXITING = "195ms";
};
var reducedMotion = null;
function _getAnimationsState() {
    if (inject(MATERIAL_ANIMATIONS, {
        optional: true
    })?.animationsDisabled || inject(ANIMATION_MODULE_TYPE, {
        optional: true
    }) === "NoopAnimations") {
        return "di-disabled";
    }
    reducedMotion ??= inject(MediaMatcher).matchMedia("(prefers-reduced-motion)").matches;
    return reducedMotion ? "reduced-motion" : "enabled";
}
function _animationsDisabled() {
    return _getAnimationsState() !== "enabled";
}
export { MATERIAL_ANIMATIONS, AnimationCurves, AnimationDurations, _getAnimationsState, _animationsDisabled };
