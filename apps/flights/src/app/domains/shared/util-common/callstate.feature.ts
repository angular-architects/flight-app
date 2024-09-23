import { Signal, computed } from '@angular/core';
import {
  SignalStoreFeature,
  signalStoreFeature,
  withComputed,
  withState,
} from '@ngrx/signals';
import { EmptyFeatureResult } from '@ngrx/signals/src/signal-store-models';

export type CallState = 'init' | 'loading' | 'loaded' | { error: string };

export type NamedCallState<Prop extends string> = {
  [K in Prop as `${K}CallState`]: CallState;
};

export type Slice<T> = {
  [K in keyof T]: Signal<T[K]>;
};

export type NamedCallStateComputed<Prop extends string> = {
  [K in Prop as `${K}Loading`]: Signal<boolean>;
} & {
  [K in Prop as `${K}Loaded`]: Signal<boolean>;
} & {
  [K in Prop as `${K}Error`]: Signal<string | null>;
};

export type CallStateFeatureResult<Prop extends string> = EmptyFeatureResult & {
  state: NamedCallState<Prop>;
  computed: NamedCallStateComputed<Prop>;
};

function getCallStateKeys(config: { prop: string }) {
  return {
    callStateKey: `${config.prop}CallState`,
    loadingKey: `${config.prop}Loading`,
    loadedKey: `${config.prop}Loaded`,
    errorKey: `${config.prop}Error`,
  };
}

export function withCallState<Prop extends string>(config: {
  prop: Prop;
}): SignalStoreFeature<EmptyFeatureResult, CallStateFeatureResult<Prop>> {
  const { callStateKey, errorKey, loadedKey, loadingKey } =
    getCallStateKeys(config);

  const feature = signalStoreFeature(
    withState({ [callStateKey]: 'init' }),
    withComputed((state: Record<string, Signal<unknown>>) => {
      const callState = state[callStateKey] as Signal<CallState>;
      return {
        [loadingKey]: computed(() => callState() === 'loading'),
        [loadedKey]: computed(() => callState() === 'loaded'),
        [errorKey]: computed(() => {
          const v = callState();
          return typeof v === 'object' ? v.error : null;
        }),
      };
    })
  );

  return feature as SignalStoreFeature<
    EmptyFeatureResult,
    CallStateFeatureResult<Prop>
  >;
}

export function setLoading<Prop extends string>(
  prop: Prop
): NamedCallState<Prop> {
  return { [`${prop}CallState`]: 'loading' } as NamedCallState<Prop>;
}

export function setLoaded<Prop extends string>(
  prop: Prop
): NamedCallState<Prop> {
  return { [`${prop}CallState`]: 'loaded' } as NamedCallState<Prop>;
}

export function setError<Prop extends string>(
  prop: Prop,
  error: string
): NamedCallState<Prop> {
  return { [`${prop}CallState`]: { error } } as NamedCallState<Prop>;
}
