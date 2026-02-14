import { A, NINE, Z, ZERO } from "@nf-internal/chunk-IANTZR4E";
// node_modules/@angular/cdk/fesm2022/typeahead.mjs
import { Subject } from "rxjs";
import { tap, debounceTime, filter, map } from "rxjs/operators";
var DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
var Typeahead = class {
    _letterKeyStream = new Subject();
    _items = [];
    _selectedItemIndex = -1;
    /** Buffer for the letters that the user has pressed */
    _pressedLetters = [];
    _skipPredicateFn;
    _selectedItem = new Subject();
    selectedItem = this._selectedItem;
    constructor(initialItems, config) {
        const typeAheadInterval = typeof config?.debounceInterval === "number" ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
        if (config?.skipPredicate) {
            this._skipPredicateFn = config.skipPredicate;
        }
        if ((typeof ngDevMode === "undefined" || ngDevMode) && initialItems.length && initialItems.some(item => typeof item.getLabel !== "function")) {
            throw new Error("KeyManager items in typeahead mode must implement the `getLabel` method.");
        }
        this.setItems(initialItems);
        this._setupKeyHandler(typeAheadInterval);
    }
    destroy() {
        this._pressedLetters = [];
        this._letterKeyStream.complete();
        this._selectedItem.complete();
    }
    setCurrentSelectedItemIndex(index) {
        this._selectedItemIndex = index;
    }
    setItems(items) {
        this._items = items;
    }
    handleKey(event) {
        const keyCode = event.keyCode;
        if (event.key && event.key.length === 1) {
            this._letterKeyStream.next(event.key.toLocaleUpperCase());
        }
        else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
            this._letterKeyStream.next(String.fromCharCode(keyCode));
        }
    }
    /** Gets whether the user is currently typing into the manager using the typeahead feature. */
    isTyping() {
        return this._pressedLetters.length > 0;
    }
    /** Resets the currently stored sequence of typed letters. */
    reset() {
        this._pressedLetters = [];
    }
    _setupKeyHandler(typeAheadInterval) {
        this._letterKeyStream.pipe(tap(letter => this._pressedLetters.push(letter)), debounceTime(typeAheadInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe(inputString => {
            for (let i = 1; i < this._items.length + 1; i++) {
                const index = (this._selectedItemIndex + i) % this._items.length;
                const item = this._items[index];
                if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
                    this._selectedItem.next(item);
                    break;
                }
            }
            this._pressedLetters = [];
        });
    }
};
export { Typeahead };
