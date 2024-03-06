import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {
    const sub = new BehaviorSubject<string>('Hymne');

    sub.subscribe((str) => console.log('A', str));

    sub.next('Hallo Welt!');

    sub.subscribe((str) => console.log('B', str));
  }
}
