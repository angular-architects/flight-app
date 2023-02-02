import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appCustomTemplateOutlet]',
  standalone: true,
})
export class CustomTemplateOutletDirective {
  @Input('appCustomTemplateOutlet') template: TemplateRef<unknown> | undefined;
  @Input('appCustomTemplateOutletContext') context: any;

  viewContainer = inject(ViewContainerRef);

  ngOnInit(): void {
    if (!this.template) {
      return;
    }
    this.viewContainer.clear();

    const ref = this.viewContainer.createEmbeddedView(
      this.template,
      this.context
    );

    // Get first projected node
    // const nativeElement = ref.rootNodes[0]
  }
}
