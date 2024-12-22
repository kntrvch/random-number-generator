import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomNumberService {
  generatedNumber = signal<string>('');
  interval: any;

  updateRandomNumber(numberLength: number, lastDigit: number): string {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.generateRandomNumberString(numberLength, lastDigit);
    }, 5000);
    return this.generateRandomNumberString(numberLength, lastDigit);
  }

  // Since we don't have more requirements and performance is valued, we generate number strings instead of actual numbers
  generateRandomNumberString(numberLength: number, lastDigit: number): string {
    if (numberLength === 1) {
      this.generatedNumber.set(lastDigit.toString());
      return lastDigit.toString();
    }

    // Prevent first digit to be zero
    const firstDigit = Math.floor(Math.random() * 9) + 1;

    // Generate N-2 length string, then append the ending digit
    const middlePart = Array.from({ length: numberLength - 2 }, () =>
      Math.floor(Math.random() * 10).toString()
    ).join('');

    const result = `${firstDigit}${middlePart}${lastDigit}`;

    this.generatedNumber.set(result);
    return result;
  }
}
