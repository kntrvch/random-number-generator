import { Component } from '@angular/core';
import { RandomNumberService } from '../../services/random-number.service';

@Component({
  selector: 'app-random-number-view',
  standalone: true,
  imports: [],
  templateUrl: './random-number-view.component.html',
  styleUrl: './random-number-view.component.scss',
})
export class RandomNumberViewComponent {
  constructor(public randomNumberService: RandomNumberService) {}
}
