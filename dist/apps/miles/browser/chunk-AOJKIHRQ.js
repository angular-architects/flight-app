import { DataSource } from "@nf-internal/chunk-AUAW3OPY";
// node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy.mjs
import { isObservable, of } from "rxjs";
import { InjectionToken } from "@angular/core";
var ArrayDataSource = class extends DataSource {
    _data;
    constructor(_data) {
        super();
        this._data = _data;
    }
    connect() {
        return isObservable(this._data) ? this._data : of(this._data);
    }
    disconnect() { }
};
var _ViewRepeaterOperation;
(function (_ViewRepeaterOperation2) {
    _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
    _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
    _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
    _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
var _RecycleViewRepeaterStrategy = class {
    /**
     * The size of the cache used to store unused views.
     * Setting the cache size to `0` will disable caching. Defaults to 20 views.
     */
    viewCacheSize = 20;
    /**
     * View cache that stores embedded view instances that have been previously stamped out,
     * but don't are not currently rendered. The view repeater will reuse these views rather than
     * creating brand new ones.
     *
     * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
     */
    _viewCache = [];
    /** Apply changes to the DOM. */
    applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
        changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
            let view;
            let operation;
            if (record.previousIndex == null) {
                const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
                operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
            }
            else if (currentIndex == null) {
                this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
                operation = _ViewRepeaterOperation.REMOVED;
            }
            else {
                view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
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
    detach() {
        for (const view of this._viewCache) {
            view.destroy();
        }
        this._viewCache = [];
    }
    /**
     * Inserts a view for a new item, either from the cache or by creating a new
     * one. Returns `undefined` if the item was inserted into a cached view.
     */
    _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
        const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
        if (cachedView) {
            cachedView.context.$implicit = value;
            return void 0;
        }
        const viewArgs = viewArgsFactory();
        return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
    }
    /** Detaches the view at the given index and inserts into the view cache. */
    _detachAndCacheView(index, viewContainerRef) {
        const detachedView = viewContainerRef.detach(index);
        this._maybeCacheView(detachedView, viewContainerRef);
    }
    /** Moves view at the previous index to the current index. */
    _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
        const view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        view.context.$implicit = value;
        return view;
    }
    /**
     * Cache the given detached view. If the cache is full, the view will be
     * destroyed.
     */
    _maybeCacheView(view, viewContainerRef) {
        if (this._viewCache.length < this.viewCacheSize) {
            this._viewCache.push(view);
        }
        else {
            const index = viewContainerRef.indexOf(view);
            if (index === -1) {
                view.destroy();
            }
            else {
                viewContainerRef.remove(index);
            }
        }
    }
    /** Inserts a recycled view from the cache at the given index. */
    _insertViewFromCache(index, viewContainerRef) {
        const cachedView = this._viewCache.pop();
        if (cachedView) {
            viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
    }
};
export { ArrayDataSource, _ViewRepeaterOperation, _VIEW_REPEATER_STRATEGY, _RecycleViewRepeaterStrategy };
