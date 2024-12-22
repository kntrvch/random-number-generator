import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumberFormComponent } from './random-number-form.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('RandomNumberFormComponent', () => {
  let component: RandomNumberFormComponent;
  let fixture: ComponentFixture<RandomNumberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomNumberFormComponent],
      providers: [provideAnimations()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomNumberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
