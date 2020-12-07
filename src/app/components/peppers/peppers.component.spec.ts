import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeppersComponent } from './peppers.component';

describe('PeppersComponent', () => {
  let component: PeppersComponent;
  let fixture: ComponentFixture<PeppersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeppersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
