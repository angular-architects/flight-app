/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Signal, computed } from '@angular/core';
import {
  SignalStoreFeature,
  signalStoreFeature,
  withComputed,
  withState,
} from '@ngrx/signals';

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

function getCallStateKeys(config: { prop: string }) {
  return {
    callStateKey: `${config.prop}CallState`,
    loadingKey: `${config.prop}Loading`,
    loadedKey: `${config.prop}Loaded`,
    errorKey: `${config.prop}Error`,
  };
}

// Warum funktioniert diese Überladung nicht?
// Die entspricht dem Rückgabewert eigentlich besser
// export function withCallState<Prop extends string>(config: {
//     prop: Prop;
//   }): SignalStoreFeature<
//     { state: NamedCallState<Prop>; signals: {}; methods: {} },
//     {
//       state: {};
//       signals: NamedCallStateComputed<Prop>;
//       methods: {};
//     }
//   >;

// Warum kann ich diese Überladung nicht als Implementation-Signatur verwenden?
export function withCallState<Prop extends string>(config: {
  prop: Prop;
}): SignalStoreFeature<
  { state: {}; signals: {}; methods: {} },
  {
    state: NamedCallState<Prop>;
    signals: NamedCallStateComputed<Prop>;
    methods: {};
  }
>;
export function withCallState(config: { prop: string }): SignalStoreFeature {
  const { callStateKey, errorKey, loadedKey, loadingKey } =
    getCallStateKeys(config);

  return signalStoreFeature(
    withState({
      [callStateKey]: 'init',
    } as any),
    withComputed((state) => ({
      [loadingKey]: computed(() => state[callStateKey]() === 'loading'),
      [loadedKey]: computed(() => state[callStateKey]() === 'loaded'),
      [errorKey]: computed(() => {
        const v = state[callStateKey]();
        return typeof v === 'object' ? v.error : null;
      }),
    }))
  );
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
