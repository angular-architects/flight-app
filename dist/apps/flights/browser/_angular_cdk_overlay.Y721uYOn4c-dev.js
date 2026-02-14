import { BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectionPositionPair, FlexibleConnectedPositionStrategy, GlobalPositionStrategy, NoopScrollStrategy, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayOutsideClickDispatcher, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, STANDARD_DROPDOWN_ADJACENT_POSITIONS, STANDARD_DROPDOWN_BELOW_POSITIONS, ScrollStrategyOptions, ScrollingVisibility, createBlockScrollStrategy, createCloseScrollStrategy, createFlexibleConnectedPositionStrategy, createGlobalPositionStrategy, createNoopScrollStrategy, createOverlayRef, createRepositionScrollStrategy, validateHorizontalPosition, validateVerticalPosition } from "@nf-internal/chunk-HXLYKRS5";
import "@nf-internal/chunk-ZU6E73RP";
import "@nf-internal/chunk-KEAOYMN5";
import { CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableElement, CdkVirtualScrollableWindow, ScrollDispatcher, ViewportRuler } from "@nf-internal/chunk-P2TUBJGR";
import "@nf-internal/chunk-R44VMRSN";
import "@nf-internal/chunk-KPYFKLQQ";
import "@nf-internal/chunk-HRAF4QVP";
import "@nf-internal/chunk-JD5JPQAG";
import "@nf-internal/chunk-IANTZR4E";
import "@nf-internal/chunk-26DDZNO4";
import "@nf-internal/chunk-F3H34SIQ";
import { Dir } from "@nf-internal/chunk-XABR7MXZ";
import "@nf-internal/chunk-GSHCXC35";
import "@nf-internal/chunk-ALX3T2NV";
import "@nf-internal/chunk-DDFN47J4";
import "@nf-internal/chunk-XODDVZAQ";
import "@nf-internal/chunk-AOJKIHRQ";
import "@nf-internal/chunk-AUAW3OPY";
import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/overlay.mjs
import * as i0 from "@angular/core";
import { inject, RendererFactory2, Injectable } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
var FullscreenOverlayContainer = class _FullscreenOverlayContainer extends OverlayContainer {
    _renderer = inject(RendererFactory2).createRenderer(null, null);
    _fullScreenEventName;
    _cleanupFullScreenListener;
    constructor() {
        super();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._cleanupFullScreenListener?.();
    }
    _createContainer() {
        const eventName = this._getEventName();
        super._createContainer();
        this._adjustParentForFullscreenChange();
        if (eventName) {
            this._cleanupFullScreenListener?.();
            this._cleanupFullScreenListener = this._renderer.listen("document", eventName, () => {
                this._adjustParentForFullscreenChange();
            });
        }
    }
    _adjustParentForFullscreenChange() {
        if (this._containerElement) {
            const fullscreenElement = this.getFullscreenElement();
            const parent = fullscreenElement || this._document.body;
            parent.appendChild(this._containerElement);
        }
    }
    _getEventName() {
        if (!this._fullScreenEventName) {
            const _document = this._document;
            if (_document.fullscreenEnabled) {
                this._fullScreenEventName = "fullscreenchange";
            }
            else if (_document.webkitFullscreenEnabled) {
                this._fullScreenEventName = "webkitfullscreenchange";
            }
            else if (_document.mozFullScreenEnabled) {
                this._fullScreenEventName = "mozfullscreenchange";
            }
            else if (_document.msFullscreenEnabled) {
                this._fullScreenEventName = "MSFullscreenChange";
            }
        }
        return this._fullScreenEventName;
    }
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    getFullscreenElement() {
        const _document = this._document;
        return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
    }
    static ɵfac = function FullscreenOverlayContainer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _FullscreenOverlayContainer)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _FullscreenOverlayContainer,
        factory: _FullscreenOverlayContainer.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FullscreenOverlayContainer, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
export { BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CdkScrollable, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayOutsideClickDispatcher, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, STANDARD_DROPDOWN_ADJACENT_POSITIONS, STANDARD_DROPDOWN_BELOW_POSITIONS, ScrollDispatcher, ScrollStrategyOptions, ScrollingVisibility, ViewportRuler, createBlockScrollStrategy, createCloseScrollStrategy, createFlexibleConnectedPositionStrategy, createGlobalPositionStrategy, createNoopScrollStrategy, createOverlayRef, createRepositionScrollStrategy, validateHorizontalPosition, validateVerticalPosition, CdkFixedSizeVirtualScroll as ɵɵCdkFixedSizeVirtualScroll, CdkScrollableModule as ɵɵCdkScrollableModule, CdkVirtualForOf as ɵɵCdkVirtualForOf, CdkVirtualScrollViewport as ɵɵCdkVirtualScrollViewport, CdkVirtualScrollableElement as ɵɵCdkVirtualScrollableElement, CdkVirtualScrollableWindow as ɵɵCdkVirtualScrollableWindow, Dir as ɵɵDir };
