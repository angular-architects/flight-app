import "@nf-internal/chunk-54JPAORE";
// node_modules/@ngrx/signals/fesm2022/ngrx-signals-testing.mjs
import { isWritableStateSource } from "@ngrx/signals";
function unprotected(source) {
    if (isWritableStateSource(source)) {
        return source;
    }
    throw new Error("@ngrx/signals: The provided source is not writable.");
}
export { unprotected };
