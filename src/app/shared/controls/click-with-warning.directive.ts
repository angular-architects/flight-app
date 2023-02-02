import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appClickWithWarning]',
  standalone: true,
})
export class ClickWithWarningDirective implements OnInit {
  elementRef = inject(ElementRef);

  ngOnInit(): void {
    this.elementRef.nativeElement.setAttribute('class', 'btn btn-danger');
  }
}
