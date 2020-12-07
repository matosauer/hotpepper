import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamblingsComponent } from './ramblings.component';

describe('RamblingsComponent', () => {
  let component: RamblingsComponent;
  let fixture: ComponentFixture<RamblingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamblingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
