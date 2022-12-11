import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'flight-demo-luggage',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './luggage.component.html',
  styleUrls: ['./luggage.component.css'],
})
export class LuggageComponent {}
