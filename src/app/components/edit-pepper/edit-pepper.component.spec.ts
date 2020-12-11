import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPepperComponent } from './edit-pepper.component';

describe('EditPepperComponent', () => {
  let component: EditPepperComponent;
  let fixture: ComponentFixture<EditPepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
