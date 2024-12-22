import { Component } from '@angular/core';
import { RandomNumberFormComponent } from './components/random-number-form/random-number-form.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RandomNumberViewComponent } from './components/random-number-view/random-number-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RandomNumberFormComponent, RandomNumberViewComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'random-number-generator';
}
