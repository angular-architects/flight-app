import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-status-toggle',
  imports: [],
  templateUrl: './status-toggle.component.html',
  styleUrls: ['./status-toggle.component.css'],
})
export class StatusToggleComponent {
  @Input() status = false;
  @Output() statusChange = new EventEmitter<boolean>();

  toggle(): void {
    this.status = !this.status;
    this.statusChange.next(this.status);
  }
}
