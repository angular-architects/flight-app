import { Dialog } from '@angular/cdk/dialog';
import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickWithWarning]',
  standalone: true,
})
export class ClickWithWarningDirective {
  @Input() warning = 'Are you sure?';
  @Output() appClickWithWarning = new EventEmitter<void>();

  @HostBinding('class') classBinding = 'btn btn-danger';

  dialog = inject(Dialog);

  @HostListener('click', ['$event.shiftKey'])
  handleClick(shiftKey: boolean): void {
    if (shiftKey || confirm(this.warning)) {
      this.appClickWithWarning.emit();
    }
  }
}
