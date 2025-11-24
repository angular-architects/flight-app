import { resource, ResourceRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { debounceTime, Subject } from 'rxjs';
import { vi } from 'vitest';
import { toSignal } from '@angular/core/rxjs-interop';

describe('createResource', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('returns resource with loaded value', async () => {
    await TestBed.runInInjectionContext(async () => {
      const ress = createResource();
      await vi.runAllTimersAsync();
      expect(ress.value()).toBe('loaded value');
    });
  });

  it('returns resource with loaded value', () => {
    TestBed.runInInjectionContext(() => {
      const input = createInput();
      input.set('Hallo');
      vi.runAllTimers();
      expect(input.value()).toBe('Hallo');
    });
  });
});

function createInput() {
  const input = new Subject<string>();
  const inputSignal = toSignal(input.pipe(debounceTime(300)), {
    initialValue: '',
  });
  return {
    value: inputSignal,
    set(value: string) {
      input.next(value);
    },
  };
}

function createResource() {
  return resource({
    loader: async () => {
      await delay(3000);
      return 'loaded value';
    },
    defaultValue: 'default value',
  });
}

function delay(msec: number): Promise<void> {
  return new Promise<void>((resolve) => setTimeout(resolve, msec));
}
