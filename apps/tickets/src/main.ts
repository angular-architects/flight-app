// import { initFederation } from '@angular-architects/module-federation';

(async () => {
  //
  // Module Federation commented out to simplify further labs.
  // Feel free to uncomment this again.
  //

  // try {
  //   await initFederation('/assets/mf.manifest.json');
  // }
  // catch(e) {
  //   console.error(e);
  // }

  await import('./bootstrap');
})();
