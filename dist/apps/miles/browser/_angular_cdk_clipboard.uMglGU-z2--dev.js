import "@nf-internal/chunk-54JPAORE";
// node_modules/@angular/cdk/fesm2022/clipboard.mjs
import * as i0 from "@angular/core";
import { inject, DOCUMENT, Injectable, InjectionToken, NgZone, EventEmitter, Directive, Input, Output, NgModule } from "@angular/core";
var PendingCopy = class {
    _document;
    _textarea;
    constructor(text, _document) {
        this._document = _document;
        const textarea = this._textarea = this._document.createElement("textarea");
        const styles = textarea.style;
        styles.position = "fixed";
        styles.top = styles.opacity = "0";
        styles.left = "-999em";
        textarea.setAttribute("aria-hidden", "true");
        textarea.value = text;
        textarea.readOnly = true;
        (this._document.fullscreenElement || this._document.body).appendChild(textarea);
    }
    /** Finishes copying the text. */
    copy() {
        const textarea = this._textarea;
        let successful = false;
        try {
            if (textarea) {
                const currentFocus = this._document.activeElement;
                textarea.select();
                textarea.setSelectionRange(0, textarea.value.length);
                successful = this._document.execCommand("copy");
                if (currentFocus) {
                    currentFocus.focus();
                }
            }
        }
        catch { }
        return successful;
    }
    /** Cleans up DOM changes used to perform the copy operation. */
    destroy() {
        const textarea = this._textarea;
        if (textarea) {
            textarea.remove();
            this._textarea = void 0;
        }
    }
};
var Clipboard = class _Clipboard {
    _document = inject(DOCUMENT);
    constructor() { }
    /**
     * Copies the provided text into the user's clipboard.
     *
     * @param text The string to copy.
     * @returns Whether the operation was successful.
     */
    copy(text) {
        const pendingCopy = this.beginCopy(text);
        const successful = pendingCopy.copy();
        pendingCopy.destroy();
        return successful;
    }
    /**
     * Prepares a string to be copied later. This is useful for large strings
     * which take too long to successfully render and be copied in the same tick.
     *
     * The caller must call `destroy` on the returned `PendingCopy`.
     *
     * @param text The string to copy.
     * @returns the pending copy operation.
     */
    beginCopy(text) {
        return new PendingCopy(text, this._document);
    }
    static ɵfac = function Clipboard_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _Clipboard)();
    };
    static ɵprov = /* @__PURE__ */ i0.ɵɵdefineInjectable({
        token: _Clipboard,
        factory: _Clipboard.ɵfac,
        providedIn: "root"
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Clipboard, [{
            type: Injectable,
            args: [{
                    providedIn: "root"
                }]
        }], () => [], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var CdkCopyToClipboard = class _CdkCopyToClipboard {
    _clipboard = inject(Clipboard);
    _ngZone = inject(NgZone);
    /** Content to be copied. */
    text = "";
    /**
     * How many times to attempt to copy the text. This may be necessary for longer text, because
     * the browser needs time to fill an intermediate textarea element and copy the content.
     */
    attempts = 1;
    /**
     * Emits when some text is copied to the clipboard. The
     * emitted value indicates whether copying was successful.
     */
    copied = new EventEmitter();
    /** Copies that are currently being attempted. */
    _pending = /* @__PURE__ */ new Set();
    /** Whether the directive has been destroyed. */
    _destroyed;
    /** Timeout for the current copy attempt. */
    _currentTimeout;
    constructor() {
        const config = inject(CDK_COPY_TO_CLIPBOARD_CONFIG, {
            optional: true
        });
        if (config && config.attempts != null) {
            this.attempts = config.attempts;
        }
    }
    /** Copies the current text to the clipboard. */
    copy(attempts = this.attempts) {
        if (attempts > 1) {
            let remainingAttempts = attempts;
            const pending = this._clipboard.beginCopy(this.text);
            this._pending.add(pending);
            const attempt = () => {
                const successful = pending.copy();
                if (!successful && --remainingAttempts && !this._destroyed) {
                    this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
                }
                else {
                    this._currentTimeout = null;
                    this._pending.delete(pending);
                    pending.destroy();
                    this.copied.emit(successful);
                }
            };
            attempt();
        }
        else {
            this.copied.emit(this._clipboard.copy(this.text));
        }
    }
    ngOnDestroy() {
        if (this._currentTimeout) {
            clearTimeout(this._currentTimeout);
        }
        this._pending.forEach(copy => copy.destroy());
        this._pending.clear();
        this._destroyed = true;
    }
    static ɵfac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _CdkCopyToClipboard)();
    };
    static ɵdir = /* @__PURE__ */ i0.ɵɵdefineDirective({
        type: _CdkCopyToClipboard,
        selectors: [["", "cdkCopyToClipboard", ""]],
        hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
                    return ctx.copy();
                });
            }
        },
        inputs: {
            text: [0, "cdkCopyToClipboard", "text"],
            attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
        },
        outputs: {
            copied: "cdkCopyToClipboardCopied"
        }
    });
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkCopyToClipboard, [{
            type: Directive,
            args: [{
                    selector: "[cdkCopyToClipboard]",
                    host: {
                        "(click)": "copy()"
                    }
                }]
        }], () => [], {
        text: [{
                type: Input,
                args: ["cdkCopyToClipboard"]
            }],
        attempts: [{
                type: Input,
                args: ["cdkCopyToClipboardAttempts"]
            }],
        copied: [{
                type: Output,
                args: ["cdkCopyToClipboardCopied"]
            }]
    });
})();
var ClipboardModule = class _ClipboardModule {
    static ɵfac = function ClipboardModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _ClipboardModule)();
    };
    static ɵmod = /* @__PURE__ */ i0.ɵɵdefineNgModule({
        type: _ClipboardModule
    });
    static ɵinj = /* @__PURE__ */ i0.ɵɵdefineInjector({});
};
(() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClipboardModule, [{
            type: NgModule,
            args: [{
                    imports: [CdkCopyToClipboard],
                    exports: [CdkCopyToClipboard]
                }]
        }], null, null);
})();
export { CDK_COPY_TO_CLIPBOARD_CONFIG, CdkCopyToClipboard, Clipboard, ClipboardModule, PendingCopy };
