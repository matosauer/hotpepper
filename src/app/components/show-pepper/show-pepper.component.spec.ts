import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPepperComponent } from './show-pepper.component';

describe('ShowPepperComponent', () => {
  let component: ShowPepperComponent;
  let fixture: ComponentFixture<ShowPepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
