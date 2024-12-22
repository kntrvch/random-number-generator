import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumberViewComponent } from './random-number-view.component';
import { RandomNumberService } from '../../services/random-number.service';

describe('RandomNumberViewComponent', () => {
  let component: RandomNumberViewComponent;
  let fixture: ComponentFixture<RandomNumberViewComponent>;
  let randomNumberService: RandomNumberService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomNumberViewComponent],
      providers: [RandomNumberService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomNumberViewComponent);
    component = fixture.componentInstance;
    randomNumberService = TestBed.inject(RandomNumberService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the generated number', () => {
    const ending = 7;
    const length = 5;

    randomNumberService.generateRandomNumberString(length, ending);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const generatedNumber = randomNumberService.generatedNumber();

    expect(compiled.querySelector('h2').textContent).toContain(generatedNumber);
    expect(generatedNumber.length).toBe(length); 
    expect(generatedNumber.endsWith(ending.toString())).toBeTrue(); 
  });

  it('should change the number every 5 seconds', (done) => {
    jasmine.clock().install();
    jasmine.clock().mockDate(); 

    fixture.detectChanges(); 

    const initialNumber = randomNumberService.updateRandomNumber(5, 7); 

    jasmine.clock().tick(5000); 

    fixture.detectChanges(); 

    const newNumber = randomNumberService.generatedNumber(); 

    expect(newNumber).not.toEqual(initialNumber);
    done(); 
  });

  afterEach(() => {
    jasmine.clock().uninstall(); 
  });
});
