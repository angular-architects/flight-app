import { _ViewRepeaterOperation } from "@nf-internal/chunk-AOJKIHRQ";
// node_modules/@angular/cdk/fesm2022/dispose-view-repeater-strategy.mjs
var _DisposeViewRepeaterStrategy = class {
    applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
        changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
            let view;
            let operation;
            if (record.previousIndex == null) {
                const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
                operation = _ViewRepeaterOperation.INSERTED;
            }
            else if (currentIndex == null) {
                viewContainerRef.remove(adjustedPreviousIndex);
                operation = _ViewRepeaterOperation.REMOVED;
            }
            else {
                view = viewContainerRef.get(adjustedPreviousIndex);
                viewContainerRef.move(view, currentIndex);
                operation = _ViewRepeaterOperation.MOVED;
            }
            if (itemViewChanged) {
                itemViewChanged({
                    context: view?.context,
                    operation,
                    record
                });
            }
        });
    }
    detach() { }
};
export { _DisposeViewRepeaterStrategy };
