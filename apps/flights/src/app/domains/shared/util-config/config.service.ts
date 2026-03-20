import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config, configSchema } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _config = httpResource(
    () => ({
      url: './assets/config.json',
    }),
    {
      parse: configSchema.parse,
    }
  );

  readonly config = this._config.asReadonly();
}
