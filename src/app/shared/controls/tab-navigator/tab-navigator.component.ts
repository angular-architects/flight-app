import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-navigator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-navigator.component.html',
  styleUrls: ['./tab-navigator.component.css'],
})
export class TabNavigatorComponent {
  @Input() page = 0;
  @Input() pageCount = 0;
  @Output() pageChange = new EventEmitter<number>();

  prev(): void {
    this.page--;
    if (this.page < 0) {
      this.page = this.pageCount - 1;
    }
    this.pageChange.emit(this.page);
  }

  next(): void {
    this.page++;
    if (this.page >= this.pageCount) {
      this.page = 0;
    }
    this.pageChange.emit(this.page);
  }
}
