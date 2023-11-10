import { computed } from '@angular/core';
import { signalStoreFeature, withMethods, withState } from '@ngrx/signals';

export type CallState = 'init' | 'loading' | 'loaded' | { error: unknown };

export type CallStateSlice = { callState: CallState };
export const initCallStateSlice: CallStateSlice = { callState: 'init' };

export function withCallState() {
  return signalStoreFeature(
    withState(initCallStateSlice),
    withMethods(({ callState }) => ({
      loading: computed(() => callState() === 'loading'),
      loaded: computed(() => callState() === 'loaded'),
      error: computed(() => {
        const state = callState();
        return typeof state === 'object' ? state.error : null;
      }),
    }))
  );
}

export function setLoading(): CallStateSlice {
  return { callState: 'loading' };
}

export function setLoaded(): CallStateSlice {
  return { callState: 'loaded' };
}

export function setError(error: string): CallStateSlice {
  return { callState: { error } };
}
