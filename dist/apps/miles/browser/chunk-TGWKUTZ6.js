import { ListKeyManager } from "@nf-internal/chunk-7WHZXMUH";
// node_modules/@angular/cdk/fesm2022/activedescendant-key-manager.mjs
var ActiveDescendantKeyManager = class extends ListKeyManager {
    setActiveItem(index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        super.setActiveItem(index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    }
};
export { ActiveDescendantKeyManager };
