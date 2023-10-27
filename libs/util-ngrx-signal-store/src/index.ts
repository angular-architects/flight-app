/**
 * Package: NgRx Signals by Marko Stanimirovic & the NgRx Team
 * Version: https://github.com/ngrx/platform/tree/main/modules/signals
 * Date:    25 Oct 2023
 */

export * from './src/index';
export * from './rxjs-interop/index';

// Patch for Angular 16, not necessary in Angular 17 👇
export * from './src/immutable-equal';
