import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../shared/controls/tab/tab.component';

@Component({
    selector: 'app-about',
    imports: [CommonModule, TabComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {}
