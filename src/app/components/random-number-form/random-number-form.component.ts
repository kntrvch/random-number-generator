import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RandomNumberService } from '../../services/random-number.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random-number-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './random-number-form.component.html',
  styleUrl: './random-number-form.component.scss',
})
export class RandomNumberFormComponent {
  numberForm: FormGroup;
  interval: any;

  constructor(
    private fb: FormBuilder,
    public randomNumberService: RandomNumberService
  ) {
    this.numberForm = this.fb.group({
      favoriteNumber: [0, Validators.required],
      numberLength: [2, [Validators.required, Validators.min(2)]],
    });
  }

  onSubmit() {
    if (this.numberForm.valid) {
      const { favoriteNumber, numberLength } = this.numberForm.value;
      this.randomNumberService.updateRandomNumber(numberLength, favoriteNumber);
    }
  }
}
