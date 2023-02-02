import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFieldDirective } from './table-field.directive';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent {
  @Input() data: Array<any> = [];

  @ContentChildren(TableFieldDirective)
  fields: QueryList<TableFieldDirective> | undefined;

  get fieldList() {
    return this.fields?.toArray();
  }
}
