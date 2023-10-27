import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FlightFilter } from '../../data';
import { FlightFilterStore } from './flight-filter.store';
import { triggerNonReactiveContext } from './reactive-context.util';

@Component({
  selector: 'app-flight-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-filter.component.html',
  styleUrls: ['./flight-filter.component.css'],
  providers: [FlightFilterStore],
})
export class FlightFilterComponent {
  @Input() set filter(filter: FlightFilter) {
    this.inputFilterForm.setValue(filter);
  }

  @Output() searchTrigger = new EventEmitter<FlightFilter>();

  inputFilterForm = inject(FormBuilder).nonNullable.group({
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
    urgent: [false],
  });

  selectedFilterControl = new FormControl(this.inputFilterForm.getRawValue(), {
    nonNullable: true,
  });

  protected localStore = inject(FlightFilterStore);

  constructor() {
    this.localStore.initInputFilterUpdate(this.inputFilterForm.valueChanges);
    this.localStore.initSelectedFilterUpdate(
      this.selectedFilterControl.valueChanges
    );
    triggerNonReactiveContext(this.localStore.selectedFilter, (trigger) => {
      this.inputFilterForm.patchValue(trigger);
    });
    triggerNonReactiveContext(this.localStore.latestFilter, (trigger) => {
      this.selectedFilterControl.setValue(trigger);
    });
    triggerNonReactiveContext(this.localStore.latestFilter, (trigger) => {
      trigger && this.searchTrigger.emit(trigger);
    });
  }
}
