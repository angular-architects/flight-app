import { ListKeyManager } from "@nf-internal/chunk-7WHZXMUH";
// node_modules/@angular/cdk/fesm2022/focus-key-manager.mjs
var FocusKeyManager = class extends ListKeyManager {
    _origin = "program";
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param origin Focus origin to be used when focusing items.
     */
    setFocusOrigin(origin) {
        this._origin = origin;
        return this;
    }
    setActiveItem(item) {
        super.setActiveItem(item);
        if (this.activeItem) {
            this.activeItem.focus(this._origin);
        }
    }
};
export { FocusKeyManager };
