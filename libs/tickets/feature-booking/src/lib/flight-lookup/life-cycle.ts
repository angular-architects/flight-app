import {
  Directive,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  standalone: true,
})
export class LifeCycle implements OnInit, OnChanges, OnDestroy {
  private initSubject = new Subject<void>();
  private changesSubject = new Subject<SimpleChanges>();
  private destroySubject = new Subject<void>();

  readonly init$ = this.initSubject.asObservable();
  readonly changes$ = this.initSubject.asObservable();
  readonly destroy$ = this.destroySubject.asObservable();

  ngOnInit(): void {
    this.initSubject.next();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesSubject.next(changes);
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
  }
}
