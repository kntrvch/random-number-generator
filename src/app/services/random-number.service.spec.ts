import { TestBed } from '@angular/core/testing';

import { RandomNumberService } from './random-number.service';

describe('RandomNumberServiceService', () => {
  let service: RandomNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomNumberService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a random number string of specified length ending with a given digit, and no leading zeros', () => {
    const result = service.generateRandomNumberString(5, 7);
    expect(result.length).toBe(5);
    expect(result.endsWith('7')).toBeTrue();
    expect(result[0]).not.toBe('0'); 
  });

  it('should generate a valid number when the length is 1', () => {
    const result = service.generateRandomNumberString(1, 0);
    expect(result).toBe('0');
  });

  it('should update the signal with the generated number', () => {
    const result = service.generateRandomNumberString(4, 3);
    expect(service.generatedNumber()).toBe(result);
    expect(result[0]).not.toBe('0'); 
  });
});
