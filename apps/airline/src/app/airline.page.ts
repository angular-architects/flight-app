import { Component } from "@angular/core";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { tap } from "rxjs";

@Component({
  selector: 'app-airline',
  template: `
    <h1>Airline</h1>
  `
})
export class AirlinePage {
  hello = rxMethod<string>(tap(() => console.log('hello')))
}