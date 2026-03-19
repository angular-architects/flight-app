import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _config = httpResource<Config>(() => ({
    url: './assets/config.json',
  }));

  readonly config = this._config.asReadonly();
}
