import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

(async () => {
  const app = await createApplication(appConfig);
  const webComp = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('miles-app', webComp);
})();
