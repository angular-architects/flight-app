import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-errors',
  template: `
    @let control = group().get(controlName());
    @if (control) {
      @if (control.hasError('required')) {
        <div class="alert alert-danger">
          Field is required
        </div>
      }

      @if (control.hasError('minlength')) {
        <div class="alert alert-danger">
          Field requires 3 characters
        </div>
      }

      @if (control.hasError('invalidCity')) {
        <div class="alert alert-danger">
          This city is not allowed, use one of these: {{control.getError('invalidCity')}}
        </div>
      }
    }`
})
export class FormErrors {
  group = input.required<FormGroup>()
  controlName = input.required<string>()
}
