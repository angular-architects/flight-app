/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
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

export type NamedCallStateComputed<Prop extends string> = {
  [K in Prop as `${K}Loading`]: Signal<boolean>;
} & {
  [K in Prop as `${K}Loaded`]: Signal<boolean>;
} & {
  [K in Prop as `${K}Error`]: Signal<string | null>;
};

export type CallStateFeatureResult<Prop extends string> = {
  state: NamedCallState<Prop>;
  signals: NamedCallStateComputed<Prop>;
  methods: {};
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
  //;
  const { callStateKey, errorKey, loadedKey, loadingKey } =
    getCallStateKeys(config);

  const feature = signalStoreFeature(
    withState({ [callStateKey]: 'init' } as any),
    withComputed((state) => ({
      [loadingKey]: computed(() => state[callStateKey]() === 'loading'),
      [loadedKey]: computed(() => state[callStateKey]() === 'loaded'),
      [errorKey]: computed(() => {
        const v = state[callStateKey]();
        return typeof v === 'object' ? v.error : null;
      }),
    }))
  );

  return feature as SignalStoreFeature<
    EmptyFeatureResult,
    CallStateFeatureResult<Prop>
  >;
}

export function setLoading<Prop extends string>(
  prop: Prop
): NamedCallState<Prop> {
  return { [`${prop}CallState`]: 'loading' } as any;
}

export function setLoaded<Prop extends string>(
  prop: Prop
): NamedCallState<Prop> {
  return { [`${prop}CallState`]: 'loaded' } as any;
}

export function setError<Prop extends string>(
  prop: Prop,
  error: string
): NamedCallState<Prop> {
  return { [`${prop}CallState`]: { error } } as any;
}
