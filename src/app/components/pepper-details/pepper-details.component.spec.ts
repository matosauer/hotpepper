import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepperDetailsComponent } from './pepper-details.component';

describe('PepperDetailsComponent', () => {
  let component: PepperDetailsComponent;
  let fixture: ComponentFixture<PepperDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepperDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PepperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
